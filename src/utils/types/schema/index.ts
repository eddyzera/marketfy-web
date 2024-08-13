import { z } from 'zod'

import {
  formSignInSchema,
  formSignUpSchema,
} from '../../schema/auth'

import {
  formCreateNewAccountStore,
} from '../../schema/accountStore'
import { formGlobalSearchSchema } from '@/utils/schema/globalSearch'
import { formProductSchema } from '@/utils/schema/product'

export type FormSignInSchemaType = z.infer<typeof formSignInSchema>

export type FormSignUpSchemaType = z.infer<typeof formSignUpSchema>

export type FormCreateNewAccountStoreSchemaType = z.infer<typeof formCreateNewAccountStore>

export type FormGlobalSearchSchemaType = z.infer<typeof formGlobalSearchSchema>

export type FormProductSchemaType = z.infer<typeof formProductSchema>
