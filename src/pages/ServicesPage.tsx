import { motion } from 'motion/react';
import { ArrowRight, CheckCircle } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { servicesData } from '../data/servicesData';

type ServicesPageProps = {
  navigate: (page: string, slug?: string) => void;
};

export function ServicesPage({ navigate }: ServicesPageProps) {
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
            <h1 className="text-5xl lg:text-6xl">Our Services</h1>
            <p className="text-xl text-indigo-100 max-w-3xl mx-auto">
              Comprehensive software solutions designed to transform your business operations and drive growth
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-24">
            {servicesData.map((service, index) => (
              <motion.div
                key={service.slug}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:grid-flow-dense' : ''
                }`}
              >
                {/* Image */}
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className={`${index % 2 === 1 ? 'lg:col-start-2' : ''}`}
                >
                  <div className="relative group">
                    <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} rounded-3xl blur-2xl opacity-20 group-hover:opacity-30 transition-opacity`}></div>
                    <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
                      <ImageWithFallback
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </motion.div>

                {/* Content */}
                <div className="space-y-6">
                  <div>
                    <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${service.gradient} shadow-lg mb-4`}>
                      <service.icon className="text-white" size={32} />
                    </div>
                    <h2 className="text-4xl bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent mb-2">
                      {service.title}
                    </h2>
                    <p className="text-xl text-indigo-600 mb-4">{service.subtitle}</p>
                    <p className="text-slate-600 text-lg leading-relaxed">
                      {service.description}
                    </p>
                  </div>

                  {/* Features Preview */}
                  <div className="grid grid-cols-2 gap-3">
                    {service.features.slice(0, 4).map((feature) => (
                      <div key={feature} className="flex items-center gap-2">
                        <CheckCircle className="text-green-600 flex-shrink-0" size={18} />
                        <span className="text-slate-700">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Pricing */}
                  <div className="flex flex-wrap gap-4 pt-4">
                    <div className="bg-slate-50 px-4 py-2 rounded-lg">
                      <span className="text-slate-600">Starting at </span>
                      <span className={`bg-gradient-to-r ${service.gradient} bg-clip-text text-transparent`}>
                        {service.pricing.starter}
                      </span>
                    </div>
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.05, boxShadow: '0 20px 40px -12px rgba(79, 70, 229, 0.4)' }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => navigate('service-detail', service.slug)}
                    className={`px-8 py-4 bg-gradient-to-r ${service.gradient} text-white rounded-xl shadow-lg flex items-center gap-2`}
                  >
                    Learn More
                    <ArrowRight size={20} />
                  </motion.button>
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
              Need a Custom Solution?
            </h2>
            <p className="text-slate-600 text-lg">
              We offer tailored solutions to meet your unique business requirements
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate('contact')}
              className="px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl shadow-lg"
            >
              Contact Us
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
