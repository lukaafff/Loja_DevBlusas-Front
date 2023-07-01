import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Cards from './components/Cards/Cards';

// páginas
import Home from './routes/Home';
import Blusas from './routes/Blusa';
import CentralDeAtendimento from './components/CentralAtendimento/CentralAtendimento';
import Camiseta from './routes/Camisetas';

import Contato from './components/Contato/Contato';

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: 'blusas',
        element: <Blusas/>,
      },
      {
        path: 'camisetas',
        element: <Camiseta/>,
      },
      {
        path: 'calcas',
        element: <Cards subId="calças" />,
      },
      {
        path: 'vestidos',
        element: <Cards subId="vestidos" />,
      },
      {
        path: 'centraldeatendimento/contato',
        element: <CentralDeAtendimento />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
