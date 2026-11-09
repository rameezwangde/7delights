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
  Crown, 
  Smile, 
  Heart, 
  Star 
} from 'lucide-react';

export default function HorseRidingPage() {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const ridingOptions = [
    {
      title: 'Gentle Saddle Riding',
      desc: 'Docile, well-trained horses guided by professional handlers along lawns or designated safe perimeter tracks for kids and guests.',
      tag: 'Individual Riding',
      color: 'bg-[#FFF3DF] text-[#D97706] border-[#FFE4B8]'
    },
    {
      title: 'Royal Horse Chariot (Bagghi)',
      desc: 'Magnificent vintage horse-drawn carriage adorned with velvet upholstery, flowers, and brass lamps for grand groom entries and VIP welcomes.',
      tag: 'Royal Chariot',
      color: 'bg-[#FFE8ED] text-[#EE3775] border-[#FFD0DB]'
    },
    {
      title: 'Baraat Ghodi (Wedding Horse)',
      desc: 'Regal, calm white horse dressed in ornate traditional Rajasthani and zardozi jhool, kalgis, and umbrella attendants for wedding processions.',
      tag: 'Wedding Baraat',
      color: 'bg-[#F2EDFF] text-[#7B61FF] border-[#E0D5FF]'
    },
    {
      title: 'Pony Rides for Toddlers',
      desc: 'Adorable, miniature ponies with lightweight child saddles and dual side-walkers designed specifically for toddlers and nursery kids.',
      tag: 'Toddler Pony',
      color: 'bg-[#E3F8F2] text-[#059669] border-[#C1F1E1]'
    },
  ];

  const benefits = [
    {
      title: 'Healthy, Trained Equines',
      desc: 'Our horses are calm, exceptionally well-groomed, vaccinated, and accustomed to festive environments, loud music, and cheering crowds.',
      icon: <ShieldCheck className="w-6 h-6 text-[#059669]" />,
    },
    {
      title: 'Professional Handlers & Escorts',
      desc: 'Every horse is accompanied by seasoned handlers who lead the reins and provide supportive side-walking for children throughout the ride.',
      icon: <Award className="w-6 h-6 text-[#EE3775]" />,
    },
    {
      title: 'Safety Gear & Helmets Provided',
      desc: 'We provide protective equestrian helmets, secure stirrups, and padded saddles to guarantee 100% comfort and safety for first-time riders.',
      icon: <ShieldCheck className="w-6 h-6 text-[#7B61FF]" />,
    },
    {
      title: 'Royal Vintage Chariots (Bagghi)',
      desc: 'Opt for horse-drawn open Victorian chariots for groom entries, birthday princes, or fairy-tale princess entries with photo op staging.',
      icon: <Crown className="w-6 h-6 text-[#D97706]" />,
    },
    {
      title: 'Confidence & Joy For Kids',
      desc: 'Riding builds confidence, posture, and balance in children while creating magical, cherished photo moments for proud parents.',
      icon: <Smile className="w-6 h-6 text-[#EE3775]" />,
    },
    {
      title: 'Clean On-Site Operations',
      desc: 'Our dedicated crew maintains complete cleanliness and waste hygiene throughout the event duration, leaving the venue completely spotless.',
      icon: <Sparkles className="w-6 h-6 text-[#7B61FF]" />,
    },
  ];

  const galleryImages = [
    { src: '/assets/horse-riding-1.webp', title: 'Royal White Horse Chariot', tag: 'Grand Entry' },
    { src: '/assets/horse-riding-main.webp', title: 'Vintage Decorated Carriage', tag: 'Royal Bagghi' },
    { src: '/assets/horse-riding-2.webp', title: 'Gentle Saddle Riding for Kids', tag: 'Safe Riding' },
    { src: '/assets/horse-riding-3.webp', title: 'Baraat Ceremony Ghodi', tag: 'Wedding Procession' },
  ];

  const faqs = [
    {
      q: 'How far in advance should I book 7Delights horse riding for my event?',
      a: 'To ensure maximum availability of our trained horses, royal chariots, and expert handlers, we recommend booking at least 1 to 6 weeks in advance for social parties & corporate events, and 3 to 6 months in advance for major weddings or large-scale corporate launches. However, if you have a last-minute request, contact us & we will do our best to make it happen!',
    },
    {
      q: 'How long does it take for your team to set up?',
      a: 'Setup and staging typically take 1 to 2 hours prior to the event. Our team arrives early to inspect the designated pathway or lawn, familiarize the horses with the venue layout, and coordinate with event planners so everything operates smoothly.',
    },
    {
      q: 'Are your horses safe around young children and loud music?',
      a: 'Yes! Our horses are seasoned event equines trained specifically for Indian celebrations, Baraats, and crowded festivals. They are gentle, unflappable, and always led by experienced master handlers who hold the reins at all times.',
    },
    {
      q: 'What space is required at the venue for horse riding?',
      a: 'We require an open, unobstructed outdoor area or flat pathway (such as a resort lawn, wide driveway, or society compound) where the horse can walk safely in a loop. We inspect and approve venue parameters prior to the event.',
    },
    {
      q: 'What is your payment policy?',
      a: 'To secure your date, horses, and handlers, we require an advance payment upon booking confirmation. The remaining balance is structured into milestones leading up to or on the day of the event.',
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
            <a href="#amusements-games" className="hover:text-[#EE3775] transition-colors">Amusements &amp; Games</a>
            <span>/</span>
            <span className="text-[#111A2E] font-medium">Horse Riding</span>
          </div>
          <div className="flex items-center space-x-2 text-[#D97706] font-medium bg-[#FFF3DF] px-2.5 py-1 rounded-full text-xs">
            <Crown className="w-3.5 h-3.5 text-[#D97706]" />
            <span>Gentle Purebreds Available in Bangalore</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-8 pb-14 lg:py-16 bg-gradient-to-b from-[#FFF9F0] via-[#FFFDF9] to-[#FFFDF9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Column: Heading, Description & Details */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#FFF3DF] border border-[#FFE4B8] text-xs font-semibold text-[#D97706]">
                <Crown className="w-3.5 h-3.5 text-[#D97706]" />
                <span>Royal Equine Experience • Safe &amp; Supervised</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#111A2E] leading-tight tracking-tight">
                Horse Riding Organisers <br className="hidden sm:inline" />
                <span className="text-[#D97706]">for Events in Bangalore</span>
              </h1>

              <p className="text-base sm:text-lg text-[#5A6E85] leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Riding a majestic horse is an exhilarating, royal adventure for guests of all ages! With 7Delights, you get healthy, docile, well-trained horses under the guidance of seasoned equestrian handlers—making saddle rides, pony rides, and royal horse-drawn chariots completely safe and unforgettable across Bengaluru.
              </p>

              {/* Service Quick Badges */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2 max-w-xl mx-auto lg:mx-0">
                <div className="flex items-center gap-2 p-2.5 rounded-xl bg-white border border-[#F2ECE4] shadow-sm">
                  <Clock className="w-4 h-4 text-[#D97706] shrink-0" />
                  <div className="text-left">
                    <div className="text-[11px] text-[#5A6E85] uppercase tracking-wider font-semibold">Duration</div>
                    <div className="text-xs font-bold text-[#111A2E]">2 to 3+ Hours</div>
                  </div>
                </div>

                <div className="flex items-center gap-2 p-2.5 rounded-xl bg-white border border-[#F2ECE4] shadow-sm">
                  <ShieldCheck className="w-4 h-4 text-[#059669] shrink-0" />
                  <div className="text-left">
                    <div className="text-[11px] text-[#5A6E85] uppercase tracking-wider font-semibold">Safety</div>
                    <div className="text-xs font-bold text-[#111A2E]">Expert Handlers</div>
                  </div>
                </div>

                <div className="flex items-center gap-2 p-2.5 rounded-xl bg-white border border-[#F2ECE4] shadow-sm col-span-2 sm:col-span-1">
                  <MapPin className="w-4 h-4 text-[#EE3775] shrink-0" />
                  <div className="text-left">
                    <div className="text-[11px] text-[#5A6E85] uppercase tracking-wider font-semibold">Coverage</div>
                    <div className="text-xs font-bold text-[#111A2E]">All Bengaluru</div>
                  </div>
                </div>
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
                <a
                  href="https://wa.me/919980029977?text=Hi%207Delights,%20I%20would%20like%20to%20inquire%20about%20booking%20Horse%20Riding%20or%20a%20Chariot%20for%20our%20event."
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
                  <CheckCircle className="w-3.5 h-3.5 text-[#059669]" /> Trained &amp; Vaccinated Horses
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle className="w-3.5 h-3.5 text-[#059669]" /> Protective Helmets Provided
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle className="w-3.5 h-3.5 text-[#059669]" /> Clean On-Site Hygiene
                </span>
              </div>
            </div>

            {/* Right Column: Hero Visual Showcase */}
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-md lg:max-w-none">
                <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-white">
                  <img
                    src="/assets/horse-riding-banner.webp"
                    alt="Horse Riding Organisers in Bangalore"
                    className="w-full h-[320px] sm:h-[380px] object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/25 to-transparent flex flex-col justify-end p-6 text-white">
                    <span className="inline-block px-3 py-1 rounded-full bg-[#D97706] text-white text-xs font-semibold w-max mb-2">
                      Royal Equine Experience
                    </span>
                    <p className="text-xl font-bold">Gentle Saddle &amp; Chariot Rides</p>
                    <p className="text-xs text-white/90 mt-1">Make your wedding entry or birthday party feel like true royalty.</p>
                  </div>
                </div>

                {/* Floating Highlight Card */}
                <div className="absolute -bottom-6 -left-4 sm:-left-6 bg-white p-3.5 sm:p-4 rounded-2xl shadow-xl border border-[#F2ECE4] flex items-center gap-3">
                  <div className="w-11 h-11 rounded-xl bg-[#FFF3DF] flex items-center justify-center text-[#D97706] font-bold">
                    <Crown className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-[#111A2E]">Horse Chariots (Bagghi)</div>
                    <div className="text-[11px] text-[#5A6E85]">Groom &amp; Princess Grand Entries</div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Riding Options Section */}
      <section className="py-16 bg-white border-y border-[#F2ECE4]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FFF3DF] text-xs font-semibold text-[#D97706] mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Tailored For Your Occasion</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#111A2E]">
              Our Horse Riding &amp; Carriage Services
            </h2>
            <p className="text-sm sm:text-base text-[#5A6E85] mt-3">
              From kids birthday pony rides to grand Victorian wedding carriages, choose the perfect equine attraction.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {ridingOptions.map((opt, i) => (
              <div 
                key={i} 
                className="bg-[#FFFDF9] p-6 rounded-2xl border border-[#F2ECE4] shadow-sm hover:shadow-md transition-shadow group flex flex-col justify-between"
              >
                <div>
                  <div className="inline-block px-3 py-1 rounded-full text-xs font-bold mb-4 border border-transparent shadow-xs">
                    <span className={`px-2.5 py-0.5 rounded-full ${opt.color}`}>
                      {opt.tag}
                    </span>
                  </div>
                  <p className="text-lg font-bold text-[#111A2E] mb-2">{opt.title}</p>
                  <p className="text-xs sm:text-sm text-[#5A6E85] leading-relaxed">{opt.desc}</p>
                </div>
                <div className="mt-4 pt-3 border-t border-[#F2ECE4] flex items-center gap-1.5 text-[11px] text-[#D97706] font-semibold">
                  <span>Guided by Expert Handlers</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Demonstration Section */}
      <section className="py-16 bg-[#FFFDF9]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FFE8ED] text-xs font-semibold text-[#EE3775] mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Watch Live Demonstration</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#111A2E] mb-3">
            Watch Our Horse Riding in Action
          </h2>
          <p className="text-sm sm:text-base text-[#5A6E85] max-w-2xl mx-auto mb-8">
            Experience the grandeur, calm temperament, and joyous reactions as guests and children ride gracefully at Bangalore events.
          </p>

          <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-black aspect-video max-w-3xl mx-auto">
            <iframe
              src="https://www.youtube.com/embed/m3z2RTSmAQU?rel=0"
              title="7Delights Horse Riding Live Video"
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
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FFF3DF] text-xs font-semibold text-[#D97706] mb-3">
              <Star className="w-3.5 h-3.5" />
              <span>Royal Standards</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#111A2E]">
              Why Choose 7Delights for Horse Riding?
            </h2>
            <p className="text-sm sm:text-base text-[#5A6E85] mt-3">
              Calm and affectionate horses, seasoned handlers, spotless sanitary maintenance, and unforgettable memories.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((b, idx) => (
              <div 
                key={idx}
                className="bg-[#FFFDF9] p-6 rounded-2xl border border-[#F2ECE4] hover:border-[#D97706]/30 transition-all hover:shadow-md"
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
          <div className="mt-12 bg-gradient-to-r from-[#FFF9F0] via-white to-[#FFE8ED] rounded-3xl p-6 sm:p-8 border border-[#F2ECE4] shadow-sm">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
              <div className="lg:col-span-4">
                <span className="text-xs font-bold uppercase tracking-wider text-[#D97706]">Festive Appeal</span>
                <h3 className="text-xl sm:text-2xl font-black text-[#111A2E] mt-1">Perfect for Every Occasion</h3>
                <p className="text-xs sm:text-sm text-[#5A6E85] mt-2">
                  Bring high royal distinction to wedding processions, festive fairs, or create magical kids birthday memories.
                </p>
              </div>
              <div className="lg:col-span-8 grid grid-cols-2 sm:grid-cols-3 gap-3">
                {[
                  { name: 'Weddings & Baraats', desc: 'Royal groom entry & bagghi' },
                  { name: 'Kids Birthday Parties', desc: 'Safe, magical pony & saddle rides' },
                  { name: 'Corporate Family Days', desc: 'Thrilling outdoor attraction' },
                  { name: 'Apartment Carnivals', desc: 'Captivating community centerpiece' },
                  { name: 'School Fests & Sports Days', desc: 'Supervised confidence-building activity' },
                  { name: 'Cultural Festivals', desc: 'Timeless traditional heritage appeal' },
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
              Moments from Our Horse Riding Stalls
            </h2>
            <p className="text-sm sm:text-base text-[#5A6E85] mt-2">
              Browse through our authentic event photos showing decorated carriages, happy young riders, and royal Baraat ceremonies in Bangalore.
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
                  <span className="inline-block px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-[#FFF3DF] text-[#D97706] mb-1">
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
              Everything you need to know about booking Horse Riding and Chariots in Bangalore.
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
              <div className="text-base font-bold text-[#111A2E]">Need a royal chariot or Baraat ghodi?</div>
              <div className="text-xs text-[#5A6E85] mt-0.5">Contact our Bangalore event coordinators for customized packages.</div>
            </div>
            <div className="flex gap-3">
              <a
                href="tel:+919980029977"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#EE3775] text-white text-xs font-bold hover:bg-[#D92C67] transition-all"
              >
                <Phone className="w-3.5 h-3.5" /> Call Now
              </a>
              <a
                href="https://wa.me/919980029977?text=Hi%207Delights,%20I%20have%20questions%20regarding%20Horse%20Riding%20and%20Chariot%20rental%20pricing."
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

