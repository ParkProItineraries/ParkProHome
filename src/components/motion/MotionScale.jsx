import React from 'react';
import { motion } from 'framer-motion';

const MotionScale = ({ 
  children, 
  delay = 0, 
  duration = 0.5, 
  ease = "easeOut",
  scale = 0.9,
  ...props 
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale }}
      animate={{ opacity: 1, scale: 1 }}
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

export default MotionScale;
