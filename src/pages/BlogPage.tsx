import { useState } from 'react';
import { motion } from 'motion/react';
import { Calendar, Clock, ArrowRight, Rss, Code2, Cpu, LineChart, Sparkles } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { MagnetCard } from '../components/MagnetCard';
import { blogData } from '../data/blogData';

type BlogPageProps = {
  navigate: (page: string, slug?: string) => void;
};

// Map categories to specific icons and gradients for a more premium feel
const categoryConfig: Record<string, { icon: any, gradient: string, color: string }> = {
  'Tech Leadership & Strategy': { icon: LineChart, gradient: 'from-blue-500/20 to-cyan-500/20', color: 'text-cyan-400' },
  'Engineering Deep Dives': { icon: Code2, gradient: 'from-purple-500/20 to-pink-500/20', color: 'text-pink-400' },
  'Product Updates': { icon: Rss, gradient: 'from-emerald-500/20 to-teal-500/20', color: 'text-teal-400' },
  'AI & Automation': { icon: Cpu, gradient: 'from-fuchsia-500/20 to-rose-500/20', color: 'text-rose-400' },
  // Default fallback
  'All': { icon: Sparkles, gradient: 'from-blue-500/20 to-purple-500/20', color: 'text-purple-400' }
};

export function BlogPage({ navigate }: BlogPageProps) {
  const [selectedCategory, setSelectedCategory] = useState('All');

  // Extract unique categories and ensure specific order if possible, otherwise alphabetical
  const dbCategories = [...new Set(blogData.map(post => post.category))].sort();
  const categories = ['All', ...dbCategories];

  const filteredPosts = selectedCategory === 'All'
    ? blogData
    : blogData.filter(post => post.category === selectedCategory);

  const latestPost = filteredPosts[0];
  const remainingPosts = filteredPosts.slice(1);

  return (
    <div className="pt-20 min-h-screen bg-[#080b18]">
      {/* Hero Section */}
      <section className="py-24 relative overflow-hidden">
        {/* Centered Organic Gradient */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
          <motion.div
            animate={{
              scale: [1, 1.1, 1],
              rotate: [0, 45, 0],
            }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="w-[80vw] h-[60vh] max-w-[800px] max-h-[600px] bg-gradient-to-tr from-pink-600/30 via-purple-600/30 to-blue-500/30 blur-[130px] rounded-[60%_40%_30%_70%]"
          />
        </div>

        {/* Subtle Grid Overlay */}
        <div className="absolute inset-0 z-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center space-y-8"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 glass-panel rounded-full border-pink-500/30 shadow-[0_0_15px_rgba(236,72,153,0.15)] mb-4 bg-pink-900/10">
              <Rss size={20} className="text-pink-400" />
              <span className="text-pink-200 font-medium tracking-wide uppercase text-sm">Insights & Analytics</span>
            </div>
            <h1 className="text-5xl lg:text-7xl font-bold text-white tracking-tight">
              Engineering <span style={{ backgroundImage: 'linear-gradient(to right, #f472b6, #a855f7)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', color: 'transparent' }}>Intelligence</span>
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
              Deep technical discussions, architectural breakdowns, and strategic leadership insights directly from our engineering team.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 sticky top-20 z-40 backdrop-blur-xl bg-[#080b18]/60 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => {
              const CategoryIcon = categoryConfig[category]?.icon || Sparkles;
              const isActive = selectedCategory === category;

              return (
                <motion.button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`px-6 py-3 rounded-xl font-medium tracking-wide transition-all flex items-center gap-2 border ${isActive
                    ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white border-transparent shadow-[0_0_20px_rgba(236,72,153,0.4)]'
                    : 'glass-panel text-slate-300 border-white/10 hover:border-pink-500/50 hover:text-white'
                    }`}
                >
                  <CategoryIcon size={16} className={isActive ? 'text-white' : categoryConfig[category]?.color || 'text-slate-400'} />
                  {category}
                </motion.button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Post using MagnetCard styling */}
      {latestPost && (
        <section className="py-16 relative z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-8"
            >
              <h2 className="text-3xl font-bold text-white tracking-tight">Featured <span style={{ backgroundImage: 'linear-gradient(to right, #f472b6, #c084fc)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', color: 'transparent' }}>Article</span></h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              onClick={() => navigate('blog-detail', latestPost.slug)}
              className="cursor-pointer group"
            >
              <MagnetCard gradientColors={categoryConfig[latestPost.category]?.gradient || 'from-pink-500/20 to-purple-500/20'} className="p-0 overflow-hidden">
                <div className="grid lg:grid-cols-2 gap-0 h-full">
                  <div className="relative aspect-[16/10] lg:aspect-auto h-full min-h-[400px]">
                    <ImageWithFallback
                      src={latestPost.image}
                      alt={latestPost.title}
                      className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 mix-blend-lighten opacity-80"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f1c] via-[#0a0f1c]/40 to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-[#0a0f1c]"></div>
                    <div className="absolute top-6 left-6 px-4 py-2 bg-[#0a0f1c]/80 backdrop-blur-md border border-white/10 text-white text-sm font-bold tracking-wide rounded-lg uppercase">
                      {latestPost.category}
                    </div>
                  </div>

                  <div className="p-8 lg:p-14 flex flex-col justify-center bg-[#0a0f1c]/80 backdrop-blur-sm">
                    <div className="flex items-center gap-6 text-slate-400 font-medium text-sm tracking-wide mb-6">
                      <div className="flex items-center gap-2">
                        <Calendar size={16} className="text-pink-400" />
                        <span>{latestPost.date}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock size={16} className="text-purple-400" />
                        <span>{latestPost.readTime}</span>
                      </div>
                    </div>

                    <h3 className="text-3xl lg:text-4xl font-bold text-white mb-6 tracking-tight line-clamp-3">
                      {latestPost.title}
                    </h3>

                    <p className="text-slate-300 text-lg leading-relaxed mb-8 line-clamp-3">
                      {latestPost.excerpt}
                    </p>

                    <div className="flex items-center justify-between mt-auto">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-dark-800 border border-white/10 rounded-full flex items-center justify-center">
                          <span className="text-pink-400 font-bold">{latestPost.author.charAt(0)}</span>
                        </div>
                        <div>
                          <div className="text-white font-bold">{latestPost.author}</div>
                          <div className="text-slate-400 text-sm">{latestPost.authorRole}</div>
                        </div>
                      </div>

                      <div className="w-12 h-12 rounded-full border border-pink-500/30 flex items-center justify-center group-hover:bg-pink-500/20 group-hover:border-pink-500 transition-colors">
                        <ArrowRight size={20} className="text-pink-400 group-hover:text-white transition-colors" />
                      </div>
                    </div>
                  </div>
                </div>
              </MagnetCard>
            </motion.div>
          </div>
        </section>
      )}

      {/* Standard Blog Grid using MagnetCards */}
      {remainingPosts.length > 0 && (
        <section className="py-24 relative z-10 border-t border-white/5 bg-[#050812]/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h2 className="text-3xl font-bold text-white tracking-tight">Recent <span style={{ backgroundImage: 'linear-gradient(to right, #60a5fa, #22d3ee)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', color: 'transparent' }}>Publications</span></h2>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {remainingPosts.map((post, index) => {
                const postGradient = categoryConfig[post.category]?.gradient || 'from-blue-500/20 to-purple-500/20';

                return (
                  <motion.div
                    key={post.slug}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    onClick={() => navigate('blog-detail', post.slug)}
                    className="cursor-pointer group h-full"
                  >
                    <MagnetCard gradientColors={postGradient} className="p-0 overflow-hidden h-full flex flex-col">
                      <div className="relative aspect-[16/10]">
                        <ImageWithFallback
                          src={post.image}
                          alt={post.title}
                          className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 mix-blend-lighten opacity-80"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f1c] to-transparent opacity-90"></div>
                        <div className="absolute top-4 left-4 px-3 py-1.5 bg-[#0a0f1c]/80 backdrop-blur-md border border-white/10 text-white text-xs font-bold tracking-wide rounded-lg uppercase">
                          {post.category}
                        </div>
                      </div>

                      <div className="p-8 flex flex-col flex-1 bg-[#0a0f1c]/80 backdrop-blur-sm -mt-4 relative z-10 rounded-t-3xl border-t border-white/5">
                        <div className="flex items-center gap-4 text-slate-400 font-medium text-xs tracking-wide mb-4">
                          <div className="flex items-center gap-1.5">
                            <Calendar size={14} className="text-blue-400" />
                            <span>{post.date}</span>
                          </div>
                          <div className="flex items-center gap-1.5">
                            <Clock size={14} className="text-purple-400" />
                            <span>{post.readTime}</span>
                          </div>
                        </div>

                        <h3 className="text-xl font-bold text-white mb-4 tracking-tight line-clamp-2">
                          {post.title}
                        </h3>

                        <p className="text-slate-400 leading-relaxed mb-6 line-clamp-3 text-sm flex-1">
                          {post.excerpt}
                        </p>

                        <div className="flex items-center justify-between pt-4 border-t border-white/5 mt-auto">
                          <div className="font-semibold text-slate-200 text-sm">{post.author}</div>
                          <ArrowRight size={18} className="text-blue-400 group-hover:translate-x-1 transition-transform" />
                        </div>
                      </div>
                    </MagnetCard>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* Newsletter CTA */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-pink-600/20 blur-[150px] rounded-full pointer-events-none"></div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-8 glass-panel border border-white/10 p-8 md:p-12 rounded-3xl hover-glow transition-all"
          >
            <h2 className="text-4xl font-bold text-white tracking-tight">
              Join Our Engineering <span style={{ backgroundImage: 'linear-gradient(to right, #f472b6, #c084fc)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', color: 'transparent' }}>Newsletter</span>
            </h2>
            <p className="text-slate-300 text-lg leading-relaxed max-w-2xl mx-auto">
              Get deep-dive architectural breakdowns and technical strategy delivered straight to your inbox once a month.
            </p>
            <form className="flex flex-row gap-4 max-w-lg mx-auto w-full" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 min-w-0 bg-dark-800/50 border border-white/10 rounded-xl px-6 py-4 text-white focus:outline-none focus:border-pink-500 focus:ring-1 focus:ring-pink-500 transition-all placeholder:text-slate-500"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-pink-600 to-purple-600 text-white font-bold rounded-xl shadow-[0_0_20px_rgba(236,72,153,0.4)] hover:shadow-[0_0_30px_rgba(236,72,153,0.6)] transition-all whitespace-nowrap shrink-0"
              >
                Subscribe
              </motion.button>
            </form>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
