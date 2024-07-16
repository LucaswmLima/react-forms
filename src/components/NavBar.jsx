import React from 'react';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';

const NavBar = () => {
  const location = useLocation();

  return (
    <nav>
      <ul>
        {location.pathname !== '/hook-form' && (
          <li>
            <Link to="/hook-form">Hook Form</Link>
          </li>
        )}
        {location.pathname !== '/vanilla-form' && (
          <li>
            <Link to="/vanilla-form">Vanilla Form</Link>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default NavBar;
