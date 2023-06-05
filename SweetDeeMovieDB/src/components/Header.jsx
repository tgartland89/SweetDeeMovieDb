import React from 'react';
import { NavLink } from 'react-router-dom';

function Header() {
  return (
    <header>
      <nav>
        <ul style={{ display: 'flex', listStyle: 'none', justifyContent: 'center' }}>
          <li style={{ marginRight: '1rem' }}>
            <NavLink exact to="/" activeclassname="active">
              Home
            </NavLink>
          </li>
          <li style={{ marginRight: '1rem' }}>
            <NavLink to="/addmovie" activeclassname="active">
              Add Movie
            </NavLink>
          </li>
          <li style={{ marginRight: '1rem' }}>
            <NavLink to="/favorites" activeclassname="active">
              Favorites
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;