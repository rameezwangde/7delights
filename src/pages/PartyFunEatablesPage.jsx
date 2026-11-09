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
  Layers, 
  ChevronDown, 
  HelpCircle, 
  Sliders, 
  Award, 
  CheckCircle2, 
  UtensilsCrossed, 
  Sparkle,
  IceCream,
  Coffee,
  Candy,
  Heart
} from 'lucide-react';
import { GoldUnderline } from '../components/Doodles';

export default function PartyFunEatablesPage() {
  const [activeTab, setActiveTab] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const categories = [
    { id: 'all', label: 'All Fun Eatables' },
    { id: 'sweet', label: 'Cotton Candy & Chocolate' },
    { id: 'snacks', label: 'Popcorn & Sweet Corn' },
    { id: 'desi', label: 'Ice Gola & Bombay Mithai' },
  ];

  // 6 Authentic Live Food Stalls from https://www.7delights.in/party-fun-eatables/
  const eatableCards = [
    {
      id: 1,
      title: 'Party-Popcorn',
      slug: '#party-fun-eatables/popcorn',
      hasDedicatedPage: true,
      category: 'snacks',
      image: '/assets/popcorn-stall.webp',
      tag: 'Fresh Popcorn Stall',
      badgeBg: 'bg-[#FFE8ED] text-[#EE3775] border-[#FFD0DB]',
      desc: 'Our infrastructure includes decent installations to supply delicious popcorn! Freshly popped buttery and salted corn served in vintage cinema paper bags.',
      btnText: 'View Popcorn',
    },
    {
      id: 2,
      title: 'Cotton Candy',
      slug: '#party-fun-eatables/cotton-candy',
      hasDedicatedPage: true,
      category: 'sweet',
      image: '/assets/cotton-candy-stall.webp',
      tag: 'Candy Floss / Buddi Ke Baal',
      badgeBg: 'bg-[#FFF3DF] text-[#D97706] border-[#FFE4B8]',
      desc: 'Our expertise in supplying you with the best cotton candy! Spun live right before kids and guests in classic pink strawberry and vibrant pastel flavors.',
      btnText: 'View Cotton Candy',
    },
    {
      id: 3,
      title: 'Chocolate Fountain',
      slug: '#party-fun-eatables/chocolate-fountain',
      hasDedicatedPage: true,
      category: 'sweet',
      image: '/assets/chocolate-fountain-stall.webp',
      tag: 'Fondue Fountain',
      badgeBg: 'bg-[#F2EDFF] text-[#7B61FF] border-[#E0D5FF]',
      desc: 'Our special arrangement for fountain chocolate fondue can make your guests elated! Multi-tier cascading warm milk chocolate with marshmallows, wafers, and fruits.',
      btnText: 'View Fountain Chocolate',
    },
    {
      id: 4,
      title: 'Sweet Corn',
      slug: '#party-fun-eatables/sweet-corn',
      hasDedicatedPage: true,
      category: 'snacks',
      image: '/assets/sweet-corn-stall.webp',
      tag: 'Steamed Sweet Corn',
      badgeBg: 'bg-[#EBF7F2] text-[#00A86B] border-[#C8EFE0]',
      desc: 'We obtain organic sweet corn to prepare decent recipes to serve your guests! Steamed piping-hot cups seasoned with butter, peri-peri, chat masala, and lime.',
      btnText: 'View Sweet Corn',
    },
    {
      id: 5,
      title: 'Gola Ice Crush',
      slug: '#party-fun-eatables/gola-ice-crush',
      hasDedicatedPage: true,
      category: 'desi',
      image: '/assets/gola-ice-stall.webp',
      tag: 'Chuski / Ice Gola',
      badgeBg: 'bg-[#FFE8ED] text-[#EE3775] border-[#FFD0DB]',
      desc: 'The taste of Gola Ice can make your guests feel elated! Crushed shaved ice on sticks dipped in authentic kala khatta, rose, mango, and tangy masala syrups.',
      btnText: 'View Gola Ice Crush',
    },
    {
      id: 6,
      title: 'Bombay Mithaiwala',
      slug: '#party-fun-eatables/bombay-mithaiwala',
      hasDedicatedPage: true,
      category: 'desi',
      image: '/assets/bombay-mithaiwala-stall.webp',
      tag: 'Live Mithai Counter',
      badgeBg: 'bg-[#FFF3DF] text-[#D97706] border-[#FFE4B8]',
      desc: 'We supply you with 100% original and delicious sweets from Bombay Mithaiwala. Authentic halwas, crunchy pedas, and traditional Indian confectioneries.',
      btnText: 'View Bombay Mithaiwala',
    },
  ];

  const filteredCards = eatableCards.filter((card) => {
    const matchesCategory = activeTab === 'all' || card.category === activeTab;
    const matchesSearch = 
      card.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      card.desc.toLowerCase().includes(searchQuery.toLowerCase()) ||
      card.tag.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const strengthsList = [
    'A top team of certified, hygienic culinary professionals',
    'Unchallenged expertise in live live-station party catering',
    'Experience in managing hundreds of birthday parties, corporate carnivals & galas',
    '100% Punctuality: Stalls set up and serving 1 hour prior to start',
    'Manageable, transparent costing with zero hidden fees',
    '100% quality control: food-grade ingredients and sanitization',
    'Full-service catering facilities and custom party menus available on demand!',
  ];

  const faqs = [
    {
      q: 'How far in advance should I book 7Delights party fun eatables for my event?',
      a: 'To ensure maximum availability of party fun eatables & equipment, we recommend booking at least 1 to 6 weeks in advance for social parties & corporate events, and 3 to 6 months in advance for major weddings or large-scale corporate launches. However, if you have a last-minute request, contact us & we will do our best to make it happen!'
    },
    {
      q: 'How long does it take for your team to set up?',
      a: 'Setup times vary by service. Party fun eatables stalls typically take 1 to 2 hours. We always coordinate directly with the venue to ensure power points, tables, and sanitary counter covers are flawlessly set up well before your first guest arrives.'
    },
    {
      q: 'What is your payment policy?',
      a: 'To secure your date, operators, and raw materials, we require an advance payment upon signing the contract. The remaining balance is structured into milestones leading up to, or on the day of the event.'
    },
    {
      q: 'Are the food ingredients fresh and prepared hygienically on-site?',
      a: 'Yes, 100%! All our stall operators wear food-safe gloves, hairnets, and aprons. We use top-tier organic sweet corn, purified RO ice for golas, premium dairy chocolate for fountains, and certified safe food colorings.'
    },
    {
      q: 'What does the venue/host need to provide for live eatable counters?',
      a: 'Hosts only need to provide standard 6-foot banquet tables with tablecloths and continuous 15A electrical power points nearby for machine operation.'
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
            <span>Bangalore's Premier Party Food Stalls &amp; Live Eatables</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#111A2E] tracking-tight mb-2">
            Party Fun Eatables for Events
          </h1>

          <div className="flex justify-center mb-4">
            <GoldUnderline className="w-40 sm:w-52 h-auto text-[#EE3775]" />
          </div>

          <p className="max-w-3xl mx-auto text-sm sm:text-base md:text-lg text-[#5A6E85] leading-relaxed mb-6">
            Treat your guests to mouth-watering live party counters! 7Delights provides delicious fresh popcorn, fluffy cotton candy, multi-tier chocolate fountains, steamed sweet corn, desi ice gola, and Bombay mithai across Bengaluru celebrations.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <a
              href="tel:+919980029977"
              className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full bg-[#EE3775] hover:bg-[#DE2765] text-white font-bold text-sm shadow-md shadow-[#EE3775]/25 hover:shadow-lg transition-all duration-300 hover:scale-[1.02]"
            >
              <Phone className="w-4 h-4 fill-white" />
              <span>Book Party Eatables</span>
            </a>
            <a
              href="https://api.whatsapp.com/send/?phone=919980029977&text=Hi%207Delights,%20I%20am%20interested%20in%20Party%20Fun%20Eatables.%20Please%20share%20packages."
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

      {/* 2. EATABLES SERVICES GRID */}
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
                placeholder="Search popcorn, candy, chocolate..."
                className="w-full pl-10 pr-4 py-2 text-sm rounded-full bg-white border border-gray-200 focus:outline-none focus:border-[#EE3775] focus:ring-2 focus:ring-[#EE3775]/20 transition-all text-[#111A2E] placeholder-gray-400"
              />
            </div>
          </div>

          {/* Cards Grid */}
          <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#111A2E] tracking-tight mb-3">Live Fun Food & Snack Stalls</h2>
            <p className="text-sm sm:text-base text-[#5A6E85]">Delight your guests with freshly prepared carnival treats, nostalgic street snacks, and premium confectionery counters.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {filteredCards.map((item) => (
              <div
                key={item.id}
                onClick={() => {
                  const el = document.getElementById('eatables-overview');
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

                  {/* Actions */}
                  <div className="pt-3 border-t border-gray-100 flex flex-col gap-2">
                    {item.hasDedicatedPage ? (
                      <a
                        href={item.slug}
                        onClick={(e) => e.stopPropagation()}
                        className="w-full py-2.5 px-4 rounded-xl bg-[#FFE8ED] text-[#EE3775] hover:bg-[#EE3775] hover:text-white font-bold text-xs flex items-center justify-center gap-1.5 transition-all duration-200 cursor-pointer"
                      >
                        <span>{item.btnText}</span>
                        <ChevronRight className="w-3.5 h-3.5" />
                      </a>
                    ) : (
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          const el = document.getElementById('eatables-overview');
                          if (el) {
                            el.scrollIntoView({ behavior: 'smooth' });
                          }
                        }}
                        className="w-full py-2.5 px-4 rounded-xl bg-gray-50 text-gray-700 hover:bg-[#EE3775] hover:text-white font-bold text-xs flex items-center justify-center gap-1.5 transition-all duration-200 cursor-pointer"
                      >
                        <span>{item.btnText}</span>
                        <ChevronRight className="w-3.5 h-3.5" />
                      </button>
                    )}
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
                No party eatable matches your search. Try different keywords!
              </p>
            </div>
          )}
        </div>
      </section>

      {/* 3. SECTION TWO: SERVING THE TASTIEST EATABLES */}
      <section id="eatables-overview" className="py-10 lg:py-12 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-center">
            {/* Left Image Showcase */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-gray-100 group">
              <img
                src="/assets/chocolate-fountain-showcase.webp"
                alt="Chocolate Fountain and Party Eatables in Bangalore"
                className="w-full h-auto object-cover group-hover:scale-102 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-6 sm:p-8">
                <div className="text-white">
                  <span className="px-3 py-1 rounded-full bg-[#EE3775] text-[11px] font-bold uppercase tracking-wider mb-2 inline-block">
                    Live Food Stations
                  </span>
                  <p className="text-xl sm:text-2xl font-bold">Multi-Tier Fondue &amp; Live Popcorn</p>
                  <p className="text-xs sm:text-sm text-gray-200">Prepared fresh with premium hygiene standards across Bengaluru</p>
                </div>
              </div>
            </div>

            {/* Right Content */}
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FFE8ED] border border-[#FFD0DB] text-[#EE3775] text-xs font-bold uppercase tracking-wider mb-4">
                <UtensilsCrossed className="w-3.5 h-3.5" />
                <span>Culinary Party Delights</span>
              </div>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#111A2E] tracking-tight mb-4 leading-snug">
                7DELIGHTS — Serving The Tastiest Eatables
              </h2>

              <p className="text-sm sm:text-base text-[#5A6E85] leading-relaxed mb-4">
                Parties are incomplete without the tastiest foods! Serving our clients with the best and most delicious foods becomes a clear priority for everyone. We have the most committed professionals who understand their duties when it comes to supplying clients with delicious food. We never compromise on quality and carry out responsibilities with utmost sincerity.
              </p>

              <p className="text-sm sm:text-base text-[#5A6E85] leading-relaxed mb-4">
                We have set strict quality parameters when it comes to preparing the best eatables for every client. We talk to the client in detail before setting the counters. Following your recommendations becomes essential for us. The best thing lies in the fact that our success record for preparing joyful party menus is outstanding.
              </p>

              <p className="text-sm sm:text-base text-[#5A6E85] leading-relaxed mb-6">
                Collaborate with us whenever you are planning to hold a party to celebrate special moments or occasions! We promise to make you happy and satisfied when you serve your guests the tastiest food and eatables!
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
              Why Bangalore Loves Our Party Food Counters
            </h2>
            <GoldUnderline className="w-32 h-auto text-[#EE3775] mx-auto mb-2" />
            <p className="text-xs sm:text-sm text-[#5A6E85]">
              Seamless execution backed by hygienic ingredients, food-grade equipment, and cheerful attendants.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow text-center">
              <div className="w-14 h-14 rounded-2xl bg-[#FFE8ED] text-[#EE3775] flex items-center justify-center mx-auto mb-4">
                <Sliders className="w-7 h-7" />
              </div>
              <p className="text-base font-bold text-[#111A2E] mb-2">Customizable Menus</p>
              <p className="text-xs text-[#5A6E85] leading-relaxed">
                Meeting your dream and flavor preferences becomes a priority for us, and we do it with all our strength!
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow text-center">
              <div className="w-14 h-14 rounded-2xl bg-[#FFF3DF] text-[#D97706] flex items-center justify-center mx-auto mb-4">
                <Layers className="w-7 h-7" />
              </div>
              <h3 className="text-base font-bold text-[#111A2E] mb-2">Rich Infrastructure</h3>
              <p className="text-xs text-[#5A6E85] leading-relaxed">
                We have the richest live-food stall infrastructure in Bangalore! We work on enriching it further every day.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow text-center">
              <div className="w-14 h-14 rounded-2xl bg-[#EBF7F2] text-[#00A86B] flex items-center justify-center mx-auto mb-4">
                <Clock className="w-7 h-7" />
              </div>
              <h3 className="text-base font-bold text-[#111A2E] mb-2">24/7 Customer Service</h3>
              <p className="text-xs text-[#5A6E85] leading-relaxed">
                Our team of caring executives is available round-the-clock to help you with booking dates and custom menus!
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow text-center">
              <div className="w-14 h-14 rounded-2xl bg-[#F2EDFF] text-[#7B61FF] flex items-center justify-center mx-auto mb-4">
                <Award className="w-7 h-7" />
              </div>
              <h3 className="text-base font-bold text-[#111A2E] mb-2">Best Competent Team</h3>
              <p className="text-xs text-[#5A6E85] leading-relaxed">
                Our certified stall attendants ensure sterile handling, warm hospitality, and speedy serving for all guests.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. SECTION FOUR: WE SERVE YOUR GUESTS THE BEST */}
      <section className="py-10 lg:py-12 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-center">
            {/* Left Content */}
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EBF7F2] border border-[#C8EFE0] text-[#00A86B] text-xs font-bold uppercase tracking-wider mb-4">
                <Sparkle className="w-3.5 h-3.5" />
                <span>Hygiene &amp; Quality First</span>
              </div>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#111A2E] tracking-tight mb-4 leading-snug">
                7DELIGHT — We Serve Your Guests The Best
              </h2>

              <p className="text-sm sm:text-base text-[#5A6E85] leading-relaxed mb-6">
                Right from the inception of our business, <strong>7DELIGHTS.in</strong> has been the favorite destination to serve clients with the finest food. We undertake responsibilities keeping an eye on the requirements and quality parameters clients look for.
              </p>

              <h3 className="text-lg font-bold text-[#111A2E] mb-3">
                Our Strength As a Supplier of Food and Eatables:
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
                Your collaboration with our team can bring you the admiration of your guests. We can make you feel proud and completely satisfied when you celebrate with 7Delights!
              </p>

              <a
                href="tel:+919980029977"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#EE3775] hover:bg-[#DE2765] text-white font-bold text-sm shadow-md transition-all hover:scale-105"
              >
                <Phone className="w-4 h-4 fill-white" />
                <span>Talk to Our Catering Team</span>
              </a>
            </div>

            {/* Right Image Showcase */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-gray-100 group">
              <img
                src="/assets/potato-twist-showcase.webp"
                alt="Crispy Potato Twister and Party Snacks"
                className="w-full h-auto object-cover group-hover:scale-102 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-6 sm:p-8">
                <div className="text-white">
                  <span className="px-3 py-1 rounded-full bg-[#00A86B] text-[11px] font-bold uppercase tracking-wider mb-2 inline-block">
                    Crispy Party Snacks
                  </span>
                  <p className="text-xl sm:text-2xl font-bold">Spiral Potato Twisters &amp; More</p>
                  <p className="text-xs sm:text-sm text-gray-200">Freshly prepared live right in front of your attendees</p>
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
              Everything you need to know about booking our party food stalls, power needs, and timing in Bangalore.
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
            Ready to Delight Your Guests with Delicious Party Eatables?
          </h2>
          <p className="text-xs sm:text-sm text-gray-300 max-w-2xl mx-auto mb-6">
            Contact 7Delights today for combo packages on live popcorn, cotton candy, chocolate fountains, and ice gola counters!
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

