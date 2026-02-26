import { motion } from 'motion/react';
import {
  Shield, Zap, Cloud, Database, Cpu, CheckCircle, Network, Layers, Sparkles
} from 'lucide-react';
import { MagnetCard } from '../components/MagnetCard';

type FeaturesPageProps = {
  navigate: (page: string, slug?: string) => void;
};

const features = [
  {
    icon: Database,
    title: 'Scalable Architecture',
    description: 'We build systems capable of handling millions of concurrent requests seamlessly, utilizing horizontal scaling, specialized microservices, and load-balanced clusters.',
    gradient: 'from-blue-500/20 to-cyan-500/20'
  },
  {
    icon: Shield,
    title: 'Secure Systems',
    description: 'Enterprise-grade data encryption, rigorous compliance standards, comprehensive role-based access control (RBAC), and automated threat detection built-in.',
    gradient: 'from-purple-500/20 to-pink-500/20'
  },
  {
    icon: Network,
    title: 'API-First Development',
    description: 'Robust REST and GraphQL APIs serve as the foundation of our platforms, enabling seamless third-party integrations, headless ecosystems, and mobile application support.',
    gradient: 'from-emerald-500/20 to-teal-500/20'
  },
  {
    icon: Cloud,
    title: 'Cloud-Ready Infrastructure',
    description: 'Deeply optimized for modern cloud deployments. We provision robust AWS ecosystems, highly available edge computing networks, and rapid Vercel serverless functions.',
    gradient: 'from-fuchsia-500/20 to-rose-500/20'
  },
  {
    icon: Zap,
    title: 'Performance Optimization',
    description: 'Blazing fast load speeds, sub-second query response times, edge caching, and minimized payload transfer guaranteed via obsessive performance tuning.',
    gradient: 'from-amber-500/20 to-orange-500/20'
  },
  {
    icon: Layers,
    title: 'Modular Code Structure',
    description: 'Maintainability is a priority. We formulate uncoupled, strongly-typed components facilitating effortless long-term growth and straightforward developer onboarding.',
    gradient: 'from-indigo-500/20 to-blue-500/20'
  }
];

export function FeaturesPage({ navigate }: FeaturesPageProps) {
  return (
    <div className="pt-20 min-h-screen bg-[#080b18]">
      {/* Hero Section */}
      <section className="py-24 relative overflow-hidden">
        {/* Centered Organic Gradient */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
          <motion.div
            animate={{
              scale: [1, 1.1, 1],
              rotate: [0, -45, 0],
            }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            className="w-[80vw] h-[60vh] max-w-[800px] max-h-[600px] bg-gradient-to-tr from-blue-600/30 via-purple-600/30 to-cyan-500/30 blur-[130px] rounded-[40%_60%_70%_30%]"
          />
        </div>

        {/* Subtle Grid Overlay */}
        <div className="absolute inset-0 z-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center space-y-8"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 glass-panel rounded-full border-cyan-500/30 shadow-[0_0_15px_rgba(34,211,238,0.15)] mb-4">
              <Cpu size={20} className="text-cyan-400" />
              <span className="text-cyan-200 font-medium tracking-wide">MR Venture Engineering</span>
            </div>
            <h1 className="text-5xl lg:text-7xl font-bold text-white tracking-tight">
              Technical <span style={{ backgroundImage: 'linear-gradient(to right, #22d3ee, #3b82f6)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', color: 'transparent' }}>Features</span>
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
              We focus heavily on creating scalable architecture, secure systems, and highly performant platforms. Quality is engineered into everything we build.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Primary Features Grid using MagnetCards */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="h-full"
              >
                <MagnetCard gradientColors={feature.gradient} className="h-full p-8 flex flex-col items-start bg-[#0a0f1c]/60 backdrop-blur-md">
                  <div className={`w-14 h-14 rounded-xl bg-dark-800 border border-white/10 flex items-center justify-center mb-6 shadow-inner pointer-events-none`}>
                    <feature.icon className="text-white" size={28} />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4 tracking-wide">
                    {feature.title}
                  </h3>
                  <p className="text-slate-400 leading-relaxed font-medium">
                    {feature.description}
                  </p>
                </MagnetCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Animated Stats Section */}
      <section className="py-24 relative overflow-hidden border-y border-white/5 bg-[#050812]/50">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_80%,transparent_100%)] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid md:grid-cols-3 gap-8 text-center max-w-4xl mx-auto">
            {[
              { value: '85+', label: 'Projects Delivered', color: 'text-cyan-400', drop: 'drop-shadow-[0_0_15px_rgba(34,211,238,0.4)]' },
              { value: '99%', label: 'Client Satisfaction', color: 'text-purple-400', drop: 'drop-shadow-[0_0_15px_rgba(168,85,247,0.4)]' },
              { value: '5+', label: 'Years Experience', color: 'text-blue-400', drop: 'drop-shadow-[0_0_15px_rgba(59,130,246,0.4)]' }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="glass-panel p-8 rounded-3xl hover-glow group transition-all duration-300"
              >
                <div className={`text-5xl md:text-6xl font-extrabold ${stat.color} mb-3 ${stat.drop} transition-all`}>
                  {stat.value}
                </div>
                <div className="text-slate-300 font-semibold tracking-wider text-sm uppercase">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-cyan-600/10 blur-[150px] rounded-full pointer-events-none"></div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-8 glass-panel border border-white/10 p-8 md:p-12 rounded-3xl hover-glow transition-all"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-white tracking-tight">
              Scale Your Business with <span style={{ backgroundImage: 'linear-gradient(to right, #22d3ee, #3b82f6)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', color: 'transparent' }}>Technology</span>
            </h2>
            <p className="text-slate-300 text-lg leading-relaxed max-w-2xl mx-auto">
              Our engineering foundation ensures your platform is secure, flawlessly performant, and ready to scale effortlessly.
            </p>
            <div className="flex justify-center">
              <motion.button
                onClick={() => navigate('contact')}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-5 bg-gradient-to-r from-cyan-600 via-blue-600 to-indigo-600 text-white font-bold rounded-xl shadow-[0_0_20px_rgba(6,182,212,0.4)] hover:shadow-[0_0_35px_rgba(6,182,212,0.6)] inline-flex items-center gap-3 transition-all hover-glow text-lg"
              >
                <Sparkles size={22} className="text-cyan-200" />
                Contact Our Team
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
