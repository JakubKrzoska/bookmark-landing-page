import React from 'react';
import './Download.scss';

const browsersData = [
  {
    name: 'Chrome',
    version: '62',
    icon: '/images/logo-chrome.svg'
  },
  {
    name: 'Firefox',
    version: '55',
    icon: '/images/logo-firefox.svg'
  },
  {
    name: 'Opera',
    version: '46',
    icon: '/images/logo-opera.svg'
  }
];

export const Download = ({ onInstall }) => {
  return (
    <section className="download" id="download" aria-label="Download Extension">
      <div className="container">
        <header className="section-header">
          <h2>Download the extension</h2>
          <p>
            We've got more browsers in the pipeline. Please do let us know if you've got 
            a favourite you'd like us to prioritize.
          </p>
        </header>

        <div className="download__cards">
          {browsersData.map((browser) => (
            <div className="download__card" key={browser.name}>
              <img 
                src={browser.icon} 
                alt={`${browser.name} logo`} 
                className="download__logo" 
              />
              <h3 className="download__title">Add to {browser.name}</h3>
              <p className="download__version">Minimum version {browser.version}</p>
              
              <img 
                src="/images/bg-dots.svg" 
                alt="" 
                className="download__dots" 
                aria-hidden="true" 
              />

              <div className="download__action">
                <button 
                  type="button" 
                  className="btn btn-primary"
                  onClick={() => onInstall?.(browser.name)}
                >
                  Add &amp; Install Extension
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
