import React from 'react';
import { motion } from 'framer-motion';

const MotionFadeIn = ({ 
  children, 
  delay = 0, 
  duration = 0.5, 
  ease = "easeOut",
  ...props 
}) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
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

export default MotionFadeIn;
