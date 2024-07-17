import React from 'react';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';

const NavBar = () => {
  const location = useLocation();

  return (
    <nav className="navbar">
      <div className="title-container">
        <h3 className="app-title">React Hook Form vs Vanilla Form</h3>
        <p className="app-title">Comparison of forms created in a standard way and using Hook Forms</p>
      </div>

      <ul>
        {location.pathname !== '/hook-form' && (
          <li>
            <Link className="navbar-link" to="/hook-form">Change to Hook Form</Link>
          </li>
        )}
        {location.pathname !== '/vanilla-form' && (
          <li>
            <Link className="navbar-link" to="/vanilla-form">Change to Vanilla Form</Link>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default NavBar;
