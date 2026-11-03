import React, { useState } from 'react';
import {
  Sparkles,
  ChevronLeft,
  ChevronRight,
  ArrowRight,
  Smile,
  Palette,
  Music,
  Flame,
  Gamepad2,
} from 'lucide-react';
import { GoldUnderline, HandDrawnHeart } from './Doodles';

export default function ActivitiesSection() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [currentIndex, setCurrentIndex] = useState(0);

  const activities = [
    {
      id: 1,
      category: 'kids',
      tag: 'Kids Favorite',
      badgeBg: 'bg-[#FFE8ED] text-[#EE3775] border-[#FFD0DB]',
      title: 'Face Painting & Glitter Tattoo Art',
      seoTitle: 'Creative Face Painting & Fun Activities in Bangalore',
      description:
        'Safe, skin-friendly colors transformed into fairy-tale characters, superheroes, and dazzling glitter tattoos that kids adore.',
      image: '/assets/activity-face-painting.png',
      popular: 'Top Pick',
      duration: 'Full Event',
      energy: 'High Excitement',
    },
    {
      id: 2,
      category: 'crafts',
      tag: 'Hands-On Craft',
      badgeBg: 'bg-[#FFF3DF] text-[#D97706] border-[#FFE4B8]',
      title: 'Interactive Balloon Sculpting & Twisting',
      seoTitle: 'Balloon Modeling Artists for Birthday Parties',
      description:
        'Our skilled balloon artists twist colorful balloons on the spot into playful animals, swords, crowns, and custom party favors.',
      image: '/assets/activity-balloon-twisting.png',
      popular: 'Most Loved',
      duration: '2-3 Hours',
      energy: 'Joyful & Fun',
    },
    {
      id: 3,
      category: 'corporate',
      tag: 'High Energy',
      badgeBg: 'bg-[#F2EDFF] text-[#7B61FF] border-[#E0D5FF]',
      title: 'Epic Party Dance Troupe & Drum Beats',
      seoTitle: 'Live Traditional & Modern Dance Performers Bangalore',
      description:
        'Electrifying traditional drum ensembles, thematic cultural dances, and flash mobs that bring thunderous energy and get guests on their feet.',
      image: '/assets/activity-dance-troupe.png',
      popular: 'Crowd Magnet',
      duration: '45-60 Mins',
      energy: 'Unstoppable Vibes',
    },
    {
      id: 4,
      category: 'crafts',
      tag: 'Artisan Workshop',
      badgeBg: 'bg-[#E3F8F2] text-[#059669] border-[#C1F1E1]',
      title: 'Live Pottery Making on Wheel',
      seoTitle: 'Interactive Pottery Workshops for Corporate & Birthdays',
      description:
        'An unforgettable sensory experience where guests craft their very own clay pottery on a spinning potter’s wheel to take home as a souvenir.',
      image: '/assets/activity-pottery.png',
      popular: 'Trendy Experience',
      duration: 'Flexible Slots',
      energy: 'Calm & Creative',
    },
    {
      id: 5,
      category: 'crafts',
      tag: 'Traditional Art',
      badgeBg: 'bg-[#FFE8ED] text-[#EE3775] border-[#FFD0DB]',
      title: 'Artisan Lac Bangle & Keepsake Making',
      seoTitle: 'Live Traditional Bangle Making for Weddings & Events',
      description:
        'Master craftsmen design custom handmade stone and lac bangles live in front of guests, adding authentic heritage charm to any celebration.',
      image: '/assets/activity-crafts.png',
      popular: 'Wedding Special',
      duration: 'Full Day',
      energy: 'Elegant Heritage',
    },
    {
      id: 6,
      category: 'kids',
      tag: 'Creative Play',
      badgeBg: 'bg-[#FFF3DF] text-[#D97706] border-[#FFE4B8]',
      title: 'Origami Craft & Paper Art Booth',
      seoTitle: 'Fun Paper Crafting Games & Activities in Bangalore',
      description:
        'Delightful paper-folding masterclasses and craft tables where kids and adults create intricate folding animals, airplanes, and decorative bouquets.',
      image: '/assets/activity-origami.png',
      popular: 'Great for Kids',
      duration: '2 Hours',
      energy: 'Mindful & Fun',
    },
  ];

  const categories = [
    { id: 'all', label: 'All Activities', icon: Sparkles },
    { id: 'kids', label: 'Kids & Games', icon: Smile },
    { id: 'crafts', label: 'Creative & Crafts', icon: Palette },
    { id: 'corporate', label: 'Performers & Dance', icon: Music },
  ];

  const filtered =
    activeCategory === 'all'
      ? activities
      : activities.filter((item) => item.category === activeCategory);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? Math.max(0, filtered.length - 3) : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev >= filtered.length - 3 ? 0 : prev + 1));
  };

  return (
    <section className="relative w-full bg-[#FEFAF7] py-18 sm:py-22 lg:py-26 overflow-hidden select-none">
      
      {/* Decorative ambient blurred backgrounds */}
      <div className="absolute top-10 right-0 w-[550px] h-[550px] bg-gradient-to-bl from-[#FFE8ED]/50 via-[#FFF0F3]/30 to-transparent rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-[#FFF3DF]/40 via-[#FFF9EE]/30 to-transparent rounded-full blur-3xl pointer-events-none" />

      {/* Floating subtle doodle hearts */}
      <div className="absolute top-20 right-16 hidden lg:block opacity-40">
        <HandDrawnHeart className="w-9 h-9 text-[#EE3775] rotate-12" />
      </div>

      <div className="w-full max-w-[1720px] mx-auto px-6 sm:px-10 lg:px-14 xl:px-16 relative z-10">
        
        {/* Header: Title + Intro + Navigation Arrows */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-14 gap-6">
          
          <div className="max-w-2xl text-left">
            {/* Eyebrow */}
            <div className="inline-flex items-center space-x-2.5 mb-3.5">
              <span className="w-6 h-[1.5px] bg-[#EE3775]" />
              <span className="text-[12px] sm:text-[13px] font-bold tracking-[0.2em] text-[#EE3775] uppercase font-sans">
                FUN & ENTERTAINMENT
              </span>
            </div>

            {/* Main Title */}
            <h2 className="text-[34px] sm:text-[46px] lg:text-[50px] font-bold text-[#111A2E] font-serif leading-[1.15] mb-4">
              Party Celebration{' '}
              <span className="text-[#EE3775] relative inline-block font-dancing font-normal text-[42px] sm:text-[54px] lg:text-[60px]">
                Games & Activities
                <div className="absolute -bottom-2 left-0 w-full overflow-visible">
                  <GoldUnderline className="w-full h-3 text-[#F5A623]" />
                </div>
              </span>
            </h2>

            {/* SEO Description */}
            <p className="text-[15px] sm:text-[17px] text-[#5A6E85] leading-relaxed max-w-xl">
              Turn ordinary celebrations into unforgettable memories. Discover engaging party games, interactive artisan workshops, and live entertainment in Bangalore.
            </p>
          </div>

          {/* Filter Pills + Carousel Nav */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            {/* Filter Pills */}
            <div className="inline-flex p-1.5 bg-white border border-[#F3E8E2] rounded-full shadow-2xs">
              {categories.map((cat) => {
                const IconComponent = cat.icon;
                const isActive = activeCategory === cat.id;
                return (
                  <button
                    key={cat.id}
                    onClick={() => {
                      setActiveCategory(cat.id);
                      setCurrentIndex(0);
                    }}
                    className={`flex items-center space-x-1.5 px-3.5 sm:px-4 py-2 rounded-full text-[13px] sm:text-[13.5px] font-medium transition-all duration-200 cursor-pointer ${
                      isActive
                        ? 'bg-[#EE3775] text-white shadow-sm'
                        : 'text-[#5A6E85] hover:text-[#111A2E]'
                    }`}
                  >
                    <IconComponent className="w-3.5 h-3.5" />
                    <span>{cat.label}</span>
                  </button>
                );
              })}
            </div>

            {/* Carousel Arrow Controls */}
            <div className="hidden sm:flex items-center space-x-2">
              <button
                onClick={prevSlide}
                aria-label="Previous Activity"
                className="w-11 h-11 rounded-full bg-white border border-[#F3E8E2] hover:border-[#EE3775] text-[#111A2E] hover:text-[#EE3775] flex items-center justify-center transition-all duration-200 shadow-2xs hover:shadow-sm cursor-pointer"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={nextSlide}
                aria-label="Next Activity"
                className="w-11 h-11 rounded-full bg-[#EE3775] hover:bg-[#d82a65] text-white flex items-center justify-center transition-all duration-200 shadow-sm hover:shadow-md cursor-pointer"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

          </div>

        </div>

        {/* Dynamic Activity Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 lg:gap-8">
          {filtered.map((item) => (
            <div
              key={item.id}
              className="group relative bg-white rounded-3xl overflow-hidden border border-[#F5E8E2] hover:border-[#FCD5DE] transition-all duration-300 shadow-xs hover:shadow-xl hover:-translate-y-1.5 flex flex-col"
            >
              {/* Photo Area with Top Tag & Badge */}
              <div className="relative h-60 sm:h-64 w-full overflow-hidden bg-[#FFF5F6]">
                <img
                  src={item.image}
                  alt={item.seoTitle}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />

                {/* Ambient photo gradient overlay for text readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-black/10" />

                {/* Top Badge: Category */}
                <div className="absolute top-4 left-4 z-10">
                  <span
                    className={`inline-flex items-center px-3 py-1 rounded-full text-[12px] font-semibold border backdrop-blur-md shadow-xs ${item.badgeBg}`}
                  >
                    {item.tag}
                  </span>
                </div>

                {/* Top Right: Energy / Tag */}
                <div className="absolute top-4 right-4 z-10">
                  <span className="inline-flex items-center space-x-1 px-2.5 py-1 rounded-full text-[11px] font-medium bg-black/40 text-white backdrop-blur-md border border-white/20">
                    <Sparkles className="w-3 h-3 text-[#F5A623]" />
                    <span>{item.popular}</span>
                  </span>
                </div>

                {/* Bottom Photo Ribbon: Duration & Energy */}
                <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-[12px] text-white/95 font-medium">
                  <span className="flex items-center space-x-1">
                    <span className="w-2 h-2 rounded-full bg-[#10B981] inline-block animate-pulse" />
                    <span>Live Activity</span>
                  </span>
                  <span className="bg-white/20 backdrop-blur-xs px-2.5 py-0.5 rounded-full text-[11px]">
                    {item.energy}
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between text-left">
                <div>
                  <h3 className="text-[20px] font-bold text-[#111A2E] mb-2.5 group-hover:text-[#EE3775] transition-colors duration-200 font-sans leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-[14px] text-[#5A6E85] leading-relaxed mb-5">
                    {item.description}
                  </p>
                </div>

                {/* Card Action Footer */}
                <div className="pt-4 border-t border-[#F8ECE8] flex items-center justify-between">
                  <span className="text-[12.5px] font-medium text-[#7A8B9E]">
                    Available across Bangalore
                  </span>
                  
                  <a
                    href="#placeholder"
                    className="inline-flex items-center space-x-1.5 text-[13.5px] font-semibold text-[#EE3775] group-hover:translate-x-1 transition-transform duration-200"
                  >
                    <span>Enquire Now</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>

              </div>

            </div>
          ))}
        </div>

        {/* Bottom Booking Banner Strip */}
        <div className="mt-14 sm:mt-16 bg-gradient-to-r from-[#FFF0F4] via-[#FFF9EE] to-[#F5F2FF] rounded-2xl p-6 sm:p-8 border border-[#FCD5DE] flex flex-col md:flex-row items-center justify-between gap-6 shadow-xs">
          <div className="text-left">
            <h4 className="text-[19px] sm:text-[21px] font-bold text-[#111A2E] font-serif mb-1.5">
              Need Custom Games or Interactive Artists for Your Party?
            </h4>
            <p className="text-[14px] sm:text-[14.5px] text-[#5A6E85]">
              We customize entertainment schedules, host emcees, magic shows, and puppet theatre tailored to your event theme.
            </p>
          </div>

          <a
            href="#placeholder"
            className="shrink-0 inline-flex items-center space-x-2 px-6 sm:px-8 py-3.5 rounded-full bg-[#EE3775] hover:bg-[#d82a65] text-white text-[14px] sm:text-[15px] font-semibold transition-all duration-200 shadow-md hover:shadow-lg hover:-translate-y-0.5 cursor-pointer"
          >
            <span>Book Entertainment Package</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

      </div>

    </section>
  );
}

