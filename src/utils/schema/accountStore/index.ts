import { z } from 'zod'

export const formCreateNewAccountStore = z.object({
  name: z.string(),
})
