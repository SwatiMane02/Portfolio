import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Hero = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  const textVariants = {
    hidden: { opacity: 0, y: 50, filter: "blur(10px)" },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        delay: i * 0.2,
        duration: 1,
        ease: [0.215, 0.61, 0.355, 1],
      }
    })
  };

  return (
    <section 
      ref={containerRef} 
      className="relative h-screen w-full flex items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#111] via-[#0b0b0b] to-[#0b0b0b] z-0" />
      
      {/* Small floating particles or glow could go here */}

      <motion.div 
        className="z-10 text-center px-4"
        style={{ y, opacity }}
      >
        <motion.p 
          custom={0}
          initial="hidden"
          animate="visible"
          variants={textVariants}
          className="text-lg md:text-xl text-gray-400 mb-4 tracking-widest uppercase font-semibold"
        >
          Hi, I'm
        </motion.p>
        
        <motion.h1 
          custom={1}
          initial="hidden"
          animate="visible"
          variants={textVariants}
          className="text-6xl md:text-8xl lg:text-9xl font-bold mb-6 tracking-tighter glow-text text-white"
        >
          Swati Mane
        </motion.h1>
        
        <motion.div 
          custom={2}
          initial="hidden"
          animate="visible"
          variants={textVariants}
        >
          <h2 className="text-2xl md:text-4xl font-light text-gray-300">
            I build <span className="text-gradient font-medium italic">intelligent systems</span>
          </h2>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
      >
        <span className="text-xs text-gray-500 uppercase tracking-widest mb-2">Scroll</span>
        <motion.div 
          className="w-[1px] h-12 bg-gradient-to-b from-transparent via-[#00f0ff] to-transparent"
          animate={{
            y: [0, 10, 0],
            opacity: [0.3, 1, 0.3]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </motion.div>
    </section>
  );
};

export default Hero;
