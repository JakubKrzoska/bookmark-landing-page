import React, { useState, useEffect, useRef } from 'react';
import { Navbar } from './components/Navbar/Navbar';
import { Hero } from './components/Hero/Hero';
import { Features } from './components/Features/Features';
import { Download } from './components/Download/Download';
import { Faq } from './components/Faq/Faq';
import { Newsletter } from './components/Newsletter/Newsletter';
import { Footer } from './components/Footer/Footer';
import { Modal } from './components/Modal/Modal';

export const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const hasTriggeredRef = useRef(false);

  // Requirement: Modal opens after 30 seconds of visiting the page
  useEffect(() => {
    const timer = setTimeout(() => {
      if (!hasTriggeredRef.current) {
        setIsModalOpen(true);
        hasTriggeredRef.current = true;
      }
    }, 30000);

    return () => clearTimeout(timer);
  }, []);

  // Requirement: Modal opens when moving mouse to the top part of the page (exit-intent)
  useEffect(() => {
    const handleMouseMove = (e) => {
      if (e.clientY <= 15 && !hasTriggeredRef.current) {
        setIsModalOpen(true);
        hasTriggeredRef.current = true;
      }
    };

    const handleMouseLeave = (e) => {
      if (e.clientY <= 0 && !hasTriggeredRef.current) {
        setIsModalOpen(true);
        hasTriggeredRef.current = true;
      }
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="app">
      <Navbar onOpenModal={handleOpenModal} />
      <main>
        <Hero />
        <Features onOpenModal={handleOpenModal} />
        <Download onInstall={() => alert('Extension download initiated!')} />
        <Faq onOpenModal={handleOpenModal} />
      </main>
      <Newsletter />
      <Footer />

      {/* Modal requirement with Tab 2 content */}
      <Modal 
        isOpen={isModalOpen} 
        onClose={handleCloseModal} 
        tab={2} 
      />
    </div>
  );
};

export default App;
