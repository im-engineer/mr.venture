import { motion } from 'motion/react';
import { ArrowLeft, CheckCircle, Zap, Shield, TrendingUp, Users, Star } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { servicesData } from '../data/servicesData';

type ServiceDetailPageProps = {
  slug: string;
  navigate: (page: string, slug?: string) => void;
};

export function ServiceDetailPage({ slug, navigate }: ServiceDetailPageProps) {
  const service = servicesData.find(s => s.slug === slug);

  if (!service) {
    return (
      <div className="pt-32 pb-24 text-center">
        <h1>Service not found</h1>
        <button onClick={() => navigate('services')} className="mt-4 text-indigo-600">
          Back to Services
        </button>
      </div>
    );
  }

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className={`py-24 bg-gradient-to-br ${service.gradient} relative overflow-hidden`}>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.button
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            onClick={() => navigate('services')}
            className="flex items-center gap-2 text-white/80 hover:text-white mb-8 transition-colors"
          >
            <ArrowLeft size={20} />
            Back to Services
          </motion.button>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-white space-y-6"
            >
              <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 backdrop-blur-sm rounded-2xl">
                <service.icon size={40} />
              </div>
              <h1 className="text-5xl lg:text-6xl">{service.title}</h1>
              <p className="text-2xl text-white/90">{service.subtitle}</p>
              <p className="text-xl text-white/80 leading-relaxed">
                {service.description}
              </p>

              <div className="flex flex-wrap gap-4 pt-4">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => navigate('contact')}
                  className="px-8 py-4 bg-white text-indigo-600 rounded-xl shadow-xl"
                >
                  Get Started
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 border-2 border-white text-white rounded-xl hover:bg-white/10 transition-colors"
                >
                  Schedule Demo
                </motion.button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
                <ImageWithFallback
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent mb-4">
              Key Features
            </h2>
            <p className="text-slate-600 text-lg max-w-2xl mx-auto">
              Everything you need to succeed, built into one powerful platform
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {service.features.map((feature, index) => (
              <motion.div
                key={feature}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                whileHover={{ y: -8, boxShadow: '0 20px 40px -12px rgba(0,0,0,0.15)' }}
                className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100"
              >
                <CheckCircle className={`text-green-600 mb-3`} size={24} />
                <p className="text-slate-900">{feature}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-gradient-to-br from-slate-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent mb-4">
              Business Benefits
            </h2>
            <p className="text-slate-600 text-lg">
              Measurable results that drive your business forward
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {service.benefits.map((benefit, index) => (
              <motion.div
                key={benefit}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${service.gradient} rounded-2xl mb-4`}>
                  {index === 0 && <TrendingUp className="text-white" size={32} />}
                  {index === 1 && <Shield className="text-white" size={32} />}
                  {index === 2 && <Users className="text-white" size={32} />}
                  {index === 3 && <Zap className="text-white" size={32} />}
                </div>
                <p className="text-slate-700 text-lg">{benefit}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent mb-4">
              Technology Stack
            </h2>
            <p className="text-slate-600 text-lg">
              Built with industry-leading technologies
            </p>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-4">
            {service.technologies.map((tech, index) => (
              <motion.div
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                whileHover={{ scale: 1.1, y: -5 }}
                className={`px-6 py-3 bg-gradient-to-br ${service.gradient} text-white rounded-xl shadow-lg`}
              >
                {tech}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-24 bg-gradient-to-br from-slate-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent mb-4">
              Flexible Pricing Plans
            </h2>
            <p className="text-slate-600 text-lg">
              Choose the plan that fits your needs
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {Object.entries(service.pricing).map(([plan, price], index) => (
              <motion.div
                key={plan}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className={`bg-white p-8 rounded-2xl shadow-xl border-2 ${
                  index === 1 ? `border-transparent bg-gradient-to-br ${service.gradient} text-white` : 'border-slate-200'
                }`}
              >
                <div className="text-center space-y-4">
                  {index === 1 && (
                    <div className="inline-flex items-center gap-1 px-3 py-1 bg-white/20 rounded-full">
                      <Star className="text-yellow-300" size={16} />
                      <span className="text-white">Popular</span>
                    </div>
                  )}
                  <h3 className={`text-2xl capitalize ${index === 1 ? 'text-white' : 'text-slate-900'}`}>
                    {plan}
                  </h3>
                  <div className={`text-4xl ${index === 1 ? 'text-white' : `bg-gradient-to-r ${service.gradient} bg-clip-text text-transparent`}`}>
                    {price}
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => navigate('contact')}
                    className={`w-full px-6 py-3 rounded-xl transition-all ${
                      index === 1
                        ? 'bg-white text-indigo-600 hover:bg-gray-50'
                        : `bg-gradient-to-r ${service.gradient} text-white hover:shadow-lg`
                    }`}
                  >
                    Get Started
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
