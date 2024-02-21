import React from 'react';
import Logo from '../../components/logo/Logo.jsx';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <div className="container">
        <div className="header">
          <Logo/>
          <nav className="nav">
            <ul>
              <li><Link className="nav_link" to="/">Home</Link></li>
              <li><Link className="nav_link" to="/about">About</Link></li>
              <li><Link className="nav_link" to="/services">Services</Link></li>
              <li><Link className="nav_link" to="/contact">Contact</Link></li>
              <li><Link className="nav_link" to="admin/dashboard">Admin</Link></li>
            </ul>
          </nav>
        </div>
      </div>    
    </header>
  );
};

export default Header;
