import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
const Navbar = props => (
  <nav id="sitenav" className="navbar navbar-expand-lg navbar-light bg-light">
    <Link className="navbar-brand" to="/about">
      HarvestMoon
    </Link>
    <div>
      <ul className="navbar-nav">

        <li className="nav-item">
          <Link
            to="/howtogrow"
            className={
              window.location.pathname === "/howtogrow"
                ? "nav-link active"
                : "nav-link"
            }
          >
            Grow
          </Link>
        </li>

        <li className="nav-item">
          <Link
            to="/howtoshare"
            className={
              window.location.pathname === "/howtoshare"
                ? "nav-link active"
                : "nav-link"
            }
          >
            Share
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to="/growers"
            className={
              window.location.pathname === "/growers"
                ? "nav-link active"
                : "nav-link"
            }
          >
            {props.auth.username ? "Growers" : ""
            } 
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to="/neighbors"
            className={
              window.location.pathname === "/neighbors"
                ? "nav-link active"
                : "nav-link"
            }
          >
            Neighbors
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to="/discover"
            className={
              window.location.pathname === "/discover"
                ? "nav-link active"
                : "nav-link"
            }
          >
            WishList
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to="/search"
            className={
              window.location.pathname === "/search"
                ? "nav-link active"
                : "nav-link"
            }
          >
            Recipes
          </Link>
        </li>

        <li className="nav-item">
          <Link
            to="/products"
            className={
              window.location.pathname === "/products"
                ? "nav-link active"
                : "nav-link"
            }
          >
            {props.auth.username ? "Products" : ""} 
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to="/join"
            className={
              window.location.pathname === "/join"
                ? "nav-link active"
                : "nav-link"
            }
          >
             {props.auth.username ? "" : "Join"} 
          </Link>
        </li>

                <li className="nav-item">
          <Link
            to="/logout"
            className={
              window.location.pathname === "/logout"
                ? "nav-link active"
                : "nav-link"
            }
          >
            {props.auth.username ? "Logout" : ""
            }
          </Link>

        </li>
        
        <li className="nav-item">
          <Link
            to="/login"
            className={
              window.location.pathname === "/login"
                ? "nav-link active"
                : "nav-link"
            }
          >
            {props.auth.username ? props.auth.username : "Login"
            }
          </Link>
        </li>

      </ul>
    </div>
  </nav>
);

export default Navbar;
