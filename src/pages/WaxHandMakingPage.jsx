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
  Flame, 
  HeartHandshake, 
  Zap, 
  Award, 
  Gift, 
  Smile, 
  Star 
} from 'lucide-react';

export default function WaxHandMakingPage() {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const steps = [
    {
      step: '01',
      title: 'The Dip',
      desc: 'Guests briefly dip their hand into skin-safe, warm cosmetic paraffin wax monitored continuously at the ideal comfortable temperature.',
      icon: <Flame className="w-5 h-5 text-[#EE3775]" />,
    },
    {
      step: '02',
      title: 'The Chills',
      desc: 'The hand is immediately submerged into clean, soothing cool water to rapidly set the wax layer into a precise contour mold.',
      icon: <Sparkles className="w-5 h-5 text-[#7B61FF]" />,
    },
    {
      step: '03',
      title: 'The Reveal',
      desc: 'After building just a few light layers, the wax "glove" is gently wiggled off, creating a perfect 3D replica of the guest\'s hand gesture.',
      icon: <HandHeartIcon className="w-5 h-5 text-[#059669]" />,
    },
    {
      step: '04',
      title: 'The Glow-Up',
      desc: 'Guests dip their custom sculpture into vibrant dip-dye pots to create dazzling multi-color ombre gradients, tie-dye, or metallic finishes.',
      icon: <Palette className="w-5 h-5 text-[#F5A623]" />,
    },
  ];

  const benefits = [
    {
      title: '100% Skin-Safe Paraffin Wax',
      desc: 'We strictly use premium cosmetic-grade paraffin wax formulated specifically for body art, dermatologically gentle and comfortably warm.',
      icon: <ShieldCheck className="w-6 h-6 text-[#EE3775]" />,
    },
    {
      title: 'Double Hands for Couples & Friends',
      desc: 'Huge hit at weddings, sangeets, and anniversaries! Couples or best friends can intertwine hands to cast an eternal joint sculpture.',
      icon: <HeartHandshake className="w-6 h-6 text-[#7B61FF]" />,
    },
    {
      title: 'Fast 5–7 Minute Process',
      desc: 'Rapid cycle time ensures an uninterrupted, lively guest flow without long queues, delivering up to 40+ personalized sculptures in 3 hours.',
      icon: <Zap className="w-6 h-6 text-[#F5A623]" />,
    },
    {
      title: 'Vibrant Multi-Color Dipping',
      desc: 'Multiple warm dye baths let guests choose single tones, 2-tone fades, 3-color swirls, or rainbow gradients matching event color palettes.',
      icon: <Palette className="w-6 h-6 text-[#059669]" />,
    },
    {
      title: 'Protective Packaging Included',
      desc: 'Every wax hand is securely mounted onto a stable wax base and packaged in protective takeaway boxes so guests take their masterpiece home safely.',
      icon: <Gift className="w-6 h-6 text-[#EE3775]" />,
    },
    {
      title: 'Complete Professional Station',
      desc: 'We supply thermostatically controlled melters, cooling basins, drip guards, drying trays, and courteous attendants who manage everything.',
      icon: <Award className="w-6 h-6 text-[#7B61FF]" />,
    },
  ];

  const galleryImages = [
    { src: '/assets/wax-hand-1.webp', title: 'Live Hand Dip Casting', tag: 'Wax Dip Station' },
    { src: '/assets/wax-hand-2.webp', title: 'Couples & Family Hand Casts', tag: 'Double Hands' },
    { src: '/assets/wax-hand-show.webp', title: 'Multi-Color Dip & Gradient', tag: 'Custom Pigments' },
    { src: '/assets/wax-hand-main.webp', title: 'Finished 3D Hand Keepsakes', tag: 'Permanent Souvenir' },
  ];

  const faqs = [
    {
      q: 'How far in advance should I book 7Delights wax hand making for my event?',
      a: 'To ensure maximum availability of our wax hand making artists and specialized heating equipment, we recommend booking at least 1 to 6 weeks in advance for social parties & corporate events, and 3 to 6 months in advance for major weddings or large-scale corporate launches. However, if you have a last-minute request, contact us and we will do our best to make it happen!',
    },
    {
      q: 'How long does it take for your team to set up?',
      a: 'Setup times vary by venue. Our wax hand making station requires approximately 1 to 2 hours before the event start time to melt the paraffin wax to the exact target temperature and set up the cooling stations. We always coordinate directly with the venue so everything is flawlessly ready before your first guest arrives.',
    },
    {
      q: 'Is the warm wax safe for children and sensitive skin?',
      a: 'Absolutely! We exclusively use premium cosmetic-grade paraffin wax formulated specifically for body art and spa treatments. The wax melts at a low, soothing temperature that feels like a warm hand bath. Our trained attendants constantly test and monitor temperature gauges to ensure 100% safety and comfort for guests of all ages.',
    },
    {
      q: 'How many wax hands can be crafted during a standard 3-hour session?',
      a: 'Our standard 3-hour stall comfortably produces a minimum of 40 completed customized wax hands. Extra duration and higher quantity capacities are readily accommodated upon request for large corporate fests or wedding receptions.',
    },
    {
      q: 'What are the technical requirements from the organizer or venue?',
      a: 'We only require a standard 230V electrical power outlet (15A socket preferred for the thermal melters), one standard table with chairs, and access to fresh water to fill our cooling basins. We handle all cleanup and waste removal completely.',
    },
    {
      q: 'What is your payment policy?',
      a: 'To secure your date, artists, and materials, we require an advance payment upon booking confirmation. The remaining balance is structured into convenient milestones leading up to or on the day of the event.',
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
            <span className="text-[#111A2E] font-medium">Wax Hand Making</span>
          </div>
          <div className="flex items-center space-x-2 text-[#059669] font-medium bg-[#E3F8F2] px-2.5 py-1 rounded-full text-xs">
            <span className="w-2 h-2 rounded-full bg-[#059669] animate-pulse"></span>
            <span>Live Stall Available Bangalore</span>
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
                <span>Freeze A Moment In Time • 3D Keepsake</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#111A2E] leading-tight tracking-tight">
                Wax Hand Making Organisers <br className="hidden sm:inline" />
                <span className="text-[#EE3775]">for Events in Bangalore</span>
              </h1>

              <p className="text-base sm:text-lg text-[#5A6E85] leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Looking for an event activity that is literally <strong>"hands-on"</strong>? 7Delights brings the fascinating craft of Wax Hand Making to your next celebration! Guests briefy dip their hand into warm, skin-safe paraffin wax and cool water to unveil an exquisite, colorful 3D wax sculpture of their own hand in just minutes.
              </p>

              {/* Service Quick Badges */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2 max-w-xl mx-auto lg:mx-0">
                <div className="flex items-center gap-2 p-2.5 rounded-xl bg-white border border-[#F2ECE4] shadow-sm">
                  <Clock className="w-4 h-4 text-[#EE3775] shrink-0" />
                  <div className="text-left">
                    <div className="text-[11px] text-[#5A6E85] uppercase tracking-wider font-semibold">Duration</div>
                    <div className="text-xs font-bold text-[#111A2E]">3 to 4 Hours</div>
                  </div>
                </div>

                <div className="flex items-center gap-2 p-2.5 rounded-xl bg-white border border-[#F2ECE4] shadow-sm">
                  <Gift className="w-4 h-4 text-[#7B61FF] shrink-0" />
                  <div className="text-left">
                    <div className="text-[11px] text-[#5A6E85] uppercase tracking-wider font-semibold">Min Capacity</div>
                    <div className="text-xs font-bold text-[#111A2E]">40+ Wax Hands</div>
                  </div>
                </div>

                <div className="flex items-center gap-2 p-2.5 rounded-xl bg-white border border-[#F2ECE4] shadow-sm col-span-2 sm:col-span-1">
                  <MapPin className="w-4 h-4 text-[#059669] shrink-0" />
                  <div className="text-left">
                    <div className="text-[11px] text-[#5A6E85] uppercase tracking-wider font-semibold">Coverage</div>
                    <div className="text-xs font-bold text-[#111A2E]">All Bengaluru</div>
                  </div>
                </div>
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
                <a
                  href="https://wa.me/919980029977?text=Hi%207Delights,%20I%20would%20like%20to%20inquire%20about%20booking%20the%20Wax%20Hand%20Making%20Live%20Stall%20for%20our%20event."
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
                  <CheckCircle className="w-3.5 h-3.5 text-[#059669]" /> Power Supply Required
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle className="w-3.5 h-3.5 text-[#059669]" /> Free Take-Home Box
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle className="w-3.5 h-3.5 text-[#059669]" /> 100% Skin Safe
                </span>
              </div>
            </div>

            {/* Right Column: Hero Visual Showcase */}
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-md lg:max-w-none">
                <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-white">
                  <img
                    src="/assets/wax-hand-banner.webp"
                    alt="Wax Hand Making Organisers in Bangalore"
                    className="w-full h-[320px] sm:h-[380px] object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex flex-col justify-end p-6 text-white">
                    <span className="inline-block px-3 py-1 rounded-full bg-[#EE3775] text-white text-xs font-semibold w-max mb-2">
                      Live Event Souvenir Stall
                    </span>
                    <p className="text-xl font-bold">Freeze Any Hand Sign In 3D</p>
                    <p className="text-xs text-white/90 mt-1">Peace signs, thumbs-up, rock-on gestures, or couples holding hands cast into vibrant desk art.</p>
                  </div>
                </div>

                {/* Floating Highlight Card */}
                <div className="absolute -bottom-6 -left-4 sm:-left-6 bg-white p-3.5 sm:p-4 rounded-2xl shadow-xl border border-[#F2ECE4] flex items-center gap-3">
                  <div className="w-11 h-11 rounded-xl bg-[#FFE8ED] flex items-center justify-center text-[#EE3775] font-bold">
                    <HeartHandshake className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-[#111A2E]">Double Hand Casts</div>
                    <div className="text-[11px] text-[#5A6E85]">Couples &amp; BFFs Love It!</div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* How The Magic Happens Section (4 Steps) */}
      <section className="py-16 bg-white border-y border-[#F2ECE4]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FFE8ED] text-xs font-semibold text-[#EE3775] mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Step-by-Step Experience</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#111A2E]">
              How the Magic Happens in 5–7 Minutes
            </h2>
            <p className="text-sm sm:text-base text-[#5A6E85] mt-3">
              Part science, part art, and mesmerising entertainment for everyone watching in the crowd!
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((st, i) => (
              <div 
                key={i} 
                className="relative bg-[#FFFDF9] p-6 rounded-2xl border border-[#F2ECE4] shadow-sm hover:shadow-md transition-shadow group flex flex-col justify-between"
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
                  <span>Fast &amp; 100% painless</span>
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
            <span>Watch Live in Action</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#111A2E] mb-3">
            Watch Our Wax Hand Making Video
          </h2>
          <p className="text-sm sm:text-base text-[#5A6E85] max-w-2xl mx-auto mb-8">
            Experience the instant delight as guests dip, cool, and reveal their vibrant 3D sculptured keepsakes live at Bangalore events.
          </p>

          <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-black aspect-video max-w-3xl mx-auto">
            <iframe
              src="https://www.youtube.com/embed/mw3wFJWFYDE?rel=0"
              title="7Delights Wax Hand Making Video Demonstration"
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
              <span>Unmatched Quality &amp; Safety</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#111A2E]">
              Why Choose 7Delights' Wax Hand Making Stall?
            </h2>
            <p className="text-sm sm:text-base text-[#5A6E85] mt-3">
              We bring top-tier equipment, food/cosmetic grade paraffin, temperature monitors, and delightful customer service directly to your party venue.
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
                <span className="text-xs font-bold uppercase tracking-wider text-[#EE3775]">Ideal Occasions</span>
                <h3 className="text-xl sm:text-2xl font-black text-[#111A2E] mt-1">Perfect For Every Celebration</h3>
                <p className="text-xs sm:text-sm text-[#5A6E85] mt-2">
                  A high-visibility interactive stall that immediately draws inquisitive crowds and creates unforgettable photo opportunities.
                </p>
              </div>
              <div className="lg:col-span-8 grid grid-cols-2 sm:grid-cols-3 gap-3">
                {[
                  { name: 'Weddings & Sangeet', desc: 'Romantic couple hand casts' },
                  { name: 'Corporate Family Days', desc: 'Fascinates kids and parents' },
                  { name: 'Birthday Parties', desc: 'Coolest personalized favor' },
                  { name: 'College Fests & Carnivals', desc: 'High-visibility crowd puller' },
                  { name: 'Brand Activations', desc: 'High dwell time engagement' },
                  { name: 'Anniversary Parties', desc: 'Commemorate togetherness' },
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
              <span>Authentic Event Photos</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#111A2E]">
              Moments from Our Wax Hand Making Stalls
            </h2>
            <p className="text-sm sm:text-base text-[#5A6E85] mt-2">
              See the variety of hand gestures, single hands, double hands, and colorful ombre finishes crafted on-site.
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
              Everything you need to know about booking our Wax Hand Making stall in Bangalore.
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
              <div className="text-base font-bold text-[#111A2E]">Still have specific questions?</div>
              <div className="text-xs text-[#5A6E85] mt-0.5">Speak with our Bangalore event coordinators directly.</div>
            </div>
            <div className="flex gap-3">
              <a
                href="tel:+919980029977"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#EE3775] text-white text-xs font-bold hover:bg-[#D92C67] transition-all"
              >
                <Phone className="w-3.5 h-3.5" /> Call Now
              </a>
              <a
                href="https://wa.me/919980029977?text=Hi%207Delights,%20I%20have%20questions%20regarding%20Wax%20Hand%20Making%20stall%20charges%20and%20availability."
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

function HandHeartIcon(props) {
  return (
    <svg 
      {...props} 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    >
      <path d="M18 11V6a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v0" />
      <path d="M14 10V4a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v2" />
      <path d="M10 10.5V6a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v8" />
      <path d="M18 8a2 2 0 1 1 4 0v6a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.86-5.99-2.34l-3.6-3.6a2 2 0 0 1 2.83-2.82L7 15" />
    </svg>
  );
}

