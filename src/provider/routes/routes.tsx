import { createBrowserRouter } from 'react-router-dom'
import { AppLayout } from '../layout/appLayout'
import { AuthLayout } from '../layout/authLayout'
import { SignIn } from '@/pages/auth/sign-in'
import { SignUpForm } from '@/pages/auth/sign-up'
import { Products } from '@/pages/app/products'
import { Product } from '@/pages/app/product'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      { path: 'app/product-list', element: <Products /> },
      { path: 'app/product', element: <Product /> },
    ],

  },

  {
    path: '/',
    element: <AuthLayout />,
    children: [
      { path: 'auth/sign-in', element: <SignIn /> },
      { path: 'auth/sign-up', element: <SignUpForm /> },
    ],
  },
])
