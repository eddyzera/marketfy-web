import { z } from 'zod'

export const formGlobalSearchSchema = z.object({
  params: z.string(),
})
