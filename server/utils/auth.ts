import { verify } from 'hono/jwt'

export const requireAuth = async (event: H3Event) => {
  const authHeader = getHeader(event, 'Authorization')
  
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    throw createError({
      statusCode: 401,
      message: 'Unauthorized'
    })
  }
  
  const token = authHeader.split(' ')[1]
  
  try {
    const secret = process.env.JWT_SECRET || 'secret'
    console.log('JWT_SECRET:', secret)
    
    const payload = await verify(token, secret)
    event.context.user = payload
    return payload
  } catch (error) {
    console.error('Token verification error:', error)
    throw createError({
      statusCode: 401,
      message: 'Invalid token'
    })
  }
}