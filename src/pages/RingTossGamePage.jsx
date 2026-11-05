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
  Gift, 
  Target, 
  Award, 
  Star, 
  Users, 
  Trophy 
} from 'lucide-react';

export default function RingTossGamePage() {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const giftPrizes = [
    {
      title: 'Plush & Soft Toys',
      desc: 'Fluffy teddy bears, cartoon character soft toys, and cuddly animal plushes that kids and teenagers love winning.',
      tag: 'Kids Favorite',
      color: 'bg-[#FFE8ED] text-[#EE3775] border-[#FFD0DB]'
    },
    {
      title: 'Chocolates & Treat Boxes',
      desc: 'Assorted chocolate gift packs, cookies, and delicious candy hampers placed at targeted peg distances for instant gratification.',
      tag: 'Sweet Delights',
      color: 'bg-[#FFF3DF] text-[#D97706] border-[#FFE4B8]'
    },
    {
      title: 'Stationery & Board Games',
      desc: 'Exciting puzzle games, colorful stationery kits, art supplies, and activity craft hampers suitable for school-goers.',
      tag: 'Family Gifts',
      color: 'bg-[#F2EDFF] text-[#7B61FF] border-[#E0D5FF]'
    },
    {
      title: 'Customized Branded Rewards',
      desc: 'Custom corporate giveaways, branded accessories, and novelty souvenirs customized specifically for your brand or event theme.',
      tag: 'Corporate & Theme',
      color: 'bg-[#E3F8F2] text-[#059669] border-[#C1F1E1]'
    },
  ];

  const features = [
    {
      title: 'High-Quality Rings & Durable Pegs',
      desc: 'We provide perfectly weighted, safe-to-toss rings and sturdy target pegs or display racks that give smooth throwing aerodynamics.',
      icon: <Target className="w-6 h-6 text-[#EE3775]" />,
    },
    {
      title: 'Exciting On-Site Gifts & Prizes',
      desc: 'Every game session gives players multiple chances to hoop winning pegs and walk away with real branded gifts, toys, and chocolates.',
      icon: <Gift className="w-6 h-6 text-[#7B61FF]" />,
    },
    {
      title: 'Customizable Difficulty & Distances',
      desc: 'Game boundaries and throwing lines are easily adjusted to ensure fair play and fun challenges for both toddlers and competitive adults.',
      icon: <Trophy className="w-6 h-6 text-[#D97706]" />,
    },
    {
      title: 'Energetic Stall Coordinator Included',
      desc: 'Our lively game coordinator manages queues, explains rules, cheers players, awards gifts, and keeps guests smiling throughout.',
      icon: <Users className="w-6 h-6 text-[#059669]" />,
    },
    {
      title: 'Quick & Hassle-Free Setup',
      desc: 'Requires only a standard table from the organizer. Our crew arrives early, dresses the stall in festive fabrics, and handles post-event packing.',
      icon: <ShieldCheck className="w-6 h-6 text-[#3B82F6]" />,
    },
    {
      title: 'Universal Appeal Across All Ages',
      desc: 'From toddlers tossing at nearby prizes to parents and colleagues showing off precision aim, ring toss is a surefire carnival crowd-puller.',
      icon: <Sparkles className="w-6 h-6 text-[#EC4899]" />,
    },
  ];

  const faqs = [
    {
      q: 'How far in advance should I book 7Delights ring toss game for my event?',
      a: 'To ensure maximum availability of ring toss game & equipment, we recommend booking at least 1 to 6 weeks in advance for social parties & corporate events, and 3 to 6 months in advance for major weddings or large-scale corporate launches. However, if you have a last-minute request, contact us & we will do our best to make it happen!'
    },
    {
      q: 'How long does it take for your team to set up?',
      a: 'Setup times vary by service. Ring toss game setup or a single interactive stall may take 1 to 2 hours. We always coordinate directly with the venue to ensure everything is flawlessly set up well before your first guest arrives.'
    },
    {
      q: 'What is your payment policy?',
      a: 'To secure your date, artists, and materials, we require an advance payment upon signing the contract. The remaining balance is structured into milestones leading up to, or on the day of the event.'
    },
    {
      q: 'What are the basic organizer requirements on-site?',
      a: 'We only require a standard 6-ft or 4-ft banquet table with clean tablecloth, and a clear tossing space of approximately 8x8 feet so participants have ample standing room.'
    },
    {
      q: 'Are gifts and chocolates included with the Ring Toss stall?',
      a: 'Yes! Our standard packages can come equipped with an assortment of attractive prizes, chocolates, soft toys, and novelties. We can also accommodate custom branded gifts provided by you or procured as per your theme.'
    }
  ];

  const galleryImages = [
    {
      src: '/assets/ring-game-main.webp',
      title: 'Exciting Ring Throwing Stall',
      desc: 'Kids eagerly participating at the gift-laden table setup'
    },
    {
      src: '/assets/ring-game-gifts.webp',
      title: 'Ring Game With Gifts Galore',
      desc: 'Attractive prize packages and chocolates ready to be won'
    },
    {
      src: '/assets/ring-games-2.webp',
      title: 'Precision Tossing Fun',
      desc: 'Fun carnival competition engaging kids and elders alike'
    },
    {
      src: '/assets/ring-games-3.webp',
      title: 'Happy Winners with Prizes',
      desc: 'Instant smiles as guests score rings over their favorite goodies'
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
            <span className="text-[#111A2E] font-semibold">Ring Toss Game</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            {/* Left Content Column */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FFE8ED] border border-[#FFD0DB] text-[#EE3775] text-xs md:text-sm font-semibold tracking-wide">
                <Target className="w-4 h-4" />
                <span>Classic Carnival Skill Game &amp; Gift Stall</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#111A2E] tracking-tight leading-tight">
                Ring Toss Game Planners for <span className="text-[#EE3775]">Events in Bangalore</span>
              </h1>

              <p className="text-base sm:text-lg text-[#5A6E85] leading-relaxed">
                Bring timeless carnival excitement and healthy competitive cheer to your celebration! With 7Delights Ring Toss Game, players aim rings over coveted prizes, novelty gifts, chocolates, and soft toys for an unforgettable, rewarding live event experience.
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
                  <Gift className="w-4 h-4 text-[#7B61FF]" />
                  <span>Includes <strong>Exciting Gifts &amp; Coordinator</strong></span>
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
                  href="https://wa.me/919980029977?text=Hi%207Delights,%20I'm%20interested%20in%20booking%20the%20Ring%20Toss%20Game%20Stall%20for%20my%20event."
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
                  src="/assets/ring-games-banner.webp"
                  alt="Ring Toss Game Setup for Events in Bangalore"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  onError={(e) => {
                    e.currentTarget.src = '/assets/ring-game-main.webp';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#111A2E]/70 via-transparent to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#EE3775] text-xs font-bold uppercase tracking-wider mb-1">
                    Live Gift Stall
                  </div>
                  <p className="text-sm font-medium text-white/95">
                    Classic Hoop Toss with Branded Goodies &amp; Toys
                  </p>
                </div>
              </div>

              {/* Float Badge */}
              <div className="absolute -bottom-5 -left-5 bg-white p-3.5 rounded-xl shadow-xl border border-[#F5E6EC] hidden sm:flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-[#FFE8ED] flex items-center justify-center text-[#EE3775]">
                  <Trophy className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-[#5A6E85] font-medium">Crowd Engagement</div>
                  <div className="text-sm font-bold text-[#111A2E]">100% Fun Guaranteed</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. ABOUT RING TOSS GAME SECTION */}
      <section className="py-14 md:py-18 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Image display */}
            <div className="lg:col-span-5">
              <div className="relative rounded-2xl overflow-hidden shadow-lg border border-[#F5E6EC]">
                <img
                  src="/assets/ring-game-main.webp"
                  alt="Kids Playing Ring Toss at Event"
                  className="w-full h-auto object-cover"
                />
                <div className="p-4 bg-[#FFFDF9] border-t border-[#F5E6EC]">
                  <div className="flex items-center justify-between text-xs sm:text-sm">
                    <span className="font-semibold text-[#111A2E]">Standard Package Setup:</span>
                    <span className="font-bold text-[#EE3775]">2 to 3 Hours Duration</span>
                  </div>
                  <p className="text-xs text-[#5A6E85] mt-1">
                    *Requirement from organizers: Only 1 Table. (Attracts additional charges for extra hours)
                  </p>
                </div>
              </div>
            </div>

            {/* Content Details */}
            <div className="lg:col-span-7 space-y-5">
              <div className="inline-block text-xs uppercase tracking-wider font-bold text-[#EE3775] bg-[#FFE8ED] px-3 py-1 rounded-md">
                About The Attraction
              </div>

              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#111A2E] leading-snug">
                The Timeless All-Age Attraction That Keeps Guests Coming Back
              </h2>

              <p className="text-base text-[#5A6E85] leading-relaxed">
                The Throwing Rings Game is as traditional and entertaining as it is engaging for everyone, regardless of age. The goal for participants is to throw rings over pegs or around certain objects that lead to exciting, interesting prizes. It is a fantastic feature for birthday parties, school fairs, family days, and corporate carnivals—delivering healthy competition and smiles all around.
              </p>

              <p className="text-base text-[#5A6E85] leading-relaxed">
                People of different age groups love putting their aim and hand-eye coordination to the test. Winning coveted chocolates or plush toys live on the spot makes every successful toss a moment of sheer celebration.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-3">
                <div className="flex items-start gap-2.5 p-3 rounded-lg bg-[#FFFDF9] border border-[#F5E6EC]">
                  <CheckCircle className="w-5 h-5 text-[#059669] shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm text-[#111A2E] font-medium">Safe lightweight rings suited for small hands and adults</span>
                </div>
                <div className="flex items-start gap-2.5 p-3 rounded-lg bg-[#FFFDF9] border border-[#F5E6EC]">
                  <CheckCircle className="w-5 h-5 text-[#059669] shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm text-[#111A2E] font-medium">Vibrant table decor with organized gift prize displays</span>
                </div>
                <div className="flex items-start gap-2.5 p-3 rounded-lg bg-[#FFFDF9] border border-[#F5E6EC]">
                  <CheckCircle className="w-5 h-5 text-[#059669] shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm text-[#111A2E] font-medium">Trained stall operator managing throws &amp; awarding prizes</span>
                </div>
                <div className="flex items-start gap-2.5 p-3 rounded-lg bg-[#FFFDF9] border border-[#F5E6EC]">
                  <CheckCircle className="w-5 h-5 text-[#059669] shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm text-[#111A2E] font-medium">Zero power requirement — 100% hassle-free venue setup</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. GIFT PRIZES CATEGORIES */}
      <section className="py-14 md:py-18 bg-[#FFF8FA] border-y border-[#F5E6EC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs uppercase tracking-wider font-bold text-[#EE3775] bg-white px-3 py-1 rounded-md border border-[#F5E6EC]">
              Exciting Rewards
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#111A2E] mt-3">
              Ring Game with Gifts &amp; Prizes
            </h2>
            <p className="text-sm sm:text-base text-[#5A6E85] mt-2">
              Our Ring Game with Gifts at 7Delights is designed to be both fun and rewarding. We offer high-quality rings, durable pegs, and a wide selection of curated items for winners.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {giftPrizes.map((gift, idx) => (
              <div 
                key={idx} 
                className="bg-white rounded-2xl p-6 border border-[#F5E6EC] shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
              >
                <div>
                  <span className={`inline-block text-xs font-bold px-2.5 py-1 rounded-full border mb-4 ${gift.color}`}>
                    {gift.tag}
                  </span>
                  <h3 className="text-lg font-bold text-[#111A2E] mb-2">{gift.title}</h3>
                  <p className="text-xs sm:text-sm text-[#5A6E85] leading-relaxed">{gift.desc}</p>
                </div>
                <div className="pt-4 mt-4 border-t border-[#F5E6EC] flex items-center gap-1.5 text-xs font-semibold text-[#EE3775]">
                  <CheckCircle className="w-3.5 h-3.5" />
                  <span>Provided Ready at Stall</span>
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
              Specialties of Ring Game
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#111A2E] mt-3">
              Why 7Delights is Bangalore's Best for Ring Games
            </h2>
            <p className="text-sm sm:text-base text-[#5A6E85] mt-2">
              From birthday bashes to high-profile corporate family days, our experienced setup crew ensures a seamless, joy-filled experience for every guest.
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
              Ring Toss Game in Action
            </h2>
            <p className="text-sm sm:text-base text-[#5A6E85] mt-2">
              Browse actual photographs of our Ring Game stalls and watch how our games keep energy levels soaring.
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
                      e.currentTarget.src = '/assets/ring-game-main.webp';
                    }}
                  />
                </div>
                <div className="p-4">
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
                  <h3 className="text-sm sm:text-base font-bold text-[#111A2E]">Watch Ring Throwing Game Video</h3>
                  <p className="text-xs text-[#5A6E85]">See how kids and guests enjoy the thrill of winning live prizes</p>
                </div>
              </div>
            </div>
            
            <div className="relative rounded-xl overflow-hidden aspect-video bg-black/5 shadow-inner">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/m3z2RTSmAQU?rel=0"
                title="Ring Throwing Game by 7Delights Bangalore"
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
              Everything you need to know about booking our Ring Toss Game for your celebration.
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
                Ready to Book Ring Toss Game for Your Event?
              </h3>
              <p className="text-sm text-gray-300 mt-1 max-w-xl">
                Get an instant quote with complete stall setup, prizes, and energetic coordinators across Bangalore.
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
                href="https://wa.me/919980029977?text=Hi%207Delights,%20I%20want%20to%20reserve%20a%20Ring%20Toss%20Game%20stall%20for%20my%20event."
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
