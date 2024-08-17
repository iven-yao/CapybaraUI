import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './components/Home';
import Docs from './components/Docs/Docs';
import ButtonDocs from './components/Button/ButtonDocs';

function AppRouter() {

  const router = createBrowserRouter([
    {
      path:'/capybaraui/',
      element: <Layout />,
      children: [
        {
          index:true,
          element:<Home/>
        },
        {
          path:'docs',
          element: <Docs />,
          children: [
            {
              path:'button',
              element: <ButtonDocs />
            },
            {
              path:'dropdown-menu',
              element: <div>Dropdown Menu</div>
            },
            {
              path:'navbar',
              element: <div>Navbar</div>
            },
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
