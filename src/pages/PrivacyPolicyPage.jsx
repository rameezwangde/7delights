import React from 'react';
import { ShieldCheck, Lock, Eye, Server, UserCheck, Bell, Mail } from 'lucide-react';
import { GoldUnderline } from '../components/Doodles';

export default function PrivacyPolicyPage() {
  const sections = [
    {
      title: '1. Information We Collect',
      desc: 'When you interact with 7Delights via our website, inquiry forms, phone calls, or WhatsApp, we may collect the following information:',
      items: [
        'Personal details: Full name, phone number, email address, and event venue location in Bangalore.',
        'Event information: Occasion type (birthday, wedding, corporate event), proposed date, guest count, and specific decor/entertainment preferences.',
        'Payment details: Transaction records and payment reference IDs processed securely through our authorized payment partner, Razorpay. Note: We do not store credit/debit card numbers or CVVs on our servers.',
      ],
    },
    {
      title: '2. How We Use Your Information',
      desc: 'The personal data collected is strictly utilized to provide exceptional event organizing services, including:',
      items: [
        'Preparing bespoke quotes, mood boards, and theme proposals for your celebration.',
        'Assigning certified decorators, performers, anchor artists, and technicians to your venue.',
        'Communicating setup timelines, invoice receipts, and day-of-event logistics.',
        'Improving our website functionality and responding to support tickets.',
      ],
    },
    {
      title: '3. Data Sharing & Third Parties',
      desc: '7Delights does not sell, rent, or trade your personal information to third-party marketing companies. Data is only shared with:',
      items: [
        'Assigned internal event crew and verified on-ground artists (e.g. magicians, photographers) strictly necessary to execute your event.',
        'Payment gateways (Razorpay) for encrypted payment processing conforming to PCI-DSS standards.',
        'Government or regulatory authorities only when strictly required under applicable Indian laws.',
      ],
    },
    {
      title: '4. Cookies & Browsing Experience',
      desc: 'Our website uses essential and performance cookies to understand visitor traffic, remember your service viewing history, and enhance page load speeds. You can disable cookies at any time via your browser settings.',
    },
    {
      title: '5. Data Security & Storage',
      desc: 'We implement industry-standard technical measures (SSL 256-bit encryption, firewall protection, and restricted database access) to safeguard your data against unauthorized access, alteration, or disclosure.',
    },
    {
      title: '6. Your Rights & Contact Details',
      desc: 'You have the right to request access to, correction of, or deletion of your personal data stored with us. For privacy questions or data requests, contact our compliance officer at mail@7delights.in.',
    },
  ];

  return (
    <div className="w-full bg-[#FFFDF9] select-none min-h-screen">
      {/* 1. HERO SECTION */}
      <section className="relative w-full pt-12 sm:pt-16 pb-12 sm:pb-16 bg-gradient-to-b from-[#FFF5F7] via-[#FFFDF9] to-[#FFFDF9] border-b border-[#F5E6EC] overflow-hidden">
        <div className="absolute top-0 right-10 w-96 h-96 bg-[#EE3775]/5 rounded-full blur-3xl pointer-events-none" />
        <div className="w-full max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-14 xl:px-16 text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FFE8ED] border border-[#FFD0DB] text-[#EE3775] text-xs font-bold uppercase tracking-wider mb-3">
            <Lock className="w-3.5 h-3.5" />
            <span>Data Protection &amp; Trust</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#111A2E] tracking-tight mb-2">
            Privacy Policy
          </h1>

          <div className="flex justify-center mb-4">
            <GoldUnderline className="w-40 sm:w-52 h-auto text-[#EE3775]" />
          </div>

          <p className="max-w-2xl mx-auto text-sm sm:text-base text-[#5A6E85] leading-relaxed mb-4">
            At 7Delights, your privacy and peace of mind are paramount. This policy outlines how we collect, handle, and protect your information when booking our services in Bangalore.
          </p>

          <p className="text-xs text-[#5A6E85]">
            Effective Date: November 2026 • 7Delights Party &amp; Event Organizers
          </p>
        </div>
      </section>

      {/* 2. POLICY CONTENT */}
      <section className="py-12 sm:py-16">
        <div className="w-full max-w-[1000px] mx-auto px-6 sm:px-10 space-y-8">
          {sections.map((s, idx) => (
            <div
              key={idx}
              className="bg-white rounded-3xl p-6 sm:p-8 border border-[#F5E6EC] shadow-xs hover:border-[#FFD0DB] transition-all"
            >
              <h2 className="text-lg sm:text-xl font-bold text-[#111A2E] mb-3 flex items-center gap-2.5">
                <span className="w-2.5 h-2.5 rounded-full bg-[#EE3775]" />
                <span>{s.title}</span>
              </h2>
              {s.desc && <p className="text-xs sm:text-sm text-[#5A6E85] leading-relaxed mb-3">{s.desc}</p>}
              {s.items && (
                <ul className="space-y-2.5 pl-2">
                  {s.items.map((item, iIdx) => (
                    <li key={iIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#5A6E85] leading-relaxed">
                      <ShieldCheck className="w-4 h-4 text-[#EE3775] shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}

          {/* Privacy Contact */}
          <div className="p-6 rounded-2xl bg-[#FFF8FA] border border-[#F5E6EC] text-center">
            <p className="text-xs sm:text-sm text-[#5A6E85]">
              Questions regarding our data handling or want to update your communication preferences? Email us at{' '}
              <a href="mailto:mail@7delights.in" className="font-bold text-[#EE3775] underline">
                mail@7delights.in
              </a>
              .
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

