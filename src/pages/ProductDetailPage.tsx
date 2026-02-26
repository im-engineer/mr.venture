import { motion } from 'motion/react';
import { ArrowLeft, Download, Share2, CheckCircle, Package, Calendar, Tag, ExternalLink } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { productsData } from '../data/productsData';

type ProductDetailPageProps = {
  slug: string;
  navigate: (page: string, slug?: string) => void;
};

export function ProductDetailPage({ slug, navigate }: ProductDetailPageProps) {
  const product = productsData.find(p => p.slug === slug);

  if (!product) {
    return (
      <div className="pt-32 pb-24 text-center min-h-screen bg-[#080b18] bg-[#080b18] flex flex-col justify-center items-center"> <h1 className="text-4xl text-white font-bold mb-4">Product Not Found</h1> <button onClick={() => navigate('products')} className="mt-4 text-blue-400 hover:text-blue-300 font-medium">
          &larr; Back to Products
        </button>
      </div>
    );
  }

  return (
    <div className="pt-20 min-h-screen bg-[#080b18] bg-[#080b18]">
      {/* Hero Section */}
      <section className="py-24 relative overflow-hidden"> <div className="absolute inset-0">
          <div className={`absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-br ${product.gradient} rounded-full mix-blend-screen filter blur-[150px] opacity-20 animate-blob`}></div>
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_0%,#000_70%,transparent_100%)]"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.button
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            onClick={() => navigate('products')}
            className="flex items-center gap-2 text-slate-400 hover:text-white mb-10 transition-colors font-medium"
          >
            <ArrowLeft size={20} />
            Back to Products
          </motion.button>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-white space-y-8"
            >
              <div className="flex items-center gap-4"> <div className="inline-flex items-center gap-2 px-4 py-2 glass-panel rounded-full"> <Tag size={18} className="text-indigo-400" /> <span className="text-slate-200 font-medium tracking-wide">{product.category}</span>
                </div>
                <div className="inline-flex items-center gap-2 px-4 py-2 glass-panel rounded-full"> <Package size={18} className="text-purple-400" /> <span className="text-slate-200 font-medium tracking-wide">v{product.version}</span>
                </div>
              </div>

              <div>
                <h1 className="text-5xl lg:text-7xl font-bold mb-4 tracking-tight drop-shadow-sm">{product.name}</h1>
                <p className={`text-2xl font-medium text-transparent bg-gradient-to-r ${product.gradient} bg-clip-text`}>{product.tagline}</p>
              </div>

              <p className="text-xl text-slate-300 leading-relaxed font-light">
                {product.description}
              </p>

              <div className="flex items-center gap-2 text-slate-400 font-medium">
                <Calendar size={18} />
                <span>Released: {product.releaseDate}</span>
              </div>

              <div className="flex flex-wrap gap-4 pt-4">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => navigate('contact')}
                  className={`px-8 py-4 bg-gradient-to-br ${product.gradient} text-white font-bold rounded-xl shadow-[0_0_20px_rgba(59,130,246,0.3)] hover:shadow-[0_0_30px_rgba(59,130,246,0.5)] flex items-center gap-3 transition-all hover-glow`}
                >
                  <Download size={20} />
                  Start Free Trial
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 glass-panel text-white font-bold rounded-xl hover:bg-white/10 transition-colors flex items-center gap-3 hover-glow"
                >
                  <Share2 size={20} />
                  Share
                </motion.button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="relative group"
            >
              <div className={`absolute -inset-4 bg-gradient-to-br ${product.gradient} rounded-[2.5rem] blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-500 animate-pulse-glow`}></div>
              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden glass-panel shadow-[0_0_40px_rgba(0,0,0,0.5)]">
                <ImageWithFallback
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover opacity-80 mix-blend-lighten"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-900/80 via-transparent to-transparent"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="py-24 relative"> <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-blue-600/10 blur-[120px] rounded-full pointer-events-none"></div> <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6"> Product <span className="text-gradient">Highlights</span>
            </h2>
            <p className="text-slate-300 text-lg max-w-2xl mx-auto leading-relaxed">
              Everything you need in one powerful package designed to accelerate your growth.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {product.highlights.map((highlight, index) => (
              <motion.div
                key={highlight}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                whileHover={{ y: -5 }}
                className="glass-panel p-6 rounded-2xl shadow-lg hover: transition-all hover-glow"
              >
                <div className="flex items-start gap-4">
                  <CheckCircle className={`text-green-400 flex-shrink-0 mt-1`} size={24} />
                  <p className="text-slate-200 font-medium tracking-wide">{highlight}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Specifications Section */}
      <section className="py-24 relative"> <div className="absolute top-1/2 right-0 w-[400px] h-[400px] bg-purple-600/10 blur-[120px] rounded-full pointer-events-none"></div> <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6"> Technical <span className="text-gradient">Specifications</span>
            </h2>
            <p className="text-slate-300 text-lg leading-relaxed">
              Built to scale effortlessly with your business requirements
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass-panel rounded-3xl shadow-[0_0_30px_rgba(0,0,0,0.5)] overflow-hidden"
            >
              {Object.entries(product.specifications).map(([key, value], index) => (
                <motion.div
                  key={key}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  className={`flex items-center justify-between p-6 ${index !== Object.entries(product.specifications).length - 1
 ? ' '
 : ''
 } hover:bg-white/5 transition-colors`}
                >
                  <span className="text-slate-200 font-medium tracking-wide">{key}</span>
                  <span className={`font-bold bg-gradient-to-r ${product.gradient} bg-clip-text text-transparent`}>
                    {value}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Integrations Section */}
      <section className="py-24 relative"> <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6"> Platform <span className="text-gradient">Integrations</span>
            </h2>
            <p className="text-slate-300 text-lg leading-relaxed">
              Seamlessly connect with your favorite tools and workflows
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {product.integrations.map((integration, index) => (
              <motion.div
                key={integration}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                whileHover={{ scale: 1.1, y: -5 }}
                className="glass-panel p-6 rounded-2xl shadow-lg flex flex-col items-center justify-center gap-3 cursor-pointer group hover-glow"
              >
                <ExternalLink className={`text-slate-400 group-hover:text-transparent group-hover:bg-gradient-to-br ${product.gradient} group-hover:bg-clip-text transition-all`} size={28} />
                <span className={`text-slate-300 text-sm font-medium text-center group-hover:text-transparent group-hover:bg-gradient-to-br ${product.gradient} group-hover:bg-clip-text transition-all`}>
                  {integration}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={`py-24 relative overflow-hidden`}>
        <div className="absolute inset-0">
          <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-br ${product.gradient} mix-blend-screen filter blur-[150px] opacity-10 rounded-full pointer-events-none`}></div>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-8 glass-panel rounded-3xl p-12 hover-glow transition-all"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-white"> Ready to Try <span className="text-transparent bg-gradient-to-r bg-clip-text" style={{ backgroundImage: `linear-gradient(to right, ${product.gradient.replace('from-', 'var(--tw-gradient-from)').replace('to-', 'var(--tw-gradient-to)')})` }}>{product.name}?</span>
            </h2>
            <p className="text-xl text-slate-300 leading-relaxed">
              Start your 30-day free trial today. No credit card required, instant access.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => navigate('contact')}
                className={`px-10 py-5 bg-gradient-to-br ${product.gradient} text-white font-bold rounded-xl shadow-[0_0_20px_rgba(59,130,246,0.3)] hover:shadow-[0_0_30px_rgba(59,130,246,0.5)] transition-all hover-glow`}
              >
                Start Free Trial
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => navigate('contact')}
                className="px-10 py-5 glass-panel text-white font-bold rounded-xl hover:bg-white/10 transition-all hover-glow"
              >
                Contact Sales
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
