import "./header.css";

export default function Header() {
  return (
    <>
      <header className="header">
        <nav>
          <img src="https://placehold.co/100x100" />
          <h3>FRUTA</h3>
          <ul className="nav-list">
            <li>
              <a href="/frutas">Productos</a>
              {/* navigate(`/frutas`); */}
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
