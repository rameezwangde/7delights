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
  Trophy,
  PartyPopper,
  Flame,
  Gamepad2
} from 'lucide-react';

export default function CarnivalGamesPage() {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const gamesList = [
    {
      title: 'Ring the Bottle',
      desc: 'The quintessential carnival game where players try to toss rings cleanly around glass or novelty bottles to win rewards.',
      tag: 'Classic Stall',
      color: 'bg-[#FFE8ED] text-[#EE3775] border-[#FFD0DB]',
      image: '/assets/ring-the-bottle.webp'
    },
    {
      title: 'Inflatable Dart Board',
      desc: 'Giant velcro dart board where kids and adults kick or toss soft velcro soccer balls / darts to score bulls-eyes and high points.',
      tag: 'Giant Fun',
      color: 'bg-[#FFF3DF] text-[#D97706] border-[#FFE4B8]',
      image: '/assets/inflatable-dart.webp'
    },
    {
      title: 'Giant Tic-Tac-Toe',
      desc: 'Oversized beanbag toss onto a grid-matrix board where competitors race to line up three Xs or Os in a row.',
      tag: 'Head-to-Head',
      color: 'bg-[#F2EDFF] text-[#7B61FF] border-[#E0D5FF]',
      image: '/assets/tic-tac-toe.webp'
    },
    {
      title: 'Cascade / Plinko Coin Drop',
      desc: 'Drop the puck or ball from the top peg maze and watch it ricochet chaotically into winning multiplier prize bins below.',
      tag: 'Nostalgic Fun',
      color: 'bg-[#E3F8F2] text-[#059669] border-[#C1F1E1]',
      image: '/assets/cascade-carnival.webp'
    },
    {
      title: 'Balloon Shooting Airgun',
      desc: 'Test your marksman aim with safe cork or airguns, aiming to pop rows of colorful inflated balloons against a decorated backdrop.',
      tag: 'Fairground Legend',
      color: 'bg-[#FFE8ED] text-[#EE3775] border-[#FFD0DB]',
      image: '/assets/balloon-shoot-carnival.webp'
    },
    {
      title: 'Mini Bowling Alley',
      desc: 'Roll weighted balls down a miniature wooden bowling lane to knock down pins and score strikes on portable fairground setups.',
      tag: 'Precision Play',
      color: 'bg-[#FFF3DF] text-[#D97706] border-[#FFE4B8]',
      image: '/assets/mini-bowling.webp'
    },
  ];

  const features = [
    {
      title: 'Wide Selection of Fairground Classics',
      desc: 'From Ring the Bottle and Plinko to Giant Darts and Mini Bowling, choose any mix to create an unforgettable carnival midway.',
      icon: <Gamepad2 className="w-6 h-6 text-[#EE3775]" />,
    },
    {
      title: 'Colorful & Festive Game Booths',
      desc: 'Eye-catching themed backdrops, bunting, and draped game tables that immediately transform venues into a vibrant fairground.',
      icon: <PartyPopper className="w-6 h-6 text-[#7B61FF]" />,
    },
    {
      title: 'Dedicated Booth Coordinators',
      desc: 'Energetic attendants manage queues, explain rules, hand out rings/balls/darts, and cheer players to keep spirits sky-high.',
      icon: <Users className="w-6 h-6 text-[#059669]" />,
    },
    {
      title: 'Prizes & Instant Giveaways Included',
      desc: 'What is a carnival without rewards? We equip booths with soft toys, chocolates, candy hampers, and novelties for instant winners.',
      icon: <Gift className="w-6 h-6 text-[#D97706]" />,
    },
    {
      title: 'Seamless Setup & Post-Event Cleanup',
      desc: 'Our logistics team delivers, dresses, tests, and packs everything cleanly, requiring zero stress or labor from the hosts.',
      icon: <ShieldCheck className="w-6 h-6 text-[#3B82F6]" />,
    },
    {
      title: 'Scalable for 20 to 2,000 Guests',
      desc: 'Pick a 2-stall backyard birthday package or build a multi-booth carnival fair for school anniversaries and corporate family days.',
      icon: <Trophy className="w-6 h-6 text-[#EC4899]" />,
    },
  ];

  const faqs = [
    {
      q: 'How far in advance should I book 7Delights carnival games for my event?',
      a: 'To ensure maximum availability of carnival games & equipment, we recommend booking at least 1 to 6 weeks in advance for social parties & corporate events, and 3 to 6 months in advance for major weddings or large-scale corporate launches. However, if you have a last-minute request, contact us & we will do our best to make it happen!'
    },
    {
      q: 'How long does it take for your team to set up?',
      a: 'Setup times vary by service. Carnival games setups or a single interactive stall may take 1 to 2 hours. We always coordinate directly with the venue to ensure everything is flawlessly set up well before your first guest arrives.'
    },
    {
      q: 'What is your payment policy?',
      a: 'To secure your date, artists, and materials, we require an advance payment upon signing the contract. The remaining balance is structured into milestones leading up to, or on the day of the event.'
    },
    {
      q: 'Can we customize the mix of games and prizes?',
      a: 'Absolutely! You can choose any combination of 3, 5, or 8+ carnival game stalls. You can also provide custom branded prizes or let us supply plush toys, chocolates, and novelty party gifts.'
    },
    {
      q: 'What are the venue requirements for carnival game stalls?',
      a: 'Standard banquet tables for tabletop games (e.g. Ring Toss, Cascade, Mini Bowling) and a level open area (around 10x10 ft per stall) with access to standard electrical supply only if an inflatable dart board or lighting is included.'
    }
  ];

  const galleryImages = [
    {
      src: '/assets/ring-the-bottle.webp',
      title: 'Ring the Bottle Stall',
      desc: 'Precision skill hoop toss around prize bottles'
    },
    {
      src: '/assets/inflatable-dart.webp',
      title: 'Giant Inflatable Dart Board',
      desc: 'Massive target board for soccer balls and soft darts'
    },
    {
      src: '/assets/tic-tac-toe.webp',
      title: 'Giant Tic-Tac-Toe',
      desc: 'Beanbag toss competition on oversized grid board'
    },
    {
      src: '/assets/cascade-carnival.webp',
      title: 'Plinko & Cascade Peg Maze',
      desc: 'Exciting bounce mechanics dropping into winner bins'
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
            <span className="text-[#111A2E] font-semibold">Carnival Games</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            {/* Left Content Column */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FFE8ED] border border-[#FFD0DB] text-[#EE3775] text-xs md:text-sm font-semibold tracking-wide">
                <PartyPopper className="w-4 h-4" />
                <span>Classic Fairground Fun Stalls &amp; Gift Giveaways</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#111A2E] tracking-tight leading-tight">
                Carnival Games Planners for <span className="text-[#EE3775]">Events in Bangalore</span>
              </h1>

              <p className="text-base sm:text-lg text-[#5A6E85] leading-relaxed">
                Step right up to the greatest celebration in town! 7Delights brings the sights, sounds, and exhilarating energy of a traditional amusement fair to your birthday, corporate family day, school sports fest, or community carnival in Bengaluru.
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
                  <span>Includes <strong>Prizes &amp; Live Attendants</strong></span>
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
                  href="https://wa.me/919980029977?text=Hi%207Delights,%20I'm%20interested%20in%20booking%20Carnival%20Games%20Stalls%20for%20my%20event."
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
                  src="/assets/carnival-games-banner.webp"
                  alt="Carnival Games Setup for Events in Bangalore"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  onError={(e) => {
                    e.currentTarget.src = '/assets/ring-the-bottle.webp';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#111A2E]/70 via-transparent to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#EE3775] text-xs font-bold uppercase tracking-wider mb-1">
                    Authentic Fairground
                  </div>
                  <p className="text-sm font-medium text-white/95">
                    Ring Toss, Dart Boards, Plinko &amp; Skill Stalls
                  </p>
                </div>
              </div>

              {/* Float Badge */}
              <div className="absolute -bottom-5 -left-5 bg-white p-3.5 rounded-xl shadow-xl border border-[#F5E6EC] hidden sm:flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-[#FFE8ED] flex items-center justify-center text-[#EE3775]">
                  <Trophy className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-[#5A6E85] font-medium">Smash Hit Engagement</div>
                  <div className="text-sm font-bold text-[#111A2E]">Fun For All Ages</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. ABOUT CARNIVAL GAMES SECTION */}
      <section className="py-14 md:py-18 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Image display */}
            <div className="lg:col-span-5">
              <div className="relative rounded-2xl overflow-hidden shadow-lg border border-[#F5E6EC]">
                <img
                  src="/assets/ring-the-bottle.webp"
                  alt="Ring the bottle carnival stall setup"
                  className="w-full h-auto object-cover"
                />
                <div className="p-4 bg-[#FFFDF9] border-t border-[#F5E6EC]">
                  <div className="flex items-center justify-between text-xs sm:text-sm">
                    <span className="font-semibold text-[#111A2E]">Standard Package Setup:</span>
                    <span className="font-bold text-[#EE3775]">2 to 3 Hours Duration</span>
                  </div>
                  <p className="text-xs text-[#5A6E85] mt-1">
                    *Requirements from organizer: Tables for stalls. (Attracts additional charges for extra hours)
                  </p>
                </div>
              </div>
            </div>

            {/* Content Details */}
            <div className="lg:col-span-7 space-y-5">
              <div className="inline-block text-xs uppercase tracking-wider font-bold text-[#EE3775] bg-[#FFE8ED] px-3 py-1 rounded-md">
                About Carnival Games
              </div>

              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#111A2E] leading-snug">
                The Ultimate Fun Fair Experience That Sparks Laughter and Wonder
              </h2>

              <p className="text-base text-[#5A6E85] leading-relaxed">
                Step right up! Remember the sheer joy of throwing a ring around a glass bottle, knocking down milk cans with a softball, or popping brightly colored balloons? Our nostalgic carnival midway stalls bring that authentic retro fairground magic right to your doorstep.
              </p>

              <p className="text-base text-[#5A6E85] leading-relaxed">
                Whether it's a corporate family day, residential society fest, or birthday celebration, carnival games effortlessly break the ice, invite friendly challenges between friends and colleagues, and reward winners with instant prizes!
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-3">
                <div className="flex items-start gap-2.5 p-3 rounded-lg bg-[#FFFDF9] border border-[#F5E6EC]">
                  <CheckCircle className="w-5 h-5 text-[#059669] shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm text-[#111A2E] font-medium">Eye-catching colorful striped booths and festive banners</span>
                </div>
                <div className="flex items-start gap-2.5 p-3 rounded-lg bg-[#FFFDF9] border border-[#F5E6EC]">
                  <CheckCircle className="w-5 h-5 text-[#059669] shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm text-[#111A2E] font-medium">Full game accessories: rings, pucks, beanbags, soft darts</span>
                </div>
                <div className="flex items-start gap-2.5 p-3 rounded-lg bg-[#FFFDF9] border border-[#F5E6EC]">
                  <CheckCircle className="w-5 h-5 text-[#059669] shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm text-[#111A2E] font-medium">Live booth attendants guiding players and giving prizes</span>
                </div>
                <div className="flex items-start gap-2.5 p-3 rounded-lg bg-[#FFFDF9] border border-[#F5E6EC]">
                  <CheckCircle className="w-5 h-5 text-[#059669] shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm text-[#111A2E] font-medium">Combines smoothly with popcorn, cotton candy &amp; bouncy castles</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. POPULAR CARNIVAL GAMES SELECTION */}
      <section className="py-14 md:py-18 bg-[#FFF8FA] border-y border-[#F5E6EC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs uppercase tracking-wider font-bold text-[#EE3775] bg-white px-3 py-1 rounded-md border border-[#F5E6EC]">
              Our Game Stalls
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#111A2E] mt-3">
              Explore Our Authentic Carnival Games
            </h2>
            <p className="text-sm sm:text-base text-[#5A6E85] mt-2">
              Choose from a curated collection of nostalgic fairground favorites designed for maximum player engagement.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {gamesList.map((game, idx) => (
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
                    <p className="text-lg font-bold text-[#111A2E] mb-2">{game.title}</p>
                    <p className="text-xs sm:text-sm text-[#5A6E85] leading-relaxed">{game.desc}</p>
                  </div>
                </div>
                <div className="px-5 pb-5 pt-2 border-t border-[#F5E6EC] flex items-center justify-between text-xs font-semibold text-[#EE3775]">
                  <span>Stall Attendant &amp; Props Included</span>
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
              Specialties of Carnival Games
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#111A2E] mt-3">
              Why 7Delights is Bangalore’s #1 Carnival Partner
            </h2>
            <p className="text-sm sm:text-base text-[#5A6E85] mt-2">
              From backyard family gatherings to full-scale corporate sports festivals, we take care of all the logistics so you can enjoy the festivities stress-free.
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
              Carnival Midway Fun in Action
            </h2>
            <p className="text-sm sm:text-base text-[#5A6E85] mt-2">
              Browse actual photographs of our carnival game stalls across Bangalore celebrations.
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
                      e.currentTarget.src = '/assets/ring-the-bottle.webp';
                    }}
                  />
                </div>
                <div className="p-4">
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
                  <h3 className="text-sm sm:text-base font-bold text-[#111A2E]">Watch Carnival Games Video</h3>
                  <p className="text-xs text-[#5A6E85]">See guests laughing, cheering, and enjoying our interactive game stalls</p>
                </div>
              </div>
            </div>
            
            <div className="relative rounded-xl overflow-hidden aspect-video bg-black/5 shadow-inner">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/FDcgqFz2gu4?rel=0"
                title="Carnival Games by 7Delights Bangalore"
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
              Everything you need to know about setting up Carnival Game stalls for your event.
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
                Ready to Bring the Carnival to Your Next Celebration?
              </h3>
              <p className="text-sm text-gray-300 mt-1 max-w-xl">
                Get an instant package quote with complete booth setups, prizes, and engaging attendants across Bangalore.
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
                href="https://wa.me/919980029977?text=Hi%207Delights,%20I'm%20planning%20an%20event%20and%20want%20to%20book%20Carnival%20Games%20Stalls."
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

