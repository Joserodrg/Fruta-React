import { useParams } from "react-router-dom";
import Header from "../../components/header/header";

export default function FrutaPage() {
  const params = useParams();
  console.log(params)
    return (

      <>
      <Header/>
      <div> 
        <h1>View Fruta {params.vistaId}</h1>
      </div>

      </>
    );
  }
  