import React from 'react';
import { createHashRouter, RouterProvider } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './components/Home';
import Docs from './components/Docs/Docs';
import ButtonDocs from './components/Docs/ButtonDocs';
import DropdownMenuDocs from './components/Docs/DropdownMenuDocs';
import SelectDocs from './components/Docs/SelectDocs';

function AppRouter() {

  const router = createHashRouter([
    {
      path:'/',
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
              element: <DropdownMenuDocs />
            },
            {
              path:'navbar',
              element: <div>Navbar</div>
            },
            {
              path:'select',
              element: <SelectDocs />
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
