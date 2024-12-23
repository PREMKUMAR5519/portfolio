import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

// Reusable PercentBar Component
const PercentBar = ({ name, percentage, delay, isInView }) => {
  const [currentPercentage, setCurrentPercentage] = useState(0);

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const duration = 1000; // 1 second
      const interval = 10; // Update every 10ms
      const step = percentage / (duration / interval);

      const timer = setInterval(() => {
        start += step;
        if (start >= percentage) {
          start = percentage;
          clearInterval(timer);
        }
        setCurrentPercentage(Math.ceil(start));
      }, interval);

      return () => clearInterval(timer);
    } else {
      setCurrentPercentage(0); // Reset when out of view
    }
  }, [isInView, percentage]);

  return (
    <div className='pb_main'>
      <div className='pb_main1'><h3>{name}</h3> <span style={{ marginLeft: '10px' }}>{`${currentPercentage}%`}</span></div>
      <div style={{ background: '#ddd', borderRadius: '2px', overflow: 'hidden' }}>
        <motion.div className='pb_percent'
          initial={{ width: 0 }}
          animate={{ width: isInView ? `${percentage}%` : '0%' }}
          transition={{ duration: 1, delay }}
        
        />
      </div>
     
    </div>
  );
};



export default PercentBar;
