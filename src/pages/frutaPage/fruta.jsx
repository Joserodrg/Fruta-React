import { useParams } from "react-router-dom";

export default function FrutaPage() {
  const params = useParams();
  console.log(params);
  return (
    <>
      <div>
        <h1>View Fruta {params.vistaId}</h1>
      </div>
    </>
  );
}
