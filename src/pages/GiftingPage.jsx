import React, { useState } from 'react';
import { 
  Sparkles, 
  Search, 
  Phone, 
  Clock, 
  MapPin, 
  ShieldCheck, 
  Users, 
  ChevronDown, 
  Award, 
  CheckCircle2, 
  Gift, 
  Heart,
  Briefcase,
  Cake,
  Truck,
  MessageCircle,
  Star,
  PackageCheck,
  Smile
} from 'lucide-react';
import { GoldUnderline } from '../components/Doodles';

export default function GiftingPage() {
  const [activeTab, setActiveTab] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const scrollToFeaturesAndContact = () => {
    const el = document.getElementById('gifting-features-contact');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const categories = [
    { id: 'all', label: 'All Gifting Solutions' },
    { id: 'birthday', label: 'Birthday & Return Gifts' },
    { id: 'wedding', label: 'Wedding & Anniversary' },
    { id: 'corporate', label: 'Corporate Gifts' },
  ];

  // 4 Core Authentic Gifting Categories from https://www.7delights.in/gifting/
  const giftingCards = [
    {
      id: 1,
      title: 'Birthday Gifts',
      category: 'birthday',
      image: '/assets/birthday-gifts.webp',
      tag: 'Return Gifts & Goodie Hampers',
      badgeBg: 'bg-[#FFE8ED] text-[#EE3775] border-[#FFD0DB]',
      desc: 'Avail our special birthday gifts and gifting ideas to amaze the birthday child and invited kids! Custom party return gift hampers, thematic stationery, interactive games, and art kits.',
      btnText: 'View Birthday Gifts',
      features: ['Personalized Return Gift Bags', 'Age-Appropriate Toy & Book Kits', 'Themed Goodie Hampers', 'Bulk Quantity Packaging']
    },
    {
      id: 2,
      title: 'Wedding Gifts',
      category: 'wedding',
      image: '/assets/wedding-gifts.webp',
      tag: 'Couple Favors & Welcome Trousseau',
      badgeBg: 'bg-[#EDF5FF] text-[#2563EB] border-[#D0E2FF]',
      desc: 'Take our wedding gifting ideas to impress wedding couples and honored families! Traditional dry fruit boxes, custom silver/brass souvenirs, scented candles, and luxury wedding welcome hampers.',
      btnText: 'View Wedding Gifts',
      features: ['Luxury Welcome Hampers', 'Gourmet Sweets & Dry Fruits', 'Keepsake Brass & Silver Trays', 'Bespoke Couple Monogramming']
    },
    {
      id: 3,
      title: 'Corporate Gifts',
      category: 'corporate',
      image: '/assets/corporate-gifts.webp',
      tag: 'Brand Merchandise & Team Hampers',
      badgeBg: 'bg-[#EBF7F2] text-[#00A86B] border-[#C8EFE0]',
      desc: 'Our gifts and gifting ideas build stronger relationships with your team, clients, and partners! Premium tech accessories, laser-engraved desk kits, eco-friendly journals, and customized executive gift boxes.',
      btnText: 'View Corporate Gifts',
      features: ['Laser Logo Branding', 'Executive Tech & Desk Sets', 'Eco-Friendly Bamboo Hampers', 'Pan-Bangalore Office Distribution'],
      hasDedicatedPage: true,
      slug: '#gifting/3d-printing-corporate-gifting'
    },
    {
      id: 4,
      title: 'Anniversary Gifts',
      category: 'wedding',
      image: '/assets/anniversary-gifts.webp',
      tag: 'Milestone Keepsakes & Surprises',
      badgeBg: 'bg-[#FFF3DF] text-[#D97706] border-[#FFE4B8]',
      desc: 'Avail of our customized gifting ideas to leave a lasting impression on your loved ones! 3D crystals, customized photo collages, romantic couples hampers, and milestone anniversary memory boxes.',
      btnText: 'View Anniversary Gifts',
      features: ['Customized Memory Keepsakes', 'Artisanal Chocolates & Fragrances', 'Milestone Year Plaques', 'Surprise Doorstep Delivery']
    }
  ];

  const highlights = [
    { title: 'Custom Curation', value: 'Bespoke Packaging', sub: 'Themed ribbons, tags & personalized notes' },
    { title: 'Wide Selection', value: 'Budget to Luxury', sub: 'Kids return gifts to executive hampers' },
    { title: 'Delivery Care', value: 'Bulk Venue Transit', sub: 'Safely packed & distributed across Bangalore' },
    { title: 'Corporate Branding', value: 'Logo Personalization', sub: 'Precision engraving, embossing & printing' }
  ];

  const filteredCards = giftingCards.filter((card) => {
    const matchesCategory = activeTab === 'all' || 
      (activeTab === 'wedding' ? (card.category === 'wedding') : card.category === activeTab);
    const matchesSearch =
      card.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      card.desc.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const faqs = [
    {
      q: 'How far in advance should I book 7Delights gifting for my event?',
      a: 'To ensure maximum availability of customized gift items, theme-specific packaging, and personalized printing/engraving, we recommend booking at least 1 to 3 weeks in advance for birthday return gifts and social celebrations, and 3 to 6 weeks in advance for bulk corporate gift hampers or large-scale wedding favors. Last-minute requests are also supported with ready-to-ship catalog options!'
    },
    {
      q: 'Can 7Delights customize return gifts according to my party theme?',
      a: 'Yes, absolutely! Whether your birthday party theme is superhero, jungle safari, unicorn, space, or vintage circus, we curate and package return gift kits with matching wrapping, custom name tags, and coordinated items for boys and girls.'
    },
    {
      q: 'Do you offer corporate gifts with custom company logo branding?',
      a: 'Yes! We provide corporate onboarding kits, festival Diwali/New Year hampers, and annual day awards with high-precision UV printing, laser engraving, and custom embossed gift boxes featuring your company logo and brand colors.'
    },
    {
      q: 'Can you deliver the packed gifts directly to our event venue in Bangalore?',
      a: 'Yes. We handle the complete assembly, quality checking, protective bulk packaging, and on-time doorstep/venue delivery across all neighborhoods in Bangalore so hosts don’t have to worry about transport logistics.'
    },
    {
      q: 'What is your payment and order confirmation policy?',
      a: 'To begin sourcing and custom personalization of your gifting order, a token advance payment is required upon signing the contract or confirming the invoice. The remaining balance is cleared before or upon delivery on the day of the event.'
    }
  ];

  return (
    <div className="bg-[#FFFDF9] min-h-screen text-[#111A2E] font-sans antialiased">
      {/* Breadcrumb Navigation */}
      <nav aria-label="Breadcrumb" className="bg-white border-b border-[#E2E8F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <ol className="flex items-center space-x-2 text-sm text-[#5A6E85]">
            <li>
              <a href="#" className="hover:text-[#EE3775] transition-colors flex items-center gap-1">
                <span>Home</span>
              </a>
            </li>
            <li><span className="text-gray-400">/</span></li>
            <li>
              <a href="#services" className="hover:text-[#EE3775] transition-colors">
                Services
              </a>
            </li>
            <li><span className="text-gray-400">/</span></li>
            <li className="font-semibold text-[#EE3775] truncate">
              Gifting
            </li>
          </ol>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-8 pb-14 lg:py-16 bg-gradient-to-b from-[#FFF5F7] via-[#FFFDF9] to-[#FFFDF9] border-b border-[#F5E6EC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            
            {/* Left Column: Heading & Content */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 bg-[#FFE8ED] text-[#EE3775] text-xs sm:text-sm font-bold px-3.5 py-1.5 rounded-full border border-[#FFD0DB] shadow-sm">
                <Sparkles className="w-4 h-4 text-[#EE3775]" />
                <span>Custom Gifting Solutions • Return Gifts & Hampers • Bangalore</span>
              </div>

              <div className="space-y-3">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#111A2E] tracking-tight leading-tight">
                  Impeccable <span className="text-[#EE3775] relative inline-block">
                    Gifting Ideas
                    <GoldUnderline className="absolute left-0 -bottom-2 w-full text-[#EE3775]" />
                  </span> in Bangalore by 7Delights
                </h1>
                <p className="text-base sm:text-lg text-[#5A6E85] font-normal leading-relaxed pt-2">
                  Giving gifts is the most heartfelt way to express love, gratitude, and warm appreciation. Whether you need thrilling birthday return gifts for little kids, opulent wedding hampers, or branded corporate executive gift boxes, 7Delights curates unforgettable gifting experiences.
                </p>
              </div>

              {/* Quick Spec Highlights */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
                {highlights.map((h, i) => (
                  <div key={i} className="bg-white p-3.5 rounded-2xl border border-[#F3D7E2] shadow-sm text-center">
                    <p className="text-xs text-[#5A6E85] font-medium">{h.title}</p>
                    <p className="text-base sm:text-lg font-bold text-[#111A2E] mt-0.5">{h.value}</p>
                    <p className="text-[11px] text-[#869AB8] mt-0.5 truncate">{h.sub}</p>
                  </div>
                ))}
              </div>

              {/* CTAs */}
              <div className="pt-3 flex flex-wrap items-center gap-3 sm:gap-4">
                <a
                  href="#contact"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-[#EE3775] hover:bg-[#D82563] text-white font-bold rounded-xl shadow-lg shadow-[#EE3775]/25 hover:shadow-xl hover:shadow-[#EE3775]/35 transition-all duration-200 transform hover:-translate-y-0.5"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>Enquire Gifting Packages</span>
                </a>
                <a
                  href="tel:+919980029977"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-white hover:bg-gray-50 text-[#111A2E] font-bold rounded-xl border-2 border-[#111A2E]/15 hover:border-[#111A2E]/30 transition-all shadow-sm"
                >
                  <Phone className="w-4 h-4 text-[#EE3775]" />
                  <span>Call +91 99800 29977</span>
                </a>
              </div>

              <div className="flex flex-wrap items-center gap-4 text-xs sm:text-sm text-[#5A6E85] pt-1">
                <span className="flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  Premium Quality Checked Gifts
                </span>
                <span className="flex items-center gap-1.5">
                  <Truck className="w-4 h-4 text-amber-500" />
                  Doorstep & Venue Bulk Delivery
                </span>
                <span className="flex items-center gap-1.5">
                  <MapPin className="w-4 h-4 text-[#EE3775]" />
                  All Over Bangalore
                </span>
              </div>
            </div>

            {/* Right Column: Hero Visual Showcase */}
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-md lg:max-w-none">
                <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-white">
                  <img
                    src="/assets/gifting-banner.webp"
                    alt="Event Gifting Solutions Bangalore"
                    className="w-full h-[380px] sm:h-[440px] object-cover object-center transform hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent flex items-end p-6">
                    <div className="text-white space-y-1">
                      <span className="bg-[#EE3775] text-white text-xs font-black uppercase px-2.5 py-1 rounded-md tracking-wider">
                        Cherished Keepsakes
                      </span>
                      <h3 className="text-xl font-bold">Unforgettable Memories Packed With Love</h3>
                      <p className="text-xs text-white/90">
                        Tailored hampers, theme return gifts, and corporate executive packaging.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Floating Trust Card */}
                <div className="absolute -bottom-6 -left-4 sm:-left-6 bg-white rounded-2xl p-4 shadow-xl border border-gray-100 flex items-center gap-3 z-10">
                  <div className="w-12 h-12 rounded-xl bg-[#FFE8ED] flex items-center justify-center text-[#EE3775] font-black text-xl shrink-0">
                    <Gift className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="flex items-center gap-1 text-amber-400">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-current" />
                      ))}
                    </div>
                    <p className="text-xs font-bold text-[#111A2E] mt-0.5">Top-Rated Gifting Partner</p>
                    <p className="text-[11px] text-[#5A6E85]">100% Client Satisfaction</p>
                  </div>
                </div>

                {/* Floating Props Badge */}
                <div className="absolute -top-3 -right-3 bg-[#111A2E] text-white rounded-2xl px-3.5 py-2 shadow-lg border border-white/20 flex items-center gap-2 z-10">
                  <PackageCheck className="w-4 h-4 text-amber-400" />
                  <span className="text-xs font-bold">Custom Themed Boxes</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Filter Tabs & Search Controls */}
      <section id="gifting-overview" className="py-8 bg-white border-b border-[#F0E6EA] sticky top-[72px] sm:top-[80px] lg:top-[92px] z-30 shadow-xs backdrop-blur-md bg-white/95">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            
            {/* Category Tabs */}
            <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
              {categories.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all duration-200 cursor-pointer ${
                    activeTab === tab.id
                      ? 'bg-[#EE3775] text-white shadow-md shadow-[#EE3775]/25'
                      : 'bg-[#FFF5F7] text-[#5A6E85] hover:text-[#EE3775] hover:bg-[#FFE8ED]'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Search Input */}
            <div className="relative w-full md:w-72">
              <input
                type="text"
                placeholder="Search gifts (e.g. return gifts, corporate)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-4 py-2 text-xs sm:text-sm rounded-xl border border-gray-200 focus:outline-none focus:border-[#EE3775] bg-[#FFFDF9]"
              />
              <Search className="w-4 h-4 text-gray-400 absolute left-3 top-2.5" />
            </div>

          </div>
        </div>
      </section>

      {/* Gifting Categories Grid */}
      <section className="py-14 sm:py-16 bg-[#FFFDF9] border-b border-[#F0E6EA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto space-y-3 mb-12">
            <span className="text-xs uppercase font-extrabold tracking-widest text-[#EE3775] bg-[#FFE8ED] px-3.5 py-1 rounded-full border border-[#FFD0DB]">
              Curated Gift Solutions
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#111A2E]">
              Explore Our Gifting Collections
            </h2>
            <p className="text-sm sm:text-base text-[#5A6E85]">
              Every gifting package is designed to reflect your sentiment and leave an enduring impression.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredCards.map((card) => (
              <div 
                key={card.id} 
                onClick={() => {
                  if (card.hasDedicatedPage && card.slug) {
                    window.location.hash = card.slug;
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  } else {
                    scrollToFeaturesAndContact();
                  }
                }}
                className="bg-white rounded-3xl overflow-hidden border border-[#E8EFF7] shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col cursor-pointer group"
              >
                <div className="h-52 overflow-hidden relative">
                  <img 
                    src={card.image} 
                    alt={card.title} 
                    className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-500"
                  />
                  <span className={`absolute top-3 left-3 text-[11px] font-bold px-2.5 py-1 rounded-lg border shadow-sm ${card.badgeBg}`}>
                    {card.tag}
                  </span>
                </div>
                
                <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <h3 className="text-lg font-bold text-[#111A2E] leading-snug group-hover:text-[#EE3775] transition-colors">{card.title}</h3>
                    <p className="text-xs text-[#5A6E85] mt-2 leading-relaxed">{card.desc}</p>
                    
                    {/* Key features bullets */}
                    <div className="mt-3.5 space-y-1.5 pt-3 border-t border-gray-100">
                      {card.features.map((feat, fi) => (
                        <div key={fi} className="flex items-center gap-2 text-[11px] text-[#475569]">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#EE3775] shrink-0" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-2 border-t border-gray-100 flex items-center justify-between gap-2">
                    {card.hasDedicatedPage ? (
                      <a
                        href={card.slug}
                        onClick={(e) => {
                          e.stopPropagation();
                          window.location.hash = card.slug;
                          window.scrollTo({ top: 0, behavior: 'smooth' });
                        }}
                        className="flex-1 text-center py-2.5 px-3 bg-[#EE3775] hover:bg-[#D82563] text-white text-xs font-bold rounded-xl shadow-xs transition-colors cursor-pointer"
                      >
                        {card.btnText}
                      </a>
                    ) : (
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          scrollToFeaturesAndContact();
                        }}
                        className="flex-1 text-center py-2.5 px-3 bg-[#EE3775] hover:bg-[#D82563] text-white text-xs font-bold rounded-xl shadow-xs transition-colors cursor-pointer"
                      >
                        {card.btnText}
                      </button>
                    )}
                    <a
                      href="tel:+919980029977"
                      onClick={(e) => e.stopPropagation()}
                      className="py-2.5 px-3 bg-white border border-gray-200 hover:border-gray-300 text-[#111A2E] rounded-xl text-xs font-bold transition-colors flex items-center justify-center shrink-0 cursor-pointer"
                      title="Call Now"
                    >
                      <Phone className="w-3.5 h-3.5 text-[#EE3775]" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredCards.length === 0 && (
            <div className="text-center py-12">
              <p className="text-[#5A6E85]">No gifts match your search criteria. Try a different search term!</p>
            </div>
          )}
        </div>
      </section>

      {/* Why Choose 7Delights Gifting Section */}
      <section id="gifting-features-contact" className="py-14 sm:py-16 bg-white border-b border-[#F0E6EA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            <div className="lg:col-span-5 space-y-4">
              <div className="rounded-3xl overflow-hidden shadow-xl border-4 border-white bg-white">
                <img 
                  src="/assets/gifting-feature-gift-box.webp" 
                  alt="Quality Handcrafted Gift Hampers 7Delights" 
                  className="w-full h-[360px] sm:h-[420px] object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>

            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 bg-[#FFE8ED] text-[#EE3775] text-xs font-bold px-3 py-1 rounded-full border border-[#FFD0DB]">
                <Award className="w-3.5 h-3.5" />
                <span>Home Of Customized Gifting Ideas</span>
              </div>
              
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#111A2E] leading-tight">
                Chief Factors that Have <span className="text-[#EE3775]">Helped Us Excel!</span>
              </h2>

              <p className="text-base text-[#5A6E85] leading-relaxed">
                7DELIGHTS.in is proud to serve clients on special occasions when they need expert assistance deciding the right gifts for someone they love and care for! Our gifting coordinators create customized, tasteful solutions suited for any budget or scale.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-[#FFFDF9] p-4 rounded-2xl border border-gray-100 shadow-xs">
                  <h4 className="text-sm font-bold text-[#111A2E] flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-[#EE3775]" />
                    Customizable Decoration & Theme
                  </h4>
                  <p className="text-xs text-[#5A6E85] mt-1">
                    Meeting your dream and fascination is our priority. From superhero return gift bags to royal silk trousseau wrapping.
                  </p>
                </div>

                <div className="bg-[#FFFDF9] p-4 rounded-2xl border border-gray-100 shadow-xs">
                  <h4 className="text-sm font-bold text-[#111A2E] flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-emerald-600" />
                    Rich Infrastructure & Sourcing
                  </h4>
                  <p className="text-xs text-[#5A6E85] mt-1">
                    Direct tie-ups with premium manufacturers ensure high-grade toys, stationery, dry fruits, and executive electronics.
                  </p>
                </div>

                <div className="bg-[#FFFDF9] p-4 rounded-2xl border border-gray-100 shadow-xs">
                  <h4 className="text-sm font-bold text-[#111A2E] flex items-center gap-2">
                    <Truck className="w-4 h-4 text-blue-600" />
                    Punctual Doorstep Delivery
                  </h4>
                  <p className="text-xs text-[#5A6E85] mt-1">
                    Safe bulk packaging and venue drop-off across Bangalore make party preparations completely hassle-free.
                  </p>
                </div>

                <div className="bg-[#FFFDF9] p-4 rounded-2xl border border-gray-100 shadow-xs">
                  <h4 className="text-sm font-bold text-[#111A2E] flex items-center gap-2">
                    <Clock className="w-4 h-4 text-amber-500" />
                    24/7 Dedicated Support
                  </h4>
                  <p className="text-xs text-[#5A6E85] mt-1">
                    Our team of caring coordinators is on hand round-the-clock to help you select items, adjust quantities, and meet deadlines.
                  </p>
                </div>
              </div>

              <div className="pt-2">
                <a
                  href="tel:+919980029977"
                  className="inline-flex items-center gap-2 text-[#EE3775] font-bold text-sm hover:underline"
                >
                  <Phone className="w-4 h-4" />
                  <span>Call +91 99800 29977 to talk to our party gifting specialist</span>
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Reassurance Callout Box */}
      <section className="py-12 bg-[#FFFDF9] border-b border-[#F0E6EA]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-[#111A2E] to-[#1C2B4B] rounded-3xl p-6 sm:p-10 text-white shadow-xl relative overflow-hidden">
            <div className="absolute -right-10 -bottom-10 w-48 h-48 bg-[#EE3775]/20 rounded-full blur-2xl"></div>
            <div className="relative z-10 grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
              <div className="md:col-span-8 space-y-3">
                <span className="bg-[#EE3775] text-white text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-md">
                  Host Convenience Reassurance
                </span>
                <h3 className="text-2xl sm:text-3xl font-black">
                  Stress-Free Celebrations With 7Delights Gifting
                </h3>
                <p className="text-sm text-gray-300 leading-relaxed">
                  Avoid the stress of sourcing, packing, and individual ribbon-tying! We deliver neatly arranged, pre-packed gift sets ready to be distributed directly to your attendees at the party.
                </p>
                <div className="flex flex-wrap gap-4 text-xs text-gray-200 pt-2">
                  <span className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    Zero Packing Hassle
                  </span>
                  <span className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    Custom Name & Theme Tags
                  </span>
                  <span className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    Bulk Discounts Available
                  </span>
                </div>
              </div>
              <div className="md:col-span-4 text-center md:text-right">
                <a
                  href="tel:+919980029977"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#EE3775] hover:bg-[#D82563] text-white font-bold rounded-xl shadow-lg transition-all w-full md:w-auto"
                >
                  <Phone className="w-4 h-4" />
                  <span>Call +91 99800 29977</span>
                </a>
                <p className="text-[11px] text-gray-400 mt-2">Direct Gifting Consultations</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="py-14 sm:py-16 bg-white border-b border-[#F0E6EA]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-3 mb-10">
            <span className="text-xs uppercase font-extrabold tracking-widest text-[#EE3775] bg-[#FFE8ED] px-3.5 py-1 rounded-full border border-[#FFD0DB]">
              Got Questions?
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#111A2E]">
              Frequently Asked Questions
            </h2>
            <p className="text-sm sm:text-base text-[#5A6E85]">
              Everything you need to know about ordering event & return gifts in Bangalore.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div
                  key={index}
                  className="border border-[#E2E8F0] rounded-2xl bg-[#FFFDF9] overflow-hidden transition-all duration-200"
                >
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full px-5 sm:px-6 py-4 sm:py-5 text-left flex items-center justify-between gap-4 focus:outline-none"
                    aria-expanded={isOpen}
                  >
                    <span className="font-bold text-sm sm:text-base text-[#111A2E]">
                      {faq.q}
                    </span>
                    <span
                      className={`w-7 h-7 rounded-full bg-white border border-[#E2E8F0] flex items-center justify-center shrink-0 text-[#EE3775] transition-transform duration-200 ${
                        isOpen ? 'rotate-180 bg-[#FFE8ED]' : ''
                      }`}
                    >
                      <ChevronDown className="w-4 h-4" />
                    </span>
                  </button>

                  {isOpen && (
                    <div className="px-5 sm:px-6 pb-5 pt-1 text-xs sm:text-sm text-[#5A6E85] leading-relaxed border-t border-[#F0E6EA]/60 bg-white">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Additional Support Callout */}
          <div className="mt-10 p-6 rounded-2xl bg-[#FFE8ED]/40 border border-[#FFD0DB] flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
            <div>
              <h4 className="text-base font-bold text-[#111A2E]">Planning a large corporate event or 100+ return gifts?</h4>
              <p className="text-xs text-[#5A6E85] mt-1">Our gifting consultants will share a customized itemized catalog tailored to your exact budget.</p>
            </div>
            <a
              href="tel:+919980029977"
              className="px-5 py-2.5 bg-[#EE3775] hover:bg-[#D82563] text-white text-xs font-bold rounded-xl shadow-md transition-all shrink-0"
            >
              Call +91 99800 29977
            </a>
          </div>
        </div>
      </section>

      {/* Bottom Floating/Fixed CTA Banner */}
      <section className="py-10 bg-gradient-to-r from-[#FFF5F7] to-[#FFE8ED] border-t border-[#FFD0DB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <h3 className="text-xl sm:text-2xl font-black text-[#111A2E]">
            Delight Your Guests With Handpicked Gifts!
          </h3>
          <p className="text-xs sm:text-sm text-[#5A6E85] max-w-xl mx-auto">
            Order your customized party return gifts, wedding hampers, or corporate gift packages today with 7Delights in Bangalore.
          </p>
          <div className="flex flex-wrap justify-center gap-3 pt-2">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#EE3775] hover:bg-[#D82563] text-white font-bold rounded-xl shadow-md text-xs sm:text-sm"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Request Quote</span>
            </a>
            <a
              href="tel:+919980029977"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white text-[#111A2E] hover:bg-gray-50 font-bold rounded-xl border border-gray-200 text-xs sm:text-sm shadow-sm"
            >
              <Phone className="w-4 h-4 text-[#EE3775]" />
              <span>Call +91 99800 29977</span>
            </a>
            <a
              href="#services"
              className="inline-flex items-center gap-2 px-6 py-3 bg-transparent text-[#5A6E85] hover:text-[#111A2E] font-bold text-xs sm:text-sm"
            >
              <span>← Back to Services Hub</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

