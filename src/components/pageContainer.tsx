import React from 'react';
import { motion } from 'framer-motion';

interface PageContainerProps {
  children: React.ReactNode;
}

const PageContainer: React.FC<PageContainerProps> = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 100}}
      animate={{ opacity: 1,x:-50, y: 250}}
      exit={{ opacity: 0, x: -100 }}
      transition={{ duration: 1 }}
    >
      {children}
    </motion.div>
  );
};

export default PageContainer;