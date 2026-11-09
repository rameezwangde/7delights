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
  Target, 
  Award, 
  Star, 
  Users, 
  Trophy, 
  Crosshair,
  Gift
} from 'lucide-react';

export default function BalloonShootingPage() {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const features = [
    {
      title: 'Precision Airguns & Safe Cork Darts',
      desc: 'Authentic carnival air rifles using lightweight safety corks / soft pellets with smooth reload mechanisms suited for teens and adults.',
      icon: <Crosshair className="w-6 h-6 text-[#EE3775]" />,
    },
    {
      title: 'Colorful Balloon Target Board',
      desc: 'Densely populated boards featuring rows of vibrant latex balloons, refreshed continually by our staff for endless popping fun.',
      icon: <Target className="w-6 h-6 text-[#7B61FF]" />,
    },
    {
      title: 'Exciting Goodies & Spot Giveaways',
      desc: 'Participants scoring clean bursts earn spot chocolates, gifts, or novelty prizes, adding authentic fairground reward thrills.',
      icon: <Gift className="w-6 h-6 text-[#D97706]" />,
    },
    {
      title: 'Dedicated Range Safety Marshal',
      desc: 'Our trained coordinator instructs players on stance, manages the firing line, handles reloading, and maintains 100% attendee safety.',
      icon: <ShieldCheck className="w-6 h-6 text-[#059669]" />,
    },
    {
      title: 'Quick & Compact Stall Setup',
      desc: 'Requires only a standard table and backdrop wall. Delivered, decorated, and fully installed 1 to 2 hours prior to your event start.',
      icon: <Clock className="w-6 h-6 text-[#3B82F6]" />,
    },
    {
      title: 'Nostalgic Fun for All Generations',
      desc: 'Kids love checking their marksmanship, while parents and elders relive sweet childhood mela memories of popping balloons at carnival fairs.',
      icon: <Sparkles className="w-6 h-6 text-[#EC4899]" />,
    },
  ];

  const highlights = [
    {
      title: 'Childhood Nostalgia for Adults',
      desc: 'Relive vintage fairground festivals with the satisfying pop of balloons and lighthearted shooting contests.',
      tag: 'Nostalgic Hit',
      color: 'bg-[#FFE8ED] text-[#EE3775] border-[#FFD0DB]'
    },
    {
      title: 'Marksmanship for Kids & Teens',
      desc: 'Build focus, hand-eye coordination, and aim in an encouraging, controlled environment guided by our range marshals.',
      tag: 'Skill Building',
      color: 'bg-[#FFF3DF] text-[#D97706] border-[#FFE4B8]'
    },
    {
      title: 'Instant Rewards & Chocolates',
      desc: 'Spot prizes for bursting 3 or 5 consecutive balloons keep energy high and create exciting friendly rivalries.',
      tag: 'Spot Prizes',
      color: 'bg-[#E3F8F2] text-[#059669] border-[#C1F1E1]'
    },
    {
      title: 'Flawless Venue Integration',
      desc: 'Compact footprint suits indoor banquet halls, outdoor garden lawns, school sports grounds, and clubhouses.',
      tag: 'Versatile Setup',
      color: 'bg-[#F2EDFF] text-[#7B61FF] border-[#E0D5FF]'
    },
  ];

  const faqs = [
    {
      q: 'How far in advance should I book 7Delights balloon shooting for my event?',
      a: 'To ensure maximum availability of balloon shooting & equipment, we recommend booking at least 1 to 6 weeks in advance for social parties & corporate events, and 3 to 6 months in advance for major weddings or large-scale corporate launches. However, if you have a last-minute request, contact us & we will do our best to make it happen!'
    },
    {
      q: 'How long does it take for your team to set up?',
      a: 'Setup times vary by service. Balloon shooting or a single interactive stall may take 1 to 2 hours. We always coordinate directly with the venue to ensure everything is flawlessly set up well before your first guest arrives.'
    },
    {
      q: 'What is your payment policy?',
      a: 'To secure your date, artists, and materials, we require an advance payment upon signing the contract. The remaining balance is structured into milestones leading up to, or on the day of the event.'
    },
    {
      q: 'Is the balloon shooting stall completely safe for children?',
      a: 'Yes, 100%. We use specialized low-velocity carnival airguns firing safe corks or soft pellets with an enclosed backstop. Our trained marshal oversees every single shot and assists younger kids closely.'
    },
    {
      q: 'What are the basic organizer requirements on-site?',
      a: 'Organizers only need to provide a standard banquet table (approx. 4 to 6 ft) and a designated shooting corridor (approx. 10 to 12 feet depth) against a wall or backdrop. Zero power required!'
    }
  ];

  const galleryImages = [
    {
      src: '/assets/balloon-shooting-main.webp',
      title: 'Live Balloon Shooting Stall',
      desc: 'Excited participants aiming at the colorful balloon board'
    },
    {
      src: '/assets/balloon-shooting-events.webp',
      title: 'Target Practice for All Ages',
      desc: 'Guided shooting range supervised by our trained staff'
    },
    {
      src: '/assets/balloon-shooting-1.webp',
      title: 'Vibrant Balloon Grid',
      desc: 'Freshly inflated balloon displays refreshed continuously'
    },
    {
      src: '/assets/balloon-shooting-2.webp',
      title: 'Winner Smiles & Goodies',
      desc: 'Guests celebrating successful shots with spot rewards'
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
            <span className="text-[#111A2E] font-semibold">Balloon Shooting</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            {/* Left Content Column */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FFE8ED] border border-[#FFD0DB] text-[#EE3775] text-xs md:text-sm font-semibold tracking-wide">
                <Crosshair className="w-4 h-4" />
                <span>Classic Carnival Airgun Skill Stall</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#111A2E] tracking-tight leading-tight">
                Balloon Shooting Planners for <span className="text-[#EE3775]">Events in Bangalore</span>
              </h1>

              <p className="text-base sm:text-lg text-[#5A6E85] leading-relaxed">
                Relive the exhilarating rush of fairground festivals! 7Delights brings classic Balloon Shooting stalls straight to your birthday party, school fest, or corporate carnival in Bengaluru. Test your marksman aim, pop colorful balloons, and celebrate instant winner rewards.
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
                  <ShieldCheck className="w-4 h-4 text-[#7B61FF]" />
                  <span>Safe Setup: <strong>Cork Guns &amp; Marshal</strong></span>
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
                  href="https://wa.me/919980029977?text=Hi%207Delights,%20I'm%20interested%20in%20booking%20the%20Balloon%20Shooting%20stall%20for%20my%20event."
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
                  src="/assets/balloon-shooting-banner.webp"
                  alt="Balloon Shooting Stall Setup in Bangalore"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  onError={(e) => {
                    e.currentTarget.src = '/assets/balloon-shooting-main.webp';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#111A2E]/70 via-transparent to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#EE3775] text-xs font-bold uppercase tracking-wider mb-1">
                    Live Carnival Stall
                  </div>
                  <p className="text-sm font-medium text-white/95">
                    Safe Air Rifles, Multi-Colored Target Boards &amp; Gifts
                  </p>
                </div>
              </div>

              {/* Float Badge */}
              <div className="absolute -bottom-5 -left-5 bg-white p-3.5 rounded-xl shadow-xl border border-[#F5E6EC] hidden sm:flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-[#FFE8ED] flex items-center justify-center text-[#EE3775]">
                  <Trophy className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-[#5A6E85] font-medium">Nostalgic Fair Attraction</div>
                  <div className="text-sm font-bold text-[#111A2E]">Loved by All Ages</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. ABOUT BALLOON SHOOTING SECTION */}
      <section className="py-14 md:py-18 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Image display */}
            <div className="lg:col-span-5">
              <div className="relative rounded-2xl overflow-hidden shadow-lg border border-[#F5E6EC]">
                <img
                  src="/assets/balloon-shooting-main.webp"
                  alt="Balloon Shooting stall at event"
                  className="w-full h-auto object-cover"
                />
                <div className="p-4 bg-[#FFFDF9] border-t border-[#F5E6EC]">
                  <div className="flex items-center justify-between text-xs sm:text-sm">
                    <span className="font-semibold text-[#111A2E]">Standard Package Setup:</span>
                    <span className="font-bold text-[#EE3775]">2 to 3 Hours Duration</span>
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
                About Balloon Shooting
              </div>

              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#111A2E] leading-snug">
                The Timeless Marksmanship Stall That Draws Crowds and Cheers
              </h2>

              <p className="text-base text-[#5A6E85] leading-relaxed">
                Balloon Shooting is one of the most exciting and entertaining skill games for members of the entire family. Spectators shoot at colorful balloons with compressed airguns or soft darts; bursting them earns cheers, high fives, and goodies!
              </p>

              <p className="text-base text-[#5A6E85] leading-relaxed">
                7Delights has complete infrastructure that allows kids to test their shooting aim in a controlled, safe environment while helping grownups relive sweet childhood fantasies. Are you feeling nostalgic? Step right up to our shooting line!
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-3">
                <div className="flex items-start gap-2.5 p-3 rounded-lg bg-[#FFFDF9] border border-[#F5E6EC]">
                  <CheckCircle className="w-5 h-5 text-[#059669] shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm text-[#111A2E] font-medium">Safe compressed airguns firing soft safety pellets/corks</span>
                </div>
                <div className="flex items-start gap-2.5 p-3 rounded-lg bg-[#FFFDF9] border border-[#F5E6EC]">
                  <CheckCircle className="w-5 h-5 text-[#059669] shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm text-[#111A2E] font-medium">High-density balloon board constantly replenished</span>
                </div>
                <div className="flex items-start gap-2.5 p-3 rounded-lg bg-[#FFFDF9] border border-[#F5E6EC]">
                  <CheckCircle className="w-5 h-5 text-[#059669] shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm text-[#111A2E] font-medium">Attentive range marshal instructing proper grip and aim</span>
                </div>
                <div className="flex items-start gap-2.5 p-3 rounded-lg bg-[#FFFDF9] border border-[#F5E6EC]">
                  <CheckCircle className="w-5 h-5 text-[#059669] shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm text-[#111A2E] font-medium">Spot rewards, chocolates, or soft toys for winning shots</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. HIGHLIGHTS GRID */}
      <section className="py-14 md:py-18 bg-[#FFF8FA] border-y border-[#F5E6EC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs uppercase tracking-wider font-bold text-[#EE3775] bg-white px-3 py-1 rounded-md border border-[#F5E6EC]">
              Popular Appeal
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#111A2E] mt-3">
              What Makes Balloon Shooting So Popular?
            </h2>
            <p className="text-sm sm:text-base text-[#5A6E85] mt-2">
              Children love it because it’s straightforward and makes satisfying popping noises, while adults love the friendly competition.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((item, idx) => (
              <div 
                key={idx}
                className="bg-white rounded-2xl p-6 border border-[#F5E6EC] shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
              >
                <div>
                  <span className={`inline-block text-xs font-bold px-2.5 py-1 rounded-full border mb-4 ${item.color}`}>
                    {item.tag}
                  </span>
                  <p className="text-base font-bold text-[#111A2E] mb-2">{item.title}</p>
                  <p className="text-xs sm:text-sm text-[#5A6E85] leading-relaxed">{item.desc}</p>
                </div>
                <div className="pt-4 mt-4 border-t border-[#F5E6EC] flex items-center gap-1.5 text-xs font-semibold text-[#EE3775]">
                  <CheckCircle className="w-3.5 h-3.5" />
                  <span>Guaranteed Hit</span>
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
              Specialties &amp; Safety
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#111A2E] mt-3">
              Why Engage 7Delights for Balloon Shooting?
            </h2>
            <p className="text-sm sm:text-base text-[#5A6E85] mt-2">
              We guarantee 100% safety, high-grade equipment, cheerful decorations, and well-trained staff to entertain everyone seamlessly.
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
              Balloon Shooting Gallery
            </h2>
            <p className="text-sm sm:text-base text-[#5A6E85] mt-2">
              Browse actual photographs of our live shooting stalls across Bengaluru events.
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
                      e.currentTarget.src = '/assets/balloon-shooting-main.webp';
                    }}
                  />
                </div>
                <div className="p-4 bg-white">
                  <h3 className="text-sm font-bold text-[#111A2E] mb-1">{img.title}</h3>
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
                  <h3 className="text-sm sm:text-base font-bold text-[#111A2E]">Watch Balloon Shooting Video</h3>
                  <p className="text-xs text-[#5A6E85]">See players aiming, popping balloons, and celebrating good times</p>
                </div>
              </div>
            </div>
            
            <div className="relative rounded-xl overflow-hidden aspect-video bg-black/5 shadow-inner">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/m3z2RTSmAQU?rel=0"
                title="Balloon Shooting by 7Delights Bangalore"
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
              Everything you need to know about setting up a Balloon Shooting stall for your event.
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
                Ready to Book Balloon Shooting for Your Event?
              </h3>
              <p className="text-sm text-gray-300 mt-1 max-w-xl">
                Get an instant quote with complete stall setup, airguns, balloon boards, and safety marshals across Bangalore.
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
                href="https://wa.me/919980029977?text=Hi%207Delights,%20I'm%20planning%20an%20event%20and%20want%20to%20book%20a%20Balloon%20Shooting%20stall."
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

