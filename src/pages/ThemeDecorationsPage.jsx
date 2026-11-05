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
  Palette, 
  Award, 
  Star, 
  Users, 
  Trophy, 
  Layers,
  Heart,
  Crown,
  Camera,
  PartyPopper
} from 'lucide-react';

export default function ThemeDecorationsPage() {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const popularThemes = [
    {
      title: 'Cocomelon & Cartoon Musical',
      desc: 'Bright pastel arch backdrops, giant 3D character cutouts, illuminated marquee letters, and customized rainbow balloon arches.',
      tag: 'Toddlers Favorite',
      color: 'bg-[#FFE8ED] text-[#EE3775] border-[#FFD0DB]',
      image: '/assets/cocomelon-theme-decor.webp'
    },
    {
      title: 'Enchanted Butterfly Garden',
      desc: 'Whimsical floral installations, organic pastel pink & lavender balloon garlands, gold shimmer walls, and illuminated butterfly wings.',
      tag: 'Girls Fairytale',
      color: 'bg-[#FFF3DF] text-[#D97706] border-[#FFE4B8]',
      image: '/assets/butterfly-theme-decor.webp'
    },
    {
      title: 'Lightning McQueen & Racing Track',
      desc: 'Action-packed checkered flags, tire props, podium backdrops, and vibrant red, yellow & black balloon clusters for race car enthusiasts.',
      tag: 'Boys Favorite',
      color: 'bg-[#F2EDFF] text-[#7B61FF] border-[#E0D5FF]',
      image: '/assets/lightning-mcqueen-decor.webp'
    },
    {
      title: 'Football & Sports Arena',
      desc: 'Lush green turf carpets, soccer goalpost backdrops, monochrome black & white football balloon clusters, and team trophy pedestals.',
      tag: 'Sports Champion',
      color: 'bg-[#E3F8F2] text-[#059669] border-[#C1F1E1]',
      image: '/assets/football-theme-decor.webp'
    },
  ];

  const features = [
    {
      title: '100% Customized Theme Concepts',
      desc: 'From Disney Princess and Superhero marvels to Boss Baby, Space Galaxy, and Vintage Boho, we tailor colors and props to your exact vision.',
      icon: <Palette className="w-6 h-6 text-[#EE3775]" />,
    },
    {
      title: 'Stunning Photo-Op Backdrops',
      desc: 'High-density sequin shimmer walls, acrylic round ring arches, personalized LED neon name signboards, and grand entrance portals.',
      icon: <Camera className="w-6 h-6 text-[#7B61FF]" />,
    },
    {
      title: '3D Life-Size Character Cutouts',
      desc: 'High-definition foam boards and fiberglass pedestals bringing beloved cartoon and superhero idols directly into the party room.',
      icon: <Crown className="w-6 h-6 text-[#059669]" />,
    },
    {
      title: 'Premium Organic Balloon Garlands',
      desc: 'Multi-sized matte, chrome metallic, and confetti latex balloons arranged into lush cascading organic arches with floral and foil accents.',
      icon: <PartyPopper className="w-6 h-6 text-[#D97706]" />,
    },
    {
      title: 'Punctual Setup & Silent Teardown',
      desc: 'Our logistics team arrives 2 to 4 hours in advance to install, align lighting, and complete safety checks, leaving zero venue clutter afterwards.',
      icon: <Clock className="w-6 h-6 text-[#3B82F6]" />,
    },
    {
      title: 'Tailored for Intimate & Grand Venues',
      desc: 'Whether decorating a cozy home living room, clubhouse terrace, outdoor resort lawn, or 5-star hotel ballroom across Bangalore.',
      icon: <Layers className="w-6 h-6 text-[#EC4899]" />,
    },
  ];

  const faqs = [
    {
      q: 'How far in advance should I book 7Delights theme decoration for my event?',
      a: 'To ensure maximum availability of specific themes decoration & equipment, we recommend booking at least 1 to 6 weeks in advance for social parties & corporate events, and 3 to 6 months in advance for major weddings or large-scale corporate launches. However, if you have a last-minute request, contact us & we will do our best to make it happen!'
    },
    {
      q: 'How long does it take for your team to set up?',
      a: 'Setup times vary by service. Simple balloon decorations or a single interactive stall may take 1 to 2 hours. Complex thematic stage setups, intricate lighting riggings, or heavy SFX installations can take anywhere from 4 to 12 hours. We always coordinate directly with the venue to ensure everything is flawlessly set up well before your first guest arrives.'
    },
    {
      q: 'What is your payment policy?',
      a: 'To secure your date, artists, and materials, we require an advance payment upon signing the contract. The remaining balance is structured into milestones leading up to, or on the day of the event.'
    },
    {
      q: 'Can you create custom themes not listed in your catalog?',
      a: 'Yes, absolutely! We love custom themes. You can share reference photos or moodboards from Pinterest/Instagram, and our creative design artists will manufacture personalized backdrops and color schemes.'
    },
    {
      q: 'Are personalized LED neon name signboards included?',
      a: 'Yes! Our deluxe and premium theme packages can include custom neon name signs (e.g. "Happy 1st Birthday Kanvika" or "Vyomika is One") and customized cake table pedestals.'
    }
  ];

  const galleryImages = [
    {
      src: '/assets/theme-decorations-main.webp',
      title: 'Grand Shimmer Wall Setup',
      desc: 'Custom Cocomelon birthday theme with illuminated marquee letters'
    },
    {
      src: '/assets/cocomelon-theme-decor.webp',
      title: 'Cocomelon Theme Stage',
      desc: 'Rainbow balloon arch and personalized photo backdrop'
    },
    {
      src: '/assets/butterfly-theme-decor.webp',
      title: 'Enchanted Butterfly Garden',
      desc: 'Pastel balloon cascade with floral elements and shimmer panels'
    },
    {
      src: '/assets/lightning-mcqueen-decor.webp',
      title: 'Lightning McQueen Cars Theme',
      desc: 'High-octane racetrack arch with flags and character pedestals'
    }
  ];

  return (
    <div className="bg-[#FFFDF9] min-h-screen">
      {/* 1. HERO BANNER */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#FFF5F7] via-[#FFFDF9] to-[#FFFDF9] pt-12 pb-16 md:pt-16 md:pb-20 border-b border-[#F5E6EC]">
        {/* Decorative background shapes */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#FFE8ED]/40 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#FFF3DF]/50 rounded-full blur-3xl pointer-events-none -ml-20 -mb-20"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Breadcrumb */}
          <nav className="flex items-center space-x-2 text-xs md:text-sm text-[#5A6E85] mb-6 font-medium">
            <a href="#home" className="hover:text-[#EE3775] transition-colors">Home</a>
            <span>/</span>
            <a href="#birthday-balloon-decorations" className="hover:text-[#EE3775] transition-colors">Balloon Decorations</a>
            <span>/</span>
            <span className="text-[#111A2E] font-semibold">Theme Decorations</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            {/* Left Content Column */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FFE8ED] border border-[#FFD0DB] text-[#EE3775] text-xs md:text-sm font-semibold tracking-wide">
                <Palette className="w-4 h-4" />
                <span>Bespoke Concept Styling &amp; 3D Stage Decors</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#111A2E] tracking-tight leading-tight">
                Theme Decorations Organizers for <span className="text-[#EE3775]">Events in Bangalore</span>
              </h1>

              <p className="text-base sm:text-lg text-[#5A6E85] leading-relaxed">
                Make their day truly magical! Dreaming of the perfect birthday celebration? Let 7Delights bring your vision to life with our spectacular range of personalized theme decorations—from enchanting fairytale wonderlands to superhero adventures and sports stadiums!
              </p>

              {/* Key Highlights Pill Row */}
              <div className="flex flex-wrap gap-3 pt-2">
                <div className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white border border-[#F5E6EC] shadow-sm text-xs sm:text-sm text-[#111A2E] font-medium">
                  <Clock className="w-4 h-4 text-[#EE3775]" />
                  <span>Duration: <strong>3 Hours Active</strong></span>
                </div>
                <div className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white border border-[#F5E6EC] shadow-sm text-xs sm:text-sm text-[#111A2E] font-medium">
                  <MapPin className="w-4 h-4 text-[#059669]" />
                  <span>Available Across <strong>All Bangalore</strong></span>
                </div>
                <div className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white border border-[#F5E6EC] shadow-sm text-xs sm:text-sm text-[#111A2E] font-medium">
                  <Palette className="w-4 h-4 text-[#7B61FF]" />
                  <span>Includes <strong>3D Props &amp; Neon Signs</strong></span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-4">
                <a
                  href="tel:+919980029977"
                  className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-[#EE3775] text-white font-semibold text-sm sm:text-base shadow-lg shadow-[#EE3775]/25 hover:bg-[#D92C65] transition-all transform hover:-translate-y-0.5"
                >
                  <Phone className="w-4 h-4" />
                  <span>Call +91 99800 29977</span>
                </a>
                <a
                  href="https://wa.me/919980029977?text=Hi%207Delights,%20I'm%20interested%20in%20Theme%20Decoration%20services%20for%20my%20event."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-[#25D366] text-white font-semibold text-sm sm:text-base shadow-lg shadow-[#25D366]/25 hover:bg-[#20BA5A] transition-all transform hover:-translate-y-0.5"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>WhatsApp Inquiry</span>
                </a>
              </div>
            </div>

            {/* Right Media Banner */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white aspect-[4/3] group">
                <img
                  src="/assets/theme-decorations-banner.webp"
                  alt="Theme Decorations for Events in Bangalore"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  onError={(e) => {
                    e.currentTarget.src = '/assets/theme-decorations-main.webp';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#111A2E]/70 via-transparent to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#EE3775] text-xs font-bold uppercase tracking-wider mb-1">
                    Bespoke Theme
                  </div>
                  <p className="text-sm font-medium text-white/95">
                    Gold Shimmer Backdrops, 3D Cutouts &amp; Neon Signboards
                  </p>
                </div>
              </div>

              {/* Float Badge */}
              <div className="absolute -bottom-5 -left-5 bg-white p-3.5 rounded-xl shadow-xl border border-[#F5E6EC] hidden sm:flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-[#FFE8ED] flex items-center justify-center text-[#EE3775]">
                  <Crown className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-[#5A6E85] font-medium">Fairy-Tale Setups</div>
                  <div className="text-sm font-bold text-[#111A2E]">100% Customization</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. ABOUT THEME DECORATIONS */}
      <section className="py-14 md:py-18 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Image display */}
            <div className="lg:col-span-5">
              <div className="relative rounded-2xl overflow-hidden shadow-lg border border-[#F5E6EC]">
                <img
                  src="/assets/theme-decorations-main.webp"
                  alt="Theme Decoration Setup by 7Delights Bangalore"
                  className="w-full h-auto object-cover"
                />
                <div className="p-4 bg-[#FFFDF9] border-t border-[#F5E6EC]">
                  <div className="flex items-center justify-between text-xs sm:text-sm">
                    <span className="font-semibold text-[#111A2E]">Thematic Experience Duration:</span>
                    <span className="font-bold text-[#EE3775]">3 Hours Active (₹0 Base Quote)</span>
                  </div>
                  <p className="text-xs text-[#5A6E85] mt-1">
                    *(Attracts charges for extra hours). Customized to venue layout &amp; guest capacity.
                  </p>
                </div>
              </div>
            </div>

            {/* Content Details */}
            <div className="lg:col-span-7 space-y-5">
              <div className="inline-block text-xs uppercase tracking-wider font-bold text-[#EE3775] bg-[#FFE8ED] px-3 py-1 rounded-md">
                Your Imagination, Our Creation
              </div>

              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#111A2E] leading-snug">
                Immersive Party Environments That Make the Birthday Star Shine
              </h2>

              <p className="text-base text-[#5A6E85] leading-relaxed">
                No matter the age or interest, we have a treasure trove of birthday themes to choose from, and we're always thrilled to craft unique concepts from scratch! We tailor every decoration package to your specific theme, venue size, and budget to ensure a cohesive, breathtaking aesthetic.
              </p>

              <p className="text-base text-[#5A6E85] leading-relaxed">
                From eye-catching photo backdrops with shimmer walls and balloon ring arches to coordinated table settings, character cutouts, and marquee lights, attention to detail is our superpower!
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-3">
                <div className="flex items-start gap-2.5 p-3 rounded-lg bg-[#FFFDF9] border border-[#F5E6EC]">
                  <CheckCircle className="w-5 h-5 text-[#059669] shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm text-[#111A2E] font-medium">Bespoke backdrops, balloon rings &amp; shimmer walls</span>
                </div>
                <div className="flex items-start gap-2.5 p-3 rounded-lg bg-[#FFFDF9] border border-[#F5E6EC]">
                  <CheckCircle className="w-5 h-5 text-[#059669] shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm text-[#111A2E] font-medium">Life-sized 3D cartoon, superhero &amp; animal cutouts</span>
                </div>
                <div className="flex items-start gap-2.5 p-3 rounded-lg bg-[#FFFDF9] border border-[#F5E6EC]">
                  <CheckCircle className="w-5 h-5 text-[#059669] shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm text-[#111A2E] font-medium">Personalized LED neon signs &amp; cake pedestals</span>
                </div>
                <div className="flex items-start gap-2.5 p-3 rounded-lg bg-[#FFFDF9] border border-[#F5E6EC]">
                  <CheckCircle className="w-5 h-5 text-[#059669] shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm text-[#111A2E] font-medium">Complete on-time setup &amp; tidy takedown included</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. POPULAR THEMES SELECTION */}
      <section className="py-14 md:py-18 bg-[#FFF8FA] border-y border-[#F5E6EC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs uppercase tracking-wider font-bold text-[#EE3775] bg-white px-3 py-1 rounded-md border border-[#F5E6EC]">
              Popular Birthday Themes
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#111A2E] mt-3">
              Most Requested Theme Decor Packages
            </h2>
            <p className="text-sm sm:text-base text-[#5A6E85] mt-2">
              Explore our best-loved themes or talk to our creative designers to invent your own custom wonderland!
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {popularThemes.map((theme, idx) => (
              <div 
                key={idx} 
                className="bg-white rounded-2xl overflow-hidden border border-[#F5E6EC] shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
              >
                <div>
                  <div className="aspect-[16/11] overflow-hidden bg-gray-100">
                    <img 
                      src={theme.image} 
                      alt={theme.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" 
                    />
                  </div>
                  <div className="p-5">
                    <span className={`inline-block text-xs font-bold px-2.5 py-1 rounded-full border mb-3 ${theme.color}`}>
                      {theme.tag}
                    </span>
                    <h3 className="text-lg font-bold text-[#111A2E] mb-2">{theme.title}</h3>
                    <p className="text-xs sm:text-sm text-[#5A6E85] leading-relaxed">{theme.desc}</p>
                  </div>
                </div>
                <div className="px-5 pb-5 pt-2 border-t border-[#F5E6EC] flex items-center justify-between text-xs font-semibold text-[#EE3775]">
                  <span>Customizable Backdrops &amp; Props</span>
                  <CheckCircle className="w-4 h-4" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. WHAT MAKES THEME DECORATIONS MORE ELEGANT */}
      <section className="py-14 md:py-18 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs uppercase tracking-wider font-bold text-[#EE3775] bg-[#FFE8ED] px-3 py-1 rounded-md">
              Specialties &amp; Craftsmanship
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#111A2E] mt-3">
              What Makes Theme Decorations More Elegant?
            </h2>
            <p className="text-sm sm:text-base text-[#5A6E85] mt-2">
              7Delights blends premium balloon garlands, architectural props, and lighting to craft magazine-worthy setups.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feat, idx) => (
              <div 
                key={idx}
                className="p-6 rounded-2xl bg-[#FFFDF9] border border-[#F5E6EC] hover:border-[#EE3775]/40 transition-all hover:shadow-sm"
              >
                <div className="w-12 h-12 rounded-xl bg-white shadow-sm border border-[#F5E6EC] flex items-center justify-center mb-4">
                  {feat.icon}
                </div>
                <h3 className="text-base sm:text-lg font-bold text-[#111A2E] mb-2">{feat.title}</h3>
                <p className="text-xs sm:text-sm text-[#5A6E85] leading-relaxed">{feat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. PHOTO GALLERY & VIDEO SECTION */}
      <section className="py-14 md:py-18 bg-[#FFF8FA] border-y border-[#F5E6EC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs uppercase tracking-wider font-bold text-[#EE3775] bg-white px-3 py-1 rounded-md border border-[#F5E6EC]">
              Gallery &amp; Demo
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#111A2E] mt-3">
              Theme Decorations Gallery
            </h2>
            <p className="text-sm sm:text-base text-[#5A6E85] mt-2">
              Browse authentic photographs of our custom theme decorations executed across Bangalore.
            </p>
          </div>

          {/* Photo Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {galleryImages.map((img, idx) => (
              <div 
                key={idx}
                className="group relative rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow bg-white border border-[#F5E6EC]"
              >
                <div className="aspect-[4/3] overflow-hidden bg-gray-100">
                  <img
                    src={img.src}
                    alt={img.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    onError={(e) => {
                      e.currentTarget.src = '/assets/theme-decorations-main.webp';
                    }}
                  />
                </div>
                <div className="p-4 bg-white">
                  <h4 className="text-sm font-bold text-[#111A2E] mb-1">{img.title}</h4>
                  <p className="text-xs text-[#5A6E85]">{img.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Embedded Video Player */}
          <div className="max-w-3xl mx-auto bg-white p-4 sm:p-6 rounded-2xl border border-[#F5E6EC] shadow-md">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-[#FFE8ED] flex items-center justify-center text-[#EE3775]">
                  <Sparkles className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-sm sm:text-base font-bold text-[#111A2E]">Watch Theme Decoration Video</h3>
                  <p className="text-xs text-[#5A6E85]">See our craftsmen assembling intricate theme backdrops</p>
                </div>
              </div>
            </div>
            
            <div className="relative rounded-xl overflow-hidden aspect-video bg-black/5 shadow-inner">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/FzEVRYT18Vo?rel=0"
                title="Theme Decorations by 7Delights Bangalore"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* 6. FAQ SECTION */}
      <section className="py-14 md:py-18 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <span className="text-xs uppercase tracking-wider font-bold text-[#EE3775] bg-[#FFE8ED] px-3 py-1 rounded-md">
              Got Questions?
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#111A2E] mt-3">
              Frequently Asked Questions
            </h2>
            <p className="text-sm sm:text-base text-[#5A6E85] mt-2">
              Everything you need to know about customizing theme decorations for your celebration.
            </p>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="border border-[#F5E6EC] rounded-xl overflow-hidden bg-[#FFFDF9] transition-colors"
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full py-4 px-5 text-left flex items-center justify-between gap-4 focus:outline-none"
                >
                  <span className="text-sm sm:text-base font-bold text-[#111A2E] flex items-center gap-2">
                    <HelpCircle className="w-4 h-4 text-[#EE3775] shrink-0" />
                    {faq.q}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-[#5A6E85] transition-transform duration-200 shrink-0 ${
                      openFaq === idx ? 'transform rotate-180 text-[#EE3775]' : ''
                    }`}
                  />
                </button>
                {openFaq === idx && (
                  <div className="px-5 pb-4 pt-1 text-xs sm:text-sm text-[#5A6E85] leading-relaxed border-t border-[#F5E6EC]/60 bg-white">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. BOTTOM CALL TO ACTION STRIP */}
      <section className="bg-gradient-to-r from-[#111A2E] to-[#1C2B4B] text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
            <div>
              <h3 className="text-xl sm:text-2xl font-bold tracking-tight">
                Let's Create Birthday Magic Together!
              </h3>
              <p className="text-sm text-gray-300 mt-1 max-w-xl">
                Contact 7Delights today for a free design consultation and custom quotation tailored to your theme and venue.
              </p>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-3">
              <a
                href="tel:+919980029977"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-[#EE3775] hover:bg-[#D92C65] text-white font-semibold text-sm transition-all shadow-md"
              >
                <Phone className="w-4 h-4" />
                <span>+91 99800 29977</span>
              </a>
              <a
                href="https://wa.me/919980029977?text=Hi%207Delights,%20I'm%20planning%20a%20party%20and%20want%20to%20consult%20on%20Theme%20Decorations."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-[#25D366] hover:bg-[#20BA5A] text-white font-semibold text-sm transition-all shadow-md"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp Us</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

