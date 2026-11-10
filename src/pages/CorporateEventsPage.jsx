import React, { useState } from 'react';
import { 
  Sparkles, 
  Search, 
  Phone, 
  ChevronRight, 
  Clock, 
  MapPin, 
  ShieldCheck, 
  Users, 
  Briefcase, 
  Smile, 
  Trophy, 
  CheckCircle2, 
  Layers, 
  Headphones, 
  Award,
  ChevronDown,
  HelpCircle,
  Volume2,
  Tv,
  Presentation,
  Flame,
  Printer
} from 'lucide-react';
import { GoldUnderline } from '../components/Doodles';

export default function CorporateEventsPage() {
  const [activeTab, setActiveTab] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const categories = [
    { id: 'all', label: 'All Corporate Services' },
    { id: 'av', label: 'Sound & LED AV' },
    { id: 'stage', label: 'Stage & Fabrication' },
    { id: 'engagement', label: 'Team Building & MC' },
    { id: 'production', label: 'SFX & Production' },
  ];

  // 10 authentic corporate event cards from https://www.7delights.in/corporate-events/
  const corporateCards = [
    {
      id: 1,
      title: 'Music System',
      slug: '#corporate-overview',
      category: 'av',
      image: '/assets/corp-music-system.webp',
      tag: 'Pro Audio',
      badgeBg: 'bg-[#FFE8ED] text-[#EE3775] border-[#FFD0DB]',
      desc: 'We install a powerful concert-grade music system customized to the exact acoustic footprint and attendee capacity of your venue!',
    },
    {
      id: 2,
      title: 'DJ Sound Lighting Setup',
      slug: '#corporate-events/dj-music',
      category: 'av',
      image: '/assets/corp-dj-sound-lighting.webp',
      tag: 'DJ & Lights',
      badgeBg: 'bg-[#FFF3DF] text-[#D97706] border-[#FFE4B8]',
      desc: 'Electrifying DJ performances begin with state-of-the-art intelligent moving heads, trusses, lasers, and surround sound rigs.',
    },
    {
      id: 3,
      title: 'Stage and Flex Backdrop',
      slug: '#corporate-events/stage-flex-background',
      category: 'stage',
      image: '/assets/corp-stage-flex-backdrop.webp',
      tag: 'Stage & Flex',
      badgeBg: 'bg-[#F2EDFF] text-[#7B61FF] border-[#E0D5FF]',
      desc: 'We design custom corporate themes, print high-resolution branded flex, and fabricate sturdy elevated stages for speeches and galas.',
    },
    {
      id: 4,
      title: 'LED Wall',
      slug: '#corporate-events/led-wall',
      category: 'av',
      image: '/assets/corp-led-wall.webp',
      tag: 'P2.9 / P3.9 LED',
      badgeBg: 'bg-[#E3F8F2] text-[#059669] border-[#C1F1E1]',
      desc: 'High-definition seamless P2.9/P3.9 indoor & outdoor video walls for keynote presentations, product unveils, and live camera relay.',
    },
    {
      id: 5,
      title: 'Projector and Screen',
      slug: '#corporate-overview',
      category: 'av',
      image: '/assets/corp-projector-screen.webp',
      tag: 'HD Projection',
      badgeBg: 'bg-[#FFE8ED] text-[#EE3775] border-[#FFD0DB]',
      desc: 'High-lumen optical projectors paired with motorized drop-down or tripod screens for crystal-clear boardroom and ballroom viewing.',
    },
    {
      id: 6,
      title: 'MC Games / Team Building Activities',
      slug: '#corporate-events/mc-team-building-activities',
      category: 'engagement',
      image: '/assets/corp-mc-games.webp',
      tag: 'Team Building',
      badgeBg: 'bg-[#FFF3DF] text-[#D97706] border-[#FFE4B8]',
      desc: 'Dynamic corporate anchors and facilitators drive high-energy icebreakers, leadership games, and team bonding challenges.',
    },
    {
      id: 7,
      title: 'Grand Entry',
      slug: '#corporate-overview',
      category: 'production',
      image: '/assets/corp-grand-entry.webp',
      tag: 'VIP Welcome',
      badgeBg: 'bg-[#F2EDFF] text-[#7B61FF] border-[#E0D5FF]',
      desc: 'Create an unforgettable VIP first impression with red carpets, dhol troupes, welcome hostesses, and illuminated gateway arches.',
    },
    {
      id: 8,
      title: 'Dance Floor',
      slug: '#corporate-overview',
      category: 'stage',
      image: '/assets/corp-dance-floor.webp',
      tag: 'LED Dance Floor',
      badgeBg: 'bg-[#E3F8F2] text-[#059669] border-[#C1F1E1]',
      desc: 'Heavy-duty wooden, glossy acrylic, or interactive infinity LED dance floors designed for high-energy corporate cocktail nights.',
    },
    {
      id: 9,
      title: 'Printing Services',
      slug: '#corporate-events/printing-services',
      category: 'stage',
      image: '/assets/corp-printing-services.webp',
      tag: 'Brand Collateral',
      badgeBg: 'bg-[#FFE8ED] text-[#EE3775] border-[#FFD0DB]',
      desc: 'Comprehensive branding solutions: standees, ID badges, lanyards, directional signages, brochures, and custom welcome desks.',
    },
    {
      id: 10,
      title: 'Confetti Blast & Cold Fire',
      slug: '#corporate-overview',
      category: 'production',
      image: '/assets/corp-confetti-coldfire.webp',
      tag: 'SFX Production',
      badgeBg: 'bg-[#FFF3DF] text-[#D97706] border-[#FFE4B8]',
      desc: 'Electrify award moments and annual summits with synchronized indoor safe cold pyros, metallic confetti cannons, and CO2 jets.',
    },
  ];

  const strengths = [
    {
      title: 'Tailored Corporate Solutions',
      desc: 'We understand that every corporate event is unique. Our customized approach ensures that your event aligns perfectly with your brand and objectives.',
      icon: <Briefcase className="w-6 h-6 text-[#EE3775]" />,
    },
    {
      title: 'Creative Concepts & Themes',
      desc: 'Our innovative ideas and creative flair will set your summit apart. From annual galas and award nights to product unveilings, we craft memorable experiences.',
      icon: <Sparkles className="w-6 h-6 text-[#7B61FF]" />,
    },
    {
      title: 'Seamless On-Time Execution',
      desc: 'Meticulous planning and attention to detail guarantee a flawless event from setup to teardown, adhering strictly to corporate run-sheets.',
      icon: <Clock className="w-6 h-6 text-[#059669]" />,
    },
    {
      title: 'Expert In-House AV Crew',
      desc: 'Our certified sound and lighting sound engineers, rigging experts, and stage technicians ensure crystal audio, vivid visuals, and zero technical glitches.',
      icon: <Award className="w-6 h-6 text-[#D97706]" />,
    },
    {
      title: 'State-of-the-Art Technology',
      desc: 'We leverage the latest technology—including seamless P2.9 LED video walls, wireless digital mics, and high-definition live multi-cam streaming.',
      icon: <Tv className="w-6 h-6 text-[#3B82F6]" />,
    },
    {
      title: '24/7 Dedicated Support',
      desc: 'A dedicated corporate account manager acts as your single point of contact, ensuring rapid responses, clear billing, and smooth vendor coordination.',
      icon: <Headphones className="w-6 h-6 text-[#EC4899]" />,
    },
  ];

  const faqs = [
    {
      q: 'How far in advance should I book 7Delights corporate event planning for my event?',
      a: 'To ensure maximum availability of corporate event planning, specific themes, & equipment, we recommend booking at least 1 to 6 weeks in advance for social parties & corporate events, and 3 to 6 months in advance for major annual bashes or large-scale corporate product launches. However, if you have a last-minute request, contact us & we will do our best to make it happen!'
    },
    {
      q: 'How long does it take for your team to set up?',
      a: 'Setup times vary by service. Simple AV or an interactive stall takes 1 to 2 hours. Complex thematic stage setups, intricate lighting riggings, LED video walls, or heavy SFX installations can take anywhere from 4 to 12 hours. We always coordinate directly with the hotel/venue to ensure everything is flawlessly sound-checked well before your first guest arrives.'
    },
    {
      q: 'What is your payment policy?',
      a: 'To secure your date, artists, and materials, we require an advance payment upon signing the contract. The remaining balance is structured into milestones leading up to, or on the day of the event.'
    },
    {
      q: 'Can you provide GST invoices and corporate purchase order (PO) compliance?',
      a: 'Yes, 100%. 7Delights is a fully registered event management company providing GST compliant tax invoices, vendor onboarding documents, and corporate payment milestone processing.'
    },
    {
      q: 'Do you manage offsite retreats and team building excursions around Bangalore?',
      a: 'Yes! In addition to in-city ballroom summits, we manage complete turnkey corporate offsites at resorts in Coorg, Kabini, Chikmagalur, and outskirts of Bangalore including transport, obstacle races, and evening galas.'
    }
  ];

  const filteredCards = corporateCards.filter((card) => {
    const matchesTab = activeTab === 'all' || card.category === activeTab;
    const matchesSearch = 
      card.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      card.desc.toLowerCase().includes(searchQuery.toLowerCase()) ||
      card.tag.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesTab && matchesSearch;
  });

  return (
    <div className="bg-[#FFFDF9] min-h-screen">
      {/* 1. HERO SECTION */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#FFF5F7] via-[#FFFDF9] to-[#FFFDF9] pt-12 pb-14 md:pt-16 md:pb-18 border-b border-[#F5E6EC]">
        {/* Decorative blur glows */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#FFE8ED]/40 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#FFF3DF]/50 rounded-full blur-3xl pointer-events-none -ml-20 -mb-20"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FFE8ED] border border-[#FFD0DB] text-[#EE3775] text-xs md:text-sm font-semibold tracking-wide">
              <Briefcase className="w-4 h-4" />
              <span>Bangalore's Leading Corporate Event Management Partner</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#111A2E] tracking-tight leading-tight">
              Corporate Event Organizers in <br />
              <span className="text-[#EE3775] relative inline-block">
                Bangalore • 7Delights
                <GoldUnderline className="absolute -bottom-2 left-0 w-full h-3 text-[#EE3775]/40" />
              </span>
            </h1>

            <p className="text-base sm:text-lg text-[#5A6E85] leading-relaxed pt-2">
              Transforming corporate visions into extraordinary reality! From annual employee galas and leadership award summits to high-profile product launches, LED video walls, and team building retreats across Bengaluru.
            </p>

            {/* Quick Stats Pill Row */}
            <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
              <div className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white border border-[#F5E6EC] shadow-sm text-xs sm:text-sm text-[#111A2E] font-medium">
                <MapPin className="w-4 h-4 text-[#EE3775]" />
                <span>Pan-Bangalore &amp; Karnataka</span>
              </div>
              <div className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white border border-[#F5E6EC] shadow-sm text-xs sm:text-sm text-[#111A2E] font-medium">
                <Tv className="w-4 h-4 text-[#059669]" />
                <span>State-of-the-Art AV &amp; LED Walls</span>
              </div>
              <div className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white border border-[#F5E6EC] shadow-sm text-xs sm:text-sm text-[#111A2E] font-medium">
                <ShieldCheck className="w-4 h-4 text-[#7B61FF]" />
                <span>GST Compliant &amp; SLA Driven</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. SEARCH & FILTER TABS */}
      <section className="py-8 bg-white border-b border-[#F5E6EC] sticky top-16 md:top-20 z-20 shadow-sm/50 backdrop-blur-md bg-white/95">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Filter Tabs */}
            <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-none">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveTab(cat.id)}
                  className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all whitespace-nowrap cursor-pointer ${
                    activeTab === cat.id
                      ? 'bg-[#EE3775] text-white shadow-md shadow-[#EE3775]/20'
                      : 'bg-[#FFFDF9] text-[#5A6E85] hover:bg-[#FFE8ED] hover:text-[#EE3775] border border-[#F5E6EC]'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>

            {/* Search Input */}
            <div className="relative w-full md:w-72">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#5A6E85]" />
              <input
                type="text"
                placeholder="Search corporate services..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 text-xs sm:text-sm rounded-xl bg-[#FFFDF9] border border-[#F5E6EC] focus:outline-none focus:border-[#EE3775] transition-colors"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 3. CORPORATE CARDS GRID */}
      <section className="py-12 md:py-16 bg-[#FFFDF9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#111A2E] tracking-tight mb-3">Corporate Event Management Services</h2>
            <p className="text-sm sm:text-base text-[#5A6E85]">End-to-end planning and production for annual days, conferences, award nights, product launches, and team outbound events.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredCards.map((card) => (
              <div
                key={card.id}
                className="group bg-white rounded-2xl overflow-hidden border border-[#F5E6EC] shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between transform hover:-translate-y-1"
              >
                <div>
                  {/* Image container */}
                  <div className="relative aspect-[4/3] overflow-hidden bg-gray-100">
                    <img
                      src={card.image}
                      alt={card.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      onError={(e) => {
                        e.currentTarget.src = '/assets/corp-music-system.webp';
                      }}
                    />
                    <div className="absolute top-3 left-3">
                      <span className={`inline-block px-2.5 py-1 rounded-full text-xs font-bold border backdrop-blur-md ${card.badgeBg}`}>
                        {card.tag}
                      </span>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-5">
                    <h3 className="text-lg font-bold text-[#111A2E] group-hover:text-[#EE3775] transition-colors mb-2">
                      {card.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#5A6E85] line-clamp-3 leading-relaxed">
                      {card.desc}
                    </p>
                  </div>
                </div>

                {/* Card Action Buttons */}
                <div className="p-5 pt-0 border-t border-[#F5E6EC]/60 space-y-2.5 mt-2">
                  <a
                    href={card.slug}
                    onClick={(e) => {
                      if (card.slug.startsWith('#corporate-overview')) {
                        e.preventDefault();
                        const el = document.getElementById('corporate-overview');
                        if (el) el.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                    className="w-full flex items-center justify-center gap-1.5 py-2.5 rounded-xl bg-[#FFE8ED] hover:bg-[#EE3775] text-[#EE3775] hover:text-white font-semibold text-xs sm:text-sm transition-all"
                  >
                    <span>View {card.title}</span>
                    <ChevronRight className="w-4 h-4" />
                  </a>
                  <a
                    href="tel:+919980029977"
                    className="w-full flex items-center justify-center gap-1.5 py-2 rounded-xl bg-white hover:bg-gray-50 border border-[#F5E6EC] text-[#111A2E] text-xs font-semibold transition-all"
                  >
                    <Phone className="w-3.5 h-3.5 text-[#059669]" />
                    <span>Get Quote</span>
                  </a>
                </div>
              </div>
            ))}
          </div>

          {filteredCards.length === 0 && (
            <div className="text-center py-16 bg-white rounded-2xl border border-[#F5E6EC]">
              <Briefcase className="w-12 h-12 text-[#5A6E85]/40 mx-auto mb-3" />
              <h3 className="text-lg font-bold text-[#111A2E]">No corporate service found</h3>
              <p className="text-xs sm:text-sm text-[#5A6E85] mt-1">Try adjusting your filter or search query</p>
            </div>
          )}
        </div>
      </section>

      {/* 4. ABOUT CORPORATE EVENTS SECTION */}
      <section id="corporate-overview" className="py-14 md:py-18 bg-white border-y border-[#F5E6EC] scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Visual showcase */}
            <div className="lg:col-span-5 relative">
              <div className="rounded-2xl overflow-hidden shadow-xl border-4 border-white aspect-[4/3]">
                <img
                  src="/assets/corp-bull-ride.webp"
                  alt="Corporate Event Setup by 7Delights"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.currentTarget.src = '/assets/corporate-event-banner.webp';
                  }}
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-2xl shadow-xl border border-[#F5E6EC] hidden sm:flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-[#FFE8ED] flex items-center justify-center text-[#EE3775]">
                  <Trophy className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs text-[#5A6E85] font-medium">Turnkey Management</div>
                  <div className="text-sm font-bold text-[#111A2E]">100% Reliable Execution</div>
                </div>
              </div>
            </div>

            {/* Description Details */}
            <div className="lg:col-span-7 space-y-5">
              <span className="text-xs uppercase tracking-wider font-bold text-[#EE3775] bg-[#FFE8ED] px-3 py-1 rounded-md">
                Corporate Event Organizers — A 7DELIGHTS Specialty!
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#111A2E] leading-snug">
                Crafting Extraordinary Corporate Experiences That Leave a Lasting Impression
              </h2>
              <p className="text-base text-[#5A6E85] leading-relaxed">
                At 7delights, we specialize in organizing seamless, high-impact corporate events. Our team of experienced event planners is dedicated to transforming your company vision into reality, from executive retreats and conferences to grand annual galas and awards nights.
              </p>
              <p className="text-base text-[#5A6E85] leading-relaxed">
                With the richest production and AV infrastructure in Bangalore, our concert-grade sound equipment, intelligent beam lighting, and high-definition P2.9 LED displays create an electrifying ambiance that resonates with all attendees and stakeholders!
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div className="flex items-start gap-2.5 p-3 rounded-lg bg-[#FFFDF9] border border-[#F5E6EC]">
                  <CheckCircle2 className="w-5 h-5 text-[#059669] shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm text-[#111A2E] font-medium">Tailored solutions matching brand guidelines</span>
                </div>
                <div className="flex items-start gap-2.5 p-3 rounded-lg bg-[#FFFDF9] border border-[#F5E6EC]">
                  <CheckCircle2 className="w-5 h-5 text-[#059669] shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm text-[#111A2E] font-medium">Concert-grade JBL &amp; RCF audio rigs</span>
                </div>
                <div className="flex items-start gap-2.5 p-3 rounded-lg bg-[#FFFDF9] border border-[#F5E6EC]">
                  <CheckCircle2 className="w-5 h-5 text-[#059669] shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm text-[#111A2E] font-medium">Experienced English &amp; multilingual corporate emcees</span>
                </div>
                <div className="flex items-start gap-2.5 p-3 rounded-lg bg-[#FFFDF9] border border-[#F5E6EC]">
                  <CheckCircle2 className="w-5 h-5 text-[#059669] shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm text-[#111A2E] font-medium">Meticulous timeline adherence &amp; zero downtime</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. CORE STRENGTHS SECTION */}
      <section className="py-14 md:py-18 bg-[#FFF8FA] border-b border-[#F5E6EC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs uppercase tracking-wider font-bold text-[#EE3775] bg-white px-3 py-1 rounded-md border border-[#F5E6EC]">
              Our Professional Advantage
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#111A2E] mt-3">
              Why Top Corporates Partner with 7Delights
            </h2>
            <p className="text-sm sm:text-base text-[#5A6E85] mt-2">
              Uncompromising professional standards, state-of-the-art tech inventory, and experienced event crews.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {strengths.map((item, idx) => (
              <div 
                key={idx}
                className="p-6 rounded-2xl bg-white border border-[#F5E6EC] shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="w-12 h-12 rounded-xl bg-[#FFFDF9] border border-[#F5E6EC] flex items-center justify-center mb-4">
                  {item.icon}
                </div>
                <p className="text-base sm:text-lg font-bold text-[#111A2E] mb-2">{item.title}</p>
                <p className="text-xs sm:text-sm text-[#5A6E85] leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. FAQ SECTION */}
      <section className="py-14 md:py-18 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <span className="text-xs uppercase tracking-wider font-bold text-[#EE3775] bg-[#FFE8ED] px-3 py-1 rounded-md">
              Corporate FAQ
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#111A2E] mt-3">
              Frequently Asked Questions
            </h2>
            <p className="text-sm sm:text-base text-[#5A6E85] mt-2">
              Essential details regarding corporate event bookings, setup durations, and payment milestones.
            </p>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="border border-[#F5E6EC] rounded-xl overflow-hidden bg-[#FFFDF9] transition-colors"
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full py-4 px-5 text-left flex items-center justify-between gap-4 focus:outline-none"
                >
                  <span className="text-sm sm:text-base font-bold text-[#111A2E] flex items-center gap-2">
                    <HelpCircle className="w-4 h-4 text-[#EE3775] shrink-0" />
                    {faq.q}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-[#5A6E85] transition-transform duration-200 shrink-0 ${
                      openFaq === idx ? 'transform rotate-180 text-[#EE3775]' : ''
                    }`}
                  />
                </button>
                {openFaq === idx && (
                  <div className="px-5 pb-4 pt-1 text-xs sm:text-sm text-[#5A6E85] leading-relaxed border-t border-[#F5E6EC]/60 bg-white">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. BOTTOM CTA STRIP */}
      <section className="bg-gradient-to-r from-[#111A2E] to-[#1C2B4B] text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
            <div>
              <h3 className="text-xl sm:text-2xl font-bold tracking-tight">
                Planning Your Next Corporate Summit or Gala?
              </h3>
              <p className="text-sm text-gray-300 mt-1 max-w-xl">
                Get in touch with our corporate planners for comprehensive proposals, stage designs, and turnkey AV quotes.
              </p>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-3">
              <a
                href="tel:+919980029977"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-[#EE3775] hover:bg-[#D92C65] text-white font-semibold text-sm transition-all shadow-md"
              >
                <Phone className="w-4 h-4" />
                <span>+91 99800 29977</span>
              </a>
              <a
                href="https://wa.me/919980029977?text=Hi%207Delights,%20I'm%20planning%20a%20Corporate%20Event%20and%20want%20to%20request%20a%20proposal."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-[#25D366] hover:bg-[#20BA5A] text-white font-semibold text-sm transition-all shadow-md"
              >
                <span>WhatsApp RFP</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
