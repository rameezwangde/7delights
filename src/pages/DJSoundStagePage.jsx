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
  Music, 
  Volume2, 
  Tv, 
  Zap, 
  Layers, 
  ChevronDown, 
  HelpCircle, 
  Radio, 
  Flame, 
  Sliders, 
  Award,
  CheckCircle2,
  Disc3,
  Lightbulb
} from 'lucide-react';
import { GoldUnderline } from '../components/Doodles';

export default function DJSoundStagePage() {
  const [activeTab, setActiveTab] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const categories = [
    { id: 'all', label: 'All DJ & Stage Equipment' },
    { id: 'sound-dj', label: 'DJ & Sound Systems' },
    { id: 'stage-flex', label: 'Stage & Flex Backdrops' },
    { id: 'visuals', label: 'LED Wall & Projectors' },
    { id: 'effects', label: 'Dance Floor & SFX' },
  ];

  // 8 Authentic Cards from https://www.7delights.in/dj-sound-stage-lighting/
  const equipmentCards = [
    {
      id: 1,
      title: 'DJ Sound Lighting Setup',
      slug: '#corporate-events/dj-music',
      hasDedicatedPage: true,
      category: 'sound-dj',
      image: '/assets/dj-sound-lighting-setup.webp',
      tag: 'DJ & Party Setup',
      badgeBg: 'bg-[#FFE8ED] text-[#EE3775] border-[#FFD0DB]',
      desc: 'DJ performances begin after the sound and lighting for the DJ is set! Complete high-fidelity truss riggings, pioneer consoles, moving heads, and strobe illuminations.',
      btnText: 'View DJ Setup',
    },
    {
      id: 2,
      title: 'Music System',
      slug: '#dj-overview',
      hasDedicatedPage: false,
      category: 'sound-dj',
      image: '/assets/music-system.webp',
      tag: 'Pro PA Audio',
      badgeBg: 'bg-[#EBF7F2] text-[#00A86B] border-[#C8EFE0]',
      desc: 'We install a powerful music system depending on the number of attendees! Precision acoustic line arrays, bass subwoofers, active monitors, and multi-channel analog/digital mixers.',
      btnText: 'View Music System',
    },
    {
      id: 3,
      title: 'Stage and Flex Backdrop',
      slug: '#corporate-events/stage-flex-background',
      hasDedicatedPage: true,
      category: 'stage-flex',
      image: '/assets/stage-flex-backdrop.webp',
      tag: 'Stage Fabrication',
      badgeBg: 'bg-[#FFF3DF] text-[#D97706] border-[#FFE4B8]',
      desc: 'We set themes, prepare the flex, and then get the background ready for the show! Heavy-duty modular wooden platform staging with custom high-resolution banner backdrops.',
      btnText: 'View Stage-Backdrop',
    },
    {
      id: 4,
      title: 'Led Wall',
      slug: '#corporate-events/led-wall',
      hasDedicatedPage: true,
      category: 'visuals',
      image: '/assets/led-wall-stage.webp',
      tag: 'Ultra HD Video Display',
      badgeBg: 'bg-[#F2EDFF] text-[#7B61FF] border-[#E0D5FF]',
      desc: 'DJ performances get a decent look with overwhelming LED walls! High refresh rate indoor/outdoor P2.6 and P3.9 LED video screens with real-time video processing switcher.',
      btnText: 'View Led Wall',
    },
    {
      id: 5,
      title: 'Projector and Screen',
      slug: '#dj-overview',
      hasDedicatedPage: false,
      category: 'visuals',
      image: '/assets/projector-and-screen.webp',
      tag: 'Projection Display',
      badgeBg: 'bg-[#FFE8ED] text-[#EE3775] border-[#FFD0DB]',
      desc: 'We get the projectors and screen ready when setting the DJ stage ready! High-lumen HD projectors with motorized drop-down and framed screens for visual presentations and video streams.',
      btnText: 'View Projector & Screen',
    },
    {
      id: 6,
      title: 'Grand Entry',
      slug: '#dj-overview',
      hasDedicatedPage: false,
      category: 'effects',
      image: '/assets/grand-entry.webp',
      tag: 'VIP Welcome Tunnel',
      badgeBg: 'bg-[#EBF7F2] text-[#00A86B] border-[#C8EFE0]',
      desc: 'Our arrangements for a decent entry for the guests are excellent! Red carpet VIP walkways, truss entrance arches, cold pyrotechnic fountains, and synced warm white uplighters.',
      btnText: 'View Grand Entry',
    },
    {
      id: 7,
      title: 'Dance Floor',
      slug: '#dj-overview',
      hasDedicatedPage: false,
      category: 'effects',
      image: '/assets/dance-floor.webp',
      tag: 'Party Dance Arena',
      badgeBg: 'bg-[#FFF3DF] text-[#D97706] border-[#FFE4B8]',
      desc: 'We use the best materials to get the grand dance floor ready for the participants. Acrylic illuminated LED interactive dance tiles and premium wood vinyl anti-skid surfaces.',
      btnText: 'View Dance Floor',
    },
    {
      id: 8,
      title: 'Confetti Blast-Cold Fire',
      slug: '#dj-overview',
      hasDedicatedPage: false,
      category: 'effects',
      image: '/assets/confetti-blast-cold-fire.webp',
      tag: 'Cold Pyros & SFX',
      badgeBg: 'bg-[#F2EDFF] text-[#7B61FF] border-[#E0D5FF]',
      desc: 'We set the party mood by making the participants involved in this activity. High-pressure CO2 metallic paper confetti blasters paired with smoke-free indoor spark fountains.',
      btnText: 'View Confetti & Pyros',
    },
  ];

  const filteredCards = equipmentCards.filter((card) => {
    const matchesCategory = activeTab === 'all' || card.category === activeTab;
    const matchesSearch = 
      card.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      card.desc.toLowerCase().includes(searchQuery.toLowerCase()) ||
      card.tag.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const specialtyPoints = [
    'Private Functions & Sangeet Ceremonies',
    'Engagement Parties & Cocktails',
    'Weddings & Reception Galas',
    'Birthday Parties & Milestones',
    'Anniversaries & Social Gatherings',
    'Corporate Events, Award Shows & Annual Summits',
    'Christmas & New Year Eve Bashes',
  ];

  const strengthPoints = [
    'A Team of technically-sound sound and lighting engineers',
    'Impeccable infrastructure that suits every party size & acoustic requirement',
    'Custom installation of sound systems depending on attendee capacity',
    'Top-class line-array audio systems (JBL, RCF, Yamaha)',
    'Plethora of intelligent lighting systems, including sharpy beams & high-lumen LED pars',
    'Budget-transparent & manageable packages with zero hidden costs',
    'Punctual on-time rigging and sound checks well before guest arrivals',
    'Dedicated standby technicians for uninterrupted, glitch-free audio/visual operation',
    'Facilities for bespoke disco counters, DJ consoles & dance arenas',
  ];

  const faqs = [
    {
      q: 'How far in advance should I book 7Delights dj-sound-stage-lighting for my event?',
      a: 'To ensure maximum availability of dj-sound-stage-lighting & specific equipment, we recommend booking at least 1 to 6 weeks in advance for social parties & corporate events, and 3 to 6 months in advance for major weddings or large-scale corporate launches. However, if you have a last-minute request, contact us & we will do our best to make it happen!',
    },
    {
      q: 'How long does it take for your team to set up?',
      a: 'Setup times vary by service. Simple dj-sound-stage-lighting may take 1 to 2 hours. Complex thematic stage setups, intricate lighting riggings, or heavy SFX installations can take anywhere from 4 to 12 hours. We always coordinate directly with the venue to ensure everything is flawlessly set up well before your first guest arrives.',
    },
    {
      q: 'What is your payment policy?',
      a: 'To secure your date, artists, and materials, we require an advance payment upon signing the contract. The remaining balance is structured into milestones leading up to, or on the day of the event.',
    },
    {
      q: 'Do you provide on-site technical sound engineers throughout the event?',
      a: 'Yes, absolutely! Every 7Delights DJ sound, stage, and lighting booking includes certified audio engineers, lighting operators, and stage coordinators stationed on-site from beginning to end to ensure flawless transitions and crystal-clear acoustics.',
    },
    {
      q: 'Can equipment be tailored for indoor banquet halls as well as open outdoor lawns?',
      a: 'Yes, we supply weatherproof line array speakers, heavy-duty outdoor trusses, generator-compatible power distributions, and ultra-bright daylight LED walls for outdoor grounds, as well as compact, acoustically balanced sound setups for indoor clubhouses and luxury hotel ballrooms.',
    },
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
            <span>Bangalore's Premier Sound, Stage & Lighting Organizers</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-[#111A2E] tracking-tight mb-4">
            DJ Stage Lighting & Production
          </h1>

          <div className="flex justify-center mb-6">
            <GoldUnderline className="w-48 sm:w-64 h-auto text-[#EE3775]" />
          </div>

          <p className="max-w-3xl mx-auto text-base sm:text-lg md:text-xl text-[#5A6E85] leading-relaxed mb-8">
            Electrify your party atmosphere with concert-grade sound systems, intelligent stage lighting, modular staging, ultra HD LED walls, and mesmerizing special effects engineered by Bangalore's top event production crew!
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="tel:+919980029977"
              className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-[#EE3775] hover:bg-[#DE2765] text-white font-bold text-base shadow-lg shadow-[#EE3775]/25 hover:shadow-xl hover:shadow-[#EE3775]/35 transition-all duration-300 hover:scale-[1.02]"
            >
              <Phone className="w-4 h-4 fill-white" />
              <span>Book DJ & Stage Setup</span>
            </a>
            <a
              href="https://api.whatsapp.com/send/?phone=919980029977&text=Hi%207Delights,%20I%20am%20interested%20in%20DJ%20Sound%20Stage%20Lighting%20services.%20Please%20share%20packages."
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

      {/* 2. EQUIPMENT & STAGE SERVICES GRID */}
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
                  className={`px-4 py-2 rounded-full text-xs sm:text-sm font-bold transition-all duration-200 ${
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
                placeholder="Search sound, lights, stage..."
                className="w-full pl-10 pr-4 py-2 text-sm rounded-full bg-white border border-gray-200 focus:outline-none focus:border-[#EE3775] focus:ring-2 focus:ring-[#EE3775]/20 transition-all text-[#111A2E] placeholder-gray-400"
              />
            </div>
          </div>

          {/* Cards Grid */}
          <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#111A2E] tracking-tight mb-3">DJ, Sound, Lighting & Stage Setups</h2>
            <p className="text-sm sm:text-base text-[#5A6E85]">Professional audio systems, intelligent concert lighting, custom truss stages, and backdrops across Bangalore.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {filteredCards.map((item) => (
              <div
                key={item.id}
                className="group bg-white rounded-2xl overflow-hidden border border-gray-100/80 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col hover:-translate-y-1"
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
                    {item.hasDedicatedPage ? (
                      <a
                        href={item.slug}
                        className="w-full py-2.5 px-4 rounded-xl bg-[#FFE8ED] text-[#EE3775] hover:bg-[#EE3775] hover:text-white font-bold text-xs flex items-center justify-center gap-1.5 transition-all duration-200"
                      >
                        <span>{item.btnText}</span>
                        <ChevronRight className="w-3.5 h-3.5" />
                      </a>
                    ) : (
                      <button
                        type="button"
                        onClick={() => {
                          const el = document.getElementById('dj-overview');
                          if (el) {
                            el.scrollIntoView({ behavior: 'smooth' });
                          }
                        }}
                        className="w-full py-2.5 px-4 rounded-xl bg-gray-50 text-gray-700 hover:bg-gray-100 font-bold text-xs flex items-center justify-center gap-1.5 transition-all duration-200 cursor-pointer"
                      >
                        <span>{item.btnText}</span>
                        <ChevronRight className="w-3.5 h-3.5 text-gray-400" />
                      </button>
                    )}
                    <a
                      href="tel:+919980029977"
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
                No equipment or service matches your search. Try different keywords!
              </p>
            </div>
          )}
        </div>
      </section>

      {/* 3. SECTION TWO: DJ SOUND & LIGHT - A 7DELIGHT SPECIALTY */}
      <section id="dj-overview" className="py-16 lg:py-20 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
            {/* Left Image Showcase */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-gray-100 group">
              <img
                src="/assets/stage-led-wall-showcase.webp"
                alt="Stage LED Wall & Lighting Showcase"
                className="w-full h-auto object-cover group-hover:scale-102 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-6 sm:p-8">
                <div className="text-white">
                  <span className="px-3 py-1 rounded-full bg-[#EE3775] text-[11px] font-bold uppercase tracking-wider mb-2 inline-block">
                    Concert Rigging
                  </span>
                  <p className="text-xl sm:text-2xl font-bold">Intelligent Moving Lights & LED Visuals</p>
                  <p className="text-xs sm:text-sm text-gray-200">Engineered for high-impact visual choreography</p>
                </div>
              </div>
            </div>

            {/* Right Content */}
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FFE8ED] border border-[#FFD0DB] text-[#EE3775] text-xs font-bold uppercase tracking-wider mb-4">
                <Disc3 className="w-3.5 h-3.5" />
                <span>Modern Party Ethics & Production</span>
              </div>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#111A2E] tracking-tight mb-4 leading-snug">
                DJ SOUND & LIGHT — A 7DELIGHT SPECIALTY!
              </h2>

              <p className="text-sm sm:text-base text-[#5A6E85] leading-relaxed mb-4">
                The ethics of parties have changed relatively fast in the last few years! Things and practices have changed significantly as partygoers like more and louder fun activities. The social parties, community gatherings, and corporate parties, especially, look for modern equipment for lighting and sound! The DJ Enclosures and Platforms are to be seen in almost all modern parties!
              </p>

              <p className="text-sm sm:text-base text-[#5A6E85] leading-relaxed mb-6">
                <strong>7Delights.in</strong> understands all your needs and fascinations for high-quality DJ SOUND and lighting arrangements! Our excellent sound equipment and infrastructure can create an electrifying impact on all attendees! You can enjoy our facilities well when you arrange any of these parties:
              </p>

              {/* Specialty Points Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                {specialtyPoints.map((point, idx) => (
                  <div key={idx} className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#EE3775] shrink-0" />
                    <span className="text-xs sm:text-sm font-semibold text-[#111A2E]">{point}</span>
                  </div>
                ))}
              </div>

              <p className="text-xs sm:text-sm text-[#5A6E85] italic mb-6">
                Our team of experts can arrange everything for you and get things ready before the party begins! We promise superb facilities that suit the unique theme and acoustic requirements of every party you plan to host.
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
      <section className="py-16 bg-[#FFFDF9] border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-3xl font-black text-[#111A2E] tracking-tight mb-3">
              Why Bangalore Trusts Our Sound & Lighting Production
            </h2>
            <GoldUnderline className="w-36 h-auto text-[#EE3775] mx-auto mb-3" />
            <p className="text-xs sm:text-sm text-[#5A6E85]">
              Seamless execution backed by enterprise infrastructure, passionate audio techs, and turnkey support.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow text-center">
              <div className="w-14 h-14 rounded-2xl bg-[#FFE8ED] text-[#EE3775] flex items-center justify-center mx-auto mb-4">
                <Sliders className="w-7 h-7" />
              </div>
              <p className="text-base font-bold text-[#111A2E] mb-2">Customizable Decoration</p>
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
                We have the richest décor and stage equipment infrastructure in Bangalore! We constantly work on enriching it further.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow text-center">
              <div className="w-14 h-14 rounded-2xl bg-[#EBF7F2] text-[#00A86B] flex items-center justify-center mx-auto mb-4">
                <Clock className="w-7 h-7" />
              </div>
              <h3 className="text-base font-bold text-[#111A2E] mb-2">24/7 Customer Service</h3>
              <p className="text-xs text-[#5A6E85] leading-relaxed">
                Our team of caring event executives is available round-the-clock to assist you with inquiries, scheduling, and site visits.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow text-center">
              <div className="w-14 h-14 rounded-2xl bg-[#F2EDFF] text-[#7B61FF] flex items-center justify-center mx-auto mb-4">
                <Award className="w-7 h-7" />
              </div>
              <h3 className="text-base font-bold text-[#111A2E] mb-2">Best Competent Team</h3>
              <p className="text-xs text-[#5A6E85] leading-relaxed">
                We take immense pride in our certified sound and light techs for their impeccable technical skills and swift problem-solving.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. SECTION FOUR: TECH PROFESSIONALS & TECHNICAL STRENGTHS */}
      <section className="py-16 lg:py-20 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
            {/* Left Content */}
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EBF7F2] border border-[#C8EFE0] text-[#00A86B] text-xs font-bold uppercase tracking-wider mb-4">
                <Zap className="w-3.5 h-3.5" />
                <span>Engineering Excellence</span>
              </div>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#111A2E] tracking-tight mb-4 leading-snug">
                We Are Proud of Our Robust and Best-in-Class Tech Professionals for Their Impeccable Skills
              </h2>

              <p className="text-sm sm:text-base text-[#5A6E85] leading-relaxed mb-6">
                <strong>7Delights.in</strong> is proud to claim its superiority when it comes to offering facilities for DJ Sound and Lighting everywhere in and around Bangalore. Our core strength lies in:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                {strengthPoints.map((point, idx) => (
                  <div key={idx} className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#00A86B] shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm font-semibold text-[#111A2E]">{point}</span>
                  </div>
                ))}
              </div>

              <p className="text-xs sm:text-sm text-[#5A6E85] leading-relaxed mb-8">
                Our facilities for DJ Sound and Lighting have established us as the most preferred place for these services. We understand our responsibilities very well and carry them out with utmost sincerity! Reach us whenever you wish to add an electrifying touch to your party!
              </p>

              <a
                href="tel:+919980029977"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#EE3775] hover:bg-[#DE2765] text-white font-bold text-sm shadow-md transition-all hover:scale-105"
              >
                <Phone className="w-4 h-4 fill-white" />
                <span>Talk to Our Sound Engineer</span>
              </a>
            </div>

            {/* Right Image Showcase */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-gray-100 group">
              <img
                src="/assets/stage-setup-showcase.webp"
                alt="Complete Stage & Audio Setup in Bangalore"
                className="w-full h-auto object-cover group-hover:scale-102 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-6 sm:p-8">
                <div className="text-white">
                  <span className="px-3 py-1 rounded-full bg-[#00A86B] text-[11px] font-bold uppercase tracking-wider mb-2 inline-block">
                    Turnkey Stage Architecture
                  </span>
                  <p className="text-xl sm:text-2xl font-bold">Full Stage, Audio & Flex Installation</p>
                  <p className="text-xs sm:text-sm text-gray-200">Customized to any venue geometry across Karnataka</p>
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
              Everything you need to know about booking sound systems, stage lighting, and party production with 7Delights.
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
            Ready to Electrify Your Next Event in Bangalore?
          </h2>
          <p className="text-xs sm:text-sm text-gray-300 max-w-2xl mx-auto mb-8">
            Contact 7Delights today for custom quotes on DJ sound consoles, intelligent moving stage lighting, LED visual walls, and dance floors!
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

