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
  Gamepad2, 
  Glasses, 
  Award, 
  Star, 
  Users, 
  Trophy,
  Zap,
  MonitorPlay,
  Layers
} from 'lucide-react';

export default function VRGamesPage() {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const vrExperiences = [
    {
      title: 'Beat Saber & Rhythm Slash',
      desc: 'Slice energetic musical beats with twin futuristic lightsabers in high adrenaline rhythm choreography. The #1 guest favorite!',
      tag: 'Most Popular',
      color: 'bg-[#FFE8ED] text-[#EE3775] border-[#FFD0DB]',
      image: '/assets/vr-games-main.webp'
    },
    {
      title: 'Extreme 360° Roller Coaster',
      desc: 'Experience gravity-defying loops, massive cliffside drops, and high-velocity twists that make guests gasp and hold on tight.',
      tag: 'Adrenaline Rush',
      color: 'bg-[#FFF3DF] text-[#D97706] border-[#FFE4B8]',
      image: '/assets/vr-games-zone.webp'
    },
    {
      title: 'Richie’s Plank Experience',
      desc: 'Walk an 80-story high skyscraper plank above a bustling digital city. Tests nerves and courage with safe room-scale guardian grids.',
      tag: 'Courage Test',
      color: 'bg-[#F2EDFF] text-[#7B61FF] border-[#E0D5FF]',
      image: '/assets/vr-games-2.webp'
    },
    {
      title: 'Action Sci-Fi Shooter & Archery',
      desc: 'Defend space stations from alien robots or protect castles with precision bow-and-arrow archery physics in 6-DOF immersion.',
      tag: 'Sci-Fi Action',
      color: 'bg-[#E3F8F2] text-[#059669] border-[#C1F1E1]',
      image: '/assets/vr-games-3.webp'
    },
  ];

  const features = [
    {
      title: 'Next-Gen High-Resolution Headsets',
      desc: 'Equipped with Meta Quest / HTC Vive 4K headsets delivering crisp visuals, spatial 3D audio, and ultra-smooth refresh rates without motion blur.',
      icon: <Glasses className="w-6 h-6 text-[#EE3775]" />,
    },
    {
      title: 'Large TV Live Audience Mirroring',
      desc: 'Spectators and cheer squads can watch the player’s live perspective on external HD display screens, keeping the entire party engaged.',
      icon: <MonitorPlay className="w-6 h-6 text-[#7B61FF]" />,
    },
    {
      title: 'Dedicated VR Marshals On-Site',
      desc: 'Our experienced technicians fit headsets comfortably, manage safety zones, adjust headstraps, and guide beginners through each game.',
      icon: <Users className="w-6 h-6 text-[#059669]" />,
    },
    {
      title: 'Extensive Curated Game Library',
      desc: 'Over 50+ age-appropriate titles ranging from gentle underwater discovery for kids to competitive e-sports simulations for corporate pros.',
      icon: <Gamepad2 className="w-6 h-6 text-[#D97706]" />,
    },
    {
      title: 'Hassle-Free Setup & Safety Boundaries',
      desc: 'We map virtual guardian boundary grids ensuring players never bump into walls, tables, or spectators during active gameplay.',
      icon: <ShieldCheck className="w-6 h-6 text-[#3B82F6]" />,
    },
    {
      title: 'Universal Appeal Across All Generations',
      desc: 'Loved by teenagers, children, parents, and corporate teams alike. Brings cutting-edge modern tech excitement to traditional celebrations.',
      icon: <Sparkles className="w-6 h-6 text-[#EC4899]" />,
    },
  ];

  const occasions = [
    {
      name: 'Corporate Meets & Tech Expos',
      desc: 'Draw crowds to your booth, reward high performers, and promote team camaraderie with multiplayer VR challenges.',
      badge: 'Corporate Favorite'
    },
    {
      name: 'Kids & Teen Birthday Bashes',
      desc: 'Treat gamers to the ultimate futuristic birthday zone with lightsabers, archery tournaments, and VR coaster thrills.',
      badge: 'Birthday Hit'
    },
    {
      name: 'College Fests & Sports Days',
      desc: 'Attract students with high-score leaderboards, competitive time trials, and crowd-drawing spectator displays.',
      badge: 'Youth & Fests'
    },
    {
      name: 'Private Cocktails & Family Days',
      desc: 'Provide sophisticated interactive entertainment that keeps both younger cousins and senior executives laughing together.',
      badge: 'Social Gatherings'
    }
  ];

  const faqs = [
    {
      q: 'How far in advance should I book 7Delights vr-games for my event?',
      a: 'To ensure maximum availability of vr-games & equipment, we recommend booking at least 1 to 6 weeks in advance for social parties & corporate events, and 3 to 6 months in advance for major weddings or large-scale corporate launches. However, if you have a last-minute request, contact us & we will do our best to make it happen!'
    },
    {
      q: 'How long does it take for your team to set up?',
      a: 'Setup times vary by service. Vr-games or a single interactive stall may take 1 to 2 hours. We always coordinate directly with the venue to ensure everything is flawlessly set up well before your first guest arrives.'
    },
    {
      q: 'What is your payment policy?',
      a: 'To secure your date, artists, and materials, we require an advance payment upon signing the contract. The remaining balance is structured into milestones leading up to, or on the day of the event.'
    },
    {
      q: 'Do guests experience motion sickness with VR?',
      a: 'We carefully curate comfort-rated games with high frame rates and teleportation / stationary gameplay mechanics (like Beat Saber and Archery) so guests of all ages enjoy crystal-clear immersion with zero nausea.'
    },
    {
      q: 'What space and power are required on-site?',
      a: 'Each VR station requires an approximately 8x8 ft clear floor space, a standard 5A/15A electric plug socket, and a table if TV mirroring display is requested. We provide all cables, extension boxes, and headset batteries.'
    }
  ];

  const galleryImages = [
    {
      src: '/assets/vr-games-main.webp',
      title: 'Immersive VR Gameplay',
      desc: 'Participants fully engaged in 6-DOF virtual realities'
    },
    {
      src: '/assets/vr-games-zone.webp',
      title: 'Dedicated VR Zone Setup',
      desc: 'Organized arena with tracking marshals and display feeds'
    },
    {
      src: '/assets/vr-games-2.webp',
      title: 'Family & Kids VR Fun',
      desc: 'Accessible virtual experiences tailored for all age groups'
    },
    {
      src: '/assets/vr-games-3.webp',
      title: 'Spectator Crowd Excitement',
      desc: 'Guests cheering friends as they conquer virtual worlds'
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
            <a href="#amusements-games" className="hover:text-[#EE3775] transition-colors">Amusements &amp; Games</a>
            <span>/</span>
            <span className="text-[#111A2E] font-semibold">VR Games</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            {/* Left Content Column */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FFE8ED] border border-[#FFD0DB] text-[#EE3775] text-xs md:text-sm font-semibold tracking-wide">
                <Glasses className="w-4 h-4" />
                <span>Futuristic 6-DOF Virtual Reality Gaming Zone</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#111A2E] tracking-tight leading-tight">
                VR Games Zone Planners for <span className="text-[#EE3775]">Events in Bangalore</span>
              </h1>

              <p className="text-base sm:text-lg text-[#5A6E85] leading-relaxed">
                Step into the future of entertainment! 7Delights brings cutting-edge Virtual Reality gaming zones straight to your party or corporate event in Bengaluru. From rollercoasters and Beat Saber to sports simulations, transport your guests into thrilling worlds of wonder.
              </p>

              {/* Key Highlights Pill Row */}
              <div className="flex flex-wrap gap-3 pt-2">
                <div className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white border border-[#F5E6EC] shadow-sm text-xs sm:text-sm text-[#111A2E] font-medium">
                  <Clock className="w-4 h-4 text-[#EE3775]" />
                  <span>Duration: <strong>2 to 3 Hours</strong></span>
                </div>
                <div className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white border border-[#F5E6EC] shadow-sm text-xs sm:text-sm text-[#111A2E] font-medium">
                  <MapPin className="w-4 h-4 text-[#059669]" />
                  <span>Available Across <strong>All Bangalore</strong></span>
                </div>
                <div className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white border border-[#F5E6EC] shadow-sm text-xs sm:text-sm text-[#111A2E] font-medium">
                  <MonitorPlay className="w-4 h-4 text-[#7B61FF]" />
                  <span>Includes <strong>4K Headsets &amp; Marshals</strong></span>
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
                  href="https://wa.me/919980029977?text=Hi%207Delights,%20I'm%20interested%20in%20booking%20the%20VR%20Games%20Zone%20for%20my%20event."
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
                  src="/assets/vr-games-banner.webp"
                  alt="VR Games Zone Setup for Events in Bangalore"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  onError={(e) => {
                    e.currentTarget.src = '/assets/vr-games-main.webp';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#111A2E]/70 via-transparent to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#EE3775] text-xs font-bold uppercase tracking-wider mb-1">
                    Metaverse VR Arena
                  </div>
                  <p className="text-sm font-medium text-white/95">
                    High-Definition Headsets, Spatial Audio &amp; Interactive Marshals
                  </p>
                </div>
              </div>

              {/* Float Badge */}
              <div className="absolute -bottom-5 -left-5 bg-white p-3.5 rounded-xl shadow-xl border border-[#F5E6EC] hidden sm:flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-[#FFE8ED] flex items-center justify-center text-[#EE3775]">
                  <Zap className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-[#5A6E85] font-medium">Futuristic Attraction</div>
                  <div className="text-sm font-bold text-[#111A2E]">50+ Top VR Titles</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. ABOUT VR GAMING SECTION */}
      <section className="py-14 md:py-18 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Image display */}
            <div className="lg:col-span-5">
              <div className="relative rounded-2xl overflow-hidden shadow-lg border border-[#F5E6EC]">
                <img
                  src="/assets/vr-games-main.webp"
                  alt="Guest playing VR Game at Event"
                  className="w-full h-auto object-cover"
                />
                <div className="p-4 bg-[#FFFDF9] border-t border-[#F5E6EC]">
                  <div className="flex items-center justify-between text-xs sm:text-sm">
                    <span className="font-semibold text-[#111A2E]">Standard Package Setup:</span>
                    <span className="font-bold text-[#EE3775]">2 to 3 Hours Duration</span>
                  </div>
                  <p className="text-xs text-[#5A6E85] mt-1">
                    *Requirements from organizer: A table &amp; electric socket. (Attracts additional charges for extra hours)
                  </p>
                </div>
              </div>
            </div>

            {/* Content Details */}
            <div className="lg:col-span-7 space-y-5">
              <div className="inline-block text-xs uppercase tracking-wider font-bold text-[#EE3775] bg-[#FFE8ED] px-3 py-1 rounded-md">
                About VR Gaming
              </div>

              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#111A2E] leading-snug">
                Step Into Another Dimension with Realistic Virtual Reality Simulation
              </h2>

              <p className="text-base text-[#5A6E85] leading-relaxed">
                Virtual Reality isn't just gaming—it's an unforgettable personal adventure. The moment your guests slip on the lightweight headset, they are instantly transported onto high-altitude rollercoasters, soaring across virtual skies, or slicing lightsabers to pumping techno beats!
              </p>

              <p className="text-base text-[#5A6E85] leading-relaxed">
                Our VR gaming setups create a huge buzz at any celebration. With external TV screen mirroring, spectators gather around, cheering on friends and laughing at hilarious real-world reactions, creating double the entertainment value!
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-3">
                <div className="flex items-start gap-2.5 p-3 rounded-lg bg-[#FFFDF9] border border-[#F5E6EC]">
                  <CheckCircle className="w-5 h-5 text-[#059669] shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm text-[#111A2E] font-medium">State-of-the-art 4K VR headsets with 6-DOF tracking</span>
                </div>
                <div className="flex items-start gap-2.5 p-3 rounded-lg bg-[#FFFDF9] border border-[#F5E6EC]">
                  <CheckCircle className="w-5 h-5 text-[#059669] shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm text-[#111A2E] font-medium">Sanitized equipment &amp; single-use hygiene masks</span>
                </div>
                <div className="flex items-start gap-2.5 p-3 rounded-lg bg-[#FFFDF9] border border-[#F5E6EC]">
                  <CheckCircle className="w-5 h-5 text-[#059669] shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm text-[#111A2E] font-medium">Friendly technical staff assisting every guest smoothly</span>
                </div>
                <div className="flex items-start gap-2.5 p-3 rounded-lg bg-[#FFFDF9] border border-[#F5E6EC]">
                  <CheckCircle className="w-5 h-5 text-[#059669] shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm text-[#111A2E] font-medium">Games tailored from gentle toddler fun to thrilling action</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. POPULAR VR EXPERIENCES */}
      <section className="py-14 md:py-18 bg-[#FFF8FA] border-y border-[#F5E6EC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs uppercase tracking-wider font-bold text-[#EE3775] bg-white px-3 py-1 rounded-md border border-[#F5E6EC]">
              Featured Simulations
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#111A2E] mt-3">
              Top Rated VR Games in Our Library
            </h2>
            <p className="text-sm sm:text-base text-[#5A6E85] mt-2">
              Our diverse catalog of high-adrenaline and interactive simulations ensures there is something unforgettable for every single guest.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {vrExperiences.map((exp, idx) => (
              <div 
                key={idx} 
                className="bg-white rounded-2xl overflow-hidden border border-[#F5E6EC] shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
              >
                <div>
                  <div className="aspect-[16/10] overflow-hidden bg-gray-100">
                    <img 
                      src={exp.image} 
                      alt={exp.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" 
                    />
                  </div>
                  <div className="p-5">
                    <span className={`inline-block text-xs font-bold px-2.5 py-1 rounded-full border mb-3 ${exp.color}`}>
                      {exp.tag}
                    </span>
                    <h3 className="text-lg font-bold text-[#111A2E] mb-2">{exp.title}</h3>
                    <p className="text-xs sm:text-sm text-[#5A6E85] leading-relaxed">{exp.desc}</p>
                  </div>
                </div>
                <div className="px-5 pb-5 pt-2 border-t border-[#F5E6EC] flex items-center justify-between text-xs font-semibold text-[#EE3775]">
                  <span>6-DOF Full Immersion</span>
                  <CheckCircle className="w-4 h-4" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. OCCASIONS GRID */}
      <section className="py-14 md:py-18 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs uppercase tracking-wider font-bold text-[#EE3775] bg-[#FFE8ED] px-3 py-1 rounded-md">
              Perfect For Any Occasion
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#111A2E] mt-3">
              Where VR Gaming Creates the Biggest Sensation
            </h2>
            <p className="text-sm sm:text-base text-[#5A6E85] mt-2">
              Transforming birthdays, corporate tech summits, and social celebrations across Bangalore.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {occasions.map((occ, idx) => (
              <div 
                key={idx}
                className="p-6 rounded-2xl bg-[#FFFDF9] border border-[#F5E6EC] hover:border-[#EE3775]/40 transition-all flex flex-col justify-between"
              >
                <div>
                  <span className="inline-block text-xs font-bold px-2.5 py-1 rounded-full bg-[#FFE8ED] text-[#EE3775] mb-3">
                    {occ.badge}
                  </span>
                  <h3 className="text-base font-bold text-[#111A2E] mb-2">{occ.name}</h3>
                  <p className="text-xs sm:text-sm text-[#5A6E85] leading-relaxed">{occ.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. SPECIALTIES & WHY 7DELIGHTS */}
      <section className="py-14 md:py-18 bg-[#FFF8FA] border-y border-[#F5E6EC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs uppercase tracking-wider font-bold text-[#EE3775] bg-white px-3 py-1 rounded-md border border-[#F5E6EC]">
              Specialties of VR Gaming
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#111A2E] mt-3">
              Why 7Delights is Bangalore's Best for VR Gaming
            </h2>
            <p className="text-sm sm:text-base text-[#5A6E85] mt-2">
              We eliminate technical snags, provide top-tier hardware, and ensure every guest steps into the virtual realm safely and with immense joy.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feat, idx) => (
              <div 
                key={idx}
                className="p-6 rounded-2xl bg-white border border-[#F5E6EC] hover:border-[#EE3775]/40 transition-all shadow-sm"
              >
                <div className="w-12 h-12 rounded-xl bg-[#FFFDF9] border border-[#F5E6EC] flex items-center justify-center mb-4">
                  {feat.icon}
                </div>
                <h3 className="text-base sm:text-lg font-bold text-[#111A2E] mb-2">{feat.title}</h3>
                <p className="text-xs sm:text-sm text-[#5A6E85] leading-relaxed">{feat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. PHOTO GALLERY & VIDEO SECTION */}
      <section className="py-14 md:py-18 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs uppercase tracking-wider font-bold text-[#EE3775] bg-[#FFE8ED] px-3 py-1 rounded-md">
              Gallery &amp; Demo
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#111A2E] mt-3">
              VR Gaming Action in Bangalore
            </h2>
            <p className="text-sm sm:text-base text-[#5A6E85] mt-2">
              Browse actual photographs of our VR zones and watch how attendees get captivated by virtual worlds.
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
                      e.currentTarget.src = '/assets/vr-games-main.webp';
                    }}
                  />
                </div>
                <div className="p-4 bg-[#FFFDF9]">
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
                  <h3 className="text-sm sm:text-base font-bold text-[#111A2E]">Watch VR Gaming Video</h3>
                  <p className="text-xs text-[#5A6E85]">See guests laughing, dodging, and experiencing high-adrenaline VR fun</p>
                </div>
              </div>
            </div>
            
            <div className="relative rounded-xl overflow-hidden aspect-video bg-black/5 shadow-inner">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/2vwV_BuqapU?rel=0"
                title="VR Gaming Zone by 7Delights Bangalore"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* 7. FAQ SECTION */}
      <section className="py-14 md:py-18 bg-[#FFF8FA] border-t border-[#F5E6EC]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <span className="text-xs uppercase tracking-wider font-bold text-[#EE3775] bg-white px-3 py-1 rounded-md border border-[#F5E6EC]">
              Got Questions?
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#111A2E] mt-3">
              Frequently Asked Questions
            </h2>
            <p className="text-sm sm:text-base text-[#5A6E85] mt-2">
              Everything you need to know about setting up a VR Gaming Zone for your celebration.
            </p>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="border border-[#F5E6EC] rounded-xl overflow-hidden bg-white transition-colors"
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
                  <div className="px-5 pb-4 pt-1 text-xs sm:text-sm text-[#5A6E85] leading-relaxed border-t border-[#F5E6EC]/60 bg-[#FFFDF9]">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. BOTTOM CALL TO ACTION STRIP */}
      <section className="bg-gradient-to-r from-[#111A2E] to-[#1C2B4B] text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
            <div>
              <h3 className="text-xl sm:text-2xl font-bold tracking-tight">
                Ready to Step Into the Virtual World at Your Event?
              </h3>
              <p className="text-sm text-gray-300 mt-1 max-w-xl">
                Get an instant quote for 1 to 4+ VR headsets, spectator screens, safety boundaries, and technicians across Bangalore.
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
                href="https://wa.me/919980029977?text=Hi%207Delights,%20I'm%20planning%20an%20event%20and%20want%20to%20book%20a%20VR%20Games%20Zone."
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

