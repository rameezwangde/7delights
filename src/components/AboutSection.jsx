import React from 'react';
import { ArrowRight } from 'lucide-react';
import {
  CreativePlanningIcon,
  EndToEndManagementIcon,
  PersonalisedExperiencesIcon,
  MemoriesThatLastIcon,
  KpiPartyPopper,
  KpiUsersGroup,
  KpiHeartExperience,
  BigGoldHeart,
  DoodleRayGroup,
} from './AboutIcons';
import { HandDrawnHeart } from './Doodles';

export default function AboutSection() {
  const features = [
    {
      title: 'Creative',
      subtitle: 'Planning',
      bgColor: 'bg-[#FFE8ED]',
      icon: <CreativePlanningIcon className="w-6 h-6" />,
    },
    {
      title: 'End-to-End',
      subtitle: 'Management',
      bgColor: 'bg-[#FFF3DF]',
      icon: <EndToEndManagementIcon className="w-6 h-6" />,
    },
    {
      title: 'Personalised',
      subtitle: 'Experiences',
      bgColor: 'bg-[#EFEAFF]',
      icon: <PersonalisedExperiencesIcon className="w-6 h-6" />,
    },
    {
      title: 'Memories',
      subtitle: 'That Last',
      bgColor: 'bg-[#E3F8F2]',
      icon: <MemoriesThatLastIcon className="w-6 h-6" />,
    },
  ];

  const kpis = [
    {
      value: '500+',
      label: 'Events Organised',
      icon: <KpiPartyPopper className="w-7 h-7" />,
    },
    {
      value: '1000+',
      label: 'Happy Clients',
      icon: <KpiUsersGroup className="w-7 h-7" />,
    },
    {
      value: '10+',
      label: 'Years of Experience',
      icon: <KpiHeartExperience className="w-7 h-7" />,
    },
  ];

  return (
    <section className="relative w-full bg-[#FEFAF7] overflow-hidden py-16 sm:py-20 lg:py-24 select-none">
      
      {/* Background Soft Blob on the left */}
      <div className="absolute top-12 left-8 w-[580px] h-[640px] bg-[#FDECEF]/65 rounded-[80px] -rotate-6 blur-2xl pointer-events-none -z-0 hidden md:block" />

      {/* Main Container */}
      <div className="w-full max-w-[1680px] mx-auto px-6 sm:px-10 lg:px-14 xl:px-16 relative z-10">
        
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-14 xl:gap-20">
          
          {/* ======================================================== */}
          {/* LEFT SIDE: EDITORIAL PHOTO COLLAGE (~53% desktop)        */}
          {/* ======================================================== */}
          <div className="w-full lg:w-[53%] xl:w-[52%] relative order-2 lg:order-1 flex justify-center lg:justify-start">
            
            {/* The Unified Editorial Collage from Reference */}
            <div className="relative w-full max-w-[680px] xl:max-w-[740px]">
              
              {/* Decorative Accent: Big Gold Heart Top Right of Collage */}
              <div className="absolute -top-7 right-12 sm:right-20 lg:right-16 z-30 pointer-events-none">
                <BigGoldHeart className="w-12 h-12 sm:w-14 sm:h-14 drop-shadow-sm" />
              </div>

              {/* Decorative Accent: Top Left Doodle Rays */}
              <div className="absolute -top-4 left-6 sm:left-10 z-30 pointer-events-none">
                <DoodleRayGroup className="w-9 h-9 text-[#F5A623] rotate-45" />
              </div>

              {/* Decorative Accent: Left Middle Doodle Rays */}
              <div className="absolute top-[38%] -left-3 sm:-left-5 z-30 pointer-events-none">
                <DoodleRayGroup className="w-8 h-8 text-[#F5A623] -rotate-90" />
              </div>

              {/* Collage Image Container */}
              <div className="relative w-full rounded-3xl overflow-visible transition-transform duration-300 hover:scale-[1.01]">
                <img
                  src="/assets/about-collage-full.png"
                  alt="7Delights Event Showcase - Birthday setup, luxury dining table and floral canopy"
                  className="w-full h-auto object-contain drop-shadow-[0_12px_35px_rgba(238,55,117,0.08)] pointer-events-none select-none"
                />
              </div>

            </div>

          </div>

          {/* ======================================================== */}
          {/* RIGHT SIDE: CONTENT & KPIS (~47% desktop)                */}
          {/* ======================================================== */}
          <div className="w-full lg:w-[47%] xl:w-[48%] flex flex-col justify-center order-1 lg:order-2 pl-0 lg:pl-4 xl:pl-8">
            
            {/* Eyebrow: WHO WE ARE */}
            <div className="flex items-center space-x-3 mb-4 sm:mb-5">
              <span className="text-[11px] sm:text-[12px] font-semibold tracking-[0.24em] text-[#3E4F6C] uppercase font-sans">
                WHO WE ARE
              </span>
              <div className="h-[1px] w-14 lg:w-20 bg-[#D4DCE6]" />
            </div>

            {/* Headline Hierarchy: We Create / Happier Moments / Together */}
            <div className="relative mb-5 sm:mb-6">
              
              {/* Line 1: We Create */}
              <h2 className="font-serif-title text-[46px] sm:text-[56px] lg:text-[60px] xl:text-[66px] font-medium text-[#111C33] tracking-[-0.02em] leading-[1.05]">
                We Create
              </h2>

              {/* Line 2: Happier Moments + Pink Heart Doodle */}
              <div className="relative -mt-2 sm:-mt-2.5 flex items-center">
                <span className="font-script-title text-[52px] sm:text-[66px] lg:text-[72px] xl:text-[80px] font-bold text-[#EE3775] leading-[0.92] tracking-wide inline-block py-0.5">
                  Happier Moments
                </span>
                
                {/* Hand-drawn Pink Heart beside headline */}
                <div className="ml-3 sm:ml-4 -mt-2">
                  <HandDrawnHeart className="w-7 h-7 sm:w-9 sm:h-9" />
                </div>
              </div>

              {/* Line 3: Together (stepped slightly to the right) */}
              <div className="relative -mt-1 sm:mt-0 ml-16 sm:ml-28 lg:ml-32">
                <span className="font-serif-title text-[46px] sm:text-[56px] lg:text-[60px] xl:text-[66px] font-medium text-[#111C33] tracking-[-0.02em] leading-[1.05]">
                  Together
                </span>
              </div>

            </div>

            {/* Description */}
            <p className="text-[#4E5D78] text-[15px] sm:text-[16px] lg:text-[17px] leading-[1.62] max-w-[620px] font-normal mb-8 sm:mb-9">
              At 7Delights, we believe every celebration deserves to be unique, beautiful and stress-free. With creativity, attention to detail and a passion for celebrations, we plan, decorate and manage events that bring people together and create memories that last a lifetime.
            </p>

            {/* Feature Highlights Row (4 items) */}
            <div className="mb-9 sm:mb-10">
              
              {/* Desktop & Tablet: 1 Row with thin vertical separators */}
              <div className="hidden sm:flex items-center justify-between w-full max-w-[600px]">
                {features.map((feat, index) => (
                  <React.Fragment key={feat.title}>
                    <div className="flex-1 flex flex-col items-center text-center px-1 group cursor-pointer transition-transform duration-200 hover:-translate-y-1">
                      <div
                        className={`w-[52px] h-[52px] rounded-full ${feat.bgColor} flex items-center justify-center transition-all duration-300 group-hover:scale-105 group-hover:shadow-sm mb-2`}
                      >
                        {feat.icon}
                      </div>
                      <div className="text-[12.5px] lg:text-[13px] font-semibold text-[#18253E] leading-[1.22] tracking-tight">
                        <div>{feat.title}</div>
                        <div>{feat.subtitle}</div>
                      </div>
                    </div>
                    {index < features.length - 1 && (
                      <div className="h-9 w-[1px] bg-[#E2E8F0]/80 self-center mx-1 shrink-0" />
                    )}
                  </React.Fragment>
                ))}
              </div>

              {/* Mobile: 2x2 Clean Grid */}
              <div className="grid sm:hidden grid-cols-2 gap-4 w-full max-w-[340px]">
                {features.map((feat) => (
                  <div
                    key={feat.title}
                    className="flex flex-col items-center text-center p-3 rounded-2xl bg-white/70 shadow-sm border border-gray-100/50"
                  >
                    <div
                      className={`w-12 h-12 rounded-full ${feat.bgColor} flex items-center justify-center mb-1.5`}
                    >
                      {feat.icon}
                    </div>
                    <div className="text-[12px] font-semibold text-[#18253E] leading-tight">
                      <div>{feat.title}</div>
                      <div>{feat.subtitle}</div>
                    </div>
                  </div>
                ))}
              </div>

            </div>

            {/* KPI / Trust Row (3 statistics) */}
            <div className="mb-9 sm:mb-10 pt-2 border-t border-gray-100/80">
              
              {/* Desktop & Tablet: Clean inline stats with dividers */}
              <div className="hidden sm:flex items-center space-x-6 lg:space-x-8 max-w-[620px]">
                {kpis.map((kpi, idx) => (
                  <React.Fragment key={kpi.label}>
                    <div className="flex items-center space-x-3 group">
                      <div className="shrink-0 transition-transform duration-200 group-hover:scale-110">
                        {kpi.icon}
                      </div>
                      <div className="flex flex-col text-left">
                        <span className="text-[26px] lg:text-[28px] font-extrabold text-[#EE3775] leading-none tracking-tight">
                          {kpi.value}
                        </span>
                        <span className="text-[12.5px] lg:text-[13px] font-medium text-[#4E5D78] mt-1 leading-tight">
                          {kpi.label}
                        </span>
                      </div>
                    </div>
                    {idx < kpis.length - 1 && (
                      <div className="h-10 w-[1px] bg-[#E2E8F0]/80 self-center shrink-0" />
                    )}
                  </React.Fragment>
                ))}
              </div>

              {/* Mobile: 3 stacked compact rows */}
              <div className="flex sm:hidden flex-col space-y-4 max-w-[340px]">
                {kpis.map((kpi) => (
                  <div key={kpi.label} className="flex items-center space-x-3.5 p-2 rounded-xl bg-white/50">
                    <div className="shrink-0">{kpi.icon}</div>
                    <div>
                      <div className="text-[22px] font-bold text-[#EE3775] leading-none">{kpi.value}</div>
                      <div className="text-[12px] font-medium text-[#4E5D78] mt-0.5">{kpi.label}</div>
                    </div>
                  </div>
                ))}
              </div>

            </div>

            {/* CTA Button: LEARN MORE → */}
            <div className="flex items-center">
              <a
                href="#learn-more"
                className="inline-flex items-center justify-center bg-gradient-to-r from-[#EE3775] to-[#FA5787] hover:from-[#DD2864] hover:to-[#EE3775] text-white font-bold text-[13.5px] sm:text-[14px] tracking-[0.08em] uppercase px-8 sm:px-9 h-[52px] sm:h-[54px] rounded-full shadow-[0_8px_20px_rgba(238,55,117,0.26)] hover:shadow-[0_10px_24px_rgba(238,55,117,0.34)] transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0 group cursor-pointer"
              >
                <span>LEARN MORE</span>
                <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-200 group-hover:translate-x-1" />
              </a>
            </div>

          </div>

        </div>

      </div>

      {/* ======================================================== */}
      {/* BOTTOM SECTION DECORATION (Layered Soft Abstract Waves)  */}
      {/* ======================================================== */}
      <div className="absolute bottom-0 left-0 right-0 h-16 sm:h-20 pointer-events-none z-10 overflow-hidden">
        <svg
          viewBox="0 0 1440 80"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full preserve-3d"
          preserveAspectRatio="none"
        >
          {/* Subtle peach wave */}
          <path
            d="M0 50 C320 20, 680 70, 1100 35 C1280 20, 1380 45, 1440 40 L1440 80 L0 80 Z"
            fill="#FBE7CE"
            fillOpacity="0.4"
          />
          {/* Subtle blush pink wave */}
          <path
            d="M0 60 C260 40, 720 75, 1180 50 C1320 42, 1400 58, 1440 55 L1440 80 L0 80 Z"
            fill="#FBDDE6"
            fillOpacity="0.55"
          />
        </svg>
      </div>

      {/* Subtle blurred floral foreground at bottom right corner only */}
      <div className="absolute bottom-0 right-0 w-24 sm:w-28 lg:w-32 pointer-events-none z-20 opacity-80 mix-blend-multiply select-none">
        <img
          src="/assets/about-floral-corner-pristine.png"
          alt=""
          className="w-full h-auto object-contain object-bottom-right"
        />
      </div>

    </section>
  );
}
