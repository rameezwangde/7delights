import React from 'react';
import { Compass, ExternalLink, ArrowRight, Sparkles, FolderTree } from 'lucide-react';
import { GoldUnderline } from '../components/Doodles';

export default function SiteMapPage() {
  const sections = [
    {
      title: 'Main Navigation Pages',
      links: [
        { name: 'Home', href: '#home', desc: 'Homepage with hero, brand highlights, and featured celebrations.' },
        { name: 'About Us', href: '#about', desc: 'Company story, milestones, statistics, and 7Delights vision.' },
        { name: 'Services Hub', href: '#services', desc: 'Complete catalog of event management solutions.' },
        { name: 'Gallery', href: '#gallery', desc: 'Real photo portfolio of birthday decor, stage setups, and acts.' },
        { name: 'Videos', href: '#videos', desc: 'Live event highlight reels and show recordings.' },
        { name: 'Blog', href: '#blog', desc: 'Articles, party planning tips, decoration ideas, and trends.' },
        { name: 'Contact Us', href: '#contact', desc: 'Inquiry form, office details, direct phone, and WhatsApp chat.' },
      ],
    },
    {
      title: 'Core Event Categories',
      links: [
        { name: 'Balloon Decorations', href: '#birthday-balloon-decorations', desc: 'Organic balloon arches, garlands, milestone rings, and theme setups.' },
        { name: 'Flower Decorations', href: '#flower-decorations', desc: 'Botanical backdrops, wedding mandaps, entry gates, and fresh floral setups.' },
        { name: 'Corporate Events', href: '#corporate-events', desc: 'Annual days, award ceremonies, conference branding, and stage setups.' },
        { name: 'Amusements & Games', href: '#amusements-games', desc: 'Bouncy castles, carnival stalls, VR setups, and lawn activities.' },
        { name: 'Party Fun Eatables', href: '#party-fun-eatables', desc: 'Popcorn, cotton candy, chocolate fountains, and sweet corn stalls.' },
        { name: 'DJ Sound, Stage & Lighting', href: '#dj-sound-stage-lighting', desc: 'Concert sound, trusses, LED video walls, and intelligent lighting.' },
        { name: 'Shows & Entertainment', href: '#shows-entertainment', desc: '13 live entertainment acts including magicians, clowns, and puppeteers.' },
        { name: 'Dance Troupe & Music', href: '#dance-troup', desc: 'Punjabi Dhol, flash mobs, chenda melam, and choreographed dance groups.' },
        { name: 'Photography & Videography', href: '#photography-video', desc: 'Candid event photos, 4K cinematic video, and 360 selfie booths.' },
        { name: 'Special Effects (SFX)', href: '#special-effects-event-sfx', desc: 'Cold pyros, dry ice low fog clouds, and paper confetti blasts.' },
        { name: 'Party Cakes', href: '#cakes', desc: 'Custom fondant designer cakes, multi-tier towers, and photo cakes.' },
        { name: 'Gifting & Return Gifts', href: '#gifting', desc: 'Bespoke corporate hampers, luxury wedding welcome boxes, and return gifts.' },
      ],
    },
    {
      title: 'Popular Individual Services',
      links: [
        { name: 'Magic Show (Stage & Walk-Around)', href: '#magic-show-stage', desc: 'Mind-boggling stage illusions and walk-around sleight of hand.' },
        { name: 'Clowns & Juggling Entertainment', href: '#shows-entertainment/clowns-and-juggling', desc: 'Acrobatic clowns, ring juggling, and comedic antics.' },
        { name: 'Live Cartoon Mascots', href: '#shows-entertainment/live-cartoon-mascots', desc: 'Life-sized themed mascot characters for kid parties.' },
        { name: 'Bouncy Castles & Inflatables', href: '#bouncing-castle', desc: 'Clean inflatable bouncing castles and jumping houses.' },
        { name: 'Photo Booth with Instant Print', href: '#photo-booth-print', desc: 'Instant 4x6 print magnet photos with funny props.' },
        { name: '360 Video Selfie Booth', href: '#360-video-selfie-booth', desc: 'Slow-motion 360 spin platform video booth.' },
        { name: '3D Printing Corporate Gifting', href: '#gifting/3d-printing-corporate-gifting', desc: 'Personalized 3D printed lithophanes, trophies, and executive gifts.' },
      ],
    },
    {
      title: 'Support & Legal Policies',
      links: [
        { name: 'FAQ (Frequently Asked Questions)', href: '#faq', desc: 'Clear answers on advance deposits, themes, and setup timing.' },
        { name: 'Customer Support Desk', href: '#customer-support', desc: 'Phone, email, and WhatsApp contact channels for client care.' },
        { name: 'Cancel & Refund Policy', href: '#cancel-refund', desc: 'Cancellation notice windows, deposit refunds, and rescheduling terms.' },
        { name: 'Privacy Policy', href: '#privacy-policy', desc: 'How we collect, protect, and respect your private event information.' },
        { name: 'Terms & Conditions', href: '#terms-conditions', desc: 'Service agreements, venue access responsibilities, and safety standards.' },
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
            <Compass className="w-3.5 h-3.5" />
            <span>Complete Website Directory</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#111A2E] tracking-tight mb-2">
            Site Map
          </h1>

          <div className="flex justify-center mb-4">
            <GoldUnderline className="w-40 sm:w-52 h-auto text-[#EE3775]" />
          </div>

          <p className="max-w-2xl mx-auto text-sm sm:text-base text-[#5A6E85] leading-relaxed">
            Easily navigate every service, entertainment act, photo gallery, legal policy, and customer care channel available on 7Delights.
          </p>
        </div>
      </section>

      {/* 2. SITEMAP SECTIONS */}
      <section className="py-12 sm:py-16">
        <div className="w-full max-w-[1200px] mx-auto px-6 sm:px-10 space-y-12">
          {sections.map((sec, sIdx) => (
            <div key={sIdx} className="bg-white rounded-3xl p-6 sm:p-8 border border-[#F5E6EC] shadow-xs">
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-gray-100">
                <FolderTree className="w-5 h-5 text-[#EE3775]" />
                <h2 className="text-lg sm:text-xl font-bold text-[#111A2E]">{sec.title}</h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {sec.links.map((link, lIdx) => (
                  <a
                    key={lIdx}
                    href={link.href}
                    className="group p-4 rounded-2xl bg-[#FFFDF9] hover:bg-[#FFE8ED]/40 border border-[#F5E6EC] hover:border-[#FFD0DB] transition-all flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-1">
                        <span className="font-bold text-sm text-[#111A2E] group-hover:text-[#EE3775] transition-colors">
                          {link.name}
                        </span>
                        <ArrowRight className="w-3.5 h-3.5 text-gray-300 group-hover:text-[#EE3775] group-hover:translate-x-1 transition-all" />
                      </div>
                      <p className="text-xs text-[#5A6E85] leading-relaxed">{link.desc}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

