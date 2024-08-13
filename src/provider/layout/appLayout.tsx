import { Header } from '@/components/header'
import { Navigation } from '@/components/navigation'
import React from 'react'
import { Outlet } from 'react-router-dom'

export const AppLayout: React.FunctionComponent = () => {
  return (
    <div className="flex h-screen w-full">
      <Navigation />
      <div className="w-full">
        <Header />
        <div className="pl-96 pr-9">
          <Outlet />
        </div>
      </div>
    </div>
  )
}
