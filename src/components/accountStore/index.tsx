/* eslint-disable @stylistic/max-len */
import * as React from 'react'
import { CaretSortIcon, CheckIcon } from '@radix-ui/react-icons'

import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from '@/components/ui/command'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'
import { Plus, Store } from 'lucide-react'
import { Separator } from '../ui/separator'
import { Dialog, DialogTrigger } from '../ui/dialog'
import { CreateNewAccountStore } from '../createNewAccountStore'

const stories = [
  {
    value: 'john doe store',
    label: 'john doe store',
  },
  {
    value: 'anakin store',
    label: 'anakin store',
  },
  {
    value: 'safira store',
    label: 'safira store',
  },
]

export function AccountStore() {
  const [open, setOpen] = React.useState(false)
  const [value, setValue] = React.useState('')

  return (
    <Dialog>
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            role="combobox"
            aria-expanded={open}
            className="w-full justify-between"
          >
            <div className="flex items-center gap-2">
              <Store className="h-4 w-4" />
              {value
                ? stories.find((store) => store.value === value)?.label
                : 'john doe'}
            </div>
            <CaretSortIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-full p-0">
          <Command>
            <CommandInput placeholder="Search stories..." className="h-9" />
            <CommandList>
              <CommandEmpty>No store found.</CommandEmpty>
              <CommandGroup>
                {stories.map((framework) => (
                  <CommandItem
                    key={framework.value}
                    value={framework.value}
                    onSelect={(currentValue) => {
                      setValue(currentValue === value
                        ? ''
                        : currentValue)
                      setOpen(false)
                    }}
                  >
                    <div className="flex items-center gap-2">
                      <Store className="h-4 w-4" />
                      {framework.label}
                    </div>
                    <CheckIcon
                      className={cn(
                        'ml-auto h-4 w-4',
                        value === framework.value
                          ? 'opacity-100'
                          : 'opacity-0',
                      )}
                    />
                  </CommandItem>
                ))}
              </CommandGroup>
            </CommandList>
            <Separator />
            <div className="p-1">
              <DialogTrigger asChild>
                <Button
                  variant="ghost"
                  className="flex w-full select-none items-center justify-between gap-2 text-sm"
                >
                  Create new account
                  <Plus className="h-4 w-4" />
                </Button>
              </DialogTrigger>
            </div>
          </Command>
        </PopoverContent>
      </Popover>
      <CreateNewAccountStore />
    </Dialog>
  )
}
