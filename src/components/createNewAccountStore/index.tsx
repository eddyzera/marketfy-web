import { zodResolver } from '@hookform/resolvers/zod'
import React from 'react'
import { useForm } from 'react-hook-form'

import { formCreateNewAccountStore } from '@/utils/schema/accountStore'
import { FormCreateNewAccountStoreSchemaType } from '@/utils/types/schema'

import { TextField } from '../form/textField'
import { Button } from '../ui/button'
import {
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '../ui/dialog'
import { Form } from '../ui/form'

export const CreateNewAccountStore: React.FunctionComponent = () => {
  const form = useForm<FormCreateNewAccountStoreSchemaType>({
    resolver: zodResolver(formCreateNewAccountStore),
  })
  return (
    <DialogContent>
      <DialogHeader>
        <DialogTitle>Create a new account</DialogTitle>
      </DialogHeader>
      <Form {...form}>
        <form action="" className="space-y-5">
          <div className="space-y-1">
            <TextField<FormCreateNewAccountStoreSchemaType>
              name="name"
              label="Company Name"
              placeholder="store"
              type="text"
            />
          </div>
          <DialogFooter>
            <DialogClose asChild>
              <Button>Cancel</Button>
            </DialogClose>
            <Button className="bg-cyan-950 text-white hover:bg-cyan-950/90">
              Save
            </Button>
          </DialogFooter>
        </form>
      </Form>
    </DialogContent>
  )
}
