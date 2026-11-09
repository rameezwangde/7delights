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
  Heart, 
  Layers, 
  ChevronDown, 
  HelpCircle, 
  Sliders, 
  Award, 
  CheckCircle2, 
  Flower2, 
  Home, 
  Baby, 
  Calendar,
  Sparkle
} from 'lucide-react';
import { GoldUnderline } from '../components/Doodles';

export default function FlowerDecorationsPage() {
  const [activeTab, setActiveTab] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const categories = [
    { id: 'all', label: 'All Flower Decor' },
    { id: 'weddings', label: 'Weddings & Receptions' },
    { id: 'ceremonies', label: 'Naming & House Warming' },
    { id: 'milestones', label: 'Baby Shower & Birthdays' },
  ];

  // 4 Core Event Cards from https://www.7delights.in/flower-decorations/
  const flowerCards = [
    {
      id: 1,
      title: 'Wedding Planning',
      category: 'weddings',
      image: '/assets/wedding-flower-decor.webp',
      tag: 'Grand Wedding Decor',
      badgeBg: 'bg-[#FFE8ED] text-[#EE3775] border-[#FFD0DB]',
      desc: 'Arranging wedding decorations with all types of flowers is a specialty for us! Complete floral mandaps, floral entrance arches, Varmala garlands, and fairy-tale banquet setups.',
      btnText: 'View Wedding Planning',
    },
    {
      id: 2,
      title: 'Naming Ceremony Decoration',
      category: 'ceremonies',
      image: '/assets/naming-ceremony-decor.webp',
      tag: 'Traditional Floral Cradle',
      badgeBg: 'bg-[#FFF3DF] text-[#D97706] border-[#FFE4B8]',
      desc: 'We make gala flower decorations to celebrate the naming ceremony of your loved one! Fresh marigold, jasmine, and orchid backdrops surrounding royal decorated cradles.',
      btnText: 'View Naming Ceremony',
    },
    {
      id: 3,
      title: 'House Warming',
      category: 'ceremonies',
      image: '/assets/house-warming-flower.webp',
      tag: 'Griha Pravesha Decor',
      badgeBg: 'bg-[#EBF7F2] text-[#00A86B] border-[#C8EFE0]',
      desc: 'Our flower decoration can welcome good luck and fortune in your new home! Traditional entrance door torans, puja mandir decorations, and fragrant floral floor rangolis.',
      btnText: 'View House Warming',
    },
    {
      id: 4,
      title: 'Baby Shower',
      category: 'milestones',
      image: '/assets/baby-shower-flower.webp',
      tag: 'Seemantha / Baby Shower',
      badgeBg: 'bg-[#F2EDFF] text-[#7B61FF] border-[#E0D5FF]',
      desc: 'Welcoming a baby? Make it special and memorable with fantastic flower decoration! Elegant pastel floral wings, swing decorations, and artistic photo op booths.',
      btnText: 'View Baby Shower',
    },
  ];

  const filteredCards = flowerCards.filter((card) => {
    const matchesCategory = activeTab === 'all' || card.category === activeTab;
    const matchesSearch = 
      card.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      card.desc.toLowerCase().includes(searchQuery.toLowerCase()) ||
      card.tag.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const strengthsList = [
    'A superb team of committed, master flower decorators',
    'Years of rich event experience across luxury venues in Bengaluru',
    'Ability to use a wide array of exotic and traditional flowers with perfection',
    'Direct collaboration with top premium flower suppliers for farm-fresh blooms',
    'Decent, transparent, and affordable pricing with zero hidden surcharges',
    '100% punctuality: flawless setup completed hours before guest arrival',
    'Capability to design custom theme-based, engaging flower concepts',
  ];

  const galleryImages = [
    {
      src: '/assets/gallery-birthday-flower.webp',
      title: 'Birthday Flower Decoration',
      desc: 'Pastel botanical floral backdrop with custom illumination'
    },
    {
      src: '/assets/gallery-engagement-flower.webp',
      title: 'Engagement Flower Decoration',
      desc: 'Romantic floral ring and rose-petal stage backdrop'
    },
    {
      src: '/assets/gallery-flower-decor.webp',
      title: 'Theme Flower Decor',
      desc: 'Artistic carnation and orchid floral wall installation'
    },
    {
      src: '/assets/gallery-reception-flower.webp',
      title: 'Reception Stage Floral Canopy',
      desc: 'Grand botanical ceiling drops and stage columns'
    },
    {
      src: '/assets/gallery-mandap-flower.webp',
      title: 'Traditional Mandap Flower Setup',
      desc: 'Authentic South Indian wedding mandap with fresh marigold and jasmine'
    },
    {
      src: '/assets/gallery-wedding-flower.webp',
      title: 'Wedding Floral Stage',
      desc: 'Regal floral arches with warm ambient spotlighting'
    },
    {
      src: '/assets/gallery-naming-flower.webp',
      title: 'Naming Ceremony Cradle Decor',
      desc: 'Traditional blossom arrangement for auspicious celebrations'
    }
  ];

  const faqs = [
    {
      q: 'How far in advance should I book 7Delights.in flower decorations for my event?',
      a: 'To ensure maximum availability of flower decorations, specific themes, & equipment, we recommend booking at least 1 to 6 weeks in advance for social parties & corporate events, and 3 to 6 months in advance for major weddings or large-scale corporate launches. However, if you have a last-minute request, contact us & we will do our best to make it happen!'
    },
    {
      q: 'How long does it take for your team to set up?',
      a: 'Setup times vary by service. Simple flower decorations may take 1 to 2 hours. Complex thematic stage setups, intricate floral mandaps, or heavy floral wall installations can take anywhere from 4 to 12 hours. We always coordinate directly with the venue to ensure everything is flawlessly set up well before your first guest arrives.'
    },
    {
      q: 'What is your payment policy?',
      a: 'To secure your date, artists, and materials, we require an advance payment upon signing the contract. The remaining balance is structured into milestones leading up to, or on the day of the event.'
    },
    {
      q: 'Do you use original fresh flowers or artificial flowers?',
      a: 'We provide both! Fresh, fragrant original flowers (such as Bangalore roses, orchids, carnations, marigolds, and jasmine) are our hallmark, while premium artificial silk florals are also offered for budget optimization or multi-day exhibitions.'
    },
    {
      q: 'Can flower decoration themes be customized to our event outfit colors?',
      a: 'Yes, absolutely! Our senior floral stylists consult with you on your wedding attire, hall lighting, and personal preferences to curate perfectly harmonized color palettes.'
    }
  ];

  return (
    <div className="min-h-screen bg-[#FFFDF9] text-[#111A2E] flex flex-col font-sans selection:bg-[#EE3775] selection:text-white">
      {/* 1. HERO SECTION */}
      <section className="relative pt-12 pb-20 lg:pt-16 lg:pb-28 overflow-hidden bg-gradient-to-b from-[#FFF5F7] via-[#FFFDF9] to-[#FFFDF9]">
        {/* Subtle decorative glow */}
        <div className="absolute top-10 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-gradient-to-r from-[#EE3775]/5 via-rose-200/10 to-[#7B61FF]/5 blur-3xl pointer-events-none -z-10" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#FFE8ED] border border-[#FFD0DB] text-[#EE3775] text-xs sm:text-sm font-bold uppercase tracking-wider mb-6 animate-pulse">
            <Sparkles className="w-4 h-4" />
            <span>Bangalore's Premier Floral Stylists &amp; Wedding Decorators</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-[#111A2E] tracking-tight mb-4">
            Flower Decorations for Wedding Events
          </h1>

          <div className="flex justify-center mb-6">
            <GoldUnderline className="w-48 sm:w-64 h-auto text-[#EE3775]" />
          </div>

          <p className="max-w-3xl mx-auto text-base sm:text-lg md:text-xl text-[#5A6E85] leading-relaxed mb-8">
            Transform your special celebrations with enchanting, farm-fresh floral decor! From royal wedding mandaps and floral walkways to auspicious Griha Pravesha and naming ceremony cradles in Bangalore.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="tel:+919980029977"
              className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-[#EE3775] hover:bg-[#DE2765] text-white font-bold text-base shadow-lg shadow-[#EE3775]/25 hover:shadow-xl hover:shadow-[#EE3775]/35 transition-all duration-300 hover:scale-[1.02]"
            >
              <Phone className="w-4 h-4 fill-white" />
              <span>Book Flower Decoration</span>
            </a>
            <a
              href="https://api.whatsapp.com/send/?phone=919980029977&text=Hi%207Delights,%20I%20am%20interested%20in%20Flower%20Decorations.%20Please%20share%20packages."
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

      {/* 2. FLOWER DECOR SERVICES GRID */}
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
                placeholder="Search wedding, cradle, house warming..."
                className="w-full pl-10 pr-4 py-2 text-sm rounded-full bg-white border border-gray-200 focus:outline-none focus:border-[#EE3775] focus:ring-2 focus:ring-[#EE3775]/20 transition-all text-[#111A2E] placeholder-gray-400"
              />
            </div>
          </div>

          {/* Cards Grid */}
          <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#111A2E] tracking-tight mb-3">Floral Architecture & Decoration Services</h2>
            <p className="text-sm sm:text-base text-[#5A6E85]">Fresh farm blossoms, exotic imported flowers, traditional marigolds, and contemporary luxury floral sets.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {filteredCards.map((item) => (
              <div
                key={item.id}
                onClick={() => {
                  const el = document.getElementById('flowers-overview');
                  if (el) {
                    el.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="group bg-white rounded-2xl overflow-hidden border border-gray-100/80 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col hover:-translate-y-1 cursor-pointer"
              >
                {/* Image Container */}
                <div className="relative h-56 sm:h-60 w-full overflow-hidden bg-gray-100">
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

                  {/* Actions (Always stay on same page) */}
                  <div className="pt-3 border-t border-gray-100 flex flex-col gap-2">
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        const el = document.getElementById('flowers-overview');
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
                No flower decoration matches your search. Try different keywords!
              </p>
            </div>
          )}
        </div>
      </section>

      {/* 3. SECTION TWO: FLOWER DECORATION - A GRAND SPECIALTY */}
      <section id="flowers-overview" className="py-16 lg:py-20 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
            {/* Left Image Showcase */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-gray-100 group">
              <img
                src="/assets/flower-decor-specialty.webp"
                alt="Flower Decoration Specialty in Bangalore"
                className="w-full h-auto object-cover group-hover:scale-102 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-6 sm:p-8">
                <div className="text-white">
                  <span className="px-3 py-1 rounded-full bg-[#EE3775] text-[11px] font-bold uppercase tracking-wider mb-2 inline-block">
                    Botanical Artistry
                  </span>
                  <p className="text-xl sm:text-2xl font-bold">Original &amp; Exotic Floral Architecture</p>
                  <p className="text-xs sm:text-sm text-gray-200">Crafted with farm-fresh blossoms across Bengaluru</p>
                </div>
              </div>
            </div>

            {/* Right Content */}
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FFE8ED] border border-[#FFD0DB] text-[#EE3775] text-xs font-bold uppercase tracking-wider mb-4">
                <Flower2 className="w-3.5 h-3.5" />
                <span>The Essence of Celebrations</span>
              </div>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#111A2E] tracking-tight mb-4 leading-snug">
                Flower Decoration — A Grand Specialty of 7DELIGHTS.in!
              </h2>

              <p className="text-sm sm:text-base text-[#5A6E85] leading-relaxed mb-4">
                At <strong>7DELIGHTS.in</strong>, we consider flowers the best and most potent décor items, as they can impress people more than anything else! Our long experience in all types of décor items indicates that flowers can impact the human mind immediately and profoundly. Though original fresh flowers are the first choice among the majority of clients, premium artificial flowers are also on their way to acclaim decent popularity.
              </p>

              <p className="text-sm sm:text-base text-[#5A6E85] leading-relaxed mb-4">
                We have a plethora of flower decoration ideas that are perfect for diverse occasions. We listen to the requirements or fascinations first, and then we decide on decoration for them. Our commitment to bringing the best flower decoration has brought us appreciation and recognition among a large number of clients from all over Bangalore.
              </p>

              <p className="text-sm sm:text-base text-[#5A6E85] leading-relaxed mb-6">
                Before you decide finally to engage the best providers of flower decoration in Bangalore, you must discuss your plans with our experts! We have gathered huge experience in serving clients with top-class and most exciting flower decoration!
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

      {/* 4. SECTION THREE: 4 CORE PILLARS OF 7DELIGHT DECOR INFRASTRUCTURE */}
      <section className="py-16 bg-[#FFFDF9] border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-3xl font-black text-[#111A2E] tracking-tight mb-3">
              Why Bangalore Chooses 7Delights Flower Decorators
            </h2>
            <GoldUnderline className="w-36 h-auto text-[#EE3775] mx-auto mb-3" />
            <p className="text-xs sm:text-sm text-[#5A6E85]">
              Freshly sourced blossoms, creative artisanal layouts, and reliable on-time execution.
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
                We have the richest décor infrastructure in Bangalore! We work on enriching it further every single day.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow text-center">
              <div className="w-14 h-14 rounded-2xl bg-[#EBF7F2] text-[#00A86B] flex items-center justify-center mx-auto mb-4">
                <Clock className="w-7 h-7" />
              </div>
              <h3 className="text-base font-bold text-[#111A2E] mb-2">24/7 Customer Service</h3>
              <p className="text-xs text-[#5A6E85] leading-relaxed">
                Our team of caring executives is available round-the-clock to help you with all your queries and consultations!
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow text-center">
              <div className="w-14 h-14 rounded-2xl bg-[#F2EDFF] text-[#7B61FF] flex items-center justify-center mx-auto mb-4">
                <Award className="w-7 h-7" />
              </div>
              <h3 className="text-base font-bold text-[#111A2E] mb-2">Best Competent Team</h3>
              <p className="text-xs text-[#5A6E85] leading-relaxed">
                We take pride in our robust and skilled team of floral artisans for their impeccable crafting techniques.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. SECTION FOUR: FLOWER DECORATION AT ITS BEST & STRENGTHS */}
      <section className="py-16 lg:py-20 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
            {/* Left Content */}
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EBF7F2] border border-[#C8EFE0] text-[#00A86B] text-xs font-bold uppercase tracking-wider mb-4">
                <Sparkle className="w-3.5 h-3.5" />
                <span>Artisanal Perfection</span>
              </div>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#111A2E] tracking-tight mb-4 leading-snug">
                Flower Decoration At Its Best With 7DELIGHTS.in!
              </h2>

              <p className="text-sm sm:text-base text-[#5A6E85] leading-relaxed mb-6">
                Flowers convey particular messages when they are used to perfection for decoration purposes. All decorations get a unique identity when our flower decorators handle the best décor ideas. We handle every décor task with ultimate perfection.
              </p>

              <h3 className="text-lg font-bold text-[#111A2E] mb-3">
                Our Strength For Flower Decoration:
              </h3>

              <div className="space-y-2.5 mb-6">
                {strengthsList.map((strength, idx) => (
                  <div key={idx} className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#EE3775] shrink-0" />
                    <span className="text-xs sm:text-sm font-semibold text-[#111A2E]">{strength}</span>
                  </div>
                ))}
              </div>

              <p className="text-xs sm:text-sm text-[#5A6E85] leading-relaxed mb-8">
                Get in touch with the experts at <strong>7DELIGHTS.in</strong>. We can bring you the best flower decoration facilities to feel proud of engaging us! Talk to our top team of professionals right now!
              </p>

              <a
                href="tel:+919980029977"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#EE3775] hover:bg-[#DE2765] text-white font-bold text-sm shadow-md transition-all hover:scale-105"
              >
                <Phone className="w-4 h-4 fill-white" />
                <span>Talk to Our Floral Designer</span>
              </a>
            </div>

            {/* Right Image Showcase */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-gray-100 group">
              <img
                src="/assets/flower-decor-strength.webp"
                alt="Flower Decoration at Its Best in Bangalore"
                className="w-full h-auto object-cover group-hover:scale-102 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-6 sm:p-8">
                <div className="text-white">
                  <span className="px-3 py-1 rounded-full bg-[#EE3775] text-[11px] font-bold uppercase tracking-wider mb-2 inline-block">
                    Regal Ambience
                  </span>
                  <p className="text-xl sm:text-2xl font-bold">Grand Wedding &amp; Mandap Sets</p>
                  <p className="text-xs sm:text-sm text-gray-200">Custom flower styling matching your celebration theme</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. PHOTO GALLERY SECTION */}
      <section className="py-16 lg:py-20 bg-[#FFFDF9] border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs uppercase tracking-wider font-bold text-[#EE3775] bg-white px-3 py-1 rounded-md border border-[#F5E6EC]">
              Our Creations
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#111A2E] mt-3">
              Flower Decor Gallery
            </h2>
            <GoldUnderline className="w-28 h-auto text-[#EE3775] mx-auto mt-2" />
            <p className="text-xs sm:text-sm text-[#5A6E85] mt-2">
              Browse actual photographs of our wedding mandaps, reception stages, cradles, and floral backdrops across Bengaluru.
            </p>
          </div>

          {/* Photo Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {galleryImages.map((img, idx) => (
              <div 
                key={idx}
                className="group relative rounded-2xl overflow-hidden shadow-xs hover:shadow-md transition-shadow bg-white border border-[#F5E6EC]"
              >
                <div className="aspect-[4/3] overflow-hidden bg-gray-100">
                  <img
                    src={img.src}
                    alt={img.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
                <div className="p-4 bg-white">
                  <h3 className="text-sm font-bold text-[#111A2E] mb-1">{img.title}</h3>
                  <p className="text-xs text-[#5A6E85]">{img.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. FAQS SECTION */}
      <section className="py-16 lg:py-20 bg-white border-t border-gray-100">
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
              Everything you need to know about booking fresh flower decoration, scheduling, and setups with 7Delights.
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

      {/* 8. BOTTOM CTA SECTION */}
      <section className="py-14 bg-gradient-to-r from-[#111A2E] to-[#1E2C48] text-white text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-black mb-3">
            Ready to Celebrate with Enchanting Flower Decoration?
          </h2>
          <p className="text-xs sm:text-sm text-gray-300 max-w-2xl mx-auto mb-8">
            Contact 7Delights today for personalized flower styling, wedding mandap design, and Griha Pravesha floral decor in Bangalore!
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

