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
  Tv, 
  Award, 
  Star, 
  Users, 
  Maximize2,
  Video,
  Monitor,
  Cpu,
  Layers,
  Wrench,
  Sliders
} from 'lucide-react';

export default function LEDWallPage() {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const ledServices = [
    {
      title: 'Ultra High-Definition LED Panels (P2.6 / P3.9)',
      desc: 'Seamless, high-refresh-rate indoor and outdoor modular LED panels delivering crystal clear visuals, deep contrast, and anti-flicker performance for camera broadcasting.',
      tag: 'Ultra HD Visuals',
      color: 'bg-[#FFE8ED] text-[#EE3775] border-[#FFD0DB]',
      image: '/assets/led-wall-main.webp'
    },
    {
      title: 'Custom Curved & Panoramic Stage Backdrops',
      desc: 'Dynamic stage-wide modular video walls configured in straight, curved, or split wing formations to wrap your keynote speakers and stage performers in immersive content.',
      tag: 'Custom Formats',
      color: 'bg-[#FFF3DF] text-[#D97706] border-[#FFE4B8]',
      image: '/assets/led-wall-stage-2.webp'
    },
    {
      title: 'Live Video Switchers & Video Processors',
      desc: 'Professional 4K video switchers, multi-screen matrix switchers, seamless HDMI/SDI distribution, and preview monitors for simultaneous PPT, video rollouts, and live camera feeds.',
      tag: 'Live Video Matrix',
      color: 'bg-[#F2EDFF] text-[#7B61FF] border-[#E0D5FF]',
      image: '/assets/led-wall-for-events.webp'
    },
    {
      title: 'On-Site VJ & AV Technical Engineers',
      desc: 'Dedicated sound and video technicians present on-site throughout your conference or gala to manage live visual cues, speaker presentations, and content playback.',
      tag: 'Dedicated Crew',
      color: 'bg-[#EBF7F2] text-[#00A86B] border-[#C8EFE0]',
      image: '/assets/led-walls-gallery.webp'
    }
  ];

  const highlights = [
    {
      icon: <Tv className="w-5 h-5 text-[#EE3775]" />,
      title: 'P2.6 & P3.9 High Pitch',
      desc: 'Superb pixel density ensuring crisp text and sharp graphics even from close seating rows.'
    },
    {
      icon: <Maximize2 className="w-5 h-5 text-[#7B61FF]" />,
      title: 'Modular Sizing & Aspect Ratios',
      desc: 'Built in exact standard 16:9 widescreen or ultra-wide panoramic sizes tailored to your venue.'
    },
    {
      icon: <Video className="w-5 h-5 text-[#00A86B]" />,
      title: 'Live Camera Feed & PIP',
      desc: 'Simultaneous Picture-in-Picture feeds displaying keynote speakers live alongside slide decks.'
    },
    {
      icon: <Wrench className="w-5 h-5 text-[#D97706]" />,
      title: 'Turnkey Rigging & Trussing',
      desc: 'Secure ground stacking or heavy-duty overhead aluminum truss flying with full counterweights.'
    }
  ];

  const galleryImages = [
    { src: '/assets/led-wall-banner.webp', alt: 'LED Wall Corporate Setup Banner' },
    { src: '/assets/led-wall-main.webp', alt: 'Main Stage High Resolution LED Wall' },
    { src: '/assets/led-wall-stage-2.webp', alt: 'Stage LED Screen with Lighting' },
    { src: '/assets/led-wall-for-events.webp', alt: 'Conference Keynote Presentation LED Display' }
  ];

  const faqs = [
    {
      q: 'How far in advance should I book 7Delights LED wall for my event?',
      a: 'To ensure maximum availability of LED wall panels, processors, and technical crew, we recommend booking at least 1 to 6 weeks in advance for corporate seminars and social gatherings, and 3 to 6 months in advance for major annual conferences, product launches, or grand weddings. However, if you have an urgent last-minute request, contact us and we will do our best to make it happen!'
    },
    {
      q: 'How long does it take for your team to set up an LED Wall?',
      a: 'Setup time depends on the screen size and rigging method. Standard ground-stacked LED walls (e.g. 10x8 ft or 12x8 ft) take approximately 1.5 to 2.5 hours for frame assembly, panel calibration, and processor signal checks. Large-scale stage backdrops or truss-hung setups take 3 to 5 hours. Our crew arrives early at the venue to ensure full testing before guests or speakers arrive.'
    },
    {
      q: 'What resolution, inputs, and formats do your LED walls support?',
      a: 'Our systems use professional NovaStar and VDWall processors supporting Full HD 1080p and 4K signals via HDMI, SDI, DVI, and DisplayPort. You can effortlessly plug in laptops for PowerPoint/Keynote, media servers for video loops, or live camera feeds for instant IMAG projection.'
    },
    {
      q: 'Are your LED screens suitable for bright outdoor daytime events?',
      a: 'Yes! We maintain dedicated IP65-rated outdoor LED panels with ultra-high brightness (5000+ nits) that remain crystal clear and vibrant even under direct sunlight, as well as high-contrast indoor P2.6 panels calibrated specifically for indoor banquet lighting.'
    },
    {
      q: 'What are the venue requirements for installing an LED Wall?',
      a: 'We require a flat, stable stage or floor space, a 3-phase power point or dedicated 16A/32A raw power supply depending on screen dimensions, and a table near the AV console for video processors and the operator console.'
    },
    {
      q: 'What is your payment and booking policy?',
      a: 'To confirm the booking dates, reserve technical equipment, and allocate technicians, we require an advance payment upon booking confirmation. The remaining balance is completed as milestone payments leading up to or on the date of setup.'
    }
  ];

  return (
    <div className="w-full bg-[#FFFDF9] text-[#111A2E]">
      {/* Top Breadcrumb & Hero */}
      <section className="relative w-full bg-gradient-to-b from-[#FFF5F7] via-[#FFFDF9] to-[#FFFDF9] pt-8 pb-14 px-4 sm:px-6 lg:px-8 border-b border-[#F5E6E8]">
        <div className="max-w-7xl mx-auto">
          {/* Breadcrumb Navigation */}
          <nav className="flex items-center gap-2 text-xs sm:text-sm text-[#5A6E85] mb-6 flex-wrap">
            <a href="#" className="hover:text-[#EE3775] transition-colors">Home</a>
            <span>/</span>
            <a href="#corporate-events" className="hover:text-[#EE3775] transition-colors">Corporate Events</a>
            <span>/</span>
            <span className="text-[#111A2E] font-medium">LED Wall</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FFE8ED] border border-[#FFD0DB] text-[#EE3775] text-xs sm:text-sm font-semibold tracking-wide">
                <Sparkles className="w-4 h-4" />
                <span>Premier Corporate Audio-Visual Solutions</span>
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#111A2E] leading-tight">
                High-Resolution <span className="text-[#EE3775]">LED Wall</span> Rentals for Events in Bangalore
              </h1>
              <p className="text-base sm:text-lg text-[#5A6E85] leading-relaxed">
                Transform your corporate conference, product launch, award gala, or wedding into a breathtaking visual spectacle with 7Delights cutting-edge indoor & outdoor LED video walls. Delivering razor-sharp presentations, crystal-clear live camera feeds, and vibrant dynamic branding.
              </p>

              {/* Quick Spec Pills */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
                <div className="flex items-center gap-2.5 p-3 rounded-xl bg-white border border-[#F3E8E9] shadow-sm">
                  <Clock className="w-5 h-5 text-[#EE3775] shrink-0" />
                  <div>
                    <p className="text-xs text-[#5A6E85]">Duration</p>
                    <p className="text-xs sm:text-sm font-bold text-[#111A2E]">Full Event / 2-8+ hrs</p>
                  </div>
                </div>
                <div className="flex items-center gap-2.5 p-3 rounded-xl bg-white border border-[#F3E8E9] shadow-sm">
                  <MapPin className="w-5 h-5 text-[#7B61FF] shrink-0" />
                  <div>
                    <p className="text-xs text-[#5A6E85]">Location</p>
                    <p className="text-xs sm:text-sm font-bold text-[#111A2E]">All Across Bangalore</p>
                  </div>
                </div>
                <div className="flex items-center gap-2.5 p-3 rounded-xl bg-white border border-[#F3E8E9] shadow-sm col-span-2 sm:col-span-1">
                  <ShieldCheck className="w-5 h-5 text-[#00A86B] shrink-0" />
                  <div>
                    <p className="text-xs text-[#5A6E85]">Visual Clarity</p>
                    <p className="text-xs sm:text-sm font-bold text-[#111A2E]">P2.6 / P3.9 HD</p>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-4">
                <a 
                  href="tel:+919980029977"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-[#EE3775] hover:bg-[#D82A64] text-white font-bold text-sm sm:text-base shadow-lg shadow-[#EE3775]/25 transition-all transform hover:-translate-y-0.5"
                >
                  <Phone className="w-4 h-4" />
                  <span>Call +91 99800 29977</span>
                </a>
                <a 
                  href="https://wa.me/919980029977?text=Hi%207Delights,%20I%20am%20interested%20in%20booking%20an%20LED%20Wall%20for%20our%20event."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-white hover:bg-[#F9FAFB] text-[#111A2E] border border-[#E5E7EB] font-bold text-sm sm:text-base shadow-sm transition-all"
                >
                  <MessageCircle className="w-4 h-4 text-[#25D366]" />
                  <span>Chat on WhatsApp</span>
                </a>
              </div>
            </div>

            {/* Right Media Card */}
            <div className="lg:col-span-5">
              <div className="relative rounded-2xl overflow-hidden bg-white shadow-xl border border-[#F0E6E8] p-2">
                <img 
                  src="/assets/led-wall-main.webp" 
                  alt="Corporate LED Wall Setup by 7Delights" 
                  className="w-full h-[320px] sm:h-[400px] object-cover rounded-xl"
                />
                <div className="absolute top-4 right-4 bg-[#111A2E]/85 backdrop-blur-md text-white text-xs font-semibold px-3 py-1.5 rounded-full flex items-center gap-1.5 shadow">
                  <Tv className="w-3.5 h-3.5 text-[#EE3775]" />
                  <span>Ultra-HD LED Rental</span>
                </div>
                <div className="p-3 bg-white">
                  <p className="text-xs text-[#5A6E85] text-center font-medium">
                    State-of-the-art modular LED panels with live video switching and on-site technical engineers.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Overview & Why Visuals Matter */}
      <section className="py-14 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-6 space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FFE8ED] text-[#EE3775] text-xs font-semibold">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Unleash The Power of Visuals</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#111A2E]">
              Illuminate Your Event with Immersive LED Displays
            </h2>
            <p className="text-sm sm:text-base text-[#5A6E85] leading-relaxed">
              At <strong>7Delights</strong>, our mission is to deliver show-stopping visual experiences. Whether you are hosting a high-stakes tech keynote, international symposium, leadership summit, dealer meet, or grand gala dinner, our seamless LED screens ensure every attendee in the hall enjoys front-row visual clarity.
            </p>
            <ul className="space-y-2.5 pt-2">
              {[
                'Display high-definition video loops, keynote presentations, and real-time social feeds',
                'Seamless zero-bezel pixel alignment eliminating distracting monitor seams',
                'Wide horizontal and vertical viewing angles so corner audiences see vibrant colors',
                'Live multi-source switching between presenter laptops, cameras, and countdown timers',
                'Turnkey service: transportation, frame rigging, calibration, operation, and packdown'
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#111A2E] font-medium">
                  <CheckCircle className="w-4 h-4 text-[#EE3775] shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-6 grid grid-cols-2 gap-4">
            {galleryImages.map((img, i) => (
              <div key={i} className="group relative rounded-xl overflow-hidden shadow-md border border-[#F3E8E9] aspect-[4/3]">
                <img 
                  src={img.src} 
                  alt={img.alt} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-3">
                  <span className="text-white text-xs font-semibold">{img.alt}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-14 px-4 sm:px-6 lg:px-8 bg-[#FAF6F4] border-y border-[#F3E8E9]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FFE8ED] text-[#EE3775] text-xs font-semibold mb-2">
              <Tv className="w-3.5 h-3.5" />
              <span>Full-Stack AV Capabilities</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#111A2E]">
              Our Specialized LED Wall Solutions
            </h2>
            <p className="text-xs sm:text-sm text-[#5A6E85] mt-2">
              From conference stages to exhibition booths, we customize screen sizes and pixel resolutions to match your venue acoustics and lighting.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {ledServices.map((srv, index) => (
              <div 
                key={index} 
                className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md border border-[#F0E6E8] transition-all flex flex-col sm:flex-row group"
              >
                <div className="sm:w-2/5 h-48 sm:h-auto overflow-hidden relative shrink-0">
                  <img 
                    src={srv.image} 
                    alt={srv.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-3 left-3">
                    <span className={`text-[10px] sm:text-xs font-bold px-2.5 py-1 rounded-full border shadow-sm ${srv.color}`}>
                      {srv.tag}
                    </span>
                  </div>
                </div>
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <p className="text-base sm:text-lg font-bold text-[#111A2E] mb-2 group-hover:text-[#EE3775] transition-colors">
                      {srv.title}
                    </p>
                    <p className="text-xs sm:text-sm text-[#5A6E85] leading-relaxed">
                      {srv.desc}
                    </p>
                  </div>
                  <div className="pt-4 mt-2 border-t border-[#F5E6E8] flex items-center justify-between">
                    <span className="text-xs text-[#5A6E85] font-medium">Standard & Custom Sizes</span>
                    <a 
                      href="tel:+919980029977" 
                      className="text-xs font-bold text-[#EE3775] hover:text-[#D82A64] inline-flex items-center gap-1"
                    >
                      <span>Inquire Now</span>
                      <span>&rarr;</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Highlights / Why Choose 7Delights */}
      <section className="py-14 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#111A2E]">
            Why Choose 7Delights for Your LED Wall Setup?
          </h2>
          <p className="text-xs sm:text-sm text-[#5A6E85] mt-2">
            Engineered for corporate reliability with backup video processors, clean wiring, and experienced technicians on-site.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item, idx) => (
            <div key={idx} className="p-5 rounded-2xl bg-white border border-[#F3E8E9] shadow-sm hover:border-[#EE3775]/40 transition-colors">
              <div className="w-10 h-10 rounded-xl bg-[#FFF5F7] flex items-center justify-center mb-3">
                {item.icon}
              </div>
              <h3 className="text-sm sm:text-base font-bold text-[#111A2E] mb-1.5">{item.title}</h3>
              <p className="text-xs text-[#5A6E85] leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Authentic YouTube Demo Video */}
      <section className="py-14 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#FFFDF9] to-[#FFF5F7] border-t border-[#F3E8E9]">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FFE8ED] text-[#EE3775] text-xs font-semibold mb-3">
            <Video className="w-3.5 h-3.5" />
            <span>Live Action Showcase</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#111A2E] mb-3">
            Watch Our LED Wall in Action
          </h2>
          <p className="text-xs sm:text-sm text-[#5A6E85] mb-8 max-w-xl mx-auto">
            Experience the vibrant brightness, seamless panel integration, and stage presence our LED wall setups bring to corporate events in Bangalore.
          </p>

          <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white aspect-video bg-black">
            <iframe
              src="https://www.youtube.com/embed/e5BX3Dr2nlE"
              title="7delights LED Wall Event Demo"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full border-0"
            ></iframe>
          </div>
        </div>
      </section>

      {/* Venue Requirements & Setup Workflow */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <div className="bg-white rounded-2xl p-6 sm:p-8 border border-[#F0E6E8] shadow-sm">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-9 h-9 rounded-lg bg-[#FFE8ED] text-[#EE3775] flex items-center justify-center">
              <Cpu className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-[#111A2E]">Venue & Power Specifications</h3>
              <p className="text-xs text-[#5A6E85]">Quick requirements to ensure flawless setup on event day</p>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
            <div className="p-4 rounded-xl bg-[#FFFDF9] border border-[#F3E8E9]">
              <span className="text-xs font-bold text-[#EE3775] uppercase tracking-wider block mb-1">Power Supply</span>
              <p className="text-xs text-[#5A6E85]">3-Phase 32A/63A or dedicated generator line with earth grounding to eliminate hum and voltage flicker.</p>
            </div>
            <div className="p-4 rounded-xl bg-[#FFFDF9] border border-[#F3E8E9]">
              <span className="text-xs font-bold text-[#7B61FF] uppercase tracking-wider block mb-1">Stage Footprint</span>
              <p className="text-xs text-[#5A6E85]">Flat, stable floor surface with at least 3-4 feet of clear space behind the frame for support legs and cabling.</p>
            </div>
            <div className="p-4 rounded-xl bg-[#FFFDF9] border border-[#F3E8E9]">
              <span className="text-xs font-bold text-[#00A86B] uppercase tracking-wider block mb-1">Operator Table</span>
              <p className="text-xs text-[#5A6E85]">One 6-foot covered control table positioned within line-of-sight for video consoles, switchers, and laptops.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Frequently Asked Questions */}
      <section className="py-14 px-4 sm:px-6 lg:px-8 bg-white border-t border-[#F3E8E9]">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FFE8ED] text-[#EE3775] text-xs font-semibold mb-2">
              <HelpCircle className="w-3.5 h-3.5" />
              <span>Got Questions?</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#111A2E]">
              LED Wall Rental FAQ
            </h2>
            <p className="text-xs sm:text-sm text-[#5A6E85] mt-1">
              Find answers regarding panel sizing, setup durations, booking timeline, and payment terms.
            </p>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, idx) => (
              <div 
                key={idx} 
                className="border border-[#F0E6E8] rounded-xl overflow-hidden bg-[#FFFDF9] transition-colors"
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full px-5 py-4 text-left flex items-center justify-between gap-4 hover:bg-[#FFF5F7] transition-colors"
                >
                  <span className="text-xs sm:text-sm font-bold text-[#111A2E]">{faq.q}</span>
                  <ChevronDown 
                    className={`w-4 h-4 text-[#EE3775] shrink-0 transition-transform duration-300 ${openFaq === idx ? 'rotate-180' : ''}`}
                  />
                </button>
                {openFaq === idx && (
                  <div className="px-5 pb-4 pt-1 text-xs sm:text-sm text-[#5A6E85] leading-relaxed border-t border-[#F5E6E8] bg-white">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

