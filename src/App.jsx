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
import PotteryArtistsPage from './pages/PotteryArtistsPage';
import KidsJewelryMakingPage from './pages/KidsJewelryMakingPage';
import OrigamiCraftsPage from './pages/OrigamiCraftsPage';
import HairBraidingPage from './pages/HairBraidingPage';
import CaricatureArtistPage from './pages/CaricatureArtistPage';
import MugCaricaturePage from './pages/MugCaricaturePage';
import ClayModelingPage from './pages/ClayModelingPage';
import MehandiArtistryPage from './pages/MehandiArtistryPage';
import PebbleStoneArtPage from './pages/PebbleStoneArtPage';
import TaroFaceReadingPage from './pages/TaroFaceReadingPage';
import RiceArtKeyChainPage from './pages/RiceArtKeyChainPage';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');

  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash.toLowerCase();
      if (hash === '#about' || hash === '#/about') {
        setCurrentPage('about');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else if (
        hash === '#services/rice-arts-key-chain' ||
        hash === '#/services/rice-arts-key-chain' ||
        hash === '#rice-art' ||
        hash === '#/rice-art'
      ) {
        setCurrentPage('rice-art');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else if (
        hash === '#services/taro-face-reading-palmistry' ||
        hash === '#/services/taro-face-reading-palmistry' ||
        hash === '#taro-reading' ||
        hash === '#/taro-reading' ||
        hash === '#tarot' ||
        hash === '#/tarot'
      ) {
        setCurrentPage('taro-reading');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else if (
        hash === '#services/pebble-stone-arts' ||
        hash === '#/services/pebble-stone-arts' ||
        hash === '#pebble-stone-arts' ||
        hash === '#/pebble-stone-arts' ||
        hash === '#pebble-art' ||
        hash === '#/pebble-art'
      ) {
        setCurrentPage('pebble-art');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else if (
        hash === '#services/mehendi' ||
        hash === '#/services/mehendi' ||
        hash === '#mehendi' ||
        hash === '#/mehendi' ||
        hash === '#mehandi' ||
        hash === '#/mehandi'
      ) {
        setCurrentPage('mehendi');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else if (
        hash === '#services/clay-modeling' ||
        hash === '#/services/clay-modeling' ||
        hash === '#clay-modeling' ||
        hash === '#/clay-modeling'
      ) {
        setCurrentPage('clay-modeling');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else if (
        hash === '#services/mug-caricature' ||
        hash === '#/services/mug-caricature' ||
        hash === '#mug-caricature' ||
        hash === '#/mug-caricature'
      ) {
        setCurrentPage('mug-caricature');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else if (
        hash === '#services/caricature-artist' ||
        hash === '#/services/caricature-artist' ||
        hash === '#caricature-artist' ||
        hash === '#/caricature-artist'
      ) {
        setCurrentPage('caricature-artist');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else if (
        hash === '#services/hair-braidings' ||
        hash === '#/services/hair-braidings' ||
        hash === '#hair-braiding' ||
        hash === '#/hair-braiding'
      ) {
        setCurrentPage('hair-braiding');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else if (
        hash === '#services/origami-craft' ||
        hash === '#/services/origami-craft' ||
        hash === '#origami-crafts' ||
        hash === '#/origami-crafts'
      ) {
        setCurrentPage('origami-crafts');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else if (
        hash === '#services/kids-jewelry-making' ||
        hash === '#/services/kids-jewelry-making' ||
        hash === '#kids-jewelry' ||
        hash === '#/kids-jewelry'
      ) {
        setCurrentPage('kids-jewelry');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else if (
        hash === '#services/pottery-artists' ||
        hash === '#/services/pottery-artists' ||
        hash === '#pottery-artists' ||
        hash === '#/pottery-artists'
      ) {
        setCurrentPage('pottery-artists');
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
        ) : currentPage === 'rice-art' ? (
          <>
            <RiceArtKeyChainPage />
            <CtaSection />
          </>
        ) : currentPage === 'taro-reading' ? (
          <>
            <TaroFaceReadingPage />
            <CtaSection />
          </>
        ) : currentPage === 'pebble-art' ? (
          <>
            <PebbleStoneArtPage />
            <CtaSection />
          </>
        ) : currentPage === 'mehendi' ? (
          <>
            <MehandiArtistryPage />
            <CtaSection />
          </>
        ) : currentPage === 'clay-modeling' ? (
          <>
            <ClayModelingPage />
            <CtaSection />
          </>
        ) : currentPage === 'mug-caricature' ? (
          <>
            <MugCaricaturePage />
            <CtaSection />
          </>
        ) : currentPage === 'caricature-artist' ? (
          <>
            <CaricatureArtistPage />
            <CtaSection />
          </>
        ) : currentPage === 'hair-braiding' ? (
          <>
            <HairBraidingPage />
            <CtaSection />
          </>
        ) : currentPage === 'origami-crafts' ? (
          <>
            <OrigamiCraftsPage />
            <CtaSection />
          </>
        ) : currentPage === 'kids-jewelry' ? (
          <>
            <KidsJewelryMakingPage />
            <CtaSection />
          </>
        ) : currentPage === 'pottery-artists' ? (
          <>
            <PotteryArtistsPage />
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
