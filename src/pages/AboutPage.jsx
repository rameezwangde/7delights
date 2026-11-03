import React, { useState } from 'react';
import {
  Sparkles,
  Calendar,
  Award,
  Users,
  MapPin,
  PartyPopper,
  Plus,
  Minus,
  HelpCircle,
  Clock,
  CreditCard,
  CheckCircle2,
  ArrowRight,
} from 'lucide-react';
import { GoldUnderline, HandDrawnHeart } from '../components/Doodles';

function AboutPage() {
  const [openFaq, setOpenFaq] = useState(0);

  const values = [
    {
      title: 'Sensational Party',
      desc: 'Infusing every moment with wonder, laughter, and immersive excitement.',
      color: '#EE3775',
      bg: 'bg-[#FFE8ED]',
    },
    {
      title: 'Impeccable Service',
      desc: 'Seamless coordination, prompt communication, and zero hassle for hosts.',
      color: '#F5A623',
      bg: 'bg-[#FFF3DF]',
    },
    {
      title: 'Exceptional Design',
      desc: 'Bespoke themes, master craftsmanship, and awe-inspiring aesthetic detail.',
      color: '#7B61FF',
      bg: 'bg-[#F2EDFF]',
    },
  ];

  const statMetrics = [
    {
      value: '15+ Years',
      label: 'Of Experience',
      icon: <Calendar className="w-8 h-8 text-[#EE3775]" strokeWidth={1.8} />,
      bg: 'bg-[#FFE8ED]',
      border: 'border-[#FCD5DE]',
    },
    {
      value: '10k+',
      label: 'Happy Clients',
      icon: <Users className="w-8 h-8 text-[#F5A623]" strokeWidth={1.8} />,
      bg: 'bg-[#FFF3DF]',
      border: 'border-[#FFE4B8]',
    },
    {
      value: '55+',
      label: 'Activities & Games',
      icon: <PartyPopper className="w-8 h-8 text-[#7B61FF]" strokeWidth={1.8} />,
      bg: 'bg-[#F2EDFF]',
      border: 'border-[#E0D5FF]',
    },
    {
      value: '12+',
      label: 'Locations Served',
      icon: <MapPin className="w-8 h-8 text-[#10B981]" strokeWidth={1.8} />,
      bg: 'bg-[#E3F8F2]',
      border: 'border-[#C1F1E1]',
    },
  ];

  const faqs = [
    {
      question: 'How far in advance should I book 7Delights.in for my event?',
      answer:
        'To ensure maximum availability of premium artists, specific themes, and equipment, we recommend booking at least 1 to 6 weeks in advance for social parties & corporate events, and 3 to 6 months in advance for major weddings or large-scale corporate launches. However, if you have a last-minute request in Bangalore, contact us & we will do our best to make it happen!',
      icon: <Clock className="w-5 h-5 text-[#EE3775]" />,
    },
    {
      question: 'How long does it take for your team to set up?',
      answer:
        'Setup times vary by service. Simple balloon decorations or a single interactive stall may take 1 to 2 hours. Complex thematic stage setups, intricate lighting riggings, or heavy SFX installations can take anywhere from 4 to 12 hours. We always coordinate directly with your venue to ensure everything is flawlessly set up well before your first guest arrives.',
      icon: <CheckCircle2 className="w-5 h-5 text-[#F5A623]" />,
    },
    {
      question: 'What is your payment policy?',
      answer:
        'To secure your date, artists, and materials, we require an advance payment upon signing the contract. The remaining balance is structured into comfortable milestones leading up to, or on the day of the event. We offer transparent itemized invoices with zero hidden charges.',
      icon: <CreditCard className="w-5 h-5 text-[#7B61FF]" />,
    },
    {
      question: 'Can you customize party packages to fit our specific budget?',
      answer:
        'Absolutely! We pride ourselves on flexible bespoke planning. You can choose from our curated turnkey celebration packages or tell our planners your budget, and we will tailor themes, entertainment activities, and decor to maximize value without compromising on quality.',
      icon: <Sparkles className="w-5 h-5 text-[#10B981]" />,
    },
  ];

  return (
    <div className="w-full bg-[#FFFDF9] select-none">
      
      {/* ======================================================== */}
      {/* 1. HERO BREADCRUMB / BANNER                              */}
      {/* ======================================================== */}
      <section className="relative w-full bg-gradient-to-b from-[#FFF5F6] via-[#FFFDF9] to-[#FFFDF9] py-14 sm:py-18 overflow-hidden border-b border-[#FCD5DE]/50">
        
        {/* Ambient Glows */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#FFE8ED]/60 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-10 w-80 h-80 bg-[#FFF3DF]/50 rounded-full blur-3xl pointer-events-none" />

        <div className="w-full max-w-[1720px] mx-auto px-6 sm:px-10 lg:px-14 xl:px-16 text-center relative z-10">
          
          <div className="inline-flex items-center space-x-2.5 mb-3.5">
            <span className="w-6 h-[1.5px] bg-[#EE3775]" />
            <span className="text-[12px] sm:text-[13px] font-bold tracking-[0.2em] text-[#EE3775] uppercase font-sans">
              ESTABLISHED IN 2008 • BANGALORE
            </span>
            <span className="w-6 h-[1.5px] bg-[#EE3775]" />
          </div>

          <h1 className="text-[38px] sm:text-[52px] lg:text-[62px] font-bold text-[#111A2E] font-serif leading-[1.12] mb-4">
            Delighting Every Moment with{' '}
            <span className="text-[#EE3775] relative inline-block font-dancing font-normal text-[48px] sm:text-[64px] lg:text-[76px]">
              Passion & Elegance
              <div className="absolute -bottom-2 left-0 w-full overflow-visible">
                <GoldUnderline className="w-full h-3.5 text-[#F5A623]" />
              </div>
            </span>
          </h1>

          <p className="text-[16px] sm:text-[18px] text-[#5A6E85] max-w-2xl mx-auto leading-relaxed">
            Bangalore's finest party planners and event stylists, creating milestone memories and dream decor across Karnataka.
          </p>
        </div>
      </section>

      {/* ======================================================== */}
      {/* 2. MAIN STORY SECTION (EDITORIAL TWO-COLUMN)             */}
      {/* ======================================================== */}
      <section className="relative w-full py-16 sm:py-20 lg:py-22 overflow-hidden">
        
        <div className="w-full max-w-[1720px] mx-auto px-6 sm:px-10 lg:px-14 xl:px-16 relative z-10">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 xl:gap-16 items-center">
            
            {/* Left Column: Brand Narrative (~50%) */}
            <div className="lg:col-span-6 flex flex-col text-left">
              
              <div className="flex items-center space-x-3 mb-4">
                <span className="text-[12px] font-bold tracking-[0.2em] text-[#EE3775] uppercase font-sans">
                  ABOUT 7DELIGHTS.IN
                </span>
                <div className="h-[1px] w-14 bg-[#FCD5DE]" />
              </div>

              <h2 className="text-[32px] sm:text-[42px] font-bold text-[#111A2E] font-serif leading-[1.2] mb-6">
                Crafting Extraordinary Celebrations Since{' '}
                <span className="text-[#EE3775]">2008</span>
              </h2>

              <div className="space-y-4 text-[15px] sm:text-[16px] text-[#4A5D74] leading-relaxed font-normal">
                <p>
                  <strong className="font-semibold text-[#111A2E]">7Delights.in®</strong> has established itself as one of the finest and most respected party and event organizing companies in Bangalore since 2008, delivering bespoke event management services across Karnataka and neighboring states.
                </p>

                <p>
                  Since our inception, we have cultivated an unwavering standard of quality, creativity, and precision. We are honored to cater in Bangalore's most prestigious venues, luxury banquet halls, and private estates, stewarding an impressive client base of families, celebrities, and corporate leaders.
                </p>

                <p>
                  Along with our core values of <span className="font-semibold text-[#111A2E]">Sensational Party</span>, <span className="font-semibold text-[#111A2E]">Impeccable Service</span>, and <span className="font-semibold text-[#111A2E]">Exceptional Design</span>, we acknowledge that every milestone is unique. 7Delights quotes on an entirely bespoke basis, tailoring every element to exceed expectations.
                </p>
              </div>

              {/* 3 Core Values Pills */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 mt-8 pt-8 border-t border-[#F5E8E2]">
                {values.map((v, i) => (
                  <div
                    key={i}
                    className={`p-4 rounded-2xl ${v.bg} border border-black/5 flex flex-col justify-start`}
                  >
                    <h4
                      className="text-[14.5px] font-bold mb-1 font-sans"
                      style={{ color: v.color }}
                    >
                      {v.title}
                    </h4>
                    <p className="text-[12.5px] text-[#5A6E85] leading-snug">
                      {v.desc}
                    </p>
                  </div>
                ))}
              </div>

            </div>

            {/* Right Column: Luxury Event Photography */}
            <div className="lg:col-span-6 relative flex justify-center lg:justify-end">
              
              <div className="absolute -top-6 -right-6 w-full h-full rounded-3xl bg-gradient-to-br from-[#FFE8ED] via-[#FFF3DF] to-[#E3F8F2] -z-0 blur-xs" />

              <div className="relative z-10 w-full max-w-[620px] rounded-3xl overflow-hidden shadow-2xl border-4 border-white group">
                <img
                  src="/assets/about-us-hero.jpg"
                  alt="7Delights.in Luxury Milestone 1st Birthday Setup Bangalore"
                  className="w-full h-[460px] sm:h-[540px] object-cover transition-transform duration-700 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#111A2E]/70 via-transparent to-black/10" />

                <div className="absolute top-5 left-5 bg-white/90 backdrop-blur-md px-4 py-2 rounded-2xl shadow-lg border border-[#FCD5DE] flex items-center space-x-2.5">
                  <div className="w-8 h-8 rounded-xl bg-[#FFE8ED] flex items-center justify-center text-[#EE3775]">
                    <Award className="w-4 h-4" />
                  </div>
                  <div className="text-left">
                    <p className="text-[11px] font-bold uppercase tracking-wider text-[#EE3775]">Since 2008</p>
                    <p className="text-[13px] font-bold text-[#111A2E]">16+ Years Experience</p>
                  </div>
                </div>

                <div className="absolute bottom-6 left-6 right-6 text-left text-white">
                  <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-[11px] font-semibold mb-2">
                    <Sparkles className="w-3 h-3 text-[#F5A623]" />
                    <span>Real 7Delights Luxury Setup</span>
                  </div>
                  <h3 className="text-[20px] sm:text-[22px] font-bold font-serif leading-tight">
                    Custom Milestone Birthday & Theme Decor
                  </h3>
                  <p className="text-[13px] text-white/80 mt-1">
                    Illuminated marquee styling, organic floral-balloon arches, and turnkey party production in Bangalore.
                  </p>
                </div>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* ======================================================== */}
      {/* 3. CIRCULAR METRICS / MILESTONES (15+ Years, 10k+, etc.)  */}
      {/* ======================================================== */}
      <section className="relative w-full py-14 sm:py-16 bg-[#FFF9F6] border-y border-[#FCD5DE]/60">
        
        <div className="w-full max-w-[1720px] mx-auto px-6 sm:px-10 lg:px-14 xl:px-16">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10">
            {statMetrics.map((stat, idx) => (
              <div
                key={idx}
                className="flex flex-col items-center text-center group cursor-default"
              >
                {/* Clean concentric circle container matching the requested reference */}
                <div className="relative w-28 h-28 sm:w-32 sm:h-32 mb-4 flex items-center justify-center">
                  {/* Outer subtle concentric ring */}
                  <div className="absolute inset-0 rounded-full border-2 border-dashed border-[#FCD5DE] group-hover:rotate-45 transition-transform duration-700" />
                  
                  {/* Middle ring */}
                  <div className="absolute inset-2 rounded-full border border-gray-200/80 bg-white shadow-xs" />

                  {/* Inner Icon Circle with Pastel fill */}
                  <div
                    className={`relative w-18 h-18 sm:w-20 sm:h-20 rounded-full ${stat.bg} ${stat.border} border flex items-center justify-center shadow-xs group-hover:scale-105 transition-transform duration-300`}
                  >
                    {stat.icon}
                  </div>
                </div>

                {/* Metric Value */}
                <h3 className="text-[24px] sm:text-[28px] font-bold text-[#111A2E] font-serif mb-1 group-hover:text-[#EE3775] transition-colors duration-200">
                  {stat.value}
                </h3>

                {/* Metric Label */}
                <p className="text-[14px] sm:text-[15px] font-semibold text-[#5A6E85]">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>

      </section>

      {/* ======================================================== */}
      {/* 4. EVENT FAQ SECTION (CREATIVE ACCORDION)                */}
      {/* ======================================================== */}
      <section className="relative w-full py-18 sm:py-22 lg:py-26 overflow-hidden">
        
        {/* Subtle Ambient Glow */}
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-[#FFE8ED]/40 rounded-full blur-3xl pointer-events-none" />

        <div className="w-full max-w-[1300px] mx-auto px-6 sm:px-10 lg:px-14 xl:px-16 relative z-10">
          
          {/* Header */}
          <div className="text-center max-w-2xl mx-auto mb-14 sm:mb-16">
            
            <div className="inline-flex items-center space-x-2.5 mb-3.5">
              <span className="w-6 h-[1.5px] bg-[#EE3775]" />
              <span className="text-[12px] sm:text-[13px] font-bold tracking-[0.2em] text-[#EE3775] uppercase font-sans">
                COMMON QUESTIONS
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
              Everything you need to know about planning your dream celebration with 7Delights in Bangalore.
            </p>
          </div>

          {/* Accordion FAQ List */}
          <div className="space-y-4">
            {faqs.map((faq, index) => {
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

          {/* Bottom FAQ Help Capsule */}
          <div className="mt-12 text-center">
            <div className="inline-flex flex-col sm:flex-row items-center justify-center gap-3 p-4 sm:p-5 rounded-2xl bg-white border border-[#FCD5DE] shadow-xs">
              <span className="text-[14px] text-[#5A6E85]">
                Have a unique celebration query not answered here?
              </span>
              <a
                href="#placeholder"
                className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-full bg-[#EE3775] hover:bg-[#d82a65] text-white text-[13.5px] font-semibold transition-all shadow-xs cursor-pointer"
              >
                <span>Ask Our Planners</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>

        </div>

      </section>

    </div>
  );
}

export default AboutPage;
