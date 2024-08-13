/* eslint-disable @stylistic/max-len */
import { Link } from 'react-router-dom'
import React from 'react'

import { Separator } from '../ui/separator'
import { AccountStore } from '../accountStore'
import { navLinks } from '@/utils/constants/links'

export const Navigation: React.FunctionComponent = () => {
  return (
    <aside className="fixed inset-y-0 bottom-0 left-0 top-0 z-10 hidden w-72 flex-col justify-between border-r bg-white sm:flex">
      <div className="flex flex-col gap-4">
        <div className="flex flex-col items-center gap-2 p-5">
          <AccountStore />
        </div>
        <Separator />
        <nav className="flex flex-col items-start gap-4 px-4 sm:py-5">
          {navLinks.map(link => (
            <Link
              key={link.label}
              to={link.to}
              className="flex w-full items-center gap-2 rounded-lg p-2 text-sm transition-all hover:bg-zinc-200/90"
            >
              {link.icon}
              <span>{link.label}</span>
            </Link>
          ))}
        </nav>
      </div>
    </aside>
  )
}
