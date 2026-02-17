import { ArrowRight, Mail, Phone, CheckCircle, Clock, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';


export function CTA() {
  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full mix-blend-overlay filter blur-3xl animate-blob"></div>
          <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full mix-blend-overlay filter blur-3xl animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-white rounded-full mix-blend-overlay filter blur-3xl animate-blob animation-delay-4000"></div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full border border-white/30 mb-6"
          >
            <Sparkles size={20} className="text-yellow-300" />
            <span className="text-white">Limited Time Offer</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl lg:text-6xl text-white mb-6"
          >
            Ready to Transform Your Business?
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-indigo-100 max-w-3xl mx-auto mb-8"
          >
            Join 10,000+ successful businesses. Start your free 30-day trial today and get 3 months free on annual plans.
          </motion.p>

          {/* Urgency Timer */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-6 py-3 bg-red-500/20 backdrop-blur-sm rounded-full border border-red-300/30 mb-8"
          >
            <Clock className="text-red-200" size={20} />
            <span className="text-white">⚡ Special offer ends in 48 hours</span>
          </motion.div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {/* Value Props */}
          {[
            {
              icon: CheckCircle,
              title: 'Start in 24 Hours',
              description: 'Our team will have you up and running in less than a day'
            },
            {
              icon: Sparkles,
              title: 'No Risk Trial',
              description: '30-day money-back guarantee. Cancel anytime, no questions asked'
            },
            {
              icon: ArrowRight,
              title: 'White Glove Service',
              description: 'Dedicated account manager and priority support included'
            }
          ].map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white/10 backdrop-blur-lg p-8 rounded-2xl border border-white/20 text-center"
            >
              <div className="inline-flex items-center justify-center w-14 h-14 bg-white/20 rounded-xl mb-4">
                <item.icon className="text-white" size={28} />
              </div>
              <h3 className="text-xl text-white mb-2">{item.title}</h3>
              <p className="text-indigo-100">{item.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Main CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center space-y-6"
        >
          <div className="flex flex-wrap justify-center gap-4">
            <motion.a
              href="mailto:contact@mrventure.io"
              whileHover={{ scale: 1.05, boxShadow: '0 20px 40px -12px rgba(0,0,0,0.3)' }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-5 bg-white text-indigo-600 rounded-xl flex items-center gap-3 shadow-xl text-lg"
            >
              <Mail size={24} />
              <div className="text-left">
                <div className="text-sm text-slate-600">Email us at</div>
                <div>contact@mrventure.io</div>
              </div>
            </motion.a>

            <motion.a
              href="tel:+15551234567"
              whileHover={{ scale: 1.05, boxShadow: '0 20px 40px -12px rgba(0,0,0,0.3)' }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-5 bg-white text-indigo-600 rounded-xl flex items-center gap-3 shadow-xl text-lg"
            >
              <Phone size={24} />
              <div className="text-left">
                <div className="text-sm text-slate-600">Call us at</div>
                <div>+1 (555) 123-4567</div>
              </div>
            </motion.a>
          </div>

          <p className="text-indigo-100 text-lg">
            Or click below to schedule your free consultation
          </p>

          <motion.button
            whileHover={{ scale: 1.05, boxShadow: '0 20px 40px -12px rgba(0,0,0,0.5)' }}
            whileTap={{ scale: 0.95 }}
            className="px-12 py-5 bg-gradient-to-r from-yellow-400 to-orange-500 text-slate-900 rounded-xl shadow-2xl text-xl inline-flex items-center gap-3"
          >
            <CheckCircle size={24} />
            Start Your Free Trial Now
            <ArrowRight size={24} />
          </motion.button>

          <div className="flex flex-wrap justify-center gap-8 pt-8 text-white/90">
            <div className="flex items-center gap-2">
              <CheckCircle size={18} />
              <span>No credit card required</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle size={18} />
              <span>Setup in 24 hours</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle size={18} />
              <span>Cancel anytime</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
