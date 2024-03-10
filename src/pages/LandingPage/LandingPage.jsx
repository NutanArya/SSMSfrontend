import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./LandingPage.css";

import { getImageUrl } from "../../utils";
import { Home } from "./Home/Home";
import { About } from "./About/About";
import { Contact } from "./Contact/contact";

export const LandingPage = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <nav className="navbar">
        <Link className="title" to="/">
          Greeny
        </Link>
        <div className="menu">
          <img
            className="menuBtn"
            src={getImageUrl("nav/menuIcon.png")}
            alt="menu-button"
            onClick={() => setMenuOpen(!menuOpen)}
          />
          <ul
            className={`${"menuItems"} ${menuOpen && "menuOpen"}`}
            onClick={() => setMenuOpen(false)}
          >
            <li>
              <Link to="/login">Login</Link>
            </li>
          </ul>
        </div>
      </nav>

      <Home />
      <About />
      <Contact />
    </>
  );
};

export default LandingPage;
