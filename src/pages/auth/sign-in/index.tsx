import { TextField } from '@/components/form'
import { Button } from '@/components/ui/button'
import { Form } from '@/components/ui/form'
import { Separator } from '@/components/ui/separator'
import { Helmet } from 'react-helmet-async'
import { formSignInSchema } from '@/utils/schema/auth'
import { FormSignInSchemaType } from '@/utils/types/schema'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'

export const SignIn = () => {
  const form = useForm<FormSignInSchemaType>({
    resolver: zodResolver(formSignInSchema),
  })
  const handleSubmitForm = (data: FormSignInSchemaType) => {
    console.log('data ====>', data)
  }
  return (
    <>
      <Helmet title="Login" />
      <section className="min-w-96 rounded-md border p-6">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(handleSubmitForm)}
            className="space-y-5"
          >
            <div className="flex flex-col items-start space-y-1">
              <h2 className="text-2xl text-foreground">Log in</h2>
              <p className="text-sm text-foreground">
                Enter your email below to login to your account
              </p>
            </div>
            <div className="space-y-1">
              <TextField<FormSignInSchemaType>
                name="email"
                label="E-mail"
                placeholder="email@example.com"
                type="email"
              />
            </div>
            <div className="space-y-1">
              <TextField<FormSignInSchemaType>
                name="password"
                label="Password"
                placeholder="example123@"
                type="password"
              />
            </div>
            <Separator />
            <Button
              type="submit"
              className="w-full bg-cyan-950 text-white hover:bg-cyan-950/90"
            >
              Sign in with e-mail
            </Button>
            <Button variant="link" className="w-full" size="sm" asChild>
              <Link to="/auth/sign-up">Create new account</Link>
            </Button>
          </form>
        </Form>
      </section>
    </>
  )
}
