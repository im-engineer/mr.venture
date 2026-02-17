import { ArrowRight, Sparkles, Star, Zap, CheckCircle, TrendingUp } from 'lucide-react';
import { motion } from 'motion/react';
import mrventure from '@/data/mrventure.png';
type HeroProps = {
  navigate: (page: string) => void;
};

export function Hero({ navigate }: HeroProps) {
  return (
    <section id="home" className="relative pt-32 pb-20 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-indigo-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Urgency Badge */}
            {/* <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-green-100 to-emerald-100 rounded-full border border-green-200"
            >
              <div className="w-2 h-2 bg-green-600 rounded-full animate-pulse"></div>
              <span className="text-green-700">
                🔥 Limited Time: Get 3 Months Free on Annual Plans
              </span>
            </motion.div> */}

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-5xl lg:text-7xl bg-gradient-to-r from-slate-900 via-indigo-900 to-purple-900 bg-clip-text text-transparent leading-tight"
            >
              Grow Your Business
              <span className="block bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                10x Faster
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-slate-700 text-xl leading-relaxed"
            >
              Join 10,000+ businesses using our AI-powered platform to automate operations, boost revenue, and scale effortlessly.
              <span className="text-indigo-600"> See results in weeks, not years.</span>
            </motion.p>

            {/* Key Benefits */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="grid sm:grid-cols-2 gap-4"
            >
              {[
                { icon: CheckCircle, text: 'Setup in 24 hours', color: 'green' },
                { icon: TrendingUp, text: '300% ROI guaranteed', color: 'blue' },
                { icon: Zap, text: 'No technical skills needed', color: 'yellow' },
                { icon: Star, text: '24/7 expert support', color: 'purple' },
              ].map((item) => (
                <div key={item.text} className="flex items-center gap-3 bg-white p-4 rounded-xl shadow-sm border border-slate-100">
                  <item.icon className={`text-${item.color}-600`} size={20} />
                  <span className="text-slate-700">{item.text}</span>
                </div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap gap-4"
            >
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: '0 20px 40px -12px rgba(79, 70, 229, 0.4)' }}
                whileTap={{ scale: 0.95 }}
                onClick={() => navigate('contact')}
                className="px-8 py-5 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl flex items-center gap-2 shadow-lg shadow-indigo-500/30 text-lg"
              >
                Start Free Trial Now
                <ArrowRight size={22} />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => navigate('contact')}
                className="px-8 py-5 bg-white border-2 border-slate-200 text-slate-700 rounded-xl hover:border-indigo-300 transition-colors shadow-sm text-lg"
              >
                Schedule Demo
              </motion.button>
            </motion.div>

            {/* Trust Badge */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-slate-500 text-sm"
            >
              ✓ No credit card required  •  ✓ 30-day money-back guarantee  •  ✓ Cancel anytime
            </motion.div>

            {/* Social Proof */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex items-center gap-6 pt-4 cursor-pointer group"
              onClick={() => document.getElementById('testimonials')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <div className="flex -space-x-2">
                {[
                  'https://images.unsplash.com/photo-1560250097-0b93528c311a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBidXNpbmVzc21hbnxlbnwxfHx8fDE3NjU4MDUzMzJ8MA&ixlib=rb-4.1.0&q=80&w=100',
                  'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBidXNpbmVzc3dvbWFufGVufDF8fHx8MTc2NTgwNTMzMnww&ixlib=rb-4.1.0&q=80&w=100',
                  'https://images.unsplash.com/photo-1566492031773-4f4e44671857?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBtYW58ZW58MXx8fHwxNzY1ODA1MzMyfDA&ixlib=rb-4.1.0&q=80&w=100',
                  'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?fit=crop&w=100&q=80',
                  'https://images.unsplash.com/photo-1580489944761-15a19d654956?fit=crop&w=100&q=80'
                ].map((src, i) => (
                  <div key={i} className="relative w-12 h-12 rounded-full border-2 border-white overflow-hidden hover:scale-110 transition-transform z-10 hover:z-20">
                    <img src={src} alt={`Client ${i + 1}`} className="w-full h-full object-cover" />
                  </div>
                ))}
              </div>
              <div className="group-hover:opacity-80 transition-opacity">
                <div className="flex items-center gap-1 mb-1">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} className="text-yellow-400 fill-yellow-400" size={16} />
                  ))}
                  <span className="text-slate-900 ml-2">4.9/5</span>
                </div>
                <p className="text-slate-600">from 2,500+ verified reviews</p>
              </div>
            </motion.div>
          </div>

          {/* Right Image */}
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
