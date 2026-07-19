import { z } from 'zod'
import bcrypt from 'bcryptjs'
import { prisma } from '../../utils/database'

const { hash } = bcrypt

const schema = z.object({
  email: z.string().email(),
  name: z.string().min(2),
  password: z.string().min(6)
})

export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  const parsed = schema.safeParse(body)
  
  if (!parsed.success) {
    return { error: 'Invalid input', details: parsed.error }
  }
  
  const { email, name, password } = parsed.data
  
  // Check if user exists
  const existing = await prisma.user.findUnique({ where: { email } })
  if (existing) {
    return { error: 'User already exists' }
  }
  
  // Hash password
  const hashedPassword = await hash(password, 10)
  
  // Create user
  const user = await prisma.user.create({
    data: {
      email,
      name,
      password: hashedPassword
    }
  })
  
  return { 
    success: true, 
    user: { id: user.id, email: user.email, name: user.name } 
  }
})