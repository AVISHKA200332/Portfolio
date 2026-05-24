import React from 'react';
import { motion } from 'framer-motion';
import { FaBriefcase, FaCalendarAlt, FaMapMarkerAlt, FaExternalLinkAlt, FaCodeBranch, FaCode } from 'react-icons/fa';
import { SiMicrosoftoffice, SiQuickbooks, SiMicrosoftazure, SiReact, SiNodedotjs, SiMongodb, SiJavascript, SiTypescript, SiExpress, SiTailwindcss } from 'react-icons/si';

const experiences = [
  {
    id: 1,
    role: 'Information Systems & Accounts Executive',
    company: 'AD Constructions (Pvt) Ltd',
    period: 'June 2023 - Present',
    location: 'Colombo, Sri Lanka',
    companyUrl: '#',
    achievements: [
      'Spearheaded digital transformation initiatives at AD Constructions by implementing automated accounting and information systems, reducing manual data entry by 60%',
      'Designed and maintained customized financial and operational dashboards using Power BI, improving reporting accuracy and efficiency by 45%',
      'Collaborated with cross-functional teams to integrate new financial and information systems, achieving a 30% improvement in overall process efficiency',
      'Established and monitored robust internal control systems, reducing financial discrepancies and operational errors by 25%'
    ],
    responsibilities: [
      'Manage end-to-end accounting operations including AP/AR, GL, and financial reporting',
      'Develop and maintain automated financial systems and dashboards',
      'Ensure compliance with accounting standards and regulatory requirements',
      'Collaborate with IT to implement system upgrades and integrations',
      'Analyze financial data to identify trends and provide strategic recommendations'
    ],
    technologies: [
      { name: 'QuickBooks', icon: <SiQuickbooks className="text-green-600" /> },
      { name: 'Microsoft Office', icon: <SiMicrosoftoffice className="text-blue-500" /> },
      { name: 'Power BI', icon: <SiMicrosoftazure className="text-yellow-400" /> },
      { name: 'Excel VBA', icon: <FaCodeBranch className="text-green-700" /> }
    ],
    skills: [
      'Financial Analysis', 'Process Automation', 'System Integration', 
      'Financial Reporting', 'Internal Controls', 'Data Visualization',
      'Team Leadership', 'Project Management'
    ]
  },
  {
    id: 2,
    role: 'Freelance Full Stack Developer',
    company: 'Self-Employed',
    period: '2021 - Present',
    location: 'Remote',
    companyUrl: 'https://github.com/Shalitha-Lakshan',
    achievements: [
      'Developed and deployed 10+ full-stack web applications using modern technologies',
      'Implemented responsive designs and optimized performance, improving load times by 40%',
      'Collaborated with clients to translate business requirements into technical solutions',
      'Mentored junior developers in software development best practices'
    ],
    responsibilities: [
      'Develop and maintain responsive web applications using modern frameworks',
      'Collaborate with clients to gather requirements and provide technical solutions',
      'Implement responsive designs and ensure cross-browser compatibility',
      'Optimize applications for maximum speed and scalability',
      'Provide technical support and maintenance for existing projects'
    ],
    technologies: [
      { name: 'React', icon: <SiReact className="text-cyan-400" /> },
      { name: 'Node.js', icon: <SiNodedotjs className="text-green-500" /> },
      { name: 'MongoDB', icon: <SiMongodb className="text-green-600" /> },
      { name: 'JavaScript', icon: <SiJavascript className="text-yellow-400" /> },
      { name: 'TypeScript', icon: <SiTypescript className="text-blue-500" /> },
      { name: 'Express', icon: <SiExpress className="text-gray-300" /> },
      { name: 'Next.js', icon: <SiReact className="text-gray-100" /> },
      { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-cyan-300" /> }
    ],
    skills: [
      'Full-Stack Development', 'Responsive Design', 'RESTful APIs',
      'UI/UX Implementation', 'Git Version Control', 'Agile Development',
      'Problem Solving', 'Client Communication', 'Code Optimization',
      'Cross-Browser Compatibility', 'Performance Tuning', 'Technical Documentation'
    ]
  }
];

const Experience = () => {
  const [activeTab, setActiveTab] = React.useState('achievements');
  
  return (
    <section id="experience" className="py-24 bg-dark-900 relative overflow-hidden">
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
          <span className="text-sm font-mono text-primary mb-2 inline-block">PROFESSIONAL JOURNEY</span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Work Experience
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 gap-12 max-w-5xl mx-auto">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
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
                      <FaBriefcase className="mr-2" />
                      {exp.period}
                    </div>
                    <div className="flex items-center">
                      <h3 className="text-2xl md:text-3xl font-bold text-white mb-2 leading-tight">{exp.role}</h3>
                      {exp.companyUrl && (
                        <a 
                          href={exp.companyUrl} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="ml-3 text-light/50 hover:text-primary transition-colors"
                        >
                          <FaExternalLinkAlt className="text-sm" />
                        </a>
                      )}
                    </div>
                    <p className="text-lg text-primary font-medium">{exp.company}</p>
                    <div className="flex items-center mt-2 text-sm text-light/60">
                      <FaMapMarkerAlt className="mr-2" />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                  <div className="w-20 h-20 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center border border-white/5">
                    <FaBriefcase className="text-3xl text-primary" />
                  </div>
                </div>
                
                {/* Tabs */}
                <div className="flex border-b border-gray-800 mb-6">
                  <button
                    onClick={() => setActiveTab('achievements')}
                    className={`px-4 py-2 text-sm font-medium ${
                      activeTab === 'achievements'
                        ? 'text-primary border-b-2 border-primary'
                        : 'text-light/60 hover:text-light/90'
                    }`}
                  >
                    Key Achievements
                  </button>
                  <button
                    onClick={() => setActiveTab('responsibilities')}
                    className={`px-4 py-2 text-sm font-medium ${
                      activeTab === 'responsibilities'
                        ? 'text-primary border-b-2 border-primary'
                        : 'text-light/60 hover:text-light/90'
                    }`}
                  >
                    Responsibilities
                  </button>
                </div>
                
                {/* Tab Content */}
                <div className="mb-8">
                  {activeTab === 'achievements' ? (
                    <ul className="space-y-3">
                      {exp.achievements.map((item, i) => (
                        <motion.li 
                          key={i} 
                          className="flex items-start group"
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: i * 0.1 }}
                        >
                          <span className="text-primary mr-3 mt-1.5 text-xs">▹</span>
                          <span className="text-light/90">{item}</span>
                        </motion.li>
                      ))}
                    </ul>
                  ) : (
                    <ul className="space-y-3">
                      {exp.responsibilities.map((item, i) => (
                        <motion.li 
                          key={i} 
                          className="flex items-start group"
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: i * 0.1 }}
                        >
                          <span className="text-primary mr-3 mt-1.5 text-xs">•</span>
                          <span className="text-light/90">{item}</span>
                        </motion.li>
                      ))}
                    </ul>
                  )}
                </div>
                
                {/* Technologies */}
                <div className="mb-8">
                  <h4 className="text-lg font-semibold text-white mb-4 flex items-center">
                    <FaCode className="mr-2 text-blue-400" />
                    Technologies & Tools
                  </h4>
                  <div className="flex flex-wrap gap-3">
                    {exp.technologies.map((tech, i) => (
                      <motion.span
                        key={i}
                        className="inline-flex items-center px-3 py-1.5 rounded-full bg-dark-700/50 text-light/90 text-sm border border-gray-700/50 hover:border-primary/30 hover:bg-primary/10 transition-all duration-300"
                        whileHover={{ scale: 1.05 }}
                      >
                        {tech.icon}
                        <span className="ml-2">{tech.name}</span>
                      </motion.span>
                    ))}
                  </div>
                </div>
                
                {/* Skills */}
                <div>
                  <h4 className="text-lg font-semibold text-white mb-4">Skills Applied</h4>
                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill, i) => (
                      <span 
                        key={i}
                        className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium"
                      >
                        {skill}
                      </span>
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

export default Experience;
