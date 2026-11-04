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
  Smile, 
  Music, 
  Zap, 
  Award, 
  Star, 
  RotateCw 
} from 'lucide-react';

export default function MerryGoRoundPage() {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const rideTypes = [
    {
      title: 'Classic Animal Carousel',
      desc: 'Features beautifully sculpted horses, elephants, and playful animals with cheerful music for children up to 10 years.',
      tag: 'Classic Animals',
      color: 'bg-[#F2EDFF] text-[#7B61FF] border-[#E0D5FF]'
    },
    {
      title: 'Rotating Cup & Saucers',
      desc: 'Interactive rotating tea-cups with center turning wheels allowing kids to gently control their own spinning speed.',
      tag: 'Spinning Cups',
      color: 'bg-[#FFE8ED] text-[#EE3775] border-[#FFD0DB]'
    },
    {
      title: 'Helicopter & Vehicle Carousel',
      desc: 'Miniature airplanes, fire engines, and helicopters with LED flashing lights, dashboard horns, and seat belts.',
      tag: 'Vehicles & Planes',
      color: 'bg-[#FFF3DF] text-[#D97706] border-[#FFE4B8]'
    },
    {
      title: 'Toddler Mini Merry-Go-Round',
      desc: 'Gentle, low-speed revolving platform designed specifically for nursery and preschool toddlers under 5 years.',
      tag: 'Toddler Safe',
      color: 'bg-[#E3F8F2] text-[#059669] border-[#C1F1E1]'
    },
  ];

  const benefits = [
    {
      title: 'Triple Safety Harnesses & Belts',
      desc: 'Every animal and seat is equipped with secure latch belts and anti-slip safety footrests to ensure total child protection.',
      icon: <ShieldCheck className="w-6 h-6 text-[#059669]" />,
    },
    {
      title: 'Gentle Variable-Speed Motors',
      desc: 'Driven by soft-start, variable-speed electric drives that deliver ultra-smooth acceleration and gentle rotational deceleration.',
      icon: <RotateCw className="w-6 h-6 text-[#7B61FF]" />,
    },
    {
      title: 'Built-in Festive Lights & Music',
      desc: 'Dazzling warm LED canopy illuminations and joyful carnival nursery chimes create a truly magical fairground ambiance.',
      icon: <Music className="w-6 h-6 text-[#EE3775]" />,
    },
    {
      title: 'Certified Operator On-Site',
      desc: 'A polite, uniform-wearing operator controls the power panel, assists little children onto seats, and manages rider queues.',
      icon: <Award className="w-6 h-6 text-[#D97706]" />,
    },
    {
      title: 'Endless Childhood Smiles',
      desc: 'A nostalgic centerpiece ride that captivates young minds, provides non-stop laughter, and offers delightful photo moments.',
      icon: <Smile className="w-6 h-6 text-[#EE3775]" />,
    },
    {
      title: 'Punctual Setup & Full Breakdown',
      desc: 'We arrive early to set up, test run all mechanical and electrical parameters, and handle complete post-event disassembly.',
      icon: <Zap className="w-6 h-6 text-[#7B61FF]" />,
    },
  ];

  const galleryImages = [
    { src: '/assets/merry-1.webp', title: 'Illuminated Fairground Carousel', tag: 'Classic Carousel' },
    { src: '/assets/merry-2.webp', title: 'Decorated Animal Seats', tag: 'Handcrafted Animals' },
    { src: '/assets/merry-3.webp', title: 'Interactive Kids Spinning Ride', tag: 'All Ages Fun' },
    { src: '/assets/merry-4.webp', title: 'Outdoor Carnival Setup', tag: 'Live Event Ride' },
  ];

  const faqs = [
    {
      q: 'How far in advance should I book 7Delights merry-go-round for my event?',
      a: 'To ensure maximum availability of our merry-go-round carousel units and technicians, we recommend booking at least 1 to 6 weeks in advance for social parties & corporate events, and 3 to 6 months in advance for major weddings or large-scale corporate launches. However, if you have a last-minute request, contact us & we will do our best to make it happen!',
    },
    {
      q: 'How long does it take for your team to set up?',
      a: 'Setup times vary by venue. Merry-go-round installation typically takes 1 to 2 hours prior to the event to assemble the base, secure animal mountings, wire the control console, and perform test rotations. We always coordinate directly with the venue so everything is ready well before guests arrive.',
    },
    {
      q: 'What are the electrical and venue requirements?',
      a: 'We require a flat, stable ground surface (minimum 12x12 ft or 15x15 ft clearance depending on carousel size) and one standard 230V 15A electrical socket within 20 meters. We supply all our own heavy-duty cabling and surge protection.',
    },
    {
      q: 'How many children can ride simultaneously?',
      a: 'Our standard carousels seat between 4, 6, to 8 children per cycle, with rides lasting 2 to 3 minutes each. This delivers smooth rider turnover, easily accommodating 60 to 100+ happy kids per hour without long queues.',
    },
    {
      q: 'What is your payment policy?',
      a: 'To secure your date, equipment, and ride operators, we require an advance payment upon booking confirmation. The remaining balance is structured into milestones leading up to or on the day of the event.',
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
            <span className="text-[#111A2E] font-medium">Merry Go Round</span>
          </div>
          <div className="flex items-center space-x-2 text-[#7B61FF] font-medium bg-[#F2EDFF] px-2.5 py-1 rounded-full text-xs">
            <RotateCw className="w-3.5 h-3.5 text-[#7B61FF]" />
            <span>Classic Carousel Available in Bangalore</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-8 pb-14 lg:py-16 bg-gradient-to-b from-[#F9F7FF] via-[#FFFDF9] to-[#FFFDF9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Column: Heading, Description & Details */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#F2EDFF] border border-[#E0D5FF] text-xs font-semibold text-[#7B61FF]">
                <RotateCw className="w-3.5 h-3.5 text-[#7B61FF]" />
                <span>Vintage Carnival Carousel • Safe &amp; Joyful</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#111A2E] leading-tight tracking-tight">
                Merry Go Round Organisers <br className="hidden sm:inline" />
                <span className="text-[#7B61FF]">for Events in Bangalore</span>
              </h1>

              <p className="text-base sm:text-lg text-[#5A6E85] leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Merry Go Round is an extraordinary and successful amusement ride that brings the timeless magic of childhood to any celebration! With beautifully sculpted animal figures revolving smoothly under sparkling carnival lights and joyful music, our carousels create unforgettable memories across Bengaluru.
              </p>

              {/* Service Quick Badges */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2 max-w-xl mx-auto lg:mx-0">
                <div className="flex items-center gap-2 p-2.5 rounded-xl bg-white border border-[#F2ECE4] shadow-sm">
                  <Clock className="w-4 h-4 text-[#7B61FF] shrink-0" />
                  <div className="text-left">
                    <div className="text-[11px] text-[#5A6E85] uppercase tracking-wider font-semibold">Duration</div>
                    <div className="text-xs font-bold text-[#111A2E]">2 to 3+ Hours</div>
                  </div>
                </div>

                <div className="flex items-center gap-2 p-2.5 rounded-xl bg-white border border-[#F2ECE4] shadow-sm">
                  <ShieldCheck className="w-4 h-4 text-[#059669] shrink-0" />
                  <div className="text-left">
                    <div className="text-[11px] text-[#5A6E85] uppercase tracking-wider font-semibold">Operator</div>
                    <div className="text-xs font-bold text-[#111A2E]">Staff Included</div>
                  </div>
                </div>

                <div className="flex items-center gap-2 p-2.5 rounded-xl bg-white border border-[#F2ECE4] shadow-sm col-span-2 sm:col-span-1">
                  <MapPin className="w-4 h-4 text-[#EE3775] shrink-0" />
                  <div className="text-left">
                    <div className="text-[11px] text-[#5A6E85] uppercase tracking-wider font-semibold">Coverage</div>
                    <div className="text-xs font-bold text-[#111A2E]">All Bengaluru</div>
                  </div>
                </div>
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
                <a
                  href="https://wa.me/919980029977?text=Hi%207Delights,%20I%20would%20like%20to%20inquire%20about%20booking%20the%20Merry%20Go%20Round%20carousel%20for%20our%20event."
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
                  <CheckCircle className="w-3.5 h-3.5 text-[#059669]" /> Smooth Variable Speed Drive
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle className="w-3.5 h-3.5 text-[#059669]" /> Individual Safety Belts
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle className="w-3.5 h-3.5 text-[#059669]" /> Flashing LED Lights &amp; Music
                </span>
              </div>
            </div>

            {/* Right Column: Hero Visual Showcase */}
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-md lg:max-w-none">
                <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-white">
                  <img
                    src="/assets/merry-banner.webp"
                    alt="Merry Go Round Organisers in Bangalore"
                    className="w-full h-[320px] sm:h-[380px] object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/25 to-transparent flex flex-col justify-end p-6 text-white">
                    <span className="inline-block px-3 py-1 rounded-full bg-[#7B61FF] text-white text-xs font-semibold w-max mb-2">
                      Fairground Centerpiece
                    </span>
                    <h3 className="text-xl font-bold">Classic Musical Merry-Go-Round</h3>
                    <p className="text-xs text-white/90 mt-1">Revolving colorful horses and animals with cheerful carnival chimes.</p>
                  </div>
                </div>

                {/* Floating Highlight Card */}
                <div className="absolute -bottom-6 -left-4 sm:-left-6 bg-white p-3.5 sm:p-4 rounded-2xl shadow-xl border border-[#F2ECE4] flex items-center gap-3">
                  <div className="w-11 h-11 rounded-xl bg-[#F2EDFF] flex items-center justify-center text-[#7B61FF] font-bold">
                    <RotateCw className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-[#111A2E]">Full Safety Restraints</div>
                    <div className="text-[11px] text-[#5A6E85]">Individual Buckle Belts</div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Ride Types Section */}
      <section className="py-16 bg-white border-y border-[#F2ECE4]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F2EDFF] text-xs font-semibold text-[#7B61FF] mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Exciting Carousel Choices</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#111A2E]">
              Our Merry Go Round Models
            </h2>
            <p className="text-sm sm:text-base text-[#5A6E85] mt-3">
              Choose from classic animals, spinning teacups, or toddler mini carousels to suit your event profile.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {rideTypes.map((rt, i) => (
              <div 
                key={i} 
                className="bg-[#FFFDF9] p-6 rounded-2xl border border-[#F2ECE4] shadow-sm hover:shadow-md transition-shadow group flex flex-col justify-between"
              >
                <div>
                  <div className="inline-block px-3 py-1 rounded-full text-xs font-bold mb-4 border border-transparent shadow-xs">
                    <span className={`px-2.5 py-0.5 rounded-full ${rt.color}`}>
                      {rt.tag}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-[#111A2E] mb-2">{rt.title}</h3>
                  <p className="text-xs sm:text-sm text-[#5A6E85] leading-relaxed">{rt.desc}</p>
                </div>
                <div className="mt-4 pt-3 border-t border-[#F2ECE4] flex items-center gap-1.5 text-[11px] text-[#7B61FF] font-semibold">
                  <span>Continuous Safe Revolutions</span>
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
            Watch Our Merry Go Round in Action
          </h2>
          <p className="text-sm sm:text-base text-[#5A6E85] max-w-2xl mx-auto mb-8">
            Experience the smooth spinning action, twinkling lights, and boundless excitement as kids ride live at Bangalore parties.
          </p>

          <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-black aspect-video max-w-3xl mx-auto">
            <iframe
              src="https://www.youtube.com/embed/wuebFvhgfNY?rel=0"
              title="7Delights Merry Go Round Live Video"
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
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F2EDFF] text-xs font-semibold text-[#7B61FF] mb-3">
              <Star className="w-3.5 h-3.5" />
              <span>Carnival Excellence</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#111A2E]">
              Why Rent 7Delights' Merry Go Round?
            </h2>
            <p className="text-sm sm:text-base text-[#5A6E85] mt-3">
              Flawless electrical safety, gentle motor controls, trained attendants, and pure childhood joy delivered across Bangalore.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((b, idx) => (
              <div 
                key={idx}
                className="bg-[#FFFDF9] p-6 rounded-2xl border border-[#F2ECE4] hover:border-[#7B61FF]/30 transition-all hover:shadow-md"
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
          <div className="mt-12 bg-gradient-to-r from-[#F9F7FF] via-white to-[#FFE8ED] rounded-3xl p-6 sm:p-8 border border-[#F2ECE4] shadow-sm">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
              <div className="lg:col-span-4">
                <span className="text-xs font-bold uppercase tracking-wider text-[#7B61FF]">All Occasions</span>
                <h3 className="text-xl sm:text-2xl font-black text-[#111A2E] mt-1">Perfect for Every Celebration</h3>
                <p className="text-xs sm:text-sm text-[#5A6E85] mt-2">
                  A magnet for families with children that sets a cheerful, carnival festive mood from the very first minute.
                </p>
              </div>
              <div className="lg:col-span-8 grid grid-cols-2 sm:grid-cols-3 gap-3">
                {[
                  { name: 'Birthday Parties', desc: 'The most photogenic kids ride' },
                  { name: 'Society Carnivals', desc: 'Continuous high turnover fun' },
                  { name: 'School Fests & Sports Days', desc: 'Safe entertainment for juniors' },
                  { name: 'Corporate Family Days', desc: 'Delightful play zone for employees kids' },
                  { name: 'Community Melas', desc: 'Timeless traditional carnival draw' },
                  { name: 'Wedding Receptions', desc: 'Dedicated children amusement area' },
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
              Moments from Our Merry Go Round Events
            </h2>
            <p className="text-sm sm:text-base text-[#5A6E85] mt-2">
              Browse through authentic photos of our vintage carousels, animal seatings, and carnival celebrations across Bangalore.
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
                  <span className="inline-block px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-[#F2EDFF] text-[#7B61FF] mb-1">
                    {img.tag}
                  </span>
                  <h4 className="text-sm font-bold text-[#111A2E]">{img.title}</h4>
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
              Everything you need to know about booking our Merry Go Round in Bangalore.
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
              <div className="text-base font-bold text-[#111A2E]">Have specific dimensions or power questions?</div>
              <div className="text-xs text-[#5A6E85] mt-0.5">Contact our Bangalore event planners for custom carousel packages.</div>
            </div>
            <div className="flex gap-3">
              <a
                href="tel:+919980029977"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#EE3775] text-white text-xs font-bold hover:bg-[#D92C67] transition-all"
              >
                <Phone className="w-3.5 h-3.5" /> Call Now
              </a>
              <a
                href="https://wa.me/919980029977?text=Hi%207Delights,%20I%20have%20questions%20regarding%20Merry%20Go%20Round%20carousel%20rental%20pricing."
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

