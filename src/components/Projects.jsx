import React from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink } from 'react-icons/fi';

const projects = [
  {
    title: 'AI City Infrastructure dependency mapper',
    description: 'Built a graph-based AI platform to simulate cascading failures across urban infrastructure systems. Delivered real-time risk insights and dependency analysis for proactive resilience planning.',
    tags: ['AI / ML', 'Graph Systems', 'Simulation', 'Full Stack'],
    color: 'from-blue-500/20 to-purple-500/20',
    borderColor: 'border-blue-500/30',
    githubLink: 'https://github.com/SwatiMane02/AI-City-Infra-Dependency-Mapper'
  },
  {
    title: 'Emergency Hub',
    description: 'A platform leveraging AI & NLP with real-time WebSockets to coordinate emergency responses efficiently.',
    tags: ['React', 'Node.js', 'WebSockets', 'NLP'],
    color: 'from-blue-500/20 to-purple-500/20',
    borderColor: 'border-blue-500/30',
    githubLink: 'https://github.com/priti2107/EmergencyHub.git'
  },
  {
    title: 'LeadVault',
    description: 'Engineered an enterprise-grade system with TOTP-based 2FA, JWT auth,PWA capabilities for offline access and granular RBAC for three user tiers.',
    tags: ['React', 'PWA', 'MongoDB', 'RBAC'],
    color: 'from-purple-500/20 to-pink-500/20',
    borderColor: 'border-purple-500/30',
    githubLink: 'https://github.com/AnishBandal/codeissance-2025.git'
  },
  {
    title: 'Food Redistribution',
    description: 'Connecting surplus food providers with local charities to reduce waste and hunger.',
    tags: ['Next.js', 'PostgreSQL', 'Tailwind'],
    color: 'from-emerald-500/20 to-teal-500/20',
    borderColor: 'border-emerald-500/30',
    githubLink: 'https://github.com/atharvagitaye/HackFest.git'
  }
];

const ProjectCard = ({ project, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, delay: index * 0.2 }}
      whileHover={{ y: -10, scale: 1.02 }}
      className={`glass-panel p-8 rounded-[2rem] relative overflow-hidden group border ${project.borderColor}`}
    >
      {/* Background Glow */}
      <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
      
      <div className="relative z-10">
        <h3 className="text-3xl font-bold mb-4 text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-400 transition-colors">
          {project.title}
        </h3>
        <p className="text-gray-400 mb-8 max-w-sm leading-relaxed">
          {project.description}
        </p>
        
        <div className="flex flex-wrap gap-3 mb-8">
          {project.tags.map(tag => (
            <span key={tag} className="px-4 py-1.5 rounded-full text-xs font-medium bg-white/5 border border-white/10 text-gray-300">
              {tag}
            </span>
          ))}
        </div>

        <div className="flex gap-4">
          <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-white/5 hover:bg-white/10 transition-colors border border-white/10 flex items-center justify-center group/icon">
            <FiGithub className="w-5 h-5 text-gray-300 group-hover/icon:text-white transition-colors" />
          </a>
          <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="px-6 py-3 rounded-full bg-gradient-to-r from-white/5 to-white/10 hover:from-white/10 hover:to-white/20 transition-all border border-white/10 text-gray-200 hover:text-white text-sm font-medium flex items-center gap-2 shadow-lg hover:shadow-white/5 border-b-white/5">
            View Project
            <FiExternalLink className="w-4 h-4 ml-1 opacity-70 group-hover:opacity-100 transition-opacity" />
          </a>
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  return (
    <section className="py-32 px-6 md:px-12 lg:px-24 w-full relative z-10 bg-[#0b0b0b]">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <h2 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
            Featured <span className="text-gradient">Work</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#00f0ff] to-[#8b5cf6] rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <ProjectCard key={idx} project={project} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
