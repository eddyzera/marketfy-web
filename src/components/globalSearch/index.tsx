import { Form } from '../ui/form'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { FormGlobalSearchSchemaType } from '@/utils/types/schema'
import { formGlobalSearchSchema } from '@/utils/schema/globalSearch'
import { TextField } from '../form'
import { Search } from 'lucide-react'

export const GlobalSearch = () => {
  const form = useForm<FormGlobalSearchSchemaType>({
    resolver: zodResolver(formGlobalSearchSchema),
  })
  return (
    <Form {...form}>
      <form className="w-[520px]">
        <div className="flex items-center relative w-full ">
          <TextField<FormGlobalSearchSchemaType>
            name="params"
            placeholder="Search"
            className="w-full shadow-none"
            icon={<Search className="h-4 w-4 absolute left-3" />}
          />
        </div>
      </form>
    </Form>
  )
}
