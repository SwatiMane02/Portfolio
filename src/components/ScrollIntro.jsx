import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const ScrollIntro = () => {
  const containerRef = useRef(null);
  const text1Ref = useRef(null);
  const text2Ref = useRef(null);
  const text3Ref = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "+=300%",
          scrub: 1,
          pin: true,
        }
      });

      // Show first text
      tl.to(text1Ref.current, { opacity: 1, filter: "blur(0px)", scale: 1, duration: 1 })
        // Hide first, show second
        .to(text1Ref.current, { opacity: 0, filter: "blur(10px)", scale: 1.1, duration: 1 })
        .to(text2Ref.current, { opacity: 1, filter: "blur(0px)", scale: 1, duration: 1 }, "<")
        // Hide second, show third
        .to(text2Ref.current, { opacity: 0, filter: "blur(10px)", scale: 1.1, duration: 1 })
        .to(text3Ref.current, { opacity: 1, filter: "blur(0px)", scale: 1, duration: 1 }, "<")
        // Fade out slightly at the end
        .to(text3Ref.current, { opacity: 0.5, duration: 1 });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="h-screen w-full flex items-center justify-center relative overflow-hidden bg-[#0b0b0b]">
      
      {/* Background Parallax Element */}
      <div className="absolute inset-0 z-0 opacity-20" style={{
        backgroundImage: 'radial-gradient(circle at 50% 50%, rgba(139, 92, 246, 0.2) 0%, transparent 50%)'
      }} />

      <div className="relative z-10 w-full max-w-5xl px-6 text-center text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight">
        <h2 
          ref={text1Ref} 
          className="absolute left-0 right-0 top-1/2 -translate-y-1/2 opacity-0 scale-90 blur-md text-white"
        >
          Full Stack Developer
        </h2>
        <h2 
          ref={text2Ref} 
          className="absolute left-0 right-0 top-1/2 -translate-y-1/2 opacity-0 scale-90 blur-md text-gradient"
        >
          AI & ML Enthusiast
        </h2>
      </div>
    </section>
  );
};

export default ScrollIntro;
