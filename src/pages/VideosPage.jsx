import React, { useState } from 'react';
import {
  Play,
  Phone,
  Sparkles,
  Film,
  Clock,
  ArrowRight,
  X,
  Search,
  Plus,
  Minus,
  CheckCircle2,
  CreditCard,
} from 'lucide-react';
import { GoldUnderline, HandDrawnHeart } from '../components/Doodles';

export default function VideosPage() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [openFaq, setOpenFaq] = useState(0);

  const videoFaqs = [
    {
      question: 'How far in advance should I book 7Delights for my event?',
      answer:
        'To ensure maximum availability of premium artists, specific themes, & equipment, we recommend booking at least 1 to 6 weeks in advance for social parties & corporate events, and 3 to 6 months in advance for major weddings or large-scale corporate launches. However, if you have a last-minute request, contact us & we will do our best to make it happen!',
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

  const categories = [
    { id: 'all', label: 'All 20 Videos' },
    { id: 'crafts', label: 'Arts & Creative Crafts' },
    { id: 'kids', label: 'Kids Activities & Play' },
    { id: 'entertainment', label: 'Magic & Shows' },
    { id: 'traditional', label: 'Dance & Traditional' },
    { id: 'decor', label: 'Theme Decoration' },
  ];

  // All 20 real video entries extracted directly from 7delights.in/videos
  const allVideos = [
    {
      id: 1,
      title: 'Balloon Modeling Video',
      category: 'kids',
      tag: 'Kids Favorite',
      badgeBg: 'bg-[#FFE8ED] text-[#EE3775] border-[#FFD0DB]',
      image: '/assets/vid-balloon-modeling.png',
      description: 'Creating eye-catching balloon models is an art that fascinates everyone!',
      videoBtn: 'VIEW BALLOON MODELING VIDEO',
      duration: '02:15',
    },
    {
      id: 2,
      title: 'Tattoo & Face Painting Video',
      category: 'kids',
      tag: 'Skin-Friendly Art',
      badgeBg: 'bg-[#FFF3DF] text-[#D97706] border-[#FFE4B8]',
      image: '/assets/vid-face-painting.png',
      description: 'Get the most attractive tattoos, and face paints with top professionals!',
      videoBtn: 'VIEW TATTOO ARTISTS VIDEO',
      duration: '01:50',
    },
    {
      id: 3,
      title: 'Pottery Video',
      category: 'crafts',
      tag: 'Artisan Workshop',
      badgeBg: 'bg-[#E3F8F2] text-[#059669] border-[#C1F1E1]',
      image: '/assets/vid-pottery.png',
      description: 'Our pottery art is exclusively designed to make you feel elated.',
      videoBtn: 'VIEW POTTERY VIDEO',
      duration: '02:30',
    },
    {
      id: 4,
      title: 'Kids Jeweler Making Video',
      category: 'crafts',
      tag: 'Creative Play',
      badgeBg: 'bg-[#F2EDFF] text-[#7B61FF] border-[#E0D5FF]',
      image: '/assets/vid-jewelry-making.png',
      description: 'Our experts can create the most exciting range of kids-jewelry items!',
      videoBtn: 'VIEW JEWELER MAKING VIDEO',
      duration: '02:05',
    },
    {
      id: 5,
      title: 'Origami Crafts Video',
      category: 'crafts',
      tag: 'Paper Folding Art',
      badgeBg: 'bg-[#FFE8ED] text-[#EE3775] border-[#FFD0DB]',
      image: '/assets/vid-origami.png',
      description: 'Step ahead to learn the art of creating exciting things with origami crafts.',
      videoBtn: 'VIEW ORIGAMI CRAFTS VIDEO',
      duration: '01:45',
    },
    {
      id: 6,
      title: 'Caricature Art Video',
      category: 'crafts',
      tag: 'Live Sketching',
      badgeBg: 'bg-[#FFF3DF] text-[#D97706] border-[#FFE4B8]',
      image: '/assets/vid-caricature.png',
      description: 'Our caricature artist can bring smiles to your lips with their decent pencil skills!',
      videoBtn: 'VIEW CARICATURE VIDEO',
      duration: '02:20',
    },
    {
      id: 7,
      title: 'Mug Caricature Video',
      category: 'crafts',
      tag: 'Personalized Keepsake',
      badgeBg: 'bg-[#F2EDFF] text-[#7B61FF] border-[#E0D5FF]',
      image: '/assets/vid-mug-caricature.png',
      description: 'Make mugs a decent gift item with customized messages for your loved ones!',
      videoBtn: 'VIEW MUG CARICATURE VIDEO',
      duration: '02:10',
    },
    {
      id: 8,
      title: 'Clay Modeling Video',
      category: 'crafts',
      tag: 'Hands-On Sculpting',
      badgeBg: 'bg-[#E3F8F2] text-[#059669] border-[#C1F1E1]',
      image: '/assets/vid-clay-modeling.png',
      description: 'Step ahead to learn the art of creating exciting things with clay modeling!',
      videoBtn: 'VIEW CLAY MODELING VIDEO',
      duration: '01:55',
    },
    {
      id: 9,
      title: 'Pebble Art Video',
      category: 'crafts',
      tag: 'Stone Painting',
      badgeBg: 'bg-[#FFE8ED] text-[#EE3775] border-[#FFD0DB]',
      image: '/assets/vid-pebble-art.png',
      description: 'Breathe life to the stones with the most scintillating stone art!',
      videoBtn: 'VIEW PEBBLE PAINTING VIDEO',
      duration: '01:40',
    },
    {
      id: 10,
      title: 'Wax Hand Making Video',
      category: 'crafts',
      tag: 'Interactive Keepsake',
      badgeBg: 'bg-[#FFF3DF] text-[#D97706] border-[#FFE4B8]',
      image: '/assets/vid-wax-hand.png',
      description: 'Our Wax Hand Making artists have gained exemplary popularity of making wax hands.',
      videoBtn: 'VIEW WAX HAND MAKING VIDEO',
      duration: '02:40',
    },
    {
      id: 11,
      title: 'Turban Pagri Tying Video',
      category: 'traditional',
      tag: 'Traditional Wedding',
      badgeBg: 'bg-[#F2EDFF] text-[#7B61FF] border-[#E0D5FF]',
      image: '/assets/vid-turban-pagri.png',
      description: 'Our Turban Pagri Tying artists have gained exemplary popularity due to top artist on Turban Pagri Tying.',
      videoBtn: 'VIEW TURBAN PAGRI VIDEO',
      duration: '02:15',
    },
    {
      id: 12,
      title: 'Lac Bangle Making Video',
      category: 'traditional',
      tag: 'Heritage Artisan',
      badgeBg: 'bg-[#E3F8F2] text-[#059669] border-[#C1F1E1]',
      image: '/assets/vid-lac-bangles.png',
      description: 'Our Lac Bangle Making artists have gained exemplary popularity due to top artist on Lac Bangles.',
      videoBtn: 'VIEW LAC BANGLE VIDEO',
      duration: '02:25',
    },
    {
      id: 13,
      title: 'Block Printing Bag Video',
      category: 'crafts',
      tag: 'Fabric Art',
      badgeBg: 'bg-[#FFE8ED] text-[#EE3775] border-[#FFD0DB]',
      image: '/assets/vid-block-printing.png',
      description: 'Our Block Printing Bag artists have gained exemplary popularity due to top artist on Block Printing Bag.',
      videoBtn: 'VIEW BLOCK PRINTING VIDEO',
      duration: '01:50',
    },
    {
      id: 14,
      title: 'Sand Art Bottle Video',
      category: 'crafts',
      tag: 'Color Sand Art',
      badgeBg: 'bg-[#FFF3DF] text-[#D97706] border-[#FFE4B8]',
      image: '/assets/vid-sand-art-bottle.png',
      description: 'Our sand artists have gained exemplary popularity due to top sand art bottle.',
      videoBtn: 'VIEW SAND ART BOTTLE VIDEO',
      duration: '02:10',
    },
    {
      id: 15,
      title: 'Theme Decoration Video',
      category: 'decor',
      tag: 'Turnkey Party Setup',
      badgeBg: 'bg-[#F2EDFF] text-[#7B61FF] border-[#E0D5FF]',
      image: '/assets/vid-theme-decoration.png',
      description: 'Our experts create exciting theme and décor ideas on special client requests!',
      videoBtn: 'VIEW THEME DECORATION VIDEO',
      duration: '03:15',
    },
    {
      id: 16,
      title: 'Dhandiya Troupe Video',
      category: 'traditional',
      tag: 'Live Dance Troupe',
      badgeBg: 'bg-[#E3F8F2] text-[#059669] border-[#C1F1E1]',
      image: '/assets/vid-dhandiya-troupe.png',
      description: 'The deft movements of the dhandiya troupe can make you and your guests elated.',
      videoBtn: 'VIEW DHANDIYA TROUPE VIDEO',
      duration: '02:50',
    },
    {
      id: 17,
      title: 'Bubble Show Video',
      category: 'entertainment',
      tag: 'Giant Bubble Magic',
      badgeBg: 'bg-[#FFE8ED] text-[#EE3775] border-[#FFD0DB]',
      image: '/assets/vid-bubble-show.png',
      description: 'We are extremely popular among our clients for top-notch bubble shows.',
      videoBtn: 'VIEW BUBBLE SHOW VIDEO',
      duration: '02:00',
    },
    {
      id: 18,
      title: 'Magic Show Stage Video',
      category: 'entertainment',
      tag: 'Stage Illusion',
      badgeBg: 'bg-[#FFF3DF] text-[#D97706] border-[#FFE4B8]',
      image: '/assets/vid-magic-stage.png',
      description: 'Our magic stage shows are extremely popular among our bona fide clients.',
      videoBtn: 'VIEW MAGIC SHOW VIDEO',
      duration: '03:00',
    },
    {
      id: 19,
      title: 'Walk Around Magic Video',
      category: 'entertainment',
      tag: 'Close-Up Sleight of Hand',
      badgeBg: 'bg-[#F2EDFF] text-[#7B61FF] border-[#E0D5FF]',
      image: '/assets/vid-walkaround-magic.png',
      description: 'We create a decent atmosphere for performers and guests to enjoy!',
      videoBtn: 'VIEW WALK AROUND MAGIC VIDEO',
      duration: '01:45',
    },
    {
      id: 20,
      title: 'Live Sand Art Show Video',
      category: 'entertainment',
      tag: 'Storytelling Sand Art',
      badgeBg: 'bg-[#E3F8F2] text-[#059669] border-[#C1F1E1]',
      image: '/assets/vid-live-sand-art.png',
      description: 'We are extremely popular among our clients for top-notch Live Sand Art Show.',
      videoBtn: 'VIEW SAND ART SHOW VIDEO',
      duration: '03:30',
    },
  ];

  const filtered = allVideos.filter((v) => {
    const matchesCategory = activeCategory === 'all' || v.category === activeCategory;
    const matchesSearch =
      v.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      v.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="w-full bg-[#FFFDF9] select-none">
      
      {/* ======================================================== */}
      {/* 1. HERO BREADCRUMB / BANNER                              */}
      {/* ======================================================== */}
      <section className="relative w-full bg-gradient-to-b from-[#FFF5F6] via-[#FFFDF9] to-[#FFFDF9] pt-14 pb-16 sm:py-20 overflow-hidden border-b border-[#FCD5DE]/60">
        
        {/* Ambient Glows */}
        <div className="absolute top-0 right-1/4 w-[450px] h-[450px] bg-[#FFE8ED]/60 rounded-full blur-3xl pointer-events-none -z-0" />
        <div className="absolute bottom-0 left-10 w-80 h-80 bg-[#FFF3DF]/50 rounded-full blur-3xl pointer-events-none -z-0" />

        <div className="w-full max-w-[1720px] mx-auto px-6 sm:px-10 lg:px-14 xl:px-16 text-center relative z-10">
          
          <div className="inline-flex items-center space-x-2.5 mb-3.5">
            <span className="w-6 h-[1.5px] bg-[#EE3775]" />
            <span className="text-[12px] sm:text-[13px] font-bold tracking-[0.2em] text-[#EE3775] uppercase font-sans">
              20+ REAL EVENT VIDEOS & ENTERTAINMENT REELS
            </span>
            <span className="w-6 h-[1.5px] bg-[#EE3775]" />
          </div>

          <h1 className="text-[36px] sm:text-[48px] lg:text-[58px] font-bold text-[#111A2E] font-serif leading-[1.12] mb-4">
            Event Videos Gallery of{' '}
            <span className="text-[#EE3775] relative inline-block font-dancing font-normal text-[44px] sm:text-[60px] lg:text-[70px]">
              7delights Birthday Party Organisers
              <div className="absolute -bottom-2 left-0 w-full overflow-visible">
                <GoldUnderline className="w-full h-3.5 text-[#F5A623]" />
              </div>
            </span>
          </h1>

          <p className="text-[15.5px] sm:text-[17px] text-[#5A6E85] max-w-2xl mx-auto leading-relaxed">
            Watch real live footage of our balloon modeling, magic shows, pottery workshops, theme decors, and party entertainment across Bangalore.
          </p>

          {/* Search + Filter Pill Row */}
          <div className="mt-8 max-w-xl mx-auto flex items-center bg-white border border-[#F3E8E2] rounded-full p-1.5 shadow-2xs">
            <div className="pl-4 text-[#94A3B8]">
              <Search className="w-4 h-4" />
            </div>
            <input
              type="text"
              placeholder="Search by activity name (e.g. pottery, magic, bubble, sand art)..."
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
      {/* 2. CATEGORY PILLS + 20-VIDEO GRID                        */}
      {/* ======================================================== */}
      <section className="relative w-full py-14 sm:py-18 lg:py-22 overflow-hidden">
        
        <div className="w-full max-w-[1720px] mx-auto px-6 sm:px-10 lg:px-14 xl:px-16 relative z-10">
          
          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-2.5 mb-12 sm:mb-14">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-[13px] sm:text-[13.5px] font-semibold transition-all duration-200 cursor-pointer ${
                  activeCategory === cat.id
                    ? 'bg-[#EE3775] text-white shadow-md shadow-[#EE3775]/25 scale-102'
                    : 'bg-white text-[#5A6E85] border border-[#F3E8E2] hover:border-[#EE3775] hover:text-[#111A2E]'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* All 20 Extracted Video Cards (4 columns on xl, 3 on lg, 2 on sm, 1 on mobile) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-7">
            {filtered.map((video) => (
              <div
                key={video.id}
                className="group relative bg-white rounded-2xl overflow-hidden border border-[#F3E8E2] hover:border-[#FCD5DE] transition-all duration-300 shadow-2xs hover:shadow-lg hover:-translate-y-1.5 flex flex-col text-left"
              >
                
                {/* Real Scraped Photo Thumbnail Container with Play Trigger */}
                <div
                  onClick={() => setSelectedVideo(video)}
                  className="relative h-48 sm:h-52 w-full overflow-hidden bg-[#162137] cursor-pointer"
                >
                  <img
                    src={video.image}
                    alt={video.title}
                    className="w-full h-full object-cover transition-transform duration-600 group-hover:scale-108"
                  />

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-black/5 group-hover:from-black/80 transition-colors" />

                  {/* Top Left: Category Tag */}
                  <div className="absolute top-3 left-3 z-10">
                    <span
                      className={`inline-block px-2.5 py-0.5 rounded-full text-[11px] font-bold border backdrop-blur-md ${video.badgeBg}`}
                    >
                      {video.tag}
                    </span>
                  </div>

                  {/* Top Right: Duration */}
                  <div className="absolute top-3 right-3 z-10">
                    <span className="inline-flex items-center space-x-1 px-2 py-0.5 rounded-full text-[10.5px] font-semibold bg-black/60 text-white backdrop-blur-md border border-white/20">
                      <Clock className="w-2.5 h-2.5 text-[#F5A623]" />
                      <span>{video.duration}</span>
                    </span>
                  </div>

                  {/* Center Glowing Play Button */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-13 h-13 rounded-full bg-[#EE3775]/90 hover:bg-[#EE3775] text-white flex items-center justify-center shadow-lg shadow-[#EE3775]/40 group-hover:scale-115 transition-transform duration-300 border-2 border-white/80">
                      <Play className="w-5 h-5 fill-white translate-x-0.5" />
                    </div>
                  </div>

                  {/* Bottom Strip */}
                  <div className="absolute bottom-2.5 left-3.5 right-3.5 flex items-center justify-between text-[11px] text-white/90 font-medium">
                    <span>7Delights Events</span>
                    <span className="text-white/70">Bangalore</span>
                  </div>

                </div>

                {/* Card Content Body */}
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <h3
                      onClick={() => setSelectedVideo(video)}
                      className="text-[17px] font-bold text-[#111A2E] font-serif mb-2 group-hover:text-[#EE3775] transition-colors cursor-pointer leading-snug"
                    >
                      {video.title}
                    </h3>
                    
                    <p className="text-[13px] text-[#5A6E85] leading-relaxed mb-4 line-clamp-2">
                      {video.description}
                    </p>
                  </div>

                  {/* Dual Action Buttons (Replicating exact website buttons) */}
                  <div className="pt-3 border-t border-[#F8ECE8] space-y-2">
                    {/* View Video Button */}
                    <button
                      onClick={() => setSelectedVideo(video)}
                      className="w-full py-2.5 px-3 rounded-full bg-[#20428B] hover:bg-[#EE3775] text-white text-[11.5px] font-bold tracking-wider uppercase transition-colors duration-200 shadow-2xs cursor-pointer truncate"
                    >
                      {video.videoBtn}
                    </button>

                    {/* Make a Call Button */}
                    <a
                      href="tel:+919980029977"
                      className="w-full py-2 px-3 rounded-full bg-white hover:bg-[#F8F9FA] text-[#20428B] hover:text-[#EE3775] border border-[#20428B]/30 hover:border-[#EE3775] text-[11.5px] font-bold tracking-wider uppercase transition-colors duration-200 flex items-center justify-center space-x-1.5 shadow-2xs"
                    >
                      <Phone className="w-3 h-3" />
                      <span>MAKE A CALL</span>
                    </a>
                  </div>

                </div>

              </div>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="py-16 text-center text-[#5A6E85]">
              <p className="text-[16px]">No activities found matching "{searchQuery}".</p>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setActiveCategory('all');
                }}
                className="mt-3 text-[#EE3775] font-semibold text-sm hover:underline cursor-pointer"
              >
                Reset filters
              </button>
            </div>
          )}

        </div>

      </section>

      {/* ======================================================== */}
      {/* 3. EVENT FAQ SECTION                                     */}
      {/* ======================================================== */}
      <section className="relative w-full py-16 sm:py-20 lg:py-24 bg-[#FFF9F6] border-t border-[#FCD5DE]/60 overflow-hidden">
        
        {/* Subtle Ambient Glow */}
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-[#FFE8ED]/40 rounded-full blur-3xl pointer-events-none" />

        <div className="w-full max-w-[1300px] mx-auto px-6 sm:px-10 lg:px-14 xl:px-16 relative z-10">
          
          {/* Header */}
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
              Everything you need to know about scheduling our event setups, entertainment stalls, and party execution in Bangalore.
            </p>
          </div>

          {/* Accordion FAQ List */}
          <div className="space-y-4">
            {videoFaqs.map((faq, index) => {
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
                  {/* FAQ Question Bar */}
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

                  {/* FAQ Answer Content */}
                  {isOpen && (
                    <div className="px-5 sm:px-6 pb-6 pt-0 text-[14.5px] sm:text-[15px] text-[#5A6E85] leading-relaxed border-t border-[#F8ECE8] mt-2 pt-4 pl-14 sm:pl-18">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Bottom Event FAQ Callout Button (matches the screenshot button) */}
          <div className="mt-12 text-center">
            <div className="inline-flex flex-col sm:flex-row items-center justify-center gap-4 p-4 sm:p-5 rounded-2xl bg-white border border-[#FCD5DE] shadow-xs">
              <span className="text-[14px] text-[#5A6E85] font-medium">
                Want to know more details or book customized entertainment?
              </span>
              <a
                href="tel:+919980029977"
                className="inline-flex items-center space-x-2 px-6 py-2.5 rounded-full bg-[#20428B] hover:bg-[#EE3775] text-white text-[13px] font-bold tracking-wider uppercase transition-colors shadow-xs"
              >
                <span>EVENT FAQ ?</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

        </div>

      </section>

      {/* ======================================================== */}
      {/* 3. LIGHTBOX VIDEO MODAL POPUP                            */}
      {/* ======================================================== */}
      {selectedVideo && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-md p-4 sm:p-6 animate-in fade-in duration-200">
          <div className="relative w-full max-w-3xl bg-[#111A2E] rounded-3xl overflow-hidden shadow-2xl border border-white/20">
            
            {/* Modal Header */}
            <div className="p-4 sm:p-5 flex items-center justify-between border-b border-white/10 text-white">
              <div className="flex items-center space-x-3 text-left">
                <span className="px-2.5 py-0.5 rounded-full bg-[#EE3775] text-[11px] font-bold uppercase">
                  {selectedVideo.tag}
                </span>
                <h4 className="text-[15px] sm:text-[17px] font-bold truncate max-w-md">
                  {selectedVideo.title}
                </h4>
              </div>

              <button
                onClick={() => setSelectedVideo(null)}
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors cursor-pointer shrink-0"
                aria-label="Close video"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Video Player */}
            <div className="relative w-full aspect-video bg-black">
              <iframe
                title={selectedVideo.title}
                src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
                className="w-full h-full border-0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>

            {/* Modal Footer */}
            <div className="p-5 text-left text-gray-300 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-[13.5px]">
              <p>{selectedVideo.description}</p>
              <a
                href="tel:+919980029977"
                className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-[#EE3775] text-white font-semibold hover:bg-[#d82a65] transition-colors shrink-0"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>Book This Activity</span>
              </a>
            </div>

          </div>
        </div>
      )}

    </div>
  );
}
