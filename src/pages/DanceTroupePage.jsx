import React, { useState } from 'react';
import { 
  Music, 
  MapPin, 
  Phone, 
  MessageCircle, 
  ShieldCheck, 
  Sparkles, 
  CheckCircle, 
  HelpCircle, 
  ChevronDown, 
  ChevronRight,
  Flame,
  Award, 
  Star, 
  Users, 
  Drum,
  HeartHandshake,
  Search,
  Filter
} from 'lucide-react';

export default function DanceTroupePage() {
  const [openFaq, setOpenFaq] = useState(null);
  const [activeTab, setActiveTab] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const categories = [
    { id: 'all', label: 'All Entertainment' },
    { id: 'dance', label: 'Dance Troupes' },
    { id: 'folk', label: 'Folk & Traditional' },
    { id: 'dhol', label: 'Live Drums & Dhol' }
  ];

  // 6 authentic entertainment cards from https://www.7delights.in/dance-troup/
  const danceCards = [
    {
      id: 1,
      title: 'Dance Troupe',
      slug: '#dance-troup/dance-troupe',
      category: 'dance',
      image: '/assets/dance-troupe-card.webp',
      tag: 'Bollywood & Western',
      badgeBg: 'bg-[#FFE8ED] text-[#EE3775] border-[#FFD0DB]',
      desc: 'Every member of our dance troupe brings electrifying choreography, thematic costumes, and high-energy synchrony for corporate galas and wedding sangeets.'
    },
    {
      id: 2,
      title: 'Dhandiya Troupe',
      slug: '#dance-troup/dandiya-dance',
      category: 'dance',
      image: '/assets/dandiya-troupe-card.webp',
      tag: 'Festive Garba',
      badgeBg: 'bg-[#FFF3DF] text-[#D97706] border-[#FFE4B8]',
      desc: 'The deft movements and synchronized stick beats of our authentic Gujarati Dhandiya troupe will keep your guests twirling and elated all evening.'
    },
    {
      id: 3,
      title: 'Dollu Kunitha',
      slug: '#dance-troup/dollu-kunitha',
      category: 'folk',
      image: '/assets/dollu-kunitha-card.webp',
      tag: 'Karnataka Heritage',
      badgeBg: 'bg-[#F2EDFF] text-[#7B61FF] border-[#E0D5FF]',
      desc: 'Dancing with the grand drums of Karnataka creates an authentic, soul-stirring cultural atmosphere! You will enjoy every thunderous beat and acrobatic leap.'
    },
    {
      id: 4,
      title: 'Punjabi Dhol',
      slug: '#dance-troup/punjabi-dhol',
      category: 'dhol',
      image: '/assets/punjabi-dhol-card.webp',
      tag: 'High-Octane Dhol',
      badgeBg: 'bg-[#E3F8F2] text-[#059669] border-[#C1F1E1]',
      desc: 'Give your guests the irresistible urge to dance with authentic Punjabi Dhol players driving high-tempo Bhangra beats for grand VIP entries and baraats.'
    },
    {
      id: 5,
      title: 'Chenda Melam',
      slug: '#dance-troup/kerala-chenda-melam',
      category: 'folk',
      image: '/assets/chenda-melam-card.webp',
      tag: 'Kerala Temple Beats',
      badgeBg: 'bg-[#FFE8ED] text-[#EE3775] border-[#FFD0DB]',
      desc: 'Dancing with the sacred cylindrical Chenda drums of Kerala produces a majestic, rhythmic cascade of traditional temple beats that commands celebration.'
    },
    {
      id: 6,
      title: 'Flash Mob',
      slug: '#dance-troup/flash-mob-dance',
      category: 'dance',
      image: '/assets/flash-mob-card.webp',
      tag: 'Surprise Activation',
      badgeBg: 'bg-[#FFF3DF] text-[#D97706] border-[#FFE4B8]',
      desc: 'Every unexpected movement of our Flash Mob dancers turns corporate cafeterias, mall atriums, and public squares into an electrifying party!'
    }
  ];

  const highlights = [
    {
      title: 'Trained & Certified Performers',
      desc: 'Experienced professional dancers and traditional artists dedicated to flawless choreography and vibrant stage showmanship.'
    },
    {
      title: 'Customizable Concepts',
      desc: 'From corporate brand theme choreography and retro Bollywood to classical Kathak, fusion Garba, and folk art forms.'
    },
    {
      title: 'Costumes & Grand Props',
      desc: 'Lavish traditional attire, authentic instruments, LED wings, and synchronized visual props that enhance the party ambiance.'
    },
    {
      title: 'Punctual & Disciplined',
      desc: 'Our troupes arrive well in advance for technical sound checks, green room preparation, and stage alignment.'
    }
  ];

  const faqs = [
    {
      q: 'How far in advance should I book 7Delights dance troupe for my event?',
      a: 'To ensure maximum availability of our dance troupe artists, lead choreographers, and traditional folk troupes (like Dollu Kunitha or Punjabi Dhol), we recommend booking at least 1 to 6 weeks in advance for social celebrations & corporate galas, and 3 to 6 months in advance for major weddings or festival seasons. Last-minute requests are accommodated based on troupe schedules.'
    },
    {
      q: 'How long does each dance performance or live drumming set last?',
      a: 'Standard stage dance routines feature 2 to 4 energetic sets (typically 8 to 15 minutes each) with costume changes across the evening. Live percussion troupes (Punjabi Dhol, Chenda Melam, Dollu Kunitha) generally perform for 45 to 90 minutes during grand entries, welcomes, and dance floor peaks.'
    },
    {
      q: 'Can the dance troupe customize song selections and choreography for our theme?',
      a: 'Yes! We frequently choreograph custom routines tailored to corporate product reveals, wedding couple entrance medley tracks, retro eras, or regional folk themes. Please share your song preferences at least 7 to 10 days prior to the event.'
    },
    {
      q: 'What green room and technical provisions are required at the venue?',
      a: 'The venue must provide a clean, secure green room / changing area with mirrors and drinking water for the artists, along with a sound system (PA system and AUX/Bluetooth connectivity for dance tracks). We can also provide sound and stage systems if required.'
    },
    {
      q: 'What is your payment policy?',
      a: 'To secure your date and artist line-up, an advance payment is required upon signing the agreement. The remaining balance is completed in milestones leading up to or on the day of the performance.'
    }
  ];

  const filteredCards = danceCards.filter((card) => {
    const matchesTab = activeTab === 'all' || card.category === activeTab;
    const matchesSearch = 
      card.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      card.desc.toLowerCase().includes(searchQuery.toLowerCase()) ||
      card.tag.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesTab && matchesSearch;
  });

  return (
    <div className="bg-[#FFFDF9] min-h-screen">
      {/* 1. HERO SECTION */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#FFF5F7] via-[#FFFDF9] to-[#FFFDF9] pt-12 pb-14 md:pt-16 md:pb-18 border-b border-[#F5E6EC]">
        {/* Decorative blur glows */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#FFE8ED]/40 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#FFF3DF]/50 rounded-full blur-3xl pointer-events-none -ml-20 -mb-20"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FFE8ED] border border-[#FFD0DB] text-[#EE3775] text-xs md:text-sm font-semibold tracking-wide">
              <Sparkles className="w-4 h-4" />
              <span>Bangalore's Premier Live Entertainment &amp; Dance Troupe Partner</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#111A2E] tracking-tight leading-tight">
              Dance Troupe &amp; Live Music in <br />
              <span className="text-[#EE3775] relative inline-block">
                Bangalore • 7Delights
              </span>
            </h1>

            <p className="text-base sm:text-lg text-[#5A6E85] leading-relaxed pt-2">
              Electrify your celebrations with Bangalore's finest performers! From high-octane Bollywood &amp; Western dance troupes and flash mobs to soul-stirring cultural rhythms like Dollu Kunitha, Punjabi Dhol, Dandiya, and Kerala Chenda Melam.
            </p>

            {/* Quick Stats Pill Row */}
            <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
              <div className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white border border-[#F5E6EC] shadow-sm text-xs sm:text-sm text-[#111A2E] font-medium">
                <MapPin className="w-4 h-4 text-[#EE3775]" />
                <span>Pan-Bangalore &amp; Outstation</span>
              </div>
              <div className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white border border-[#F5E6EC] shadow-sm text-xs sm:text-sm text-[#111A2E] font-medium">
                <Music className="w-4 h-4 text-[#059669]" />
                <span>Trained Dancers &amp; Live Percussionists</span>
              </div>
              <div className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white border border-[#F5E6EC] shadow-sm text-xs sm:text-sm text-[#111A2E] font-medium">
                <Star className="w-4 h-4 text-[#D97706] fill-[#D97706]" />
                <span>500+ High-Energy Stage Shows</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <a
                href="tel:+919980029977"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-[#EE3775] hover:bg-[#D82A64] text-white font-bold text-base shadow-lg shadow-[#EE3775]/25 transition-all transform hover:-translate-y-0.5"
              >
                <Phone className="w-4 h-4" />
                <span>Call +91 99800 29977</span>
              </a>
              <a
                href="https://wa.me/919980029977?text=Hi%207Delights,%20I%20am%20looking%20to%20book%20a%20Dance%20Troupe%20/%20Live%20Dhol%20for%20our%20upcoming%20event."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-white hover:bg-gray-50 text-[#111A2E] font-bold text-base border border-[#F5E6EC] shadow-sm transition-all"
              >
                <MessageCircle className="w-4 h-4 text-[#25D366]" />
                <span>WhatsApp Booking</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 2. FILTER & SEARCH CONTROLS */}
      <section className="py-8 bg-white border-b border-[#F5E6EC] sticky top-16 z-30 shadow-sm backdrop-blur-md bg-white/95">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Category Pills */}
            <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-none">
              <Filter className="w-4 h-4 text-[#5A6E85] shrink-0 mr-1 hidden sm:block" />
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveTab(cat.id)}
                  className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all whitespace-nowrap ${
                    activeTab === cat.id
                      ? 'bg-[#EE3775] text-white shadow-md shadow-[#EE3775]/20'
                      : 'bg-[#FFFDF9] text-[#5A6E85] hover:bg-[#FFE8ED] hover:text-[#EE3775] border border-[#F5E6EC]'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>

            {/* Search Input */}
            <div className="relative w-full md:w-72">
              <Search className="w-4 h-4 text-[#5A6E85] absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search dance or music..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-4 py-2 text-xs sm:text-sm rounded-full bg-[#FFFDF9] border border-[#F5E6EC] text-[#111A2E] placeholder-[#5A6E85] focus:outline-none focus:border-[#EE3775] transition-colors"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 3. DANCE & MUSIC CARDS GRID */}
      <section className="py-14 md:py-18 bg-[#FFFDF9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#111A2E]">
              Explore Our Dance Troupes &amp; Musical Acts
            </h2>
            <p className="text-xs sm:text-sm text-[#5A6E85] mt-2">
              Showing {filteredCards.length} authentic performance acts curated for corporate celebrations, grand weddings, and festivals.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {filteredCards.map((card) => (
              <div
                key={card.id}
                className="group bg-white rounded-2xl overflow-hidden border border-[#F5E6EC] shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between transform hover:-translate-y-1"
              >
                <div>
                  {/* Image container */}
                  <div className="relative aspect-[4/3] overflow-hidden bg-gray-100">
                    <img
                      src={card.image}
                      alt={card.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 left-3">
                      <span className={`inline-block px-2.5 py-1 rounded-full text-xs font-bold border backdrop-blur-md ${card.badgeBg}`}>
                        {card.tag}
                      </span>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-5">
                    <h3 className="text-lg font-bold text-[#111A2E] group-hover:text-[#EE3775] transition-colors mb-2">
                      {card.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#5A6E85] line-clamp-3 leading-relaxed">
                      {card.desc}
                    </p>
                  </div>
                </div>

                {/* Card Action Buttons */}
                <div className="p-5 pt-0 border-t border-[#F5E6EC]/60 space-y-2.5 mt-2">
                  <a
                    href={card.slug}
                    className="w-full flex items-center justify-center gap-1.5 py-2.5 rounded-xl bg-[#FFE8ED] hover:bg-[#EE3775] text-[#EE3775] hover:text-white font-semibold text-xs sm:text-sm transition-all"
                  >
                    <span>View {card.title}</span>
                    <ChevronRight className="w-4 h-4" />
                  </a>
                  <a
                    href="tel:+919980029977"
                    className="w-full flex items-center justify-center gap-1.5 py-2 rounded-xl bg-white hover:bg-gray-50 border border-[#F5E6EC] text-[#111A2E] text-xs font-semibold transition-all"
                  >
                    <Phone className="w-3.5 h-3.5 text-[#059669]" />
                    <span>Book Now</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. ABOUT DANCE TROUPE SPECIALTY */}
      <section id="dance-overview" className="py-14 md:py-20 bg-white border-t border-b border-[#F5E6EC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Visual Column */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
                <img
                  src="/assets/dancer-showcase.webp"
                  alt="Dancer Performance by 7Delights"
                  className="w-full h-[400px] object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-2xl shadow-xl border border-[#F5E6EC] hidden sm:flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-[#FFE8ED] flex items-center justify-center text-[#EE3775]">
                  <Flame className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs text-[#5A6E85] font-medium">Stage Atmosphere</div>
                  <div className="text-sm font-bold text-[#111A2E]">100% Crowd Ignition</div>
                </div>
              </div>
            </div>

            {/* Description Details */}
            <div className="lg:col-span-7 space-y-5">
              <span className="text-xs uppercase tracking-wider font-bold text-[#EE3775] bg-[#FFE8ED] px-3 py-1 rounded-md">
                Dance Troupe &amp; Music — A 7DELIGHTS Specialty!
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#111A2E] leading-snug">
                Set The Party Mood with Captivating Dances &amp; Resonating Beats
              </h2>
              <p className="text-base text-[#5A6E85] leading-relaxed">
                Right from our inception, <strong>7DELIGHTS</strong> has established itself as a premier provider of live performance entertainment across Bengaluru. We have a roster of trained, enthusiastic, and versatile artists who come together to turn events into unforgettable visual festivals.
              </p>
              <p className="text-base text-[#5A6E85] leading-relaxed">
                Whether you need high-octane Bollywood hits to get corporate executives grooving, a surprise flash mob at your product launch, or thunderous traditional percussion like Punjabi Dhol, Dollu Kunitha, and Kerala Chenda Melam — our team handles choreography, costumes, and music synchronization seamlessly!
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {highlights.map((h, i) => (
                  <div key={i} className="flex items-start gap-2.5 p-3 rounded-lg bg-[#FFFDF9] border border-[#F5E6EC]">
                    <CheckCircle className="w-5 h-5 text-[#059669] shrink-0 mt-0.5" />
                    <div>
                      <span className="text-xs sm:text-sm text-[#111A2E] font-bold block">{h.title}</span>
                      <span className="text-xs text-[#5A6E85]">{h.desc}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. FAQS */}
      <section className="py-14 md:py-18 bg-[#FFFDF9]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <span className="text-xs uppercase tracking-wider font-bold text-[#EE3775] bg-[#FFE8ED] px-3 py-1 rounded-md">
              Got Questions?
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#111A2E] mt-3">
              Dance Troupe &amp; Live Music FAQ
            </h2>
            <p className="text-xs sm:text-sm text-[#5A6E85] mt-1">
              Common questions on troupe booking, durations, set lengths, and requirements.
            </p>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="border border-[#F5E6EC] rounded-2xl overflow-hidden bg-white shadow-sm transition-all"
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full px-5 py-4 text-left flex items-center justify-between gap-4 hover:bg-[#FFF8FA] transition-colors"
                >
                  <span className="text-sm font-bold text-[#111A2E]">{faq.q}</span>
                  <ChevronDown
                    className={`w-4 h-4 text-[#EE3775] shrink-0 transition-transform duration-300 ${
                      openFaq === idx ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {openFaq === idx && (
                  <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-[#5A6E85] leading-relaxed border-t border-[#F5E6EC] bg-[#FFFDF9]">
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

