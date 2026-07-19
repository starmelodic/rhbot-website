import { z } from 'zod'
import { requireAuth } from '../../utils/auth'
import { whatsappService } from '../../services/whatsapp.service'

const schema = z.object({
  recipient: z.string().min(10).max(15),
  content: z.string().min(1).max(4096)
})

export default defineEventHandler(async (event) => {
  await requireAuth(event)
  
  const body = await readBody(event)
  const parsed = schema.safeParse(body)
  
  if (!parsed.success) {
    return { error: 'Invalid input' }
  }
  
  const user = event.context.user
  const { recipient, content } = parsed.data
  
  try {
    const result = await whatsappService.sendMessage(user.id, recipient, content)
    return { success: true, result }
  } catch (error: any) {
    return { error: error.message }
  }
})