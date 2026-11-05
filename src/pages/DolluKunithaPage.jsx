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
  Drum, 
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

export default function DolluKunithaPage() {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const dolluServices = [
    {
      title: 'Traditional Karnataka Dollu Drum Ensemble',
      desc: 'Master folk percussionists strapped with massive cylindrical Dollu drums, executing vigorous acrobatic leaps, synchronized circular formations, and thunderous beats.',
      tag: 'Heritage Folk',
      color: 'bg-[#FFE8ED] text-[#EE3775] border-[#FFD0DB]',
      image: '/assets/dollu-main.webp'
    },
    {
      title: 'Grand VIP Welcome & Processional Rallies',
      desc: 'Commanding processional drum beats that announce VIP arrivals, leadership stage walk-ins, and wedding couple baraat entries with unmatched ceremonial pride.',
      tag: 'Grand Welcomes',
      color: 'bg-[#FFF3DF] text-[#D97706] border-[#FFE4B8]',
      image: '/assets/dollu-g1.webp'
    },
    {
      title: 'Folk Fusion with Yakshagana & Veeragase',
      desc: 'Enrich your cultural celebration by pairing Dollu Kunitha with other legendary Karnataka performing arts such as Yakshagana, Veeragase, and Kamsale for a complete folk spectacle.',
      tag: 'Folk Fusion',
      color: 'bg-[#F2EDFF] text-[#7B61FF] border-[#E0D5FF]',
      image: '/assets/dollu-g2.webp'
    },
    {
      title: 'Interactive Guest Drumming Workshops',
      desc: 'Engage your employees and guests with interactive sessions where our master drummers share traditional rhythm patterns and invite attendees to try the drums.',
      tag: 'Hands-on Workshop',
      color: 'bg-[#EBF7F2] text-[#00A86B] border-[#C8EFE0]',
      image: '/assets/dollu-g3.webp'
    }
  ];

  const highlights = [
    {
      icon: <Drum className="w-5 h-5 text-[#EE3775]" />,
      title: 'Authentic Folk Masters',
      desc: 'Traditional Karnataka folk artists preserving centuries-old Kuruba community drumming rituals.'
    },
    {
      icon: <Sparkles className="w-5 h-5 text-[#7B61FF]" />,
      title: 'Vibrant Traditional Attire',
      desc: 'Colorful black and yellow dhotis, matching turbans, chest sashes, and brass ankle bells.'
    },
    {
      icon: <Flame className="w-5 h-5 text-[#00A86B]" />,
      title: 'Acrobatic Stamina & Leaps',
      desc: 'High-energy synchronous jumps, pyramid stunts, and circular drumming maneuvers.'
    },
    {
      icon: <HeartHandshake className="w-5 h-5 text-[#D97706]" />,
      title: 'Versatile Venue Placement',
      desc: 'Perfect for open lawns, convention center grand entries, resort pathways, and festival stages.'
    }
  ];

  const galleryImages = [
    { src: '/assets/dollu-banner.webp', alt: 'Dollu Kunitha Performance Banner' },
    { src: '/assets/dollu-main.webp', alt: 'Authentic Dollu Kunitha Drummers in Karnataka' },
    { src: '/assets/dollu-g1.webp', alt: 'Grand Processional Folk Drumming' },
    { src: '/assets/dollu-g2.webp', alt: 'Folk Ensemble Traditional Formation' }
  ];

  const faqs = [
    {
      q: 'How far in advance should I book 7Delights Dollu Kunitha for my event?',
      a: 'To ensure maximum availability of our authentic master Dollu Kunitha troupe and traditional instruments, we recommend booking at least 1 to 6 weeks in advance for corporate conferences, campus fests, and social celebrations, and 2 to 3 months in advance for major festival seasons (Rajyotsava, Ugadi, Dasara) and grand weddings. Urgent last-minute bookings are also accommodated based on troupe availability.'
    },
    {
      q: 'How long does a Dollu Kunitha performance typically last?',
      a: 'A standard Dollu Kunitha engagement runs for 2 to 3 hours total. This generally includes 2 to 3 vigorous performance sets (15-25 minutes each) during processionals, stage shows, or grand entries, interspersed with resting periods for the artists.'
    },
    {
      q: 'Can Dollu Kunitha be performed both indoors and outdoors?',
      a: 'Yes! Dollu Kunitha is fantastic outdoors for grand entrances, open-air amphitheaters, and resort lawns. For indoor banquet halls or auditoriums, the acoustic resonance of the drums is impressive and commands absolute attention without requiring electric microphones.'
    },
    {
      q: 'What are the venue requirements for the Dollu Kunitha artists?',
      a: 'We require a clean changing/green room with drinking water, and open floor or stage space with adequate vertical ceiling clearance (at least 10 feet) for acrobatic jumps and formations.'
    },
    {
      q: 'What is your payment policy?',
      a: 'To confirm your event date and reserve the folk artists, an advance payment is required upon signing the agreement. The remaining balance is completed in structured milestones leading up to or on the day of the event.'
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
            <span className="text-[#111A2E] font-medium">Dollu Kunitha</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FFE8ED] border border-[#FFD0DB] text-[#EE3775] text-xs sm:text-sm font-semibold tracking-wide">
                <Sparkles className="w-4 h-4" />
                <span>Premier Karnataka Folk Heritage</span>
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#111A2E] leading-tight">
                Authentic <span className="text-[#EE3775]">Dollu Kunitha</span> Dance Troupe in Bangalore
              </h1>
              <p className="text-base sm:text-lg text-[#5A6E85] leading-relaxed">
                Immerse your event in the thunderous rhythms and acrobatic vibrancy of Karnataka's traditional drum dance! From corporate VIP welcomes and Kannada Rajyotsava celebrations to grand wedding entries across Bengaluru.
              </p>

              {/* Quick Spec Pills */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
                <div className="flex items-center gap-2.5 p-3 rounded-xl bg-white border border-[#F3E8E9] shadow-sm">
                  <Clock className="w-5 h-5 text-[#EE3775] shrink-0" />
                  <div>
                    <p className="text-xs text-[#5A6E85]">Duration</p>
                    <p className="text-xs sm:text-sm font-bold text-[#111A2E]">2 to 3 hours</p>
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
                    <p className="text-xs text-[#5A6E85]">Art Form</p>
                    <p className="text-xs sm:text-sm font-bold text-[#111A2E]">Authentic Folk Masters</p>
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
                  href="https://wa.me/919980029977?text=Hi%207Delights,%20I%20am%20interested%20in%20booking%20a%20Dollu%20Kunitha%20Troupe%20for%20our%20event."
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
                  src="/assets/dollu-main.webp" 
                  alt="Dollu Kunitha Performance in Karnataka" 
                  className="w-full h-[320px] sm:h-[400px] object-cover rounded-xl"
                />
                <div className="absolute top-4 right-4 bg-[#111A2E]/85 backdrop-blur-md text-white text-xs font-semibold px-3 py-1.5 rounded-full flex items-center gap-1.5 shadow">
                  <Drum className="w-3.5 h-3.5 text-[#EE3775]" />
                  <span>Thunderous Drum Beats</span>
                </div>
                <div className="p-3 bg-white">
                  <p className="text-xs text-[#5A6E85] text-center font-medium">
                    Master percussionists executing vigorous acrobatic jumps and synchronized circular rhythms.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Overview & Cultural Significance */}
      <section className="py-14 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7 space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FFE8ED] text-[#EE3775] text-xs font-semibold">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Experience The Rhythmic Energy of Karnataka</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#111A2E]">
              A High-Energy Celebration of Rhythm, Acrobats &amp; Tradition
            </h2>
            <p className="text-sm sm:text-base text-[#5A6E85] leading-relaxed">
              <strong>Dollu Kunitha</strong> is one of Karnataka's most prominent and electrifying folk dance rituals. Performed with large, leather-skinned cylindrical drums strapped across the chest, it combines vigorous footwork, high-flying acrobatic jumps, and thunderous, synchronized drumming patterns.
            </p>
            <p className="text-sm sm:text-base text-[#5A6E85] leading-relaxed">
              At <strong>7Delights.in</strong>, we bring traditional master performers from cultural centers across Karnataka to your corporate conventions, wedding processions, temple festivals, and private milestones.
            </p>
            <ul className="space-y-2.5 pt-2">
              {[
                'Authentic artists trained in ancestral Kuruba community drumming rituals',
                'Vibrant traditional costumes: bright dhotis, matching turbans, and ankle bells',
                'Spectacular acrobatic formations including pyramid drumming and circular leaps',
                'Natural acoustic projection capable of filling outdoor stadiums and indoor halls',
                'Interactive workshops where guests can try traditional rhythms firsthand'
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
              <Drum className="w-3.5 h-3.5" />
              <span>Dollu Kunitha Formats</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#111A2E]">
              Our Specialized Dollu Kunitha Offerings
            </h2>
            <p className="text-xs sm:text-sm text-[#5A6E85] mt-2">
              From processional welcomes to stage folk ensembles and collaborative workshops.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {dolluServices.map((srv, index) => (
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
                    <span className="text-xs text-[#5A6E85] font-medium">Custom Troupe Roster</span>
                    <a 
                      href="tel:+919980029977" 
                      className="text-xs font-bold text-[#EE3775] hover:text-[#D82A64] inline-flex items-center gap-1"
                    >
                      <span>Book Troupe</span>
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
            Why Choose 7delights for Dollu Kunitha?
          </h2>
          <p className="text-xs sm:text-sm text-[#5A6E85] mt-2">
            Preserving indigenous folk traditions with high professionalism and reliability.
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

      {/* Authentic YouTube Video Showcase */}
      <section className="py-14 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#FFFDF9] to-[#FFF5F7] border-t border-[#F3E8E9]">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FFE8ED] text-[#EE3775] text-xs font-semibold mb-3">
            <Video className="w-3.5 h-3.5" />
            <span>Live Action Showcase</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#111A2E] mb-3">
            Watch Our Dollu Kunitha Troupe in Action
          </h2>
          <p className="text-xs sm:text-sm text-[#5A6E85] mb-8 max-w-xl mx-auto">
            Witness the thunderous drumming, acrobatic formations, and cultural energy delivered by 7Delights Dollu Kunitha troupe.
          </p>

          <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white aspect-video bg-black">
            <iframe
              src="https://www.youtube.com/embed/TtaHFwngeqU"
              title="7delights Dollu Kunitha Drum Performance Demo"
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
              Dollu Kunitha FAQ
            </h2>
            <p className="text-xs sm:text-sm text-[#5A6E85] mt-1">
              Find answers regarding troupe sizes, set durations, indoor/outdoor acoustics, and booking.
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

