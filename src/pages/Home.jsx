import React from 'react';
import Hero from '../components/Hero';
import ScrollIntro from '../components/ScrollIntro';
import Projects from '../components/Projects';
import Achievements from '../components/Achievements';
import Skills from '../components/Skills';
import Timeline from '../components/Timeline';
import Education from '../components/Education';
import Contact from '../components/Contact';

const Home = () => {
  return (
    <main className="w-full relative overflow-hidden">
      <Hero />
      <ScrollIntro />
      <Projects />
      <Achievements />
      <Skills />
      <Timeline />
      <Education />
      <Contact />
    </main>
  );
};

export default Home;
