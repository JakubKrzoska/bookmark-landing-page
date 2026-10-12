import React, { useEffect } from 'react';
import { IconClose } from '../common/Icons';
import './Modal.scss';

export const Modal = ({ isOpen, onClose, tab = 2 }) => {
  // Listen for Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    if (isOpen) {
      document.body.classList.add('modal-open');
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.classList.remove('modal-open');
    }

    return () => {
      document.body.classList.remove('modal-open');
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  // Tab content based on tab-2-design.jpg and tab-3-design.jpg
  const modalData = tab === 3
    ? {
        badge: 'Featured Feature • Tab 3',
        title: 'Share your bookmarks',
        description: 'Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button.',
        image: '/images/illustration-features-tab-3.svg'
      }
    : {
        badge: 'Featured Feature • Tab 2',
        title: 'Intelligent search',
        description: 'Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks.',
        image: '/images/illustration-features-tab-2.svg'
      };

  return (
    <div 
      className={`modal ${isOpen ? 'modal--open' : ''}`}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      aria-hidden={!isOpen}
    >
      <div 
        className="modal__backdrop" 
        onClick={onClose} 
        aria-hidden="true" 
      />

      <div className="modal__dialog">
        <button 
          type="button" 
          className="modal__close-btn" 
          onClick={onClose}
          aria-label="Close dialog"
        >
          <IconClose fill="#9194A2" />
        </button>

        <div className="modal__content">
          <div className="modal__image-container">
            <img 
              src={modalData.image} 
              alt={modalData.title} 
              className="modal__image" 
            />
          </div>

          <div className="modal__text">
            <span className="modal__badge">{modalData.badge}</span>
            <h3 id="modal-title">{modalData.title}</h3>
            <p>{modalData.description}</p>
            <div className="modal__actions">
              <a 
                href="#download" 
                className="btn btn-primary"
                onClick={onClose}
              >
                Try It Free
              </a>
              <button 
                type="button" 
                className="btn btn-secondary"
                onClick={onClose}
              >
                Close Preview
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
