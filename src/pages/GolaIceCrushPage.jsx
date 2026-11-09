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
  Droplets,
  Users,
  Sun
} from 'lucide-react';
import { GoldUnderline } from '../components/Doodles';

export default function GolaIceCrushPage() {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const flavorOptions = [
    {
      title: 'Authentic Tangy Kala Khatta',
      desc: 'The undisputed Indian favorite! Shaved ice infused with deep blackberry & jamun extract, rock salt, cumin, and tangy lemon drops.',
      tag: 'All-Time Classic',
      color: 'bg-[#F2EDFF] text-[#7B61FF] border-[#E0D5FF]',
      image: '/assets/gola-ice-crush-scaled.webp'
    },
    {
      title: 'Aromatic Royal Rose & Khas',
      desc: 'Fragrant sweet floral rose and refreshing vetiver khas syrups bringing royal cooling sensation with a vibrant red & green ombre finish.',
      tag: 'Floral Refreshment',
      color: 'bg-[#FFE8ED] text-[#EE3775] border-[#FFD0DB]',
      image: '/assets/gola-ice-stick.webp'
    },
    {
      title: 'Rainbow Multi-Flavor Chuski',
      desc: 'Vibrant hand-dipped layers of orange, blueberry, strawberry, and lime syrups topped with sweet condensed milk (Malai Gola).',
      tag: 'Kids Sensation',
      color: 'bg-[#FFF3DF] text-[#D97706] border-[#FFE4B8]',
      image: '/assets/gola-ice-crush-1.webp'
    },
    {
      title: 'Chatpata Masala Mango & Orange',
      desc: 'Sweet ripe mango and tangy citrus orange syrups sprinkled with authentic black salt, chaat masala, and spicy ginger hints.',
      tag: 'Desi Twist',
      color: 'bg-[#EBF7F2] text-[#00A86B] border-[#C8EFE0]',
      image: '/assets/gola-ice-crush-2.webp'
    }
  ];

  const highlights = [
    {
      icon: <Droplets className="w-5 h-5 text-[#EE3775]" />,
      title: 'Finely Shaved Fresh Ice',
      desc: 'Made on-site using specialized ice shaving machines that create snow-like, smooth crushed ice perfectly holding sweet syrups.'
    },
    {
      icon: <ShieldCheck className="w-5 h-5 text-[#00A86B]" />,
      title: '100% RO Purified Ice & Syrups',
      desc: 'Prepared exclusively with food-grade pure RO water blocks and premium, certified flavor syrups for clean, healthy enjoyment.'
    },
    {
      icon: <Users className="w-5 h-5 text-[#7B61FF]" />,
      title: 'Serves Min 100+ Guests',
      desc: 'High-speed live counter ready to serve 100 to 500+ attendees on eco-friendly wooden sticks or in individual ice cups.'
    },
    {
      icon: <Clock className="w-5 h-5 text-[#D97706]" />,
      title: '2 to 3 Hours Duration',
      desc: 'Standard 2 to 3 hour party service with quick 1 to 2 hour setup. Simple requirements from organizer: just a table and power point.'
    }
  ];

  const galleryImages = [
    {
      url: '/assets/gola-ice-banner.webp',
      title: 'Gola Ice Crush Live Stall Banner',
      subtitle: 'Festive cooling retreat counter'
    },
    {
      url: '/assets/gola-ice-crush-scaled.webp',
      title: 'Rainbow Shaved Ice on Sticks',
      subtitle: 'Nostalgic desi chuski treats'
    },
    {
      url: '/assets/gola-ice-stick.webp',
      title: 'Kala Khatta & Rose Flavors',
      subtitle: 'Infused with tangy chaat masala'
    },
    {
      url: '/assets/gola-ice-crush-1.webp',
      title: 'Live Ice Shaving Machine',
      subtitle: 'Prepared fresh before your guests'
    },
    {
      url: '/assets/gola-ice-crush-2.webp',
      title: 'Gourmet Syrups & Toppings',
      subtitle: 'Assorted fruit & spicy syrups'
    },
    {
      url: '/assets/gola-ice-crush-3.webp',
      title: 'Wedding & Birthday Party Stalls',
      subtitle: 'Crowd-pulling fun eatable setup'
    }
  ];

  const faqs = [
    {
      q: 'How far in advance should I book 7Delights gola ice crush for my event?',
      a: 'To ensure maximum availability of gola ice crush & equipment, we recommend booking at least 1 to 6 weeks in advance for social parties & corporate events, and 3 to 6 months in advance for major weddings or large-scale corporate launches. However, if you have a last-minute request, contact us & we will do our best to make it happen!'
    },
    {
      q: 'How long does it take for your team to set up?',
      a: 'Setup times vary by service. The Gola ice crush stall takes 1 to 2 hours to arrange the ice shaver, insulate the ice chests, and set up all syrup bottles and condiments. We always coordinate directly with the venue to ensure everything is flawlessly ready well before your first guest arrives.'
    },
    {
      q: 'What is your payment policy?',
      a: 'To secure your date, artists, and materials, we require an advance payment upon signing the contract. The remaining balance is structured into milestones leading up to, or on the day of the event.'
    },
    {
      q: 'What are the organizer requirements for setting up the Gola counter?',
      a: 'Requirements from the host are straightforward: 1) A clean sturdy table, and 2) A standard 5A/15A electric power point nearby for the electric ice shaving machine. Our team brings pure RO ice blocks, syrup displays, wooden sticks, bowls, napkins, and an expert uniformed operator.'
    },
    {
      q: 'Is the ice used safe and hygienic for children?',
      a: 'Yes, 100%! We only use food-grade ice prepared strictly from certified Reverse Osmosis (RO) purified drinking water. All syrups are high-quality, food-grade certified, and served hygienically with disposable gloves.'
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
          <span className="text-[#111A2E] font-semibold">Gola Ice Crush</span>
        </nav>
      </div>

      {/* Hero Section */}
      <section className="relative overflow-hidden mb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column: Heading, Specs & CTAs */}
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FFE8ED] text-[#EE3775] text-xs font-bold tracking-wide uppercase mb-4">
                <Sun className="w-3.5 h-3.5" />
                Desi Chuski &amp; Shaved Ice Stall in Bangalore
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#111A2E] leading-tight mb-4">
                7Delights <span className="text-[#EE3775]">Gola Ice Crush</span> for Parties &amp; Events
              </h1>
              <div className="w-28 mb-6">
                <GoldUnderline />
              </div>

              <p className="text-base sm:text-lg text-[#5A6E85] leading-relaxed mb-6">
                Gola Ice Crush is a chilled, vibrant, and nostalgic Indian treat made from finely shaved ice and assorted colorful syrups! 
                Whether shaped onto classic wooden sticks as traditional <em>Chuski</em> or served in bowls with condensed milk as <em>Malai Gola</em>, 
                our icy retreat brings instant joy, refreshment, and childhood nostalgia to your guests.
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
                    <Users className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-[#5A6E85] block">Capacity</span>
                    <span className="text-sm font-bold text-[#111A2E]">Min 100 Guests</span>
                  </div>
                </div>

                <div className="bg-white p-3.5 rounded-2xl border border-[#F2EDFF] shadow-sm flex items-center gap-3 col-span-2 sm:col-span-1">
                  <div className="w-10 h-10 rounded-xl bg-[#F2EDFF] flex items-center justify-center text-[#7B61FF] shrink-0">
                    <Award className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-[#5A6E85] block">Organizer Need</span>
                    <span className="text-sm font-bold text-[#111A2E]">Table &amp; Power</span>
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
                  href="https://wa.me/919980029977?text=Hi%207Delights,%20I%20want%20to%20book%20a%20Gola%20Ice%20Crush%20counter%20for%20my%20event."
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
                  src="/assets/gola-ice-banner.webp"
                  alt="7Delights Gola Ice Crush Stall in Bangalore"
                  className="w-full h-[380px] sm:h-[440px] object-cover group-hover:scale-105 transition-transform duration-700"
                  onError={(e) => {
                    e.currentTarget.src = '/assets/gola-ice-crush-scaled.webp';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-6 sm:p-8 text-white">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#EE3775] text-white text-xs font-semibold mb-2 w-max">
                    <Sparkles className="w-3.5 h-3.5" />
                    Chilled Live Experience
                  </div>
                  <p className="text-xl sm:text-2xl font-bold mb-1">
                    Authentic Desi Chuski Machine
                  </p>
                  <p className="text-white/80 text-xs sm:text-sm">
                    Complete turnkey stall with electric ice shaver, pure RO ice, tangy syrups &amp; trained attendant.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* About Gola Ice Crush & Specialties Section */}
      <section className="py-16 bg-white border-y border-[#FFE8ED]/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-[#EE3775] text-xs sm:text-sm font-bold uppercase tracking-wider block mb-2">
              Timeless Summer Refreshment
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#111A2E]">
              About Gola Ice Crush by 7Delights
            </h2>
            <div className="w-24 mx-auto mt-3">
              <GoldUnderline />
            </div>
            <p className="text-[#5A6E85] text-sm sm:text-base mt-4 leading-relaxed">
              Every Gola is handcrafted live right before the guest! Made using finely shaved snow ice accompanied by customer-choice syrups, 
              it delivers an icy flavor sensation with every bite. From traditional tangy Kala Khatta to fragrant Rose and sweet Mango, 
              7Delights.in ensures every single frosted chuski is pure, hygienic, and nostalgic.
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

      {/* Flavors Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-[#EE3775] text-xs sm:text-sm font-bold uppercase tracking-wider block mb-2">
              Zesty Syrups &amp; Toppings
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#111A2E]">
              Specialties of Our Gola Ice Crush
            </h2>
            <div className="w-24 mx-auto mt-3">
              <GoldUnderline />
            </div>
            <p className="text-[#5A6E85] text-sm sm:text-base mt-4">
              Indulge in a wide choice of classic and gourmet syrup blends custom poured over freshly shaved ice.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {flavorOptions.map((flv, idx) => (
              <div 
                key={idx}
                className="bg-white rounded-3xl overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-300 flex flex-col"
              >
                <div className="relative h-48 overflow-hidden bg-gray-100">
                  <img 
                    src={flv.image} 
                    alt={flv.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    onError={(e) => {
                      e.currentTarget.src = '/assets/gola-ice-banner.webp';
                    }}
                  />
                  <div className="absolute top-3 left-3">
                    <span className={`text-[11px] font-bold px-2.5 py-1 rounded-full border ${flv.color}`}>
                      {flv.tag}
                    </span>
                  </div>
                </div>

                <div className="p-5 flex flex-col flex-grow">
                  <h3 className="text-base font-bold text-[#111A2E] mb-2">{flv.title}</h3>
                  <p className="text-xs sm:text-sm text-[#5A6E85] leading-relaxed flex-grow">
                    {flv.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Setup Reassurance Box (Hassle-free guarantee) */}
      <section className="py-10 bg-gradient-to-r from-[#FFF0F4] via-[#FFFDF9] to-[#EBF7F2]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex p-3 rounded-2xl bg-white shadow-md text-[#EE3775] mb-4">
            <CheckCircle2 className="w-8 h-8" />
          </div>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-[#111A2E] mb-3">
            Sit Back and Watch Our Professionals Doing a Quick Setup!
          </h3>
          <p className="text-sm sm:text-base text-[#5A6E85] max-w-2xl mx-auto leading-relaxed mb-6">
            After associating with 7Delights, you won't have to stress about the setup and cleanup. 
            Our professionals are punctual, arrive well in advance, and handle the complete ice shaving arrangement, 
            disposable wooden sticks/cups, and clean station wrap-up once the party ends.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-xs sm:text-sm font-semibold text-[#111A2E]">
            <span className="flex items-center gap-1.5 bg-white px-3.5 py-1.5 rounded-full shadow-sm">
              <CheckCircle className="w-4 h-4 text-[#00A86B]" /> 1 to 2 Hour Prompt Setup
            </span>
            <span className="flex items-center gap-1.5 bg-white px-3.5 py-1.5 rounded-full shadow-sm">
              <CheckCircle className="w-4 h-4 text-[#00A86B]" /> 100% RO Purified Ice
            </span>
            <span className="flex items-center gap-1.5 bg-white px-3.5 py-1.5 rounded-full shadow-sm">
              <CheckCircle className="w-4 h-4 text-[#00A86B]" /> End-of-Event Clean-Up
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
              Live Showcase
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#111A2E]">
              Gola Ice Crush Gallery &amp; Video
            </h2>
            <div className="w-24 mx-auto mt-3">
              <GoldUnderline />
            </div>
            <p className="text-[#5A6E85] text-sm sm:text-base mt-4">
              Take a look at how our live chuski counter brings vibrant color and refreshing laughter to celebrations in Bangalore.
            </p>
          </div>

          {/* YouTube Video Showcase */}
          <div className="max-w-4xl mx-auto mb-16">
            <div className="bg-white p-3 sm:p-4 rounded-3xl border border-gray-100 shadow-xl overflow-hidden">
              <div className="relative aspect-video rounded-2xl overflow-hidden bg-black">
                <iframe
                  src="https://www.youtube.com/embed/m3z2RTSmAQU?rel=0"
                  title="7Delights Gola Ice Crush & Party Fun Demo"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full border-0"
                />
              </div>
              <div className="p-4 sm:p-6 text-center">
                <h3 className="text-lg sm:text-xl font-bold text-[#111A2E] mb-1">
                  Watch Our Live Gola Ice Crushing in Action!
                </h3>
                <p className="text-xs sm:text-sm text-[#5A6E85]">
                  Experience the rapid ice crushing, colorful drizzle, and radiant smiles our stall brings to every crowd.
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
                      e.currentTarget.src = '/assets/gola-ice-banner.webp';
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
              Everything you need to know about booking our Gola ice crush counter for your event.
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
              <h3 className="text-base font-bold text-[#111A2E]">Have queries about our Gola Ice Crush stall?</h3>
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

