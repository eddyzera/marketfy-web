import { zodResolver } from '@hookform/resolvers/zod'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import React from 'react'
import { useForm } from 'react-hook-form'

import { TextField } from '@/components/form/textField'
import { Button } from '@/components/ui/button'
import { Form } from '@/components/ui/form'
import { Separator } from '@/components/ui/separator'
import { formSignUpSchema } from '@/utils/schema/auth'
import { FormSignUpSchemaType } from '@/utils/types/schema'

export const SignUpForm: React.FunctionComponent = () => {
  const form = useForm<FormSignUpSchemaType>({
    resolver: zodResolver(formSignUpSchema),
  })
  const handleSubmitForm = (data: FormSignUpSchemaType) => {
    console.log('data ====>', data)
  }
  return (
    <>
      <Helmet title="Register" />
      <section className="min-w-96 rounded-md border bg-white p-6">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(handleSubmitForm)}
            className="space-y-4"
          >
            <div className="flex flex-col items-start space-y-1">
              <h2 className="text-xl text-foreground">Register</h2>
              <p className="text-sm text-foreground">
                Create your account now.
              </p>
            </div>
            <div className="space-y-1">
              <TextField<FormSignUpSchemaType>
                name="name"
                label="Name"
                placeholder="John Doe"
              />
            </div>
            <div className="space-y-1">
              <TextField<FormSignUpSchemaType>
                name="email"
                label="E-mail"
                placeholder="email@example.com"
                type="email"
              />
            </div>
            <div className="space-y-1">
              <TextField<FormSignUpSchemaType>
                name="password"
                label="Password"
                placeholder="example123@"
                type="password"
              />
            </div>
            <div className="space-y-1">
              <TextField<FormSignUpSchemaType>
                name="confirm_password"
                label="Confirm Password"
                placeholder="example123@"
                type="password"
              />
            </div>
            <Separator />
            <Button
              type="submit"
              className="w-full bg-cyan-950 text-white hover:bg-cyan-950/90"
            >
              Create account
            </Button>
            <Button variant="link" className="w-full" size="sm" asChild>
              <Link to="/auth/sign-in">Already registered? Sign in</Link>
            </Button>
          </form>
        </Form>
      </section>
    </>
  )
}
