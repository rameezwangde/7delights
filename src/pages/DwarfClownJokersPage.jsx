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
  Zap, 
  Star, 
  HeartHandshake 
} from 'lucide-react';
import { GoldUnderline } from '../components/Doodles';

export default function DwarfClownJokersPage() {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const performanceSpecialties = [
    {
      title: 'Grand Entrance Welcoming & Guest Escort',
      desc: 'Our charismatic dwarf clowns greet arriving attendees at the venue portal with cheerful antics, funny bows, flower bouquets, and warm photo moments.',
      tag: 'Grand Welcome',
      color: 'bg-[#FFE8ED] text-[#EE3775] border-[#FFD0DB]',
      image: '/assets/dwarf-clown.webp'
    },
    {
      title: 'Surprise Gifts & Goodie Distribution',
      desc: 'Handing out party return gifts, candy treats, glowing bands, and balloons directly to delighted children, creating instant joy and excitement.',
      tag: 'Gift Distribution',
      color: 'bg-[#FFF3DF] text-[#D97706] border-[#FFE4B8]',
      image: '/assets/dwarf-clown-jokers-2.webp'
    },
    {
      title: 'Lively Dance Antics & Slapstick Fun',
      desc: 'Energetic hook-step dance routines, funny acrobatics, squeaky shoes, and playful clown gags that draw applause and smiles across the party floor.',
      tag: 'Dance & Slapstick',
      color: 'bg-[#EDF5FF] text-[#2563EB] border-[#D0E2FF]',
      image: '/assets/dwarf-clown-jokers-3.webp'
    },
    {
      title: 'Photo Booth Posing & Family Memories',
      desc: 'Fun, photogenic posers who interact warmly with guests at the selfie booth or stage backdrop for Instagrammable keepsake memories.',
      tag: 'Photo Op Star',
      color: 'bg-[#EBF7F2] text-[#00A86B] border-[#C8EFE0]',
      image: '/assets/dwarf-clown-jokers.webp'
    }
  ];

  const highlights = [
    {
      icon: <Smile className="w-5 h-5 text-[#D97706]" />,
      title: 'Heart & Soul of the Event',
      desc: 'Dwarf clown jokers bring infectious charisma, lively animated movements, and vibrant circus attire that instantly elevates the celebration.'
    },
    {
      icon: <Users className="w-5 h-5 text-[#2563EB]" />,
      title: 'Ageless Entertainment Appeal',
      desc: 'Loved equally by wide-eyed toddlers, laughing youngsters, and nostalgic grandparents at both social parties and open-air corporate events.'
    },
    {
      icon: <Gift className="w-5 h-5 text-[#EE3775]" />,
      title: 'Interactive Surprise Gifts Distribution',
      desc: 'Our performers take responsibility for distributing party favors, return gifts, or promotional giveaways in a memorable, animated style.'
    },
    {
      icon: <ShieldCheck className="w-5 h-5 text-[#00A86B]" />,
      title: 'Highest Standards of Professionalism',
      desc: 'Punctual arrival, polite crowd etiquette, spotless custom clown costumes, and respectful interaction with all guests throughout.'
    }
  ];

  const galleryImages = [
    { src: '/assets/dwarf-clown.webp', alt: 'Dwarf Clown Welcome Bangalore', title: 'Grand Venue Welcome' },
    { src: '/assets/dwarf-clown-jokers-2.webp', alt: 'Dwarf Clown Joker Gifts Bangalore', title: 'Surprise Gift Distribution' },
    { src: '/assets/dwarf-clown-jokers-3.webp', alt: 'Dwarf Clown Dance Bangalore', title: 'Energetic Dance Antics' },
    { src: '/assets/dwarf-clown-jokers.webp', alt: 'Dwarf Clown Photo Op Bangalore', title: 'Fun Photo Opportunities' },
    { src: '/assets/live-cartoon-1.webp', alt: 'Party Characters Bangalore', title: 'Vibrant Circus Costumes' },
    { src: '/assets/dwarf-clown-banner.webp', alt: '7Delights Dwarf Clown Jokers Bangalore', title: 'Ageless Celebration Joy' }
  ];

  const faqs = [
    {
      q: 'How far in advance should I book 7Delights dwarf clown jokers for my event?',
      a: 'To ensure maximum availability of our professional dwarf clown jokers and costume characters, we recommend booking at least 1 to 6 weeks in advance for birthday parties & corporate functions, and 3 to 6 months in advance for major festivals or large-scale corporate launches.'
    },
    {
      q: 'What is the performance duration of Dwarf Clown Jokers?',
      a: 'The standard booking duration is 2 to 3 hours of continuous guest engagement, grand portal welcoming, photo ops, and gift distribution. Extra hours can also be scheduled upon advance request.'
    },
    {
      q: 'How long does it take for your team to set up?',
      a: 'Setup takes approximately 30 to 45 minutes. The artist arrives early to change into custom clown attire, apply welcoming makeup, and coordinate the gift distribution run-down with the event host.'
    },
    {
      q: 'What are the organizer and venue requirements?',
      a: 'The organizer needs to provide a small green room or private changing space with drinking water and a table for storing props/gifts. (All costumes and funny accessories are brought by 7Delights).'
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
            <span className="text-[#111A2E] font-medium">Dwarf-Clown-Jokers</span>
          </nav>
        </div>
      </div>

      {/* 2. Hero Section */}
      <section className="relative overflow-hidden pt-8 pb-12 lg:pt-12 lg:pb-16 bg-gradient-to-b from-[#FFF8F0] via-[#FFFDF9] to-[#FFFDF9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Content Column */}
            <div className="lg:col-span-7 space-y-5">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#FFF3DF] border border-[#FFE4B8] text-xs font-semibold text-[#D97706]">
                <Smile className="w-3.5 h-3.5" />
                <span>Enchanting Characters • Guest Welcoming • 2 to 3 Hours Duration</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#111A2E] leading-tight">
                Dwarf Clown Jokers for Events in{' '}
                <span className="relative inline-block text-[#EE3775]">
                  Bangalore
                  <GoldUnderline className="absolute -bottom-2 left-0 w-full text-[#FFB703]" />
                </span>
              </h1>

              <p className="text-base sm:text-lg text-[#5A6E85] leading-relaxed">
                Dwarf Clown Jokers enliven all types of events and make people remember your party! 
                Popular in children’s celebrations, wedding receptions, and corporate galas, these charismatic entertainers 
                welcome guests at the entrance, distribute surprise gifts, dance with kids, and pose for delightful photo memories 
                that stay cherished forever.
              </p>

              {/* Service Badges */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
                <div className="p-3 bg-white rounded-xl border border-gray-100 shadow-sm flex items-center gap-2.5">
                  <Clock className="w-5 h-5 text-[#EE3775] flex-shrink-0" />
                  <div>
                    <div className="text-xs text-[#5A6E85]">Duration</div>
                    <div className="text-xs sm:text-sm font-bold text-[#111A2E]">2 to 3 Hours</div>
                  </div>
                </div>

                <div className="p-3 bg-white rounded-xl border border-gray-100 shadow-sm flex items-center gap-2.5">
                  <Gift className="w-5 h-5 text-[#D97706] flex-shrink-0" />
                  <div>
                    <div className="text-xs text-[#5A6E85]">Activity</div>
                    <div className="text-xs sm:text-sm font-bold text-[#111A2E]">Welcoming & Gifts</div>
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
                  Book Dwarf Clown Now
                </a>
                <a 
                  href="https://wa.me/919980029977?text=Hi%207Delights,%20I%20would%20like%20to%20book%20Dwarf%20Clown%20Jokers%20for%20our%20upcoming%20event." 
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
                    src="/assets/dwarf-clown.webp" 
                    alt="7Delights Dwarf Clown Jokers Bangalore" 
                    className="w-full h-[340px] sm:h-[400px] object-cover group-hover:scale-105 transition-transform duration-500"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = '/assets/dwarf-clown-banner.webp';
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <span className="inline-block px-2.5 py-1 rounded bg-[#D97706] text-[11px] font-bold tracking-wide uppercase mb-1">
                      Crowd Favorite Entertainers
                    </span>
                    <h3 className="text-lg font-bold">Bangalore’s Best Dwarf Clown Jokers</h3>
                    <p className="text-xs text-white/90">Warm welcoming, gift distribution, dance gags, and photo ops.</p>
                  </div>
                </div>

                {/* Floating pill badge */}
                <div className="absolute -top-3 -right-3 bg-white shadow-lg rounded-xl p-3 border border-gray-100 flex items-center gap-2.5">
                  <div className="w-10 h-10 rounded-lg bg-[#FFF3DF] flex items-center justify-center text-[#D97706]">
                    <Award className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-[#111A2E]">Life of the Party</div>
                    <div className="text-[10px] text-[#5A6E85]">Animated Character Fun</div>
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
              Why Choose 7Delights Dwarf Clown Jokers?
            </h2>
            <p className="text-sm sm:text-base text-[#5A6E85] mt-2">
              Transforming birthdays, corporate family carnivals, and cultural galas with joyful warmth and memorable photo moments.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {highlights.map((item, idx) => (
              <div 
                key={idx}
                className="p-5 rounded-xl bg-[#FFFDF9] border border-gray-100 hover:border-[#D97706]/30 hover:shadow-md transition-all duration-200"
              >
                <div className="w-10 h-10 rounded-lg bg-white shadow-sm border border-gray-100 flex items-center justify-center mb-3">
                  {item.icon}
                </div>
                <h3 className="font-bold text-[#111A2E] text-base mb-1.5">{item.title}</h3>
                <p className="text-xs sm:text-sm text-[#5A6E85] leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Specialties Repertoire */}
      <section className="py-12 bg-[#FFF8F0]/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-[#D97706] bg-[#FFF3DF] px-3 py-1 rounded-full">
              Character Specialties
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#111A2E] mt-3">
              Specialties of 7Delights Dwarf Clown Jokers
            </h2>
            <p className="text-sm sm:text-base text-[#5A6E85] mt-2">
              Our dwarf clown performers are lively, exciting, and skilled in captivating guest attention across the entire event schedule.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {performanceSpecialties.map((item, idx) => (
              <div 
                key={idx}
                className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col group"
              >
                <div className="h-44 overflow-hidden relative bg-gray-100">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = '/assets/dwarf-clown-banner.webp';
                    }}
                  />
                  <span className={`absolute top-3 left-3 text-[11px] font-semibold px-2.5 py-0.5 rounded-full border ${item.color}`}>
                    {item.tag}
                  </span>
                </div>
                <div className="p-5 flex-1 flex flex-col">
                  <h3 className="font-bold text-[#111A2E] text-base mb-2 group-hover:text-[#D97706] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#5A6E85] leading-relaxed flex-1">
                    {item.desc}
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
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#D97706]/10 rounded-full blur-3xl pointer-events-none" />
            
            <div className="relative z-10 grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
              <div className="md:col-span-8 space-y-3">
                <span className="text-xs font-bold uppercase tracking-wider text-[#FFB703] bg-white/10 px-3 py-1 rounded-full">
                  Zero Hassle Execution
                </span>
                <h3 className="text-xl sm:text-2xl font-bold">
                  Sit Back & Watch Our Dwarf Clowns Bring Unmatched Energy!
                </h3>
                <p className="text-sm text-gray-300 leading-relaxed">
                  Our professional performers arrive well ahead of time with vibrant circus outfits, makeup, and comedy props. 
                  They coordinate seamlessly with your welcoming team, ensuring smooth guest greeting and gift handling.
                </p>
                <div className="flex flex-wrap gap-4 pt-2 text-xs text-gray-200">
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-[#00A86B]" />
                    <span>2 to 3 Hours of Guest Interaction</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-[#00A86B]" />
                    <span>Assists with Gifts & Cakes</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-[#00A86B]" />
                    <span>Highest Standards of Professionalism</span>
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
            <span className="text-xs font-bold uppercase tracking-wider text-[#D97706] bg-[#FFF3DF] px-3 py-1 rounded-full">
              Live Celebration Gallery
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#111A2E] mt-3">
              Dwarf Clown Jokers Gallery
            </h2>
            <p className="text-sm sm:text-base text-[#5A6E85] mt-2">
              Catch real glimpses of warm greetings, animated dance gags, and smiling children posing with our performers across Bangalore events.
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
                    e.target.src = '/assets/dwarf-clown-banner.webp';
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
            <span className="text-xs font-bold uppercase tracking-wider text-[#D97706] bg-[#FFF3DF] px-3 py-1 rounded-full">
              Got Questions?
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#111A2E] mt-3">
              Event FAQ ?
            </h2>
            <p className="text-sm text-[#5A6E85] mt-2">
              Everything you need to know about booking, requirements, and timing for 7Delights Dwarf Clown Jokers.
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
                  className="w-full px-5 py-4 text-left flex items-center justify-between gap-4 font-bold text-sm sm:text-base text-[#111A2E] hover:text-[#D97706] transition-colors"
                >
                  <span>{faq.q}</span>
                  <ChevronDown className={`w-5 h-5 flex-shrink-0 text-[#5A6E85] transition-transform duration-200 ${openFaq === idx ? 'rotate-180 text-[#D97706]' : ''}`} />
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
          <div className="mt-8 p-5 rounded-xl bg-white border border-[#D97706]/20 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <h4 className="font-bold text-[#111A2E] text-sm sm:text-base">Need multiple character clowns or a specific entrance theme?</h4>
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

