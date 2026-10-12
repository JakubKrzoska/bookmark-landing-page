import React, { useState } from 'react';
import './Features.scss';

export const tabsData = [
  {
    id: 'tab-1',
    label: 'Simple Bookmarking',
    title: 'Bookmark in one click',
    description: 'Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.',
    image: '/images/illustration-features-tab-1.svg',
    buttonText: 'More Info'
  },
  {
    id: 'tab-2',
    label: 'Speedy Searching',
    title: 'Intelligent search',
    description: 'Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks.',
    image: '/images/illustration-features-tab-2.svg',
    buttonText: 'More Info'
  },
  {
    id: 'tab-3',
    label: 'Easy Sharing',
    title: 'Share your bookmarks',
    description: 'Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button.',
    image: '/images/illustration-features-tab-3.svg',
    buttonText: 'More Info'
  }
];

export const Features = ({ onOpenModal }) => {
  const [activeTab, setActiveTab] = useState(0);
  const currentTab = tabsData[activeTab];

  return (
    <section className="features" id="features" aria-label="Product Features">
      <div className="container">
        <header className="section-header">
          <h2>Features</h2>
          <p>
            Our aim is to make it quick and easy for you to access your favourite websites. 
            Your bookmarks sync between your devices so you can access them on the go.
          </p>
        </header>

        {/* Tab Navigation */}
        <div className="features__tabs-nav" role="tablist" aria-label="Feature Tabs">
          {tabsData.map((tab, index) => {
            const isActive = activeTab === index;
            return (
              <button
                key={tab.id}
                role="tab"
                id={`tab-${tab.id}`}
                aria-selected={isActive}
                aria-controls={`panel-${tab.id}`}
                className={`features__tab-btn ${isActive ? 'features__tab-btn--active' : ''}`}
                onClick={() => setActiveTab(index)}
                type="button"
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Tab Panel */}
        <div 
          className="features__panel" 
          id={`panel-${currentTab.id}`}
          role="tabpanel"
          aria-labelledby={`tab-${currentTab.id}`}
          key={currentTab.id}
        >
          <div className="features__media">
            <img 
              src={currentTab.image} 
              alt={currentTab.title} 
              className="features__image" 
            />
            {/* Custom CSS curved blue shape extending to left edge */}
            <div className="features__bg-shape" aria-hidden="true" />
          </div>

          <div className="features__content">
            <h3 className="features__title">{currentTab.title}</h3>
            <p className="features__description">{currentTab.description}</p>
            <button 
              type="button" 
              className="btn btn-primary"
              onClick={onOpenModal}
            >
              {currentTab.buttonText}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
