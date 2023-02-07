import React from 'react';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
//import BannerCtrl from './components/BannerCtrl';
//import ThemeProvider from 'react-bootstrap/ThemeProvider';
import './App.css';

//Importar componentes de páginas principales
import { Landing, Login, Account } from './pages';

//Importar componentes Secundarios
import NavbarCtrl from './components/NavbarCtrl/NavbarCtrl';
import FooterC from './components/Footer/FooterC';
//Importar componentes de páginas de error
import ErrorPage from './pages/ErrorPages/ErrorPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <>
        <NavbarCtrl />
        <FooterC />
      </>
    ),
    errorElement: (
      <>
        <ErrorPage />
        <NavbarCtrl />
      </>
    ),
    children: [
      {
        index: true,
        element: <Landing />,
      },
      {
        path: 'login',
        element: <Login />,
      },
      {
        path: 'account',
        element: <Account />,
      },
    ],
  },
]);

export default function App(): JSX.Element {
  return <RouterProvider router={router} />;
}
