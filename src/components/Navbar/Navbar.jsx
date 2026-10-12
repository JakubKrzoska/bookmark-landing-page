import React, { useState, useEffect } from 'react';
import { LogoBookmark, IconHamburger, IconClose, IconFacebook, IconTwitter } from '../common/Icons';
import './Navbar.scss';

export const Navbar = ({ onOpenModal }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add('menu-open');
    } else {
      document.body.classList.remove('menu-open');
    }

    return () => {
      document.body.classList.remove('menu-open');
    };
  }, [isMenuOpen]);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="navbar">
      <div className="container navbar__container">
        <a href="#" className="navbar__logo-link" aria-label="Bookmark Home">
          <LogoBookmark />
        </a>

        {/* Desktop Navigation */}
        <nav className="navbar__desktop-menu" aria-label="Main Navigation">
          <ul className="navbar__links">
            <li><a href="#features" className="navbar__link">Features</a></li>
            <li><a href="#pricing" className="navbar__link">Pricing</a></li>
            <li><a href="#contact" className="navbar__link">Contact</a></li>
          </ul>
          <button 
            type="button" 
            className="btn btn-danger"
            onClick={onOpenModal}
          >
            Login
          </button>
        </nav>

        {/* Hamburger Trigger for Mobile */}
        <button 
          type="button" 
          className="navbar__hamburger"
          onClick={() => setIsMenuOpen(true)}
          aria-label="Open mobile menu"
          aria-expanded={isMenuOpen}
        >
          <IconHamburger />
        </button>
      </div>

      {/* Full Screen Mobile Menu Overlay */}
      <div className={`navbar__mobile-overlay ${isMenuOpen ? 'navbar__mobile-overlay--open' : ''}`}>
        <div className="navbar__mobile-header">
          <LogoBookmark 
            textColor="#FFFFFF" 
            circleColor="#FFFFFF" 
            bookmarkColor="#242A45" 
          />
          <button 
            type="button" 
            className="navbar__mobile-close"
            onClick={closeMenu}
            aria-label="Close mobile menu"
          >
            <IconClose />
          </button>
        </div>

        <ul className="navbar__mobile-links">
          <li className="navbar__mobile-item">
            <a href="#features" className="navbar__mobile-link" onClick={closeMenu}>Features</a>
          </li>
          <li className="navbar__mobile-item">
            <a href="#pricing" className="navbar__mobile-link" onClick={closeMenu}>Pricing</a>
          </li>
          <li className="navbar__mobile-item">
            <a href="#contact" className="navbar__mobile-link" onClick={closeMenu}>Contact</a>
          </li>
          <li className="navbar__mobile-item" style={{ paddingTop: '24px', borderBottom: 'none' }}>
            <button 
              type="button" 
              className="btn btn-outline-light" 
              onClick={() => { closeMenu(); onOpenModal?.(); }}
            >
              Login
            </button>
          </li>
        </ul>

        <div className="navbar__mobile-social">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
            <IconFacebook fill="#FFFFFF" />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
            <IconTwitter fill="#FFFFFF" />
          </a>
        </div>
      </div>
    </header>
  );
};
