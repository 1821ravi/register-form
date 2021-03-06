import React from "react";
import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <nav
        className="navbar navbar-expand navbar-light"
        style={{ backgroundColor: `#4D77FF` }}
      >
        <div className="container-fluid">
          <NavLink className="navbar-brand"  to="/">
            CRUD
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link"   to="/">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link"  to="/users/adduser">
                  About Us
                </NavLink>
              </li>
            </ul>
            <form className="d-flex">
              <Link className="btn btn-outline-info text-dark"  to="/users/adduser">
                Add User
              </Link>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
}
