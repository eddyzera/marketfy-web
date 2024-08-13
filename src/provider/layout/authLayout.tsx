/* eslint-disable @stylistic/max-len */
import { ShoppingBag } from 'lucide-react'
import React from 'react'
import { Outlet } from 'react-router-dom'

export const AuthLayout: React.FunctionComponent = () => {
  return (
    <div className="grid min-h-screen grid-cols-2 antialiased">
      <div className="flex h-full flex-col justify-between border-r border-foreground/5 bg-muted p-10 text-muted-foreground">
        <div className="flex items-center gap-3 text-lg font-medium text-foreground">
          <ShoppingBag className="h-5 w-5" />
          <span className="font-semibold">marketfy.shop</span>
        </div>
        <footer className="text-sm">
          Painel do parceiro &copy; Marketfy {new Date().getFullYear()}
        </footer>
      </div>
      <div className="relative flex flex-col items-center justify-center">
        <Outlet />
      </div>
    </div>
  )
}
