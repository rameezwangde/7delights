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
  Drum, 
  Users, 
  Flame, 
  Award,
  Video,
  Star,
  Tv,
  HeartHandshake,
  Layers,
  Sparkle
} from 'lucide-react';

export default function ChendaMelamPage() {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const chendaServices = [
    {
      title: 'Traditional Kerala Temple Melam Ensemble',
      desc: 'Master percussionists in traditional Kerala Kasavu Mundu playing authentic cylindrical Chendas, supported by Ilathalam bronze cymbals and Kurumkuzhal reeds.',
      tag: 'Kerala Heritage',
      color: 'bg-[#FFE8ED] text-[#EE3775] border-[#FFD0DB]',
      image: '/assets/chenda-melam-main.webp'
    },
    {
      title: 'Grand VIP Welcome & Processional Rallies',
      desc: 'The thunderous, escalating tempo of Chenda Melam announces the arrival of VIP guests, CEOs, and wedding couple processions with unmatched ceremonial dignity.',
      tag: 'Regal Processions',
      color: 'bg-[#FFF3DF] text-[#D97706] border-[#FFE4B8]',
      image: '/assets/chenda-melam-g1.webp'
    },
    {
      title: 'Panchari Melam & Shingari Melam Rhythms',
      desc: 'High-tempo rhythmic structures that build from slow majestic beats to a thrilling, roaring climax that commands the rapt attention of every single onlooker.',
      tag: 'Shingari Melam',
      color: 'bg-[#F2EDFF] text-[#7B61FF] border-[#E0D5FF]',
      image: '/assets/chenda-melam-g2.webp'
    },
    {
      title: 'Inaugurations & Temple Festivals',
      desc: 'Awe-inspiring musical centerpieces for showroom inaugurations, cultural festivals, Onam celebrations, temple utsavams, and public gatherings across Bengaluru.',
      tag: 'Inaugurations',
      color: 'bg-[#EBF7F2] text-[#00A86B] border-[#C8EFE0]',
      image: '/assets/chenda-melam-g3.webp'
    }
  ];

  const highlights = [
    {
      icon: <Drum className="w-5 h-5 text-[#EE3775]" />,
      title: 'Authentic Kerala Masters',
      desc: 'Seasoned percussion artists with lifelong training in temple drumming rituals.'
    },
    {
      icon: <Sparkles className="w-5 h-5 text-[#7B61FF]" />,
      title: 'Traditional Kasavu Mundu',
      desc: 'Authentic Kerala gold-bordered Kasavu attire and shoulder straps creating majestic visual grandeur.'
    },
    {
      icon: <Flame className="w-5 h-5 text-[#00A86B]" />,
      title: 'Escalating Rhythmic Energy',
      desc: 'Dynamic pacing that progresses through classical rhythm cycles to a breathtaking crescendo.'
    },
    {
      icon: <HeartHandshake className="w-5 h-5 text-[#D97706]" />,
      title: 'Flexible Troupe Sizes',
      desc: 'Available as compact 5-percussionist ceremonial welcomes or grand 15-25 artist processional orchestras.'
    }
  ];

  const galleryImages = [
    { src: '/assets/chenda-melam-banner.webp', alt: 'Chenda Melam Performance Banner' },
    { src: '/assets/chenda-melam-main.webp', alt: 'Kerala Chenda Melam Percussion Ensemble' },
    { src: '/assets/chenda-melam-g1.webp', alt: 'Grand Processional Chenda Melam' },
    { src: '/assets/chenda-melam-g2.webp', alt: 'Shingari Melam Rhythmic Show' }
  ];

  const faqs = [
    {
      q: 'How far in advance should I book 7Delights Kerala Chenda Melam for my event?',
      a: 'To ensure maximum availability of our authentic Kerala Chenda Melam troupe and instruments, we recommend booking at least 1 to 6 weeks in advance for corporate inaugurations and social celebrations, and 2 to 4 months in advance during peak festival seasons (Onam, Vishu, wedding Muhurtham dates). Urgent last-minute requests can also be accommodated based on troupe availability.'
    },
    {
      q: 'How long does a Chenda Melam performance typically last?',
      a: 'A standard Chenda Melam engagement runs for 2 to 3 hours total. This generally includes 2 to 3 high-intensity performance sets (20 to 30 minutes each) for guest arrivals, ribbon-cutting ceremonies, or processional entrances, interspersed with short resting periods for the drummers.'
    },
    {
      q: 'Can Chenda Melam be performed both indoors and outdoors?',
      a: 'Yes! Chenda Melam is spectacular outdoors for grand processions, entrance pathways, and temple grounds. For indoor auditoriums or banquet halls, the acoustic resonance of the drums and cymbals creates a majestic, regal ambiance without requiring any sound amplification.'
    },
    {
      q: 'What are the venue requirements for the Chenda Melam artists?',
      a: 'All our artists require is a clean, secure green room / changing area with drinking water, and space to line up or assemble in circular formations.'
    },
    {
      q: 'What is your payment policy?',
      a: 'To confirm your date and artist line-up, an advance booking deposit is required upon signing the agreement. The remaining balance is completed in structured milestones leading up to or on the day of the event.'
    }
  ];

  return (
    <div className="w-full bg-[#FFFDF9] text-[#111A2E]">
      {/* Top Breadcrumb & Hero */}
      <section className="relative w-full bg-gradient-to-b from-[#FFF5F7] via-[#FFFDF9] to-[#FFFDF9] pt-8 pb-14 px-4 sm:px-6 lg:px-8 border-b border-[#F5E6E8]">
        <div className="max-w-7xl mx-auto">
          {/* Breadcrumb Navigation */}
          <nav className="flex items-center gap-2 text-xs sm:text-sm text-[#5A6E85] mb-6 flex-wrap">
            <a href="#" className="hover:text-[#EE3775] transition-colors">Home</a>
            <span>/</span>
            <a href="#dance-troup" className="hover:text-[#EE3775] transition-colors">Dance Troupe & Music</a>
            <span>/</span>
            <span className="text-[#111A2E] font-medium">Chenda Melam</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FFE8ED] border border-[#FFD0DB] text-[#EE3775] text-xs sm:text-sm font-semibold tracking-wide">
                <Sparkles className="w-4 h-4" />
                <span>The Majestic Sounds of Kerala</span>
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#111A2E] leading-tight">
                Authentic <span className="text-[#EE3775]">Kerala Chenda Melam</span> Troupe in Bangalore
              </h1>
              <p className="text-base sm:text-lg text-[#5A6E85] leading-relaxed">
                Bring the regal, thunderous percussion of God's Own Country to your celebrations! From grand wedding baraat welcomes and corporate inaugurations to Onam festivals and cultural processions across Bengaluru.
              </p>

              {/* Quick Spec Pills */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
                <div className="flex items-center gap-2.5 p-3 rounded-xl bg-white border border-[#F3E8E9] shadow-sm">
                  <Clock className="w-5 h-5 text-[#EE3775] shrink-0" />
                  <div>
                    <p className="text-xs text-[#5A6E85]">Duration</p>
                    <p className="text-xs sm:text-sm font-bold text-[#111A2E]">2 to 3 hours</p>
                  </div>
                </div>
                <div className="flex items-center gap-2.5 p-3 rounded-xl bg-white border border-[#F3E8E9] shadow-sm">
                  <MapPin className="w-5 h-5 text-[#7B61FF] shrink-0" />
                  <div>
                    <p className="text-xs text-[#5A6E85]">Location</p>
                    <p className="text-xs sm:text-sm font-bold text-[#111A2E]">All Across Bangalore</p>
                  </div>
                </div>
                <div className="flex items-center gap-2.5 p-3 rounded-xl bg-white border border-[#F3E8E9] shadow-sm col-span-2 sm:col-span-1">
                  <ShieldCheck className="w-5 h-5 text-[#00A86B] shrink-0" />
                  <div>
                    <p className="text-xs text-[#5A6E85]">Art Form</p>
                    <p className="text-xs sm:text-sm font-bold text-[#111A2E]">Master Percussionists</p>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-4">
                <a 
                  href="tel:+919980029977"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-[#EE3775] hover:bg-[#D82A64] text-white font-bold text-sm sm:text-base shadow-lg shadow-[#EE3775]/25 transition-all transform hover:-translate-y-0.5"
                >
                  <Phone className="w-4 h-4" />
                  <span>Call +91 99800 29977</span>
                </a>
                <a 
                  href="https://wa.me/919980029977?text=Hi%207Delights,%20I%20am%20interested%20in%20booking%20a%20Kerala%20Chenda%20Melam%20Troupe%20for%20our%20event."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-white hover:bg-[#F9FAFB] text-[#111A2E] border border-[#E5E7EB] font-bold text-sm sm:text-base shadow-sm transition-all"
                >
                  <MessageCircle className="w-4 h-4 text-[#25D366]" />
                  <span>Chat on WhatsApp</span>
                </a>
              </div>
            </div>

            {/* Right Media Card */}
            <div className="lg:col-span-5">
              <div className="relative rounded-2xl overflow-hidden bg-white shadow-xl border border-[#F0E6E8] p-2">
                <img 
                  src="/assets/chenda-melam-main.webp" 
                  alt="Kerala Chenda Melam Troupe in Bangalore" 
                  className="w-full h-[320px] sm:h-[400px] object-cover rounded-xl"
                />
                <div className="absolute top-4 right-4 bg-[#111A2E]/85 backdrop-blur-md text-white text-xs font-semibold px-3 py-1.5 rounded-full flex items-center gap-1.5 shadow">
                  <Drum className="w-3.5 h-3.5 text-[#EE3775]" />
                  <span>Kerala Temple Beats</span>
                </div>
                <div className="p-3 bg-white">
                  <p className="text-xs text-[#5A6E85] text-center font-medium">
                    Master percussionists playing cylindrical Chendas, bronze Ilathalam cymbals, and Kurumkuzhal.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Overview & Cultural Significance */}
      <section className="py-14 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7 space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FFE8ED] text-[#EE3775] text-xs font-semibold">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Experience The Thunderous Rhythms of God's Own Country</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#111A2E]">
              A Regal Percussion Orchestra of Power, Precision &amp; Prestige
            </h2>
            <p className="text-sm sm:text-base text-[#5A6E85] leading-relaxed">
              <strong>Chenda Melam</strong> is a classical percussion orchestra native to Kerala, held sacred during temple festivals like Thrissur Pooram and all major auspicious celebrations. The ensemble is led by the Chenda — a powerful cylindrical wooden drum played with sticks — and accompanied by bronze Ilathalam cymbals and wind horns.
            </p>
            <p className="text-sm sm:text-base text-[#5A6E85] leading-relaxed">
              At <strong>7Delights.in</strong>, we arrange authentic master percussionists who execute intricate rhythm cycles (Kooru) that build gradually in tempo, climaxing in an electrifying crescendo that commands the total awe of all attendees.
            </p>
            <ul className="space-y-2.5 pt-2">
              {[
                'Authentic artists trained in Kerala temple traditions and Shingari Melam structures',
                'Traditional gold-bordered Kasavu Mundu attire and ceremonial shoulder sashes',
                'Natural acoustic volume capable of commanding open roadways and massive festival grounds',
                'Ideal for VIP welcoming lines, groom wedding entries, and corporate ribbon cuttings',
                'Flexible group setups from 5-member ceremonial welcomes to 15-25 member grand orchestras'
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#111A2E] font-medium">
                  <CheckCircle className="w-4 h-4 text-[#EE3775] shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-5 grid grid-cols-2 gap-4">
            {galleryImages.map((img, i) => (
              <div key={i} className="group relative rounded-xl overflow-hidden shadow-md border border-[#F3E8E9] aspect-[4/3]">
                <img 
                  src={img.src} 
                  alt={img.alt} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-2.5">
                  <span className="text-white text-xs font-semibold">{img.alt}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-14 px-4 sm:px-6 lg:px-8 bg-[#FAF6F4] border-y border-[#F3E8E9]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FFE8ED] text-[#EE3775] text-xs font-semibold mb-2">
              <Drum className="w-3.5 h-3.5" />
              <span>Chenda Melam Formats</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#111A2E]">
              Our Specialized Chenda Melam Offerings
            </h2>
            <p className="text-xs sm:text-sm text-[#5A6E85] mt-2">
              From ceremonial welcomes to high-tempo Shingari Melam processional rhythms.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {chendaServices.map((srv, index) => (
              <div 
                key={index} 
                className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md border border-[#F0E6E8] transition-all flex flex-col sm:flex-row group"
              >
                <div className="sm:w-2/5 h-48 sm:h-auto overflow-hidden relative shrink-0">
                  <img 
                    src={srv.image} 
                    alt={srv.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-3 left-3">
                    <span className={`text-[10px] sm:text-xs font-bold px-2.5 py-1 rounded-full border shadow-sm ${srv.color}`}>
                      {srv.tag}
                    </span>
                  </div>
                </div>
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-base sm:text-lg font-bold text-[#111A2E] mb-2 group-hover:text-[#EE3775] transition-colors">
                      {srv.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#5A6E85] leading-relaxed">
                      {srv.desc}
                    </p>
                  </div>
                  <div className="pt-4 mt-2 border-t border-[#F5E6E8] flex items-center justify-between">
                    <span className="text-xs text-[#5A6E85] font-medium">Bespoke Troupe Sizes</span>
                    <a 
                      href="tel:+919980029977" 
                      className="text-xs font-bold text-[#EE3775] hover:text-[#D82A64] inline-flex items-center gap-1"
                    >
                      <span>Book Melam</span>
                      <span>&rarr;</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Highlights / Why Choose 7Delights */}
      <section className="py-14 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#111A2E]">
            Why Choose 7delights for Chenda Melam?
          </h2>
          <p className="text-xs sm:text-sm text-[#5A6E85] mt-2">
            Authenticity, regal presence, and seamless ceremonial timing across Bangalore.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item, idx) => (
            <div key={idx} className="p-5 rounded-2xl bg-white border border-[#F3E8E9] shadow-sm hover:border-[#EE3775]/40 transition-colors">
              <div className="w-10 h-10 rounded-xl bg-[#FFF5F7] flex items-center justify-center mb-3">
                {item.icon}
              </div>
              <h3 className="text-sm sm:text-base font-bold text-[#111A2E] mb-1.5">{item.title}</h3>
              <p className="text-xs text-[#5A6E85] leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Authentic YouTube Video Showcase */}
      <section className="py-14 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#FFFDF9] to-[#FFF5F7] border-t border-[#F3E8E9]">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FFE8ED] text-[#EE3775] text-xs font-semibold mb-3">
            <Video className="w-3.5 h-3.5" />
            <span>Live Action Showcase</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#111A2E] mb-3">
            Watch Our Kerala Chenda Melam in Action
          </h2>
          <p className="text-xs sm:text-sm text-[#5A6E85] mb-8 max-w-xl mx-auto">
            Experience the thunderous unison, escalating tempo, and majestic ceremonial presence of 7Delights Chenda Melam troupe.
          </p>

          <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white aspect-video bg-black">
            <iframe
              src="https://www.youtube.com/embed/8h63GjpL5FY"
              title="7delights Kerala Chenda Melam Bangalore Performance"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full border-0"
            ></iframe>
          </div>
        </div>
      </section>

      {/* Frequently Asked Questions */}
      <section className="py-14 px-4 sm:px-6 lg:px-8 bg-white border-t border-[#F3E8E9]">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FFE8ED] text-[#EE3775] text-xs font-semibold mb-2">
              <HelpCircle className="w-3.5 h-3.5" />
              <span>Got Questions?</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#111A2E]">
              Chenda Melam FAQ
            </h2>
            <p className="text-xs sm:text-sm text-[#5A6E85] mt-1">
              Find answers regarding artist counts, processional timelines, indoor acoustics, and booking.
            </p>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, idx) => (
              <div 
                key={idx} 
                className="border border-[#F0E6E8] rounded-xl overflow-hidden bg-[#FFFDF9] transition-colors"
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full px-5 py-4 text-left flex items-center justify-between gap-4 hover:bg-[#FFF5F7] transition-colors"
                >
                  <span className="text-xs sm:text-sm font-bold text-[#111A2E]">{faq.q}</span>
                  <ChevronDown 
                    className={`w-4 h-4 text-[#EE3775] shrink-0 transition-transform duration-300 ${openFaq === idx ? 'rotate-180' : ''}`}
                  />
                </button>
                {openFaq === idx && (
                  <div className="px-5 pb-4 pt-1 text-xs sm:text-sm text-[#5A6E85] leading-relaxed border-t border-[#F5E6E8] bg-white">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

