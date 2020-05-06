import React from "react";
import { Link, useLocation } from "react-router-dom";

function NavTabs() {
    const location = useLocation();

    return (
        <ul className="nav nav-tabs">
          <li className="nav-item">
            <Link to="/" className={location.pathname === "/" ? "nav-link active" : "nav-link"}>
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/projects" className={location.pathname === "/" ? "nav-link active" : "nav-link"}>
              Projects
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/resume" className={location.pathname === "/" ? "nav-link active" : "nav-link"}>
              Resume
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/contact" className={location.pathname === "/" ? "nav-link active" : "nav-link"}>
              Contact
            </Link>
          </li>
        </ul>
    );
}
export default NavTabs;