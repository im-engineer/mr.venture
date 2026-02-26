import { motion } from 'motion/react';
import { Layers, Server, Database, Cloud, Zap, ArrowRight, ShieldCheck } from 'lucide-react';
import { MagnetCard } from '../components/MagnetCard';

type TechnologyPageProps = {
  navigate: (page: string) => void;
};

const techCategories = [
  {
    title: 'Frontend',
    icon: Layers,
    color: 'text-cyan-400',
    border: 'border-cyan-500/30',
    bg: 'bg-cyan-900/10',
    techs: [
      { name: 'React', level: '95', desc: 'Component Architecture' },
      { name: 'Next.js', level: '90', desc: 'SSR & Routing' },
      { name: 'Tailwind CSS', level: '95', desc: 'Utility Design' }
    ]
  },
  {
    title: 'Backend',
    icon: Server,
    color: 'text-purple-400',
    border: 'border-purple-500/30',
    bg: 'bg-purple-900/10',
    techs: [
      { name: 'Node.js', level: '92', desc: 'Runtime Environment' },
      { name: 'Express', level: '90', desc: 'API Framework' },
      { name: 'GraphQL', level: '85', desc: 'Query Language' }
    ]
  },
  {
    title: 'Database',
    icon: Database,
    color: 'text-emerald-400',
    border: 'border-emerald-500/30',
    bg: 'bg-emerald-900/10',
    techs: [
      { name: 'PostgreSQL', level: '95', desc: 'Relational Data' },
      { name: 'MongoDB', level: '90', desc: 'NoSQL Documents' },
      { name: 'Redis', level: '85', desc: 'In-Memory Cache' }
    ]
  },
  {
    title: 'Cloud & DevOps',
    icon: Cloud,
    color: 'text-blue-400',
    border: 'border-blue-500/30',
    bg: 'bg-blue-900/10',
    techs: [
      { name: 'AWS', level: '90', desc: 'Cloud Infrastructure' },
      { name: 'Vercel', level: '95', desc: 'Edge Deployment' },
      { name: 'Docker', level: '88', desc: 'Containerization' }
    ]
  }
];

export function TechnologyPage({ navigate }: TechnologyPageProps) {
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
            className="w-[80vw] h-[60vh] max-w-[800px] max-h-[600px] bg-gradient-to-tr from-cyan-600/30 via-blue-600/30 to-purple-500/30 blur-[130px] rounded-[40%_60%_70%_30%]"
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
            <div className="inline-flex items-center gap-2 px-4 py-2 glass-panel rounded-full border-blue-500/30 shadow-[0_0_15px_rgba(59,130,246,0.15)] mb-4 bg-blue-900/10">
              <Zap size={20} className="text-blue-400" />
              <span className="text-blue-200 font-medium tracking-wide uppercase text-sm">Tech Stack</span>
            </div>
            <h1 className="text-5xl lg:text-7xl font-bold text-white tracking-tight">
              Modern Tech Stack for <br />
              <span style={{ backgroundImage: 'linear-gradient(to right, #60a5fa, #22d3ee)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', color: 'transparent' }}>Maximum Scalability</span>
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
              We leverage an opinionated, high-performance technology stack to build blazing-fast enterprise applications and seamless user experiences.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Tech Badges Grid using MagnetCards */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid md:grid-cols-2 gap-8">
            {techCategories.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <MagnetCard gradientColors={`from-${category.color.split('-')[1]}-500/20 to-transparent`} className="p-8 h-full bg-[#0a0f1c]/60 backdrop-blur-md">
                  <div className="flex items-center gap-4 mb-8">
                    <div className={`w-14 h-14 rounded-xl border ${category.border} ${category.bg} flex items-center justify-center`}>
                      <category.icon className={category.color} size={28} />
                    </div>
                    <h2 className="text-2xl font-bold text-white tracking-tight">{category.title}</h2>
                  </div>

                  <div className="space-y-4">
                    {category.techs.map((tech) => (
                      <div key={tech.name} className="glass-panel p-4 rounded-xl border border-white/5 flex items-center justify-between group hover:border-white/10 transition-colors">
                        <div>
                          <div className="text-slate-100 font-bold text-lg mb-1 group-hover:text-white transition-colors">{tech.name}</div>
                          <div className="text-slate-400 text-sm font-medium">{tech.desc}</div>
                        </div>
                        <div className={`w-12 h-12 rounded-full border ${category.border} flex items-center justify-center shrink-0`}>
                          <span className={`text-sm font-bold ${category.color}`}>{tech.level}%</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </MagnetCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section >

      {/* Why We Choose Modern Stack Section */}
      < section className="py-24 relative overflow-hidden bg-[#050812]/50 border-y border-white/5" >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 tracking-tight">Why We Choose <span style={{ backgroundImage: 'linear-gradient(to right, #60a5fa, #22d3ee)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', color: 'transparent' }}>This Stack</span></h2>
            <p className="text-slate-300 text-lg max-w-2xl mx-auto">Our technology choices are entirely deliberate, prioritizing three core pillars required for enterprise success.</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <motion.div
              whileHover={{ y: -5 }}
              className="glass-panel p-8 rounded-2xl border border-white/5 bg-[#0a0f1c]/40 hover-glow transition-all"
            >
              <Zap className="text-yellow-400 mb-6" size={32} />
              <h3 className="text-xl font-bold text-white mb-3">Extreme Performance</h3>
              <p className="text-slate-400 text-sm leading-relaxed">By combining Next.js SSR with edge networks, we deliver payload sizes and paint times that keep users engaged and dramatically improve SEO.</p>
            </motion.div>

            <motion.div
              whileHover={{ y: -5 }}
              className="glass-panel p-8 rounded-2xl border border-white/5 bg-[#0a0f1c]/40 hover-glow transition-all"
            >
              <Layers className="text-blue-400 mb-6" size={32} />
              <h3 className="text-xl font-bold text-white mb-3">Endless Scalability</h3>
              <p className="text-slate-400 text-sm leading-relaxed">Stateless microservices, robust Node clusters, and managed AWS infrastructure ensure your platform handles 10 users just as well as 10 million.</p>
            </motion.div>

            <motion.div
              whileHover={{ y: -5 }}
              className="glass-panel p-8 rounded-2xl border border-white/5 bg-[#0a0f1c]/40 hover-glow transition-all"
            >
              <ShieldCheck className="text-purple-400 mb-6" size={32} />
              <h3 className="text-xl font-bold text-white mb-3">Long-Term Maintainability</h3>
              <p className="text-slate-400 text-sm leading-relaxed">TypeScript enforces strict typings, dropping bug rates dramatically. Clean modular code makes long-term iterative development significantly cheaper.</p>
            </motion.div>
          </div>
        </div>
      </section >

      {/* Final CTA Section */}
      < section className="py-24 relative overflow-hidden" >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-blue-600/20 blur-[150px] rounded-full pointer-events-none"></div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-8 glass-panel border border-white/10 p-8 md:p-12 rounded-3xl hover-glow transition-all"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-white tracking-tight">
              Ready to Upgrade Your <span style={{ backgroundImage: 'linear-gradient(to right, #60a5fa, #c084fc)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', color: 'transparent' }}>Architecture?</span>
            </h2>
            <p className="text-slate-300 text-lg leading-relaxed max-w-2xl mx-auto">
              Schedule a technical consultation to discuss how our stack can power your next major milestone.
            </p>
            <div className="flex justify-center">
              <motion.button
                onClick={() => navigate('contact')}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-5 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white font-bold rounded-xl shadow-[0_0_25px_rgba(79,70,229,0.4)] hover:shadow-[0_0_40px_rgba(79,70,229,0.6)] inline-flex items-center gap-3 transition-all hover-glow text-lg"
              >
                Discuss Technical Requirements
                <ArrowRight size={22} className="group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section >
    </div >
  );
}
