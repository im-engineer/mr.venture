import { motion } from 'motion/react';
import { ShoppingCart, GraduationCap, Hospital, ArrowRight, CheckCircle } from 'lucide-react';

type ServicesPreviewProps = {
  navigate: (page: string) => void;
};

const services = [
  {
    icon: ShoppingCart,
    title: 'Ecommerce Solutions',
    description: 'AI-powered platform that scales with your business',
    gradient: 'from-blue-500 to-cyan-500',
    results: [
      '300% increase in sales',
      '40% cost reduction',
      '24/7 automated support'
    ]
  },
  {
    icon: GraduationCap,
    title: 'School Management',
    description: 'Complete digital ecosystem for modern education',
    gradient: 'from-emerald-500 to-teal-500',
    results: [
      '20+ hours saved weekly',
      '85% parent engagement',
      '90% paperless operations'
    ]
  },
  {
    icon: Hospital,
    title: 'Hospital Management',
    description: 'Transform healthcare with intelligent systems',
    gradient: 'from-purple-500 to-pink-500',
    results: [
      '50% reduced wait times',
      'HIPAA compliant',
      'Seamless integration'
    ]
  }
];

export function ServicesPreview({ navigate }: ServicesPreviewProps) {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-indigo-100 to-purple-100 rounded-full border border-indigo-200 mb-4">
            <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Industry Solutions
            </span>
          </div>
          <h2 className="text-4xl lg:text-5xl bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent mb-4">
            Proven Solutions for Your Industry
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg">
            Join thousands of successful businesses already using our solutions
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8, boxShadow: '0 20px 40px -12px rgba(0,0,0,0.15)' }}
              className="bg-gradient-to-br from-white to-slate-50 p-8 rounded-2xl border-2 border-slate-100 hover:border-indigo-200 transition-all cursor-pointer group"
              onClick={() => navigate('services')}
            >
              <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${service.gradient} shadow-lg mb-6 group-hover:scale-110 transition-transform`}>
                <service.icon className="text-white" size={32} />
              </div>

              <h3 className="text-2xl text-slate-900 mb-3">{service.title}</h3>
              <p className="text-slate-600 mb-6">{service.description}</p>

              <div className="space-y-3 mb-6">
                {service.results.map((result) => (
                  <div key={result} className="flex items-start gap-2">
                    <CheckCircle className="text-green-600 flex-shrink-0 mt-0.5" size={18} />
                    <span className="text-slate-700">{result}</span>
                  </div>
                ))}
              </div>

              <motion.div
                whileHover={{ x: 5 }}
                className={`flex items-center gap-2 text-transparent bg-gradient-to-r ${service.gradient} bg-clip-text font-medium`}
              >
                Explore Solution
                <ArrowRight size={18} />
              </motion.div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: '0 20px 40px -12px rgba(79, 70, 229, 0.4)' }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate('services')}
            className="px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl shadow-lg inline-flex items-center gap-2"
          >
            View All Solutions
            <ArrowRight size={20} />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
