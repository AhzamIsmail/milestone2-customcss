
import React, { useState } from "react";
import { RiMenu3Fill } from "react-icons/ri";
import "../app/styles/navbar.css";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="navbar-section">
      <div className="navbar">
        <div className="navbar-brand">PORTFOLIO</div>

        {/* Large Screen Navbar Links */}
        <ul className={`navbar-links ${isMenuOpen ? "open" : ""}`}>
          <li className="navbar-link">
            <a href="#hero">Home</a>
          </li>
          <li className="navbar-link">
            <a href="#about">About</a>
          </li>
          <li className="navbar-link">
            <a href="#projects">Projects</a>
          </li>
          <li className="navbar-link">
            <a href="#skills">Skills</a>
          </li>
          <li className="navbar-link">
            <a href="#contact">Contact</a>
          </li>
        </ul>

        {/* Hamburger Menu Icon */}
        <div className="navbar-menu-icons" onClick={toggleMenu}>
          <RiMenu3Fill size={30} />
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
        <ul className={`navbar-menu ${isMenuOpen ? "open" : ""}`}>
          <li className="navbar-link">
            <a href="#hero" onClick={toggleMenu}>Home</a>
          </li>
          <li className="navbar-link">
            <a href="#about" onClick={toggleMenu}>About</a>
          </li>
          <li className="navbar-link">
            <a href="#projects" onClick={toggleMenu}>Projects</a>
          </li>
          <li className="navbar-link">
            <a href="#skills" onClick={toggleMenu}>Skills</a>
          </li>
          <li className="navbar-link">
            <a href="#contact" onClick={toggleMenu}>Contact</a>
          </li>
        </ul>
      )}
    </div>
  );
};

export default Navbar;
