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
  Flame, 
  Wind, 
  PartyPopper, 
  CloudRain, 
  Sparkle, 
  Layers, 
  ChevronDown, 
  HelpCircle, 
  Sliders, 
  Award, 
  CheckCircle2, 
  Zap,
  CheckCircle
} from 'lucide-react';
import { GoldUnderline } from '../components/Doodles';

export default function EventSFXPage() {
  const [activeTab, setActiveTab] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const categories = [
    { id: 'all', label: 'All SFX Effects' },
    { id: 'pyro', label: 'Cold Pyro & Fire' },
    { id: 'atmospheric', label: 'Fog & Bubbles' },
    { id: 'confetti', label: 'Confetti & Sky Shots' },
    { id: 'entry-floor', label: 'Entry & Floor Decor' },
  ];

  // 10 Authentic Cards from https://www.7delights.in/special-effects-event-sfx/
  const sfxCards = [
    {
      id: 1,
      title: 'Foam Party',
      category: 'atmospheric',
      image: '/assets/foam-party-thumbnail.webp',
      tag: 'Foam Cannon',
      badgeBg: 'bg-[#FFE8ED] text-[#EE3775] border-[#FFD0DB]',
      desc: 'We set the party mood by making the participants involved in Foam Party! High-output hypoallergenic, non-toxic foam cannons transforming dance floors into an epic pool-party wonderland.',
      btnText: 'View Foam Party',
    },
    {
      id: 2,
      title: 'Rotating Cold Fire',
      category: 'pyro',
      image: '/assets/confetti-blast-cold-fire.webp',
      tag: 'Rotating Pyros',
      badgeBg: 'bg-[#FFF3DF] text-[#D97706] border-[#FFE4B8]',
      desc: 'Cold Fire represents the perfect fusion of visual dream and sophisticated restraint. Motorized rotating cold spark machines casting 360-degree sparkling pinwheel effects without smoke.',
      btnText: 'View Rotating Cold Fire',
    },
    {
      id: 3,
      title: 'Cold Pyro',
      category: 'pyro',
      image: '/assets/cold-pyro-thumbnail.webp',
      tag: 'Indoor Sparkulars',
      badgeBg: 'bg-[#F2EDFF] text-[#7B61FF] border-[#E0D5FF]',
      desc: 'Cold Pyro specializes in the art of safe, stunning, and spark-filled visual experiences! 100% touch-safe titanium spark fountains creating dramatic stage backdrops and walk-in moments.',
      btnText: 'View Cold Pyro',
    },
    {
      id: 4,
      title: 'Colour Sky Shots',
      category: 'confetti',
      image: '/assets/sky-shots-thumbnail.webp',
      tag: 'Sky Pyrotechnics',
      badgeBg: 'bg-[#EBF7F2] text-[#00A86B] border-[#C8EFE0]',
      desc: 'Elevate your perspective with cinematic Sky-Shots for Event! Vibrant daytime colored smoke shells and nighttime illumination bursts lighting up outdoor venue skies.',
      btnText: 'View Sky Shots',
    },
    {
      id: 5,
      title: 'Fire Shots',
      category: 'pyro',
      image: '/assets/fire-shots-thumbnail.webp',
      tag: 'Flame Projectors',
      badgeBg: 'bg-[#FFE8ED] text-[#EE3775] border-[#FFD0DB]',
      desc: 'Fire Shots: Capturing the high-energy Spark of Your Events! Synchronized flame projectors shooting controlled bursts of real fire upwards for concerts and dramatic stage entrances.',
      btnText: 'View Fire Shots',
    },
    {
      id: 6,
      title: 'Co2 Confetti Paper Blast',
      category: 'confetti',
      image: '/assets/confetti-paper-blast-thumbnail.webp',
      tag: 'CO2 Blasters',
      badgeBg: 'bg-[#FFF3DF] text-[#D97706] border-[#FFE4B8]',
      desc: 'CO2 Confetti Paper Blast specializes in creating high-impact, immersive finales for your biggest moments! High-velocity blasters showering metallic slow-fall paper across the entire arena.',
      btnText: 'View Confetti Blast',
    },
    {
      id: 7,
      title: 'Dry-Ice-Fog',
      category: 'atmospheric',
      image: '/assets/dry-ice-fog-thumbnail.webp',
      tag: 'Low-Lying Fog',
      badgeBg: 'bg-[#F2EDFF] text-[#7B61FF] border-[#E0D5FF]',
      desc: 'Dry Ice Fog provides the quintessential "dancing on a cloud" effect that adds a layer of timeless elegance. Low-lying dense white fog hugging the floor perfectly for first dances and reveals.',
      btnText: 'View Dry-Ice Fog',
    },
    {
      id: 8,
      title: 'Bubble Machine',
      category: 'atmospheric',
      image: '/assets/bubble-machine-thumbnail.webp',
      tag: 'Bubble Wave',
      badgeBg: 'bg-[#EBF7F2] text-[#00A86B] border-[#C8EFE0]',
      desc: 'Bubbles naturally draw guests in, creating a fun, interactive atmosphere that delights kids & adults alike! Continuous stream of shimmering bubbles paired with stage wash lighting.',
      btnText: 'View Bubble Machine',
    },
    {
      id: 9,
      title: 'Grand Entry',
      category: 'entry-floor',
      image: '/assets/grand-entry.webp',
      tag: 'VIP Walkway',
      badgeBg: 'bg-[#FFE8ED] text-[#EE3775] border-[#FFD0DB]',
      desc: 'Our arrangements for a decent entry for the guests are excellent! Complete red carpet walkway, flanking cold pyrotechnic sparkulars, floral truss arches, and warm uplighters.',
      btnText: 'View Grand Entry',
    },
    {
      id: 10,
      title: 'Dance Floor',
      category: 'entry-floor',
      image: '/assets/dance-floor.webp',
      tag: 'Illuminated Dance Arena',
      badgeBg: 'bg-[#FFF3DF] text-[#D97706] border-[#FFE4B8]',
      desc: 'We use the best materials to get the grand dance floor ready for the participants. Interactive 3D infinity LED mirror tiles and heavy-duty wooden dance surfaces engineered for peak energy.',
      btnText: 'View Dance Floor',
    },
  ];

  const filteredCards = sfxCards.filter((card) => {
    const matchesCategory = activeTab === 'all' || card.category === activeTab;
    const matchesSearch = 
      card.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      card.desc.toLowerCase().includes(searchQuery.toLowerCase()) ||
      card.tag.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const sfxLineup = [
    {
      title: 'Cold Fire Sparkulars',
      desc: 'The ultimate safe-for-indoors "fireworks" effect. These create beautiful fountains of sparks without the heat or fire hazard, perfect for wedding stages, award ceremonies, & grand entries.'
    },
    {
      title: 'CO2 Jets & Cannons',
      desc: 'Create high-energy bursts of thick, white fog that disappear instantly. Ideal for DJ sets, concerts, & "big reveals" at corporate launches.'
    },
    {
      title: 'Low Fog / Dry Ice Effects',
      desc: 'Create a magical "dancing on the clouds" look for wedding first dances or ethereal stage performances. Our low-lying fog stays close to the ground for a dreamlike atmosphere.'
    },
    {
      title: 'Confetti Blasters & Streamers',
      desc: 'Celebrate milestones with a burst of color! From metallic gold slow-fall confetti to vibrant paper streamers, we have the power to fill the air at the perfect moment.'
    },
    {
      title: 'Smoke & Haze Machines',
      desc: 'Enhance your lighting design. Our haze machines make light beams visible and vibrant, while our high-density smoke creates a dramatic, mysterious stage presence.'
    }
  ];

  const celebrationsList = [
    'Weddings & Sangeets: Elevate the Varmala, first dance, or grand entry into a fairytale moment',
    'Corporate Family Day Events',
    'Corporate Employee Day Events & Annual Days',
    'Product Launches & Brand Unveilings',
    'Team Building Celebrations',
    'Award Ceremonies & Milestone Summits',
    'Concerts, Music Festivals & Entertainment Shows',
    'Audio-Visual & Technical Support Integration'
  ];

  const faqs = [
    {
      q: 'How far in advance should I book 7Delights special effects/sfx for my event?',
      a: 'To ensure maximum availability of special effects/sfx, specific themes, & equipment, we recommend booking at least 1 to 6 weeks in advance for social parties & corporate events, and 3 to 6 months in advance for major weddings or large-scale corporate launches. However, if you have a last-minute request, contact us & we will do our best to make it happen!'
    },
    {
      q: 'How long does it take for your team to set up?',
      a: 'Setup times vary by service. Special effects/sfx may take 1 to 2 hours. Complex thematic stage setups, intricate lighting riggings, or heavy SFX installations can take anywhere from 4 to 12 hours. We always coordinate directly with the venue to ensure everything is flawlessly set up well before your first guest arrives.'
    },
    {
      q: 'What is your payment policy?',
      a: 'To secure your date, artists, and materials, we require an advance payment upon signing the contract. The remaining balance is structured into milestones leading up to, or on the day of the event.'
    },
    {
      q: 'Are Cold Sparkulars completely safe for indoor banquet halls?',
      a: 'Yes, 100%! Cold Sparkular machines do not use gunpowder or pyrotechnic explosives. They emit titanium granules that burn cold (around 62°F / 17°C), meaning sparks are completely touch-safe, emit zero smoke, produce zero noxious odors, and do not trigger smoke detectors.'
    },
    {
      q: 'What does your SFX technical crew manage during the event?',
      a: 'Our certified SFX operators remain stationed at their consoles throughout your event, coordinating directly with the event anchor/DJ to trigger effects at the exact microsecond of your product launch, cake cutting, or award reveal.'
    }
  ];

  return (
    <div className="min-h-screen bg-[#FFFDF9] text-[#111A2E] flex flex-col font-sans selection:bg-[#EE3775] selection:text-white">
      {/* 1. HERO SECTION */}
      <section className="relative pt-12 pb-20 lg:pt-16 lg:pb-28 overflow-hidden bg-gradient-to-b from-[#FFF5F7] via-[#FFFDF9] to-[#FFFDF9]">
        {/* Subtle decorative glow */}
        <div className="absolute top-10 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-gradient-to-r from-[#EE3775]/5 via-amber-200/10 to-[#7B61FF]/5 blur-3xl pointer-events-none -z-10" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#FFE8ED] border border-[#FFD0DB] text-[#EE3775] text-xs sm:text-sm font-bold uppercase tracking-wider mb-6 animate-pulse">
            <Sparkles className="w-4 h-4" />
            <span>Bangalore's Premier Special Effects &amp; SFX Organizers</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-[#111A2E] tracking-tight mb-4">
            Special Effects SFX for Events
          </h1>

          <div className="flex justify-center mb-6">
            <GoldUnderline className="w-48 sm:w-64 h-auto text-[#EE3775]" />
          </div>

          <p className="max-w-3xl mx-auto text-base sm:text-lg md:text-xl text-[#5A6E85] leading-relaxed mb-8">
            Ignite the senses with spectacular special effects! 7Delights provides indoor-safe cold sparkulars, CO2 confetti paper blasters, dry-ice cloud fog, rotating cold fire, and sky shots to elevate weddings, concerts, and corporate galas across Bengaluru.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="tel:+919980029977"
              className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-[#EE3775] hover:bg-[#DE2765] text-white font-bold text-base shadow-lg shadow-[#EE3775]/25 hover:shadow-xl hover:shadow-[#EE3775]/35 transition-all duration-300 hover:scale-[1.02]"
            >
              <Phone className="w-4 h-4 fill-white" />
              <span>Book SFX Production</span>
            </a>
            <a
              href="https://api.whatsapp.com/send/?phone=919980029977&text=Hi%207Delights,%20I%20am%20interested%20in%20Special%20Effects%20SFX%20services.%20Please%20share%20packages."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-white hover:bg-gray-50 border border-gray-200 text-[#111A2E] font-bold text-base shadow-sm hover:shadow transition-all duration-300"
            >
              <span>Instant WhatsApp Quote</span>
              <ChevronRight className="w-4 h-4 text-[#EE3775]" />
            </a>
          </div>
        </div>
      </section>

      {/* 2. SFX SERVICES GRID */}
      <section id="services-grid" className="py-12 lg:py-16 bg-[#FFFDF9] border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Controls: Search & Category Pills */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
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
                placeholder="Search pyros, fog, confetti..."
                className="w-full pl-10 pr-4 py-2 text-sm rounded-full bg-white border border-gray-200 focus:outline-none focus:border-[#EE3775] focus:ring-2 focus:ring-[#EE3775]/20 transition-all text-[#111A2E] placeholder-gray-400"
              />
            </div>
          </div>

          {/* Cards Grid */}
          <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#111A2E] tracking-tight mb-3">Special Effects & Stage Pyrotechnics</h2>
            <p className="text-sm sm:text-base text-[#5A6E85]">Safe, indoor-approved cold pyros, dry ice fog clouds, paper confetti cannons, and breathtaking visual moments.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8">
            {filteredCards.map((item) => (
              <div
                key={item.id}
                onClick={() => {
                  const el = document.getElementById('sfx-overview');
                  if (el) {
                    el.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="group bg-white rounded-2xl overflow-hidden border border-gray-100/80 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col hover:-translate-y-1 cursor-pointer"
              >
                {/* Image Container */}
                <div className="relative h-52 sm:h-56 w-full overflow-hidden bg-gray-100">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  {/* Badge */}
                  <div className="absolute top-3 left-3">
                    <span
                      className={`text-[11px] font-extrabold px-3 py-1 rounded-full border shadow-xs ${item.badgeBg}`}
                    >
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
                    <p className="text-xs sm:text-sm text-[#5A6E85] leading-relaxed mb-4">
                      {item.desc}
                    </p>
                  </div>

                  {/* Actions */}
                  <div className="pt-3 border-t border-gray-100 flex flex-col gap-2">
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        const el = document.getElementById('sfx-overview');
                        if (el) {
                          el.scrollIntoView({ behavior: 'smooth' });
                        }
                      }}
                      className="w-full py-2.5 px-4 rounded-xl bg-gray-50 text-gray-700 hover:bg-[#EE3775] hover:text-white font-bold text-xs flex items-center justify-center gap-1.5 transition-all duration-200 cursor-pointer"
                    >
                      <span>{item.btnText}</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </button>
                    <a
                      href="tel:+919980029977"
                      onClick={(e) => e.stopPropagation()}
                      className="w-full py-2.5 px-4 rounded-xl border border-gray-200 text-[#111A2E] hover:border-[#EE3775] hover:text-[#EE3775] font-bold text-xs flex items-center justify-center gap-1.5 transition-all duration-200"
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
                No special effects match your search. Try different keywords!
              </p>
            </div>
          )}
        </div>
      </section>

      {/* 3. SECTION TWO: IGNITE THE SENSES WITH SPECTACULAR SFX */}
      <section id="sfx-overview" className="py-16 lg:py-20 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
            {/* Left Image Showcase */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-gray-100 group">
              <img
                src="/assets/sfx-main-showcase.webp"
                alt="Special Effects Stage Showcase"
                className="w-full h-auto object-cover group-hover:scale-102 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-6 sm:p-8">
                <div className="text-white">
                  <span className="px-3 py-1 rounded-full bg-[#EE3775] text-[11px] font-bold uppercase tracking-wider mb-2 inline-block">
                    Cinematic SFX
                  </span>
                  <p className="text-xl sm:text-2xl font-bold">Synchronized Cold Pyros &amp; CO2 Blasts</p>
                  <p className="text-xs sm:text-sm text-gray-200">Engineered for unforgettable crescendo moments</p>
                </div>
              </div>
            </div>

            {/* Right Content */}
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FFE8ED] border border-[#FFD0DB] text-[#EE3775] text-xs font-bold uppercase tracking-wider mb-4">
                <Flame className="w-3.5 h-3.5" />
                <span>Cinematic Stage Experiences</span>
              </div>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#111A2E] tracking-tight mb-4 leading-snug">
                7Delights.in: Ignite the Senses with Spectacular Special Effects (SFX)!
              </h2>

              <p className="text-sm sm:text-base text-[#5A6E85] leading-relaxed mb-4">
                Want to turn a great event into a breathtaking cinematic experience? <strong>7Delights.in</strong> specializes in professional Special Effects (SFX) that add that "wow" factor, drama, and excitement to your most important moments. Whether it's a high-profile product launch, a grand wedding entry, or a high-energy concert in Bengaluru, our SFX services are designed to leave your audience absolutely spellbound.
              </p>

              <h3 className="text-base font-bold text-[#111A2E] mb-3">
                Create "The Moment" with Our SFX Lineup:
              </h3>

              <div className="space-y-3 mb-6">
                {sfxLineup.map((item, idx) => (
                  <div key={idx} className="p-3.5 rounded-xl bg-[#FFFDF9] border border-gray-100">
                    <h3 className="text-xs sm:text-sm font-bold text-[#111A2E] mb-1 flex items-center gap-2">
                      <Sparkle className="w-3.5 h-3.5 text-[#EE3775]" />
                      <span>{item.title}</span>
                    </h3>
                    <p className="text-xs text-[#5A6E85] leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>

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

      {/* 4. SECTION THREE: 4 CORE PILLARS OF 7DELIGHT SFX INFRASTRUCTURE */}
      <section className="py-16 bg-[#FFFDF9] border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-3xl font-black text-[#111A2E] tracking-tight mb-3">
              Why Bangalore Trusts 7Delights for Event SFX
            </h2>
            <GoldUnderline className="w-36 h-auto text-[#EE3775] mx-auto mb-3" />
            <p className="text-xs sm:text-sm text-[#5A6E85]">
              Flawless execution backed by certified operators, safety compliance, and cutting-edge effects hardware.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow text-center">
              <div className="w-14 h-14 rounded-2xl bg-[#FFE8ED] text-[#EE3775] flex items-center justify-center mx-auto mb-4">
                <Sliders className="w-7 h-7" />
              </div>
              <p className="text-base font-bold text-[#111A2E] mb-2">Customizable SFX Packages</p>
              <p className="text-xs text-[#5A6E85] leading-relaxed">
                Meeting your dream and fascination becomes a priority for us, and we do it with all our strength!
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow text-center">
              <div className="w-14 h-14 rounded-2xl bg-[#FFF3DF] text-[#D97706] flex items-center justify-center mx-auto mb-4">
                <Layers className="w-7 h-7" />
              </div>
              <h3 className="text-base font-bold text-[#111A2E] mb-2">Rich Infrastructure</h3>
              <p className="text-xs text-[#5A6E85] leading-relaxed">
                We have the richest special effects equipment infrastructure in Bangalore! We work on enriching it further.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow text-center">
              <div className="w-14 h-14 rounded-2xl bg-[#EBF7F2] text-[#00A86B] flex items-center justify-center mx-auto mb-4">
                <Clock className="w-7 h-7" />
              </div>
              <h3 className="text-base font-bold text-[#111A2E] mb-2">24/7 Customer Service</h3>
              <p className="text-xs text-[#5A6E85] leading-relaxed">
                Our team of caring executives is available round-the-clock to help you with all your queries and venue checks!
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow text-center">
              <div className="w-14 h-14 rounded-2xl bg-[#F2EDFF] text-[#7B61FF] flex items-center justify-center mx-auto mb-4">
                <Award className="w-7 h-7" />
              </div>
              <h3 className="text-base font-bold text-[#111A2E] mb-2">Best Competent Events Team</h3>
              <p className="text-xs text-[#5A6E85] leading-relaxed">
                Our certified technicians guarantee 100% venue-compliant, non-toxic, and risk-free SFX firing at your celebration.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. SECTION FOUR: WHY CHOOSE & CELEBRATIONS */}
      <section className="py-16 lg:py-20 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
            {/* Left Content */}
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EBF7F2] border border-[#C8EFE0] text-[#00A86B] text-xs font-bold uppercase tracking-wider mb-4">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>Certified Safety &amp; Compliance</span>
              </div>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#111A2E] tracking-tight mb-4 leading-snug">
                Why Choose 7Delights.in for Your SFX?
              </h2>

              <p className="text-sm sm:text-base text-[#5A6E85] leading-relaxed mb-6">
                <strong>Safety First:</strong> Our SFX team is highly trained in safety protocols. We use high-quality, non-toxic materials and ensure all indoor effects (like Cold Sparkulars) are strictly venue-compliant, odorless, and smokeless.
              </p>

              <h3 className="text-lg font-bold text-[#111A2E] mb-3">
                Perfect for Your Biggest Celebrations:
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                {celebrationsList.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#EE3775] shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm font-semibold text-[#111A2E]">{item}</span>
                  </div>
                ))}
              </div>

              <p className="text-xs sm:text-sm text-[#5A6E85] leading-relaxed mb-8">
                Ready to Create an Unforgettable Event? Contact us today to discuss your event vision and let us bring it to life. Reach us whenever you wish to add an electrifying touch to your party!
              </p>

              <a
                href="tel:+919980029977"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#EE3775] hover:bg-[#DE2765] text-white font-bold text-sm shadow-md transition-all hover:scale-105"
              >
                <Phone className="w-4 h-4 fill-white" />
                <span>Talk to Our SFX Coordinator</span>
              </a>
            </div>

            {/* Right Image Showcase */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-gray-100 group">
              <img
                src="/assets/sky-shots-showcase.webp"
                alt="Sky Shots and Night Illuminations"
                className="w-full h-auto object-cover group-hover:scale-102 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-6 sm:p-8">
                <div className="text-white">
                  <span className="px-3 py-1 rounded-full bg-[#00A86B] text-[11px] font-bold uppercase tracking-wider mb-2 inline-block">
                    Outdoor Spectacle
                  </span>
                  <p className="text-xl sm:text-2xl font-bold">Colour Sky Shots &amp; Pyrotechnics</p>
                  <p className="text-xs sm:text-sm text-gray-200">Synchronized fireworks displays for grand finale celebrations</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. FAQS SECTION */}
      <section className="py-16 lg:py-20 bg-[#FFFDF9] border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FFE8ED] border border-[#FFD0DB] text-[#EE3775] text-xs font-bold uppercase tracking-wider mb-3">
              <HelpCircle className="w-3.5 h-3.5" />
              <span>Got Questions?</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-[#111A2E] tracking-tight mb-2">
              Event FAQ ?
            </h2>
            <GoldUnderline className="w-28 h-auto text-[#EE3775] mx-auto mb-3" />
            <p className="text-xs sm:text-sm text-[#5A6E85]">
              Everything you need to know about booking special effects, safety compliance, and timings with 7Delights.
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
      <section className="py-14 bg-gradient-to-r from-[#111A2E] to-[#1E2C48] text-white text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-black mb-3">
            Ready to Create an Unforgettable Event in Bangalore?
          </h2>
          <p className="text-xs sm:text-sm text-gray-300 max-w-2xl mx-auto mb-8">
            Contact 7Delights today for custom packages on cold pyros, confetti blasters, low-lying cloud fog, and stage special effects!
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

