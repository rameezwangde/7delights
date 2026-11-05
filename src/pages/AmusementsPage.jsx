import React, { useState } from 'react';
import { 
  Sparkles, 
  Search, 
  Phone, 
  ChevronRight, 
  Clock, 
  MapPin, 
  ShieldCheck, 
  Users, 
  Gamepad2, 
  Smile, 
  Trophy, 
  CheckCircle2, 
  Layers, 
  Headphones, 
  Award,
  ChevronDown,
  HelpCircle
} from 'lucide-react';
import { GoldUnderline } from '../components/Doodles';

export default function AmusementsPage() {
  const [activeTab, setActiveTab] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const categories = [
    { id: 'all', label: 'All Amusements & Games' },
    { id: 'inflatables', label: 'Inflatables & Rides' },
    { id: 'carnival', label: 'Carnival & Stalls' },
    { id: 'arcade', label: 'Tech & Arcade' },
  ];

  // 10 authentic games directly scraped from https://www.7delights.in/amusements-games/
  const games = [
    {
      id: 1,
      title: 'Bouncy Castle',
      slug: '#amusements/bouncing-castle',
      category: 'inflatables',
      image: '/assets/game-bouncing-castle.webp',
      tag: 'Inflatable Fun',
      badgeBg: 'bg-[#FFE8ED] text-[#EE3775] border-[#FFD0DB]',
      desc: 'We can install a bouncing castle to make your little kids enjoy themselves safely with jumping slides, obstacle courses, and ball pools!',
    },
    {
      id: 2,
      title: 'Horse Riding',
      slug: '#amusements/horse-riding',
      category: 'inflatables',
      image: '/assets/game-horse-riding.webp',
      tag: 'Gentle Purebreds',
      badgeBg: 'bg-[#FFF3DF] text-[#D97706] border-[#FFE4B8]',
      desc: 'Our Horse Riding facility is safe for everyone, with gentle trained horses and expert handlers so children and guests enjoy royal rides.',
    },
    {
      id: 3,
      title: 'Merry Go Round',
      slug: '#amusements/merry-go-round',
      category: 'inflatables',
      image: '/assets/game-merry-go-round.webp',
      tag: 'Classic Carousel',
      badgeBg: 'bg-[#F2EDFF] text-[#7B61FF] border-[#E0D5FF]',
      desc: 'Live your childhood days again with Merry-Go-Round installations! Decorated with joyful music, spinning seats, and flashing carousel lights.',
    },
    {
      id: 4,
      title: 'Zorbing Balls',
      slug: '#amusements/zorbing-balls',
      category: 'inflatables',
      image: '/assets/game-zorbing-balls.webp',
      tag: 'Water & Land Zorbing',
      badgeBg: 'bg-[#E3F8F2] text-[#059669] border-[#C1F1E1]',
      desc: 'Our water zorbing balls and inflatable land tracks are 100% safe, letting kids and teens roll, tumble, and bounce effortlessly on water.',
    },
    {
      id: 5,
      title: 'Trampoline',
      slug: '#amusements/trampoline',
      category: 'inflatables',
      image: '/assets/game-trampoline.webp',
      tag: 'Bungee & Enclosure',
      badgeBg: 'bg-[#FFE8ED] text-[#EE3775] border-[#FFD0DB]',
      desc: 'We provide specialized enclosed trampolines with heavy-duty safety netting to make children recall the unbound energetic child in them!',
    },
    {
      id: 6,
      title: 'Ring Toss Game',
      slug: '#amusements/ring-toss-game',
      category: 'carnival',
      image: '/assets/ring-game-main.webp',
      tag: 'Gift Stalls',
      badgeBg: 'bg-[#FFF3DF] text-[#D97706] border-[#FFE4B8]',
      desc: 'We allow everyone to participate in the ring games and win exciting branded gifts, soft toys, and chocolates live on-site!',
    },
    {
      id: 7,
      title: 'Casino Games Tables',
      slug: '#amusements/casino-games',
      category: 'arcade',
      image: '/assets/casino-roulette.webp',
      tag: 'Adults & Corporate',
      badgeBg: 'bg-[#F2EDFF] text-[#7B61FF] border-[#E0D5FF]',
      desc: 'Our professional fun casino dealers set the VIP party mood with Blackjack, Roulette, and Poker tables played with entertainment chips.',
    },
    {
      id: 8,
      title: 'Carnival Games',
      slug: '#amusements/carnival-games',
      category: 'carnival',
      image: '/assets/ring-the-bottle.webp',
      tag: 'Skill Stalls',
      badgeBg: 'bg-[#E3F8F2] text-[#059669] border-[#C1F1E1]',
      desc: 'Our carnival stalls—feed the clown, can knockdown, bucket toss, and dart games—set a buzzing festive mood with instant winner giveaways.',
    },
    {
      id: 9,
      title: 'VR Gaming',
      slug: '#amusements/vr-games',
      category: 'arcade',
      image: '/assets/vr-games-main.webp',
      tag: 'Metaverse VR',
      badgeBg: 'bg-[#FFE8ED] text-[#EE3775] border-[#FFD0DB]',
      desc: 'Our VR Gaming Zone immerses guests in rollercoasters, lightsaber beats, and simulation sports with high-definition Oculus headsets.',
    },
    {
      id: 10,
      title: 'Balloon Shooting',
      slug: '#amusements/balloon-shooting',
      category: 'carnival',
      image: '/assets/balloon-shooting-main.webp',
      tag: 'Air Gun Carnival',
      badgeBg: 'bg-[#FFF3DF] text-[#D97706] border-[#FFE4B8]',
      desc: 'Balloon shooting with our cork and airguns lets guests test their marksman aim and relive retro carnival fairground memories!',
    },
  ];

  const strengths = [
    {
      title: 'Customizable Theme Decor',
      desc: 'Meeting your dream and fascination becomes a priority for us, and we do it with all our strength and custom inflatable themes!',
      color: '#EE3775',
      bg: 'bg-[#FFE8ED]',
      icon: <Sparkles className="w-6 h-6 text-[#EE3775]" />,
    },
    {
      title: 'Rich Infrastructure',
      desc: 'We have the richest amusements, bouncy castles, and arcade infrastructure in Bangalore! Continuously enriched and safety-tested.',
      color: '#F5A623',
      bg: 'bg-[#FFF3DF]',
      icon: <Layers className="w-6 h-6 text-[#F5A623]" />,
    },
    {
      title: '24/7 Customer Service',
      desc: 'Our team of caring amusement and event coordinators is available round-the-clock to assist you with all setup questions.',
      color: '#7B61FF',
      bg: 'bg-[#F2EDFF]',
      icon: <Headphones className="w-6 h-6 text-[#7B61FF]" />,
    },
    {
      title: 'Best Competent Team',
      desc: 'Our setup coordinators, trained ride operators, game anchors, and safety marshals ensure zero compromise on guest well-being.',
      color: '#10B981',
      bg: 'bg-[#E3F8F2]',
      icon: <Award className="w-6 h-6 text-[#10B981]" />,
    },
  ];

  const faqs = [
    {
      q: 'How far in advance should I book 7Delights amusements games for my event?',
      a: 'To ensure maximum availability of amusements games, specific themes, & equipment, we recommend booking at least 1 to 4 weeks in advance for social parties & corporate events, and 3 to 6 months in advance for major weddings or large-scale corporate launches. However, if you have a last-minute request, contact us & we will do our best to make it happen!',
    },
    {
      q: 'How long does it take for your team to set up?',
      a: 'Setup times vary by service. Amusements games or a single interactive stall may take 1 to 2 hours. We always coordinate directly with the venue to ensure everything is flawlessly set up well before your first guest arrives.',
    },
    {
      q: 'Are your bouncy castles and mechanical rides safe for children?',
      a: 'Absolutely. Every bouncy castle, carousel, and trampoline is crafted from commercial-grade, fire-retardant materials, inspected prior to every event, and manned by certified attendants throughout the party duration to enforce safety rules and capacity limits.',
    },
    {
      q: 'What is your payment policy?',
      a: 'To secure your date, artists, and materials, we require an advance payment upon signing the contract. The remaining balance is structured into milestones leading up to, or on the day of the event.',
    },
  ];

  const filtered = games.filter((g) => {
    const matchesCategory = activeTab === 'all' || g.category === activeTab;
    const matchesSearch =
      g.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      g.desc.toLowerCase().includes(searchQuery.toLowerCase()) ||
      g.tag.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="w-full bg-[#FFFDF9] select-none">
      
      {/* 1. HERO BREADCRUMB / BANNER */}
      <section className="relative w-full bg-gradient-to-b from-[#FFF5F6] via-[#FFFDF9] to-[#FFFDF9] pt-8 sm:pt-10 pb-8 sm:pb-10 overflow-hidden border-b border-[#FCD5DE]/60">
        <div className="absolute top-0 right-1/4 w-[450px] h-[450px] bg-[#FFE8ED]/60 rounded-full blur-3xl pointer-events-none -z-0" />
        <div className="absolute bottom-0 left-10 w-80 h-80 bg-[#FFF3DF]/50 rounded-full blur-3xl pointer-events-none -z-0" />

        <div className="w-full max-w-[1720px] mx-auto px-6 sm:px-10 lg:px-14 xl:px-16 text-center relative z-10">
          
          <div className="inline-flex items-center space-x-2.5 mb-2.5">
            <span className="w-6 h-[1.5px] bg-[#EE3775]" />
            <span className="text-[12px] sm:text-[13px] font-bold tracking-[0.2em] text-[#EE3775] uppercase font-sans">
              AMUSEMENTS &amp; GAMES • BANGALORE
            </span>
            <span className="w-6 h-[1.5px] bg-[#EE3775]" />
          </div>

          <h1 className="text-[32px] sm:text-[42px] lg:text-[48px] font-bold text-[#111A2E] font-serif leading-[1.12] mb-3">
            7delights Amusements &amp; Games Planners for{' '}
            <span className="text-[#EE3775] relative inline-block font-dancing font-normal text-[38px] sm:text-[52px] lg:text-[60px]">
              Events in Bangalore
              <div className="absolute -bottom-2 left-0 w-full overflow-visible">
                <GoldUnderline className="w-full h-3.5 text-[#F5A623]" />
              </div>
            </span>
          </h1>

          <p className="text-[14.5px] sm:text-[16px] text-[#5A6E85] max-w-2xl mx-auto leading-relaxed">
            7DELIGHTS.in understands the significance of healthy entertainment in one’s life. Explore our superb collection of 10+ live amusement activities, bouncy castles, carnival stalls, and VR zones!
          </p>

          {/* Search Bar */}
          <div className="mt-5 max-w-lg mx-auto flex items-center bg-white border border-[#F3E8E2] rounded-full p-1.5 shadow-2xs">
            <div className="pl-4 text-[#94A3B8]">
              <Search className="w-4 h-4" />
            </div>
            <input
              type="text"
              placeholder="Search amusements (e.g. bouncy castle, vr, casino, carnival)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="flex-1 px-3 py-2 text-[14px] text-[#111A2E] placeholder-[#94A3B8] outline-none bg-transparent"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="pr-3 text-[#94A3B8] hover:text-[#111A2E] text-xs font-semibold cursor-pointer"
              >
                Clear
              </button>
            )}
          </div>

        </div>
      </section>

      {/* 2. 10 AMUSEMENTS & GAMES GRID */}
      <section className="relative w-full py-8 sm:py-10 lg:py-12 overflow-hidden">
        <div className="w-full max-w-[1720px] mx-auto px-6 sm:px-10 lg:px-14 xl:px-16 relative z-10">
          
          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-2.5 mb-8 sm:mb-9">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-[13px] sm:text-[13.5px] font-semibold transition-all duration-200 cursor-pointer ${
                  activeTab === cat.id
                    ? 'bg-[#EE3775] text-white shadow-md shadow-[#EE3775]/25 scale-102'
                    : 'bg-white text-[#5A6E85] border border-[#F3E8E2] hover:border-[#EE3775] hover:text-[#111A2E]'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Grid of 10 Games */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-7">
            {filtered.map((game) => (
              <div
                key={game.id}
                className="group relative bg-white rounded-3xl overflow-hidden border border-[#F3E8E2] hover:border-[#FCD5DE] transition-all duration-300 shadow-2xs hover:shadow-xl hover:-translate-y-1.5 flex flex-col text-left"
              >
                {/* Photo with Tag */}
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#FFF9F6]">
                  <img
                    src={game.image}
                    alt={game.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-106"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Top Badge */}
                  <div className="absolute top-3.5 left-3.5">
                    <span
                      className={`inline-block px-3 py-1 rounded-full text-[11px] font-bold tracking-wide border shadow-2xs ${game.badgeBg}`}
                    >
                      {game.tag}
                    </span>
                  </div>

                  {/* Bangalore Live Counter Tag */}
                  <div className="absolute bottom-3 left-3.5 right-3.5 flex items-center justify-between text-white text-[11px] font-medium drop-shadow-md">
                    <span className="flex items-center space-x-1">
                      <MapPin className="w-3 h-3 text-[#EE3775]" />
                      <span>Available in Bangalore</span>
                    </span>
                    <span className="flex items-center space-x-1 text-[#F5A623]">
                      <Sparkles className="w-3 h-3" />
                      <span>Live Setup</span>
                    </span>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-[19px] sm:text-[20px] font-bold text-[#111A2E] font-serif group-hover:text-[#EE3775] transition-colors leading-tight mb-2">
                      {game.title}
                    </h3>
                    <p className="text-[13.5px] text-[#5A6E85] leading-relaxed line-clamp-3">
                      {game.desc}
                    </p>
                  </div>

                  {/* Bottom Action Buttons */}
                  <div className="pt-4 mt-4 border-t border-[#F8ECE8] flex items-center justify-between">
                    <a
                      href={game.slug}
                      className="inline-flex items-center space-x-1 text-[13px] font-bold text-[#EE3775] group-hover:translate-x-1 transition-transform"
                    >
                      <span>View Details &amp; Book</span>
                      <ChevronRight className="w-4 h-4" />
                    </a>
                    <a
                      href="tel:+919980029977"
                      className="w-8 h-8 rounded-full bg-[#FFE8ED] text-[#EE3775] hover:bg-[#EE3775] hover:text-white flex items-center justify-center transition-colors"
                      title="Quick Call"
                    >
                      <Phone className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>

              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 3. CORE CHARACTERISTICS & ABOUT */}
      <section className="relative w-full py-10 sm:py-12 bg-white border-t border-[#FCD5DE]/60 overflow-hidden">
        <div className="w-full max-w-[1720px] mx-auto px-6 sm:px-10 lg:px-14 xl:px-16 relative z-10">
          
          <div className="max-w-4xl mx-auto text-center mb-10">
            <span className="text-[12px] font-bold tracking-[0.2em] text-[#EE3775] uppercase">
              ENTERTAIN WITH TOP AMUSEMENTS
            </span>
            <h2 className="text-[30px] sm:text-[38px] font-bold text-[#111A2E] font-serif mt-2 mb-3">
              7DELIGHTS.in Puts Top Shows, Amusements And Games
            </h2>
            <p className="text-[14px] sm:text-[15.5px] text-[#5A6E85] leading-relaxed">
              At 7DELIGHTS.in, we understand how vital amusement and games activities are to energize you! We leave no opportunity at all to put up the finest shows to make you feel relaxed with our healthy practices. All our amusement and games activities are safe, fun, and perfect for everyone belonging to any age group.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
            {[
              'Our games and amusement activities are simple & intuitive',
              'They guarantee complete enjoyment and laughter',
              'They have the ability to refresh the human mind',
              'Participants get rejuvenated physically and mentally',
              'Decent, friendly communication with our game coordinators',
              'Encouragement through exciting gifts, prizes & soft toys',
            ].map((char, idx) => (
              <div key={idx} className="flex items-start space-x-3 p-4 rounded-2xl bg-[#FFFDF9] border border-[#F3E8E2]">
                <CheckCircle2 className="w-5 h-5 text-[#059669] shrink-0 mt-0.5" />
                <span className="text-[13.5px] font-medium text-[#111A2E]">{char}</span>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 4. VALUE PILLARS */}
      <section className="relative w-full pt-8 sm:pt-10 pb-6 sm:pb-8 bg-[#FFF5F6]/70 border-t border-[#FCD5DE]/60 overflow-hidden">
        <div className="w-full max-w-[1720px] mx-auto px-6 sm:px-10 lg:px-14 xl:px-16 relative z-10">
          
          <div className="text-center max-w-2xl mx-auto mb-6 sm:mb-8">
            <span className="text-[12px] font-bold tracking-[0.2em] text-[#EE3775] uppercase">
              RELIABLE &amp; SAFE
            </span>
            <h2 className="text-[30px] sm:text-[36px] font-bold text-[#111A2E] font-serif mt-1 mb-2">
              Our Core Strengths
            </h2>
            <p className="text-[14px] text-[#5A6E85]">
              Decades of experience in staging unforgettable carnival stalls and amusement rides across Bangalore.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-7">
            {strengths.map((str, idx) => (
              <div
                key={idx}
                className="bg-white rounded-3xl p-6 sm:p-7 border border-[#F3E8E2] shadow-2xs hover:shadow-lg hover:-translate-y-1 transition-all duration-300 text-left flex flex-col justify-between"
              >
                <div>
                  <div
                    className={`w-13 h-13 rounded-2xl ${str.bg} border border-black/5 flex items-center justify-center mb-5 shadow-xs`}
                  >
                    {str.icon}
                  </div>
                  <h3 className="text-[18px] font-bold text-[#111A2E] font-serif mb-2 leading-snug">
                    {str.title}
                  </h3>
                  <p className="text-[13.5px] text-[#5A6E85] leading-relaxed">
                    {str.desc}
                  </p>
                </div>

                <div className="pt-4 mt-5 border-t border-[#F8ECE8] flex items-center space-x-1.5 text-[12px] font-semibold text-[#EE3775]">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Guaranteed Safety &amp; Fun</span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 5. FAQs */}
      <section className="py-12 sm:py-14 bg-white border-t border-[#F2ECE4]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F2EDFF] text-xs font-semibold text-[#7B61FF] mb-3">
              <HelpCircle className="w-3.5 h-3.5" />
              <span>Event FAQs</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#111A2E]">
              Frequently Asked Questions
            </h2>
            <p className="text-sm text-[#5A6E85] mt-1.5">
              Everything you need to know about booking amusements &amp; carnival games in Bangalore.
            </p>
          </div>

          <div className="space-y-3.5">
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div
                  key={index}
                  className="border border-[#F2ECE4] rounded-2xl overflow-hidden bg-[#FFFDF9] transition-all"
                >
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full px-6 py-4 text-left flex items-center justify-between gap-4 hover:bg-white/60 transition-colors"
                  >
                    <span className="text-sm sm:text-base font-bold text-[#111A2E]">
                      {faq.q}
                    </span>
                    <ChevronDown
                      className={`w-5 h-5 text-[#5A6E85] shrink-0 transition-transform duration-300 ${
                        isOpen ? 'rotate-180 text-[#EE3775]' : ''
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="px-6 pb-5 pt-1 text-xs sm:text-sm text-[#5A6E85] leading-relaxed border-t border-[#F2ECE4]/60 bg-white/40">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

    </div>
  );
}

