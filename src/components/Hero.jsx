import React from 'react';
import { Phone, ArrowRight } from 'lucide-react';
import ServiceIcons from './ServiceIcons';
import {
  TopLeftRays,
  HandDrawnHeart,
  GoldUnderline,
  RightCelebrationRays,
  GentleSCurveDivider,
} from './Doodles';

export default function Hero() {
  return (
    <section className="relative w-full bg-[#FEF9F5] overflow-hidden min-h-[640px] md:h-[630px] lg:h-[700px] flex flex-col md:flex-row items-stretch select-none">
      
      {/* ======================================================== */}
      {/* LEFT CONTENT COLUMN (~45% on desktop, ~48% on tablet)    */}
      {/* Consistent vertical axis & 90-100px desktop left padding  */}
      {/* ======================================================== */}
      <div className="w-full md:w-[48%] lg:w-[45%] shrink-0 flex flex-col justify-start pt-7 sm:pt-9 md:pt-8 lg:pt-12 pb-7 sm:pb-9 md:pb-8 lg:pb-10 pl-6 sm:pl-10 md:pl-8 lg:pl-[92px] xl:pl-[100px] pr-4 sm:pr-6 md:pr-4 lg:pr-8 z-20 relative">
        
        {/* Eyebrow Category Text */}
        <div className="flex items-center space-x-3 mb-3 sm:mb-3.5 lg:mb-4">
          <span className="text-[10.5px] sm:text-[11px] lg:text-[11.5px] font-semibold tracking-[0.22em] text-[#3E4F6C] uppercase font-sans">
            EVENTS &nbsp;|&nbsp; CELEBRATIONS &nbsp;|&nbsp; HAPPY MOMENTS
          </span>
          <div className="hidden sm:block h-[1px] w-14 lg:w-20 bg-[#D4DCE6]" />
        </div>

        {/* Main Headline with Editorial Stepped Hierarchy (reduced 12%) */}
        <div className="relative mb-5 sm:mb-6 lg:mb-7">
          
          {/* Line 1: "Making" with top-left radiating doodle rays */}
          <div className="relative inline-flex items-center">
            <TopLeftRays className="absolute -top-5 -left-7 sm:-top-6 sm:-left-8 lg:-top-7 lg:-left-9 w-8 h-8 sm:w-9 sm:h-9 lg:w-10 lg:h-10" />
            <h1 className="font-serif-title text-[40px] sm:text-[48px] md:text-[46px] lg:text-[62px] xl:text-[66px] font-medium text-[#111C33] tracking-[-0.025em] leading-[1.04]">
              Making
            </h1>
          </div>

          {/* Line 2: "Every Occasion" in flowing handwritten script */}
          <div className="relative -mt-2 sm:-mt-2.5 ml-1 sm:ml-2 flex items-center">
            <div className="relative inline-block">
              <span className="font-script-title text-[48px] sm:text-[58px] md:text-[54px] lg:text-[74px] xl:text-[78px] font-bold text-[#EE3775] leading-[0.94] tracking-wide inline-block py-0.5">
                Every Occasion
              </span>

              {/* Hand-drawn Pink Heart with accent arc top-right of 'Every' */}
              <HandDrawnHeart className="absolute -top-3.5 sm:-top-4 lg:-top-5 left-[150px] sm:left-[190px] md:left-[175px] lg:left-[245px] xl:left-[260px] w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8" />

              {/* Warm Gold Underline Scribble under 'Occasion' */}
              <div className="absolute -bottom-2 right-1 sm:right-2 w-28 sm:w-36 lg:w-44">
                <GoldUnderline className="w-full h-auto" />
              </div>
            </div>

            {/* Radiant celebration marks to the right of 'Occasion' */}
            <RightCelebrationRays className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 -mt-2 ml-1 hidden sm:block" />
          </div>

          {/* Line 3: "Extra Special" stepped to the right */}
          <div className="relative mt-1 ml-8 sm:ml-16 md:ml-14 lg:ml-24 xl:ml-28">
            <h2 className="font-serif-title text-[40px] sm:text-[48px] md:text-[46px] lg:text-[62px] xl:text-[66px] font-medium text-[#111C33] tracking-[-0.025em] leading-[1.04]">
              Extra Special
            </h2>
          </div>

        </div>

        {/* Body Description (~28px gap below headline) */}
        <p className="text-[#4E5D78] text-[14px] sm:text-[15px] md:text-[14px] lg:text-[16.5px] leading-[1.58] max-w-[500px] font-normal mb-6 sm:mb-7 lg:mb-8">
          From birthdays to weddings, corporate events and{' '}
          <br className="hidden sm:inline" />
          more — we plan, decorate and manage celebrations{' '}
          <br className="hidden sm:inline" />
          with creativity, care and perfection.
        </p>

        {/* CTA Buttons (~30px gap below description) */}
        <div className="flex flex-wrap items-center gap-3.5 sm:gap-4 lg:gap-5 mb-8 sm:mb-9 md:mb-7 lg:mb-12">
          {/* Primary CTA: BOOK NOW */}
          <a
            href="#book"
            className="inline-flex items-center justify-center bg-gradient-to-r from-[#EE3775] to-[#FA5787] hover:from-[#DD2864] hover:to-[#EE3775] text-white font-bold text-[12.5px] sm:text-[13px] lg:text-[13.5px] tracking-[0.08em] uppercase px-6 sm:px-7 lg:px-8 h-[46px] sm:h-[48px] lg:h-[50px] rounded-full shadow-[0_6px_18px_rgba(238,55,117,0.26)] hover:shadow-[0_8px_22px_rgba(238,55,117,0.34)] transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0 group cursor-pointer"
          >
            <span>BOOK NOW</span>
            <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 ml-2 transition-transform duration-200 group-hover:translate-x-1" />
          </a>

          {/* Secondary CTA: CALL US */}
          <a
            href="tel:+919980029977"
            className="inline-flex items-center justify-center bg-white hover:bg-[#FFF6F8] text-[#121E36] border-[1.5px] border-[#EE3775] font-bold text-[12.5px] sm:text-[13px] lg:text-[13.5px] tracking-[0.08em] uppercase px-5 sm:px-6 lg:px-7 h-[46px] sm:h-[48px] lg:h-[50px] rounded-full transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0 group cursor-pointer"
          >
            <Phone className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#EE3775] mr-2 transition-transform duration-200 group-hover:rotate-12" />
            <span>CALL US</span>
          </a>
        </div>

        {/* Service Icons Row (~48px below CTA buttons, fully visible in initial viewport) */}
        <div>
          <ServiceIcons />
        </div>

      </div>

      {/* ======================================================== */}
      {/* RIGHT VISUAL AREA (~55% on desktop, ~52% on tablet)      */}
      {/* Bleeds cleanly toward right and bottom edges             */}
      {/* Seamlessly merges with the cream background              */}
      {/* ======================================================== */}
      <div className="w-full md:w-[52%] lg:w-[55%] relative flex items-stretch min-h-[420px] sm:min-h-[500px] md:min-h-full overflow-hidden">
        
        {/* Gentle vertical S-curve divider overlay (subtle, elegant, non-intrusive) */}
        <GentleSCurveDivider className="w-[70px] sm:w-[90px] md:w-[95px] lg:w-[125px] xl:w-[135px]" />

        {/* Event Setup Image with intelligent object-position */}
        <img
          src="/assets/event-55pct.png"
          alt="Luxury Birthday Celebration Decor with Balloon Arch, Neon Happy Birthday and ONE Marquee Letters by 7Delights"
          className="w-full h-full object-cover object-[center_35%] md:object-[35%_center] lg:object-[45%_35%] select-none pointer-events-none"
        />

      </div>

    </section>
  );
}
