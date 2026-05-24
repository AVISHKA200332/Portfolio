import React from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaAward, FaCode, FaLaptopCode, FaJava, FaCalculator, FaAtom, FaDesktop } from 'react-icons/fa';
import { SiReact, SiNodedotjs, SiMongodb, SiPython, SiJavascript } from 'react-icons/si';

const education = [
  {
    id: 1,
    degree: 'BSc (Hons) in Software Engineering',
    institution: 'Sri Lanka Institute of Information Technology (SLIIT)',
    period: 'Oct 2023 – Oct 2027',
    description: 'Software Engineering, Information Technology',
    achievements: [
      'Current GPA: 2.99',
      'Activities and societies: MMA Team of SLIIT and Member Of SLIIT Sport Council',
      'Skills: Full-Stack Development, JavaScript, and more'
    ],
    skills: [
      { name: 'Full-stack Development', icon: <FaLaptopCode className="text-blue-400" /> },
      { name: 'JavaScript', icon: <SiJavascript className="text-yellow-400" /> },
      { name: 'React.js', icon: <SiReact className="text-cyan-400" /> },
      { name: 'Node.js', icon: <SiNodedotjs className="text-green-500" /> },
      { name: 'MongoDB', icon: <SiMongodb className="text-green-600" /> },
      { name: 'Java', icon: <FaJava className="text-red-500" /> },
      { name: 'Python', icon: <SiPython className="text-yellow-400" /> }
    ]
  },
  {
    id: 2,
    degree: 'G.C.E. Advanced Level (A/L)',
    institution: 'Buddhangala Central College',
    period: '2019 – 2021',
    description: 'Information Technology | Combined Mathematics | Physics',
    achievements: [
      'Physical Science Stream',
      'Focused on core science and mathematics subjects'
    ],
    skills: [
      { name: 'Mathematics', icon: <FaCalculator className="text-purple-400" /> },
      { name: 'Physics', icon: <FaAtom className="text-blue-400" /> },
      { name: 'Information Technology', icon: <FaDesktop className="text-green-400" /> },
    ]
  }
];

const Education = () => {
  return (
    <section id="education" className="py-24 bg-dark-900 relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-dark-900/50 to-dark-900"></div>
      </div>

      <div className="container mx-auto px-6 md:px-12 lg:px-24">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-sm font-mono text-primary mb-2 inline-block">ACADEMIC BACKGROUND</span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Education & Qualifications
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 gap-8 max-w-4xl mx-auto">
          {education.map((edu, index) => (
            <motion.div
              key={edu.id}
              className="bg-gradient-to-br from-dark-800/80 to-dark-900/90 backdrop-blur-sm rounded-2xl p-8 border border-gray-800/50 shadow-2xl overflow-hidden relative group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {/* Decorative elements */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -mr-16 -mt-16"></div>
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/5 rounded-full -ml-32 -mb-32"></div>
              
              <div className="relative z-10">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-8">
                  <div className="mb-6 md:mb-0 md:pr-8">
                    <div className="inline-flex items-center mb-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium">
                      <FaGraduationCap className="mr-2" />
                      {edu.period}
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-2 leading-tight">{edu.degree}</h3>
                    <p className="text-lg text-primary font-medium">{edu.institution}</p>
                  </div>
                  <div className="w-20 h-20 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center border border-white/5">
                    <FaGraduationCap className="text-3xl text-primary" />
                  </div>
                </div>
                
                <div className="mb-8">
                  <p className="text-light/80 leading-relaxed">{edu.description}</p>
                </div>
                
                <div className="mb-8">
                  <h4 className="text-lg font-semibold text-white mb-4 flex items-center">
                    <FaAward className="mr-2 text-yellow-400" />
                    Key Highlights
                  </h4>
                  <ul className="space-y-3">
                    {edu.achievements.map((achievement, i) => (
                      <motion.li 
                        key={i} 
                        className="flex items-start group"
                        whileHover={{ x: 5 }}
                        transition={{ type: 'spring', stiffness: 400, damping: 10 }}
                      >
                        <span className="text-primary mr-3 mt-1.5 text-xs">▹</span>
                        <span className="text-light/90">{achievement}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold text-white mb-4 flex items-center">
                    <FaCode className="mr-2 text-blue-400" />
                    Skills Gained
                  </h4>
                  <div className="flex flex-wrap gap-3">
                    {edu.skills.map((skill, i) => (
                      <motion.span
                        key={i}
                        className="inline-flex items-center px-4 py-2 rounded-full bg-dark-700/50 text-light/90 text-sm border border-gray-700/50 hover:border-primary/30 hover:bg-primary/10 transition-all duration-300"
                        whileHover={{ scale: 1.03 }}
                      >
                        {skill.icon}
                        <span className="ml-2">{skill.name}</span>
                      </motion.span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
