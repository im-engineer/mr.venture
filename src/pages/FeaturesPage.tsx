import { motion } from 'motion/react';
import { 
  Shield, Zap, Users, Cloud, Lock, Headphones, Rocket, Database, 
  Globe, Cpu, CheckCircle, Award, Smartphone, BarChart, GitBranch,
  Layers, Workflow, Sparkles
} from 'lucide-react';

const featureCategories = [
  {
    title: 'Core Features',
    description: 'Essential capabilities built into every product',
    features: [
      {
        icon: Zap,
        title: 'Lightning Performance',
        description: 'Optimized infrastructure delivering sub-second response times globally with advanced caching',
        gradient: 'from-yellow-500 to-orange-500'
      },
      {
        icon: Shield,
        title: 'Enterprise Security',
        description: 'Military-grade encryption with advanced threat detection and real-time monitoring',
        gradient: 'from-blue-500 to-cyan-500'
      },
      {
        icon: Cloud,
        title: 'Cloud Native',
        description: 'Built for the cloud with 99.99% uptime SLA and global CDN distribution',
        gradient: 'from-indigo-500 to-blue-500'
      },
      {
        icon: Database,
        title: 'Real-time Sync',
        description: 'Instant data synchronization across all devices and platforms',
        gradient: 'from-emerald-500 to-teal-500'
      }
    ]
  },
  {
    title: 'Advanced Capabilities',
    description: 'Powerful features for enterprise needs',
    features: [
      {
        icon: Cpu,
        title: 'AI-Powered',
        description: 'Machine learning algorithms that adapt and improve over time',
        gradient: 'from-violet-500 to-purple-500'
      },
      {
        icon: Users,
        title: 'Unlimited Scaling',
        description: 'Grow without limits with auto-scaling infrastructure and resources',
        gradient: 'from-purple-500 to-pink-500'
      },
      {
        icon: BarChart,
        title: 'Advanced Analytics',
        description: 'Comprehensive dashboards and reporting with predictive insights',
        gradient: 'from-pink-500 to-rose-500'
      },
      {
        icon: Workflow,
        title: 'Automation Engine',
        description: 'Powerful workflow automation to streamline your operations',
        gradient: 'from-orange-500 to-red-500'
      }
    ]
  },
  {
    title: 'Integration & Support',
    description: 'Connect and get help when you need it',
    features: [
      {
        icon: GitBranch,
        title: 'API Integration',
        description: 'RESTful APIs and webhooks for seamless third-party integrations',
        gradient: 'from-green-500 to-emerald-500'
      },
      {
        icon: Layers,
        title: 'Microservices',
        description: 'Modular architecture for maximum flexibility and customization',
        gradient: 'from-cyan-500 to-blue-500'
      },
      {
        icon: Smartphone,
        title: 'Mobile Ready',
        description: 'Native mobile apps for iOS and Android with offline support',
        gradient: 'from-blue-500 to-indigo-500'
      },
      {
        icon: Headphones,
        title: '24/7 Support',
        description: 'Expert technical support available around the clock worldwide',
        gradient: 'from-pink-500 to-rose-500'
      }
    ]
  },
  {
    title: 'Compliance & Quality',
    description: 'Security and standards you can trust',
    features: [
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
        icon: Award,
        title: 'Award Winning',
        description: 'Recognized by industry leaders for innovation and excellence',
        gradient: 'from-amber-500 to-yellow-500'
      }
    ]
  }
];

export function FeaturesPage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
            backgroundSize: '50px 50px',
          }}></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center text-white space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full border border-white/30 mb-4">
              <Sparkles size={20} />
              <span>Features</span>
            </div>
            <h1 className="text-5xl lg:text-6xl">Everything You Need to Succeed</h1>
            <p className="text-xl text-indigo-100 max-w-3xl mx-auto">
              Comprehensive features designed to empower your business and drive innovation
            </p>
          </motion.div>
        </div>
      </section>

      {/* Features Categories */}
      {featureCategories.map((category, categoryIndex) => (
        <section
          key={category.title}
          className={categoryIndex % 2 === 0 ? 'py-24 bg-white' : 'py-24 bg-gradient-to-br from-slate-50 to-indigo-50'}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent mb-4">
                {category.title}
              </h2>
              <p className="text-slate-600 text-lg">
                {category.description}
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {category.features.map((feature, index) => (
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
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* Stats Section */}
      <section className="py-24 bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 text-center text-white">
            {[
              { value: '99.99%', label: 'Uptime SLA' },
              { value: '< 100ms', label: 'Response Time' },
              { value: '256-bit', label: 'Encryption' },
              { value: '24/7', label: 'Support' }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="text-5xl mb-2">{stat.value}</div>
                <div className="text-indigo-100">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-4xl bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">
              Experience All Features
            </h2>
            <p className="text-slate-600 text-lg">
              Start your free trial today and explore everything our platform has to offer
            </p>
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: '0 20px 40px -12px rgba(79, 70, 229, 0.4)' }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl shadow-lg inline-flex items-center gap-2"
            >
              <CheckCircle size={20} />
              Start Free Trial
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
