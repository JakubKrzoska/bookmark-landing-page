import React from 'react';
import './Hero.scss';

export const Hero = () => {
  return (
    <section className="hero" aria-label="Hero Introduction">
      <div className="container hero__container">
        <div className="hero__content">
          <h1 className="hero__title">A Simple Bookmark Manager</h1>
          <p className="hero__description">
            A clean and simple interface to organize your favourite websites. Open a new 
            browser tab and see your sites load instantly. Try it for free.
          </p>
          <div className="hero__actions">
            <a href="#download" className="btn btn-primary">
              Get it on Chrome
            </a>
            <a href="#download" className="btn btn-secondary">
              Get it on Firefox
            </a>
          </div>
        </div>

        <div className="hero__media">
          <img 
            src="/images/illustration-hero.svg" 
            alt="Bookmark Manager dashboard illustration" 
            className="hero__image"
          />
        </div>
      </div>
      {/* Custom CSS curved background shape */}
      <div className="hero__bg-shape" aria-hidden="true" />
    </section>
  );
};
