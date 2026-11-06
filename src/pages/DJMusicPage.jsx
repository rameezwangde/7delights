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
  PartyPopper,
  Calendar,
  CheckCircle2
} from 'lucide-react';
import { GoldUnderline } from '../components/Doodles';

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
      image: '/assets/DJ-console.webp'
    },
    {
      title: 'Intelligent Beam & Truss Lighting',
      desc: 'Computer-controlled sharp moving heads, strobe blasters, LED par cans, and haze machines synchronized seamlessly with musical drops.',
      tag: 'Dynamic Lighting',
      color: 'bg-[#FFF3DF] text-[#D97706] border-[#FFE4B8]',
      image: '/assets/DJ-setup.webp'
    },
    {
      title: 'Pioneer Pro DJ Console & Mixers',
      desc: 'Industry-standard Pioneer CDJ & DJM mixers with dual active subwoofers and line-array speakers delivering distortion-free bass.',
      tag: 'Top-Tier Gear',
      color: 'bg-[#F2EDFF] text-[#7B61FF] border-[#E0D5FF]',
      image: '/assets/DJ-mixer.webp'
    },
    {
      title: 'Custom Curated Playlists',
      desc: 'From Bollywood chartbusters and Punjabi EDM to Retro classics and English Top 40, tailor your song tracklist before event day.',
      tag: 'Tailored Hits',
      color: 'bg-[#E3F8F2] text-[#059669] border-[#C1F1E1]',
      image: '/assets/DJ-Sound.webp'
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

  const specialtiesList = [
    { title: 'Professionalism', text: 'We are a full-service event company with years of experience in creating successful and memorable events.' },
    { title: 'Reliability', text: 'We are committed to providing top-notch service and ensuring your event runs smoothly without technical hiccups.' },
    { title: 'Experience', text: 'Our DJs are highly experienced and skilled at creating the perfect party atmosphere across crowds of all age groups.' },
    { title: 'Customization', text: 'We tailor our DJ services, audio power, and visual lighting to meet your specific venue dimensions and budget.' },
    { title: 'Unforgettable Experience', text: 'We will create a high-octane party atmosphere that your guests and colleagues will be talking about long after!' }
  ];

  const occasionsList = [
    { title: 'Weddings & Sangeet', text: 'Make your wedding reception or sangeet an unforgettable celebration with the perfect music and lighting sync.' },
    { title: 'Corporate Events & Summits', text: 'Create a fun, energetic, and engaging atmosphere for your annual days, tech summits, and gala awards.' },
    { title: 'Private Parties & Birthdays', text: 'Celebrate milestone birthdays, anniversaries, and cocktail nights in style with a personalized DJ booth.' },
    { title: 'Festivals & College Fests', text: 'Massive open-air line array systems, laser beams, and bass drops for large festival gatherings and youth concerts.' }
  ];

  const faqs = [
    {
      q: 'How far in advance should I book 7Delights dj music for my event?',
      a: 'To ensure maximum availability of premium dj music, specific themes, & equipment, we recommend booking at least 1 to 6 weeks in advance for social parties & corporate events, and 3 to 6 months in advance for major weddings or large-scale corporate launches. However, if you have a last-minute request, contact us & we will do our best to make it happen!'
    },
    {
      q: 'How long does it take for your team to set up?',
      a: 'Setup times vary by service. Dj music setup may take 1 to 2 hours. Complex thematic stage setups, intricate lighting riggings, or heavy SFX installations can take anywhere from 4 to 12 hours. We always coordinate directly with the venue to ensure everything is flawlessly set up well before your first guest arrives.'
    },
    {
      q: 'What is your payment policy?',
      a: 'To secure your date, artists, and materials, we require an advance payment upon signing the contract. The remaining balance is structured into milestones leading up to, or on the day of the event.'
    },
    {
      q: 'Can we share a customized playlist with the DJ?',
      a: 'Yes, absolutely! You can share your favorite songs, specific entry tracks for executives or bride & groom, and "do-not-play" lists well in advance. Our DJs incorporate your preferences while dynamically reading the crowd.'
    },
    {
      q: 'What are the basic organizer requirements on-site?',
      a: 'Organizers only need to provide a standard banquet table with clean tablecloth, sheltered floor space (min 10x8 ft for DJ console & speakers), and two independent 15A electrical power points.'
    }
  ];

  const galleryImages = [
    {
      src: '/assets/DJ-banner.webp',
      title: 'DJ Stage & Lighting Truss',
      desc: 'Complete audio-visual console and lighting setup'
    },
    {
      src: '/assets/DJ.webp',
      title: 'Live DJ Performance',
      desc: 'Resident DJ reading the room and hyping the crowd'
    },
    {
      src: '/assets/DJ-console.webp',
      title: 'Professional DJ Console',
      desc: 'Pioneer mixer decks and dual monitor booth'
    },
    {
      src: '/assets/DJ-setup.webp',
      title: 'Lighting & Sound Truss',
      desc: 'Intelligent beam lights, wash pars, and concert speakers'
    },
    {
      src: '/assets/DJ-Sound.webp',
      title: 'Concert Line Array & Bass',
      desc: 'Crystal-clear acoustic coverage across all corners'
    },
    {
      src: '/assets/dj-mix.webp',
      title: 'DJ Mixing In Action',
      desc: 'Seamless song transitions and pulse-pounding EDM drops'
    },
    {
      src: '/assets/dj-music.webp',
      title: 'Packed Dance Arena',
      desc: 'Corporate employees and guests celebrating to the rhythm'
    },
    {
      src: '/assets/DJ-mixer.webp',
      title: 'Multi-Channel Pro Mixer',
      desc: 'High-fidelity audio processing and mic feedback suppression'
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
            <a href="#dj-sound-stage-lighting" className="hover:text-[#EE3775] transition-colors">DJ Sound Stage</a>
            <span>/</span>
            <span className="text-[#111A2E] font-semibold">DJ Music</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            {/* Left Content Column */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FFE8ED] border border-[#FFD0DB] text-[#EE3775] text-xs sm:text-sm font-bold uppercase tracking-wider">
                <Sparkles className="w-4 h-4" />
                <span>Premier DJ Music &amp; Audio Production in Bangalore</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#111A2E] tracking-tight leading-tight">
                DJ Music Planners for <span className="text-[#EE3775]">Events in Bangalore</span>
              </h1>

              <div className="mb-2">
                <GoldUnderline className="w-44 h-auto text-[#EE3775]" />
              </div>

              <p className="text-base sm:text-lg text-[#5A6E85] leading-relaxed">
                Unleash the beat with professional DJ setups! 7Delights provides top-of-the-line Pioneer sound rigs, intelligent laser moving heads, and talented resident DJs to ignite your company annual day, cocktail night, wedding sangeet, or private bash in Bengaluru.
              </p>

              {/* Key Highlights Pill Row */}
              <div className="flex flex-wrap gap-3 pt-1">
                <div className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white border border-[#F5E6EC] shadow-xs text-xs sm:text-sm text-[#111A2E] font-medium">
                  <Clock className="w-4 h-4 text-[#EE3775]" />
                  <span>Duration: <strong>2 to 3 Hours Standard</strong></span>
                </div>
                <div className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white border border-[#F5E6EC] shadow-xs text-xs sm:text-sm text-[#111A2E] font-medium">
                  <MapPin className="w-4 h-4 text-[#059669]" />
                  <span>Available Across <strong>All Bangalore</strong></span>
                </div>
                <div className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white border border-[#F5E6EC] shadow-xs text-xs sm:text-sm text-[#111A2E] font-medium">
                  <Volume2 className="w-4 h-4 text-[#7B61FF]" />
                  <span>Setup: <strong>Pioneer CDJ &amp; Line Array</strong></span>
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
                  href="https://api.whatsapp.com/send/?phone=919980029977&text=Hi%207Delights,%20I%20am%20interested%20in%20DJ%20Music%20service.%20Please%20share%20packages."
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
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white aspect-[4/3] group">
                <img
                  src="/assets/DJ-banner.webp"
                  alt="DJ Sound and Lighting Setup for Events in Bangalore"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  onError={(e) => {
                    e.currentTarget.src = '/assets/DJ.webp';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#111A2E]/75 via-transparent to-transparent"></div>
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
      <section className="py-14 md:py-18 bg-white border-b border-[#F5E6EC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Image display */}
            <div className="lg:col-span-5">
              <div className="relative rounded-2xl overflow-hidden shadow-lg border border-[#F5E6EC]">
                <img
                  src="/assets/DJ.webp"
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
                7Delights.in: Unleash the Beat with Professional DJ Setups
              </h2>

              <p className="text-sm sm:text-base text-[#5A6E85] leading-relaxed">
                Get ready to ignite your event with electrifying music and an unforgettable party atmosphere! <strong>7Delights.in</strong> provides top-of-the-line DJ setups and professional DJs to elevate your event to the next level. Whether it's a wedding, corporate event, private party, or any celebration, we'll create the perfect soundtrack to keep your guests dancing all night long.
              </p>

              <div className="space-y-3 pt-2">
                <div className="p-4 rounded-xl bg-[#FFFDF9] border border-[#F5E6EC]">
                  <h4 className="text-sm font-bold text-[#111A2E] mb-1 flex items-center gap-2">
                    <Sliders className="w-4 h-4 text-[#EE3775]" />
                    <span>Professional DJ Equipment</span>
                  </h4>
                  <p className="text-xs sm:text-sm text-[#5A6E85]">
                    We use only high-quality, industry-standard DJ equipment, including turntables, mixers, speakers, microphones, ensuring crystal-clear sound and a powerful audio experience.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-[#FFFDF9] border border-[#F5E6EC]">
                  <h4 className="text-sm font-bold text-[#111A2E] mb-1 flex items-center gap-2">
                    <Flame className="w-4 h-4 text-[#D97706]" />
                    <span>Dynamic Stage Lighting</span>
                  </h4>
                  <p className="text-xs sm:text-sm text-[#5A6E85]">
                    Set the mood and create a captivating atmosphere with our state-of-the-art lighting systems. From vibrant colors and moving heads to lasers and special effects, we transform any venue into a dance floor paradise.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-[#FFFDF9] border border-[#F5E6EC]">
                  <h4 className="text-sm font-bold text-[#111A2E] mb-1 flex items-center gap-2">
                    <Users className="w-4 h-4 text-[#059669]" />
                    <span>Talented &amp; Versatile DJs</span>
                  </h4>
                  <p className="text-xs sm:text-sm text-[#5A6E85]">
                    Our talented DJs are experts at reading crowds and tailoring the music to suit all tastes and ages, spinning a wide variety of genres including Bollywood, EDM, Pop, Rock, and Hip-Hop.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. DJ PACKAGES SELECTION */}
      <section className="py-14 md:py-18 bg-[#FFF8FA] border-b border-[#F5E6EC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs uppercase tracking-wider font-bold text-[#EE3775] bg-white px-3 py-1 rounded-md border border-[#F5E6EC]">
              Our Audio &amp; Light Solutions
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#111A2E] mt-3">
              Professional DJ &amp; Sound Configurations
            </h2>
            <GoldUnderline className="w-32 h-auto text-[#EE3775] mx-auto mt-2" />
            <p className="text-xs sm:text-sm text-[#5A6E85] mt-2">
              Tailored sound footprints scaled for intimate 50-guest parties or 1,000+ attendee ballroom galas.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {djPackages.map((item, idx) => (
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

      {/* 4. SPECIALTIES OF DJ MUSIC & 7DELIGHTS - THE BEST EVENT */}
      <section className="py-14 md:py-18 bg-white border-b border-[#F5E6EC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {/* Subsection A: Specialties */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 space-y-5">
              <span className="text-xs uppercase tracking-wider font-bold text-[#EE3775] bg-[#FFE8ED] px-3 py-1 rounded-md">
                Our Signature Strength
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#111A2E]">
                Specialties of Dj Music
              </h2>
              <p className="text-sm sm:text-base text-[#5A6E85] leading-relaxed">
                Our DJ at 7Delights.in is designed to be pure fun, energetic, and completely stress-free for the host. Here is what sets our musical curation apart:
              </p>

              <div className="space-y-3">
                {specialtiesList.map((spec, i) => (
                  <div key={i} className="flex items-start gap-3 p-3.5 rounded-xl bg-[#FFFDF9] border border-[#F5E6EC]">
                    <CheckCircle2 className="w-5 h-5 text-[#EE3775] shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-sm font-bold text-[#111A2E]">{spec.title}: </strong>
                      <span className="text-xs sm:text-sm text-[#5A6E85]">{spec.text}</span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex items-center gap-3 pt-2">
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
                  src="/assets/dj-mix.webp"
                  alt="DJ Mixing in Action"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>

          {/* Subsection B: 7Delights - The Best Event for DJ Music */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center pt-8 border-t border-gray-100">
            <div className="lg:col-span-5 order-2 lg:order-1">
              <div className="relative rounded-2xl overflow-hidden shadow-xl border border-gray-100">
                <img
                  src="/assets/dj-music.webp"
                  alt="Crowd Dancing with DJ Music"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>

            <div className="lg:col-span-7 order-1 lg:order-2 space-y-5">
              <span className="text-xs uppercase tracking-wider font-bold text-[#00A86B] bg-[#EBF7F2] px-3 py-1 rounded-md">
                Perfect for Any Occasion
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#111A2E]">
                7Delights.in — The Best Event for Dj Music
              </h2>
              <p className="text-sm sm:text-base text-[#5A6E85] leading-relaxed">
                7Delights.in is your authorized source for the ultimate DJ Music. We specialize in tailor-making musical atmospheres for every type of event in Bangalore:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {occasionsList.map((occ, i) => (
                  <div key={i} className="p-4 rounded-xl bg-[#FFFDF9] border border-[#F5E6EC]">
                    <h4 className="text-sm font-bold text-[#111A2E] mb-1">{occ.title}</h4>
                    <p className="text-xs text-[#5A6E85] leading-relaxed">{occ.text}</p>
                  </div>
                ))}
              </div>

              <p className="text-xs sm:text-sm text-[#5A6E85] italic">
                Ready to Get the Party Started? Contact 7Delights.in today for a free consultation and let us help you create an unforgettable musical experience for your next event!
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
              Dj Music Gallery
            </h2>
            <GoldUnderline className="w-28 h-auto text-[#EE3775] mx-auto mt-2" />
            <p className="text-xs sm:text-sm text-[#5A6E85] mt-2">
              Browse actual photographs of our DJ consoles, lighting trusses, and crowd celebrations across Bangalore venues.
            </p>
          </div>

          {/* Photo Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-14">
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
                <div className="p-4 bg-white">
                  <h4 className="text-sm font-bold text-[#111A2E] mb-1">{img.title}</h4>
                  <p className="text-xs text-[#5A6E85]">{img.desc}</p>
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
                  <p className="text-xs text-[#5A6E85]">See our lighting sync and guests dancing to live mixes</p>
                </div>
              </div>
            </div>
            
            <div className="relative rounded-xl overflow-hidden aspect-video bg-black/5 shadow-inner">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/G8OHJw0u5pQ?rel=0"
                title="7Delights DJ Music Video Demo"
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
              Everything you need to know about booking our DJ setups, sound systems, and timing in Bangalore.
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
            Feel Free to Talk To Us Right Away! Let us get your party stage and DJ audio ready before the show begins.
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
