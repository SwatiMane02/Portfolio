import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion } from 'framer-motion';
import { FaMedal, FaTrophy, FaRocket } from 'react-icons/fa';

const achievements = [
  {
    icon: FaMedal,
    title: 'Codeissance 2025',
    award: '1st Place',
    desc: 'Bank of India Industry Challenge',
    color: 'from-[#00f0ff] to-blue-500',
    shadow: 'shadow-[0_0_40px_rgba(0,240,255,0.4)]'
  },
  {
    icon: FaTrophy,
    title: 'HackFest: INNOV8 TMRW',
    award: 'Winner',
    desc: 'National Hackathon',
    color: 'from-[#8b5cf6] to-purple-600',
    shadow: 'shadow-[0_0_40px_rgba(139,92,246,0.4)]'
  },
  {
    icon: FaRocket,
    title: 'HackBuild',
    award: 'Top 11 Finalist',
    desc: 'Global Developer Challenge',
    color: 'from-pink-500 to-rose-500',
    shadow: 'shadow-[0_0_40px_rgba(236,72,153,0.4)]'
  }
];

const Achievements = () => {
  const sectionRef = useRef(null);
  const trackRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    let ctx = gsap.context(() => {
      // Calculate how far the track needs to move.
      // 3 items means we need to translate by 2 items' width to get the last one to center if setup as 100vw each.
      // But let's simplify: horizontal scroll container.
      
      const totalScroll = window.innerWidth * 2; // 3 panels, 2 widths to scroll

      gsap.to(trackRef.current, {
        x: () => -(trackRef.current.scrollWidth - window.innerWidth),
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "center center",
          end: () => `+=${totalScroll}`,
          scrub: 1,
          pin: true,
          anticipatePin: 1,
        }
      });

      // We want the spotlight effect on the centered element.
      // Since window represents the viewport, an element is centered when its bounding react center aligns with window width / 2.
      cardsRef.current.forEach((card, i) => {
        gsap.to(card, {
          scrollTrigger: {
            trigger: sectionRef.current, // trigger based on pinned section progress
            start: () => `center center-=${i * window.innerWidth}`, 
            end: () => `center center-=${(i + 1) * window.innerWidth}`,
            scrub: 1,
            onUpdate: (self) => {
              // self.progress goes from 0 to 1 during this card's segment
              // we want peak at 0.5
              let p = self.progress;
              // distance from center (0 = center, 1/-1 = edges)
              let dist = Math.abs(p - 0.5) * 2; 
              // distance goes 1 -> 0 -> 1
              let scale = 1.05 - (dist * 0.15); // scales 0.9 to 1.05
              let opacity = 1 - (dist * 0.6); // opacity 0.4 to 1 
              let blur = dist * 8; // blur 0px to 8px
              
              gsap.set(card, {
                scale: scale,
                opacity: opacity,
                filter: `blur(${blur}px)`,
              });
            }
          }
        });
      });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="h-screen w-full bg-[#0b0b0b] relative overflow-hidden flex items-center bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#1a1525] via-[#0b0b0b] to-[#0b0b0b]">
      
      {/* Background Decor */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[60vh] bg-gradient-to-r from-transparent via-white/[0.02] to-transparent pointer-events-none" />

      {/* Horizontal Track */}
      <div 
        ref={trackRef} 
        className="flex items-center h-full w-[300vw] px-[50vw]" // pad 50vw so first is centered initially
        style={{ transform: "translate3d(0, 0, 0)" }}
      >
        {achievements.map((item, index) => {
          const Icon = item.icon;
          return (
            <div 
              key={index}
              className="w-[100vw] flex-shrink-0 flex items-center justify-center"
              style={{ width: "100vw", padding: "0 2rem" }}
            >
              <div 
                ref={el => cardsRef.current[index] = el}
                className="w-full max-w-2xl mx-auto flex flex-col items-center justify-center relative translate-z-0"
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className={`glass-panel w-full p-12 md:p-16 rounded-[3rem] border border-white/10 flex flex-col items-center text-center relative group overflow-hidden transition-all duration-300 hover:${item.shadow}`}
                >
                  {/* Subtle top gradient line */}
                  <div className={`absolute top-0 left-0 w-full h-2 bg-gradient-to-r ${item.color}`} />
                  
                  {/* Light sweep effect */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/5 to-white/0 opacity-0 group-hover:opacity-100 group-hover:translate-x-full transition-all duration-1000 -translate-x-full" />

                  <div className="w-24 h-24 mb-8 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-5xl text-white group-hover:scale-110 transition-transform duration-500 shadow-[0_0_30px_rgba(255,255,255,0.05)]">
                    <Icon />
                  </div>
                  
                  <div className={`text-sm tracking-widest uppercase mb-4 font-bold text-transparent bg-clip-text bg-gradient-to-r ${item.color}`}>
                    {item.award}
                  </div>
                  
                  <h3 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
                    {item.title}
                  </h3>
                  
                  <p className="text-xl text-gray-400 font-light">
                    {item.desc}
                  </p>
                </motion.div>
              </div>
            </div>
          );
        })}
      </div>
      
      {/* Title overlaid statically */}
      <div className="absolute top-16 left-0 w-full text-center z-10 pointer-events-none">
        <h2 className="text-sm tracking-[0.3em] uppercase text-gray-500 font-medium">Highlight Reel</h2>
      </div>

    </section>
  );
};

export default Achievements;
