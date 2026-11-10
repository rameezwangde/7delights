import React from 'react';
import { Scale, FileText, CheckCircle2, ShieldCheck, AlertTriangle } from 'lucide-react';
import { GoldUnderline } from '../components/Doodles';

export default function TermsConditionsPage() {
  const terms = [
    {
      title: '1. Service Agreement & Booking Confirmation',
      points: [
        'A booking with 7Delights is deemed officially confirmed only upon receipt of the designated advance deposit and written confirmation (via email, WhatsApp, or formal booking voucher).',
        'Quotations provided verbally or in preliminary discussions are valid for 7 calendar days from issuance and are subject to slot availability.',
      ],
    },
    {
      title: '2. Client Responsibilities & Venue Permissions',
      points: [
        'The client is responsible for procuring all necessary permissions, access clearances, society gate passes, and electricity provisions from the venue manager or apartment association prior to crew arrival.',
        'The client must ensure uninterrupted power supply for heavy electrical installations (sound equipment, LED screens, bubble machines, and chocolate fountains).',
        '7Delights crew will not be held liable for setup delays caused by restricted venue access or lack of required electricity/water connections.',
      ],
    },
    {
      title: '3. Intellectual Property & Branding',
      points: [
        'The 7Delights brand name, logo, website layouts, marketing materials, and original photography are the proprietary intellectual property of 7Delights.',
        'Clients agree that event photos captured by our official crew showcasing decor setups may be used in our portfolio, website, or social media, unless the client explicitly requests private discretion in writing prior to the event.',
      ],
    },
    {
      title: '4. Equipment Care & Safety On-Site',
      points: [
        'While 7Delights enforces strict safety standards for bouncy castles, game stalls, and stage pyros, children must remain under reasonable adult/parental supervision throughout the event.',
        'Any deliberate damage or vandalism to specialized equipment (e.g., sound speakers, mascot costumes, VR headsets, furniture) caused by event guests will be billed to the booking client at replacement cost.',
      ],
    },
    {
      title: '5. Limitation of Liability',
      points: [
        '7Delights shall not be held liable for failure or delay in performing obligations due to events beyond reasonable human control, including extreme weather, road blockades, civic unrest, or sudden government restrictions (Force Majeure).',
        'Our aggregate liability under any contract will not exceed the total fees paid by the client for the specific booked service.',
      ],
    },
    {
      title: '6. Jurisdiction & Dispute Resolution',
      points: [
        'All agreements, service engagements, and transactions with 7Delights are governed by the laws of India.',
        'Any dispute arising out of or in connection with these terms shall be subject to the exclusive jurisdiction of the competent courts in Bengaluru, Karnataka.',
      ],
    },
  ];

  return (
    <div className="w-full bg-[#FFFDF9] select-none min-h-screen">
      {/* 1. HERO SECTION */}
      <section className="relative w-full pt-12 sm:pt-16 pb-12 sm:pb-16 bg-gradient-to-b from-[#FFF5F7] via-[#FFFDF9] to-[#FFFDF9] border-b border-[#F5E6EC] overflow-hidden">
        <div className="absolute top-0 right-10 w-96 h-96 bg-[#EE3775]/5 rounded-full blur-3xl pointer-events-none" />
        <div className="w-full max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-14 xl:px-16 text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FFE8ED] border border-[#FFD0DB] text-[#EE3775] text-xs font-bold uppercase tracking-wider mb-3">
            <Scale className="w-3.5 h-3.5" />
            <span>Legal Agreement</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#111A2E] tracking-tight mb-2">
            Terms &amp; Conditions
          </h1>

          <div className="flex justify-center mb-4">
            <GoldUnderline className="w-40 sm:w-52 h-auto text-[#EE3775]" />
          </div>

          <p className="max-w-2xl mx-auto text-sm sm:text-base text-[#5A6E85] leading-relaxed mb-4">
            These terms govern the provision of event management, decorations, live entertainment, catering, and equipment rental services by 7Delights in Bengaluru.
          </p>

          <p className="text-xs text-[#5A6E85]">
            Last Revised: November 2026 • 7Delights Event Planners
          </p>
        </div>
      </section>

      {/* 2. TERMS LIST */}
      <section className="py-12 sm:py-16">
        <div className="w-full max-w-[1000px] mx-auto px-6 sm:px-10 space-y-8">
          {terms.map((t, idx) => (
            <div
              key={idx}
              className="bg-white rounded-3xl p-6 sm:p-8 border border-[#F5E6EC] shadow-xs hover:border-[#FFD0DB] transition-all"
            >
              <h2 className="text-lg sm:text-xl font-bold text-[#111A2E] mb-4 flex items-center gap-2.5">
                <span className="w-2.5 h-2.5 rounded-full bg-[#EE3775]" />
                <span>{t.title}</span>
              </h2>
              <ul className="space-y-3">
                {t.points.map((pt, pIdx) => (
                  <li key={pIdx} className="flex items-start gap-3 text-xs sm:text-sm text-[#5A6E85] leading-relaxed">
                    <CheckCircle2 className="w-4 h-4 text-[#EE3775] shrink-0 mt-0.5" />
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="p-6 rounded-2xl bg-[#FFF8FA] border border-[#F5E6EC] text-center">
            <p className="text-xs sm:text-sm text-[#5A6E85]">
              By confirming an event with 7Delights, you acknowledge having read and agreed to these terms. If you require corporate contracts or custom MSAs, write to{' '}
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

