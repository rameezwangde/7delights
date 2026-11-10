import React, { useState } from 'react';
import { HelpCircle, ChevronDown, Sparkles, Phone, MessageCircle, ArrowRight, Calendar, Search } from 'lucide-react';
import { GoldUnderline, HandDrawnHeart } from '../components/Doodles';

export default function FAQPage() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [openIdx, setOpenIdx] = useState(0);
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    { id: 'all', label: 'All Questions' },
    { id: 'booking', label: 'Booking & Reservations' },
    { id: 'pricing', label: 'Pricing & Payments' },
    { id: 'events', label: 'Event Services' },
    { id: 'logistics', label: 'Setup & Logistics' },
  ];

  const faqs = [
    {
      cat: 'booking',
      question: 'How far in advance should I book 7Delights for my event?',
      answer:
        'We recommend booking 2 to 4 weeks in advance for birthday parties, private celebrations, and entertainment acts. For large weddings, grand theme sets, and peak-season corporate events (October through February), reserving 1 to 2 months ahead ensures full availability of our top decorators, anchor artists, and specialized equipment.',
    },
    {
      cat: 'booking',
      question: 'Can you handle urgent or last-minute party requests in Bangalore?',
      answer:
        'Yes! Thanks to our in-house inventory and dedicated Bengaluru artist network, we regularly fulfill short-notice party bookings within 24 to 48 hours for balloon decorations, fun food counters, magicians, and cake deliveries.',
    },
    {
      cat: 'pricing',
      question: 'What is your payment schedule and what payment modes are accepted?',
      answer:
        'Typically, a 30% to 50% advance secures your date and materials, with the remaining balance due upon on-site setup verification. We accept all major payment modes including UPI (Google Pay, PhonePe, Paytm), NetBanking, Credit/Debit Cards via Razorpay, and direct corporate wire transfers.',
    },
    {
      cat: 'pricing',
      question: 'Are there any hidden travel or transport charges within Bangalore?',
      answer:
        'No hidden surprises. All quotes provided by our coordinators clearly itemize delivery, transport, setup, artist fees, and dismantling. For standard Bengaluru city limits, transport is transparently included in the package.',
    },
    {
      cat: 'events',
      question: 'Can you customize decorations according to my child’s favorite theme?',
      answer:
        'Absolutely! We specialize in bespoke theme styling — from Paw Patrol, Cocomelon, Peppa Pig, Space Astronaut, Unicorn Pastels to Marvel Superheroes, Jungle Safari, and Royal Floral backdrops. We customize balloon arches, 3D character cutouts, welcome easels, and personalized milestone boards.',
    },
    {
      cat: 'events',
      question: 'Do you cater to both indoor apartment clubhouse parties and outdoor garden venues?',
      answer:
        'Yes. We have executed celebrations across private apartments, gated community clubhouses, hotel banquet halls, open lawns, farmhouses, and tech park auditoriums across all Bengaluru localities.',
    },
    {
      cat: 'logistics',
      question: 'How long does the setup take before the event begins?',
      answer:
        'Setup times vary based on the scale: standard balloon decorations and snack counters take 1.5 to 2.5 hours, while elaborate stage trusses, flower mandaps, and LED video walls take 4 to 6 hours. Our crew always arrives early to guarantee everything is pristine before your first guest arrives.',
    },
    {
      cat: 'logistics',
      question: 'What happens after the party finishes? Do you handle cleanup & dismantling?',
      answer:
        'Yes! Turnkey service means we handle dismantle and clean pack-up after the event concludes, leaving your venue tidy without giving you or your family any post-party stress.',
    },
    {
      cat: 'events',
      question: 'Are your fun food eatables and live counters hygienic and safe?',
      answer:
        '100% yes. Our food counter operators wear clean aprons, chef caps, and gloves. All ingredients (popcorn kernels, cotton candy sugar, chocolate fountain dips, sweet corn) are food-grade and freshly procured.',
    },
    {
      cat: 'pricing',
      question: 'What if I need to reschedule my event date due to an emergency?',
      answer:
        'We understand unexpected situations arise. Date changes made with at least 5 to 7 days prior notice can be accommodated to another mutually agreed date without forfeiture of your deposit, subject to artist and slot availability.',
    },
  ];

  const filteredFaqs = faqs.filter((faq) => {
    const matchesCat = activeCategory === 'all' || faq.cat === activeCategory;
    const matchesSearch =
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

  return (
    <div className="w-full bg-[#FFFDF9] select-none min-h-screen">
      {/* 1. HERO SECTION */}
      <section className="relative w-full pt-12 sm:pt-16 pb-12 sm:pb-16 bg-gradient-to-b from-[#FFF5F7] via-[#FFFDF9] to-[#FFFDF9] border-b border-[#F5E6EC] overflow-hidden">
        <div className="absolute top-0 right-10 w-96 h-96 bg-[#EE3775]/5 rounded-full blur-3xl pointer-events-none" />
        <div className="w-full max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-14 xl:px-16 text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FFE8ED] border border-[#FFD0DB] text-[#EE3775] text-xs font-bold uppercase tracking-wider mb-3">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Help Center &amp; Answers</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#111A2E] tracking-tight mb-2">
            Frequently Asked Questions
          </h1>

          <div className="flex justify-center mb-4">
            <GoldUnderline className="w-40 sm:w-52 h-auto text-[#EE3775]" />
          </div>

          <p className="max-w-2xl mx-auto text-sm sm:text-base text-[#5A6E85] leading-relaxed mb-8">
            Got questions about organizing your event with 7Delights? Here are clear, upfront answers covering bookings, themes, pricing, setup timelines, and logistics in Bangalore.
          </p>

          {/* Search Box */}
          <div className="max-w-xl mx-auto relative">
            <Search className="w-5 h-5 text-gray-400 absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search questions (e.g., booking, advance, setup, theme)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 rounded-full bg-white border border-[#F5E6EC] shadow-sm text-sm text-[#111A2E] focus:outline-none focus:border-[#EE3775] focus:ring-2 focus:ring-[#EE3775]/20"
            />
          </div>
        </div>
      </section>

      {/* 2. CATEGORY TABS & ACCORDION LIST */}
      <section className="py-12 sm:py-16">
        <div className="w-full max-w-[1100px] mx-auto px-6 sm:px-10">
          {/* Category Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
            {categories.map((c) => (
              <button
                key={c.id}
                onClick={() => setActiveCategory(c.id)}
                className={`px-4 py-2 rounded-full text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                  activeCategory === c.id
                    ? 'bg-[#EE3775] text-white shadow-md shadow-[#EE3775]/20'
                    : 'bg-white text-[#5A6E85] hover:bg-[#FFE8ED] hover:text-[#EE3775] border border-[#F5E6EC]'
                }`}
              >
                {c.label}
              </button>
            ))}
          </div>

          {/* Accordion Questions */}
          <div className="space-y-3.5">
            {filteredFaqs.map((faq, i) => {
              const isOpen = openIdx === i;
              return (
                <div
                  key={i}
                  className="bg-white rounded-2xl border border-[#F5E6EC] overflow-hidden shadow-xs hover:border-[#FFD0DB] transition-all"
                >
                  <button
                    onClick={() => setOpenIdx(isOpen ? -1 : i)}
                    className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer"
                  >
                    <span className="font-bold text-sm sm:text-base text-[#111A2E] leading-snug">
                      {faq.question}
                    </span>
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 ${
                        isOpen ? 'bg-[#EE3775] text-white rotate-180' : 'bg-gray-100 text-[#5A6E85]'
                      }`}
                    >
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 sm:px-6 sm:pb-6 pt-0 text-xs sm:text-sm text-[#5A6E85] leading-relaxed border-t border-gray-100 pt-4">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}

            {filteredFaqs.length === 0 && (
              <div className="text-center py-12 bg-white rounded-2xl border border-[#F5E6EC]">
                <p className="text-sm text-[#5A6E85]">No questions match your search query.</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* 3. STILL HAVE QUESTIONS CALLOUT */}
      <section className="py-12 bg-[#FFF8FA] border-t border-[#F5E6EC]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="w-12 h-12 rounded-2xl bg-[#FFE8ED] text-[#EE3775] flex items-center justify-center mx-auto mb-4 shadow-sm">
            <Sparkles className="w-6 h-6" />
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#111A2E] mb-2">
            Still Have Questions?
          </h2>
          <p className="text-sm text-[#5A6E85] max-w-xl mx-auto mb-6">
            Our event coordination team in Bangalore is happy to talk through your specific party requirements, custom themes, and budget plans.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="tel:+919980029977"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#EE3775] hover:bg-[#DE2765] text-white font-bold text-sm shadow-md transition-all hover:scale-105"
            >
              <Phone className="w-4 h-4 fill-white stroke-none" />
              <span>Call +91 99800 29977</span>
            </a>
            <a
              href="https://api.whatsapp.com/send/?phone=919980029977&text=Hi%207Delights,%20I%20have%20a%20question%20about%20event%20planning."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#25D366] hover:bg-[#20BD5A] text-white font-bold text-sm shadow-md transition-all hover:scale-105"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp Us</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

