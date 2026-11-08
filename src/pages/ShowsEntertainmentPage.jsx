import React, { useState } from 'react';
import {
  Sparkles,
  Phone,
  MessageCircle,
  Clock,
  Award,
  ShieldCheck,
  CheckCircle2,
  ChevronRight,
  ChevronDown,
  HelpCircle,
  Search,
  Sliders,
  Layers,
  Sparkle,
  Smile,
  PartyPopper,
  Theater,
  Wand2,
  Mic,
  Drama
} from 'lucide-react';
import { GoldUnderline } from '../components/Doodles';

export default function ShowsEntertainmentPage() {
  const [activeTab, setActiveTab] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const categories = [
    { id: 'all', label: 'All Shows' },
    { id: 'magic', label: 'Magic & Illusion' },
    { id: 'clowns', label: 'Clowns & Jugglers' },
    { id: 'performers', label: 'Puppets & Sand Art' },
    { id: 'emcee', label: 'Emcee & Storytelling' },
  ];

  // 13 Authentic Shows & Entertainment Services from https://www.7delights.in/shows-entertainment/
  const showCards = [
    {
      id: 1,
      title: 'Puppet Shows',
      category: 'performers',
      image: '/assets/puppet-shows.webp',
      tag: 'Classic Puppet Theatre',
      badgeBg: 'bg-[#FFE8ED] text-[#EE3775] border-[#FFD0DB]',
      desc: 'We arrange top performers with decent skills in puppet shows! Colorful mobile puppet booths, classic folk tales, and interactive storytelling for kids.',
      btnText: 'View Puppet Shows',
      hasDedicatedPage: true,
      slug: '#shows-entertainment/puppet-show',
    },
    {
      id: 2,
      title: 'Magic Show – Stage',
      category: 'magic',
      image: '/assets/magic-shows-stage.webp',
      tag: 'Grand Stage Illusions',
      badgeBg: 'bg-[#FFF3DF] text-[#D97706] border-[#FFE4B8]',
      desc: 'Our magic stage shows are extremely popular among our bona fide clients! Sleight of hand, mentalism, disappearing props, and hilarious audience participation.',
      btnText: 'View Stage Magic',
      hasDedicatedPage: true,
      slug: '#shows-entertainment/magic-shows-stage-shows',
    },
    {
      id: 3,
      title: 'Magic Show Walk Around',
      category: 'magic',
      image: '/assets/magic-shows-walk-around.webp',
      tag: 'Close-Up Table Magic',
      badgeBg: 'bg-[#F2EDFF] text-[#7B61FF] border-[#E0D5FF]',
      desc: 'We create a decent atmosphere for performers and guests to enjoy! Close-up interactive illusions performed right in front of your attendees’ eyes.',
      btnText: 'View Walk-Around Magic',
    },
    {
      id: 4,
      title: 'MC Games / Master of Ceremony',
      category: 'emcee',
      image: '/assets/mc-games-master-ceremony.webp',
      tag: 'High-Energy Anchors',
      badgeBg: 'bg-[#EBF7F2] text-[#00A86B] border-[#C8EFE0]',
      desc: 'We try multiple options to recreate the guests with top MC Games! Professional bilingual party anchors driving non-stop engagement, dance challenges, and games.',
      btnText: 'View MC Games',
    },
    {
      id: 5,
      title: 'Bubble Show',
      category: 'performers',
      image: '/assets/bubble-show.webp',
      tag: 'Giant Smoke & LED Bubbles',
      badgeBg: 'bg-[#FFE8ED] text-[#EE3775] border-[#FFD0DB]',
      desc: 'We are extremely popular among our clients for top-notch bubble shows! Giant bubbles, smoke-filled bubbles, and putting kids inside giant bubble domes.',
      btnText: 'View Bubble Show',
    },
    {
      id: 6,
      title: 'Live Sand Art Show',
      category: 'performers',
      image: '/assets/live-sand-art-show.webp',
      tag: 'Visual Sand Animation',
      badgeBg: 'bg-[#EDF5FF] text-[#2563EB] border-[#D0E2FF]',
      desc: 'We are extremely popular among our clients for top-notch Live Sand Art Shows! Visual storytelling drawn live on light-tables projected onto big LED screens.',
      btnText: 'View Sand Art Show',
    },
    {
      id: 7,
      title: 'Clown with Magic',
      category: 'clowns',
      image: '/assets/clown-with-magic.webp',
      tag: 'Comedy & Magic Fusion',
      badgeBg: 'bg-[#FFF3DF] text-[#D97706] border-[#FFE4B8]',
      desc: 'Clowns can play magical tricks, too! We prove this with our expert funny clowns who blend slapstick comedy with astonishing stage magic.',
      btnText: 'View Clown Magic',
    },
    {
      id: 8,
      title: 'Clown with Games',
      category: 'clowns',
      image: '/assets/clown-with-games.webp',
      tag: 'Party Games Host',
      badgeBg: 'bg-[#F2EDFF] text-[#7B61FF] border-[#E0D5FF]',
      desc: 'Our clowns can make you participate in various games and win in the end! Musical chairs, tug-of-war, dance-offs, and fun balloon party games.',
      btnText: 'View Clown Games',
    },
    {
      id: 9,
      title: 'Emcee Games and Magic',
      category: 'emcee',
      image: '/assets/emcee-games-magic.webp',
      tag: 'Dual Entertainment Anchor',
      badgeBg: 'bg-[#EBF7F2] text-[#00A86B] border-[#C8EFE0]',
      desc: 'Our Emcee games engage your mind to participate and win! Talented anchors who effortlessly transition from crowd management to mind-boggling magic acts.',
      btnText: 'View Emcee Magic',
    },
    {
      id: 10,
      title: 'Dwarf-Clown-Jokers',
      category: 'clowns',
      image: '/assets/dwarf-clown-jokers.webp',
      tag: 'Vintage Circus Comedy',
      badgeBg: 'bg-[#FFE8ED] text-[#EE3775] border-[#FFD0DB]',
      desc: 'We make children live their fancy dreams by putting their favorite dwarf-clown-jokers live! Energetic slapstick routines, funny walks, and photo ops.',
      btnText: 'View Dwarf Clowns',
    },
    {
      id: 11,
      title: 'Storytelling Show',
      category: 'emcee',
      image: '/assets/storytelling-show.webp',
      tag: 'Immersive Drama Tales',
      badgeBg: 'bg-[#EDF5FF] text-[#2563EB] border-[#D0E2FF]',
      desc: 'We make children live their fancy dreams by putting their favorite storytelling live! Animated voice modulation, expressive facial theatre, and moral tales.',
      btnText: 'View Storytelling',
    },
    {
      id: 12,
      title: 'Clown and Juggling',
      category: 'clowns',
      image: '/assets/clown-juggling.webp',
      tag: 'Acrobatic Juggling Acts',
      badgeBg: 'bg-[#FFF3DF] text-[#D97706] border-[#FFE4B8]',
      desc: 'Our juggling clowns put on a decent show to entertain you! Spinning plates, juggling glowing clubs, balance boards, and unicycle performances.',
      btnText: 'View Juggling Clowns',
    },
    {
      id: 13,
      title: 'Live Cartoon Characters & Mascots',
      category: 'performers',
      image: '/assets/live-cartoon-characters.webp',
      tag: 'Favorite Kids Mascots',
      badgeBg: 'bg-[#F2EDFF] text-[#7B61FF] border-[#E0D5FF]',
      desc: 'We make children live their fancy dreams with their favorite live cartoon characters! Life-sized mascot greetings, cake cutting accompaniment, and joyful dance.',
      btnText: 'View Cartoon Mascots',
    },
  ];

  const filteredCards = showCards.filter((card) => {
    const matchesCategory = activeTab === 'all' || card.category === activeTab;
    const matchesSearch =
      card.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      card.desc.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const faqs = [
    {
      q: 'How far in advance should I book 7Delights shows entertainment for my event?',
      a: 'To ensure maximum availability of shows entertainment artists, specific themes, & equipment, we recommend booking at least 1 to 6 weeks in advance for social parties & corporate events, and 3 to 6 months in advance for major weddings or large-scale corporate launches. However, if you have a last-minute request, contact us & we will do our best to make it happen!'
    },
    {
      q: 'How long does it take for your team to set up?',
      a: 'Setup times vary by service. Shows entertainment artists may take 1 to 2 hours. Complex theatrical puppet stages, live sand art projector calibrations, or bubble show lighting rigs require about 1.5 to 2 hours to ensure everything is flawlessly ready well before your first guest arrives.'
    },
    {
      q: 'What is your payment policy?',
      a: 'To secure your date, artists, and materials, we require an advance payment upon signing the contract. The remaining balance is structured into milestones leading up to, or on the day of the event.'
    },
    {
      q: 'Are the entertainment shows suitable for both kids and adults?',
      a: 'Yes, absolutely! We offer customized performance routines tailored to the specific age group of your event. For kids parties, we focus on animated comedy, magic, and mascot interactions. For corporate gatherings and weddings, our magicians, sand artists, and emcees deliver sophisticated, intelligent, and interactive stage entertainment.'
    },
    {
      q: 'Do you bring your own sound system and performance props?',
      a: 'Yes! Our artists come fully equipped with their specialized stage props, costumes, wireless microphones, and dedicated sound tracks. For larger venues, we seamlessly plug into your house PA system or supply complete audio setups.'
    }
  ];

  return (
    <div className="min-h-screen bg-[#FFFDF9] text-[#111A2E] flex flex-col font-sans selection:bg-[#EE3775] selection:text-white">
      {/* 1. HERO SECTION */}
      <section className="relative pt-6 pb-8 lg:pt-8 lg:pb-10 overflow-hidden bg-gradient-to-b from-[#FFF5F7] via-[#FFFDF9] to-[#FFFDF9]">
        {/* Subtle decorative glow */}
        <div className="absolute top-6 left-1/2 -translate-x-1/2 w-full max-w-7xl h-64 bg-gradient-to-r from-[#EE3775]/5 via-amber-200/10 to-[#7B61FF]/5 blur-3xl pointer-events-none -z-10" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FFE8ED] border border-[#FFD0DB] text-[#EE3775] text-xs font-bold uppercase tracking-wider mb-3 animate-pulse">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Bangalore's Premier Party Shows &amp; Live Entertainment</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#111A2E] tracking-tight mb-2">
            Shows &amp; Entertainment for Events
          </h1>

          <div className="flex justify-center mb-4">
            <GoldUnderline className="w-40 sm:w-52 h-auto text-[#EE3775]" />
          </div>

          <p className="max-w-3xl mx-auto text-sm sm:text-base md:text-lg text-[#5A6E85] leading-relaxed mb-6">
            Entertainment has been an integral part of modern celebratory life! 7Delights provides engaging live puppet shows, grand stage magic, walk-around close-up illusions, professional MC party anchors, bubble artists, sand animation, hilarious clowns, jugglers, and life-size cartoon mascots across Bengaluru celebrations.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <a
              href="tel:+919980029977"
              className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full bg-[#EE3775] hover:bg-[#DE2765] text-white font-bold text-sm shadow-md shadow-[#EE3775]/25 hover:shadow-lg transition-all duration-300 hover:scale-[1.02]"
            >
              <Phone className="w-4 h-4 fill-white" />
              <span>Book Show Artists</span>
            </a>
            <a
              href="https://api.whatsapp.com/send/?phone=919980029977&text=Hi%207Delights,%20I%20am%20interested%20in%20Shows%20and%20Entertainment.%20Please%20share%20packages."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full bg-white hover:bg-gray-50 border border-gray-200 text-[#111A2E] font-bold text-sm shadow-xs hover:shadow transition-all duration-300"
            >
              <span>Instant WhatsApp Quote</span>
              <ChevronRight className="w-4 h-4 text-[#EE3775]" />
            </a>
          </div>
        </div>
      </section>

      {/* 2. SERVICES GRID */}
      <section id="services-grid" className="py-8 lg:py-10 bg-[#FFFDF9] border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Controls: Search & Category Pills */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
            {/* Category Pills */}
            <div className="flex flex-wrap items-center gap-2">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveTab(cat.id)}
                  className={`px-4 py-2 rounded-full text-xs sm:text-sm font-bold transition-all duration-200 cursor-pointer ${
                    activeTab === cat.id
                      ? 'bg-[#EE3775] text-white shadow-md shadow-[#EE3775]/20 scale-105'
                      : 'bg-white text-[#5A6E85] hover:text-[#111A2E] hover:bg-gray-100/70 border border-gray-200'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>

            {/* Search Input */}
            <div className="relative min-w-[260px] sm:min-w-[300px]">
              <Search className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search magic, clown, puppet, bubble..."
                className="w-full pl-10 pr-4 py-2 text-sm rounded-full bg-white border border-gray-200 focus:outline-none focus:border-[#EE3775] focus:ring-2 focus:ring-[#EE3775]/20 transition-all text-[#111A2E] placeholder-gray-400"
              />
            </div>
          </div>

          {/* Cards Grid: 13 Authentic Shows */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {filteredCards.map((item) => (
              <div
                key={item.id}
                onClick={() => {
                  if (item.hasDedicatedPage && item.slug) {
                    window.location.hash = item.slug;
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  } else {
                    const el = document.getElementById('shows-overview');
                    if (el) {
                      el.scrollIntoView({ behavior: 'smooth' });
                    }
                  }
                }}
                className="bg-white rounded-3xl overflow-hidden border border-gray-100 hover:border-[#FFD0DB] hover:shadow-xl transition-all duration-300 flex flex-col group cursor-pointer"
              >
                {/* Image Container */}
                <div className="relative h-56 w-full overflow-hidden bg-gray-100">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    onError={(e) => {
                      e.currentTarget.src = '/assets/shows-entertainment-banner.webp';
                    }}
                  />
                  <div className="absolute top-3 left-3">
                    <span className={`text-[11px] font-bold px-3 py-1 rounded-full border ${item.badgeBg}`}>
                      {item.tag}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 flex flex-col flex-grow justify-between">
                  <div>
                    <h3 className="text-lg font-bold text-[#111A2E] mb-2 group-hover:text-[#EE3775] transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#5A6E85] leading-relaxed mb-4 line-clamp-3">
                      {item.desc}
                    </p>
                  </div>

                  {/* Buttons */}
                  <div className="grid grid-cols-2 gap-2 mt-auto pt-2 border-t border-gray-50">
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        if (item.hasDedicatedPage && item.slug) {
                          window.location.hash = item.slug;
                          window.scrollTo({ top: 0, behavior: 'smooth' });
                        } else {
                          const el = document.getElementById('shows-overview');
                          if (el) {
                            el.scrollIntoView({ behavior: 'smooth' });
                          }
                        }
                      }}
                      className="w-full py-2.5 px-3 rounded-xl bg-gray-50 text-gray-700 hover:bg-[#EE3775] hover:text-white font-bold text-xs flex items-center justify-center gap-1 transition-all duration-200 cursor-pointer"
                    >
                      <span>{item.btnText}</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </button>
                    <a
                      href="tel:+919980029977"
                      onClick={(e) => e.stopPropagation()}
                      className="w-full py-2.5 px-3 rounded-xl border border-gray-200 text-[#111A2E] hover:border-[#EE3775] hover:text-[#EE3775] font-bold text-xs flex items-center justify-center gap-1.5 transition-all duration-200"
                    >
                      <Phone className="w-3.5 h-3.5" />
                      <span>Make A Call</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredCards.length === 0 && (
            <div className="text-center py-16">
              <p className="text-lg text-gray-400 font-medium">
                No show or entertainment matches your search. Try different keywords!
              </p>
            </div>
          )}
        </div>
      </section>

      {/* 3. SECTION TWO: YOUR PARTNER FOR ENGAGING SHOWS */}
      <section id="shows-overview" className="py-10 lg:py-12 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-center">
            {/* Left Image Showcase */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-gray-100 group">
              <img
                src="/assets/magic-show-showcase.webp"
                alt="Magic Show and Entertainment in Bangalore by 7Delights"
                className="w-full h-auto object-cover group-hover:scale-102 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-6 sm:p-8">
                <div className="text-white">
                  <span className="px-3 py-1 rounded-full bg-[#EE3775] text-[11px] font-bold uppercase tracking-wider mb-2 inline-block">
                    Spectacular Performances
                  </span>
                  <h4 className="text-xl sm:text-2xl font-bold">Magic, Puppets &amp; Slapstick Clowns</h4>
                  <p className="text-xs sm:text-sm text-gray-200">Captivating entertainment designed to delight both kids and adults</p>
                </div>
              </div>
            </div>

            {/* Right Content */}
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FFE8ED] border border-[#FFD0DB] text-[#EE3775] text-xs font-bold uppercase tracking-wider mb-4">
                <Theater className="w-3.5 h-3.5" />
                <span>Live Event Performances</span>
              </div>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#111A2E] tracking-tight mb-4 leading-snug">
                7DELIGHTS.in — Your Partner For Engaging Shows &amp; Entertainment
              </h2>

              <p className="text-sm sm:text-base text-[#5A6E85] leading-relaxed mb-4">
                Entertainment has been an important aspect of modern lifestyle! People are involved in hectic schedules, which is why they crave healthy, heart-warming shows and engaging live entertainment. At <strong>7DELIGHTS.in</strong>, we undertake end-to-end responsibilities to help organizers stage decent entertainment shows in and around Bangalore.
              </p>

              <p className="text-sm sm:text-base text-[#5A6E85] leading-relaxed mb-4">
                Our artists include award-winning magicians, experienced traditional puppeteers, charismatic bilingual masters of ceremony, acrobatic juggling clowns, and mesmerizing sand animation artists who ensure your guests are smiling, laughing, and applauding throughout the party.
              </p>

              <p className="text-sm sm:text-base text-[#5A6E85] leading-relaxed mb-6">
                Collaborate with 7Delights whenever you are organizing a birthday, wedding sangeet, family get-together, or corporate annual day! We promise to make your celebration memorable, vibrant, and fun-filled.
              </p>

              <div className="flex flex-wrap items-center gap-4">
                <a
                  href="tel:+919980029977"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#EE3775] hover:bg-[#DE2765] text-white font-bold text-sm shadow-md transition-all hover:scale-105"
                >
                  <Phone className="w-4 h-4 fill-white" />
                  <span>Call: +91 99800 29977</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. SECTION THREE: 4 CORE PILLARS OF 7DELIGHT INFRASTRUCTURE */}
      <section className="py-10 lg:py-12 bg-[#FFFDF9] border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <h2 className="text-2xl sm:text-3xl font-black text-[#111A2E] tracking-tight mb-2">
              Why Bangalore Loves Our Entertainment Shows
            </h2>
            <GoldUnderline className="w-32 h-auto text-[#EE3775] mx-auto mb-2" />
            <p className="text-xs sm:text-sm text-[#5A6E85]">
              Seamless stage production backed by experienced performers, premium sound gear, and authentic family-friendly routines.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow text-center">
              <div className="w-14 h-14 rounded-2xl bg-[#FFE8ED] text-[#EE3775] flex items-center justify-center mx-auto mb-4">
                <Sliders className="w-7 h-7" />
              </div>
              <h3 className="text-base font-bold text-[#111A2E] mb-2">Customizable Show Flow</h3>
              <p className="text-xs text-[#5A6E85] leading-relaxed">
                Meeting your dream and event schedule becomes a priority for us, and we tailor show lengths to your agenda!
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow text-center">
              <div className="w-14 h-14 rounded-2xl bg-[#FFF3DF] text-[#D97706] flex items-center justify-center mx-auto mb-4">
                <Layers className="w-7 h-7" />
              </div>
              <h3 className="text-base font-bold text-[#111A2E] mb-2">Rich Infrastructure</h3>
              <p className="text-xs text-[#5A6E85] leading-relaxed">
                We have the richest entertainment props inventory in Bangalore: puppet stages, sand light-tables &amp; mascot suits.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow text-center">
              <div className="w-14 h-14 rounded-2xl bg-[#EBF7F2] text-[#00A86B] flex items-center justify-center mx-auto mb-4">
                <Clock className="w-7 h-7" />
              </div>
              <h3 className="text-base font-bold text-[#111A2E] mb-2">24/7 Customer Service</h3>
              <p className="text-xs text-[#5A6E85] leading-relaxed">
                Our team of caring coordinators is available round-the-clock to answer queries and confirm artist availability!
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow text-center">
              <div className="w-14 h-14 rounded-2xl bg-[#F2EDFF] text-[#7B61FF] flex items-center justify-center mx-auto mb-4">
                <Award className="w-7 h-7" />
              </div>
              <h3 className="text-base font-bold text-[#111A2E] mb-2">Best Competent Artists</h3>
              <p className="text-xs text-[#5A6E85] leading-relaxed">
                Our seasoned stage artists, clowns, and emcees ensure warm hospitality, family-safe humor, and total engagement.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. SECTION FOUR: TRUSTED NAME FOR ENTERTAINMENT SHOWS */}
      <section className="py-10 lg:py-12 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-center">
            {/* Left Content */}
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EBF7F2] border border-[#C8EFE0] text-[#00A86B] text-xs font-bold uppercase tracking-wider mb-4">
                <Sparkle className="w-3.5 h-3.5" />
                <span>Excellence in Performance</span>
              </div>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#111A2E] tracking-tight mb-4 leading-snug">
                7DELIGHTS.in — Trusted Name For Entertainment Shows
              </h2>

              <p className="text-sm sm:text-base text-[#5A6E85] leading-relaxed mb-6">
                From intimate living-room birthday celebrations to sprawling 1000+ guest corporate gatherings, <strong>7Delights.in</strong> brings authentic stage craft that captures imaginations and creates lifelong memories.
              </p>

              <h3 className="text-lg font-bold text-[#111A2E] mb-3">
                Our Strength For Arranging Entertainment Shows:
              </h3>

              <div className="space-y-2.5 mb-6">
                {[
                  'Award-Winning Stage & Close-Up Magicians',
                  'Traditional Wooden & Hand Puppet Theatre Stages',
                  'Energetic Bilingual MCs & Interactive Audience Games',
                  'Spectacular Giant LED Bubble & Smoke Shows',
                  'Live Sand Animation Projected on Grand Screens'
                ].map((strength, idx) => (
                  <div key={idx} className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#EE3775] shrink-0" />
                    <span className="text-xs sm:text-sm font-semibold text-[#111A2E]">{strength}</span>
                  </div>
                ))}
              </div>

              <p className="text-xs sm:text-sm text-[#5A6E85] leading-relaxed mb-8">
                Your partnership with our talent roster brings genuine laughter, wonder, and applause to your celebration!
              </p>

              <a
                href="tel:+919980029977"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#EE3775] hover:bg-[#DE2765] text-white font-bold text-sm shadow-md transition-all hover:scale-105"
              >
                <Phone className="w-4 h-4 fill-white" />
                <span>Talk to Our Show Directors</span>
              </a>
            </div>

            {/* Right Image Showcase */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-gray-100 group">
              <img
                src="/assets/clown-juggler-showcase.webp"
                alt="Clown Jugglers and Entertainment by 7Delights"
                className="w-full h-auto object-cover group-hover:scale-102 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-6 sm:p-8">
                <div className="text-white">
                  <span className="px-3 py-1 rounded-full bg-[#00A86B] text-[11px] font-bold uppercase tracking-wider mb-2 inline-block">
                    Circus &amp; Slapstick Fun
                  </span>
                  <h4 className="text-xl sm:text-2xl font-bold">Juggling Clowns &amp; Interactive Hosts</h4>
                  <p className="text-xs sm:text-sm text-gray-200">Bringing pure laughter and high-spirited amusement to every guest</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. FAQS SECTION */}
      <section className="py-10 lg:py-12 bg-[#FFFDF9] border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FFE8ED] border border-[#FFD0DB] text-[#EE3775] text-xs font-bold uppercase tracking-wider mb-2">
              <HelpCircle className="w-3.5 h-3.5" />
              <span>Got Questions?</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-[#111A2E] tracking-tight mb-2">
              Event FAQ ?
            </h2>
            <GoldUnderline className="w-24 h-auto text-[#EE3775] mx-auto mb-2" />
            <p className="text-xs sm:text-sm text-[#5A6E85]">
              Everything you need to know about booking our entertainment shows, performer logistics, and timing in Bangalore.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div
                  key={index}
                  className="bg-white rounded-2xl border border-gray-100 shadow-xs overflow-hidden transition-all duration-200"
                >
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full px-6 py-4 text-left flex items-center justify-between gap-4 hover:bg-gray-50/50 transition-colors"
                  >
                    <span className="text-sm sm:text-base font-bold text-[#111A2E]">
                      {faq.q}
                    </span>
                    <ChevronDown
                      className={`w-4 h-4 text-[#EE3775] shrink-0 transition-transform duration-300 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="px-6 pb-5 pt-1 text-xs sm:text-sm text-[#5A6E85] leading-relaxed border-t border-gray-50 bg-[#FFFDF9]">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 7. BOTTOM CTA SECTION */}
      <section className="py-10 bg-gradient-to-r from-[#111A2E] to-[#1E2C48] text-white text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-black mb-2">
            Ready to Entertain Your Guests with Unforgettable Shows?
          </h2>
          <p className="text-xs sm:text-sm text-gray-300 max-w-2xl mx-auto mb-6">
            Contact 7Delights today for combo packages on magic shows, puppet theatre, bubble art, clown games, and interactive emcees!
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="tel:+919980029977"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#EE3775] hover:bg-[#DE2765] text-white font-bold text-sm shadow-lg shadow-[#EE3775]/30 hover:scale-105 transition-all"
            >
              <Phone className="w-4 h-4 fill-white" />
              <span>Call +91 99800 29977</span>
            </a>
            <a
              href="#home"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-white/10 hover:bg-white/20 text-white font-bold text-sm backdrop-blur-xs border border-white/20 transition-all"
            >
              <span>Explore All 7Delights Services</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

