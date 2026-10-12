import React, { useState } from 'react';
import { useCountdown } from '../../hooks/useCountdown';
import { IconError } from '../common/Icons';
import './Newsletter.scss';

export const Newsletter = () => {
  const { formattedValue } = useCountdown(35000, 0, 20000);
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validateEmail = (val) => {
    const trimmed = val.trim();
    if (!trimmed) {
      return "Whoops, email cannot be empty";
    }
    // Check for @ and basic email format according to task specs
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!trimmed.includes('@') || !emailRegex.test(trimmed)) {
      return "Whoops, make sure it's an email";
    }
    return '';
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationError = validateEmail(email);

    if (validationError) {
      setError(validationError);
      setIsSubmitted(false);
      return;
    }

    setError('');
    setIsSubmitted(true);
    setEmail('');
  };

  const handleChange = (e) => {
    setEmail(e.target.value);
    if (error) {
      setError('');
    }
    if (isSubmitted) {
      setIsSubmitted(false);
    }
  };

  return (
    <section className="newsletter" id="contact" aria-label="Newsletter Signup">
      <div className="container">
        <div className="newsletter__content">
          <p className="newsletter__joined-count">
            {formattedValue}+ ALREADY JOINED
          </p>

          <h2 className="newsletter__title">
            Stay up-to-date with what<br />we’re doing
          </h2>

        <form className="newsletter__form" onSubmit={handleSubmit} noValidate>
          <div className={`newsletter__input-wrapper ${error ? 'newsletter__input-wrapper--error' : ''}`}>
            <div className="newsletter__input-container">
              <input
                type="email"
                className={`newsletter__input ${error ? 'newsletter__input--invalid' : ''}`}
                placeholder="Enter your email address"
                value={email}
                onChange={handleChange}
                aria-label="Email address"
                aria-invalid={!!error}
                aria-describedby={error ? 'newsletter-error' : undefined}
              />
              {error && (
                <div className="newsletter__error-icon">
                  <IconError />
                </div>
              )}
            </div>

            {error && (
              <div id="newsletter-error" className="newsletter__error-message" role="alert">
                {error}
              </div>
            )}
          </div>

          <button type="submit" className="btn btn-danger newsletter__submit">
            Contact Us
          </button>
        </form>

        {isSubmitted && (
          <div className="newsletter__success-message" role="status">
            Thank you! You have successfully subscribed to our newsletter.
          </div>
        )}
        </div>
      </div>
    </section>
  );
};
