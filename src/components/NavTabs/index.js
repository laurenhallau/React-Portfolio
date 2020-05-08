import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Nav } from "reactstrap";
import "./style.css";

function NavTabs() {
  const location = useLocation();

  return (
    <header>
      <Nav className="navbar">
        <span className="navbar-text">Lauren W Hallau</span>

        <ul className="nav justify-content-end">
          <li className="nav-item">
            <Link
              to="/"
              className={
                location.pathname === "/" ? "nav-link active" : "nav-link"
              }
            >
              Home
            </Link>
          </li>
          <li className="nav justify-content-end">
            <Link
              to="/projects"
              className={
                location.pathname === "/" ? "nav-link active" : "nav-link"
              }
            >
              Projects
            </Link>
          </li>
          <li className="nav justify-content-end">
            <Link
              to="/resume"
              className={
                location.pathname === "/" ? "nav-link active" : "nav-link"
              }
            >
              Resume
            </Link>
          </li>
          <li className="nav justify-content-end">
            <Link
              to="/contact"
              className={
                location.pathname === "/" ? "nav-link active" : "nav-link"
              }
            >
              Contact
            </Link>
          </li>
        </ul>
      </Nav>
      </header>
  );
}
export default NavTabs;
