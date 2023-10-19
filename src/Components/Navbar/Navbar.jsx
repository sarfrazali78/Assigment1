import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaTimes, FaBars } from "react-icons/fa";

import "./Navbar.css";

const Navbar = () => {
  const [ismobile, setIsmobile] = useState(false);
  const handleClick = () => {
    setIsmobile(!ismobile);
  };

  return (
    <div className="Navbar-container">
      <div className="left-nav">
        <h4 className="main-logo">Stock Market</h4>
      </div>

      <div className="right-nav">
        <div
          className={ismobile ? "mob-menu" : "nav-list"}
          onClick={ismobile ? handleClick : null}
        >
          <ul className="navlist-right">
            <li>
              <Link activeClass="active" to="/">
                Home
              </Link>
            </li>
            <li>
              <Link to="/watchlist">Watchlist</Link>
            </li>
            {/* <li>
              <Link to="/Pg">PG</Link>
            </li>
            <li>
              <Link to="/Plot">Plot</Link>
            </li>
            <li>
              <Link to="/Commercial">Commercial</Link>
            </li>
           
            <li>
            <Link to="/Postfree">Post Free Property Ad</Link>
            </li>
            <li>
            <Link to="#">Login</Link>
            </li> */}
          
          </ul>
        </div>
      </div>
      <button className="toggle-btn" onClick={handleClick}>
        {ismobile ? <FaTimes /> : <FaBars />}
      </button>
    </div>
  );
};

export default Navbar;