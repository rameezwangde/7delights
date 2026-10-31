import React from 'react';
import { Phone, Mail, MapPin, ArrowRight, Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="relative w-full bg-[#111A2E] text-white pt-16 sm:pt-20 pb-12 overflow-hidden select-none">
      
      {/* Decorative subtle ambient glows */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#EE3775]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#F5A623]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="w-full max-w-[1720px] mx-auto px-6 sm:px-10 lg:px-14 xl:px-16 relative z-10">
        
        {/* Top Section: Brand + Navigation Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 pb-14 border-b border-white/10">
          
          {/* Column 1: Brand & Bio */}
          <div className="lg:col-span-2 flex flex-col pr-0 lg:pr-8">
            <div className="flex items-center mb-5">
              {/* Logo on clean white pill badge */}
              <div className="bg-white px-3.5 py-1.5 rounded-xl inline-block shadow-sm">
                <img
                  src="/assets/logo.png"
                  alt="7Delights.in Logo"
                  className="h-10 sm:h-11 w-auto object-contain"
                />
              </div>
            </div>

            <p className="text-gray-300 text-[14.5px] leading-relaxed max-w-[420px] mb-6">
              Making every occasion extra special. From bespoke birthdays and fairy-tale weddings to flawless corporate galas, we design memories that last a lifetime.
            </p>

            {/* Social Links (Placeholders) */}
            <div className="flex items-center space-x-3">
              <a
                href="#placeholder"
                aria-label="Instagram"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#EE3775] flex items-center justify-center text-white transition-all duration-200"
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
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#EE3775] flex items-center justify-center text-white transition-all duration-200"
              >
                <svg className="w-5 h-5 fill-none stroke-current" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </a>
              <a
                href="#placeholder"
                aria-label="YouTube"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#EE3775] flex items-center justify-center text-white transition-all duration-200"
              >
                <svg className="w-5 h-5 fill-none stroke-current" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
                  <polygon points="10 15 15 12 10 9 10 15" fill="currentColor" />
                </svg>
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links (Placeholders) */}
          <div>
            <h4 className="text-[15px] font-bold tracking-wider uppercase text-white mb-5 font-sans">
              Quick Links
            </h4>
            <ul className="space-y-3 text-[14px] text-gray-300">
              <li><a href="#placeholder" className="hover:text-[#EE3775] transition-colors">Home</a></li>
              <li><a href="#placeholder" className="hover:text-[#EE3775] transition-colors">About Us</a></li>
              <li><a href="#placeholder" className="hover:text-[#EE3775] transition-colors">Services</a></li>
              <li><a href="#placeholder" className="hover:text-[#EE3775] transition-colors">Gallery</a></li>
              <li><a href="#placeholder" className="hover:text-[#EE3775] transition-colors">Videos</a></li>
              <li><a href="#placeholder" className="hover:text-[#EE3775] transition-colors">Blog</a></li>
            </ul>
          </div>

          {/* Column 3: Event Services (Placeholders) */}
          <div>
            <h4 className="text-[15px] font-bold tracking-wider uppercase text-white mb-5 font-sans">
              Services
            </h4>
            <ul className="space-y-3 text-[14px] text-gray-300">
              <li><a href="#placeholder" className="hover:text-[#EE3775] transition-colors">Birthday Decoration</a></li>
              <li><a href="#placeholder" className="hover:text-[#EE3775] transition-colors">Wedding Planning</a></li>
              <li><a href="#placeholder" className="hover:text-[#EE3775] transition-colors">Corporate Events</a></li>
              <li><a href="#placeholder" className="hover:text-[#EE3775] transition-colors">Kids Party Activities</a></li>
              <li><a href="#placeholder" className="hover:text-[#EE3775] transition-colors">Party Catering</a></li>
              <li><a href="#placeholder" className="hover:text-[#EE3775] transition-colors">DJ & Stage Setup</a></li>
            </ul>
          </div>

          {/* Column 4: Contact Info (Placeholders) */}
          <div>
            <h4 className="text-[15px] font-bold tracking-wider uppercase text-white mb-5 font-sans">
              Get In Touch
            </h4>
            <div className="space-y-4 text-[14px] text-gray-300">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-[#EE3775] shrink-0 mt-0.5" />
                <span>Bangalore, Karnataka, India</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-[#EE3775] shrink-0" />
                <a href="#placeholder" className="hover:text-[#EE3775] transition-colors">+91 99800 29977</a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-[#EE3775] shrink-0" />
                <a href="#placeholder" className="hover:text-[#EE3775] transition-colors">info@7delights.in</a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Handcrafted Note */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-[13px] text-gray-400 gap-4">
          <p>© {new Date().getFullYear()} 7Delights.in — All rights reserved.</p>
          <div className="flex items-center space-x-1">
            <span>Crafted with</span>
            <Heart className="w-4 h-4 text-[#EE3775] fill-[#EE3775]" />
            <span>for unforgettable celebrations</span>
          </div>
        </div>

      </div>

    </footer>
  );
}

