import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaCode, FaServer, FaDatabase, FaMobile, FaTools, FaJava, FaAws, FaGraduationCap, FaLaptopCode, FaBrain, FaRocket, FaLayerGroup, FaGithub, FaBriefcase } from 'react-icons/fa';
import { SiTypescript, SiPython, SiReact, SiNodedotjs, SiMongodb, SiPostgresql, SiDocker, SiGraphql, SiRedux, SiTailwindcss, SiGit, SiGithub, SiVisualstudiocode, SiFigma } from 'react-icons/si';
import { TbApi } from 'react-icons/tb';

const About = () => {
  const [activeTab, setActiveTab] = useState('about');
  
  const skills = [
    { 
      name: 'Programming Languages', 
      icon: <FaCode className="text-2xl text-blue-400" />, 
      items: [
        { name: 'Java', level: 85 },
        { name: 'Python', level: 80 },
        { name: 'JavaScript', level: 85 },
        { name: 'PHP', level: 75 },
        { name: 'Kotlin', level: 70 },
        { name: 'C++', level: 70 },
        { name: 'C#', level: 65 }
      ] 
    },
    { 
      name: 'Web Technologies', 
      icon: <FaServer className="text-2xl text-green-500" />, 
      items: [
        { name: 'React.js', level: 85 },
        { name: 'Next.js', level: 75 },
        { name: 'HTML5/CSS3', level: 90 },
        { name: 'Tailwind CSS', level: 85 },
        { name: 'Spring Boot', level: 80 },
        { name: 'Node.js', level: 80 },
        { name: 'Express.js', level: 75 },
        { name: 'RESTful APIs', level: 85 },
        { name: 'React Native', level: 70 }
      ] 
    },
    { 
      name: 'Databases', 
      icon: <FaDatabase className="text-2xl text-purple-500" />, 
      items: [
        { name: 'MySQL', level: 85 },
        { name: 'PostgreSQL', level: 80 },
        { name: 'MongoDB', level: 75 },
        { name: 'SQL Workbench', level: 80 }
      ] 
    },
    { 
      name: 'Tools & Platforms', 
      icon: <FaTools className="text-2xl text-yellow-400" />, 
      items: [
        { name: 'AWS (Cognito, IAM, S3)', level: 75 },
        { name: 'Docker', level: 70 },
        { name: 'GitHub Actions', level: 70 },
        { name: 'Git/GitHub', level: 85 },
        { name: 'VS Code', level: 90 },
        { name: 'IntelliJ IDEA', level: 85 },
        { name: 'Postman', level: 80 }
      ] 
    },
    { 
      name: 'Other Skills', 
      icon: <FaLayerGroup className="text-2xl text-red-400" />, 
      items: [
        { name: 'System Architecture', level: 80 },
        { name: 'OOP', level: 90 },
        { name: 'Design Patterns', level: 80 },
        { name: 'Agile/Scrum', level: 85 },
        { name: 'Software Testing', level: 80 },
        { name: 'Technical Documentation', level: 85 },
        { name: 'Project Management', level: 80 },
        { name: 'Git & GitHub', level: 85 },
        { name: 'VS Code', level: 90 },
        { name: 'Figma', level: 70 },
        { name: 'CI/CD', level: 75 },
        { name: 'Linux', level: 70 }
      ] 
    }
  ];

  const techStack = [
    { name: 'TypeScript', icon: <SiTypescript className="text-4xl text-blue-400" />, category: 'frontend' },
    { name: 'React', icon: <SiReact className="text-4xl text-cyan-400" />, category: 'frontend' },
    { name: 'Node.js', icon: <SiNodedotjs className="text-4xl text-green-500" />, category: 'backend' },
    { name: 'Python', icon: <SiPython className="text-4xl text-yellow-400" />, category: 'backend' },
    { name: 'Java', icon: <FaJava className="text-4xl text-red-500" />, category: 'backend' },
    { name: 'MongoDB', icon: <SiMongodb className="text-4xl text-green-600" />, category: 'database' },
    { name: 'PostgreSQL', icon: <SiPostgresql className="text-4xl text-blue-600" />, category: 'database' },
    { name: 'GraphQL', icon: <SiGraphql className="text-4xl text-pink-500" />, category: 'backend' },
    { name: 'Redux', icon: <SiRedux className="text-4xl text-purple-500" />, category: 'frontend' },
    { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-4xl text-cyan-300" />, category: 'frontend' },
    { name: 'Docker', icon: <SiDocker className="text-4xl text-blue-400" />, category: 'devops' },
    { name: 'AWS', icon: <FaAws className="text-4xl text-yellow-500" />, category: 'devops' },
  ];

  const categories = [
    { id: 'all', name: 'All', icon: <FaLayerGroup className="mr-2" /> },
    { id: 'frontend', name: 'Frontend', icon: <FaCode className="mr-2" /> },
    { id: 'backend', name: 'Backend', icon: <FaServer className="mr-2" /> },
    { id: 'database', name: 'Database', icon: <FaDatabase className="mr-2" /> },
    { id: 'devops', name: 'DevOps', icon: <FaTools className="mr-2" /> },
  ];
  
  const [selectedCategory, setSelectedCategory] = useState('all');
  
  const filteredTechStack = selectedCategory === 'all' 
    ? techStack 
    : techStack.filter(tech => tech.category === selectedCategory);
    
  const stats = [
    { name: 'Projects Completed', value: '25+', icon: <FaLaptopCode className="text-3xl" /> },
    { name: 'Years Experience', value: '2+', icon: <FaCode className="text-3xl" /> },
    { name: 'Technologies', value: '15+', icon: <FaTools className="text-3xl" /> },
    { name: 'Open Source', value: '10+', icon: <FaGithub className="text-3xl" /> },
  ];

  return (
    <section id="about" className="py-24 bg-dark-900 relative overflow-hidden">
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
          <span className="text-sm font-mono text-primary mb-2 inline-block">ABOUT ME</span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Professional Overview
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"></div>
        </motion.div>

        {/* Tabs */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex p-1 bg-dark-800/50 rounded-xl border border-gray-800/50">
            {[
              { id: 'about', label: 'About Me', icon: <FaCode className="mr-2" /> },
              { id: 'skills', label: 'My Skills', icon: <FaTools className="mr-2" /> },
              { id: 'experience', label: 'Experience', icon: <FaRocket className="mr-2" /> }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-2 text-sm font-medium rounded-lg flex items-center transition-colors ${
                  activeTab === tab.id
                    ? 'bg-gradient-to-r from-primary/20 to-secondary/20 text-white'
                    : 'text-light/60 hover:text-white'
                }`}
              >
                {tab.icon}
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            {activeTab === 'about' && (
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                <motion.div 
                  className="space-y-8"
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  <div className="bg-gradient-to-br from-dark-800/80 to-dark-900/90 backdrop-blur-sm rounded-2xl p-8 border border-gray-800/50 shadow-xl">
                    <h3 className="text-2xl font-semibold mb-6 text-white flex items-center">
                      <FaCode className="mr-3 text-primary" />
                      Who Am I?
                    </h3>
                    <div className="prose prose-invert max-w-none">
                      <p className="text-light/80 mb-4">
                        I'm a passionate Software Engineering student at SLIIT with a strong foundation in backend development and system architecture. My journey in technology is driven by a deep curiosity for solving complex problems and creating efficient, scalable solutions.
                      </p>
                      <p className="text-light/80 mb-4">
                        With experience in full-stack development, I specialize in building robust web applications using modern technologies. I'm particularly interested in system design, database optimization, and creating seamless user experiences.
                      </p>
                      <p className="text-light/80">
                        When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or sharing my knowledge with the developer community.
                      </p>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    {stats.map((stat, index) => (
                      <motion.div 
                        key={stat.name}
                        className="bg-dark-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-800/50 hover:border-primary/30 transition-colors"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 * index }}
                      >
                        <div className="text-primary mb-3">
                          {stat.icon}
                        </div>
                        <h4 className="text-3xl font-bold text-white mb-1">{stat.value}</h4>
                        <p className="text-sm text-light/70">{stat.name}</p>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>

                <motion.div 
                  className="space-y-8"
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="flex items-start">
                      <div className="bg-blue-500/10 p-2 rounded-lg mr-4">
                        <FaRocket className="text-blue-500" />
                      </div>
                      <div>
                        <h4 className="font-medium text-white mb-1">Performance First</h4>
                        <p className="text-light/70 text-sm">I optimize for speed and efficiency, ensuring smooth user experiences even under heavy loads.</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="bg-yellow-500/10 p-2 rounded-lg mr-4">
                        <FaTools className="text-yellow-500" />
                      </div>
                      <div>
                        <h4 className="font-medium text-white mb-1">Best Practices</h4>
                        <p className="text-light/70 text-sm">I follow industry best practices and stay updated with the latest trends and technologies.</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gradient-to-br from-primary/5 to-secondary/5 backdrop-blur-sm rounded-2xl p-8 border border-gray-800/50">
                    <h3 className="text-2xl font-semibold mb-6 text-white">Education</h3>
                    <div className="space-y-6">
                      <div className="flex gap-4">
                        <div className="flex flex-col items-center">
                          <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                            <FaGraduationCap className="text-xl text-primary" />
                          </div>
                          <div className="w-0.5 h-full bg-gradient-to-b from-primary/30 to-transparent mt-2"></div>
                        </div>
                        <div>
                          <h4 className="font-semibold text-white">BSc (Hons) in Software Engineering</h4>
                          <p className="text-sm text-light/70">Sri Lanka Institute of Information Technology (SLIIT)</p>
                          <p className="text-xs text-light/50">2023 - 2027</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            )}

            {activeTab === 'skills' && (
              <div className="grid grid-cols-1 gap-12">
                <div className="bg-gradient-to-br from-dark-800/80 to-dark-900/90 backdrop-blur-sm rounded-2xl p-8 border border-gray-800/50 shadow-xl">
                  <h3 className="text-2xl font-semibold mb-8 text-white">Skills & Expertise</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {skills.map((skill, index) => (
                      <motion.div 
                        key={skill.name}
                        className="bg-dark-800/50 rounded-xl p-6 border border-gray-800/50"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 * index }}
                      >
                        <div className="flex items-center mb-4">
                          <div className="mr-3">
                            {skill.icon}
                          </div>
                          <h4 className="text-lg font-semibold text-white">{skill.name}</h4>
                        </div>
                        <div className="space-y-3 mt-4">
                          {skill.items.map((item, i) => (
                            <div key={i} className="space-y-1">
                              <div className="flex justify-between text-sm text-light/80">
                                <span>{item.name}</span>
                                <span>{item.level}%</span>
                              </div>
                              <div className="h-2 bg-dark-700 rounded-full overflow-hidden">
                                <div 
                                  className="h-full bg-gradient-to-r from-primary to-secondary rounded-full"
                                  style={{ width: `${item.level}%` }}
                                ></div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>

                <div className="bg-gradient-to-br from-dark-800/80 to-dark-900/90 backdrop-blur-sm rounded-2xl p-8 border border-gray-800/50 shadow-xl">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
                    <h3 className="text-2xl font-semibold text-white">Technologies I Use</h3>
                    <div className="flex flex-wrap gap-2 mt-4 md:mt-0">
                      {categories.map((category) => (
                        <button
                          key={category.id}
                          onClick={() => setSelectedCategory(category.id)}
                          className={`px-3 py-1.5 text-xs font-medium rounded-full flex items-center transition-colors ${
                            selectedCategory === category.id
                              ? 'bg-primary/10 text-primary border border-primary/20'
                              : 'bg-dark-700/50 text-light/60 hover:bg-dark-700/80 hover:text-light/80'
                          }`}
                        >
                          {category.icon}
                          {category.name}
                        </button>
                      ))}
                    </div>
                  </div>
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                    <AnimatePresence>
                      {filteredTechStack.map((tech, index) => (
                        <motion.div
                          key={tech.name}
                          layout
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 0.8 }}
                          transition={{ duration: 0.2 }}
                          className="flex flex-col items-center p-4 rounded-xl bg-dark-800/50 hover:bg-dark-700/50 border border-gray-800/50 hover:border-primary/20 transition-all duration-300 group"
                        >
                          <div className="w-12 h-12 flex items-center justify-center mb-2">
                            {tech.icon}
                          </div>
                          <span className="text-sm text-center text-light/80 group-hover:text-white transition-colors">
                            {tech.name}
                          </span>
                        </motion.div>
                      ))}
                    </AnimatePresence>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'experience' && (
              <div className="space-y-8">
                <div className="bg-gradient-to-br from-dark-800/80 to-dark-900/90 backdrop-blur-sm rounded-2xl p-8 border border-gray-800/50 shadow-xl">
                  <h3 className="text-2xl font-semibold mb-8 text-white">Professional Experience</h3>
                  
                  <div className="relative">
                    <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-transparent via-primary/30 to-transparent"></div>
                    
                    <div className="relative pl-16 pb-12">
                      <div className="absolute left-0 top-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                        <FaBriefcase className="text-xl text-primary" />
                      </div>
                      <h4 className="text-xl font-semibold text-white mb-1">Information Systems & Accounts Executive</h4>
                      <p className="text-primary font-medium">Jayalath Sudu Putha (Pvt) Ltd</p>
                      <p className="text-sm text-light/60 mb-4">June 2023 - Present | Colombo, Sri Lanka</p>
                      
                      <div className="space-y-3">
                        <div className="flex">
                          <span className="text-primary mr-2">▹</span>
                          <p className="text-light/80">Spearheaded digital transformation by implementing automated accounting systems, reducing manual data entry by 60%</p>
                        </div>
                        <div className="flex">
                          <span className="text-primary mr-2">▹</span>
                          <p className="text-light/80">Developed and maintained custom financial dashboards using Power BI, improving financial reporting efficiency by 45%</p>
                        </div>
                        <div className="flex">
                          <span className="text-primary mr-2">▹</span>
                          <p className="text-light/80">Established robust internal controls that reduced financial discrepancies by 25%</p>
                        </div>
                      </div>
                      
                      <div className="mt-6">
                        <h5 className="text-sm font-medium text-light/70 mb-3">Technologies Used:</h5>
                        <div className="flex flex-wrap gap-2">
                          {['QuickBooks', 'Microsoft Office', 'Power BI', 'Excel VBA', 'SQL', 'ERP Systems'].map((tech, i) => (
                            <span key={i} className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full">
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                    
                    <div className="relative pl-16 pb-12">
                      <div className="absolute left-0 top-0 w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center">
                        <FaCode className="text-xl text-secondary" />
                      </div>
                      <h4 className="text-xl font-semibold text-white mb-1">Freelance Web Developer</h4>
                      <p className="text-primary font-medium">Self-Employed</p>
                      <p className="text-sm text-light/60 mb-4">2020 - Present | Remote</p>
                      
                      <div className="space-y-3">
                        <div className="flex">
                          <span className="text-primary mr-2">▹</span>
                          <p className="text-light/80">Delivered 15+ responsive web applications with modern UI/UX designs</p>
                        </div>
                        <div className="flex">
                          <span className="text-primary mr-2">▹</span>
                          <p className="text-light/80">Improved client website performance by 40% through code optimization</p>
                        </div>
                        <div className="flex">
                          <span className="text-primary mr-2">▹</span>
                          <p className="text-light/80">Mentored 3 junior developers in modern web development practices</p>
                        </div>
                      </div>
                      
                      <div className="mt-6">
                        <h5 className="text-sm font-medium text-light/70 mb-3">Technologies Used:</h5>
                        <div className="flex flex-wrap gap-2">
                          {['React', 'Node.js', 'MongoDB', 'Express', 'TypeScript', 'Tailwind CSS', 'Firebase', 'AWS'].map((tech, i) => (
                            <span key={i} className="px-3 py-1 bg-secondary/10 text-secondary text-xs rounded-full">
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-dark-800/80 to-dark-900/90 backdrop-blur-sm rounded-2xl p-8 border border-gray-800/50 shadow-xl">
                  <h3 className="text-2xl font-semibold mb-6 text-white">Education</h3>
                  
                  <div className="relative">
                    <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-transparent via-primary/30 to-transparent"></div>
                    
                    <div className="relative pl-16 pb-12">
                      <div className="absolute left-0 top-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                        <FaGraduationCap className="text-xl text-primary" />
                      </div>
                      <h4 className="text-xl font-semibold text-white mb-1">BSc (Hons) in Software Engineering</h4>
                      <p className="text-primary font-medium">Sri Lanka Institute of Information Technology (SLIIT)</p>
                      <p className="text-sm text-light/60 mb-4">2023 - 2027 | Colombo, Sri Lanka</p>
                      
                      <div className="space-y-3">
                        <div className="flex">
                          <span className="text-primary mr-2">▹</span>
                          <p className="text-light/80">Current GPA: 3.6/4.0 (First Class Honors)</p>
                        </div>
                        <div className="flex">
                          <span className="text-primary mr-2">▹</span>
                          <p className="text-light/80">Relevant Coursework: Data Structures & Algorithms, Database Systems, Web Development, Software Engineering, Computer Networks</p>
                        </div>
                        <div className="flex">
                          <span className="text-primary mr-2">▹</span>
                          <p className="text-light/80">Thesis: "Optimizing Microservices Architecture for Scalable Web Applications" (Ongoing)</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default About;
