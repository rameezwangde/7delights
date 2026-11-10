import React, { useState } from 'react';
import {
  Sparkles,
  Phone,
  Clock,
  CheckCircle2,
  Calendar,
  ShieldCheck,
  ArrowLeft,
  ChevronDown,
  Play,
  HeartHandshake,
  Star,
  Layers,
  Award,
} from 'lucide-react';
import { GoldUnderline, HandDrawnHeart } from '../components/Doodles';

export default function BalloonModelingPage() {
  const [openFaq, setOpenFaq] = useState(0);

  const galleryImages = [
    {
      src: '/assets/balloon-modeling-banner.webp',
      alt: 'Balloon Modeling Live Stall Bangalore',
      title: 'Party Animal Balloon Creations',
    },
    {
      src: '/assets/balloon-modeling-detail-1.webp',
      alt: 'Balloon Modeling for Kids Parties',
      title: 'Interactive Twisting with Children',
    },
    {
      src: '/assets/balloon-art.webp',
      alt: 'Artistic Balloon Twisting',
      title: 'Colorful Character Sculptures',
    },
    {
      src: '/assets/balloon-modeling-show.webp',
      alt: 'Balloon Modeling Show 7Delights',
      title: 'Stage & Floor Twister Performance',
    },
    {
      src: '/assets/balloon-twist.webp',
      alt: 'Custom Balloon Twisting Stall',
      title: 'Sword, Crown & Flower Hats',
    },
    {
      src: '/assets/balloon-artist-live.webp',
      alt: 'Expert Balloon Twisting Artist',
      title: 'Master Balloon Craftsman Live',
    },
  ];

  const faqs = [
    {
      q: 'How far in advance should I book 7delights balloon modeling artist for my event?',
      a: 'To ensure maximum availability of balloon modeling artist, we recommend booking at least 1 to 6 weeks in advance for social parties & corporate events, and 3 to 6 months in advance for major weddings or large-scale corporate launches. However, if you have a last-minute request, contact us & we will do our best to make it happen!',
    },
    {
      q: 'How long does it take for your team to set up?',
      a: 'Setup times vary by service. Balloon modeling may take 1 hour. We always coordinate directly with the venue to ensure everything is flawlessly set up well before your first guest arrives.',
    },
    {
      q: 'What is your payment policy?',
      a: 'To secure your date, artists, and materials, we require an advance payment upon signing the contract. The remaining balance is structured into milestones leading up to, or on the day of the event.',
    },
  ];

  return (
    <div className="w-full bg-[#FFFDF9] text-[#111A2E] overflow-x-hidden">
      
      {/* ======================================================== */}
      {/* 1. TOP BREADCRUMB & HERO BANNER                          */}
      {/* ======================================================== */}
      <section className="relative w-full pt-10 pb-16 sm:pb-20 bg-gradient-to-b from-[#FFF5F6] via-[#FFF8F7] to-[#FFFDF9] border-b border-[#FCE6EC]/80 overflow-hidden">
        
        {/* Decorative Floating Blobs */}
        <div className="absolute top-[-40px] right-[-40px] w-80 h-80 rounded-full bg-[#FFE8ED]/70 blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-[-40px] w-72 h-72 rounded-full bg-[#FFF3DF]/60 blur-3xl pointer-events-none" />

        <div className="w-full max-w-[1520px] mx-auto px-6 sm:px-10 lg:px-14 xl:px-16 relative z-10">
          
          {/* Breadcrumb Navigation */}
          <div className="flex items-center space-x-2 text-[12.5px] font-semibold text-[#8C9AA8] mb-6">
            <a href="#home" className="hover:text-[#EE3775] transition-colors">Home</a>
            <span>/</span>
            <a href="#services" className="hover:text-[#EE3775] transition-colors">Services</a>
            <span>/</span>
            <span className="text-[#EE3775] font-bold">Balloon Modeling</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            {/* Left Column: Heading, Badges, Content */}
            <div className="lg:col-span-7 text-left">
              <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-[#FFE8ED] border border-[#FFD0DB] text-[#EE3775] text-[12px] font-bold tracking-wider uppercase mb-5">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Live Event Entertainment • Bangalore</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#111A2E] tracking-tight leading-[1.15] font-serif mb-5">
                Balloon Modelling Artist!
              </h1>

              <div className="relative inline-block mb-6">
                <p className="text-base sm:text-lg text-[#EE3775] font-bold font-serif">
                  7delights Balloon Modeling Organisers for Events Bangalore
                </p>
                <div className="w-48 text-[#F5A623] mt-1">
                  <GoldUnderline />
                </div>
              </div>

              <p className="text-[15px] sm:text-[16px] text-[#4F6174] leading-relaxed mb-4">
                Balloon modeling is an enchanting art of creating amazing things using balloons. Experts also call it balloon twisting. This outrageous craft is not limited to children’s events; people of all ages love its fun designs. Its popularity is growing among people of all ages. They enjoy the amazing feats of the artists, who are as popular as Balloon Twisters.
              </p>

              <p className="text-[14.5px] sm:text-[15.5px] text-[#4F6174] leading-relaxed mb-6">
                Shaped like animals, flowers, hats, and other fun shapes, balloons make people happy. Due to this, organizers of an occasion show interest in this show. Excellent balloon twisters have proven talent in this art. They take the balloons, twist, bend, and shape them into different artistic forms. Naturally, these shapes fascinate the onlookers! Balloon Modelling can be useful in any event, including birthday parties, weddings, or corporate events. They can create an amazing environment of fun and frolic! Welcome to the world of balloon modeling! Let the magic begin with experts from 7Delight!
              </p>

              {/* Service Specs Card */}
              <div className="bg-white rounded-2xl p-5 border border-[#F3E8E2] shadow-sm flex flex-wrap items-center justify-between gap-4 mb-8">
                <div className="flex items-center space-x-3">
                  <div className="w-11 h-11 rounded-xl bg-[#FFE8ED] text-[#EE3775] flex items-center justify-center">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-[#8C9AA8] block">Service Duration</span>
                    <span className="text-[15px] font-black text-[#111A2E]">2 to 3 hours</span>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <div className="w-11 h-11 rounded-xl bg-[#FFF3DF] text-[#D97706] flex items-center justify-center">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-[#8C9AA8] block">Extra Hours</span>
                    <span className="text-[13px] font-bold text-[#D97706]">(Attracts Charges)</span>
                  </div>
                </div>

                <div className="flex items-center space-x-2">
                  <a
                    href="#contact"
                    className="px-6 py-2.5 rounded-full bg-[#EE3775] hover:bg-[#DE2765] text-white text-[13.5px] font-bold shadow-md shadow-[#EE3775]/25 transition-all hover:scale-102"
                  >
                    Book Artist Now
                  </a>
                  <a
                    href="tel:+919980029977"
                    className="w-10 h-10 rounded-full bg-[#FFF0F4] hover:bg-[#EE3775] text-[#EE3775] hover:text-white flex items-center justify-center transition-colors"
                    aria-label="Call directly"
                  >
                    <Phone className="w-4 h-4" />
                  </a>
                </div>
              </div>

            </div>

            {/* Right Column: Hero Visual Card */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-white group">
                <img
                  src="/assets/balloon-modeling-banner.webp"
                  alt="7Delights Balloon Modeling Bangalore"
                  className="w-full h-[400px] sm:h-[480px] object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md px-3.5 py-1.5 rounded-full text-[12px] font-bold text-[#EE3775] shadow-md flex items-center space-x-1.5">
                  <Star className="w-3.5 h-3.5 fill-[#EE3775]" />
                  <span>Premium Twister</span>
                </div>

                <div className="absolute bottom-6 left-6 right-6 text-white text-left">
                  <span className="inline-block px-2.5 py-0.5 rounded-full bg-[#EE3775] text-[11px] font-bold uppercase tracking-wider mb-2">
                    Live Workshop Stall
                  </span>
                  <p className="text-xl sm:text-2xl font-bold font-serif mb-1">
                    Bespoke Sculptures for Every Guest
                  </p>
                  <p className="text-[13px] text-white/90">
                    Swords, puppies, tiaras, cartoon characters, and intricate party wearables created live on the spot.
                  </p>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ======================================================== */}
      {/* 2. WHY ENGAGING & WHY CHOOSE 7DELIGHTS                   */}
      {/* ======================================================== */}
      <section className="relative w-full py-16 sm:py-20 overflow-hidden">
        
        <div className="w-full max-w-[1520px] mx-auto px-6 sm:px-10 lg:px-14 xl:px-16">
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            
            {/* Box 1: What Makes Balloon Twisting More Engaging */}
            <div className="bg-white rounded-3xl p-8 sm:p-10 border border-[#F3E8E2] shadow-sm hover:shadow-lg transition-all text-left">
              <div className="w-12 h-12 rounded-2xl bg-[#FFE8ED] text-[#EE3775] flex items-center justify-center mb-6">
                <Sparkles className="w-6 h-6" />
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-[#111A2E] font-serif mb-4 leading-snug">
                What Makes Balloon Twisting More Engaging?
              </h2>
              <p className="text-[15px] text-[#4F6174] leading-relaxed">
                Balloons are lovely and they attract the attention of everyone in every age group. Our special balloon modeling creates a special impact on the onlookers. They enjoy our art and appreciate the way we work to create decent models using colorful balloons. Our experts have years of experience and expertise in this form of art. They can steal the show everywhere they visit. Give us one opportunity to grace your occasion! We assure you that it is the best show ever!
              </p>
            </div>

            {/* Box 2: 7Delights Destination for Decent Balloon Modeling */}
            <div className="bg-gradient-to-br from-[#FFF5F6] to-[#FFFBF9] rounded-3xl p-8 sm:p-10 border border-[#FCD5DE] shadow-sm hover:shadow-lg transition-all text-left">
              <div className="w-12 h-12 rounded-2xl bg-[#EE3775] text-white flex items-center justify-center mb-6 shadow-md shadow-[#EE3775]/25">
                <Award className="w-6 h-6" />
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-[#111A2E] font-serif mb-4 leading-snug">
                7Delights - Your Destination For Decent Balloon Modelling!
              </h2>
              <p className="text-[15px] text-[#4F6174] leading-relaxed">
                7Delights has been the home of true artists in varying domains of performing arts. As a leading event organizer in Bangalore, we offer decent services, including Balloon Modelling. Our expert balloon Swingers have years of experience they have earned with hard work and precision. We can involve every guest in the whole performance. Our experts can make you feel proud of your decision to engage us to grace the occasion. Speak to us to schedule an appointment, and get ready to experience the difference!
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* ======================================================== */}
      {/* 3. BALLOON MODELLING GALLERY                             */}
      {/* ======================================================== */}
      <section className="relative w-full py-16 sm:py-20 bg-[#FFF8F7] border-y border-[#FCE6EC] overflow-hidden">
        
        <div className="w-full max-w-[1520px] mx-auto px-6 sm:px-10 lg:px-14 xl:px-16 text-center">
          
          <div className="max-w-2xl mx-auto mb-12 sm:mb-14">
            <span className="text-[12px] font-bold tracking-[0.2em] text-[#EE3775] uppercase">
              LIVE EVENT PORTFOLIO
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-[#111A2E] font-serif mt-2 mb-3">
              Balloon Modelling Gallery
            </h2>
            <p className="text-[14.5px] text-[#5A6E85]">
              Glimpses of live sculpting, kid joy, and colorful party art delivered across Bangalore venues.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
            {galleryImages.map((img, idx) => (
              <div
                key={idx}
                className="group relative rounded-3xl overflow-hidden bg-white border border-[#F3E8E2] shadow-2xs hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="relative h-64 sm:h-72 w-full overflow-hidden">
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-108"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-90 group-hover:opacity-100 transition-opacity" />
                  
                  <div className="absolute bottom-4 left-4 right-4 text-left text-white">
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-[#F5A623] block mb-1">
                      7Delights Live Showcase
                    </span>
                    <h3 className="text-[16px] font-bold leading-tight font-serif">
                      {img.title}
                    </h3>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ======================================================== */}
      {/* 4. WATCH OUR VIDEO SECTION                               */}
      {/* ======================================================== */}
      <section className="relative w-full py-16 sm:py-20 overflow-hidden">
        
        <div className="w-full max-w-[1200px] mx-auto px-6 sm:px-10 text-center">
          
          <div className="max-w-xl mx-auto mb-10">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#FFE8ED] text-[#EE3775] text-[12px] font-bold uppercase tracking-wider mb-3">
              <Play className="w-3.5 h-3.5 fill-[#EE3775]" />
              <span>Live Demonstration</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-[#111A2E] font-serif mb-3">
              Watch Our Video
            </h2>
            <p className="text-[14.5px] text-[#5A6E85]">
              See our energetic balloon twisters bring party balloons to life with lightning-fast twists!
            </p>
          </div>

          {/* Responsive Video Container */}
          <div className="relative w-full max-w-4xl mx-auto rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-black aspect-video">
            <iframe
              src="https://www.youtube.com/embed/5EfQihYOkjE"
              title="7delights Balloon Modeling Video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full border-0"
            />
          </div>

        </div>
      </section>

      {/* ======================================================== */}
      {/* 5. EVENT FAQ SECTION (Scraped directly from page)        */}
      {/* ======================================================== */}
      <section className="relative w-full py-16 sm:py-20 bg-[#FFF5F6]/60 border-t border-[#FCD5DE]/60 overflow-hidden">
        
        <div className="w-full max-w-[1100px] mx-auto px-6 sm:px-10 relative z-10 text-left">
          
          <div className="text-center max-w-xl mx-auto mb-12 sm:mb-14">
            <span className="text-[12px] font-bold tracking-[0.2em] text-[#EE3775] uppercase">
              GOT QUESTIONS?
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-[#111A2E] font-serif mt-2 mb-3">
              Event FAQ ?
            </h2>
            <p className="text-[14.5px] text-[#5A6E85]">
              Everything you need to know about booking our balloon modeling artists.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div
                  key={index}
                  className="bg-white rounded-2xl border border-[#F3E8E2] shadow-2xs overflow-hidden transition-all duration-200"
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaq(isOpen ? -1 : index)}
                    className="w-full p-5 sm:p-6 text-left flex items-start justify-between gap-4 cursor-pointer focus:outline-none"
                  >
                    <span className="text-[15px] sm:text-[16px] font-bold text-[#111A2E] leading-snug">
                      Q: {faq.q}
                    </span>
                    <span
                      className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-all duration-200 ${
                        isOpen ? 'bg-[#EE3775] text-white rotate-180' : 'bg-[#FFF0F4] text-[#EE3775]'
                      }`}
                    >
                      <ChevronDown className="w-4 h-4 stroke-[2.5]" />
                    </span>
                  </button>

                  {isOpen && (
                    <div className="px-5 sm:px-6 pb-6 pt-1 text-[14px] sm:text-[14.5px] text-[#4F6174] leading-relaxed border-t border-[#FDF0F3] animate-in fade-in duration-200">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Quick Support Banner */}
          <div className="mt-12 bg-white rounded-3xl p-6 sm:p-8 border border-[#FCD5DE] flex flex-col sm:flex-row items-center justify-between gap-6 shadow-sm">
            <div>
              <p className="text-lg font-black text-[#111A2E] font-serif mb-1">
                Have queries about our services and performances?
              </p>
              <p className="text-[13.5px] text-[#5A6E85]">
                Feel Free to Talk To Us Right Away! Call our expert planners in Bangalore.
              </p>
            </div>
            <a
              href="tel:+919980029977"
              className="inline-flex items-center space-x-2.5 px-6 py-3 rounded-full bg-[#EE3775] hover:bg-[#DE2765] text-white text-[14px] font-bold tracking-wide shadow-md shadow-[#EE3775]/25 transition-all hover:scale-102 shrink-0"
            >
              <Phone className="w-4 h-4" />
              <span>+91 99800 29977</span>
            </a>
          </div>

        </div>
      </section>

    </div>
  );
}

