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
  Palette, 
  Layers, 
  Gift, 
  Award, 
  Star, 
  GlassWater 
} from 'lucide-react';

export default function SandArtBottlePage() {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const steps = [
    {
      step: '01',
      title: 'Pick Glass Bottle & Funnel',
      desc: 'Guests choose from clear, high-clarity glass vials, mini decanters, or star-shaped keepsake bottles equipped with micro-funnels.',
      icon: <GlassWater className="w-5 h-5 text-[#EE3775]" />,
    },
    {
      step: '02',
      title: 'Layer Multi-Color Sand',
      desc: 'Using vibrant neon, pastel, and mineral sands, guests pour diagonal waves, strata layers, and landscape hills.',
      icon: <Palette className="w-5 h-5 text-[#7B61FF]" />,
    },
    {
      step: '03',
      title: 'Sculpt Peaks & Swirls',
      desc: 'With specialized micro-needles and sculpting probes, our artist demonstrates how to pull sand upward into peaks and geometric zig-zags.',
      icon: <Layers className="w-5 h-5 text-[#D97706]" />,
    },
    {
      step: '04',
      title: 'Seal & Take Home',
      desc: 'The bottle is filled completely to the brim and sealed tight with natural cork or wax, locking the artistic layers permanently in place.',
      icon: <Gift className="w-5 h-5 text-[#059669]" />,
    },
  ];

  const benefits = [
    {
      title: 'Mesmerizing Live Sand Artistry',
      desc: 'Sand art seamlessly combines storytelling and visual wonder, captivating onlookers as vibrant grains form landscapes right before their eyes.',
      icon: <Sparkles className="w-6 h-6 text-[#EE3775]" />,
    },
    {
      title: '100% Non-Toxic & Skin-Safe',
      desc: 'We strictly utilize ultra-fine, dust-free, non-toxic colored quartz sands that are safe for kids, toddlers, and hands-on party guests.',
      icon: <ShieldCheck className="w-6 h-6 text-[#059669]" />,
    },
    {
      title: 'Permanent Glass Keepsake Souvenirs',
      desc: 'Once corked and sealed, the sand layers stay locked forever, creating an elegant, colorful decorative paperweight or desk ornament.',
      icon: <Gift className="w-6 h-6 text-[#7B61FF]" />,
    },
    {
      title: 'Vibrant Multi-Color Sand Palette',
      desc: 'Over 12+ vibrant sand hues—from electric magenta and sunshine yellow to oceanic teal, gold, and desert terracotta shades.',
      icon: <Palette className="w-6 h-6 text-[#D97706]" />,
    },
    {
      title: 'Therapeutic Mindfulness for All Ages',
      desc: 'Pouring layered sand is deeply calming and rewarding, making it a favorite interactive stall for corporate stress-relief and kids birthdays.',
      icon: <Star className="w-6 h-6 text-[#EE3775]" />,
    },
    {
      title: 'Turnkey Stall Setup & Clean Operations',
      desc: 'We bring funnel sets, spill trays, sand dispensers, cork bottles, and professional instructors who maintain an immaculate station.',
      icon: <Award className="w-6 h-6 text-[#7B61FF]" />,
    },
  ];

  const galleryImages = [
    { src: '/assets/sand-art-1.webp', title: 'Layered Sand Stratas & Landscapes', tag: 'Live Craft' },
    { src: '/assets/sand-art-main.webp', title: 'Mini Corked Bottle Keepsakes', tag: 'Event Favors' },
    { src: '/assets/sand-art-3.webp', title: 'Precision Sand Funneling', tag: 'Workshop' },
    { src: '/assets/sand-art-show.webp', title: 'Finished Desk Souvenirs', tag: 'Sand Art Stall' },
  ];

  const faqs = [
    {
      q: 'How far in advance should I book 7Delights Sand Art bottle for my event?',
      a: 'To ensure maximum availability of our Sand Art artists, specialized dispensers, and glassware inventory, we recommend booking at least 1 to 6 weeks in advance for social parties & corporate events, and 3 to 6 months in advance for major weddings or large-scale corporate launches. However, if you have a last-minute request, contact us & we will do our best to make it happen!',
    },
    {
      q: 'How long does it take for your team to set up?',
      a: 'Setup times vary by venue. The Sand Art bottle stall typically takes approximately 1 hour prior to the event start to arrange the colorful sand dispensers, funnels, glass bottles, spill mats, and display shelves. We coordinate directly with the venue to ensure everything is ready before guests arrive.',
    },
    {
      q: 'Will the sand shift or mix together when guests carry the bottle home?',
      a: 'Not at all! Our artists pack each bottle completely to the brim under firm compaction before sealing it tightly with a secure cork or wax seal. Because there is zero empty air space inside the bottle, the sand cannot move or shift, preserving the layered landscape design permanently.',
    },
    {
      q: 'Is the colored sand safe for children?',
      a: 'Yes, 100%! We use high-purity, ultra-fine quartz sand dyed with organic, non-toxic, and hypoallergenic colorants. The sand is dust-free and completely skin-safe for children and adults.',
    },
    {
      q: 'What are the technical requirements from the organizer or venue?',
      a: 'We only require one standard table and 2 to 3 chairs in a sheltered or indoor area (to prevent outdoor wind from disturbing fine sand pouring). We provide our own spill trays and protective table covers.',
    },
    {
      q: 'What is your payment policy?',
      a: 'To secure your date, artists, and materials, we require an advance payment upon booking confirmation. The remaining balance is structured into milestones leading up to or on the day of the event.',
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
            <a href="#services" className="hover:text-[#EE3775] transition-colors">Activities &amp; Artists</a>
            <span>/</span>
            <span className="text-[#111A2E] font-medium">Sand Art Bottle</span>
          </div>
          <div className="flex items-center space-x-2 text-[#EE3775] font-medium bg-[#FFE8ED] px-2.5 py-1 rounded-full text-xs">
            <Sparkles className="w-3.5 h-3.5 text-[#EE3775]" />
            <span>Layered Sand Art Available in Bangalore</span>
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
                <Sparkles className="w-3.5 h-3.5 text-[#EE3775]" />
                <span>Layered Grains of Wonder • Permanent Glass Keepsake</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#111A2E] leading-tight tracking-tight">
                Sand Art Bottle Organisers <br className="hidden sm:inline" />
                <span className="text-[#EE3775]">for Events in Bangalore</span>
              </h1>

              <p className="text-base sm:text-lg text-[#5A6E85] leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Sand art is a fascinating performance and interactive craft where colored sand is layered to produce breathtaking landscapes and geometric motifs. Tracing ancient desert roots, 7Delights brings professional <strong>Sand Art Bottle Stalls</strong> to private parties, corporate dinners, and carnivals across Bengaluru!
              </p>

              {/* Service Quick Badges */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2 max-w-xl mx-auto lg:mx-0">
                <div className="flex items-center gap-2 p-2.5 rounded-xl bg-white border border-[#F2ECE4] shadow-sm">
                  <Clock className="w-4 h-4 text-[#EE3775] shrink-0" />
                  <div className="text-left">
                    <div className="text-[11px] text-[#5A6E85] uppercase tracking-wider font-semibold">Duration</div>
                    <div className="text-xs font-bold text-[#111A2E]">2 to 3+ Hours</div>
                  </div>
                </div>

                <div className="flex items-center gap-2 p-2.5 rounded-xl bg-white border border-[#F2ECE4] shadow-sm">
                  <Gift className="w-4 h-4 text-[#7B61FF] shrink-0" />
                  <div className="text-left">
                    <div className="text-[11px] text-[#5A6E85] uppercase tracking-wider font-semibold">Souvenir</div>
                    <div className="text-xs font-bold text-[#111A2E]">Sealed Glass Bottle</div>
                  </div>
                </div>

                <div className="flex items-center gap-2 p-2.5 rounded-xl bg-white border border-[#F2ECE4] shadow-sm col-span-2 sm:col-span-1">
                  <MapPin className="w-4 h-4 text-[#059669] shrink-0" />
                  <div className="text-left">
                    <div className="text-[11px] text-[#5A6E85] uppercase tracking-wider font-semibold">Service Area</div>
                    <div className="text-xs font-bold text-[#111A2E]">All Bengaluru</div>
                  </div>
                </div>
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
                <a
                  href="https://wa.me/919980029977?text=Hi%207Delights,%20I%20would%20like%20to%20inquire%20about%20booking%20the%20Sand%20Art%20Bottle%20Live%20Stall%20for%20our%20event."
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
                  <CheckCircle className="w-3.5 h-3.5 text-[#059669]" /> Permanent Corked Seal
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle className="w-3.5 h-3.5 text-[#059669]" /> 100% Non-Toxic Sand
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle className="w-3.5 h-3.5 text-[#059669]" /> 12+ Vibrant Colors
                </span>
              </div>
            </div>

            {/* Right Column: Hero Visual Showcase */}
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-md lg:max-w-none">
                <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-white">
                  <img
                    src="/assets/sand-art-banner.webp"
                    alt="Sand Art Bottle Organisers in Bangalore"
                    className="w-full h-[320px] sm:h-[380px] object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/25 to-transparent flex flex-col justify-end p-6 text-white">
                    <span className="inline-block px-3 py-1 rounded-full bg-[#EE3775] text-white text-xs font-semibold w-max mb-2">
                      Live Craft Counter
                    </span>
                    <p className="text-xl font-bold">Rainbow Layered Bottle Art</p>
                    <p className="text-xs text-white/90 mt-1">Guests pour vibrant sand layers into glass vials creating permanent desk souvenirs.</p>
                  </div>
                </div>

                {/* Floating Highlight Card */}
                <div className="absolute -bottom-6 -left-4 sm:-left-6 bg-white p-3.5 sm:p-4 rounded-2xl shadow-xl border border-[#F2ECE4] flex items-center gap-3">
                  <div className="w-11 h-11 rounded-xl bg-[#FFE8ED] flex items-center justify-center text-[#EE3775] font-bold">
                    <Layers className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-[#111A2E]">Zero-Shift Packing</div>
                    <div className="text-[11px] text-[#5A6E85]">Compacted &amp; Tightly Sealed</div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 4-Step Live Crafting Process */}
      <section className="py-16 bg-white border-y border-[#F2ECE4]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FFE8ED] text-xs font-semibold text-[#EE3775] mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Step-by-Step Experience</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#111A2E]">
              How Sand Art Bottles Are Crafted
            </h2>
            <p className="text-sm sm:text-base text-[#5A6E85] mt-3">
              A peaceful, artistic experience where guests watch ordinary grains of sand turn into mesmerizing geological miniature wonders.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((st, i) => (
              <div 
                key={i} 
                className="bg-[#FFFDF9] p-6 rounded-2xl border border-[#F2ECE4] shadow-sm hover:shadow-md transition-shadow group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-black text-[#EE3775]/25 font-mono">{st.step}</span>
                    <div className="w-10 h-10 rounded-xl bg-white border border-[#F2ECE4] flex items-center justify-center shadow-xs">
                      {st.icon}
                    </div>
                  </div>
                  <p className="text-lg font-bold text-[#111A2E] mb-2">{st.title}</p>
                  <p className="text-xs sm:text-sm text-[#5A6E85] leading-relaxed">{st.desc}</p>
                </div>
                <div className="mt-4 pt-3 border-t border-[#F2ECE4] flex items-center gap-1.5 text-[11px] text-[#EE3775] font-semibold">
                  <span>Relaxing &amp; Creative</span>
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
            Watch Our Sand Art in Action
          </h2>
          <p className="text-sm sm:text-base text-[#5A6E85] max-w-2xl mx-auto mb-8">
            Experience the mesmerizing flow of colored sand layers and intricate needle sculpting live at Bangalore celebrations.
          </p>

          <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-black aspect-video max-w-3xl mx-auto">
            <iframe
              src="https://www.youtube.com/embed/lnPrmVcfwCg?rel=0"
              title="7Delights Sand Art Demonstration Video"
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
              <span>Exemplary Artistry</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#111A2E]">
              Why Choose 7Delights' Sand Art Stall?
            </h2>
            <p className="text-sm sm:text-base text-[#5A6E85] mt-3">
              We bring artistic expertise, non-toxic vibrant quartz grains, clear glassware, and clean turnkey management to every Bangalore event.
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
                <span className="text-xs font-bold uppercase tracking-wider text-[#EE3775]">Ideal Setting</span>
                <h3 className="text-xl sm:text-2xl font-black text-[#111A2E] mt-1">Perfect for Every Celebration</h3>
                <p className="text-xs sm:text-sm text-[#5A6E85] mt-2">
                  A calming, sophisticated craft counter that leaves guests with an artistic keepsake they proudly display on their work desks.
                </p>
              </div>
              <div className="lg:col-span-8 grid grid-cols-2 sm:grid-cols-3 gap-3">
                {[
                  { name: 'Birthday Parties', desc: 'Hands-on kids creative workshop' },
                  { name: 'Corporate Dinners & Galas', desc: 'Sophisticated interactive craft' },
                  { name: 'Carnivals & Expos', desc: 'Vibrant, colorful crowd puller' },
                  { name: 'Weddings & Receptions', desc: 'Unique souvenir desk favor' },
                  { name: 'School & College Fests', desc: 'Engaging, artistic hands-on fun' },
                  { name: 'Brand Activations', desc: 'Custom colored sand layers' },
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
              Moments from Our Sand Art Stalls
            </h2>
            <p className="text-sm sm:text-base text-[#5A6E85] mt-2">
              Browse through our authentic event photos showing vibrant layered sand bottles, precision sculpting, and finished souvenirs.
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
              Everything you need to know about booking our Sand Art Bottle stall in Bangalore.
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
              <div className="text-base font-bold text-[#111A2E]">Have custom theme or color requirements?</div>
              <div className="text-xs text-[#5A6E85] mt-0.5">Contact our Bangalore event coordinators for bespoke Sand Art setups.</div>
            </div>
            <div className="flex gap-3">
              <a
                href="tel:+919980029977"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#EE3775] text-white text-xs font-bold hover:bg-[#D92C67] transition-all"
              >
                <Phone className="w-3.5 h-3.5" /> Call Now
              </a>
              <a
                href="https://wa.me/919980029977?text=Hi%207Delights,%20I%20have%20questions%20regarding%20the%20Sand%20Art%20Bottle%20stall%20availability%20in%20Bangalore."
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

