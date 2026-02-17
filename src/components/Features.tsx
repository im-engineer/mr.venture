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
    <section id="features" className="py-24 bg-gradient-to-br from-slate-50 via-white to-indigo-50 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-indigo-200 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-indigo-100 to-purple-100 rounded-full border border-indigo-200 mb-4">
            <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Why Choose Us
            </span>
          </div>
          <h2 className="text-4xl lg:text-5xl bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent mb-4">
            Built for Performance & Innovation
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg">
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
              whileHover={{ y: -8, boxShadow: '0 20px 40px -12px rgba(0,0,0,0.15)' }}
              className="group bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all border border-slate-100 relative overflow-hidden"
            >
              {/* Gradient overlay on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-5 transition-opacity`}></div>
              
              <div className="relative z-10">
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                  className={`inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br ${feature.gradient} shadow-lg mb-4`}
                >
                  <feature.icon className="text-white" size={24} />
                </motion.div>
                
                <h3 className="text-slate-900 mb-3">
                  {feature.title}
                </h3>
                
                <p className="text-slate-600 leading-relaxed">
                  {feature.description}
                </p>

                {/* Animated corner accent */}
                <div className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-10 blur-2xl transition-opacity`}></div>
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
          className="text-center mt-16"
        >
          <p className="text-slate-600 mb-6">Ready to experience these features?</p>
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: '0 20px 40px -12px rgba(79, 70, 229, 0.4)' }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl shadow-lg shadow-indigo-500/30"
          >
            Start Your Free Trial
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
