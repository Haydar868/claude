import React from 'react'
import { useRoutes } from 'react-router'
import Home from '../pages/Home'
import DynamicPage from '../pages/DynamicPage'

export const AppRouter = () => {

const router = useRoutes([
    { path:'/', element:<Home/> },
    {path:'/product/:id', element:<DynamicPage/>}
])

  return router
}

