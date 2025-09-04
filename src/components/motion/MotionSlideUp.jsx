import React from 'react';
import { motion } from 'framer-motion';

const MotionSlideUp = ({ 
  children, 
  delay = 0, 
  duration = 0.5, 
  ease = "easeOut",
  distance = 30,
  ...props 
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: distance }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration,
        delay,
        ease,
      }}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export default MotionSlideUp;
