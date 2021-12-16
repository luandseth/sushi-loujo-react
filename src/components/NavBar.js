import React from "react";
import { Link } from "react-router-dom";
import CartWidget from "./CartWidget";


function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <img src="/assets/images/icons8-sushi-100.png" alt="logo" width="30" height="24" />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="/#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">
                Inicio
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={`/category/${categoryId}`}>
                Productos
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={`/category/${categoryId}`}>
                Delivery
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <CartWidget />
    </nav>
  );
}

export default NavBar;
