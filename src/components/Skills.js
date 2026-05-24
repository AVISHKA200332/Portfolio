import React from 'react';
import { motion } from 'framer-motion';
import { FaCode, FaServer, FaMobile, FaTools, FaDatabase } from 'react-icons/fa';
import { SiOpenjdk, SiPython, SiJavascript, SiReact, SiNodedotjs, SiSpring, SiExpress, SiMongodb, SiMysql, SiPostgresql, SiDocker, SiAmazonaws, SiGit, SiGithub, SiHtml5, SiCss3, SiTailwindcss, SiTypescript, SiKotlin, SiCplusplus, SiCsharp, SiPhp } from 'react-icons/si';

const skills = [
  {
    category: 'Programming Languages',
    icon: <FaCode className="text-2xl text-primary" />,
    items: [
      { name: 'Java', icon: <SiOpenjdk className="text-4xl" />, level: 85 },
      { name: 'Python', icon: <SiPython className="text-4xl" />, level: 75 },
      { name: 'JavaScript', icon: <SiJavascript className="text-4xl" />, level: 80 },
      { name: 'TypeScript', icon: <SiTypescript className="text-4xl" />, level: 70 },
      { name: 'Kotlin', icon: <SiKotlin className="text-4xl" />, level: 65 },
      { name: 'C++', icon: <SiCplusplus className="text-4xl" />, level: 70 },
      { name: 'C#', icon: <SiCsharp className="text-4xl" />, level: 65 },
      { name: 'PHP', icon: <SiPhp className="text-4xl" />, level: 75 },
    ]
  },
  {
    category: 'Frontend',
    icon: <FaCode className="text-2xl text-primary" />,
    items: [
      { name: 'React.js', icon: <SiReact className="text-4xl" />, level: 80 },
      { name: 'HTML5', icon: <SiHtml5 className="text-4xl" />, level: 90 },
      { name: 'CSS3', icon: <SiCss3 className="text-4xl" />, level: 85 },
      { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-4xl" />, level: 80 },
    ]
  },
  {
    category: 'Backend',
    icon: <FaServer className="text-2xl text-primary" />,
    items: [
      { name: 'Node.js', icon: <SiNodedotjs className="text-4xl" />, level: 80 },
      { name: 'Spring Boot', icon: <SiSpring className="text-4xl" />, level: 75 },
      { name: 'Express.js', icon: <SiExpress className="text-4xl" />, level: 80 },
    ]
  },
  {
    category: 'Databases',
    icon: <FaDatabase className="text-2xl text-primary" />,
    items: [
      { name: 'MongoDB', icon: <SiMongodb className="text-4xl" />, level: 80 },
      { name: 'MySQL', icon: <SiMysql className="text-4xl" />, level: 85 },
      { name: 'PostgreSQL', icon: <SiPostgresql className="text-4xl" />, level: 75 },
    ]
  },
  {
    category: 'DevOps & Tools',
    icon: <FaTools className="text-2xl text-primary" />,
    items: [
      { name: 'Git', icon: <SiGit className="text-4xl" />, level: 85 },
      { name: 'GitHub', icon: <SiGithub className="text-4xl" />, level: 90 },
      { name: 'Docker', icon: <SiDocker className="text-4xl" />, level: 70 },
      { name: 'AWS', icon: <SiAmazonaws className="text-4xl" />, level: 70 },
    ]
  }
];

const SkillCard = ({ skill, index }) => {
  return (
    <motion.div
      className="bg-dark-200/30 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-gray-800/50"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <div className="flex items-center mb-6">
        <div className="p-2 rounded-lg bg-primary/10 mr-4">
          {skill.icon}
        </div>
        <h3 className="text-xl font-semibold text-light">{skill.category}</h3>
      </div>
      
      <div className="space-y-4">
        {skill.items.map((item, i) => (
          <div key={i} className="mb-4">
            <div className="flex items-center justify-between mb-1">
              <div className="flex items-center">
                <div className="mr-2">{item.icon}</div>
                <span className="text-light/90">{item.name}</span>
              </div>
              <span className="text-sm text-light/60">{item.level}%</span>
            </div>
            <div className="w-full bg-gray-800 rounded-full h-2">
              <motion.div 
                className="h-full bg-gradient-to-r from-primary to-secondary rounded-full"
                initial={{ width: 0 }}
                whileInView={{ width: `${item.level}%` }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.3 + (index * 0.05) + (i * 0.02) }}
              />
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-dark relative overflow-hidden">
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
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              My Skills
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"></div>
          <p className="mt-6 text-light/70 max-w-2xl mx-auto">
            Here are the technologies and tools I've been working with. I'm always eager to learn new technologies and improve my skills.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <SkillCard key={skill.category} skill={skill} index={index} />
          ))}
        </div>

        <motion.div 
          className="mt-16 bg-dark-200/30 backdrop-blur-sm rounded-2xl p-8 border border-gray-800/50"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h3 className="text-xl font-semibold text-light mb-6 flex items-center">
            <FaTools className="text-primary mr-3" /> Additional Skills & Competencies
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[
              'RESTful APIs', 'GraphQL', 'Microservices', 'System Design',
              'Agile/Scrum', 'CI/CD', 'TDD', 'OOP', 'Data Structures',
              'Algorithms', 'Design Patterns', 'Clean Code', 'Git Flow',
              'Responsive Design', 'UI/UX Principles', 'Performance Optimization',
              'Security Best Practices', 'API Documentation', 'Code Review',
              'Mentoring', 'Project Management', 'Technical Writing'
            ].map((skill, index) => (
              <div key={index} className="flex items-center">
                <span className="w-2 h-2 rounded-full bg-primary mr-2"></span>
                <span className="text-light/80">{skill}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
