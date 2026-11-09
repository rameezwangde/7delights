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
  Wand2, 
  Music, 
  Users, 
  Smile, 
  Zap, 
  Star, 
  Eye, 
  Layers, 
  Flame 
} from 'lucide-react';
import { GoldUnderline } from '../components/Doodles';

export default function MagicShowStagePage() {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const magicStyles = [
    {
      title: 'Grand Stage Illusions & Disappearing Acts',
      desc: 'Mesmerizing visual transformations, vanishing props, floating objects, and grand stage illusions designed to captivate crowds of any size with dramatic theatrical flair.',
      tag: 'Grand Stage',
      color: 'bg-[#FFE8ED] text-[#EE3775] border-[#FFD0DB]',
      image: '/assets/magic-shows-stage.webp'
    },
    {
      title: 'Interactive Comedy Magic & Audience Participation',
      desc: 'Hilarious comedy-infused magic where kids and special guests become the magician’s assistants, holding magic wands, triggering silly surprises, and laughing heartily.',
      tag: 'Kids Sensation',
      color: 'bg-[#FFF3DF] text-[#D97706] border-[#FFE4B8]',
      image: '/assets/kids-magic-show.webp'
    },
    {
      title: 'Mentalism & Telepathy Mind Tricks',
      desc: 'Mind-boggling psychological illusions, astonishing mind-reading feats, number predictions, and telepathic experiments that leave adults and tech-savvy guests utterly bewildered.',
      tag: 'Mind-Bending',
      color: 'bg-[#F2EDFF] text-[#7B61FF] border-[#E0D5FF]',
      image: '/assets/magic-shows.webp'
    },
    {
      title: 'Sleight-of-Hand & Dazzling Prop Manipulation',
      desc: 'Razor-sharp dexterity with classic silk scarves, rings, endless streamers, glowing ropes, cards, and live dove revelations performed with master finesse.',
      tag: 'Master Dexterity',
      color: 'bg-[#EBF7F2] text-[#00A86B] border-[#C8EFE0]',
      image: '/assets/magic-show-stage.webp'
    }
  ];

  const highlights = [
    {
      icon: <Wand2 className="w-5 h-5 text-[#EE3775]" />,
      title: 'Decades of Professional Illusion Artistry',
      desc: 'Our master magicians have performed across Bangalore for decades, perfecting clean, spellbinding techniques that engage both toddlers and corporate executives.'
    },
    {
      icon: <Sparkles className="w-5 h-5 text-[#7B61FF]" />,
      title: 'Customized Event & Birthday Themes',
      desc: 'We tailor the magic routines to your party theme, honoring the birthday child or guest of honor with special spotlight illusions and keepsake magical gifts.'
    },
    {
      icon: <Smile className="w-5 h-5 text-[#FF7A00]" />,
      title: '100% Wholesome Family Entertainment',
      desc: 'Every routine is packed with clean humor, polite audience interaction, infectious laughter, and age-appropriate wonder with zero offensive content.'
    },
    {
      icon: <ShieldCheck className="w-5 h-5 text-[#00A86B]" />,
      title: 'Punctual Setup & Stress-Free Coordination',
      desc: 'Our team arrives 45–60 minutes prior to setup the stage apparatus, magic table, banners, and props, ensuring seamless execution right on cue.'
    }
  ];

  const galleryImages = [
    { src: '/assets/magic-shows-stage.webp', alt: 'Grand Stage Magic Show Bangalore', title: 'Grand Stage Illusions' },
    { src: '/assets/kids-magic-show.webp', alt: 'Kids Magic Show Bangalore', title: 'Interactive Kids Comedy' },
    { src: '/assets/magic-shows.webp', alt: 'Mentalism & Mystery Bangalore', title: 'Mind Reading & Cards' },
    { src: '/assets/magic-show-stage.webp', alt: 'Stage Illusionist Bangalore', title: 'Live Dove & Prop Magic' },
    { src: '/assets/magic-show.webp', alt: 'Bangalore Magician for Parties', title: 'Theatrical Stage Setup' },
    { src: '/assets/magic-show-stage-show-banner.webp', alt: '7Delights Magic Show Bangalore', title: 'Spectacular Entertainment' }
  ];

  const faqs = [
    {
      q: 'How far in advance should I book 7Delights magic show stage for my event?',
      a: 'To ensure maximum availability of premium magic show stage artists, we recommend booking at least 1 to 6 weeks in advance for social parties & corporate events, and 3 to 6 months in advance for major weddings or large-scale corporate launches. However, if you have a last-minute request, contact us & we will do our best to make it happen!'
    },
    {
      q: 'How long does the Magic Stage Show typically last?',
      a: 'The performance duration is typically 45 minutes of non-stop entertainment, grand illusions, comedy, and active audience participation—ideal for holding everyone’s full attention.'
    },
    {
      q: 'How long does it take for your team to set up?',
      a: 'Setup times vary by venue, but our magic stage setup typically takes 45 to 60 minutes. We always coordinate directly with the venue management to ensure everything is flawlessly prepared well before your first guest arrives.'
    },
    {
      q: 'What are the organizer and venue requirements?',
      a: 'The venue needs to provide a stage or clear elevated area (approx. 10x8 ft), access to standard electrical power, a basic presentation table, and venue sound/PA system with a collar or cordless mic. (7Delights can also provide full sound amplification upon prior request).'
    },
    {
      q: 'What is your payment policy?',
      a: 'To secure your date, artists, and materials, we require an advance payment upon booking confirmation. The remaining balance is settled on the event day upon successful completion of the show.'
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
            <span className="text-[#111A2E] font-medium">Magic Show – Stage</span>
          </nav>
        </div>
      </div>

      {/* 2. Hero Section */}
      <section className="relative overflow-hidden pt-8 pb-12 lg:pt-12 lg:pb-16 bg-gradient-to-b from-[#FFF8F0] via-[#FFFDF9] to-[#FFFDF9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Content Column */}
            <div className="lg:col-span-7 space-y-5">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#FFE8ED] border border-[#FFD0DB] text-xs font-semibold text-[#EE3775]">
                <Wand2 className="w-3.5 h-3.5" />
                <span>Grand Stage Illusions • Comedy Magic • Family Entertainment</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#111A2E] leading-tight">
                Magic Show – Stage for Events in{' '}
                <span className="relative inline-block text-[#EE3775]">
                  Bangalore
                  <GoldUnderline className="absolute -bottom-2 left-0 w-full text-[#FFB703]" />
                </span>
              </h1>

              <p className="text-base sm:text-lg text-[#5A6E85] leading-relaxed">
                Magic shows in Bangalore are the perfect blend of adventure, mystery, and clean family humor! 
                7Delights arranges incredibly skilled and certified magicians performing captivating stage shows 
                with disappearing props, live dove illusions, telepathy, and hilarious audience participation 
                that leave children amazed and adults spellbound.
              </p>

              {/* Service Badges */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
                <div className="p-3 bg-white rounded-xl border border-gray-100 shadow-sm flex items-center gap-2.5">
                  <Clock className="w-5 h-5 text-[#EE3775] flex-shrink-0" />
                  <div>
                    <div className="text-xs text-[#5A6E85]">Duration</div>
                    <div className="text-xs sm:text-sm font-bold text-[#111A2E]">45 Minutes</div>
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
                    <div className="text-xs sm:text-sm font-bold text-[#111A2E]">All Over Bangalore</div>
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
                  Book Magic Show Now
                </a>
                <a 
                  href="https://wa.me/919980029977?text=Hi%207Delights,%20I%20would%20like%20to%20book%20a%20Magic%20Stage%20Show%20for%20our%20upcoming%20event." 
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
                    src="/assets/magic-shows-stage.webp" 
                    alt="7Delights Magic Show Stage Bangalore" 
                    className="w-full h-[340px] sm:h-[400px] object-cover group-hover:scale-105 transition-transform duration-500"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = '/assets/magic-show-stage-show-banner.webp';
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <span className="inline-block px-2.5 py-1 rounded bg-[#EE3775] text-[11px] font-bold tracking-wide uppercase mb-1">
                      Grand Stage Spectacular
                    </span>
                    <p className="text-lg font-bold">Bangalore’s Premier Magicians</p>
                    <p className="text-xs text-white/90">Stage illusions, sleight of hand, mentalism, and kids comedy.</p>
                  </div>
                </div>

                {/* Floating pill badge */}
                <div className="absolute -top-3 -right-3 bg-white shadow-lg rounded-xl p-3 border border-gray-100 flex items-center gap-2.5">
                  <div className="w-10 h-10 rounded-lg bg-[#FFF3DF] flex items-center justify-center text-[#D97706]">
                    <Award className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-[#111A2E]">Decades of Wonder</div>
                    <div className="text-[10px] text-[#5A6E85]">Certified Illusionists</div>
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
              Why Choose 7Delights Magic Shows?
            </h2>
            <p className="text-sm sm:text-base text-[#5A6E85] mt-2">
              Transforming birthdays, corporate galas, family day celebrations, and school day events into unforgettable celebrations of wonder.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {highlights.map((item, idx) => (
              <div 
                key={idx}
                className="p-5 rounded-xl bg-[#FFFDF9] border border-gray-100 hover:border-[#EE3775]/30 hover:shadow-md transition-all duration-200"
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

      {/* 4. Magic Performance Categories */}
      <section className="py-12 bg-[#FFF8F0]/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-[#EE3775] bg-[#FFE8ED] px-3 py-1 rounded-full">
              Magical Repertoire
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#111A2E] mt-3">
              Spellbound Techniques That Make Your Event Unforgettable!
            </h2>
            <p className="text-sm sm:text-base text-[#5A6E85] mt-2">
              Our magicians customize their repertoire to match the age group, venue setup, and theme of your event with breathtaking finesse.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {magicStyles.map((style, idx) => (
              <div 
                key={idx}
                className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col group"
              >
                <div className="h-44 overflow-hidden relative bg-gray-100">
                  <img 
                    src={style.image} 
                    alt={style.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = '/assets/magic-show-stage-show-banner.webp';
                    }}
                  />
                  <span className={`absolute top-3 left-3 text-[11px] font-semibold px-2.5 py-0.5 rounded-full border ${style.color}`}>
                    {style.tag}
                  </span>
                </div>
                <div className="p-5 flex-1 flex flex-col">
                  <h3 className="font-bold text-[#111A2E] text-base mb-2 group-hover:text-[#EE3775] transition-colors">
                    {style.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#5A6E85] leading-relaxed flex-1">
                    {style.desc}
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
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#EE3775]/10 rounded-full blur-3xl pointer-events-none" />
            
            <div className="relative z-10 grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
              <div className="md:col-span-8 space-y-3">
                <span className="text-xs font-bold uppercase tracking-wider text-[#FFB703] bg-white/10 px-3 py-1 rounded-full">
                  Flawless Event Execution
                </span>
                <h3 className="text-xl sm:text-2xl font-bold">
                  Sit Back & Watch Our Magicians Perform Seamless Setup & Showmanship!
                </h3>
                <p className="text-sm text-gray-300 leading-relaxed">
                  Our professional magicians arrive punctually with all illusion props, magic tables, drapery, and sound adapters. 
                  From pre-show sound checks to post-show tidying, 7Delights ensures a zero-stress experience for event hosts.
                </p>
                <div className="flex flex-wrap gap-4 pt-2 text-xs text-gray-200">
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-[#00A86B]" />
                    <span>Punctual Setup (45 mins prior)</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-[#00A86B]" />
                    <span>Complete Props & Illusions Supplied</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-[#00A86B]" />
                    <span>Clean Post-Performance Pack Up</span>
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
            <span className="text-xs font-bold uppercase tracking-wider text-[#EE3775] bg-[#FFE8ED] px-3 py-1 rounded-full">
              Live Magic Moments
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#111A2E] mt-3">
              Magic Show – Stage Show Gallery
            </h2>
            <p className="text-sm sm:text-base text-[#5A6E85] mt-2">
              Catch real glimpses of live audience enchantment, astonished kids, and classic stage illusions across Bangalore party halls and venues.
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
                    e.target.src = '/assets/magic-show-stage-show-banner.webp';
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
            <span className="text-xs font-bold uppercase tracking-wider text-[#EE3775] bg-[#FFE8ED] px-3 py-1 rounded-full">
              Got Questions?
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#111A2E] mt-3">
              Event FAQ ?
            </h2>
            <p className="text-sm text-[#5A6E85] mt-2">
              Everything you need to know about booking, requirements, and timing for 7Delights Stage Magic Shows.
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
                  className="w-full px-5 py-4 text-left flex items-center justify-between gap-4 font-bold text-sm sm:text-base text-[#111A2E] hover:text-[#EE3775] transition-colors"
                >
                  <span>{faq.q}</span>
                  <ChevronDown className={`w-5 h-5 flex-shrink-0 text-[#5A6E85] transition-transform duration-200 ${openFaq === idx ? 'rotate-180 text-[#EE3775]' : ''}`} />
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
          <div className="mt-8 p-5 rounded-xl bg-white border border-[#EE3775]/20 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <h3 className="font-bold text-[#111A2E] text-sm sm:text-base">Need a customized stage illusion or corporate mentalism act?</h3>
              <p className="text-xs text-[#5A6E85] mt-0.5">Speak directly with our Bangalore entertainment specialists.</p>
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

