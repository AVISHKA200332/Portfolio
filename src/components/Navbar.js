import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaUser, FaBriefcase, FaGraduationCap, FaCode, FaTools, FaEnvelope, FaHome } from 'react-icons/fa';
import { useTheme } from '../context/ThemeContext';
import profile from '../data/profile';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled]);

  const navItems = [
    { id: 'home', icon: <FaHome />, label: 'Home' },
    { id: 'about', icon: <FaUser />, label: 'About' },
    { id: 'experience', icon: <FaBriefcase />, label: 'Experience' },
    { id: 'education', icon: <FaGraduationCap />, label: 'Education' },
    { id: 'projects', icon: <FaCode />, label: 'Projects' },
    { id: 'skills', icon: <FaTools />, label: 'Skills' },
    { id: 'contact', icon: <FaEnvelope />, label: 'Contact' },
  ];

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-dark/98 backdrop-blur-lg shadow-2xl border-b border-gray-800' : 'bg-dark/95 backdrop-blur-md'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center">
        <motion.div
          className="flex items-center"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, type: 'spring', stiffness: 200 }}
        >
          <button 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="p-2 bg-white/10 backdrop-blur-sm rounded-xl border-2 border-primary/20 shadow-lg shadow-primary/10 focus:outline-none focus:ring-2 focus:ring-primary/50"
            aria-label="Scroll to top"
          >
            <img 
              src="/images/logo.png" 
              alt={`${profile.name} Logo`} 
              className="h-20 w-auto"
            />
          </button>
        </motion.div>

        <div className="hidden md:flex items-center space-x-1 bg-dark/90 backdrop-blur-lg rounded-full px-3 py-1.5 border border-gray-600/70 shadow-xl">
          {navItems.map((item) => {
            const isActive = window.location.hash === `#${item.id}`;
            return (
              <motion.div key={item.id} className="relative group">
                <motion.a
                  href={`#${item.id}`}
                  className={`flex flex-col items-center p-3.5 rounded-full transition-all duration-200 ${
                    isActive 
                      ? 'text-primary bg-gray-900/50' 
                      : 'text-white/80 hover:text-primary hover:bg-gray-800/50'
                  }`}
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={item.label}
                  title={item.label}
                >
                  <div className="text-2xl">
                    {item.icon}
                  </div>
                  {isActive && (
                    <motion.div 
                      className="absolute -top-1 -right-1 w-3 h-3 bg-primary rounded-full border-2 border-dark shadow-sm shadow-primary/80"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                    />
                  )}
                </motion.a>
                <motion.div 
                  className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-1.5 bg-gradient-to-r from-primary to-secondary rounded-full shadow-sm shadow-primary/50"
                  animate={isActive ? { width: '60%' } : { width: 0 }}
                  transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                />
              </motion.div>
            );
          })}
          <div className="flex items-center space-x-3 ml-3 pl-3 border-l border-gray-600/50 h-10">
            <motion.a
              href={profile.github.url || '#'}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-11 h-11 rounded-full bg-gray-800/60 hover:bg-primary/20 text-white/90 hover:text-white transition-all duration-200 shadow hover:shadow-primary/20"
              aria-label="GitHub"
              whileHover={{ y: -2, scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaGithub className="text-xl" />
            </motion.a>
            <motion.a
              href={profile.linkedin.url || '#'}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-11 h-11 rounded-full bg-gray-800/60 hover:bg-primary/20 text-white/90 hover:text-white transition-all duration-200 shadow hover:shadow-primary/20"
              aria-label="LinkedIn"
              whileHover={{ y: -2, scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaLinkedin className="text-xl" />
            </motion.a>
          </div>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden flex items-center space-x-4">
          <motion.a
            href={profile.github.url || '#'}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-800/50 hover:bg-primary/10 text-light/80 hover:text-primary transition-all duration-300"
            aria-label="GitHub"
            whileHover={{ y: -2, scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaGithub className="text-xl" />
          </motion.a>
          <motion.a
            href={profile.linkedin.url || '#'}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-800/50 hover:bg-primary/10 text-light/80 hover:text-primary transition-all duration-300"
            aria-label="LinkedIn"
            whileHover={{ y: -2, scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaLinkedin className="text-xl" />
          </motion.a>
          <motion.button 
            className="flex items-center justify-center w-11 h-11 rounded-full bg-gray-800/60 hover:bg-primary/20 text-white/90 hover:text-white focus:outline-none transition-all duration-200 shadow hover:shadow-primary/20"
            whileHover={{ y: -2, scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Menu"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </motion.button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
