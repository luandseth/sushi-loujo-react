import React from "react";
import CartWidget from "./CartWidget";

function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="/#">
          <img src="/assets/images/icons8-sushi-100.png" alt="logo" width="30" height="24" />
        </a>
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
              <a className="nav-link active" aria-current="page" href="/#">
                Inicio
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/#">
                Productos
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/#">
                Delivery
              </a>
            </li>
          </ul>
        </div>
      </div>
      <CartWidget />
    </nav>
  );
}

export default NavBar;
