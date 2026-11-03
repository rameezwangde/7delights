import React, { useState } from 'react';
import {
  MessageSquareCheck,
  Sparkles,
  ClipboardCheck,
  PartyPopper,
  ArrowRight,
  Check,
  PhoneCall,
  CalendarHeart,
} from 'lucide-react';
import { GoldUnderline, HandDrawnHeart } from './Doodles';

export default function HowWeWorkSection() {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      step: '01',
      title: 'Party & Event Enquire',
      subtitle: 'Connect & Share Vision',
      tag: 'Step 1 • Initial Contact',
      description:
        'Reach out via call, WhatsApp, or consultation form. Tell us your celebration date, venue preferences, and dream theme ideas in Bangalore.',
      details: [
        'Free 15-minute concept consultation',
        'Theme & venue feasibility check',
        'Transparent budget estimation',
      ],
      icon: MessageSquareCheck,
      color: '#EE3775',
      bgGlow: 'from-[#FFE8ED] to-[#FFF0F4]',
      badgeBg: 'bg-[#FFE8ED] text-[#EE3775] border-[#FFD0DB]',
      pillBg: 'bg-[#FFD9E4]',
    },
    {
      step: '02',
      title: 'Get Custom Party Details',
      subtitle: 'Moodboard & Planning',
      tag: 'Step 2 • Bespoke Curation',
      description:
        'Our creative event designers curate a tailored decoration plan, 3D theme layout, artist schedule, and custom party menu tailored to your fascination.',
      details: [
        'Visual moodboard & color palettes',
        'Itemized decor & activity breakdown',
        'Flexible revisions until you are thrilled',
      ],
      icon: Sparkles,
      color: '#F5A623',
      bgGlow: 'from-[#FFF3DF] to-[#FFF9EE]',
      badgeBg: 'bg-[#FFF3DF] text-[#D97706] border-[#FFE4B8]',
      pillBg: 'bg-[#FFE8BF]',
    },
    {
      step: '03',
      title: 'Book Your Party Services',
      subtitle: 'Hassle-Free Confirmation',
      tag: 'Step 3 • Lock the Date',
      description:
        'Review the proposal and finalize with transparent terms. Once confirmed, we assign your dedicated Bangalore event manager and lock all vendor schedules.',
      details: [
        'Simple booking contract & date lock',
        'Assigned personal event coordinator',
        'Pre-event site inspection & timeline sync',
      ],
      icon: ClipboardCheck,
      color: '#7B61FF',
      bgGlow: 'from-[#F2EDFF] to-[#F8F5FF]',
      badgeBg: 'bg-[#F2EDFF] text-[#7B61FF] border-[#E0D5FF]',
      pillBg: 'bg-[#E0D5FF]',
    },
    {
      step: '04',
      title: 'Enjoy Your Celebration',
      subtitle: 'Flawless Magic & Fun',
      tag: 'Step 4 • Showtime',
      description:
        'Sit back, relax, and make memories! Our on-ground production team handles setup, live entertainment, lighting, and guest engagement from start to finish.',
      details: [
        'On-time setup ready before guests arrive',
        'Seamless live entertainment coordination',
        'Complete post-event wrap-up & teardown',
      ],
      icon: PartyPopper,
      color: '#10B981',
      bgGlow: 'from-[#E3F8F2] to-[#F0FDF8]',
      badgeBg: 'bg-[#E3F8F2] text-[#059669] border-[#C1F1E1]',
      pillBg: 'bg-[#C7F2E3]',
    },
  ];

  return (
    <section className="relative w-full bg-[#FFFDF9] py-18 sm:py-22 lg:py-26 overflow-hidden select-none">
      
      {/* Decorative ambient background glows */}
      <div className="absolute top-1/3 -left-28 w-96 h-96 bg-[#FFE8ED]/50 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 -right-28 w-96 h-96 bg-[#FFF3DF]/60 rounded-full blur-3xl pointer-events-none" />

      {/* Floating decorative doodle */}
      <div className="absolute top-24 left-14 hidden xl:block opacity-40">
        <HandDrawnHeart className="w-10 h-10 text-[#EE3775] -rotate-12" />
      </div>

      <div className="w-full max-w-[1720px] mx-auto px-6 sm:px-10 lg:px-14 xl:px-16 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          
          {/* Eyebrow */}
          <div className="inline-flex items-center justify-center space-x-2.5 mb-3.5">
            <span className="w-6 h-[1.5px] bg-[#EE3775]" />
            <span className="text-[12px] sm:text-[13px] font-bold tracking-[0.2em] text-[#EE3775] uppercase font-sans">
              OUR SIMPLE 4-STEP JOURNEY
            </span>
            <span className="w-6 h-[1.5px] bg-[#EE3775]" />
          </div>

          {/* Main Title */}
          <h2 className="text-[34px] sm:text-[46px] lg:text-[50px] font-bold text-[#111A2E] font-serif leading-[1.15] mb-4">
            How We Make Your Event{' '}
            <span className="text-[#EE3775] relative inline-block font-dancing font-normal text-[44px] sm:text-[56px] lg:text-[62px]">
              Effortless & Magical
              <div className="absolute -bottom-2 left-0 w-full overflow-visible">
                <GoldUnderline className="w-full h-3 text-[#F5A623]" />
              </div>
            </span>
          </h2>

          {/* SEO Description */}
          <p className="text-[15px] sm:text-[17px] text-[#5A6E85] leading-relaxed max-w-2xl mx-auto">
            From your very first idea to the final party confetti, our structured party management process in Bangalore guarantees peace of mind and perfection.
          </p>
        </div>

        {/* ======================================================== */}
        {/* 4-STEP CONNECTED TIMELINE CARDS                          */}
        {/* ======================================================== */}
        <div className="relative">
          
          {/* Subtle connecting horizontal dotted track on desktop */}
          <div className="hidden lg:block absolute top-[68px] left-[10%] right-[10%] h-[2px] border-t-2 border-dashed border-[#FCD5DE] z-0" />

          {/* Grid of 4 Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-7 relative z-10">
            {steps.map((item, index) => {
              const Icon = item.icon;
              const isHovered = activeStep === index;

              return (
                <div
                  key={index}
                  onMouseEnter={() => setActiveStep(index)}
                  className={`group relative bg-white rounded-3xl p-7 border transition-all duration-300 flex flex-col justify-between text-left cursor-default ${
                    isHovered
                      ? 'border-[#EE3775]/50 shadow-xl -translate-y-2'
                      : 'border-[#F3E8E2] hover:border-[#FCD5DE] shadow-2xs hover:shadow-md'
                  }`}
                >
                  
                  {/* Top Row: Circular Icon Badge & Step Number */}
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      
                      {/* Stylized Icon Badge */}
                      <div
                        className={`w-14 h-14 rounded-2xl ${item.pillBg} flex items-center justify-center transition-transform duration-300 group-hover:scale-110 shadow-xs`}
                        style={{ color: item.color }}
                      >
                        <Icon className="w-7 h-7" strokeWidth={1.9} />
                      </div>

                      {/* Step Number Badge */}
                      <span className="text-[28px] font-bold font-serif text-[#D4DCE6] group-hover:text-[#EE3775] transition-colors duration-200">
                        {item.step}
                      </span>
                    </div>

                    {/* Step Tag */}
                    <div className="mb-3">
                      <span
                        className={`inline-block px-3 py-1 rounded-full text-[11px] font-bold tracking-wider uppercase border ${item.badgeBg}`}
                      >
                        {item.tag}
                      </span>
                    </div>

                    {/* Step Title & Subtitle */}
                    <h3 className="text-[19px] sm:text-[20px] font-bold text-[#111A2E] mb-1 font-sans group-hover:text-[#EE3775] transition-colors duration-200 leading-snug">
                      {item.title}
                    </h3>
                    <div className="text-[13px] font-semibold text-[#EE3775] mb-3">
                      {item.subtitle}
                    </div>

                    {/* Main Description */}
                    <p className="text-[13.5px] sm:text-[14px] text-[#5A6E85] leading-relaxed mb-6">
                      {item.description}
                    </p>
                  </div>

                  {/* Bullet points for clarity & trust */}
                  <div className="pt-4 border-t border-[#F8ECE8] space-y-2">
                    {item.details.map((detail, idx) => (
                      <div key={idx} className="flex items-start space-x-2 text-[12.5px] text-[#5A6E85]">
                        <div
                          className="w-4 h-4 rounded-full flex items-center justify-center shrink-0 mt-0.5 text-white"
                          style={{ backgroundColor: item.color }}
                        >
                          <Check className="w-2.5 h-2.5" strokeWidth={3} />
                        </div>
                        <span className="leading-tight">{detail}</span>
                      </div>
                    ))}
                  </div>

                  {/* Interactive subtle bottom glow */}
                  <div
                    className="absolute bottom-0 left-6 right-6 h-[3px] rounded-full transition-opacity duration-300 opacity-0 group-hover:opacity-100"
                    style={{ backgroundColor: item.color }}
                  />

                </div>
              );
            })}
          </div>

        </div>

        {/* ======================================================== */}
        {/* INTERACTIVE CALL TO ACTION PILL                          */}
        {/* ======================================================== */}
        <div className="mt-14 sm:mt-18 max-w-3xl mx-auto bg-gradient-to-r from-[#FFF0F4] via-white to-[#FFF9EE] rounded-full p-2.5 sm:p-3 border border-[#FCD5DE] flex flex-col sm:flex-row items-center justify-between gap-4 shadow-xs">
          
          <div className="flex items-center space-x-3.5 pl-4 sm:pl-5 text-left">
            <div className="w-10 h-10 rounded-full bg-[#FFE8ED] flex items-center justify-center text-[#EE3775] shrink-0">
              <CalendarHeart className="w-5 h-5" />
            </div>
            <div>
              <p className="text-[14.5px] font-bold text-[#111A2E] leading-tight">
                Ready to plan your next milestone event?
              </p>
              <p className="text-[12.5px] text-[#5A6E85]">
                Let's discuss your date and make it unforgettable.
              </p>
            </div>
          </div>

          <a
            href="#placeholder"
            className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-6 sm:px-7 py-3 rounded-full bg-[#EE3775] hover:bg-[#d82a65] text-white text-[13.5px] sm:text-[14px] font-semibold transition-all duration-200 shadow-md hover:shadow-lg cursor-pointer shrink-0"
          >
            <span>Start Planning With Us</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

      </div>

    </section>
  );
}

