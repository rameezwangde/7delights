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

export default function DandiyaDancePage() {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const dandiyaServices = [
    {
      title: 'Traditional Garba & Raas Showcase',
      desc: 'Authentic Gujarati folk dancers in vibrant mirror-work Chaniya Cholis and Kediyus, executing intricate, high-tempo circular Garba formations with synchronized stick clashes.',
      tag: 'Authentic Garba',
      color: 'bg-[#FFE8ED] text-[#EE3775] border-[#FFD0DB]',
      image: '/assets/dandiya-main.webp'
    },
    {
      title: 'Interactive Guest Workshops & Step Facilitation',
      desc: 'Our lead dancers step off the stage to teach guests simple 2-clap, 3-clap, and partner-switch Dandiya steps, getting everyone on the dance floor irrespective of prior dance experience.',
      tag: 'Audience Workshop',
      color: 'bg-[#FFF3DF] text-[#D97706] border-[#FFE4B8]',
      image: '/assets/dandiya-g1.webp'
    },
    {
      title: 'Live Dholak, Dhol & Garba Singers / DJ',
      desc: 'High-energy Gujarati and Bollywood Dandiya fusion tracks mixed live by professional DJs or accompanied by traditional acoustic Dholak & Dhol percussionists for non-stop tempo.',
      tag: 'Live Percussion',
      color: 'bg-[#F2EDFF] text-[#7B61FF] border-[#E0D5FF]',
      image: '/assets/dandiya-g2.webp'
    },
    {
      title: 'Decorated Dandiya Sticks & Props Provision',
      desc: 'We supply premium decorated wooden and metallic Dandiya sticks for all attendees, festive entrance torans, and traditional lighting setups for authentic Navratri festival vibes.',
      tag: 'Sticks & Props',
      color: 'bg-[#EBF7F2] text-[#00A86B] border-[#C8EFE0]',
      image: '/assets/dandiya-sticks.webp'
    }
  ];

  const highlights = [
    {
      icon: <Users className="w-5 h-5 text-[#EE3775]" />,
      title: 'Authentic Folk Dancers',
      desc: 'Seasoned artists trained in traditional Gujarati Garba, Raas, and fusion choreographies.'
    },
    {
      icon: <Sparkles className="w-5 h-5 text-[#7B61FF]" />,
      title: 'Mirror-Work Traditional Costumes',
      desc: 'Authentic Gujarati attire with colorful turbans, oxidized jewelry, and vibrant Chaniya Cholis.'
    },
    {
      icon: <HeartHandshake className="w-5 h-5 text-[#00A86B]" />,
      title: 'Interactive Group Engagement',
      desc: 'Engaging facilitation that dissolves hesitation and turns every attendee into a dancing participant.'
    },
    {
      icon: <Music className="w-5 h-5 text-[#D97706]" />,
      title: 'End-to-End Raas Nights',
      desc: 'Turnkey Navratri and corporate Dandiya nights including music, stage, lighting, and stick kits.'
    }
  ];

  const galleryImages = [
    { src: '/assets/dandiya-banner.webp', alt: 'Dandiya Dance Festival Banner' },
    { src: '/assets/dandiya-main.webp', alt: 'Traditional Gujarati Dandiya Raas Troupe' },
    { src: '/assets/dandiya-g1.webp', alt: 'Group Circle Garba Formations' },
    { src: '/assets/dandiya-g2.webp', alt: 'Navratri Dance Floor Celebration' }
  ];

  const faqs = [
    {
      q: 'How far in advance should I book 7Delights Dandiya dance for my event?',
      a: 'To ensure maximum availability of our authentic Dandiya dance artists, choreographers, and traditional costume line-up, we recommend booking at least 1 to 6 weeks in advance for corporate celebrations & social parties, and 2 to 3 months in advance during the peak Navratri festival season and wedding sangeet calendar. Urgent last-minute requests are also accommodated based on artist schedules.'
    },
    {
      q: 'How long do the Dandiya performance and workshop sessions last?',
      a: 'Our standard Dandiya package runs for 2 to 3 hours. It typically kicks off with a breathtaking 15-20 minute showcase performance by our professional troupe, followed by an interactive 30-minute guest workshop teaching basic steps, culminating in an open, high-energy community Dandiya Raas session with the audience.'
    },
    {
      q: 'Do you provide Dandiya sticks for the event guests?',
      a: 'Yes! We can provide bulk quantities of beautifully decorated, colorfully wrapped wooden Dandiya sticks for your guests. Let our team know the expected attendee count in advance so we can arrange adequate sets.'
    },
    {
      q: 'What are the venue requirements for organizing a Dandiya night?',
      a: 'We require a functional sound system (which we can also supply) and an open flat floor space (wooden dance floor, lawn, or carpeted banquet hall) allowing participants to form concentric dancing circles safely.'
    },
    {
      q: 'What is your payment policy?',
      a: 'To confirm your date and artist line-up, an advance booking deposit is required upon signing the agreement. The remaining balance is completed in structured milestones leading up to or on the day of the event.'
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
            <span className="text-[#111A2E] font-medium">Dhandiya Troupe</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FFE8ED] border border-[#FFD0DB] text-[#EE3775] text-xs sm:text-sm font-semibold tracking-wide">
                <Sparkles className="w-4 h-4" />
                <span>Premier Folk & Festive Entertainment</span>
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#111A2E] leading-tight">
                Authentic <span className="text-[#EE3775]">Dandiya Dance Troupe</span> for Events in Bangalore
              </h1>
              <p className="text-base sm:text-lg text-[#5A6E85] leading-relaxed">
                Unleash the festive spirit with 7Delights electrifying Dandiya &amp; Garba Raas dance troupes! Authentic Gujarati costumes, synchronized stick beats, and interactive workshops that get every single attendee twirling and elated across Bengaluru.
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
                    <p className="text-xs sm:text-sm font-bold text-[#111A2E]">Authentic Garba Troupe</p>
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
                  href="https://wa.me/919980029977?text=Hi%207Delights,%20I%20am%20interested%20in%20booking%20a%20Dandiya%20Dance%20Troupe%20for%20our%20event."
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
                  src="/assets/dandiya-main.webp" 
                  alt="Dandiya Dance Troupe Performance Bangalore" 
                  className="w-full h-[320px] sm:h-[400px] object-cover rounded-xl"
                />
                <div className="absolute top-4 right-4 bg-[#111A2E]/85 backdrop-blur-md text-white text-xs font-semibold px-3 py-1.5 rounded-full flex items-center gap-1.5 shadow">
                  <Flame className="w-3.5 h-3.5 text-[#EE3775]" />
                  <span>Festive Garba &amp; Raas</span>
                </div>
                <div className="p-3 bg-white">
                  <p className="text-xs text-[#5A6E85] text-center font-medium">
                    Traditional Gujarati mirror-work costumes, rhythmic stick clashes, and interactive guest workshops.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Overview & What is Dandiya */}
      <section className="py-14 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7 space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FFE8ED] text-[#EE3775] text-xs font-semibold">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Unleash the Festive Spirit with Dandiya</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#111A2E]">
              Twirl, Swirl &amp; Celebrate with Rhythmic Folk Joy
            </h2>
            <p className="text-sm sm:text-base text-[#5A6E85] leading-relaxed">
              Dandiya Raas is a celebration of joyous rhythm, unity, and festive energy. Pairs of dancers use colorfully decorated sticks to create synchronized clashing sounds and intricate rotating circular patterns, accompanied by lively folk beats and Dhol percussion.
            </p>
            <p className="text-sm sm:text-base text-[#5A6E85] leading-relaxed">
              At <strong>7Delights</strong>, we bring this timeless Gujarati celebration directly to your corporate town halls, residential community Navratri utsavs, wedding sangeet nights, and cultural festivals across Bangalore.
            </p>
            <ul className="space-y-2.5 pt-2">
              {[
                'Highly skilled dancers performing authentic multi-circle Garba and Raas formations',
                'Traditional attire with heavy embroidery, mirror work, turbans, and festive drapes',
                'Interactive step-by-step guest coaching turning bystanders into joyful dancers',
                'Optional provision of decorated Dandiya sticks for all attendees',
                'Seamless fusion with live Dhol players or DJ sound systems'
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
              <Flame className="w-3.5 h-3.5" />
              <span>Dandiya Offerings</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#111A2E]">
              Our Dandiya Event Capabilities
            </h2>
            <p className="text-xs sm:text-sm text-[#5A6E85] mt-2">
              From showcase stage performances to full-scale community Dandiya Raas celebrations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {dandiyaServices.map((srv, index) => (
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
                    <span className="text-xs text-[#5A6E85] font-medium">Showcase &amp; Interactive</span>
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

      {/* Highlights / Why Choose 7Delights */}
      <section className="py-14 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#111A2E]">
            Why Choose 7delights for Your Dandiya Night?
          </h2>
          <p className="text-xs sm:text-sm text-[#5A6E85] mt-2">
            Authenticity, crowd chemistry, and hassle-free festive production across Bangalore.
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
            Watch Our Dandiya Dance Troupe in Action
          </h2>
          <p className="text-xs sm:text-sm text-[#5A6E85] mb-8 max-w-xl mx-auto">
            Experience the rhythmic stick clashes, vibrant traditional attire, and guest participation created by 7Delights Dandiya troupe.
          </p>

          <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white aspect-video bg-black">
            <iframe
              src="https://www.youtube.com/embed/6ShJ_v4d-zU"
              title="7delights Dandiya Dance Troupe Demo"
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
              Dandiya Dance FAQ
            </h2>
            <p className="text-xs sm:text-sm text-[#5A6E85] mt-1">
              Find answers regarding stick supplies, workshops, setup durations, and festival bookings.
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

