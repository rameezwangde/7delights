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
  Zap, 
  Star, 
  Users, 
  Music, 
  Droplet, 
  Lightbulb, 
  Wind 
} from 'lucide-react';
import { GoldUnderline } from '../components/Doodles';

export default function BubbleShowPage() {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const bubbleStyles = [
    {
      title: 'Giant Person-Inside-a-Bubble Experience',
      desc: 'The iconic party highlight where children and guests stand right inside gigantic iridescent soap bubbles for unforgettable photographs and awe.',
      tag: 'Grand Highlight',
      color: 'bg-[#FFE8ED] text-[#EE3775] border-[#FFD0DB]',
      image: '/assets/bubble-show.webp'
    },
    {
      title: 'Smoke-Filled & Volcano Bubble Sculptures',
      desc: 'Mesmerizing clouds of non-toxic white fog encased inside glossy transparent soap bubbles that release mystical smoke cascades when popped.',
      tag: 'Smoke Effects',
      color: 'bg-[#EDF5FF] text-[#2563EB] border-[#D0E2FF]',
      image: '/assets/bubble-show-1-1.webp'
    },
    {
      title: 'Luminescent LED & Glow-in-the-Dark Bubbles',
      desc: 'Brilliant optical displays blending vibrant LED stage lights and reflective bubble solutions creating floating kaleidoscopic sculptures.',
      tag: 'Glow Spectacle',
      color: 'bg-[#F2EDFF] text-[#7B61FF] border-[#E0D5FF]',
      image: '/assets/bubble-5.webp'
    },
    {
      title: 'Interactive Bubble Science & Hands-On Fun',
      desc: 'Engaging, cheerful demonstration of surface tension, caterpillar bubble chains, bouncing bubbles, and hands-on fun for all young attendees.',
      tag: 'Interactive Fun',
      color: 'bg-[#EBF7F2] text-[#00A86B] border-[#C8EFE0]',
      image: '/assets/bubble-4.webp'
    }
  ];

  const highlights = [
    {
      icon: <Sparkles className="w-5 h-5 text-[#EE3775]" />,
      title: 'Certified Non-Toxic Safe Solutions',
      desc: 'We formulate eco-friendly, dermatologically safe, tear-free bubble solutions that leave zero oily residue and are 100% kid-safe.'
    },
    {
      icon: <Wind className="w-5 h-5 text-[#7B61FF]" />,
      title: 'Master Bubble Sculpting Artistry',
      desc: 'Performed by veteran stage bubble artists using professional wand arrays, smoke chambers, and light tables for jaw-dropping visual art.'
    },
    {
      icon: <Smile className="w-5 h-5 text-[#FF7A00]" />,
      title: 'Audience Participation & Kid Photos',
      desc: 'Kids do not just watch from afar—they touch floating bubbles, hold smoking spheres, and get encased inside giant bubbles for pictures.'
    },
    {
      icon: <ShieldCheck className="w-5 h-5 text-[#00A86B]" />,
      title: 'Protective Floor Tarps & Tidy Pack-Up',
      desc: 'Our artists lay waterproof non-slip floor mats around the stage area, ensuring zero slippery residues and prompt tidy cleanup post-show.'
    }
  ];

  const galleryImages = [
    { src: '/assets/bubble-show.webp', alt: 'Giant Bubble Show Bangalore', title: 'Kid Inside Giant Bubble' },
    { src: '/assets/bubble-show-1-1.webp', alt: 'Smoke Filled Bubbles Bangalore', title: 'Mystical Smoke Spheres' },
    { src: '/assets/bubble-5.webp', alt: 'LED Bubble Art Bangalore', title: 'Glowing Stage Bubbles' },
    { src: '/assets/bubble-4.webp', alt: 'Bubble Sculpting Bangalore', title: 'Bouncing Bubble Chains' },
    { src: '/assets/bubble-show-1.webp', alt: 'Interactive Bubble Show Bangalore', title: 'Family Bubble Theatre' },
    { src: '/assets/bubble-show-2.webp', alt: 'Bangalore Bubble Artists', title: 'Spectacular Iridescent Magic' }
  ];

  const faqs = [
    {
      q: 'How far in advance should I book 7Delights bubble show for my event?',
      a: 'To ensure maximum availability of our professional bubble show artists, we recommend booking at least 1 to 4 weeks in advance for birthday celebrations & corporate family events, and 3 to 6 months in advance for major weddings or annual corporate launches.'
    },
    {
      q: 'What is the performance duration of the Bubble Show?',
      a: 'The performance duration is typically 45 minutes of non-stop bubble sculpting, smoke bubbles, glowing tricks, and audience participation, culminating with individual kid-in-a-bubble photography.'
    },
    {
      q: 'How long does it take for your team to set up?',
      a: 'Setup takes approximately 45 to 60 minutes. The artist lays down protective floor mats, prepares bubble solutions, and sets up lighting apparatus well before guests gather.'
    },
    {
      q: 'What are the venue requirements for an indoor or outdoor Bubble Show?',
      a: 'For indoor shows: A non-drafty area of approx. 10x8 ft, ceiling fans switched off during performance (AC is fine), a presentation table, and a power socket. (Outdoor shows are best performed in calm, shaded or low-wind courtyards).'
    },
    {
      q: 'What is your payment policy?',
      a: 'To secure your date and artist, we require an advance payment upon booking confirmation. The remaining balance is payable on the event day following completion of the performance.'
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
            <span className="text-[#111A2E] font-medium">Bubble Show</span>
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
                <Droplet className="w-3.5 h-3.5" />
                <span>Giant Smoke & LED Bubbles • Person-Inside-a-Bubble • 100% Non-Toxic</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#111A2E] leading-tight">
                Bubble Show for Events in{' '}
                <span className="relative inline-block text-[#EE3775]">
                  Bangalore
                  <GoldUnderline className="absolute -bottom-2 left-0 w-full text-[#FFB703]" />
                </span>
              </h1>

              <p className="text-base sm:text-lg text-[#5A6E85] leading-relaxed">
                Experience the mesmerizing world of giant bubbles, smoking globes, and glowing iridescent sculptures! 
                7Delights brings top-notch bubble artists who create fascinating shapes, smoke-filled spheres, and 
                put children directly inside gigantic bubbles, turning birthdays and family galas into wonder-filled celebrations.
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
                    <div className="text-xs text-[#5A6E85]">Music & Table</div>
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
                  Book Bubble Show Now
                </a>
                <a 
                  href="https://wa.me/919980029977?text=Hi%207Delights,%20I%20would%20like%20to%20book%20a%20Bubble%20Show%20for%20our%20upcoming%20event." 
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
                    src="/assets/bubble-show.webp" 
                    alt="7Delights Bubble Show Bangalore" 
                    className="w-full h-[340px] sm:h-[400px] object-cover group-hover:scale-105 transition-transform duration-500"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = '/assets/bubble-show-banner.webp';
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <span className="inline-block px-2.5 py-1 rounded bg-[#EE3775] text-[11px] font-bold tracking-wide uppercase mb-1">
                      Magical Visual Spectacle
                    </span>
                    <h3 className="text-lg font-bold">Bangalore’s Favorite Bubble Artists</h3>
                    <p className="text-xs text-white/90">Giant bubbles, smoke spheres, LED tricks, and kid encasement.</p>
                  </div>
                </div>

                {/* Floating pill badge */}
                <div className="absolute -top-3 -right-3 bg-white shadow-lg rounded-xl p-3 border border-gray-100 flex items-center gap-2.5">
                  <div className="w-10 h-10 rounded-lg bg-[#FFE8ED] flex items-center justify-center text-[#EE3775]">
                    <Award className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-[#111A2E]">100% Kid Safe</div>
                    <div className="text-[10px] text-[#5A6E85]">Non-Toxic Solution</div>
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
              Why Choose 7Delights Bubble Shows?
            </h2>
            <p className="text-sm sm:text-base text-[#5A6E85] mt-2">
              Transforming birthdays, naming ceremonies, school carnivals, and corporate family days with enchanting iridescent art.
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
                <h3 className="font-bold text-[#111A2E] text-base mb-1.5">{item.title}</h3>
                <p className="text-xs sm:text-sm text-[#5A6E85] leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Bubble Art Repertoire */}
      <section className="py-12 bg-[#FFF8F0]/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-[#EE3775] bg-[#FFE8ED] px-3 py-1 rounded-full">
              Optical Wonders
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#111A2E] mt-3">
              Captivating Bubble Show Techniques That Allure Every Guest!
            </h2>
            <p className="text-sm sm:text-base text-[#5A6E85] mt-2">
              Our bubble experts blend fluid physics, theatrical lighting, smoke effects, and cheerful music into a spellbinding presentation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {bubbleStyles.map((style, idx) => (
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
                      e.target.src = '/assets/bubble-show-banner.webp';
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
                  Floor-Safe & Clean
                </span>
                <h3 className="text-xl sm:text-2xl font-bold">
                  Sit Back & Watch Our Professionals Perform Clean, Tidy Artistry!
                </h3>
                <p className="text-sm text-gray-300 leading-relaxed">
                  Our performers bring dedicated non-slip waterproof floor coverings, professional bubble generators, 
                  and clean cloths. We leave the event floor completely dry, tidy, and spotless.
                </p>
                <div className="flex flex-wrap gap-4 pt-2 text-xs text-gray-200">
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-[#00A86B]" />
                    <span>Non-Slip Waterproof Mats Provided</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-[#00A86B]" />
                    <span>Non-Staining, Tear-Free Formula</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-[#00A86B]" />
                    <span>Dry Post-Show Floor Cleanup</span>
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
              Live Bubble Gallery
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#111A2E] mt-3">
              Captivating Bubble Show Moments
            </h2>
            <p className="text-sm sm:text-base text-[#5A6E85] mt-2">
              Catch real glimpses of smiling children encased in giant iridescent bubbles and mesmerizing smoke spheres across Bangalore parties.
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
                    e.target.src = '/assets/bubble-show-banner.webp';
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
              Everything you need to know about booking, requirements, and timing for 7Delights Bubble Shows.
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
              <h4 className="font-bold text-[#111A2E] text-sm sm:text-base">Planning an indoor party hall or outdoor garden event?</h4>
              <p className="text-xs text-[#5A6E85] mt-0.5">Consult with our Bangalore event specialists for optimal bubble setup conditions.</p>
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

