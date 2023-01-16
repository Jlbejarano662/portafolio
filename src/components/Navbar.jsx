import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  const hiddenNavbar = (id) => {
    console.log("hola");
    document.getElementById(id).classList.toggle("show");
  };

  return (
    <nav className="navbar navbar-expand-sm ">
      <div className="container-fluid">
        <a className="navbar-brand px-2" href="/">
          Jazmin Bejarano
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapsibleNavbar"
        >
          <span className="">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              fill="white"
              className="bi bi-list"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
              />
            </svg>
          </span>
        </button>
        <div className="collapse navbar-collapse" id="collapsibleNavbar">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link
                to={"/"}
                className="nav-link px-2"
                onClick={() => hiddenNavbar("collapsibleNavbar")}
              >
                Inicio
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link px-2">Sobre Mi</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link px-2">Estudios</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link px-2">Portafolio</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link px-2">Contacto</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
