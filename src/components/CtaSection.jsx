import React from 'react';
import { CalendarHeart, UsersRound, ShieldCheck, ArrowRight } from 'lucide-react';
import { HandDrawnHeart, GoldUnderline } from './Doodles';

export default function CtaSection() {
  const benefits = [
    {
      title: 'Customised',
      subtitle: 'Planning',
      bgColor: 'bg-[#FFE8ED]',
      icon: <CalendarHeart className="w-5 h-5 text-[#EE3775]" strokeWidth={2} />,
    },
    {
      title: 'Dedicated',
      subtitle: 'Support',
      bgColor: 'bg-[#FFF3DF]',
      icon: <UsersRound className="w-5 h-5 text-[#F5A623]" strokeWidth={2} />,
    },
    {
      title: 'Hassle-Free',
      subtitle: 'Experience',
      bgColor: 'bg-[#E3F8F2]',
      icon: <ShieldCheck className="w-5 h-5 text-[#10B981]" strokeWidth={2} />,
    },
  ];

  return (
    <section className="relative w-full bg-[#FEFAF7] overflow-hidden pt-6 sm:pt-8 pb-10 sm:pb-12 lg:pb-14 select-none">
      
      {/* Background Soft Blush Shapes */}
      <div className="absolute top-0 right-0 w-[600px] h-[550px] bg-gradient-to-bl from-[#FDECEF]/60 via-[#FFF0F3]/40 to-transparent rounded-full blur-3xl pointer-events-none -z-0" />

      {/* Main Two-Column Container */}
      <div className="w-full max-w-[1720px] mx-auto px-6 sm:px-10 lg:px-14 xl:px-16 relative z-10">
        
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-8 xl:gap-12">
          
          {/* ======================================================== */}
          {/* LEFT COLUMN: CONTENT (~52% desktop)                      */}
          {/* ======================================================== */}
          <div className="w-full lg:w-[50%] xl:w-[48%] flex flex-col justify-center text-left">
            
            {/* Eyebrow: LET'S PLAN TOGETHER */}
            <div className="flex items-center space-x-3 mb-4 sm:mb-5">
              <span className="text-[11px] sm:text-[12px] font-semibold tracking-[0.24em] text-[#3E4F6C] uppercase font-sans">
                LET’S PLAN TOGETHER
              </span>
              <div className="h-[1px] w-14 lg:w-20 bg-[#D4DCE6]" />
            </div>

            {/* Main Headline: Your Next Celebration Starts Here */}
            <div className="relative mb-5 sm:mb-6">
              
              {/* Line 1: Your Next Celebration */}
              <h2 className="font-serif-title text-[40px] sm:text-[50px] lg:text-[56px] xl:text-[62px] font-medium text-[#111C33] tracking-[-0.02em] leading-[1.06]">
                Your Next Celebration
              </h2>

              {/* Line 2: Starts Here + Gold Underline + Coral Heart */}
              <div className="relative -mt-2 sm:-mt-2.5 flex items-center">
                <div className="relative inline-block">
                  <span className="font-script-title text-[50px] sm:text-[66px] lg:text-[76px] xl:text-[84px] font-bold text-[#EE3775] leading-[0.92] tracking-wide inline-block py-0.5">
                    Starts Here
                  </span>

                  {/* Gold Underline Scribble under "Starts Here" */}
                  <div className="absolute -bottom-2 right-1 sm:right-3 w-32 sm:w-44">
                    <GoldUnderline className="w-full h-auto" />
                  </div>
                </div>

                {/* Hand-drawn Coral Heart */}
                <div className="ml-3 sm:ml-4 -mt-3">
                  <HandDrawnHeart className="w-7 h-7 sm:w-9 sm:h-9" />
                </div>
              </div>

            </div>

            {/* Description Body Copy */}
            <p className="text-[#4E5D78] text-[15px] sm:text-[16.5px] lg:text-[17px] leading-[1.62] max-w-[580px] font-normal mb-8 sm:mb-9">
              Tell us your ideas, and we’ll take care of the rest. From planning and decoration to flawless execution, we make every moment special.
            </p>

            {/* CTA Button Area with Hand-drawn "Let's make it special!" note */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 mb-10 sm:mb-12">
              
              {/* Handwritten Note with Curved Arrow pointing to button */}
              <div className="flex items-center space-x-2 text-[#4E5D78] select-none">
                <span className="font-script-title text-[20px] sm:text-[22px] font-bold text-[#EE3775] leading-tight rotate-[-4deg]">
                  Let’s make<br />it special!
                </span>
                
                {/* Hand-drawn curved arrow SVG */}
                <svg viewBox="0 0 50 30" fill="none" className="w-10 h-7 text-[#111C33] opacity-75">
                  <path
                    d="M6 18 C16 6, 32 8, 42 16"
                    stroke="#1E293B"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                  />
                  <path
                    d="M36 18 L42 16 L38 10"
                    stroke="#1E293B"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>

              {/* Dominant Primary CTA: GET A FREE CONSULTATION → */}
              <a
                href="#consultation"
                className="inline-flex items-center justify-center bg-gradient-to-r from-[#EE3775] to-[#FA5787] hover:from-[#DD2864] hover:to-[#EE3775] text-white font-bold text-[13px] sm:text-[14px] tracking-[0.08em] uppercase px-8 sm:px-9 h-[54px] sm:h-[56px] rounded-full shadow-[0_8px_20px_rgba(238,55,117,0.28)] hover:shadow-[0_12px_28px_rgba(238,55,117,0.38)] transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0 group cursor-pointer"
              >
                <span>GET A FREE CONSULTATION</span>
                <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-200 group-hover:translate-x-1" />
              </a>

            </div>

            {/* Benefit Items Row (3 items) */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6 lg:gap-8 pt-6 border-t border-gray-100/80 max-w-[600px]">
              {benefits.map((item, index) => (
                <React.Fragment key={item.title}>
                  <div className="flex items-center space-x-3 group cursor-pointer">
                    <div
                      className={`w-11 h-11 rounded-full ${item.bgColor} flex items-center justify-center shrink-0 transition-transform duration-200 group-hover:scale-105 shadow-sm`}
                    >
                      {item.icon}
                    </div>
                    <div className="text-[13px] sm:text-[13.5px] font-bold text-[#18253E] leading-[1.2]">
                      <div>{item.title}</div>
                      <div>{item.subtitle}</div>
                    </div>
                  </div>
                  {index < benefits.length - 1 && (
                    <div className="hidden sm:block h-8 w-[1px] bg-[#E2E8F0]/80 self-center shrink-0" />
                  )}
                </React.Fragment>
              ))}
            </div>

          </div>

          {/* ======================================================== */}
          {/* RIGHT COLUMN: BLUSH ENVELOPE & MEMORIES (~50% desktop)    */}
          {/* ======================================================== */}
          <div className="w-full lg:w-[50%] xl:w-[52%] flex justify-center lg:justify-end relative">
            
            {/* The Visual Envelope & Polaroids Container with true prominence */}
            <div className="relative w-full max-w-[680px] xl:max-w-[760px]">
              <img
                src="/assets/cta-envelope-hd.png"
                alt="7Delights Event Memories in Blush Pink Envelope - Invitation and Polaroid Gallery"
                className="w-full h-auto object-contain drop-shadow-[0_16px_36px_rgba(238,55,117,0.12)] select-none pointer-events-none"
              />
            </div>

          </div>

        </div>

      </div>

      {/* Layered soft abstract bottom wave shapes */}
      <div className="absolute bottom-0 left-0 right-0 h-16 pointer-events-none z-0 overflow-hidden">
        <svg
          viewBox="0 0 1440 60"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full preserve-3d"
          preserveAspectRatio="none"
        >
          <path
            d="M0 38 C320 18, 680 48, 1080 25 C1260 15, 1380 32, 1440 28 L1440 60 L0 60 Z"
            fill="#FBE7CE"
            fillOpacity="0.35"
          />
          <path
            d="M0 46 C260 30, 740 54, 1180 36 C1320 30, 1400 42, 1440 40 L1440 60 L0 60 Z"
            fill="#FBDDE6"
            fillOpacity="0.5"
          />
        </svg>
      </div>

    </section>
  );
}
