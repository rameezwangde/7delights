import React from 'react';
import { RefreshCw, ShieldAlert, CheckCircle2, Clock, FileText, Phone, Mail, AlertCircle } from 'lucide-react';
import { GoldUnderline } from '../components/Doodles';

export default function CancelRefundPage() {
  const policies = [
    {
      title: '1. Event Booking Cancellation Window',
      points: [
        'Cancellations made 14 days or more before the scheduled event date are eligible for an 80% refund of the advance deposit (20% retained for initial planning and coordination overhead).',
        'Cancellations made between 7 to 13 days prior to the event are eligible for a 50% refund of the deposit, as custom fabrication, artist blockouts, and material procurements have commenced.',
        'Cancellations made less than 7 days prior to the event are non-refundable, as specific perishable decor items, customized backdrops, and third-party artists have been committed.',
      ],
    },
    {
      title: '2. Rescheduling & Date Change Option',
      points: [
        'If unforeseen circumstances or emergencies arise, we allow clients to reschedule their event to an alternate available date without forfeiting their deposit.',
        'Reschedule requests must be formally submitted at least 5 business days prior to the original date.',
        'Rescheduled dates are subject to artist and equipment availability within a 6-month validity window.',
      ],
    },
    {
      title: '3. Custom Cakes & Perishable Eatables',
      points: [
        'Due to the bespoke baking and fresh ingredient nature of birthday cakes and personalized party eatables, cake orders cannot be cancelled once baking/sculpting begins (within 48 hours of delivery).',
        'If a cake delivery arrives damaged or inconsistent with the confirmed design specifications, full photo proof must be sent within 2 hours of delivery for immediate resolution, replacement, or partial/full reimbursement.',
      ],
    },
    {
      title: '4. Refund Processing Timeline',
      points: [
        'Approved refunds are initiated within 5 to 7 business days from the date of official cancellation approval.',
        'Reimbursements are credited back to the original source of payment (UPI, Credit/Debit Card, or Bank Account) via our secure Razorpay gateway.',
        'Depending on your issuing bank, the credit will reflect on your statement within 5 to 10 working days.',
      ],
    },
    {
      title: '5. Force Majeure & Severe Weather Conditions',
      points: [
        'In the event of unforeseen natural disasters, extreme weather events, or governmental public gathering restrictions, 7Delights works closely with clients to offer 100% credit toward a future rescheduled event date without penalties.',
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
            <RefreshCw className="w-3.5 h-3.5" />
            <span>Fair &amp; Transparent Terms</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#111A2E] tracking-tight mb-2">
            Cancellation &amp; Refund Policy
          </h1>

          <div className="flex justify-center mb-4">
            <GoldUnderline className="w-40 sm:w-52 h-auto text-[#EE3775]" />
          </div>

          <p className="max-w-2xl mx-auto text-sm sm:text-base text-[#5A6E85] leading-relaxed mb-6">
            We understand plans can change. Here is our straightforward, honest policy covering event cancellations, date adjustments, and deposit refunds.
          </p>

          <p className="text-xs text-[#5A6E85]">
            Last Updated: November 2026 • Applicable across all 7Delights party &amp; corporate services.
          </p>
        </div>
      </section>

      {/* 2. POLICY SECTIONS */}
      <section className="py-12 sm:py-16">
        <div className="w-full max-w-[1000px] mx-auto px-6 sm:px-10 space-y-8">
          {policies.map((p, idx) => (
            <div
              key={idx}
              className="bg-white rounded-3xl p-6 sm:p-8 border border-[#F5E6EC] shadow-xs hover:border-[#FFD0DB] transition-all"
            >
              <h2 className="text-lg sm:text-xl font-bold text-[#111A2E] mb-4 flex items-center gap-2.5">
                <span className="w-2.5 h-2.5 rounded-full bg-[#EE3775]" />
                <span>{p.title}</span>
              </h2>
              <ul className="space-y-3">
                {p.points.map((pt, pIdx) => (
                  <li key={pIdx} className="flex items-start gap-3 text-xs sm:text-sm text-[#5A6E85] leading-relaxed">
                    <CheckCircle2 className="w-4 h-4 text-[#EE3775] shrink-0 mt-0.5" />
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Cancellation Request Box */}
          <div className="bg-[#FFF8FA] rounded-3xl p-6 sm:p-8 border border-[#FFD0DB] text-center">
            <AlertCircle className="w-8 h-8 text-[#EE3775] mx-auto mb-3" />
            <h2 className="text-lg sm:text-xl font-bold text-[#111A2E] mb-2">
              Need to Request a Cancellation or Reschedule?
            </h2>
            <p className="text-xs sm:text-sm text-[#5A6E85] max-w-xl mx-auto mb-6">
              Please email our coordination team with your booking reference ID, event date, and reason for cancellation so we can process your request promptly.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <a
                href="mailto:mail@7delights.in?subject=Cancellation%20or%20Refund%20Request"
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-[#EE3775] hover:bg-[#DE2765] text-white font-bold text-xs sm:text-sm shadow-md transition-all"
              >
                <Mail className="w-4 h-4" />
                <span>Email mail@7delights.in</span>
              </a>
              <a
                href="tel:+919980029977"
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-white hover:bg-gray-50 border border-gray-200 text-[#111A2E] font-bold text-xs sm:text-sm shadow-xs transition-all"
              >
                <Phone className="w-4 h-4" />
                <span>Call Coordinator: +91 99800 29977</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

