import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import ProductForm from "../../components/Forms/Form";

export default function EditProduct() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (id) {
      console.log("ID recibido:", id);

      fetch(`http://localhost:5001/productos/${id}`)
        .then((response) => {
          if (!response.ok) {
            throw new Error(
              `Error: ${response.status} - Producto no encontrado`
            );
          }
          return response.json();
        })
        .then((data) => {
          console.log("Producto obtenido:", data);
          setProduct(data);
        })
        .catch((error) => console.error("Error obteniendo producto:", error));
    }
  }, [id]);

  const handleUpdate = (updatedProduct) => {
    fetch(`http://localhost:5001/productos/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updatedProduct),
    })
      .then(() => {
        navigate("/frutas");
      })
      .catch((error) => console.error("Error actualizando producto:", error));
  };

  return (
    <div>
      <h2>Editar Producto</h2>
      {product ? (
        <ProductForm initialData={product} onSubmit={handleUpdate} />
      ) : (
        <p>Cargando...</p>
      )}
    </div>
  );
}
