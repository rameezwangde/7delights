import React from 'react';
import {
  PartyPopper,
  Gem,
  BriefcaseBusiness,
  Sparkles,
  UtensilsCrossed,
  Music2,
  ArrowRight,
} from 'lucide-react';
import { HandDrawnHeart, TopLeftRays, RightCelebrationRays } from './Doodles';

export default function ServicesSection() {
  const services = [
    {
      title: 'Birthday Party Decoration',
      description: 'Colorful themes, creative decor and memorable celebrations for all ages.',
      icon: <PartyPopper className="w-8 h-8 text-[#EE3775]" strokeWidth={1.9} />,
      bgGradient: 'bg-gradient-to-b from-[#FFF0F4]/90 to-[#FFE4EC]/50',
      iconBg: 'bg-[#FFD9E4]',
      btnBg: 'bg-[#FFD9E4] text-[#EE3775] hover:bg-[#EE3775] hover:text-white',
    },
    {
      title: 'Wedding Planning',
      description: 'Elegant décor, seamless planning and beautiful moments for your big day.',
      icon: <Gem className="w-8 h-8 text-[#F5A623]" strokeWidth={1.9} />,
      bgGradient: 'bg-gradient-to-b from-[#FFF9EE]/90 to-[#FFF1D7]/50',
      iconBg: 'bg-[#FFE8BF]',
      btnBg: 'bg-[#FFE8BF] text-[#F5A623] hover:bg-[#F5A623] hover:text-white',
    },
    {
      title: 'Corporate Events',
      description: 'Professional event planning to make your brand stand out.',
      icon: <BriefcaseBusiness className="w-8 h-8 text-[#7B61FF]" strokeWidth={1.9} />,
      bgGradient: 'bg-gradient-to-b from-[#F5F2FF]/90 to-[#EAE3FF]/50',
      iconBg: 'bg-[#E0D5FF]',
      btnBg: 'bg-[#E0D5FF] text-[#7B61FF] hover:bg-[#7B61FF] hover:text-white',
    },
    {
      title: 'Kids Party Activities',
      description: 'Fun games, engaging activities and joyful experiences for kids.',
      icon: <Sparkles className="w-8 h-8 text-[#10B981]" strokeWidth={1.9} />,
      bgGradient: 'bg-gradient-to-b from-[#EFFBF7]/90 to-[#DCF7EE]/50',
      iconBg: 'bg-[#C7F2E3]',
      btnBg: 'bg-[#C7F2E3] text-[#10B981] hover:bg-[#10B981] hover:text-white',
    },
    {
      title: 'Party Catering',
      description: 'Delicious menus crafted for every occasion and taste.',
      icon: <UtensilsCrossed className="w-8 h-8 text-[#EE3775]" strokeWidth={1.9} />,
      bgGradient: 'bg-gradient-to-b from-[#FFF2F5]/90 to-[#FFE6EC]/50',
      iconBg: 'bg-[#FFDBE4]',
      btnBg: 'bg-[#FFDBE4] text-[#EE3775] hover:bg-[#EE3775] hover:text-white',
    },
    {
      title: 'DJ, Sound & Stage Setup',
      description: 'High-quality sound, lighting and stage to elevate your event.',
      icon: <Music2 className="w-8 h-8 text-[#3B82F6]" strokeWidth={1.9} />,
      bgGradient: 'bg-gradient-to-b from-[#F0F6FF]/90 to-[#E0EDFF]/50',
      iconBg: 'bg-[#D0E3FF]',
      btnBg: 'bg-[#D0E3FF] text-[#3B82F6] hover:bg-[#3B82F6] hover:text-white',
    },
  ];

  return (
    <section className="relative w-full bg-[#FFFDF9] overflow-hidden py-16 sm:py-20 lg:py-24 select-none">
      
      {/* Decorative side doodles */}
      <div className="absolute top-12 left-4 pointer-events-none opacity-80 hidden lg:block">
        <svg viewBox="0 0 100 200" fill="none" className="w-20 h-40">
          <path d="M10 20 C10 80, 50 120, 10 180" stroke="#EE3775" strokeWidth="2" strokeDasharray="4 4" />
        </svg>
      </div>
      <div className="absolute top-20 right-8 pointer-events-none opacity-80 hidden lg:block">
        <RightCelebrationRays className="w-10 h-10" />
      </div>

      <div className="w-full max-w-[1680px] mx-auto px-6 sm:px-10 lg:px-12 relative z-10">
        
        {/* Header / Title Area */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16">
          
          {/* Eyebrow: WHAT WE DO */}
          <div className="inline-flex items-center space-x-3 mb-3">
            <div className="h-[1px] w-10 sm:w-12 bg-[#D4DCE6]" />
            <span className="text-[11px] sm:text-[12px] font-semibold tracking-[0.24em] text-[#3E4F6C] uppercase font-sans">
              WHAT WE DO
            </span>
            <div className="h-[1px] w-10 sm:w-12 bg-[#D4DCE6]" />
          </div>

          {/* Heading with Serifs + Script + Hand-drawn Heart & Rays */}
          <div className="relative inline-flex items-center justify-center flex-wrap gap-x-3 gap-y-1 mb-3">
            <TopLeftRays className="absolute -top-6 -left-8 sm:-top-7 sm:-left-10 w-9 h-9 sm:w-10 sm:h-10 hidden sm:block" />
            
            <h2 className="font-serif-title text-[36px] sm:text-[46px] lg:text-[52px] font-medium text-[#111C33] tracking-[-0.02em] leading-tight">
              Event & Party
            </h2>
            
            <span className="relative font-script-title text-[42px] sm:text-[54px] lg:text-[62px] font-bold text-[#EE3775] leading-none inline-block px-1">
              Services
              {/* Hand-drawn Pink Heart above Services */}
              <div className="absolute -top-4 right-0 translate-x-2">
                <HandDrawnHeart className="w-7 h-7 sm:w-8 sm:h-8" />
              </div>
            </span>

            <h2 className="font-serif-title text-[36px] sm:text-[46px] lg:text-[52px] font-medium text-[#111C33] tracking-[-0.02em] leading-tight">
              We Offer!
            </h2>

            <RightCelebrationRays className="absolute -top-4 -right-8 sm:-top-5 sm:-right-10 w-9 h-9 hidden sm:block" />
          </div>

          {/* Subtitle */}
          <p className="text-[#4E5D78] text-[15px] sm:text-[16px] leading-relaxed max-w-xl mx-auto font-normal">
            There are Many! Pick the Party Planning Service You Need To Avail of With Us!!
          </p>

        </div>

        {/* 6 Services Cards Grid (Exact layout, perfectly aligned) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-5 sm:gap-6 mb-14">
          {services.map((item) => (
            <div
              key={item.title}
              className={`rounded-2xl p-6 sm:p-7 flex flex-col items-center text-center justify-between border border-white/60 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_10px_30px_rgba(0,0,0,0.07)] transition-all duration-300 hover:-translate-y-1.5 ${item.bgGradient}`}
            >
              {/* Icon Container with Clean Lucide-style Icon */}
              <div className="flex flex-col items-center w-full">
                <div
                  className={`w-[72px] h-[72px] rounded-full ${item.iconBg} flex items-center justify-center mb-6 shadow-inner transition-transform duration-300 group-hover:scale-105`}
                >
                  {item.icon}
                </div>

                {/* Title */}
                <h3 className="text-[17px] sm:text-[18px] font-bold text-[#121E36] leading-snug mb-3">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-[#5A6A85] text-[13px] leading-relaxed">
                  {item.description}
                </p>
              </div>

              {/* Arrow Button */}
              <div className="mt-6">
                <button
                  className={`w-9 h-9 rounded-full ${item.btnBg} flex items-center justify-center transition-all duration-200 cursor-pointer shadow-sm`}
                  aria-label={`Learn more about ${item.title}`}
                >
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

            </div>
          ))}
        </div>

        {/* Bottom CTA: EXPLORE ALL SERVICES → */}
        <div className="flex justify-center">
          <a
            href="#services"
            className="inline-flex items-center justify-center bg-gradient-to-r from-[#EE3775] to-[#FA5787] hover:from-[#DD2864] hover:to-[#EE3775] text-white font-bold text-[13px] sm:text-[13.5px] tracking-[0.1em] uppercase px-8 sm:px-10 h-[52px] sm:h-[54px] rounded-full shadow-[0_8px_20px_rgba(238,55,117,0.28)] hover:shadow-[0_10px_24px_rgba(238,55,117,0.36)] transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0 group cursor-pointer"
          >
            <span>EXPLORE ALL SERVICES</span>
            <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-200 group-hover:translate-x-1" />
          </a>
        </div>

      </div>

      {/* Layered bottom waves matching page theme */}
      <div className="absolute bottom-0 left-0 right-0 h-16 pointer-events-none z-0 overflow-hidden">
        <svg
          viewBox="0 0 1440 60"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full preserve-3d"
          preserveAspectRatio="none"
        >
          <path
            d="M0 40 C360 15, 720 50, 1100 25 C1280 15, 1380 35, 1440 30 L1440 60 L0 60 Z"
            fill="#FBE7CE"
            fillOpacity="0.3"
          />
          <path
            d="M0 48 C280 30, 760 55, 1180 38 C1320 32, 1400 45, 1440 42 L1440 60 L0 60 Z"
            fill="#FBDDE6"
            fillOpacity="0.45"
          />
        </svg>
      </div>

    </section>
  );
}

