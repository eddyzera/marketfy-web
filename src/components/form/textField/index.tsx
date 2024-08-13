import React from 'react'
import { InputHTMLAttributes } from 'react'
import { FieldValues, Path, useFormContext } from 'react-hook-form'

import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'

interface TextFieldProps<T extends FieldValues>
  extends InputHTMLAttributes<HTMLInputElement> {
  name: Path<T>
  label?: string
  icon?: React.ReactNode
}

export const TextField = <T extends FieldValues>({
  name,
  label = '',
  icon = '',
  className,
  ...props
}: TextFieldProps<T>) => {
  const hasIcon = icon
    ? 'pl-8'
    : ''
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
              {icon}
              <Input
                {...field}
                {...props}
                className={`w-full ${className} ${hasIcon}`}
              />
            </div>
          </FormControl>
        </FormItem>
      )}
    />
  )
}
