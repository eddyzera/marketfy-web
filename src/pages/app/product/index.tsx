import { Badge } from '@/components/ui/badge'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { ChevronLeft } from 'lucide-react'
import { Helmet } from 'react-helmet-async'
import { Form } from '@/components/ui/form'
import { SelectField, TextField } from '@/components/form'
import { FormProductSchemaType } from '@/utils/types/schema'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { formProductSchema } from '@/utils/schema/product'
import { TextAreaField } from '@/components/form/textAreaField'

export const Product = () => {
  const form = useForm<FormProductSchemaType>({
    resolver: zodResolver(formProductSchema),
  })
  const handleSubmitForm = (data: FormProductSchemaType) => {
    console.log('data ====>', data)
  }
  return (
    <>
      <Helmet title="Product" />
      <section className="space-y-4 py-8">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(handleSubmitForm)}
            className="space-y-8"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <Button size="icon" variant="outline">
                  <ChevronLeft className="h-4 w-4" />
                </Button>
                <h2 className="text-foreground text-2xl font-normal">
                  Add Product
                </h2>
                <Badge>in stock</Badge>
              </div>
              <div className="flex items-center gap-4">
                <Button>Discard</Button>
                <Button
                  type="submit"
                  className="bg-cyan-950 text-white hover:bg-cyan-950/90"
                >
                  Save Product
                </Button>
              </div>
            </div>
            <div className="grid grid-cols-product gap-8">
              <div className="flex flex-col items-start gap-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Product Details</CardTitle>
                    <CardDescription>
                      Lipsum dolor sit amet, consectetur adipiscing elit
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="space-y-1">
                      <TextField<FormProductSchemaType>
                        name="product_detail.name"
                        label="Name"
                        type="text"
                      />
                    </div>
                    <div className="space-y-1">
                      <TextAreaField<FormProductSchemaType>
                        name="product_detail.description"
                        label="Description"
                      />
                    </div>
                  </CardContent>
                </Card>
              </div>
              <div className="flex flex-col items-start gap-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Product Status</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <SelectField<FormProductSchemaType>
                      name="product_status"
                      label="Status"
                      options={[
                        'Draft',
                        'Active',
                        'Archived',
                      ]}
                    />
                  </CardContent>
                </Card>
              </div>
            </div>
          </form>
        </Form>
      </section>
    </>
  )
}
