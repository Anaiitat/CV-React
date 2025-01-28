import React from "react";
import { Link } from "react-router-dom";
import "./App.css";

const Nav = () => {
  return (
    <header className="bg-stone-900 flex justify-between">
      <nav>
        <h1>John Doe</h1>
        <ul>
          <li>
            <Link to="/">Accueil</Link>
          </li>
          <li>
            <Link to="/services">Services</Link>
          </li>
          <li>
            <Link to="/realisation">Realisation</Link>
          </li>
          <li>
            <Link to="/blog">Blog</Link>
          </li>
          <li>
            <Link to="/Contact">Contact</Link>
          </li>
          <li>
            <Link to="/mentions">Mentions</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Nav;
