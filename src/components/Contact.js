import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaMapMarkerAlt, FaPhone } from 'react-icons/fa';
import emailjs from '@emailjs/browser';
import profile from '../data/profile';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({ 
    success: null, 
    message: '',
    show: false 
  });
  
  const validateForm = () => {
    const newErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!emailRegex.test(formData.email.trim())) {
      newErrors.email = 'Please enter a valid email address';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Initialize EmailJS with your public key
  useEffect(() => {
    const publicKey = process.env.REACT_APP_EMAILJS_PUBLIC_KEY || '0tp1WCns7NtCr72vD';
    emailjs.init(publicKey);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Reset previous errors and status
    setErrors({});
    setSubmitStatus(prev => ({ ...prev, show: false }));
    
    // Validate form
    if (!validateForm()) {
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      console.log('Sending email with data:', {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject || 'New message from portfolio contact form',
        message: formData.message,
        to_email: profile.email || ''
      });
      
      // Send email using EmailJS
      const response = await emailjs.send(
        process.env.REACT_APP_EMAILJS_SERVICE_ID || 'service_fxohrka',
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID || 'template_laygeal',
        {
          from_name: formData.name,
          from_email: formData.email,
          reply_to: formData.email,
          to_name: profile.name,
          subject: formData.subject || 'New message from portfolio contact form',
          message: formData.message,
          to_email: profile.email || ''
        },
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY || '0tp1WCns7NtCr72vD'
      );
      
      console.log('EmailJS response:', response);
      
      if (response.status === 200 || response.status === '200') {
        // Success response
        setSubmitStatus({
          success: true,
          message: 'Message sent successfully! I will get back to you soon.',
          show: true
        });
        
        // Reset form
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
      } else {
        throw new Error(`Unexpected response status: ${response.status}`);
      }
      
    } catch (error) {
      console.error('Email sending error details:', {
        error,
        errorMessage: error.message,
        errorStack: error.stack
      });
      
      setSubmitStatus({
        success: false,
        message: `Failed to send message. Error: ${error.message || 'Unknown error'}. Please try again or email me directly at ${profile.email || 'your-email@example.com'}`,
        show: true
      });
      
    } finally {
      setIsSubmitting(false);
      
      // Auto-hide message after 8 seconds
      const timer = setTimeout(() => {
        setSubmitStatus(prev => ({ ...prev, show: false }));
      }, 8000);
      
      return () => clearTimeout(timer);
    }
  };

  // Render form feedback notification
  const renderFormFeedback = () => {
    if (!submitStatus.show) return null;
    
    return (
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        className={`fixed bottom-6 right-6 p-4 rounded-lg shadow-lg z-50 max-w-sm ${
          submitStatus.success 
            ? 'bg-green-50 text-green-800 border-l-4 border-green-500' 
            : 'bg-red-50 text-red-800 border-l-4 border-red-500'
        }`}
      >
        <div className="flex items-start">
          <div className="flex-shrink-0">
            {submitStatus.success ? (
              <svg className="h-5 w-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
            ) : (
              <svg className="h-5 w-5 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
              </svg>
            )}
          </div>
          <div className="ml-3">
            <p className="text-sm font-medium">
              {submitStatus.success ? 'Success!' : 'Error'}
            </p>
            <p className="text-sm">
              {submitStatus.message}
            </p>
          </div>
          <div className="ml-4 flex-shrink-0 flex">
            <button 
              onClick={() => setSubmitStatus(prev => ({ ...prev, show: false }))}
              className="inline-flex text-gray-500 hover:text-gray-700 focus:outline-none"
            >
              <span className="sr-only">Close</span>
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>
          </div>
        </div>
      </motion.div>
    );
  };

  const contactInfo = [
    {
      icon: <FaPhone className="text-2xl text-green-400" />,
      title: 'Phone',
      value: profile.phone || '—',
      link: profile.phone ? `tel:${profile.phone.replace(/\s+/g,'')}` : '#',
      color: 'hover:text-green-400',
      ariaLabel: profile.phone ? `Call ${profile.phone}` : 'Phone number',
      className: 'col-span-1'
    },
    {
      icon: <FaMapMarkerAlt className="text-2xl text-red-400" />,
      title: 'Location',
      value: (() => {
        if (!profile.location) return '—';
        const isUrl = /^https?:/i.test(profile.location);
        return isUrl ? 'View on Google Maps' : profile.location;
      })(),
      link: (() => {
        if (!profile.location) return '#';
        const isUrl = /^https?:/i.test(profile.location);
        return isUrl
          ? profile.location
          : `https://maps.google.com/?q=${encodeURIComponent(profile.location)}`;
      })(),
      color: 'hover:text-red-400',
      newTab: true,
      ariaLabel: 'View location on Google Maps',
      className: 'col-span-1'
    },
    {
      icon: <FaGithub className="text-2xl text-gray-300" />,
      title: 'GitHub',
      value: profile.github.username || '—',
      link: profile.github.url || '#',
      newTab: true,
      color: 'hover:text-gray-300',
      ariaLabel: 'Visit GitHub profile',
      className: 'col-span-1'
    },
    {
      icon: <FaLinkedin className="text-2xl text-blue-500" />,
      title: 'LinkedIn',
      value: profile.linkedin.username || '—',
      link: profile.linkedin.url || '#',
      newTab: true,
      color: 'hover:text-blue-500',
      ariaLabel: 'Connect on LinkedIn',
      className: 'col-span-1'
    },
    {
      icon: <FaEnvelope className="text-2xl text-blue-400" />,
      title: 'Email',
      value: profile.email || '—',
      link: profile.email ? `mailto:${profile.email}?subject=Portfolio%20Inquiry` : '#',
      color: 'hover:text-blue-400',
      ariaLabel: profile.email ? `Send email to ${profile.email}` : 'Email',
      className: 'col-span-2' // Make email span 2 columns
    }
  ];

  return (
    <section id="contact" className="py-20 bg-dark/50 relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      </div>

      <div className="container mx-auto px-6 md:px-12 lg:px-24">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-sm font-mono text-primary mb-2 inline-block">GET IN TOUCH</span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Let's Work Together
          </h2>
          <p className="text-light/70 max-w-2xl mx-auto mb-8">
            Have a project in mind or want to discuss potential opportunities? Feel free to reach out to me through the form below or connect with me on social media.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-semibold text-light">Contact Information</h3>
            <p className="text-light/80">
              I'm open to discussing new projects, creative ideas, or opportunities to be part of your vision.
              Feel free to reach out through any of the following channels:
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {contactInfo.map((item, index) => (
                <motion.a
                  key={index}
                  href={item.link}
                  target={item.newTab ? "_blank" : "_self"}
                  rel={item.newTab ? "noopener noreferrer" : ""}
                  className={`group flex items-center p-4 bg-dark-800/50 rounded-lg border border-dark-700 hover:border-primary/50 transition-all duration-300 ${item.color} backdrop-blur-sm ${item.className || ''}`}
                  whileHover={{ y: -3, boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.2), 0 10px 10px -5px rgba(0, 0, 0, 0.1)' }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <div className="p-3 rounded-full bg-dark-700/70 group-hover:bg-primary/10 transition-colors duration-300 mr-4 flex-shrink-0">
                    {item.icon}
                  </div>
                  <div className="min-w-0">
                    <h4 className="text-sm text-light/60 font-medium mb-1 truncate">{item.title}</h4>
                    <p className="text-white font-medium group-hover:text-primary transition-colors duration-300 break-words">
                      {item.value}
                    </p>
                  </div>
                </motion.a>
              ))}
            </div>

            <div className="pt-4">
              <h4 className="text-light font-medium mb-4">Follow Me</h4>
              <div className="flex space-x-4">
                <a
                  href={profile.github.url || '#'}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-dark-200/30 hover:bg-primary/10 text-light/70 hover:text-primary transition-colors"
                  aria-label="GitHub"
                >
                  <FaGithub className="text-xl" />
                </a>
                <a
                  href={profile.linkedin.url || '#'}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-dark-200/30 hover:bg-primary/10 text-light/70 hover:text-primary transition-colors"
                  aria-label="LinkedIn"
                >
                  <FaLinkedin className="text-xl" />
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="bg-dark-200/30 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-gray-800/50"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-2xl font-semibold text-light mb-6">Send Me a Message</h3>
            
            {renderFormFeedback()}
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="mb-6">
                  <div className="flex justify-between items-center mb-2">
                    <label htmlFor="name" className="block text-sm font-medium text-light/80">
                      Name <span className="text-red-400">*</span>
                    </label>
                    {errors.name && (
                      <span className="text-xs text-red-400">{errors.name}</span>
                    )}
                  </div>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={(e) => {
                      handleChange(e);
                      if (errors.name) {
                        setErrors(prev => ({ ...prev, name: null }));
                      }
                    }}
                    className={`w-full px-4 py-3 bg-dark-800/50 border ${
                      errors.name ? 'border-red-500/50' : 'border-dark-700'
                    } rounded-lg focus:ring-2 focus:ring-primary/50 focus:border-primary/50 outline-none transition-all duration-200 text-light/90`}
                    placeholder="Your name"
                  />
                </div>
                <div className="mb-6">
                  <div className="flex justify-between items-center mb-2">
                    <label htmlFor="email" className="block text-sm font-medium text-light/80">
                      Email <span className="text-red-400">*</span>
                    </label>
                    {errors.email && (
                      <span className="text-xs text-red-400">{errors.email}</span>
                    )}
                  </div>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={(e) => {
                      handleChange(e);
                      if (errors.email) {
                        setErrors(prev => ({ ...prev, email: null }));
                      }
                    }}
                    className={`w-full px-4 py-3 bg-dark-800/50 border ${
                      errors.email ? 'border-red-500/50' : 'border-dark-700'
                    } rounded-lg focus:ring-2 focus:ring-primary/50 focus:border-primary/50 outline-none transition-all duration-200 text-light/90`}
                    placeholder="your.email@example.com"
                  />
                </div>
                <div className="mb-6">
                  <label htmlFor="subject" className="block text-sm font-medium text-light/80 mb-2">
                    Subject (Optional)
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-dark-800/50 border border-dark-700 rounded-lg focus:ring-2 focus:ring-primary/50 focus:border-primary/50 outline-none transition-all duration-200 text-light/90"
                    placeholder="What's this about?"
                  />
                </div>
              </div>
              
              <div className="mb-8">
                  <div className="flex justify-between items-center mb-2">
                    <label htmlFor="message" className="block text-sm font-medium text-light/80">
                      Message <span className="text-red-400">*</span>
                    </label>
                    {errors.message && (
                      <span className="text-xs text-red-400">{errors.message}</span>
                    )}
                  </div>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    value={formData.message}
                    onChange={(e) => {
                      handleChange(e);
                      if (errors.message) {
                        setErrors(prev => ({ ...prev, message: null }));
                      }
                    }}
                    className={`w-full px-4 py-3 bg-dark-800/50 border ${
                      errors.message ? 'border-red-500/50' : 'border-dark-700'
                    } rounded-lg focus:ring-2 focus:ring-primary/50 focus:border-primary/50 outline-none transition-all duration-200 text-light/90 resize-none`}
                    placeholder="How can I help you?"
                  ></textarea>
                  <p className="mt-1 text-xs text-light/50">
                    {formData.message.length > 0 ? `${formData.message.length} characters` : ''}
                  </p>
                </div>
              
              <div className="pt-2">
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full sm:w-auto px-8 py-3.5 text-sm font-medium rounded-lg transition-all duration-200 flex items-center justify-center ${
                      isSubmitting
                        ? 'bg-primary/80 cursor-not-allowed'
                        : 'bg-gradient-to-r from-primary to-secondary hover:opacity-90 transform hover:-translate-y-0.5 shadow-lg hover:shadow-primary/20 active:translate-y-0'
                    }`}
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Sending...
                      </>
                    ) : (
                      <>
                        <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                        Send Message
                      </>
                    )}
                  </button>
                  
                  <p className="text-xs text-light/50 text-center sm:text-right">
                    I'll get back to you within 24-48 hours
                  </p>
                </div>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
