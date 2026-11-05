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
  Palette, 
  Award, 
  Star, 
  Users, 
  Trophy, 
  Layers,
  Heart,
  Crown,
  Camera,
  PartyPopper,
  Flame,
  Wind
} from 'lucide-react';

export default function HeliumGasBalloonsPage() {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const balloonServices = [
    {
      title: 'Ceiling Floating Bouquets',
      desc: 'Lush clusters of pure helium balloons with matching curling ribbons floating freely against party ceilings for an enchanting canopy.',
      tag: 'Ceiling Canopy',
      color: 'bg-[#FFE8ED] text-[#EE3775] border-[#FFD0DB]',
      image: '/assets/helium-floating-balloons.webp'
    },
    {
      title: 'Custom Foil & Number Balloons',
      desc: 'Giant 34-40 inch metallic number foils, milestone letters, and character balloons that create picture-perfect birthday photo-ops.',
      tag: 'Milestone Foils',
      color: 'bg-[#FFF3DF] text-[#D97706] border-[#FFE4B8]',
      image: '/assets/helium-gas-foil-balloon.webp'
    },
    {
      title: 'Helium Floating Arches & Pillars',
      desc: 'Gracefully curving string-of-pearls floating arches and weighted balloon columns welcoming guests at doors and banquet aisles.',
      tag: 'Grand Entrance',
      color: 'bg-[#F2EDFF] text-[#7B61FF] border-[#E0D5FF]',
      image: '/assets/helium-gas-balloon-arch.webp'
    },
    {
      title: 'Thematic Bunches & Table Centerpieces',
      desc: 'Weighted table bouquets featuring coordinating latex, polka dot, and confetti balloons to elevate dining and cake tables.',
      tag: 'Table Styling',
      color: 'bg-[#E3F8F2] text-[#059669] border-[#C1F1E1]',
      image: '/assets/helium-arch-background.webp'
    },
  ];

  const features = [
    {
      title: '100% Certified Safe Helium Gas',
      desc: 'We strictly use pure, certified non-flammable and non-toxic helium gas ensuring 100% fire safety in indoor banquets and homes.',
      icon: <ShieldCheck className="w-6 h-6 text-[#059669]" />,
    },
    {
      title: 'Extended Floating Duration',
      desc: 'Treated with Hi-Float sealant technology extending latex float times up to 12-24 hours, so your party stays elevated from start to finish.',
      icon: <Clock className="w-6 h-6 text-[#EE3775]" />,
    },
    {
      title: 'Vibrant Chrome & Pastel Palettes',
      desc: 'Choose from hundreds of rich metallic chromes, soft pastels, retro polka dots, clear confetti, and customized personalized prints.',
      icon: <Palette className="w-6 h-6 text-[#7B61FF]" />,
    },
    {
      title: 'Curling Ribbons & Weights Included',
      desc: 'Every balloon or bouquet comes tethered with matching color ribbons and weighted anchor bases to keep balloons securely positioned.',
      icon: <PartyPopper className="w-6 h-6 text-[#D97706]" />,
    },
    {
      title: 'On-Site Filling or Pre-Inflated Delivery',
      desc: 'Our crew can inflate on-site with mobile certified tanks or deliver pre-filled bouquets securely packed in balloon transport bags.',
      icon: <Wind className="w-6 h-6 text-[#3B82F6]" />,
    },
    {
      title: 'Perfect for Launches & Releases',
      desc: 'Spectacular ceiling net balloon drops and ceremonial launches for birthdays, corporate brand unveilings, and weddings.',
      icon: <Sparkles className="w-6 h-6 text-[#EC4899]" />,
    },
  ];

  const occasions = [
    {
      name: 'Birthday Celebrations & Milestones',
      desc: 'From 1st birthday ceiling canopies to golden 50th metallic foil bouquets, create joyous celebratory energy.',
      badge: 'All Birthdays'
    },
    {
      name: 'Weddings & Reception Entrances',
      desc: 'Sophisticated pearlescent white, rose gold, and champagne helium arches adding romantic elegance to banquets.',
      badge: 'Weddings'
    },
    {
      name: 'Corporate Launches & Trade Expos',
      desc: 'Custom logo-printed helium balloons elevating booth visibility across crowded convention and exhibition halls.',
      badge: 'Corporate B2B'
    },
    {
      name: 'Baby Showers & Welcome Home',
      desc: 'Gentle pastel pink, baby blue, and cloud white floating bunches welcoming new mothers and babies home in style.',
      badge: 'Family Milestones'
    }
  ];

  const faqs = [
    {
      q: 'How far in advance should I book 7Delights helium gas balloons for my event?',
      a: 'To ensure maximum availability of helium gas balloons, cylinders, & specialized color palettes, we recommend booking at least 1 to 6 weeks in advance for social parties & corporate events, and 3 to 6 months in advance for major weddings or large-scale corporate launches. However, if you have a last-minute request, contact us & we will do our best to make it happen!'
    },
    {
      q: 'How long does it take for your team to set up?',
      a: 'Setup times vary by service. Simple balloon decorations or a 50-100 helium balloon setup takes about 1 to 2 hours. We always coordinate directly with the venue to ensure everything is flawlessly set up well before your first guest arrives.'
    },
    {
      q: 'What is your payment policy?',
      a: 'To secure your date, artists, and materials, we require an advance payment upon signing the contract. The remaining balance is structured into milestones leading up to, or on the day of the event.'
    },
    {
      q: 'Is helium gas safe to use indoors?',
      a: 'Yes, absolutely. Pure helium is an inert, non-flammable, non-toxic gas. 7Delights never uses flammable hydrogen mixtures. Our cylinders and filling processes adhere to strict safety standards.'
    },
    {
      q: 'How long do helium balloons stay floating?',
      a: 'Standard latex balloons float for 8 to 12 hours (or up to 24+ hours when treated with Hi-Float). Foil and metallic number balloons float beautifully for 3 to 5 days!'
    }
  ];

  const galleryImages = [
    {
      src: '/assets/helium-gas-foil-balloon.webp',
      title: 'Foil Helium Balloon Bouquets',
      desc: 'Heart and star foil arrangements with matching ribbon strings'
    },
    {
      src: '/assets/helium-floating-balloons.webp',
      title: 'Floating Ceiling Canopy',
      desc: 'Ceiling filled with vibrant floating balloons and hanging ribbons'
    },
    {
      src: '/assets/helium-gas-balloon-arch.webp',
      title: 'Helium Pearl Arch',
      desc: 'Graceful floating arch framing photo stages and entrances'
    },
    {
      src: '/assets/helium-arch-background.webp',
      title: 'Thematic Color Bunches',
      desc: 'Coordinated bouquets anchored as table and floor centerpieces'
    }
  ];

  return (
    <div className="bg-[#FFFDF9] min-h-screen">
      {/* 1. HERO BANNER */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#FFF5F7] via-[#FFFDF9] to-[#FFFDF9] pt-12 pb-16 md:pt-16 md:pb-20 border-b border-[#F5E6EC]">
        {/* Decorative background shapes */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#FFE8ED]/40 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#FFF3DF]/50 rounded-full blur-3xl pointer-events-none -ml-20 -mb-20"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Breadcrumb */}
          <nav className="flex items-center space-x-2 text-xs md:text-sm text-[#5A6E85] mb-6 font-medium">
            <a href="#home" className="hover:text-[#EE3775] transition-colors">Home</a>
            <span>/</span>
            <a href="#birthday-balloon-decorations" className="hover:text-[#EE3775] transition-colors">Balloon Decorations</a>
            <span>/</span>
            <span className="text-[#111A2E] font-semibold">Helium Gas Balloons</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            {/* Left Content Column */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FFE8ED] border border-[#FFD0DB] text-[#EE3775] text-xs md:text-sm font-semibold tracking-wide">
                <Wind className="w-4 h-4" />
                <span>100% Certified Safe &amp; Non-Flammable Helium</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#111A2E] tracking-tight leading-tight">
                Helium Gas Balloons for <span className="text-[#EE3775]">Events in Bangalore</span>
              </h1>

              <p className="text-base sm:text-lg text-[#5A6E85] leading-relaxed">
                Elevate your event with floating fun! Without colorful helium gas balloons, your décor concept would seem incomplete. From ceiling canopies and bouquets to giant foil numbers and floating arches, 7Delights makes your Bangalore celebration pop with wonder!
              </p>

              {/* Key Highlights Pill Row */}
              <div className="flex flex-wrap gap-3 pt-2">
                <div className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white border border-[#F5E6EC] shadow-sm text-xs sm:text-sm text-[#111A2E] font-medium">
                  <Clock className="w-4 h-4 text-[#EE3775]" />
                  <span>Package: <strong>50 nos. Min Qty</strong></span>
                </div>
                <div className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white border border-[#F5E6EC] shadow-sm text-xs sm:text-sm text-[#111A2E] font-medium">
                  <MapPin className="w-4 h-4 text-[#059669]" />
                  <span>Available Across <strong>All Bangalore</strong></span>
                </div>
                <div className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white border border-[#F5E6EC] shadow-sm text-xs sm:text-sm text-[#111A2E] font-medium">
                  <ShieldCheck className="w-4 h-4 text-[#7B61FF]" />
                  <span>Safety: <strong>Pure Non-Toxic Gas</strong></span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-4">
                <a
                  href="tel:+919980029977"
                  className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-[#EE3775] text-white font-semibold text-sm sm:text-base shadow-lg shadow-[#EE3775]/25 hover:bg-[#D92C65] transition-all transform hover:-translate-y-0.5"
                >
                  <Phone className="w-4 h-4" />
                  <span>Call +91 99800 29977</span>
                </a>
                <a
                  href="https://wa.me/919980029977?text=Hi%207Delights,%20I'm%20interested%20in%20ordering%20Helium%20Gas%20Balloons%20for%20my%20event."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-[#25D366] text-white font-semibold text-sm sm:text-base shadow-lg shadow-[#25D366]/25 hover:bg-[#20BA5A] transition-all transform hover:-translate-y-0.5"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>WhatsApp Inquiry</span>
                </a>
              </div>
            </div>

            {/* Right Media Banner */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white aspect-[4/3] group">
                <img
                  src="/assets/helium-balloons-banner.webp"
                  alt="Helium Gas Balloons for Events Bangalore"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  onError={(e) => {
                    e.currentTarget.src = '/assets/helium-floating-balloons.webp';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#111A2E]/70 via-transparent to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#EE3775] text-xs font-bold uppercase tracking-wider mb-1">
                    Floating Magic
                  </div>
                  <p className="text-sm font-medium text-white/95">
                    Pure Helium, Metallic Foils &amp; Curling Ribbons
                  </p>
                </div>
              </div>

              {/* Float Badge */}
              <div className="absolute -bottom-5 -left-5 bg-white p-3.5 rounded-xl shadow-xl border border-[#F5E6EC] hidden sm:flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-[#FFE8ED] flex items-center justify-center text-[#EE3775]">
                  <Sparkles className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-[#5A6E85] font-medium">Long Float Duration</div>
                  <div className="text-sm font-bold text-[#111A2E]">Hi-Float Treatment</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. ABOUT HELIUM BALLOONS SECTION */}
      <section className="py-14 md:py-18 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Image display */}
            <div className="lg:col-span-5">
              <div className="relative rounded-2xl overflow-hidden shadow-lg border border-[#F5E6EC]">
                <img
                  src="/assets/helium-gas-foil-balloon.webp"
                  alt="Helium Gas Balloons Setup in Bangalore"
                  className="w-full h-auto object-cover"
                />
                <div className="p-4 bg-[#FFFDF9] border-t border-[#F5E6EC]">
                  <div className="flex items-center justify-between text-xs sm:text-sm">
                    <span className="font-semibold text-[#111A2E]">Base Package Quantity:</span>
                    <span className="font-bold text-[#EE3775]">50 nos Min (₹0 Base Quote)</span>
                  </div>
                  <p className="text-xs text-[#5A6E85] mt-1">
                    *(Attracts additional charges for extra quantity &amp; special foils). Requirements: A table.
                  </p>
                </div>
              </div>
            </div>

            {/* Content Details */}
            <div className="lg:col-span-7 space-y-5">
              <div className="inline-block text-xs uppercase tracking-wider font-bold text-[#EE3775] bg-[#FFE8ED] px-3 py-1 rounded-md">
                About Helium Gas Balloons
              </div>

              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#111A2E] leading-snug">
                Breathtaking Ceiling Floating Canopies and Thematic Clusters
              </h2>

              <p className="text-base text-[#5A6E85] leading-relaxed">
                Add a touch of whimsy, color, and wonder to any celebration with 7Delights helium gas balloon styling. From single eye-catching giant balloons to elaborate balloon bouquets, floating arches, and ceiling clouds, we provide stunning, high-grade balloon decor that instantly enlivens any room.
              </p>

              <p className="text-base text-[#5A6E85] leading-relaxed">
                Perfect for birthdays, romantic proposals, weddings, corporate launches, and baby showers. We handle everything from safe on-site inflating to ribbon tethering and weighted placement across Bangalore.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-3">
                <div className="flex items-start gap-2.5 p-3 rounded-lg bg-[#FFFDF9] border border-[#F5E6EC]">
                  <CheckCircle className="w-5 h-5 text-[#059669] shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm text-[#111A2E] font-medium">100% Certified non-flammable &amp; non-toxic helium gas</span>
                </div>
                <div className="flex items-start gap-2.5 p-3 rounded-lg bg-[#FFFDF9] border border-[#F5E6EC]">
                  <CheckCircle className="w-5 h-5 text-[#059669] shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm text-[#111A2E] font-medium">High-grade latex, chrome metallics, and jumbo foils</span>
                </div>
                <div className="flex items-start gap-2.5 p-3 rounded-lg bg-[#FFFDF9] border border-[#F5E6EC]">
                  <CheckCircle className="w-5 h-5 text-[#059669] shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm text-[#111A2E] font-medium">Matching color curling ribbons &amp; weighted anchor bases</span>
                </div>
                <div className="flex items-start gap-2.5 p-3 rounded-lg bg-[#FFFDF9] border border-[#F5E6EC]">
                  <CheckCircle className="w-5 h-5 text-[#059669] shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm text-[#111A2E] font-medium">Extended floating life with premium Hi-Float treatment</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. HELIUM SERVICES SELECTION */}
      <section className="py-14 md:py-18 bg-[#FFF8FA] border-y border-[#F5E6EC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs uppercase tracking-wider font-bold text-[#EE3775] bg-white px-3 py-1 rounded-md border border-[#F5E6EC]">
              Our Balloon Options
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#111A2E] mt-3">
              Helium Gas Balloon Styling Arrangements
            </h2>
            <p className="text-sm sm:text-base text-[#5A6E85] mt-2">
              Select from floating bunches, ceiling takeovers, giant foils, and personalized print clusters.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {balloonServices.map((item, idx) => (
              <div 
                key={idx} 
                className="bg-white rounded-2xl overflow-hidden border border-[#F5E6EC] shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
              >
                <div>
                  <div className="aspect-[16/11] overflow-hidden bg-gray-100">
                    <img 
                      src={item.image} 
                      alt={item.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" 
                    />
                  </div>
                  <div className="p-5">
                    <span className={`inline-block text-xs font-bold px-2.5 py-1 rounded-full border mb-3 ${item.color}`}>
                      {item.tag}
                    </span>
                    <h3 className="text-lg font-bold text-[#111A2E] mb-2">{item.title}</h3>
                    <p className="text-xs sm:text-sm text-[#5A6E85] leading-relaxed">{item.desc}</p>
                  </div>
                </div>
                <div className="px-5 pb-5 pt-2 border-t border-[#F5E6EC] flex items-center justify-between text-xs font-semibold text-[#EE3775]">
                  <span>Ribbons &amp; Weights Included</span>
                  <CheckCircle className="w-4 h-4" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. OCCASIONS GRID */}
      <section className="py-14 md:py-18 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs uppercase tracking-wider font-bold text-[#EE3775] bg-[#FFE8ED] px-3 py-1 rounded-md">
              Perfect For Every Occasion
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#111A2E] mt-3">
              Where Helium Balloons Bring Pure Magic
            </h2>
            <p className="text-sm sm:text-base text-[#5A6E85] mt-2">
              Transforming birthdays, corporate galas, and romantic celebrations across Bangalore.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {occasions.map((occ, idx) => (
              <div 
                key={idx}
                className="p-6 rounded-2xl bg-[#FFFDF9] border border-[#F5E6EC] hover:border-[#EE3775]/40 transition-all flex flex-col justify-between"
              >
                <div>
                  <span className="inline-block text-xs font-bold px-2.5 py-1 rounded-full bg-[#FFE8ED] text-[#EE3775] mb-3">
                    {occ.badge}
                  </span>
                  <h3 className="text-base font-bold text-[#111A2E] mb-2">{occ.name}</h3>
                  <p className="text-xs sm:text-sm text-[#5A6E85] leading-relaxed">{occ.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. SPECIALTIES & WHY 7DELIGHTS */}
      <section className="py-14 md:py-18 bg-[#FFF8FA] border-y border-[#F5E6EC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs uppercase tracking-wider font-bold text-[#EE3775] bg-white px-3 py-1 rounded-md border border-[#F5E6EC]">
              Specialties &amp; Safety
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#111A2E] mt-3">
              Why 7Delights is the Best Place for Helium Balloons
            </h2>
            <p className="text-sm sm:text-base text-[#5A6E85] mt-2">
              Guaranteed pure helium gas, trained inflation technicians, and stunning creative arrangements.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feat, idx) => (
              <div 
                key={idx}
                className="p-6 rounded-2xl bg-white border border-[#F5E6EC] hover:border-[#EE3775]/40 transition-all shadow-sm"
              >
                <div className="w-12 h-12 rounded-xl bg-[#FFFDF9] border border-[#F5E6EC] flex items-center justify-center mb-4">
                  {feat.icon}
                </div>
                <h3 className="text-base sm:text-lg font-bold text-[#111A2E] mb-2">{feat.title}</h3>
                <p className="text-xs sm:text-sm text-[#5A6E85] leading-relaxed">{feat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. PHOTO GALLERY & VIDEO SECTION */}
      <section className="py-14 md:py-18 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs uppercase tracking-wider font-bold text-[#EE3775] bg-[#FFE8ED] px-3 py-1 rounded-md">
              Gallery &amp; Demo
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#111A2E] mt-3">
              Helium Gas Balloons Gallery
            </h2>
            <p className="text-sm sm:text-base text-[#5A6E85] mt-2">
              Browse actual photographs of our helium balloon arrangements across Bengaluru venues.
            </p>
          </div>

          {/* Photo Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {galleryImages.map((img, idx) => (
              <div 
                key={idx}
                className="group relative rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow bg-white border border-[#F5E6EC]"
              >
                <div className="aspect-[4/3] overflow-hidden bg-gray-100">
                  <img
                    src={img.src}
                    alt={img.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    onError={(e) => {
                      e.currentTarget.src = '/assets/helium-floating-balloons.webp';
                    }}
                  />
                </div>
                <div className="p-4 bg-[#FFFDF9]">
                  <h4 className="text-sm font-bold text-[#111A2E] mb-1">{img.title}</h4>
                  <p className="text-xs text-[#5A6E85]">{img.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Embedded Video Player */}
          <div className="max-w-3xl mx-auto bg-white p-4 sm:p-6 rounded-2xl border border-[#F5E6EC] shadow-md">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-[#FFE8ED] flex items-center justify-center text-[#EE3775]">
                  <Sparkles className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-sm sm:text-base font-bold text-[#111A2E]">Watch Helium Balloons Video</h3>
                  <p className="text-xs text-[#5A6E85]">See floating canopies and balloon bouquets setting a magical mood</p>
                </div>
              </div>
            </div>
            
            <div className="relative rounded-xl overflow-hidden aspect-video bg-black/5 shadow-inner">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/3oaJB-85N1E?rel=0"
                title="Helium Gas Balloons by 7Delights Bangalore"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* 7. FAQ SECTION */}
      <section className="py-14 md:py-18 bg-[#FFF8FA] border-t border-[#F5E6EC]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <span className="text-xs uppercase tracking-wider font-bold text-[#EE3775] bg-white px-3 py-1 rounded-md border border-[#F5E6EC]">
              Got Questions?
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#111A2E] mt-3">
              Frequently Asked Questions
            </h2>
            <p className="text-sm sm:text-base text-[#5A6E85] mt-2">
              Everything you need to know about safety, floating durations, and booking helium balloons in Bangalore.
            </p>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="border border-[#F5E6EC] rounded-xl overflow-hidden bg-white transition-colors"
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
                  <div className="px-5 pb-4 pt-1 text-xs sm:text-sm text-[#5A6E85] leading-relaxed border-t border-[#F5E6EC]/60 bg-[#FFFDF9]">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. BOTTOM CALL TO ACTION STRIP */}
      <section className="bg-gradient-to-r from-[#111A2E] to-[#1C2B4B] text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
            <div>
              <h3 className="text-xl sm:text-2xl font-bold tracking-tight">
                Ready to Add Floating Fun to Your Celebration?
              </h3>
              <p className="text-sm text-gray-300 mt-1 max-w-xl">
                Order 50 to 500+ certified helium balloons, metallic foils, and ribbons delivered and styled across Bangalore.
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
                href="https://wa.me/919980029977?text=Hi%207Delights,%20I'm%20planning%20an%20event%20and%20want%20to%20order%20Helium%20Gas%20Balloons."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-[#25D366] hover:bg-[#20BA5A] text-white font-semibold text-sm transition-all shadow-md"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp Us</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

