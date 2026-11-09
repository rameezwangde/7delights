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
  CheckCircle2, 
  Smile, 
  PartyPopper, 
  Users, 
  Trophy, 
  Music, 
  Zap, 
  Star, 
  Laugh 
} from 'lucide-react';
import { GoldUnderline } from '../components/Doodles';

export default function ClownWithGamesPage() {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const gameActivities = [
    {
      title: 'Classic Party Challenges & Musical Games',
      desc: 'Musical chairs with silly clown rules, freeze dancing, statue games, and relay races where the clown host keeps the energy supercharged and joyful.',
      tag: 'Musical Fun',
      color: 'bg-[#F2EDFF] text-[#7B61FF] border-[#E0D5FF]',
      image: '/assets/clown-game-2.webp'
    },
    {
      title: 'Tug-of-War & Group Team Battles',
      desc: 'Exciting kids vs. parents or boys vs. girls tug-of-war contests, parachute group games, and teamwork activities full of cheerful shouting and high fives.',
      tag: 'Team Battles',
      color: 'bg-[#FFE8ED] text-[#EE3775] border-[#FFD0DB]',
      image: '/assets/clown-game-3.webp'
    },
    {
      title: 'Balloon Popping & Obstacle Races',
      desc: 'Energetic balloon stomping, sack races, spoon-and-lemon dashes, and obstacle courses coordinated with clown slapstick and funny penalty dances.',
      tag: 'Active Races',
      color: 'bg-[#FFF3DF] text-[#D97706] border-[#FFE4B8]',
      image: '/assets/clown-game-4.webp'
    },
    {
      title: 'Winner Awards & Cake Cutting Ceremonies',
      desc: 'Our clown gathers all children around the birthday cake for a funny sing-along, assisting the host in congratulating winners with ribbons and candies.',
      tag: 'Celebration Finale',
      color: 'bg-[#EBF7F2] text-[#00A86B] border-[#C8EFE0]',
      image: '/assets/clownwithgames.webp'
    }
  ];

  const highlights = [
    {
      icon: <Smile className="w-5 h-5 text-[#7B61FF]" />,
      title: 'Energetic Party Games Host',
      desc: 'Our clowns are not just funny dress-ups; they are certified children’s entertainers skilled in orchestrating non-stop interactive party games.'
    },
    {
      icon: <Users className="w-5 h-5 text-[#EE3775]" />,
      title: 'All-Inclusive Active Participation',
      desc: 'Ensuring every single child—even shy ones—is warmly welcomed into games, given turns, and rewarded with cheerful praise and smiles.'
    },
    {
      icon: <PartyPopper className="w-5 h-5 text-[#FF7A00]" />,
      title: 'Tailored to Party Themes & Ages',
      desc: 'Games adapted for toddlers (3-5 years) with gentle playful routines, or high-energy school-age challenges (6-12 years) and family rounds.'
    },
    {
      icon: <ShieldCheck className="w-5 h-5 text-[#00A86B]" />,
      title: 'Full Props & Zero Litter Guarantee',
      desc: 'Our entertainer brings all game ropes, balloons, whistles, and props, ensuring the party floor is left clean and tidy post-event.'
    }
  ];

  const galleryImages = [
    { src: '/assets/clown-game-2.webp', alt: 'Clown with Games Bangalore', title: 'Musical Party Games' },
    { src: '/assets/clown-game-3.webp', alt: 'Group Tug of War Clown Bangalore', title: 'Tug-of-War & Team Fun' },
    { src: '/assets/clown-game-4.webp', alt: 'Balloon Games Clown Bangalore', title: 'Balloon Races & Sprints' },
    { src: '/assets/clownwithgames.webp', alt: 'Party Clown Games Host Bangalore', title: 'Cake Ceremony & Finale' },
    { src: '/assets/clown-game-1.webp', alt: 'Kids Games Clown Bangalore', title: 'Interactive Fun Host' },
    { src: '/assets/clown-games-banner.webp', alt: '7Delights Clown with Games Bangalore', title: 'Joyful Birthday Entertainment' }
  ];

  const faqs = [
    {
      q: 'How far in advance should I book 7Delights clown with games for my event?',
      a: 'To ensure maximum availability of our professional clown games hosts, we recommend booking at least 1 to 6 weeks in advance for social parties & corporate events, and 3 to 6 months in advance for major festival celebrations or weekend slots.'
    },
    {
      q: 'What is the duration of the Clown with Games session?',
      a: 'The performance duration is 1 full hour (60 minutes) of continuous interactive games, comedy skits, crowd coordination, and cake-cutting assistance.'
    },
    {
      q: 'How long does it take for your team to set up?',
      a: 'Our clown entertainer arrives 45 to 60 minutes prior to showtime to change into colorful circus costume, apply welcoming makeup, organize game props, and coordinate with the host.'
    },
    {
      q: 'What are the organizer and venue requirements?',
      a: 'The venue needs to provide an open floor or play area for running and circle games, access to a sound system with a cordless microphone, and small prizes/chocolates for the game winners.'
    },
    {
      q: 'What is your payment policy?',
      a: 'To secure your date and artist, we require an advance payment upon booking confirmation. The remaining balance is payable on the event day following completion of the session.'
    }
  ];

  return (
    <div className="min-h-screen bg-[#FFFDF9] text-[#111A2E]">
      {/* 1. Breadcrumb navigation */}
      <div className="bg-[#FFF8F0] border-b border-[#F4E8DC] py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-xs sm:text-sm text-[#5A6E85]">
            <a href="#" className="hover:text-[#EE3775] transition-colors">Home</a>
            <span>/</span>
            <a href="#shows-entertainment" className="hover:text-[#EE3775] transition-colors">Shows & Entertainment</a>
            <span>/</span>
            <span className="text-[#111A2E] font-medium">Clown with Games</span>
          </nav>
        </div>
      </div>

      {/* 2. Hero Section */}
      <section className="relative overflow-hidden pt-8 pb-12 lg:pt-12 lg:pb-16 bg-gradient-to-b from-[#FFF8F0] via-[#FFFDF9] to-[#FFFDF9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Content Column */}
            <div className="lg:col-span-7 space-y-5">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#F2EDFF] border border-[#E0D5FF] text-xs font-semibold text-[#7B61FF]">
                <PartyPopper className="w-3.5 h-3.5" />
                <span>Party Games Host • Interactive Team Challenges • 100% Fun</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#111A2E] leading-tight">
                Clown with Games for Events in{' '}
                <span className="relative inline-block text-[#EE3775]">
                  Bangalore
                  <GoldUnderline className="absolute -bottom-2 left-0 w-full text-[#FFB703]" />
                </span>
              </h1>

              <p className="text-base sm:text-lg text-[#5A6E85] leading-relaxed">
                Turn your party from monotonous to super-engaging with our hilarious clown game hosts! 
                7Delights brings vibrant clown entertainers who don’t just perform funny tricks—they lead the kiddos 
                and parents through energetic musical chairs, tug-of-war, dance-offs, and balloon games that keep 
                everyone energized, smiling, and cheering.
              </p>

              {/* Service Badges */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
                <div className="p-3 bg-white rounded-xl border border-gray-100 shadow-sm flex items-center gap-2.5">
                  <Clock className="w-5 h-5 text-[#EE3775] flex-shrink-0" />
                  <div>
                    <div className="text-xs text-[#5A6E85]">Duration</div>
                    <div className="text-xs sm:text-sm font-bold text-[#111A2E]">1 Full Hour</div>
                  </div>
                </div>

                <div className="p-3 bg-white rounded-xl border border-gray-100 shadow-sm flex items-center gap-2.5">
                  <Music className="w-5 h-5 text-[#7B61FF] flex-shrink-0" />
                  <div>
                    <div className="text-xs text-[#5A6E85]">Sound & Mic</div>
                    <div className="text-xs sm:text-sm font-bold text-[#111A2E]">Venue / Available</div>
                  </div>
                </div>

                <div className="p-3 bg-white rounded-xl border border-gray-100 shadow-sm flex items-center gap-2.5 col-span-2 sm:col-span-1">
                  <MapPin className="w-5 h-5 text-[#00A86B] flex-shrink-0" />
                  <div>
                    <div className="text-xs text-[#5A6E85]">Coverage</div>
                    <div className="text-xs sm:text-sm font-bold text-[#111A2E]">All Across Bangalore</div>
                  </div>
                </div>
              </div>

              {/* CTAs */}
              <div className="flex flex-wrap items-center gap-3 pt-3">
                <a 
                  href="tel:+919980029977" 
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-[#EE3775] hover:bg-[#D62863] text-white font-bold text-sm shadow-md hover:shadow-lg transition-all duration-200"
                >
                  <Phone className="w-4 h-4" />
                  Book Clown with Games
                </a>
                <a 
                  href="https://wa.me/919980029977?text=Hi%207Delights,%20I%20would%20like%20to%20book%20a%20Clown%20with%20Games%20Show%20for%20our%20upcoming%20event." 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-white hover:bg-gray-50 text-[#111A2E] font-bold text-sm border border-gray-200 shadow-sm hover:shadow transition-all duration-200"
                >
                  <MessageCircle className="w-4 h-4 text-[#25D366]" />
                  Instant WhatsApp Quote
                </a>
              </div>
            </div>

            {/* Right Image / Hero Card */}
            <div className="lg:col-span-5">
              <div className="relative mx-auto max-w-md lg:max-w-none">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white bg-white group">
                  <img 
                    src="/assets/clown-game-2.webp" 
                    alt="7Delights Clown with Games Bangalore" 
                    className="w-full h-[340px] sm:h-[400px] object-cover group-hover:scale-105 transition-transform duration-500"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = '/assets/clown-games-banner.webp';
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <span className="inline-block px-2.5 py-1 rounded bg-[#7B61FF] text-[11px] font-bold tracking-wide uppercase mb-1">
                      Interactive Crowd Leader
                    </span>
                    <p className="text-lg font-bold">Bangalore’s Favorite Party Games Clown</p>
                    <p className="text-xs text-white/90">Musical chairs, tug-of-war, balloon challenges, and team games.</p>
                  </div>
                </div>

                {/* Floating pill badge */}
                <div className="absolute -top-3 -right-3 bg-white shadow-lg rounded-xl p-3 border border-gray-100 flex items-center gap-2.5">
                  <div className="w-10 h-10 rounded-lg bg-[#F2EDFF] flex items-center justify-center text-[#7B61FF]">
                    <Trophy className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-[#111A2E]">100% Engagement</div>
                    <div className="text-[10px] text-[#5A6E85]">Exciting Party Games</div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. Key Highlights */}
      <section className="py-10 bg-white border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#111A2E]">
              Why Choose 7Delights Clown with Games?
            </h2>
            <p className="text-sm sm:text-base text-[#5A6E85] mt-2">
              Transforming birthdays, naming ceremonies, family get-togethers, and school picnics with joyful activity and team bonding.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {highlights.map((item, idx) => (
              <div 
                key={idx}
                className="p-5 rounded-xl bg-[#FFFDF9] border border-gray-100 hover:border-[#7B61FF]/30 hover:shadow-md transition-all duration-200"
              >
                <div className="w-10 h-10 rounded-lg bg-white shadow-sm border border-gray-100 flex items-center justify-center mb-3">
                  {item.icon}
                </div>
                <p className="font-bold text-[#111A2E] text-base mb-1.5">{item.title}</p>
                <p className="text-xs sm:text-sm text-[#5A6E85] leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Clown Games Repertoire */}
      <section className="py-12 bg-[#FFF8F0]/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-[#7B61FF] bg-[#F2EDFF] px-3 py-1 rounded-full">
              Non-Stop Play
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#111A2E] mt-3">
              Plan an Exquisite Event with Active Entertainment Intact!
            </h2>
            <p className="text-sm sm:text-base text-[#5A6E85] mt-2">
              Our clowns don’t stop with funny tricks—they organize interactive games that keep both kiddos and adults cherished.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {gameActivities.map((game, idx) => (
              <div 
                key={idx}
                className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col group"
              >
                <div className="h-44 overflow-hidden relative bg-gray-100">
                  <img 
                    src={game.image} 
                    alt={game.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = '/assets/clown-games-banner.webp';
                    }}
                  />
                  <span className={`absolute top-3 left-3 text-[11px] font-semibold px-2.5 py-0.5 rounded-full border ${game.color}`}>
                    {game.tag}
                  </span>
                </div>
                <div className="p-5 flex-1 flex flex-col">
                  <h3 className="font-bold text-[#111A2E] text-base mb-2 group-hover:text-[#7B61FF] transition-colors">
                    {game.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#5A6E85] leading-relaxed flex-1">
                    {game.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Setup & Coordination Reassurance */}
      <section className="py-10 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-[#111A2E] to-[#1E293B] rounded-2xl p-6 sm:p-8 text-white relative overflow-hidden shadow-xl">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#7B61FF]/10 rounded-full blur-3xl pointer-events-none" />
            
            <div className="relative z-10 grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
              <div className="md:col-span-8 space-y-3">
                <span className="text-xs font-bold uppercase tracking-wider text-[#FFB703] bg-white/10 px-3 py-1 rounded-full">
                  Zero Stress Coordination
                </span>
                <h3 className="text-xl sm:text-2xl font-bold">
                  Sit Back & Watch Our Clown Entertainers Lead the Fun!
                </h3>
                <p className="text-sm text-gray-300 leading-relaxed">
                  Our professional clowns bring all required ropes, game markers, party music tracklists, and balloon props. 
                  After the session, they ensure the floor is left spotless and completely free of prop litter.
                </p>
                <div className="flex flex-wrap gap-4 pt-2 text-xs text-gray-200">
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-[#00A86B]" />
                    <span>60 Minutes of Interactive Games</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-[#00A86B]" />
                    <span>All Game Materials & Props Supplied</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-[#00A86B]" />
                    <span>Spotless Post-Game Floor Cleanup</span>
                  </div>
                </div>
              </div>

              <div className="md:col-span-4 flex flex-col gap-3">
                <a 
                  href="tel:+919980029977" 
                  className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-[#EE3775] hover:bg-[#D62863] text-white font-bold text-sm shadow transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  +91 99800 29977
                </a>
                <a 
                  href="#faq-section" 
                  className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold text-sm transition-colors"
                >
                  <HelpCircle className="w-4 h-4" />
                  View Event FAQs
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Photo Gallery Grid */}
      <section className="py-12 bg-[#FFFDF9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <span className="text-xs font-bold uppercase tracking-wider text-[#7B61FF] bg-[#F2EDFF] px-3 py-1 rounded-full">
              Live Action Gallery
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#111A2E] mt-3">
              Clown with Games Moments
            </h2>
            <p className="text-sm sm:text-base text-[#5A6E85] mt-2">
              Catch real glimpses of cheering crowds, active games, and happy faces coordinated by our clowns across Bangalore celebrations.
            </p>
          </div>

          {/* Photo Gallery Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
            {galleryImages.map((img, idx) => (
              <div 
                key={idx}
                className="group relative rounded-xl overflow-hidden bg-white border border-gray-100 shadow-sm aspect-square"
              >
                <img 
                  src={img.src} 
                  alt={img.alt} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = '/assets/clown-games-banner.webp';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-2.5">
                  <span className="text-[11px] font-medium text-white leading-tight">
                    {img.title}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. FAQs Section */}
      <section id="faq-section" className="py-12 bg-[#FFF8F0]/60 border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-xl mx-auto mb-8">
            <span className="text-xs font-bold uppercase tracking-wider text-[#7B61FF] bg-[#F2EDFF] px-3 py-1 rounded-full">
              Got Questions?
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#111A2E] mt-3">
              Event FAQ ?
            </h2>
            <p className="text-sm text-[#5A6E85] mt-2">
              Everything you need to know about booking, requirements, and timing for 7Delights Clown with Games.
            </p>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, idx) => (
              <div 
                key={idx}
                className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm"
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full px-5 py-4 text-left flex items-center justify-between gap-4 font-bold text-sm sm:text-base text-[#111A2E] hover:text-[#7B61FF] transition-colors"
                >
                  <span>{faq.q}</span>
                  <ChevronDown className={`w-5 h-5 flex-shrink-0 text-[#5A6E85] transition-transform duration-200 ${openFaq === idx ? 'rotate-180 text-[#7B61FF]' : ''}`} />
                </button>
                {openFaq === idx && (
                  <div className="px-5 pb-4 pt-1 text-xs sm:text-sm text-[#5A6E85] leading-relaxed border-t border-gray-100 bg-gray-50/50">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Direct Support Card */}
          <div className="mt-8 p-5 rounded-xl bg-white border border-[#7B61FF]/20 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <h3 className="font-bold text-[#111A2E] text-sm sm:text-base">Need a custom games list or age-specific party schedule?</h3>
              <p className="text-xs text-[#5A6E85] mt-0.5">Consult directly with our Bangalore entertainment organizers.</p>
            </div>
            <a 
              href="tel:+919980029977" 
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#EE3775] text-white text-xs sm:text-sm font-bold hover:bg-[#D62863] shadow-sm transition-colors whitespace-nowrap"
            >
              <Phone className="w-3.5 h-3.5" />
              Call +91 99800 29977
            </a>
          </div>

          {/* Back to Hub Navigation */}
          <div className="mt-8 text-center">
            <a 
              href="#shows-entertainment" 
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#EE3775] hover:text-[#D62863] transition-colors"
            >
              ← Back to Shows & Entertainment Hub
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

