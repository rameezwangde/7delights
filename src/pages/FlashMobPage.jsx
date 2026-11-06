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
  Zap, 
  Users, 
  Flame, 
  Award,
  Video,
  Star,
  Tv,
  HeartHandshake,
  Layers,
  Sparkle
} from 'lucide-react';

export default function FlashMobPage() {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const flashMobServices = [
    {
      title: 'Surprise Corporate & Office Activations',
      desc: 'Our dancers disguise themselves as tech employees, caterers, or guests, suddenly breaking into an unexpected synchronized performance that transforms cafeteria town halls.',
      tag: 'Office Surprises',
      color: 'bg-[#FFE8ED] text-[#EE3775] border-[#FFD0DB]',
      image: '/assets/flash-mob-main.webp'
    },
    {
      title: 'Public Mall & Transit Viral Marketing',
      desc: 'High-impact brand unveilings and product promotions in high-footfall shopping malls, plazas, and tech parks, choreographed to capture crowd attention and create viral video content.',
      tag: 'Viral Brand Buzz',
      color: 'bg-[#FFF3DF] text-[#D97706] border-[#FFE4B8]',
      image: '/assets/flash-mob-g1.webp'
    },
    {
      title: 'Grand Wedding Sangeet & Proposal Reveals',
      desc: 'The ultimate heartfelt romantic surprise: flash mobs for marriage proposals, airport welcomes, and wedding sangeet entrances where family members secretly join the routine.',
      tag: 'Wedding & Proposals',
      color: 'bg-[#F2EDFF] text-[#7B61FF] border-[#E0D5FF]',
      image: '/assets/flash-mob-g2.webp'
    },
    {
      title: 'Thematic Custom Costumes & Sound Sync',
      desc: 'We engineer every stage of the reveal — from covert wireless audio transmitters and custom decoy outfits to the explosive crescendo and synchronized closing freeze.',
      tag: 'Turnkey Production',
      color: 'bg-[#EBF7F2] text-[#00A86B] border-[#C8EFE0]',
      image: '/assets/flash-mob-g3.webp'
    }
  ];

  const highlights = [
    {
      icon: <Zap className="w-5 h-5 text-[#EE3775]" />,
      title: 'Flawless Stealth Reveal',
      desc: 'Dancers who realistically blend into the crowd before triggering a synchronized high-energy burst.'
    },
    {
      icon: <Sparkles className="w-5 h-5 text-[#7B61FF]" />,
      title: 'Bespoke Choreography',
      desc: 'Routines customized to your favorite track mashups, corporate branding, or romantic melodies.'
    },
    {
      icon: <Users className="w-5 h-5 text-[#00A86B]" />,
      title: 'Family & Colleague Integration',
      desc: 'Optional pre-event coaching sessions so your team or friends can join the flash mob mid-routine!'
    },
    {
      icon: <Flame className="w-5 h-5 text-[#D97706]" />,
      title: 'Multi-Camera Video Recording',
      desc: 'We can coordinate 4K cinematic video coverage to preserve spontaneous bystander reactions.'
    }
  ];

  const galleryImages = [
    { src: '/assets/flash-mob-banner.webp', alt: 'Flash Mob Performance Banner' },
    { src: '/assets/flash-mob-main.webp', alt: 'Surprise Flash Mob Dance Troupe' },
    { src: '/assets/flash-mob-g1.webp', alt: 'Public Mall Promotional Flash Mob' },
    { src: '/assets/flash-mob-g2.webp', alt: 'High Energy Synchronized Urban Crew' },
    { src: '/assets/flash-mob-g3.webp', alt: 'Flash Mob Dance Troupe Performance' },
    { src: '/assets/flash-mob-g4.webp', alt: 'Dance Crew Crowd Surprise Reveal' },
    { src: '/assets/flash-mob-g5.webp', alt: 'Group Formation & Final Pose' }
  ];

  const faqs = [
    {
      q: 'How far in advance should I book 7Delights flash mob dance for my event?',
      a: 'To allow adequate time for concept scripting, track mixing, custom choreography, and secret rehearsals, we recommend booking at least 1 to 4 weeks in advance for corporate activations, proposals, and weddings. For large-scale public brand campaigns requiring venue permits, 3 to 6 weeks is recommended.'
    },
    {
      q: 'How long does a Flash Mob performance last?',
      a: 'Flash mobs are designed for sudden, high-intensity impact. The core dance performance typically lasts 5 to 10 minutes (a dynamic mashup of 2-4 popular songs), capturing maximum surprise and audience engagement before the dancers celebrate or freeze in a grand pose.'
    },
    {
      q: 'Can family members, friends, or company employees join the flash mob?',
      a: 'Yes, 100%! That is often the most magical highlight. Our choreographers can share easy step-by-step video tutorials or conduct secret rehearsal sessions so your friends or colleagues can seamlessly join the dancers mid-routine.'
    },
    {
      q: 'Do you handle the sound system and venue coordination?',
      a: 'Yes! We manage covert portable wireless PA speakers, sound cue coordination with the venue DJ, and discreet signal cues so the surprise is never spoiled before the first beat drops.'
    },
    {
      q: 'What is your payment policy?',
      a: 'To initiate track mixing, choreography design, and reserve dancer rehearsal schedules, an advance deposit is required upon signing. The remaining balance is completed in structured milestones leading up to or on the day of the event.'
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
            <a href="#dance-troup" className="hover:text-[#EE3775] transition-colors">Dance Troupe & Music</a>
            <span>/</span>
            <span className="text-[#111A2E] font-medium">Flash Mob</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FFE8ED] border border-[#FFD0DB] text-[#EE3775] text-xs sm:text-sm font-semibold tracking-wide">
                <Sparkles className="w-4 h-4" />
                <span>The Ultimate Surprise Experience</span>
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#111A2E] leading-tight">
                Surprise <span className="text-[#EE3775]">Flash Mob Dancers</span> in Bangalore
              </h1>
              <p className="text-base sm:text-lg text-[#5A6E85] leading-relaxed">
                Make an unforgettable moment with 7Delights high-octane Flash Mobs! Perfect for marriage proposals, corporate brand launches, anniversary surprises, and wedding sangeet highlights that leave everyone astonished across Bengaluru.
              </p>

              {/* Quick Spec Pills */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
                <div className="flex items-center gap-2.5 p-3 rounded-xl bg-white border border-[#F3E8E9] shadow-sm">
                  <Clock className="w-5 h-5 text-[#EE3775] shrink-0" />
                  <div>
                    <p className="text-xs text-[#5A6E85]">Duration</p>
                    <p className="text-xs sm:text-sm font-bold text-[#111A2E]">5 to 10 mins High-Impact</p>
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
                    <p className="text-xs text-[#5A6E85]">Execution</p>
                    <p className="text-xs sm:text-sm font-bold text-[#111A2E]">100% Stealth Reveal</p>
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
                  href="https://wa.me/919980029977?text=Hi%207Delights,%20I%20am%20interested%20in%20organizing%20a%20surprise%20Flash%20Mob%20in%20Bangalore."
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
                  src="/assets/flash-mob-main.webp" 
                  alt="Surprise Flash Mob Dance in Bangalore" 
                  className="w-full h-[320px] sm:h-[400px] object-cover rounded-xl"
                />
                <div className="absolute top-4 right-4 bg-[#111A2E]/85 backdrop-blur-md text-white text-xs font-semibold px-3 py-1.5 rounded-full flex items-center gap-1.5 shadow">
                  <Zap className="w-3.5 h-3.5 text-[#EE3775]" />
                  <span>Surprise Viral Activation</span>
                </div>
                <div className="p-3 bg-white">
                  <p className="text-xs text-[#5A6E85] text-center font-medium">
                    Professional dancers who blend into the crowd before bursting into synchronized, jaw-dropping choreography.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Overview & What is Flash Mob */}
      <section className="py-14 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7 space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FFE8ED] text-[#EE3775] text-xs font-semibold">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Make a Moment with a Flash Mob</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#111A2E]">
              Turn Any Ordinary Setting into an Electrifying Celebration
            </h2>
            <p className="text-sm sm:text-base text-[#5A6E85] leading-relaxed">
              A <strong>flash mob</strong> is a choreographed surprise performance where dancers, appearing as regular bystanders or office staff, suddenly assemble in a public or private venue to execute a stunning synchronized routine before dispersing just as fast as they appeared.
            </p>
            <p className="text-sm sm:text-base text-[#5A6E85] leading-relaxed">
              At <strong>7Delights.in</strong>, we choreograph, coordinate, and stage-manage every detail — from covert audio delivery and undercover attire to dynamic group reveals that leave audiences cheering, filming, and talking for years!
            </p>
            <ul className="space-y-2.5 pt-2">
              {[
                'Custom music mashups combining popular chartbusters, brand anthems, or love songs',
                'Experienced urban, hip-hop, and Bollywood dancers with infectious energy',
                'Secret rehearsals with family members, friends, or employees who can join in',
                'Comprehensive venue permits, stealth sound cues, and timing management',
                'Perfect for marriage proposals, corporate marketing, product reveals, and sangeets'
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#111A2E] font-medium">
                  <CheckCircle className="w-4 h-4 text-[#EE3775] shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-5 grid grid-cols-2 gap-4">
            {galleryImages.map((img, i) => (
              <div key={i} className="group relative rounded-xl overflow-hidden shadow-md border border-[#F3E8E9] aspect-[4/3]">
                <img 
                  src={img.src} 
                  alt={img.alt} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-2.5">
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
              <Zap className="w-3.5 h-3.5" />
              <span>Flash Mob Formats</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#111A2E]">
              Our Specialized Flash Mob Formats
            </h2>
            <p className="text-xs sm:text-sm text-[#5A6E85] mt-2">
              Tailored for corporate promotions, public viral campaigns, and romantic surprises.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {flashMobServices.map((srv, index) => (
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
                    <h3 className="text-base sm:text-lg font-bold text-[#111A2E] mb-2 group-hover:text-[#EE3775] transition-colors">
                      {srv.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#5A6E85] leading-relaxed">
                      {srv.desc}
                    </p>
                  </div>
                  <div className="pt-4 mt-2 border-t border-[#F5E6E8] flex items-center justify-between">
                    <span className="text-xs text-[#5A6E85] font-medium">Undercover Setup</span>
                    <a 
                      href="tel:+919980029977" 
                      className="text-xs font-bold text-[#EE3775] hover:text-[#D82A64] inline-flex items-center gap-1"
                    >
                      <span>Plan Surprise</span>
                      <span>&rarr;</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Highlights / Why Choose 7Delights */}
      <section className="py-14 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#111A2E]">
            Why Choose 7delights for Your Flash Mob?
          </h2>
          <p className="text-xs sm:text-sm text-[#5A6E85] mt-2">
            Stealth timing, creative choreography, and guaranteed crowd reactions.
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

      {/* Authentic Flash Mob Gallery Showcase */}
      <section className="py-14 px-4 sm:px-6 lg:px-8 bg-[#FAF6F4] border-t border-[#F3E8E9]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FFE8ED] text-[#EE3775] text-xs font-semibold mb-2">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Event Photo Gallery</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#111A2E]">
              Flash Mob Moments in Action
            </h2>
            <p className="text-xs sm:text-sm text-[#5A6E85] mt-2">
              Authentic highlights from surprise mall events, corporate campus activations, and wedding sangeets across Bengaluru.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {galleryImages.map((img, i) => (
              <div key={i} className="group relative rounded-xl overflow-hidden shadow-sm hover:shadow-md border border-[#F0E6E8] aspect-[4/3] bg-white">
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

      {/* Authentic YouTube Video Showcase */}
      <section className="py-14 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#FFFDF9] to-[#FFF5F7] border-t border-[#F3E8E9]">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FFE8ED] text-[#EE3775] text-xs font-semibold mb-3">
            <Video className="w-3.5 h-3.5" />
            <span>Live Action Showcase</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#111A2E] mb-3">
            Watch Our Flash Mob Dancers in Action
          </h2>
          <p className="text-xs sm:text-sm text-[#5A6E85] mb-8 max-w-xl mx-auto">
            Witness the spontaneous surprise, synchronized crowd cheering, and high-energy choreography delivered by 7Delights flash mob crew.
          </p>

          <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white aspect-video bg-black">
            <iframe
              src="https://www.youtube.com/embed/nq6fHQ5vMSk"
              title="7delights Surprise Flash Mob Bangalore Performance"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full border-0"
            ></iframe>
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
              Flash Mob FAQ
            </h2>
            <p className="text-xs sm:text-sm text-[#5A6E85] mt-1">
              Find answers regarding planning timelines, secrecy, guest integration, and booking.
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

