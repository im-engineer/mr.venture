import { motion } from 'motion/react';
import { MagnetCard } from '../MagnetCard';
import { Target, Users, Zap, Globe2 } from 'lucide-react';

export function AboutMRVenture() {
    return (
        <section id="about" className="py-24 relative overflow-hidden bg-[#050812]/50 border-y border-white/5">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-20"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 glass-panel rounded-full border-purple-500/30 shadow-[0_0_15px_rgba(168,85,247,0.15)] bg-purple-900/10 mb-6 font-medium text-sm text-purple-200">
                        <Users size={16} className="text-purple-400" /> Who We Are
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
                        Empowering the <span style={{ backgroundImage: 'linear-gradient(to right, #a855f7, #6366f1)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', color: 'transparent' }}>Indian Tech Ecosystem</span>
                    </h2>
                    <p className="text-slate-200 text-lg max-w-3xl mx-auto leading-relaxed">
                        MR Venture is a premier web and app development agency dedicated to building high-performance, scalable SaaS platforms, custom CRM systems, and enterprise tools for ambitious startups and businesses.
                    </p>
                </motion.div>

                {/* Founders Grid */}
                <div className="grid md:grid-cols-2 gap-12 lg:gap-16 mb-32 pt-8">
                    <MagnetCard gradientColors="from-blue-500/20 via-cyan-500/20 to-purple-500/20" className="p-8">
                        <div className="flex flex-col md:flex-row gap-6 items-center md:items-start text-center md:text-left">
                            <div className="relative w-24 h-24 rounded-full border-2 border-blue-500/30 shadow-[0_0_20px_rgba(59,130,246,0.3)] shrink-0 bg-[#0a0f1c] flex items-center justify-center overflow-hidden group">
                                <div className="absolute inset-0 bg-blue-500/20 rounded-full blur-md scale-110 group-hover:bg-blue-500/30 transition-colors"></div>
                                <Users className="text-blue-400 relative z-10" size={50} />
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold mb-1" style={{ backgroundImage: 'linear-gradient(to right, #60a5fa, #22d3ee)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', color: 'transparent' }}>Abday Mustafa</h3>
                                <p className="text-blue-400 font-medium text-sm mb-4 uppercase tracking-wider">Founder & CEO</p>
                                <p className="text-slate-200 leading-relaxed text-sm">
                                    Visionary leader driving MR Venture's mission to digitize the Indian startup landscape. Focused on strategic growth, client relationships, and scaling enterprise operations across the globe.
                                </p>
                            </div>
                        </div>
                    </MagnetCard>

                    <MagnetCard gradientColors="from-fuchsia-500/20 via-purple-500/20 to-indigo-500/20" className="p-8">
                        <div className="flex flex-col md:flex-row gap-6 items-center md:items-start text-center md:text-left">
                            <div className="relative w-24 h-24 rounded-full border-2 border-purple-500/30 shadow-[0_0_20px_rgba(168,85,247,0.3)] shrink-0 bg-[#0a0f1c] flex items-center justify-center overflow-hidden group">
                                <div className="absolute inset-0 bg-purple-500/20 rounded-full blur-md scale-110 group-hover:bg-purple-500/30 transition-colors"></div>
                                <Zap className="text-purple-400 relative z-10" size={50} />
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold mb-1" style={{ backgroundImage: 'linear-gradient(to right, #c084fc, #818cf8)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', color: 'transparent' }}>Siddhant Singh</h3>
                                <p className="text-purple-400 font-medium text-sm mb-4 uppercase tracking-wider">Co-Founder & Lead Developer</p>
                                <p className="text-slate-200 leading-relaxed text-sm">
                                    The technical architect behind MR Venture's most complex projects. Specializes in scalable MERN stack architectures, Next.js optimization, and building flawless UI/UX experiences.
                                </p>
                            </div>
                        </div>
                    </MagnetCard>
                </div>

                {/* Mission Pillars */}
                <div className="grid md:grid-cols-3 gap-8 pt-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="glass-panel p-6 rounded-2xl border border-white/5 bg-[#0a0f1c]/40 hover-glow group"
                    >
                        <Target className="text-cyan-400 mb-4 group-hover:scale-110 transition-transform" size={28} />
                        <h4 className="text-lg font-bold text-white mb-2">Our Mission</h4>
                        <p className="text-slate-300 text-sm leading-relaxed">To engineer world-class, robust digital infrastructure that allows businesses to scale without technical limits.</p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="glass-panel p-6 rounded-2xl border border-white/5 bg-[#0a0f1c]/40 hover-glow group"
                    >
                        <Globe2 className="text-blue-400 mb-4 group-hover:scale-110 transition-transform" size={28} />
                        <h4 className="text-lg font-bold text-white mb-2">Global Vision, Local Roots</h4>
                        <p className="text-slate-300 text-sm leading-relaxed">Based in India, delivering enterprise-grade software solutions to both local startups and international clients.</p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                        className="glass-panel p-6 rounded-2xl border border-white/5 bg-[#0a0f1c]/40 hover-glow group"
                    >
                        <Zap className="text-purple-400 mb-4 group-hover:scale-110 transition-transform" size={28} />
                        <h4 className="text-lg font-bold text-white mb-2">Cutting-Edge Tech</h4>
                        <p className="text-slate-300 text-sm leading-relaxed">We leverage modern stacks like Next.js, React, Node, and AWS to build fast, secure, and future-proof platforms.</p>
                    </motion.div>
                </div>

            </div>
        </section>
    );
}
