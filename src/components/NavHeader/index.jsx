import React from "react";
import { NavLink } from "react-router-dom";

const NavHeader = () => {
  return (
    <div className="nav-header">
      <NavLink to="/" className="brand-logo">
        <img className="logo-abbr" src="images/logo.jpg" alt="" />
      </NavLink>

      <div className="nav-control">
        <div className="hamburger">
          <span className="line"></span>
          <span className="line"></span>
          <span className="line"></span>
        </div>
      </div>
    </div>
  );
};

export default NavHeader;
