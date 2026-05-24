import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaArrowRight } from 'react-icons/fa';
import profile from '../data/profile';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen pt-24 sm:pt-28 flex items-center justify-center relative overflow-hidden bg-dark">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-dark from-30% to-dark/90"></div>
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.02]"></div>
      </div>

      <div className="container mx-auto px-6 md:px-12 lg:px-24 h-full flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-center w-full">
          <motion.div
            className="text-center lg:text-left"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.6, 0.01, 0, 0.9] }}
          >
            <motion.p 
              className="text-primary font-mono text-sm md:text-base mb-2"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              Hello, I'm
            </motion.p>
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 text-white leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8, ease: [0.6, 0.01, 0, 0.9] }}
            >
              {profile.name}
            </motion.h1>
            
            <motion.h2 
              className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-6 text-primary/80 leading-snug"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8, ease: [0.6, 0.01, 0, 0.9] }}
            >
              {profile.title}
            </motion.h2>
            
            <motion.p 
              className="text-base md:text-lg text-light/70 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              I'm a full-stack developer with strong interest in backend development and system architecture. I enjoy building scalable systems, optimizing performance, and continuously improving code quality.
            </motion.p>

            <motion.div 
              className="flex flex-wrap gap-4 mb-10 md:mb-16"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              <a
                href="#contact"
                className="relative px-6 py-3 sm:px-8 sm:py-4 bg-gradient-to-r from-primary to-primary/80 text-dark font-medium rounded-md group overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-primary/20"
              >
                <span className="relative z-10">Get In Touch</span>
                <span className="absolute inset-0 bg-white/10 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              </a>
              <a
                href="#projects"
                className="relative px-6 py-3 sm:px-8 sm:py-4 border border-light/20 text-light font-medium rounded-md group overflow-hidden transition-all duration-300 hover:border-primary/30 hover:text-primary"
              >
                <span className="relative z-10">View My Work</span>
                <span className="absolute inset-0 bg-primary/5 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              </a>
            </motion.div>

            <motion.div 
              className="flex space-x-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              <a 
                href={profile.github.url || '#'} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-light hover:text-primary transition-colors duration-300"
                aria-label="GitHub"
              >
                <FaGithub size={20} />
              </a>
              <a 
                href={profile.linkedin.url || '#'} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-light hover:text-primary transition-colors duration-300"
                aria-label="LinkedIn"
              >
                <FaLinkedin size={20} />
              </a>
              <a 
                href={profile.email ? `mailto:${profile.email}` : '#contact'} 
                className="text-light hover:text-primary transition-colors duration-300"
                aria-label="Email"
              >
                <FaEnvelope size={20} />
              </a>
            </motion.div>
            
            <motion.div 
              className="mt-16 text-center lg:text-left"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.8 }}
            >
              <a 
                href="#about" 
                className="inline-flex items-center text-sm font-mono text-light/60 hover:text-primary transition-colors duration-300 group"
              >
                <span className="mr-3">Explore More</span>
                <span className="inline-block w-8 h-px bg-light/40 group-hover:bg-primary group-hover:w-12 transition-all duration-300 mr-3"></span>
                <FaArrowRight className="transform group-hover:translate-x-1 transition-transform duration-300" size={14} />
              </a>
            </motion.div>
          </motion.div>

          <motion.div 
            className="relative flex justify-center items-center"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.6, 0.01, 0, 0.9] }}
          >
            <div className="relative w-48 h-48 sm:w-56 sm:h-56 md:w-72 md:h-72 lg:w-80 lg:h-80 xl:w-96 xl:h-96">
              {/* Decorative elements */}
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-primary/5 rounded-full filter blur-3xl"></div>
              <div className="absolute -bottom-10 -right-10 w-60 h-60 bg-secondary/5 rounded-full filter blur-3xl"></div>
              
              {/* Profile image container */}
              <div className="relative w-full h-full group">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-secondary/30 rounded-full blur-xl opacity-70 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute inset-0.5 bg-dark rounded-full">
                  <div className="relative w-full h-full rounded-full overflow-hidden border border-light/10">
                    <img 
                      src="/images/userprofile.png" 
                      alt={profile.avatarAlt || profile.name} 
                      className="w-full h-full object-cover object-[50%_15%] scale-100 group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                  </div>
                </div>
              </div>
              
              {/* Decorative border animation */}
              <div className="absolute inset-0 rounded-full p-1">
                <div className="relative w-full h-full">
                  <div className="absolute inset-0 rounded-full border border-light/5"></div>
                  <div className="absolute inset-0 rounded-full border-t border-primary/30 animate-spin-slow" style={{ animationDuration: '15s' }}></div>
                  <div className="absolute inset-0 rounded-full border-r border-secondary/30 animate-spin-slow-reverse" style={{ animationDuration: '20s' }}></div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div 
        className="absolute bottom-6 sm:bottom-10 left-1/2 transform -translate-x-1/2"
        animate={{
          y: [0, 10, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatType: "loop",
        }}
      >
        <a href="#about" className="text-light/50 hover:text-primary transition-colors">
          <svg
            className="w-8 h-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </a>
      </motion.div>
    </section>
  );
};

export default Hero;
