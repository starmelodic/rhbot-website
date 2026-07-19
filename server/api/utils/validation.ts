import { z } from 'zod'

export const phoneSchema = z.string()
  .regex(/^[0-9]{10,15}$/, 'Phone number must be 10-15 digits')
  .transform((val) => val.replace(/^0/, '62')) // Indonesian format

export const messageSchema = z.object({
  content: z.string().min(1).max(4096),
  recipient: phoneSchema
})

export const broadcastSchema = z.object({
  recipients: z.array(phoneSchema).min(1),
  message: z.string().min(1).max(4096)
})