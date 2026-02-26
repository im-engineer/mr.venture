import { motion } from 'motion/react';
import { ArrowRight, Package, Database, Key, Briefcase, Tag } from 'lucide-react';
import { MagnetCard } from '../components/MagnetCard';

type ProductsPageProps = {
  navigate: (page: string, slug?: string) => void;
};

const products = [
  {
    name: 'MR CRM Platform',
    tagline: 'Enterprise Lead & Sales Management',
    description: 'A highly customizable Customer Relationship Management system built specifically for large sales teams. Features include dynamic lead routing, deeply granulated role-based access control, integrated communication channels, and advanced revenue analytics dashboards.',
    icon: Briefcase,
    category: 'CRM',
    gradient: 'from-blue-500/20 via-cyan-500/20 to-transparent',
    iconColor: 'text-cyan-400',
    highlights: [
      'Advanced Lead Management',
      'Granular Role-Based Access',
      'Revenue Forecasting & Analytics',
      'Custom API Integrations'
    ]
  },
  {
    name: 'MR SaaS Starter Framework',
    tagline: 'Accelerate Your Next Startup',
    description: 'Stop rebuilding the same foundational layers. Our SaaS starter framework provides production-ready secure authentication, complex multi-tier subscription logic with Stripe, a comprehensive super-admin panel, and a highly scalable Next.js + Node backend architecture.',
    icon: Key,
    category: 'Framework',
    gradient: 'from-purple-500/20 via-pink-500/20 to-transparent',
    iconColor: 'text-pink-400',
    highlights: [
      'Production-Ready Auth',
      'Advanced Subscription Logic',
      'Comprehensive Admin Panel',
      'Scalable Next.js Architecture'
    ]
  },
  {
    name: 'Business Automation Suite',
    tagline: 'Intelligent Internal Operations',
    description: 'A powerful suite designed to eliminate manual data entry and streamline company-wide operations. Connects your disparate tools, automates complex multi-step workflows, and generates real-time performance reports for executive leadership.',
    icon: Database,
    category: 'Automation',
    gradient: 'from-emerald-500/20 via-teal-500/20 to-transparent',
    iconColor: 'text-teal-400',
    highlights: [
      'Multi-Step Workflow Automation',
      'Real-Time Executive Reporting',
      'Disparate Tool Integration',
      'Custom Internal Operations'
    ]
  }
];

export function ProductsPage({ navigate }: ProductsPageProps) {
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
            className="w-[80vw] h-[60vh] max-w-[800px] max-h-[600px] bg-gradient-to-br from-indigo-500/30 via-purple-500/30 to-pink-500/30 blur-[120px] rounded-[60%_40%_30%_70%]"
          />
        </div>
        {/* Subtle Grid Overlay */}
        <div className="absolute inset-0 z-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 glass-panel rounded-full border-purple-500/30 shadow-[0_0_15px_rgba(168,85,247,0.15)] mb-2">
              <Package size={16} className="text-purple-400" />
              <span className="text-purple-200 text-sm font-medium tracking-wide">MR Venture Ecosystem</span>
            </div>
            <h1 className="text-5xl lg:text-7xl font-bold text-white tracking-tight">
              Our Digital <span style={{ backgroundImage: 'linear-gradient(to right, #c084fc, #f472b6)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', color: 'transparent' }}>Products</span>
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
              We build scalable internal tools and powerful SaaS primitives designed to accelerate growing businesses and development teams.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Products Presentation */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col">
            {products.map((product, index) => (
              <motion.div
                key={product.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="mb-16 lg:mb-24 last:mb-0"
              >
                <MagnetCard gradientColors={product.gradient} className="p-8 lg:p-12">
                  <div className="grid lg:grid-cols-[1fr_2fr] gap-8 items-center">

                    {/* Left Icon / Core Info */}
                    <div className="flex flex-col h-full justify-between">
                      <div>
                        <div className={`inline-flex items-center gap-2 px-3 py-1 bg-white/5 border border-white/10 rounded-full mb-6`}>
                          <Tag size={12} className={product.iconColor} />
                          <span className={`text-xs font-bold tracking-wide uppercase ${product.iconColor}`}>{product.category}</span>
                        </div>
                        <div className="w-20 h-20 rounded-2xl bg-dark-800 border border-white/10 flex items-center justify-center mb-6 shadow-inner pointer-events-none">
                          <product.icon className={product.iconColor} size={40} />
                        </div>
                        <h2 className="text-3xl font-bold text-white mb-2 tracking-tight">{product.name}</h2>
                        <p className={`text-lg font-medium bg-gradient-to-r ${product.gradient.replace('/20', '')} bg-clip-text text-transparent`}>
                          {product.tagline}
                        </p>
                      </div>
                    </div>

                    {/* Right Details */}
                    <div className="space-y-8 lg:border-l lg:border-white/10 lg:pl-12">
                      <p className="text-slate-300 text-lg leading-relaxed">
                        {product.description}
                      </p>

                      <div className="grid sm:grid-cols-2 gap-4 pt-4 border-t border-white/5">
                        {product.highlights.map((highlight) => (
                          <div key={highlight} className="flex items-center gap-3">
                            <div className={`w-2 h-2 rounded-full ${product.iconColor.replace('text-', 'bg-')} shadow-[0_0_8px_rgba(255,255,255,0.3)]`}></div>
                            <span className="text-slate-200 text-sm font-medium">{highlight}</span>
                          </div>
                        ))}
                      </div>

                      <div className="pt-10 mt-6 border-t border-white/5">
                        <motion.button
                          whileHover={{ scale: 1.05, x: 5 }}
                          whileTap={{ scale: 0.95 }}
                          onClick={() => navigate('contact')}
                          className={`flex items-center gap-2 font-bold text-lg ${product.iconColor} hover:text-white transition-colors group`}
                        >
                          Request Access / Demo
                          <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                        </motion.button>
                      </div>
                    </div>

                  </div>
                </MagnetCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Pipeline Section */}
      <section className="py-24 relative overflow-hidden bg-[#050812]/50 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h3 className="text-3xl font-bold text-white mb-12 tracking-tight">Upcoming <span style={{ backgroundImage: 'linear-gradient(to right, #c084fc, #22d3ee)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', color: 'transparent' }}>Innovation Pipeline</span></h3>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="glass-panel p-6 rounded-2xl border border-white/5 bg-[#0a0f1c]/40 hover-glow">
              <h4 className="text-lg font-bold text-slate-200 mb-2">AI-Powered CRM Tools</h4>
              <p className="text-slate-400 text-sm">Predictive lead scoring and automated email outreach scheduling built into the core MR CRM.</p>
            </div>
            <div className="glass-panel p-6 rounded-2xl border border-white/5 bg-[#0a0f1c]/40 hover-glow">
              <h4 className="text-lg font-bold text-slate-200 mb-2">Advanced Analytics</h4>
              <p className="text-slate-400 text-sm">Standalone BI dashboard capable of ingesting high volumes of disparate data for Indian enterprises.</p>
            </div>
            <div className="glass-panel p-6 rounded-2xl border border-white/5 bg-[#0a0f1c]/40 hover-glow">
              <h4 className="text-lg font-bold text-slate-200 mb-2">Pre-built Ecom Engines</h4>
              <p className="text-slate-400 text-sm">Headless commerce frameworks connecting Next.js directly to custom specialized inventories.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-purple-600/20 blur-[120px] rounded-full pointer-events-none"></div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-8 glass-panel border border-white/10 p-8 md:p-12 rounded-3xl hover-glow transition-all"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-white tracking-tight">
              Want a <span style={{ backgroundImage: 'linear-gradient(to right, #c084fc, #22d3ee)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', color: 'transparent' }}>Custom Product Built?</span>
            </h2>
            <p className="text-slate-300 text-lg leading-relaxed max-w-2xl mx-auto">
              If our existing products don't fit exactly what you need, our engineering team can build it completely from scratch tailored to your exact specifications.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate('contact')}
              className="px-10 py-5 bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 text-white rounded-xl shadow-[0_0_30px_rgba(168,85,247,0.5)] hover:shadow-[0_0_40px_rgba(168,85,247,0.7)] font-bold text-lg inline-flex items-center gap-3 transition-all hover-glow"
            >
              Contact Us
              <ArrowRight size={24} />
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
