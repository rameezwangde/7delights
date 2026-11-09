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
  Printer, 
  Layers, 
  Flag, 
  Tag, 
  Award,
  Video,
  FileText,
  BadgeCheck,
  Palette,
  Truck
} from 'lucide-react';

export default function PrintingServicesPage() {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const printServices = [
    {
      title: 'Roll-Up Standees & Directional Signages',
      desc: 'Heavy-base luxury roll-up pull standees, directional signage boards, entrance easels, and registration desk signs printed on high-resolution anti-curl satin film.',
      tag: 'Event Signage',
      color: 'bg-[#FFE8ED] text-[#EE3775] border-[#FFD0DB]',
      image: '/assets/corp-printing-services.webp'
    },
    {
      title: 'Teardrop & Feather Promo Flags',
      desc: 'All-weather sublimated outdoor feather flags, teardrop banners with rotating ground spikes or cross-bases for VIP entranceways, resort retreats, and outdoor activations.',
      tag: 'Outdoor Flags',
      color: 'bg-[#FFF3DF] text-[#D97706] border-[#FFE4B8]',
      image: '/assets/printing-unit.webp'
    },
    {
      title: 'Conference ID Badges, Lanyards & Passports',
      desc: 'Satin printed customized branded corporate lanyards, RFID / barcode conference attendee ID badges, delegate kits, and hard-bound VIP agenda passport booklets.',
      tag: 'Delegate Collateral',
      color: 'bg-[#F2EDFF] text-[#7B61FF] border-[#E0D5FF]',
      image: '/assets/printing-services-banner.webp'
    },
    {
      title: 'Corporate Giveaways & Custom Merch',
      desc: 'Custom screen and UV printed corporate gift items: branded tote bags, company t-shirts, ceramic/steel tumblers, engraved pens, notebook journals, and tech kits.',
      tag: 'Branded Swag',
      color: 'bg-[#EBF7F2] text-[#00A86B] border-[#C8EFE0]',
      image: '/assets/corp-corporate-events-banner.webp'
    }
  ];

  const highlights = [
    {
      icon: <Printer className="w-5 h-5 text-[#EE3775]" />,
      title: 'State-of-the-Art UV & Eco-Solvent',
      desc: 'Razor-sharp 1440 DPI print output with genuine Pantone color matching to preserve corporate brand identities.'
    },
    {
      icon: <Palette className="w-5 h-5 text-[#7B61FF]" />,
      title: 'Design & Pre-Press Assistance',
      desc: 'Our in-house graphics team assists in file checking, vector resizing, and proofing before mass production.'
    },
    {
      icon: <Truck className="w-5 h-5 text-[#00A86B]" />,
      title: 'Express Fast Turnaround',
      desc: 'We understand strict corporate deadlines with prompt delivery & venue setup across Bangalore.'
    },
    {
      icon: <BadgeCheck className="w-5 h-5 text-[#D97706]" />,
      title: 'End-to-End Venue Installation',
      desc: 'Our setup team installs every standee, hangs banners, arranges registration collateral, and packs up cleanly.'
    }
  ];

  const faqs = [
    {
      q: 'How far in advance should I book 7Delights printing services for my event?',
      a: 'To ensure maximum availability of printing machines, paper stocks, and installation logistics, we recommend booking at least 1 to 3 weeks in advance for standard corporate collateral (standees, ID badges, stage flex banners), and 3 to 4 weeks in advance for customized merchandise or bulk delegate kits (500+ attendees). Last-minute express printing can also be expedited upon request.'
    },
    {
      q: 'What file formats and resolutions should we provide for event printing?',
      a: 'For best results, please provide artwork in vector formats (PDF, AI, EPS) or high-resolution TIFF / CMYK PSD files at 150-300 DPI at actual print dimensions. If you only have JPG or PNG logos, our in-house graphics team can vectorize and adapt them to your banners.'
    },
    {
      q: 'Do you provide on-site setup and installation of standees and backdrops?',
      a: 'Yes, 100%. We do not just drop boxes at the venue. Our production team travels directly to your conference hotel, convention center, or office campus in Bangalore to assemble standees, place directional signages, and position welcome desks well before delegates arrive.'
    },
    {
      q: 'Can you provide GST tax invoices and corporate vendor compliance?',
      a: 'Yes, 7Delights is a fully registered event entity providing complete GST tax invoices, corporate vendor onboarding documentation, and Purchase Order (PO) processing for enterprises.'
    },
    {
      q: 'What is your payment and sample approval policy?',
      a: 'To initiate design proofs and print queues, we require an advance payment upon contract signing. Digital mockups are shared for approval, and for large-scale runs, sample physical proofs can be inspected before final production run.'
    }
  ];

  return (
    <div className="w-full bg-[#FFFDF9] text-[#111A2E]">
      {/* Top Breadcrumb & Hero */}
      <section className="relative w-full bg-gradient-to-b from-[#FFF5F7] via-[#FFFDF9] to-[#FFFDF9] pt-8 pb-14 px-4 sm:px-6 lg:px-8 border-b border-[#F5E6E8]">
        <div className="max-w-7xl mx-auto">
          {/* Breadcrumb Navigation */}
          <nav className="flex items-center gap-2 text-xs sm:text-sm text-[#5A6E85] mb-6 flex-wrap">
            <a href="#" className="hover:text-[#EE3775] transition-colors">Home</a>
            <span>/</span>
            <a href="#corporate-events" className="hover:text-[#EE3775] transition-colors">Corporate Events</a>
            <span>/</span>
            <span className="text-[#111A2E] font-medium">Printing Services</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FFE8ED] border border-[#FFD0DB] text-[#EE3775] text-xs sm:text-sm font-semibold tracking-wide">
                <Sparkles className="w-4 h-4" />
                <span>Premier Event Branding & Collateral Production</span>
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#111A2E] leading-tight">
                Corporate <span className="text-[#EE3775]">Printing Services</span> & Event Branding in Bangalore
              </h1>
              <p className="text-base sm:text-lg text-[#5A6E85] leading-relaxed">
                Make every detail of your conference, symposium, or annual summit shine with 7Delights professional event printing solutions. From high-resolution roll-up standees and feather flags to delegate ID lanyards, programs, and branded merchandise across Bengaluru.
              </p>

              {/* Quick Spec Pills */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
                <div className="flex items-center gap-2.5 p-3 rounded-xl bg-white border border-[#F3E8E9] shadow-sm">
                  <Clock className="w-5 h-5 text-[#EE3775] shrink-0" />
                  <div>
                    <p className="text-xs text-[#5A6E85]">Turnaround</p>
                    <p className="text-xs sm:text-sm font-bold text-[#111A2E]">Fast Delivery</p>
                  </div>
                </div>
                <div className="flex items-center gap-2.5 p-3 rounded-xl bg-white border border-[#F3E8E9] shadow-sm">
                  <MapPin className="w-5 h-5 text-[#7B61FF] shrink-0" />
                  <div>
                    <p className="text-xs text-[#5A6E85]">Location</p>
                    <p className="text-xs sm:text-sm font-bold text-[#111A2E]">All Across Bangalore</p>
                  </div>
                </div>
                <div className="flex items-center gap-2.5 p-3 rounded-xl bg-white border border-[#F3E8E9] shadow-sm col-span-2 sm:col-span-1">
                  <ShieldCheck className="w-5 h-5 text-[#00A86B] shrink-0" />
                  <div>
                    <p className="text-xs text-[#5A6E85]">Print Quality</p>
                    <p className="text-xs sm:text-sm font-bold text-[#111A2E]">1440 DPI HD</p>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-4">
                <a 
                  href="tel:+919980029977"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-[#EE3775] hover:bg-[#D82A64] text-white font-bold text-sm sm:text-base shadow-lg shadow-[#EE3775]/25 transition-all transform hover:-translate-y-0.5"
                >
                  <Phone className="w-4 h-4" />
                  <span>Call +91 99800 29977</span>
                </a>
                <a 
                  href="https://wa.me/919980029977?text=Hi%207Delights,%20I%20am%20interested%20in%20Event%20Printing%20Services%20(standees,%20banners,%20ID%20badges)%20for%20our%20corporate%20event."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-white hover:bg-[#F9FAFB] text-[#111A2E] border border-[#E5E7EB] font-bold text-sm sm:text-base shadow-sm transition-all"
                >
                  <MessageCircle className="w-4 h-4 text-[#25D366]" />
                  <span>Chat on WhatsApp</span>
                </a>
              </div>
            </div>

            {/* Right Media Card */}
            <div className="lg:col-span-5">
              <div className="relative rounded-2xl overflow-hidden bg-white shadow-xl border border-[#F0E6E8] p-2">
                <img 
                  src="/assets/printing-unit.webp" 
                  alt="Outdoor Feather Flags and Event Signages" 
                  className="w-full h-[320px] sm:h-[400px] object-cover rounded-xl"
                />
                <div className="absolute top-4 right-4 bg-[#111A2E]/85 backdrop-blur-md text-white text-xs font-semibold px-3 py-1.5 rounded-full flex items-center gap-1.5 shadow">
                  <Printer className="w-3.5 h-3.5 text-[#EE3775]" />
                  <span>Custom Event Collateral</span>
                </div>
                <div className="p-3 bg-white">
                  <p className="text-xs text-[#5A6E85] text-center font-medium">
                    High-resolution branded flags, roll-up standees, delegate kits, and venue signages.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Overview & Capabilities */}
      <section className="py-14 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7 space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FFE8ED] text-[#EE3775] text-xs font-semibold">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Your Partner for Flawless Event Printing</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#111A2E]">
              Comprehensive Event Signage, Stationery & Branded Merch
            </h2>
            <p className="text-sm sm:text-base text-[#5A6E85] leading-relaxed">
              We understand that every single print touchpoint contributes to your event's overall guest impression. That's why <strong>7delights.in</strong> provides turnkey printing solutions tailored specifically for conferences, award galas, exhibitions, product launches, and company milestones.
            </p>
            <p className="text-sm sm:text-base text-[#5A6E85] leading-relaxed">
              From the initial save-the-date invites and registration ID lanyards to illuminated reception backdrops, podium branding, and delegate gift bags — we ensure consistent corporate color matching and premium tactile finishes.
            </p>
            <ul className="space-y-2.5 pt-2">
              {[
                'High-definition Eco-Solvent and UV flatbed printing on fabric, vinyl, foam and acrylic',
                'Anti-curl roll-up standees with durable aluminum cassettes and carrying cases',
                'Heavy-base teardrop and feather flags for entrance walkways and outdoor sports days',
                'Lanyards with plastic/metal clips, custom-printed attendee badges & RFID access cards',
                'Prompt venue delivery and white-glove setup directly at hotels & tech parks'
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#111A2E] font-medium">
                  <CheckCircle className="w-4 h-4 text-[#EE3775] shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-5 space-y-4">
            <div className="rounded-2xl overflow-hidden shadow-lg border border-[#F0E6E8]">
              <img 
                src="/assets/printing-services-banner.webp" 
                alt="Corporate Event Branding Collateral" 
                className="w-full h-64 object-cover"
              />
            </div>
            <div className="p-5 rounded-2xl bg-[#FFF8FA] border border-[#F5E6EC]">
              <div className="flex items-center gap-3 mb-2">
                <Tag className="w-5 h-5 text-[#EE3775]" />
                <h3 className="text-sm font-bold text-[#111A2E]">Corporate Merchandise & Swag Kits</h3>
              </div>
              <p className="text-xs text-[#5A6E85] leading-relaxed">
                Create lasting employee and client impressions with custom-printed items they take home: branded tote bags, premium hoodies, ceramic tumblers, and executive leather journals.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-14 px-4 sm:px-6 lg:px-8 bg-[#FAF6F4] border-y border-[#F3E8E9]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FFE8ED] text-[#EE3775] text-xs font-semibold mb-2">
              <Printer className="w-3.5 h-3.5" />
              <span>Full Print Catalog</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#111A2E]">
              Our Specialized Event Printing Capabilities
            </h2>
            <p className="text-xs sm:text-sm text-[#5A6E85] mt-2">
              From large-scale promotional venue graphics to delicate registration desk stationery.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {printServices.map((srv, index) => (
              <div 
                key={index} 
                className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md border border-[#F0E6E8] transition-all flex flex-col sm:flex-row group"
              >
                <div className="sm:w-2/5 h-48 sm:h-auto overflow-hidden relative shrink-0">
                  <img 
                    src={srv.image} 
                    alt={srv.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-3 left-3">
                    <span className={`text-[10px] sm:text-xs font-bold px-2.5 py-1 rounded-full border shadow-sm ${srv.color}`}>
                      {srv.tag}
                    </span>
                  </div>
                </div>
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-base sm:text-lg font-bold text-[#111A2E] mb-2 group-hover:text-[#EE3775] transition-colors">
                      {srv.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#5A6E85] leading-relaxed">
                      {srv.desc}
                    </p>
                  </div>
                  <div className="pt-4 mt-2 border-t border-[#F5E6E8] flex items-center justify-between">
                    <span className="text-xs text-[#5A6E85] font-medium">Bulk & Express Orders</span>
                    <a 
                      href="tel:+919980029977" 
                      className="text-xs font-bold text-[#EE3775] hover:text-[#D82A64] inline-flex items-center gap-1"
                    >
                      <span>Inquire Now</span>
                      <span>&rarr;</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Highlights: Why Choose 7Delights */}
      <section className="py-14 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#111A2E]">
            Why Choose 7delights.in for Event Printing?
          </h2>
          <p className="text-xs sm:text-sm text-[#5A6E85] mt-2">
            Seamless integration with your event staging, lighting, and venue logistics.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item, idx) => (
            <div key={idx} className="p-5 rounded-2xl bg-white border border-[#F3E8E9] shadow-sm hover:border-[#EE3775]/40 transition-colors">
              <div className="w-10 h-10 rounded-xl bg-[#FFF5F7] flex items-center justify-center mb-3">
                {item.icon}
              </div>
              <h3 className="text-sm sm:text-base font-bold text-[#111A2E] mb-1.5">{item.title}</h3>
              <p className="text-xs text-[#5A6E85] leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Authentic YouTube Video Showcase */}
      <section className="py-14 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#FFFDF9] to-[#FFF5F7] border-t border-[#F3E8E9]">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FFE8ED] text-[#EE3775] text-xs font-semibold mb-3">
            <Video className="w-3.5 h-3.5" />
            <span>Live Action Showcase</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#111A2E] mb-3">
            Watch Our Event Printing & Setup in Action
          </h2>
          <p className="text-xs sm:text-sm text-[#5A6E85] mb-8 max-w-xl mx-auto">
            See how high-resolution corporate print collaterals and branded setups elevate event atmospheres across Bangalore.
          </p>

          <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white aspect-video bg-black">
            <iframe
              src="https://www.youtube.com/embed/XBumVHVISBs"
              title="7delights Event Printing Services Demo"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full border-0"
            ></iframe>
          </div>
        </div>
      </section>

      {/* Frequently Asked Questions */}
      <section className="py-14 px-4 sm:px-6 lg:px-8 bg-white border-t border-[#F3E8E9]">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FFE8ED] text-[#EE3775] text-xs font-semibold mb-2">
              <HelpCircle className="w-3.5 h-3.5" />
              <span>Got Questions?</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#111A2E]">
              Printing Services FAQ
            </h2>
            <p className="text-xs sm:text-sm text-[#5A6E85] mt-1">
              Find answers regarding file formats, turnaround timelines, on-site setup, and billing.
            </p>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, idx) => (
              <div 
                key={idx} 
                className="border border-[#F0E6E8] rounded-xl overflow-hidden bg-[#FFFDF9] transition-colors"
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full px-5 py-4 text-left flex items-center justify-between gap-4 hover:bg-[#FFF5F7] transition-colors"
                >
                  <span className="text-xs sm:text-sm font-bold text-[#111A2E]">{faq.q}</span>
                  <ChevronDown 
                    className={`w-4 h-4 text-[#EE3775] shrink-0 transition-transform duration-300 ${openFaq === idx ? 'rotate-180' : ''}`}
                  />
                </button>
                {openFaq === idx && (
                  <div className="px-5 pb-4 pt-1 text-xs sm:text-sm text-[#5A6E85] leading-relaxed border-t border-[#F5E6E8] bg-white">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

