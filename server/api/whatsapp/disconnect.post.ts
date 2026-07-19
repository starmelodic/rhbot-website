import { requireAuth } from '../../utils/auth'
import { whatsappService } from '../../services/whatsapp.service'

export default defineEventHandler(async (event) => {
  await requireAuth(event)
  
  const user = event.context.user
  await whatsappService.disconnect(user.id)
  
  return { success: true }
})