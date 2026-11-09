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
  Cake, 
  Heart,
  Briefcase,
  Gift,
  Flame,
  Truck,
  MessageCircle,
  Star
} from 'lucide-react';
import { GoldUnderline } from '../components/Doodles';

export default function PartyCakesPage() {
  const [activeTab, setActiveTab] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const categories = [
    { id: 'all', label: 'All Party Cakes' },
    { id: 'birthday', label: 'Birthday Cakes' },
    { id: 'wedding', label: 'Wedding & Anniversary' },
    { id: 'corporate', label: 'Corporate Events' },
  ];

  // 4 Core Authentic Cake Categories from https://www.7delights.in/cakes/
  const cakeCards = [
    {
      id: 1,
      title: 'Birthday Cakes',
      category: 'birthday',
      image: '/assets/birthday-cakes.webp',
      tag: 'Grand Milestone & Kids Cakes',
      badgeBg: 'bg-[#FFE8ED] text-[#EE3775] border-[#FFD0DB]',
      desc: 'We prepare grand birthday cakes for everyone, irrespective of their age! Customized cartoon fondants, photo print cakes, chocolate truffles, and multi-tier marvels.',
      btnText: 'View Birthday Cakes',
      features: ['Fondant Sculptures', 'Eggless & Sugar-Free Options', 'Kids Favorite Flavors', 'Doorstep Party Delivery']
    },
    {
      id: 2,
      title: 'Wedding Cakes',
      category: 'wedding',
      image: '/assets/wedding-cakes.webp',
      tag: 'Multi-Tier Elegant Showstoppers',
      badgeBg: 'bg-[#EDF5FF] text-[#2563EB] border-[#D0E2FF]',
      desc: 'Our Wedding cakes add an exquisite touch to the entire marriage reception! Cascading sugar blossoms, royal lace textures, gourmet red velvet, and vanilla bean elegance.',
      btnText: 'View Wedding Cakes',
      features: ['2 to 5 Tier Towers', 'Fresh Floral Accents', 'Gourmet Flavors', 'Venue Stacking & Setup']
    },
    {
      id: 3,
      title: 'Anniversary Cakes',
      category: 'wedding',
      image: '/assets/anniversary-cakes.webp',
      tag: 'Romantic Keepsake Delights',
      badgeBg: 'bg-[#FFF3DF] text-[#D97706] border-[#FFE4B8]',
      desc: 'Make anniversary celebrations even more fascinating with top-class cakes! Heart-shaped silhouettes, elegant metallic gold drip, anniversary milestone numbers, and fresh berries.',
      btnText: 'View Anniversary Cakes',
      features: ['Heart & Tier Silhouettes', 'Metallic Gold Foliage', 'Belgian Chocolate & Berries', 'Personalized Love Notes']
    },
    {
      id: 4,
      title: 'Corporate Cakes',
      category: 'corporate',
      image: '/assets/corporate-cakes.webp',
      tag: 'Brand Launches & Milestones',
      badgeBg: 'bg-[#EBF7F2] text-[#00A86B] border-[#C8EFE0]',
      desc: 'Make corporate events, annual days, and product launches more memorable with fascinating cakes from us! Precise edible logo branding, large slab cuts, and team milestone designs.',
      btnText: 'View Corporate Cakes',
      features: ['High-Def Edible Logo Prints', 'Large Gathering Slabs (5kg - 50kg+)', 'Theme Color Matching', 'Bulk Dessert Table Pairing']
    }
  ];

  const highlights = [
    { title: 'Fresh Preparation', value: 'Baked Fresh to Order', sub: 'Finest grade natural ingredients' },
    { title: 'Dietary Choices', value: '100% Eggless Available', sub: 'Sugar-free, vegan & gluten-friendly' },
    { title: 'Delivery Care', value: 'Chilled Vehicle Transit', sub: 'Damage-free venue delivery across Bangalore' },
    { title: 'Customizations', value: 'Any Design or Theme', sub: 'Fondant, photo cakes & multi-tier towers' }
  ];

  const filteredCards = cakeCards.filter((card) => {
    const matchesCategory = activeTab === 'all' || 
      (activeTab === 'wedding' ? (card.category === 'wedding') : card.category === activeTab);
    const matchesSearch =
      card.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      card.desc.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const faqs = [
    {
      q: 'How far in advance should I book 7Delights cakes for my event?',
      a: 'To ensure maximum availability of premium customized cakes, specific design themes, and specialized baker slots, we recommend booking at least 3 to 7 days in advance for birthday parties and anniversary cakes, and 1 to 3 weeks in advance for multi-tier wedding cakes or large corporate milestone celebrations. Last-minute requests are accommodated subject to kitchen capacity!'
    },
    {
      q: 'Can 7Delights customize cakes to match my party theme or provide a reference photo?',
      a: 'Yes, absolutely! You can share any picture or concept (Pinterest, Instagram, cartoon characters, corporate branding, or wedding invites), and our master bakers will replicate the aesthetic with precision in fresh cream or handcrafted fondant.'
    },
    {
      q: 'Do you offer 100% pure vegetarian (eggless) and dietary options?',
      a: 'Yes! All our cake varieties—including chocolate truffle, red velvet, butterscotch, pineapple, black forest, and blueberry cheesecake—are available in 100% pure eggless recipes. We also cater to sugar-free and vegan requests upon advance intimation.'
    },
    {
      q: 'How does 7Delights handle cake delivery to the event venue?',
      a: 'We understand that party cakes are fragile works of art. Every cake is packed in specialized shock-absorbing sturdy boxes and transported in temperature-regulated vehicles directly to your venue, banquet hall, or home in Bangalore, ensuring it arrives in picture-perfect condition.'
    },
    {
      q: 'What is your payment and order confirmation policy?',
      a: 'To lock in your cake order and allow our chefs to source customized ingredients and molds, an advance deposit is paid upon order confirmation. The remaining balance can be cleared seamlessly on delivery or prior to event commencement.'
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
              Party Cakes
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
                <span>Custom Celebration Cakes • Designer Treats • Bangalore</span>
              </div>

              <div className="space-y-3">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#111A2E] tracking-tight leading-tight">
                  Designer <span className="text-[#EE3775] relative inline-block">
                    Party Cakes
                    <GoldUnderline className="absolute left-0 -bottom-2 w-full text-[#EE3775]" />
                  </span> in Bangalore by 7Delights
                </h1>
                <p className="text-base sm:text-lg text-[#5A6E85] font-normal leading-relaxed pt-2">
                  No party is complete without the grand centerpiece cake! From fairytale birthday fondants and royal multi-tier wedding towers to elegant anniversary treats and corporate logo cakes, 7Delights bakes fresh, scrumptious happiness tailored to your milestone.
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
                  <span>Order Custom Cake</span>
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
                  Freshly Baked Premium Ingredients
                </span>
                <span className="flex items-center gap-1.5">
                  <Truck className="w-4 h-4 text-amber-500" />
                  Temperature Controlled Delivery
                </span>
                <span className="flex items-center gap-1.5">
                  <MapPin className="w-4 h-4 text-[#EE3775]" />
                  Delivering Across Bangalore
                </span>
              </div>
            </div>

            {/* Right Column: Hero Visual Showcase */}
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-md lg:max-w-none">
                <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-white">
                  <img
                    src="/assets/party-cakes-banner.webp"
                    alt="Birthday Party Cakes Bangalore"
                    className="w-full h-[380px] sm:h-[440px] object-cover object-center transform hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent flex items-end p-6">
                    <div className="text-white space-y-1">
                      <span className="bg-[#EE3775] text-white text-xs font-black uppercase px-2.5 py-1 rounded-md tracking-wider">
                        Delightful Masterpieces
                      </span>
                      <h3 className="text-xl font-bold">Centerpiece Flavor & Artistry</h3>
                      <p className="text-xs text-white/90">
                        Crafted with love, fine chocolate, fresh fruit glazes, and bespoke party decorations.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Floating Trust Card */}
                <div className="absolute -bottom-6 -left-4 sm:-left-6 bg-white rounded-2xl p-4 shadow-xl border border-gray-100 flex items-center gap-3 z-10">
                  <div className="w-12 h-12 rounded-xl bg-[#FFE8ED] flex items-center justify-center text-[#EE3775] font-black text-xl shrink-0">
                    <Cake className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="flex items-center gap-1 text-amber-400">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-current" />
                      ))}
                    </div>
                    <p className="text-xs font-bold text-[#111A2E] mt-0.5">1000+ Cakes Delivered</p>
                    <p className="text-[11px] text-[#5A6E85]">100% Taste & Freshness Guarantee</p>
                  </div>
                </div>

                {/* Floating Freshness Badge */}
                <div className="absolute -top-3 -right-3 bg-[#111A2E] text-white rounded-2xl px-3.5 py-2 shadow-lg border border-white/20 flex items-center gap-2 z-10">
                  <Sparkles className="w-4 h-4 text-amber-400" />
                  <span className="text-xs font-bold">100% Eggless Option</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Filter Tabs & Search Controls */}
      <section id="cakes-overview" className="py-8 bg-white border-b border-[#F0E6EA] sticky top-[72px] sm:top-[80px] lg:top-[92px] z-30 shadow-xs backdrop-blur-md bg-white/95">
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
                placeholder="Search cakes (e.g. wedding, fondant)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-4 py-2 text-xs sm:text-sm rounded-xl border border-gray-200 focus:outline-none focus:border-[#EE3775] bg-[#FFFDF9]"
              />
              <Search className="w-4 h-4 text-gray-400 absolute left-3 top-2.5" />
            </div>

          </div>
        </div>
      </section>

      {/* Cake Categories Grid */}
      <section className="py-14 sm:py-16 bg-[#FFFDF9] border-b border-[#F0E6EA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto space-y-3 mb-12">
            <span className="text-xs uppercase font-extrabold tracking-widest text-[#EE3775] bg-[#FFE8ED] px-3.5 py-1 rounded-full border border-[#FFD0DB]">
              Handcrafted Confections
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#111A2E]">
              Explore Our Cake Collections
            </h2>
            <p className="text-sm sm:text-base text-[#5A6E85]">
              Every cake is custom-crafted to complement your event decor, theme, and taste buds.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredCards.map((card) => (
              <div 
                key={card.id} 
                className="bg-white rounded-3xl overflow-hidden border border-[#E8EFF7] shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col"
              >
                <div className="h-52 overflow-hidden relative">
                  <img 
                    src={card.image} 
                    alt={card.title} 
                    className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-500"
                  />
                  <span className={`absolute top-3 left-3 text-[11px] font-bold px-2.5 py-1 rounded-lg border shadow-sm ${card.badgeBg}`}>
                    {card.tag}
                  </span>
                </div>
                
                <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <h3 className="text-lg font-bold text-[#111A2E] leading-snug">{card.title}</h3>
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
                    <a
                      href="#contact"
                      className="flex-1 text-center py-2.5 px-3 bg-[#EE3775] hover:bg-[#D82563] text-white text-xs font-bold rounded-xl shadow-xs transition-colors"
                    >
                      {card.btnText}
                    </a>
                    <a
                      href="tel:+919980029977"
                      className="py-2.5 px-3 bg-white border border-gray-200 hover:border-gray-300 text-[#111A2E] rounded-xl text-xs font-bold transition-colors flex items-center justify-center shrink-0"
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
              <p className="text-[#5A6E85]">No cakes match your search criteria. Try a different search term!</p>
            </div>
          )}
        </div>
      </section>

      {/* Why Choose 7Delights For Cakes Section */}
      <section className="py-14 sm:py-16 bg-white border-b border-[#F0E6EA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            <div className="lg:col-span-5 space-y-4">
              <div className="rounded-3xl overflow-hidden shadow-xl border-4 border-white bg-white">
                <img 
                  src="/assets/party-cake-feature.webp" 
                  alt="Quality Handcrafted Cake 7Delights" 
                  className="w-full h-[360px] sm:h-[420px] object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>

            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 bg-[#FFE8ED] text-[#EE3775] text-xs font-bold px-3 py-1 rounded-full border border-[#FFD0DB]">
                <Award className="w-3.5 h-3.5" />
                <span>Excellence In Every Crumb</span>
              </div>
              
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#111A2E] leading-tight">
                Chief Factors that Have <span className="text-[#EE3775]">Helped Us Excel!</span>
              </h2>

              <p className="text-base text-[#5A6E85] leading-relaxed">
                7DELIGHTS.in is exceptional when it comes to creating cakes to match the spirit of your birthday celebration, wedding, or corporate event. We value your emotions and sentiments when you plan to celebrate the milestone moments of those closest to your heart.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-[#FFFDF9] p-4 rounded-2xl border border-gray-100 shadow-xs">
                  <h4 className="text-sm font-bold text-[#111A2E] flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-[#EE3775]" />
                    Customizable Decoration
                  </h4>
                  <p className="text-xs text-[#5A6E85] mt-1">
                    Meeting your dream and fascination is our priority. From fondants to intricate cream art, we bring any design to life.
                  </p>
                </div>

                <div className="bg-[#FFFDF9] p-4 rounded-2xl border border-gray-100 shadow-xs">
                  <h4 className="text-sm font-bold text-[#111A2E] flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-emerald-600" />
                    Finest Ingredients
                  </h4>
                  <p className="text-xs text-[#5A6E85] mt-1">
                    Seasoned bakers using pure Belgian cocoa, authentic vanilla pods, and fresh farm butter for unmatched melt-in-mouth texture.
                  </p>
                </div>

                <div className="bg-[#FFFDF9] p-4 rounded-2xl border border-gray-100 shadow-xs">
                  <h4 className="text-sm font-bold text-[#111A2E] flex items-center gap-2">
                    <Truck className="w-4 h-4 text-blue-600" />
                    Safe Doorstep Delivery
                  </h4>
                  <p className="text-xs text-[#5A6E85] mt-1">
                    Specialized shock-damped cake transit across Bangalore ensures flawless presentation right up to cake cutting.
                  </p>
                </div>

                <div className="bg-[#FFFDF9] p-4 rounded-2xl border border-gray-100 shadow-xs">
                  <h4 className="text-sm font-bold text-[#111A2E] flex items-center gap-2">
                    <Clock className="w-4 h-4 text-amber-500" />
                    24/7 Dedicated Support
                  </h4>
                  <p className="text-xs text-[#5A6E85] mt-1">
                    Our team of caring coordinators is on hand round-the-clock to assist with custom sizes, flavors, and urgent party requests.
                  </p>
                </div>
              </div>

              <div className="pt-2">
                <a
                  href="tel:+919980029977"
                  className="inline-flex items-center gap-2 text-[#EE3775] font-bold text-sm hover:underline"
                >
                  <Phone className="w-4 h-4" />
                  <span>Call +91 99800 29977 to talk to our party cake consultant</span>
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
                  Party Host Assurance
                </span>
                <h3 className="text-2xl sm:text-3xl font-black">
                  Stress-Free Celebrations With 7Delights Cakes
                </h3>
                <p className="text-sm text-gray-300 leading-relaxed">
                  Focus on welcoming your guests while we handle the baking, careful boxing, and punctual venue delivery. Custom sparkler candles, cutting knife, and paper plates can be paired seamlessly with every cake order!
                </p>
                <div className="flex flex-wrap gap-4 text-xs text-gray-200 pt-2">
                  <span className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    Zero Delivery Damage Guarantee
                  </span>
                  <span className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    Eggless & Diet Friendly
                  </span>
                  <span className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    Free Sparkler & Knife Included
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
                <p className="text-[11px] text-gray-400 mt-2">Direct Baker Consultations</p>
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
              Everything you need to know about ordering custom party cakes in Bangalore.
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
              <h4 className="text-base font-bold text-[#111A2E]">Need a massive corporate slab or a 5-tier wedding cake?</h4>
              <p className="text-xs text-[#5A6E85] mt-1">Our executive cake artists manage large scale baking, structural internal doweling, and venue stacking.</p>
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
            Make Your Celebration Sweeter With 7Delights Cakes!
          </h3>
          <p className="text-xs sm:text-sm text-[#5A6E85] max-w-xl mx-auto">
            Order your custom birthday, wedding, anniversary, or corporate cake today with doorstep delivery across Bangalore.
          </p>
          <div className="flex flex-wrap justify-center gap-3 pt-2">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#EE3775] hover:bg-[#D82563] text-white font-bold rounded-xl shadow-md text-xs sm:text-sm"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Order Online</span>
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

