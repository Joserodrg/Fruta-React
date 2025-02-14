import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/home/home.jsx";
// import NotFoundPage from "../pages/NotFoundPage.jsx";
import Layout from "../components/Layout/Layout.jsx";
import { TableCrud } from "../components/table/table-view.jsx";
import EditProduct from "../components/Edit/Edit.jsx";
import "../index.css";
import CreateProduct from "../components/CreateProduct/CreateProduct.jsx";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "frutas",
        element: <TableCrud />,
      },
      {
        path: "editfruta/:id",
        element: <EditProduct />,
      },
      {
        path: "createfruta",
        element: <CreateProduct />,
      },
    ],
  },
]);
