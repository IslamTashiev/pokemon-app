import React from "react";

import { NavLink } from "react-router-dom";

export default function NavBar() {
  return (
    <div>
      <nav className="blue darken-3">
        <div className="nav-wrapper">
          <NavLink to="/" className="brand-logo">
            Pokemon App
          </NavLink>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li>
              <NavLink to="/pokemons">Pokemons</NavLink>
            </li>
            <li>
              <NavLink to="/add">Add pokemon</NavLink>
            </li>
            <li>
              <NavLink to="/favorite">Favorite</NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
