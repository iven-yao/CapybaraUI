import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './styles/global.scss';
import Layout from './components/Layout';
import Home from './components/Home';
import Docs from './components/Docs/Docs';
import ButtonDocs from './components/Button/ButtonDocs';
import DropdownDocs from './components/Dropdown/DropdownDocs';
import SelectDocs from './components/Select/SelectDocs';
import NavbarDocs from './components/Navbar/NavbarDocs';
import ImageTextDocs from './components/Text/ImageTextDocs';
import NeonTextDocs from './components/Text/NeonTextDocs';
import ThreeDTextDocs from './components/Text/ThreeDTextDocs';
import ErrorPage from './components/Error';
import RadioGroupDocs from './components/RadioGroup/RadioGroupDocs';
import SwitchDocs from './components/Switch/SwitchDocs';

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
            {
              path:'button',
              element: <ButtonDocs />
            },
            {
              path:'dropdown',
              element: <DropdownDocs />
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
            },
            {
              path:'3d-text',
              element: <ThreeDTextDocs />
            },
            {
              path:'radio-group',
              element: <RadioGroupDocs />
            },
            {
              path:'switch',
              element: <SwitchDocs />
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
