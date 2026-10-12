import React, { useState } from 'react';
import { IconArrow } from '../common/Icons';
import './Faq.scss';

const faqItems = [
  {
    id: 1,
    question: 'What is Bookmark?',
    answer: 'Bookmark is a lightweight, responsive browser extension and manager that lets you organize, sync, and access all your favourite websites with just one click across all your devices.'
  },
  {
    id: 2,
    question: 'How can I request a new browser?',
    answer: 'Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdiet. Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdiet Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdiet.'
  },
  {
    id: 3,
    question: 'Is there a mobile app?',
    answer: 'Sed consectetur quam id neque fermentum accumsan. Praesent luctus vestibulum dolor, ut condimentum urna vulputate eget. Cras in ligula quis est pharetra mattis sit amet pharetra purus. Sed sollicitudin ex et ultricies bibendum.'
  },
  {
    id: 4,
    question: 'What about other Chromium browsers?',
    answer: 'Integer condimentum ipsum id imperdiet finibus. Vivamus in placerat mi, at euismod dui. Aliquam vitae neque eget nisl gravida pellentesque non ut velit.'
  }
];

export const Faq = ({ onOpenModal }) => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleItem = (index) => {
    setOpenIndex(prev => prev === index ? null : index);
  };

  return (
    <section className="faq" id="faq" aria-label="Frequently Asked Questions">
      <div className="container">
        <header className="section-header">
          <h2>Frequently Asked Questions</h2>
          <p>
            Here are some of our FAQs. If you have any other questions you'd like 
            answered please feel free to email us.
          </p>
        </header>

        <div className="faq__accordion">
          {faqItems.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div className="faq__item" key={item.id}>
                <button
                  type="button"
                  className="faq__trigger"
                  onClick={() => toggleItem(index)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${item.id}`}
                  id={`faq-question-${item.id}`}
                >
                  <span className="faq__question">
                    {item.question}
                  </span>
                  <span className={`faq__icon ${isOpen ? 'faq__icon--open' : ''}`}>
                    <IconArrow stroke={isOpen ? '#FA5959' : '#5267DF'} />
                  </span>
                </button>

                <div
                  id={`faq-answer-${item.id}`}
                  role="region"
                  aria-labelledby={`faq-question-${item.id}`}
                  className={`faq__content ${isOpen ? 'faq__content--open' : ''}`}
                >
                  <p className="faq__answer">{item.answer}</p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="faq__action">
          <button 
            type="button" 
            className="btn btn-primary"
            onClick={onOpenModal}
          >
            More Info
          </button>
        </div>
      </div>
    </section>
  );
};
