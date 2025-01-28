import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./App.css";




const Nav = () => {
  const location = useLocation(); 

  return (
    <header>
      <nav
        className="navbar navbar-expand-lg fixed-top fw-semibold text-uppercase"
        id="mainNav"
      >
        <div className="container">
          <h1 className="navbar-brand m-0  fs-3 text-light">John Doe</h1>
          <button
            class="navbar-toggler border-amber-50 text-white border-0"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarResponsive"
            aria-controls="navbarResponsive"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="fas fa-bars"></span>
          </button>
          <div
            className="collapse  nav-pills navbar-collapse"
            id="navbarResponsive"
          >
            <ul className="navbar-nav  nav-pills ms-auto">
              <li className=" m-2">
                <Link
                  to="/"
                  className={`nav-link  ${
                    location.pathname === "/"
                      ? "active text-light"
                      : "text-secondary"
                  }`}
                >
                  Accueil
                </Link>
              </li>
              <li className=" m-2">
                <Link
                  to="/services"
                  className={`nav-link ${
                    location.pathname === "/services"
                      ? "active text-light"
                      : "text-secondary"
                  }`}
                >
                  Services
                </Link>
              </li>
              <li className=" m-2">
                <Link
                  to="/realisation"
                  className={`nav-link ${
                    location.pathname === "/realisation"
                      ? "active text-light"
                      : "text-secondary"
                  }`}
                >
                  Réalisation
                </Link>
              </li>
              <li className=" m-2">
                <Link
                  to="/blog"
                  className={`nav-link ${
                    location.pathname === "/blog"
                      ? "active text-light"
                      : "text-secondary"
                  }`}
                >
                  Blog
                </Link>
              </li>
              <li className=" m-2">
                <Link
                  to="/Contact"
                  className={`nav-link ${
                    location.pathname === "/Contact"
                      ? "active text-light "
                      : "text-secondary"
                  }`}
                >
                  Me Contacter
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Nav;
