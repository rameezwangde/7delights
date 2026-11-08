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
  Wand2, 
  Smile, 
  Zap, 
  Star, 
  Users, 
  Eye, 
  Layers, 
  Coffee 
} from 'lucide-react';
import { GoldUnderline } from '../components/Doodles';

export default function MagicShowWalkAroundPage() {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const closeUpStyles = [
    {
      title: 'Interactive Table-to-Table Strolling Magic',
      desc: 'Our strolling magician visits dining tables and cocktail clusters, performing personalized mini-shows right under your guests’ noses while sparking laughter and lively conversation.',
      tag: 'Table Strolling',
      color: 'bg-[#FFE8ED] text-[#EE3775] border-[#FFD0DB]',
      image: '/assets/magic-shows-walk-around.webp'
    },
    {
      title: 'Mind-Boggling Sleight of Hand & Cards',
      desc: 'Intricate micro-illusions with signed playing cards, borrowed rings appearing in sealed envelopes, rubber bands melting through each other, and vanishing coins right in the spectator’s hand.',
      tag: 'Close-Up Sleights',
      color: 'bg-[#EDF5FF] text-[#2563EB] border-[#D0E2FF]',
      image: '/assets/magic-scaled.webp'
    },
    {
      title: 'Close-Up Mentalism & Telepathic Feats',
      desc: 'Intimate psychological illusions, reading PIN numbers or secret words thought of by attendees, and predicting spontaneous guest decisions right before their eyes.',
      tag: 'Intimate Mind Reading',
      color: 'bg-[#F2EDFF] text-[#7B61FF] border-[#E0D5FF]',
      image: '/assets/magic-show-scaled.webp'
    },
    {
      title: 'Kids & Family Interactive Surprises',
      desc: 'Special quick-fire pocket tricks, sponge bunnies multiplying in small hands, color-changing silks, and cheerful comedy tailored specially for little guests across the party hall.',
      tag: 'Kids Wonder',
      color: 'bg-[#EBF7F2] text-[#00A86B] border-[#C8EFE0]',
      image: '/assets/magic-stage-scaled.webp'
    }
  ];

  const highlights = [
    {
      icon: <Eye className="w-5 h-5 text-[#EE3775]" />,
      title: 'Right-Before-Your-Eyes Illusions',
      desc: 'No stage barriers, camera tricks, or distance. Magic happens directly in the spectator’s own palms and inches away from their eyes.'
    },
    {
      icon: <Users className="w-5 h-5 text-[#7B61FF]" />,
      title: 'Perfect Event Icebreaker',
      desc: 'Seamlessly fills lulls during cocktail hours, dinner service, and guest arrivals, getting strangers talking and laughing together.'
    },
    {
      icon: <Sparkles className="w-5 h-5 text-[#FF7A00]" />,
      title: 'Zero Bulky Stage Requirements',
      desc: 'Our roving magician carries all pocket illusions and accessories on-person, requiring zero stage platform, projector, or heavy equipment.'
    },
    {
      icon: <ShieldCheck className="w-5 h-5 text-[#00A86B]" />,
      title: 'Tailored for All Event Themes',
      desc: 'From high-end corporate networking galas and wedding receptions to intimate birthday banquets and housewarmings.'
    }
  ];

  const galleryImages = [
    { src: '/assets/magic-shows-walk-around.webp', alt: 'Walk Around Magic Performance Bangalore', title: 'Table-to-Table Strolling' },
    { src: '/assets/magic-scaled.webp', alt: 'Close-Up Sleight of Hand Bangalore', title: 'Mind-Boggling Micro Magic' },
    { src: '/assets/magic-show-scaled.webp', alt: 'Interactive Magician Bangalore', title: 'Close-Up Spectator Joy' },
    { src: '/assets/magic-stage-scaled.webp', alt: 'Family Close-Up Magic Bangalore', title: 'Family & Kids Wonders' },
    { src: '/assets/magic-walk-around-banner.webp', alt: '7Delights Walk Around Magic Bangalore', title: 'Intimate Prestidigitation' },
    { src: '/assets/magic-shows.webp', alt: 'Bangalore Magicians Close-Up', title: 'Telepathy & Cards' }
  ];

  const faqs = [
    {
      q: 'How far in advance should I book 7Delights magic show walk around for my event?',
      a: 'To ensure maximum availability of our professional walk-around close-up magicians, we recommend booking at least 1 to 6 weeks in advance for birthdays & corporate dinners, and 3 to 6 months in advance for large wedding receptions or annual corporate galas. Last-minute requests are also welcomed depending on artist availability.'
    },
    {
      q: 'How long is the Walk-Around Magic performance duration?',
      a: 'The standard performance duration is 1.5 hours (90 minutes) of continuous strolling interaction across different dining tables, cocktail areas, and guest groups.'
    },
    {
      q: 'How long does it take for your team to set up?',
      a: 'Walk-around magic requires almost zero physical setup! The artist arrives 30 to 45 minutes prior to familiarize themselves with the venue layout, coordinate with event hosts, and start strolling smoothly as guests arrive.'
    },
    {
      q: 'What are the organizer / venue requirements for Walk-Around Magic?',
      a: 'Unlike stage shows, no stage or microphone is needed! The magician only requires a secure green room or corner to change into formal magician attire and store pocket props.'
    },
    {
      q: 'What is your payment policy?',
      a: 'To secure your date and artist, we require an advance payment upon booking confirmation. The remaining balance is payable on the event day following completion of the performance.'
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
            <span className="text-[#111A2E] font-medium">Magic Show Walk Around</span>
          </nav>
        </div>
      </div>

      {/* 2. Hero Section */}
      <section className="relative overflow-hidden pt-8 pb-12 lg:pt-12 lg:pb-16 bg-gradient-to-b from-[#FFF8F0] via-[#FFFDF9] to-[#FFFDF9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Content Column */}
            <div className="lg:col-span-7 space-y-5">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#F2EDFF] border border-[#E0D5FF] text-xs font-semibold text-[#7B61FF]">
                <Wand2 className="w-3.5 h-3.5" />
                <span>Close-Up Table Magic • Strolling Illusionist • Icebreaker Entertainment</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#111A2E] leading-tight">
                Magic Show Walk Around in{' '}
                <span className="relative inline-block text-[#EE3775]">
                  Bangalore
                  <GoldUnderline className="absolute -bottom-2 left-0 w-full text-[#FFB703]" />
                </span>
              </h1>

              <p className="text-base sm:text-lg text-[#5A6E85] leading-relaxed">
                Want your guests to experience marvelous close-up magic happening inches away from their eyes? 
                7Delights provides master strolling magicians who mingle effortlessly with your guests across tables 
                and cocktail lounges, performing astonishing sleight-of-hand, mind reading, and light-hearted humor 
                that transforms normal parties into extraordinary celebrations.
              </p>

              {/* Service Badges */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
                <div className="p-3 bg-white rounded-xl border border-gray-100 shadow-sm flex items-center gap-2.5">
                  <Clock className="w-5 h-5 text-[#EE3775] flex-shrink-0" />
                  <div>
                    <div className="text-xs text-[#5A6E85]">Duration</div>
                    <div className="text-xs sm:text-sm font-bold text-[#111A2E]">1 Hr 30 Mins</div>
                  </div>
                </div>

                <div className="p-3 bg-white rounded-xl border border-gray-100 shadow-sm flex items-center gap-2.5">
                  <Layers className="w-5 h-5 text-[#7B61FF] flex-shrink-0" />
                  <div>
                    <div className="text-xs text-[#5A6E85]">Style</div>
                    <div className="text-xs sm:text-sm font-bold text-[#111A2E]">Table-to-Table / Roving</div>
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
                  Book Walk-Around Magic
                </a>
                <a 
                  href="https://wa.me/919980029977?text=Hi%207Delights,%20I%20would%20like%20to%20book%20a%20Walk-Around%20Magic%20Show%20for%20our%20upcoming%20event." 
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
                    src="/assets/magic-shows-walk-around.webp" 
                    alt="7Delights Magic Show Walk Around Bangalore" 
                    className="w-full h-[340px] sm:h-[400px] object-cover group-hover:scale-105 transition-transform duration-500"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = '/assets/magic-walk-around-banner.webp';
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <span className="inline-block px-2.5 py-1 rounded bg-[#7B61FF] text-[11px] font-bold tracking-wide uppercase mb-1">
                      Close-Up Illusionist
                    </span>
                    <h3 className="text-lg font-bold">Bangalore’s Best Strolling Magicians</h3>
                    <p className="text-xs text-white/90">Intimate sleights, mind-reading, and instant icebreaking fun.</p>
                  </div>
                </div>

                {/* Floating pill badge */}
                <div className="absolute -top-3 -right-3 bg-white shadow-lg rounded-xl p-3 border border-gray-100 flex items-center gap-2.5">
                  <div className="w-10 h-10 rounded-lg bg-[#F2EDFF] flex items-center justify-center text-[#7B61FF]">
                    <Award className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-[#111A2E]">Hands-On Magic</div>
                    <div className="text-[10px] text-[#5A6E85]">100% In-Hand Wonder</div>
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
              Why Choose Walk-Around Close-Up Magic?
            </h2>
            <p className="text-sm sm:text-base text-[#5A6E85] mt-2">
              Transforming corporate cocktails, wedding receptions, birthday dinners, and banquets with intimate, high-impact entertainment.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {highlights.map((item, idx) => (
              <div 
                key={idx}
                className="p-5 rounded-xl bg-[#FFFDF9] border border-gray-100 hover:border-[#7B61FF]/30 hover:shadow-md transition-all duration-200"
              >
                <div className="w-10 h-10 rounded-lg bg-white shadow-sm border border-gray-100 flex items-center justify-center mb-3">
                  {item.icon}
                </div>
                <h3 className="font-bold text-[#111A2E] text-base mb-1.5">{item.title}</h3>
                <p className="text-xs sm:text-sm text-[#5A6E85] leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Close-Up Repertoire */}
      <section className="py-12 bg-[#FFF8F0]/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-[#7B61FF] bg-[#F2EDFF] px-3 py-1 rounded-full">
              Your Theme, Our Magic
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#111A2E] mt-3">
              Delight Your Special Event with a Close-up Magic Performance!
            </h2>
            <p className="text-sm sm:text-base text-[#5A6E85] mt-2">
              Our magicians believe in entertaining your guests with fun magic tricks and techniques that match your party theme and audience demographics.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {closeUpStyles.map((style, idx) => (
              <div 
                key={idx}
                className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col group"
              >
                <div className="h-44 overflow-hidden relative bg-gray-100">
                  <img 
                    src={style.image} 
                    alt={style.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = '/assets/magic-walk-around-banner.webp';
                    }}
                  />
                  <span className={`absolute top-3 left-3 text-[11px] font-semibold px-2.5 py-0.5 rounded-full border ${style.color}`}>
                    {style.tag}
                  </span>
                </div>
                <div className="p-5 flex-1 flex flex-col">
                  <h3 className="font-bold text-[#111A2E] text-base mb-2 group-hover:text-[#7B61FF] transition-colors">
                    {style.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#5A6E85] leading-relaxed flex-1">
                    {style.desc}
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
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#7B61FF]/10 rounded-full blur-3xl pointer-events-none" />
            
            <div className="relative z-10 grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
              <div className="md:col-span-8 space-y-3">
                <span className="text-xs font-bold uppercase tracking-wider text-[#FFB703] bg-white/10 px-3 py-1 rounded-full">
                  Zero Technical Logistics
                </span>
                <h3 className="text-xl sm:text-2xl font-bold">
                  Sit Back & Watch Our Magicians Mingle & Engage Your Guests!
                </h3>
                <p className="text-sm text-gray-300 leading-relaxed">
                  With 7Delights walk-around magic, there is zero stress about stage dimensions, sound wiring, or complex cleanup. 
                  Our artists carry all props in tailored suit pockets, moving gracefully among your guests from start to finish.
                </p>
                <div className="flex flex-wrap gap-4 pt-2 text-xs text-gray-200">
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-[#00A86B]" />
                    <span>No Stage or Sound Equipment Needed</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-[#00A86B]" />
                    <span>90 Minutes of Roving Entertainment</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-[#00A86B]" />
                    <span>Engages Diners & Cocktail Guests</span>
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
            <span className="text-xs font-bold uppercase tracking-wider text-[#7B61FF] bg-[#F2EDFF] px-3 py-1 rounded-full">
              Close-Up Magic Gallery
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#111A2E] mt-3">
              Intimate Sleight-of-Hand in Action
            </h2>
            <p className="text-sm sm:text-base text-[#5A6E85] mt-2">
              Witness the astonishment and smiles as guests experience personalized miracles right before their eyes across Bangalore venues.
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
                    e.target.src = '/assets/magic-walk-around-banner.webp';
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
            <span className="text-xs font-bold uppercase tracking-wider text-[#7B61FF] bg-[#F2EDFF] px-3 py-1 rounded-full">
              Got Questions?
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#111A2E] mt-3">
              Event FAQ ?
            </h2>
            <p className="text-sm text-[#5A6E85] mt-2">
              Everything you need to know about booking, requirements, and timing for 7Delights Walk-Around Close-Up Magic.
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
                  className="w-full px-5 py-4 text-left flex items-center justify-between gap-4 font-bold text-sm sm:text-base text-[#111A2E] hover:text-[#7B61FF] transition-colors"
                >
                  <span>{faq.q}</span>
                  <ChevronDown className={`w-5 h-5 flex-shrink-0 text-[#5A6E85] transition-transform duration-200 ${openFaq === idx ? 'rotate-180 text-[#7B61FF]' : ''}`} />
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
          <div className="mt-8 p-5 rounded-xl bg-white border border-[#7B61FF]/20 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <h4 className="font-bold text-[#111A2E] text-sm sm:text-base">Planning a corporate mixer, wedding dinner, or private party?</h4>
              <p className="text-xs text-[#5A6E85] mt-0.5">Let our event advisors customize the strolling magician duration for your guest count.</p>
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

