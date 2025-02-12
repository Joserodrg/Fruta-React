import "./header.css";
// import { Outlet } from "react-router-dom";

export default function Header() {
  return (
    <>
    <header className="header">
      <nav>
      <img src="https://placehold.co/100x100"/>
      <h3>FRUTA</h3>
      <ul className="nav-list">
        <li><a href="/showcase">Showcase</a></li>
        <li><a href="/docs">Docs</a></li>
        <li><a href="/blog">Blog</a></li>
        <li><a href="/templates">Templates</a></li>
        <li><a href="/Enterprise">Enterprise</a></li>
      </ul>
      </nav>
    </header>
    {/* <Outlet/> */}
    </>
  );
}
