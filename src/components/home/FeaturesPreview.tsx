import { motion } from 'motion/react';
import { Shield, Zap, Cloud, Cpu, ArrowRight, CheckCircle } from 'lucide-react';

type FeaturesPreviewProps = {
  navigate: (page: string) => void;
};

const highlights = [
  {
    icon: Zap,
    title: 'Lightning Fast',
    description: 'Sub-second response times',
    gradient: 'from-yellow-500 to-orange-500'
  },
  {
    icon: Shield,
    title: 'Enterprise Security',
    description: 'Military-grade encryption',
    gradient: 'from-blue-500 to-cyan-500'
  },
  {
    icon: Cloud,
    title: '99.99% Uptime',
    description: 'Always available',
    gradient: 'from-indigo-500 to-blue-500'
  },
  {
    icon: Cpu,
    title: 'AI-Powered',
    description: 'Smart automation',
    gradient: 'from-violet-500 to-purple-500'
  }
];

const benefits = [
  'Reduce operational costs by up to 60%',
  'Increase productivity by 3x',
  'Scale without technical limits',
  'Enterprise-grade security included',
  'Free migration & onboarding',
  '24/7 expert support team'
];

export function FeaturesPreview({ navigate }: FeaturesPreviewProps) {
  return (
    <section className="py-24 bg-gradient-to-br from-slate-50 to-indigo-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, rgb(79 70 229) 1px, transparent 0)`,
          backgroundSize: '50px 50px',
        }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Features Grid */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="grid grid-cols-2 gap-6">
              {highlights.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="bg-white p-6 rounded-2xl shadow-lg border border-slate-100"
                >
                  <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br ${feature.gradient} shadow-md mb-4`}>
                    <feature.icon className="text-white" size={24} />
                  </div>
                  <h4 className="text-slate-900 mb-2">{feature.title}</h4>
                  <p className="text-slate-600 text-sm">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full border border-indigo-200 mb-4">
                <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                  Why Choose Us
                </span>
              </div>
              <h2 className="text-4xl lg:text-5xl bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent mb-4">
                Built for Performance & Scale
              </h2>
              <p className="text-slate-600 text-lg">
                Everything you need to succeed, powered by cutting-edge technology trusted by industry leaders.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  className="flex items-start gap-2"
                >
                  <CheckCircle className="text-green-600 flex-shrink-0 mt-0.5" size={18} />
                  <span className="text-slate-700">{benefit}</span>
                </motion.div>
              ))}
            </div>

            <motion.button
              whileHover={{ scale: 1.05, boxShadow: '0 20px 40px -12px rgba(79, 70, 229, 0.4)' }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate('features')}
              className="px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl shadow-lg inline-flex items-center gap-2"
            >
              See All Features
              <ArrowRight size={20} />
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
