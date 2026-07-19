import { z } from 'zod'
import { requireAuth } from '../../utils/auth'
import { whatsappService } from '../../services/whatsapp.service'

const schema = z.object({
  recipients: z.array(z.string().min(10)),
  message: z.string().min(1).max(4096)
})

export default defineEventHandler(async (event) => {
  await requireAuth(event)
  
  const body = await readBody(event)
  const parsed = schema.safeParse(body)
  
  if (!parsed.success) {
    return { error: 'Invalid input' }
  }
  
  const user = event.context.user
  const { recipients, message } = parsed.data
  
  try {
    const results = await whatsappService.broadcast(user.id, recipients, message)
    return { success: true, results }
  } catch (error: any) {
    return { error: error.message }
  }
})