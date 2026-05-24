import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaCode, FaMobile, FaJava, FaImage } from 'react-icons/fa';
import { SiJavascript, SiHtml5, SiCss3, SiPhp } from 'react-icons/si';
import profile from '../data/profile';

// Map repository names to preview images in public/images/projects
const projectImageMap = {
  'ad-construction': '/images/projects/Ad-Construction-preview.png',
  'beauty-loft': '/images/projects/beauty-loft-preview.png',
  'the-beauty-loft': '/images/projects/beauty-loft-preview.png',
  'car-rental': '/images/projects/car-rental-preview.png',
  'habbit-tracker': '/images/projects/Habbit_Tracker_preview.png',
  'habbit_tracker': '/images/projects/Habbit_Tracker_preview.png',
  'healthmate': '/images/projects/healthmate-preview.png',
  'job-nest': '/images/projects/Job-Nest-preview.png',
  'moodmate': '/images/projects/moodmate-preview.png',
  'portfolio-main': '/images/projects/portfolio-preview.png',
  'portfolio': '/images/projects/portfolio-preview.png',
  'powersense': '/images/projects/powersence-preview.png',
  'triptrek': '/images/projects/triptrek-preview.png',
  'soulrythms': '/images/projects/SoulRythms_preview.png',
  'eagleeye': '/images/projects/EagleEye_preview.png',
  'wildquest': '/images/projects/WildQuest_preview.png',
};

const projectDemoMap = {
  'portfolio': 'https://avishka-portfolio-22.vercel.app/',
  'portfolio-main': 'https://avishka-portfolio-22.vercel.app/',
};

const normalizeKey = (s = '') => s.toLowerCase().replace(/[^a-z0-9]+/g, '-');
const getProjectImage = (name = '') => {
  const key = normalizeKey(name);
  return projectImageMap[key] || '';
};

const getProjectDemo = (name = '') => {
  const key = normalizeKey(name);
  return projectDemoMap[key] || '';
};

// Map primary language to technology icons
const techIconsByLanguage = {
  JavaScript: { name: 'JavaScript', icon: <SiJavascript className="text-yellow-400" /> },
  TypeScript: { name: 'TypeScript', icon: <SiJavascript className="text-blue-400" /> },
  HTML: { name: 'HTML5', icon: <SiHtml5 className="text-orange-500" /> },
  CSS: { name: 'CSS3', icon: <SiCss3 className="text-blue-500" /> },
  PHP: { name: 'PHP', icon: <SiPhp className="text-indigo-500" /> },
  Java: { name: 'Java', icon: <FaJava className="text-red-500" /> },
  Kotlin: { name: 'Kotlin', icon: <FaMobile className="text-purple-500" /> },
  Python: { name: 'Python', icon: <FaCode className="text-green-400" /> },
  C: { name: 'C', icon: <FaCode className="text-gray-300" /> },
  'C++': { name: 'C++', icon: <FaCode className="text-gray-300" /> },
  'C#': { name: 'C#', icon: <FaCode className="text-gray-300" /> },
};

const gradientPalette = [
  'from-indigo-500 to-purple-600',
  'from-emerald-500 to-teal-600',
  'from-blue-500 to-indigo-600',
  'from-orange-500 to-red-600',
  'from-pink-500 to-rose-600',
];

const inferCategory = (repo) => {
  const lang = repo.language || '';
  const topics = repo.topics || [];
  if (lang === 'Kotlin' || topics.includes('android')) return 'Mobile App';
  if (topics.includes('react') || topics.includes('nextjs')) return 'Web Application';
  if (topics.includes('node') || topics.includes('express') || topics.includes('backend')) return 'Full Stack';
  if (repo.homepage) return 'Website';
  return 'Web Application';
};

const toProject = (repo, index) => {
  const tech = techIconsByLanguage[repo.language] ? [techIconsByLanguage[repo.language]] : [];
  return {
    id: repo.id,
    title: repo.name,
    description: repo.description || 'No description provided.',
    technologies: tech,
    category: inferCategory(repo),
    github: repo.html_url,
    demo: getProjectDemo(repo.name) || repo.homepage || '',
    image: getProjectImage(repo.name),
    accentColor: gradientPalette[index % gradientPalette.length],
  };
};

const ProjectCard = ({ project, index }) => {
  const [isHovered, setIsHovered] = useState(false);
  const useDarkText = ['powersense', 'healthmate', 'habbit-tracker', 'habbit_tracker'].includes(
    project.title.toLowerCase()
  );
  
  return (
    <motion.div
      className="h-full flex flex-col group"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative h-64 overflow-hidden rounded-t-2xl">
        <div className={`absolute inset-0 bg-gradient-to-br ${project.accentColor} opacity-90`}></div>
        <div className="absolute inset-0 bg-gradient-to-t from-dark/95 to-transparent z-10"></div>
        <div className="absolute bottom-4 left-4 z-20">
          <span className={`inline-block px-3 py-1 text-xs font-medium ${useDarkText ? 'text-black bg-white/70' : 'text-white bg-black/30'} backdrop-blur-sm rounded-full mb-2`}>
            {project.category}
          </span>
          <h3 className={`text-2xl font-bold ${useDarkText ? 'text-black' : 'text-white'}`}>{project.title}</h3>
        </div>
        {project.image ? (
          <>
            <motion.img 
              src={process.env.PUBLIC_URL + project.image} 
              alt={project.title}
              className="w-full h-full object-cover transition-transform duration-700"
              style={{
                transform: isHovered ? 'scale(1.05)' : 'scale(1)',
              }}
              onError={(e) => {
                console.error(`Failed to load image: ${project.image}`);
                e.target.style.display = 'none';
              }}
            />
          </>
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-dark-800">
            <div className="text-center p-4">
              <FaImage className="text-gray-600 text-4xl mx-auto mb-2" />
              <p className="text-gray-400 text-sm">No image available</p>
              <p className="text-gray-500 text-xs mt-1">Expected: {project.image}</p>
            </div>
          </div>
        )}
      </div>
      
      <div className="flex-1 bg-dark-800/50 backdrop-blur-sm p-6 border-x border-b border-gray-800/50 rounded-b-2xl flex flex-col">
        <p className="text-light/80 mb-6 flex-grow">{project.description}</p>
        
        <div className="mt-auto">
          <div className="flex flex-wrap gap-2 mb-6">
            {project.technologies.map((tech, i) => (
              <motion.div
                key={i}
                className="flex items-center px-3 py-1.5 bg-dark-700/50 rounded-full text-xs text-light/80 border border-gray-700/50"
                whileHover={{ 
                  scale: 1.05,
                  backgroundColor: 'rgba(30, 41, 59, 0.7)',
                  borderColor: 'rgba(99, 102, 241, 0.5)'
                }}
                transition={{ duration: 0.2 }}
              >
                <span className="mr-2">{tech.icon}</span>
                {tech.name}
              </motion.div>
            ))}
          </div>
          
          <div className="flex items-center justify-between pt-4 border-t border-gray-800/50">
            <a 
              href={project.github} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center text-light/80 hover:text-primary transition-colors group-hover:translate-x-1 duration-300"
              aria-label="View on GitHub"
            >
              <FaGithub className="mr-2" /> View Code
            </a>
            {project.demo && (
              <a 
                href={project.demo} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center px-4 py-2 bg-primary/10 text-primary rounded-lg hover:bg-primary/20 transition-colors"
                aria-label="Live Demo"
              >
                <FaExternalLinkAlt className="mr-2" /> Live Demo
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [projects, setProjects] = useState([]);
  const [filteredProjects, setFilteredProjects] = useState([]);

  useEffect(() => {
    const username = profile.github.username || 'AVISHKA200332';
    const fetchRepos = async () => {
      try {
        const res = await fetch(
          `https://api.github.com/users/${username}/repos?sort=updated&direction=desc&per_page=9`,
          {
            headers: {
              Accept: 'application/vnd.github+json'
            }
          }
        );
        const data = await res.json();
        const items = Array.isArray(data) ? data : [];
        if (items.length) {
          const mapped = items
            .filter((r) => !r.private)
            .slice(0, 9)
            .map((repo, i) => toProject(repo, i));
          setProjects(mapped);
          setFilteredProjects(mapped);
        } else {
          setProjects([]);
          setFilteredProjects([]);
        }
      } catch (e) {
        console.error('Failed to load GitHub repositories:', e);
        setProjects([]);
        setFilteredProjects([]);
      }
    };
    fetchRepos();
  }, []);

  const categories = ['All', 'Full Stack', 'Web Application', 'Mobile App', 'Website'];

  const filterProjects = (category) => {
    setActiveFilter(category);
    if (category === 'All') {
      setFilteredProjects(projects);
    } else {
      setFilteredProjects(projects.filter(project => project.category === category));
    }
  };

  return (
    <section id="projects" className="py-24 relative overflow-hidden bg-dark/50">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      </div>

      <div className="container mx-auto px-6 md:px-12 lg:px-24">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-sm font-mono text-primary mb-2 inline-block">Portfolio</span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full mb-6"></div>
          <p className="text-light/70 max-w-2xl mx-auto">
            Explore a selection of my recent work. Each project represents a unique challenge and solution, 
            showcasing my skills in full-stack development and problem-solving.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div 
          className="flex flex-wrap justify-center gap-3 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
        >
          {categories.map((category, index) => (
            <button
              key={index}
              onClick={() => filterProjects(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeFilter === category
                  ? 'bg-gradient-to-r from-primary to-secondary text-white'
                  : 'text-light/70 hover:text-primary bg-dark-700/50 hover:bg-dark-700/80'
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <AnimatePresence mode="wait">
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            key={activeFilter}
          >
            {filteredProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </motion.div>
        </AnimatePresence>

        {/* View All Button */}
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <a
            href={profile.github.url || 'https://github.com/AVISHKA200332'}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-3.5 bg-gradient-to-r from-primary to-secondary text-white rounded-full font-medium hover:opacity-90 transition-opacity shadow-lg hover:shadow-primary/20"
          >
            <FaGithub className="mr-3 text-lg" />
            <span>View All Projects on GitHub</span>
            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
