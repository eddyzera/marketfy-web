/* eslint-disable @stylistic/max-len */
import { House, Package, ShoppingCart, Users2 } from 'lucide-react'

export const navLinks = [
  {
    to: '/app/home',
    label: 'Home',
    icon: <House className="h-4 w-4 transition-all group-hover:scale-110" />,
  },
  {
    to: '/app/order',
    label: 'Order',
    icon: <Package className="h-4 w-4 transition-all group-hover:scale-110" />,
  },
  {
    to: '/app/product-list',
    label: 'Products List',
    icon: <ShoppingCart className="h-4 w-4 transition-all group-hover:scale-110" />,
  },
  {
    to: '/app/Customer',
    label: 'Customer',
    icon: <Users2 className="h-4 w-4 transition-all group-hover:scale-110" />,
  },
]
