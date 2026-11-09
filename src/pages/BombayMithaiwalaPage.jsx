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
  UtensilsCrossed,
  Heart,
  Users,
  Gift
} from 'lucide-react';
import { GoldUnderline } from '../components/Doodles';

export default function BombayMithaiwalaPage() {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const mithaiVarieties = [
    {
      title: 'Rich & Creamy Kesar Peda',
      desc: 'Authentic royal mawa infused with pure Kashmiri saffron strands, green cardamom, and garnished with roasted pistachios.',
      tag: 'Royal Classic',
      color: 'bg-[#FFF3DF] text-[#D97706] border-[#FFE4B8]',
      image: '/assets/bombay-mithaiwala-scaled.webp'
    },
    {
      title: 'Delicate Fragrant Rose Barfi',
      desc: 'Double-layered melt-in-mouth milk confection perfumed with real rose petal damask extract and finished with edible silver leaf (vark).',
      tag: 'Floral Fragrance',
      color: 'bg-[#FFE8ED] text-[#EE3775] border-[#FFD0DB]',
      image: '/assets/bombay-mithai-doll.webp'
    },
    {
      title: 'Specialty Motichoor Laddoo',
      desc: 'Finest micro-boondi droplets fried in pure golden ghee, soaked in aromatic saffron syrup, and studded with melon seeds.',
      tag: 'Celebration Favorite',
      color: 'bg-[#F2EDFF] text-[#7B61FF] border-[#E0D5FF]',
      image: '/assets/bombay-candy-cane.webp'
    },
    {
      title: 'Divine Malai Kalakand & Halwas',
      desc: 'Slow-simmered artisanal cottage cheese fudge with delicate granular texture, paired with rich Karachi & Bombay halwa cuts.',
      tag: 'Artisanal Taste',
      color: 'bg-[#EBF7F2] text-[#00A86B] border-[#C8EFE0]',
      image: '/assets/bombay-mithaiwala-stall.webp'
    }
  ];

  const highlights = [
    {
      icon: <Award className="w-5 h-5 text-[#EE3775]" />,
      title: '100% Authentic Bombay Heritage',
      desc: 'Transporting authentic vintage Bombay sweets and Mithai crafted from time-honored traditional secret recipes.'
    },
    {
      icon: <ShieldCheck className="w-5 h-5 text-[#00A86B]" />,
      title: 'Pure Desi Ghee & Fresh Mawa',
      desc: 'Only the highest quality ingredients, pure dairy ghee, and premium grade dry fruits used in every single sweet delicacy.'
    },
    {
      icon: <Gift className="w-5 h-5 text-[#7B61FF]" />,
      title: 'Live Counter & Thematic Favors',
      desc: 'Interactive sweets counter with traditional dolls, decorative mithai packaging, and return-gift favor boxes ready on request.'
    },
    {
      icon: <Clock className="w-5 h-5 text-[#D97706]" />,
      title: '2 to 3 Hours Duration',
      desc: 'Standard 2 to 3 hour party service with punctual 1 to 2 hour setup. Simple requirements: just a sturdy table.'
    }
  ];

  const galleryImages = [
    {
      url: '/assets/bombay-mitthai-banner.webp',
      title: 'Bombay Mithaiwala Live Counter',
      subtitle: 'Traditional Indian sweet confectionery'
    },
    {
      url: '/assets/bombay-mithaiwala-scaled.webp',
      title: 'Artisanal Mawa & Peda Platters',
      subtitle: 'Handcrafted fresh per event'
    },
    {
      url: '/assets/bombay-mithai-doll.webp',
      title: 'Traditional Mithaiwala Mascot',
      subtitle: 'Charming festive presentation'
    },
    {
      url: '/assets/bombay-candy-cane.webp',
      title: 'Motichoor & Festive Delights',
      subtitle: 'Pure golden desi ghee treats'
    },
    {
      url: '/assets/bombay-mithaiwala-stall.webp',
      title: 'Interactive Dessert Counter',
      subtitle: 'Loved by guests across generations'
    },
    {
      url: '/assets/bombay-mitthai-banner.webp',
      title: 'Wedding & Social Gala Setup',
      subtitle: 'Authentic royal celebratory ambiance'
    }
  ];

  const faqs = [
    {
      q: 'How far in advance should I book 7Delights bombay mitthaiwala for my event?',
      a: 'To ensure maximum availability of bombay mitthaiwala & specific themes, we recommend booking at least 1 to 6 weeks in advance for social parties & corporate events, and 3 to 6 months in advance for major weddings or large-scale corporate launches. However, if you have a last-minute request, contact us & we will do our best to make it happen!'
    },
    {
      q: 'How long does it take for your team to set up?',
      a: 'Setup times vary by service. Bombay mitthaiwala stall takes 1 to 2 hours to arrange the platters, cultural display props, and presentation boxes. We always coordinate directly with the venue to ensure everything is flawlessly ready well before your first guest arrives.'
    },
    {
      q: 'What is your payment policy?',
      a: 'To secure your date, artists, and materials, we require an advance payment upon signing the contract. The remaining balance is structured into milestones leading up to, or on the day of the event.'
    },
    {
      q: 'What are the requirements needed from the organizer?',
      a: 'All we require is a clean, sturdy table with venue linen. Our team brings all decorative platters, glass displays, traditional mascot elements, sweets, tongs, disposable serving ware, and a courteous attendant.'
    },
    {
      q: 'Can we customize the assortment of sweets for our party theme?',
      a: 'Yes, absolutely! We can curate customized mithai menus matching your event theme—including specific selections of Kesar Peda, Motichoor Laddoo, Rose Barfi, Kaju Katli, Kalakand, or individual take-home gift boxes for your attendees.'
    }
  ];

  return (
    <div className="bg-[#FFFDF9] min-h-screen pt-24 pb-16">
      {/* Breadcrumb Navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6">
        <nav className="flex items-center text-sm font-medium text-[#5A6E85] space-x-2">
          <a href="#" className="hover:text-[#EE3775] transition-colors">Home</a>
          <span>/</span>
          <a href="#party-fun-eatables" className="hover:text-[#EE3775] transition-colors">Party Fun Eatables</a>
          <span>/</span>
          <span className="text-[#111A2E] font-semibold">Bombay Mithaiwala</span>
        </nav>
      </div>

      {/* Hero Section */}
      <section className="relative overflow-hidden mb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column: Heading, Specs & CTAs */}
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FFE8ED] text-[#EE3775] text-xs font-bold tracking-wide uppercase mb-4">
                <Gift className="w-3.5 h-3.5" />
                Live Traditional Mithai Counter in Bangalore
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#111A2E] leading-tight mb-4">
                <span className="text-[#EE3775]">Bombay Mithaiwala</span> by 7Delights
              </h1>
              <div className="w-28 mb-6">
                <GoldUnderline />
              </div>

              <p className="text-base sm:text-lg text-[#5A6E85] leading-relaxed mb-6">
                Bombay Mithaiwala is one of the most famous names in traditional Indian confectionery! 
                Transporting the timeless flavors of vintage Bombay sweets to your event doorstep—from rich Kesar Pedas 
                and delicate Rose Barfis to specialty Motichoor Laddoos and divine Kalakand, each piece is crafted with passion and pure ghee.
              </p>

              {/* Badges / Specs Pill Box */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-8">
                <div className="bg-white p-3.5 rounded-2xl border border-[#FFE8ED] shadow-sm flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#FFE8ED] flex items-center justify-center text-[#EE3775] shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-[#5A6E85] block">Duration</span>
                    <span className="text-sm font-bold text-[#111A2E]">2 to 3 Hours</span>
                  </div>
                </div>

                <div className="bg-white p-3.5 rounded-2xl border border-[#EBF7F2] shadow-sm flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#EBF7F2] flex items-center justify-center text-[#00A86B] shrink-0">
                    <Award className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-[#5A6E85] block">Organizer Need</span>
                    <span className="text-sm font-bold text-[#111A2E]">A Sturdy Table</span>
                  </div>
                </div>

                <div className="bg-white p-3.5 rounded-2xl border border-[#F2EDFF] shadow-sm flex items-center gap-3 col-span-2 sm:col-span-1">
                  <div className="w-10 h-10 rounded-xl bg-[#F2EDFF] flex items-center justify-center text-[#7B61FF] shrink-0">
                    <Users className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-[#5A6E85] block">Quality</span>
                    <span className="text-sm font-bold text-[#111A2E]">100% Pure Ghee</span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-4 items-center">
                <a
                  href="tel:+919980029977"
                  className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-[#EE3775] text-white font-bold text-base shadow-lg shadow-[#EE3775]/25 hover:bg-[#d42c67] hover:-translate-y-0.5 transition-all"
                >
                  <Phone className="w-4 h-4" />
                  Call: +91 99800 29977
                </a>
                <a
                  href="https://wa.me/919980029977?text=Hi%207Delights,%20I%20want%20to%20book%20a%20Bombay%20Mithaiwala%20stall%20for%20my%20event."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-[#25D366] text-white font-bold text-base shadow-lg shadow-[#25D366]/25 hover:bg-[#20ba59] hover:-translate-y-0.5 transition-all"
                >
                  <MessageCircle className="w-4 h-4" />
                  WhatsApp Us
                </a>
              </div>
            </div>

            {/* Right Column: Hero Banner Image */}
            <div className="lg:col-span-5">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-white group">
                <img
                  src="/assets/bombay-mitthai-banner.webp"
                  alt="7Delights Bombay Mithaiwala Stall Bangalore"
                  className="w-full h-[380px] sm:h-[440px] object-cover group-hover:scale-105 transition-transform duration-700"
                  onError={(e) => {
                    e.currentTarget.src = '/assets/bombay-mithaiwala-scaled.webp';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-6 sm:p-8 text-white">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#EE3775] text-white text-xs font-semibold mb-2 w-max">
                    <Sparkles className="w-3.5 h-3.5" />
                    Authentic Confectionery
                  </div>
                  <p className="text-xl sm:text-2xl font-bold mb-1">
                    Vintage Bombay Mithai Counter
                  </p>
                  <p className="text-white/80 text-xs sm:text-sm">
                    Complete setup with decorative platters, cultural mascot props &amp; courteous attendant.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* About Bombay Mithaiwala Section */}
      <section className="py-16 bg-white border-y border-[#FFE8ED]/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-[#EE3775] text-xs sm:text-sm font-bold uppercase tracking-wider block mb-2">
              Heritage Confectionery
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#111A2E]">
              About Bombay Mithaiwala by 7Delights
            </h2>
            <div className="w-24 mx-auto mt-3">
              <GoldUnderline />
            </div>
            <p className="text-[#5A6E85] text-sm sm:text-base mt-4 leading-relaxed">
              These days, clients across Bangalore ask for the unique experience of Bombay Mithaiwala to delight their party guests. 
              Our company, 7Delights.in, guarantees that all sweets are delivered fresh to retain supreme flavor and texture. 
              Whether celebrating a wedding, naming ceremony, housewarming, or milestone birthday, we deliver perfection in every bite!
            </p>
          </div>

          {/* 4 Feature Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((item, idx) => (
              <div 
                key={idx}
                className="bg-[#FFFDF9] p-6 rounded-2xl border border-gray-100 hover:border-[#FFD0DB] hover:shadow-xl transition-all duration-300 flex flex-col"
              >
                <div className="w-12 h-12 rounded-xl bg-white shadow-md flex items-center justify-center mb-4 shrink-0 border border-gray-100">
                  {item.icon}
                </div>
                <h3 className="text-lg font-bold text-[#111A2E] mb-2">{item.title}</h3>
                <p className="text-sm text-[#5A6E85] leading-relaxed flex-grow">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sweet Varieties Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-[#EE3775] text-xs sm:text-sm font-bold uppercase tracking-wider block mb-2">
              Palatable Dishes &amp; Textures
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#111A2E]">
              Specialties of Bombay Mithaiwala
            </h2>
            <div className="w-24 mx-auto mt-3">
              <GoldUnderline />
            </div>
            <p className="text-[#5A6E85] text-sm sm:text-base mt-4">
              All our specialties are cooked to perfection to give you the real taste of Bombay's exclusive sweet heritage.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {mithaiVarieties.map((item, idx) => (
              <div 
                key={idx}
                className="bg-white rounded-3xl overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-300 flex flex-col"
              >
                <div className="relative h-48 overflow-hidden bg-gray-100">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    onError={(e) => {
                      e.currentTarget.src = '/assets/bombay-mitthai-banner.webp';
                    }}
                  />
                  <div className="absolute top-3 left-3">
                    <span className={`text-[11px] font-bold px-2.5 py-1 rounded-full border ${item.color}`}>
                      {item.tag}
                    </span>
                  </div>
                </div>

                <div className="p-5 flex flex-col flex-grow">
                  <h3 className="text-base font-bold text-[#111A2E] mb-2">{item.title}</h3>
                  <p className="text-xs sm:text-sm text-[#5A6E85] leading-relaxed flex-grow">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Setup Reassurance Box (Hassle-free guarantee) */}
      <section className="py-10 bg-gradient-to-r from-[#FFF0F4] via-[#FFFDF9] to-[#F3E8FF]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex p-3 rounded-2xl bg-white shadow-md text-[#EE3775] mb-4">
            <CheckCircle2 className="w-8 h-8" />
          </div>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-[#111A2E] mb-3">
            Sit Back and Watch Our Professionals Doing a Quick Setup!
          </h3>
          <p className="text-sm sm:text-base text-[#5A6E85] max-w-2xl mx-auto leading-relaxed mb-6">
            After partnering with 7Delights, you won't have to stress about the setup and cleanup. 
            Our professionals are punctual, bring all essential decorative platters and sanitary tools, 
            and handle complete cleanup at the end of the celebration.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-xs sm:text-sm font-semibold text-[#111A2E]">
            <span className="flex items-center gap-1.5 bg-white px-3.5 py-1.5 rounded-full shadow-sm">
              <CheckCircle className="w-4 h-4 text-[#00A86B]" /> 1 to 2 Hour Prompt Setup
            </span>
            <span className="flex items-center gap-1.5 bg-white px-3.5 py-1.5 rounded-full shadow-sm">
              <CheckCircle className="w-4 h-4 text-[#00A86B]" /> 100% Original Recipe Quality
            </span>
            <span className="flex items-center gap-1.5 bg-white px-3.5 py-1.5 rounded-full shadow-sm">
              <CheckCircle className="w-4 h-4 text-[#00A86B]" /> Clean Sanitary Presentation
            </span>
          </div>
        </div>
      </section>

      {/* Video & Photo Gallery Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-[#EE3775] text-xs sm:text-sm font-bold uppercase tracking-wider block mb-2">
              Visual Elegance
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#111A2E]">
              Bombay Mithaiwala Gallery &amp; Video
            </h2>
            <div className="w-24 mx-auto mt-3">
              <GoldUnderline />
            </div>
            <p className="text-[#5A6E85] text-sm sm:text-base mt-4">
              Explore our charming live sweet counters adding traditional authenticity and joyful smiles to events in Bangalore.
            </p>
          </div>

          {/* YouTube Video Showcase */}
          <div className="max-w-4xl mx-auto mb-16">
            <div className="bg-white p-3 sm:p-4 rounded-3xl border border-gray-100 shadow-xl overflow-hidden">
              <div className="relative aspect-video rounded-2xl overflow-hidden bg-black">
                <iframe
                  src="https://www.youtube.com/embed/sVyxRrcViTs?rel=0"
                  title="7Delights Bombay Mithaiwala Demo"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full border-0"
                />
              </div>
              <div className="p-4 sm:p-6 text-center">
                <h3 className="text-lg sm:text-xl font-bold text-[#111A2E] mb-1">
                  Watch Our Bombay Mithai Presentation in Action!
                </h3>
                <p className="text-xs sm:text-sm text-[#5A6E85]">
                  Experience the vibrant presentation, traditional mascot doll, and radiant sweetness we bring to every event.
                </p>
              </div>
            </div>
          </div>

          {/* Photo Gallery Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages.map((img, idx) => (
              <div 
                key={idx}
                className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 group"
              >
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={img.url}
                    alt={img.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    onError={(e) => {
                      e.currentTarget.src = '/assets/bombay-mitthai-banner.webp';
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-4 text-white">
                    <span className="text-xs font-semibold text-[#EE3775]">{img.subtitle}</span>
                    <h3 className="text-sm font-bold">{img.title}</h3>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="text-sm font-bold text-[#111A2E]">{img.title}</h3>
                  <p className="text-xs text-[#5A6E85] mt-0.5">{img.subtitle}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Frequently Asked Questions */}
      <section className="py-16 bg-white border-t border-[#FFE8ED]/60">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-[#EE3775] text-xs sm:text-sm font-bold uppercase tracking-wider block mb-2">
              Got Questions?
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#111A2E]">
              Frequently Asked Questions
            </h2>
            <div className="w-24 mx-auto mt-3">
              <GoldUnderline />
            </div>
            <p className="text-[#5A6E85] text-sm sm:text-base mt-4">
              Everything you need to know about booking our Bombay Mithaiwala stall for your event.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="border border-gray-200 rounded-2xl overflow-hidden transition-all duration-200"
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(idx)}
                  className="w-full flex items-center justify-between p-5 text-left bg-white hover:bg-[#FFFDF9] transition-colors"
                >
                  <span className="text-base sm:text-lg font-bold text-[#111A2E] pr-4 flex items-center gap-2">
                    <HelpCircle className="w-5 h-5 text-[#EE3775] shrink-0" />
                    {faq.q}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-[#5A6E85] shrink-0 transition-transform duration-200 ${
                      openFaq === idx ? 'rotate-180 text-[#EE3775]' : ''
                    }`}
                  />
                </button>
                {openFaq === idx && (
                  <div className="p-5 pt-0 text-sm sm:text-base text-[#5A6E85] leading-relaxed border-t border-gray-100 bg-[#FFFDF9]">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Direct Assistance Card */}
          <div className="mt-12 p-6 rounded-2xl bg-[#FFE8ED]/40 border border-[#FFD0DB] flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <h3 className="text-base font-bold text-[#111A2E]">Have queries about our Bombay Mithaiwala counter?</h3>
              <p className="text-xs sm:text-sm text-[#5A6E85] mt-0.5">Feel free to talk to our party organizers right away!</p>
            </div>
            <a
              href="tel:+919980029977"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#EE3775] text-white font-bold text-sm shadow hover:bg-[#d42c67] transition-all shrink-0"
            >
              <Phone className="w-4 h-4" />
              Call +91 99800 29977
            </a>
          </div>

        </div>
      </section>

      {/* Booking Quick Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 text-center">
        <a 
          href="#party-fun-eatables" 
          className="inline-flex items-center gap-2 text-sm font-bold text-[#5A6E85] hover:text-[#EE3775] transition-colors"
        >
          &larr; Back to All Party Fun Eatables
        </a>
      </div>
    </div>
  );
}

