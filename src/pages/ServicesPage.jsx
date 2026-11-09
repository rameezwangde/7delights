import React, { useState } from 'react';
import {
  Sparkles,
  Phone,
  Search,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Clock,
  Layers,
  HeartHandshake,
  Headphones,
  Award,
} from 'lucide-react';
import { GoldUnderline, HandDrawnHeart } from '../components/Doodles';

export default function ServicesPage() {
  const [activeTab, setActiveTab] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  // 21 Scraped Activity Counters directly from 7delights.in/activities-artists/
  const activities = [
    {
      id: 1,
      title: 'Balloon Modeling',
      slug: '#services/balloon-modelings',
      category: 'kids',
      image: '/assets/artist-1.webp',
      tag: 'Kids Favorite',
      badgeBg: 'bg-[#FFE8ED] text-[#EE3775] border-[#FFD0DB]',
      desc: 'Creating eye-catching balloon models is an art that fascinates everyone! Our balloon twisters make swords, animals, and crowns.',
    },
    {
      id: 2,
      title: 'Tattoo Artists & Face Painting',
      slug: '#services/tattoo-artists-face-painting',
      category: 'kids',
      image: '/assets/artist-2.webp',
      tag: 'Glitter & Art',
      badgeBg: 'bg-[#FFF3DF] text-[#D97706] border-[#FFE4B8]',
      desc: 'Get the most attractive tattoos, and face paints with top professionals using safe, hypoallergenic skin-friendly colors.',
    },
    {
      id: 3,
      title: 'Nail Artistry',
      slug: '#services/nails-artistry',
      category: 'crafts',
      image: '/assets/artist-3.webp',
      tag: 'Beauty Stall',
      badgeBg: 'bg-[#F2EDFF] text-[#7B61FF] border-[#E0D5FF]',
      desc: 'Collaborate with our experts to give your nails the most attractive look with trendy patterns and dazzling colors.',
    },
    {
      id: 4,
      title: 'Pottery Artists',
      slug: '#services/pottery-artists',
      category: 'crafts',
      image: '/assets/artist-4.webp',
      tag: 'Live Potter Wheel',
      badgeBg: 'bg-[#E3F8F2] text-[#059669] border-[#C1F1E1]',
      desc: 'Our pottery art is exclusively designed to make you feel elated. Spin real clay on the potter wheel and take your creations home.',
    },
    {
      id: 5,
      title: 'Kids Jeweler Making',
      slug: '#services/kids-jewelry-making',
      category: 'kids',
      image: '/assets/artist-5.webp',
      tag: 'Bead Crafts',
      badgeBg: 'bg-[#FFE8ED] text-[#EE3775] border-[#FFD0DB]',
      desc: 'Our experts can create the most exciting range of kids-jewelry items with colorful beads, rings, and friendship bracelets.',
    },
    {
      id: 6,
      title: 'Origami Crafts',
      slug: '#services/origami-craft',
      category: 'crafts',
      image: '/assets/artist-6.webp',
      tag: 'Paper Folding Art',
      badgeBg: 'bg-[#FFF3DF] text-[#D97706] border-[#FFE4B8]',
      desc: 'Step ahead to learn the art of creating exciting things with origami crafts, from soaring birds to delicate paper flowers.',
    },
    {
      id: 7,
      title: 'Hair Braiding',
      slug: '#services/hair-braidings',
      category: 'crafts',
      image: '/assets/artist-7.webp',
      tag: 'Styling Counter',
      badgeBg: 'bg-[#F2EDFF] text-[#7B61FF] border-[#E0D5FF]',
      desc: 'Speak to our styling experts to learn exciting hair-braiding designs with colorful threads and beads for special occasions.',
    },
    {
      id: 8,
      title: 'Caricature Pencil Face Art',
      slug: '#services/caricature-artist',
      category: 'artists',
      image: '/assets/artist-8.webp',
      tag: 'Live Sketch Artist',
      badgeBg: 'bg-[#E3F8F2] text-[#059669] border-[#C1F1E1]',
      desc: 'Our caricature artist can bring smiles to your lips with their decent pencil skills, sketching hilarious live portraits in minutes.',
    },
    {
      id: 9,
      title: 'Mug Caricature (30 Mugs)',
      slug: '#services/mug-caricature',
      category: 'artists',
      image: '/assets/artist-9.webp',
      tag: 'Custom Gift Souvenir',
      badgeBg: 'bg-[#FFE8ED] text-[#EE3775] border-[#FFD0DB]',
      desc: 'Make mugs a decent gift item with customized face caricatures and messages for your loved ones printed on-site.',
    },
    {
      id: 10,
      title: 'Clay Modeling',
      slug: '#services/clay-modeling',
      category: 'crafts',
      image: '/assets/artist-10.webp',
      tag: 'Sculpting Fun',
      badgeBg: 'bg-[#FFF3DF] text-[#D97706] border-[#FFE4B8]',
      desc: 'Step ahead to learn the art of creating exciting clay sculptures, animals, and cartoon figurines with colorful modeling dough.',
    },
    {
      id: 11,
      title: 'Mehandi Artistry',
      slug: '#services/mehendi',
      category: 'traditional',
      image: '/assets/artist-11.webp',
      tag: 'Bridal & Party Henna',
      badgeBg: 'bg-[#F2EDFF] text-[#7B61FF] border-[#E0D5FF]',
      desc: 'Adorn your palms and arms with extraordinary mehndi designs. Intricate Arabic and traditional Indian bridal patterns.',
    },
    {
      id: 12,
      title: 'Pebble Stone Art',
      slug: '#services/pebble-stone-arts',
      category: 'crafts',
      image: '/assets/artist-12.webp',
      tag: 'Stone Painting',
      badgeBg: 'bg-[#E3F8F2] text-[#059669] border-[#C1F1E1]',
      desc: 'Breathe life to stones with the most scintillating stone art. Guests paint river stones with vibrant acrylic motifs.',
    },
    {
      id: 13,
      title: 'Taro / Face Reading / Palmistry',
      slug: '#services/taro-face-reading-palmistry',
      category: 'artists',
      image: '/assets/artist-13.webp',
      tag: 'Fortune Teller Stall',
      badgeBg: 'bg-[#FFE8ED] text-[#EE3775] border-[#FFD0DB]',
      desc: 'Interested to know about the future? Talk to our palmists and tarot card readers for entertaining astrological insights.',
    },
    {
      id: 14,
      title: 'Rice Art Key Chain',
      slug: '#services/rice-arts-key-chain',
      category: 'crafts',
      image: '/assets/artist-14.webp',
      tag: 'Micro Engraving',
      badgeBg: 'bg-[#FFF3DF] text-[#D97706] border-[#FFE4B8]',
      desc: 'Trust our miniature artists for writing names on single rice grains encapsulated in glass oil vials for personalized keychains.',
    },
    {
      id: 15,
      title: 'Bottle Painting',
      slug: '#services/bottle-painting',
      category: 'crafts',
      image: '/assets/artist-15.webp',
      tag: 'Glass Upcycling',
      badgeBg: 'bg-[#F2EDFF] text-[#7B61FF] border-[#E0D5FF]',
      desc: 'Our Painting artists transform glass bottles with fairy lights, acrylic florals, and distressed rustic finishes.',
    },
    {
      id: 16,
      title: 'Pot Painting',
      slug: '#services/pot-painting',
      category: 'crafts',
      image: '/assets/artist-16.webp',
      tag: 'Terracotta Art',
      badgeBg: 'bg-[#E3F8F2] text-[#059669] border-[#C1F1E1]',
      desc: 'Our Painting artists have gained exemplary popularity decorating terracotta pots with traditional Warli and Madhubani patterns.',
    },
    {
      id: 17,
      title: 'Wax Hand Making',
      slug: '#services/wax-hand-making',
      category: 'artists',
      image: '/assets/artist-17.webp',
      tag: '3D Wax Cast',
      badgeBg: 'bg-[#FFE8ED] text-[#EE3775] border-[#FFD0DB]',
      desc: 'Our Wax Hand Making artists dip hands into colored wax molds to create instant, vibrant 3D sculpture keepsakes.',
    },
    {
      id: 18,
      title: 'Turban / Pagri Tying',
      slug: '#services/turban-pagri-tying',
      category: 'traditional',
      image: '/assets/artist-18.webp',
      tag: 'Royal Welcome',
      badgeBg: 'bg-[#FFF3DF] text-[#D97706] border-[#FFE4B8]',
      desc: 'Our Turban - Pagri Tying artists welcome guests with royal Rajasthani and Punjabi turbans, setting an opulent festive tone.',
    },
    {
      id: 19,
      title: 'Lac Bangle Making',
      slug: '#services/lac-bangle-making',
      category: 'traditional',
      image: '/assets/artist-19.webp',
      tag: 'Live Artisan Craft',
      badgeBg: 'bg-[#F2EDFF] text-[#7B61FF] border-[#E0D5FF]',
      desc: 'Our master craftsmen melt raw natural lac and hand-set sparkling stones live on-site to give bespoke bangles to your guests.',
    },
    {
      id: 20,
      title: 'Block Printing Bag',
      slug: '#services/block-printing',
      category: 'crafts',
      image: '/assets/artist-20.webp',
      tag: 'Textile Workshop',
      badgeBg: 'bg-[#E3F8F2] text-[#059669] border-[#C1F1E1]',
      desc: 'Guests press hand-carved wooden blocks onto tote bags using eco-friendly textile pigments to craft custom carry bags.',
    },
    {
      id: 21,
      title: 'Sand Art Bottle',
      slug: '#services/sand-art',
      category: 'crafts',
      image: '/assets/artist-21.webp',
      tag: 'Layered Sand Art',
      badgeBg: 'bg-[#FFE8ED] text-[#EE3775] border-[#FFD0DB]',
      desc: 'Our sand artists layer bright, multi-colored sand into glass vessels to create breathtaking landscape patterns.',
    },
  ];

  // 4 Core Value Pillars scraped from the services page
  const strengths = [
    {
      title: 'Customizable Theme Decoration',
      desc: 'Meeting your dream and fascination becomes a priority for us, and we do it with all our strength!',
      color: '#EE3775',
      bg: 'bg-[#FFE8ED]',
      icon: <Sparkles className="w-6 h-6 text-[#EE3775]" />,
    },
    {
      title: 'Rich Infrastructure',
      desc: 'We have the richest décor and event infrastructure in Bangalore! We work continuously on enriching it further.',
      color: '#F5A623',
      bg: 'bg-[#FFF3DF]',
      icon: <Layers className="w-6 h-6 text-[#F5A623]" />,
    },
    {
      title: '24/7 Customer Service',
      desc: 'Our team of caring event planners is available round-the-clock to assist you with all your party queries.',
      color: '#7B61FF',
      bg: 'bg-[#F2EDFF]',
      icon: <Headphones className="w-6 h-6 text-[#7B61FF]" />,
    },
    {
      title: 'Best Competent Team',
      desc: 'We are proud of our robust and best-in-class tech and artist professionals for their impeccable celebration execution.',
      color: '#10B981',
      bg: 'bg-[#E3F8F2]',
      icon: <Award className="w-6 h-6 text-[#10B981]" />,
    },
  ];

  const categories = [
    { id: 'all', label: 'All 21 Activities' },
    { id: 'kids', label: 'Kids & Games' },
    { id: 'crafts', label: 'DIY Art & Crafts' },
    { id: 'artists', label: 'Live Sketch & Fortune' },
    { id: 'traditional', label: 'Traditional & Heritage' },
  ];

  const filtered = activities.filter((act) => {
    const matchesCategory = activeTab === 'all' || act.category === activeTab;
    const matchesSearch =
      act.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      act.desc.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="w-full bg-[#FFFDF9] select-none">
      
      {/* ======================================================== */}
      {/* 1. HERO BREADCRUMB / BANNER                              */}
      {/* ======================================================== */}
      <section className="relative w-full bg-gradient-to-b from-[#FFF5F6] via-[#FFFDF9] to-[#FFFDF9] pt-8 sm:pt-10 pb-8 sm:pb-10 overflow-hidden border-b border-[#FCD5DE]/60">
        
        {/* Ambient Glows */}
        <div className="absolute top-0 right-1/4 w-[450px] h-[450px] bg-[#FFE8ED]/60 rounded-full blur-3xl pointer-events-none -z-0" />
        <div className="absolute bottom-0 left-10 w-80 h-80 bg-[#FFF3DF]/50 rounded-full blur-3xl pointer-events-none -z-0" />

        <div className="w-full max-w-[1720px] mx-auto px-6 sm:px-10 lg:px-14 xl:px-16 text-center relative z-10">
          
          <div className="inline-flex items-center space-x-2.5 mb-2.5">
            <span className="w-6 h-[1.5px] bg-[#EE3775]" />
            <span className="text-[12px] sm:text-[13px] font-bold tracking-[0.2em] text-[#EE3775] uppercase font-sans">
              ACTIVITIES & ARTISTS • BANGALORE
            </span>
            <span className="w-6 h-[1.5px] bg-[#EE3775]" />
          </div>

          <h1 className="text-[32px] sm:text-[42px] lg:text-[48px] font-bold text-[#111A2E] font-serif leading-[1.12] mb-3">
            7delights Activities & Artists Organisers for{' '}
            <span className="text-[#EE3775] relative inline-block font-dancing font-normal text-[38px] sm:text-[52px] lg:text-[60px]">
              Events Bangalore
              <div className="absolute -bottom-2 left-0 w-full overflow-visible">
                <GoldUnderline className="w-full h-3.5 text-[#F5A623]" />
              </div>
            </span>
          </h1>

          <p className="text-[14.5px] sm:text-[16px] text-[#5A6E85] max-w-2xl mx-auto leading-relaxed">
            Welcome to the home of exemplary party entertainment. Discover 21+ live activities, artisanal stalls, and interactive masterclasses to make your guests feel happy and amazed.
          </p>

          {/* Search Bar */}
          <div className="mt-5 max-w-lg mx-auto flex items-center bg-white border border-[#F3E8E2] rounded-full p-1.5 shadow-2xs">
            <div className="pl-4 text-[#94A3B8]">
              <Search className="w-4 h-4" />
            </div>
            <input
              type="text"
              placeholder="Search activities (e.g. pottery, caricature, tattoo, mehndi)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="flex-1 px-3 py-2 text-[14px] text-[#111A2E] placeholder-[#94A3B8] outline-none bg-transparent"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="pr-3 text-[#94A3B8] hover:text-[#111A2E] text-xs font-semibold cursor-pointer"
              >
                Clear
              </button>
            )}
          </div>

        </div>
      </section>

      {/* ======================================================== */}
      {/* 2. 21 ACTIVITIES & ARTISTS STALLS GRID                   */}
      {/* ======================================================== */}
      <section className="relative w-full py-8 sm:py-10 lg:py-12 overflow-hidden">
        
        <div className="w-full max-w-[1720px] mx-auto px-6 sm:px-10 lg:px-14 xl:px-16 relative z-10">
          
          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-2.5 mb-8 sm:mb-9">
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

          {/* Grid of 21 Scraped Activity Counters */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-7">
            {filtered.map((act) => (
              <div
                key={act.id}
                className="group relative bg-white rounded-3xl overflow-hidden border border-[#F3E8E2] hover:border-[#FCD5DE] transition-all duration-300 shadow-2xs hover:shadow-xl hover:-translate-y-1.5 flex flex-col text-left"
              >
                {/* Stall Photo with Tag */}
                <div className="relative h-52 sm:h-56 w-full overflow-hidden bg-[#FFF5F6]">
                  <img
                    src={act.image}
                    alt={act.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-108"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/10" />

                  {/* Top Left: Tag */}
                  <div className="absolute top-3 left-3 z-10">
                    <span
                      className={`inline-block px-2.5 py-0.5 rounded-full text-[11px] font-bold border backdrop-blur-md ${act.badgeBg}`}
                    >
                      {act.tag}
                    </span>
                  </div>

                  {/* Bottom Strip */}
                  <div className="absolute bottom-2.5 left-3.5 right-3.5 flex items-center justify-between text-[11px] text-white/90 font-medium">
                    <span>Available in Bangalore</span>
                    <span className="flex items-center space-x-1">
                      <Sparkles className="w-3 h-3 text-[#F5A623]" />
                      <span>Live Stall</span>
                    </span>
                  </div>
                </div>

                {/* Content Body */}
                <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <p className="text-[18px] font-bold text-[#111A2E] font-serif mb-2 group-hover:text-[#EE3775] transition-colors leading-snug">
                      {act.title}
                    </p>
                    <p className="text-[13px] text-[#5A6E85] leading-relaxed mb-4">
                      {act.desc}
                    </p>
                  </div>

                  {/* Booking & Details Link */}
                  <div className="pt-3 border-t border-[#F8ECE8] flex items-center justify-between">
                    <a
                      href={act.slug || "#contact"}
                      className="inline-flex items-center space-x-1.5 text-[12.5px] font-bold text-[#EE3775] group-hover:translate-x-1 transition-transform"
                    >
                      <span>{act.slug ? 'View Details & Book' : 'Book Activity Counter'}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </a>
                    <a
                      href="tel:+919980029977"
                      className="w-8 h-8 rounded-full bg-[#FFF5F6] hover:bg-[#EE3775] text-[#EE3775] hover:text-white flex items-center justify-center transition-colors"
                      aria-label="Call to book"
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
      {/* 3. CORE STRENGTHS SECTION (Scraped from Services Page)   */}
      {/* ======================================================== */}
      <section className="relative w-full pt-8 sm:pt-10 pb-6 sm:pb-8 bg-[#FFF5F6]/70 border-t border-[#FCD5DE]/60 overflow-hidden">
        
        <div className="w-full max-w-[1720px] mx-auto px-6 sm:px-10 lg:px-14 xl:px-16 relative z-10">
          
          <div className="text-center max-w-2xl mx-auto mb-6 sm:mb-8">
            <span className="text-[12px] font-bold tracking-[0.2em] text-[#EE3775] uppercase">
              HOME OF EXEMPLARY ACTIVITIES
            </span>
            <h2 className="text-[32px] sm:text-[40px] font-bold text-[#111A2E] font-serif mt-2 mb-3">
              7DELIGHTS.in — A Name You Can Trust
            </h2>
            <p className="text-[14.5px] sm:text-[15.5px] text-[#5A6E85]">
              If you are planning to hold a fest, birthday, or corporate gathering, think of us to entertain your guests with engaging activities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-7">
            {strengths.map((str, idx) => (
              <div
                key={idx}
                className="bg-white rounded-3xl p-6 sm:p-7 border border-[#F3E8E2] shadow-2xs hover:shadow-lg hover:-translate-y-1 transition-all duration-300 text-left flex flex-col justify-between"
              >
                <div>
                  <div
                    className={`w-13 h-13 rounded-2xl ${str.bg} border border-black/5 flex items-center justify-center mb-5 shadow-xs`}
                  >
                    {str.icon}
                  </div>
                  <h3 className="text-[18px] font-bold text-[#111A2E] font-serif mb-2 leading-snug">
                    {str.title}
                  </h3>
                  <p className="text-[13.5px] text-[#5A6E85] leading-relaxed">
                    {str.desc}
                  </p>
                </div>

                <div className="pt-4 mt-5 border-t border-[#F8ECE8] flex items-center space-x-1.5 text-[12px] font-semibold text-[#EE3775]">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Guaranteed Excellence</span>
                </div>
              </div>
            ))}
          </div>

        </div>

      </section>

    </div>
  );
}

