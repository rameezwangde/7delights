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
  Heart,
  Zap,
  Users,
  UtensilsCrossed,
  Flame,
  Star
} from 'lucide-react';
import { GoldUnderline } from '../components/Doodles';

export default function ChocolateFountainPage() {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const dippingItems = [
    {
      title: 'Fresh Exotic Fruits Platter',
      desc: 'Crisp strawberries, banana wheels, fresh pineapple chunks, and sweet apple slices ready to be coated in rich flowing warm cocoa.',
      tag: 'Fresh & Healthy',
      color: 'bg-[#EBF7F2] text-[#00A86B] border-[#C8EFE0]',
      image: '/assets/chocolate-fountain-scaled.webp'
    },
    {
      title: 'Marshmallow Sticks & Wafers',
      desc: 'Soft pillowy vanilla marshmallows, crunchy European wafer biscuits, and golden pretzel sticks on individual sanitary food skewers.',
      tag: 'Party Favorite',
      color: 'bg-[#FFE8ED] text-[#EE3775] border-[#FFD0DB]',
      image: '/assets/chocolate-fountain-tiered.webp'
    },
    {
      title: 'Multi-Tier Heated Cascade Station',
      desc: 'Commercial-grade food-safe stainless steel fountain maintaining steady heating so the premium chocolate streams smoothly with a mirror gloss.',
      tag: 'Turnkey Rig',
      color: 'bg-[#FFF3DF] text-[#D97706] border-[#FFE4B8]',
      image: '/assets/chocolate-fountain-1.webp'
    },
    {
      title: 'Dark, Milk & White Chocolate Blends',
      desc: 'Formulated with high-cocoa-butter premium couverture chocolate for exquisite aroma, velvety mouthfeel, and consistent runny texture.',
      tag: 'Gourmet Couverture',
      color: 'bg-[#F2EDFF] text-[#7B61FF] border-[#E0D5FF]',
      image: '/assets/chocolate-fountain-2.webp'
    }
  ];

  const highlights = [
    {
      icon: <Flame className="w-5 h-5 text-[#EE3775]" />,
      title: 'Continuous Warm Cascade',
      desc: 'Maintains ideal melted viscosity at consistent temperature, ensuring every dip delivers warm, velvety chocolate bliss.'
    },
    {
      icon: <UtensilsCrossed className="w-5 h-5 text-[#7B61FF]" />,
      title: 'Variety of Gourmet Dippers',
      desc: 'Served with fresh sliced fruits, pillowy marshmallows, wafer cookies, biscuits, and skewers for interactive guest dipping.'
    },
    {
      icon: <ShieldCheck className="w-5 h-5 text-[#00A86B]" />,
      title: 'Uniformed Attendant & Table Setup',
      desc: 'Trained attendant assists guests, refills dipping platters, and maintains sanitary conditions throughout the party.'
    },
    {
      icon: <Clock className="w-5 h-5 text-[#D97706]" />,
      title: '2 to 3 Hours Duration',
      desc: 'Standard 2 to 3 hour service package with fast 1-hour prep. Simple requirements from organizer: just a table and power plug.'
    }
  ];

  const galleryImages = [
    {
      url: '/assets/chocolate-fountain-banner.webp',
      title: 'Flowing Chocolate Fountain Station',
      subtitle: 'Premium event centerpiece'
    },
    {
      url: '/assets/chocolate-fountain-scaled.webp',
      title: 'Fresh Fruit & Dipping Platters',
      subtitle: 'Strawberries, bananas, and marshmallows'
    },
    {
      url: '/assets/chocolate-fountain-tiered.webp',
      title: 'Multi-Tier Cascading Tower',
      subtitle: 'Warm melted chocolate fountain'
    },
    {
      url: '/assets/chocolate-fountain-1.webp',
      title: 'Interactive Dessert Experience',
      subtitle: 'Loved by kids & elders alike'
    },
    {
      url: '/assets/chocolate-fountain-2.webp',
      title: 'Gourmet Couverture Quality',
      subtitle: 'Velvety smooth consistency'
    },
    {
      url: '/assets/chocolate-fountain-3.webp',
      title: 'Wedding & Birthday Setup',
      subtitle: 'Adds class and flair to celebrations'
    }
  ];

  const faqs = [
    {
      q: 'How far in advance should I book 7Delights chocolate fountain for my event?',
      a: 'To ensure maximum availability of chocolate fountain & equipment, we recommend booking at least 1 to 6 weeks in advance for social parties & corporate events, and 3 to 6 months in advance for major weddings or large-scale corporate launches. However, if you have a last-minute request, contact us & we will do our best to make it happen!'
    },
    {
      q: 'How long does it take for your team to set up?',
      a: 'Setup times vary by service. The Chocolate fountain stall may take approximately 1 hour to melt the chocolate to the correct viscosity and arrange the dipper platters. We always coordinate directly with the venue to ensure everything is flawlessly set up well before your first guest arrives.'
    },
    {
      q: 'What is your payment policy?',
      a: 'To secure your date, artists, and materials, we require an advance payment upon signing the contract. The remaining balance is structured into milestones leading up to, or on the day of the event.'
    },
    {
      q: 'What are the requirements needed from the organizer?',
      a: 'All we require is: 1) A clean, sturdy table with linen, and 2) A standard 5A/15A electric power point nearby. Our team brings the stainless steel tiered machine, chocolate fondue, fruit/marshmallow platters, skewers, napkins, and a professional attendant.'
    },
    {
      q: 'Can both kids and adults enjoy the chocolate fountain?',
      a: 'Absolutely! The Chocolate Fountain is an absolute crowd-puller for both young guests and adults. Guests enjoy picking skewers of fresh fruits and marshmallows to dip into the cascading warm chocolate, making it an engaging and delicious dessert experience.'
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
          <span className="text-[#111A2E] font-semibold">Chocolate Fountain</span>
        </nav>
      </div>

      {/* Hero Section */}
      <section className="relative overflow-hidden mb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column: Heading, Specs & CTAs */}
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FFE8ED] text-[#EE3775] text-xs font-bold tracking-wide uppercase mb-4">
                <UtensilsCrossed className="w-3.5 h-3.5" />
                Live Fondue Fountain Station in Bangalore
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#111A2E] leading-tight mb-4">
                7Delights Party <span className="text-[#EE3775]">Chocolate Fountain</span> &amp; Events
              </h1>
              <div className="w-28 mb-6">
                <GoldUnderline />
              </div>

              <p className="text-base sm:text-lg text-[#5A6E85] leading-relaxed mb-6">
                A Chocolate Fountain is a classy centerpiece that everybody loves to have at their party, wedding, or birthday celebration! 
                Guests love dipping freshly sliced fruits, soft marshmallows, and crisp wafer cookies into a majestic cascading stream of warm, 
                rich melted chocolate. It adds unparalleled sweetness and elegance to every party across Bangalore.
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
                    <span className="text-sm font-bold text-[#111A2E]">A Table &amp; Plug</span>
                  </div>
                </div>

                <div className="bg-white p-3.5 rounded-2xl border border-[#F2EDFF] shadow-sm flex items-center gap-3 col-span-2 sm:col-span-1">
                  <div className="w-10 h-10 rounded-xl bg-[#F2EDFF] flex items-center justify-center text-[#7B61FF] shrink-0">
                    <Users className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-[#5A6E85] block">Service</span>
                    <span className="text-sm font-bold text-[#111A2E]">Attendant Inc.</span>
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
                  href="https://wa.me/919980029977?text=Hi%207Delights,%20I%20want%20to%20book%20a%20Chocolate%20Fountain%20counter%20for%20my%20event."
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
                  src="/assets/chocolate-fountain-banner.webp"
                  alt="7Delights Chocolate Fountain Stall Bangalore"
                  className="w-full h-[380px] sm:h-[440px] object-cover group-hover:scale-105 transition-transform duration-700"
                  onError={(e) => {
                    e.currentTarget.src = '/assets/chocolate-fountain-scaled.webp';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-6 sm:p-8 text-white">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#EE3775] text-white text-xs font-semibold mb-2 w-max">
                    <Sparkles className="w-3.5 h-3.5" />
                    Cascading Fondue Tower
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold mb-1">
                    Multi-Tier Chocolate Fondue
                  </h3>
                  <p className="text-white/80 text-xs sm:text-sm">
                    Complete setup with heated fountain, fresh cut fruits, marshmallows, cookies &amp; uniformed operator.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* About Chocolate Fountain & Specialties Section */}
      <section className="py-16 bg-white border-y border-[#FFE8ED]/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-[#EE3775] text-xs sm:text-sm font-bold uppercase tracking-wider block mb-2">
              Unmatched Sweet Elegance
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#111A2E]">
              About Chocolate Fountain by 7Delights
            </h2>
            <div className="w-24 mx-auto mt-3">
              <GoldUnderline />
            </div>
            <p className="text-[#5A6E85] text-sm sm:text-base mt-4 leading-relaxed">
              Only the best chocolate is used for our chocolate fountain at 7Delights.in, ensuring the perfect viscosity, texture, and rich appearance 
              so that the chocolate effortlessly drips down each tier. Kept at optimal temperature throughout the event, every skewer dip offers 
              the same velvety, mouth-watering indulgence!
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

      {/* Dipping Items & Presentation Options */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-[#EE3775] text-xs sm:text-sm font-bold uppercase tracking-wider block mb-2">
              Delicious Dipping Selections
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#111A2E]">
              Specialties of Chocolate Fountain
            </h2>
            <div className="w-24 mx-auto mt-3">
              <GoldUnderline />
            </div>
            <p className="text-[#5A6E85] text-sm sm:text-base mt-4">
              We provide an assortment of premium fruits, bakery treats, and accompaniments to make every dip memorable.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {dippingItems.map((item, idx) => (
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
                      e.currentTarget.src = '/assets/chocolate-fountain-banner.webp';
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
            Our professionals are punctual and well-versed in managing the heating, fountain priming, and presentation 
            tasks well before your main event commences.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-xs sm:text-sm font-semibold text-[#111A2E]">
            <span className="flex items-center gap-1.5 bg-white px-3.5 py-1.5 rounded-full shadow-sm">
              <CheckCircle className="w-4 h-4 text-[#00A86B]" /> 1-Hour Punctual Station Prep
            </span>
            <span className="flex items-center gap-1.5 bg-white px-3.5 py-1.5 rounded-full shadow-sm">
              <CheckCircle className="w-4 h-4 text-[#00A86B]" /> Premium Melted Couverture
            </span>
            <span className="flex items-center gap-1.5 bg-white px-3.5 py-1.5 rounded-full shadow-sm">
              <CheckCircle className="w-4 h-4 text-[#00A86B]" /> Clean Sanitary Counter Area
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
              Visual Delight
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#111A2E]">
              Chocolate Fountain Gallery &amp; Video
            </h2>
            <div className="w-24 mx-auto mt-3">
              <GoldUnderline />
            </div>
            <p className="text-[#5A6E85] text-sm sm:text-base mt-4">
              Explore our live chocolate fountain setups bringing excitement, flavor, and elegance to weddings and parties in Bangalore.
            </p>
          </div>

          {/* YouTube Video Showcase */}
          <div className="max-w-4xl mx-auto mb-16">
            <div className="bg-white p-3 sm:p-4 rounded-3xl border border-gray-100 shadow-xl overflow-hidden">
              <div className="relative aspect-video rounded-2xl overflow-hidden bg-black">
                <iframe
                  src="https://www.youtube.com/embed/m3z2RTSmAQU?rel=0"
                  title="7Delights Chocolate Fountain & Party Eatables Demo"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full border-0"
                />
              </div>
              <div className="p-4 sm:p-6 text-center">
                <h3 className="text-lg sm:text-xl font-bold text-[#111A2E] mb-1">
                  Watch Our Live Fountain in Action!
                </h3>
                <p className="text-xs sm:text-sm text-[#5A6E85]">
                  Experience the uninterrupted cascade and radiant joy our chocolate fountain delivers at every celebration.
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
                      e.currentTarget.src = '/assets/chocolate-fountain-banner.webp';
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-4 text-white">
                    <span className="text-xs font-semibold text-[#EE3775]">{img.subtitle}</span>
                    <h4 className="text-sm font-bold">{img.title}</h4>
                  </div>
                </div>
                <div className="p-4">
                  <h4 className="text-sm font-bold text-[#111A2E]">{img.title}</h4>
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
              Everything you need to know about booking our chocolate fountain for your event.
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
              <h4 className="text-base font-bold text-[#111A2E]">Have queries about our chocolate fountain counter?</h4>
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

