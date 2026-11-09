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
  Award, 
  CheckCircle2, 
  Tv, 
  Music, 
  Eye, 
  Heart, 
  Zap, 
  Star, 
  Users, 
  PenTool, 
  Layers 
} from 'lucide-react';
import { GoldUnderline } from '../components/Doodles';

export default function LiveSandArtPage() {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const narrativeThemes = [
    {
      title: 'Romantic Couple Love Stories & Weddings',
      desc: 'Narrate the journey of the bride & groom from first meeting to the wedding mandap with emotional transitions drawn live in sand, set to poignant romantic melodies.',
      tag: 'Weddings & Receptions',
      color: 'bg-[#FFE8ED] text-[#EE3775] border-[#FFD0DB]',
      image: '/assets/sand-art-show-bangalore.webp'
    },
    {
      title: 'Corporate Brand Milestones & Product Launches',
      desc: 'Bring company history, CEO visions, product innovations, and anniversary milestones alive on the big LED screen with high-impact, refined corporate sand narratives.',
      tag: 'Corporate & Galas',
      color: 'bg-[#EDF5FF] text-[#2563EB] border-[#D0E2FF]',
      image: '/assets/live-sand-art-bangalore.webp'
    },
    {
      title: 'Mythological & Cultural Heritage Sagas',
      desc: 'Mesmerizing epics, historical sagas, folklore, and festive pooja celebrations depicted through dynamic shifting sand contours, light, and classical ragas.',
      tag: 'Heritage & Festivals',
      color: 'bg-[#FFF3DF] text-[#D97706] border-[#FFE4B8]',
      image: '/assets/live-sand-art.webp'
    },
    {
      title: 'Milestone Birthdays & Family Tribute Stories',
      desc: 'Heartwarming sand tributes celebrating golden jubilees, 1st birthdays, retirement journeys, and touching biographical milestones of the guest of honor.',
      tag: 'Private Celebrations',
      color: 'bg-[#EBF7F2] text-[#00A86B] border-[#C8EFE0]',
      image: '/assets/sand-art-show.webp'
    }
  ];

  const highlights = [
    {
      icon: <PenTool className="w-5 h-5 text-[#2563EB]" />,
      title: 'Nationally Renowned Sand Artists',
      desc: 'Our master sand artists possess extraordinary speed, precision, and emotive storytelling dexterity on backlit glass light-tables.'
    },
    {
      icon: <Tv className="w-5 h-5 text-[#EE3775]" />,
      title: 'Full HD Big-Screen Live Projection',
      desc: 'Every delicate finger stroke, sand scatter, and facial contour is captured in real-time by overhead HD optics and cast onto your venue LED screen.'
    },
    {
      icon: <Heart className="w-5 h-5 text-[#FF7A00]" />,
      title: 'Custom Scripted Storylines',
      desc: 'We coordinate with you prior to the event to script bespoke narrative storyboards, incorporating personal photos, milestones, and logos.'
    },
    {
      icon: <ShieldCheck className="w-5 h-5 text-[#00A86B]" />,
      title: 'Seamless Technical Integration',
      desc: 'We bring our specialized illuminated light-box table, micro-fine filtered silica sand, and video transmission cables, coordinating directly with your AV team.'
    }
  ];

  const galleryImages = [
    { src: '/assets/sand-art-show-bangalore.webp', alt: 'Live Sand Art Wedding Bangalore', title: 'Wedding Love Story Sand Art' },
    { src: '/assets/live-sand-art-bangalore.webp', alt: 'Corporate Sand Art Bangalore', title: 'Corporate Brand Journey' },
    { src: '/assets/live-sand-art.webp', alt: 'Sand Art Animation Bangalore', title: 'Fluid Story Transitions' },
    { src: '/assets/sand-art-show.webp', alt: 'Live Sand Storytelling Bangalore', title: 'Historical & Moral Epics' },
    { src: '/assets/live-sand-art-show.webp', alt: 'Light Table Sand Art Bangalore', title: 'Backlit Glass Canvas' },
    { src: '/assets/live-sand-art-show-banner.webp', alt: '7Delights Live Sand Art Bangalore', title: 'Captivating Visual Drama' }
  ];

  const faqs = [
    {
      q: 'How far in advance should I book 7Delights live sand art show for my event?',
      a: 'To ensure maximum availability of premium live sand art show artists and allow ample time to storyboard your custom narrative, we recommend booking at least 1 to 6 weeks in advance for social parties & corporate events, and 3 to 6 months in advance for major weddings or large-scale corporate launches.'
    },
    {
      q: 'What is the performance duration of the Live Sand Art Show?',
      a: 'The live performance duration is typically 20 minutes of continuous, spellbinding visual animation synchronized to evocative music. Extra time or multi-act sessions can also be arranged upon request.'
    },
    {
      q: 'How long does it take for your team to set up?',
      a: 'Setup takes approximately 1 to 2 hours. Our technical team sets up the illuminated light table, mounts the overhead high-definition video camera, connects signal feeds into the venue LED wall or projector, and completes video/audio synchronization checks.'
    },
    {
      q: 'What are the organizer / venue requirements for the Live Sand Art Show?',
      a: 'The organizers need to provide: An LED Wall or high-lumen Projector screen, HDMI signal input near the stage, a dedicated sound system for backing music, a standard presentation table, and uninterrupted electrical power.'
    },
    {
      q: 'What is your payment policy?',
      a: 'To secure your date, artists, and storyboard production, we require an advance payment upon booking confirmation. The remaining balance is payable on the event day following completion of the performance.'
    }
  ];

  return (
    <div className="min-h-screen bg-[#FFFDF9] text-[#111A2E]">
      {/* 1. Breadcrumb navigation */}
      <div className="bg-[#FFF8F0] border-b border-[#F4E8DC] py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-xs sm:text-sm text-[#5A6E85]">
            <a href="#" className="hover:text-[#EE3775] transition-colors">Home</a>
            <span>/</span>
            <a href="#shows-entertainment" className="hover:text-[#EE3775] transition-colors">Shows & Entertainment</a>
            <span>/</span>
            <span className="text-[#111A2E] font-medium">Live Sand Art Show</span>
          </nav>
        </div>
      </div>

      {/* 2. Hero Section */}
      <section className="relative overflow-hidden pt-8 pb-12 lg:pt-12 lg:pb-16 bg-gradient-to-b from-[#FFF8F0] via-[#FFFDF9] to-[#FFFDF9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Content Column */}
            <div className="lg:col-span-7 space-y-5">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#EDF5FF] border border-[#D0E2FF] text-xs font-semibold text-[#2563EB]">
                <PenTool className="w-3.5 h-3.5" />
                <span>Visual Sand Animation • Big-Screen LED Live Projection • Custom Storylines</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#111A2E] leading-tight">
                Live Sand Art Show for Events in{' '}
                <span className="relative inline-block text-[#EE3775]">
                  Bangalore
                  <GoldUnderline className="absolute -bottom-2 left-0 w-full text-[#FFB703]" />
                </span>
              </h1>

              <p className="text-base sm:text-lg text-[#5A6E85] leading-relaxed">
                Witness the hypnotic magic of delicate grains of sand transforming into breathtaking, transient stories! 
                7Delights brings master sand artists who draw intricate narratives live on illuminated light-tables, 
                projected in crystal-clear high definition onto your event’s big LED wall with synchronized music 
                for weddings, corporate galas, and cultural celebrations across Bengaluru.
              </p>

              {/* Service Badges */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
                <div className="p-3 bg-white rounded-xl border border-gray-100 shadow-sm flex items-center gap-2.5">
                  <Clock className="w-5 h-5 text-[#EE3775] flex-shrink-0" />
                  <div>
                    <div className="text-xs text-[#5A6E85]">Duration</div>
                    <div className="text-xs sm:text-sm font-bold text-[#111A2E]">20 Minutes Act</div>
                  </div>
                </div>

                <div className="p-3 bg-white rounded-xl border border-gray-100 shadow-sm flex items-center gap-2.5">
                  <Tv className="w-5 h-5 text-[#2563EB] flex-shrink-0" />
                  <div>
                    <div className="text-xs text-[#5A6E85]">Projection</div>
                    <div className="text-xs sm:text-sm font-bold text-[#111A2E]">LED Wall / Projector</div>
                  </div>
                </div>

                <div className="p-3 bg-white rounded-xl border border-gray-100 shadow-sm flex items-center gap-2.5 col-span-2 sm:col-span-1">
                  <MapPin className="w-5 h-5 text-[#00A86B] flex-shrink-0" />
                  <div>
                    <div className="text-xs text-[#5A6E85]">Coverage</div>
                    <div className="text-xs sm:text-sm font-bold text-[#111A2E]">All Across Bangalore</div>
                  </div>
                </div>
              </div>

              {/* CTAs */}
              <div className="flex flex-wrap items-center gap-3 pt-3">
                <a 
                  href="tel:+919980029977" 
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-[#EE3775] hover:bg-[#D62863] text-white font-bold text-sm shadow-md hover:shadow-lg transition-all duration-200"
                >
                  <Phone className="w-4 h-4" />
                  Book Sand Art Show Now
                </a>
                <a 
                  href="https://wa.me/919980029977?text=Hi%207Delights,%20I%20would%20like%20to%20book%20a%20Live%20Sand%20Art%20Show%20for%20our%20upcoming%20event." 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-white hover:bg-gray-50 text-[#111A2E] font-bold text-sm border border-gray-200 shadow-sm hover:shadow transition-all duration-200"
                >
                  <MessageCircle className="w-4 h-4 text-[#25D366]" />
                  Instant WhatsApp Quote
                </a>
              </div>
            </div>

            {/* Right Image / Hero Card */}
            <div className="lg:col-span-5">
              <div className="relative mx-auto max-w-md lg:max-w-none">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white bg-white group">
                  <img 
                    src="/assets/live-sand-art-show.webp" 
                    alt="7Delights Live Sand Art Show Bangalore" 
                    className="w-full h-[340px] sm:h-[400px] object-cover group-hover:scale-105 transition-transform duration-500"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = '/assets/live-sand-art-show-banner.webp';
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <span className="inline-block px-2.5 py-1 rounded bg-[#2563EB] text-[11px] font-bold tracking-wide uppercase mb-1">
                      Poetic Visual Art
                    </span>
                    <p className="text-lg font-bold">Bangalore’s Premier Sand Animation</p>
                    <p className="text-xs text-white/90">Bespoke love stories, corporate journeys, and heritage epics.</p>
                  </div>
                </div>

                {/* Floating pill badge */}
                <div className="absolute -top-3 -right-3 bg-white shadow-lg rounded-xl p-3 border border-gray-100 flex items-center gap-2.5">
                  <div className="w-10 h-10 rounded-lg bg-[#EDF5FF] flex items-center justify-center text-[#2563EB]">
                    <Award className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-[#111A2E]">Bespoke Storyboards</div>
                    <div className="text-[10px] text-[#5A6E85]">Master Sand Animators</div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. Key Highlights */}
      <section className="py-10 bg-white border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#111A2E]">
              Why Choose 7Delights Live Sand Art Shows?
            </h2>
            <p className="text-sm sm:text-base text-[#5A6E85] mt-2">
              Transforming weddings, corporate galas, award dinners, and milestone celebrations with sophisticated, emotionally resonant visual art.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {highlights.map((item, idx) => (
              <div 
                key={idx}
                className="p-5 rounded-xl bg-[#FFFDF9] border border-gray-100 hover:border-[#2563EB]/30 hover:shadow-md transition-all duration-200"
              >
                <div className="w-10 h-10 rounded-lg bg-white shadow-sm border border-gray-100 flex items-center justify-center mb-3">
                  {item.icon}
                </div>
                <p className="font-bold text-[#111A2E] text-base mb-1.5">{item.title}</p>
                <p className="text-xs sm:text-sm text-[#5A6E85] leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Sand Art Themes Repertoire */}
      <section className="py-12 bg-[#FFF8F0]/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-[#2563EB] bg-[#EDF5FF] px-3 py-1 rounded-full">
              Storytelling Canvas
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#111A2E] mt-3">
              Specialties of 7Delights Live Sand Art Shows
            </h2>
            <p className="text-sm sm:text-base text-[#5A6E85] mt-2">
              Our sand artists craft unique, customized visual narratives that capture the authentic spirit of your celebration.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {narrativeThemes.map((theme, idx) => (
              <div 
                key={idx}
                className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col group"
              >
                <div className="h-44 overflow-hidden relative bg-gray-100">
                  <img 
                    src={theme.image} 
                    alt={theme.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = '/assets/live-sand-art-show-banner.webp';
                    }}
                  />
                  <span className={`absolute top-3 left-3 text-[11px] font-semibold px-2.5 py-0.5 rounded-full border ${theme.color}`}>
                    {theme.tag}
                  </span>
                </div>
                <div className="p-5 flex-1 flex flex-col">
                  <h3 className="font-bold text-[#111A2E] text-base mb-2 group-hover:text-[#2563EB] transition-colors">
                    {theme.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#5A6E85] leading-relaxed flex-1">
                    {theme.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Setup & AV Technical Reassurance */}
      <section className="py-10 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-[#111A2E] to-[#1E293B] rounded-2xl p-6 sm:p-8 text-white relative overflow-hidden shadow-xl">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#2563EB]/10 rounded-full blur-3xl pointer-events-none" />
            
            <div className="relative z-10 grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
              <div className="md:col-span-8 space-y-3">
                <span className="text-xs font-bold uppercase tracking-wider text-[#FFB703] bg-white/10 px-3 py-1 rounded-full">
                  Technical Precision
                </span>
                <h3 className="text-xl sm:text-2xl font-bold">
                  Sit Back & Watch Our AV Professionals Execute Flawless Sync!
                </h3>
                <p className="text-sm text-gray-300 leading-relaxed">
                  Our crew arrives 1–2 hours prior to setup the illuminated light-table, overhead camera mount, and video cables, 
                  conducting thorough projection clarity and sound synchronization checks with your venue technician.
                </p>
                <div className="flex flex-wrap gap-4 pt-2 text-xs text-gray-200">
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-[#00A86B]" />
                    <span>Crystal-Clear Full HD Video Feed</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-[#00A86B]" />
                    <span>Pre-Show Audio/Video Sync Checks</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-[#00A86B]" />
                    <span>Clean Post-Performance Area Tidy</span>
                  </div>
                </div>
              </div>

              <div className="md:col-span-4 flex flex-col gap-3">
                <a 
                  href="tel:+919980029977" 
                  className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-[#EE3775] hover:bg-[#D62863] text-white font-bold text-sm shadow transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  +91 99800 29977
                </a>
                <a 
                  href="#faq-section" 
                  className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold text-sm transition-colors"
                >
                  <HelpCircle className="w-4 h-4" />
                  View Event FAQs
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Photo Gallery Grid */}
      <section className="py-12 bg-[#FFFDF9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <span className="text-xs font-bold uppercase tracking-wider text-[#2563EB] bg-[#EDF5FF] px-3 py-1 rounded-full">
              Live Sand Art Gallery
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#111A2E] mt-3">
              Live Sand Art Showcase
            </h2>
            <p className="text-sm sm:text-base text-[#5A6E85] mt-2">
              Explore the delicate strokes, fluid transformations, and captivating scenes created live before mesmerized Bangalore audiences.
            </p>
          </div>

          {/* Photo Gallery Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
            {galleryImages.map((img, idx) => (
              <div 
                key={idx}
                className="group relative rounded-xl overflow-hidden bg-white border border-gray-100 shadow-sm aspect-square"
              >
                <img 
                  src={img.src} 
                  alt={img.alt} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = '/assets/live-sand-art-show-banner.webp';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-2.5">
                  <span className="text-[11px] font-medium text-white leading-tight">
                    {img.title}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. FAQs Section */}
      <section id="faq-section" className="py-12 bg-[#FFF8F0]/60 border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-xl mx-auto mb-8">
            <span className="text-xs font-bold uppercase tracking-wider text-[#2563EB] bg-[#EDF5FF] px-3 py-1 rounded-full">
              Got Questions?
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#111A2E] mt-3">
              Event FAQ ?
            </h2>
            <p className="text-sm text-[#5A6E85] mt-2">
              Everything you need to know about booking, requirements, and timing for 7Delights Live Sand Art Shows.
            </p>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, idx) => (
              <div 
                key={idx}
                className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm"
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full px-5 py-4 text-left flex items-center justify-between gap-4 font-bold text-sm sm:text-base text-[#111A2E] hover:text-[#2563EB] transition-colors"
                >
                  <span>{faq.q}</span>
                  <ChevronDown className={`w-5 h-5 flex-shrink-0 text-[#5A6E85] transition-transform duration-200 ${openFaq === idx ? 'rotate-180 text-[#2563EB]' : ''}`} />
                </button>
                {openFaq === idx && (
                  <div className="px-5 pb-4 pt-1 text-xs sm:text-sm text-[#5A6E85] leading-relaxed border-t border-gray-100 bg-gray-50/50">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Direct Support Card */}
          <div className="mt-8 p-5 rounded-xl bg-white border border-[#2563EB]/20 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <h3 className="font-bold text-[#111A2E] text-sm sm:text-base">Want a custom couple love story or corporate milestone script?</h3>
              <p className="text-xs text-[#5A6E85] mt-0.5">Consult directly with our Bangalore sand storytelling animators.</p>
            </div>
            <a 
              href="tel:+919980029977" 
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#EE3775] text-white text-xs sm:text-sm font-bold hover:bg-[#D62863] shadow-sm transition-colors whitespace-nowrap"
            >
              <Phone className="w-3.5 h-3.5" />
              Call +91 99800 29977
            </a>
          </div>

          {/* Back to Hub Navigation */}
          <div className="mt-8 text-center">
            <a 
              href="#shows-entertainment" 
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#EE3775] hover:text-[#D62863] transition-colors"
            >
              ← Back to Shows & Entertainment Hub
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

