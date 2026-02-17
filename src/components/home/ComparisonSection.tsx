import { motion } from 'motion/react';
import { X, Check, ArrowRight } from 'lucide-react';

type ComparisonSectionProps = {
  navigate: (page: string) => void;
};

const comparisons = [
  {
    feature: 'Implementation Time',
    others: '6-12 months',
    us: '2-4 weeks'
  },
  {
    feature: 'Setup Cost',
    others: '$50k - $200k',
    us: 'From $99/month'
  },
  {
    feature: 'Technical Support',
    others: 'Business hours only',
    us: '24/7 Expert Support'
  },
  {
    feature: 'Updates & Upgrades',
    others: 'Extra fees',
    us: 'Free & Automatic'
  },
  {
    feature: 'Data Migration',
    others: 'Complex & costly',
    us: 'Free & Seamless'
  }
];

export function ComparisonSection({ navigate }: ComparisonSectionProps) {
  return (
    <section className="py-24 bg-gradient-to-br from-slate-900 to-indigo-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-purple-500 rounded-full blur-3xl animate-blob"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-pink-500 rounded-full blur-3xl animate-blob animation-delay-2000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl mb-4">Why Businesses Choose Us</h2>
          <p className="text-indigo-200 text-lg max-w-2xl mx-auto">
            See how we compare to traditional enterprise software providers
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto bg-white/10 backdrop-blur-lg rounded-3xl overflow-hidden border border-white/20"
        >
          {/* Header */}
          <div className="grid grid-cols-3 gap-4 p-6 border-b border-white/20">
            <div className="text-white/60">Feature</div>
            <div className="text-center text-white/60">Traditional Solutions</div>
            <div className="text-center">
              <span className="px-4 py-2 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full">
                mrventure
              </span>
            </div>
          </div>

          {/* Rows */}
          {comparisons.map((item, index) => (
            <motion.div
              key={item.feature}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="grid grid-cols-3 gap-4 p-6 border-b border-white/10 last:border-0 hover:bg-white/5 transition-colors"
            >
              <div className="flex items-center">{item.feature}</div>
              <div className="flex items-center justify-center gap-2 text-red-400">
                <X size={18} />
                <span className="text-white/60">{item.others}</span>
              </div>
              <div className="flex items-center justify-center gap-2 text-green-400">
                <Check size={18} />
                <span className="text-white">{item.us}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: '0 20px 40px -12px rgba(255,255,255,0.3)' }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate('contact')}
            className="px-8 py-4 bg-white text-indigo-600 rounded-xl shadow-xl inline-flex items-center gap-2"
          >
            Start Free Trial Today
            <ArrowRight size={20} />
          </motion.button>
          <p className="text-indigo-200 mt-4">No credit card required • Free 30-day trial</p>
        </motion.div>
      </div>
    </section>
  );
}
