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
  Palette,
  Tv,
  Printer,
  Share2,
  Users,
  Smile,
  Zap,
  Tablet
} from 'lucide-react';
import { GoldUnderline } from '../components/Doodles';

export default function DigitalCaricaturePage() {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const boothFeatures = [
    {
      title: 'Live Stylus Digital Caricatures',
      desc: 'Watch our master caricature artists sketch hilarious, flattering, and stylized digital portraits in real-time on professional iPad Pro / Wacom tablets.',
      tag: 'Live Digital Art',
      color: 'bg-[#FFE8ED] text-[#EE3775] border-[#FFD0DB]',
      image: '/assets/digital-caricature-main.webp'
    },
    {
      title: 'Projected Big-Screen Display',
      desc: 'The live digital sketching process mirrors directly onto a 43"-55" high-definition screen or projector, drawing crowd cheers and audience engagement.',
      tag: 'Live Entertainment',
      color: 'bg-[#EDF5FF] text-[#2563EB] border-[#D0E2FF]',
      image: '/assets/digital-caricature-2.webp'
    },
    {
      title: 'Instant Glossy Photo Printing',
      desc: 'Each completed sketch prints out within 30 seconds using commercial dye-sublimation photo printers on archival 4x6 or 6x8 keepsake cards.',
      tag: 'Instant Souvenirs',
      color: 'bg-[#FFF3DF] text-[#D97706] border-[#FFE4B8]',
      image: '/assets/digital-caricature-3.webp'
    },
    {
      title: 'Instant QR & Social Media Sharing',
      desc: 'Guests receive a digital full-color copy via QR code or email on-the-spot, ready for immediate WhatsApp sharing and Instagram profile pictures.',
      tag: 'Digital Viral Reach',
      color: 'bg-[#F2EDFF] text-[#7B61FF] border-[#E0D5FF]',
      image: '/assets/digital-caricature-4.webp'
    }
  ];

  const highlights = [
    {
      icon: <Tablet className="w-5 h-5 text-[#EE3775]" />,
      title: 'iPad Pro & Stylus Precision',
      desc: 'Top-tier digital tablets paired with Apple Pencil for fluid color rendering, customizable templates, and zero mess.'
    },
    {
      icon: <Tv className="w-5 h-5 text-[#2563EB]" />,
      title: 'Large-Screen Audience Mirror',
      desc: 'Live mirroring setup that turns the drawing process into captivating visual performance art for crowd entertainment.'
    },
    {
      icon: <Printer className="w-5 h-5 text-[#00A86B]" />,
      title: 'Branded Keepsake Prints',
      desc: 'Customized borders and watermarks featuring your wedding monogram, company logo, or birthday theme on every print.'
    },
    {
      icon: <Clock className="w-5 h-5 text-[#D97706]" />,
      title: '2 to 3 Hours Standard Package',
      desc: 'Fast 4-6 minutes per guest sketch speed. Requires just a banquet table, 2 chairs, and a standard power point.'
    }
  ];

  const galleryImages = [
    {
      url: '/assets/digital-caricature-banner.webp',
      title: 'Digital Caricature Booth Banner',
      subtitle: 'Modern artistic entertainment'
    },
    {
      url: '/assets/digital-caricature-main.webp',
      title: 'Live Stylus Sketching',
      subtitle: 'Flattering, witty digital portraits'
    },
    {
      url: '/assets/digital-caricature-2.webp',
      title: 'Corporate Summit Activations',
      subtitle: 'Engaging brand booth experience'
    },
    {
      url: '/assets/digital-caricature-3.webp',
      title: 'Instant Glossy Color Prints',
      subtitle: 'Personalized guest keepsakes'
    },
    {
      url: '/assets/digital-caricature-4.webp',
      title: 'Wedding & Social Celebrations',
      subtitle: 'Memorable party favor takeaways'
    },
    {
      url: '/assets/digital-caricature-thumb.webp',
      title: 'Digital QR Sharing Station',
      subtitle: 'Instant smartphone downloads'
    }
  ];

  const faqs = [
    {
      q: 'How far in advance should I book 7Delights digital caricature booth for my event?',
      a: 'To ensure maximum availability of the digital caricature booth & equipment, we recommend booking at least 1 to 6 weeks in advance for social parties & corporate events, and 3 to 6 months in advance for major weddings or large-scale corporate launches. However, if you have a last-minute request, contact us & we will do our best to make it happen!'
    },
    {
      q: 'How long does it take for your team to set up?',
      a: 'Setup times vary by venue. The digital caricature booth typically takes 1 to 2 hours to connect the tablets, test the live TV screen mirroring, calibrate the dye-sublimation printers, and configure the digital branding templates. We always coordinate directly with the venue to ensure everything is ready well before guests arrive.'
    },
    {
      q: 'What is your payment policy?',
      a: 'To secure your date, artists, and materials, we require an advance payment upon signing the contract. The remaining balance is structured into milestones leading up to, or on the day of the event.'
    },
    {
      q: 'How many caricatures can an artist draw per hour?',
      a: 'Our experienced digital caricature artists draw each full-color or black-and-white caricature in approximately 4 to 6 minutes, comfortably completing 10 to 15 personalized portraits per hour. For mega events with 200+ guests, we can deploy multiple artists simultaneously.'
    },
    {
      q: 'Can our company logo or event date be printed on the caricatures?',
      a: 'Yes, absolutely! We pre-design a customized digital frame/border featuring your company logo, event hashtag, wedding monogram, or birthday theme. Every single printed and digital file includes this custom branding.'
    }
  ];

  return (
    <div className="bg-[#FFFDF9] min-h-screen pt-24 pb-16">
      {/* Breadcrumb Navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6">
        <nav className="flex items-center text-sm font-medium text-[#5A6E85] space-x-2">
          <a href="#" className="hover:text-[#EE3775] transition-colors">Home</a>
          <span>/</span>
          <a href="#photography-video" className="hover:text-[#EE3775] transition-colors">Photography &amp; Video</a>
          <span>/</span>
          <span className="text-[#111A2E] font-semibold">Digital Caricature Booth</span>
        </nav>
      </div>

      {/* Hero Section */}
      <section className="relative overflow-hidden mb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column: Heading, Specs & CTAs */}
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FFE8ED] text-[#EE3775] text-xs font-bold tracking-wide uppercase mb-4">
                <Palette className="w-3.5 h-3.5" />
                Live Digital Caricature Artists in Bangalore
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#111A2E] leading-tight mb-4">
                7Delights <span className="text-[#EE3775]">Digital Caricature</span> for Events
              </h1>
              <div className="w-28 mb-6">
                <GoldUnderline />
              </div>

              <p className="text-base sm:text-lg text-[#5A6E85] leading-relaxed mb-6">
                Looking for unique and engaging entertainment for your next event? 7Delights Digital Caricature Booth is the perfect choice! 
                Our master artists sketch hilarious, flattering digital portraits live on tablets, projected onto a large audience screen, 
                and printed instantly as personalized party souvenirs.
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
                    <Printer className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-[#5A6E85] block">Output</span>
                    <span className="text-sm font-bold text-[#111A2E]">Print &amp; Digital</span>
                  </div>
                </div>

                <div className="bg-white p-3.5 rounded-2xl border border-[#F2EDFF] shadow-sm flex items-center gap-3 col-span-2 sm:col-span-1">
                  <div className="w-10 h-10 rounded-xl bg-[#F2EDFF] flex items-center justify-center text-[#7B61FF] shrink-0">
                    <Award className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-[#5A6E85] block">Organizer Need</span>
                    <span className="text-sm font-bold text-[#111A2E]">Table &amp; Power</span>
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
                  href="https://wa.me/919980029977?text=Hi%207Delights,%20I%20want%20to%20book%20a%20Digital%20Caricature%20Booth%20for%20my%20event."
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
                  src="/assets/digital-caricature-banner.webp"
                  alt="7Delights Digital Caricature Artists in Bangalore"
                  className="w-full h-[380px] sm:h-[440px] object-cover group-hover:scale-105 transition-transform duration-700"
                  onError={(e) => {
                    e.currentTarget.src = '/assets/digital-caricature-main.webp';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-6 sm:p-8 text-white">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#EE3775] text-white text-xs font-semibold mb-2 w-max">
                    <Sparkles className="w-3.5 h-3.5" />
                    Live Stylus Portraits
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold mb-1">
                    Digital Tablet &amp; Live Screen Booth
                  </h3>
                  <p className="text-white/80 text-xs sm:text-sm">
                    Complete setup with master digital artists, HD mirroring display, instant photo printer &amp; branded borders.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* About Digital Caricature & Specialties Section */}
      <section className="py-16 bg-white border-y border-[#FFE8ED]/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-[#EE3775] text-xs sm:text-sm font-bold uppercase tracking-wider block mb-2">
              A Modern Take on a Classic
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#111A2E]">
              About Digital Caricature by 7Delights
            </h2>
            <div className="w-24 mx-auto mt-3">
              <GoldUnderline />
            </div>
            <p className="text-[#5A6E85] text-sm sm:text-base mt-4 leading-relaxed">
              Our Digital Caricature service offers high-tech, interactive event entertainment! 
              The live drawing process is captivating for both the subject and spectators watching on the big screen. 
              Within minutes, guests walk away holding a personalized keepsake print and a high-resolution digital file ready for their social profiles.
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

      {/* Specialties Breakdown */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-[#EE3775] text-xs sm:text-sm font-bold uppercase tracking-wider block mb-2">
              Key Capabilities
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#111A2E]">
              Specialties of Digital Caricature Booth
            </h2>
            <div className="w-24 mx-auto mt-3">
              <GoldUnderline />
            </div>
            <p className="text-[#5A6E85] text-sm sm:text-base mt-4">
              A seamless fusion of artistic mastery, advanced technology, and instant tangible keepsakes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {boothFeatures.map((flv, idx) => (
              <div 
                key={idx}
                className="bg-white rounded-3xl overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-300 flex flex-col"
              >
                <div className="relative h-48 overflow-hidden bg-gray-100">
                  <img 
                    src={flv.image} 
                    alt={flv.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    onError={(e) => {
                      e.currentTarget.src = '/assets/digital-caricature-banner.webp';
                    }}
                  />
                  <div className="absolute top-3 left-3">
                    <span className={`text-[11px] font-bold px-2.5 py-1 rounded-full border ${flv.color}`}>
                      {flv.tag}
                    </span>
                  </div>
                </div>

                <div className="p-5 flex flex-col flex-grow">
                  <h3 className="text-base font-bold text-[#111A2E] mb-2">{flv.title}</h3>
                  <p className="text-xs sm:text-sm text-[#5A6E85] leading-relaxed flex-grow">
                    {flv.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Setup Reassurance Box (Hassle-free guarantee) */}
      <section className="py-10 bg-gradient-to-r from-[#FFF0F4] via-[#FFFDF9] to-[#EDF5FF]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex p-3 rounded-2xl bg-white shadow-md text-[#EE3775] mb-4">
            <CheckCircle2 className="w-8 h-8" />
          </div>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-[#111A2E] mb-3">
            Sit Back and Watch Our Professionals Doing a Quick Setup!
          </h3>
          <p className="text-sm sm:text-base text-[#5A6E85] max-w-2xl mx-auto leading-relaxed mb-6">
            After partnering with 7Delights, you won't have to stress about the setup and logistics. 
            Our digital artists are punctual, bring all specialized tablets, wireless display connections, 
            and photo printers, ensuring effortless and captivating entertainment from start to finish.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-xs sm:text-sm font-semibold text-[#111A2E]">
            <span className="flex items-center gap-1.5 bg-white px-3.5 py-1.5 rounded-full shadow-sm">
              <CheckCircle className="w-4 h-4 text-[#00A86B]" /> 1 to 2 Hour Prompt Setup
            </span>
            <span className="flex items-center gap-1.5 bg-white px-3.5 py-1.5 rounded-full shadow-sm">
              <CheckCircle className="w-4 h-4 text-[#00A86B]" /> Instant High-Speed Printing
            </span>
            <span className="flex items-center gap-1.5 bg-white px-3.5 py-1.5 rounded-full shadow-sm">
              <CheckCircle className="w-4 h-4 text-[#00A86B]" /> Dedicated QR &amp; Digital Transfer
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
              Live Showcase
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#111A2E]">
              Digital Caricature Gallery &amp; Video
            </h2>
            <div className="w-24 mx-auto mt-3">
              <GoldUnderline />
            </div>
            <p className="text-[#5A6E85] text-sm sm:text-base mt-4">
              Explore how our digital caricature booth creates laughter, buzz, and memorable party souvenirs across Bengaluru events.
            </p>
          </div>

          {/* YouTube Video Showcase */}
          <div className="max-w-4xl mx-auto mb-16">
            <div className="bg-white p-3 sm:p-4 rounded-3xl border border-gray-100 shadow-xl overflow-hidden">
              <div className="relative aspect-video rounded-2xl overflow-hidden bg-black">
                <iframe
                  src="https://www.youtube.com/embed/k_3s_j0vV5Y?rel=0"
                  title="7Delights Digital Caricature Booth Demo"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full border-0"
                />
              </div>
              <div className="p-4 sm:p-6 text-center">
                <h3 className="text-lg sm:text-xl font-bold text-[#111A2E] mb-1">
                  Watch Our Artists in Live Action!
                </h3>
                <p className="text-xs sm:text-sm text-[#5A6E85]">
                  Experience the rapid sketching, hilarious characterizations, and joyful guest reactions.
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
                      e.currentTarget.src = '/assets/digital-caricature-banner.webp';
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
              Everything you need to know about booking our digital caricature booth for your celebration.
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
              <h4 className="text-base font-bold text-[#111A2E]">Have queries about our Digital Caricature Booth?</h4>
              <p className="text-xs sm:text-sm text-[#5A6E85] mt-0.5">Feel free to talk to our entertainment planners right away!</p>
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
          href="#photography-video" 
          className="inline-flex items-center gap-2 text-sm font-bold text-[#5A6E85] hover:text-[#EE3775] transition-colors"
        >
          &larr; Back to All Photography &amp; Video Services
        </a>
      </div>
    </div>
  );
}

