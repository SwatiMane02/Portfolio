import React from 'react';
import { motion } from 'framer-motion';

const educationData = [
  {
    degree: 'B.Tech in Information Technology',
    institution: 'Vidyalankar Institute of Technology',
    period: '2024 – 2027',
    score: 'CGPA: 9.8',
    color: 'from-blue-600/20 to-purple-600/20',
    borderColor: 'border-blue-500/30'
  },
  {
    degree: 'Diploma in Information Technology',
    institution: 'Bharati Vidyapeeth Institute of Technology',
    period: '',
    score: 'Percentage: 92.69%',
    color: 'from-purple-600/20 to-indigo-600/20',
    borderColor: 'border-purple-500/30'
  }
];

const Education = () => {
  return (
    <section className="py-32 px-6 md:px-12 lg:px-24 w-full bg-[#0b0b0b] relative border-t border-white/5">
      {/* Background ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-[#8b5cf6] opacity-[0.02] blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20 text-center"
        >
          <h2 className="text-5xl md:text-6xl font-bold tracking-tight mb-6">
            Educational <span className="text-gradient">Background</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#00f0ff] to-[#8b5cf6] rounded-full mx-auto" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {educationData.map((edu, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className={`glass p-10 rounded-3xl relative overflow-hidden group border ${edu.borderColor} flex flex-col justify-center min-h-[220px] transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/10`}
            >
              {/* Subtle hover gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${edu.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`} />
              
              <div className="relative z-10 flex flex-col h-full justify-between">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2 leading-tight">
                    {edu.degree}
                  </h3>
                  <h4 className="text-lg text-gray-400 font-medium mb-6">
                    {edu.institution}
                  </h4>
                </div>
                
                <div className="flex flex-wrap items-center justify-between gap-4 mt-auto">
                  {edu.period ? (
                    <span className="px-4 py-1.5 rounded-full text-xs font-semibold bg-white/5 border border-white/10 text-gray-300">
                      📅 {edu.period}
                    </span>
                  ) : (
                    <span /> // Spacer if no period is provided
                  )}
                  <span className="px-5 py-2 rounded-full text-sm font-bold bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 text-blue-300 shadow-inner">
                    💡 {edu.score}
                  </span>
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
