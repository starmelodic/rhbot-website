import { z } from 'zod'
import bcrypt from 'bcryptjs'
import { sign } from 'hono/jwt'
import { prisma } from '../../utils/database'

const { compare } = bcrypt

const schema = z.object({
  email: z.string().email(),
  password: z.string()
})

export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  const parsed = schema.safeParse(body)
  
  if (!parsed.success) {
    return { error: 'Invalid input' }
  }
  
  const { email, password } = parsed.data
  
  // Find user
  const user = await prisma.user.findUnique({ where: { email } })
  if (!user) {
    return { error: 'Invalid credentials' }
  }
  
  // Check password
  const valid = await compare(password, user.password)
  if (!valid) {
    return { error: 'Invalid credentials' }
  }
  
  // Generate JWT
  const token = await sign(
    { id: user.id, email: user.email, name: user.name },
    process.env.JWT_SECRET || 'secret'
  )
  
  return {
    token,
    user: { id: user.id, email: user.email, name: user.name }
  }
})