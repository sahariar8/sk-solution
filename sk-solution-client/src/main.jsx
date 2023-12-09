import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Layout from './pages/Layout'
import Error from './pages/Error'
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import ContextProvider from './component/provider/ContextProvider'
import Home from './component/home/Home'
import Login from './component/auth/Login'
import Register from './component/auth/Register'
import Apple from './pages/apple/Apple'

import Xiaomi from './pages/Xiaomi/Xiaomi'
import Oneplus from './pages/oneplus/Oneplus'
import Google from './pages/google/Google'
import Realme from './pages/Realme/Realme'
import Samsung from './pages/samsung/Samsung'
import AddProduct from './component/AddProduct'
import MyCart from './component/MyCart'
import Adetails from './pages/apple/Adetails'
import Update from './component/Update'
import PrivateRoute from './component/PrivateRoute'
// ..
AOS.init();

const router = createBrowserRouter([
  {
    path:'/',
    element:<Layout></Layout>,
    errorElement:<Error></Error>,
    children:[
      {
        path:'/',
        element:<Home></Home>
      },
      {
        path:'/login',
        element:<Login></Login>
      },
      {
        path:'/register',
        element:<Register></Register>
      },
      {
        path:'brand/Apple',
        element:<Apple></Apple>,
        loader:()=>fetch('https://sk-solution-server-bsg5qnztu-sahariars-projects.vercel.app/products')
      },
      {
        path:'brand/Samsung',
        element:<Samsung></Samsung>,
        loader:()=>fetch('https://sk-solution-server-bsg5qnztu-sahariars-projects.vercel.app/products')
      },
      {
        path:'brand/Xiaomi',
        element:<Xiaomi></Xiaomi>,
        loader:()=>fetch('https://sk-solution-server-bsg5qnztu-sahariars-projects.vercel.app/products')
      },
      {
        path:'brand/Oneplus',
        element:<Oneplus></Oneplus>,
        loader:()=>fetch('https://sk-solution-server-bsg5qnztu-sahariars-projects.vercel.app/products')
      },
      {
        path:'brand/Google',
        element:<Google></Google>
      },
      {
        path:'brand/Realme',
        element:<Realme></Realme>,
        loader:()=>fetch('https://sk-solution-server-bsg5qnztu-sahariars-projects.vercel.app/products')
      },
      {
        path:'/add-product',
        element:<PrivateRoute><AddProduct></AddProduct></PrivateRoute>
      },
      {
        path:'/my-cart',
        element:<PrivateRoute><MyCart></MyCart></PrivateRoute>,
        loader:()=>fetch('https://sk-solution-server-bsg5qnztu-sahariars-projects.vercel.app/cart')
        
      },
      {
        path:'/details/:id',
        element:<PrivateRoute><Adetails></Adetails></PrivateRoute>,
        loader:({params})=>fetch(`https://sk-solution-server-bsg5qnztu-sahariars-projects.vercel.app/products/${params.id}`) 
      },
      {
        path:'/update/:id',
        element:<PrivateRoute><Update></Update>,</PrivateRoute>,
        loader:({params})=>fetch(`https://sk-solution-server-bsg5qnztu-sahariars-projects.vercel.app/products/${params.id}`) 
      },
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <ContextProvider>
      <RouterProvider router={router}></RouterProvider>
   </ContextProvider>
  </React.StrictMode>,
)
