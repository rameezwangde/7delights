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
  Flame,
  Zap,
  Coffee,
  Sparkle
} from 'lucide-react';
import { GoldUnderline } from '../components/Doodles';

export default function PopcornPage() {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const flavorOptions = [
    {
      title: 'Classic Cinema Butter & Salt',
      desc: 'The all-time movie favorite: hot, freshly popped fluffy kernels generously coated in golden melted butter and savory sea salt.',
      tag: 'Classic Bestseller',
      color: 'bg-[#FFE8ED] text-[#EE3775] border-[#FFD0DB]',
      image: '/assets/popcorn-stall.webp'
    },
    {
      title: 'Golden Caramel Crunch',
      desc: 'Rich, crunchy caramel-glazed popcorn delivering an irresistible sweet crunch with every mouthful that kids and adults love.',
      tag: 'Sweet Delight',
      color: 'bg-[#FFF3DF] text-[#D97706] border-[#FFE4B8]',
      image: '/assets/popcorn-main-stall.webp'
    },
    {
      title: 'Savory Cheddar Cheese Popcorn',
      desc: 'Tangy, sharp cheddar cheese seasoned evenly across light, warm kernels for an addictive savory bite throughout the party.',
      tag: 'Cheesy Twist',
      color: 'bg-[#F2EDFF] text-[#7B61FF] border-[#E0D5FF]',
      image: '/assets/popcorn-event-scaled.webp'
    },
    {
      title: 'Spicy Masala & Peri-Peri Blend',
      desc: 'Zesty Indian chaat masala and fiery African peri-peri sprinkles giving traditional popcorn a mouthwatering burst of heat.',
      tag: 'Desi Spice',
      color: 'bg-[#EBF7F2] text-[#00A86B] border-[#C8EFE0]',
      image: '/assets/popcorn-kernels-bowl.webp'
    }
  ];

  const highlights = [
    {
      icon: <Flame className="w-5 h-5 text-[#EE3775]" />,
      title: 'Live On-Site Popping',
      desc: 'Popped hot and fresh directly in front of your attendees inside illuminated vintage glass-cart machines.'
    },
    {
      icon: <Sparkles className="w-5 h-5 text-[#7B61FF]" />,
      title: 'Premium Quality Kernels',
      desc: 'Sourced from the finest corn varieties to ensure maximum fluffiness, minimal unpopped kernels, and maximum crunch.'
    },
    {
      icon: <ShieldCheck className="w-5 h-5 text-[#00A86B]" />,
      title: 'Hygienic Attendants Included',
      desc: 'Uniformed, gloved stall operators serving individual cones and paper bags cleanly with zero mess.'
    },
    {
      icon: <Clock className="w-5 h-5 text-[#D97706]" />,
      title: 'Flexible Serving Hours',
      desc: 'Standard 2 to 3 hour booking packages with hassle-free options for extended hours on demand.'
    }
  ];

  const galleryImages = [
    { src: '/assets/popcorn-detail-banner.webp', alt: 'Live Popcorn Counter for Event in Bangalore' },
    { src: '/assets/popcorn-stall.webp', alt: 'Fresh Popcorn Stall Operator' },
    { src: '/assets/popcorn-main-stall.webp', alt: 'Vintage Red Popcorn Machine' },
    { src: '/assets/popcorn-event-scaled.webp', alt: 'Fresh Popcorn Serving Cones' },
    { src: '/assets/popcorn-kernels-bowl.webp', alt: 'Fluffy Golden Popcorn Kernels' }
  ];

  const faqs = [
    {
      q: 'How far in advance should I book 7Delights popcorn for my event?',
      a: 'To ensure maximum availability of popcorn & equipment, we recommend booking at least 1 to 6 weeks in advance for social parties & corporate events, and 3 to 6 months in advance for major weddings or large-scale corporate launches. However, if you have a last-minute request, contact us & we will do our best to make it happen!'
    },
    {
      q: 'How long does it take for your team to set up?',
      a: 'Setup times vary by service. Popcorn stall setup typically takes 1 to 2 hours. We always coordinate directly with the venue to ensure everything is flawlessly set up well before your first guest arrives.'
    },
    {
      q: 'What is your payment policy?',
      a: 'To secure your date, operators, and raw materials, we require an advance payment upon signing the contract. The remaining balance is structured into milestones leading up to, or on the day of the event.'
    },
    {
      q: 'What are the organizer requirements on-site for the popcorn counter?',
      a: 'Requirements from the organizers: A standard banquet table with tablecloth, sheltered indoor/canopy floor space, and a continuous 15A electrical power point nearby to run the heating kettle.'
    },
    {
      q: 'Are unlimited popcorn servings included during the booked duration?',
      a: 'Yes, our packages provide continuous live popping and unlimited servings for your attendees throughout the reserved 2 to 3-hour duration, with extra hours available on request.'
    }
  ];

  return (
    <div className="min-h-screen bg-[#FFFDF9] text-[#111A2E] flex flex-col font-sans selection:bg-[#EE3775] selection:text-white">
      {/* 1. HERO SECTION */}
      <section className="relative pt-12 pb-20 lg:pt-16 lg:pb-28 overflow-hidden bg-gradient-to-b from-[#FFF5F7] via-[#FFFDF9] to-[#FFFDF9]">
        <div className="absolute top-10 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-gradient-to-r from-[#EE3775]/5 via-amber-200/10 to-[#7B61FF]/5 blur-3xl pointer-events-none -z-10" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Breadcrumbs */}
          <nav className="flex items-center space-x-2 text-xs md:text-sm text-[#5A6E85] mb-6 font-medium">
            <a href="#home" className="hover:text-[#EE3775] transition-colors">Home</a>
            <span>/</span>
            <a href="#party-fun-eatables" className="hover:text-[#EE3775] transition-colors">Party Fun Eatables</a>
            <span>/</span>
            <span className="text-[#111A2E] font-semibold">Popcorn Counter</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FFE8ED] border border-[#FFD0DB] text-[#EE3775] text-xs sm:text-sm font-bold uppercase tracking-wider">
                <Sparkles className="w-4 h-4" />
                <span>Live Snack Counters in Bangalore</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#111A2E] tracking-tight leading-tight">
                Popcorn Counter for <span className="text-[#EE3775]">Parties &amp; Events</span>
              </h1>

              <div className="mb-2">
                <GoldUnderline className="w-48 h-auto text-[#EE3775]" />
              </div>

              <p className="text-base sm:text-lg text-[#5A6E85] leading-relaxed">
                Fill the air with the mouth-watering aroma of freshly popped corn! 7Delights brings vintage glass-cart popcorn machines with skilled attendants serving warm, buttery, crunchy popcorn directly to your guests across Bengaluru.
              </p>

              {/* Specs Pills */}
              <div className="flex flex-wrap gap-3 pt-1">
                <div className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white border border-[#F5E6EC] shadow-xs text-xs sm:text-sm text-[#111A2E] font-medium">
                  <Clock className="w-4 h-4 text-[#EE3775]" />
                  <span>Duration: <strong>2 to 3 Hours Standard</strong></span>
                </div>
                <div className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white border border-[#F5E6EC] shadow-xs text-xs sm:text-sm text-[#111A2E] font-medium">
                  <MapPin className="w-4 h-4 text-[#00A86B]" />
                  <span>Available Across <strong>All Bangalore</strong></span>
                </div>
                <div className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white border border-[#F5E6EC] shadow-xs text-xs sm:text-sm text-[#111A2E] font-medium">
                  <UtensilsCrossed className="w-4 h-4 text-[#7B61FF]" />
                  <span>Price: <strong>₹0 Base Quote</strong></span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-3">
                <a
                  href="tel:+919980029977"
                  className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-[#EE3775] text-white font-bold text-sm sm:text-base shadow-lg shadow-[#EE3775]/25 hover:bg-[#D92C65] transition-all transform hover:-translate-y-0.5"
                >
                  <Phone className="w-4 h-4 fill-white" />
                  <span>Call +91 99800 29977</span>
                </a>
                <a
                  href="https://api.whatsapp.com/send/?phone=919980029977&text=Hi%207Delights,%20I%20am%20interested%20in%20Popcorn%20Counter%20services.%20Please%20share%20packages."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-[#25D366] text-white font-bold text-sm sm:text-base shadow-lg shadow-[#25D366]/25 hover:bg-[#20BA5A] transition-all transform hover:-translate-y-0.5"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>WhatsApp Inquiry</span>
                </a>
              </div>
            </div>

            {/* Right Media Banner */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white aspect-[4/3] group bg-gray-100">
                <img
                  src="/assets/popcorn-detail-banner.webp"
                  alt="Popcorn Machine Counter for Parties in Bangalore"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  onError={(e) => {
                    e.currentTarget.src = '/assets/popcorn-stall.webp';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#111A2E]/75 via-transparent to-transparent pointer-events-none"></div>
                <div className="absolute bottom-4 left-4 right-4 text-white pointer-events-none">
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#EE3775] text-xs font-bold uppercase tracking-wider mb-1">
                    Live Popcorn Counter
                  </div>
                  <p className="text-sm font-medium text-white/95">
                    Freshly Popped Buttery &amp; Caramel Flavors On-Site
                  </p>
                </div>
              </div>

              {/* Float Badge */}
              <div className="absolute -bottom-5 -left-5 bg-white p-3.5 rounded-xl shadow-xl border border-[#F5E6EC] hidden sm:flex items-center gap-3 z-10">
                <div className="w-10 h-10 rounded-lg bg-[#FFE8ED] flex items-center justify-center text-[#EE3775]">
                  <UtensilsCrossed className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-[#5A6E85] font-medium">Hygienic Serving</div>
                  <div className="text-sm font-bold text-[#111A2E]">Organic Kernels</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. ABOUT POPCORN SECTION */}
      <section className="py-14 md:py-18 bg-white border-b border-[#F5E6EC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Image display */}
            <div className="lg:col-span-5">
              <div className="relative rounded-2xl overflow-hidden shadow-lg border border-[#F5E6EC]">
                <img
                  src="/assets/popcorn-stall.webp"
                  alt="Popcorn Stall Machine Operator in Bangalore"
                  className="w-full h-auto object-cover"
                />
                <div className="p-4 bg-[#FFFDF9] border-t border-[#F5E6EC]">
                  <div className="flex items-center justify-between text-xs sm:text-sm">
                    <span className="font-semibold text-[#111A2E]">Standard Counter Duration:</span>
                    <span className="font-bold text-[#EE3775]">2 to 3 Hours (₹0 Base Quote)</span>
                  </div>
                  <p className="text-xs text-[#5A6E85] mt-1">
                    *Requirements From the Organizers: A Table. (Attracts Additional Charges for Extra Hours)
                  </p>
                </div>
              </div>
            </div>

            {/* Content Details */}
            <div className="lg:col-span-7 space-y-5">
              <div className="inline-block text-xs uppercase tracking-wider font-bold text-[#EE3775] bg-[#FFE8ED] px-3 py-1 rounded-md">
                About Popcorn
              </div>

              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#111A2E] leading-snug">
                The Timeless, Crunchy Party Snack for Guests of All Ages
              </h2>

              <p className="text-sm sm:text-base text-[#5A6E85] leading-relaxed">
                Popcorn is an ever-tasty snack which has been consumed over the years. Made from maize, the kernels are small and fluffy and have the characteristic that is quite satisfying for the palate, which is the crunchiness of popcorn making it suitable for movies, celebrations, and any get-together.
              </p>

              <p className="text-sm sm:text-base text-[#5A6E85] leading-relaxed">
                It is, therefore, usually consumed as it is or with butter, sugar, or a sprinkling of salt on it. Coated in butter and salt or covered with caramel and chocolate, popcorn is the people’s favorite snack with which any event becomes a bit more enjoyable.
              </p>

              <p className="text-sm sm:text-base text-[#5A6E85] leading-relaxed">
                At <strong>7Delights.in</strong>, we fulfil your taste fantasies regarding the superb taste of popcorn. We arrange counters that supply the attendees with the best popcorn taste. Feel free to reach out to us whenever you plan to get the best and most enjoyable taste and aroma of popcorn.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div className="flex items-start gap-2.5 p-3 rounded-lg bg-[#FFFDF9] border border-[#F5E6EC]">
                  <CheckCircle className="w-5 h-5 text-[#00A86B] shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm text-[#111A2E] font-medium">100% Food-grade non-GMO corn kernels</span>
                </div>
                <div className="flex items-start gap-2.5 p-3 rounded-lg bg-[#FFFDF9] border border-[#F5E6EC]">
                  <CheckCircle className="w-5 h-5 text-[#00A86B] shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm text-[#111A2E] font-medium">Uniformed attendant with gloves &amp; hairnets</span>
                </div>
                <div className="flex items-start gap-2.5 p-3 rounded-lg bg-[#FFFDF9] border border-[#F5E6EC]">
                  <CheckCircle className="w-5 h-5 text-[#00A86B] shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm text-[#111A2E] font-medium">Vintage illuminated commercial machine</span>
                </div>
                <div className="flex items-start gap-2.5 p-3 rounded-lg bg-[#FFFDF9] border border-[#F5E6EC]">
                  <CheckCircle className="w-5 h-5 text-[#00A86B] shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm text-[#111A2E] font-medium">Continuous live popping &amp; individual bags</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. FLAVOR VARIETIES */}
      <section className="py-14 md:py-18 bg-[#FFF8FA] border-b border-[#F5E6EC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs uppercase tracking-wider font-bold text-[#EE3775] bg-white px-3 py-1 rounded-md border border-[#F5E6EC]">
              Flavors &amp; Varieties
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#111A2E] mt-3">
              Specialties of Popcorn
            </h2>
            <GoldUnderline className="w-32 h-auto text-[#EE3775] mx-auto mt-2" />
            <p className="text-xs sm:text-sm text-[#5A6E85] mt-2">
              At 7Delights.in, our popcorn is made only from the best kernels to produce popcorn that is as fluffy as it is tasty.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {flavorOptions.map((item, idx) => (
              <div 
                key={idx} 
                className="bg-white rounded-2xl overflow-hidden border border-[#F5E6EC] shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between hover:-translate-y-1"
              >
                <div>
                  <div className="aspect-[16/11] overflow-hidden bg-gray-100">
                    <img 
                      src={item.image} 
                      alt={item.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" 
                    />
                  </div>
                  <div className="p-5">
                    <span className={`inline-block text-xs font-bold px-2.5 py-1 rounded-full border mb-3 ${item.color}`}>
                      {item.tag}
                    </span>
                    <p className="text-lg font-bold text-[#111A2E] mb-2">{item.title}</p>
                    <p className="text-xs sm:text-sm text-[#5A6E85] leading-relaxed">{item.desc}</p>
                  </div>
                </div>
                <div className="px-5 pb-5 pt-2 border-t border-[#F5E6EC] flex items-center justify-between text-xs font-semibold text-[#EE3775]">
                  <span>Live Popping Station</span>
                  <CheckCircle className="w-4 h-4" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. TRUSTED PLACE FOR POPCORN */}
      <section className="py-14 md:py-18 bg-white border-b border-[#F5E6EC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 space-y-5">
              <span className="text-xs uppercase tracking-wider font-bold text-[#00A86B] bg-[#EBF7F2] px-3 py-1 rounded-md">
                Trusted Event Partners
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#111A2E]">
                7Delights.in — Your Trusted Place For Popcorn Counter
              </h2>
              <p className="text-sm sm:text-base text-[#5A6E85] leading-relaxed">
                7Delights.in is your favorite go-to for the most exciting popcorn counter for any party you are planning to arrange. Our pride is our popcorn: fresh, delicious, and in different varieties to meet all consumers’ tastes and preferences.
              </p>
              <p className="text-sm sm:text-base text-[#5A6E85] leading-relaxed">
                This assures the customer of quality, making 7Delights.in the best choice for popcorn lovers. Our popcorn is versatile for every occasion; it could be as a snack at a corporate family day, a wedding cocktail, or a birthday party craving.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                {highlights.map((h, i) => (
                  <div key={i} className="flex items-start gap-3 p-3.5 rounded-xl bg-[#FFFDF9] border border-[#F5E6EC]">
                    <div className="w-8 h-8 rounded-lg bg-white shadow-xs flex items-center justify-center shrink-0 border border-gray-100">
                      {h.icon}
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-[#111A2E]">{h.title}</h3>
                      <p className="text-xs text-[#5A6E85]">{h.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex items-center gap-3 pt-3">
                <a
                  href="tel:+919980029977"
                  className="px-6 py-3 rounded-full bg-[#EE3775] hover:bg-[#DE2765] text-white font-bold text-xs sm:text-sm shadow-md transition-all"
                >
                  Book Popcorn Counter
                </a>
                <a
                  href="#party-fun-eatables"
                  className="px-6 py-3 rounded-full border border-gray-200 text-[#111A2E] hover:border-[#EE3775] font-bold text-xs sm:text-sm transition-all"
                >
                  Explore All Eatables
                </a>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="relative rounded-2xl overflow-hidden shadow-xl border border-gray-100">
                <img
                  src="/assets/popcorn-main-stall.webp"
                  alt="Popcorn Machine Counter"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. PHOTO GALLERY */}
      <section className="py-14 md:py-18 bg-[#FFF8FA] border-b border-[#F5E6EC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs uppercase tracking-wider font-bold text-[#EE3775] bg-white px-3 py-1 rounded-md border border-[#F5E6EC]">
              Visual Showcase
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#111A2E] mt-3">
              Popcorn Gallery
            </h2>
            <GoldUnderline className="w-28 h-auto text-[#EE3775] mx-auto mt-2" />
            <p className="text-xs sm:text-sm text-[#5A6E85] mt-2">
              Browse actual photographs of our popcorn machines and live event stations in action across Bengaluru.
            </p>
          </div>

          {/* Photo Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-14">
            {galleryImages.map((img, idx) => (
              <div 
                key={idx}
                className="group relative rounded-2xl overflow-hidden shadow-xs hover:shadow-md transition-shadow bg-white border border-[#F5E6EC]"
              >
                <div className="aspect-[4/3] overflow-hidden bg-gray-100">
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Embedded Video Showcase */}
          <div className="max-w-3xl mx-auto bg-white p-4 sm:p-6 rounded-2xl border border-[#F5E6EC] shadow-md">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-[#FFE8ED] flex items-center justify-center text-[#EE3775]">
                  <Sparkles className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-sm sm:text-base font-bold text-[#111A2E]">Watch Our Video</h3>
                  <p className="text-xs text-[#5A6E85]">See our popcorn machine popping fresh batches at a celebration</p>
                </div>
              </div>
            </div>
            
            <div className="relative rounded-xl overflow-hidden aspect-video bg-black/5 shadow-inner">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/ssKaWe6v4hE?rel=0"
                title="7Delights Popcorn Counter Demo"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* 6. FAQS SECTION */}
      <section className="py-14 md:py-18 bg-white border-b border-[#F5E6EC]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-xs uppercase tracking-wider font-bold text-[#EE3775] bg-[#FFE8ED] px-3 py-1 rounded-md">
              Got Questions?
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#111A2E] mt-3">
              Event FAQ ?
            </h2>
            <GoldUnderline className="w-28 h-auto text-[#EE3775] mx-auto mt-2" />
            <p className="text-xs sm:text-sm text-[#5A6E85] mt-2">
              Everything you need to know about booking our popcorn counter for your upcoming event in Bangalore.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div
                  key={index}
                  className="bg-white rounded-2xl border border-[#F5E6EC] shadow-xs overflow-hidden transition-all duration-200"
                >
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full px-6 py-4 text-left flex items-center justify-between gap-4 hover:bg-gray-50/50 transition-colors"
                  >
                    <span className="text-sm sm:text-base font-bold text-[#111A2E]">
                      {faq.q}
                    </span>
                    <ChevronDown
                      className={`w-4 h-4 text-[#EE3775] shrink-0 transition-transform duration-300 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="px-6 pb-5 pt-1 text-xs sm:text-sm text-[#5A6E85] leading-relaxed border-t border-gray-50 bg-[#FFFDF9]">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 7. BOTTOM CTA */}
      <section className="py-14 bg-gradient-to-r from-[#111A2E] to-[#1E2C48] text-white text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-black mb-3">
            Have queries about our services and performances?
          </h2>
          <p className="text-xs sm:text-sm text-gray-300 max-w-2xl mx-auto mb-8">
            Feel Free to Talk To Us Right Away! Let us get your popcorn counter set up fresh before your guests arrive.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="tel:+919980029977"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#EE3775] hover:bg-[#DE2765] text-white font-bold text-sm shadow-lg shadow-[#EE3775]/30 hover:scale-105 transition-all"
            >
              <Phone className="w-4 h-4 fill-white" />
              <span>Call +91 99800 29977</span>
            </a>
            <a
              href="#party-fun-eatables"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-white/10 hover:bg-white/20 text-white font-bold text-sm backdrop-blur-xs border border-white/20 transition-all"
            >
              <span>Back to Party Eatables</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

