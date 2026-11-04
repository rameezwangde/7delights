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
  Crown, 
  Award, 
  Users, 
  Zap, 
  Layers, 
  Heart, 
  Star 
} from 'lucide-react';

export default function TurbanPagriTyingPage() {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const styles = [
    {
      title: 'Rajasthani & Marwari Safas',
      desc: 'Vibrant, multi-colored Bandhani, Leheriya, and Panchranga fabrics filled with timeless desert royal heritage.',
      tag: 'Heritage Royal',
      color: 'bg-[#FFF3DF] text-[#D97706] border-[#FFE4B8]'
    },
    {
      title: 'Punjabi & Sikh Pagris',
      desc: 'Crisp, majestic, and commanding pleated drapes styled with graceful plumes (Turra) for weddings and Bhangra fests.',
      tag: 'Grand & Majestic',
      color: 'bg-[#FFE8ED] text-[#EE3775] border-[#FFD0DB]'
    },
    {
      title: 'Maharashtrian Phetas',
      desc: 'Crisp, elegant, and culturally rich festive drapes ideal for traditional poojas, Ganeshotsav, and wedding receptions.',
      tag: 'Traditional Elegance',
      color: 'bg-[#F2EDFF] text-[#7B61FF] border-[#E0D5FF]'
    },
    {
      title: 'Royal Mewari & Jodhpuri Safas',
      desc: 'Tailored for absolute nobility with metallic zardozi borders, royal kalgi brooches, and pearl necklaces.',
      tag: 'Groom Special',
      color: 'bg-[#E3F8F2] text-[#059669] border-[#C1F1E1]'
    },
  ];

  const benefits = [
    {
      title: 'Master Turban Craftsmen',
      desc: 'We collaborate with seasoned safa masters with decades of heritage experience, tying each turban with balance, stability, and supreme comfort.',
      icon: <Crown className="w-6 h-6 text-[#D97706]" />,
    },
    {
      title: 'Speed & High-Volume Barati Stalls',
      desc: 'Expecting a large Baraat? Our swift artists can effortlessly dress dozens or even hundreds of guests in record time without compromising quality.',
      icon: <Zap className="w-6 h-6 text-[#EE3775]" />,
    },
    {
      title: 'Exquisite Fabrics & Accessories',
      desc: 'Choose from Kota silk, Chanderi, pure georgette, Leheriya, printed Bandhani, and rich velvets adorned with royal kalgis, brooches, and pearls.',
      icon: <Layers className="w-6 h-6 text-[#7B61FF]" />,
    },
    {
      title: 'Theme & Decor Color Coordination',
      desc: 'We match turban palettes directly with your wedding theme, bridal lehenga shades, venue florals, or corporate branding colors.',
      icon: <Sparkles className="w-6 h-6 text-[#059669]" />,
    },
    {
      title: 'Dancing & Movement Secure',
      desc: 'Every safa is engineered to sit comfortably and securely on the head, staying perfectly in place throughout high-energy Baraat dancing and processions.',
      icon: <ShieldCheck className="w-6 h-6 text-[#D97706]" />,
    },
    {
      title: 'Complete Event Logistics',
      desc: 'From sourcing premium fabrics and decorative pearl pins to station setup and guest management, our team executes flawlessly.',
      icon: <Award className="w-6 h-6 text-[#EE3775]" />,
    },
  ];

  const galleryImages = [
    { src: '/assets/turban-1.webp', title: 'Live Barati Turban Counter', tag: 'Wedding Baraat' },
    { src: '/assets/turban-2.webp', title: 'Rajasthani Leheriya Safa', tag: 'Traditional Drape' },
    { src: '/assets/turban-3.webp', title: 'Royal Groom Paghadi with Kalgi', tag: 'Royal Groom' },
    { src: '/assets/turban-4.webp', title: 'Corporate VIP Ceremonial Welcome', tag: 'VIP Welcome' },
  ];

  const faqs = [
    {
      q: 'How far in advance should I book 7Delights Turban Pagri Tying for my event?',
      a: 'To ensure maximum availability of our master Turban Pagri Tying artists and exclusive fabric rolls, we recommend booking at least 1 to 6 weeks in advance for social parties & corporate celebrations, and 3 to 6 months in advance for peak wedding seasons or large-scale corporate launches. However, if you have a last-minute requirement, reach out to us and we will do our best to accommodate!',
    },
    {
      q: 'How long does it take for your team to set up?',
      a: 'Setup times vary by group size and service. Our Turban Pagri Tying artists generally require about 1 hour prior to the event start to arrange fabrics, iron drapes if required, organize accessories, and establish an organized guest styling station.',
    },
    {
      q: 'Can you handle large Baraats with 100 to 500+ guests?',
      a: 'Yes, absolutely! We deploy dedicated teams of 2 to 10+ master safa tiers for large weddings and corporate conferences. Each artist can tie a crisp, stylish turban in just 60 to 90 seconds, ensuring your entire procession is dressed quickly without any bottlenecks.',
    },
    {
      q: 'Do you provide the turban cloths and accessories, or does the client provide them?',
      a: 'We offer full-service packages! We can supply everything—including premium Kota doria fabrics, silk blends, Bandhani prints, and accessories like kalgis, brooches, and feather plumes. If you already have your own custom fabric, our master artists can also be booked strictly for on-site live tying services.',
    },
    {
      q: 'Are the turbans comfortable to wear during dancing and warm weather?',
      a: 'Yes! Our artists use breathable, lightweight fabrics and traditional folding techniques that avoid tight pinch points while keeping the safa completely secure during energetic Baraat dancing.',
    },
    {
      q: 'What is your payment policy?',
      a: 'To secure your date, artists, and fabrics, we require an advance payment upon booking confirmation. The remaining balance is structured into milestones leading up to or on the day of the event.',
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
            <span className="text-[#111A2E] font-medium">Turban / Pagri Tying</span>
          </div>
          <div className="flex items-center space-x-2 text-[#D97706] font-medium bg-[#FFF3DF] px-2.5 py-1 rounded-full text-xs">
            <Crown className="w-3.5 h-3.5 text-[#D97706]" />
            <span>Royal Welcome Available in Bangalore</span>
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
                <span>Royal Heritage • Grand Indian Celebrations</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#111A2E] leading-tight tracking-tight">
                Turban &amp; Pagri Tying Organisers <br className="hidden sm:inline" />
                <span className="text-[#D97706]">for Events in Bangalore</span>
              </h1>

              <p className="text-base sm:text-lg text-[#5A6E85] leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Add an aura of elegance, tradition, and regal flair to your celebrations with 7Delights' Professional Turban Tying (Paghadi / Safa) Services! In Indian heritage, the turban represents honor, respect, and grandeur. Our master turban artists bring this timeless art to life for your groom, family, Baraat, and corporate VIPs across Bengaluru.
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
                  <Users className="w-4 h-4 text-[#EE3775] shrink-0" />
                  <div className="text-left">
                    <div className="text-[11px] text-[#5A6E85] uppercase tracking-wider font-semibold">Capacity</div>
                    <div className="text-xs font-bold text-[#111A2E]">Up to 500+ Guests</div>
                  </div>
                </div>

                <div className="flex items-center gap-2 p-2.5 rounded-xl bg-white border border-[#F2ECE4] shadow-sm col-span-2 sm:col-span-1">
                  <MapPin className="w-4 h-4 text-[#059669] shrink-0" />
                  <div className="text-left">
                    <div className="text-[11px] text-[#5A6E85] uppercase tracking-wider font-semibold">Service Area</div>
                    <div className="text-xs font-bold text-[#111A2E]">All Bengaluru</div>
                  </div>
                </div>
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
                <a
                  href="https://wa.me/919980029977?text=Hi%207Delights,%20I%20would%20like%20to%20inquire%20about%20booking%20Turban%20and%20Pagri%20Tying%20artists%20for%20our%20event."
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
                  <CheckCircle className="w-3.5 h-3.5 text-[#059669]" /> Fast 60s Per Head
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle className="w-3.5 h-3.5 text-[#059669]" /> Premium Silk &amp; Kota Fabrics
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle className="w-3.5 h-3.5 text-[#059669]" /> Kalgis &amp; Pearls Included
                </span>
              </div>
            </div>

            {/* Right Column: Hero Visual Showcase */}
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-md lg:max-w-none">
                <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-white">
                  <img
                    src="/assets/turban-banner.webp"
                    alt="Turban Pagri Tying in Bangalore"
                    className="w-full h-[320px] sm:h-[380px] object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/25 to-transparent flex flex-col justify-end p-6 text-white">
                    <span className="inline-block px-3 py-1 rounded-full bg-[#D97706] text-white text-xs font-semibold w-max mb-2">
                      Live Guest &amp; Groom Styling
                    </span>
                    <h3 className="text-xl font-bold">Royal Rajasthani &amp; Punjabi Safas</h3>
                    <p className="text-xs text-white/90 mt-1">Make every guest feel like an honored Maharaja at your wedding or gala.</p>
                  </div>
                </div>

                {/* Floating Highlight Card */}
                <div className="absolute -bottom-6 -left-4 sm:-left-6 bg-white p-3.5 sm:p-4 rounded-2xl shadow-xl border border-[#F2ECE4] flex items-center gap-3">
                  <div className="w-11 h-11 rounded-xl bg-[#FFF3DF] flex items-center justify-center text-[#D97706] font-bold">
                    <Crown className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-[#111A2E]">Groom Royal Safa</div>
                    <div className="text-[11px] text-[#5A6E85]">Zardozi, Kalgi &amp; Pearls</div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Regional Styles Section */}
      <section className="py-16 bg-white border-y border-[#F2ECE4]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FFF3DF] text-xs font-semibold text-[#D97706] mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Authentic Cultural Drapes</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#111A2E]">
              Diverse Regional Styles for Every Tradition
            </h2>
            <p className="text-sm sm:text-base text-[#5A6E85] mt-3">
              Turban tying is far more than wrapping cloth—it’s an art form tailored to your regional community and theme.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {styles.map((st, i) => (
              <div 
                key={i} 
                className="bg-[#FFFDF9] p-6 rounded-2xl border border-[#F2ECE4] shadow-sm hover:shadow-md transition-shadow group flex flex-col justify-between"
              >
                <div>
                  <div className="inline-block px-3 py-1 rounded-full text-xs font-bold mb-4 border border-transparent shadow-xs">
                    <span className={`px-2.5 py-0.5 rounded-full ${st.color}`}>
                      {st.tag}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-[#111A2E] mb-2">{st.title}</h3>
                  <p className="text-xs sm:text-sm text-[#5A6E85] leading-relaxed">{st.desc}</p>
                </div>
                <div className="mt-4 pt-3 border-t border-[#F2ECE4] flex items-center gap-1.5 text-[11px] text-[#D97706] font-semibold">
                  <span>Custom Color Coordinated</span>
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
            <span>Watch Live Master Artists</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#111A2E] mb-3">
            Watch Our Turban Tying in Action
          </h2>
          <p className="text-sm sm:text-base text-[#5A6E85] max-w-2xl mx-auto mb-8">
            See the quick precision, vibrant fabric folds, and proud smiles as guests get styled live at Bangalore celebrations.
          </p>

          <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-black aspect-video max-w-3xl mx-auto">
            <iframe
              src="https://www.youtube.com/embed/PVc3LEFvuw0?rel=0"
              title="7Delights Turban Pagri Tying Demonstration Video"
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
              Why Choose 7Delights for Turban &amp; Safa Tying?
            </h2>
            <p className="text-sm sm:text-base text-[#5A6E85] mt-3">
              Flawless logistics, courteous master artists, breathable luxury fabrics, and lightning-fast execution for your big day.
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

          {/* Perfect For Regal Occasions */}
          <div className="mt-12 bg-gradient-to-r from-[#FFF9F0] via-white to-[#FFE8ED] rounded-3xl p-6 sm:p-8 border border-[#F2ECE4] shadow-sm">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
              <div className="lg:col-span-4">
                <span className="text-xs font-bold uppercase tracking-wider text-[#D97706]">Perfect Setting</span>
                <h3 className="text-xl sm:text-2xl font-black text-[#111A2E] mt-1">Perfect for Every Regal Occasion</h3>
                <p className="text-xs sm:text-sm text-[#5A6E85] mt-2">
                  Elevate guest hospitality and bring royal ceremonial respect to weddings, festivals, and high-profile corporate galas.
                </p>
              </div>
              <div className="lg:col-span-8 grid grid-cols-2 sm:grid-cols-3 gap-3">
                {[
                  { name: 'Weddings & Baraats', desc: 'Groom & family royal styling' },
                  { name: 'Sangeets & Cultural Nights', desc: 'Gets all guests in festive mood' },
                  { name: 'Corporate Theme Parties', desc: 'Authentic Indian heritage theme' },
                  { name: 'VIP & Dignitary Welcomes', desc: 'Ceremonial sign of high respect' },
                  { name: 'College Fests & Carnivals', desc: 'Fun cultural photo booths' },
                  { name: 'Grand Inaugurations', desc: 'Traditional royal hospitality' },
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
              Moments from Our Turban Tying Stalls
            </h2>
            <p className="text-sm sm:text-base text-[#5A6E85] mt-2">
              Browse through our authentic royal drapes, groom safas, and vibrant live counters across Bangalore venues.
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
                  <h4 className="text-sm font-bold text-[#111A2E]">{img.title}</h4>
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
              Everything you need to know about booking our Turban &amp; Safa Tying artists in Bangalore.
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
              <div className="text-base font-bold text-[#111A2E]">Have custom Baraat requirements?</div>
              <div className="text-xs text-[#5A6E85] mt-0.5">Contact our Bangalore event planners for custom bulk packages.</div>
            </div>
            <div className="flex gap-3">
              <a
                href="tel:+919980029977"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#EE3775] text-white text-xs font-bold hover:bg-[#D92C67] transition-all"
              >
                <Phone className="w-3.5 h-3.5" /> Call Now
              </a>
              <a
                href="https://wa.me/919980029977?text=Hi%207Delights,%20I%20have%20questions%20regarding%20Turban%20and%20Safa%20Tying%20services%20in%20Bangalore."
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

