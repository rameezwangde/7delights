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
  Theater,
  Music,
  Users,
  Smile,
  Zap,
  Star,
  Play
} from 'lucide-react';
import { GoldUnderline } from '../components/Doodles';

export default function PuppetShowPage() {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const puppetVarieties = [
    {
      title: 'Traditional String Marionettes (Kathputli)',
      desc: 'Expert puppeteers manipulate intricate wooden marionettes adorned with colorful traditional Rajasthani and folk attire, bringing timeless mythological and cultural fables alive.',
      tag: 'Classic Heritage',
      color: 'bg-[#FFE8ED] text-[#EE3775] border-[#FFD0DB]',
      image: '/assets/puppet.webp'
    },
    {
      title: 'Vibrant Glove & Hand Puppets',
      desc: 'High-energy glove puppet banter filled with playful dialogues, humor, animal characters, and cheerful comedy that keeps toddlers and early-graders laughing out loud.',
      tag: 'Kids Favorite',
      color: 'bg-[#EDF5FF] text-[#2563EB] border-[#D0E2FF]',
      image: '/assets/puppets.webp'
    },
    {
      title: 'Themed Folk & Moral Storytelling',
      desc: 'Moral-rich narratives and interactive storytelling tailored specifically to your party theme, birthday child, or school curriculum in a delightfully engaging format.',
      tag: 'Interactive Tales',
      color: 'bg-[#F2EDFF] text-[#7B61FF] border-[#E0D5FF]',
      image: '/assets/puppets-show.webp'
    },
    {
      title: 'Educational & Musical Interactive Sessions',
      desc: 'Lively puppetry infused with catchy tunes, rhyming sing-alongs, and audience participation sessions where children communicate directly with the puppet characters.',
      tag: 'Sing-Along Fun',
      color: 'bg-[#EBF7F2] text-[#00A86B] border-[#C8EFE0]',
      image: '/assets/kids-puppet-show.webp'
    }
  ];

  const highlights = [
    {
      icon: <Theater className="w-5 h-5 text-[#EE3775]" />,
      title: 'Decades of Puppetry Artistry',
      desc: 'We arrange top-performing puppeteers who have been practicing traditional and modern puppetry for decades, knowing the exact craft to keep audiences spellbound.'
    },
    {
      icon: <Sparkles className="w-5 h-5 text-[#7B61FF]" />,
      title: 'Customized Event Themes',
      desc: 'Whether it is a superhero birthday, jungle safari, festive pooja, naming ceremony, or school annual day, our shows are customized around your event theme.'
    },
    {
      icon: <Smile className="w-5 h-5 text-[#FF7A00]" />,
      title: 'Interactive Audience Engagement',
      desc: 'Children do not just watch from afar—they talk with puppets, answer riddles, sing rhymes, and actively participate in the storyline.'
    },
    {
      icon: <ShieldCheck className="w-5 h-5 text-[#00A86B]" />,
      title: 'Hassle-Free Complete Setup',
      desc: 'Our artists arrive with complete portable miniature puppet stages, backdrops, decorative lighting, and stage curtains, packing everything up neatly post-show.'
    }
  ];

  const galleryImages = [
    { src: '/assets/puppet-shows.webp', alt: 'Puppet Show Performance Bangalore', title: 'Traditional String Puppets' },
    { src: '/assets/kids-puppets-show.webp', alt: 'Kids Puppet Show Bangalore', title: 'Interactive Story Theatre' },
    { src: '/assets/kids-puppets-shows.webp', alt: 'Kids Puppetry Artists Bangalore', title: 'Live Audience Fascination' },
    { src: '/assets/puppet.webp', alt: 'Rajasthani Kathputli Bangalore', title: 'Handmade Folk Marionettes' },
    { src: '/assets/puppets.webp', alt: 'Hand Puppets Show Bangalore', title: 'Character Glove Puppets' },
    { src: '/assets/puppet-show.webp', alt: 'Stage Setup Puppet Bangalore', title: 'Mobile Theatre Stage' }
  ];

  const faqs = [
    {
      q: 'How far in advance should I book 7Delights puppet show for my event?',
      a: 'To ensure maximum availability of our puppet show, we recommend booking at least 1 to 6 weeks in advance for social birthday parties & corporate family events, and 3 to 6 months in advance for major weddings, festivals, or large-scale corporate launches. However, if you have a last-minute request, contact us and we will do our best to make it happen!'
    },
    {
      q: 'How long does the puppet show performance last?',
      a: 'The typical live puppet show performance runs for 30 to 35 minutes of uninterrupted storytelling, character dialogues, and interactive audience fun—the optimal attention span for children and family guests.'
    },
    {
      q: 'How long does it take for your team to set up?',
      a: 'Setup takes approximately 45 to 60 minutes prior to the show time. Our puppeteers assemble their portable stage booth, character rigs, and backdrops well before your guests gather, coordinating smoothly with the venue.'
    },
    {
      q: 'What are the organizer / venue requirements for the Puppet Show?',
      a: 'The venue needs to provide a clear floor area of approximately 8x6 ft for the booth setup, access to a standard electrical power socket, and music/sound amplification (or sound system arrangement can be provided by 7Delights upon advance request).'
    },
    {
      q: 'What is your payment policy?',
      a: 'To secure your date, artists, and setup schedule, we require an advance payment upon booking confirmation. The remaining balance is settled on the event day upon successful completion of the show.'
    }
  ];

  return (
    <div className="min-h-screen bg-[#FFFDF9] text-[#111A2E]">
      {/* 1. Breadcrumb navigation */}
      <div className="bg-[#FFF8F0] border-b border-[#F4E8DC] py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-xs sm:text-sm text-[#5A6E85]">
            <a href="#" className="hover:text-[#EE3775] transition-colors">Home</a>
            <span>/</span>
            <a href="#shows-entertainment" className="hover:text-[#EE3775] transition-colors">Shows & Entertainment</a>
            <span>/</span>
            <span className="text-[#111A2E] font-medium">Puppet Show</span>
          </nav>
        </div>
      </div>

      {/* 2. Hero Section */}
      <section className="relative overflow-hidden pt-8 pb-12 lg:pt-12 lg:pb-16 bg-gradient-to-b from-[#FFF8F0] via-[#FFFDF9] to-[#FFFDF9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Content Column */}
            <div className="lg:col-span-7 space-y-5">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#FFE8ED] border border-[#FFD0DB] text-xs font-semibold text-[#EE3775]">
                <Theater className="w-3.5 h-3.5" />
                <span>Classic Puppet Theatre • Live Folk & Kids Entertainment</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#111A2E] leading-tight">
                Puppet Show for Parties & Events in{' '}
                <span className="relative inline-block text-[#EE3775]">
                  Bangalore
                  <GoldUnderline className="absolute -bottom-2 left-0 w-full text-[#FFB703]" />
                </span>
              </h1>

              <p className="text-base sm:text-lg text-[#5A6E85] leading-relaxed">
                The kiddos truly admire puppets; if it's their special event, Puppet shows are like a cherry on the cake! 
                7Delights brings top-performing professional puppeteers who have been mesmerizing audiences for decades with 
                vibrant marionettes, humorous glove puppets, and captivating folk tales that drive children crazy with excitement.
              </p>

              {/* Service Badges */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
                <div className="p-3 bg-white rounded-xl border border-gray-100 shadow-sm flex items-center gap-2.5">
                  <Clock className="w-5 h-5 text-[#EE3775] flex-shrink-0" />
                  <div>
                    <div className="text-xs text-[#5A6E85]">Duration</div>
                    <div className="text-xs sm:text-sm font-bold text-[#111A2E]">30 - 35 Mins</div>
                  </div>
                </div>

                <div className="p-3 bg-white rounded-xl border border-gray-100 shadow-sm flex items-center gap-2.5">
                  <Music className="w-5 h-5 text-[#7B61FF] flex-shrink-0" />
                  <div>
                    <div className="text-xs text-[#5A6E85]">Music & Sound</div>
                    <div className="text-xs sm:text-sm font-bold text-[#111A2E]">Venue / Available</div>
                  </div>
                </div>

                <div className="p-3 bg-white rounded-xl border border-gray-100 shadow-sm flex items-center gap-2.5 col-span-2 sm:col-span-1">
                  <MapPin className="w-5 h-5 text-[#00A86B] flex-shrink-0" />
                  <div>
                    <div className="text-xs text-[#5A6E85]">Coverage</div>
                    <div className="text-xs sm:text-sm font-bold text-[#111A2E]">All Across Bangalore</div>
                  </div>
                </div>
              </div>

              {/* CTAs */}
              <div className="flex flex-wrap items-center gap-3 pt-3">
                <a 
                  href="tel:+919980029977" 
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-[#EE3775] hover:bg-[#D62863] text-white font-bold text-sm shadow-md hover:shadow-lg transition-all duration-200"
                >
                  <Phone className="w-4 h-4" />
                  Book Puppet Show Now
                </a>
                <a 
                  href="https://wa.me/919980029977?text=Hi%207Delights,%20I%20would%20like%20to%20book%20a%20Puppet%20Show%20for%20our%20upcoming%20event." 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-white hover:bg-gray-50 text-[#111A2E] font-bold text-sm border border-gray-200 shadow-sm hover:shadow transition-all duration-200"
                >
                  <MessageCircle className="w-4 h-4 text-[#25D366]" />
                  Instant WhatsApp Quote
                </a>
              </div>
            </div>

            {/* Right Image / Hero Card */}
            <div className="lg:col-span-5">
              <div className="relative mx-auto max-w-md lg:max-w-none">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white bg-white group">
                  <img 
                    src="/assets/puppet-about-img.webp" 
                    alt="7Delights Puppet Show Bangalore" 
                    className="w-full h-[340px] sm:h-[400px] object-cover group-hover:scale-105 transition-transform duration-500"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = '/assets/puppet-banner.webp';
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <span className="inline-block px-2.5 py-1 rounded bg-[#EE3775] text-[11px] font-bold tracking-wide uppercase mb-1">
                      Live Entertainment Counter
                    </span>
                    <h3 className="text-lg font-bold">Bangalore’s Favorite Puppet Theatre</h3>
                    <p className="text-xs text-white/90">Enchanting folk kathputli, puppet stalls, and kids engagement.</p>
                  </div>
                </div>

                {/* Floating pill badge */}
                <div className="absolute -top-3 -right-3 bg-white shadow-lg rounded-xl p-3 border border-gray-100 flex items-center gap-2.5">
                  <div className="w-10 h-10 rounded-lg bg-[#FFE8ED] flex items-center justify-center text-[#EE3775]">
                    <Award className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-[#111A2E]">Decades of Artistry</div>
                    <div className="text-[10px] text-[#5A6E85]">Master Puppeteers</div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. Key Highlights */}
      <section className="py-10 bg-white border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#111A2E]">
              Why Choose 7Delights Puppet Shows?
            </h2>
            <p className="text-sm sm:text-base text-[#5A6E85] mt-2">
              Transforming birthdays, naming ceremonies, school carnivals, and cultural events with traditional craftsmanship and cheerful energy.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {highlights.map((item, idx) => (
              <div 
                key={idx}
                className="p-5 rounded-xl bg-[#FFFDF9] border border-gray-100 hover:border-[#EE3775]/30 hover:shadow-md transition-all duration-200"
              >
                <div className="w-10 h-10 rounded-lg bg-white shadow-sm border border-gray-100 flex items-center justify-center mb-3">
                  {item.icon}
                </div>
                <h3 className="font-bold text-[#111A2E] text-base mb-1.5">{item.title}</h3>
                <p className="text-xs sm:text-sm text-[#5A6E85] leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Varieties of Puppet Performances */}
      <section className="py-12 bg-[#FFF8F0]/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-[#EE3775] bg-[#FFE8ED] px-3 py-1 rounded-full">
              Puppetry Repertoire
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#111A2E] mt-3">
              Customized Puppet Shows That Make Every Celebration Unforgettable!
            </h2>
            <p className="text-sm sm:text-base text-[#5A6E85] mt-2">
              Our puppeteers use an assortment of traditional marionettes, shadow puppets, and hand puppets tailored to delight both little toddlers and nostalgic elders.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {puppetVarieties.map((style, idx) => (
              <div 
                key={idx}
                className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col group"
              >
                <div className="h-44 overflow-hidden relative bg-gray-100">
                  <img 
                    src={style.image} 
                    alt={style.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = '/assets/puppet-banner.webp';
                    }}
                  />
                  <span className={`absolute top-3 left-3 text-[11px] font-semibold px-2.5 py-0.5 rounded-full border ${style.color}`}>
                    {style.tag}
                  </span>
                </div>
                <div className="p-5 flex-1 flex flex-col">
                  <h3 className="font-bold text-[#111A2E] text-base mb-2 group-hover:text-[#EE3775] transition-colors">
                    {style.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#5A6E85] leading-relaxed flex-1">
                    {style.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Setup & Coordination Reassurance */}
      <section className="py-10 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-[#111A2E] to-[#1E293B] rounded-2xl p-6 sm:p-8 text-white relative overflow-hidden shadow-xl">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#EE3775]/10 rounded-full blur-3xl pointer-events-none" />
            
            <div className="relative z-10 grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
              <div className="md:col-span-8 space-y-3">
                <span className="text-xs font-bold uppercase tracking-wider text-[#FFB703] bg-white/10 px-3 py-1 rounded-full">
                  Stress-Free Organization
                </span>
                <h3 className="text-xl sm:text-2xl font-bold">
                  Sit Back & Watch Our Professionals Execute a Quick, Flawless Setup!
                </h3>
                <p className="text-sm text-gray-300 leading-relaxed">
                  After associating with 7Delights, you won’t have to stress about the setup and cleanup. 
                  Our team brings the complete puppet booth, curtain drapery, and props, managing punctual assembly and 
                  tidy pack-up at the show’s end.
                </p>
                <div className="flex flex-wrap gap-4 pt-2 text-xs text-gray-200">
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-[#00A86B]" />
                    <span>Punctual Setup (45 mins prior)</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-[#00A86B]" />
                    <span>Self-Contained Portable Stage</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-[#00A86B]" />
                    <span>Clean Post-Show Pack Up</span>
                  </div>
                </div>
              </div>

              <div className="md:col-span-4 flex flex-col gap-3">
                <a 
                  href="tel:+919980029977" 
                  className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-[#EE3775] hover:bg-[#D62863] text-white font-bold text-sm shadow transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  +91 99800 29977
                </a>
                <a 
                  href="#faq-section" 
                  className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold text-sm transition-colors"
                >
                  <HelpCircle className="w-4 h-4" />
                  View Event FAQs
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Video Showcase & Gallery Grid */}
      <section className="py-12 bg-[#FFFDF9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <span className="text-xs font-bold uppercase tracking-wider text-[#EE3775] bg-[#FFE8ED] px-3 py-1 rounded-full">
              Live Action
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#111A2E] mt-3">
              Puppet Show Gallery & Video Demo
            </h2>
            <p className="text-sm sm:text-base text-[#5A6E85] mt-2">
              Catch real glimpses of smiling faces, lively folk puppets, and enthusiastic audience interactions across Bangalore celebrations.
            </p>
          </div>

          {/* YouTube Video Embed */}
          <div className="max-w-3xl mx-auto mb-10">
            <div className="relative rounded-2xl overflow-hidden shadow-xl border border-gray-200 aspect-video bg-black">
              <iframe 
                src="https://www.youtube.com/embed/6J3sMVZwYaA" 
                title="7Delights Puppet Show Video Demonstration" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
                className="w-full h-full border-0"
              />
            </div>
            <p className="text-center text-xs text-[#5A6E85] mt-2.5">
              Live snippet of 7Delights Kathputli & puppet performances at family celebrations.
            </p>
          </div>

          {/* Photo Gallery Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
            {galleryImages.map((img, idx) => (
              <div 
                key={idx}
                className="group relative rounded-xl overflow-hidden bg-white border border-gray-100 shadow-sm aspect-square"
              >
                <img 
                  src={img.src} 
                  alt={img.alt} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = '/assets/puppet-banner.webp';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-2.5">
                  <span className="text-[11px] font-medium text-white leading-tight">
                    {img.title}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. FAQs Section */}
      <section id="faq-section" className="py-12 bg-[#FFF8F0]/60 border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-xl mx-auto mb-8">
            <span className="text-xs font-bold uppercase tracking-wider text-[#EE3775] bg-[#FFE8ED] px-3 py-1 rounded-full">
              Got Questions?
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#111A2E] mt-3">
              Event FAQ ?
            </h2>
            <p className="text-sm text-[#5A6E85] mt-2">
              Everything you need to know about booking, requirements, and timing for 7Delights Puppet Shows.
            </p>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, idx) => (
              <div 
                key={idx}
                className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm"
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full px-5 py-4 text-left flex items-center justify-between gap-4 font-bold text-sm sm:text-base text-[#111A2E] hover:text-[#EE3775] transition-colors"
                >
                  <span>{faq.q}</span>
                  <ChevronDown className={`w-5 h-5 flex-shrink-0 text-[#5A6E85] transition-transform duration-200 ${openFaq === idx ? 'rotate-180 text-[#EE3775]' : ''}`} />
                </button>
                {openFaq === idx && (
                  <div className="px-5 pb-4 pt-1 text-xs sm:text-sm text-[#5A6E85] leading-relaxed border-t border-gray-100 bg-gray-50/50">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Direct Support Card */}
          <div className="mt-8 p-5 rounded-xl bg-white border border-[#EE3775]/20 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <h4 className="font-bold text-[#111A2E] text-sm sm:text-base">Have specific theme requirements or date inquiries?</h4>
              <p className="text-xs text-[#5A6E85] mt-0.5">Speak with our Bangalore entertainment specialists directly.</p>
            </div>
            <a 
              href="tel:+919980029977" 
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#EE3775] text-white text-xs sm:text-sm font-bold hover:bg-[#D62863] shadow-sm transition-colors whitespace-nowrap"
            >
              <Phone className="w-3.5 h-3.5" />
              Call +91 99800 29977
            </a>
          </div>

          {/* Back to Hub Navigation */}
          <div className="mt-8 text-center">
            <a 
              href="#shows-entertainment" 
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#EE3775] hover:text-[#D62863] transition-colors"
            >
              ← Back to Shows & Entertainment Hub
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

