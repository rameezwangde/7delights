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
  Award, 
  Star, 
  Users, 
  Trophy,
  Dices,
  CircleDollarSign,
  Flame,
  Crown
} from 'lucide-react';

export default function CasinoGamesPage() {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const casinoGames = [
    {
      title: 'Blackjack (21)',
      desc: 'Test your strategy, count your hand values, and try to beat the dealer without exceeding 21. Complete with authentic felt layout and shoe cards.',
      tag: 'Strategic Favorite',
      color: 'bg-[#FFE8ED] text-[#EE3775] border-[#FFD0DB]',
      image: '/assets/casino-black-jack.webp'
    },
    {
      title: 'Roulette Wheel',
      desc: 'Spin the glamorous wheel and try your luck! Place entertainment chips on inside numbers, red/black, or high/low on our genuine casino-grade table.',
      tag: 'Iconic Thrill',
      color: 'bg-[#FFF3DF] text-[#D97706] border-[#FFE4B8]',
      image: '/assets/casino-roulette.webp'
    },
    {
      title: 'Lucky 7 & Craps / Dice',
      desc: 'Fast-paced, high-energy betting action where guests wager on high, low, or lucky seven rolls with custom dice cages and felt grids.',
      tag: 'High Energy',
      color: 'bg-[#E3F8F2] text-[#059669] border-[#C1F1E1]',
      image: '/assets/casino-lucky-7.webp'
    },
    {
      title: 'Poker & Texas Hold’em',
      desc: 'From Texas Hold’em to classic 3-card poker, our dealers cater to casual players and poker enthusiasts alike with premium clay chips.',
      tag: 'VIP Table',
      color: 'bg-[#F2EDFF] text-[#7B61FF] border-[#E0D5FF]',
      image: '/assets/roulette.webp'
    },
  ];

  const features = [
    {
      title: 'Authentic Casino-Grade Equipment',
      desc: 'Heavy-duty tables, genuine green felt layouts, casino-grade chips, brass Roulette wheels, and dealer shoes creating a realistic Vegas mood.',
      icon: <CircleDollarSign className="w-6 h-6 text-[#EE3775]" />,
    },
    {
      title: 'Dressed Professional Dealers',
      desc: 'Polite, experienced croupiers in formal attire who guide beginners, explain betting rules, shuffle cards smoothly, and keep gameplay exciting.',
      icon: <Crown className="w-6 h-6 text-[#7B61FF]" />,
    },
    {
      title: '100% Fun Play — Zero Real Money',
      desc: 'Completely legal and compliant entertainment gaming played exclusively with fun customized play chips and prize vouchers for top winners.',
      icon: <ShieldCheck className="w-6 h-6 text-[#059669]" />,
    },
    {
      title: 'Customizable Multi-Table Setups',
      desc: 'Whether you need 1 table for an intimate celebration or a 6-table casino ballroom for a 500-guest corporate gala, we scale to match your venue.',
      icon: <Trophy className="w-6 h-6 text-[#D97706]" />,
    },
    {
      title: 'Complete On-Time Setup & Cleanup',
      desc: 'Our logistics team delivers, assembles, dresses, and tests all tables 1 to 2 hours before guests arrive, and packs up silently afterward.',
      icon: <Clock className="w-6 h-6 text-[#3B82F6]" />,
    },
    {
      title: 'Perfect for James Bond & Vegas Themes',
      desc: 'Elevate birthdays, bachelor parties, corporate annual meets, and product launches with an upscale, high-society interactive lounge vibe.',
      icon: <Sparkles className="w-6 h-6 text-[#EC4899]" />,
    },
  ];

  const occasions = [
    {
      name: 'Corporate Events & Annual Bashes',
      desc: 'Break the ice, foster team bonding, and reward employees with an upscale evening of friendly casino competition.',
      badge: 'B2B Favorite'
    },
    {
      name: 'Milestone Birthdays & Anniversaries',
      desc: 'Celebrate 30th, 40th, or 50th birthdays with a glamorous Monte Carlo or Las Vegas themed cocktail evening.',
      badge: 'VIP Parties'
    },
    {
      name: 'Fundraisers & Charity Galas',
      desc: 'Engage high-net-worth attendees, raise charity contributions through novelty chip sales, and reward top players.',
      badge: 'Charity & Galas'
    },
    {
      name: 'Bachelor & Cocktail Nights',
      desc: 'Add high-roller flair with dedicated croupiers, poker tables, and casino challenges that keep friends laughing all night.',
      badge: 'Celebrations'
    }
  ];

  const faqs = [
    {
      q: 'How far in advance should I book 7Delights casino games for my event?',
      a: 'To ensure maximum availability of casino games & equipment, we recommend booking at least 1 to 6 weeks in advance for social parties & corporate events, and 3 to 6 months in advance for major weddings or large-scale corporate launches. However, if you have a last-minute request, contact us & we will do our best to make it happen!'
    },
    {
      q: 'How long does it take for your team to set up?',
      a: 'Setup times vary by service. Casino games setups or a single interactive stall may take 1 to 2 hours. We always coordinate directly with the venue to ensure everything is flawlessly set up well before your first guest arrives.'
    },
    {
      q: 'What is your payment policy?',
      a: 'To secure your date, artists, and materials, we require an advance payment upon signing the contract. The remaining balance is structured into milestones leading up to, or on the day of the event.'
    },
    {
      q: 'Is real money involved in the casino games?',
      a: 'No, absolutely not. All 7Delights casino games are purely for entertainment and recreation. Guests receive customized play money or entertainment chips at entry. You can optionally award themed gifts or trophies to top chip winners at the end of the evening.'
    },
    {
      q: 'What are the basic organizer requirements on-site?',
      a: 'Organizers only need to provide adequate indoor floor space or sheltered event area (approx. 8x8 feet per gaming table) and standard banquet tables where required. We supply the customized felt layouts, chips, cards, roulette wheels, and croupiers.'
    }
  ];

  const galleryImages = [
    {
      src: '/assets/casino-lucky-7.webp',
      title: 'Lucky 7 Dice Table',
      desc: 'Fast-paced action with custom gaming dice and betting felt'
    },
    {
      src: '/assets/casino-black-jack.webp',
      title: 'Blackjack 21 Layout',
      desc: 'Classic table with shoe cards, chips, and dealer layout'
    },
    {
      src: '/assets/casino-roulette.webp',
      title: 'Roulette Wheel Setup',
      desc: 'High-gloss wheel with complete numbers grid and markers'
    },
    {
      src: '/assets/roulette.webp',
      title: 'Casino Floor Ambiance',
      desc: 'Upscale entertainment setup transforming venues into Vegas suites'
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
            <span className="text-[#111A2E] font-semibold">Casino Games</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            {/* Left Content Column */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FFE8ED] border border-[#FFD0DB] text-[#EE3775] text-xs md:text-sm font-semibold tracking-wide">
                <Dices className="w-4 h-4" />
                <span>Las Vegas Entertainment Gaming &amp; VIP Dealers</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#111A2E] tracking-tight leading-tight">
                Casino Games Planners for <span className="text-[#EE3775]">Events in Bangalore</span>
              </h1>

              <p className="text-base sm:text-lg text-[#5A6E85] leading-relaxed">
                Looking to add a touch of glamour, high-stakes thrill, and sophisticated fun to your celebration? 7Delights brings the sparkle of Monte Carlo directly to your party with authentic casino tables, Roulette wheels, Blackjack, Poker, and professional croupiers!
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
                  <span>100% Legal: <strong>Fun Entertainment Chips</strong></span>
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
                  href="https://wa.me/919980029977?text=Hi%207Delights,%20I'm%20interested%20in%20booking%20Casino%20Games%20Tables%20for%20my%20event."
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
                  src="/assets/casino-games-banner.webp"
                  alt="Casino Games Tables Setup for Events Bangalore"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  onError={(e) => {
                    e.currentTarget.src = '/assets/casino-roulette.webp';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#111A2E]/70 via-transparent to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#EE3775] text-xs font-bold uppercase tracking-wider mb-1">
                    Live Fun Casino
                  </div>
                  <p className="text-sm font-medium text-white/95">
                    Blackjack, Roulette, Craps &amp; Texas Hold’em Tables
                  </p>
                </div>
              </div>

              {/* Float Badge */}
              <div className="absolute -bottom-5 -left-5 bg-white p-3.5 rounded-xl shadow-xl border border-[#F5E6EC] hidden sm:flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-[#FFE8ED] flex items-center justify-center text-[#EE3775]">
                  <Crown className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-[#5A6E85] font-medium">VIP Party Atmosphere</div>
                  <div className="text-sm font-bold text-[#111A2E]">Experienced Croupiers</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. ABOUT CASINO GAMES SECTION */}
      <section className="py-14 md:py-18 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Image display */}
            <div className="lg:col-span-5">
              <div className="relative rounded-2xl overflow-hidden shadow-lg border border-[#F5E6EC]">
                <img
                  src="/assets/casino-roulette.webp"
                  alt="Roulette and Casino Setup in Bangalore"
                  className="w-full h-auto object-cover"
                />
                <div className="p-4 bg-[#FFFDF9] border-t border-[#F5E6EC]">
                  <div className="flex items-center justify-between text-xs sm:text-sm">
                    <span className="font-semibold text-[#111A2E]">Standard Entertainment Package:</span>
                    <span className="font-bold text-[#EE3775]">2 to 3 Hours Duration</span>
                  </div>
                  <p className="text-xs text-[#5A6E85] mt-1">
                    *Requirements from organizer: A table per game setup. (Attracts additional charges for extra hours)
                  </p>
                </div>
              </div>
            </div>

            {/* Content Details */}
            <div className="lg:col-span-7 space-y-5">
              <div className="inline-block text-xs uppercase tracking-wider font-bold text-[#EE3775] bg-[#FFE8ED] px-3 py-1 rounded-md">
                About Casino Games
              </div>

              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#111A2E] leading-snug">
                The Authentic High-Energy Vegas Experience Brought Directly to Your Venue
              </h2>

              <p className="text-base text-[#5A6E85] leading-relaxed">
                Whether it's a corporate gala, private celebration, charity fundraiser, or a James Bond 007 themed birthday, our casino night packages create an unforgettable atmosphere of luxury, excitement, and friendly competition.
              </p>

              <p className="text-base text-[#5A6E85] leading-relaxed">
                Our seasoned croupiers manage tables with polish and charisma. They gladly explain the rules to newcomers so everyone feels confident placing chips, cheering spins, and celebrating big hands!
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-3">
                <div className="flex items-start gap-2.5 p-3 rounded-lg bg-[#FFFDF9] border border-[#F5E6EC]">
                  <CheckCircle className="w-5 h-5 text-[#059669] shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm text-[#111A2E] font-medium">Authentic casino-grade tables, chips, cards &amp; wheels</span>
                </div>
                <div className="flex items-start gap-2.5 p-3 rounded-lg bg-[#FFFDF9] border border-[#F5E6EC]">
                  <CheckCircle className="w-5 h-5 text-[#059669] shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm text-[#111A2E] font-medium">Trained dealers dressed in sharp tuxedo-style vest attire</span>
                </div>
                <div className="flex items-start gap-2.5 p-3 rounded-lg bg-[#FFFDF9] border border-[#F5E6EC]">
                  <CheckCircle className="w-5 h-5 text-[#059669] shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm text-[#111A2E] font-medium">Tailored table configurations for intimate or mega venues</span>
                </div>
                <div className="flex items-start gap-2.5 p-3 rounded-lg bg-[#FFFDF9] border border-[#F5E6EC]">
                  <CheckCircle className="w-5 h-5 text-[#059669] shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm text-[#111A2E] font-medium">100% legal recreational play with custom fun chips</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. POPULAR CASINO GAMES SELECTION */}
      <section className="py-14 md:py-18 bg-[#FFF8FA] border-y border-[#F5E6EC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs uppercase tracking-wider font-bold text-[#EE3775] bg-white px-3 py-1 rounded-md border border-[#F5E6EC]">
              Our Table Selection
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#111A2E] mt-3">
              Classic Casino Games for Your Event
            </h2>
            <p className="text-sm sm:text-base text-[#5A6E85] mt-2">
              Select your favorite gaming setups or combine multiple tables to form an immersive Las Vegas casino lounge.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {casinoGames.map((game, idx) => (
              <div 
                key={idx} 
                className="bg-white rounded-2xl overflow-hidden border border-[#F5E6EC] shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
              >
                <div>
                  <div className="aspect-[16/10] overflow-hidden bg-gray-100">
                    <img 
                      src={game.image} 
                      alt={game.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" 
                    />
                  </div>
                  <div className="p-5">
                    <span className={`inline-block text-xs font-bold px-2.5 py-1 rounded-full border mb-3 ${game.color}`}>
                      {game.tag}
                    </span>
                    <h3 className="text-lg font-bold text-[#111A2E] mb-2">{game.title}</h3>
                    <p className="text-xs sm:text-sm text-[#5A6E85] leading-relaxed">{game.desc}</p>
                  </div>
                </div>
                <div className="px-5 pb-5 pt-2 border-t border-[#F5E6EC] flex items-center justify-between text-xs font-semibold text-[#EE3775]">
                  <span>Professional Croupier Included</span>
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
              Where Casino Nights Shine Brightest
            </h2>
            <p className="text-sm sm:text-base text-[#5A6E85] mt-2">
              Transforming routine celebrations into high-class social experiences across Bangalore.
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
              Specialties of Casino Games
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#111A2E] mt-3">
              7Delights - The Best Planner for Casino Games
            </h2>
            <p className="text-sm sm:text-base text-[#5A6E85] mt-2">
              Years of proven experience in delivering polished, stress-free entertainment with flawless event logistics.
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
              Casino Night in Action
            </h2>
            <p className="text-sm sm:text-base text-[#5A6E85] mt-2">
              Browse actual photos of our casino gaming tables and watch the vibrant party atmosphere.
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
                      e.currentTarget.src = '/assets/casino-lucky-7.webp';
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
                  <h3 className="text-sm sm:text-base font-bold text-[#111A2E]">Watch Casino Entertainment Video</h3>
                  <p className="text-xs text-[#5A6E85]">See our tables, croupiers, and guests enjoying the casino experience</p>
                </div>
              </div>
            </div>
            
            <div className="relative rounded-xl overflow-hidden aspect-video bg-black/5 shadow-inner">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/4NrRY45MAZA?rel=0"
                title="Casino Games by 7Delights Bangalore"
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
              Everything you need to know about setting up a Casino Night for your Bangalore event.
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
                Ready to Roll the Dice at Your Next Celebration?
              </h3>
              <p className="text-sm text-gray-300 mt-1 max-w-xl">
                Get an instant quote with complete casino table setups, customized play chips, and professional croupiers.
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
                href="https://wa.me/919980029977?text=Hi%207Delights,%20I'm%20planning%20an%20event%20and%20want%20to%20book%20Casino%20Games%20Tables."
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

