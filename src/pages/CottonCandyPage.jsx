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
  Heart,
  Zap,
  Users,
  Candy,
  Flame,
  Star
} from 'lucide-react';
import { GoldUnderline } from '../components/Doodles';

export default function CottonCandyPage() {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const flavors = [
    {
      title: 'Classic Pink Strawberry',
      desc: 'The timeless nostalgic favorite! Cloud-like pink spun sugar with a gentle strawberry & vanilla fragrance that dissolves softly on your tongue.',
      tag: 'All-Time Favorite',
      color: 'bg-[#FFE8ED] text-[#EE3775] border-[#FFD0DB]',
      image: '/assets/cotton-candy-1.webp'
    },
    {
      title: 'Pastel Blue Raspberry & Vanilla',
      desc: 'Dreamy pastel blue spun floss with delicate berry notes, captivating both children and elders with its whimsical look and melt-in-mouth sweetness.',
      tag: 'Kids Sensation',
      color: 'bg-[#EDF5FF] text-[#2563EB] border-[#D0E2FF]',
      image: '/assets/cotton-candy-2.webp'
    },
    {
      title: 'Bubblegum & Cotton Floss Sticks',
      desc: 'Fluffy giant clouds spun directly onto sanitary wooden/paper cones right before the crowd, creating instant excitement at your dessert counter.',
      tag: 'Live Spinning',
      color: 'bg-[#F2EDFF] text-[#7B61FF] border-[#E0D5FF]',
      image: '/assets/cotton-candy-3.webp'
    },
    {
      title: 'Pre-Packaged Vanity Party Tubs',
      desc: 'Sealed, moisture-resistant cotton candy tubs and cups ready as premium return favors and giveaways for birthdays and school carnivals.',
      tag: 'Return Gift Ready',
      color: 'bg-[#EBF7F2] text-[#00A86B] border-[#C8EFE0]',
      image: '/assets/cotton-candy-4.webp'
    }
  ];

  const highlights = [
    {
      icon: <Sparkles className="w-5 h-5 text-[#EE3775]" />,
      title: 'Freshly Spun On-Site',
      desc: 'Prepared live right before your guests using certified spun-sugar machines that generate irresistible sweet party aromas.'
    },
    {
      icon: <ShieldCheck className="w-5 h-5 text-[#7B61FF]" />,
      title: 'Pure Quality Sugar & Flavors',
      desc: 'Prepared from the best refined cane sugar and food-grade certified essences for light, fluffy, and completely safe sweetness.'
    },
    {
      icon: <Users className="w-5 h-5 text-[#00A86B]" />,
      title: 'Serves 100+ Guests Easily',
      desc: 'Standard base counter serves a minimum of 100 attendees effortlessly with continuous high-speed spinning by trained operators.'
    },
    {
      icon: <Clock className="w-5 h-5 text-[#D97706]" />,
      title: '2 to 3 Hours Duration',
      desc: 'Flexible live counter duration with quick 1 to 2 hour setup and simple requirements (just a standard table & power point).'
    }
  ];

  const galleryImages = [
    {
      url: '/assets/cotton-candy-banner.webp',
      title: 'Cotton Candy Live Stall Banner',
      subtitle: 'Festive sweet counter setup'
    },
    {
      url: '/assets/cotton-candy-1.webp',
      title: 'Cloud-Soft Candy Floss',
      subtitle: 'Nostalgic sweetness for all ages'
    },
    {
      url: '/assets/cotton-candy-2.webp',
      title: 'Live Machine Demonstration',
      subtitle: 'Spun live before happy kids'
    },
    {
      url: '/assets/cotton-candy-3.webp',
      title: 'Fluffy Clouds on Cones',
      subtitle: 'Handcrafted fresh per guest'
    },
    {
      url: '/assets/cotton-candy-4.webp',
      title: 'Party Packs & Tubs',
      subtitle: 'Standardized pink cups and packets'
    },
    {
      url: '/assets/cotton-candy-scaled.webp',
      title: 'Carnival & Wedding Stalls',
      subtitle: 'Crowd-pulling fun eatable setup'
    }
  ];

  const faqs = [
    {
      q: 'How far in advance should I book 7Delights cotton candy for my event?',
      a: 'To ensure maximum availability of cotton candy & equipment, we recommend booking at least 1 to 6 weeks in advance for social parties & corporate events, and 3 to 6 months in advance for major weddings or large-scale corporate launches. However, if you have a last-minute request, contact us & we will do our best to make it happen!'
    },
    {
      q: 'How long does it take for your team to set up?',
      a: 'Setup times vary by service. Cotton candy & equipment stall may take 1 to 2 hours. Complex thematic stall setups, intricate lighting riggings, or heavy SFX installations can take anywhere from 4 to 12 hours. We always coordinate directly with the venue to ensure everything is flawlessly set up well before your first guest arrives.'
    },
    {
      q: 'What is your payment policy?',
      a: 'To secure your date, artists, and materials, we require an advance payment upon signing the contract. The remaining balance is structured into milestones leading up to, or on the day of the event.'
    },
    {
      q: 'What are the organizer requirements for setting up the cotton candy stall?',
      a: 'We keep setup completely stress-free! All we require from the venue or event organizer is: 1) A clean sturdy table, and 2) A standard 5A/15A electric power point nearby. Our team brings the industrial cotton floss machine, hygienic raw materials, sticks, packaging, and a professional uniformed operator.'
    },
    {
      q: 'How many attendees can one cotton candy stall serve?',
      a: 'Our standard package is optimized to serve a minimum of 100 people across 2 to 3 hours of continuous live spinning. For mega corporate events, school carnivals, or large weddings with 500+ guests, we can deploy multiple dual-head machines and extra attendants.'
    }
  ];

  return (
    <div className="bg-[#FFFDF9] min-h-screen pt-24 pb-16">
      {/* Breadcrumb Navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6">
        <nav className="flex items-center text-sm font-medium text-[#5A6E85] space-x-2">
          <a href="#" className="hover:text-[#EE3775] transition-colors">Home</a>
          <span>/</span>
          <a href="#party-fun-eatables" className="hover:text-[#EE3775] transition-colors">Party Fun Eatables</a>
          <span>/</span>
          <span className="text-[#111A2E] font-semibold">Cotton Candy</span>
        </nav>
      </div>

      {/* Hero Section */}
      <section className="relative overflow-hidden mb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column: Heading, Specs & CTAs */}
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FFE8ED] text-[#EE3775] text-xs font-bold tracking-wide uppercase mb-4">
                <Candy className="w-3.5 h-3.5" />
                Live Sweet Floss Counter in Bangalore
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#111A2E] leading-tight mb-4">
                7Delights <span className="text-[#EE3775]">Cotton Candy</span> for Parties &amp; Events
              </h1>
              <div className="w-28 mb-6">
                <GoldUnderline />
              </div>

              <p className="text-base sm:text-lg text-[#5A6E85] leading-relaxed mb-6">
                Cotton Candy is a delightful sweet dessert that brings back golden memories for both the young and elderly! 
                Known affectionately as <em>Buddi Ke Baal</em> or spun candy floss, our fluffy clouds of pure spun sugar create an irresistible 
                carnival atmosphere at birthday parties, corporate family days, carnivals, and wedding galas across Bangalore.
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
                    <Users className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-[#5A6E85] block">Capacity</span>
                    <span className="text-sm font-bold text-[#111A2E]">Min 100 Guests</span>
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
                  href="https://wa.me/919980029977?text=Hi%207Delights,%20I%20want%20to%20book%20a%20Cotton%20Candy%20counter%20for%20my%20event."
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
                  src="/assets/cotton-candy-banner.webp"
                  alt="7Delights Cotton Candy Stall in Bangalore"
                  className="w-full h-[380px] sm:h-[440px] object-cover group-hover:scale-105 transition-transform duration-700"
                  onError={(e) => {
                    e.currentTarget.src = '/assets/cotton-candy-1.webp';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-6 sm:p-8 text-white">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#EE3775] text-white text-xs font-semibold mb-2 w-max">
                    <Sparkles className="w-3.5 h-3.5" />
                    Freshly Spun On-Demand
                  </div>
                  <p className="text-xl sm:text-2xl font-bold mb-1">
                    Authentic Candy Floss Machine
                  </p>
                  <p className="text-white/80 text-xs sm:text-sm">
                    Complete turnkey station with electric spinner, sugar crystals, paper sticks &amp; experienced operator.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* About Cotton Candy & Specialties Section */}
      <section className="py-16 bg-white border-y border-[#FFE8ED]/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-[#EE3775] text-xs sm:text-sm font-bold uppercase tracking-wider block mb-2">
              Delicious Memories Made Sweet
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#111A2E]">
              About Cotton Candy by 7Delights
            </h2>
            <div className="w-24 mx-auto mt-3">
              <GoldUnderline />
            </div>
            <p className="text-[#5A6E85] text-sm sm:text-base mt-4 leading-relaxed">
              This tasty dessert has gained phenomenal popularity in modern social parties, particularly weddings and birthdays. 
              Our Cotton Candy is made from freshly spun pure sugar crystals, making each serving light, fluffy and full of natural sweetness. 
              Whether eaten as a nostalgic treat or a playful party bite, our candy floss never disappoints!
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

      {/* Varieties & Presentation Options */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-[#EE3775] text-xs sm:text-sm font-bold uppercase tracking-wider block mb-2">
              Flavors &amp; Presentation
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#111A2E]">
              Specialties of Our Cotton Candy Setup
            </h2>
            <div className="w-24 mx-auto mt-3">
              <GoldUnderline />
            </div>
            <p className="text-[#5A6E85] text-sm sm:text-base mt-4">
              At 7Delights.in, we boast unique, quaint and equally tasty cotton candy with appropriate hygienic presentation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {flavors.map((flv, idx) => (
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
                      e.currentTarget.src = '/assets/cotton-candy-banner.webp';
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
      <section className="py-10 bg-gradient-to-r from-[#FFF0F4] via-[#FFFDF9] to-[#F3E8FF]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex p-3 rounded-2xl bg-white shadow-md text-[#EE3775] mb-4">
            <CheckCircle2 className="w-8 h-8" />
          </div>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-[#111A2E] mb-3">
            Sit Back and Watch Our Professionals Doing a Quick Setup!
          </h3>
          <p className="text-sm sm:text-base text-[#5A6E85] max-w-2xl mx-auto leading-relaxed mb-6">
            After booking with 7Delights, you won't have to stress about the setup and cleanup. 
            Our professionals are well-versed in managing all installation tasks well before the main event gets started. 
            We bring all necessary cords, hygiene gear, and machines — leaving you free to entertain your guests!
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-xs sm:text-sm font-semibold text-[#111A2E]">
            <span className="flex items-center gap-1.5 bg-white px-3.5 py-1.5 rounded-full shadow-sm">
              <CheckCircle className="w-4 h-4 text-[#00A86B]" /> Punctual 1-2 Hour Setup
            </span>
            <span className="flex items-center gap-1.5 bg-white px-3.5 py-1.5 rounded-full shadow-sm">
              <CheckCircle className="w-4 h-4 text-[#00A86B]" /> 100% Food-Grade Sugar
            </span>
            <span className="flex items-center gap-1.5 bg-white px-3.5 py-1.5 rounded-full shadow-sm">
              <CheckCircle className="w-4 h-4 text-[#00A86B]" /> End-of-Party Cleanup Included
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
              Cotton Candy Gallery &amp; Video
            </h2>
            <div className="w-24 mx-auto mt-3">
              <GoldUnderline />
            </div>
            <p className="text-[#5A6E85] text-sm sm:text-base mt-4">
              Take a look at how our live spinning counter transforms birthday parties, weddings, and celebrations into joyful wonderlands.
            </p>
          </div>

          {/* YouTube Video Showcase */}
          <div className="max-w-4xl mx-auto mb-16">
            <div className="bg-white p-3 sm:p-4 rounded-3xl border border-gray-100 shadow-xl overflow-hidden">
              <div className="relative aspect-video rounded-2xl overflow-hidden bg-black">
                <iframe
                  src="https://www.youtube.com/embed/m3z2RTSmAQU?rel=0"
                  title="7Delights Cotton Candy Stall Demo"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full border-0"
                />
              </div>
              <div className="p-4 sm:p-6 text-center">
                <h3 className="text-lg sm:text-xl font-bold text-[#111A2E] mb-1">
                  Watch Our Live Cotton Candy Spinning in Action!
                </h3>
                <p className="text-xs sm:text-sm text-[#5A6E85]">
                  Experience the rapid spinning, vibrant colors, and radiant smiles our stall brings to every crowd.
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
                      e.currentTarget.src = '/assets/cotton-candy-banner.webp';
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-4 text-white">
                    <span className="text-xs font-semibold text-[#EE3775]">{img.subtitle}</span>
                    <h3 className="text-sm font-bold">{img.title}</h3>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="text-sm font-bold text-[#111A2E]">{img.title}</h3>
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
              Everything you need to know about booking our cotton candy counter for your event.
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
              <h3 className="text-base font-bold text-[#111A2E]">Have queries about our cotton candy counter?</h3>
              <p className="text-xs sm:text-sm text-[#5A6E85] mt-0.5">Feel free to talk to our party organizers right away!</p>
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
          href="#party-fun-eatables" 
          className="inline-flex items-center gap-2 text-sm font-bold text-[#5A6E85] hover:text-[#EE3775] transition-colors"
        >
          &larr; Back to All Party Fun Eatables
        </a>
      </div>
    </div>
  );
}

