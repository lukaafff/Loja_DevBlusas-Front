import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import { createBrowserRouter, RouterProvider, Route } from 'react-router-dom';

//paginas
import Home from './routes/Home';
import TodosProdutos from './routes/TodosProdutos';

const router = createBrowserRouter([
  {
    element: <App/>,
    children: [
      {
        path: "/",
        element: <Home/>,
      },
      {
        path: "produtos",
        element: <TodosProdutos/>,
      },
      {
        path: "novidades",
      },
      {
        path: "bestsellers",
      },
      {
        path: "conjuntos",
      },
      {
        path: "vestidos",
      },
    ]
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
