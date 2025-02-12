import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ProductForm from "../../components/Forms/Form";

export default function EditProduct() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:5001/productos/${id}`)
      .then((response) => response.json())
      .then((data) => setProduct(data))
      .catch((error) => console.error("Error obteniendo producto:", error));
  }, [id]);

  const handleUpdate = (updatedProduct) => {
    fetch(`http://localhost:5001/productos/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updatedProduct),
    })
      .then((response) => response.json())
      .then(() => {
        navigate("/");
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
