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
      <div className="pt-32 pb-24 text-center min-h-screen bg-[#080b18] bg-[#080b18] flex flex-col justify-center items-center"> <h1 className="text-4xl text-white font-bold mb-4">Service Not Found</h1> <button onClick={() => navigate('services')} className="mt-4 text-blue-400 hover:text-blue-300 font-medium">
          &larr; Back to Services
        </button>
      </div>
    );
  }

  return (
    <div className="pt-20 min-h-screen bg-[#080b18] bg-[#080b18]">
      {/* Hero Section */}
      <section className="py-24 relative overflow-hidden"> <div className="absolute inset-0">
          <div className={`absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-br ${service.gradient} rounded-full mix-blend-screen filter blur-[150px] opacity-20 animate-blob`}></div>
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_0%,#000_70%,transparent_100%)]"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.button
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            onClick={() => navigate('services')}
            className="flex items-center gap-2 text-slate-400 hover:text-white mb-10 transition-colors font-medium"
          >
            <ArrowLeft size={20} />
            Back to Services
          </motion.button>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-white space-y-8"
            >
              <div className={`inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br ${service.gradient} shadow-[0_0_30px_rgba(255,255,255,0.2)] rounded-2xl`}>
                <service.icon size={40} className="text-white" />
              </div>
              <div>
                <h1 className="text-5xl lg:text-7xl font-bold mb-4 tracking-tight drop-shadow-sm">{service.title}</h1>
                <p className={`text-2xl font-medium text-transparent bg-gradient-to-r ${service.gradient} bg-clip-text`}>{service.subtitle}</p>
              </div>
              <p className="text-xl text-slate-300 leading-relaxed font-light">
                {service.description}
              </p>

              <div className="flex flex-wrap gap-4 pt-4">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => navigate('contact')}
                  className={`px-8 py-4 bg-gradient-to-br ${service.gradient} text-white rounded-xl shadow-[0_0_20px_rgba(59,130,246,0.3)] hover:shadow-[0_0_30px_rgba(59,130,246,0.5)] font-semibold text-lg transition-all hover-glow`}
                >
                  Get Started
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 glass-panel text-white rounded-xl hover:bg-white/10 transition-colors font-semibold text-lg hover-glow"
                >
                  Schedule Demo
                </motion.button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="relative group"
            >
              <div className={`absolute -inset-4 bg-gradient-to-br ${service.gradient} rounded-[2.5rem] blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-500 animate-pulse-glow`}></div>
              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden glass-panel shadow-[0_0_40px_rgba(0,0,0,0.5)]">
                <ImageWithFallback
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover opacity-80 mix-blend-lighten"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-900/80 via-transparent to-transparent"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 relative"> <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-blue-600/10 blur-[120px] rounded-full pointer-events-none"></div> <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6"> Key <span className="text-gradient">Features</span>
            </h2>
            <p className="text-slate-300 text-lg max-w-2xl mx-auto leading-relaxed">
              Everything you need to succeed, built into one powerful platform designed for maximum efficiency.
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
                whileHover={{ y: -5 }}
                className="glass-panel p-6 rounded-2xl shadow-lg hover: transition-all hover-glow"
              >
                <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br ${service.gradient} shadow-lg mb-4`}>
                  <CheckCircle className="text-white" size={20} />
                </div>
                <p className="text-slate-200 font-medium tracking-wide">{feature}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 relative"> <div className="absolute top-1/2 right-0 w-[400px] h-[400px] bg-purple-600/10 blur-[120px] rounded-full pointer-events-none"></div> <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6"> Business <span className="text-gradient">Benefits</span>
            </h2>
            <p className="text-slate-300 text-lg leading-relaxed">
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
                className="text-center glass-panel p-8 rounded-2xl hover: transition-all group hover-glow"
              >
                <div className={`inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br ${service.gradient} rounded-2xl mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  {index === 0 && <TrendingUp className="text-white" size={36} />} {index === 1 && <Shield className="text-white" size={36} />} {index === 2 && <Users className="text-white" size={36} />} {index === 3 && <Zap className="text-white" size={36} />}
                </div>
                <p className="text-slate-200 text-lg font-medium">{benefit}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-24 relative"> <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6"> Technology <span className="text-gradient">Stack</span>
            </h2>
            <p className="text-slate-300 text-lg leading-relaxed">
              Built with industry-leading technologies for maximum performance
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
                className={`px-8 py-4 glass-panel bg-gradient-to-r hover:from-white/10 hover:to-white/5 text-white font-medium rounded-xl shadow-lg cursor-default hover-glow`}
              >
                {tech}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-24 relative"> <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/10 blur-[150px] rounded-full pointer-events-none"></div> <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6"> Flexible <span className="text-gradient">Pricing Plans</span>
            </h2>
            <p className="text-slate-300 text-lg leading-relaxed">
              Choose the plan that fits your scale and needs
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
                className={`glass-panel p-10 rounded-3xl shadow-2xl relative transition-all hover-glow group ${index === 1
                    ? `border  bg-gradient-to-br from-white/10 to-transparent`
                    : ' '
                  }`}
              >
                {index === 1 && (
                  <div className={`absolute -inset-0.5 bg-gradient-to-br ${service.gradient} rounded-[1.6rem] blur opacity-20 group-hover:opacity-40 transition-opacity duration-300`}></div>
                )}

                <div className="relative z-10 text-center space-y-8">
                  {index === 1 && (
                    <div className="inline-flex items-center gap-1 px-4 py-1.5 bg-gradient-to-r from-yellow-400/20 to-orange-400/20 rounded-full border-yellow-400/30"> <Star className="text-yellow-400" size={16} /> <span className="text-yellow-200 font-medium text-sm tracking-wide uppercase">Popular</span>
                    </div>
                  )}
                  <h3 className={`text-2xl font-bold capitalize text-white tracking-wide`}>
                    {plan}
                  </h3>
                  <div className={`text-5xl font-bold ${index === 1 ? 'text-white drop-shadow-md' : `text-transparent bg-gradient-to-r ${service.gradient} bg-clip-text`}`}>
                    {price}
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => navigate('contact')}
                    className={`w-full px-6 py-4 rounded-xl font-bold text-lg transition-all ${index === 1
                        ? `bg-gradient-to-r ${service.gradient} text-white shadow-[0_0_20px_rgba(59,130,246,0.3)]   hover:shadow-[0_0_30px_rgba(59,130,246,0.5)]`
                        : 'bg-white/5   text-white hover:bg-white/10'
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
