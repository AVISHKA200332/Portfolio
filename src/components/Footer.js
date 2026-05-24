import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaArrowUp } from 'react-icons/fa';
import profile from '../data/profile';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-dark-900/50 backdrop-blur-sm border-t border-gray-800/50">
      <div className="container mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <motion.div
            className="mb-6 md:mb-0"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              {profile.name}
            </h2>
            <p className="text-light/70 mt-2">
              {profile.title}
            </p>
          </motion.div>

          <motion.div
            className="flex flex-col items-center md:items-end space-y-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="flex space-x-6">
              <a
                href={profile.github.url || '#'}
                target="_blank"
                rel="noopener noreferrer"
                className="text-light/70 hover:text-primary transition-colors"
                aria-label="GitHub"
              >
                <FaGithub className="w-6 h-6" />
              </a>
              <a
                href={profile.linkedin.url || '#'}
                target="_blank"
                rel="noopener noreferrer"
                className="text-light/70 hover:text-primary transition-colors"
                aria-label="LinkedIn"
              >
                <FaLinkedin className="w-6 h-6" />
              </a>
              <a
                href={profile.email ? `mailto:${profile.email}` : '#contact'}
                className="text-light/70 hover:text-primary transition-colors"
                aria-label="Email"
              >
                <FaEnvelope className="w-6 h-6" />
              </a>
            </div>
            
            <button
              onClick={scrollToTop}
              className="flex items-center text-light/70 hover:text-primary transition-colors group"
              aria-label="Back to top"
            >
              <span className="mr-2">Back to top</span>
              <FaArrowUp className="w-4 h-4 group-hover:-translate-y-1 transition-transform" />
            </button>
          </motion.div>
        </div>

        <motion.div 
          className="border-t border-gray-800/50 mt-12 pt-8 text-center text-light/50 text-sm"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <p>© {new Date().getFullYear()} {profile.name}. All rights reserved.</p>
          <p className="mt-2">
            Designed & Built with ❤️ by {profile.name}
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
