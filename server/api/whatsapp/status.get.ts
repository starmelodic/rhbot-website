import { requireAuth } from '../../utils/auth'
import { whatsappService } from '../../services/whatsapp.service'

export default defineEventHandler(async (event) => {
  await requireAuth(event)
  
  const user = event.context.user
  const status = await whatsappService.getStatus(user.id)
  const qrCode = await whatsappService.getQR(user.id)
  
  return { connected: status, qrCode }
})