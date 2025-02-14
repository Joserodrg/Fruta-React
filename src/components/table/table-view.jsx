// TableCrud.jsx
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import DeleteButton from "../DeleteButton";
import EditButton from "../EditButton";
import { fetchAllProducts } from "../../api/api";
import CreateButton from "../CreateButton";

export function TableCrud() {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  const fetchProducts = () => {
    fetchAllProducts()
      .then((data) => setProducts(data))
      .catch((error) => console.error("Error obteniendo productos:", error));
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const removeData = (id) => {
    fetch(`http://localhost:5001/productos/${id}`, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then(() => {
        fetchProducts();
      })
      .catch((err) => {
        console.error("Delete Fetch error", err);
      });
  };

  const editItem = (product) => {
    navigate(`/editfruta/${product.id}`);
  };

  const NewProduct = () => {
    navigate("/createfruta");
  };

  return (
    <div>
      <h2>Lista de Productos</h2>
      <CreateButton onClick={NewProduct} />
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">Nombre</th>
            <th scope="col">Tipo</th>
            <th scope="col">Precio</th>
            <th scope="col">Stock</th>
            <th scope="col">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td>{product.nombre}</td>
              <td>{product.tipo}</td>
              <td>{product.precio}</td>
              <td>{product.stock}</td>
              <td>
                <DeleteButton onClick={() => removeData(product.id)} />
                <EditButton onClick={() => editItem(product)} />{" "}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
