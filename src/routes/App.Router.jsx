import React from 'react'
import { useRoutes } from 'react-router'
import Home from '../pages/Home'

export const AppRouter = () => {

const router = useRoutes([
    { path:'/', element:<Home/> }
])

  return router
}

