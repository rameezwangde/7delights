import React, { useState } from 'react';
import {
  Camera,
  Video,
  Film,
  Sparkles,
  Phone,
  MessageCircle,
  Clock,
  Award,
  ShieldCheck,
  CheckCircle2,
  ChevronRight,
  ChevronDown,
  HelpCircle,
  Search,
  Sliders,
  Layers,
  Sparkle,
  Radio,
  Image as ImageIcon,
  Plane,
  Eye,
  Maximize2
} from 'lucide-react';
import { GoldUnderline } from '../components/Doodles';

export default function PhotographyVideoPage() {
  const [activeTab, setActiveTab] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const categories = [
    { id: 'all', label: 'All Services' },
    { id: 'photo', label: 'Photography' },
    { id: 'video', label: 'Videography & Drones' },
    { id: 'booth', label: 'Photo Booths & 360' },
  ];

  // 12 Authentic Photography & Video Services from https://www.7delights.in/photography-video/
  const serviceCards = [
    {
      id: 1,
      title: 'Traditional Photography',
      category: 'photo',
      image: '/assets/general-photography.webp',
      tag: 'Classic Event Coverage',
      badgeBg: 'bg-[#FFE8ED] text-[#EE3775] border-[#FFD0DB]',
      desc: 'Our team of cameramen can capture the most valuable moments! Complete stage, group portraits, family line-ups, and ritual coverage with high-end DSLR setups.',
      btnText: 'View Traditional Photo',
    },
    {
      id: 2,
      title: 'Candid Photography',
      category: 'photo',
      image: '/assets/candid-photography.webp',
      tag: 'Natural Emotional Frames',
      badgeBg: 'bg-[#FFF3DF] text-[#D97706] border-[#FFE4B8]',
      desc: 'We love natural things! Our candid photos can reveal originality in true form—capturing heartfelt smiles, unscripted emotions, and stolen celebratory glances.',
      btnText: 'View Candid Photo',
    },
    {
      id: 3,
      title: 'Traditional HD Videography',
      category: 'video',
      image: '/assets/general-hd-videography.webp',
      tag: 'Full HD / 4K Recording',
      badgeBg: 'bg-[#F2EDFF] text-[#7B61FF] border-[#E0D5FF]',
      desc: 'We will make you realize how good life is with our HD-quality videos! End-to-end event documentation with balanced audio, professional lighting, and multicam editing.',
      btnText: 'View HD Videography',
    },
    {
      id: 4,
      title: 'Candid Videography',
      category: 'video',
      image: '/assets/candid-videography.webp',
      tag: 'Cinematic Film Highlights',
      badgeBg: 'bg-[#EBF7F2] text-[#00A86B] border-[#C8EFE0]',
      desc: 'Videos with a difference! Candid cinematic teasers, emotional wedding trailers, and artistic music-video edits celebrating novelty you can trust!',
      btnText: 'View Candid Video',
    },
    {
      id: 5,
      title: 'Gimbal Shoot',
      category: 'video',
      image: '/assets/gimbel-shoot.webp',
      tag: 'Smooth 3-Axis Stabilization',
      badgeBg: 'bg-[#FFE8ED] text-[#EE3775] border-[#FFD0DB]',
      desc: 'We capture dynamic motion with motorized 3-axis gimbal rigs and camera handles to cover tricky angles, tracking entry walks, and cinematic dance glides.',
      btnText: 'View Gimbal Shoot',
    },
    {
      id: 6,
      title: 'Drone Aerial Shoot',
      category: 'video',
      image: '/assets/drone-shoot.webp',
      tag: '4K Aerial Perspective',
      badgeBg: 'bg-[#EDF5FF] text-[#2563EB] border-[#D0E2FF]',
      desc: 'Our experts manage stunning bird’s-eye views with cameras on-board professional 4K drones! Perfect for sprawling banquet lawns, outdoor weddings, and grand entrances.',
      btnText: 'View Drone Shoot',
    },
    {
      id: 7,
      title: 'Premium Photo Albums',
      category: 'photo',
      image: '/assets/photo-albums.webp',
      tag: 'Heirloom Photobooks',
      badgeBg: 'bg-[#FFF3DF] text-[#D97706] border-[#FFE4B8]',
      desc: 'You will fall in love with the photos we arrange in luxury albums! Non-tearable velvet matte sheets, embossed leather covers, and archival crystal printing.',
      btnText: 'View Photo Albums',
    },
    {
      id: 8,
      title: 'Photo Booth Frame',
      category: 'booth',
      image: '/assets/photo-booth.webp',
      tag: 'Thematic Cutout Frames',
      badgeBg: 'bg-[#F2EDFF] text-[#7B61FF] border-[#E0D5FF]',
      desc: 'We install custom thematic photo booth frames to help your guests strike creative poses, holding fun celebration props while our photographers capture them!',
      btnText: 'View Photo Booth',
    },
    {
      id: 9,
      title: '360 Selfie Video Booth',
      slug: '#photography-video/360-video-selfie-booth',
      hasDedicatedPage: true,
      category: 'booth',
      image: '/assets/360-degree-video-booth.webp',
      tag: 'Interactive Viral Booth',
      badgeBg: 'bg-[#FFE8ED] text-[#EE3775] border-[#FFD0DB]',
      desc: 'These specialized platform booths help us capture high-speed slow-motion 360-degree videos with customized digital overlays, instant QR sharing, and music!',
      btnText: 'View 360 Video Booth',
    },
    {
      id: 10,
      title: 'Live Web Streaming',
      category: 'video',
      image: '/assets/live-web-streaming.webp',
      tag: 'Private & Social Broadcast',
      badgeBg: 'bg-[#EBF7F2] text-[#00A86B] border-[#C8EFE0]',
      desc: 'We make your program go live on the Internet through YouTube, Zoom, or private encrypted links so distant relatives and overseas guests never miss a second!',
      btnText: 'View Live Streaming',
    },
    {
      id: 11,
      title: 'Instant Photo Print & Strips',
      slug: '#photography-video/photo-booth-print',
      hasDedicatedPage: true,
      category: 'booth',
      image: '/assets/instant-photo-print.webp',
      tag: 'Live On-Site Prints',
      badgeBg: 'bg-[#FFF3DF] text-[#D97706] border-[#FFE4B8]',
      desc: 'Our instant photo service provides attendees with dry dye-sublimation glossy photographs and photo strips within seconds as memorable event return souvenirs!',
      btnText: 'View Instant Prints',
    },
    {
      id: 12,
      title: 'Digital Caricature Booth',
      slug: '#photography-video/digital-caricature-booth',
      hasDedicatedPage: true,
      category: 'booth',
      image: '/assets/digital-caricature-thumb.webp',
      tag: 'Live Stylus Portraits',
      badgeBg: 'bg-[#F2EDFF] text-[#7B61FF] border-[#E0D5FF]',
      desc: 'Our instant Digital Caricature Booth provides hilarious, heartwarming digital caricature sketches created on tablets and printed instantly for party guests.',
      btnText: 'View Digital Caricature',
    },
  ];

  const filteredCards = serviceCards.filter((card) => {
    const matchesCategory = activeTab === 'all' || card.category === activeTab;
    const matchesSearch =
      card.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      card.desc.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const faqs = [
    {
      q: 'How far in advance should I book 7Delights photography and video for my event?',
      a: 'To ensure maximum availability of photography, video & equipment, we recommend booking at least 1 to 6 weeks in advance for social parties & corporate events, and 3 to 6 months in advance for major weddings or large-scale corporate launches. However, if you have a last-minute request, contact us & we will do our best to make it happen!'
    },
    {
      q: 'How long does it take for your team to set up?',
      a: 'Setup times vary by service. Photography, video & equipment stalls may take 1 to 2 hours. Complex multicam streaming setups, crane/drone calibrations, or 360-degree video booths take about 2 hours to calibrate lights, platform motors, and network gateways.'
    },
    {
      q: 'What is your payment policy?',
      a: 'To secure your date, artists, and materials, we require an advance payment upon signing the contract. The remaining balance is structured into milestones leading up to, or on the day of the event.'
    },
    {
      q: 'When do we receive the edited photos, raw footage, and video albums?',
      a: 'Instant photo prints and 360 video reels are shared immediately on-site via QR code and WhatsApp. High-resolution edited candid photos are delivered digitally within 7 to 10 working days, and cinematic video teasers and flush-mount photo albums are delivered in 2 to 3 weeks.'
    },
    {
      q: 'Do you provide photography and videography outside Bangalore?',
      a: 'Yes! While our primary base is Bangalore, our crews regularly travel for destination weddings, corporate summits, and cultural galas across Karnataka and neighboring South Indian states.'
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
            <Camera className="w-3.5 h-3.5" />
            <span>Bangalore's Premier Event Photographers &amp; Cinematographers</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#111A2E] tracking-tight mb-2">
            Photography &amp; Videography for Events
          </h1>

          <div className="flex justify-center mb-4">
            <GoldUnderline className="w-40 sm:w-52 h-auto text-[#EE3775]" />
          </div>

          <p className="max-w-3xl mx-auto text-sm sm:text-base md:text-lg text-[#5A6E85] leading-relaxed mb-6">
            Photographs and videos preserve the past for tomorrow! 7Delights captures the emotional magic of your celebrations with candid photography, cinematic 4K videography, drone shoots, 360-degree video booths, instant photo prints, and live web streaming across Bengaluru.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <a
              href="tel:+919980029977"
              className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full bg-[#EE3775] hover:bg-[#DE2765] text-white font-bold text-sm shadow-md shadow-[#EE3775]/25 hover:shadow-lg transition-all duration-300 hover:scale-[1.02]"
            >
              <Phone className="w-4 h-4 fill-white" />
              <span>Book Camera Crew</span>
            </a>
            <a
              href="https://api.whatsapp.com/send/?phone=919980029977&text=Hi%207Delights,%20I%20am%20interested%20in%20Photography%20and%20Videography%20services.%20Please%20share%20packages."
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

      {/* 2. SERVICES GRID */}
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
                placeholder="Search candid, drone, 360 booth..."
                className="w-full pl-10 pr-4 py-2 text-sm rounded-full bg-white border border-gray-200 focus:outline-none focus:border-[#EE3775] focus:ring-2 focus:ring-[#EE3775]/20 transition-all text-[#111A2E] placeholder-gray-400"
              />
            </div>
          </div>

          {/* Cards Grid: 12 Authentic Services */}
          <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#111A2E] tracking-tight mb-3">Event Photography & Videography Services</h2>
            <p className="text-sm sm:text-base text-[#5A6E85]">Capture every magical moment with our experienced event photographers, cinematic videographers, and interactive photo booths.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {filteredCards.map((item) => (
              <div
                key={item.id}
                onClick={() => {
                  if (item.hasDedicatedPage && item.slug) {
                    window.location.hash = item.slug;
                    return;
                  }
                  const el = document.getElementById('photo-overview');
                  if (el) {
                    el.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="bg-white rounded-3xl overflow-hidden border border-gray-100 hover:border-[#FFD0DB] hover:shadow-xl transition-all duration-300 flex flex-col group cursor-pointer"
              >
                {/* Image Container */}
                <div className="relative h-56 w-full overflow-hidden bg-gray-100">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    onError={(e) => {
                      e.currentTarget.src = '/assets/photo-video-banner.webp';
                    }}
                  />
                  <div className="absolute top-3 left-3">
                    <span className={`text-[11px] font-bold px-3 py-1 rounded-full border ${item.badgeBg}`}>
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
                    <p className="text-xs sm:text-sm text-[#5A6E85] leading-relaxed mb-4 line-clamp-3">
                      {item.desc}
                    </p>
                  </div>

                  {/* Buttons */}
                  <div className="grid grid-cols-2 gap-2 mt-auto pt-2 border-t border-gray-50">
                    {item.hasDedicatedPage && item.slug ? (
                      <a
                        href={item.slug}
                        onClick={(e) => e.stopPropagation()}
                        className="w-full py-2.5 px-3 rounded-xl bg-[#FFE8ED] text-[#EE3775] hover:bg-[#EE3775] hover:text-white font-bold text-xs flex items-center justify-center gap-1 transition-all duration-200"
                      >
                        <span>{item.btnText}</span>
                        <ChevronRight className="w-3.5 h-3.5" />
                      </a>
                    ) : (
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          const el = document.getElementById('photo-overview');
                          if (el) {
                            el.scrollIntoView({ behavior: 'smooth' });
                          }
                        }}
                        className="w-full py-2.5 px-3 rounded-xl bg-gray-50 text-gray-700 hover:bg-[#EE3775] hover:text-white font-bold text-xs flex items-center justify-center gap-1 transition-all duration-200 cursor-pointer"
                      >
                        <span>{item.btnText}</span>
                        <ChevronRight className="w-3.5 h-3.5" />
                      </button>
                    )}
                    <a
                      href="tel:+919980029977"
                      onClick={(e) => e.stopPropagation()}
                      className="w-full py-2.5 px-3 rounded-xl border border-gray-200 text-[#111A2E] hover:border-[#EE3775] hover:text-[#EE3775] font-bold text-xs flex items-center justify-center gap-1.5 transition-all duration-200"
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
                No photography or video service matches your search. Try different keywords!
              </p>
            </div>
          )}
        </div>
      </section>

      {/* 3. SECTION TWO: PRESERVING THE PAST FOR TOMORROW */}
      <section id="photo-overview" className="py-10 lg:py-12 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-center">
            {/* Left Image Showcase */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-gray-100 group">
              <img
                src="/assets/instant-photo-booth.webp"
                alt="Photography and Videography by 7Delights in Bangalore"
                className="w-full h-auto object-cover group-hover:scale-102 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-6 sm:p-8">
                <div className="text-white">
                  <span className="px-3 py-1 rounded-full bg-[#EE3775] text-[11px] font-bold uppercase tracking-wider mb-2 inline-block">
                    Cinematic Memories
                  </span>
                  <p className="text-xl sm:text-2xl font-bold">Preserve The Past For Tomorrow</p>
                  <p className="text-xs sm:text-sm text-gray-200">World-class cameras, lenses, cranes, and slow-motion booths</p>
                </div>
              </div>
            </div>

            {/* Right Content */}
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FFE8ED] border border-[#FFD0DB] text-[#EE3775] text-xs font-bold uppercase tracking-wider mb-4">
                <Film className="w-3.5 h-3.5" />
                <span>Master Visual Storytellers</span>
              </div>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#111A2E] tracking-tight mb-4 leading-snug">
                Photographs and Videos Preserve The Past For Tomorrow!
              </h2>

              <p className="text-sm sm:text-base text-[#5A6E85] leading-relaxed mb-4">
                This powerful statement has enhanced the significance of still and video photography to a greater extent! Nowadays, you cannot think about organizing an event without engaging photographers. These professionals have become integral to modern social, political, and corporate ceremonies!
              </p>

              <p className="text-sm sm:text-base text-[#5A6E85] leading-relaxed mb-4">
                Photography, both still and videography, is an art; photographers are artists! At <strong>7Delights.in</strong>, we have a committed team of highly skilled and professional photographers and videographers who capture the most exciting pictures and videos to help you relive those priceless moments in the future.
              </p>

              <p className="text-sm sm:text-base text-[#5A6E85] leading-relaxed mb-6">
                Hiring the best and most skilled photographers is easy in Bangalore! Communicate with the experts at 7Delights.in—we preserve the memories to relish them for decades. Our deliveries are impeccable and among the best in the industry!
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
              Why Bangalore Chooses 7Delights Photography
            </h2>
            <GoldUnderline className="w-32 h-auto text-[#EE3775] mx-auto mb-2" />
            <p className="text-xs sm:text-sm text-[#5A6E85]">
              Full-service optical production backed by high-end prime lenses, stabilized gimbals, 4K drones, and rapid turnarounds.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow text-center">
              <div className="w-14 h-14 rounded-2xl bg-[#FFE8ED] text-[#EE3775] flex items-center justify-center mx-auto mb-4">
                <Sliders className="w-7 h-7" />
              </div>
              <p className="text-base font-bold text-[#111A2E] mb-2">Customizable Coverage</p>
              <p className="text-xs text-[#5A6E85] leading-relaxed">
                Meeting your dream and visual preferences becomes our priority, customized to every tradition and format.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow text-center">
              <div className="w-14 h-14 rounded-2xl bg-[#FFF3DF] text-[#D97706] flex items-center justify-center mx-auto mb-4">
                <Layers className="w-7 h-7" />
              </div>
              <h3 className="text-base font-bold text-[#111A2E] mb-2">Rich Infrastructure</h3>
              <p className="text-xs text-[#5A6E85] leading-relaxed">
                We have the richest gear inventory: Sony/Canon cinema bodies, DJI aerial drones, 360 platform rigs, and instant printers.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow text-center">
              <div className="w-14 h-14 rounded-2xl bg-[#EBF7F2] text-[#00A86B] flex items-center justify-center mx-auto mb-4">
                <Clock className="w-7 h-7" />
              </div>
              <h3 className="text-base font-bold text-[#111A2E] mb-2">24/7 Customer Service</h3>
              <p className="text-xs text-[#5A6E85] leading-relaxed">
                Our team of caring coordinators is available round-the-clock to manage shoot timelines and delivery logistics.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow text-center">
              <div className="w-14 h-14 rounded-2xl bg-[#F2EDFF] text-[#7B61FF] flex items-center justify-center mx-auto mb-4">
                <Award className="w-7 h-7" />
              </div>
              <h3 className="text-base font-bold text-[#111A2E] mb-2">Best Competent Team</h3>
              <p className="text-xs text-[#5A6E85] leading-relaxed">
                Our certified cinematographers and candid photographers bring years of event expertise and artistic flair.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. SECTION FOUR: 7DELIGHTS.IN - PLACE FOR BEST-IN-CLASS PHOTOGRAPHY */}
      <section className="py-10 lg:py-12 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-center">
            {/* Left Content */}
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EBF7F2] border border-[#C8EFE0] text-[#00A86B] text-xs font-bold uppercase tracking-wider mb-4">
                <Sparkle className="w-3.5 h-3.5" />
                <span>Premier Photography Partner</span>
              </div>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#111A2E] tracking-tight mb-4 leading-snug">
                7Delights.in — Place For The Best-in-Class Photography
              </h2>

              <p className="text-sm sm:text-base text-[#5A6E85] leading-relaxed mb-6">
                Capturing emotions in their purest form requires technical mastery and intuitive observation. At <strong>7Delights.in</strong>, our crews blend into the background during sacred ceremonies and step forward with high-energy direction during sangeets, baby showers, and grand corporate inaugurations.
              </p>

              <div className="space-y-2.5 mb-6">
                {[
                  'Professional High-Resolution 4K & Full HD Cameras',
                  'Drone Licensed Operators for Grand Aerial Perspectives',
                  'Instant Dry-Print Photo Booths & Viral 360-Degree Video Platforms',
                  'Real-Time High-Definition Web Streaming for Remote Attendees',
                  'Customized Flush-Mount Velvet Photo Albums with Leather Bindings'
                ].map((strength, idx) => (
                  <div key={idx} className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#EE3775] shrink-0" />
                    <span className="text-xs sm:text-sm font-semibold text-[#111A2E]">{strength}</span>
                  </div>
                ))}
              </div>

              <p className="text-xs sm:text-sm text-[#5A6E85] leading-relaxed mb-8">
                Your collaboration with our camera crews ensures that no smile goes unrecorded and no tear of joy is forgotten!
              </p>

              <a
                href="tel:+919980029977"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#EE3775] hover:bg-[#DE2765] text-white font-bold text-sm shadow-md transition-all hover:scale-105"
              >
                <Phone className="w-4 h-4 fill-white" />
                <span>Talk to Our Photography Directors</span>
              </a>
            </div>

            {/* Right Image Showcase */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-gray-100 group">
              <img
                src="/assets/instant-photo-strips.webp"
                alt="Instant Photo Strips and Live Booth by 7Delights"
                className="w-full h-auto object-cover group-hover:scale-102 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-6 sm:p-8">
                <div className="text-white">
                  <span className="px-3 py-1 rounded-full bg-[#00A86B] text-[11px] font-bold uppercase tracking-wider mb-2 inline-block">
                    On-Site Souvenirs
                  </span>
                  <p className="text-xl sm:text-2xl font-bold">Instant Photo Prints &amp; Caricatures</p>
                  <p className="text-xs sm:text-sm text-gray-200">Cherished memories guests can hold in their hands right at the venue</p>
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
              Everything you need to know about booking our photography crews, equipment setups, and delivery schedules in Bangalore.
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
            Ready to Capture Your Special Event for a Lifetime?
          </h2>
          <p className="text-xs sm:text-sm text-gray-300 max-w-2xl mx-auto mb-6">
            Contact 7Delights today for combo packages on candid photography, cinematic video, drone shoots, and 360-degree selfie booths!
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

