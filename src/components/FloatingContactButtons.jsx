import React, { useState } from 'react';
import { Phone, MessageCircle, X } from 'lucide-react';

export default function FloatingContactButtons() {
  const [tooltipVisible, setTooltipVisible] = useState(false);

  const whatsappUrl = "https://api.whatsapp.com/send/?phone=919980029977&text=Hi%207Delights,%20I%20am%20interested%20in%20your%20event%20planning%20and%20entertainment%20services.%20Please%20share%20details.";

  return (
    <div className="fixed bottom-6 right-5 sm:right-7 z-50 flex flex-col items-end gap-3 select-none">
      
      {/* Official WhatsApp Floating Button */}
      <div className="relative group">
        {/* Floating Tooltip Pill */}
        <div className="absolute right-full mr-3 top-1/2 -translate-y-1/2 hidden sm:flex items-center bg-[#111A2E]/95 text-white text-xs font-semibold px-3 py-1.5 rounded-xl shadow-lg border border-white/10 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
          <span>Chat on WhatsApp</span>
          <div className="absolute left-full top-1/2 -translate-y-1/2 border-4 border-transparent border-l-[#111A2E]" />
        </div>

        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat with 7Delights on WhatsApp"
          className="w-14 h-14 sm:w-[60px] sm:h-[60px] rounded-full bg-[#25D366] hover:bg-[#20BD5A] flex items-center justify-center shadow-xl shadow-[#25D366]/40 hover:shadow-2xl hover:shadow-[#25D366]/50 transform hover:scale-110 active:scale-95 transition-all duration-300 relative group cursor-pointer"
        >
          {/* Gentle ping animation behind icon */}
          <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-25 pointer-events-none" />
          
          <img
            src="/assets/fixed_whatsapp.svg"
            alt="WhatsApp Chat"
            className="w-8 h-8 sm:w-9 sm:h-9 object-contain drop-shadow-sm relative z-10"
          />
        </a>
      </div>

    </div>
  );
}

