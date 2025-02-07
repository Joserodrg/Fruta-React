import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/home/home.jsx";
import NotFoundPage from "../pages/NotFoundPage.jsx";
import VistasFruta from "../pages/fruta/VistaFruta.jsx";
import FrutaPage from "../pages/frutaPage/fruta.jsx";
import "../index.css";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    errorElement: <NotFoundPage />, 
  },
  {
    path: "/fruta",
    element: <VistasFruta />,
  },
  {
    path: "/fruta/:vistaId",
    element: <FrutaPage />,
  },
]);
