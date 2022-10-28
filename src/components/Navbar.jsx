import { useState } from "react";

const Navbar = () => {
  const [menuIsVisible, setMenuIsVisible] = useState(false);
  const links = [
    {
      text: "acceder",
      url: "/login/",
    },
    {
      text: "contacto",
      url: "/contact/",
    },
    {
      text: "sobre nosotros",
      url: "/about/",
    },
    {
      text: "servicios",
      url: "/services/",
    },
    {
      text: "diseños",
      url: "/designs/",
    },
    {
      text: "inicio",
      url: "/",
    },
  ];
  return (
    <nav className="navbar">
      <a href="/" className="navbar__logo">
        <img src="/images/logo.svg" alt="Logo Invit-Arte" />
      </a>
      <button
        className="button__menu"
        onClick={() => setMenuIsVisible(!menuIsVisible)}
      >
        <i
          className={`fa-solid ${menuIsVisible ? "fa-x" : "fa-bars-staggered"}`}
        ></i>
      </button>
      <div className={`navbar__menu ${menuIsVisible && "showMenu"}`}>
        <ul className="navbar__menu-container">
          <li className="navbar__menu-search">
            <input type="search" placeholder="Buscar en Invit-Arte" />
            <button>
              <i className="fa-solid fa-magnifying-glass"></i>
            </button>
          </li>
          {links.map(({ text, url }) => (
            <li key={text}>
              <a href={url}>{text}</a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
