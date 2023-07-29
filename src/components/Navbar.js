import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../App.css";

const Navbar = () => {
  const [isTransparent, setIsTransparent] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      const shouldBeTransparent = scrollTop === 0;
      setIsTransparent(shouldBeTransparent);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navbarClass = isTransparent
    ? "main-header"
    : "main-header fixed-navbar";

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <div className={navbarClass} style={{ marginBottom: "200px" }}>
        <Link to="/">
          <button className="nav-button">FlexFit</button>
        </Link>
        <div className={`buttons-align-1 ${isMenuOpen ? "open" : ""}`}>
          <div className="dropdown-diet">
            <div className="dropbtn"><button className="nav-button">Diet</button></div>
            <div className="dropdown-content">
              <Link to="/nutrition">Nutrition</Link>
              <Link to="/meal">Get a meal plan</Link>
              <Link to="/recipes">Recipes</Link>
            </div>
          </div>
          <Link to="/exercise">
            <button className="nav-button">Exercises</button>
          </Link>
          <Link to="/signup">
            <button className="nav-button">Sign Up/Login</button>
          </Link>
          <Link to="/dashboard">
            <button className="nav-button">Logout</button>
          </Link>
        </div>

        <div id="mobile" onClick={handleMenuToggle}>
          <i className={`fas ${isMenuOpen ? "fa-times" : "fa-bars"}`} />
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="mobile-menu">
          <Link to="/nutrition">Nutrition</Link>
          <Link to="/meal">Meal plan</Link>
          <Link to="/exercise">Exercises</Link>
          <Link to="/recipes">Recipes</Link>
          <Link to="/signup">Sign Up/Login</Link>
          <Link to="/dashboard">Logout</Link>
        </div>
      )}
    </>
  );
};

export default Navbar;
