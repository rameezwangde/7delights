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
  Music, 
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

export default function DanceTroupeDetailPage() {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const danceStyles = [
    {
      title: 'Bollywood & Indian Fusion Extravaganza',
      desc: 'High-octane, colorful, and synchronized choreography set to the latest chartbusters and timeless retro classics. Ideal for wedding sangeets, corporate annual days, and grand galas.',
      tag: 'Bollywood & Fusion',
      color: 'bg-[#FFE8ED] text-[#EE3775] border-[#FFD0DB]',
      image: '/assets/dance-troupe-g1.webp'
    },
    {
      title: 'Western Hip-Hop & Urban Street Dance',
      desc: 'Dynamic, modern, and youth-centric crew performances with popping, locking, breakdance stunts, and synchronized street choreography that pumps instant energy into the crowd.',
      tag: 'Hip-Hop & Urban',
      color: 'bg-[#FFF3DF] text-[#D97706] border-[#FFE4B8]',
      image: '/assets/dance-troupe-g2.webp'
    },
    {
      title: 'Contemporary & Lyrical Storytelling',
      desc: 'Artistic, emotive, and visually mesmerizing routines exploring thematic narratives, corporate launch concepts, or theatrical brand unveilings with smooth flow and acrobatics.',
      tag: 'Contemporary Arts',
      color: 'bg-[#F2EDFF] text-[#7B61FF] border-[#E0D5FF]',
      image: '/assets/dance-troupe-g3.webp'
    },
    {
      title: 'Belly Dance & Exotic International Acts',
      desc: 'Graceful, exotic, and mesmerizing Arabic belly dance, Isis wings, and prop-assisted routines that add sophistication, mystery, and luxury to VIP dinner celebrations.',
      tag: 'Exotic & Wings',
      color: 'bg-[#EBF7F2] text-[#00A86B] border-[#C8EFE0]',
      image: '/assets/dance-troupe-g4.webp'
    }
  ];

  const highlights = [
    {
      icon: <Music className="w-5 h-5 text-[#EE3775]" />,
      title: 'Professional Dancers',
      desc: 'Highly trained, experienced, and charismatic artists who bring precision, stamina, and dedication to every set.'
    },
    {
      icon: <Sparkles className="w-5 h-5 text-[#7B61FF]" />,
      title: 'Stunning Costumes & Props',
      desc: 'Dazzling thematic wardrobes, LED wings, and synchronized stage props tailored to your event palette.'
    },
    {
      icon: <Award className="w-5 h-5 text-[#00A86B]" />,
      title: 'Custom Choreography',
      desc: 'Bespoke routines synchronized with company product themes, leadership entries, or couple sangeet medleys.'
    },
    {
      icon: <Layers className="w-5 h-5 text-[#D97706]" />,
      title: 'Turnkey AV Synchronization',
      desc: 'Seamless coordination with venue DJs, sound consoles, moving beam lights, and LED wall visual loops.'
    }
  ];

  const galleryImages = [
    { src: '/assets/dance-troupe-main.webp', alt: 'Dance Troupe Main Stage Act' },
    { src: '/assets/dance-troupe-g1.webp', alt: 'Synchronized Stage Performance' },
    { src: '/assets/dance-troupe-g2.webp', alt: 'Kids & Youth Group Dance' },
    { src: '/assets/dance-troupe-g3.webp', alt: 'Contemporary Flow Routine' },
    { src: '/assets/dance-troupe-g5.webp', alt: 'Grand Finale Group Pose' },
    { src: '/assets/dance-troupe-g6.webp', alt: 'Thematic Costume Ensemble' }
  ];

  const faqs = [
    {
      q: 'How far in advance should I book 7Delights dance troupe for my event?',
      a: 'To ensure maximum availability of premium dance troupe artists, specific themes, and choreographers, we recommend booking at least 1 to 6 weeks in advance for social parties & corporate events, and 3 to 6 months in advance for major weddings or large-scale corporate launches. However, if you have an urgent last-minute request, contact us and we will do our best to make it happen!'
    },
    {
      q: 'How long do the dance troupe performances typically last?',
      a: 'Our standard package includes 2 to 3 hours of on-site engagement, featuring 2 to 4 high-energy performance sets (typically 8 to 15 minutes each) with costume and theme changes between sets. Extended performances or custom schedules can be organized upon request.'
    },
    {
      q: 'Can the troupe choreograph a custom performance for our corporate or wedding theme?',
      a: 'Yes, absolutely! Our choreographers can build custom dance sequences incorporating your company logo reveal, leadership entrance, or couple sangeet mashup tracks. We request your music selections at least 1 to 2 weeks prior to allow adequate rehearsal time.'
    },
    {
      q: 'What are the venue requirements for the dance troupe?',
      a: 'The venue must provide a clean and secure green room / changing room with mirrors and drinking water, along with a flat stage or dance floor area and a functional sound system (PA system with Bluetooth/AUX connectivity for dance tracks).'
    },
    {
      q: 'What is your payment policy?',
      a: 'To secure your date, artists, and materials, we require an advance payment upon signing the contract. The remaining balance is structured into milestones leading up to, or on the day of the event.'
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
            <span className="text-[#111A2E] font-medium">Dance Troupe</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FFE8ED] border border-[#FFD0DB] text-[#EE3775] text-xs sm:text-sm font-semibold tracking-wide">
                <Sparkles className="w-4 h-4" />
                <span>Premier Stage Entertainment</span>
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#111A2E] leading-tight">
                Professional <span className="text-[#EE3775]">Dance Troupe</span> for Events in Bangalore
              </h1>
              <p className="text-base sm:text-lg text-[#5A6E85] leading-relaxed">
                Electrify your event with spectacular stage performances! From high-octane Bollywood hits and urban street dance to mesmerizing contemporary and fusion routines, 7Delights provides seasoned dance troupes that captivate audiences and leave lasting memories.
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
                    <p className="text-xs text-[#5A6E85]">Quality</p>
                    <p className="text-xs sm:text-sm font-bold text-[#111A2E]">Trained Artists</p>
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
                  href="https://wa.me/919980029977?text=Hi%207Delights,%20I%20am%20interested%20in%20booking%20a%20Dance%20Troupe%20for%20our%20event."
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
                  src="/assets/dance-troupe-main.webp" 
                  alt="Dance Troupe Performers by 7Delights" 
                  className="w-full h-[320px] sm:h-[400px] object-cover rounded-xl"
                />
                <div className="absolute top-4 right-4 bg-[#111A2E]/85 backdrop-blur-md text-white text-xs font-semibold px-3 py-1.5 rounded-full flex items-center gap-1.5 shadow">
                  <Flame className="w-3.5 h-3.5 text-[#EE3775]" />
                  <span>Electrifying Live Acts</span>
                </div>
                <div className="p-3 bg-white">
                  <p className="text-xs text-[#5A6E85] text-center font-medium">
                    Professional choreography, vibrant thematic wardrobes, and synchronized energy.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Overview & Performance Philosophy */}
      <section className="py-14 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7 space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FFE8ED] text-[#EE3775] text-xs font-semibold">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Electrify Your Event with Spectacular Dance</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#111A2E]">
              Captivating Choreography, Storytelling & Visual Spectacle
            </h2>
            <p className="text-sm sm:text-base text-[#5A6E85] leading-relaxed">
              At <strong>7Delights.in</strong>, we understand that dance is far more than just movement; it is emotion, celebration, and pure visual spectacle. Whether you are hosting an annual corporate awards night, an opulent wedding sangeet, an alumni reunion, or a brand activation, our dance troupes ignite the room and set the ultimate party mood.
            </p>
            <p className="text-sm sm:text-base text-[#5A6E85] leading-relaxed">
              We collaborate with highly skilled, charismatic artists and seasoned choreographers who adapt routines to match your audience, stage dimensions, and music preferences.
            </p>
            <ul className="space-y-2.5 pt-2">
              {[
                'Wide variety of genres: Bollywood, Hip-Hop, Contemporary, Folk Fusion & Belly Dance',
                'Dazzling thematic wardrobes with LED wings, metallic fabrics, and matching accessories',
                'Bespoke choreography tailored to corporate themes or wedding couple mashups',
                'Complete coordination with venue audio consoles and lighting trusses',
                'Punctual arrival with adequate green room prep and technical sound checks'
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#111A2E] font-medium">
                  <CheckCircle className="w-4 h-4 text-[#EE3775] shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-5 grid grid-cols-2 gap-4">
            {galleryImages.slice(1, 5).map((img, i) => (
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

      {/* Dance Styles Catalog */}
      <section className="py-14 px-4 sm:px-6 lg:px-8 bg-[#FAF6F4] border-y border-[#F3E8E9]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FFE8ED] text-[#EE3775] text-xs font-semibold mb-2">
              <Music className="w-3.5 h-3.5" />
              <span>Dance Formats & Styles</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#111A2E]">
              Our Specialized Dance Troupe Styles
            </h2>
            <p className="text-xs sm:text-sm text-[#5A6E85] mt-2">
              Customized to fit your stage theme, audience demographic, and celebration atmosphere.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {danceStyles.map((srv, index) => (
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
                    <span className="text-xs text-[#5A6E85] font-medium">Custom Troupe Size</span>
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
            Why Choose 7delights for Your Dance Troupe?
          </h2>
          <p className="text-xs sm:text-sm text-[#5A6E85] mt-2">
            Professionalism, creativity, and seamless stage production across Bengaluru.
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
            Watch Our Dance Troupe in Action
          </h2>
          <p className="text-xs sm:text-sm text-[#5A6E85] mb-8 max-w-xl mx-auto">
            Experience the vibrant choreography, stage presence, and crowd excitement delivered by 7Delights dance troupes during live events.
          </p>

          <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white aspect-video bg-black">
            <iframe
              src="https://www.youtube.com/embed/FYlniR6YPEc"
              title="7delights Dance Troupe Live Demo"
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
              Dance Troupe FAQ
            </h2>
            <p className="text-xs sm:text-sm text-[#5A6E85] mt-1">
              Find answers regarding troupe sizes, set durations, green rooms, and booking.
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

