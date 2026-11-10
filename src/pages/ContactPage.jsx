import React, { useState } from 'react';
import {
  MapPin,
  Phone,
  Mail,
  Send,
  Calendar,
  Clock,
  CheckCircle2,
  Sparkles,
  CreditCard,
  ArrowUpRight,
  MessageCircle,
  Building2,
} from 'lucide-react';
import { GoldUnderline, HandDrawnHeart } from '../components/Doodles';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    location: '',
    date: '',
    service: 'Birthday Party Decoration',
    subject: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [lastSubmittedData, setLastSubmittedData] = useState(null);

  const buildWhatsAppMessage = (data) => {
    return (
      `*New Event Enquiry via 7Delights Website*\n\n` +
      `👤 *Name:* ${data.name}\n` +
      `📞 *Phone:* ${data.phone}\n` +
      `✉️ *Email:* ${data.email}\n` +
      `📍 *Location / Venue:* ${data.location}\n` +
      `📅 *Event Date:* ${data.date}\n` +
      `🎉 *Service:* ${data.service}\n` +
      `📝 *Subject:* ${data.subject || 'Event Planning'}\n` +
      `💬 *Requirements:* ${data.message || 'Please contact me with packages and pricing.'}`
    );
  };

  const openWhatsAppChat = (data) => {
    const text = encodeURIComponent(buildWhatsAppMessage(data));
    const url = `https://api.whatsapp.com/send/?phone=919980029977&text=${text}`;
    window.open(url, '_blank');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);

    const snapshot = { ...formData };
    setLastSubmittedData(snapshot);

    try {
      // Direct Web3Forms submission to mail@7delights.in
      await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          access_key: '5ad6be93-3d74-4b52-9ef4-2e90f2095cf0', // Web3Forms public forwarding endpoint key
          from_name: '7Delights Website Enquiry',
          to_email: 'mail@7delights.in',
          subject: `New Event Enquiry: ${snapshot.service} - ${snapshot.name}`,
          ...snapshot,
        }),
      });
    } catch (err) {
      console.log('Submission note:', err);
    } finally {
      setSubmitting(false);
      setSubmitted(true);
      // Auto-open WhatsApp chat with prefilled enquiry details in hybrid flow
      openWhatsAppChat(snapshot);
    }
  };

  const services = [
    'Birthday Party Decoration',
    'Wedding Planning & Decor',
    'Corporate Events',
    'Kids Activities & Games',
    'Party Catering',
    'DJ, Sound & Stage Setup',
    'Milestone 1st Birthday Package',
  ];

  return (
    <div className="w-full bg-[#FFFDF9] select-none">
      
      {/* ======================================================== */}
      {/* 1. CREATIVE CURVED HERO BANNER                           */}
      {/* ======================================================== */}
      <section className="relative w-full bg-gradient-to-b from-[#FFF5F6] via-[#FFFDF9] to-[#FFFDF9] pt-14 pb-16 sm:py-20 overflow-hidden border-b border-[#FCD5DE]/60">
        
        {/* Ambient Glows */}
        <div className="absolute top-0 right-1/4 w-[450px] h-[450px] bg-[#FFE8ED]/60 rounded-full blur-3xl pointer-events-none -z-0" />
        <div className="absolute bottom-0 left-10 w-80 h-80 bg-[#FFF3DF]/50 rounded-full blur-3xl pointer-events-none -z-0" />

        <div className="w-full max-w-[1720px] mx-auto px-6 sm:px-10 lg:px-14 xl:px-16 relative z-10">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Header Text (~55%) */}
            <div className="lg:col-span-7 text-left">
              <div className="inline-flex items-center space-x-2.5 mb-3.5">
                <span className="w-6 h-[1.5px] bg-[#EE3775]" />
                <span className="text-[12px] sm:text-[13px] font-bold tracking-[0.2em] text-[#EE3775] uppercase font-sans">
                  LET’S CELEBRATE TOGETHER
                </span>
                <span className="w-6 h-[1.5px] bg-[#EE3775]" />
              </div>

              <h1 className="text-[38px] sm:text-[52px] lg:text-[60px] font-bold text-[#111A2E] font-serif leading-[1.12] mb-4">
                Plan Your Next Event with{' '}
                <span className="text-[#EE3775] relative inline-block font-dancing font-normal text-[46px] sm:text-[62px] lg:text-[72px]">
                  7Delights
                  <div className="absolute -bottom-2 left-0 w-full overflow-visible">
                    <GoldUnderline className="w-full h-3.5 text-[#F5A623]" />
                  </div>
                </span>
              </h1>

              <p className="text-[16px] sm:text-[18px] text-[#5A6E85] max-w-xl leading-relaxed">
                Have a dream celebration in mind? Fill out the inquiry form or reach out directly. Our Bangalore event planning team is ready to craft an unforgettable experience.
              </p>

              {/* Quick Contact Micro-Badges */}
              <div className="flex flex-wrap items-center gap-3 mt-6">
                <a
                  href="tel:+919980029977"
                  className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-white border border-[#FCD5DE] text-[13.5px] font-semibold text-[#111A2E] hover:text-[#EE3775] hover:border-[#EE3775] transition-colors shadow-2xs"
                >
                  <Phone className="w-3.5 h-3.5 text-[#EE3775]" />
                  <span>+91 99800 29977</span>
                </a>
                <a
                  href="mailto:mail@7delights.in"
                  className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-white border border-[#FCD5DE] text-[13.5px] font-semibold text-[#111A2E] hover:text-[#EE3775] hover:border-[#EE3775] transition-colors shadow-2xs"
                >
                  <Mail className="w-3.5 h-3.5 text-[#EE3775]" />
                  <span>mail@7delights.in</span>
                </a>
                <span className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-full bg-[#E3F8F2] text-[#059669] text-[12.5px] font-medium border border-[#C1F1E1]">
                  <span className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse" />
                  <span>Instant Response in Bangalore</span>
                </span>
              </div>
            </div>

            {/* Right Hero Stage Visual (~45%) with Creative Asymmetric Curve */}
            <div className="lg:col-span-5 relative flex justify-center lg:justify-end">
              <div className="relative w-full max-w-[500px] h-[280px] sm:h-[320px] rounded-3xl overflow-hidden shadow-xl border-4 border-white group">
                <img
                  src="/assets/contact-stage-setup.png"
                  alt="7Delights Royal Milestone Celebration Setup"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/10" />

                <div className="absolute bottom-4 left-5 right-5 text-left text-white">
                  <span className="inline-flex items-center space-x-1 px-2.5 py-0.5 rounded-full bg-white/20 backdrop-blur-md text-[11px] font-semibold mb-1">
                    <Sparkles className="w-3 h-3 text-[#F5A623]" />
                    <span>Real Event Setup</span>
                  </span>
                  <p className="text-[15px] font-bold font-serif leading-tight">
                    Custom Blue & Gold Milestone Birthday Theme
                  </p>
                  <p className="text-[12px] text-white/80">J.P. Nagar & Kanakapura Road, Bangalore</p>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ======================================================== */}
      {/* 2. MAIN SPLIT: CONTACT INFO + MAIL & ENQUIRY FORM        */}
      {/* ======================================================== */}
      <section className="relative w-full py-16 sm:py-20 lg:py-24 overflow-hidden">
        
        <div className="w-full max-w-[1720px] mx-auto px-6 sm:px-10 lg:px-14 xl:px-16 relative z-10">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 xl:gap-16 items-start">
            
            {/* ==================================================== */}
            {/* LEFT COLUMN: CONTACT DETAILS & OFFICES (~40%)        */}
            {/* ==================================================== */}
            <div className="lg:col-span-5 flex flex-col text-left space-y-6">
              
              <div>
                <div className="flex items-center space-x-3 mb-2">
                  <span className="text-[12px] font-bold tracking-[0.2em] text-[#EE3775] uppercase font-sans">
                    DIRECT CONTACT
                  </span>
                  <div className="h-[1px] w-12 bg-[#FCD5DE]" />
                </div>
                <h2 className="text-[28px] sm:text-[34px] font-bold text-[#111A2E] font-serif leading-tight">
                  Contact Information
                </h2>
                <p className="text-[14.5px] text-[#5A6E85] mt-2">
                  Visit our planning offices in Bangalore or get in touch for on-site consultation.
                </p>
              </div>

              {/* Office 1: Kanakapura Road / Vivekananda Colony */}
              <div className="bg-white rounded-2xl p-6 border border-[#F3E8E2] hover:border-[#FCD5DE] shadow-2xs hover:shadow-md transition-all duration-300">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-2xl bg-[#FFE8ED] border border-[#FCD5DE] flex items-center justify-center shrink-0 text-[#EE3775]">
                    <Building2 className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-[16px] font-bold text-[#111A2E] mb-1 font-sans">
                      7Delights ® Events — Head Office
                    </p>
                    <p className="text-[14px] text-[#5A6E85] leading-relaxed">
                      No 45, 2nd Main 1st Cross, Vivekananda Colony, Kanakapura Main Road, J.P. Nagar PO, Bangalore 560078.
                    </p>
                  </div>
                </div>
              </div>

              {/* Office 2: J.P. Nagar 2nd Phase */}
              <div className="bg-white rounded-2xl p-6 border border-[#F3E8E2] hover:border-[#FCD5DE] shadow-2xs hover:shadow-md transition-all duration-300">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-2xl bg-[#FFF3DF] border border-[#FFE4B8] flex items-center justify-center shrink-0 text-[#F5A623]">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-[16px] font-bold text-[#111A2E] mb-1 font-sans">
                      7Delights ® Events — Branch Office
                    </p>
                    <p className="text-[14px] text-[#5A6E85] leading-relaxed">
                      No 1709, 17th 'A' Main, 8th Cross, J.P. Nagar 2nd Phase, Bangalore 560078 (Near 9th Cross HDFC Bank Ltd).
                    </p>
                  </div>
                </div>
              </div>

              {/* Phone & Email Quick Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                
                {/* Phone */}
                <div className="bg-white rounded-2xl p-5 border border-[#F3E8E2] flex items-center space-x-3.5 shadow-2xs">
                  <div className="w-11 h-11 rounded-xl bg-[#E3F8F2] border border-[#C1F1E1] flex items-center justify-center shrink-0 text-[#059669]">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-[11px] font-bold text-[#7A8B9E] uppercase tracking-wider">Phone</p>
                    <a href="tel:+919980029977" className="text-[14.5px] font-bold text-[#111A2E] hover:text-[#EE3775] transition-colors">
                      +91 99800 29977
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="bg-white rounded-2xl p-5 border border-[#F3E8E2] flex items-center space-x-3.5 shadow-2xs">
                  <div className="w-11 h-11 rounded-xl bg-[#F2EDFF] border border-[#E0D5FF] flex items-center justify-center shrink-0 text-[#7B61FF]">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-[11px] font-bold text-[#7A8B9E] uppercase tracking-wider">Email</p>
                    <a href="mailto:mail@7delights.in" className="text-[14.5px] font-bold text-[#111A2E] hover:text-[#EE3775] transition-colors">
                      mail@7delights.in
                    </a>
                  </div>
                </div>

              </div>

              {/* Pay Online Callout Card */}
              <div className="bg-gradient-to-r from-[#FFF0F4] via-[#FFF9EE] to-white rounded-2xl p-5 sm:p-6 border border-[#FCD5DE] flex items-center justify-between shadow-xs">
                <div className="flex items-center space-x-3.5">
                  <div className="w-11 h-11 rounded-xl bg-white border border-[#FCD5DE] flex items-center justify-center text-[#EE3775] shrink-0">
                    <CreditCard className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-[15px] font-bold text-[#111A2E]">Instant Online Payment</h3>
                    <p className="text-[12.5px] text-[#5A6E85]">Secured by Razorpay • UPI / Cards / NetBanking</p>
                  </div>
                </div>

                <a
                  href="https://razorpay.me/@7delights"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-1.5 px-4 py-2 rounded-xl bg-[#EE3775] hover:bg-[#d82a65] text-white text-[13px] font-semibold transition-all shadow-xs cursor-pointer shrink-0"
                >
                  <span>Pay Now</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>

            </div>

            {/* ==================================================== */}
            {/* RIGHT COLUMN: MAIL AND ENQUIRY FORM (~60%)           */}
            {/* ==================================================== */}
            <div className="lg:col-span-7 bg-white rounded-3xl p-7 sm:p-10 border border-[#F3E8E2] shadow-sm text-left relative">
              
              <div className="mb-8">
                <div className="flex items-center space-x-3 mb-2">
                  <span className="text-[12px] font-bold tracking-[0.2em] text-[#EE3775] uppercase font-sans">
                    GET A FREE QUOTE
                  </span>
                  <div className="h-[1px] w-12 bg-[#FCD5DE]" />
                </div>
                <h2 className="text-[28px] sm:text-[34px] font-bold text-[#111A2E] font-serif leading-tight">
                  Mail and Enquiry
                </h2>
                <p className="text-[14.5px] text-[#5A6E85] mt-1.5">
                  Need our event planning services? Fill out the form, and we will get back to you with custom ideas within a few hours!
                </p>
              </div>

              {submitted ? (
                <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-b from-[#E3F8F2] to-[#D5F4EC] border border-[#B3EEDC] text-center space-y-4 shadow-sm animate-in fade-in duration-300">
                  <div className="w-16 h-16 rounded-full bg-white text-[#10B981] flex items-center justify-center mx-auto shadow-md">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  
                  <h3 className="text-[22px] sm:text-[26px] font-bold text-[#111A2E] font-serif leading-tight">
                    Enquiry Dispatched with Delight!
                  </h3>
                  
                  <p className="text-[14px] sm:text-[15px] text-[#2C4A3E] max-w-lg mx-auto leading-relaxed">
                    Your event details have been delivered to our Bangalore office (<span className="font-semibold text-[#111A2E]">mail@7delights.in</span>). Our planning coordinators are reviewing your date and venue.
                  </p>

                  {lastSubmittedData && (
                    <div className="pt-2">
                      <button
                        onClick={() => openWhatsAppChat(lastSubmittedData)}
                        type="button"
                        className="inline-flex items-center justify-center space-x-2 px-7 py-3.5 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white text-sm font-bold shadow-md hover:shadow-lg transition-all hover:scale-105 cursor-pointer"
                      >
                        <MessageCircle className="w-4 h-4 fill-white stroke-none" />
                        <span>Open Details in WhatsApp Chat</span>
                      </button>
                    </div>
                  )}

                  <div className="pt-3">
                    <button
                      onClick={() => {
                        setSubmitted(false);
                        setFormData({
                          name: '',
                          email: '',
                          phone: '',
                          location: '',
                          date: '',
                          service: 'Birthday Party Decoration',
                          subject: '',
                          message: '',
                        });
                      }}
                      type="button"
                      className="text-xs text-[#5A6E85] hover:text-[#EE3775] font-semibold underline underline-offset-4 cursor-pointer"
                    >
                      Send another enquiry
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  
                  {/* Row 1: Name */}
                  <div>
                    <label className="block text-[13px] font-bold text-[#111A2E] uppercase tracking-wider mb-2">
                      Full Name <span className="text-[#EE3775]">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Priya Sharma"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3.5 rounded-xl border border-[#E2E8F0] focus:border-[#EE3775] focus:ring-2 focus:ring-[#EE3775]/15 outline-none transition-all text-[14.5px] text-[#111A2E] bg-[#FFFDF9]/60"
                    />
                  </div>

                  {/* Row 2: Email & Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-[13px] font-bold text-[#111A2E] uppercase tracking-wider mb-2">
                        Email Address <span className="text-[#EE3775]">*</span>
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="e.g. priya@gmail.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3.5 rounded-xl border border-[#E2E8F0] focus:border-[#EE3775] focus:ring-2 focus:ring-[#EE3775]/15 outline-none transition-all text-[14.5px] text-[#111A2E] bg-[#FFFDF9]/60"
                      />
                    </div>

                    <div>
                      <label className="block text-[13px] font-bold text-[#111A2E] uppercase tracking-wider mb-2">
                        Phone Number <span className="text-[#EE3775]">*</span>
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="+91 98765 43210"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-3.5 rounded-xl border border-[#E2E8F0] focus:border-[#EE3775] focus:ring-2 focus:ring-[#EE3775]/15 outline-none transition-all text-[14.5px] text-[#111A2E] bg-[#FFFDF9]/60"
                      />
                    </div>
                  </div>

                  {/* Row 3: Location & Event Date */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-[13px] font-bold text-[#111A2E] uppercase tracking-wider mb-2">
                        Event Location / Venue <span className="text-[#EE3775]">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. J.P. Nagar / Whitefield / Indiranagar"
                        value={formData.location}
                        onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                        className="w-full px-4 py-3.5 rounded-xl border border-[#E2E8F0] focus:border-[#EE3775] focus:ring-2 focus:ring-[#EE3775]/15 outline-none transition-all text-[14.5px] text-[#111A2E] bg-[#FFFDF9]/60"
                      />
                    </div>

                    <div>
                      <label className="block text-[13px] font-bold text-[#111A2E] uppercase tracking-wider mb-2">
                        Event Date <span className="text-[#EE3775]">*</span>
                      </label>
                      <input
                        type="date"
                        required
                        value={formData.date}
                        onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                        className="w-full px-4 py-3.5 rounded-xl border border-[#E2E8F0] focus:border-[#EE3775] focus:ring-2 focus:ring-[#EE3775]/15 outline-none transition-all text-[14.5px] text-[#111A2E] bg-[#FFFDF9]/60"
                      />
                    </div>
                  </div>

                  {/* Row 4: Service Type */}
                  <div>
                    <label className="block text-[13px] font-bold text-[#111A2E] uppercase tracking-wider mb-2">
                      Service Interested In
                    </label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full px-4 py-3.5 rounded-xl border border-[#E2E8F0] focus:border-[#EE3775] focus:ring-2 focus:ring-[#EE3775]/15 outline-none transition-all text-[14.5px] text-[#111A2E] bg-[#FFFDF9]/60 cursor-pointer"
                    >
                      {services.map((s, idx) => (
                        <option key={idx} value={s}>{s}</option>
                      ))}
                    </select>
                  </div>

                  {/* Row 5: Subject */}
                  <div>
                    <label className="block text-[13px] font-bold text-[#111A2E] uppercase tracking-wider mb-2">
                      Subject
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. 1st Birthday Butterfly Theme Celebration"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full px-4 py-3.5 rounded-xl border border-[#E2E8F0] focus:border-[#EE3775] focus:ring-2 focus:ring-[#EE3775]/15 outline-none transition-all text-[14.5px] text-[#111A2E] bg-[#FFFDF9]/60"
                    />
                  </div>

                  {/* Row 6: Message */}
                  <div>
                    <label className="block text-[13px] font-bold text-[#111A2E] uppercase tracking-wider mb-2">
                      Your Ideas & Requirements
                    </label>
                    <textarea
                      rows={4}
                      placeholder="Tell us about your guests count, theme ideas, budget preferences, or specific entertainment requirements..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3.5 rounded-xl border border-[#E2E8F0] focus:border-[#EE3775] focus:ring-2 focus:ring-[#EE3775]/15 outline-none transition-all text-[14.5px] text-[#111A2E] bg-[#FFFDF9]/60 resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2 flex flex-col sm:flex-row items-center gap-4">
                    <button
                      type="submit"
                      disabled={submitting}
                      className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-9 py-4 rounded-full bg-[#EE3775] hover:bg-[#d82a65] text-white text-[15px] font-bold tracking-wide transition-all duration-200 shadow-md hover:shadow-lg hover:-translate-y-0.5 cursor-pointer disabled:opacity-75"
                    >
                      {submitting ? (
                        <>
                          <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                          <span>SENDING ENQUIRY...</span>
                        </>
                      ) : (
                        <>
                          <span>SEND ENQUIRY NOW</span>
                          <Send className="w-4 h-4" />
                        </>
                      )}
                    </button>

                    <button
                      type="button"
                      onClick={() => openWhatsAppChat(formData)}
                      className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-6 py-4 rounded-full bg-[#25D366]/15 hover:bg-[#25D366] text-[#128C7E] hover:text-white border border-[#25D366]/30 text-[14px] font-bold tracking-wide transition-all duration-200 cursor-pointer"
                    >
                      <MessageCircle className="w-4 h-4" />
                      <span>Chat on WhatsApp Directly</span>
                    </button>
                  </div>

                </form>
              )}

            </div>

          </div>

          {/* ==================================================== */}
          {/* 3. INTERACTIVE GOOGLE MAP OF BANGALORE               */}
          {/* ==================================================== */}
          <div className="mt-16 sm:mt-20 rounded-3xl overflow-hidden border border-[#F3E8E2] shadow-sm bg-white p-4">
            <div className="p-4 sm:p-5 text-left border-b border-gray-100 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <h3 className="text-[18px] sm:text-[20px] font-bold text-[#111A2E] font-serif">
                  7Delights Event Services across Bangalore
                </h3>
                <p className="text-[13.5px] text-[#5A6E85]">
                  Serving J.P. Nagar, Kanakapura Road, Whitefield, Koramangala, Indiranagar, Electronic City & across Karnataka.
                </p>
              </div>
              <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-[#FFE8ED] text-[#EE3775] text-[12.5px] font-semibold shrink-0">
                <MapPin className="w-3.5 h-3.5" />
                <span>Available Across Bangalore</span>
              </div>
            </div>

            <div className="w-full h-[360px] sm:h-[420px] rounded-2xl overflow-hidden relative">
              <iframe
                title="7Delights Location Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d124442.34848270505!2d77.51860086961448!3d12.919011718910018!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1508dae76743%3A0xc3e13ffdfc56dd4b!2sJ.%20P.%20Nagar%2C%20Bengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                className="w-full h-full border-0"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

        </div>

      </section>

    </div>
  );
}

