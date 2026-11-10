import React from 'react';
import { Headphones, Phone, Mail, MessageCircle, Clock, MapPin, Sparkles, CheckCircle2 } from 'lucide-react';
import { GoldUnderline } from '../components/Doodles';

export default function CustomerSupportPage() {
  const supportChannels = [
    {
      title: 'Phone Consultation',
      desc: 'Speak directly with our senior event coordinator for immediate bookings and inquiries.',
      value: '+91 99800 29977',
      action: 'Call Now',
      href: 'tel:+919980029977',
      icon: <Phone className="w-6 h-6 text-[#EE3775]" />,
      badge: 'Immediate Response',
      badgeBg: 'bg-[#FFE8ED] text-[#EE3775]',
    },
    {
      title: 'Instant WhatsApp Chat',
      desc: 'Send theme reference photos, ask for package quotes, and get real-time availability updates.',
      value: '+91 99800 29977',
      action: 'Chat on WhatsApp',
      href: 'https://api.whatsapp.com/send/?phone=919980029977&text=Hi%207Delights,%20I%20need%20customer%20support%20for%20an%20event.',
      icon: <MessageCircle className="w-6 h-6 text-[#25D366]" />,
      badge: 'Fastest Reply',
      badgeBg: 'bg-[#E3F8F2] text-[#10B981]',
    },
    {
      title: 'Official Email Support',
      desc: 'Send formal event briefs, RFP tenders, corporate vendor registrations, and invoices.',
      value: 'mail@7delights.in',
      action: 'Send Email',
      href: 'mailto:mail@7delights.in',
      icon: <Mail className="w-6 h-6 text-[#7B61FF]" />,
      badge: 'Within 4 Hours',
      badgeBg: 'bg-[#EFEAFF] text-[#7B61FF]',
    },
  ];

  const commitments = [
    {
      title: '24/7 Event Day Hotline',
      desc: 'Dedicated on-ground hotline for event hosts so you are never left unattended on the day of your party.',
    },
    {
      title: 'Dedicated Event Manager',
      desc: 'One point of contact from your initial concept inquiry until the final balloon is packed up.',
    },
    {
      title: 'Transparent Pricing',
      desc: 'Itemized formal quotes with no surprise transport or last-minute hidden service fees.',
    },
    {
      title: 'Backup Artist Guarantee',
      desc: 'Network of over 100+ verified Bangalore artists ensures seamless replacements if an emergency arises.',
    },
  ];

  return (
    <div className="w-full bg-[#FFFDF9] select-none min-h-screen">
      {/* 1. HERO SECTION */}
      <section className="relative w-full pt-12 sm:pt-16 pb-12 sm:pb-16 bg-gradient-to-b from-[#FFF5F7] via-[#FFFDF9] to-[#FFFDF9] border-b border-[#F5E6EC] overflow-hidden">
        <div className="absolute top-0 right-10 w-96 h-96 bg-[#EE3775]/5 rounded-full blur-3xl pointer-events-none" />
        <div className="w-full max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-14 xl:px-16 text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FFE8ED] border border-[#FFD0DB] text-[#EE3775] text-xs font-bold uppercase tracking-wider mb-3">
            <Headphones className="w-3.5 h-3.5" />
            <span>Customer Care &amp; Assistance</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#111A2E] tracking-tight mb-2">
            Customer Support
          </h1>

          <div className="flex justify-center mb-4">
            <GoldUnderline className="w-40 sm:w-52 h-auto text-[#EE3775]" />
          </div>

          <p className="max-w-2xl mx-auto text-sm sm:text-base text-[#5A6E85] leading-relaxed mb-6">
            We are here to make your celebration planning smooth, delightful, and completely stress-free. Connect with our dedicated Bangalore support desk through your preferred channel.
          </p>

          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-[#F5E6EC] shadow-xs text-xs sm:text-sm text-[#111A2E] font-semibold">
            <Clock className="w-4 h-4 text-[#EE3775]" />
            <span>Support Desk Open: Mon – Sun, 9:00 AM – 9:00 PM IST</span>
          </div>
        </div>
      </section>

      {/* 2. CHANNELS GRID */}
      <section className="py-12 sm:py-16">
        <div className="w-full max-w-[1200px] mx-auto px-6 sm:px-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {supportChannels.map((item, idx) => (
              <div
                key={idx}
                className="bg-white rounded-3xl p-6 sm:p-8 border border-[#F5E6EC] shadow-sm hover:shadow-xl hover:border-[#FFD0DB] transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-2xl bg-[#FFF5F7] border border-[#F5E6EC] flex items-center justify-center">
                      {item.icon}
                    </div>
                    <span className={`text-[11px] font-bold px-3 py-1 rounded-full ${item.badgeBg}`}>
                      {item.badge}
                    </span>
                  </div>

                  <h2 className="text-xl font-bold text-[#111A2E] mb-2">{item.title}</h2>
                  <p className="text-xs sm:text-sm text-[#5A6E85] leading-relaxed mb-4">{item.desc}</p>
                </div>

                <div>
                  <p className="font-mono font-bold text-sm sm:text-base text-[#111A2E] mb-4">{item.value}</p>
                  <a
                    href={item.href}
                    target={item.href.startsWith('http') ? '_blank' : '_self'}
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center py-2.5 px-4 rounded-xl bg-[#111A2E] hover:bg-[#EE3775] text-white text-xs sm:text-sm font-bold transition-all shadow-xs"
                  >
                    {item.action}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. SUPPORT COMMITMENTS */}
      <section className="py-12 sm:py-16 bg-[#FFF8FA] border-t border-[#F5E6EC]">
        <div className="max-w-[1200px] mx-auto px-6 sm:px-10">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold text-[#EE3775] uppercase tracking-wider">Our Standards</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#111A2E] mt-1 mb-3">
              The 7Delights Support Promise
            </h2>
            <p className="text-xs sm:text-sm text-[#5A6E85]">
              Every single booking is backed by our customer-first service guarantee.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {commitments.map((c, i) => (
              <div key={i} className="bg-white p-6 rounded-2xl border border-[#F5E6EC] shadow-xs">
                <CheckCircle2 className="w-5 h-5 text-[#EE3775] mb-3" />
                <h3 className="text-sm font-bold text-[#111A2E] mb-1.5">{c.title}</h3>
                <p className="text-xs text-[#5A6E85] leading-relaxed">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

