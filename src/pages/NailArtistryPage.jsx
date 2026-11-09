import React, { useState } from 'react';
import {
  Sparkles,
  Phone,
  Clock,
  ShieldCheck,
  ChevronDown,
  Star,
  Award,
  Gem,
  HeartHandshake,
} from 'lucide-react';
import { GoldUnderline } from '../components/Doodles';

export default function NailArtistryPage() {
  const [openFaq, setOpenFaq] = useState(0);

  const galleryImages = [
    {
      src: '/assets/nail-artistry-banner.webp',
      alt: 'Nail Artistry Live Stall Bangalore',
      title: 'Intricate Floral & Dot Accents',
    },
    {
      src: '/assets/nail-art-1.webp',
      alt: 'Nail Art Design 7Delights',
      title: 'Modern Geometric Polish Patterns',
    },
    {
      src: '/assets/nail-art-2.webp',
      alt: 'Nail Artist Live Demonstration',
      title: 'Pastel French Tips & Glitter Ombre',
    },
    {
      src: '/assets/nail-art-14.webp',
      alt: 'Party Nail Artistry Counter',
      title: 'Crystal Studded Accent Nails',
    },
    {
      src: '/assets/nail-art-8.webp',
      alt: 'Nail Art for Ladies & Kids Events',
      title: 'Trendy Festive Embellishments',
    },
    {
      src: '/assets/nail-art-scaled.webp',
      alt: 'Deluxe Nail Design Portfolio',
      title: 'Full Manicure Styling Live',
    },
  ];

  const faqs = [
    {
      q: 'How far in advance should I book 7Delights Nail Artist for my event?',
      a: 'To ensure maximum availability of Nail Artist, we recommend booking at least 1 to 4 weeks in advance for social parties & corporate events, and 3 to 6 months in advance for major weddings or large-scale corporate launches. However, if you have a last-minute request, contact us & we will do our best to make it happen!',
    },
    {
      q: 'How long does it take for your team to set up?',
      a: 'Setup times vary by service. Nail Artist may take 1 hours. We always coordinate directly with the venue to ensure everything is flawlessly set up well before your first guest arrives.',
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
      <section className="relative w-full pt-10 pb-16 sm:pb-20 bg-gradient-to-b from-[#F2EDFF]/40 via-[#FFF8F7] to-[#FFFDF9] border-b border-[#FCE6EC]/80 overflow-hidden">
        
        {/* Decorative Floating Blobs */}
        <div className="absolute top-[-40px] right-[-40px] w-80 h-80 rounded-full bg-[#F2EDFF]/60 blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-[-40px] w-72 h-72 rounded-full bg-[#FFE8ED]/50 blur-3xl pointer-events-none" />

        <div className="w-full max-w-[1520px] mx-auto px-6 sm:px-10 lg:px-14 xl:px-16 relative z-10">
          
          {/* Breadcrumb Navigation */}
          <div className="flex items-center space-x-2 text-[12.5px] font-semibold text-[#8C9AA8] mb-6">
            <a href="#home" className="hover:text-[#EE3775] transition-colors">Home</a>
            <span>/</span>
            <a href="#services" className="hover:text-[#EE3775] transition-colors">Services</a>
            <span>/</span>
            <span className="text-[#EE3775] font-bold">Nail Artistry</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            {/* Left Column: Heading, Badges, Content */}
            <div className="lg:col-span-7 text-left">
              <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-[#F2EDFF] border border-[#E0D5FF] text-[#7B61FF] text-[12px] font-bold tracking-wider uppercase mb-5">
                <Gem className="w-3.5 h-3.5" />
                <span>Beauty & Glamour Stall • Bangalore</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#111A2E] tracking-tight leading-[1.15] font-serif mb-5">
                Think Nail Artist, Think 7Delights.in!
              </h1>

              <div className="relative inline-block mb-6">
                <p className="text-base sm:text-lg text-[#EE3775] font-bold font-serif">
                  7delights Nail Artistry Organisers for Events Bangalore
                </p>
                <div className="w-52 text-[#F5A623] mt-1">
                  <GoldUnderline />
                </div>
              </div>

              <p className="text-[15px] sm:text-[16px] text-[#4F6174] leading-relaxed mb-4">
                Indeed, we are your destination for fascinating nail artistry! Our expert team of nail artists is versatile in their domain. They specialize in creating fabulous nail designs that others cannot think of. Our designs are superb, and the quality is incomparable! Our nail technicians turn your nails into fabulous works of art! All the artists share a passion for creating superior designs! They have the natural inclination to use only top materials!
              </p>

              <p className="text-[14.5px] sm:text-[15.5px] text-[#4F6174] leading-relaxed mb-6">
                Our nail artists understand what you want or need, so they can make it happen naturally! Our experts can do everything from simple nail art to sophisticated or intricate nail art! You may have all the reasons in the world to trust our experts. Their exceptional skill can bring you complete peace of mind and overwhelming happiness!
              </p>

              {/* Service Specs Card */}
              <div className="bg-white rounded-2xl p-5 border border-[#F3E8E2] shadow-sm flex flex-wrap items-center justify-between gap-4 mb-8">
                <div className="flex items-center space-x-3">
                  <div className="w-11 h-11 rounded-xl bg-[#F2EDFF] text-[#7B61FF] flex items-center justify-center">
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
                    <span className="text-[13px] font-bold text-[#111A2E]">A Table Required</span>
                  </div>
                </div>

                <div className="flex items-center space-x-2">
                  <a
                    href="#contact"
                    className="px-6 py-2.5 rounded-full bg-[#EE3775] hover:bg-[#DE2765] text-white text-[13.5px] font-bold shadow-md shadow-[#EE3775]/25 transition-all hover:scale-102"
                  >
                    Book Nail Artist
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
                  src="/assets/nail-artistry-banner.webp"
                  alt="7Delights Nail Artistry Bangalore"
                  className="w-full h-[400px] sm:h-[480px] object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md px-3.5 py-1.5 rounded-full text-[12px] font-bold text-[#7B61FF] shadow-md flex items-center space-x-1.5">
                  <Star className="w-3.5 h-3.5 fill-[#7B61FF]" />
                  <span>100% Hygienic Setup</span>
                </div>

                <div className="absolute bottom-6 left-6 right-6 text-white text-left">
                  <span className="inline-block px-2.5 py-0.5 rounded-full bg-[#7B61FF] text-[11px] font-bold uppercase tracking-wider mb-2">
                    Glamour Beauty Counter
                  </span>
                  <p className="text-xl sm:text-2xl font-bold font-serif mb-1">
                    Exquisite & Customized Nail Polish Art
                  </p>
                  <p className="text-[13px] text-white/90">
                    Trendy patterns, metallic glitters, nail rhinestones, floral stickers, and quick-dry topcoats.
                  </p>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ======================================================== */}
      {/* 2. OUR SPECIALTIES & HOME FOR NAIL ARTISTRY              */}
      {/* ======================================================== */}
      <section className="relative w-full py-16 sm:py-20 overflow-hidden">
        
        <div className="w-full max-w-[1520px] mx-auto px-6 sm:px-10 lg:px-14 xl:px-16">
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            
            {/* Box 1: Nail Artistry – Our Specialties */}
            <div className="bg-white rounded-3xl p-8 sm:p-10 border border-[#F3E8E2] shadow-sm hover:shadow-lg transition-all text-left">
              <div className="w-12 h-12 rounded-2xl bg-[#F2EDFF] text-[#7B61FF] flex items-center justify-center mb-6">
                <Sparkles className="w-6 h-6" />
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-[#111A2E] font-serif mb-4 leading-snug">
                Nail Artistry – Our Specialties!
              </h2>
              <p className="text-[15px] text-[#4F6174] leading-relaxed mb-4">
                Giving your nails a decent look is an art our artists are well-versed with. We can create exquisite nail designs that you will fall in love with. We use top-class materials to guarantee the safest user experience.
              </p>
              <p className="text-[15px] text-[#4F6174] leading-relaxed">
                We listen to your needs first, and then we provide the right designs customized to your needs. Our expert nail artists pay attention to every detail, which is a secret to their success. Want to know more? Reach us for personal consultations.
              </p>
            </div>

            {/* Box 2: Things That Make 7Delights Your Home for Nail Artistry */}
            <div className="bg-gradient-to-br from-[#FAF7FF] to-[#FFFBF9] rounded-3xl p-8 sm:p-10 border border-[#E0D5FF] shadow-sm hover:shadow-lg transition-all text-left">
              <div className="w-12 h-12 rounded-2xl bg-[#7B61FF] text-white flex items-center justify-center mb-6 shadow-md shadow-[#7B61FF]/25">
                <Award className="w-6 h-6" />
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-[#111A2E] font-serif mb-4 leading-snug">
                Things That Make 7Delights.in Your Home For Nail Artistry!
              </h2>
              <p className="text-[15px] text-[#4F6174] leading-relaxed mb-4">
                7Delights.in claims to be your preferred destination for nail artistry. Our core strength rests on the shoulders of our expert nail artists, who are full of innovative and creative ideas that they implement to create decent nail art.
              </p>
              <p className="text-[15px] text-[#4F6174] leading-relaxed">
                The team never compromises on the quality of the product. We work with top-class materials procured from top sources. Our studio is 100% hygienic and ensures everyone has the safest nail art. So, what keeps you waiting? Visit us right away!
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* ======================================================== */}
      {/* 3. NAIL ARTISTRY GALLERY                                 */}
      {/* ======================================================== */}
      <section className="relative w-full py-16 sm:py-20 bg-[#FFF8F7] border-y border-[#FCE6EC] overflow-hidden">
        
        <div className="w-full max-w-[1520px] mx-auto px-6 sm:px-10 lg:px-14 xl:px-16 text-center">
          
          <div className="max-w-2xl mx-auto mb-12 sm:mb-14">
            <span className="text-[12px] font-bold tracking-[0.2em] text-[#EE3775] uppercase">
              BEAUTY IN EVERY DETAIL
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-[#111A2E] font-serif mt-2 mb-3">
              Nail Artistry Gallery
            </h2>
            <p className="text-[14.5px] text-[#5A6E85]">
              Real photos of birthday parties, ladies kitty celebrations, and weddings in Bangalore.
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
      {/* 4. EVENT FAQ SECTION (Scraped directly from page)        */}
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
              Everything you need to know about booking our professional nail artists in Bangalore.
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
          <div className="mt-12 bg-white rounded-3xl p-6 sm:p-8 border border-[#E0D5FF] flex flex-col sm:flex-row items-center justify-between gap-6 shadow-sm">
            <div>
              <p className="text-lg font-black text-[#111A2E] font-serif mb-1">
                Have queries about our services and performances?
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

