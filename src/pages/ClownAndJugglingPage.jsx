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
  Flame, 
  Zap, 
  Star, 
  Volume2,
  Eye,
  Activity
} from 'lucide-react';
import { GoldUnderline } from '../components/Doodles';

export default function ClownAndJugglingPage() {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const performanceSpecialties = [
    {
      title: 'Classic High-Dexterity Ball & Club Juggling',
      desc: 'Mesmerizing rapid toss juggling with 3 to 5 multi-color bounce balls, bowling clubs, and aerodynamic rings executed with comedic timing.',
      tag: 'Classic Dexterity',
      color: 'bg-[#FFE8ED] text-[#EE3775] border-[#FFD0DB]',
      image: '/assets/clown-and-juggling-1.webp'
    },
    {
      title: 'Dazzling LED Glow & Ring Manipulation',
      desc: 'High-visibility luminous LED juggling clubs and spinning hoops tailored for evening banquets, indoor ballrooms, and dimmed party halls.',
      tag: 'LED Visuals',
      color: 'bg-[#EDF5FF] text-[#2563EB] border-[#D0E2FF]',
      image: '/assets/juggling.webp'
    },
    {
      title: 'Spectacular Fire Juggling (Outdoor / Large Venues)',
      desc: 'Sensational controlled fire torches and swirling fire clubs performed by seasoned safety-certified circus artistes for milestone celebrations.',
      tag: 'Fire Torches',
      color: 'bg-[#FFF3DF] text-[#D97706] border-[#FFE4B8]',
      image: '/assets/clown-and-juggling-show-2.webp'
    },
    {
      title: 'Interactive Slapstick Comedy & Kid Participation',
      desc: 'Hilarious physical comedy, squeaky gags, playful fake drops, and pulling volunteer kids and adults on stage to balance spinning plates and props.',
      tag: 'Audience Comedy',
      color: 'bg-[#EBF7F2] text-[#00A86B] border-[#C8EFE0]',
      image: '/assets/clown-and-juggling-2.webp'
    }
  ];

  const highlights = [
    { title: 'Show Duration', value: '45 mins', sub: 'Action-packed comedy & juggling' },
    { title: 'Performer Persona', value: 'Clown + Juggler', sub: 'Colorfully dressed circus attire' },
    { title: 'Audience Match', value: 'All Ages', sub: 'Kids, teens, parents & corporate teams' },
    { title: 'Stage Setup', value: 'Music System', sub: 'Quick 30–45 min pre-event prep' }
  ];

  const galleryImages = [
    { src: '/assets/clown-and-juggling-1.webp', caption: 'Classic Ball & Club Juggling Artistry', tag: 'Stage Performance' },
    { src: '/assets/juggling.webp', caption: 'Multitasking Ring & Toss Juggling', tag: 'Dexterity Trick' },
    { src: '/assets/clown-and-juggling-show-2.webp', caption: 'High-Energy Juggling Circus Act', tag: 'Speciality Props' },
    { src: '/assets/clown-and-juggling-2.webp', caption: 'Slapstick Comedy & Clowning Routines', tag: 'Comedy Act' },
    { src: '/assets/clown-and-juggling-4.webp', caption: 'Kid-Centric Interactive Volunteer Fun', tag: 'Crowd Engagement' },
    { src: '/assets/clown-and-juggling-main.webp', caption: 'Vibrant Costume & Cheerful Celebration', tag: 'Party Atmosphere' }
  ];

  const faqs = [
    {
      q: 'How far in advance should I book 7Delights clown and juggling for my event?',
      a: 'To ensure maximum availability of our professional clown jugglers, we recommend booking at least 1 to 3 weeks in advance for birthday parties and corporate family days, and 1 to 2 months in advance for peak festival weekends or large stage celebrations. Last-minute bookings are also welcomed subject to slot availability!'
    },
    {
      q: 'What are the space and equipment requirements for the show?',
      a: 'A clear stage or floor area of at least 8x8 ft with a minimum ceiling height of 9–10 feet is ideal for comfortable club, ring, and ball toss trajectories. A standard party sound/music system with mic connectivity is required so our artist can sync their juggling beats with upbeat music.'
    },
    {
      q: 'Is the juggling safe for indoor living rooms and clubhouse banquets?',
      a: 'Yes, absolutely! For indoor home parties and banquet halls, our artists exclusively use soft silicone bounce balls, foam clubs, and lightweight plastic rings that will not scuff floors or damage interior furnishings. Fire juggling is reserved solely for approved open-air lawns.'
    },
    {
      q: 'Do children get to participate and interact during the show?',
      a: 'Yes! Our clown juggler weaves comedic volunteer segments into the act, inviting kids and parents onto the performance floor to test balance, catch comedy props, or attempt basic plate spinning under safe guidance, creating hilarious photo-ops.'
    },
    {
      q: 'What is your payment and booking confirmation policy?',
      a: 'To lock in your date, time slot, and artist allocation, a nominal advance payment is required upon booking confirmation. The remaining balance can be cleared seamlessly on the day of the event once the artist arrives and performs.'
    }
  ];

  return (
    <div className="bg-[#FFFDF9] min-h-screen text-[#111A2E] font-sans antialiased">
      {/* Breadcrumb Navigation */}
      <nav aria-label="Breadcrumb" className="bg-white border-b border-[#E2E8F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <ol className="flex items-center space-x-2 text-sm text-[#5A6E85]">
            <li>
              <a href="#" className="hover:text-[#EE3775] transition-colors flex items-center gap-1">
                <span>Home</span>
              </a>
            </li>
            <li><span className="text-gray-400">/</span></li>
            <li>
              <a href="#shows-entertainment" className="hover:text-[#EE3775] transition-colors">
                Shows & Entertainment
              </a>
            </li>
            <li><span className="text-gray-400">/</span></li>
            <li className="font-semibold text-[#EE3775] truncate">
              Clown and Juggling
            </li>
          </ol>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-8 pb-14 lg:py-16 bg-gradient-to-b from-[#FFF5F7] via-[#FFFDF9] to-[#FFFDF9] border-b border-[#F5E6EC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            
            {/* Left Column: Heading & Content */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 bg-[#FFE8ED] text-[#EE3775] text-xs sm:text-sm font-bold px-3.5 py-1.5 rounded-full border border-[#FFD0DB] shadow-sm">
                <Sparkles className="w-4 h-4 text-[#EE3775]" />
                <span>Premier Circus Comedy & High-Skill Juggling • Bangalore</span>
              </div>

              <div className="space-y-3">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#111A2E] tracking-tight leading-tight">
                  Clown and <span className="text-[#EE3775] relative inline-block">
                    Juggling Show
                    <GoldUnderline className="absolute left-0 -bottom-2 w-full text-[#EE3775]" />
                  </span> for Events in Bangalore
                </h1>
                <p className="text-base sm:text-lg text-[#5A6E85] font-normal leading-relaxed pt-2">
                  Dazzle your birthday party, corporate gala, or family festival with electrifying multi-object juggling combined with slapstick clown comedy! From spinning rings and flying clubs to belly-laugh antics, we keep children mesmerized and adults in stitches.
                </p>
              </div>

              {/* Quick Spec Highlights */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
                {highlights.map((h, i) => (
                  <div key={i} className="bg-white p-3.5 rounded-2xl border border-[#F3D7E2] shadow-sm text-center">
                    <p className="text-xs text-[#5A6E85] font-medium">{h.title}</p>
                    <p className="text-base sm:text-lg font-bold text-[#111A2E] mt-0.5">{h.value}</p>
                    <p className="text-[11px] text-[#869AB8] mt-0.5 truncate">{h.sub}</p>
                  </div>
                ))}
              </div>

              {/* CTAs */}
              <div className="pt-3 flex flex-wrap items-center gap-3 sm:gap-4">
                <a
                  href="#contact"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-[#EE3775] hover:bg-[#D82563] text-white font-bold rounded-xl shadow-lg shadow-[#EE3775]/25 hover:shadow-xl hover:shadow-[#EE3775]/35 transition-all duration-200 transform hover:-translate-y-0.5"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>Book Clown Juggler Now</span>
                </a>
                <a
                  href="tel:+919980029977"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-white hover:bg-gray-50 text-[#111A2E] font-bold rounded-xl border-2 border-[#111A2E]/15 hover:border-[#111A2E]/30 transition-all shadow-sm"
                >
                  <Phone className="w-4 h-4 text-[#EE3775]" />
                  <span>Call +91 99800 29977</span>
                </a>
              </div>

              <div className="flex flex-wrap items-center gap-4 text-xs sm:text-sm text-[#5A6E85] pt-1">
                <span className="flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  Seasoned Circus Artistes
                </span>
                <span className="flex items-center gap-1.5">
                  <Sparkles className="w-4 h-4 text-amber-500" />
                  Safe Indoor & Outdoor Props
                </span>
                <span className="flex items-center gap-1.5">
                  <MapPin className="w-4 h-4 text-[#EE3775]" />
                  All Over Bangalore
                </span>
              </div>
            </div>

            {/* Right Column: Hero Visual Showcase */}
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-md lg:max-w-none">
                <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-white">
                  <img
                    src="/assets/clown-juggling-banner-1.webp"
                    alt="Clown and Juggling Show Bangalore"
                    className="w-full h-[380px] sm:h-[440px] object-cover object-center transform hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent flex items-end p-6">
                    <div className="text-white space-y-1">
                      <span className="bg-[#EE3775] text-white text-xs font-black uppercase px-2.5 py-1 rounded-md tracking-wider">
                        High-Octane Party Art
                      </span>
                      <p className="text-xl font-bold">Unrivalled Circus Entertainment</p>
                      <p className="text-xs text-white/90">
                        Balls, clubs, rings, LED glow, and slapstick humor all in one unforgettable performance!
                      </p>
                    </div>
                  </div>
                </div>

                {/* Floating Trust Card */}
                <div className="absolute -bottom-6 -left-4 sm:-left-6 bg-white rounded-2xl p-4 shadow-xl border border-gray-100 flex items-center gap-3 z-10">
                  <div className="w-12 h-12 rounded-xl bg-[#FFE8ED] flex items-center justify-center text-[#EE3775] font-black text-xl shrink-0">
                    <Award className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="flex items-center gap-1 text-amber-400">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-current" />
                      ))}
                    </div>
                    <p className="text-xs font-bold text-[#111A2E] mt-0.5">Top-Rated Party Act</p>
                    <p className="text-[11px] text-[#5A6E85]">100% Guaranteed Smiles</p>
                  </div>
                </div>

                {/* Floating Props Badge */}
                <div className="absolute -top-3 -right-3 bg-[#111A2E] text-white rounded-2xl px-3.5 py-2 shadow-lg border border-white/20 flex items-center gap-2 z-10">
                  <Zap className="w-4 h-4 text-amber-400" />
                  <span className="text-xs font-bold">45 Mins Live Act</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* About The Show Section */}
      <section className="py-14 sm:py-16 bg-white border-b border-[#F0E6EA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            <div className="lg:col-span-5 order-2 lg:order-1">
              <div className="grid grid-cols-2 gap-3 sm:gap-4">
                <div className="space-y-3 sm:space-y-4">
                  <div className="rounded-2xl overflow-hidden shadow-md border border-gray-100 h-44 sm:h-52">
                    <img 
                      src="/assets/clown-and-juggling-1.webp" 
                      alt="Clown with Juggling Clubs" 
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="rounded-2xl overflow-hidden shadow-md border border-gray-100 h-36 sm:h-44">
                    <img 
                      src="/assets/clown-and-juggling-show-2.webp" 
                      alt="Juggling Show in Bangalore" 
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                </div>
                <div className="space-y-3 sm:space-y-4 pt-6">
                  <div className="rounded-2xl overflow-hidden shadow-md border border-gray-100 h-36 sm:h-44">
                    <img 
                      src="/assets/clown-and-juggling-2.webp" 
                      alt="Clown Entertaining Audience" 
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="rounded-2xl overflow-hidden shadow-md border border-gray-100 h-44 sm:h-52">
                    <img 
                      src="/assets/juggling.webp" 
                      alt="Juggler Performing Live" 
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 order-1 lg:order-2 space-y-6">
              <div className="inline-flex items-center gap-2 bg-[#FFE8ED] text-[#EE3775] text-xs font-bold px-3 py-1 rounded-full border border-[#FFD0DB]">
                <Smile className="w-3.5 h-3.5" />
                <span>Pure Laughter & Wonder</span>
              </div>
              
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#111A2E] leading-tight">
                Why Clown & Juggling is the <span className="text-[#EE3775]">Ultimate Party Magnet</span>
              </h2>

              <p className="text-base text-[#5A6E85] leading-relaxed">
                Do you want to infuse unstoppable joy and vibrant circus energy into your birthday party, school carnival, corporate family day, or apartment cultural evening? 7Delights brings Bangalore&apos;s most talented clown jugglers who combine world-class toss manipulation with side-splitting physical humor.
              </p>

              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#FFE8ED] text-[#EE3775] flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-[#111A2E]">Decades of Live Circus & Stage Experience</p>
                    <p className="text-xs text-[#5A6E85] mt-0.5">Our performers are seasoned professionals with mastery over multi-ball, clubs, rings, and comic audience improvisation.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#FFE8ED] text-[#EE3775] flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-[#111A2E]">High-Energy Music & Beat Synchrony</p>
                    <p className="text-xs text-[#5A6E85] mt-0.5">Every toss, catch, drop tease, and spinning stunt is performed in rhythm with energetic circus-themed beats through the venue music system.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#FFE8ED] text-[#EE3775] flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-[#111A2E]">Zero Setup Hassle for the Host</p>
                    <p className="text-xs text-[#5A6E85] mt-0.5">From costume dressing and stage prep to prop cleanup, our artist handles everything punctually so you can relax with your guests.</p>
                  </div>
                </div>
              </div>

              <div className="pt-2">
                <a
                  href="tel:+919980029977"
                  className="inline-flex items-center gap-2 text-[#EE3775] font-bold text-sm hover:underline"
                >
                  <Phone className="w-4 h-4" />
                  <span>Call +91 99800 29977 to check availability for your date</span>
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Repertoire / Specialities Section */}
      <section className="py-14 sm:py-16 bg-[#FFFDF9] border-b border-[#F0E6EA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto space-y-3 mb-12">
            <span className="text-xs uppercase font-extrabold tracking-widest text-[#EE3775] bg-[#FFE8ED] px-3.5 py-1 rounded-full border border-[#FFD0DB]">
              Performance Repertoire
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#111A2E]">
              Sensational Circus Stunts & Laughs
            </h2>
            <p className="text-sm sm:text-base text-[#5A6E85]">
              Our artists bring a versatile toolbox of high-dexterity juggling and comedy arts customized for your celebration.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {performanceSpecialties.map((item, index) => (
              <div 
                key={index} 
                className="bg-white rounded-3xl overflow-hidden border border-[#E8EFF7] shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col"
              >
                <div className="h-48 overflow-hidden relative">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-500"
                  />
                  <span className={`absolute top-3 left-3 text-[11px] font-bold px-2.5 py-1 rounded-lg border shadow-sm ${item.color}`}>
                    {item.tag}
                  </span>
                </div>
                <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
                  <div>
                    <p className="text-base font-bold text-[#111A2E] leading-snug">{item.title}</p>
                    <p className="text-xs text-[#5A6E85] mt-2 leading-relaxed">{item.desc}</p>
                  </div>
                  <div className="pt-2 border-t border-gray-100 flex items-center justify-between">
                    <span className="text-[11px] text-[#869AB8] flex items-center gap-1">
                      <Sparkles className="w-3.5 h-3.5 text-[#EE3775]" />
                      Live Audience Favorite
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Requirement & Reassurance Box */}
      <section className="py-12 bg-white border-b border-[#F0E6EA]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-[#111A2E] to-[#1C2B4B] rounded-3xl p-6 sm:p-10 text-white shadow-xl relative overflow-hidden">
            <div className="absolute -right-10 -bottom-10 w-48 h-48 bg-[#EE3775]/20 rounded-full blur-2xl"></div>
            <div className="relative z-10 grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
              <div className="md:col-span-8 space-y-3">
                <span className="bg-[#EE3775] text-white text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-md">
                  Host Convenience Guide
                </span>
                <h2 className="text-2xl sm:text-3xl font-black">
                  What We Need From You: Just A Music System!
                </h2>
                <p className="text-sm text-gray-300 leading-relaxed">
                  We bring our complete clown costume, juggling balls, clubs, rings, trick boxes, and comedic props. All we require at the venue is a clear floor/stage space and an audio connection (Bluetooth/AUX/mic) so our artist can sync their tricks with catchy party beats!
                </p>
                <div className="flex flex-wrap gap-4 text-xs text-gray-200 pt-2">
                  <span className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    Punctual Arrival 30–45 Mins Prior
                  </span>
                  <span className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    Full Stage Cleanup After Act
                  </span>
                  <span className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    Indoor Safe Soft Props
                  </span>
                </div>
              </div>
              <div className="md:col-span-4 text-center md:text-right">
                <a
                  href="tel:+919980029977"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#EE3775] hover:bg-[#D82563] text-white font-bold rounded-xl shadow-lg transition-all w-full md:w-auto"
                >
                  <Phone className="w-4 h-4" />
                  <span>Call +91 99800 29977</span>
                </a>
                <p className="text-[11px] text-gray-400 mt-2">Instant Booking & Custom Quotes</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-14 sm:py-16 bg-[#FFFDF9] border-b border-[#F0E6EA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto space-y-3 mb-10">
            <span className="text-xs uppercase font-extrabold tracking-widest text-[#EE3775] bg-[#FFE8ED] px-3.5 py-1 rounded-full border border-[#FFD0DB]">
              Live Moments
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#111A2E]">
              Clown and Juggling Gallery
            </h2>
            <p className="text-sm sm:text-base text-[#5A6E85]">
              Real celebrations across Bangalore brought to life by 7Delights clown jugglers.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages.map((img, i) => (
              <div 
                key={i} 
                className="group relative rounded-2xl overflow-hidden bg-white shadow-md border border-gray-100 h-64 sm:h-72"
              >
                <img 
                  src={img.src} 
                  alt={img.caption} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-90 transition-opacity flex flex-col justify-end p-5">
                  <span className="text-[11px] font-bold text-[#EE3775] bg-white/95 px-2 py-0.5 rounded w-max mb-1.5">
                    {img.tag}
                  </span>
                  <p className="text-sm font-bold text-white leading-tight">
                    {img.caption}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="py-14 sm:py-16 bg-white border-b border-[#F0E6EA]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-3 mb-10">
            <span className="text-xs uppercase font-extrabold tracking-widest text-[#EE3775] bg-[#FFE8ED] px-3.5 py-1 rounded-full border border-[#FFD0DB]">
              Got Questions?
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#111A2E]">
              Frequently Asked Questions
            </h2>
            <p className="text-sm sm:text-base text-[#5A6E85]">
              Everything you need to know about booking our clown & juggling artists in Bangalore.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div
                  key={index}
                  className="border border-[#E2E8F0] rounded-2xl bg-[#FFFDF9] overflow-hidden transition-all duration-200"
                >
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full px-5 sm:px-6 py-4 sm:py-5 text-left flex items-center justify-between gap-4 focus:outline-none"
                    aria-expanded={isOpen}
                  >
                    <span className="font-bold text-sm sm:text-base text-[#111A2E]">
                      {faq.q}
                    </span>
                    <span
                      className={`w-7 h-7 rounded-full bg-white border border-[#E2E8F0] flex items-center justify-center shrink-0 text-[#EE3775] transition-transform duration-200 ${
                        isOpen ? 'rotate-180 bg-[#FFE8ED]' : ''
                      }`}
                    >
                      <ChevronDown className="w-4 h-4" />
                    </span>
                  </button>

                  {isOpen && (
                    <div className="px-5 sm:px-6 pb-5 pt-1 text-xs sm:text-sm text-[#5A6E85] leading-relaxed border-t border-[#F0E6EA]/60 bg-white">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Additional Support Callout */}
          <div className="mt-10 p-6 rounded-2xl bg-[#FFE8ED]/40 border border-[#FFD0DB] flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
            <div>
              <h3 className="text-base font-bold text-[#111A2E]">Have a custom venue requirement or large carnival?</h3>
              <p className="text-xs text-[#5A6E85] mt-1">Our party entertainment specialists are ready to tailor a multi-artist circus package.</p>
            </div>
            <a
              href="tel:+919980029977"
              className="px-5 py-2.5 bg-[#EE3775] hover:bg-[#D82563] text-white text-xs font-bold rounded-xl shadow-md transition-all shrink-0"
            >
              Call +91 99800 29977
            </a>
          </div>
        </div>
      </section>

      {/* Bottom Floating/Fixed CTA Banner */}
      <section className="py-10 bg-gradient-to-r from-[#FFF5F7] to-[#FFE8ED] border-t border-[#FFD0DB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <h3 className="text-xl sm:text-2xl font-black text-[#111A2E]">
            Make Your Event Unforgettable With Juggling Stunts!
          </h3>
          <p className="text-xs sm:text-sm text-[#5A6E85] max-w-xl mx-auto">
            Book Bangalore&apos;s favorite clown jugglers today with 7Delights for assured punctuality, vibrant costumes, and high-energy excitement.
          </p>
          <div className="flex flex-wrap justify-center gap-3 pt-2">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#EE3775] hover:bg-[#D82563] text-white font-bold rounded-xl shadow-md text-xs sm:text-sm"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Book Online</span>
            </a>
            <a
              href="tel:+919980029977"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white text-[#111A2E] hover:bg-gray-50 font-bold rounded-xl border border-gray-200 text-xs sm:text-sm shadow-sm"
            >
              <Phone className="w-4 h-4 text-[#EE3775]" />
              <span>Call +91 99800 29977</span>
            </a>
            <a
              href="#shows-entertainment"
              className="inline-flex items-center gap-2 px-6 py-3 bg-transparent text-[#5A6E85] hover:text-[#111A2E] font-bold text-xs sm:text-sm"
            >
              <span>← Back to Shows & Entertainment</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

