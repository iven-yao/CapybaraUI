import React from 'react';
import { createBrowserRouter, RouteObject, RouterProvider } from 'react-router-dom';
import './styles/global.scss';
import Layout from './components/Layout';
import Home from './components/Home';
import Docs from './components/Docs/Docs';
import ErrorPage from './components/Error';
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
          children: docs.map((page):RouteObject => ({
            path: page.path,
            element: page.element
          }))
        }
      ]
    }
  ]);

  return (
    <RouterProvider router={router} />
  );
}

export default AppRouter;
