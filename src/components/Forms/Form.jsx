import { useState, useEffect } from "react";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

export default function ProductForm({ initialData, onSubmit }) {
  const [product, setProduct] = useState({
    nombre: "",
    tipo: "",
    precio: "",
    stock: "",
  });

  useEffect(() => {
    if (initialData) {
      setProduct(initialData);
    }
  }, [initialData]);

  const handleChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(product);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <FloatingLabel controlId="nombre" label="Nombre" className="mb-3">
        <Form.Control
          type="text"
          name="nombre"
          value={product.nombre}
          onChange={handleChange}
        />
      </FloatingLabel>

      <FloatingLabel controlId="tipo" label="Tipo" className="mb-3">
        <Form.Control
          type="text"
          name="tipo"
          value={product.tipo}
          onChange={handleChange}
        />
      </FloatingLabel>

      <FloatingLabel controlId="precio" label="Precio" className="mb-3">
        <Form.Control
          type="number"
          name="precio"
          value={product.precio}
          onChange={handleChange}
        />
      </FloatingLabel>

      <FloatingLabel controlId="stock" label="Stock" className="mb-3">
        <Form.Control
          type="number"
          name="stock"
          value={product.stock}
          onChange={handleChange}
        />
      </FloatingLabel>

      <Button type="submit" variant="primary">
        {initialData ? "Actualizar Producto" : "Crear Producto"}
      </Button>
    </Form>
  );
}
