import React from 'react';
import { motion } from 'framer-motion';

const Layout = ({ children, className = '' }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className={`w-full h-full inline-block z-0 bg-dark p-32 ${className}`}
    >
      {children}
    </motion.div>
  );
};

export default Layout;
