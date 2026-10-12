import { useState, useEffect } from 'react';

/**
 * Custom hook to smoothly count down from initialValue to targetValue
 * over a given duration in milliseconds using requestAnimationFrame.
 */
export const useCountdown = (initialValue = 35000, targetValue = 0, durationMs = 20000) => {
  const [currentValue, setCurrentValue] = useState(initialValue);

  useEffect(() => {
    let animationFrameId;
    const startTime = performance.now();

    const step = (now) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / durationMs, 1);
      
      // Linear or ease-out interpolation
      const val = Math.round(initialValue - (initialValue - targetValue) * progress);
      setCurrentValue(val);

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(step);
      }
    };

    animationFrameId = requestAnimationFrame(step);

    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, [initialValue, targetValue, durationMs]);

  // Formatter for display: e.g. "35,000"
  const formattedValue = currentValue.toLocaleString('en-US');

  return { value: currentValue, formattedValue };
};
