import React from 'react';
import { LogoBookmark, IconFacebook, IconTwitter } from '../common/Icons';
import './Footer.scss';

export const Footer = () => {
  return (
    <footer className="footer" aria-label="Page Footer">
      <div className="container footer__container">
        <div className="footer__left">
          <a href="#" className="footer__logo-link" aria-label="Bookmark Home">
            <LogoBookmark 
              textColor="#FFFFFF" 
              circleColor="#5267DF" 
              bookmarkColor="#FFFFFF" 
            />
          </a>

          <ul className="footer__links">
            <li><a href="#features" className="footer__link">Features</a></li>
            <li><a href="#pricing" className="footer__link">Pricing</a></li>
            <li><a href="#contact" className="footer__link">Contact</a></li>
          </ul>
        </div>

        <div className="footer__socials">
          <a 
            href="https://facebook.com" 
            className="footer__social-link" 
            target="_blank" 
            rel="noopener noreferrer" 
            aria-label="Facebook"
          >
            <IconFacebook fill="#FFFFFF" />
          </a>
          <a 
            href="https://twitter.com" 
            className="footer__social-link" 
            target="_blank" 
            rel="noopener noreferrer" 
            aria-label="Twitter"
          >
            <IconTwitter fill="#FFFFFF" />
          </a>
        </div>
      </div>
    </footer>
  );
};
