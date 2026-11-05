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
  Layers, 
  Award, 
  Star, 
  Users, 
  Trophy, 
  Presentation,
  Maximize2,
  Tv,
  Palette,
  PartyPopper
} from 'lucide-react';

export default function StageFlexBackgroundPage() {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const stageServices = [
    {
      title: 'High-Res Matte Flex Backdrops',
      desc: 'Seamless, anti-glare matte flex printing tightly stretched over robust iron and wooden frames to eliminate camera reflection.',
      tag: 'Anti-Glare Flex',
      color: 'bg-[#FFE8ED] text-[#EE3775] border-[#FFD0DB]',
      image: '/assets/stage-flex-siemens.webp'
    },
    {
      title: 'Modular Elevated Stages & Risers',
      desc: 'Heavy-duty interlocking aluminum/steel stage platforms with carpeted top finishes, step units, and crisp black pleated skirting.',
      tag: 'Heavy-Duty Stage',
      color: 'bg-[#FFF3DF] text-[#D97706] border-[#FFE4B8]',
      image: '/assets/stage-main.webp'
    },
    {
      title: 'Podiums, Lecterns & Branding',
      desc: 'Custom branded wooden and acrylic podiums with mic mounts, corporate logo decals, and reading spot lights for keynotes.',
      tag: 'Branded Podiums',
      color: 'bg-[#F2EDFF] text-[#7B61FF] border-[#E0D5FF]',
      image: '/assets/stage-podium.webp'
    },
    {
      title: 'Warm Uplighters & Warm Profile Lighting',
      desc: 'Floor-mounted LED wash pars and profile spots creating dramatic colored uplighting that makes backdrops and speakers stand out.',
      tag: 'Stage Uplighting',
      color: 'bg-[#E3F8F2] text-[#059669] border-[#C1F1E1]',
      image: '/assets/stage-lighting-setup.webp'
    },
  ];

  const features = [
    {
      title: 'Custom Architectural Design',
      desc: 'Experienced event architects create customized stage and backdrop 3D renders matching corporate brand guidelines and stage dimensions.',
      icon: <Layers className="w-6 h-6 text-[#EE3775]" />,
    },
    {
      title: 'Sturdy & Certified Safe Rigging',
      desc: 'Precision engineering and heavy ballast weights ensure all elevated stages, vertical truss frames, and backdrops remain 100% rock-solid.',
      icon: <ShieldCheck className="w-6 h-6 text-[#059669]" />,
    },
    {
      title: 'Anti-Glare High-Definition Printing',
      desc: 'Printed using high-grade star flex and UV printing technology delivering photorealistic color saturation without camera flash glare.',
      icon: <Presentation className="w-6 h-6 text-[#7B61FF]" />,
    },
    {
      title: 'Integrated Lighting & Audio Wire Channels',
      desc: 'Concealed cable trays and discreet pass-through channels keeping the stage surface clean, trip-hazard free, and photogenic.',
      icon: <Maximize2 className="w-6 h-6 text-[#D97706]" />,
    },
    {
      title: 'Punctual Setup & Clean Dismantling',
      desc: 'Fabricated and pre-assembled offsite, installed seamlessly 2 to 4 hours prior, and packed away quietly post-event.',
      icon: <Clock className="w-6 h-6 text-[#3B82F6]" />,
    },
    {
      title: 'Scalable for Ballrooms & Outdoor Lawns',
      desc: 'From compact 8x6 ft board meeting backdrops to 40x16 ft arena stages for corporate annual days and award ceremonies.',
      icon: <Trophy className="w-6 h-6 text-[#EC4899]" />,
    },
  ];

  const occasions = [
    {
      name: 'Conferences & Executive Seminars',
      desc: 'Create an authoritative, world-class backdrop for keynote speakers, panel discussions, and Q&A sessions.',
      badge: 'Conferences'
    },
    {
      name: 'Corporate Annual Bashes & Family Days',
      desc: 'Vibrant custom themed stages for employee performances, leadership speeches, and corporate family celebrations.',
      badge: 'Annual Meets'
    },
    {
      name: 'Award Ceremonies & Gala Nights',
      desc: 'Elevated stages with dramatic uplighting, red carpets, and podiums that honor top performers in style.',
      badge: 'Award Galas'
    },
    {
      name: 'Product Launches & Brand Reveals',
      desc: 'Sleek, high-impact backdrop backdrops designed for dramatic vehicle, software, or brand identity reveals.',
      badge: 'Brand Launches'
    }
  ];

  const faqs = [
    {
      q: 'How far in advance should I book 7Delights stage flex background for my event?',
      a: 'To ensure maximum availability of stage flex background, specific themes, & equipment, we recommend booking at least 1 to 6 weeks in advance for social parties & corporate events, and 3 to 6 months in advance for major annual corporate summits or large-scale product launches. However, if you have a last-minute request, contact us & we will do our best to make it happen!'
    },
    {
      q: 'How long does it take for your team to set up?',
      a: 'Setup times vary by service. A standard flex backdrop setup takes about 1 to 2 hours. Complex thematic stage setups with heavy steel frames, carpeting, lighting, and podiums take between 2 to 4 hours. We always coordinate directly with the venue so everything is ready well before guests arrive.'
    },
    {
      q: 'What is your payment policy?',
      a: 'To secure your date, artists, and materials, we require an advance payment upon signing the contract. The remaining balance is structured into milestones leading up to, or on the day of the event.'
    },
    {
      q: 'Can you help design the backdrop artwork and flex layout?',
      a: 'Yes, absolutely! Our in-house graphic design team can design high-resolution vector artworks incorporating your company logos, sponsor branding, and event theme guidelines.'
    },
    {
      q: 'What are the organizer requirements on-site?',
      a: 'Organizers simply need to provide clear floor space with adequate ceiling clearance and standard electrical points if stage uplighting or podium mics are required.'
    }
  ];

  const galleryImages = [
    {
      src: '/assets/stage-flex-siemens.webp',
      title: 'Corporate Family Day Stage',
      desc: 'Siemens Healthineers branded stage with elevated risers and uplights'
    },
    {
      src: '/assets/stage-main.webp',
      title: 'Full Conference Stage Setup',
      desc: 'Professional carpeted stage with wide flex backdrop'
    },
    {
      src: '/assets/stage-podium.webp',
      title: 'Speaker Podium & Stage',
      desc: 'Custom branded lectern and illuminated stage setting'
    },
    {
      src: '/assets/stage-lighting-setup.webp',
      title: 'Theatrical Stage Lighting',
      desc: 'Warm color wash creating an immersive keynote atmosphere'
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
            <a href="#corporate-events" className="hover:text-[#EE3775] transition-colors">Corporate Events</a>
            <span>/</span>
            <span className="text-[#111A2E] font-semibold">Stage &amp; Flex Backdrop</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            {/* Left Content Column */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FFE8ED] border border-[#FFD0DB] text-[#EE3775] text-xs md:text-sm font-semibold tracking-wide">
                <Layers className="w-4 h-4" />
                <span>Custom Stage Fabrication &amp; Branded Flex Backdrops</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#111A2E] tracking-tight leading-tight">
                Stage Background Planners for <span className="text-[#EE3775]">Events in Bangalore</span>
              </h1>

              <p className="text-base sm:text-lg text-[#5A6E85] leading-relaxed">
                Set the stage for success with stunning stage and background setups! 7Delights specializes in designing and constructing custom elevated stages, high-resolution branded flex backdrops, and podiums that elevate your corporate event and leave a lasting impression.
              </p>

              {/* Key Highlights Pill Row */}
              <div className="flex flex-wrap gap-3 pt-2">
                <div className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white border border-[#F5E6EC] shadow-sm text-xs sm:text-sm text-[#111A2E] font-medium">
                  <Clock className="w-4 h-4 text-[#EE3775]" />
                  <span>Duration: <strong>2 to 4 Hours Setup</strong></span>
                </div>
                <div className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white border border-[#F5E6EC] shadow-sm text-xs sm:text-sm text-[#111A2E] font-medium">
                  <MapPin className="w-4 h-4 text-[#059669]" />
                  <span>Available Across <strong>All Bangalore</strong></span>
                </div>
                <div className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white border border-[#F5E6EC] shadow-sm text-xs sm:text-sm text-[#111A2E] font-medium">
                  <Presentation className="w-4 h-4 text-[#7B61FF]" />
                  <span>Specs: <strong>Anti-Glare Star Flex &amp; Wood</strong></span>
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
                  href="https://wa.me/919980029977?text=Hi%207Delights,%20I'm%20interested%20in%20Stage%20and%20Flex%20Backdrop%20services%20for%20my%20event."
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
                  src="/assets/stage-flex-backdrop-banner.webp"
                  alt="Stage and Flex Backdrop Setup Bangalore"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  onError={(e) => {
                    e.currentTarget.src = '/assets/stage-main.webp';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#111A2E]/70 via-transparent to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#EE3775] text-xs font-bold uppercase tracking-wider mb-1">
                    Stage Fabrication
                  </div>
                  <p className="text-sm font-medium text-white/95">
                    Seamless Star Flex, Elevated Risers &amp; Spotlights
                  </p>
                </div>
              </div>

              {/* Float Badge */}
              <div className="absolute -bottom-5 -left-5 bg-white p-3.5 rounded-xl shadow-xl border border-[#F5E6EC] hidden sm:flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-[#FFE8ED] flex items-center justify-center text-[#EE3775]">
                  <Trophy className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-[#5A6E85] font-medium">Turnkey Fabrication</div>
                  <div className="text-sm font-bold text-[#111A2E]">Zero Glare Guaranteed</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. ABOUT STAGE BACKGROUND SECTION */}
      <section className="py-14 md:py-18 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Image display */}
            <div className="lg:col-span-5">
              <div className="relative rounded-2xl overflow-hidden shadow-lg border border-[#F5E6EC]">
                <img
                  src="/assets/stage-flex-siemens.webp"
                  alt="Siemens Healthineers Family Day Stage Setup in Bangalore"
                  className="w-full h-auto object-cover"
                />
                <div className="p-4 bg-[#FFFDF9] border-t border-[#F5E6EC]">
                  <div className="flex items-center justify-between text-xs sm:text-sm">
                    <span className="font-semibold text-[#111A2E]">Stage Setup Window:</span>
                    <span className="font-bold text-[#EE3775]">2 to 4 Hours Duration (₹0 Base Quote)</span>
                  </div>
                  <p className="text-xs text-[#5A6E85] mt-1">
                    *(Attracts additional charges for extra hours &amp; custom fabrication sizes).
                  </p>
                </div>
              </div>
            </div>

            {/* Content Details */}
            <div className="lg:col-span-7 space-y-5">
              <div className="inline-block text-xs uppercase tracking-wider font-bold text-[#EE3775] bg-[#FFE8ED] px-3 py-1 rounded-md">
                From Concept to Creation
              </div>

              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#111A2E] leading-snug">
                Custom Designed Stages and Backdrops That Enhance Your Stage Presence
              </h2>

              <p className="text-base text-[#5A6E85] leading-relaxed">
                Creating a captivating and memorable event starts with a visually stunning stage and backdrop. 7Delights specializes in designing and constructing custom stage and background setups that elevate your event and leave a lasting impression on your audience.
              </p>

              <p className="text-base text-[#5A6E85] leading-relaxed">
                Whether it's a conference, corporate annual meet, awards gala, or product reveal, our team manages everything: architectural 3D rendering, sturdy timber/iron frame fabrication, anti-glare flex printing, carpet installation, and atmospheric uplighters.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-3">
                <div className="flex items-start gap-2.5 p-3 rounded-lg bg-[#FFFDF9] border border-[#F5E6EC]">
                  <CheckCircle className="w-5 h-5 text-[#059669] shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm text-[#111A2E] font-medium">Sturdy elevated wooden &amp; steel stage risers</span>
                </div>
                <div className="flex items-start gap-2.5 p-3 rounded-lg bg-[#FFFDF9] border border-[#F5E6EC]">
                  <CheckCircle className="w-5 h-5 text-[#059669] shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm text-[#111A2E] font-medium">High-resolution matte star flex zero-glare printing</span>
                </div>
                <div className="flex items-start gap-2.5 p-3 rounded-lg bg-[#FFFDF9] border border-[#F5E6EC]">
                  <CheckCircle className="w-5 h-5 text-[#059669] shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm text-[#111A2E] font-medium">Custom branded wooden and acrylic speaker podiums</span>
                </div>
                <div className="flex items-start gap-2.5 p-3 rounded-lg bg-[#FFFDF9] border border-[#F5E6EC]">
                  <CheckCircle className="w-5 h-5 text-[#059669] shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm text-[#111A2E] font-medium">Warm LED profile lights and backdrop wash fixtures</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. STAGE SERVICES SELECTION */}
      <section className="py-14 md:py-18 bg-[#FFF8FA] border-y border-[#F5E6EC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs uppercase tracking-wider font-bold text-[#EE3775] bg-white px-3 py-1 rounded-md border border-[#F5E6EC]">
              Our Fabrication Offerings
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#111A2E] mt-3">
              Stage &amp; Backdrop Configurations
            </h2>
            <p className="text-sm sm:text-base text-[#5A6E85] mt-2">
              Explore our modular stage setups, backdrops, and branding accessories.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {stageServices.map((item, idx) => (
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
                  <span>Turnkey Fabrication &amp; Setup</span>
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
              Perfect For Any Occasion
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#111A2E] mt-3">
              Where Our Stages Shine Brightest
            </h2>
            <p className="text-sm sm:text-base text-[#5A6E85] mt-2">
              Delivering authoritative presence and visual elegance across Bangalore venues.
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
              Why 7Delights is the Best Choice for Stage Backdrops
            </h2>
            <p className="text-sm sm:text-base text-[#5A6E85] mt-2">
              Adhering to strict structural safety standards, wrinkle-free flex stretching, and dependable execution.
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
              Stage &amp; Flex Background Gallery
            </h2>
            <p className="text-sm sm:text-base text-[#5A6E85] mt-2">
              Browse actual photographs of our stages and flex backdrops fabricated for leading corporates in Bengaluru.
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
                      e.currentTarget.src = '/assets/stage-main.webp';
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
                  <h3 className="text-sm sm:text-base font-bold text-[#111A2E]">Watch Stage &amp; Event Production Video</h3>
                  <p className="text-xs text-[#5A6E85]">See our production crew in action setting up stages and backdrops</p>
                </div>
              </div>
            </div>
            
            <div className="relative rounded-xl overflow-hidden aspect-video bg-black/5 shadow-inner">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/m3z2RTSmAQU?rel=0"
                title="Stage and Flex Background by 7Delights Bangalore"
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
              Everything you need to know about stage dimensions, flex print quality, and lead times.
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
                Let Us Set the Stage for Your Success!
              </h3>
              <p className="text-sm text-gray-300 mt-1 max-w-xl">
                Get an instant customized quote with stage dimensions, graphic rendering, and on-site fabrication across Bangalore.
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
                href="https://wa.me/919980029977?text=Hi%207Delights,%20I'm%20planning%20an%20event%20and%20want%20to%20order%20Stage%20and%20Flex%20Backdrop."
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

