import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutSection from './components/AboutSection';
import ServicesSection from './components/ServicesSection';
import CtaSection from './components/CtaSection';

export default function App() {
  return (
    <div className="min-h-screen w-full bg-[#FFFDF9] flex flex-col font-sans">
      <Navbar />
      <main className="flex-1 w-full">
        <Hero />
        <AboutSection />
        <ServicesSection />
        <CtaSection />
      </main>
    </div>
  );
}
