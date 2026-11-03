import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutSection from './components/AboutSection';
import ServicesSection from './components/ServicesSection';
import WhyChooseUsSection from './components/WhyChooseUsSection';
import ActivitiesSection from './components/ActivitiesSection';
import CtaSection from './components/CtaSection';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen w-full bg-[#FFFDF9] flex flex-col font-sans">
      <Navbar />
      <main className="flex-1 w-full">
        <Hero />
        <AboutSection />
        <ServicesSection />
        <WhyChooseUsSection />
        <ActivitiesSection />
        <CtaSection />
      </main>
      <Footer />
    </div>
  );
}
