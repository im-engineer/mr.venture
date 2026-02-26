import { motion } from 'motion/react';
import { ArrowLeft, Calendar, Clock, Share2, Bookmark, Tag } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { blogData } from '../data/blogData';

type BlogDetailPageProps = {
  slug: string;
  navigate: (page: string, slug?: string) => void;
};

export function BlogDetailPage({ slug, navigate }: BlogDetailPageProps) {
  const post = blogData.find(p => p.slug === slug);

  if (!post) {
    return (
      <div className="pt-32 pb-24 text-center min-h-screen bg-[#080b18] bg-[#080b18] flex flex-col justify-center items-center"> <h1 className="text-4xl text-white font-bold mb-4">Blog post not found</h1> <button onClick={() => navigate('blog')} className="mt-4 text-blue-400 hover:text-blue-300 font-medium">
          &larr; Back to Blog
        </button>
      </div>
    );
  }

  const relatedPosts = blogData.filter(p => p.slug !== slug && p.category === post.category).slice(0, 3);

  return (
    <div className="pt-20 min-h-screen bg-[#080b18] bg-[#080b18]">
      {/* Header */}
      <section className="py-8 sticky top-20 z-40 backdrop-blur-md"> <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.button
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            onClick={() => navigate('blog')}
            className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors font-medium tracking-wide"
          >
            <ArrowLeft size={20} />
            Back to Blog
          </motion.button>
        </div>
      </section>

      {/* Hero */}
      <section className="py-16 relative overflow-hidden"> <div className="absolute inset-0 pointer-events-none"> <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-indigo-600/10 rounded-full filter blur-[100px]"></div> <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-purple-600/10 rounded-full filter blur-[100px]"></div>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="flex flex-wrap items-center gap-4"> <span className="px-4 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold tracking-wide rounded-xl shadow-[0_0_15px_rgba(59,130,246,0.2)]">
                {post.category}
              </span>
              {post.tags.map(tag => (
                <span key={tag} className="flex items-center gap-1.5 px-3 py-1.5 glass-panel rounded-lg text-slate-300 font-medium text-sm"> <Tag size={12} className="text-blue-400" />
                  {tag}
                </span>
              ))}
            </div>

            <h1 className="text-4xl lg:text-6xl font-bold text-white tracking-tight leading-tight drop-shadow-sm">
              {post.title}
            </h1>

            <div className="flex flex-wrap items-center gap-6 text-slate-400 font-medium tracking-wide"> <div className="flex items-center gap-2"> <Calendar size={18} className="text-blue-400" />
                <span>{post.date}</span>
              </div>
              <div className="flex items-center gap-2"> <Clock size={18} className="text-purple-400" />
                <span>{post.readTime}</span>
              </div>
            </div>

            <div className="flex items-center justify-between pt-8 mt-8"> <div className="flex items-center gap-4"> <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-purple-600 p-px rounded-full shadow-[0_0_15px_rgba(59,130,246,0.3)]"> <div className="w-full h-full rounded-full"></div>
                </div>
                <div>
                  <div className="text-white font-bold text-lg">{post.author}</div> <div className="text-slate-400 text-sm font-medium">{post.authorRole}</div>
                </div>
              </div>

              <div className="flex gap-3">
                <motion.button
                  whileHover={{ scale: 1.1, translateY: -2 }}
                  whileTap={{ scale: 0.9 }}
                  className="p-3 glass-panel rounded-xl hover: transition-all hover-glow"
                >
                  <Share2 size={20} className="text-slate-300" />
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.1, translateY: -2 }}
                  whileTap={{ scale: 0.9 }}
                  className="p-3 glass-panel rounded-xl hover: transition-all hover-glow"
                >
                  <Bookmark size={20} className="text-slate-300" />
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="py-8 relative"> <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="aspect-[21/9] rounded-[2.5rem] overflow-hidden glass-panel shadow-[0_20px_50px_rgba(0,0,0,0.5)] group relative"
          >
            <div className="absolute inset-0 bg-blue-500/10 group-hover:bg-transparent transition-colors duration-500 z-10 pointer-events-none"></div>
            <ImageWithFallback
              src={post.image}
              alt={post.title}
              className="w-full h-full object-cover mix-blend-lighten opacity-90 transition-transform duration-700"
            />
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 relative"> <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-600/5 filter blur-[150px] rounded-full pointer-events-none"></div> <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="prose prose-lg prose-invert max-w-none text-slate-300"
          >
            <p className="text-2xl text-slate-200 leading-relaxed mb-10 font-medium italic -4 border-blue-500 pl-6 bg-white/5 py-4 rounded-r-xl">
              {post.excerpt}
            </p>

            <div className="text-lg leading-relaxed space-y-8 whitespace-pre-line text-slate-300 prose-headings:text-white prose-a:text-blue-400 prose-strong:text-white prose-li:text-slate-300">
              {post.content}
            </div>

            {/* Mock additional content sections */}
            <div className="mt-16 p-10 glass-panel rounded-3xl hover-glow transition-all relative overflow-hidden"> <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5"></div> <div className="relative z-10"> <h3 className="text-2xl font-bold text-white mb-6">Key Takeaways</h3> <ul className="space-y-4"> <li className="flex items-start gap-4"> <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 shadow-lg"> <span className="text-white text-sm font-bold">1</span>
                    </div>
                    <span className="text-slate-300">Understanding the latest technology trends is crucial for business success in today's rapidly evolving market.</span>
                  </li>
                  <li className="flex items-start gap-4"> <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 shadow-lg"> <span className="text-white text-sm font-bold">2</span>
                    </div>
                    <span className="text-slate-300">Implementation strategies should be tailored to your specific organizational needs instead of generic approaches.</span>
                  </li>
                  <li className="flex items-start gap-4"> <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 shadow-lg"> <span className="text-white text-sm font-bold">3</span>
                    </div>
                    <span className="text-slate-300">Continuous learning and adaptation at an enterprise scale are key to staying competitive globally.</span>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="py-24 relative overflow-hidden text-white"> <div className="absolute top-1/2 right-0 w-[400px] h-[400px] bg-purple-600/10 filter blur-[150px] rounded-full pointer-events-none"></div> <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h2 className="text-3xl lg:text-4xl font-bold mb-4"> Related <span className="text-gradient">Articles</span>
              </h2>
              <p className="text-slate-400 text-lg">Continue reading on similar topics from our experts</p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {relatedPosts.map((relatedPost, index) => (
                <motion.article
                  key={relatedPost.slug}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -8 }}
                  onClick={() => navigate('blog-detail', relatedPost.slug)}
                  className="glass-panel rounded-3xl shadow-lg overflow-hidden cursor-pointer group transition-all hover-glow"
                >
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <ImageWithFallback
                      src={relatedPost.image}
                      alt={relatedPost.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 mix-blend-lighten opacity-80"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-dark-800 to-transparent opacity-80"></div>
                  </div>

                  <div className="p-8 space-y-4 relative z-10 -mt-4 backdrop-blur-sm rounded-t-3xl"> <div className="flex items-center gap-2 text-blue-400 font-medium text-sm tracking-wide">
                      <Calendar size={14} />
                      <span>{relatedPost.date}</span>
                    </div>

                    <h3 className="text-xl font-bold text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 group-hover:bg-clip-text transition-all line-clamp-2">
                      {relatedPost.title}
                    </h3>

                    <p className="text-slate-400 text-sm leading-relaxed line-clamp-2">
                      {relatedPost.excerpt}
                    </p>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
