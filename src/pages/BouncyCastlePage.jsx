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
  Castle, 
  Smile, 
  Zap, 
  Award, 
  Star, 
  Layers 
} from 'lucide-react';

export default function BouncyCastlePage() {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const sizes = [
    {
      size: '8x8 Feet',
      title: 'Compact Jumper (8x8 ft)',
      desc: 'Ideal for indoor clubhouses, cozy backyards, and toddler playgroups up to 5-6 young kids at a time.',
      tag: 'Toddler Friendly',
      color: 'bg-[#FFE8ED] text-[#EE3775] border-[#FFD0DB]'
    },
    {
      size: '10x10 Feet',
      title: 'Standard Castle (10x10 ft)',
      desc: 'Our most popular size for birthday parties and apartment society lawns accommodating 8-10 lively jumpers.',
      tag: 'Most Popular',
      color: 'bg-[#FFF3DF] text-[#D97706] border-[#FFE4B8]'
    },
    {
      size: '12x12x14 Feet',
      title: 'Mega Slider & Obstacle (12x12x14 ft)',
      desc: 'Includes high climbing walls, twin slides, and bounce arenas for grand carnivals, school fests, and society events.',
      tag: 'Grand Slide',
      color: 'bg-[#F2EDFF] text-[#7B61FF] border-[#E0D5FF]'
    },
    {
      size: 'Custom Theme',
      title: 'Themed Inflatable Castles',
      desc: 'Available in Jungle Safari, Princess Kingdom, Superhero, and Candy Land printed graphics to match your party theme.',
      tag: 'Theme Matching',
      color: 'bg-[#E3F8F2] text-[#059669] border-[#C1F1E1]'
    },
  ];

  const benefits = [
    {
      title: 'Commercial Heavy-Duty PVC',
      desc: 'Manufactured from premium, double-stitched 0.55mm commercial PVC tarpaulin that is lead-free, fire-retardant, and ultra-durable.',
      icon: <ShieldCheck className="w-6 h-6 text-[#059669]" />,
    },
    {
      title: 'Certified Operator On-Site',
      desc: 'Every booking comes with a polite, trained attendant who monitors child safety, enforces shoes-off rules, and manages group sizes.',
      icon: <Award className="w-6 h-6 text-[#EE3775]" />,
    },
    {
      title: 'Sanitized Before Every Event',
      desc: 'We strictly vacuum, wipe down, and disinfect every bouncing castle prior to inflation to ensure total child health and hygiene.',
      icon: <Sparkles className="w-6 h-6 text-[#7B61FF]" />,
    },
    {
      title: 'Continuous High-Power Blower',
      desc: 'Equipped with commercial-grade CE/UL certified electric blowers that maintain steady, firm inflation throughout your celebration.',
      icon: <Zap className="w-6 h-6 text-[#D97706]" />,
    },
    {
      title: 'Endless Energy Release & Fun',
      desc: 'Gives energetic kids an exhilarating, active physical outlet where they jump, tumble, slide, and socialize safely.',
      icon: <Smile className="w-6 h-6 text-[#EE3775]" />,
    },
    {
      title: 'Complete Turnkey Logistics',
      desc: 'We handle prompt on-time delivery, ground tarp laying, anchor securing, blower connection, and post-party takedown.',
      icon: <Layers className="w-6 h-6 text-[#7B61FF]" />,
    },
  ];

  const galleryImages = [
    { src: '/assets/bouncy-castle-1.webp', title: 'Mega Inflatable Slide (12x12x14 ft)', tag: 'Carnival Slide' },
    { src: '/assets/bouncy-castle-2.webp', title: 'Standard Party Jumper (10x10 ft)', tag: 'Birthday Castle' },
    { src: '/assets/bouncy-castle-3.webp', title: 'Compact Outdoor Lawn Bouncer', tag: 'Safe Play Area' },
    { src: '/assets/bouncy-castle-main.webp', title: 'Twin Pillar Castle Jumper', tag: 'All Ages Fun' },
  ];

  const faqs = [
    {
      q: 'How far in advance should I book 7Delights bouncing castle for my event?',
      a: 'To ensure maximum availability of our bouncing castle equipment, specific sizes, & thematic designs, we recommend booking at least 1 to 6 weeks in advance for social parties & corporate events, and 3 to 6 months in advance for major weddings or large-scale corporate launches. However, if you have a last-minute request, contact us & we will do our best to make it happen!',
    },
    {
      q: 'How long does it take for your team to set up?',
      a: 'Setup times vary by service. Bouncing castle setup typically requires 1 to 2 hours before your event begins to lay protective ground tarps, anchor the structure securely, inflate the castle, and run safety checks. We always coordinate directly with the venue so everything is ready well before guests arrive.',
    },
    {
      q: 'What are the space and power requirements for a bouncy castle?',
      a: 'We require a flat, clear surface (lawn, tiled clubhouse floor, or asphalt free of sharp stones) and one standard 230V 15A electrical power point within 25–30 meters to power the continuous air blower. Extra clearance of at least 2–3 feet around all sides is recommended.',
    },
    {
      q: 'Are your bouncing castles safe for toddlers and young children?',
      a: 'Yes, 100%! Our castles feature enclosed safety mesh netting, soft inflated walls, and padded entry steps to prevent accidental falls. Our dedicated staff supervisor stays stationed at the entrance to manage age groups and ensure fair, gentle play.',
    },
    {
      q: 'What is your payment policy?',
      a: 'To secure your date, equipment, and crew, we require an advance payment upon booking confirmation. The remaining balance is structured into milestones leading up to or on the day of the event.',
    },
  ];

  return (
    <div className="w-full bg-[#FFFDF9] min-h-screen text-[#111A2E] font-sans">
      {/* Breadcrumb / Top Bar */}
      <div className="border-b border-[#F2ECE4] bg-white/70 backdrop-blur-sm sticky top-0 z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between text-xs sm:text-sm text-[#5A6E85]">
          <div className="flex items-center space-x-2">
            <a href="#" className="hover:text-[#EE3775] transition-colors">Home</a>
            <span>/</span>
            <a href="#amusements-games" className="hover:text-[#EE3775] transition-colors">Amusements &amp; Games</a>
            <span>/</span>
            <span className="text-[#111A2E] font-medium">Bouncy Castle</span>
          </div>
          <div className="flex items-center space-x-2 text-[#EE3775] font-medium bg-[#FFE8ED] px-2.5 py-1 rounded-full text-xs">
            <Castle className="w-3.5 h-3.5 text-[#EE3775]" />
            <span>Live Setup Available in Bangalore</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-8 pb-14 lg:py-16 bg-gradient-to-b from-[#FFF5F7] via-[#FFFDF9] to-[#FFFDF9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Column: Heading, Description & Details */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#FFE8ED] border border-[#FFD0DB] text-xs font-semibold text-[#EE3775]">
                <Castle className="w-3.5 h-3.5 text-[#EE3775]" />
                <span>Endless Joy &amp; Safe Inflatable Entertainment</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#111A2E] leading-tight tracking-tight">
                Bouncing Castle Organisers <br className="hidden sm:inline" />
                <span className="text-[#EE3775]">for Events in Bangalore</span>
              </h1>

              <p className="text-base sm:text-lg text-[#5A6E85] leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Bouncing Castles are packed with pure joy, color, and laughter for children at any event! Ideal for birthdays, apartment carnivals, and family celebrations across Bengaluru, our clean, commercial-grade inflatables create a 100% secure play arena for kids to jump, slide, and burn boundless energy safely.
              </p>

              {/* Service Quick Badges */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2 max-w-xl mx-auto lg:mx-0">
                <div className="flex items-center gap-2 p-2.5 rounded-xl bg-white border border-[#F2ECE4] shadow-sm">
                  <Clock className="w-4 h-4 text-[#EE3775] shrink-0" />
                  <div className="text-left">
                    <div className="text-[11px] text-[#5A6E85] uppercase tracking-wider font-semibold">Duration</div>
                    <div className="text-xs font-bold text-[#111A2E]">3 to 4+ Hours</div>
                  </div>
                </div>

                <div className="flex items-center gap-2 p-2.5 rounded-xl bg-white border border-[#F2ECE4] shadow-sm">
                  <ShieldCheck className="w-4 h-4 text-[#059669] shrink-0" />
                  <div className="text-left">
                    <div className="text-[11px] text-[#5A6E85] uppercase tracking-wider font-semibold">Attendant</div>
                    <div className="text-xs font-bold text-[#111A2E]">Staff Included</div>
                  </div>
                </div>

                <div className="flex items-center gap-2 p-2.5 rounded-xl bg-white border border-[#F2ECE4] shadow-sm col-span-2 sm:col-span-1">
                  <MapPin className="w-4 h-4 text-[#7B61FF] shrink-0" />
                  <div className="text-left">
                    <div className="text-[11px] text-[#5A6E85] uppercase tracking-wider font-semibold">Coverage</div>
                    <div className="text-xs font-bold text-[#111A2E]">All Bengaluru</div>
                  </div>
                </div>
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
                <a
                  href="https://wa.me/919980029977?text=Hi%207Delights,%20I%20would%20like%20to%20inquire%20about%20booking%20a%20Bouncing%20Castle%20for%20our%20event."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#25D366] text-white font-bold text-sm shadow-md hover:bg-[#1EBE5D] transition-all transform hover:-translate-y-0.5"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Book via WhatsApp</span>
                </a>

                <a
                  href="tel:+919980029977"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#EE3775] text-white font-bold text-sm shadow-md hover:bg-[#D92C67] transition-all transform hover:-translate-y-0.5"
                >
                  <Phone className="w-4 h-4" />
                  <span>Call +91 99800 29977</span>
                </a>
              </div>

              <div className="flex items-center justify-center lg:justify-start gap-6 pt-2 text-xs text-[#5A6E85]">
                <span className="flex items-center gap-1.5">
                  <CheckCircle className="w-3.5 h-3.5 text-[#059669]" /> Requires Power &amp; Flat Ground
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle className="w-3.5 h-3.5 text-[#059669]" /> Disinfected Before Event
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle className="w-3.5 h-3.5 text-[#059669]" /> Safety Net Enclosures
                </span>
              </div>
            </div>

            {/* Right Column: Hero Visual Showcase */}
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-md lg:max-w-none">
                <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-white">
                  <img
                    src="/assets/bouncy-castle-banner.webp"
                    alt="Bouncy Castle Organisers in Bangalore"
                    className="w-full h-[320px] sm:h-[380px] object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/25 to-transparent flex flex-col justify-end p-6 text-white">
                    <span className="inline-block px-3 py-1 rounded-full bg-[#EE3775] text-white text-xs font-semibold w-max mb-2">
                      Inflatable Play Zone
                    </span>
                    <p className="text-xl font-bold">Safe &amp; Joyous Active Entertainment</p>
                    <p className="text-xs text-white/90 mt-1">High-quality vinyl, gentle cushioning, and dedicated supervisor attendants.</p>
                  </div>
                </div>

                {/* Floating Highlight Card */}
                <div className="absolute -bottom-6 -left-4 sm:-left-6 bg-white p-3.5 sm:p-4 rounded-2xl shadow-xl border border-[#F2ECE4] flex items-center gap-3">
                  <div className="w-11 h-11 rounded-xl bg-[#FFE8ED] flex items-center justify-center text-[#EE3775] font-bold">
                    <Castle className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-[#111A2E]">Multiple Castle Sizes</div>
                    <div className="text-[11px] text-[#5A6E85]">From 8x8 ft to 12x12x14 ft Mega Slides</div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Available Sizes Section */}
      <section className="py-16 bg-white border-y border-[#F2ECE4]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FFE8ED] text-xs font-semibold text-[#EE3775] mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Tailored To Your Venue Space</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#111A2E]">
              Bouncy Castle Sizes &amp; Theme Options
            </h2>
            <p className="text-sm sm:text-base text-[#5A6E85] mt-3">
              Whether you have an indoor apartment clubhouse or a sprawling outdoor lawn, we have the perfect fit.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {sizes.map((sz, i) => (
              <div 
                key={i} 
                className="bg-[#FFFDF9] p-6 rounded-2xl border border-[#F2ECE4] shadow-sm hover:shadow-md transition-shadow group flex flex-col justify-between"
              >
                <div>
                  <div className="inline-block px-3 py-1 rounded-full text-xs font-bold mb-4 border border-transparent shadow-xs">
                    <span className={`px-2.5 py-0.5 rounded-full ${sz.color}`}>
                      {sz.tag}
                    </span>
                  </div>
                  <p className="text-lg font-bold text-[#111A2E] mb-2">{sz.title}</p>
                  <p className="text-xs sm:text-sm text-[#5A6E85] leading-relaxed">{sz.desc}</p>
                </div>
                <div className="mt-4 pt-3 border-t border-[#F2ECE4] flex items-center gap-1.5 text-[11px] text-[#EE3775] font-semibold">
                  <span>Fast 15-min inflation</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Demonstration Section */}
      <section className="py-16 bg-[#FFFDF9]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FFF3DF] text-xs font-semibold text-[#D97706] mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Watch Live Demonstration</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#111A2E] mb-3">
            Watch Our Bouncy Castle in Action
          </h2>
          <p className="text-sm sm:text-base text-[#5A6E85] max-w-2xl mx-auto mb-8">
            See the thrill and joyful smiles as children jump, climb, and slide safely at Bangalore birthday parties and events.
          </p>

          <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-black aspect-video max-w-3xl mx-auto">
            <iframe
              src="https://www.youtube.com/embed/7CPfr6r3SGw?rel=0"
              title="7Delights Bouncy Castle Live Video"
              className="w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </section>

      {/* Specialties & Why Choose 7Delights */}
      <section className="py-16 bg-white border-y border-[#F2ECE4]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FFE8ED] text-xs font-semibold text-[#EE3775] mb-3">
              <Star className="w-3.5 h-3.5" />
              <span>Safety First Standards</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#111A2E]">
              Why Choose 7Delights' Bouncing Castle Rental?
            </h2>
            <p className="text-sm sm:text-base text-[#5A6E85] mt-3">
              We provide sanitized inflatables, full attendant supervision, high-power certified blowers, and punctual setup across Bengaluru.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((b, idx) => (
              <div 
                key={idx}
                className="bg-[#FFFDF9] p-6 rounded-2xl border border-[#F2ECE4] hover:border-[#EE3775]/30 transition-all hover:shadow-md"
              >
                <div className="w-12 h-12 rounded-xl bg-white border border-[#F2ECE4] shadow-xs flex items-center justify-center mb-4">
                  {b.icon}
                </div>
                <h3 className="text-base sm:text-lg font-bold text-[#111A2E] mb-2">{b.title}</h3>
                <p className="text-xs sm:text-sm text-[#5A6E85] leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </div>

          {/* Perfect For Occasions Card */}
          <div className="mt-12 bg-gradient-to-r from-[#FFF5F7] via-white to-[#F2EDFF] rounded-3xl p-6 sm:p-8 border border-[#F2ECE4] shadow-sm">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
              <div className="lg:col-span-4">
                <span className="text-xs font-bold uppercase tracking-wider text-[#EE3775]">Celebrations</span>
                <h3 className="text-xl sm:text-2xl font-black text-[#111A2E] mt-1">Perfect for Every Celebration</h3>
                <p className="text-xs sm:text-sm text-[#5A6E85] mt-2">
                  The #1 must-have centerpiece that keeps kids happily engaged for hours while parents relax and enjoy the party.
                </p>
              </div>
              <div className="lg:col-span-8 grid grid-cols-2 sm:grid-cols-3 gap-3">
                {[
                  { name: 'Birthday Parties', desc: 'The ultimate kids favorite attraction' },
                  { name: 'Society & Apartment Fests', desc: 'High capacity continuous fun' },
                  { name: 'School Carnivals', desc: 'Multi-obstacle & mega slide options' },
                  { name: 'Corporate Family Days', desc: 'Stress-free entertainment for families' },
                  { name: 'Wedding Receptions', desc: 'Dedicated safe kids play zone' },
                  { name: 'Community Melas', desc: 'Eye-catching colorful centerpiece' },
                ].map((occ, i) => (
                  <div key={i} className="bg-white/80 backdrop-blur-xs p-3 rounded-xl border border-[#F2ECE4]">
                    <div className="text-xs font-bold text-[#111A2E]">{occ.name}</div>
                    <div className="text-[11px] text-[#5A6E85]">{occ.desc}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Visual Showcase / Gallery */}
      <section className="py-16 bg-[#FFFDF9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E3F8F2] text-xs font-semibold text-[#059669] mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Event Photo Gallery</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#111A2E]">
              Moments from Our Bouncy Castle Events
            </h2>
            <p className="text-sm sm:text-base text-[#5A6E85] mt-2">
              Browse through our authentic event setups showing compact jumpers, mega slides, and joyous jumping arenas in Bangalore.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {galleryImages.map((img, i) => (
              <div 
                key={i} 
                className="group relative rounded-2xl overflow-hidden shadow-sm bg-white border border-[#F2ECE4] hover:shadow-lg transition-all"
              >
                <div className="aspect-[4/3] overflow-hidden bg-gray-100">
                  <img
                    src={img.src}
                    alt={img.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-4">
                  <span className="inline-block px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-[#FFE8ED] text-[#EE3775] mb-1">
                    {img.tag}
                  </span>
                  <h3 className="text-sm font-bold text-[#111A2E]">{img.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Event FAQ Section */}
      <section className="py-16 bg-white border-t border-[#F2ECE4]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F2EDFF] text-xs font-semibold text-[#7B61FF] mb-3">
              <HelpCircle className="w-3.5 h-3.5" />
              <span>Got Questions?</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#111A2E]">
              Frequently Asked Questions
            </h2>
            <p className="text-sm sm:text-base text-[#5A6E85] mt-2">
              Everything you need to know about booking our Bouncy Castle in Bangalore.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div
                  key={index}
                  className="border border-[#F2ECE4] rounded-2xl overflow-hidden bg-[#FFFDF9] transition-all"
                >
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full px-6 py-4 text-left flex items-center justify-between gap-4 hover:bg-white/60 transition-colors"
                  >
                    <span className="text-sm sm:text-base font-bold text-[#111A2E]">
                      {faq.q}
                    </span>
                    <ChevronDown
                      className={`w-5 h-5 text-[#5A6E85] shrink-0 transition-transform duration-300 ${
                        isOpen ? 'rotate-180 text-[#EE3775]' : ''
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="px-6 pb-5 pt-1 text-xs sm:text-sm text-[#5A6E85] leading-relaxed border-t border-[#F2ECE4]/60 bg-white/40">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Quick Contact Banner */}
          <div className="mt-12 p-6 rounded-3xl bg-[#FFFDF9] border border-[#F2ECE4] text-center flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-center sm:text-left">
              <div className="text-base font-bold text-[#111A2E]">Have specific venue or size questions?</div>
              <div className="text-xs text-[#5A6E85] mt-0.5">Contact our Bangalore event coordinators for customized rental options.</div>
            </div>
            <div className="flex gap-3">
              <a
                href="tel:+919980029977"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#EE3775] text-white text-xs font-bold hover:bg-[#D92C67] transition-all"
              >
                <Phone className="w-3.5 h-3.5" /> Call Now
              </a>
              <a
                href="https://wa.me/919980029977?text=Hi%207Delights,%20I%20have%20questions%20regarding%20Bouncing%20Castle%20sizes%20and%20rental%20pricing."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#25D366] text-white text-xs font-bold hover:bg-[#1EBE5D] transition-all"
              >
                <MessageCircle className="w-3.5 h-3.5" /> WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

