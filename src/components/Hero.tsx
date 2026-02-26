import { ArrowRight, Award, Code2, Rocket, Globe2, TrendingUp } from 'lucide-react';
import { motion } from 'motion/react';
import mrventure from '@/data/mrventure.png';
import { SatelliteBackground } from './SatelliteBackground';

type HeroProps = {
  navigate: (page: string) => void;
};

export function Hero({ navigate }: HeroProps) {
  return (
    <section id="home" className="relative min-h-[90vh] flex items-center pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden bg-transparent">
      {/* Space & Satellite Background */}
      {/* <SatelliteBackground /> */}

      {/* Centered Organic Glow specifically for Hero Text readability */}
      <div className="absolute inset-0 -z-10 flex items-center justify-center pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.4, 0.6, 0.4]
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="w-[70vw] h-[50vh] max-w-[800px] max-h-[500px] bg-gradient-to-b from-blue-900/40 to-transparent blur-[120px] rounded-full"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8 lg:pr-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 glass-panel rounded-full border-cyan-500/30 shadow-[0_0_15px_rgba(34,211,238,0.15)] bg-[#0a0f1c]/50 backdrop-blur-md"
            >
              <Award className="text-cyan-400" size={16} />
              <span className="text-cyan-100 text-sm font-medium tracking-wide">
                Premium Tech Partner for Indian Startups
              </span>
            </motion.div>

            <div className="relative">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 0.2 }}
                className="absolute -top-12 -right-4 hidden lg:block pointer-events-none mix-blend-screen opacity-50"
              >
                <Globe2 size={120} className="text-blue-500/40 blur-[2px]" strokeWidth={1} />
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="relative z-10 text-5xl lg:text-7xl bg-gradient-to-r from-slate-900 via-white-400 to-purple-900 bg-clip-text text-transparent leading-tight"
              >
                Building Digital <br />
                <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                  Infrastructure
                </span><br />
                for the Future.
              </motion.h1>

              {/* <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.2, delay: 0.3 }}
                className="absolute -bottom-8 -left-4 sm:-bottom-12 sm:-left-8 pointer-events-none z-0 mix-blend-screen"
              >
                <TrendingUp className="w-40 h-40 sm:w-56 sm:h-56 text-blue-500/20 blur-[12px]" strokeWidth={1} />
              </motion.div> */}
            </div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-slate-300 text-xl leading-relaxed max-w-2xl font-light"
            >
              We engineer scalable web applications, custom CRM systems, and enterprise SaaS platforms designed specifically for high-growth Indian startups and global brands.
            </motion.p>

            {/* Key Service Highlights */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap gap-3 pt-2"
            >
              {[
                { icon: Code2, text: 'Custom SaaS', border: 'border-blue-500/30' },
                { icon: Rocket, text: 'Enterprise CRM', border: 'border-purple-500/30' },
                { icon: Globe2, text: 'Scalable Web Apps', border: 'border-cyan-500/30' },
              ].map((item, idx) => (
                <div key={idx} className={`flex items-center gap-2 glass-panel px-4 py-2 rounded-lg border ${item.border} bg-white/5 backdrop-blur-sm`}>
                  <item.icon size={16} className="text-slate-300" />
                  <span className="text-slate-200 text-sm">{item.text}</span>
                </div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-row flex-wrap gap-4 pt-4 w-full items-center"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => navigate('contact')}
                className="w-auto px-6 py-4 md:px-8 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white rounded-xl flex items-center justify-center gap-2 shadow-[0_0_25px_rgba(79,70,229,0.5)] hover:shadow-[0_0_40px_rgba(79,70,229,0.7)] transition-all duration-300 font-semibold text-base md:text-lg hover-glow group relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out"></div>
                <span className="relative z-10">Start Your Project</span>
                <ArrowRight size={22} className="relative z-10 group-hover:translate-x-1 transition-transform" />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => navigate('contact')}
                className="w-auto px-6 py-4 md:px-8 glass-panel border border-white/10 rounded-xl hover:bg-white/10 transition-colors shadow-lg text-white font-medium text-base md:text-lg text-center hover:border-cyan-500/50 hover:shadow-[0_0_20px_rgba(34,211,238,0.2)]"
              >
                Book Free Consultation
              </motion.button>
            </motion.div>
          </div>

          {/* Right Image / Hero Graphic */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl shadow-indigo-500/20">
              <img src={mrventure} alt="Modern technology workspace" className="w-full h-full object-cover" />
            </div>

            {/* Floating Success Metric Cards */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl border border-slate-100"
            >
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center">
                  <TrendingUp className="text-white" size={20} />
                </div>
                <div>
                  <div className="text-2xl bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">300%</div>
                </div>
              </div>
              <div className="text-slate-600">Revenue Growth</div>
            </motion.div>

            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut', delay: 1.5 }}
              className="absolute -top-6 -right-6 bg-gradient-to-br from-indigo-600 to-purple-600 p-6 rounded-2xl shadow-xl"
            >
              <div className="text-3xl text-white mb-1">500+</div>
              <div className="text-indigo-100">New Clients Monthly</div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

