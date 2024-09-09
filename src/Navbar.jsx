import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';



const Navbar = () => {
  const handleNavLinkClick = () => {
    const collapseElement = document.getElementById('collapsibleNavbar');
    if (collapseElement) {
      const bsCollapse = new window.bootstrap.Collapse(collapseElement);
      bsCollapse.hide(); // Hide the collapse menu
    }
  };
  return (
    <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
      <div className="container-fluid">
        {/* Toggle button for mobile view */}
        <button 
          className="navbar-toggler" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#collapsibleNavbar" 
          aria-controls="collapsibleNavbar" 
          aria-expanded="false" 
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        {/* Navbar links */}
        <div className="collapse navbar-collapse" id="collapsibleNavbar">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to="/" className="nav-link" onClick={handleNavLinkClick}>Dashboard</Link>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false" onClick={handleNavLinkClick}>
                Categories
              </a>
              <ul className="dropdown-menu">
                <li><Link className="dropdown-item" to="/traditional-womens-wear" onClick={handleNavLinkClick}>Traditional Women's Wear</Link></li>
                <li><Link className="dropdown-item" to="/traditional-mens-wear" onClick={handleNavLinkClick}>Traditional Men's Wear</Link></li>
                <li><Link className="dropdown-item" to="/kids-wear" onClick={handleNavLinkClick}>Kids Wear</Link></li>
              </ul>
            </li>
            <li className="nav-item">
              <Link to="/branches" className="nav-link" onClick={handleNavLinkClick}>Branches</Link>
            </li>
            <li className="nav-item">
              <Link to="/address" className="nav-link" onClick={handleNavLinkClick}>Address</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
