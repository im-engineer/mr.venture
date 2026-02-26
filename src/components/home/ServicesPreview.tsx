import { motion } from 'motion/react';
import { Code2, Database, ShoppingCart, Layers, Layout, ArrowRight } from 'lucide-react';
import { MagnetCard } from '../MagnetCard';

type ServicesPreviewProps = {
  navigate: (page: string) => void;
};

const services = [
  {
    icon: Code2,
    title: 'Custom Web Development',
    description: 'High-performance corporate websites, startup MVPs, and complex web applications built with Next.js.',
    gradient: 'from-blue-500/30 via-cyan-500/20 to-transparent'
  },
  {
    icon: Database,
    title: 'SaaS & CRM Development',
    description: 'Scalable multi-tenant architectures, subscription logic, and secure internal dashboards.',
    gradient: 'from-purple-500/30 via-pink-500/20 to-transparent'
  },
  {
    icon: ShoppingCart,
    title: 'E-commerce Platforms',
    description: 'High-conversion storefronts with seamless payment gateway and inventory integrations.',
    gradient: 'from-emerald-500/30 via-teal-500/20 to-transparent'
  },
  {
    icon: Layers,
    title: 'Enterprise Software',
    description: 'Robust automation systems, internal operations management, and secure data workflows.',
    gradient: 'from-indigo-500/30 via-blue-500/20 to-transparent'
  },
  {
    icon: Layout,
    title: 'UI/UX Engineering',
    description: 'Premium user interfaces with conversion-optimized layouts and modern glassmorphism aesthetics.',
    gradient: 'from-fuchsia-500/30 via-rose-500/20 to-transparent'
  }
];

export function ServicesPreview({ navigate }: ServicesPreviewProps) {
  return (
    <section className="py-24 relative overflow-hidden bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 glass-panel rounded-full border-blue-400/30 mb-6 bg-blue-900/10">
            <span className="text-blue-300 font-medium tracking-wide uppercase text-sm">
              Core Expertise
            </span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6 tracking-tight">
            Engineering <span style={{ backgroundImage: 'linear-gradient(to right, #60a5fa, #22d3ee)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', color: 'transparent' }}>Digital Systems</span>
          </h2>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto leading-relaxed">
            We don't just build websites. We engineer secure, highly-scalable software infrastructure designed to solve complex business problems for Indian enterprises.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <MagnetCard gradientColors={service.gradient} className="h-full p-8 flex flex-col justify-between">
                <div>
                  <div className="w-14 h-14 rounded-xl bg-dark-800 border border-white/10 flex items-center justify-center mb-6 shadow-inner pointer-events-none">
                    <service.icon className="text-white" size={28} />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">
                    {service.title}
                  </h3>
                  <p className="text-slate-400 leading-relaxed text-sm mb-6">
                    {service.description}
                  </p>
                </div>

                <div
                  onClick={() => navigate('services')}
                  className="inline-flex items-center text-blue-400 font-medium hover:text-cyan-400 transition-colors cursor-pointer group w-fit"
                >
                  Explore Capabilities
                  <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </div>
              </MagnetCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
