import { SelectHTMLAttributes } from 'react'
import { FieldValues, Path, useFormContext } from 'react-hook-form'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from '@/components/ui/form'

interface SelectFieldProps<T extends FieldValues>
  extends SelectHTMLAttributes<HTMLSelectElement> {
  name: Path<T>
  options: Array<string>
  label?: string
}

export const SelectField = <T extends FieldValues>({
  name,
  label = '',
  options,
  ...props
}: SelectFieldProps<T>) => {
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
              <Select
                onValueChange={field.onChange}
                defaultValue={field.value}
              >
                <FormControl>
                  <SelectTrigger>
                    <SelectValue
                      {...props}
                      placeholder="Select a verified email to display"
                    />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {options.map(option => (
                    <SelectItem
                      key={option}
                      value={option}
                    >
                      {option}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </FormControl>
        </FormItem>
      )}
    />
  )
}
