import { DotsHorizontalIcon } from '@radix-ui/react-icons'
import { ColumnDef } from '@tanstack/react-table'

import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

type Status = 'draft' | 'available' | 'archived' | 'unavailable'

export type Product = {
  id: string
  img_url: string
  name: string
  status: Status
  price: number
  inventory: number
  category: string
  type: string
}

export interface StatusObject {
  label: Status,
  checked: boolean
}

export const status: Array<StatusObject> = [
  { label: 'draft', checked: false },
  { label: 'available', checked: false },
  { label: 'archived', checked: false },
  { label: 'unavailable', checked: false },
]

export const dataProduct: Product[] = [
  {
    id: 'm5gr84i9',
    img_url: 'https://ui.shadcn.com/placeholder.svg',
    name: 'product-01',
    status: 'available',
    price: 900,
    inventory: 19,
    category: 'category-01',
    type: 'category-01',
  },
  {
    id: '3u1reuv4',
    img_url: 'https://ui.shadcn.com/placeholder.svg',
    name: 'product-02',
    status: 'draft',
    price: 900,
    inventory: 19,
    category: 'category-01',
    type: 'category-01',
  },
  {
    id: 'derv1ws0',
    img_url: 'https://ui.shadcn.com/placeholder.svg',
    name: 'product-01',
    status: 'archived',
    price: 900,
    inventory: 19,
    category: 'category-01',
    type: 'category-01',
  },
  {
    id: '5kma53ae',
    img_url: 'https://ui.shadcn.com/placeholder.svg',
    name: 'product-01',
    status: 'unavailable',
    price: 900,
    inventory: 19,
    category: 'category-01',
    type: 'category-01',
  },
  {
    id: 'bhqecj4p',
    img_url: 'https://ui.shadcn.com/placeholder.svg',
    name: 'product-01',
    status: 'available',
    price: 900,
    inventory: 19,
    category: 'category-01',
    type: 'category-01',
  },
]

export const columnsProduct: ColumnDef<Product>[] = [
  {
    id: 'select',
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && 'indeterminate')
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: 'img_url',
    header: '',
    cell: ({ row }) => (
      <img
        alt="Product image"
        className="aspect-square rounded-md object-cover"
        height="64"
        width="64"
        src={row.getValue('img_url')}
      />
    ),
  },
  {
    accessorKey: 'name',
    header: 'Name',
    cell: ({ row }) => <div className="capitalize">{row.getValue('name')}</div>,
  },
  {
    accessorKey: 'status',
    header: 'Status',
    filterFn: 'statusFilter',
    cell: ({ row }) => (
      <Badge
        className="active flex w-20 items-center justify-center"
        variant={row.getValue<Status>('status')}
      >
        {row.getValue('status')}
      </Badge>
    ),
  },
  {
    accessorKey: 'price',
    header: () => <div>Price</div>,
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue('price'))

      // Format the amount as a dollar amount
      const formatted = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
      }).format(amount)

      return <div>{formatted}</div>
    },
  },
  {
    accessorKey: 'inventory',
    header: 'Inventory',
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue('inventory')}</div>
    ),
  },
  {
    accessorKey: 'category',
    header: 'Category',
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue('category')}</div>
    ),
  },
  {
    accessorKey: 'type',
    header: 'Type',
    cell: ({ row }) => <div className="capitalize">{row.getValue('type')}</div>,
  },
  {
    id: 'actions',
    enableHiding: false,
    cell: ({ row }) => {
      const payment = row.original

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <DotsHorizontalIcon className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem
              onClick={() => navigator.clipboard.writeText(payment.id)}
            >
              Copy payment ID
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>View customer</DropdownMenuItem>
            <DropdownMenuItem>View payment details</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      )
    },
  },
]
