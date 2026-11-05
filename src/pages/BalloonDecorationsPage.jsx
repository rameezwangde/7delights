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
  PartyPopper, 
  Smile, 
  Trophy, 
  CheckCircle2, 
  Layers, 
  Headphones, 
  Award,
  ChevronDown,
  HelpCircle,
  Palette,
  Heart
} from 'lucide-react';
import { GoldUnderline } from '../components/Doodles';

export default function BalloonDecorationsPage() {
  const [activeTab, setActiveTab] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const categories = [
    { id: 'all', label: 'All Balloon Decorations' },
    { id: 'theme', label: 'Theme & Concept Decor' },
    { id: 'helium', label: 'Helium & Floating' },
    { id: 'birthday', label: 'Birthday Special' },
  ];

  // 4 authentic decoration categories from https://www.7delights.in/birthday-balloon-decorations/
  const decorCards = [
    {
      id: 1,
      title: 'Balloon Decoration',
      slug: '#balloon-decorations/general',
      category: 'birthday',
      image: '/assets/balloon-decoration-card.webp',
      tag: 'Classic Decor',
      badgeBg: 'bg-[#FFE8ED] text-[#EE3775] border-[#FFD0DB]',
      desc: 'Our balloon decoration ideas have brought us decent recognition among clients. Transforming halls into vibrant celebratory havens!',
    },
    {
      id: 2,
      title: 'Theme Decoration',
      slug: '#balloon-decorations/theme-decorations',
      category: 'theme',
      image: '/assets/theme-decoration-card.webp',
      tag: 'Custom Themes',
      badgeBg: 'bg-[#FFF3DF] text-[#D97706] border-[#FFE4B8]',
      desc: 'Our experts create exciting theme and décor ideas on special client requests—from Jungle Safari to Space Galaxy and Fairytale Castles!',
    },
    {
      id: 3,
      title: 'Birthday Decorations',
      slug: '#balloon-decorations/birthday-decorations',
      category: 'birthday',
      image: '/assets/birthday-decorations-card.webp',
      tag: 'Birthday Special',
      badgeBg: 'bg-[#F2EDFF] text-[#7B61FF] border-[#E0D5FF]',
      desc: 'We are committed to bringing the best birthday decorations to meet your fascination, complete with balloon arches, ring backdrops, and pillars!',
    },
    {
      id: 4,
      title: 'Helium Gas Balloons',
      slug: '#balloon-decorations/helium-gas-balloons',
      category: 'helium',
      image: '/assets/helium-balloons-card.webp',
      tag: 'Helium Balloons',
      badgeBg: 'bg-[#E3F8F2] text-[#059669] border-[#C1F1E1]',
      desc: 'Without colorful helium gas balloons, your décor ideas would seem incomplete! Polka dots, chrome metallics, and ceiling floating bunches.',
    },
  ];

  const strengths = [
    {
      title: 'Team of Expert Balloon Decorators',
      desc: 'Due to their modern and nostalgic touch and impact, balloons require special handling! We have talented decorators with proven skills to create fairy-tale venues.',
      icon: <Users className="w-6 h-6 text-[#EE3775]" />,
    },
    {
      title: 'Customizable Theme Decoration',
      desc: 'Meeting your dream and fascination becomes a priority for us, and we do it with all our strength! Tailored palettes, arches, and cartoon setups.',
      icon: <Palette className="w-6 h-6 text-[#7B61FF]" />,
    },
    {
      title: 'Rich Decor Infrastructure',
      desc: 'We have the richest décor infrastructure in Bangalore! We continually enrich it with arches, backdrops, neon signs, and floral balloon accents.',
      icon: <Layers className="w-6 h-6 text-[#059669]" />,
    },
    {
      title: '24/7 Dedicated Customer Service',
      desc: 'Our team of caring executives is available round-the-clock to assist with all your queries, customized packages, and on-time schedules.',
      icon: <Headphones className="w-6 h-6 text-[#D97706]" />,
    },
    {
      title: 'Best Competent Tech Professionals',
      desc: 'We are proud of our robust and best-in-class tech professionals for their impeccable rigging, electric inflators, and safe installation skills.',
      icon: <Award className="w-6 h-6 text-[#3B82F6]" />,
    },
    {
      title: 'Nostalgic Magic for All Ages',
      desc: 'Balloons have the unique capability to add warmth and wonder to any room, delighting toddlers, kids, and adults alike.',
      icon: <Smile className="w-6 h-6 text-[#EC4899]" />,
    },
  ];

  const faqs = [
    {
      q: 'How far in advance should I book 7Delights birthday balloon decorations for my event?',
      a: 'To ensure maximum availability of premium artists, specific themes, & equipment, we recommend booking at least 1 to 6 weeks in advance for social parties & corporate events, and 3 to 6 months in advance for major weddings or large-scale corporate launches. However, if you have a last-minute request, contact us & we will do our best to make it happen!'
    },
    {
      q: 'How long does it take for your team to set up?',
      a: 'Setup times vary by service. Simple balloon decorations or a single interactive stall may take 1 to 2 hours. Complex thematic stage setups, intricate lighting riggings, or heavy SFX installations can take anywhere from 4 to 12 hours. We always coordinate directly with the venue to ensure everything is flawlessly set up well before your first guest arrives.'
    },
    {
      q: 'What is your payment policy?',
      a: 'To secure your date, artists, and materials, we require an advance payment upon signing the contract. The remaining balance is structured into milestones leading up to, or on the day of the event.'
    },
    {
      q: 'Do you use safe, premium quality balloons?',
      a: 'Yes, we use 100% biodegradable, high-grade latex balloons and pure certified helium (completely non-toxic and non-flammable) for floating arrangements.'
    },
    {
      q: 'Can you customize balloon decorations according to my party theme?',
      a: 'Absolutely! Whether you want pastel organic balloon garlands, neon glow balloons, superhero arches, or elegant metallic chrome ring backdrops, our team crafts bespoke designs to match your vision.'
    }
  ];

  const filteredCards = decorCards.filter((card) => {
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
              <PartyPopper className="w-4 h-4" />
              <span>Bangalore's Premier Balloon Styling Specialists</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#111A2E] tracking-tight leading-tight">
              Balloon Decorations by <br />
              <span className="text-[#EE3775] relative inline-block">
                7Delights Bangalore
                <GoldUnderline className="absolute -bottom-2 left-0 w-full h-3 text-[#EE3775]/40" />
              </span>
            </h1>

            <p className="text-base sm:text-lg text-[#5A6E85] leading-relaxed pt-2">
              Transform your event venue into a breathtaking wonderland! From whimsical children's birthday balloon arches to sophisticated metallic chrome ring backdrops and ceiling floating helium balloons, 7Delights brings fairy-tale magic to life across Bangalore.
            </p>

            {/* Quick Stats Pill Row */}
            <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
              <div className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white border border-[#F5E6EC] shadow-sm text-xs sm:text-sm text-[#111A2E] font-medium">
                <MapPin className="w-4 h-4 text-[#EE3775]" />
                <span>All Over Bangalore</span>
              </div>
              <div className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white border border-[#F5E6EC] shadow-sm text-xs sm:text-sm text-[#111A2E] font-medium">
                <Palette className="w-4 h-4 text-[#059669]" />
                <span>Custom Themes &amp; Colors</span>
              </div>
              <div className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white border border-[#F5E6EC] shadow-sm text-xs sm:text-sm text-[#111A2E] font-medium">
                <ShieldCheck className="w-4 h-4 text-[#7B61FF]" />
                <span>100% Safe &amp; Biodegradable</span>
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
                placeholder="Search balloon decor..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 text-xs sm:text-sm rounded-xl bg-[#FFFDF9] border border-[#F5E6EC] focus:outline-none focus:border-[#EE3775] transition-colors"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 3. BALLOON DECOR CARDS GRID */}
      <section className="py-12 md:py-16 bg-[#FFFDF9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
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
                        e.currentTarget.src = '/assets/balloon-decoration-card.webp';
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
                    <span>Book Now</span>
                  </a>
                </div>
              </div>
            ))}
          </div>

          {filteredCards.length === 0 && (
            <div className="text-center py-16 bg-white rounded-2xl border border-[#F5E6EC]">
              <PartyPopper className="w-12 h-12 text-[#5A6E85]/40 mx-auto mb-3" />
              <h3 className="text-lg font-bold text-[#111A2E]">No balloon decoration found</h3>
              <p className="text-xs sm:text-sm text-[#5A6E85] mt-1">Try adjusting your filter or search query</p>
            </div>
          )}
        </div>
      </section>

      {/* 4. ABOUT BALLOON DECORATION & EXPERTISE */}
      <section className="py-14 md:py-18 bg-white border-y border-[#F5E6EC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Visual showcase */}
            <div className="lg:col-span-5 relative">
              <div className="rounded-2xl overflow-hidden shadow-xl border-4 border-white aspect-[4/3]">
                <img
                  src="/assets/birthday-space-theme.webp"
                  alt="Birthday Theme Decoration by 7Delights"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.currentTarget.src = '/assets/theme-decoration-card.webp';
                  }}
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-2xl shadow-xl border border-[#F5E6EC] hidden sm:flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-[#FFE8ED] flex items-center justify-center text-[#EE3775]">
                  <Sparkles className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs text-[#5A6E85] font-medium">Bangalore Specialists</div>
                  <div className="text-sm font-bold text-[#111A2E]">100% Fairy-Tale Magic</div>
                </div>
              </div>
            </div>

            {/* Description Details */}
            <div className="lg:col-span-7 space-y-5">
              <span className="text-xs uppercase tracking-wider font-bold text-[#EE3775] bg-[#FFE8ED] px-3 py-1 rounded-md">
                7DELIGHTS.in — Home For Exquisite Balloon Decoration
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#111A2E] leading-snug">
                Infusing Warmth, Color, and Childhood Wonder into Every Celebration
              </h2>
              <p className="text-base text-[#5A6E85] leading-relaxed">
                Balloons are traditional décor items that have the capability to add a touch of nostalgia to the whole décor concept. Though decorators prefer using balloons for birthdays and kids’ occasions, 7DELIGHTS finds them perfect for all celebratory decoration requirements—from milestone baby showers and anniversaries to corporate gala entrances.
              </p>
              <p className="text-base text-[#5A6E85] leading-relaxed">
                We partner with leading manufacturers who supply an extensive array of vibrant, non-toxic, and biodegradable balloons. Due to their modern design and nostalgic impact, balloons require special handling! We have the most talented and experienced balloon decorators in Bangalore who know exactly how to maximize visual appeal.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div className="flex items-start gap-2.5 p-3 rounded-lg bg-[#FFFDF9] border border-[#F5E6EC]">
                  <CheckCircle2 className="w-5 h-5 text-[#059669] shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm text-[#111A2E] font-medium">100% Customized theme and color combinations</span>
                </div>
                <div className="flex items-start gap-2.5 p-3 rounded-lg bg-[#FFFDF9] border border-[#F5E6EC]">
                  <CheckCircle2 className="w-5 h-5 text-[#059669] shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm text-[#111A2E] font-medium">Certified helium gas with zero flammability</span>
                </div>
                <div className="flex items-start gap-2.5 p-3 rounded-lg bg-[#FFFDF9] border border-[#F5E6EC]">
                  <CheckCircle2 className="w-5 h-5 text-[#059669] shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm text-[#111A2E] font-medium">On-time venue arrival &amp; clean post-event teardown</span>
                </div>
                <div className="flex items-start gap-2.5 p-3 rounded-lg bg-[#FFFDF9] border border-[#F5E6EC]">
                  <CheckCircle2 className="w-5 h-5 text-[#059669] shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm text-[#111A2E] font-medium">Richest decor infrastructure in Bangalore</span>
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
              Our Core Strengths
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#111A2E] mt-3">
              Why Choose 7Delights for Balloon Decorations?
            </h2>
            <p className="text-sm sm:text-base text-[#5A6E85] mt-2">
              From creative concept designs to punctual on-site execution, we deliver an impeccable decor experience.
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
                <h3 className="text-base sm:text-lg font-bold text-[#111A2E] mb-2">{item.title}</h3>
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
              Got Questions?
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#111A2E] mt-3">
              Frequently Asked Questions
            </h2>
            <p className="text-sm sm:text-base text-[#5A6E85] mt-2">
              Helpful answers on balloon styling, booking lead times, and setup procedures.
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
                Plan Magical Balloon Decorations for Your Event
              </h3>
              <p className="text-sm text-gray-300 mt-1 max-w-xl">
                Call our styling experts now for bespoke balloon arches, theme setups, and helium bouquets in Bangalore.
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
                href="https://wa.me/919980029977?text=Hi%207Delights,%20I'm%20looking%20for%20Balloon%20Decorations%20for%20my%20event."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-[#25D366] hover:bg-[#20BA5A] text-white font-semibold text-sm transition-all shadow-md"
              >
                <span>WhatsApp Quote</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

