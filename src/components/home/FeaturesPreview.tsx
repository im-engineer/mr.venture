import { motion } from 'motion/react';
import { Shield, Zap, Cloud, Cpu, ArrowRight, CheckCircle, Database } from 'lucide-react';
import { MagnetCard } from '../MagnetCard';

type FeaturesPreviewProps = {
  navigate: (page: string) => void;
};

const highlights = [
  {
    icon: Database,
    title: 'Scalable Architecture',
    description: 'Built to handle millions of requests seamlessly.',
    gradient: 'from-blue-500/20 to-cyan-500/20'
  },
  {
    icon: Shield,
    title: 'Secure Systems',
    description: 'Enterprise-grade data encryption and compliance.',
    gradient: 'from-purple-500/20 to-pink-500/20'
  },
  {
    icon: Cloud,
    title: 'Cloud-Ready',
    description: 'Optimized for AWS, Vercel, and distributed networks.',
    gradient: 'from-emerald-500/20 to-teal-500/20'
  },
  {
    icon: Cpu,
    title: 'High Performance',
    description: 'Sub-second load times and optimized queries.',
    gradient: 'from-fuchsia-500/20 to-rose-500/20'
  }
];

const benefits = [
  'Reduce infrastructure costs significantly',
  'Scale automatically based on traffic',
  'Zero-downtime deployments',
  'Robust API-first methodology',
  'Ongoing maintenance & support',
  'Modular codebase structure'
];

export function FeaturesPreview({ navigate }: FeaturesPreviewProps) {
  return (
    <section className="py-24 bg-[#050812]/70 border-y border-white/5 relative overflow-hidden">
      {/* Subtle Grid Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left - Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 glass-panel rounded-full border-purple-400/30 mb-6 bg-purple-900/10">
                <span className="text-purple-300 font-medium text-sm uppercase tracking-wide">
                  Technical Foundation
                </span>
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6 tracking-tight">
                Built for <span style={{ backgroundImage: 'linear-gradient(to right, #c084fc, #f472b6)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', color: 'transparent' }}>Performance & Scale</span>
              </h2>
              <p className="text-slate-300 text-lg leading-relaxed">
                We develop future-proof software using modular code structures, API-first methodologies, and cloud-native infrastructure that grows with your startup.
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
                  className="flex items-start gap-3"
                >
                  <CheckCircle className="text-purple-400 flex-shrink-0 mt-0.5" size={18} />
                  <span className="text-slate-200 text-sm">{benefit}</span>
                </motion.div>
              ))}
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate('features')}
              className="px-8 py-4 bg-gradient-to-r from-purple-600 via-pink-600 to-rose-600 text-white rounded-xl shadow-[0_0_20px_rgba(219,39,119,0.3)] hover:shadow-[0_0_30px_rgba(219,39,119,0.5)] inline-flex items-center gap-2 hover-glow font-semibold mt-4 transition-all duration-300"
            >
              Explore Architecture
              <ArrowRight size={20} />
            </motion.button>
          </motion.div>

          {/* Right - Features Grid using MagnetCards */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-2 gap-4 lg:gap-6 perspective-1000"
          >
            {highlights.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <MagnetCard gradientColors={feature.gradient} className="h-full p-6 text-center lg:text-left flex flex-col items-center lg:items-start bg-[#0a0f1c]/40 backdrop-blur-sm">
                  <div className="w-12 h-12 rounded-xl bg-dark-800 border border-white/10 flex items-center justify-center mb-4 shadow-inner pointer-events-none">
                    <feature.icon className="text-white" size={24} />
                  </div>
                  <h4 className="text-white font-bold mb-2 text-lg">{feature.title}</h4>
                  <p className="text-slate-400 text-sm leading-relaxed">{feature.description}</p>
                </MagnetCard>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
}
