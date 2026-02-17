import { motion } from 'motion/react';
import { Play, Calendar, Video, ArrowRight } from 'lucide-react';
import { ImageWithFallback } from '../figma/ImageWithFallback';

type LiveDemoProps = {
  navigate: (page: string) => void;
};

export function LiveDemo({ navigate }: LiveDemoProps) {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Demo Video */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative group"
          >
            <div className="aspect-video rounded-3xl overflow-hidden shadow-2xl border-4 border-white relative">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1748609160056-7b95f30041f0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwYnVzaW5lc3MlMjBhbmFseXRpY3N8ZW58MXx8fHwxNzY1ODA1MzMxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Live Demo"
                className="w-full h-full object-cover"
              />
              
              {/* Play Button Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/80 to-purple-600/80 flex items-center justify-center">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-2xl"
                >
                  <Play className="text-indigo-600 ml-1" size={32} fill="currentColor" />
                </motion.button>
              </div>
            </div>

            {/* Floating Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-xl border border-slate-100"
            >
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center">
                  <Video className="text-white" size={24} />
                </div>
                <div>
                  <div className="text-2xl bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                    15 min
                  </div>
                  <div className="text-slate-600">Quick Demo</div>
                </div>
              </div>
            </motion.div>
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
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-indigo-100 to-purple-100 rounded-full border border-indigo-200 mb-4">
                <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                  See It In Action
                </span>
              </div>
              <h2 className="text-4xl lg:text-5xl bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent mb-4">
                Experience the Power Firsthand
              </h2>
              <p className="text-slate-600 text-lg">
                Watch how leading companies are transforming their operations with our solutions. See real results in minutes, not months.
              </p>
            </div>

            <div className="space-y-4">
              {[
                {
                  title: 'Live Product Demo',
                  description: 'See all features in action with real-time demonstration',
                  icon: Video
                },
                {
                  title: 'Free Consultation',
                  description: 'Discuss your specific needs with our solution experts',
                  icon: Calendar
                }
              ].map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-4 p-4 bg-gradient-to-br from-slate-50 to-indigo-50 rounded-xl border border-indigo-100"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <item.icon className="text-white" size={24} />
                  </div>
                  <div>
                    <h4 className="text-slate-900 mb-1">{item.title}</h4>
                    <p className="text-slate-600">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="flex flex-wrap gap-4">
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: '0 20px 40px -12px rgba(79, 70, 229, 0.4)' }}
                whileTap={{ scale: 0.95 }}
                onClick={() => navigate('contact')}
                className="px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl shadow-lg inline-flex items-center gap-2"
              >
                Schedule Live Demo
                <Calendar size={20} />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => navigate('contact')}
                className="px-8 py-4 bg-white border-2 border-slate-200 text-slate-700 rounded-xl hover:border-indigo-300 transition-colors inline-flex items-center gap-2"
              >
                Contact Sales
                <ArrowRight size={20} />
              </motion.button>
            </div>

            <div className="pt-6 border-t border-slate-200">
              <p className="text-slate-500 text-sm">
                ⚡ Average response time: <span className="text-indigo-600">Under 2 hours</span>
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
