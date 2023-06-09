//  defines a React component called Header that represents the header section of a web page. 
// It includes navigation links and a search bar, and its behavior depends on the current location in the application.
// displays a navigation bar with links to different pages. It also includes a search bar that is visible on the home and favorites pages. 
// The behavior of the header depends on the current location in the application, which is obtained using the useLocation hook from React Route

import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import Search from './Search';

function Header({ onSearch }) {
  
  // using useLocation hook from React Router to get the current location in the application- researched on Google and Chatgbt 
  //  determines whether the search bar should be visible based on the current location. 
  // If the current path is either '/' or '/favorites', the search bar is visible; otherwise, it's hidden.
  const location = useLocation();
  const isSearchVisible = location.pathname === '/' || location.pathname === '/favorites';

  return (
    <header className="navbar">
      <nav className="navbar-nav">
        <ul className="nav-list">
          <li className="nav-item">
            <div className="button-box">
              <NavLink exact to="/" activeClassName="active" className="nav-button">
                Home
              </NavLink>
            </div>
          </li>
          <li className="nav-item">
            <div className="button-box">
              <NavLink to="/addmovie" activeClassName="active" className="nav-button">
                Add a Movie
              </NavLink>
            </div>
          </li>
          <li className="nav-item">
            <div className="button-box">
              <NavLink to="/favorites" activeClassName="active" className="nav-button">
                Favorites
              </NavLink>
            </div>
          </li>
        </ul>
      </nav>
      {isSearchVisible && <Search onSearch={onSearch} />}
    </header>
  );
}

export default Header;