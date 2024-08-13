import { z } from 'zod'

export const formProductSchema = z.object({
  product_detail: z.object({
    name: z.string(),
    description: z.string(),
  }),
  product_status: z.enum(['Draft', 'Active', 'Archived']),
})
