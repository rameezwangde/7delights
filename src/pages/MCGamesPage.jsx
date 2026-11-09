import React, { useState } from 'react';
import { 
  Clock, 
  MapPin, 
  Phone, 
  MessageCircle, 
  ShieldCheck, 
  Sparkles, 
  CheckCircle, 
  HelpCircle, 
  ChevronDown, 
  Award, 
  CheckCircle2, 
  Mic, 
  Smile, 
  Zap, 
  Star, 
  Users, 
  PartyPopper, 
  Gift, 
  Volume2, 
  Trophy 
} from 'lucide-react';
import { GoldUnderline } from '../components/Doodles';

export default function MCGamesPage() {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const gameActivities = [
    {
      title: 'High-Energy Party Games & Stage Challenges',
      desc: 'Interactive crowd favorites including musical chairs twists, freeze dance battles, relay races, balloon pop challenges, and teamwork games that get everyone moving.',
      tag: 'Stage Challenges',
      color: 'bg-[#FFE8ED] text-[#EE3775] border-[#FFD0DB]',
      image: '/assets/mc-games-scaled.webp'
    },
    {
      title: 'Karaoke Sing-Along & Dance Showdowns',
      desc: 'Lively karaoke face-offs, hook-step mimicry, and upbeat family dance sessions coordinated to current trending chartbusters and celebration anthems.',
      tag: 'Karaoke & Dance',
      color: 'bg-[#EDF5FF] text-[#2563EB] border-[#D0E2FF]',
      image: '/assets/emcee-games-scaled.webp'
    },
    {
      title: 'Theme-Based Trivia, Quizzes & Puzzles',
      desc: 'Custom-crafted trivia contests tailored around the birthday child’s favorite heroes, family stories, or corporate company milestones with prompt interactive banter.',
      tag: 'Trivia & Quizzes',
      color: 'bg-[#F2EDFF] text-[#7B61FF] border-[#E0D5FF]',
      image: '/assets/games-organizers.webp'
    },
    {
      title: 'Ceremony Hosting & Grand Award Distributings',
      desc: 'Dignified yet vivacious hosting for cake-cutting rituals, felicitation moments, and winner award distribution ceremonies that elevate stage importance.',
      tag: 'Grand Ceremonies',
      color: 'bg-[#EBF7F2] text-[#00A86B] border-[#C8EFE0]',
      image: '/assets/mc-scaled.webp'
    }
  ];

  const highlights = [
    {
      icon: <Mic className="w-5 h-5 text-[#EE3775]" />,
      title: 'Seasoned Bilingual Anchors',
      desc: 'Charismatic emcees fluent in English, Kannada, Hindi, and Tamil, skilled in reading crowd energy and ensuring everyone feels warmly included.'
    },
    {
      icon: <Users className="w-5 h-5 text-[#7B61FF]" />,
      title: 'All-Age Crowd Engagement',
      desc: 'From playful toddler party activities to engaging icebreakers for reserved elders and lively corporate team-building challenges.'
    },
    {
      icon: <PartyPopper className="w-5 h-5 text-[#FF7A00]" />,
      title: 'Customized Event Theme Games',
      desc: 'Games designed specifically around your party motif, cartoon themes, family dynamics, or corporate team goals.'
    },
    {
      icon: <ShieldCheck className="w-5 h-5 text-[#00A86B]" />,
      title: 'Punctual Coordination & Clean Pack-Up',
      desc: 'Our emcee arrives early with all required party props, whistle rings, and banners, leaving zero prop litter or mess on the event floor.'
    }
  ];

  const galleryImages = [
    { src: '/assets/mc-games-scaled.webp', alt: 'MC Games Party Host Bangalore', title: 'High-Energy Stage Games' },
    { src: '/assets/emcee-games-scaled.webp', alt: 'Master of Ceremony Bangalore', title: 'Interactive Dance & Music' },
    { src: '/assets/games-organizers.webp', alt: 'Event Games Organizers Bangalore', title: 'Group Fun Challenges' },
    { src: '/assets/mc-scaled.webp', alt: 'Party Emcee Bangalore', title: 'Award & Cake Ceremonies' },
    { src: '/assets/mc-games-banner.webp', alt: '7Delights MC Games Bangalore', title: 'Bilingual Anchor Stage' },
    { src: '/assets/mc-games-master-ceremony.webp', alt: 'Bangalore Emcee Services', title: 'Memorable Celebrations' }
  ];

  const faqs = [
    {
      q: 'How far in advance should I book 7Delights MC games / master of ceremony for my event?',
      a: 'To ensure maximum availability of our top-rated bilingual emcees and master of ceremonies, we recommend booking at least 1 to 6 weeks in advance for birthday celebrations & corporate events, and 3 to 6 months in advance for major weddings or annual corporate galas.'
    },
    {
      q: 'What is the duration of the MC Games session?',
      a: 'The standard performance duration is 1 hour 15 minutes (75 minutes) of continuous interactive stage games, comedy crowd banter, and ceremony anchoring. Extra hours can also be scheduled upon prior request.'
    },
    {
      q: 'How long does it take for your team to set up?',
      a: 'Our anchor arrives approximately 45 to 60 minutes prior to showtime to inspect sound levels, sync with the DJ/venue sound engineer, organize game props, and review the run-down sheet with the event host.'
    },
    {
      q: 'What are the organizer / venue requirements for MC Games?',
      a: 'The venue must provide standard audio amplification with 1–2 cordless microphones and background music arrangement. The host/client is requested to provide the winner gift prizes/chocolates for game participants.'
    },
    {
      q: 'What is your payment policy?',
      a: 'To secure your date and artist, we require an advance payment upon booking confirmation. The remaining balance is payable on the event day following completion of the anchoring session.'
    }
  ];

  return (
    <div className="min-h-screen bg-[#FFFDF9] text-[#111A2E]">
      {/* 1. Breadcrumb navigation */}
      <div className="bg-[#FFF8F0] border-b border-[#F4E8DC] py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-xs sm:text-sm text-[#5A6E85]">
            <a href="#" className="hover:text-[#EE3775] transition-colors">Home</a>
            <span>/</span>
            <a href="#shows-entertainment" className="hover:text-[#EE3775] transition-colors">Shows & Entertainment</a>
            <span>/</span>
            <span className="text-[#111A2E] font-medium">MC Games / Master of Ceremony</span>
          </nav>
        </div>
      </div>

      {/* 2. Hero Section */}
      <section className="relative overflow-hidden pt-8 pb-12 lg:pt-12 lg:pb-16 bg-gradient-to-b from-[#FFF8F0] via-[#FFFDF9] to-[#FFFDF9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Content Column */}
            <div className="lg:col-span-7 space-y-5">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#EBF7F2] border border-[#C8EFE0] text-xs font-semibold text-[#00A86B]">
                <Mic className="w-3.5 h-3.5" />
                <span>High-Energy Anchors • Interactive Party Games • Bilingual Emcees</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#111A2E] leading-tight">
                MC Games & Master of Ceremony in{' '}
                <span className="relative inline-block text-[#EE3775]">
                  Bangalore
                  <GoldUnderline className="absolute -bottom-2 left-0 w-full text-[#FFB703]" />
                </span>
              </h1>

              <p className="text-base sm:text-lg text-[#5A6E85] leading-relaxed">
                Play and enjoy top-tier MC Games that make your guests feel alive! 7Delights arranges seasoned, charismatic 
                Masters of Ceremony who host vibrant stage challenges, dance face-offs, quizzes, and celebrations with 
                unmatched showmanship, keeping your crowd laughing, bonding, and energized from start to finish.
              </p>

              {/* Service Badges */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
                <div className="p-3 bg-white rounded-xl border border-gray-100 shadow-sm flex items-center gap-2.5">
                  <Clock className="w-5 h-5 text-[#EE3775] flex-shrink-0" />
                  <div>
                    <div className="text-xs text-[#5A6E85]">Duration</div>
                    <div className="text-xs sm:text-sm font-bold text-[#111A2E]">1 Hr 15 Mins</div>
                  </div>
                </div>

                <div className="p-3 bg-white rounded-xl border border-gray-100 shadow-sm flex items-center gap-2.5">
                  <Volume2 className="w-5 h-5 text-[#7B61FF] flex-shrink-0" />
                  <div>
                    <div className="text-xs text-[#5A6E85]">Languages</div>
                    <div className="text-xs sm:text-sm font-bold text-[#111A2E]">Eng / Kan / Hin / Tam</div>
                  </div>
                </div>

                <div className="p-3 bg-white rounded-xl border border-gray-100 shadow-sm flex items-center gap-2.5 col-span-2 sm:col-span-1">
                  <MapPin className="w-5 h-5 text-[#00A86B] flex-shrink-0" />
                  <div>
                    <div className="text-xs text-[#5A6E85]">Coverage</div>
                    <div className="text-xs sm:text-sm font-bold text-[#111A2E]">All Across Bangalore</div>
                  </div>
                </div>
              </div>

              {/* CTAs */}
              <div className="flex flex-wrap items-center gap-3 pt-3">
                <a 
                  href="tel:+919980029977" 
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-[#EE3775] hover:bg-[#D62863] text-white font-bold text-sm shadow-md hover:shadow-lg transition-all duration-200"
                >
                  <Phone className="w-4 h-4" />
                  Book Party MC Now
                </a>
                <a 
                  href="https://wa.me/919980029977?text=Hi%207Delights,%20I%20would%20like%20to%20book%20an%20MC%20/%20Master%20of%20Ceremony%20for%20our%20upcoming%20event." 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-white hover:bg-gray-50 text-[#111A2E] font-bold text-sm border border-gray-200 shadow-sm hover:shadow transition-all duration-200"
                >
                  <MessageCircle className="w-4 h-4 text-[#25D366]" />
                  Instant WhatsApp Quote
                </a>
              </div>
            </div>

            {/* Right Image / Hero Card */}
            <div className="lg:col-span-5">
              <div className="relative mx-auto max-w-md lg:max-w-none">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white bg-white group">
                  <img 
                    src="/assets/mc-games-scaled.webp" 
                    alt="7Delights MC Games Master of Ceremony Bangalore" 
                    className="w-full h-[340px] sm:h-[400px] object-cover group-hover:scale-105 transition-transform duration-500"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = '/assets/mc-games-banner.webp';
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <span className="inline-block px-2.5 py-1 rounded bg-[#00A86B] text-[11px] font-bold tracking-wide uppercase mb-1">
                      Crowd Energy Leaders
                    </span>
                    <p className="text-lg font-bold">Bangalore’s Top Party Emcees</p>
                    <p className="text-xs text-white/90">Games, challenges, karaoke, and interactive ceremonies.</p>
                  </div>
                </div>

                {/* Floating pill badge */}
                <div className="absolute -top-3 -right-3 bg-white shadow-lg rounded-xl p-3 border border-gray-100 flex items-center gap-2.5">
                  <div className="w-10 h-10 rounded-lg bg-[#EBF7F2] flex items-center justify-center text-[#00A86B]">
                    <Trophy className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-[#111A2E]">Non-Stop Fun</div>
                    <div className="text-[10px] text-[#5A6E85]">100% Crowd Interaction</div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. Key Highlights */}
      <section className="py-10 bg-white border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#111A2E]">
              Why Choose 7Delights Masters of Ceremony?
            </h2>
            <p className="text-sm sm:text-base text-[#5A6E85] mt-2">
              Elevating birthdays, baby showers, naming ceremonies, corporate mixers, and family celebrations with warm hospitality and electric engagement.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {highlights.map((item, idx) => (
              <div 
                key={idx}
                className="p-5 rounded-xl bg-[#FFFDF9] border border-gray-100 hover:border-[#00A86B]/30 hover:shadow-md transition-all duration-200"
              >
                <div className="w-10 h-10 rounded-lg bg-white shadow-sm border border-gray-100 flex items-center justify-center mb-3">
                  {item.icon}
                </div>
                <p className="font-bold text-[#111A2E] text-base mb-1.5">{item.title}</p>
                <p className="text-xs sm:text-sm text-[#5A6E85] leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. MC Games & Activities Repertoire */}
      <section className="py-12 bg-[#FFF8F0]/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-[#00A86B] bg-[#EBF7F2] px-3 py-1 rounded-full">
              Engaging Formats
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#111A2E] mt-3">
              Experience a Jaw-Dropping Performance by Our MC Game Experts!
            </h2>
            <p className="text-sm sm:text-base text-[#5A6E85] mt-2">
              Our emcees organize structured party games that match your celebration timeline, venue size, and audience age brackets.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {gameActivities.map((act, idx) => (
              <div 
                key={idx}
                className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col group"
              >
                <div className="h-44 overflow-hidden relative bg-gray-100">
                  <img 
                    src={act.image} 
                    alt={act.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = '/assets/mc-games-banner.webp';
                    }}
                  />
                  <span className={`absolute top-3 left-3 text-[11px] font-semibold px-2.5 py-0.5 rounded-full border ${act.color}`}>
                    {act.tag}
                  </span>
                </div>
                <div className="p-5 flex-1 flex flex-col">
                  <h3 className="font-bold text-[#111A2E] text-base mb-2 group-hover:text-[#00A86B] transition-colors">
                    {act.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#5A6E85] leading-relaxed flex-1">
                    {act.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Setup & Coordination Reassurance */}
      <section className="py-10 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-[#111A2E] to-[#1E293B] rounded-2xl p-6 sm:p-8 text-white relative overflow-hidden shadow-xl">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#00A86B]/10 rounded-full blur-3xl pointer-events-none" />
            
            <div className="relative z-10 grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
              <div className="md:col-span-8 space-y-3">
                <span className="text-xs font-bold uppercase tracking-wider text-[#FFB703] bg-white/10 px-3 py-1 rounded-full">
                  Organized & Tidy
                </span>
                <h3 className="text-xl sm:text-2xl font-bold">
                  Sit Back & Watch Our Professionals Lead the Stage Effortlessly!
                </h3>
                <p className="text-sm text-gray-300 leading-relaxed">
                  Our MC experts carry all necessary game props, balloons, and whistles. After the activity concludes, 
                  our hosts ensure that no wrappers, prop pieces, or balloon scraps remain littered on the floor.
                </p>
                <div className="flex flex-wrap gap-4 pt-2 text-xs text-gray-200">
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-[#00A86B]" />
                    <span>75 Mins of Non-Stop Entertainment</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-[#00A86B]" />
                    <span>All Game Materials & Props Included</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-[#00A86B]" />
                    <span>Clean Post-Activity Floor Pack Up</span>
                  </div>
                </div>
              </div>

              <div className="md:col-span-4 flex flex-col gap-3">
                <a 
                  href="tel:+919980029977" 
                  className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-[#EE3775] hover:bg-[#D62863] text-white font-bold text-sm shadow transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  +91 99800 29977
                </a>
                <a 
                  href="#faq-section" 
                  className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold text-sm transition-colors"
                >
                  <HelpCircle className="w-4 h-4" />
                  View Event FAQs
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Photo Gallery Grid */}
      <section className="py-12 bg-[#FFFDF9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <span className="text-xs font-bold uppercase tracking-wider text-[#00A86B] bg-[#EBF7F2] px-3 py-1 rounded-full">
              Live Celebration Moments
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#111A2E] mt-3">
              MC Games & Ceremony Gallery
            </h2>
            <p className="text-sm sm:text-base text-[#5A6E85] mt-2">
              Witness the laughter, active team participation, and cheerful bonding coordinated by our master anchors across Bangalore parties.
            </p>
          </div>

          {/* Photo Gallery Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
            {galleryImages.map((img, idx) => (
              <div 
                key={idx}
                className="group relative rounded-xl overflow-hidden bg-white border border-gray-100 shadow-sm aspect-square"
              >
                <img 
                  src={img.src} 
                  alt={img.alt} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = '/assets/mc-games-banner.webp';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-2.5">
                  <span className="text-[11px] font-medium text-white leading-tight">
                    {img.title}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. FAQs Section */}
      <section id="faq-section" className="py-12 bg-[#FFF8F0]/60 border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-xl mx-auto mb-8">
            <span className="text-xs font-bold uppercase tracking-wider text-[#00A86B] bg-[#EBF7F2] px-3 py-1 rounded-full">
              Got Questions?
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#111A2E] mt-3">
              Event FAQ ?
            </h2>
            <p className="text-sm text-[#5A6E85] mt-2">
              Everything you need to know about booking, requirements, and timing for 7Delights MC Games & Masters of Ceremony.
            </p>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, idx) => (
              <div 
                key={idx}
                className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm"
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full px-5 py-4 text-left flex items-center justify-between gap-4 font-bold text-sm sm:text-base text-[#111A2E] hover:text-[#00A86B] transition-colors"
                >
                  <span>{faq.q}</span>
                  <ChevronDown className={`w-5 h-5 flex-shrink-0 text-[#5A6E85] transition-transform duration-200 ${openFaq === idx ? 'rotate-180 text-[#00A86B]' : ''}`} />
                </button>
                {openFaq === idx && (
                  <div className="px-5 pb-4 pt-1 text-xs sm:text-sm text-[#5A6E85] leading-relaxed border-t border-gray-100 bg-gray-50/50">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Direct Support Card */}
          <div className="mt-8 p-5 rounded-xl bg-white border border-[#00A86B]/20 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <h3 className="font-bold text-[#111A2E] text-sm sm:text-base">Need a custom game rundown or corporate team-building script?</h3>
              <p className="text-xs text-[#5A6E85] mt-0.5">Consult directly with our Bangalore event entertainment planners.</p>
            </div>
            <a 
              href="tel:+919980029977" 
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#EE3775] text-white text-xs sm:text-sm font-bold hover:bg-[#D62863] shadow-sm transition-colors whitespace-nowrap"
            >
              <Phone className="w-3.5 h-3.5" />
              Call +91 99800 29977
            </a>
          </div>

          {/* Back to Hub Navigation */}
          <div className="mt-8 text-center">
            <a 
              href="#shows-entertainment" 
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#EE3775] hover:text-[#D62863] transition-colors"
            >
              ← Back to Shows & Entertainment Hub
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

