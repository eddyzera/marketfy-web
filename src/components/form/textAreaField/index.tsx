import { TextareaHTMLAttributes } from 'react'
import { FieldValues, Path, useFormContext } from 'react-hook-form'
import { Textarea } from '@/components/ui/textarea'

import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from '@/components/ui/form'

interface TextFieldAreaProps<T extends FieldValues>
  extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  name: Path<T>
  label?: string
}

export const TextAreaField = <T extends FieldValues>({
  name,
  label = '',
  className,
  ...props
}: TextFieldAreaProps<T>) => {
  const { control } = useFormContext<T>()
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem className="flex flex-col items-start gap-2 w-full">
          {label && (
            <FormLabel className="text-sm text-foreground">{label}</FormLabel>
          )}
          <FormControl>
            <div className="flex items-center relative w-full">
              <Textarea
                placeholder="Tell us a little bit about yourself"
                className={`resize-none ${className}`}
                {...props}
                {...field}
              />
            </div>
          </FormControl>
        </FormItem>
      )}
    />
  )
}
