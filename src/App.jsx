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
import VideosPage from './pages/VideosPage';
import GalleryPage from './pages/GalleryPage';
import BlogPage from './pages/BlogPage';
import ServicesPage from './pages/ServicesPage';
import BalloonModelingPage from './pages/BalloonModelingPage';
import TattooFacePaintingPage from './pages/TattooFacePaintingPage';
import NailArtistryPage from './pages/NailArtistryPage';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');

  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash.toLowerCase();
      if (hash === '#about' || hash === '#/about') {
        setCurrentPage('about');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else if (
        hash === '#services/nails-artistry' ||
        hash === '#/services/nails-artistry' ||
        hash === '#nail-artistry' ||
        hash === '#/nail-artistry'
      ) {
        setCurrentPage('nail-artistry');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else if (
        hash === '#services/tattoo-artists-face-painting' ||
        hash === '#/services/tattoo-artists-face-painting' ||
        hash === '#tattoo-artists' ||
        hash === '#/tattoo-artists'
      ) {
        setCurrentPage('tattoo-artists');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else if (
        hash === '#services/balloon-modelings' ||
        hash === '#/services/balloon-modelings' ||
        hash === '#balloon-modeling' ||
        hash === '#/balloon-modeling'
      ) {
        setCurrentPage('balloon-modeling');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else if (hash === '#services' || hash === '#/services') {
        setCurrentPage('services');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else if (hash === '#contact' || hash === '#/contact') {
        setCurrentPage('contact');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else if (hash === '#videos' || hash === '#/videos') {
        setCurrentPage('videos');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else if (hash === '#gallery' || hash === '#/gallery') {
        setCurrentPage('gallery');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else if (hash === '#blog' || hash === '#/blog') {
        setCurrentPage('blog');
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
        ) : currentPage === 'nail-artistry' ? (
          <>
            <NailArtistryPage />
            <CtaSection />
          </>
        ) : currentPage === 'tattoo-artists' ? (
          <>
            <TattooFacePaintingPage />
            <CtaSection />
          </>
        ) : currentPage === 'balloon-modeling' ? (
          <>
            <BalloonModelingPage />
            <CtaSection />
          </>
        ) : currentPage === 'services' ? (
          <>
            <ServicesPage />
            <CtaSection />
          </>
        ) : currentPage === 'contact' ? (
          <>
            <ContactPage />
          </>
        ) : currentPage === 'videos' ? (
          <>
            <VideosPage />
            <CtaSection />
          </>
        ) : currentPage === 'gallery' ? (
          <>
            <GalleryPage />
            <CtaSection />
          </>
        ) : currentPage === 'blog' ? (
          <>
            <BlogPage />
            <CtaSection />
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
