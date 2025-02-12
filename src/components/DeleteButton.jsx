import { Button } from "react-bootstrap";

export default function DeleteButton({ onClick }) {
  return (
    <Button variant="outline-danger" onClick={onClick}>
      Eliminar
    </Button>
  );
}
