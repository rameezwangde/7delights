import React, { useState } from 'react';
import {
  Sparkles,
  Camera,
  Play,
  Heart,
  Eye,
  ArrowRight,
  Phone,
  Plus,
  Minus,
  CheckCircle2,
  Clock,
  CreditCard,
  X,
  Maximize2,
} from 'lucide-react';
import { GoldUnderline, HandDrawnHeart } from '../components/Doodles';

export default function GalleryPage() {
  const [activeTab, setActiveTab] = useState('all');
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const [openFaq, setOpenFaq] = useState(0);

  // Exact gallery items scraped directly from 7delights/gallery/
  const galleryItems = [
    {
      id: 1,
      title: 'Theme Decor',
      category: 'theme',
      tag: 'Birthday Theme Decor',
      image: '/assets/gallery-theme-decor.webp',
      description: 'Grand thematic stage setups with custom backdrop arches, lighting, and stage props.',
    },
    {
      id: 2,
      title: 'Photo Booth Frame',
      category: 'photobooth',
      tag: 'Selfie & Photo Booth',
      image: '/assets/gallery-photo-booth-frame.webp',
      description: 'Handcrafted photo booth cutouts and selfie frames for memorable guest captures.',
    },
    {
      id: 3,
      title: 'Naming Ceremony Decor',
      category: 'ceremony',
      tag: 'Baby Naming Ceremony',
      image: '/assets/gallery-naming-ceremony.webp',
      description: 'Traditional and modern cradle naming ceremony decor styled with fresh flowers and balloons.',
    },
    {
      id: 4,
      title: 'Caricature Art',
      category: 'activities',
      tag: 'Live Artist Stall',
      image: '/assets/gallery-caricature.webp',
      description: 'Live caricature sketch artists entertaining guests with personalized comedy portraits.',
    },
    {
      id: 5,
      title: 'Photo Booth Setup',
      category: 'photobooth',
      tag: '3D Photo Backdrop',
      image: '/assets/gallery-photo-booth.webp',
      description: 'Complete thematic 3D photo booth zone with custom floor carpets and balloon rings.',
    },
    {
      id: 6,
      title: 'Face Painting',
      category: 'activities',
      tag: 'Kids Creative Play',
      image: '/assets/gallery-face-painting.webp',
      description: 'Professional face painting for children using safe, non-toxic cosmetic paints.',
    },
    {
      id: 7,
      title: 'Origami Paper Crafts',
      category: 'activities',
      tag: 'Craft Workshop',
      image: '/assets/gallery-origami.webp',
      description: 'Interactive Japanese paper folding masterclasses creating colorful birds, flowers, and boxes.',
    },
    {
      id: 8,
      title: 'Tattoo Artist',
      category: 'activities',
      tag: 'Glitter & Temporary Tattoo',
      image: '/assets/gallery-tattoo-artist.webp',
      description: 'Sparkling glitter and temporary henna-style body art designed for party guests of all ages.',
    },
    {
      id: 9,
      title: 'Flower Decor',
      category: 'flower',
      tag: 'Fresh Floral Styling',
      image: '/assets/gallery-flower-decor.webp',
      description: 'Exquisite fresh floral arrangements, bridal walkway canopies, and traditional flower backdrops.',
    },
    {
      id: 10,
      title: 'Balloon Decor',
      category: 'balloon',
      tag: 'Organic Balloon Sculpting',
      image: '/assets/gallery-balloon-decor.webp',
      description: 'Spectacular helium balloon bouquets, pastel balloon walls, and organic entrance arches.',
    },
  ];

  // Featured Videos Showcase Section from 7delights/gallery/
  const featuredVideos = [
    {
      id: 1,
      title: 'Birthday Event Highlights',
      tag: 'YouTube Premiere',
      image: '/assets/gallery-featured-vid1.webp',
      duration: '02:40',
      description: 'Relive the excitement of a high-energy Bangalore celebration with party entertainment and mascot games.',
    },
    {
      id: 2,
      title: 'Theme Decor Stage Showcase',
      tag: 'Decor Walkthrough',
      image: '/assets/gallery-featured-vid2.webp',
      duration: '03:15',
      description: 'Complete venue transformation featuring stage lighting, 3D props, and luxury balloon garlands.',
    },
    {
      id: 3,
      title: 'Jungle Theme Birthday Party',
      tag: 'Wild Adventure Theme',
      image: '/assets/gallery-featured-vid3.webp',
      duration: '02:50',
      description: 'A vibrant safari jungle adventure backdrop filled with realistic balloon animals and thematic green foliage.',
    },
  ];

  const categories = [
    { id: 'all', label: 'All Photos' },
    { id: 'theme', label: 'Theme Decor' },
    { id: 'balloon', label: 'Balloon Decor' },
    { id: 'flower', label: 'Flower Decor' },
    { id: 'photobooth', label: 'Photo Booths' },
    { id: 'activities', label: 'Live Activities' },
    { id: 'ceremony', label: 'Naming Ceremonies' },
  ];

  const filteredPhotos =
    activeTab === 'all'
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeTab);

  const galleryFaqs = [
    {
      question: 'How far in advance should I book 7Delights for my event?',
      answer:
        'To ensure maximum availability of premium artists, specific themes, & equipment, we recommend booking at least 1 to 6 weeks in advance for social parties & corporate events, and 3 to 6 months in advance for major weddings or large-scale corporate launches. However, if you have a last-minute request in Bangalore, contact us & we will do our best to make it happen!',
      icon: <Clock className="w-5 h-5 text-[#EE3775]" />,
    },
    {
      question: 'How long does it take for your team to set up?',
      answer:
        'Setup times vary by service. Simple balloon decorations or a single interactive stall may take 1 to 2 hours. Complex thematic stage setups, intricate lighting riggings, or heavy SFX installations can take anywhere from 4 to 12 hours. We always coordinate directly with the venue to ensure everything is flawlessly set up well before your first guest arrives.',
      icon: <CheckCircle2 className="w-5 h-5 text-[#F5A623]" />,
    },
    {
      question: 'What is your payment policy?',
      answer:
        'To secure your date, artists, and materials, we require an advance payment upon signing the contract. The remaining balance is structured into milestones leading up to, or on the day of the event.',
      icon: <CreditCard className="w-5 h-5 text-[#7B61FF]" />,
    },
  ];

  return (
    <div className="w-full bg-[#FFFDF9] select-none">
      
      {/* ======================================================== */}
      {/* 1. HERO BREADCRUMB / BANNER (Official Header)            */}
      {/* ======================================================== */}
      <section className="relative w-full bg-gradient-to-b from-[#FFF5F6] via-[#FFFDF9] to-[#FFFDF9] pt-14 pb-16 sm:py-20 overflow-hidden border-b border-[#FCD5DE]/60">
        
        {/* Ambient Glows */}
        <div className="absolute top-0 right-1/4 w-[450px] h-[450px] bg-[#FFE8ED]/60 rounded-full blur-3xl pointer-events-none -z-0" />
        <div className="absolute bottom-0 left-10 w-80 h-80 bg-[#FFF3DF]/50 rounded-full blur-3xl pointer-events-none -z-0" />

        <div className="w-full max-w-[1720px] mx-auto px-6 sm:px-10 lg:px-14 xl:px-16 text-center relative z-10">
          
          <div className="inline-flex items-center space-x-2.5 mb-3.5">
            <span className="w-6 h-[1.5px] bg-[#EE3775]" />
            <span className="text-[12px] sm:text-[13px] font-bold tracking-[0.2em] text-[#EE3775] uppercase font-sans">
              REAL CELEBRATION MOMENTS & THEME SETUPS
            </span>
            <span className="w-6 h-[1.5px] bg-[#EE3775]" />
          </div>

          <h1 className="text-[36px] sm:text-[48px] lg:text-[58px] font-bold text-[#111A2E] font-serif leading-[1.12] mb-4">
            7delights Birthday Party Events{' '}
            <span className="text-[#EE3775] relative inline-block font-dancing font-normal text-[44px] sm:text-[60px] lg:text-[70px]">
              Organisers Bangalore Gallery
              <div className="absolute -bottom-2 left-0 w-full overflow-visible">
                <GoldUnderline className="w-full h-3.5 text-[#F5A623]" />
              </div>
            </span>
          </h1>

          <p className="text-[15.5px] sm:text-[17px] text-[#5A6E85] max-w-2xl mx-auto leading-relaxed">
            Explore our curated photo album featuring real theme backdrops, balloon sculpting, naming ceremonies, fresh flower arches, and joyful party activities in Bangalore.
          </p>

        </div>
      </section>

      {/* ======================================================== */}
      {/* 2. FEATURED EVENT GALLERY SECTION (Original 10 Items)    */}
      {/* ======================================================== */}
      <section className="relative w-full py-14 sm:py-18 lg:py-22 overflow-hidden">
        
        <div className="w-full max-w-[1720px] mx-auto px-6 sm:px-10 lg:px-14 xl:px-16 relative z-10">
          
          {/* Section Header */}
          <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
            <h2 className="text-[30px] sm:text-[38px] font-bold text-[#111A2E] font-serif mb-3">
              Featured Event Gallery
            </h2>
            <p className="text-[14.5px] sm:text-[15.5px] text-[#5A6E85]">
              Browse through our authentic work captured live at venues across Bangalore.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-2.5 mb-12 sm:mb-14">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-[13px] sm:text-[13.5px] font-semibold transition-all duration-200 cursor-pointer ${
                  activeTab === cat.id
                    ? 'bg-[#EE3775] text-white shadow-md shadow-[#EE3775]/25 scale-102'
                    : 'bg-white text-[#5A6E85] border border-[#F3E8E2] hover:border-[#EE3775] hover:text-[#111A2E]'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Grid of 10 Official Scraped Event Photos */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-7">
            {filteredPhotos.map((item) => (
              <div
                key={item.id}
                className="group relative bg-white rounded-2xl overflow-hidden border border-[#F3E8E2] hover:border-[#FCD5DE] transition-all duration-300 shadow-2xs hover:shadow-xl hover:-translate-y-1.5 flex flex-col text-left"
              >
                
                {/* Photo Container with Zoom & Expand trigger */}
                <div
                  onClick={() => setSelectedPhoto(item)}
                  className="relative h-60 sm:h-64 w-full overflow-hidden bg-[#FFF5F6] cursor-pointer"
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-108"
                  />

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-black/5 group-hover:from-black/80 transition-colors" />

                  {/* Top Left: Tag */}
                  <div className="absolute top-3 left-3 z-10">
                    <span className="inline-block px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-white/90 text-[#EE3775] backdrop-blur-md shadow-xs">
                      {item.tag}
                    </span>
                  </div>

                  {/* Expand Zoom Icon */}
                  <div className="absolute top-3 right-3 z-10 w-8 h-8 rounded-full bg-black/50 hover:bg-[#EE3775] flex items-center justify-center text-white backdrop-blur-md transition-colors">
                    <Maximize2 className="w-3.5 h-3.5" />
                  </div>

                  {/* Bottom Strip */}
                  <div className="absolute bottom-3 left-3.5 right-3.5 flex items-center justify-between text-[11.5px] text-white/90 font-medium">
                    <span>7Delights Bangalore</span>
                    <span className="flex items-center space-x-1">
                      <Camera className="w-3 h-3 text-[#F5A623]" />
                      <span>Live Setup</span>
                    </span>
                  </div>

                </div>

                {/* Card Content Body */}
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <p
                      onClick={() => setSelectedPhoto(item)}
                      className="text-[18px] font-bold text-[#111A2E] font-serif mb-2 group-hover:text-[#EE3775] transition-colors cursor-pointer"
                    >
                      {item.title}
                    </p>
                    <p className="text-[13px] text-[#5A6E85] leading-relaxed mb-4">
                      {item.description}
                    </p>
                  </div>

                  {/* Book / Enquire Action Button */}
                  <div className="pt-3 border-t border-[#F8ECE8] flex items-center justify-between">
                    <a
                      href="#contact"
                      className="inline-flex items-center space-x-1.5 text-[12.5px] font-bold text-[#EE3775] group-hover:translate-x-1 transition-transform"
                    >
                      <span>Request This Setup</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </a>
                    <a
                      href="tel:+919980029977"
                      className="w-8 h-8 rounded-full bg-[#FFF5F6] hover:bg-[#EE3775] text-[#EE3775] hover:text-white flex items-center justify-center transition-colors"
                      aria-label="Call for this setup"
                    >
                      <Phone className="w-3.5 h-3.5" />
                    </a>
                  </div>

                </div>

              </div>
            ))}
          </div>

        </div>

      </section>

      {/* ======================================================== */}
      {/* 3. FEATURED VIDEOS SECTION (Scraped from Gallery Page)   */}
      {/* ======================================================== */}
      <section className="relative w-full py-16 sm:py-20 bg-[#FFF5F6]/60 border-t border-[#FCD5DE]/60 overflow-hidden">
        
        <div className="w-full max-w-[1720px] mx-auto px-6 sm:px-10 lg:px-14 xl:px-16 relative z-10">
          
          <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-14">
            <div className="inline-flex items-center space-x-2 mb-2">
              <span className="w-5 h-[1.5px] bg-[#EE3775]" />
              <span className="text-[12px] font-bold tracking-[0.2em] text-[#EE3775] uppercase">
                VIDEO HIGHLIGHTS
              </span>
              <span className="w-5 h-[1.5px] bg-[#EE3775]" />
            </div>

            <h2 className="text-[32px] sm:text-[40px] font-bold text-[#111A2E] font-serif mb-3">
              Featured Videos
            </h2>
            <p className="text-[14.5px] sm:text-[15.5px] text-[#5A6E85]">
              Watch our live event video showcases, walk-around games, and themed decor productions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-7 sm:gap-8">
            {featuredVideos.map((vid) => (
              <div
                key={vid.id}
                className="group relative bg-white rounded-3xl overflow-hidden border border-[#F3E8E2] hover:border-[#FCD5DE] transition-all duration-300 shadow-2xs hover:shadow-xl hover:-translate-y-1.5 flex flex-col text-left"
              >
                {/* Thumbnail with Glowing Play Button */}
                <div
                  onClick={() => setSelectedPhoto(vid)}
                  className="relative h-56 w-full overflow-hidden bg-[#162137] cursor-pointer"
                >
                  <img
                    src={vid.image}
                    alt={vid.title}
                    className="w-full h-full object-cover transition-transform duration-600 group-hover:scale-108"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-black/10" />

                  <div className="absolute top-3 left-3 z-10">
                    <span className="px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-[#EE3775] text-white">
                      {vid.tag}
                    </span>
                  </div>

                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-14 h-14 rounded-full bg-[#EE3775]/90 hover:bg-[#EE3775] text-white flex items-center justify-center shadow-lg shadow-[#EE3775]/40 group-hover:scale-115 transition-transform duration-300 border-2 border-white/80">
                      <Play className="w-6 h-6 fill-white translate-x-0.5" />
                    </div>
                  </div>

                  <div className="absolute bottom-2.5 right-3 text-[11px] font-semibold text-white/90 bg-black/60 px-2 py-0.5 rounded-full">
                    {vid.duration}
                  </div>
                </div>

                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <p className="text-[18px] font-bold text-[#111A2E] font-serif mb-2 group-hover:text-[#EE3775] transition-colors">
                      {vid.title}
                    </p>
                    <p className="text-[13px] text-[#5A6E85] leading-relaxed">
                      {vid.description}
                    </p>
                  </div>

                  <div className="pt-4 mt-4 border-t border-[#F8ECE8] flex items-center justify-between">
                    <a
                      href="#videos"
                      className="text-[13px] font-bold text-[#EE3775] hover:underline"
                    >
                      Watch in Videos Gallery →
                    </a>
                  </div>
                </div>

              </div>
            ))}
          </div>

        </div>

      </section>

      {/* ======================================================== */}
      {/* 4. EVENT FAQ SECTION (Exact Gallery Page Q&A)            */}
      {/* ======================================================== */}
      <section className="relative w-full py-16 sm:py-20 lg:py-24 bg-[#FFF9F6] border-t border-[#FCD5DE]/60 overflow-hidden">
        
        <div className="w-full max-w-[1300px] mx-auto px-6 sm:px-10 lg:px-14 xl:px-16 relative z-10">
          
          <div className="text-center max-w-2xl mx-auto mb-14 sm:mb-16">
            <div className="inline-flex items-center space-x-2.5 mb-3.5">
              <span className="w-6 h-[1.5px] bg-[#EE3775]" />
              <span className="text-[12px] sm:text-[13px] font-bold tracking-[0.2em] text-[#EE3775] uppercase font-sans">
                COMMONLY ASKED QUESTIONS
              </span>
              <span className="w-6 h-[1.5px] bg-[#EE3775]" />
            </div>

            <h2 className="text-[34px] sm:text-[46px] lg:text-[50px] font-bold text-[#111A2E] font-serif leading-[1.15] mb-4">
              Event{' '}
              <span className="text-[#EE3775] relative inline-block font-dancing font-normal text-[44px] sm:text-[56px] lg:text-[62px]">
                FAQ?
                <div className="absolute -bottom-2 left-0 w-full overflow-visible">
                  <GoldUnderline className="w-full h-3 text-[#F5A623]" />
                </div>
              </span>
            </h2>

            <p className="text-[15px] sm:text-[17px] text-[#5A6E85]">
              Everything you need to know about booking our gallery-featured theme decor and activities.
            </p>
          </div>

          <div className="space-y-4">
            {galleryFaqs.map((faq, index) => {
              const isOpen = openFaq === index;

              return (
                <div
                  key={index}
                  className={`bg-white rounded-2xl border transition-all duration-300 overflow-hidden ${
                    isOpen
                      ? 'border-[#EE3775]/50 shadow-md ring-2 ring-[#EE3775]/10'
                      : 'border-[#F3E8E2] hover:border-[#FCD5DE] shadow-2xs'
                  }`}
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? -1 : index)}
                    className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                  >
                    <div className="flex items-center space-x-4">
                      <div className="w-10 h-10 rounded-full bg-[#FFF5F6] border border-[#FCD5DE] flex items-center justify-center shrink-0">
                        {faq.icon}
                      </div>
                      <span className="text-[16px] sm:text-[18px] font-bold text-[#111A2E] font-sans">
                        {faq.question}
                      </span>
                    </div>

                    <div
                      className={`w-9 h-9 rounded-full flex items-center justify-center shrink-0 transition-colors duration-200 ${
                        isOpen
                          ? 'bg-[#EE3775] text-white'
                          : 'bg-[#FFF5F6] text-[#EE3775]'
                      }`}
                    >
                      {isOpen ? (
                        <Minus className="w-4 h-4" />
                      ) : (
                        <Plus className="w-4 h-4" />
                      )}
                    </div>
                  </button>

                  {isOpen && (
                    <div className="px-5 sm:px-6 pb-6 pt-0 text-[14.5px] sm:text-[15px] text-[#5A6E85] leading-relaxed border-t border-[#F8ECE8] mt-2 pt-4 pl-14 sm:pl-18">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Bottom Button */}
          <div className="mt-12 text-center">
            <a
              href="tel:+919980029977"
              className="inline-flex items-center space-x-2 px-7 py-3 rounded-full bg-[#20428B] hover:bg-[#EE3775] text-white text-[13px] font-bold tracking-wider uppercase transition-colors shadow-sm"
            >
              <span>EVENT FAQ ?</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

        </div>

      </section>

      {/* ======================================================== */}
      {/* 5. LIGHTBOX PHOTO MODAL                                  */}
      {/* ======================================================== */}
      {selectedPhoto && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-md p-4 sm:p-6 animate-in fade-in duration-200">
          <div className="relative w-full max-w-3xl bg-white rounded-3xl overflow-hidden shadow-2xl border border-white/20">
            
            {/* Modal Header */}
            <div className="p-4 sm:p-5 flex items-center justify-between border-b border-gray-100">
              <div className="text-left">
                <span className="px-2.5 py-0.5 rounded-full bg-[#FFE8ED] text-[#EE3775] text-[11px] font-bold uppercase">
                  {selectedPhoto.tag || '7Delights Gallery'}
                </span>
                <h3 className="text-[17px] font-bold text-[#111A2E] mt-1 font-serif">
                  {selectedPhoto.title}
                </h3>
              </div>

              <button
                onClick={() => setSelectedPhoto(null)}
                className="w-9 h-9 rounded-full bg-gray-100 hover:bg-[#EE3775] hover:text-white flex items-center justify-center text-gray-600 transition-colors cursor-pointer"
                aria-label="Close photo"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Photo */}
            <div className="relative w-full max-h-[60vh] bg-black/5 flex items-center justify-center overflow-hidden">
              <img
                src={selectedPhoto.image}
                alt={selectedPhoto.title}
                className="max-h-[60vh] w-auto object-contain"
              />
            </div>

            {/* Modal Footer */}
            <div className="p-5 text-left flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-[13.5px] border-t border-gray-100">
              <p className="text-[#5A6E85] max-w-md">{selectedPhoto.description}</p>
              <a
                href="#contact"
                onClick={() => setSelectedPhoto(null)}
                className="inline-flex items-center space-x-1.5 px-4 py-2 rounded-full bg-[#EE3775] hover:bg-[#d82a65] text-white font-semibold shadow-xs cursor-pointer shrink-0"
              >
                <span>Book This Setup</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>

          </div>
        </div>
      )}

    </div>
  );
}

