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
  Volume2, 
  Award, 
  Star, 
  Users, 
  Trophy, 
  Disc3,
  Sliders,
  Radio,
  Flame,
  PartyPopper
} from 'lucide-react';

export default function DJMusicPage() {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const djPackages = [
    {
      title: 'Corporate Gala & Cocktail DJ',
      desc: 'Sophisticated deep house, commercial lounge, and high-energy party anthems mixed by top corporate DJs with wireless mics for speeches.',
      tag: 'Corporate Bashes',
      color: 'bg-[#FFE8ED] text-[#EE3775] border-[#FFD0DB]',
      image: '/assets/dj-console.webp'
    },
    {
      title: 'Intelligent Beam & Truss Lighting',
      desc: 'Computer-controlled sharp moving heads, strobe blasters, LED par cans, and haze machines synchronized seamlessly with musical drops.',
      tag: 'Dynamic Lighting',
      color: 'bg-[#FFF3DF] text-[#D97706] border-[#FFE4B8]',
      image: '/assets/dj-setup.webp'
    },
    {
      title: 'Pioneer Pro DJ Console & Mixers',
      desc: 'Industry-standard Pioneer CDJ-3000 / DJM-900NXS2 consoles with dual active subwoofers and line-array speakers delivering distortion-free bass.',
      tag: 'Top-Tier Gear',
      color: 'bg-[#F2EDFF] text-[#7B61FF] border-[#E0D5FF]',
      image: '/assets/dj-mixer.webp'
    },
    {
      title: 'Custom Curated Playlists',
      desc: 'From Bollywood chartbusters and Punjabi EDM to Retro classics and English Top 40, tailor your song tracklist before event day.',
      tag: 'Tailored Hits',
      color: 'bg-[#E3F8F2] text-[#059669] border-[#C1F1E1]',
      image: '/assets/dj-sound.webp'
    },
  ];

  const features = [
    {
      title: 'Concert-Grade Sound Rigs',
      desc: 'JBL, RCF, and Yamaha sound arrays engineered for crystal-clear vocals, thunderous low frequencies, and zero acoustic distortion.',
      icon: <Volume2 className="w-6 h-6 text-[#EE3775]" />,
    },
    {
      title: 'Crowd-Engaging Resident DJs',
      desc: 'Seasoned party DJs who read the room, build unstoppable momentum, and keep the dance floor packed until the final song.',
      icon: <Disc3 className="w-6 h-6 text-[#7B61FF]" />,
    },
    {
      title: 'Synchronized Concert Lighting',
      desc: 'Truss-mounted moving heads, beam lasers, smoke machines, and wash lights transforming ordinary banquet halls into premier clubs.',
      icon: <Flame className="w-6 h-6 text-[#059669]" />,
    },
    {
      title: 'Dedicated Sound Technicians',
      desc: 'Experienced on-site engineers managing sound check 2 hours prior, balancing decibels, and eliminating microphone feedback.',
      icon: <Sliders className="w-6 h-6 text-[#D97706]" />,
    },
    {
      title: 'Punctual Setup & Silent Teardown',
      desc: 'Complete delivery, cable rigging, electrical stabilization, and safe post-event pack up without disrupting venue operations.',
      icon: <Clock className="w-6 h-6 text-[#3B82F6]" />,
    },
    {
      title: 'Universal Appeal Across All Celebrations',
      desc: 'Tailored setups for corporate award galas, sangeet cocktails, college fests, milestone birthdays, and pool parties across Bangalore.',
      icon: <PartyPopper className="w-6 h-6 text-[#EC4899]" />,
    },
  ];

  const faqs = [
    {
      q: 'How far in advance should I book 7Delights dj music for my event?',
      a: 'To ensure maximum availability of premium dj music, specific themes, & equipment, we recommend booking at least 1 to 6 weeks in advance for social parties & corporate events, and 3 to 6 months in advance for major weddings or large-scale corporate launches. However, if you have a last-minute request, contact us & we will do our best to make it happen!'
    },
    {
      q: 'How long does it take for your team to set up?',
      a: 'Setup times vary by service. Standard DJ music setup takes 1 to 2 hours. Complex thematic stage setups with heavy lighting trusses or LED screens can take anywhere from 3 to 6 hours. We always coordinate directly with the venue to ensure sound checks are finished before the first guest arrives.'
    },
    {
      q: 'What is your payment policy?',
      a: 'To secure your date, artists, and materials, we require an advance payment upon signing the contract. The remaining balance is structured into milestones leading up to, or on the day of the event.'
    },
    {
      q: 'Can we share a customized playlist with the DJ?',
      a: 'Yes, absolutely! You can share your favorite songs, specific entry tracks for executives or VIPs, and "do-not-play" lists well in advance. Our DJs incorporate your preferences while dynamically reading the crowd.'
    },
    {
      q: 'What are the basic organizer requirements on-site?',
      a: 'Organizers only need to provide a standard banquet table with clean tablecloth, sheltered floor space (min 10x8 ft for DJ console & speakers), and two independent 15A electrical power points.'
    }
  ];

  const galleryImages = [
    {
      src: '/assets/dj-main.webp',
      title: 'Live DJ Performance',
      desc: 'High-energy DJ mixing live electronic and Bollywood chartbusters'
    },
    {
      src: '/assets/dj-console.webp',
      title: 'Professional DJ Console',
      desc: 'Pioneer mixer decks and dual monitor booth'
    },
    {
      src: '/assets/dj-setup.webp',
      title: 'Lighting & Sound Truss',
      desc: 'Intelligent beam lights, wash pars, and concert speakers'
    },
    {
      src: '/assets/dj-sound.webp',
      title: 'Packed Dance Floor',
      desc: 'Corporate employees and guests celebrating to the rhythm'
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
            <span className="text-[#111A2E] font-semibold">DJ Sound &amp; Lighting</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            {/* Left Content Column */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FFE8ED] border border-[#FFD0DB] text-[#EE3775] text-xs md:text-sm font-semibold tracking-wide">
                <Disc3 className="w-4 h-4" />
                <span>Electrifying Live DJ &amp; Intelligent Lighting Rigs</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#111A2E] tracking-tight leading-tight">
                DJ Music Planners for <span className="text-[#EE3775]">Events in Bangalore</span>
              </h1>

              <p className="text-base sm:text-lg text-[#5A6E85] leading-relaxed">
                Unleash the beat with professional DJ setups! 7Delights provides top-of-the-line Pioneer sound rigs, intelligent laser moving heads, and talented corporate DJs to ignite your company annual day, cocktail night, or private bash in Bengaluru.
              </p>

              {/* Key Highlights Pill Row */}
              <div className="flex flex-wrap gap-3 pt-2">
                <div className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white border border-[#F5E6EC] shadow-sm text-xs sm:text-sm text-[#111A2E] font-medium">
                  <Clock className="w-4 h-4 text-[#EE3775]" />
                  <span>Duration: <strong>2 to 3 Hours Standard</strong></span>
                </div>
                <div className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white border border-[#F5E6EC] shadow-sm text-xs sm:text-sm text-[#111A2E] font-medium">
                  <MapPin className="w-4 h-4 text-[#059669]" />
                  <span>Available Across <strong>All Bangalore</strong></span>
                </div>
                <div className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white border border-[#F5E6EC] shadow-sm text-xs sm:text-sm text-[#111A2E] font-medium">
                  <Volume2 className="w-4 h-4 text-[#7B61FF]" />
                  <span>Gear: <strong>Concert Line-Array &amp; Laser</strong></span>
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
                  href="https://wa.me/919980029977?text=Hi%207Delights,%20I'm%20interested%20in%20booking%20DJ%20Sound%20and%20Lighting%20for%20my%20event."
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
                  src="/assets/dj-banner.webp"
                  alt="DJ Sound and Lighting Setup for Events in Bangalore"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  onError={(e) => {
                    e.currentTarget.src = '/assets/dj-main.webp';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#111A2E]/70 via-transparent to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#EE3775] text-xs font-bold uppercase tracking-wider mb-1">
                    Live DJ &amp; Sound
                  </div>
                  <p className="text-sm font-medium text-white/95">
                    Pioneer Decks, Bass Subwoofers &amp; Intelligent Lighting
                  </p>
                </div>
              </div>

              {/* Float Badge */}
              <div className="absolute -bottom-5 -left-5 bg-white p-3.5 rounded-xl shadow-xl border border-[#F5E6EC] hidden sm:flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-[#FFE8ED] flex items-center justify-center text-[#EE3775]">
                  <Disc3 className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-[#5A6E85] font-medium">Electrifying Vibes</div>
                  <div className="text-sm font-bold text-[#111A2E]">Experienced DJs</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. ABOUT DJ MUSIC SECTION */}
      <section className="py-14 md:py-18 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Image display */}
            <div className="lg:col-span-5">
              <div className="relative rounded-2xl overflow-hidden shadow-lg border border-[#F5E6EC]">
                <img
                  src="/assets/dj-main.webp"
                  alt="DJ Console and Sound Setup in Bangalore"
                  className="w-full h-auto object-cover"
                />
                <div className="p-4 bg-[#FFFDF9] border-t border-[#F5E6EC]">
                  <div className="flex items-center justify-between text-xs sm:text-sm">
                    <span className="font-semibold text-[#111A2E]">Standard Performance Duration:</span>
                    <span className="font-bold text-[#EE3775]">2 to 3 Hours (₹0 Base Quote)</span>
                  </div>
                  <p className="text-xs text-[#5A6E85] mt-1">
                    *Requirements from organizer: A table. (Attracts additional charges for extra hours)
                  </p>
                </div>
              </div>
            </div>

            {/* Content Details */}
            <div className="lg:col-span-7 space-y-5">
              <div className="inline-block text-xs uppercase tracking-wider font-bold text-[#EE3775] bg-[#FFE8ED] px-3 py-1 rounded-md">
                About DJ Music &amp; Audio Experience
              </div>

              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#111A2E] leading-snug">
                The Ultimate Audio and Visual Experience to Keep Guests Dancing All Night
              </h2>

              <p className="text-base text-[#5A6E85] leading-relaxed">
                Get ready to ignite your event with electrifying music and an unforgettable party atmosphere! 7Delights provides top-of-the-line DJ setups and versatile artists to elevate your event. Whether it's an annual corporate gala, product launch cocktail, wedding reception, or milestone birthday, we create the perfect soundtrack.
              </p>

              <p className="text-base text-[#5A6E85] leading-relaxed">
                Our DJs are masters at reading crowds, blending transitions smoothly, and adapting tracklists on the fly. From Top 40 international hits and Bollywood blockbusters to deep house and retro classics, we curate playlists that match your guests perfectly.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-3">
                <div className="flex items-start gap-2.5 p-3 rounded-lg bg-[#FFFDF9] border border-[#F5E6EC]">
                  <CheckCircle className="w-5 h-5 text-[#059669] shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm text-[#111A2E] font-medium">Industry-standard Pioneer CDJ &amp; mixer setups</span>
                </div>
                <div className="flex items-start gap-2.5 p-3 rounded-lg bg-[#FFFDF9] border border-[#F5E6EC]">
                  <CheckCircle className="w-5 h-5 text-[#059669] shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm text-[#111A2E] font-medium">Line array speakers &amp; deep-bass subwoofers</span>
                </div>
                <div className="flex items-start gap-2.5 p-3 rounded-lg bg-[#FFFDF9] border border-[#F5E6EC]">
                  <CheckCircle className="w-5 h-5 text-[#059669] shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm text-[#111A2E] font-medium">Synchronized moving beam heads, lasers &amp; haze</span>
                </div>
                <div className="flex items-start gap-2.5 p-3 rounded-lg bg-[#FFFDF9] border border-[#F5E6EC]">
                  <CheckCircle className="w-5 h-5 text-[#059669] shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm text-[#111A2E] font-medium">Wireless cordless microphones for speeches &amp; toasts</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. DJ PACKAGES SELECTION */}
      <section className="py-14 md:py-18 bg-[#FFF8FA] border-y border-[#F5E6EC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs uppercase tracking-wider font-bold text-[#EE3775] bg-white px-3 py-1 rounded-md border border-[#F5E6EC]">
              Our Audio &amp; Light Solutions
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#111A2E] mt-3">
              Professional DJ &amp; Sound Configurations
            </h2>
            <p className="text-sm sm:text-base text-[#5A6E85] mt-2">
              Tailored sound footprints scaled for intimate 50-guest parties or 1,000+ attendee ballroom galas.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {djPackages.map((item, idx) => (
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
                  <span>Dedicated Sound Engineer Included</span>
                  <CheckCircle className="w-4 h-4" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. SPECIALTIES & WHY 7DELIGHTS */}
      <section className="py-14 md:py-18 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs uppercase tracking-wider font-bold text-[#EE3775] bg-[#FFE8ED] px-3 py-1 rounded-md">
              Specialties &amp; Audio Quality
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#111A2E] mt-3">
              Why 7Delights is the Best Choice for DJ Music
            </h2>
            <p className="text-sm sm:text-base text-[#5A6E85] mt-2">
              Unmatched audio fidelity, high-energy DJs, and dependable execution without feedback or lag.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feat, idx) => (
              <div 
                key={idx}
                className="p-6 rounded-2xl bg-[#FFFDF9] border border-[#F5E6EC] hover:border-[#EE3775]/40 transition-all hover:shadow-sm"
              >
                <div className="w-12 h-12 rounded-xl bg-white shadow-sm border border-[#F5E6EC] flex items-center justify-center mb-4">
                  {feat.icon}
                </div>
                <h3 className="text-base sm:text-lg font-bold text-[#111A2E] mb-2">{feat.title}</h3>
                <p className="text-xs sm:text-sm text-[#5A6E85] leading-relaxed">{feat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. PHOTO GALLERY & VIDEO SECTION */}
      <section className="py-14 md:py-18 bg-[#FFF8FA] border-y border-[#F5E6EC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs uppercase tracking-wider font-bold text-[#EE3775] bg-white px-3 py-1 rounded-md border border-[#F5E6EC]">
              Gallery &amp; Demo
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#111A2E] mt-3">
              DJ Performance Gallery
            </h2>
            <p className="text-sm sm:text-base text-[#5A6E85] mt-2">
              Browse actual photographs of our DJ consoles and lighting trusses across Bangalore venues.
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
                      e.currentTarget.src = '/assets/dj-main.webp';
                    }}
                  />
                </div>
                <div className="p-4 bg-white">
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
                  <h3 className="text-sm sm:text-base font-bold text-[#111A2E]">Watch DJ Performance Video</h3>
                  <p className="text-xs text-[#5A6E85]">See our lighting sync and guests dancing to live mixes</p>
                </div>
              </div>
            </div>
            
            <div className="relative rounded-xl overflow-hidden aspect-video bg-black/5 shadow-inner">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/G8OHJw0u5pQ?rel=0"
                title="DJ Sound and Music by 7Delights Bangalore"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* 6. FAQ SECTION */}
      <section className="py-14 md:py-18 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <span className="text-xs uppercase tracking-wider font-bold text-[#EE3775] bg-[#FFE8ED] px-3 py-1 rounded-md">
              Got Questions?
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#111A2E] mt-3">
              Frequently Asked Questions
            </h2>
            <p className="text-sm sm:text-base text-[#5A6E85] mt-2">
              Everything you need to know about booking our professional DJ setup for your event.
            </p>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="border border-[#F5E6EC] rounded-xl overflow-hidden bg-[#FFFDF9] transition-colors"
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
                  <div className="px-5 pb-4 pt-1 text-xs sm:text-sm text-[#5A6E85] leading-relaxed border-t border-[#F5E6EC]/60 bg-white">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. BOTTOM CALL TO ACTION STRIP */}
      <section className="bg-gradient-to-r from-[#111A2E] to-[#1C2B4B] text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
            <div>
              <h3 className="text-xl sm:text-2xl font-bold tracking-tight">
                Ready to Get the Party Started with 7Delights?
              </h3>
              <p className="text-sm text-gray-300 mt-1 max-w-xl">
                Get an instant quote with complete Pioneer DJ consoles, sound arrays, and synchronized lighting in Bangalore.
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
                href="https://wa.me/919980029977?text=Hi%207Delights,%20I'm%20planning%20an%20event%20and%20want%20to%20book%20DJ%20Sound%20and%20Lighting."
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

