import { useState } from 'react';
import { motion } from 'motion/react';
import { Calendar, Clock, ArrowRight, User, BookOpen } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { blogData } from '../data/blogData';

type BlogPageProps = {
  navigate: (page: string, slug?: string) => void;
};

export function BlogPage({ navigate }: BlogPageProps) {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', ...new Set(blogData.map(post => post.category))];

  const filteredPosts = selectedCategory === 'All'
    ? blogData
    : blogData.filter(post => post.category === selectedCategory);

  const latestPost = filteredPosts[0];
  const remainingPosts = filteredPosts.slice(1);

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl animate-blob"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl animate-blob animation-delay-2000"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center text-white space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full border border-white/30 mb-4">
              <BookOpen size={20} />
              <span>Blog & Insights</span>
            </div>
            <h1 className="text-5xl lg:text-6xl">Latest Articles & Insights</h1>
            <p className="text-xl text-indigo-100 max-w-3xl mx-auto">
              Stay updated with the latest trends, tips, and innovations in technology
            </p>
          </motion.div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-12 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <motion.button
                key={category}
                onClick={() => setSelectedCategory(category)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-6 py-2 rounded-xl transition-colors ${selectedCategory === category
                  ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                  }`}
              >
                {category === 'All' ? 'All Posts' : category}
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Post */}
      {latestPost && (
        <section className="py-24 bg-gradient-to-br from-slate-50 to-indigo-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h2 className="text-3xl bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent mb-2">
                Featured Article
              </h2>
              <p className="text-slate-600">Our latest insights and updates</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              onClick={() => navigate('blog-detail', latestPost.slug)}
              className="grid lg:grid-cols-2 gap-8 bg-white rounded-3xl shadow-2xl overflow-hidden cursor-pointer group"
            >
              <div className="relative aspect-[16/10] lg:aspect-auto">
                <ImageWithFallback
                  src={latestPost.image}
                  alt={latestPost.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 px-4 py-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl">
                  {latestPost.category}
                </div>
              </div>

              <div className="p-8 lg:p-12 space-y-6">
                <div className="flex items-center gap-6 text-slate-500">
                  <div className="flex items-center gap-2">
                    <Calendar size={16} />
                    <span>{latestPost.date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock size={16} />
                    <span>{latestPost.readTime}</span>
                  </div>
                </div>

                <h3 className="text-3xl text-slate-900 group-hover:text-indigo-600 transition-colors">
                  {latestPost.title}
                </h3>

                <p className="text-slate-600 text-lg leading-relaxed">
                  {latestPost.excerpt}
                </p>

                <div className="flex items-center gap-4 pt-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-indigo-400 to-purple-400 rounded-full"></div>
                  <div>
                    <div className="text-slate-900">{latestPost.author}</div>
                    <div className="text-slate-500">{latestPost.authorRole}</div>
                  </div>
                </div>

                <motion.div
                  whileHover={{ x: 5 }}
                  className="flex items-center gap-2 text-indigo-600 pt-4"
                >
                  Read Full Article
                  <ArrowRight size={20} />
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* Blog Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-3xl bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent mb-2">
              Recent Articles
            </h2>
            <p className="text-slate-600">Explore our latest posts and insights</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {remainingPosts.map((post, index) => (
              <motion.article
                key={post.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                onClick={() => navigate('blog-detail', post.slug)}
                className="bg-white rounded-2xl shadow-lg border border-slate-100 overflow-hidden cursor-pointer group"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <ImageWithFallback
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 px-3 py-1 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg">
                    {post.category}
                  </div>
                </div>

                <div className="p-6 space-y-4">
                  <div className="flex items-center gap-4 text-slate-500">
                    <div className="flex items-center gap-1">
                      <Calendar size={14} />
                      <span className="text-sm">{post.date}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock size={14} />
                      <span className="text-sm">{post.readTime}</span>
                    </div>
                  </div>

                  <h3 className="text-xl text-slate-900 group-hover:text-indigo-600 transition-colors line-clamp-2">
                    {post.title}
                  </h3>

                  <p className="text-slate-600 line-clamp-3">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center gap-3 pt-4 border-t border-slate-100">
                    <div className="w-8 h-8 bg-gradient-to-br from-indigo-400 to-purple-400 rounded-full"></div>
                    <div className="text-sm text-slate-600">{post.author}</div>
                  </div>

                  <motion.div
                    whileHover={{ x: 5 }}
                    className="flex items-center gap-2 text-indigo-600"
                  >
                    Read More
                    <ArrowRight size={16} />
                  </motion.div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
