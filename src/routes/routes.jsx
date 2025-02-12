import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/home/home.jsx";
import NotFoundPage from "../pages/NotFoundPage.jsx";
import VistasFruta from "../pages/fruta/EditFruta.jsx";
import FrutaPage from "../pages/frutaPage/fruta.jsx";
import Layout from "../components/Layout/Layout.jsx";
import "../index.css";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <HomePage />,
        errorElement: <NotFoundPage />,
      },
      {
        path: "editfruta",
        children: [
          {
            index: true,
            element: <VistasFruta />,
          },
          {
            path: ":vistaId",
            element: <FrutaPage />,
          },
        ],
      },
    ],
  },
]);
