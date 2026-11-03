import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutSection from './components/AboutSection';
import ServicesSection from './components/ServicesSection';
import WhyChooseUsSection from './components/WhyChooseUsSection';
import ActivitiesSection from './components/ActivitiesSection';
import HowWeWorkSection from './components/HowWeWorkSection';
import CtaSection from './components/CtaSection';
import Footer from './components/Footer';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');

  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash.toLowerCase();
      if (hash === '#about' || hash === '#/about') {
        setCurrentPage('about');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else if (hash === '#contact' || hash === '#/contact') {
        setCurrentPage('contact');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        setCurrentPage('home');
      }
    };

    handleHash();
    window.addEventListener('hashchange', handleHash);
    return () => window.removeEventListener('hashchange', handleHash);
  }, []);

  return (
    <div className="min-h-screen w-full bg-[#FFFDF9] flex flex-col font-sans">
      <Navbar currentPage={currentPage} />
      <main className="flex-1 w-full">
        {currentPage === 'about' ? (
          <>
            <AboutPage />
            <CtaSection />
          </>
        ) : currentPage === 'contact' ? (
          <>
            <ContactPage />
          </>
        ) : (
          <>
            <Hero />
            <AboutSection />
            <ServicesSection />
            <WhyChooseUsSection />
            <ActivitiesSection />
            <HowWeWorkSection />
            <CtaSection />
          </>
        )}
      </main>
      <Footer />
    </div>
  );
}
