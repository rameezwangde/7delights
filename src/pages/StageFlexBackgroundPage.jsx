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
  PartyPopper,
  CheckCircle2,
  Sparkle
} from 'lucide-react';
import { GoldUnderline } from '../components/Doodles';

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
      image: '/assets/stage-flex-backdrop.webp'
    },
    {
      title: 'Modular Elevated Stages & Risers',
      desc: 'Heavy-duty interlocking wooden/aluminum stage platforms with carpeted top finishes, step units, and crisp black pleated skirting.',
      tag: 'Heavy-Duty Stage',
      color: 'bg-[#FFF3DF] text-[#D97706] border-[#FFE4B8]',
      image: '/assets/stage.webp'
    },
    {
      title: 'Podiums, Lecterns & Branding',
      desc: 'Custom branded wooden and acrylic podiums with mic mounts, corporate logo decals, and reading spot lights for keynotes.',
      tag: 'Branded Podiums',
      color: 'bg-[#F2EDFF] text-[#7B61FF] border-[#E0D5FF]',
      image: '/assets/stage-podium.webp'
    },
    {
      title: 'Warm Uplighters & Profile Lighting',
      desc: 'Floor-mounted LED wash pars and profile spots creating dramatic colored uplighting that makes backdrops and speakers stand out.',
      tag: 'Stage Uplighting',
      color: 'bg-[#E3F8F2] text-[#059669] border-[#C1F1E1]',
      image: '/assets/stage-lighting.webp'
    },
  ];

  const features = [
    {
      title: 'Creativity and Innovation',
      desc: 'We are passionate about creating unique and innovative stage and background designs that will set your event apart.',
      icon: <Layers className="w-6 h-6 text-[#EE3775]" />,
    },
    {
      title: 'Expertise and Experience',
      desc: 'Our team of skilled professionals has years of experience in designing and constructing stages and backdrops for a wide range of events.',
      icon: <Award className="w-6 h-6 text-[#7B61FF]" />,
    },
    {
      title: 'Quality and Safety',
      desc: 'We use high-quality materials and adhere to strict safety standards to ensure the durability and safety of our stage and background setups.',
      icon: <ShieldCheck className="w-6 h-6 text-[#059669]" />,
    },
    {
      title: 'Customization',
      desc: 'We offer a wide range of customization options to meet your specific needs and budget, from intimate halls to large outdoor grounds.',
      icon: <Palette className="w-6 h-6 text-[#D97706]" />,
    },
    {
      title: 'Seamless Execution',
      desc: 'We handle every aspect of stage and background setup, from design and construction to installation and dismantling, ensuring a smooth and hassle-free experience.',
      icon: <Clock className="w-6 h-6 text-[#3B82F6]" />,
    },
    {
      title: 'Turnkey Event Production',
      desc: 'Complete integration with podiums, audio systems, synchronized stage lights, and red carpet stairways across Bangalore.',
      icon: <Trophy className="w-6 h-6 text-[#EC4899]" />,
    },
  ];

  const occasions = [
    {
      name: 'Conferences and Seminars',
      desc: 'Create a professional and engaging environment for your speakers, presentations, and panel discussions.',
      badge: 'Conferences'
    },
    {
      name: 'Weddings and Receptions',
      desc: 'Transform your wedding venue into a magical setting with a stunning stage and theme-crafted backdrop.',
      badge: 'Weddings'
    },
    {
      name: 'Corporate Events & Galas',
      desc: 'Enhance your brand image and create a memorable, camera-ready experience for your guests and employees.',
      badge: 'Corporate'
    },
    {
      name: 'Concerts and Performances',
      desc: 'Provide a visually captivating, heavy-duty elevated stage for live performers, dance troupes, and bands.',
      badge: 'Concerts'
    },
    {
      name: 'Private Parties & Milestones',
      desc: 'Elevate birthdays, anniversaries, and family celebrations with a custom-designed stage and photo-worthy backdrop.',
      badge: 'Private Parties'
    }
  ];

  const faqs = [
    {
      q: 'How far in advance should I book 7Delights stage flex background for my event?',
      a: 'To ensure maximum availability of stage flex background, specific themes, & equipment, we recommend booking at least 1 to 6 weeks in advance for social parties & corporate events, and 3 to 6 months in advance for major weddings or large-scale corporate launches. However, if you have a last-minute request, contact us & we will do our best to make it happen!'
    },
    {
      q: 'How long does it take for your team to set up?',
      a: 'Setup times vary by service. Stage flex background may take 1 to 2 hours. Complex thematic stage setups, intricate lighting riggings, or heavy SFX installations can take anywhere from 4 to 12 hours. We always coordinate directly with the venue to ensure everything is flawlessly set up well before your first guest arrives.'
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
      q: 'What are the basic organizer requirements on-site?',
      a: 'Organizers simply need to provide clear floor space with adequate ceiling clearance and standard electrical points if stage uplighting or podium mics are required.'
    }
  ];

  const galleryImages = [
    {
      src: '/assets/stage-flex-backdrop-banner.webp',
      title: 'Family Day Corporate Stage',
      desc: 'Elevated carpeted stage with custom flex backdrop and uplighting'
    },
    {
      src: '/assets/stage.webp',
      title: 'Conference Stage Setup',
      desc: 'Modular elevated platform with black pleated skirting'
    },
    {
      src: '/assets/stage-podium.webp',
      title: 'Speaker Podium & Lectern',
      desc: 'Custom branded podium with spot illuminator'
    },
    {
      src: '/assets/stage-flex-backdrop.webp',
      title: 'Stage and Flex Backdrop',
      desc: 'High-definition anti-glare printed backdrop frame'
    },
    {
      src: '/assets/stage-lighting.webp',
      title: 'Stage Profile & Uplighting',
      desc: 'Color-wash pars highlighting backdrop architecture'
    }
  ];

  return (
    <div className="bg-[#FFFDF9] min-h-screen font-sans text-[#111A2E] selection:bg-[#EE3775] selection:text-white">
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
            <a href="#dj-sound-stage-lighting" className="hover:text-[#EE3775] transition-colors">DJ &amp; Stage</a>
            <span>/</span>
            <span className="text-[#111A2E] font-semibold">Stage Flex Background</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            {/* Left Content Column */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FFE8ED] border border-[#FFD0DB] text-[#EE3775] text-xs sm:text-sm font-bold uppercase tracking-wider">
                <Sparkles className="w-4 h-4" />
                <span>Premier Stage &amp; Backdrop Fabrication in Bangalore</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#111A2E] tracking-tight leading-tight">
                Stage Background Planners for <span className="text-[#EE3775]">Events in Bangalore</span>
              </h1>

              <div className="mb-2">
                <GoldUnderline className="w-48 h-auto text-[#EE3775]" />
              </div>

              <p className="text-base sm:text-lg text-[#5A6E85] leading-relaxed">
                Set the stage for success with stunning stage &amp; background setups! 7Delights specializes in designing and constructing custom elevated wooden platforms, anti-glare high-resolution flex backdrops, speaker podiums, and theatrical uplighting for corporate summits, award galas, and weddings across Bengaluru.
              </p>

              {/* Key Highlights Pill Row */}
              <div className="flex flex-wrap gap-3 pt-1">
                <div className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white border border-[#F5E6EC] shadow-xs text-xs sm:text-sm text-[#111A2E] font-medium">
                  <Clock className="w-4 h-4 text-[#EE3775]" />
                  <span>Duration: <strong>2 to 4 Hours Standard</strong></span>
                </div>
                <div className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white border border-[#F5E6EC] shadow-xs text-xs sm:text-sm text-[#111A2E] font-medium">
                  <MapPin className="w-4 h-4 text-[#059669]" />
                  <span>Available Across <strong>All Bangalore</strong></span>
                </div>
                <div className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white border border-[#F5E6EC] shadow-xs text-xs sm:text-sm text-[#111A2E] font-medium">
                  <Layers className="w-4 h-4 text-[#7B61FF]" />
                  <span>Fabrication: <strong>Modular Wooden &amp; Star Flex</strong></span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-3">
                <a
                  href="tel:+919980029977"
                  className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-[#EE3775] text-white font-bold text-sm sm:text-base shadow-lg shadow-[#EE3775]/25 hover:bg-[#D92C65] transition-all transform hover:-translate-y-0.5"
                >
                  <Phone className="w-4 h-4 fill-white" />
                  <span>Call +91 99800 29977</span>
                </a>
                <a
                  href="https://api.whatsapp.com/send/?phone=919980029977&text=Hi%207Delights,%20I%20am%20interested%20in%20Stage%20and%20Flex%20Background%20services.%20Please%20share%20packages."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-[#25D366] text-white font-bold text-sm sm:text-base shadow-lg shadow-[#25D366]/25 hover:bg-[#20BA5A] transition-all transform hover:-translate-y-0.5"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>WhatsApp Inquiry</span>
                </a>
              </div>
            </div>

            {/* Right Media Banner */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white aspect-[4/3] bg-gray-100 group">
                <img
                  src="/assets/stage-flex-backdrop-banner.webp"
                  alt="Stage and Flex Backdrop Planners in Bangalore"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  onError={(e) => {
                    e.currentTarget.src = '/assets/stage-flex-backdrop.webp';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#111A2E]/75 via-transparent to-transparent pointer-events-none"></div>
                <div className="absolute bottom-4 left-4 right-4 text-white pointer-events-none">
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#EE3775] text-xs font-bold uppercase tracking-wider mb-1">
                    Turnkey Stage Setup
                  </div>
                  <p className="text-sm font-medium text-white/95">
                    Modular Platforms, High-Res Flex &amp; Lighting Rigging
                  </p>
                </div>
              </div>

              {/* Float Badge */}
              <div className="absolute -bottom-5 -left-5 bg-white p-3.5 rounded-xl shadow-xl border border-[#F5E6EC] hidden sm:flex items-center gap-3 z-10">
                <div className="w-10 h-10 rounded-lg bg-[#FFE8ED] flex items-center justify-center text-[#EE3775]">
                  <Presentation className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-[#5A6E85] font-medium">Sturdy &amp; Safe</div>
                  <div className="text-sm font-bold text-[#111A2E]">Anti-Glare Matte</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. ABOUT STAGE BACKGROUND SECTION */}
      <section className="py-14 md:py-18 bg-white border-b border-[#F5E6EC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Image display */}
            <div className="lg:col-span-5">
              <div className="relative rounded-2xl overflow-hidden shadow-lg border border-[#F5E6EC]">
                <img
                  src="/assets/stage.webp"
                  alt="Stage and Background Setup in Bangalore"
                  className="w-full h-auto object-cover"
                  onError={(e) => {
                    e.currentTarget.src = '/assets/stage-flex-backdrop.webp';
                  }}
                />
                <div className="p-4 bg-[#FFFDF9] border-t border-[#F5E6EC]">
                  <div className="flex items-center justify-between text-xs sm:text-sm">
                    <span className="font-semibold text-[#111A2E]">Standard Installation Duration:</span>
                    <span className="font-bold text-[#EE3775]">2 to 4 Hours (₹0 Base Quote)</span>
                  </div>
                  <p className="text-xs text-[#5A6E85] mt-1">
                    *Complete on-site fabrication, frame mounting, and post-event clean teardown included.
                  </p>
                </div>
              </div>
            </div>

            {/* Content Details */}
            <div className="lg:col-span-7 space-y-5">
              <div className="inline-block text-xs uppercase tracking-wider font-bold text-[#EE3775] bg-[#FFE8ED] px-3 py-1 rounded-md">
                About Stage Background
              </div>

              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#111A2E] leading-snug">
                7Delights: Set the Stage for Success with Stunning Stage &amp; Background Setups
              </h2>

              <p className="text-sm sm:text-base text-[#5A6E85] leading-relaxed">
                Creating a captivating and memorable event starts with a visually stunning stage and backdrop. <strong>7Delights</strong> specializes in designing and constructing custom stage and background setups that will elevate your event and leave a lasting impression on your audience. Whether it's a conference, concert, wedding, corporate event, or private party, we'll transform your venue into a breathtaking spectacle.
              </p>

              <div className="space-y-3 pt-2">
                <div className="p-4 rounded-xl bg-[#FFFDF9] border border-[#F5E6EC]">
                  <h3 className="text-sm font-bold text-[#111A2E] mb-1 flex items-center gap-2">
                    <Palette className="w-4 h-4 text-[#EE3775]" />
                    <span>Custom Concept &amp; Design</span>
                  </h3>
                  <p className="text-xs sm:text-sm text-[#5A6E85]">
                    Our experienced designers work closely with you to understand your vision and create a unique stage and backdrop design that perfectly complements your event theme and corporate objectives.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-[#FFFDF9] border border-[#F5E6EC]">
                  <h3 className="text-sm font-bold text-[#111A2E] mb-1 flex items-center gap-2">
                    <Layers className="w-4 h-4 text-[#D97706]" />
                    <span>Sturdy Stage Construction</span>
                  </h3>
                  <p className="text-xs sm:text-sm text-[#5A6E85]">
                    We build sturdy and visually appealing stages of various sizes and configurations, ensuring safety, structural stability, non-slip carpeting, and comfortable steps.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-[#FFFDF9] border border-[#F5E6EC]">
                  <h3 className="text-sm font-bold text-[#111A2E] mb-1 flex items-center gap-2">
                    <Maximize2 className="w-4 h-4 text-[#059669]" />
                    <span>Backdrop Creation &amp; Tension Framing</span>
                  </h3>
                  <p className="text-xs sm:text-sm text-[#5A6E85]">
                    From elegant drapes and custom-printed anti-glare banners to intricate 3D set designs and scenic backdrops, we engineer backdrops that look flawless in photography and video streams.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. STAGE SOLUTIONS */}
      <section className="py-14 md:py-18 bg-[#FFF8FA] border-b border-[#F5E6EC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs uppercase tracking-wider font-bold text-[#EE3775] bg-white px-3 py-1 rounded-md border border-[#F5E6EC]">
              Our Fabrication Services
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#111A2E] mt-3">
              Complete Stage &amp; Backdrop Solutions
            </h2>
            <GoldUnderline className="w-32 h-auto text-[#EE3775] mx-auto mt-2" />
            <p className="text-xs sm:text-sm text-[#5A6E85] mt-2">
              From compact townhall backdrops to expansive indoor/outdoor festival stages.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {stageServices.map((item, idx) => (
              <div 
                key={idx} 
                className="bg-white rounded-2xl overflow-hidden border border-[#F5E6EC] shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between hover:-translate-y-1"
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
                    <p className="text-lg font-bold text-[#111A2E] mb-2">{item.title}</p>
                    <p className="text-xs sm:text-sm text-[#5A6E85] leading-relaxed">{item.desc}</p>
                  </div>
                </div>
                <div className="px-5 pb-5 pt-2 border-t border-[#F5E6EC] flex items-center justify-between text-xs font-semibold text-[#EE3775]">
                  <span>On-Site Crew Included</span>
                  <CheckCircle className="w-4 h-4" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. SPECIALTIES & 7DELIGHTS THE BEST EVENT */}
      <section className="py-14 md:py-18 bg-white border-b border-[#F5E6EC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {/* Subsection A: Specialties */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 space-y-5">
              <span className="text-xs uppercase tracking-wider font-bold text-[#EE3775] bg-[#FFE8ED] px-3 py-1 rounded-md">
                Our Signature Standard
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#111A2E]">
                Specialties of Stage Background
              </h2>
              <p className="text-sm sm:text-base text-[#5A6E85] leading-relaxed">
                Our stage setup at 7Delights is designed to be visually impactful and 100% dependable. Here is why event managers choose us:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {features.map((feat, i) => (
                  <div key={i} className="p-4 rounded-xl bg-[#FFFDF9] border border-[#F5E6EC]">
                    <div className="flex items-center gap-2 mb-1.5">
                      {feat.icon}
                      <h3 className="text-sm font-bold text-[#111A2E]">{feat.title}</h3>
                    </div>
                    <p className="text-xs text-[#5A6E85] leading-relaxed">{feat.desc}</p>
                  </div>
                ))}
              </div>

              <div className="flex items-center gap-3 pt-3">
                <a
                  href="tel:+919980029977"
                  className="px-6 py-3 rounded-full bg-[#EE3775] hover:bg-[#DE2765] text-white font-bold text-xs sm:text-sm shadow-md transition-all"
                >
                  Book Now
                </a>
                <a
                  href="tel:+919980029977"
                  className="px-6 py-3 rounded-full border border-gray-200 text-[#111A2E] hover:border-[#EE3775] font-bold text-xs sm:text-sm transition-all"
                >
                  Make a Call
                </a>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="relative rounded-2xl overflow-hidden shadow-xl border border-gray-100">
                <img
                  src="/assets/Stage-Flex-Backdrop.webp"
                  alt="Stage and Flex Backdrop"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>

          {/* Subsection B: 7Delights - The Best Event for Stage Background */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center pt-8 border-t border-gray-100">
            <div className="lg:col-span-5 order-2 lg:order-1">
              <div className="relative rounded-2xl overflow-hidden shadow-xl border border-gray-100">
                <img
                  src="/assets/stage-podium.webp"
                  alt="Speaker Podium on Stage"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>

            <div className="lg:col-span-7 order-1 lg:order-2 space-y-5">
              <span className="text-xs uppercase tracking-wider font-bold text-[#00A86B] bg-[#EBF7F2] px-3 py-1 rounded-md">
                Perfect for Any Occasion
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#111A2E]">
                7Delights — The Best Event for Stage Background
              </h2>
              <p className="text-sm sm:text-base text-[#5A6E85] leading-relaxed">
                7Delights is your authorized source for the ultimate Stage and Flex Background. We fabricate customized staging for:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {occasions.map((occ, i) => (
                  <div key={i} className="p-4 rounded-xl bg-[#FFFDF9] border border-[#F5E6EC]">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#EE3775] bg-[#FFE8ED] px-2 py-0.5 rounded-full inline-block mb-1.5">
                      {occ.badge}
                    </span>
                    <h3 className="text-sm font-bold text-[#111A2E] mb-1">{occ.name}</h3>
                    <p className="text-xs text-[#5A6E85] leading-relaxed">{occ.desc}</p>
                  </div>
                ))}
              </div>

              <p className="text-xs sm:text-sm text-[#5A6E85] italic pt-1">
                <strong>Let Us Set the Stage for Your Success:</strong> Contact 7Delights today for a free consultation and let us help you create a stage and background setup that will make your event truly unforgettable.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. PHOTO GALLERY & DEMO VIDEO */}
      <section className="py-14 md:py-18 bg-[#FFF8FA] border-b border-[#F5E6EC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs uppercase tracking-wider font-bold text-[#EE3775] bg-white px-3 py-1 rounded-md border border-[#F5E6EC]">
              Gallery &amp; Demo
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#111A2E] mt-3">
              Stage Flex Background Gallery
            </h2>
            <GoldUnderline className="w-28 h-auto text-[#EE3775] mx-auto mt-2" />
            <p className="text-xs sm:text-sm text-[#5A6E85] mt-2">
              Browse actual photographs of our stages, elevated platforms, and printed backdrops fabricated across Bangalore.
            </p>
          </div>

          {/* Photo Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-14">
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
                <div className="p-3.5 bg-white">
                  <h3 className="text-xs sm:text-sm font-bold text-[#111A2E] mb-1">{img.title}</h3>
                  <p className="text-[11px] text-[#5A6E85] line-clamp-2">{img.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Embedded YouTube Showcase Video */}
          <div className="max-w-3xl mx-auto bg-white p-4 sm:p-6 rounded-2xl border border-[#F5E6EC] shadow-md">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-[#FFE8ED] flex items-center justify-center text-[#EE3775]">
                  <Sparkles className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-sm sm:text-base font-bold text-[#111A2E]">Watch Our Video</h3>
                  <p className="text-xs text-[#5A6E85]">See our production crew in action constructing stages and backdrops</p>
                </div>
              </div>
            </div>
            
            <div className="relative rounded-xl overflow-hidden aspect-video bg-black/5 shadow-inner">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/m3z2RTSmAQU?rel=0"
                title="7Delights Stage and Flex Background Video Demo"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* 6. FAQS SECTION */}
      <section className="py-14 md:py-18 bg-white border-b border-[#F5E6EC]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-xs uppercase tracking-wider font-bold text-[#EE3775] bg-[#FFE8ED] px-3 py-1 rounded-md">
              Got Questions?
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#111A2E] mt-3">
              Event FAQ ?
            </h2>
            <GoldUnderline className="w-28 h-auto text-[#EE3775] mx-auto mt-2" />
            <p className="text-xs sm:text-sm text-[#5A6E85] mt-2">
              Everything you need to know about booking our stage construction and flex printing services in Bangalore.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div
                  key={index}
                  className="bg-white rounded-2xl border border-[#F5E6EC] shadow-xs overflow-hidden transition-all duration-200"
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

      {/* 7. BOTTOM CTA */}
      <section className="py-14 bg-gradient-to-r from-[#111A2E] to-[#1E2C48] text-white text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-black mb-3">
            Have queries about our services and performances?
          </h2>
          <p className="text-xs sm:text-sm text-gray-300 max-w-2xl mx-auto mb-8">
            Feel Free to Talk To Us Right Away! Let us get your stage, podium, and backdrop fabricated before the event starts.
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
              href="#dj-sound-stage-lighting"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-white/10 hover:bg-white/20 text-white font-bold text-sm backdrop-blur-xs border border-white/20 transition-all"
            >
              <span>Back to DJ &amp; Stage Hub</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
