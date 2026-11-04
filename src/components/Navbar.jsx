import React, { useState, useEffect } from 'react';
import { ChevronDown, Phone, Menu, X, Sparkles } from 'lucide-react';

export default function Navbar({ currentPage = 'home' }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'HOME', href: '#home', id: 'home' },
    { name: 'ABOUT', href: '#about', id: 'about' },
    { name: 'SERVICES', href: '#services', id: 'services', hasDropdown: true },
    { name: 'BLOG', href: '#blog', id: 'blog' },
    { name: 'GALLERY', href: '#gallery', id: 'gallery' },
    { name: 'VIDEOS', href: '#videos', id: 'videos' },
    { name: 'CONTACT', href: '#contact', id: 'contact' },
  ];

  const serviceSubItems = [
    'ACTIVITIES & EVENTS',
    'AMUSEMENTS & GAMES',
    'BALLOON DECORATIONS',
    'CORPORATE EVENTS',
    'DANCE TROUPE & MUSIC',
    'DJ SOUND STAGE LIGHTS',
    'EVENT SFX',
    'FLOWER DECORATIONS',
    'PARTY FUN EATABLES',
    'PHOTOGRAPHY & VIDEO',
    'SHOWS & ENTERTAINMENT',
    'PARTY CAKES',
    'GIFTING',
  ];

  return (
    <header
      className={`sticky top-0 left-0 right-0 w-full z-50 select-none transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-md border-b border-gray-100'
          : 'bg-white border-b border-gray-100/70'
      }`}
    >
      <div className="w-full max-w-[1832px] mx-auto px-6 sm:px-10 lg:px-14 xl:px-16 h-[80px] sm:h-[88px] lg:h-[92px] flex items-center justify-between transition-all duration-300">
        
        {/* Left: 7Delights.in Logo */}
        <div className="flex items-center shrink-0">
          <a href="#home" className="flex items-center focus:outline-none">
            <img
              src="/assets/logo.png"
              alt="7Delights.in - Delighting Every Moment"
              className="h-11 sm:h-13 lg:h-[54px] w-auto object-contain cursor-pointer transition-transform hover:scale-[1.01]"
            />
          </a>
        </div>

        {/* Center: Desktop Navigation Links */}
        <nav className="hidden xl:flex items-center space-x-7 2xl:space-x-9">
          {navLinks.map((link) => {
            const isActive = currentPage === link.id;

            return (
              <div key={link.name} className="relative flex flex-col items-center group py-2">
                <a
                  href={link.href}
                  className={`flex items-center text-[13px] font-semibold tracking-[0.12em] uppercase transition-colors duration-200 ${
                    isActive
                      ? 'text-[#EE3775] font-bold'
                      : 'text-[#1B253D] hover:text-[#EE3775]'
                  }`}
                >
                  <span>{link.name}</span>
                  {link.hasDropdown && (
                    <ChevronDown
                      className={`w-3.5 h-3.5 ml-1 stroke-[2.5] transition-transform duration-200 group-hover:rotate-180 ${
                        isActive ? 'text-[#EE3775]' : 'text-[#1B253D] group-hover:text-[#EE3775]'
                      }`}
                    />
                  )}
                </a>
                
                {/* Active Pink Indicator Bar - positioned consistently right under active item */}
                {isActive && (
                  <div className="absolute -bottom-1 h-[2.5px] bg-[#EE3775] rounded-full w-6 shadow-xs animate-in fade-in duration-200" />
                )}

                {/* Dropdown Menu for SERVICES */}
                {link.hasDropdown && (
                  <div className="absolute top-full left-0 pt-3 hidden group-hover:block transition-all duration-200 z-50">
                    <div className="w-64 bg-white rounded-2xl shadow-2xl border border-gray-100 py-3 px-2 flex flex-col gap-0.5 animate-in fade-in slide-in-from-top-1 duration-150">
                      {serviceSubItems.map((item, idx) => (
                        <a
                          key={idx}
                          href="#services"
                          className="px-3.5 py-2 rounded-xl text-[12px] font-bold tracking-wider text-[#1B253D] hover:text-[#EE3775] hover:bg-[#FFF0F4] transition-all flex items-center justify-between"
                        >
                          <span>{item}</span>
                          <span className="text-[10px] text-gray-300 group-hover/item:text-[#EE3775]">›</span>
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </nav>

        {/* Right: Phone Call Section */}
        <div className="hidden sm:flex items-center space-x-3 shrink-0">
          <a
            href="tel:+919980029977"
            className="w-10 h-10 lg:w-11 lg:h-11 rounded-full bg-[#EE3775] hover:bg-[#DE2765] flex items-center justify-center text-white transition-all duration-300 shadow-md shadow-[#EE3775]/25 hover:scale-105"
            aria-label="Call Us"
          >
            <Phone className="w-5 h-5 fill-white stroke-none" />
          </a>
          <div className="flex flex-col text-left">
            <span className="text-[10px] font-semibold uppercase tracking-[0.14em] text-[#64748B] leading-none mb-1">
              CALL US
            </span>
            <a
              href="tel:+919980029977"
              className="text-[14px] lg:text-[14.5px] font-bold text-[#121E36] tracking-tight leading-none hover:text-[#EE3775] transition-colors"
            >
              +919980029977
            </a>
          </div>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex xl:hidden items-center space-x-3">
          <a
            href="tel:+919980029977"
            className="sm:hidden w-9 h-9 rounded-full bg-[#EE3775] flex items-center justify-center text-white shadow-sm"
            aria-label="Call Us"
          >
            <Phone className="w-4 h-4 fill-white stroke-none" />
          </a>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-[#121E36] hover:text-[#EE3775] focus:outline-none transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
          </button>
        </div>

      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-white border-t border-gray-100 px-6 py-6 shadow-xl animate-in slide-in-from-top-2 duration-200 max-h-[85vh] overflow-y-auto">
          <nav className="flex flex-col space-y-3">
            {navLinks.map((link) => {
              const isActive = currentPage === link.id;

              if (link.hasDropdown) {
                return (
                  <div key={link.name} className="border-b border-gray-50 pb-2">
                    <button
                      type="button"
                      onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                      className={`w-full flex items-center justify-between text-sm font-semibold tracking-wider uppercase py-2 ${
                        isActive ? 'text-[#EE3775] font-bold' : 'text-[#121E36]'
                      }`}
                    >
                      <span className="flex items-center space-x-2">
                        {isActive && <span className="w-1.5 h-1.5 rounded-full bg-[#EE3775]" />}
                        <span>{link.name}</span>
                      </span>
                      <ChevronDown
                        className={`w-4 h-4 text-gray-400 transition-transform duration-200 ${
                          mobileServicesOpen ? 'rotate-180 text-[#EE3775]' : ''
                        }`}
                      />
                    </button>

                    {mobileServicesOpen && (
                      <div className="pl-4 pr-2 py-2 flex flex-col space-y-2 bg-[#FFFDF9] rounded-xl my-1 border border-pink-50">
                        {serviceSubItems.map((item, idx) => (
                          <a
                            key={idx}
                            href="#services"
                            onClick={() => {
                              setMobileMenuOpen(false);
                              setMobileServicesOpen(false);
                            }}
                            className="text-[12px] font-bold tracking-wide text-[#1B253D] hover:text-[#EE3775] py-1.5 px-2 rounded-lg hover:bg-white"
                          >
                            {item}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex items-center justify-between text-sm font-semibold tracking-wider uppercase py-2 border-b border-gray-50 ${
                    isActive ? 'text-[#EE3775] font-bold' : 'text-[#121E36]'
                  }`}
                >
                  <span className="flex items-center space-x-2">
                    {isActive && <span className="w-1.5 h-1.5 rounded-full bg-[#EE3775]" />}
                    <span>{link.name}</span>
                  </span>
                </a>
              );
            })}
            <div className="pt-4 flex items-center space-x-3">
              <div className="w-10 h-10 rounded-full bg-[#EE3775] flex items-center justify-center text-white">
                <Phone className="w-4 h-4 fill-white stroke-none" />
              </div>
              <div>
                <div className="text-[10px] font-semibold uppercase text-gray-400 tracking-wider">CALL US</div>
                <div className="text-base font-bold text-[#121E36]">+919980029977</div>
              </div>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
