import { ArrowRight, Mail, Phone, CheckCircle, Code, ShieldCheck, Users, Briefcase } from 'lucide-react';
import { motion } from 'motion/react';


export function CTA() {
  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-[#050812]/70 border-y border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 glass-panel rounded-full border-blue-500/30 shadow-[0_0_15px_rgba(59,130,246,0.15)] mb-6 bg-blue-900/10 mt-6"
          >
            <Briefcase size={16} className="text-blue-400" />
            <span className="text-blue-200 text-sm font-medium tracking-wide uppercase">Enterprise Engineering</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl lg:text-6xl font-bold text-white mb-6 leading-tight"
          >
            Ready to Scale Your <br className="hidden md:block" /><span className="text-gradient">Digital Infrastructure?</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-slate-300 max-w-3xl mx-auto mb-8 leading-relaxed"
          >
            Partner with our elite engineering team to build robust, secure, and custom software solutions designed specifically for high-growth enterprises and global brands.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {/* Value Props */}
          {[
            {
              icon: Code,
              title: 'Custom Architecture',
              description: 'Tailored technical blueprints and scalable database design to resolve complex business bottlenecks.',
              color: 'blue'
            },
            {
              icon: ShieldCheck,
              title: 'Enterprise Security',
              description: 'Bank-grade encryption, secure data workflows, and rigorous code reviews to protect critical assets.',
              color: 'purple'
            },
            {
              icon: Users,
              title: 'Dedicated Engineering',
              description: 'A committed team of senior developers and architects acting as an extension of your own tech operations.',
              color: 'indigo'
            }
          ].map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="glass-panel p-8 rounded-2xl text-center hover-glow transition-all duration-300 group"
            >
              <div className={`inline-flex items-center justify-center w-14 h-14 bg-${item.color}-500/10 rounded-xl mb-6 border-${item.color}-500/20 group-hover:scale-110 transition-transform duration-300`}>
                <item.icon className={`text-${item.color}-400`} size={28} />
              </div>
              <h3 className="text-xl font-bold text-white mb-3 tracking-wide">{item.title}</h3>
              <p className="text-slate-300 leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Main CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center space-y-8"
        >
          <div className="flex flex-wrap justify-center gap-6">
            <motion.a
              href="mailto:mrventure127@gmail.com"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 glass-panel bg-white/5 hover:bg-white/10 text-white rounded-xl flex items-center gap-4 hover: transition-all hover-glow"
            >
              <Mail className="text-blue-400" size={24} />
              <div className="text-left">
                <div className="text-xs text-slate-400 uppercase tracking-wider font-semibold mb-1">Email us at</div>
                <div className="font-medium tracking-wide">mrventure127@gmail.com</div>
              </div>
            </motion.a>

            <motion.a
              href="tel:+919369395446"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 glass-panel bg-white/5 hover:bg-white/10 text-white rounded-xl flex items-center gap-4 hover: transition-all hover-glow"
            >
              <Phone className="text-purple-400" size={24} />
              <div className="text-left">
                <div className="text-xs text-slate-400 uppercase tracking-wider font-semibold mb-1">Call us at</div>
                <div className="font-medium tracking-wide">+91 (936) 939-5446</div>
              </div>
            </motion.a>
          </div>

          <p className="text-slate-300 text-lg">
            Or click below to schedule your technical consultation
          </p>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-10 py-5 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl shadow-[0_0_30px_rgba(59,130,246,0.5)] hover:shadow-[0_0_40px_rgba(59,130,246,0.7)] hover:from-blue-500 hover:to-purple-500 transition-all text-xl font-bold inline-flex items-center gap-3 group hover-glow"
          >
            Discuss Your Project Requirements
            <ArrowRight className="group-hover:translate-x-1 transition-transform" size={24} />
          </motion.button>

          <div className="flex flex-wrap justify-center gap-8 pt-8 text-slate-400 font-medium">
            <div className="flex items-center gap-2">
              <CheckCircle className="text-blue-400" size={18} />
              <span>NDA Protected</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="text-purple-400" size={18} />
              <span>Technical Feasibility Audit</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="text-indigo-400" size={18} />
              <span>Transparent Roadmaps</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
