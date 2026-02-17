import { motion } from 'motion/react';
import { ArrowRight, Package, Calendar, Tag } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { productsData } from '../data/productsData';

type ProductsPageProps = {
  navigate: (page: string, slug?: string) => void;
};

export function ProductsPage({ navigate }: ProductsPageProps) {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl animate-blob"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl animate-blob animation-delay-2000"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center text-white space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full border border-white/30 mb-4">
              <Package size={20} />
              <span>Our Products</span>
            </div>
            <h1 className="text-5xl lg:text-6xl">Enterprise Software Products</h1>
            <p className="text-xl text-indigo-100 max-w-3xl mx-auto">
              Powerful, scalable solutions designed for modern businesses
            </p>
          </motion.div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {productsData.map((product, index) => (
              <motion.div
                key={product.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="group bg-white rounded-2xl shadow-lg border border-slate-100 overflow-hidden cursor-pointer"
                onClick={() => navigate('product-detail', product.slug)}
              >
                {/* Image */}
                <div className="relative aspect-[16/10] overflow-hidden">
                  <div className={`absolute inset-0 bg-gradient-to-br ${product.gradient} opacity-20`}></div>
                  <ImageWithFallback
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className={`absolute top-4 right-4 px-3 py-1 bg-gradient-to-r ${product.gradient} text-white rounded-full`}>
                    v{product.version}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 space-y-4">
                  <div className={`inline-flex items-center gap-1 px-3 py-1 bg-gradient-to-r ${product.gradient} bg-opacity-10 rounded-full`}>
                    <Tag size={14} />
                    <span className="text-sm">{product.category}</span>
                  </div>

                  <div>
                    <h3 className="text-2xl text-slate-900 mb-2">{product.name}</h3>
                    <p className={`bg-gradient-to-r ${product.gradient} bg-clip-text text-transparent mb-3`}>
                      {product.tagline}
                    </p>
                    <p className="text-slate-600 leading-relaxed line-clamp-3">
                      {product.description}
                    </p>
                  </div>

                  {/* Highlights */}
                  <div className="space-y-2">
                    {product.highlights.slice(0, 3).map((highlight) => (
                      <div key={highlight} className="flex items-start gap-2">
                        <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${product.gradient} mt-2`}></div>
                        <span className="text-slate-700">{highlight}</span>
                      </div>
                    ))}
                  </div>

                  {/* Footer */}
                  <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                    <div className="flex items-center gap-2 text-slate-500">
                      <Calendar size={16} />
                      <span className="text-sm">{product.releaseDate}</span>
                    </div>
                    <motion.button
                      whileHover={{ x: 5 }}
                      className={`flex items-center gap-2 text-transparent bg-gradient-to-r ${product.gradient} bg-clip-text`}
                    >
                      Learn More
                      <ArrowRight size={18} />
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-slate-50 to-indigo-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-4xl bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">
              Ready to Get Started?
            </h2>
            <p className="text-slate-600 text-lg">
              Try any of our products with a 30-day free trial
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => navigate('contact')}
                className="px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl shadow-lg"
              >
                Start Free Trial
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => navigate('contact')}
                className="px-8 py-4 bg-white border-2 border-slate-200 text-slate-700 rounded-xl hover:border-indigo-300"
              >
                Request Demo
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
