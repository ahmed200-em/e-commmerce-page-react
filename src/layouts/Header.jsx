import React from "react";
import "./Header.css";

function Navbar(props) {
  return (
    <header className="nav-header">
      <div className="nav-container">
        <a href="#home" className="nav-logo">
          {props.brandName}<span>.</span>
        </a>
        <nav>
          <ul className="nav-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#products">Products</a></li>
            <li><a href="#why-us">Why Us</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;