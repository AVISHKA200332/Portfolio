import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  FaHome, 
  FaUser, 
  FaBriefcase, 
  FaGraduationCap, 
  FaCode, 
  FaTools, 
  FaEnvelope
} from 'react-icons/fa';

const Sidebar = () => {
  const [activeSection, setActiveSection] = useState('home');

  const navItems = [
    { id: 'home', icon: <FaHome /> },
    { id: 'about', icon: <FaUser /> },
    { id: 'experience', icon: <FaBriefcase /> },
    { id: 'education', icon: <FaGraduationCap /> },
    { id: 'projects', icon: <FaCode /> },
    { id: 'skills', icon: <FaTools /> },
    { id: 'contact', icon: <FaEnvelope /> },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'experience', 'education', 'projects', 'skills', 'contact'];
      const scrollPosition = window.scrollY + window.innerHeight / 3;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="fixed left-0 top-0 h-full z-40 flex items-center">
      <div className="h-auto flex items-center">
        <div className="py-8 w-16 flex flex-col items-center justify-center space-y-8 bg-dark/90 backdrop-blur-lg rounded-r-xl shadow-xl">
          {navItems.map((item, index) => {
            const isActive = activeSection === item.id;
            return (
              <motion.button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`group p-3 rounded-full transition-all duration-300 relative ${
                  isActive 
                    ? 'text-primary' 
                    : 'text-light/60 hover:text-light/90 hover:bg-gray-800/50'
                }`}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="text-2xl transform transition-transform duration-300 group-hover:scale-110">{item.icon}</div>
                {isActive && (
                  <motion.div 
                    className="absolute left-0 top-1/2 -translate-x-0.5 w-1 h-12 bg-primary rounded-r transform transition-all duration-300 group-hover:h-14"
                    layoutId="activeIndicator"
                    initial={false}
                    transition={{
                      type: 'spring',
                      stiffness: 500,
                      damping: 30,
                    }}
                  />
                )}
              </motion.button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
