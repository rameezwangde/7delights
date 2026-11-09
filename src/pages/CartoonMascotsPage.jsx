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
  Gift, 
  Camera, 
  HeartHandshake, 
  Star, 
  Cake,
  Footprints
} from 'lucide-react';
import { GoldUnderline } from '../components/Doodles';

export default function CartoonMascotsPage() {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const mascotSpecialties = [
    {
      title: 'Grand Entrance Welcoming & Guest Greeter',
      desc: 'Our life-sized cuddly cartoon mascots stand at the entrance portal welcoming kids and guests with warm high-fives, playful bows, and memorable greetings.',
      tag: 'Grand Welcome',
      color: 'bg-[#FFE8ED] text-[#EE3775] border-[#FFD0DB]',
      image: '/assets/live-cartoon-1.webp'
    },
    {
      title: 'Cake Cutting Ceremony Accompaniment',
      desc: 'Mascots gather around the birthday child or guest of honor during the cake cutting, clapping, cheering, and orchestrating magical photo moments.',
      tag: 'Cake Cutting Star',
      color: 'bg-[#EDF5FF] text-[#2563EB] border-[#D0E2FF]',
      image: '/assets/live-cartoon-2.webp'
    },
    {
      title: 'Return Gift & Surprise Goodies Distribution',
      desc: 'Handing out return gifts, candies, glow bracelets, and goodie boxes directly to thrilled children, turning simple gift-giving into a dream experience.',
      tag: 'Gift Distribution',
      color: 'bg-[#FFF3DF] text-[#D97706] border-[#FFE4B8]',
      image: '/assets/live-cartoon-3.webp'
    },
    {
      title: 'Lively Dance Antics & Photo-Booth Posing',
      desc: 'Energetic hook-step mascot dances, musical freeze games, and posing patiently with parents and kids at stage backdrops and selfie booths.',
      tag: 'Dance & Photo Ops',
      color: 'bg-[#EBF7F2] text-[#00A86B] border-[#C8EFE0]',
      image: '/assets/live-cartoon-4.webp'
    }
  ];

  const highlights = [
    { title: 'Standard Duration', value: '2 to 3 Hours', sub: 'Extendable upon client request' },
    { title: 'Character Selection', value: 'Wide Variety', sub: 'Mickey, Minnie, Donald, Dora, Chhota Bheem & more' },
    { title: 'Suit Quality', value: 'Plush & Hygienic', sub: 'Deep-cleaned & sanitized before every event' },
    { title: 'Requirements', value: 'A Table & Greenroom', sub: 'Changing area for comfortable performance breaks' }
  ];

  const galleryImages = [
    { src: '/assets/live-cartoon-1.webp', caption: 'Interactive Entrance Welcoming & High-Fives', tag: 'Welcome Greeter' },
    { src: '/assets/live-cartoon-2.webp', caption: 'Vibrant Plush Character Costumes', tag: 'Plush Mascots' },
    { src: '/assets/live-cartoon-3.webp', caption: 'Surprise Goodie & Gift Box Handout', tag: 'Gift Distribution' },
    { src: '/assets/live-cartoon-4.webp', caption: 'Musical Dance Moves & Group Games', tag: 'Party Dance' },
    { src: '/assets/mascots-cartoons-scaled.webp', caption: 'Beloved Mascot Roster for Grand Celebrations', tag: 'Full Roster' },
    { src: '/assets/live-cartoon-characters.webp', caption: 'Cherished Family & Kids Photo Moments', tag: 'Photo Memories' }
  ];

  const faqs = [
    {
      q: 'How far in advance should I book 7Delights live cartoon mascots for my event?',
      a: 'To ensure maximum availability of your child\'s preferred mascot characters and specific theme costumes, we recommend booking at least 1 to 4 weeks in advance for birthday parties and school events, and 1 to 2 months in advance for festival celebrations or large corporate family days. Subject to availability, last-minute requests are also accommodated!'
    },
    {
      q: 'Which popular cartoon characters and mascots are available?',
      a: 'We offer an extensive wardrobe of world-famous and beloved cartoon characters, including Mickey Mouse, Minnie Mouse, Donald Duck, Winnie the Pooh, Dora, Chhota Bheem, Minions, Lion King, Teddy Bear, Panda, and more. If you have a specific themed party requirement, let us know and we will match it!'
    },
    {
      q: 'What are the venue requirements for the mascot artist?',
      a: 'Organizers simply need to provide a private, clean changing/greenroom area where the artist can suit up and take brief hydration breathers, along with a table. An assistant or party coordinator will accompany the mascot to guide their path safely through the crowd.'
    },
    {
      q: 'How are the mascot costumes cleaned and maintained?',
      a: 'Hygiene and freshness are our highest priority. All mascot suits and oversized heads undergo rigorous dry cleaning, fabric sanitization, and deodorization before every booking to ensure a spotless, fresh, and welcoming hug for all children.'
    },
    {
      q: 'Can the mascot participate in the cake cutting and distribute gifts?',
      a: 'Yes, absolutely! Escorting the birthday boy/girl to the stage, posing alongside them during the cake cutting ceremony, and handing out return gift hampers or goodie boxes are some of our most requested mascot duties.'
    },
    {
      q: 'What is your payment and booking policy?',
      a: 'A nominal advance token payment is collected to reserve the specific costume character and artist for your confirmed event date and slot. The remaining balance is payable on the day of the event once the artist arrives and completes the performance.'
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
              Live Cartoon Mascots
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
                <span>Life-Sized Animated Cartoon Characters & Mascots • Bangalore</span>
              </div>

              <div className="space-y-3">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#111A2E] tracking-tight leading-tight">
                  Live Cartoon <span className="text-[#EE3775] relative inline-block">
                    Mascots
                    <GoldUnderline className="absolute left-0 -bottom-2 w-full text-[#EE3775]" />
                  </span> for Events in Bangalore
                </h1>
                <p className="text-base sm:text-lg text-[#5A6E85] font-normal leading-relaxed pt-2">
                  Bring your child&apos;s wildest cartoon dreams alive with 7Delights! From grand entrance welcoming and birthday cake cutting accompaniment to energetic dance routines and handing out return gifts, our cuddly mascot artistes make every party unforgettable.
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
                  <span>Book Cartoon Mascot</span>
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
                  Hygienically Sanitized Suits
                </span>
                <span className="flex items-center gap-1.5">
                  <Smile className="w-4 h-4 text-amber-500" />
                  Kid-Friendly Performers
                </span>
                <span className="flex items-center gap-1.5">
                  <MapPin className="w-4 h-4 text-[#EE3775]" />
                  Service Across Bangalore
                </span>
              </div>
            </div>

            {/* Right Column: Hero Visual Showcase */}
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-md lg:max-w-none">
                <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-white">
                  <img
                    src="/assets/mascott-cartoon-banner.webp"
                    alt="Live Cartoon Mascots Bangalore"
                    className="w-full h-[380px] sm:h-[440px] object-cover object-center transform hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent flex items-end p-6">
                    <div className="text-white space-y-1">
                      <span className="bg-[#EE3775] text-white text-xs font-black uppercase px-2.5 py-1 rounded-md tracking-wider">
                        Kids Party Favorite
                      </span>
                      <p className="text-xl font-bold">Unforgettable Childhood Memories</p>
                      <p className="text-xs text-white/90">
                        Life-sized characters dancing, greeting guests, and posing with the birthday star!
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
                    <p className="text-xs font-bold text-[#111A2E] mt-0.5">500+ Happy Parties</p>
                    <p className="text-[11px] text-[#5A6E85]">100% Kid-Safe & Cheerful</p>
                  </div>
                </div>

                {/* Floating Duration Badge */}
                <div className="absolute -top-3 -right-3 bg-[#111A2E] text-white rounded-2xl px-3.5 py-2 shadow-lg border border-white/20 flex items-center gap-2 z-10">
                  <Clock className="w-4 h-4 text-amber-400" />
                  <span className="text-xs font-bold">2 to 3 Hours Live</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-14 sm:py-16 bg-white border-b border-[#F0E6EA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            <div className="lg:col-span-5 order-2 lg:order-1">
              <div className="grid grid-cols-2 gap-3 sm:gap-4">
                <div className="space-y-3 sm:space-y-4">
                  <div className="rounded-2xl overflow-hidden shadow-md border border-gray-100 h-44 sm:h-52">
                    <img 
                      src="/assets/live-cartoon-1.webp" 
                      alt="Cartoon Mascot Greeting Kids" 
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="rounded-2xl overflow-hidden shadow-md border border-gray-100 h-36 sm:h-44">
                    <img 
                      src="/assets/live-cartoon-3.webp" 
                      alt="Cartoon Mascot with Presents" 
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                </div>
                <div className="space-y-3 sm:space-y-4 pt-6">
                  <div className="rounded-2xl overflow-hidden shadow-md border border-gray-100 h-36 sm:h-44">
                    <img 
                      src="/assets/live-cartoon-4.webp" 
                      alt="Mascot Dancing with Guests" 
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="rounded-2xl overflow-hidden shadow-md border border-gray-100 h-44 sm:h-52">
                    <img 
                      src="/assets/live-cartoon-2.webp" 
                      alt="Life Sized Character Mascot" 
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 order-1 lg:order-2 space-y-6">
              <div className="inline-flex items-center gap-2 bg-[#FFE8ED] text-[#EE3775] text-xs font-bold px-3 py-1 rounded-full border border-[#FFD0DB]">
                <Smile className="w-3.5 h-3.5" />
                <span>The Heartbeat of Children&apos;s Parties</span>
              </div>
              
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#111A2E] leading-tight">
                Why Live Mascots Transform <span className="text-[#EE3775]">Any Event Atmosphere</span>
              </h2>

              <p className="text-base text-[#5A6E85] leading-relaxed">
                Live Cartoon Mascots enliven celebrations, social gatherings, school carnivals, and corporate family days by bringing the world&apos;s most beloved fictional characters into tangible reality! Children light up with wonder when their screen hero steps into the room for a real hug.
              </p>

              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#FFE8ED] text-[#EE3775] flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-[#111A2E]">Animated Movements & Joyful Energy</p>
                    <p className="text-xs text-[#5A6E85] mt-0.5">Our mascot artists are trained physical performers who embody the signature walks, funny gestures, and cheerful mannerisms of every character.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#FFE8ED] text-[#EE3775] flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-[#111A2E]">Cake Cutting Centerpiece & Gift Distribution</p>
                    <p className="text-xs text-[#5A6E85] mt-0.5">Mascots accompany the birthday boy or girl right at the cake table, leading the birthday song cheer and handing out return favors.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#FFE8ED] text-[#EE3775] flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-[#111A2E]">Punctual & Stress-Free Coordination</p>
                    <p className="text-xs text-[#5A6E85] mt-0.5">7Delights handles complete logistics: prompt arrival, dedicated assistant handler, costume dressing, and disciplined performance schedules.</p>
                  </div>
                </div>
              </div>

              <div className="pt-2">
                <a
                  href="tel:+919980029977"
                  className="inline-flex items-center gap-2 text-[#EE3775] font-bold text-sm hover:underline"
                >
                  <Phone className="w-4 h-4" />
                  <span>Call +91 99800 29977 to pick your favorite cartoon character</span>
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Specialties Repertoire Grid */}
      <section className="py-14 sm:py-16 bg-[#FFFDF9] border-b border-[#F0E6EA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto space-y-3 mb-12">
            <span className="text-xs uppercase font-extrabold tracking-widest text-[#EE3775] bg-[#FFE8ED] px-3.5 py-1 rounded-full border border-[#FFD0DB]">
              Mascot Repertoire
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#111A2E]">
              What Our Mascots Do At Your Celebration
            </h2>
            <p className="text-sm sm:text-base text-[#5A6E85]">
              Tailored interactive routines designed to keep kids entertained and provide unforgettable keepsake family photos.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {mascotSpecialties.map((item, index) => (
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
                      Unmatched Kid Magnet
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Host Requirement Guide */}
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
                  What We Need: A Table & A Small Changing Space!
                </h2>
                <p className="text-sm text-gray-300 leading-relaxed">
                  We bring the full sanitized plush costume, accessories, and a supportive team assistant. All the host needs to provide is a private, clean greenroom or changing area where the performer can suit up comfortably, take hydration breathers, and a table to keep belongings.
                </p>
                <div className="flex flex-wrap gap-4 text-xs text-gray-200 pt-2">
                  <span className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    Punctual Arrival 45 Mins Prior
                  </span>
                  <span className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    Dedicated Assistant Handler
                  </span>
                  <span className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    Spotless Sanitized Costumes
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
                <p className="text-[11px] text-gray-400 mt-2">Instant Booking & Custom Themes</p>
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
              Live Cartoon Mascots Gallery
            </h2>
            <p className="text-sm sm:text-base text-[#5A6E85]">
              Glimpses of real party smiles, hugs, and dance moments across Bangalore.
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
              Everything you need to know about booking our live cartoon mascots in Bangalore.
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
              <h3 className="text-base font-bold text-[#111A2E]">Want a pair of mascots or a custom themed character?</h3>
              <p className="text-xs text-[#5A6E85] mt-1">Our party coordinators can arrange character duos (e.g., Mickey & Minnie) for double the joy.</p>
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
            Make Your Child&apos;s Party Magical With Live Mascots!
          </h3>
          <p className="text-xs sm:text-sm text-[#5A6E85] max-w-xl mx-auto">
            Book Bangalore&apos;s most beloved cartoon mascots with 7Delights today for guaranteed punctuality, sanitized costumes, and pure happiness.
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

