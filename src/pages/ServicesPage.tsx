import { motion } from 'motion/react';
import { ArrowRight, CheckCircle, Sparkles, Code2, Database, ShoppingCart, Layers, Layout, Shield } from 'lucide-react';
import { MagnetCard } from '../components/MagnetCard';

type ServicesPageProps = {
  navigate: (page: string, slug?: string) => void;
};

const services = [
  {
    title: 'Custom Web Development',
    subtitle: 'High-Performance Modern Web Applications',
    description: 'We build blazing fast, scalable, and responsive web applications using modern tech stacks like Next.js and React. From corporate websites to complex startup MVPs, we engineer digital experiences that drive engagement.',
    icon: Code2,
    gradient: 'from-blue-500/20 via-cyan-500/20 to-transparent',
    iconGlow: 'text-cyan-400',
    features: [
      'Corporate Websites',
      'Startup MVP Platforms',
      'Admin Dashboards',
      'Custom Web Applications'
    ]
  },
  {
    title: 'SaaS & CRM Development',
    subtitle: 'Scalable Architectures for Growth',
    description: 'Specialized in building robust backend architectures for SaaS platforms and custom CRM systems. We handle multi-tenant logic, secure data segmentation, and complex subscription billing systems.',
    icon: Database,
    gradient: 'from-purple-500/20 via-pink-500/20 to-transparent',
    iconGlow: 'text-pink-400',
    features: [
      'Multi-tenant SaaS',
      'Custom CRM Systems',
      'Subscription Logic',
      'Secure Authentication'
    ]
  },
  {
    title: 'E-commerce Solutions',
    subtitle: 'Conversion-Optimized Storefronts',
    description: 'End-to-end e-commerce development from custom high-converting storefronts to powerful administrative backend panels managing inventory, payments, and global logistics.',
    icon: ShoppingCart,
    gradient: 'from-emerald-500/20 via-teal-500/20 to-transparent',
    iconGlow: 'text-teal-400',
    features: [
      'Payment Gateway Integration',
      'Inventory Systems',
      'Admin Control Panels',
      'Performance Optimization'
    ]
  },
  {
    title: 'Enterprise Software',
    subtitle: 'Streamlining Internal Operations',
    description: 'We develop secure, compliant, and highly functional internal tools and workflow automation systems that help large organizations and enterprises operate more efficiently.',
    icon: Layers,
    gradient: 'from-fuchsia-500/20 via-rose-500/20 to-transparent',
    iconGlow: 'text-rose-400',
    features: [
      'Automation Systems',
      'Internal Dashboards',
      'Workflow Tools',
      'Operations Management'
    ]
  },
  {
    title: 'UI/UX Engineering',
    subtitle: 'Premium Design Systems',
    description: 'Our design team creates stunning, intuitive interfaces utilizing modern trends like glassmorphism and subtle micro-animations to ensure your product stands out in the market.',
    icon: Layout,
    gradient: 'from-indigo-500/20 via-blue-500/20 to-transparent',
    iconGlow: 'text-blue-400',
    features: [
      'Wireframing',
      'Prototyping',
      'Design Systems',
      'Conversion Optimization'
    ]
  },
  {
    title: 'Cloud & Deployment',
    subtitle: 'Robust Infrastructure Setup',
    description: 'We handle the entire devops lifecycle, setting up secure, scalable cloud infrastructure on AWS and Vercel, implementing CI/CD pipelines, and ensuring maximum uptime.',
    icon: Shield,
    gradient: 'from-orange-500/20 via-amber-500/20 to-transparent',
    iconGlow: 'text-amber-400',
    features: [
      'AWS Setup',
      'Vercel Deployment',
      'Automated CI/CD',
      'Security Hardening'
    ]
  }
];

export function ServicesPage({ navigate }: ServicesPageProps) {
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
            <div className="inline-flex items-center gap-2 px-4 py-2 glass-panel rounded-full border-blue-500/30 shadow-[0_0_15px_rgba(59,130,246,0.15)] mb-2">
              <Sparkles size={16} className="text-blue-400" />
              <span className="text-blue-200 text-sm font-medium tracking-wide">Premium Software Engineering</span>
            </div>
            <h1 className="text-5xl lg:text-7xl font-bold text-white tracking-tight">
              Engineering <span style={{ backgroundImage: 'linear-gradient(to right, #60a5fa, #22d3ee)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', color: 'transparent' }}>Scalable</span> <br /> Digital Systems
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
              Helping Indian startups and global enterprises build secure, high-performance platforms from the ground up.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid using MagnetCards */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <MagnetCard gradientColors={service.gradient} className="h-full p-8 flex flex-col justify-between">
                  <div>
                    <div className="w-16 h-16 rounded-2xl bg-dark-800 border border-white/10 flex items-center justify-center mb-6 shadow-inner pointer-events-none">
                      <service.icon className={service.iconGlow} size={32} />
                    </div>
                    <h2 className="text-2xl font-bold text-white mb-2 tracking-wide">
                      {service.title}
                    </h2>
                    <p className={`text-sm tracking-wide mb-6 uppercase text-transparent bg-gradient-to-r ${service.gradient.replace('/20', '')} bg-clip-text font-bold`}>
                      {service.subtitle}
                    </p>
                    <p className="text-slate-300 leading-relaxed mb-8">
                      {service.description}
                    </p>

                    {/* Features List */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                      {service.features.map((feature) => (
                        <div key={feature} className="flex items-center gap-3">
                          <CheckCircle className={`w-5 h-5 ${service.iconGlow} shrink-0`} />
                          <span className="text-slate-200 text-sm font-medium">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </MagnetCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-blue-600/20 blur-[120px] rounded-full pointer-events-none"></div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-8 glass-panel border border-white/10 p-8 md:p-12 rounded-3xl hover-glow transition-all"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-white tracking-tight py-5">
              Let's Build Your <span style={{ backgroundImage: 'linear-gradient(to right, #60a5fa, #22d3ee)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', color: 'transparent' }}>Digital System</span>
            </h2>
            <p className="text-slate-300 text-lg leading-relaxed max-w-2xl mx-auto">
              Ready to transform your ideas into a scalable, high-performance reality? Our engineering team is ready to help.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate('contact')}
              className="px-10 py-5 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white rounded-xl shadow-[0_0_30px_rgba(79,70,229,0.5)] hover:shadow-[0_0_40px_rgba(79,70,229,0.7)] font-bold text-lg inline-flex items-center gap-3 transition-all hover-glow"
            >
              Start Your Project
              <ArrowRight size={24} />
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
