import { requireAuth } from '../../utils/auth'
import { whatsappService } from '../../services/whatsapp.service'

export default defineEventHandler(async (event) => {
  // Auth
  await requireAuth(event)
  
  const user = event.context.user
  const result = await whatsappService.connect(user.id)
  
  return result
})