import React from 'react';
import { Phone, Mail, MapPin, Heart, ArrowUpRight, Sparkles, CreditCard } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="relative w-full bg-[#FFF5F6] text-[#1C2A39] pt-16 sm:pt-20 pb-12 overflow-hidden select-none border-t border-[#FCD5DE]/60">
      
      {/* Decorative soft glowing background accents */}
      <div className="absolute -top-24 left-1/4 w-96 h-96 bg-[#FFE8ED] rounded-full blur-3xl pointer-events-none -z-0" />
      <div className="absolute bottom-0 right-10 w-80 h-80 bg-[#FFF0DB]/70 rounded-full blur-3xl pointer-events-none -z-0" />

      {/* Decorative subtle wave at top edge */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#EE3775]/25 to-transparent" />

      <div className="w-full max-w-[1720px] mx-auto px-6 sm:px-10 lg:px-14 xl:px-16 relative z-10">
        
        {/* Top Section: Brand + Navigation Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-10 lg:gap-8 pb-14 border-b border-[#F5D8DF]">
          
          {/* Column 1: Brand & Bio */}
          <div className="lg:col-span-2 flex flex-col pr-0 lg:pr-6">
            <div className="flex items-center mb-5">
              <a href="#home" className="inline-block transition-transform hover:scale-[1.02]">
                <img
                  src="/assets/logo.png"
                  alt="7Delights.in Logo"
                  className="h-10 sm:h-11 w-auto object-contain drop-shadow-sm"
                />
              </a>
            </div>

            <p className="text-[#5A6E85] text-[14px] leading-relaxed max-w-[380px] mb-6">
              Making every occasion extra special. From bespoke birthdays and fairy-tale weddings to flawless corporate galas, we design memories that last a lifetime.
            </p>

            {/* Social Links */}
            <div className="flex items-center space-x-3">
              <a
                href="#placeholder"
                aria-label="Instagram"
                className="w-10 h-10 rounded-full bg-white hover:bg-[#EE3775] text-[#EE3775] hover:text-white border border-[#FCD5DE] flex items-center justify-center transition-all duration-200 shadow-sm hover:shadow-md"
              >
                <svg className="w-5 h-5 fill-none stroke-current" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                </svg>
              </a>
              <a
                href="#placeholder"
                aria-label="Facebook"
                className="w-10 h-10 rounded-full bg-white hover:bg-[#EE3775] text-[#EE3775] hover:text-white border border-[#FCD5DE] flex items-center justify-center transition-all duration-200 shadow-sm hover:shadow-md"
              >
                <svg className="w-5 h-5 fill-none stroke-current" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </a>
              <a
                href="#placeholder"
                aria-label="YouTube"
                className="w-10 h-10 rounded-full bg-white hover:bg-[#EE3775] text-[#EE3775] hover:text-white border border-[#FCD5DE] flex items-center justify-center transition-all duration-200 shadow-sm hover:shadow-md"
              >
                <svg className="w-5 h-5 fill-none stroke-current" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
                  <polygon points="10 15 15 12 10 9 10 15" fill="currentColor" />
                </svg>
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-[13.5px] font-bold tracking-wider uppercase text-[#1C2A39] mb-4 sm:mb-5 font-sans">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-[14px] text-[#5A6E85]">
              <li><a href="#home" className="hover:text-[#EE3775] hover:translate-x-1 inline-block transition-all duration-150">Home</a></li>
              <li><a href="#about" className="hover:text-[#EE3775] hover:translate-x-1 inline-block transition-all duration-150">About Us</a></li>
              <li><a href="#services" className="hover:text-[#EE3775] hover:translate-x-1 inline-block transition-all duration-150">Services</a></li>
              <li><a href="#gallery" className="hover:text-[#EE3775] hover:translate-x-1 inline-block transition-all duration-150">Gallery</a></li>
              <li><a href="#videos" className="hover:text-[#EE3775] hover:translate-x-1 inline-block transition-all duration-150">Videos</a></li>
              <li><a href="#blog" className="hover:text-[#EE3775] hover:translate-x-1 inline-block transition-all duration-150">Blog</a></li>
            </ul>
          </div>

          {/* Column 3: Event Services */}
          <div>
            <h4 className="text-[13.5px] font-bold tracking-wider uppercase text-[#1C2A39] mb-4 sm:mb-5 font-sans">
              Our Services
            </h4>
            <ul className="space-y-2.5 text-[14px] text-[#5A6E85]">
              <li><a href="#placeholder" className="hover:text-[#EE3775] hover:translate-x-1 inline-block transition-all duration-150">Birthday Decoration</a></li>
              <li><a href="#placeholder" className="hover:text-[#EE3775] hover:translate-x-1 inline-block transition-all duration-150">Wedding Planning</a></li>
              <li><a href="#placeholder" className="hover:text-[#EE3775] hover:translate-x-1 inline-block transition-all duration-150">Corporate Events</a></li>
              <li><a href="#placeholder" className="hover:text-[#EE3775] hover:translate-x-1 inline-block transition-all duration-150">Kids Activities</a></li>
              <li><a href="#placeholder" className="hover:text-[#EE3775] hover:translate-x-1 inline-block transition-all duration-150">Party Catering</a></li>
              <li><a href="#placeholder" className="hover:text-[#EE3775] hover:translate-x-1 inline-block transition-all duration-150">DJ & Stage Setup</a></li>
            </ul>
          </div>

          {/* Column 4: Customer & Legal (User Requested Items) */}
          <div>
            <h4 className="text-[13.5px] font-bold tracking-wider uppercase text-[#1C2A39] mb-4 sm:mb-5 font-sans">
              Support & Legal
            </h4>
            <ul className="space-y-2.5 text-[14px] text-[#5A6E85]">
              <li><a href="#about" className="hover:text-[#EE3775] hover:translate-x-1 inline-block transition-all duration-150">FAQ</a></li>
              <li><a href="#placeholder" className="hover:text-[#EE3775] hover:translate-x-1 inline-block transition-all duration-150">Customer Support</a></li>
              <li><a href="#placeholder" className="hover:text-[#EE3775] hover:translate-x-1 inline-block transition-all duration-150">Cancel & Refund</a></li>
              <li><a href="#placeholder" className="hover:text-[#EE3775] hover:translate-x-1 inline-block transition-all duration-150">Privacy Policy</a></li>
              <li><a href="#placeholder" className="hover:text-[#EE3775] hover:translate-x-1 inline-block transition-all duration-150">Terms & Conditions</a></li>
              <li><a href="#placeholder" className="hover:text-[#EE3775] hover:translate-x-1 inline-block transition-all duration-150">Site Map</a></li>
            </ul>
          </div>

          {/* Column 5: Contact & Payment */}
          <div>
            <h4 className="text-[13.5px] font-bold tracking-wider uppercase text-[#1C2A39] mb-4 sm:mb-5 font-sans">
              Contact
            </h4>
            <div className="space-y-3.5 text-[14px] text-[#5A6E85]">
              <div className="flex items-start space-x-2.5">
                <div className="w-7 h-7 rounded-full bg-white border border-[#FCD5DE] flex items-center justify-center shrink-0 text-[#EE3775] mt-0.5 shadow-xs">
                  <MapPin className="w-3.5 h-3.5" />
                </div>
                <span className="leading-snug pt-0.5">Bangalore, Karnataka, India</span>
              </div>
              <div className="flex items-center space-x-2.5">
                <div className="w-7 h-7 rounded-full bg-white border border-[#FCD5DE] flex items-center justify-center shrink-0 text-[#EE3775] shadow-xs">
                  <Phone className="w-3.5 h-3.5" />
                </div>
                <a href="#placeholder" className="hover:text-[#EE3775] transition-colors font-medium text-[#1C2A39]">+91 99800 29977</a>
              </div>
              <div className="flex items-center space-x-2.5">
                <div className="w-7 h-7 rounded-full bg-white border border-[#FCD5DE] flex items-center justify-center shrink-0 text-[#EE3775] shadow-xs">
                  <Mail className="w-3.5 h-3.5" />
                </div>
                <a href="mailto:mail@7delights.in" className="hover:text-[#EE3775] transition-colors font-medium text-[#1C2A39]">mail@7delights.in</a>
              </div>

              {/* Razorpay Online Payment Badge */}
              <div className="pt-2">
                <a
                  href="https://razorpay.me/@7delights"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/pay inline-flex items-center space-x-2 px-3.5 py-2 rounded-xl bg-white border border-[#FCD5DE] hover:border-[#EE3775] text-[#1C2A39] hover:text-[#EE3775] transition-all duration-200 shadow-2xs hover:shadow-sm"
                >
                  <CreditCard className="w-4 h-4 text-[#EE3775]" />
                  <span className="text-[13px] font-semibold">Pay Online</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#EE3775] group-hover/pay:translate-x-0.5 group-hover/pay:-translate-y-0.5 transition-transform" />
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Handcrafted Note */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-[13.5px] text-[#718297] gap-4">
          <p>© {new Date().getFullYear()} <span className="font-semibold text-[#1C2A39]">7Delights.in</span> — All rights reserved.</p>
          <div className="flex items-center space-x-1.5 bg-white/70 border border-[#FCD5DE] px-3.5 py-1.5 rounded-full shadow-2xs">
            <span>Crafted with</span>
            <Heart className="w-4 h-4 text-[#EE3775] fill-[#EE3775]" />
            <span>for unforgettable celebrations</span>
          </div>
        </div>

      </div>

    </footer>
  );
}

