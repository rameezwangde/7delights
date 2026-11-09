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
  Heart,
  Palette,
} from 'lucide-react';
import { GoldUnderline } from '../components/Doodles';

export default function ClayModelingPage() {
  const [openFaq, setOpenFaq] = useState(0);

  const galleryImages = [
    {
      src: '/assets/clay-modeling-banner.webp',
      alt: 'Live Clay Modeling Workshop Bangalore',
      title: 'Cute Clay Ladybug & Yoda Figurine Sculptures',
    },
    {
      src: '/assets/clay-modeling-artist.webp',
      alt: 'Clay Artist Instructing Kids Bangalore',
      title: 'Guided Hands-on Clay Sculpting Station',
    },
    {
      src: '/assets/clay-modeling-1.webp',
      alt: 'Creative Clay Art 7Delights',
      title: 'Non-Toxic Dough Animals & Characters',
    },
    {
      src: '/assets/clay-modeling-art.webp',
      alt: 'Clay Modeling Party Showcase',
      title: 'Decorative Miniature Artifacts & Diyas',
    },
    {
      src: '/assets/clay-artist.webp',
      alt: 'Interactive Clay Workshop Table',
      title: 'Hands-on Sculpting Tools & Techniques',
    },
    {
      src: '/assets/clay-modeling-artists.webp',
      alt: 'Clay Craft Souvenirs Bangalore',
      title: 'Baked or Air-Dry Memento Gifts for Guests',
    },
  ];

  const faqs = [
    {
      q: 'How far in advance should I book 7Delights clay modeling artist for my event?',
      a: 'To ensure maximum availability of clay modeling artist, we recommend booking at least 1 to 6 weeks in advance for social parties & corporate events, and 3 to 6 months in advance for major weddings or large-scale corporate launches. However, if you have a last-minute request, contact us & we will do our best to make it happen!',
    },
    {
      q: 'How long does it take for your team to set up?',
      a: 'Setup times vary by service. Clay modeling artist may take 1 hours. We always coordinate directly with the venue to ensure everything is flawlessly set up well before your first guest arrives.',
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
            <span className="text-[#EE3775] font-bold">Clay Modeling</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            {/* Left Column: Heading, Badges, Content */}
            <div className="lg:col-span-7 text-left">
              <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-[#FFF3DF] border border-[#FFE4B8] text-[#D97706] text-[12px] font-bold tracking-wider uppercase mb-5">
                <Palette className="w-3.5 h-3.5" />
                <span>Sculpting Fun • Bangalore</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#111A2E] tracking-tight leading-[1.15] font-serif mb-5">
                About Clay Modeling
              </h1>

              <div className="relative inline-block mb-6">
                <p className="text-base sm:text-lg text-[#EE3775] font-bold font-serif">
                  7delights Clay Modeling Planners for Event in Bangalore
                </p>
                <div className="w-56 text-[#F5A623] mt-1">
                  <GoldUnderline />
                </div>
              </div>

              <p className="text-[15px] sm:text-[16px] text-[#4F6174] leading-relaxed mb-4">
                Get Creative with Our Interactive Clay Modeling Workshop! Looking for a hands-on, therapeutic, and creatively engaging activity for your next event? 7Delights.in brings the art of Clay Modeling right to your venue! This interactive workshop is a fantastic way to engage guests of all ages, foster creativity, and provide a unique, tangible keepsake they can take home.
              </p>

              <p className="text-[14.5px] sm:text-[15.5px] text-[#4F6174] leading-relaxed mb-6">
                <strong>Unleash Your Inner Sculptor:</strong> Our Clay Modeling experience transforms simple modeling clay into vibrant masterpieces. Featuring friendly expert artist guidance, non-toxic colorful dough, pinch-and-coil techniques, customized event themes, and full setup and cleanup tools for a clean, mess-free guest experience!
              </p>

              {/* Service Specs Card */}
              <div className="bg-white rounded-2xl p-5 border border-[#F3E8E2] shadow-sm flex flex-wrap items-center justify-between gap-4 mb-8">
                <div className="flex items-center space-x-3">
                  <div className="w-11 h-11 rounded-xl bg-[#FFE8ED] text-[#EE3775] flex items-center justify-center">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-[#8C9AA8] block">Stall Duration</span>
                    <span className="text-[15px] font-black text-[#111A2E]">2 to 3 hours</span>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <div className="w-11 h-11 rounded-xl bg-[#FFF3DF] text-[#D97706] flex items-center justify-center">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-[#8C9AA8] block">Venue Requirement</span>
                    <span className="text-[13px] font-bold text-[#111A2E]">Table & Chairs Required</span>
                  </div>
                </div>

                <div className="flex items-center space-x-2">
                  <a
                    href="#contact"
                    className="px-6 py-2.5 rounded-full bg-[#EE3775] hover:bg-[#DE2765] text-white text-[13.5px] font-bold shadow-md shadow-[#EE3775]/25 transition-all hover:scale-102"
                  >
                    Book Clay Artist
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
                  src="/assets/clay-modeling-banner.webp"
                  alt="7Delights Clay Modeling Bangalore"
                  className="w-full h-[400px] sm:h-[480px] object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md px-3.5 py-1.5 rounded-full text-[12px] font-bold text-[#D97706] shadow-md flex items-center space-x-1.5">
                  <Star className="w-3.5 h-3.5 fill-[#D97706]" />
                  <span>Non-Toxic Dough</span>
                </div>

                <div className="absolute bottom-6 left-6 right-6 text-white text-left">
                  <span className="inline-block px-2.5 py-0.5 rounded-full bg-[#D97706] text-[11px] font-bold uppercase tracking-wider mb-2">
                    Interactive Workshop
                  </span>
                  <p className="text-xl sm:text-2xl font-bold font-serif mb-1">
                    Sculpt Characters & Take Souvenirs
                  </p>
                  <p className="text-[13px] text-white/90">
                    Kids and adults mold animated figures, miniature cakes, animals, and flowers to air-dry and take home.
                  </p>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ======================================================== */}
      {/* 2. SPECIALTIES & WHY CHOOSE 7DELIGHTS                    */}
      {/* ======================================================== */}
      <section className="relative w-full py-16 sm:py-20 overflow-hidden">
        
        <div className="w-full max-w-[1520px] mx-auto px-6 sm:px-10 lg:px-14 xl:px-16">
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            
            {/* Box 1: Specialties of Clay Modeling */}
            <div className="bg-white rounded-3xl p-8 sm:p-10 border border-[#F3E8E2] shadow-sm hover:shadow-lg transition-all text-left">
              <div className="w-12 h-12 rounded-2xl bg-[#FFF3DF] text-[#D97706] flex items-center justify-center mb-6">
                <Sparkles className="w-6 h-6" />
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-[#111A2E] font-serif mb-4 leading-snug">
                Specialties of Clay Modeling
              </h2>
              <ul className="space-y-3 text-[14.5px] text-[#4F6174]">
                <li className="flex items-start space-x-2.5">
                  <span className="text-[#D97706] font-bold">•</span>
                  <span><strong>Engaging & Calming:</strong> Clay modeling is known to be a relaxing, focus-enhancing activity, perfect for breaking the ice.</span>
                </li>
                <li className="flex items-start space-x-2.5">
                  <span className="text-[#D97706] font-bold">•</span>
                  <span><strong>Universal Appeal:</strong> Equally enjoyed by children (enhancing motor skills) and adults (offering creative decompression).</span>
                </li>
                <li className="flex items-start space-x-2.5">
                  <span className="text-[#D97706] font-bold">•</span>
                  <span><strong>Customizable Themes:</strong> Cartoon characters, superhero figurines, corporate mascots, or festive diyas.</span>
                </li>
              </ul>
            </div>

            {/* Box 2: 7Delights.in - The Best Place for Clay Modeling */}
            <div className="bg-gradient-to-br from-[#FFF5F6] to-[#FFFBF9] rounded-3xl p-8 sm:p-10 border border-[#FCD5DE] shadow-sm hover:shadow-lg transition-all text-left">
              <div className="w-12 h-12 rounded-2xl bg-[#EE3775] text-white flex items-center justify-center mb-6 shadow-md shadow-[#EE3775]/25">
                <Award className="w-6 h-6" />
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-[#111A2E] font-serif mb-4 leading-snug">
                7Delights.in - Best Place for Clay Modeling
              </h2>
              <p className="text-[15px] text-[#4F6174] leading-relaxed mb-4">
                Our team manages the entire station from setup to clean-up, ensuring a seamless and enjoyable experience. Whether it is Corporate Team Building, Birthday Parties, Community Carnivals, or Cultural Fairs, we bring the best supplies and expert instructors!
              </p>
              <p className="text-[15px] text-[#4F6174] leading-relaxed">
                Every participant leaves with a meaningful and unique memento of the day crafted with their own hands.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* ======================================================== */}
      {/* 3. CLAY MODELING GALLERY                                 */}
      {/* ======================================================== */}
      <section className="relative w-full py-16 sm:py-20 bg-[#FFF8F7] border-y border-[#FCE6EC] overflow-hidden">
        
        <div className="w-full max-w-[1520px] mx-auto px-6 sm:px-10 lg:px-14 xl:px-16 text-center">
          
          <div className="max-w-2xl mx-auto mb-12 sm:mb-14">
            <span className="text-[12px] font-bold tracking-[0.2em] text-[#EE3775] uppercase">
              HANDS-ON SCULPTING GALLERY
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-[#111A2E] font-serif mt-2 mb-3">
              Clay Modeling Gallery
            </h2>
            <p className="text-[14.5px] text-[#5A6E85]">
              Real sculptures, children workshops, and corporate team building creations in Bangalore.
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
      {/* 4. WATCH CLAY MODELING VIDEO                             */}
      {/* ======================================================== */}
      <section className="relative w-full py-16 sm:py-20 overflow-hidden">
        
        <div className="w-full max-w-[1200px] mx-auto px-6 sm:px-10 text-center">
          
          <div className="max-w-xl mx-auto mb-10">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#FFE8ED] text-[#EE3775] text-[12px] font-bold uppercase tracking-wider mb-3">
              <Play className="w-3.5 h-3.5 fill-[#EE3775]" />
              <span>Workshop Video</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-[#111A2E] font-serif mb-3">
              Watch Clay Modeling Video
            </h2>
            <p className="text-[14.5px] text-[#5A6E85]">
              See our clay artist guide children through molding colorful dough into creative figures!
            </p>
          </div>

          <div className="relative w-full max-w-4xl mx-auto rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-black aspect-video">
            <iframe
              src="https://www.youtube.com/embed/PNOUUJB6p-M"
              title="7delights Clay Modeling Video"
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
              Everything you need to know about booking our clay modeling workshop in Bangalore.
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
          <div className="mt-12 bg-white rounded-3xl p-6 sm:p-8 border border-[#FFD0DB] flex flex-col sm:flex-row items-center justify-between gap-6 shadow-sm">
            <div>
              <p className="text-lg font-black text-[#111A2E] font-serif mb-1">
                Have queries about our clay modeling stalls?
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

