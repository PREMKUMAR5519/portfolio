import React, { useState, useEffect, useRef } from 'react';
import '../styles/AnimatedDiv.css';

const AnimatedDiv = ({ children, delay = 0 }) => {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      },
      { threshold: 0.2 } // Trigger when 20% of the element is visible
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={elementRef}
      className={`animated-div ${isVisible ? 'scale-in' : 'scale-out'}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

export default AnimatedDiv;