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

export default function PunjabiDholPage() {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const dholServices = [
    {
      title: 'Grand Wedding Baraat Processions',
      desc: 'High-octane, rhythmic barrel drum beats that drive the wedding groom procession with unmatched Punjabi grandeur, getting the entire family dancing on the street.',
      tag: 'Baraat Processions',
      color: 'bg-[#FFE8ED] text-[#EE3775] border-[#FFD0DB]',
      image: '/assets/punjabi-dhol-main.webp'
    },
    {
      title: 'Bhangra Dancers & Dhol Duo Show',
      desc: 'Combine the thunderous, high-tempo beats of master Dhol players with high-energy traditional Bhangra dancers in colorful Pagris and Kurta-Chaddars for an electrifying stage act.',
      tag: 'Dhol & Bhangra',
      color: 'bg-[#FFF3DF] text-[#D97706] border-[#FFE4B8]',
      image: '/assets/punjabi-dhol-g1.webp'
    },
    {
      title: 'Corporate Galas & Leadership Walk-Ins',
      desc: 'Command attention during annual corporate galas, award nights, and CEO entries with triumphant acoustic drumming that charges the room with instant adrenaline.',
      tag: 'Corporate Entrances',
      color: 'bg-[#F2EDFF] text-[#7B61FF] border-[#E0D5FF]',
      image: '/assets/punjabi-dhol-g2.webp'
    },
    {
      title: 'DJ & Live Dhol Jugalbandi Jam',
      desc: 'An explosive fusion where our live Dhol drummers jam side-by-side with your event DJ, supercharging popular Bollywood, Punjabi, and EDM tracks on the dance floor.',
      tag: 'DJ Jugalbandi',
      color: 'bg-[#EBF7F2] text-[#00A86B] border-[#C8EFE0]',
      image: '/assets/punjabi-dhol-g3.webp'
    }
  ];

  const highlights = [
    {
      icon: <Drum className="w-5 h-5 text-[#EE3775]" />,
      title: 'Authentic Punjabi Artists',
      desc: 'Experienced north-Indian folk percussionists with authentic double-sided barrel Dhols.'
    },
    {
      icon: <Sparkles className="w-5 h-5 text-[#7B61FF]" />,
      title: 'Traditional Attire',
      desc: 'Bright silk kurtas, traditional turbans (pagris), and matching sashes that elevate photo moments.'
    },
    {
      icon: <Flame className="w-5 h-5 text-[#00A86B]" />,
      title: 'Infectious Rhythm & Tempo',
      desc: 'Unstoppable beats that dissolve shyness and instantly fill the dance floor with energetic grooving.'
    },
    {
      icon: <HeartHandshake className="w-5 h-5 text-[#D97706]" />,
      title: 'Versatile Group Sizes',
      desc: 'Available as solo, duo, quartet, or grand 6-10 drummer processional formations across Bengaluru.'
    }
  ];

  const galleryImages = [
    { src: '/assets/punjabi-dhol-banner.webp', alt: 'Punjabi Dhol Festival Banner' },
    { src: '/assets/punjabi-dhol-main.webp', alt: 'Punjabi Dhol Baraat Drummers' },
    { src: '/assets/punjabi-dhol-g1.webp', alt: 'Live Dhol & Bhangra Performance' },
    { src: '/assets/punjabi-dhol-g2.webp', alt: 'Corporate VIP Entrance Drumming' }
  ];

  const faqs = [
    {
      q: 'How far in advance should I book 7Delights Punjabi Dhol for my event?',
      a: 'To ensure maximum availability of top-tier authentic Punjabi Dhol players and Bhangra ensembles, we recommend booking at least 1 to 6 weeks in advance for corporate celebrations and social parties, and 2 to 4 months in advance during peak wedding seasons and festive holidays (Lohri, Baisakhi, Diwali). Last-minute bookings can also be accommodated based on artist schedules.'
    },
    {
      q: 'How long do the Punjabi Dhol performances typically last?',
      a: 'Our standard Punjabi Dhol package covers 2 to 3 hours of on-site engagement. This usually includes 2 to 3 high-octane drumming sessions (20-30 minutes each) during guest arrivals, groom baraat processions, and mid-event dance floor peaks, allowing short intervals for the artists.'
    },
    {
      q: 'Can the Dhol players perform alongside our event DJ or band?',
      a: 'Yes, absolutely! The live DJ-Dhol fusion (Jugalbandi) is one of our most requested party features. Our Dhol players synchronize acoustic beats live over the DJ tracks to create an unforgettable, stadium-like dance atmosphere.'
    },
    {
      q: 'What are the venue requirements for Punjabi Dhol?',
      a: 'Punjabi Dhols are powerful acoustic instruments requiring no electric wires, sound amplifiers, or plugs! All they require is space to perform, a clean green room / resting area for costume changes, and drinking water.'
    },
    {
      q: 'What is your payment policy?',
      a: 'To confirm your booking and reserve the Dhol players, an advance deposit is required upon signing the contract. The remaining balance is completed in structured milestones leading up to or on the day of the event.'
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
            <span className="text-[#111A2E] font-medium">Punjabi Dhol</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FFE8ED] border border-[#FFD0DB] text-[#EE3775] text-xs sm:text-sm font-semibold tracking-wide">
                <Sparkles className="w-4 h-4" />
                <span>The Heartbeat of Celebrations</span>
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#111A2E] leading-tight">
                Authentic <span className="text-[#EE3775]">Punjabi Dhol</span> Players in Bangalore
              </h1>
              <p className="text-base sm:text-lg text-[#5A6E85] leading-relaxed">
                Experience the raw acoustic power, thunderous rhythms, and infectious joy of authentic Punjabi Dhol with 7Delights! Guaranteed to bring non-stop high-energy dancing to wedding baraats, corporate galas, and festive celebrations across Bengaluru.
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
                    <p className="text-xs text-[#5A6E85]">Artists</p>
                    <p className="text-xs sm:text-sm font-bold text-[#111A2E]">Authentic Master Drummers</p>
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
                  href="https://wa.me/919980029977?text=Hi%207Delights,%20I%20am%20interested%20in%20booking%20Punjabi%20Dhol%20players%20for%20our%20event."
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
                  src="/assets/punjabi-dhol-main.webp" 
                  alt="Punjabi Dhol Players Bangalore" 
                  className="w-full h-[320px] sm:h-[400px] object-cover rounded-xl"
                />
                <div className="absolute top-4 right-4 bg-[#111A2E]/85 backdrop-blur-md text-white text-xs font-semibold px-3 py-1.5 rounded-full flex items-center gap-1.5 shadow">
                  <Drum className="w-3.5 h-3.5 text-[#EE3775]" />
                  <span>High-Octane Dhol</span>
                </div>
                <div className="p-3 bg-white">
                  <p className="text-xs text-[#5A6E85] text-center font-medium">
                    Traditional double-sided barrel drums, festive Bhangra attire, and unstoppable crowd energy.
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
              <span>The Pulse of Indian Celebrations</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#111A2E]">
              Infectious Beats That Instantly Ignite Any Dance Floor
            </h2>
            <p className="text-sm sm:text-base text-[#5A6E85] leading-relaxed">
              The <strong>Dhol</strong> is a double-sided barrel drum played with curved wooden sticks (dagga and tihli) that produces deep bass vibrations and piercing high-frequency rhythms. It is the very soul of North Indian celebrations, weddings, and harvest festivals.
            </p>
            <p className="text-sm sm:text-base text-[#5A6E85] leading-relaxed">
              At <strong>7Delights.in</strong>, our troupe of authentic master percussionists brings authentic Punjabi flair directly to your celebration in Bangalore — turning ordinary entrances into grand processions and dance floors into festival grounds!
            </p>
            <ul className="space-y-2.5 pt-2">
              {[
                'Authentic double-sided wooden barrel drums delivering booming acoustic bass',
                'Vibrant traditional Punjabi attire with colorful silk turbans (pagris) and kurtas',
                'Versatile setups from 2-drummer Baraat leads to 6-10 drummer processional formations',
                'Live synchronization alongside event DJs for explosive Bhangra dance sessions',
                '100% acoustic mobility: no electricity, extension cords, or amplifiers required'
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
              <span>Dhol Performance Formats</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#111A2E]">
              Our Specialized Punjabi Dhol Packages
            </h2>
            <p className="text-xs sm:text-sm text-[#5A6E85] mt-2">
              From wedding baraats and corporate kickoffs to high-energy DJ collaborations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {dholServices.map((srv, index) => (
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
                    <span className="text-xs text-[#5A6E85] font-medium">Baraats &amp; Stage Shows</span>
                    <a 
                      href="tel:+919980029977" 
                      className="text-xs font-bold text-[#EE3775] hover:text-[#D82A64] inline-flex items-center gap-1"
                    >
                      <span>Book Dhol</span>
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
            Why Choose 7delights for Punjabi Dhol?
          </h2>
          <p className="text-xs sm:text-sm text-[#5A6E85] mt-2">
            Punctual arrival, authentic folk presentation, and boundless stamina.
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
            Watch Our Punjabi Dhol in Action
          </h2>
          <p className="text-xs sm:text-sm text-[#5A6E85] mb-8 max-w-xl mx-auto">
            Witness the infectious energy, booming beats, and crowd excitement brought by 7Delights authentic Punjabi Dhol artists.
          </p>

          <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white aspect-video bg-black">
            <iframe
              src="https://www.youtube.com/embed/caPJ8UlUdxw"
              title="7delights Punjabi Dhol Bangalore Performance"
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
              Punjabi Dhol FAQ
            </h2>
            <p className="text-xs sm:text-sm text-[#5A6E85] mt-1">
              Find answers regarding drummer counts, baraat timelines, DJ collaborations, and booking.
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

