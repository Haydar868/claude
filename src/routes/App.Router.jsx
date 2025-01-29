import React from "react";
import { useRoutes } from "react-router";
import Home from "../pages/Home";
import DynamicPage from "../pages/DynamicPage";
import Catalog from "../pages/catalog";
import Cart from "../pages/Cart";
import Auth from "../pages/Auth";

export const AppRouter = () => {
  const router = useRoutes([
    { path: "/", element: <Home /> },
    { path: "/product/:id", element: <DynamicPage /> },
    { path: "/catalog", element: <Catalog /> },
    { path: "/cart", element: <Cart /> },
    { path: "/auth", element: <Auth /> },
  ]);

  return router;
};
