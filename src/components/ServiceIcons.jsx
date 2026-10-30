import React from 'react';

// Custom precision SVGs for each service icon matching the reference screenshot exactly
export function BirthdayBalloonsIcon({ className = 'w-6 h-6' }) {
  return (
    <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <path
        d="M12.5 6.5C9.5 6.5 7.2 9.2 7.2 12.8C7.2 16.2 9.5 19 12.5 19.5"
        stroke="#EE3775"
        strokeWidth="1.9"
        strokeLinecap="round"
      />
      <path
        d="M19.5 6.5C22.5 6.5 24.8 9.2 24.8 12.8C24.8 16.2 22.5 19 19.5 19.5"
        stroke="#EE3775"
        strokeWidth="1.9"
        strokeLinecap="round"
      />
      <path
        d="M16 9.5C16.8 11.2 16.8 14.5 16 16.5"
        stroke="#EE3775"
        strokeWidth="1.4"
        strokeLinecap="round"
        opacity="0.4"
      />
      <path
        d="M12.5 19.5L13.5 20.8M19.5 19.5L18.5 20.8"
        stroke="#EE3775"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path
        d="M13.5 20.8C14.5 22 15 24 14.2 26"
        stroke="#EE3775"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
      <path
        d="M18.5 20.8C17.5 22 17 24 17.8 26"
        stroke="#EE3775"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function WeddingRingsIcon({ className = 'w-6 h-6' }) {
  return (
    <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <ellipse
        cx="12.5"
        cy="17.5"
        rx="5.6"
        ry="6.6"
        stroke="#F5A623"
        strokeWidth="1.9"
      />
      <ellipse
        cx="19.5"
        cy="17.5"
        rx="5.6"
        ry="6.6"
        stroke="#F5A623"
        strokeWidth="1.9"
      />
      <path
        d="M10.2 9.5L12.5 6.5L14.8 9.5L12.5 11Z"
        stroke="#F5A623"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <path
        d="M12.5 4V5M8.2 7.5L9.2 8M16.8 7.5L15.8 8"
        stroke="#F5A623"
        strokeWidth="1.3"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function CorporateEventsIcon({ className = 'w-6 h-6' }) {
  return (
    <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <circle cx="16" cy="10.5" r="2.8" stroke="#7B61FF" strokeWidth="1.9" />
      <path
        d="M11 21.5C11 18.2 13.2 16.8 16 16.8C18.8 16.8 21 18.2 21 21.5"
        stroke="#7B61FF"
        strokeWidth="1.9"
        strokeLinecap="round"
      />
      <circle cx="10" cy="12.5" r="2.1" stroke="#7B61FF" strokeWidth="1.7" />
      <path
        d="M6.5 21C6.5 18.8 8.2 17.8 10.2 17.8"
        stroke="#7B61FF"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
      <circle cx="22" cy="12.5" r="2.1" stroke="#7B61FF" strokeWidth="1.7" />
      <path
        d="M25.5 21C25.5 18.8 23.8 17.8 21.8 17.8"
        stroke="#7B61FF"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function KidsActivitiesIcon({ className = 'w-6 h-6' }) {
  return (
    <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <path
        d="M8.5 23.5L11.5 12.2L20 20.8L8.5 23.5Z"
        stroke="#10B981"
        strokeWidth="1.9"
        strokeLinejoin="round"
      />
      <path
        d="M10.8 17.5L15 21.5M11.5 14.8L17.5 20.5"
        stroke="#10B981"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
      <path
        d="M17.5 10L20 7M22 13L25 11M20 16L24.5 17"
        stroke="#10B981"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <circle cx="21" cy="7.5" r="1.1" fill="#10B981" />
      <circle cx="26" cy="15" r="1.1" fill="#10B981" />
      <circle cx="16.5" cy="5.5" r="0.8" fill="#10B981" />
    </svg>
  );
}

export default function ServiceIcons() {
  const services = [
    {
      title: 'Birthday',
      subtitle: 'Parties',
      bgColor: 'bg-[#FFE6ED]',
      icon: <BirthdayBalloonsIcon className="w-7 h-7" />,
    },
    {
      title: 'Wedding',
      subtitle: 'Planning',
      bgColor: 'bg-[#FFF3DF]',
      icon: <WeddingRingsIcon className="w-7 h-7" />,
    },
    {
      title: 'Corporate',
      subtitle: 'Events',
      bgColor: 'bg-[#EFEAFF]',
      icon: <CorporateEventsIcon className="w-7 h-7" />,
    },
    {
      title: 'Kids',
      subtitle: 'Activities',
      bgColor: 'bg-[#E3F8F2]',
      icon: <KidsActivitiesIcon className="w-7 h-7" />,
    },
  ];

  return (
    <>
      {/* Desktop & Tablet: 1 single row with vertical dividers */}
      <div className="hidden sm:flex items-center justify-between w-full max-w-[620px] select-none">
        {services.map((service, index) => (
          <React.Fragment key={service.title}>
            <div className="flex-1 flex flex-col items-center text-center group cursor-pointer transition-transform duration-200 hover:-translate-y-1">
              <div
                className={`w-[52px] h-[52px] md:w-[56px] md:h-[56px] rounded-full ${service.bgColor} flex items-center justify-center transition-all duration-300 group-hover:scale-105 group-hover:shadow-sm mb-2`}
              >
                {service.icon}
              </div>
              <div className="text-[12.5px] md:text-[13px] lg:text-[13.5px] font-semibold text-[#18253E] leading-[1.24] tracking-tight">
                <div>{service.title}</div>
                <div>{service.subtitle}</div>
              </div>
            </div>
            {index < services.length - 1 && (
              <div className="h-10 w-[1px] bg-[#E2E8F0]/80 self-center mx-1 shrink-0" />
            )}
          </React.Fragment>
        ))}
      </div>

      {/* Mobile: 2x2 grid */}
      <div className="grid sm:hidden grid-cols-2 gap-y-6 gap-x-4 w-full max-w-[320px] mx-auto select-none">
        {services.map((service) => (
          <div
            key={service.title}
            className="flex flex-col items-center text-center p-2 rounded-xl bg-white/60 shadow-sm"
          >
            <div
              className={`w-12 h-12 rounded-full ${service.bgColor} flex items-center justify-center mb-1.5`}
            >
              {service.icon}
            </div>
            <div className="text-[12px] font-semibold text-[#18253E] leading-tight">
              <div>{service.title}</div>
              <div>{service.subtitle}</div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
