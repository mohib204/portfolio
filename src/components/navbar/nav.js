import React from "react";
import { Link } from "react-router-dom";
import "./nav.css";

const Nav = () => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/">Muhammad Mohib</Link>
      </div>
      <input type="checkbox" id="toggle" className="toggle-input" />
      <label htmlFor="toggle" className="toggle-label">
        ☰
      </label>
      <ul className="navbar-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/projects">Projects</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
};

export default Nav;
