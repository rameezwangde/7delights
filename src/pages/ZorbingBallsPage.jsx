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
  Waves, 
  Smile, 
  Zap, 
  Award, 
  Star, 
  CircleDot 
} from 'lucide-react';

export default function ZorbingBallsPage() {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const zorbingTypes = [
    {
      title: 'Water Zorbing Balls',
      desc: 'Participants step inside transparent airtight TPU spheres to walk, run, and roll effortlessly across swimming pools or artificial inflatable water arenas.',
      tag: 'Water Pool Arena',
      color: 'bg-[#E3F8F2] text-[#059669] border-[#C1F1E1]'
    },
    {
      title: 'Land & Lawn Zorbing',
      desc: 'Double-walled giant inflatable orbs that tumble down grassy slopes or flat race tracks with safety harness strapping inside.',
      tag: 'Lawn & Turf',
      color: 'bg-[#FFE8ED] text-[#EE3775] border-[#FFD0DB]'
    },
    {
      title: 'Body Bumper Zorbing',
      desc: 'Wearable half-body inflatable spheres for high-energy Bubble Football, sumo bumper battles, and corporate team-building matches.',
      tag: 'Bubble Football',
      color: 'bg-[#FFF3DF] text-[#D97706] border-[#FFE4B8]'
    },
    {
      title: 'Kids Inflatable Water Pool',
      desc: 'Portable heavy-duty water basin setup on event lawns allowing safe water zorbing even when your venue has no swimming pool.',
      tag: 'Portable Pool Arena',
      color: 'bg-[#F2EDFF] text-[#7B61FF] border-[#E0D5FF]'
    },
  ];

  const benefits = [
    {
      title: '100% Safe Airtight TPU / PVC',
      desc: 'Constructed from high-tensile 0.8mm to 1.0mm eco-friendly thermoplastic polyurethane (TPU) that is tear-resistant and crystal clear.',
      icon: <ShieldCheck className="w-6 h-6 text-[#059669]" />,
    },
    {
      title: 'Dedicated Safety Marshals On-Site',
      desc: 'Trained attendants supervise each entry, monitor oxygen intervals, guide rotation, and ensure absolute safety for riders of all ages.',
      icon: <Award className="w-6 h-6 text-[#EE3775]" />,
    },
    {
      title: 'German Waterproof TIZIP Zippers',
      desc: 'Equipped with heavy-duty airtight and watertight marine-grade zippers with Velcro protective flaps for fast, secure entry and exit.',
      icon: <Zap className="w-6 h-6 text-[#7B61FF]" />,
    },
    {
      title: 'Continuous High-Speed Electric Pumps',
      desc: 'Industrial electric blowers rapidly inflate each ball in under 60 seconds, ensuring zero waiting bottlenecks between turns.',
      icon: <Sparkles className="w-6 h-6 text-[#D97706]" />,
    },
    {
      title: 'Exhilarating Adrenaline Rush',
      desc: 'Experience the bizarre, weightless sensation of walking on water or tumbling on grass without ever getting wet or bruised.',
      icon: <Smile className="w-6 h-6 text-[#EE3775]" />,
    },
    {
      title: 'Complete Turnkey Event Setup',
      desc: 'We supply the zorbing balls, inflatable pool arenas, blowers, water drainage management, safety mats, and staff coordinators.',
      icon: <Waves className="w-6 h-6 text-[#7B61FF]" />,
    },
  ];

  const galleryImages = [
    { src: '/assets/zorbing-main.webp', title: 'Water Zorbing Pool Arena', tag: 'Walk On Water' },
    { src: '/assets/zorbing-land.webp', title: 'Land Zorbing & Inflatable Track', tag: 'Lawn Rolling' },
    { src: '/assets/game-zorbing-balls.webp', title: 'Airtight Transparent Spheres', tag: '100% Safe' },
    { src: '/assets/amusements-banner.webp', title: 'Full Amusement Zone Setup', tag: 'Bangalore Events' },
  ];

  const faqs = [
    {
      q: 'How far in advance should I book 7Delights Zorbing Balls for my event?',
      a: 'To ensure maximum availability of our zorbing balls, inflatable water arenas, and certified safety marshals, we recommend booking at least 1 to 4 weeks in advance for social parties & corporate events, and 3 to 6 months in advance for major college fests or large-scale carnivals. However, if you have a last-minute request, contact us & we will do our best to make it happen!',
    },
    {
      q: 'How long does it take for your team to set up?',
      a: 'Setup times vary by venue. Water zorbing with a portable inflatable pool setup typically requires 1.5 to 2 hours prior to the event to lay protective ground tarps, inflate the pool basin, fill water, and test blowers. Land zorbing setup takes approximately 45 to 60 minutes.',
    },
    {
      q: 'Can we do water zorbing if our venue does NOT have a swimming pool?',
      a: 'Yes! We supply our own heavy-duty portable inflatable water pool arenas (typically 20x20 ft or 25x25 ft) that can be easily set up and filled on any flat lawn, clubhouse driveway, or resort ground.',
    },
    {
      q: 'How does oxygen work inside the ball?',
      a: 'Each zorbing ball contains approximately 20 to 30 minutes of fresh breathable air. However, rider sessions typically last 5 to 7 minutes per turn, which provides an exhilarating workout while ensuring an abundance of fresh air. The ball is freshly replenished with ambient air every time a new rider enters.',
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
            <span className="text-[#111A2E] font-medium">Zorbing Balls</span>
          </div>
          <div className="flex items-center space-x-2 text-[#059669] font-medium bg-[#E3F8F2] px-2.5 py-1 rounded-full text-xs">
            <Waves className="w-3.5 h-3.5 text-[#059669]" />
            <span>Water &amp; Land Zorbing in Bangalore</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-8 pb-14 lg:py-16 bg-gradient-to-b from-[#F0FAF7] via-[#FFFDF9] to-[#FFFDF9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Column: Heading, Description & Details */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#E3F8F2] border border-[#C1F1E1] text-xs font-semibold text-[#059669]">
                <Waves className="w-3.5 h-3.5 text-[#059669]" />
                <span>Walk On Water • High-Energy Adventure</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#111A2E] leading-tight tracking-tight">
                Zorbing Balls Organisers <br className="hidden sm:inline" />
                <span className="text-[#059669]">for Events in Bangalore</span>
              </h1>

              <p className="text-base sm:text-lg text-[#5A6E85] leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Experience the weightless thrill of walking on water and rolling across lawns with 7Delights' <strong>Zorbing Balls</strong>! Our transparent, commercial-grade inflatable spheres are 100% safe, durable, and exhilarating for kids, teens, and adults at birthday parties, corporate family days, and college carnivals across Bengaluru.
              </p>

              {/* Service Quick Badges */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2 max-w-xl mx-auto lg:mx-0">
                <div className="flex items-center gap-2 p-2.5 rounded-xl bg-white border border-[#F2ECE4] shadow-sm">
                  <Clock className="w-4 h-4 text-[#059669] shrink-0" />
                  <div className="text-left">
                    <div className="text-[11px] text-[#5A6E85] uppercase tracking-wider font-semibold">Duration</div>
                    <div className="text-xs font-bold text-[#111A2E]">2 to 3+ Hours</div>
                  </div>
                </div>

                <div className="flex items-center gap-2 p-2.5 rounded-xl bg-white border border-[#F2ECE4] shadow-sm">
                  <ShieldCheck className="w-4 h-4 text-[#EE3775] shrink-0" />
                  <div className="text-left">
                    <div className="text-[11px] text-[#5A6E85] uppercase tracking-wider font-semibold">Safety</div>
                    <div className="text-xs font-bold text-[#111A2E]">Marshals Included</div>
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
                  href="https://wa.me/919980029977?text=Hi%207Delights,%20I%20would%20like%20to%20inquire%20about%20booking%20Zorbing%20Balls%20for%20our%20event."
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
                  <CheckCircle className="w-3.5 h-3.5 text-[#059669]" /> Airtight German TIZIP Zippers
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle className="w-3.5 h-3.5 text-[#059669]" /> Portable Pool Setup Available
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle className="w-3.5 h-3.5 text-[#059669]" /> 100% Waterproof &amp; Clean
                </span>
              </div>
            </div>

            {/* Right Column: Hero Visual Showcase */}
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-md lg:max-w-none">
                <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-white">
                  <img
                    src="/assets/zorbing-main.webp"
                    alt="Water Zorbing Balls in Bangalore"
                    className="w-full h-[320px] sm:h-[380px] object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/25 to-transparent flex flex-col justify-end p-6 text-white">
                    <span className="inline-block px-3 py-1 rounded-full bg-[#059669] text-white text-xs font-semibold w-max mb-2">
                      Water &amp; Land Adventure
                    </span>
                    <p className="text-xl font-bold">Inflatable Water Walkers</p>
                    <p className="text-xs text-white/90 mt-1">Roll, run, and float effortlessly inside giant crystal-clear orbs.</p>
                  </div>
                </div>

                {/* Floating Highlight Card */}
                <div className="absolute -bottom-6 -left-4 sm:-left-6 bg-white p-3.5 sm:p-4 rounded-2xl shadow-xl border border-[#F2ECE4] flex items-center gap-3">
                  <div className="w-11 h-11 rounded-xl bg-[#E3F8F2] flex items-center justify-center text-[#059669] font-bold">
                    <CircleDot className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-[#111A2E]">Land &amp; Water Options</div>
                    <div className="text-[11px] text-[#5A6E85]">Pool, Lawn &amp; Bubble Football</div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Zorbing Types Section */}
      <section className="py-16 bg-white border-y border-[#F2ECE4]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E3F8F2] text-xs font-semibold text-[#059669] mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Exciting Formats</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#111A2E]">
              Our Zorbing Experiences
            </h2>
            <p className="text-sm sm:text-base text-[#5A6E85] mt-3">
              From floating in swimming pools to energetic bumper soccer matches on lawns, choose your adventure format.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {zorbingTypes.map((zt, i) => (
              <div 
                key={i} 
                className="bg-[#FFFDF9] p-6 rounded-2xl border border-[#F2ECE4] shadow-sm hover:shadow-md transition-shadow group flex flex-col justify-between"
              >
                <div>
                  <div className="inline-block px-3 py-1 rounded-full text-xs font-bold mb-4 border border-transparent shadow-xs">
                    <span className={`px-2.5 py-0.5 rounded-full ${zt.color}`}>
                      {zt.tag}
                    </span>
                  </div>
                  <p className="text-lg font-bold text-[#111A2E] mb-2">{zt.title}</p>
                  <p className="text-xs sm:text-sm text-[#5A6E85] leading-relaxed">{zt.desc}</p>
                </div>
                <div className="mt-4 pt-3 border-t border-[#F2ECE4] flex items-center gap-1.5 text-[11px] text-[#059669] font-semibold">
                  <span>Fast 60s Re-inflation</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Specialties & Why Choose 7Delights */}
      <section className="py-16 bg-[#FFFDF9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E3F8F2] text-xs font-semibold text-[#059669] mb-3">
              <Star className="w-3.5 h-3.5" />
              <span>Certified Equipment</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#111A2E]">
              Why Choose 7Delights for Zorbing Rentals?
            </h2>
            <p className="text-sm sm:text-base text-[#5A6E85] mt-3">
              We bring commercial-grade TPU balls, German waterproof zippers, portable pools, and safety marshals to your venue.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((b, idx) => (
              <div 
                key={idx}
                className="bg-white p-6 rounded-2xl border border-[#F2ECE4] hover:border-[#059669]/30 transition-all hover:shadow-md"
              >
                <div className="w-12 h-12 rounded-xl bg-[#FFFDF9] border border-[#F2ECE4] shadow-xs flex items-center justify-center mb-4">
                  {b.icon}
                </div>
                <h3 className="text-base sm:text-lg font-bold text-[#111A2E] mb-2">{b.title}</h3>
                <p className="text-xs sm:text-sm text-[#5A6E85] leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </div>

          {/* Perfect For Occasions Card */}
          <div className="mt-12 bg-gradient-to-r from-[#F0FAF7] via-white to-[#F2EDFF] rounded-3xl p-6 sm:p-8 border border-[#F2ECE4] shadow-sm">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
              <div className="lg:col-span-4">
                <span className="text-xs font-bold uppercase tracking-wider text-[#059669]">Adrenaline Fun</span>
                <h3 className="text-xl sm:text-2xl font-black text-[#111A2E] mt-1">Perfect for Every Celebration</h3>
                <p className="text-xs sm:text-sm text-[#5A6E85] mt-2">
                  A high-energy crowd puller that fascinates onlookers and delivers non-stop viral photo and video moments.
                </p>
              </div>
              <div className="lg:col-span-8 grid grid-cols-2 sm:grid-cols-3 gap-3">
                {[
                  { name: 'Birthday Parties', desc: 'Unforgettable adventure for kids & teens' },
                  { name: 'Corporate Team Outings', desc: 'Hilarious Bubble Football matches' },
                  { name: 'Apartment Carnivals', desc: 'Portable water pool attraction' },
                  { name: 'College Fests', desc: 'High-energy student race challenges' },
                  { name: 'Resort Gatherings', desc: 'Swimming pool water walking' },
                  { name: 'Community Sports Days', desc: 'Obstacle roll and relay fun' },
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
      <section className="py-16 bg-white border-t border-[#F2ECE4]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E3F8F2] text-xs font-semibold text-[#059669] mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Event Photo Gallery</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#111A2E]">
              Moments from Our Zorbing Events
            </h2>
            <p className="text-sm sm:text-base text-[#5A6E85] mt-2">
              Browse through authentic photos of water walking orbs, lawn zorbing tracks, and happy participants across Bangalore.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {galleryImages.map((img, i) => (
              <div 
                key={i} 
                className="group relative rounded-2xl overflow-hidden shadow-sm bg-[#FFFDF9] border border-[#F2ECE4] hover:shadow-lg transition-all"
              >
                <div className="aspect-[4/3] overflow-hidden bg-gray-100">
                  <img
                    src={img.src}
                    alt={img.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-4">
                  <span className="inline-block px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-[#E3F8F2] text-[#059669] mb-1">
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
      <section className="py-16 bg-[#FFFDF9] border-t border-[#F2ECE4]">
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
              Everything you need to know about booking Zorbing Balls in Bangalore.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div
                  key={index}
                  className="border border-[#F2ECE4] rounded-2xl overflow-hidden bg-white transition-all"
                >
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full px-6 py-4 text-left flex items-center justify-between gap-4 hover:bg-[#FFFDF9] transition-colors"
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
                    <div className="px-6 pb-5 pt-1 text-xs sm:text-sm text-[#5A6E85] leading-relaxed border-t border-[#F2ECE4]/60 bg-[#FFFDF9]">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Quick Contact Banner */}
          <div className="mt-12 p-6 rounded-3xl bg-white border border-[#F2ECE4] text-center flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-center sm:text-left">
              <div className="text-base font-bold text-[#111A2E]">Want a portable pool or land zorbing setup?</div>
              <div className="text-xs text-[#5A6E85] mt-0.5">Contact our Bangalore event coordinators for customized rental pricing.</div>
            </div>
            <div className="flex gap-3">
              <a
                href="tel:+919980029977"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#EE3775] text-white text-xs font-bold hover:bg-[#D92C67] transition-all"
              >
                <Phone className="w-3.5 h-3.5" /> Call Now
              </a>
              <a
                href="https://wa.me/919980029977?text=Hi%207Delights,%20I%20have%20questions%20regarding%20Zorbing%20Balls%20rental%20availability%20in%20Bangalore."
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

