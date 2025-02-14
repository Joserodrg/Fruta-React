// CreateProduct.jsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ProductForm from "../../components/Forms/Form";

export default function CreateProduct() {
  const [setProduct] = useState({
    nombre: "",
    tipo: "",
    precio: "",
    stock: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct((prevProduct) => ({
      ...prevProduct,
      [name]: value,
    }));
  };

  const handleSubmit = (product) => {
    fetch("http://localhost:5001/productos", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(product),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Producto creado:", data);
        navigate("/frutas");
      })
      .catch((error) => {
        console.error("Error creando el producto:", error);
      });
  };

  return (
    <div>
      <h2>Crear Nuevo Producto</h2>
      <ProductForm
        initialData={null}
        handleChange={handleChange}
        onSubmit={handleSubmit}
      />
    </div>
  );
}
