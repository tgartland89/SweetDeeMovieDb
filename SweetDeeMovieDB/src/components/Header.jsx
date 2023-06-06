import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import Search from './Search';

function Header({ onSearch }) {
  const location = useLocation();
  const isSearchVisible = location.pathname === '/' || location.pathname === '/favorites';

  return (
    <header>
      <nav>
        <ul style={{ display: 'flex', listStyle: 'none', justifyContent: 'center' }}>
          <li style={{ marginRight: '1rem' }}>
            <NavLink exact="true" to="/" activeclassname="active">
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
      {isSearchVisible && <Search onSearch={onSearch} />}
    </header>
  );
}

export default Header;