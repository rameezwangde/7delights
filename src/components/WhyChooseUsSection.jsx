import React from 'react';
import {
  Award,
  Palette,
  CalendarCheck2,
  BadgePercent,
  ShieldCheck,
  Headphones,
} from 'lucide-react';
import { GoldUnderline } from './Doodles';

export default function WhyChooseUsSection() {
  const points = [
    {
      title: 'Event Experience & Expertise',
      description:
        'Years of hard work have brought us phenomenal knowledge and expertise in all types of party decorations, birthday event planning, and kids activities services across Bangalore.',
      icon: <Award className="w-6 h-6 text-[#EE3775]" strokeWidth={2} />,
      badgeBg: 'bg-[#FFE8ED]',
      iconBorder: 'border-[#FCD5DE]',
    },
    {
      title: 'Personalized Party Service',
      description:
        'We believe in bringing you tailored birthday decorations, themes, activities, and custom party ideas to suit your exact dreams and celebrations seamlessly.',
      icon: <Palette className="w-6 h-6 text-[#F5A623]" strokeWidth={2} />,
      badgeBg: 'bg-[#FFF3DF]',
      iconBorder: 'border-[#FFE4B8]',
    },
    {
      title: 'End-to-End Event Management',
      description:
        'We assign dedicated event managers to supervise everything from initial concept, stage setup, and party entertainment right until the end of your celebration.',
      icon: <CalendarCheck2 className="w-6 h-6 text-[#7B61FF]" strokeWidth={2} />,
      badgeBg: 'bg-[#F2EDFF]',
      iconBorder: 'border-[#E0D5FF]',
    },
    {
      title: 'Budget Friendly Event & Party',
      description:
        'Transparent pricing with flexible packages. Enjoy premium celebration decor and professional birthday party services in Bangalore at packages you can comfortably afford.',
      icon: <BadgePercent className="w-6 h-6 text-[#10B981]" strokeWidth={2} />,
      badgeBg: 'bg-[#E3F8F2]',
      iconBorder: 'border-[#C1F1E1]',
    },
    {
      title: 'Event Reliability & Trust',
      description:
        'Our proven track record and hundreds of delighted clients make 7Delights a premier, most trusted event management and party planning company in Bangalore.',
      icon: <ShieldCheck className="w-6 h-6 text-[#EE3775]" strokeWidth={2} />,
      badgeBg: 'bg-[#FFE8ED]',
      iconBorder: 'border-[#FCD5DE]',
    },
    {
      title: '24/7 Dedicated Event Support',
      description:
        'Our responsive planning support team is on standby 24/7 to answer questions, adjust requirements, and ensure your celebration runs flawlessly without stress.',
      icon: <Headphones className="w-6 h-6 text-[#F5A623]" strokeWidth={2} />,
      badgeBg: 'bg-[#FFF3DF]',
      iconBorder: 'border-[#FFE4B8]',
    },
  ];

  return (
    <section className="relative w-full bg-[#FFFDF9] py-16 sm:py-20 lg:py-24 overflow-hidden select-none">
      
      {/* Decorative ambient background glows */}
      <div className="absolute top-1/4 -left-20 w-80 h-80 bg-[#FFE8ED]/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 -right-20 w-80 h-80 bg-[#FFF3DF]/50 rounded-full blur-3xl pointer-events-none" />

      <div className="w-full max-w-[1720px] mx-auto px-6 sm:px-10 lg:px-14 xl:px-16 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-18">
          
          {/* Eyebrow */}
          <div className="inline-flex items-center justify-center space-x-2.5 mb-3.5">
            <span className="w-6 h-[1.5px] bg-[#EE3775]" />
            <span className="text-[12px] sm:text-[13px] font-bold tracking-[0.2em] text-[#EE3775] uppercase font-sans">
              THE 7DELIGHTS PROMISE
            </span>
            <span className="w-6 h-[1.5px] bg-[#EE3775]" />
          </div>

          {/* Main Title */}
          <h2 className="text-[34px] sm:text-[44px] lg:text-[48px] font-bold text-[#111A2E] font-serif leading-[1.18] mb-4">
            Why Choose <span className="text-[#EE3775] relative inline-block">
              7Delights?
              <div className="absolute -bottom-2.5 left-0 w-full overflow-visible">
                <GoldUnderline className="w-full h-3 text-[#F5A623]" />
              </div>
            </span>
          </h2>

          {/* SEO Subtitle */}
          <p className="text-[15px] sm:text-[17px] text-[#5A6E85] font-normal leading-relaxed mt-4 max-w-2xl mx-auto">
            Premier <strong className="font-semibold text-[#111A2E]">Birthday & Event Management Company based in Bangalore</strong>, delivering bespoke celebrations, stunning theme decor, and seamless party experiences.
          </p>
        </div>

        {/* 6 Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-9">
          {points.map((point, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-2xl p-6 sm:p-7 border border-[#F3E8E2] hover:border-[#FCD5DE] transition-all duration-300 shadow-2xs hover:shadow-md hover:-translate-y-1 flex items-start space-x-4 sm:space-x-5"
            >
              {/* Perfectly round, clean SaaS-quality Lucide icon badge */}
              <div
                className={`w-13 h-13 sm:w-14 sm:h-14 rounded-full ${point.badgeBg} border ${point.iconBorder} flex items-center justify-center shrink-0 shadow-2xs group-hover:scale-105 transition-transform duration-300`}
              >
                {point.icon}
              </div>

              {/* Text Content */}
              <div className="flex-1 text-left pt-0.5">
                <h3 className="text-[17px] sm:text-[18px] font-bold text-[#111A2E] mb-2 font-sans group-hover:text-[#EE3775] transition-colors duration-200">
                  {point.title}
                </h3>
                <p className="text-[13.5px] sm:text-[14px] text-[#5A6E85] leading-relaxed">
                  {point.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>

    </section>
  );
}

