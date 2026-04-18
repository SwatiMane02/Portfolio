import React from 'react';
import { motion } from 'framer-motion';
import { 
  SiPython, SiC, SiCplusplus, SiJavascript, SiGo, SiDart, SiPhp, 
  SiReact, SiNodedotjs, SiExpress, SiMongodb, SiMysql, SiFirebase, SiSupabase, 
  SiGit, SiGithub, SiDocker, SiKubernetes, SiJupyter, SiGooglecolab 
} from 'react-icons/si';
import { FaJava, FaLayerGroup, FaServer, FaCode, FaAndroid } from 'react-icons/fa';

const skills = [
  { icon: FaJava, label: 'Java', color: '#007396' },
  { icon: SiPython, label: 'Python', color: '#3776AB' },
  { icon: SiJavascript, label: 'JavaScript', color: '#F7DF1E' },
  { icon: SiDart, label: 'Dart', color: '#0175C2' },
  { icon: SiPhp, label: 'PHP', color: '#777BB4' },
  { icon: SiReact, label: 'React.js', color: '#61DAFB' },
  { icon: SiNodedotjs, label: 'Node.js', color: '#339933' },
  { icon: SiExpress, label: 'Express.js', color: '#ffffff' },
  { icon: FaLayerGroup, label: 'MERN Stack', color: '#61DAFB' },
  { icon: FaServer, label: 'REST APIs', color: '#009688' },
  { icon: SiMysql, label: 'MySQL', color: '#4479A1' },
  { icon: SiFirebase, label: 'Firebase', color: '#FFCA28' },
  { icon: SiSupabase, label: 'Supabase', color: '#3ECF8E' },
  { icon: SiGit, label: 'Git', color: '#F05032' },
  { icon: SiGithub, label: 'GitHub', color: '#ffffff' },
  { icon: SiDocker, label: 'Docker', color: '#2496ED' },
  { icon: SiGooglecolab, label: 'Google Colab', color: '#F9AB00' },
];

const Skills = () => {
  return (
    <section className="py-32 px-6 md:px-12 lg:px-24 w-full bg-[#0b0b0b] relative border-t border-white/5">
      
      {/* Background subtle glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2/3 h-2/3 bg-[#8b5cf6] opacity-[0.03] blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20 text-center"
        >
          <h2 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
            Technical <span className="text-gradient">Arsenal</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Technologies I use to build robust and intelligent full-stack applications.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-10">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ 
                y: -10, 
                boxShadow: `0 20px 40px -10px ${skill.color}40`,
                borderColor: `${skill.color}80`
              }}
              className="glass p-8 rounded-3xl flex flex-col items-center justify-center gap-4 group cursor-pointer transition-colors duration-300"
            >
              <skill.icon 
                className="w-12 h-12 md:w-16 md:h-16 transition-transform duration-500 group-hover:scale-110" 
                style={{ color: skill.color }} 
              />
              <span className="text-sm font-medium text-gray-300 group-hover:text-white transition-colors">
                {skill.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
