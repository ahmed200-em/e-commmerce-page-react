import React from "react";
import "./Footer.css";

function Footer(props) {
  return (
    <footer id="contact" className="footer-container">
      <div className="footer-content">
        <div>
          <div className="footer-logo">
            {props.brandName}<span>.</span>
          </div>
          <p>{props.description}</p>
        </div>
        <div className="footer-info">
          <p>Email: {props.email}</p>
          <p>Phone: {props.phone}</p>
          <p>Location: {props.location}</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {props.year} {props.brandName}. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;