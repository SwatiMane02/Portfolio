import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const timelineData = [
  {
    year: 'Dec 2025 – Jan 2026',
    title: 'MERN Stack Intern',
    company: 'Techiolaza Innovations, Thane',
    description: 'Engineered full-stack web applications using MongoDB, Express, React, and Node.js. Optimized REST API performance and integrated complex front-end logic for seamless functionality.'
  },
  {
    year: 'Jun 2025',
    title: 'Machine Learning Trainee',
    company: 'L&T Skill Trainers Academy (STA), Madh',
    description: 'Deployed ML algorithms for real-time preprocessing, achieving high model evaluation accuracy. Collaborated on AI-driven industrial automation solutions for large-scale production environments.'
  },
  {
    year: 'Jun – Jul 2023',
    title: 'Web Developer Intern',
    company: 'Techq Konnect Technologies Pvt. Ltd., Vasai',
    description: 'Built a web-based management system using React, PHP, and MySQL for business operations. Implemented real-time data sync using Firebase and MongoDB to improve data consistency.'
  }
];

const Timeline = () => {
  const containerRef = useRef(null);
  const lineRef = useRef(null);
  const itemsRef = useRef([]);

  useEffect(() => {
    let ctx = gsap.context(() => {
      // Animate the line
      gsap.to(lineRef.current, {
        scaleY: 1,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top center",
          end: "bottom center",
          scrub: 0.5,
        }
      });

      // Animate each item
      itemsRef.current.forEach((item, i) => {
        gsap.from(item, {
          opacity: 0,
          x: i % 2 === 0 ? 50 : -50,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: item,
            start: "top 80%",
            toggleActions: "play none none reverse"
          }
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="py-32 px-6 w-full bg-[#0b0b0b] relative overflow-hidden">
      <div className="max-w-5xl mx-auto relative">
        
        <div className="text-center mb-24">
          <h2 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
            My <span className="text-gradient">Journey</span>
          </h2>
        </div>

        {/* The Timeline Line */}
        <div className="absolute left-1/2 top-[200px] bottom-0 w-[2px] -translate-x-1/2 bg-white/10 hidden md:block" />
        <div 
          ref={lineRef}
          className="absolute left-1/2 top-[200px] bottom-0 w-[2px] -translate-x-1/2 bg-gradient-to-b from-[#00f0ff] to-[#8b5cf6] scale-y-0 origin-top hidden md:block"
        />

        <div className="relative z-10 flex flex-col gap-16 md:gap-32">
          {timelineData.map((item, index) => (
            <div 
              key={index}
              ref={el => itemsRef.current[index] = el}
              className={`flex flex-col md:flex-row items-center gap-8 md:gap-16 ${
                index % 2 === 0 ? 'md:flex-row-reverse' : ''
              }`}
            >
              
              {/* Timeline Dot */}
              <div className="hidden md:flex w-12 h-12 absolute left-1/2 -translate-x-1/2 rounded-full border-4 border-[#0b0b0b] bg-[#8b5cf6] shadow-[0_0_20px_rgba(139,92,246,0.5)] z-20 items-center justify-center">
                <div className="w-3 h-3 bg-white rounded-full" />
              </div>

              {/* Content Panel */}
              <div className="w-full md:w-1/2 glass-panel p-8 rounded-3xl relative group hover:border-[#00f0ff]/30 transition-colors duration-500">
                <div className="text-[#00f0ff] font-mono text-xl mb-2">{item.year}</div>
                <h3 className="text-2xl font-bold text-white mb-1">{item.title}</h3>
                <h4 className="text-[#8b5cf6] font-medium mb-4">{item.company}</h4>
                <p className="text-gray-400 leading-relaxed">
                  {item.description}
                </p>
              </div>
              
              {/* Spacer for alternating layout */}
              <div className="hidden md:block w-1/2" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline;
