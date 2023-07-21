import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

// páginas
import Home from "./routes/Home";
import Blusas from "./routes/Blusa";
import Camiseta from "./routes/Camisetas";
import Calcas from "./routes/Calcas";
import Vestidos from "./routes/Vestidos";

import CentralDeAtendimento from "./components/CentralAtendimento/centralAtendimento";

import Contato from "./components/Contato/Contato";
import EntregasFretes from "./components/EntregasFretes/EntregasFretes";
import Pagamentos from "./components/Pagamentos/Pagamentos";
import PoliticaPrivacidade from "./components/PoliticaPrivacidade/PoliticaPrivacidade";
import TermosUso from "./components/TermosUso/TermosUso";
import TrocasDevolucoes from "./components/TrocasDevolucoes/TrocasDevolucoes";
import ProdutoIndivudial from "./routes/ProdutoIndividual";
import QuemSomos from "./components/QuemSomos/QuemSomos";
import Favoritos from "./components/favoritos/contexts/Favoritos";

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "blusas",
        element: <Blusas />,
      },
      {
        path: "camisetas",
        element: <Camiseta />,
      },
      {
        path: "calcas",
        element: <Calcas />,
      },
      {
        path: "vestidos",
        element: <Vestidos />,
      },
      {
        element: <CentralDeAtendimento />,
        children: [
          {
            path: "contato",
            element: <Contato />,
          },
          {
            path: "politica-de-privacidade",
            element: <PoliticaPrivacidade />,
          },
          {
            path: "termos-de-uso",
            element: <TermosUso />,
          },
          {
            path: "trocas-e-devolucoes",
            element: <TrocasDevolucoes />,
          },
          {
            path: "pagamentos",
            element: <Pagamentos />,
          },
          {
            path: "entregas-e-frete",
            element: <EntregasFretes />,
          },
        ],
      },
      {
        path: "produto/:_id",
        element: <ProdutoIndivudial />,
      },
      {
        path: "quem-somos",
        element: <QuemSomos />,
      },
      {
        path: "favoritos",
        element: <Favoritos />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);