import { requireAuth } from '../../utils/auth'
import { prisma } from '../../utils/database'

export default defineEventHandler(async (event) => {
  await requireAuth(event)
  
  const user = event.context.user
  
  const profile = await prisma.user.findUnique({
    where: { id: user.id },
    include: {
      whatsapp: {
        select: {
          phone: true,
          isConnected: true,
          createdAt: true
        }
      },
      _count: {
        select: {
          messages: true,
          broadcasts: true
        }
      }
    }
  })
  
  return profile
})