import React, { useState } from 'react';
import {
  Sparkles,
  Phone,
  Clock,
  ShieldCheck,
  ChevronDown,
  Star,
  Award,
  Play,
  Palette,
  Flower,
} from 'lucide-react';
import { GoldUnderline } from '../components/Doodles';

export default function PotPaintingPage() {
  const [openFaq, setOpenFaq] = useState(0);

  const galleryImages = [
    {
      src: '/assets/pot-painting-banner.webp',
      alt: 'Live Pot Painting Counter Bangalore',
      title: 'Hand-Painted Traditional Terracotta Pots',
    },
    {
      src: '/assets/pot-paint-main.webp',
      alt: 'Warli & Folk Painted Clay Pots',
      title: 'Indian Tribal & Folk Motifs on Earthenware',
    },
    {
      src: '/assets/pot-painting-1.webp',
      alt: 'Festive Painted Diyas & Planters',
      title: 'Vibrant Acrylic Colors & Metallic Golden Accents',
    },
    {
      src: '/assets/pot-painting-2.webp',
      alt: 'Live Pot Decorating Workshop Bangalore',
      title: 'Children & Adult Clay Pot Decorating Booth',
    },
    {
      src: '/assets/pot-painting-3.webp',
      alt: 'Terracotta Art Souvenirs 7Delights',
      title: 'Weather-Resistant Sealant for Garden Planters',
    },
    {
      src: '/assets/pot-painting-show.webp',
      alt: 'Master Pot Painter Live Bangalore',
      title: 'Up to 30 Finished Painted Pots in 3 Hours',
    },
  ];

  const faqs = [
    {
      q: 'How far in advance should I book 7Delights pot painting for my event?',
      a: 'To ensure maximum availability of pot painting artist, we recommend booking at least 1 to 6 weeks in advance for social parties & corporate events, and 3 to 6 months in advance for major weddings or large-scale corporate launches. However, if you have a last-minute request, contact us & we will do our best to make it happen!',
    },
    {
      q: 'How long does it take for your team to set up?',
      a: 'Setup times vary by service. Pot painting artist may take 1 hour. We always coordinate directly with the venue to ensure everything is flawlessly set up well before your first guest arrives.',
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
        <div className="absolute top-[-40px] right-[-40px] w-80 h-80 rounded-full bg-[#FFE8ED]/60 blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-[-40px] w-72 h-72 rounded-full bg-[#FFF3DF]/50 blur-3xl pointer-events-none" />

        <div className="w-full max-w-[1520px] mx-auto px-6 sm:px-10 lg:px-14 xl:px-16 relative z-10">
          
          {/* Breadcrumb Navigation */}
          <div className="flex items-center space-x-2 text-[12.5px] font-semibold text-[#8C9AA8] mb-6">
            <a href="#home" className="hover:text-[#EE3775] transition-colors">Home</a>
            <span>/</span>
            <a href="#services" className="hover:text-[#EE3775] transition-colors">Services</a>
            <span>/</span>
            <span className="text-[#EE3775] font-bold">Pot Painting</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            {/* Left Column: Heading, Badges, Content */}
            <div className="lg:col-span-7 text-left">
              <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-[#E3F8F2] border border-[#C1F1E1] text-[#059669] text-[12px] font-bold tracking-wider uppercase mb-5">
                <Flower className="w-3.5 h-3.5" />
                <span>Terracotta Art • Bangalore</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#111A2E] tracking-tight leading-[1.15] font-serif mb-5">
                About Pot Painting!
              </h1>

              <div className="relative inline-block mb-6">
                <p className="text-base sm:text-lg text-[#EE3775] font-bold font-serif">
                  7delights Pot Painting Organisers for Events in Bangalore
                </p>
                <div className="w-56 text-[#F5A623] mt-1">
                  <GoldUnderline />
                </div>
              </div>

              <p className="text-[15px] sm:text-[16px] text-[#4F6174] leading-relaxed mb-4">
                Pot Painting is an ancient art that transforms ordinary earthenware and clay vessels into stunning, vibrant showpieces. 7Delights.in offers unique hand-painted designs with Warli, Madhubani, floral, and contemporary geometric motifs suitable for indoor decor, tabletops, and garden planters.
              </p>

              <p className="text-[14.5px] sm:text-[15.5px] text-[#4F6174] leading-relaxed mb-6">
                In recent years, event organizers across Bangalore have incorporated our live Pot Painting stall with massive success! Each guest customizes or takes home an authentic terracotta art piece.
              </p>

              {/* Service Specs Card */}
              <div className="bg-white rounded-2xl p-5 border border-[#F3E8E2] shadow-sm flex flex-wrap items-center justify-between gap-4 mb-8">
                <div className="flex items-center space-x-3">
                  <div className="w-11 h-11 rounded-xl bg-[#FFE8ED] text-[#EE3775] flex items-center justify-center">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-[#8C9AA8] block">Capacity & Slot</span>
                    <span className="text-[15px] font-black text-[#111A2E]">Max 30 Nos in 3 Hours</span>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <div className="w-11 h-11 rounded-xl bg-[#FFF3DF] text-[#D97706] flex items-center justify-center">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-[#8C9AA8] block">Venue Requirement</span>
                    <span className="text-[13px] font-bold text-[#111A2E]">A Table Required</span>
                  </div>
                </div>

                <div className="flex items-center space-x-2">
                  <a
                    href="#contact"
                    className="px-6 py-2.5 rounded-full bg-[#EE3775] hover:bg-[#DE2765] text-white text-[13.5px] font-bold shadow-md shadow-[#EE3775]/25 transition-all hover:scale-102"
                  >
                    Book Pot Artist
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
                  src="/assets/pot-painting-banner.webp"
                  alt="7Delights Pot Painting Bangalore"
                  className="w-full h-[400px] sm:h-[480px] object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md px-3.5 py-1.5 rounded-full text-[12px] font-bold text-[#059669] shadow-md flex items-center space-x-1.5">
                  <Star className="w-3.5 h-3.5 fill-[#059669]" />
                  <span>Real Earthenware</span>
                </div>

                <div className="absolute bottom-6 left-6 right-6 text-white text-left">
                  <span className="inline-block px-2.5 py-0.5 rounded-full bg-[#059669] text-[11px] font-bold uppercase tracking-wider mb-2">
                    Traditional Indian Craft
                  </span>
                  <p className="text-xl sm:text-2xl font-bold font-serif mb-1">
                    Warli & Madhubani Terracotta Art
                  </p>
                  <p className="text-[13px] text-white/90">
                    Hand-crafted painted clay pots with acrylics and sealants, ready for tabletop decor and plant potting.
                  </p>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ======================================================== */}
      {/* 2. SPECIALITIES & YOUR FAVORITE DESTINATION              */}
      {/* ======================================================== */}
      <section className="relative w-full py-16 sm:py-20 overflow-hidden">
        
        <div className="w-full max-w-[1520px] mx-auto px-6 sm:px-10 lg:px-14 xl:px-16">
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            
            {/* Box 1: Specialities of Pot Painting */}
            <div className="bg-white rounded-3xl p-8 sm:p-10 border border-[#F3E8E2] shadow-sm hover:shadow-lg transition-all text-left">
              <div className="w-12 h-12 rounded-2xl bg-[#E3F8F2] text-[#059669] flex items-center justify-center mb-6">
                <Sparkles className="w-6 h-6" />
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-[#111A2E] font-serif mb-4 leading-snug">
                Specialities of Pot Painting
              </h2>
              <p className="text-[15px] text-[#4F6174] leading-relaxed mb-4">
                The best of Pot Painting is characterized by genuine craftsmanship and creative detailing. All pots are original hand-painted vessels where no two pieces are alike.
              </p>
              <p className="text-[15px] text-[#4F6174] leading-relaxed">
                Our acrylic enamels and top coats are weather-resistant, preventing colors from peeling or fading outdoors. Spanning traditional Warli to vibrant festive colors, these pots deliver both functional use and timeless artistic style.
              </p>
            </div>

            {/* Box 2: 7delights.in – Your Favorite Destination For Pot Painting */}
            <div className="bg-gradient-to-br from-[#FFF5F6] to-[#FFFBF9] rounded-3xl p-8 sm:p-10 border border-[#FCD5DE] shadow-sm hover:shadow-lg transition-all text-left">
              <div className="w-12 h-12 rounded-2xl bg-[#EE3775] text-white flex items-center justify-center mb-6 shadow-md shadow-[#EE3775]/25">
                <Award className="w-6 h-6" />
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-[#111A2E] font-serif mb-4 leading-snug">
                7delights.in – Destination For Pot Painting
              </h2>
              <p className="text-[15px] text-[#4F6174] leading-relaxed mb-4">
                7Delights.in features exquisitely created Pot Paintings tailored to your event preferences. Our artists easily accommodate specific festive or cultural themes.
              </p>
              <p className="text-[15px] text-[#4F6174] leading-relaxed">
                Add the warmth of authentic terracotta art to your celebrations by engaging our premier pot painting team in Bangalore!
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* ======================================================== */}
      {/* 3. POT PAINTING GALLERY                                  */}
      {/* ======================================================== */}
      <section className="relative w-full py-16 sm:py-20 bg-[#FFF8F7] border-y border-[#FCE6EC] overflow-hidden">
        
        <div className="w-full max-w-[1520px] mx-auto px-6 sm:px-10 lg:px-14 xl:px-16 text-center">
          
          <div className="max-w-2xl mx-auto mb-12 sm:mb-14">
            <span className="text-[12px] font-bold tracking-[0.2em] text-[#EE3775] uppercase">
              TERRACOTTA HANDCRAFT SHOWCASE
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-[#111A2E] font-serif mt-2 mb-3">
              Pot Painting Gallery
            </h2>
            <p className="text-[14.5px] text-[#5A6E85]">
              Real photos of birthday parties, Diwali festivals, and cultural events organized across Bangalore.
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
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent opacity-90 group-hover:opacity-100 transition-opacity" />
                  
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
              <span>Watch Live Demonstration</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-[#111A2E] font-serif mb-3">
              Watch Our Video
            </h2>
            <p className="text-[14.5px] text-[#5A6E85]">
              Watch our painting artists transform rustic earthenware pots with vibrant colors and Warli patterns!
            </p>
          </div>

          <div className="relative w-full max-w-4xl mx-auto rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-black aspect-video">
            <iframe
              src="https://www.youtube.com/embed/m3z2RTSmAQU"
              title="7delights Pot Painting Video"
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
              Everything you need to know about booking our pot painting artists in Bangalore.
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
          <div className="mt-12 bg-white rounded-3xl p-6 sm:p-8 border border-[#C1F1E1] flex flex-col sm:flex-row items-center justify-between gap-6 shadow-sm">
            <div>
              <p className="text-lg font-black text-[#111A2E] font-serif mb-1">
                Have queries about our pot painting activity stalls?
              </p>
              <p className="text-[13.5px] text-[#5A6E85]">
                Feel Free to Talk To Us Right Away! Call our friendly party coordinators in Bangalore.
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

