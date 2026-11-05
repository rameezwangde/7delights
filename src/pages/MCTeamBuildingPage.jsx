import React, { useState } from 'react';
import { 
  Clock, 
  MapPin, 
  Phone, 
  MessageCircle, 
  ShieldCheck, 
  Sparkles, 
  CheckCircle, 
  HelpCircle, 
  ChevronDown, 
  Users, 
  Mic, 
  Trophy, 
  PartyPopper,
  Flame,
  Award,
  Video,
  Target,
  Smile,
  HeartHandshake
} from 'lucide-react';

export default function MCTeamBuildingPage() {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const activityCategories = [
    {
      title: 'High-Energy Icebreakers & Warmups',
      desc: 'Rapid-fire crowd engagement games that dissolve departmental silos, spark spontaneous laughter, and get everyone energized from the very first minute.',
      tag: 'Icebreakers',
      color: 'bg-[#FFE8ED] text-[#EE3775] border-[#FFD0DB]',
      image: '/assets/mc-games-main.webp'
    },
    {
      title: 'Collaborative Problem-Solving & Strategy Rallies',
      desc: 'Hands-on group challenges, puzzle relays, and strategic communication tasks that test leadership, active listening, and cross-functional team synergy.',
      tag: 'Strategic Synergy',
      color: 'bg-[#FFF3DF] text-[#D97706] border-[#FFE4B8]',
      image: '/assets/corp-mc-games.webp'
    },
    {
      title: 'Musical, Trivia & Karaoke Face-Offs',
      desc: 'Interactive digital quizzes, Bollywood/Hollywood trivia showdowns, hook-step dances, and hilarious team lip-sync / karaoke showdowns on stage.',
      tag: 'Stage Face-Offs',
      color: 'bg-[#F2EDFF] text-[#7B61FF] border-[#E0D5FF]',
      image: '/assets/mc-games-banner.webp'
    },
    {
      title: 'Corporate Awards & Grand Recognition Ceremonies',
      desc: 'Polished emcees who orchestrate annual performance awards, milestone felicitations, and employee recognition segments with dignity and high excitement.',
      tag: 'Award Felicitations',
      color: 'bg-[#EBF7F2] text-[#00A86B] border-[#C8EFE0]',
      image: '/assets/corp-corporate-events-banner.webp'
    }
  ];

  const highlights = [
    {
      icon: <Mic className="w-5 h-5 text-[#EE3775]" />,
      title: 'Multilingual Emcees',
      desc: 'Versatile corporate anchors fluent in English, Hindi, and Kannada who read the room and keep energy peak high.'
    },
    {
      icon: <Target className="w-5 h-5 text-[#7B61FF]" />,
      title: 'Custom Curated Themes',
      desc: 'Games tailored to your company values, annual retreat themes, town hall messages, or celebration objectives.'
    },
    {
      icon: <Trophy className="w-5 h-5 text-[#00A86B]" />,
      title: 'Inclusive Participation',
      desc: 'Designed so introverts and extroverts alike feel comfortable participating without awkward forced spotlight.'
    },
    {
      icon: <HeartHandshake className="w-5 h-5 text-[#D97706]" />,
      title: 'Turnkey Props & Game Kits',
      desc: 'All game props, buzzers, blindfolds, scoreboards, and stage equipment provided and managed end-to-end.'
    }
  ];

  const faqs = [
    {
      q: 'How far in advance should I book 7Delights MC team building activities for my event?',
      a: 'To ensure maximum availability of top-tier corporate anchors, specialized facilitation props, and sound equipment, we recommend booking at least 1 to 6 weeks in advance for corporate offsites and parties, and 2 to 3 months in advance for major annual corporate retreats and quarterly summits. However, if you have a last-minute request, contact us and we will do our best to make it happen!'
    },
    {
      q: 'How long do the MC Team Building sessions typically last?',
      a: 'Our standard high-energy session runs for 2 hours, which is the ideal duration to keep energy peak high without causing fatigue. We can also customize half-day modules (3-4 hours) with structured intervals for offsite workshops, or a 60-minute quick-fire icebreaker session preceding dinner.'
    },
    {
      q: 'What are the venue and equipment requirements from the organizers?',
      a: 'We require a functional wireless microphone system (at least 2 cordless mics) and a PA sound system (which we can also supply if needed). The organizers should provide the winner prizes/mementos. Music can be connected via AUX/Bluetooth to the house console.'
    },
    {
      q: 'Can the activities be conducted indoors or outdoors?',
      a: 'Both! We conduct ballroom stage games, banquet hall team quizzes, and open-lawn physical team challenges (giant relays, human knots, minefield walks) tailored to whatever space your resort or hotel provides.'
    },
    {
      q: 'How do you handle diverse age groups and corporate seniorities?',
      a: 'Our seasoned facilitators specialize in psychological safety and dignified humor. We make sure CXOs, managers, and fresh recruits can play together as equals without any physical strain or uncomfortable embarrassment.'
    },
    {
      q: 'What is your payment policy?',
      a: 'To secure your date, anchor booking, and materials, we require an advance payment upon signing the agreement. The remaining balance is completed in milestones leading up to or on the day of the event.'
    }
  ];

  return (
    <div className="w-full bg-[#FFFDF9] text-[#111A2E]">
      {/* Top Breadcrumb & Hero */}
      <section className="relative w-full bg-gradient-to-b from-[#FFF5F7] via-[#FFFDF9] to-[#FFFDF9] pt-8 pb-14 px-4 sm:px-6 lg:px-8 border-b border-[#F5E6E8]">
        <div className="max-w-7xl mx-auto">
          {/* Breadcrumb Navigation */}
          <nav className="flex items-center gap-2 text-xs sm:text-sm text-[#5A6E85] mb-6 flex-wrap">
            <a href="#" className="hover:text-[#EE3775] transition-colors">Home</a>
            <span>/</span>
            <a href="#corporate-events" className="hover:text-[#EE3775] transition-colors">Corporate Events</a>
            <span>/</span>
            <span className="text-[#111A2E] font-medium">MC Games Team Building</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FFE8ED] border border-[#FFD0DB] text-[#EE3775] text-xs sm:text-sm font-semibold tracking-wide">
                <Sparkles className="w-4 h-4" />
                <span>Premier Corporate Employee Engagement</span>
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#111A2E] leading-tight">
                Corporate <span className="text-[#EE3775]">MC Games & Team Building</span> in Bangalore
              </h1>
              <p className="text-base sm:text-lg text-[#5A6E85] leading-relaxed">
                Forge stronger teams, boost morale, and spark spontaneous celebration with 7Delights seasoned corporate anchors and facilitators. From high-energy icebreakers and collaborative strategy rallies to karaoke face-offs and awards ceremonies.
              </p>

              {/* Quick Spec Pills */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
                <div className="flex items-center gap-2.5 p-3 rounded-xl bg-white border border-[#F3E8E9] shadow-sm">
                  <Clock className="w-5 h-5 text-[#EE3775] shrink-0" />
                  <div>
                    <p className="text-xs text-[#5A6E85]">Duration</p>
                    <p className="text-xs sm:text-sm font-bold text-[#111A2E]">2 hr 0 mins</p>
                  </div>
                </div>
                <div className="flex items-center gap-2.5 p-3 rounded-xl bg-white border border-[#F3E8E9] shadow-sm">
                  <MapPin className="w-5 h-5 text-[#7B61FF] shrink-0" />
                  <div>
                    <p className="text-xs text-[#5A6E85]">Location</p>
                    <p className="text-xs sm:text-sm font-bold text-[#111A2E]">All Across Bangalore</p>
                  </div>
                </div>
                <div className="flex items-center gap-2.5 p-3 rounded-xl bg-white border border-[#F3E8E9] shadow-sm col-span-2 sm:col-span-1">
                  <Users className="w-5 h-5 text-[#00A86B] shrink-0" />
                  <div>
                    <p className="text-xs text-[#5A6E85]">Group Size</p>
                    <p className="text-xs sm:text-sm font-bold text-[#111A2E]">20 to 1,000+ Guests</p>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-4">
                <a 
                  href="tel:+919980029977"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-[#EE3775] hover:bg-[#D82A64] text-white font-bold text-sm sm:text-base shadow-lg shadow-[#EE3775]/25 transition-all transform hover:-translate-y-0.5"
                >
                  <Phone className="w-4 h-4" />
                  <span>Call +91 99800 29977</span>
                </a>
                <a 
                  href="https://wa.me/919980029977?text=Hi%207Delights,%20I%20am%20interested%20in%20booking%20MC%20Team%20Building%20Activities%20for%20our%20corporate%20event."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-white hover:bg-[#F9FAFB] text-[#111A2E] border border-[#E5E7EB] font-bold text-sm sm:text-base shadow-sm transition-all"
                >
                  <MessageCircle className="w-4 h-4 text-[#25D366]" />
                  <span>Chat on WhatsApp</span>
                </a>
              </div>
            </div>

            {/* Right Media Card */}
            <div className="lg:col-span-5">
              <div className="relative rounded-2xl overflow-hidden bg-white shadow-xl border border-[#F0E6E8] p-2">
                <img 
                  src="/assets/mc-games-main.webp" 
                  alt="MC Games Team Building Activities Bangalore" 
                  className="w-full h-[320px] sm:h-[400px] object-cover rounded-xl"
                />
                <div className="absolute top-4 right-4 bg-[#111A2E]/85 backdrop-blur-md text-white text-xs font-semibold px-3 py-1.5 rounded-full flex items-center gap-1.5 shadow">
                  <Mic className="w-3.5 h-3.5 text-[#EE3775]" />
                  <span>Corporate Emcee Specialist</span>
                </div>
                <div className="p-3 bg-white">
                  <p className="text-xs text-[#5A6E85] text-center font-medium">
                    Seasoned facilitators who turn passive audiences into engaged, energized teams.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Overview: Forge Stronger Teams */}
      <section className="py-14 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7 space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FFE8ED] text-[#EE3775] text-xs font-semibold">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Forge Stronger Teams with 7delights.in</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#111A2E]">
              Boost Morale, Strengthen Communication & Enhance Productivity
            </h2>
            <p className="text-sm sm:text-base text-[#5A6E85] leading-relaxed">
              Looking to boost team morale, improve cross-team communication, and foster authentic workplace friendships? <strong>7delights.in</strong> offers a wide range of engaging team building activities and corporate MC hosting across Bengaluru.
            </p>
            <p className="text-sm sm:text-base text-[#5A6E85] leading-relaxed">
              Our superb professionals showcase their creativity, showmanship, and humor to delight your colleagues. We set up your event, and our MC game professionals act as the catalyst that unites every department — from engineering and operations to sales and senior leadership!
            </p>
            <ul className="space-y-2.5 pt-2">
              {[
                'Tailored challenges aligned with your event theme and corporate values',
                'Interactive stage games, trivia challenges, and karaoke showdowns',
                'Seamless coordination with venue audio and lighting consoles',
                'End-to-end management of game props and complete post-activity cleanup',
                'Customer provides winner prizes; extra hours available on request'
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#111A2E] font-medium">
                  <CheckCircle className="w-4 h-4 text-[#EE3775] shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-5 space-y-4">
            <div className="rounded-2xl overflow-hidden shadow-lg border border-[#F0E6E8]">
              <img 
                src="/assets/mc-games-banner.webp" 
                alt="Corporate Games Audience Celebration" 
                className="w-full h-64 object-cover"
              />
            </div>
            <div className="p-5 rounded-2xl bg-[#FFF8FA] border border-[#F5E6EC]">
              <div className="flex items-center gap-3 mb-2">
                <Trophy className="w-5 h-5 text-[#EE3775]" />
                <h4 className="text-sm font-bold text-[#111A2E]">Recognition & Reward Ceremonies</h4>
              </div>
              <p className="text-xs text-[#5A6E85] leading-relaxed">
                Award ceremonies are the most crucial part of our show, motivating attendees to step outside their comfort zones, bond with colleagues, and be celebrated for their achievements.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Activity Formats Grid */}
      <section className="py-14 px-4 sm:px-6 lg:px-8 bg-[#FAF6F4] border-y border-[#F3E8E9]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FFE8ED] text-[#EE3775] text-xs font-semibold mb-2">
              <PartyPopper className="w-3.5 h-3.5" />
              <span>Tailored Engagement Formats</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#111A2E]">
              Our Signature Corporate Games & Challenges
            </h2>
            <p className="text-xs sm:text-sm text-[#5A6E85] mt-2">
              Carefully curated to maintain high dignity, inclusive participation, and genuine laughter without awkwardness.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {activityCategories.map((srv, index) => (
              <div 
                key={index} 
                className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md border border-[#F0E6E8] transition-all flex flex-col sm:flex-row group"
              >
                <div className="sm:w-2/5 h-48 sm:h-auto overflow-hidden relative shrink-0">
                  <img 
                    src={srv.image} 
                    alt={srv.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-3 left-3">
                    <span className={`text-[10px] sm:text-xs font-bold px-2.5 py-1 rounded-full border shadow-sm ${srv.color}`}>
                      {srv.tag}
                    </span>
                  </div>
                </div>
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-base sm:text-lg font-bold text-[#111A2E] mb-2 group-hover:text-[#EE3775] transition-colors">
                      {srv.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#5A6E85] leading-relaxed">
                      {srv.desc}
                    </p>
                  </div>
                  <div className="pt-4 mt-2 border-t border-[#F5E6E8] flex items-center justify-between">
                    <span className="text-xs text-[#5A6E85] font-medium">Indoor & Outdoor Rallies</span>
                    <a 
                      href="tel:+919980029977" 
                      className="text-xs font-bold text-[#EE3775] hover:text-[#D82A64] inline-flex items-center gap-1"
                    >
                      <span>Inquire Now</span>
                      <span>&rarr;</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose 7Delights Highlights */}
      <section className="py-14 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#111A2E]">
            Why Choose 7delights for Your Team Building?
          </h2>
          <p className="text-xs sm:text-sm text-[#5A6E85] mt-2">
            Trusted by Bangalore's top IT enterprises, startups, and multinational corporations.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item, idx) => (
            <div key={idx} className="p-5 rounded-2xl bg-white border border-[#F3E8E9] shadow-sm hover:border-[#EE3775]/40 transition-colors">
              <div className="w-10 h-10 rounded-xl bg-[#FFF5F7] flex items-center justify-center mb-3">
                {item.icon}
              </div>
              <h3 className="text-sm sm:text-base font-bold text-[#111A2E] mb-1.5">{item.title}</h3>
              <p className="text-xs text-[#5A6E85] leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Authentic YouTube Demo Video */}
      <section className="py-14 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#FFFDF9] to-[#FFF5F7] border-t border-[#F3E8E9]">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FFE8ED] text-[#EE3775] text-xs font-semibold mb-3">
            <Video className="w-3.5 h-3.5" />
            <span>Live Action Showcase</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#111A2E] mb-3">
            Watch Our MC Team Building in Action
          </h2>
          <p className="text-xs sm:text-sm text-[#5A6E85] mb-8 max-w-xl mx-auto">
            Witness the energy, crowd chemistry, and team camaraderie created by 7Delights emcees during corporate celebrations.
          </p>

          <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white aspect-video bg-black">
            <iframe
              src="https://www.youtube.com/embed/ArtIzA8mhg8"
              title="7delights MC Games Team Building Demo"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full border-0"
            ></iframe>
          </div>
        </div>
      </section>

      {/* Frequently Asked Questions */}
      <section className="py-14 px-4 sm:px-6 lg:px-8 bg-white border-t border-[#F3E8E9]">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FFE8ED] text-[#EE3775] text-xs font-semibold mb-2">
              <HelpCircle className="w-3.5 h-3.5" />
              <span>Got Questions?</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#111A2E]">
              MC & Team Building FAQ
            </h2>
            <p className="text-xs sm:text-sm text-[#5A6E85] mt-1">
              Find answers regarding session duration, customization, equipment requirements, and booking.
            </p>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, idx) => (
              <div 
                key={idx} 
                className="border border-[#F0E6E8] rounded-xl overflow-hidden bg-[#FFFDF9] transition-colors"
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full px-5 py-4 text-left flex items-center justify-between gap-4 hover:bg-[#FFF5F7] transition-colors"
                >
                  <span className="text-xs sm:text-sm font-bold text-[#111A2E]">{faq.q}</span>
                  <ChevronDown 
                    className={`w-4 h-4 text-[#EE3775] shrink-0 transition-transform duration-300 ${openFaq === idx ? 'rotate-180' : ''}`}
                  />
                </button>
                {openFaq === idx && (
                  <div className="px-5 pb-4 pt-1 text-xs sm:text-sm text-[#5A6E85] leading-relaxed border-t border-[#F5E6E8] bg-white">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

