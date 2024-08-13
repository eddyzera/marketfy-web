import { Bell, Ellipsis } from 'lucide-react'
import React from 'react'

import { Button } from '../ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

export const AccountSign: React.FunctionComponent = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="flex select-none items-center gap-2 rounded-full active:bg-slate-500 group"
        >
          <Bell className="w-4 h-4 group-hover:text-cyan-900" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-96">
        <DropdownMenuLabel className="flex flex-col gap-4">
          <h2 className="text-base font-bold">Notifications</h2>
          <nav className="flex flex-col items-start h-full">
            <li className="flex flex-col gap-4">
              <p className="text-foreground font-extralight">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
              <div className="flex items-center justify-between">
                <p className="text-sm text-cyan-800 font-extralight">Jul 4</p>
                <Button variant="outline" className="h-6 w-6" size="icon">
                  <Ellipsis className="h-4 w-4" />
                </Button>
              </div>
            </li>
          </nav>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuLabel>
          <div className="flex items-center justify-between">
            <p>1 of 1 notification</p>
            <Button variant="link" className="text-cyan-900 no-underline">
              View all
            </Button>
          </div>
        </DropdownMenuLabel>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
