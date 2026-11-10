import React, { useState } from 'react';
import {
  Calendar,
  User,
  Clock,
  ArrowRight,
  Sparkles,
  BookOpen,
  Search,
  Tag,
  Share2,
  CheckCircle2,
  X,
} from 'lucide-react';
import { GoldUnderline, HandDrawnHeart } from '../components/Doodles';

export default function BlogPage() {
  const [selectedArticle, setSelectedArticle] = useState(null);
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  // Exactly scraped from 7delights/blog/
  const blogPosts = [
    {
      id: 1,
      title: 'Corporate Activities',
      slug: 'corporate-activities',
      category: 'corporate',
      date: '20/10/2026',
      author: 'Admin',
      readTime: '4 min read',
      tag: 'Team Building & Galas',
      badgeBg: 'bg-[#F2EDFF] text-[#7B61FF] border-[#E0D5FF]',
      image: '/assets/blog-corporate.webp',
      excerpt:
        'Crafting Unforgettable Corporate Events: A 7Delights Perspective. In today’s fast-paced corporate world, events are more than just gatherings; they’re strategic tools to foster connections, boost morale, and elevate brand image.',
      fullContent: `Crafting Unforgettable Corporate Events: A 7Delights Perspective

In today’s fast-paced corporate world, events are more than just gatherings; they’re strategic tools to foster connections, boost morale, and elevate brand image. 7Delights, a leading event management company, understands the nuances of crafting memorable corporate events that leave a lasting impression.

Why Choose 7Delights for Your Corporate Events?

• Tailored Solutions:
- Customized Events: 7Delights specializes in designing events that align perfectly with your company’s unique culture, goals, and target audience.
- Diverse Offerings: From intimate executive retreats to grand gala dinners, they offer a wide range of event formats to suit every need.

• Creative Excellence:
- Innovative Concepts: Their team of creative experts constantly pushes boundaries to deliver fresh and innovative event themes and experiences.
- Stunning Visuals: From breathtaking stage designs to captivating lighting and sound, they create visually stunning environments that wow your guests.

• Meticulous Planning and Execution:
- Seamless Coordination: 7Delights handles every aspect of event planning, from venue selection and vendor coordination to logistics and on-site management.
- Attention to Detail: They pay meticulous attention to detail, ensuring every element, from invitations to catering, is executed flawlessly.

• Unmatched Client Service:
- Dedicated Account Managers: Your dedicated account manager will work closely with you to understand your vision and provide personalized service throughout the planning process.
- Responsive and Reliable: 7Delights is committed to delivering exceptional client service, ensuring timely communication and addressing any concerns promptly.

Popular Corporate Event Ideas by 7Delights:
1. Team-Building Retreats: Foster teamwork and camaraderie through engaging activities like outdoor adventures, escape rooms, and creative workshops.
2. Product Launches: Create a buzz around your new product with a high-impact launch event featuring captivating presentations, interactive demos, and networking opportunities.
3. Annual Conferences: Organize insightful and inspiring conferences with keynote speakers, panel discussions, and breakout sessions to educate and motivate your audience.
4. Award Ceremonies: Recognize and reward outstanding achievements with a glamorous award ceremony, complete with red-carpet arrivals, elegant décor, and inspiring speeches.
5. Corporate Dinners: Host elegant and memorable corporate dinners with exquisite cuisine, live entertainment, and networking opportunities.

By partnering with 7Delights, you can elevate your corporate events to new heights. Their expertise, creativity, and dedication to client satisfaction ensure that your next event will be a resounding success.

Contact 7Delights on +91 99800 29977 today to discuss your next corporate event.`,
    },
    {
      id: 2,
      title: 'Pottery Event',
      slug: 'pottery-event',
      category: 'activities',
      date: '20/10/2026',
      author: 'Admin',
      readTime: '3 min read',
      tag: 'Artisan Workshop',
      badgeBg: 'bg-[#E3F8F2] text-[#059669] border-[#C1F1E1]',
      image: '/assets/blog-pottery.webp',
      excerpt:
        'Pottery for Parties: A Unique and Engaging Experience. Looking for a truly unique and unforgettable experience for your next birthday party or corporate event? Consider pottery painting and sculpting!',
      fullContent: `Pottery for Parties: A Unique and Engaging Experience

Looking for a truly unique and unforgettable experience for your next birthday party or corporate event? Consider pottery painting and sculpting! It’s a fun, creative, and interactive activity that’s suitable for all ages and skill levels.

Why Choose Pottery Painting for Your Event?

• Unique and Memorable:
Pottery painting is a one-of-a-kind experience that your guests will remember for years to come.

• Interactive and Engaging:
It’s a fun and interactive activity that encourages creativity, collaboration, and teamwork.

• Suitable for All Ages:
Pottery painting is universally engaging for everyone, from young children to adults and elders.

• Highly Customizable:
You can customize the pottery pieces, designs, and color palettes to match your event theme perfectly.

• Relaxing and Stress-Relieving:
Pottery painting is a soothing, stress-relieving activity that helps guests unwind, bond, and express themselves.

Professional Event Services by 7Delights:
7Delights Events offers professional pottery painting and wheel sculpting services for birthday parties and corporate events in Bangalore. Our experienced instructors guide your guests throughout the process and ensure everyone has a joyful, memorable experience. We provide a curated variety of pottery pieces to choose from, including mugs, plates, bowls, and figurines.

Here’s What You Can Expect from Our Pottery Services:
1. Professional Instructors: Our experienced artisans guide guests step-by-step through shaping and painting.
2. High-Quality Materials: We use only premium, non-toxic, skin-safe paints and fine brushes.
3. Wide Variety of Pottery Pieces: Choose from a diverse selection of ceramics and raw earthen shapes.
4. Customizable Themes: Custom designs and color palettes tailored to your party vision.
5. Fun & Engaging Atmosphere: A vibrant, creative ambiance that captivates every attendee.

Contact 7Delights Events on +91 99800 29977 today to book your pottery counter. We look forward to helping you create an unforgettable experience for your guests!

Keywords: pottery painting, birthday party, corporate event, 7delights Events, unique experience, interactive activity, creative, memorable, customizable, relaxing, stress-relieving, professional instructors, high-quality materials, variety of pottery pieces.`,
    },
    {
      id: 3,
      title: 'Birthday Activities',
      slug: 'birthday-activities',
      category: 'birthdays',
      date: '20/10/2026',
      author: 'Admin',
      readTime: '4 min read',
      tag: 'Kids & Games',
      badgeBg: 'bg-[#FFE8ED] text-[#EE3775] border-[#FFD0DB]',
      image: '/assets/blog-birthday-activities.webp',
      excerpt:
        'Birthday Bash: Ideas to Make Your Special Day Unforgettable. If you’re looking to host an unforgettable celebration, 7Delights Events has curated exciting theme parties, interactive activities, and entertainment ideas.',
      fullContent: `Birthday Bash: Ideas to Make Your Special Day Unforgettable

Introduction
Birthdays are special occasions that deserve to be celebrated with pomp and flair. If you’re looking to host an unforgettable birthday party, 7Delights Events is here to help. We’ve curated a list of exciting activities to make your special day truly memorable.

Theme Parties:
• Retro Night: Step back in time with a groovy retro-themed party. Decorate with vintage decor, play classic music, and encourage guests to dress in their best 70s, 80s, or 90s attire.
• Masquerade Ball: Add a touch of mystery and elegance to your party with a masquerade ball. Decorate with elegant drapes, chandeliers, and masks.
• Tropical Paradise: Transport your guests to a tropical paradise with a luau-themed party. Decorate with palm trees, leis, and colorful decorations. Serve tropical drinks and delicious food.

Interactive Activities:
• DIY Workshops: Get creative with DIY workshops like painting, pottery, or candle-making.
• Game Nights: Organize classic board games, card games, or video game tournaments.
• Escape Rooms: Challenge your guests’ problem-solving skills with an exciting escape room experience.

Entertainment:
• Live Music: Hire a live band or DJ to keep the party going all night long.
• Magicians and Illusionists: Amaze your guests with mind-boggling magic tricks.
• Comedians: Add some humor to your party with a stand-up comedy performance.

Food and Drinks:
• Themed Food: Serve food that complements your party theme. For example, serve sushi and sake for a Japanese-themed party or barbecue for a backyard bash.
• Signature Cocktails: Create signature cocktails to impress your guests.
• Dessert Bar: Set up a dessert bar with a variety of cakes, cookies, and other sweet treats.

Additional Tips:
• Personalize Your Party: Add personal touches to your party, such as custom invitations and party favors.
• Hire a Party Planner: If you’re short on time or overwhelmed, consider hiring a professional party planner to handle all the details.
• Safety First: Ensure the safety of your guests by hiring security personnel, especially for large parties.

By incorporating these ideas into your birthday celebration, you can create a memorable experience for yourself and your guests. 7Delights Events can help you plan and execute your dream birthday party. Contact us today to learn more about our services.

Contact on +91 99800 29977
Website: https://www.7delights.in/`,
    },
    {
      id: 4,
      title: 'Birthday Decoration',
      slug: 'birthday-decoration',
      category: 'decor',
      date: '20/10/2026',
      author: 'Admin',
      readTime: '5 min read',
      tag: 'Theme Decor & Styling',
      badgeBg: 'bg-[#FFF3DF] text-[#D97706] border-[#FFE4B8]',
      image: '/assets/blog-birthday-decoration.webp',
      excerpt:
        'Elevate Your Birthday Celebrations with 7Delights Events. Transforming Dreams into Reality. From classic balloon arches to intricate floral and fantasy themes, curate a personalized experience.',
      fullContent: `Elevate Your Birthday Celebrations with 7Delights Events

Transforming Dreams into Reality
When it comes to birthday celebrations, 7Delights Events is your go-to partner to create unforgettable memories. With their expertise in event planning and decoration, they bring your vision to life, adding a touch of magic to every occasion.

Unleash Your Imagination with 7Delights
7Delights offers a wide range of birthday decoration services to suit every taste and budget. Whether you’re planning a grand celebration or an intimate gathering, their team of creative professionals will curate a personalized experience.

Key Services:
• Balloon Decorations: From classic balloon arches to intricate balloon sculptures, 7Delights creates stunning visual displays that wow your guests.
• Flower Decorations: Add a touch of elegance and fragrance to your event with their exquisite floral arrangements.
• Theme Decorations: Immerse yourself in a world of fantasy with their themed decorations, ranging from fairytale themes to superhero adventures.
• Personalized Touches: 7Delights goes the extra mile to incorporate personalized elements into your decorations, making your celebration truly unique.

Why Choose 7Delights?
• Expertise: Their team of experienced professionals understands the nuances of event planning and decoration.
• Creativity: They bring fresh ideas and innovative concepts to every event.
• Reliability: They are committed to delivering exceptional service and ensuring a smooth event.
• Customization: They tailor their services to meet your specific needs and preferences.
• Affordability: They offer competitive pricing without compromising on quality.

Make Your Birthday a Day to Remember
Contact 7Delights Events today to discuss your birthday celebration needs. Let them transform your vision into a reality that will leave a lasting impression on you and your guests.

Contact: +91 99800 29977
Visit the website to explore more: https://www.7delights.in/`,
    },
  ];

  const categories = [
    { id: 'all', label: 'All Articles' },
    { id: 'birthdays', label: 'Birthday Planning' },
    { id: 'decor', label: 'Theme Decor' },
    { id: 'activities', label: 'Party Activities' },
    { id: 'corporate', label: 'Corporate Events' },
  ];

  const filteredPosts = blogPosts.filter((post) => {
    const matchesCategory = activeCategory === 'all' || post.category === activeCategory;
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="w-full bg-[#FFFDF9] select-none">
      
      {/* ======================================================== */}
      {/* 1. HERO BREADCRUMB / BANNER                              */}
      {/* ======================================================== */}
      <section className="relative w-full bg-gradient-to-b from-[#FFF5F6] via-[#FFFDF9] to-[#FFFDF9] pt-14 pb-16 sm:py-20 overflow-hidden border-b border-[#FCD5DE]/60">
        
        {/* Ambient Glows */}
        <div className="absolute top-0 right-1/4 w-[450px] h-[450px] bg-[#FFE8ED]/60 rounded-full blur-3xl pointer-events-none -z-0" />
        <div className="absolute bottom-0 left-10 w-80 h-80 bg-[#FFF3DF]/50 rounded-full blur-3xl pointer-events-none -z-0" />

        <div className="w-full max-w-[1720px] mx-auto px-6 sm:px-10 lg:px-14 xl:px-16 text-center relative z-10">
          
          <div className="inline-flex items-center space-x-2.5 mb-3.5">
            <span className="w-6 h-[1.5px] bg-[#EE3775]" />
            <span className="text-[12px] sm:text-[13px] font-bold tracking-[0.2em] text-[#EE3775] uppercase font-sans">
              PARTY PLANNING INSIGHTS & IDEAS
            </span>
            <span className="w-6 h-[1.5px] bg-[#EE3775]" />
          </div>

          <h1 className="text-[36px] sm:text-[48px] lg:text-[58px] font-bold text-[#111A2E] font-serif leading-[1.12] mb-4">
            7delights Event & Party Planners{' '}
            <span className="text-[#EE3775] relative inline-block font-dancing font-normal text-[44px] sm:text-[60px] lg:text-[70px]">
              Blog & Stories
              <div className="absolute -bottom-2 left-0 w-full overflow-visible">
                <GoldUnderline className="w-full h-3.5 text-[#F5A623]" />
              </div>
            </span>
          </h1>

          <p className="text-[15.5px] sm:text-[17px] text-[#5A6E85] max-w-2xl mx-auto leading-relaxed">
            Welcome to the official blog of 7delights — Party Organizers in Bangalore organizing all types of celebrations, theme decorations, games, and entertainment.
          </p>

          {/* Search Bar */}
          <div className="mt-8 max-w-lg mx-auto flex items-center bg-white border border-[#F3E8E2] rounded-full p-1.5 shadow-2xs">
            <div className="pl-4 text-[#94A3B8]">
              <Search className="w-4 h-4" />
            </div>
            <input
              type="text"
              placeholder="Search blog articles (e.g. pottery, corporate, decor)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="flex-1 px-3 py-2 text-[14px] text-[#111A2E] placeholder-[#94A3B8] outline-none bg-transparent"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="pr-3 text-[#94A3B8] hover:text-[#111A2E] text-xs font-semibold cursor-pointer"
              >
                Clear
              </button>
            )}
          </div>

        </div>
      </section>

      {/* ======================================================== */}
      {/* 2. BLOG POSTS GRID & CATEGORIES                          */}
      {/* ======================================================== */}
      <section className="relative w-full py-14 sm:py-18 lg:py-22 overflow-hidden">
        
        <div className="w-full max-w-[1720px] mx-auto px-6 sm:px-10 lg:px-14 xl:px-16 relative z-10">
          
          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-2.5 mb-12 sm:mb-14">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-[13px] sm:text-[13.5px] font-semibold transition-all duration-200 cursor-pointer ${
                  activeCategory === cat.id
                    ? 'bg-[#EE3775] text-white shadow-md shadow-[#EE3775]/25 scale-102'
                    : 'bg-white text-[#5A6E85] border border-[#F3E8E2] hover:border-[#EE3775] hover:text-[#111A2E]'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* 4 Official Blog Posts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7 sm:gap-8">
            {filteredPosts.map((post) => (
              <article
                key={post.id}
                className="group relative bg-white rounded-3xl overflow-hidden border border-[#F3E8E2] hover:border-[#FCD5DE] transition-all duration-300 shadow-2xs hover:shadow-xl hover:-translate-y-1.5 flex flex-col text-left"
              >
                
                {/* Blog Image */}
                <div
                  onClick={() => setSelectedArticle(post)}
                  className="relative h-52 sm:h-56 w-full overflow-hidden bg-[#162137] cursor-pointer"
                >
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-108"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/10" />

                  {/* Tag */}
                  <div className="absolute top-3.5 left-3.5 z-10">
                    <span
                      className={`inline-block px-3 py-0.5 rounded-full text-[11px] font-bold border backdrop-blur-md ${post.badgeBg}`}
                    >
                      {post.tag}
                    </span>
                  </div>

                  {/* Reading Time */}
                  <div className="absolute bottom-3 right-3 text-[11px] font-semibold text-white/90 bg-black/60 backdrop-blur-xs px-2.5 py-0.5 rounded-full">
                    {post.readTime}
                  </div>
                </div>

                {/* Content Body */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    {/* Date & Author */}
                    <div className="flex items-center space-x-3 text-[12.5px] text-[#8494A7] mb-3">
                      <span className="flex items-center space-x-1">
                        <Calendar className="w-3.5 h-3.5 text-[#EE3775]" />
                        <span>{post.date}</span>
                      </span>
                      <span>•</span>
                      <span className="flex items-center space-x-1">
                        <User className="w-3.5 h-3.5 text-[#F5A623]" />
                        <span>by {post.author}</span>
                      </span>
                    </div>

                    <h2
                      onClick={() => setSelectedArticle(post)}
                      className="text-[20px] font-bold text-[#111A2E] font-serif leading-snug mb-3 group-hover:text-[#EE3775] transition-colors cursor-pointer"
                    >
                      {post.title}
                    </h2>

                    <p className="text-[13.5px] text-[#5A6E85] leading-relaxed mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                  </div>

                  {/* Read More Trigger */}
                  <div className="pt-4 border-t border-[#F8ECE8] flex items-center justify-between">
                    <button
                      onClick={() => setSelectedArticle(post)}
                      className="inline-flex items-center space-x-1.5 text-[13.5px] font-bold text-[#EE3775] group-hover:translate-x-1 transition-transform cursor-pointer"
                    >
                      <span>Read Article</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                    <BookOpen className="w-4 h-4 text-[#C4D0DE] group-hover:text-[#EE3775] transition-colors" />
                  </div>

                </div>

              </article>
            ))}
          </div>

          {filteredPosts.length === 0 && (
            <div className="py-16 text-center text-[#5A6E85]">
              <p className="text-[16px]">No articles found matching "{searchQuery}".</p>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setActiveCategory('all');
                }}
                className="mt-3 text-[#EE3775] font-semibold text-sm hover:underline cursor-pointer"
              >
                Reset filters
              </button>
            </div>
          )}

        </div>

      </section>

      {/* ======================================================== */}
      {/* 3. ARTICLE READER MODAL POPUP                            */}
      {/* ======================================================== */}
      {selectedArticle && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md p-4 sm:p-6 animate-in fade-in duration-200">
          <div className="relative w-full max-w-2xl bg-white rounded-3xl overflow-hidden shadow-2xl border border-white/20 max-h-[90vh] flex flex-col text-left">
            
            {/* Modal Header */}
            <div className="p-5 sm:p-6 border-b border-gray-100 flex items-center justify-between">
              <div>
                <span className="px-3 py-1 rounded-full bg-[#FFE8ED] text-[#EE3775] text-[11.5px] font-bold uppercase">
                  {selectedArticle.tag}
                </span>
                <p className="text-[22px] sm:text-[24px] font-bold text-[#111A2E] font-serif mt-2">
                  {selectedArticle.title}
                </p>
                <div className="flex items-center space-x-3 text-[12.5px] text-[#8494A7] mt-1">
                  <span>{selectedArticle.date}</span>
                  <span>•</span>
                  <span>by {selectedArticle.author}</span>
                  <span>•</span>
                  <span>{selectedArticle.readTime}</span>
                </div>
              </div>

              <button
                onClick={() => setSelectedArticle(null)}
                className="w-9 h-9 rounded-full bg-gray-100 hover:bg-[#EE3775] hover:text-white flex items-center justify-center text-gray-600 transition-colors cursor-pointer shrink-0"
                aria-label="Close article"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Scrollable Article Body */}
            <div className="p-6 sm:p-8 overflow-y-auto space-y-4 text-[15px] text-[#4A5D74] leading-relaxed">
              <div className="rounded-2xl overflow-hidden mb-6 h-60 w-full bg-[#162137]">
                <img
                  src={selectedArticle.image}
                  alt={selectedArticle.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {selectedArticle.fullContent.split('\n\n').map((paragraph, idx) => (
                <p key={idx} className="whitespace-pre-line">
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Modal Footer Callout */}
            <div className="p-5 bg-[#FFF9F6] border-t border-[#FCD5DE]/60 flex flex-col sm:flex-row items-center justify-between gap-3">
              <span className="text-[13px] text-[#5A6E85]">
                Inspired by this idea for your upcoming celebration?
              </span>
              <a
                href="#contact"
                onClick={() => setSelectedArticle(null)}
                className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-full bg-[#EE3775] hover:bg-[#d82a65] text-white text-[13px] font-bold transition-all shadow-xs cursor-pointer shrink-0"
              >
                <span>Plan With 7Delights</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>

          </div>
        </div>
      )}

    </div>
  );
}

