import { DataTable } from '@/components/dataTable'
import { Button } from '@/components/ui/button'
import {
  columnsProduct,
  dataProduct,
  Product,
  status,
} from '@/utils/dataTables/productTable'
import { Plus } from 'lucide-react'
import { Helmet } from 'react-helmet-async'

export const Products = () => {
  return (
    <>
      <Helmet title="Product List" />
      <section className="space-y-4 py-8">
        <div className="flex items-center justify-between">
          <div className="flex flex-col items-start gap-2">
            <h1 className="font-bold text-4xl text-foreground">Product list</h1>
            <p className="text-foreground">
              Manage your products and view their sales performance.
            </p>
          </div>
          <Button
            className="bg-cyan-950 text-white hover:bg-cyan-950/90 flex items-center gap-2"
          >
            <Plus className="h-4 w-4" />
            Add product
          </Button>
        </div>
        <div className="flex flex-col items-start">
          <DataTable<Product>
            data={dataProduct}
            columns={columnsProduct}
            status={status}
          />
        </div>
      </section>
    </>
  )
}
