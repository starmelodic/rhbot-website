import pkg from 'whatsapp-web.js'
const { Client, LocalAuth, Message } = pkg

import QRCode from 'qrcode'
import { prisma } from '../utils/database'

class WhatsAppService {
  private clients: Map<string, any> = new Map()
  private qrCodes: Map<string, string> = new Map()

  async connect(userId: string) {
    // Cek apakah sudah ada session
    const existing = await prisma.whatsapp.findUnique({
      where: { userId }
    })

    const client = new Client({
      authStrategy: new LocalAuth({
        dataPath: `./whatsapp-sessions/${userId}`
      }),
      puppeteer: {
        headless: true,
        args: ['--no-sandbox', '--disable-setuid-sandbox']
      }
    })

    // Event: QR Code
    client.on('qr', async (qr: string) => {
      const qrImage = await QRCode.toDataURL(qr)
      this.qrCodes.set(userId, qrImage)
      
      // Save to database
      await prisma.whatsapp.upsert({
        where: { userId },
        update: { qrCode: qrImage, isConnected: false },
        create: { userId, qrCode: qrImage }
      })
    })

    // Event: Ready
    client.on('ready', async () => {
      console.log(`WhatsApp connected for user ${userId}`)
      this.qrCodes.delete(userId)
      
      const info = client.info
      await prisma.whatsapp.upsert({
        where: { userId },
        update: {
          isConnected: true,
          phone: info?.wid?.user || null,
          qrCode: null
        },
        create: {
          userId,
          isConnected: true,
          phone: info?.wid?.user || null
        }
      })
    })

    // Event: Message
    client.on('message', async (message: any) => {
      // Auto-reply logic
      if (message.body.toLowerCase().includes('halo')) {
        await message.reply('Halo! Ada yang bisa saya bantu? 😊')
      }
      
      // Save incoming message
      await prisma.message.create({
        data: {
          userId,
          recipient: message.from,
          content: message.body,
          status: 'delivered',
          sentAt: new Date()
        }
      })
    })

    await client.initialize()
    this.clients.set(userId, client)
    
    return { success: true }
  }

  async disconnect(userId: string) {
    const client = this.clients.get(userId)
    if (client) {
      await client.destroy()
      this.clients.delete(userId)
    }
    
    await prisma.whatsapp.update({
      where: { userId },
      data: { isConnected: false }
    })
    
    return { success: true }
  }

  async getQR(userId: string) {
    return this.qrCodes.get(userId) || null
  }

  async getStatus(userId: string) {
    const data = await prisma.whatsapp.findUnique({
      where: { userId }
    })
    return data?.isConnected || false
  }

  async sendMessage(userId: string, recipient: string, content: string) {
    const client = this.clients.get(userId)
    if (!client) {
      throw new Error('WhatsApp not connected')
    }
    
    const chatId = `${recipient}@c.us`
    const message = await client.sendMessage(chatId, content)
    
    // Save to database
    await prisma.message.create({
      data: {
        userId,
        recipient,
        content,
        status: 'sent',
        sentAt: new Date()
      }
    })
    
    return message
  }

  async broadcast(userId: string, recipients: string[], message: string) {
    const client = this.clients.get(userId)
    if (!client) {
      throw new Error('WhatsApp not connected')
    }
    
    const results = []
    for (const recipient of recipients) {
      try {
        const chatId = `${recipient}@c.us`
        await client.sendMessage(chatId, message)
        results.push({ recipient, status: 'sent' })
      } catch (error: any) {
        results.push({ recipient, status: 'failed', error: String(error) })
      }
    }
    
    // Save broadcast - recipients sebagai JSON string
    await prisma.broadcast.create({
      data: {
        userId,
        name: `Broadcast ${new Date().toLocaleString()}`,
        recipients: JSON.stringify(recipients),
        message,
        status: 'sent',
        sentAt: new Date()
      }
    })
    
    return results
  }
}

export const whatsappService = new WhatsAppService()