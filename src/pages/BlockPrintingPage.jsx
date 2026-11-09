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
  Stamp, 
  ShoppingBag, 
  Gift, 
  Award, 
  Star, 
  Users 
} from 'lucide-react';

export default function BlockPrintingPage() {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const steps = [
    {
      step: '01',
      title: 'Select Hand-Carved Blocks',
      desc: 'Guests browse an extensive array of hand-carved Teak wood blocks featuring intricate paisleys, florals, animals, and geometric mandalas.',
      icon: <Stamp className="w-5 h-5 text-[#059669]" />,
    },
    {
      step: '02',
      title: 'Dab Mineral Pigment',
      desc: 'The artisan demonstrates how to tap the wooden block gently across color ink-trays to achieve uniform, non-smudge pigment distribution.',
      icon: <Palette className="w-5 h-5 text-[#7B61FF]" />,
    },
    {
      step: '03',
      title: 'Press & Stamp Textile',
      desc: 'Firm, rhythmic fist presses onto cotton tote bags, scarves, or handkerchiefs transfer crisp, stunning artisan designs onto fabric.',
      icon: <ShoppingBag className="w-5 h-5 text-[#EE3775]" />,
    },
    {
      step: '04',
      title: 'Quick-Dry & Cherish',
      desc: 'Eco-friendly pigments set rapidly on drying racks, letting guests carry home their own customized, washable textile artwork.',
      icon: <Gift className="w-5 h-5 text-[#D97706]" />,
    },
  ];

  const benefits = [
    {
      title: 'Hand-Carved Teak Wood Blocks',
      desc: 'Authentic Indian woodblocks hand-carved by heritage artisans, bringing ancient Sanganeri and Bagru craft traditions directly to your event.',
      icon: <Award className="w-6 h-6 text-[#059669]" />,
    },
    {
      title: 'Eco-Friendly, Non-Toxic Dyes',
      desc: 'We strictly utilize skin-safe, washable, and environmentally benign fabric dyes, ensuring complete safety for kids, teens, and adults.',
      icon: <ShieldCheck className="w-6 h-6 text-[#7B61FF]" />,
    },
    {
      title: 'Usable Cotton Take-Home Favors',
      desc: 'Rather than generic plastic trinkets, guests walk away with a practical, eco-friendly cotton canvas tote bag, scarf, or pouch they will actually use.',
      icon: <ShoppingBag className="w-6 h-6 text-[#EE3775]" />,
    },
    {
      title: 'Custom Brand & Wedding Stamps',
      desc: 'Optional custom hand-carved blocks featuring corporate logos, wedding initials, couple monograms, or event slogans for unique branding.',
      icon: <Stamp className="w-6 h-6 text-[#D97706]" />,
    },
    {
      title: 'Therapeutic & Engaging Icebreaker',
      desc: 'Block printing is deeply relaxing and creative, fostering organic conversations among guests, colleagues, and families.',
      icon: <Sparkles className="w-6 h-6 text-[#059669]" />,
    },
    {
      title: 'Turnkey Stall & Workshop Setup',
      desc: 'We supply padded printing tables, wood blocks, color trays, cotton textiles, drying racks, and expert folk artisans who guide every guest.',
      icon: <CheckCircle className="w-6 h-6 text-[#7B61FF]" />,
    },
  ];

  const galleryImages = [
    { src: '/assets/block-print-1.webp', title: 'Live Wooden Stamp Pressing', tag: 'Textile Workshop' },
    { src: '/assets/block-print-2.webp', title: 'Handmade Canvas Tote Bags', tag: 'Custom Favor' },
    { src: '/assets/block-print-3.webp', title: 'Teak Wood Carved Blocks', tag: 'Heritage Stamps' },
    { src: '/assets/block-print-4.webp', title: 'Interactive Guest Workshop', tag: 'All Ages Art' },
  ];

  const faqs = [
    {
      q: 'How far in advance should I book 7Delights Block Printing for my event?',
      a: 'To ensure maximum availability of our master Block Printing artisans, workshop tables, and high-quality canvas bags, we recommend booking at least 1 to 6 weeks in advance for social parties & corporate events, and 3 to 6 months in advance for major weddings or large-scale corporate launches. However, if you have a last-minute request, contact us & we will do our best to make it happen!',
    },
    {
      q: 'How long does it take for your team to set up?',
      a: 'Setup times vary by venue. The Block Printing stall typically requires approximately 1 hour prior to the event start to arrange the padded printing tables, organize dye trays, layout wooden blocks, and assemble the garment drying racks. We coordinate directly with the venue so everything is ready before guests arrive.',
    },
    {
      q: 'What textile items can guests print on?',
      a: 'Our standard packages include high-quality, eco-friendly cotton tote bags. Upon request, we also provide cotton scarves, handkerchiefs, pocket squares, canvas pouches, cushion covers, or cloth coasters. Clients can also supply their own garments if desired.',
    },
    {
      q: 'Is the fabric paint permanent and washable?',
      a: 'Yes! The premium textile inks we use bond permanently to cotton fibers once dry. Once heat-ironed at home, the prints are completely color-fast and machine-washable without fading or bleeding.',
    },
    {
      q: 'Are the dyes messy or staining to guest clothing?',
      a: 'Our fabric dyes are water-soluble before drying and easy to wash off hands with simple soap and water. Our stall attendants provide aprons and hand wipes to ensure guest outfits stay completely spotless throughout the activity.',
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
            <span className="text-[#111A2E] font-medium">Block Printing Bag</span>
          </div>
          <div className="flex items-center space-x-2 text-[#059669] font-medium bg-[#E3F8F2] px-2.5 py-1 rounded-full text-xs">
            <Sparkles className="w-3.5 h-3.5 text-[#059669]" />
            <span>Textile Workshop Available in Bangalore</span>
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
                <Sparkles className="w-3.5 h-3.5 text-[#059669]" />
                <span>Ancient Woodblock Art • Eco-Friendly Cotton Totes</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#111A2E] leading-tight tracking-tight">
                Block Printing Organisers <br className="hidden sm:inline" />
                <span className="text-[#059669]">for Events in Bangalore</span>
              </h1>

              <p className="text-base sm:text-lg text-[#5A6E85] leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Bring the timeless charm, vibrant patterns, and tactile joy of Indian textile art to your event with 7Delights' <strong>Interactive Block Printing Workshop</strong>! Guests step into the role of a master artisan, dipping hand-carved teak wood blocks into rich dyes to create their own custom tote bags and scarves in Bengaluru.
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
                  <ShoppingBag className="w-4 h-4 text-[#EE3775] shrink-0" />
                  <div className="text-left">
                    <div className="text-[11px] text-[#5A6E85] uppercase tracking-wider font-semibold">Favors</div>
                    <div className="text-xs font-bold text-[#111A2E]">Eco Cotton Totes</div>
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
                  href="https://wa.me/919980029977?text=Hi%207Delights,%20I%20would%20like%20to%20inquire%20about%20booking%20the%20Block%20Printing%20Live%20Workshop%20for%20our%20event."
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
                  <CheckCircle className="w-3.5 h-3.5 text-[#059669]" /> Hand-Carved Teak Blocks
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle className="w-3.5 h-3.5 text-[#059669]" /> 100% Non-Toxic Dyes
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle className="w-3.5 h-3.5 text-[#059669]" /> Washable Keepsakes
                </span>
              </div>
            </div>

            {/* Right Column: Hero Visual Showcase */}
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-md lg:max-w-none">
                <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-white">
                  <img
                    src="/assets/block-print-banner.webp"
                    alt="Block Printing Organisers in Bangalore"
                    className="w-full h-[320px] sm:h-[380px] object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/25 to-transparent flex flex-col justify-end p-6 text-white">
                    <span className="inline-block px-3 py-1 rounded-full bg-[#059669] text-white text-xs font-semibold w-max mb-2">
                      Live Hands-On Workshop
                    </span>
                    <p className="text-xl font-bold">Heritage Woodblock Textile Art</p>
                    <p className="text-xs text-white/90 mt-1">Guests press intricate Sanganeri &amp; floral stamps to design personalized tote bags.</p>
                  </div>
                </div>

                {/* Floating Highlight Card */}
                <div className="absolute -bottom-6 -left-4 sm:-left-6 bg-white p-3.5 sm:p-4 rounded-2xl shadow-xl border border-[#F2ECE4] flex items-center gap-3">
                  <div className="w-11 h-11 rounded-xl bg-[#E3F8F2] flex items-center justify-center text-[#059669] font-bold">
                    <Stamp className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-[#111A2E]">Teak Wood Blocks</div>
                    <div className="text-[11px] text-[#5A6E85]">Floral, Mandalas &amp; Paisleys</div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 4-Step Workshop Process */}
      <section className="py-16 bg-white border-y border-[#F2ECE4]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E3F8F2] text-xs font-semibold text-[#059669] mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Step-by-Step Experience</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#111A2E]">
              The Joy of Hand Woodblock Printing
            </h2>
            <p className="text-sm sm:text-base text-[#5A6E85] mt-3">
              An accessible, therapeutic craft workshop that empowers guests of all skill levels to produce gallery-worthy textiles.
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
                    <span className="text-2xl font-black text-[#059669]/25 font-mono">{st.step}</span>
                    <div className="w-10 h-10 rounded-xl bg-white border border-[#F2ECE4] flex items-center justify-center shadow-xs">
                      {st.icon}
                    </div>
                  </div>
                  <p className="text-lg font-bold text-[#111A2E] mb-2">{st.title}</p>
                  <p className="text-xs sm:text-sm text-[#5A6E85] leading-relaxed">{st.desc}</p>
                </div>
                <div className="mt-4 pt-3 border-t border-[#F2ECE4] flex items-center gap-1.5 text-[11px] text-[#059669] font-semibold">
                  <span>Fast, clean &amp; fun</span>
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
            Watch Our Block Printing Workshop in Action
          </h2>
          <p className="text-sm sm:text-base text-[#5A6E85] max-w-2xl mx-auto mb-8">
            Experience the satisfying rhythm of block stamping, vibrant fabric colors, and guests proudly holding their finished tote bags.
          </p>

          <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-black aspect-video max-w-3xl mx-auto">
            <iframe
              src="https://www.youtube.com/embed/dCoJ_SJYN2g?rel=0"
              title="7Delights Block Printing Workshop Video"
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
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E3F8F2] text-xs font-semibold text-[#059669] mb-3">
              <Star className="w-3.5 h-3.5" />
              <span>Authentic Craftsmanship</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#111A2E]">
              Why Choose 7Delights' Block Printing Stall?
            </h2>
            <p className="text-sm sm:text-base text-[#5A6E85] mt-3">
              We bring seasoned traditional folk artisans, premium cotton textiles, teak wood stamps, and immaculate setup directly to your venue.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((b, idx) => (
              <div 
                key={idx}
                className="bg-[#FFFDF9] p-6 rounded-2xl border border-[#F2ECE4] hover:border-[#059669]/30 transition-all hover:shadow-md"
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
          <div className="mt-12 bg-gradient-to-r from-[#F0FAF7] via-white to-[#F2EDFF] rounded-3xl p-6 sm:p-8 border border-[#F2ECE4] shadow-sm">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
              <div className="lg:col-span-4">
                <span className="text-xs font-bold uppercase tracking-wider text-[#059669]">Versatile Appeal</span>
                <h3 className="text-xl sm:text-2xl font-black text-[#111A2E] mt-1">Perfect for Every Celebration</h3>
                <p className="text-xs sm:text-sm text-[#5A6E85] mt-2">
                  An engaging, culturally rich creative station that provides instant entertainment and lasting sentimental keepsake favors.
                </p>
              </div>
              <div className="lg:col-span-8 grid grid-cols-2 sm:grid-cols-3 gap-3">
                {[
                  { name: 'Weddings & Haldi', desc: 'Sangeet guest engagement favor' },
                  { name: 'Corporate Team Building', desc: 'Mindfulness & artistic collaboration' },
                  { name: 'Family Day Carnivals', desc: 'Loved equally by kids & parents' },
                  { name: 'Birthday Parties', desc: 'Educational take-home canvas bags' },
                  { name: 'Festivals & Melas', desc: 'Diwali & festive heritage expos' },
                  { name: 'Brand Activations', desc: 'Custom logo stamped merchandise' },
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
              Moments from Our Block Printing Workshops
            </h2>
            <p className="text-sm sm:text-base text-[#5A6E85] mt-2">
              Browse through our authentic live setup, teak wood block impressions, and custom printed cotton tote bags.
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
              Everything you need to know about booking our Block Printing workshop stall in Bangalore.
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
              <div className="text-base font-bold text-[#111A2E]">Want custom branded tote bags?</div>
              <div className="text-xs text-[#5A6E85] mt-0.5">Contact our Bangalore event planners for custom block carving and textiles.</div>
            </div>
            <div className="flex gap-3">
              <a
                href="tel:+919980029977"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#EE3775] text-white text-xs font-bold hover:bg-[#D92C67] transition-all"
              >
                <Phone className="w-3.5 h-3.5" /> Call Now
              </a>
              <a
                href="https://wa.me/919980029977?text=Hi%207Delights,%20I%20have%20questions%20regarding%20the%20Block%20Printing%20Workshop%20in%20Bangalore."
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

