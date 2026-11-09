import React, { useState } from 'react';
import { 
  Sparkles, 
  Phone, 
  MapPin, 
  ShieldCheck, 
  ChevronDown, 
  Award, 
  CheckCircle2, 
  Briefcase, 
  MessageCircle, 
  Star, 
  Cpu, 
  Layers, 
  Printer, 
  Boxes, 
  Zap,
  Gem,
  CheckCircle
} from 'lucide-react';
import { GoldUnderline } from '../components/Doodles';

export default function ThreeDCorporateGiftingPage() {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const specialties = [
    {
      title: 'Limitless 3D Customization & Logo Art',
      desc: 'Beyond standard logo imprints, we incorporate your brand identity directly into the physical structure of desk organizers, bespoke geometric art, and functional executive sculptures.',
      tag: 'Brand Integration',
      color: 'bg-[#FFE8ED] text-[#EE3775] border-[#FFD0DB]',
      image: '/assets/3d-logo-printing.webp'
    },
    {
      title: 'Architectural & Product Scale Miniatures',
      desc: 'High-precision 3D scaled replicas of tech hardware, architectural buildings, real estate layouts, and automotive designs crafted for VIP stakeholders and investor launch galas.',
      tag: 'Scale Miniatures',
      color: 'bg-[#EDF5FF] text-[#2563EB] border-[#D0E2FF]',
      image: '/assets/3d-print-table-tennis-set.webp'
    },
    {
      title: 'Bespoke Industry Awards & Trophies',
      desc: 'Move away from generic glass plaques. We engineer industry-specific 3D trophies—such as interlocking gears for engineering or stylized cloud towers for IT and cloud enterprises.',
      tag: 'Custom Trophies',
      color: 'bg-[#FFF3DF] text-[#D97706] border-[#FFE4B8]',
      image: '/assets/3d-printed-chess-board.webp'
    },
    {
      title: 'Executive Desk Sets & Functional Decor',
      desc: 'Sophisticated geometric vases, modular pen stands, cable caddies, and personalized phone docks that elevate executive workspaces with cutting-edge design.',
      tag: 'Executive Decor',
      color: 'bg-[#EBF7F2] text-[#00A86B] border-[#C8EFE0]',
      image: '/assets/3d-print-pen-stand.webp'
    }
  ];

  const highlights = [
    { title: 'Turnaround Time', value: 'Rapid Delivery', sub: 'From CAD design to batch production' },
    { title: 'Material Choices', value: 'High-Tech Polymers', sub: 'Wood-infused, metallic & PLA filaments' },
    { title: 'Local Tech Hub', value: 'Bengaluru Facility', sub: 'High-resolution industrial 3D printers' },
    { title: 'Batch Flexibility', value: 'Low to High Run', sub: 'Single VIP trophies to 1,000+ units' }
  ];

  const galleryImages = [
    { src: '/assets/3d-print-table-tennis-set.webp', caption: 'Custom 3D Engineered Interactive Games', tag: 'Custom Miniatures' },
    { src: '/assets/3d-printed-chess-board.webp', caption: 'High-Precision 3D Geometric Chess Set', tag: 'Luxury Trophies' },
    { src: '/assets/3d-logo-printing.webp', caption: '3D Structural Corporate Brand Art', tag: 'Brand Display' },
    { src: '/assets/3d-print-pen-stand.webp', caption: 'Architectural Geometric Desk Organizers', tag: 'Executive Deskware' },
    { src: '/assets/3d-print-vase.webp', caption: 'Parametric 3D Modern Floral Vases', tag: 'Interior Art' },
    { src: '/assets/3d-printing-products.webp', caption: 'Innovative Multi-Filament Production Showcase', tag: 'Material Range' }
  ];

  const faqs = [
    {
      q: 'How far in advance should I book 7Delights 3D printing corporate gifting for my event?',
      a: 'To allow ample time for CAD modeling, design proofing, prototype printing, and batch manufacturing, we recommend booking at least 1 to 4 weeks in advance for corporate events and product launches, and 4 to 8 weeks ahead for large annual day banquets or national trade shows. Rapid-track production is also available for urgent milestone deadlines!'
    },
    {
      q: 'Do I need to provide existing 3D CAD design files?',
      a: 'Not at all! You do not need to be a 3D designer. You only need to share your corporate logo, product photo, or initial vision. Our in-house CAD specialists will generate the 3D model, send you digital renders for review, and iterate until you approve the design.'
    },
    {
      q: 'What materials and finishes are available for 3D printed corporate gifts?',
      a: 'We print using industrial-grade eco-friendly PLA, ABS, PETG, wood-infused filaments that look and feel like carved timber, metallic bronzes, and smooth resin finishes. Each item undergoes meticulous post-processing, hand-finishing, and optional laser detailing.'
    },
    {
      q: 'Can 7Delights set up a live 3D printing booth at our corporate event?',
      a: 'Yes, absolutely! We offer integrated "Live 3D Printing Stalls" where our tech team sets up live printers inside your banquet hall or convention booth. Attendees can watch personalized corporate souvenirs and customized keychains print before their eyes—an unforgettable tech attraction!'
    },
    {
      q: 'What is your payment and corporate procurement policy?',
      a: 'We work seamlessly with enterprise procurement processes, GST invoicing, PO issuance, and vendor onboarding. An advance token is collected upon digital prototype approval, with milestone billing for batch production and doorstep delivery.'
    }
  ];

  return (
    <div className="bg-[#FFFDF9] min-h-screen text-[#111A2E] font-sans antialiased">
      {/* Breadcrumb Navigation */}
      <nav aria-label="Breadcrumb" className="bg-white border-b border-[#E2E8F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <ol className="flex items-center space-x-2 text-sm text-[#5A6E85]">
            <li>
              <a href="#" className="hover:text-[#EE3775] transition-colors flex items-center gap-1">
                <span>Home</span>
              </a>
            </li>
            <li><span className="text-gray-400">/</span></li>
            <li>
              <a href="#gifting" className="hover:text-[#EE3775] transition-colors">
                Gifting
              </a>
            </li>
            <li><span className="text-gray-400">/</span></li>
            <li className="font-semibold text-[#EE3775] truncate">
              3D Printing Corporate Gifting
            </li>
          </ol>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-8 pb-14 lg:py-16 bg-gradient-to-b from-[#FFF5F7] via-[#FFFDF9] to-[#FFFDF9] border-b border-[#F5E6EC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            
            {/* Left Column: Heading & Content */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 bg-[#FFE8ED] text-[#EE3775] text-xs sm:text-sm font-bold px-3.5 py-1.5 rounded-full border border-[#FFD0DB] shadow-sm">
                <Printer className="w-4 h-4 text-[#EE3775]" />
                <span>Futuristic 3D Additive Manufacturing • Bengaluru Corporate Hub</span>
              </div>

              <div className="space-y-3">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#111A2E] tracking-tight leading-tight">
                  3D Printing <span className="text-[#EE3775] relative inline-block">
                    Corporate Gifting
                    <GoldUnderline className="absolute left-0 -bottom-2 w-full text-[#EE3775]" />
                  </span> in Bangalore
                </h1>
                <p className="text-base sm:text-lg text-[#5A6E85] font-normal leading-relaxed pt-2">
                  In a world of generic ballpens and standard notebooks, stand out with the cutting edge of tech! 7Delights brings advanced 3D printing to corporate gifting, offering bespoke trophies, precision scale models, and structural logo desk art that reflect your brand&apos;s commitment to innovation.
                </p>
              </div>

              {/* Quick Spec Highlights */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
                {highlights.map((h, i) => (
                  <div key={i} className="bg-white p-3.5 rounded-2xl border border-[#F3D7E2] shadow-sm text-center">
                    <p className="text-xs text-[#5A6E85] font-medium">{h.title}</p>
                    <p className="text-base sm:text-lg font-bold text-[#111A2E] mt-0.5">{h.value}</p>
                    <p className="text-[11px] text-[#869AB8] mt-0.5 truncate">{h.sub}</p>
                  </div>
                ))}
              </div>

              {/* CTAs */}
              <div className="pt-3 flex flex-wrap items-center gap-3 sm:gap-4">
                <a
                  href="#contact"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-[#EE3775] hover:bg-[#D82563] text-white font-bold rounded-xl shadow-lg shadow-[#EE3775]/25 hover:shadow-xl hover:shadow-[#EE3775]/35 transition-all duration-200 transform hover:-translate-y-0.5"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>Request 3D Custom Quote</span>
                </a>
                <a
                  href="tel:+919980029977"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-white hover:bg-gray-50 text-[#111A2E] font-bold rounded-xl border-2 border-[#111A2E]/15 hover:border-[#111A2E]/30 transition-all shadow-sm"
                >
                  <Phone className="w-4 h-4 text-[#EE3775]" />
                  <span>Call +91 99800 29977</span>
                </a>
              </div>

              <div className="flex flex-wrap items-center gap-4 text-xs sm:text-sm text-[#5A6E85] pt-1">
                <span className="flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  CAD Digital Modeling Support
                </span>
                <span className="flex items-center gap-1.5">
                  <Cpu className="w-4 h-4 text-blue-600" />
                  High-Precision Industrial Printers
                </span>
                <span className="flex items-center gap-1.5">
                  <MapPin className="w-4 h-4 text-[#EE3775]" />
                  Bengaluru Local Production
                </span>
              </div>
            </div>

            {/* Right Column: Hero Visual Showcase */}
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-md lg:max-w-none">
                <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-white">
                  <img
                    src="/assets/corporate-gifting-banner.webp"
                    alt="3D Printing Corporate Gifting Bangalore"
                    className="w-full h-[380px] sm:h-[440px] object-cover object-center transform hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent flex items-end p-6">
                    <div className="text-white space-y-1">
                      <span className="bg-[#EE3775] text-white text-xs font-black uppercase px-2.5 py-1 rounded-md tracking-wider">
                        Futuristic Executive Gifts
                      </span>
                      <h3 className="text-xl font-bold">Designed For You, Layer By Layer</h3>
                      <p className="text-xs text-white/90">
                        High-precision custom items impossible to manufacture via standard mass tooling.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Floating Trust Card */}
                <div className="absolute -bottom-6 -left-4 sm:-left-6 bg-white rounded-2xl p-4 shadow-xl border border-gray-100 flex items-center gap-3 z-10">
                  <div className="w-12 h-12 rounded-xl bg-[#FFE8ED] flex items-center justify-center text-[#EE3775] font-black text-xl shrink-0">
                    <Award className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="flex items-center gap-1 text-amber-400">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-current" />
                      ))}
                    </div>
                    <p className="text-xs font-bold text-[#111A2E] mt-0.5">Enterprise Choice</p>
                    <p className="text-[11px] text-[#5A6E85]">100% Custom Engineered</p>
                  </div>
                </div>

                {/* Floating Props Badge */}
                <div className="absolute -top-3 -right-3 bg-[#111A2E] text-white rounded-2xl px-3.5 py-2 shadow-lg border border-white/20 flex items-center gap-2 z-10">
                  <Zap className="w-4 h-4 text-amber-400" />
                  <span className="text-xs font-bold">Live Printing Available</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Why Choose 3D Print Corporate Gifting */}
      <section className="py-14 sm:py-16 bg-white border-b border-[#F0E6EA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            <div className="lg:col-span-5 space-y-4">
              <div className="rounded-3xl overflow-hidden shadow-xl border-4 border-white bg-white">
                <img 
                  src="/assets/3d-printing-products.webp" 
                  alt="3D Printed Corporate Souvenirs Showcase" 
                  className="w-full h-[360px] sm:h-[420px] object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>

            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 bg-[#FFE8ED] text-[#EE3775] text-xs font-bold px-3 py-1 rounded-full border border-[#FFD0DB]">
                <Cpu className="w-3.5 h-3.5" />
                <span>Gift The Future</span>
              </div>
              
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#111A2E] leading-tight">
                Move Beyond The Off-The-Shelf Into <span className="text-[#EE3775]">Designed-For-You</span>
              </h2>

              <p className="text-base text-[#5A6E85] leading-relaxed">
                3D printing isn&apos;t just a novelty; it&apos;s a game-changing method to create items that were previously impossible or cost-prohibitive in short corporate batches. 7Delights helps you craft meaningful executive keepsakes that stay proudly displayed on clients&apos; desks.
              </p>

              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#FFE8ED] text-[#EE3775] flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-[#111A2E]">Concept to Creation (CAD Engineering)</h4>
                    <p className="text-xs text-[#5A6E85] mt-0.5">You don’t need to be a designer. Our team brainstorms ideas, builds digital CAD files, and tests rapid prototypes.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#FFE8ED] text-[#EE3775] flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-[#111A2E]">Local Tech Prowess in Bengaluru</h4>
                    <p className="text-xs text-[#5A6E85] mt-0.5">Direct access to state-of-the-art additive printers guarantees ultra-fine layer resolution, fast turnaround, and zero shipping delays.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#FFE8ED] text-[#EE3775] flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-[#111A2E]">Integrated Live-Printing Event Booths</h4>
                    <p className="text-xs text-[#5A6E85] mt-0.5">Incorporate 3D printers into your corporate summit or exhibition, allowing attendees to watch customized souvenirs fabricated live.</p>
                  </div>
                </div>
              </div>

              <div className="pt-2">
                <a
                  href="tel:+919980029977"
                  className="inline-flex items-center gap-2 text-[#EE3775] font-bold text-sm hover:underline"
                >
                  <Phone className="w-4 h-4" />
                  <span>Call +91 99800 29977 to discuss your corporate design brief</span>
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Specialties Grid */}
      <section className="py-14 sm:py-16 bg-[#FFFDF9] border-b border-[#F0E6EA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto space-y-3 mb-12">
            <span className="text-xs uppercase font-extrabold tracking-widest text-[#EE3775] bg-[#FFE8ED] px-3.5 py-1 rounded-full border border-[#FFD0DB]">
              Core Capabilities
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#111A2E]">
              Specialties of 3D Printed Corporate Gifts
            </h2>
            <p className="text-sm sm:text-base text-[#5A6E85]">
              Tailored for product launches, VIP relations, employee tenure milestones, and trade shows.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {specialties.map((item, index) => (
              <div 
                key={index} 
                className="bg-white rounded-3xl overflow-hidden border border-[#E8EFF7] shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col"
              >
                <div className="h-48 overflow-hidden relative">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-500"
                  />
                  <span className={`absolute top-3 left-3 text-[11px] font-bold px-2.5 py-1 rounded-lg border shadow-sm ${item.color}`}>
                    {item.tag}
                  </span>
                </div>
                <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
                  <div>
                    <h3 className="text-base font-bold text-[#111A2E] leading-snug">{item.title}</h3>
                    <p className="text-xs text-[#5A6E85] mt-2 leading-relaxed">{item.desc}</p>
                  </div>
                  <div className="pt-2 border-t border-gray-100 flex items-center justify-between">
                    <span className="text-[11px] text-[#869AB8] flex items-center gap-1">
                      <Sparkles className="w-3.5 h-3.5 text-[#EE3775]" />
                      High Value Keepsake
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Corporate Milestone Fit Guide */}
      <section className="py-12 bg-white border-b border-[#F0E6EA]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-[#111A2E] to-[#1C2B4B] rounded-3xl p-6 sm:p-10 text-white shadow-xl relative overflow-hidden">
            <div className="absolute -right-10 -bottom-10 w-48 h-48 bg-[#EE3775]/20 rounded-full blur-2xl"></div>
            <div className="relative z-10 grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
              <div className="md:col-span-8 space-y-3">
                <span className="bg-[#EE3775] text-white text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-md">
                  Perfect For Business Milestones
                </span>
                <h3 className="text-2xl sm:text-3xl font-black">
                  Product Launches • Employee Anniversaries • VIP Rewards
                </h3>
                <p className="text-sm text-gray-300 leading-relaxed">
                  Celebrate 5 or 10-year work milestones with one-of-a-kind personalized employee sculptures, give VIP guests a tangible miniature of your newly launched product, or distribute high-value conference items that won&apos;t end up in the bin.
                </p>
                <div className="flex flex-wrap gap-4 text-xs text-gray-200 pt-2">
                  <span className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    GST Compliant Invoicing
                  </span>
                  <span className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    Custom Gift Box Packaging
                  </span>
                  <span className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    Bulk Production Discounts
                  </span>
                </div>
              </div>
              <div className="md:col-span-4 text-center md:text-right">
                <a
                  href="tel:+919980029977"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#EE3775] hover:bg-[#D82563] text-white font-bold rounded-xl shadow-lg transition-all w-full md:w-auto"
                >
                  <Phone className="w-4 h-4" />
                  <span>Call +91 99800 29977</span>
                </a>
                <p className="text-[11px] text-gray-400 mt-2">Free Prototype Evaluation</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-14 sm:py-16 bg-[#FFFDF9] border-b border-[#F0E6EA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto space-y-3 mb-10">
            <span className="text-xs uppercase font-extrabold tracking-widest text-[#EE3775] bg-[#FFE8ED] px-3.5 py-1 rounded-full border border-[#FFD0DB]">
              Live Portfolio
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#111A2E]">
              3D Printing Corporate Gift Gallery
            </h2>
            <p className="text-sm sm:text-base text-[#5A6E85]">
              Real samples manufactured for corporate clients and summits in Bangalore.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages.map((img, i) => (
              <div 
                key={i} 
                className="group relative rounded-2xl overflow-hidden bg-white shadow-md border border-gray-100 h-64 sm:h-72"
              >
                <img 
                  src={img.src} 
                  alt={img.caption} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-90 transition-opacity flex flex-col justify-end p-5">
                  <span className="text-[11px] font-bold text-[#EE3775] bg-white/95 px-2 py-0.5 rounded w-max mb-1.5">
                    {img.tag}
                  </span>
                  <h4 className="text-sm font-bold text-white leading-tight">
                    {img.caption}
                  </h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="py-14 sm:py-16 bg-white border-b border-[#F0E6EA]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-3 mb-10">
            <span className="text-xs uppercase font-extrabold tracking-widest text-[#EE3775] bg-[#FFE8ED] px-3.5 py-1 rounded-full border border-[#FFD0DB]">
              Got Questions?
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#111A2E]">
              Frequently Asked Questions
            </h2>
            <p className="text-sm sm:text-base text-[#5A6E85]">
              Everything you need to know about commissioning 3D printed gifts in Bangalore.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div
                  key={index}
                  className="border border-[#E2E8F0] rounded-2xl bg-[#FFFDF9] overflow-hidden transition-all duration-200"
                >
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full px-5 sm:px-6 py-4 sm:py-5 text-left flex items-center justify-between gap-4 focus:outline-none"
                    aria-expanded={isOpen}
                  >
                    <span className="font-bold text-sm sm:text-base text-[#111A2E]">
                      {faq.q}
                    </span>
                    <span
                      className={`w-7 h-7 rounded-full bg-white border border-[#E2E8F0] flex items-center justify-center shrink-0 text-[#EE3775] transition-transform duration-200 ${
                        isOpen ? 'rotate-180 bg-[#FFE8ED]' : ''
                      }`}
                    >
                      <ChevronDown className="w-4 h-4" />
                    </span>
                  </button>

                  {isOpen && (
                    <div className="px-5 sm:px-6 pb-5 pt-1 text-xs sm:text-sm text-[#5A6E85] leading-relaxed border-t border-[#F0E6EA]/60 bg-white">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Additional Support Callout */}
          <div className="mt-10 p-6 rounded-2xl bg-[#FFE8ED]/40 border border-[#FFD0DB] flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
            <div>
              <h4 className="text-base font-bold text-[#111A2E]">Have a proprietary patent or sensitive industrial design?</h4>
              <p className="text-xs text-[#5A6E85] mt-1">We readily execute mutual NDAs prior to receiving engineering CAD blueprints or product specifications.</p>
            </div>
            <a
              href="tel:+919980029977"
              className="px-5 py-2.5 bg-[#EE3775] hover:bg-[#D82563] text-white text-xs font-bold rounded-xl shadow-md transition-all shrink-0"
            >
              Call +91 99800 29977
            </a>
          </div>
        </div>
      </section>

      {/* Bottom Floating/Fixed CTA Banner */}
      <section className="py-10 bg-gradient-to-r from-[#FFF5F7] to-[#FFE8ED] border-t border-[#FFD0DB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <h3 className="text-xl sm:text-2xl font-black text-[#111A2E]">
            Step Into The Third Dimension of Corporate Gifting!
          </h3>
          <p className="text-xs sm:text-sm text-[#5A6E85] max-w-xl mx-auto">
            Partner with 7Delights to manufacture cutting-edge 3D corporate souvenirs tailored for your brand and team in Bangalore.
          </p>
          <div className="flex flex-wrap justify-center gap-3 pt-2">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#EE3775] hover:bg-[#D82563] text-white font-bold rounded-xl shadow-md text-xs sm:text-sm"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Contact Engineering Desk</span>
            </a>
            <a
              href="tel:+919980029977"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white text-[#111A2E] hover:bg-gray-50 font-bold rounded-xl border border-gray-200 text-xs sm:text-sm shadow-sm"
            >
              <Phone className="w-4 h-4 text-[#EE3775]" />
              <span>Call +91 99800 29977</span>
            </a>
            <a
              href="#gifting"
              className="inline-flex items-center gap-2 px-6 py-3 bg-transparent text-[#5A6E85] hover:text-[#111A2E] font-bold text-xs sm:text-sm"
            >
              <span>← Back to Gifting Hub</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

