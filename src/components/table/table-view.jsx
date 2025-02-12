// TableCrud.js
import { useEffect, useState } from "react";
import DeleteButton from "../DeleteButton";
import EditButton from "../EditButton";
import ProductForm from "../Forms/Form";
import { fetchAllProducts } from "../../api/api";

export function TableCrud() {
  const [products, setProducts] = useState([]);
  const [editingProduct, setEditingProduct] = useState(null);

  const fetchProducts = () => {
    fetchAllProducts()
      .then((data) => setProducts(data))
      .catch((error) => console.error("Error obteniendo productos:", error));
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  // Eliminar un producto
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

  // Establecer producto en edición
  const editItem = (product) => {
    setEditingProduct(product);
  };

  // Actualizar producto en el backend y en la tabla
  const handleUpdate = (updatedProduct) => {
    fetch(`http://localhost:5001/productos/${updatedProduct.id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updatedProduct),
    })
      .then((response) => response.json())
      .then(() => {
        // Actualizar el estado de los productos sin necesidad de un fetch completo
        setProducts((prevProducts) =>
          prevProducts.map((product) =>
            product.id === updatedProduct.id ? updatedProduct : product
          )
        );
        setEditingProduct(null); // Cerrar formulario de edición
      })
      .catch((error) => console.error("Error actualizando producto:", error));
  };

  return (
    <div>
      <h2>Lista de Productos</h2>
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
                <EditButton onClick={() => editItem(product)} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {editingProduct && (
        <div>
          <h3>Editar Producto</h3>
          <ProductForm initialData={editingProduct} onSubmit={handleUpdate} />
          <button onClick={() => setEditingProduct(null)}>Cancelar</button>
        </div>
      )}
    </div>
  );
}
