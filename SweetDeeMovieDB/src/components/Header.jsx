import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import Search from './Search';

function Header({ onSearch }) {
  const location = useLocation();
  const isSearchVisible = location.pathname === '/' || location.pathname === '/favorites';

  return (
    <header className="navbar">
      <nav className="navbar-nav">
        <ul className="nav-list">
          <li className="nav-item">
            <NavLink exact="true" to="/" activeclassname="active">
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/addmovie" activeclassname="active">
              Add Movie
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/favorites" activeclassname="active">
              Favorites
            </NavLink>
          </li>
        </ul>
      </nav>
      {isSearchVisible && <Search onSearch={onSearch} />}
    </header>
  );
}

export default Header;
