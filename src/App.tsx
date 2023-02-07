import React from 'react';
import NavbarCtrl from './components/NavbarCtrl/NavbarCtrl';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
//import BannerCtrl from './components/BannerCtrl';
//import ThemeProvider from 'react-bootstrap/ThemeProvider';
import './App.css';

//Importar componentes de páginas principales
import { Landing, Login, Register, Account } from './pages';
//Importar componentes de páginas de error
import ErrorPage from './pages/ErrorPages/ErrorPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <NavbarCtrl />,
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
        path: 'register',
        element: <Register />,
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
