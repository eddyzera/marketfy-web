import { z } from 'zod'

export const formSignInSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
})

export const formSignUpSchema = z.object({
  name: z.string().min(3),
  email: z.string().email(),
  password: z.string().min(6),
  confirm_password: z.string().min(6),
})
