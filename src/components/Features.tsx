import { Shield, Zap, Users, Cloud, Lock, Headphones, Rocket, Database, Globe, Cpu, CheckCircle, Award } from 'lucide-react';
import { motion } from 'motion/react';

const features = [
  {
    icon: Shield,
    title: 'Enterprise Security',
    description: 'Military-grade encryption with advanced threat detection and real-time monitoring',
    gradient: 'from-blue-500 to-cyan-500'
  },
  {
    icon: Zap,
    title: 'Lightning Performance',
    description: 'Optimized infrastructure delivering sub-second response times globally',
    gradient: 'from-yellow-500 to-orange-500'
  },
  {
    icon: Users,
    title: 'Unlimited Scaling',
    description: 'Grow without limits with auto-scaling infrastructure and resources',
    gradient: 'from-purple-500 to-pink-500'
  },
  {
    icon: Cloud,
    title: 'Cloud Native',
    description: 'Built for the cloud with 99.99% uptime SLA and global CDN',
    gradient: 'from-indigo-500 to-blue-500'
  },
  {
    icon: Database,
    title: 'Real-time Sync',
    description: 'Instant data synchronization across all devices and platforms',
    gradient: 'from-emerald-500 to-teal-500'
  },
  {
    icon: Cpu,
    title: 'AI-Powered',
    description: 'Machine learning algorithms that adapt and improve over time',
    gradient: 'from-violet-500 to-purple-500'
  },
  {
    icon: Lock,
    title: 'Data Privacy',
    description: 'GDPR, HIPAA, and SOC 2 compliant with complete data ownership',
    gradient: 'from-red-500 to-pink-500'
  },
  {
    icon: Globe,
    title: 'Global Reach',
    description: 'Deployed across 50+ data centers in 6 continents',
    gradient: 'from-cyan-500 to-blue-500'
  },
  {
    icon: Rocket,
    title: 'Rapid Deployment',
    description: 'Go live in hours, not weeks, with our streamlined onboarding',
    gradient: 'from-orange-500 to-red-500'
  },
  {
    icon: CheckCircle,
    title: 'API Integration',
    description: 'RESTful APIs and webhooks for seamless third-party integrations',
    gradient: 'from-green-500 to-emerald-500'
  },
  {
    icon: Award,
    title: 'Award Winning',
    description: 'Recognized by industry leaders for innovation and excellence',
    gradient: 'from-amber-500 to-yellow-500'
  },
  {
    icon: Headphones,
    title: '24/7 Support',
    description: 'Expert technical support available around the clock worldwide',
    gradient: 'from-pink-500 to-rose-500'
  }
];

export function Features() {
  return (
    <section id="features" className="py-24 relative overflow-hidden border-y">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:30px_30px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>

      {/* Animated Background Elements */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-blue-600 rounded-full mix-blend-screen filter blur-[100px] opacity-10 animate-blob"></div>
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-purple-600 rounded-full mix-blend-screen filter blur-[100px] opacity-10 animate-blob animation-delay-2000"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 glass-panel rounded-full border-blue-500/30 shadow-[0_0_15px_rgba(59,130,246,0.15)] mb-4">
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent font-medium">
              Why Choose Us
            </span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Built for <span className="text-gradient">Performance & Innovation</span>
          </h2>
          <p className="text-slate-300 max-w-2xl mx-auto text-lg leading-relaxed">
            Cutting-edge technologies and industry best practices ensure your business stays ahead
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              whileHover={{ y: -5 }}
              className="group glass-panel p-8 rounded-2xl shadow-lg hover:shadow-[0_0_20px_rgba(59,130,246,0.3)] transition-all hover: relative overflow-hidden hover-glow"
            >
              {/* Gradient overlay on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>

              <div className="relative z-10">
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                  className={`inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br ${feature.gradient} shadow-[0_0_15px_rgba(255,255,255,0.2)] mb-5`}
                >
                  <feature.icon className="text-white" size={24} />
                </motion.div>

                <h3 className="text-xl font-bold text-white mb-3 tracking-wide">
                  {feature.title}
                </h3>

                <p className="text-slate-300 leading-relaxed">
                  {feature.description}
                </p>

                {/* Animated corner accent */}
                <div className={`absolute -top-10 -right-10 w-32 h-32 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-20 blur-2xl transition-opacity duration-500`}></div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-20"
        >
          <p className="text-slate-300 mb-6 text-lg">Ready to experience these features?</p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium rounded-xl shadow-[0_0_20px_rgba(59,130,246,0.4)] hover:shadow-[0_0_30px_rgba(59,130,246,0.6)] hover:from-blue-500 hover:to-purple-500 transition-all hover-glow"
          >
            Start Your Free Trial
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
