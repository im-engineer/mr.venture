import { motion } from 'motion/react';
import { ArrowLeft, Calendar, Clock, User, Share2, Bookmark, Tag } from 'lucide-react';
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
      <div className="pt-32 pb-24 text-center">
        <h1>Blog post not found</h1>
        <button onClick={() => navigate('blog')} className="mt-4 text-indigo-600">
          Back to Blog
        </button>
      </div>
    );
  }

  const relatedPosts = blogData.filter(p => p.slug !== slug && p.category === post.category).slice(0, 3);

  return (
    <div className="pt-20">
      {/* Header */}
      <section className="py-12 bg-white border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.button
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            onClick={() => navigate('blog')}
            className="flex items-center gap-2 text-slate-600 hover:text-indigo-600 mb-6 transition-colors"
          >
            <ArrowLeft size={20} />
            Back to Blog
          </motion.button>
        </div>
      </section>

      {/* Hero */}
      <section className="py-16 bg-gradient-to-br from-slate-50 to-indigo-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="flex flex-wrap items-center gap-4">
              <span className="px-4 py-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl">
                {post.category}
              </span>
              {post.tags.map(tag => (
                <span key={tag} className="flex items-center gap-1 px-3 py-1 bg-white border border-slate-200 rounded-lg text-slate-700">
                  <Tag size={14} />
                  {tag}
                </span>
              ))}
            </div>

            <h1 className="text-4xl lg:text-5xl text-slate-900">
              {post.title}
            </h1>

            <div className="flex flex-wrap items-center gap-6 text-slate-600">
              <div className="flex items-center gap-2">
                <Calendar size={18} />
                <span>{post.date}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock size={18} />
                <span>{post.readTime}</span>
              </div>
            </div>

            <div className="flex items-center justify-between pt-6 border-t border-slate-200">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-gradient-to-br from-indigo-400 to-purple-400 rounded-full"></div>
                <div>
                  <div className="text-slate-900">{post.author}</div>
                  <div className="text-slate-500">{post.authorRole}</div>
                </div>
              </div>

              <div className="flex gap-2">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="p-3 bg-white border border-slate-200 rounded-xl hover:border-indigo-300 transition-colors"
                >
                  <Share2 size={20} className="text-slate-600" />
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="p-3 bg-white border border-slate-200 rounded-xl hover:border-indigo-300 transition-colors"
                >
                  <Bookmark size={20} className="text-slate-600" />
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="py-12 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="aspect-[21/9] rounded-3xl overflow-hidden shadow-2xl"
          >
            <ImageWithFallback
              src={post.image}
              alt={post.title}
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="prose prose-lg max-w-none"
          >
            <p className="text-xl text-slate-700 leading-relaxed mb-8">
              {post.excerpt}
            </p>

            <div className="text-slate-600 leading-relaxed space-y-6 whitespace-pre-line">
              {post.content}
            </div>

            {/* Mock additional content sections */}
            <div className="mt-12 p-8 bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl border border-indigo-100">
              <h3 className="text-2xl text-slate-900 mb-4">Key Takeaways</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-white text-sm">1</span>
                  </div>
                  <span className="text-slate-700">Understanding the latest technology trends is crucial for business success</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-white text-sm">2</span>
                  </div>
                  <span className="text-slate-700">Implementation strategies should be tailored to your specific needs</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-white text-sm">3</span>
                  </div>
                  <span className="text-slate-700">Continuous learning and adaptation are key to staying competitive</span>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="py-24 bg-gradient-to-br from-slate-50 to-indigo-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h2 className="text-3xl bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent mb-2">
                Related Articles
              </h2>
              <p className="text-slate-600">Continue reading on similar topics</p>
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
                  className="bg-white rounded-2xl shadow-lg border border-slate-100 overflow-hidden cursor-pointer group"
                >
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <ImageWithFallback
                      src={relatedPost.image}
                      alt={relatedPost.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>

                  <div className="p-6 space-y-3">
                    <div className="flex items-center gap-2 text-slate-500 text-sm">
                      <Calendar size={14} />
                      <span>{relatedPost.date}</span>
                    </div>

                    <h3 className="text-lg text-slate-900 group-hover:text-indigo-600 transition-colors line-clamp-2">
                      {relatedPost.title}
                    </h3>

                    <p className="text-slate-600 text-sm line-clamp-2">
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
