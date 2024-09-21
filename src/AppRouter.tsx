import React from 'react';
import { createBrowserRouter, RouteObject, RouterProvider } from 'react-router-dom';
import './styles/global.scss';
import Layout from './pages/Layout';
import Home from './pages/Home';
import Docs from './docs/Docs';
import ErrorPage from './pages/Error';
import { docs } from './constants/routerConstants';

function AppRouter() {

  const router = createBrowserRouter([
    {
      path:'/',
      element: <Layout />,
      errorElement:<ErrorPage />,
      children: [
        {
          index:true,
          element:<Home/>,
        },
        {
          path:'docs',
          element: <Docs />,
          children: [
            ...docs.map((page):RouteObject => ({
              path: page.path,
              element: page.element
            }))
          ]
        }
      ]
    }
  ]);

  return (
    <RouterProvider router={router} />
  );
}

export default AppRouter;
