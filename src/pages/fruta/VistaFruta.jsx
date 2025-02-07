import { Link } from "react-router-dom";
// import { Outlet } from "react-router-dom";


export default function VistasFruta() {
  const vistas = [ 1, 2, 3, 4, 5];
  return (
    <div className=" flex gap-2">
      <div className="flex flex-col gap-2">
        {vistas.map((vista) => (
          <Link key={vista} to={`/fruta/${vista}`}>
            Vista{vista}
          </Link>
        ))}
      </div>
      {/* <Outlet /> */}
    </div>
  );
}
