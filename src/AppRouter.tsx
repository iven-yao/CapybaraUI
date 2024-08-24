import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './styles/global.scss';
import Layout from './components/Layout';
import Home from './components/Home';
import Docs from './components/Docs/Docs';
import ButtonDocs from './components/Docs/ButtonDocs';
import DropdownMenuDocs from './components/Docs/DropdownMenuDocs';
import SelectDocs from './components/Docs/SelectDocs';
import NavbarDocs from './components/Docs/NavbarDocs';
import ImageTextDocs from './components/Docs/ImageTextDocs';
import NeonTextDocs from './components/Docs/NeonTextDocs';

function AppRouter() {

  const router = createBrowserRouter([
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
              element: <NavbarDocs />
            },
            {
              path:'select',
              element: <SelectDocs />
            },
            {
              path:'image-text',
              element: <ImageTextDocs />
            },
            {
              path:'neon-text',
              element: <NeonTextDocs />
            }
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
