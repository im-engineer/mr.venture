import { ShoppingCart, GraduationCap, Hospital, ArrowRight, TrendingUp, Users, BarChart, Clock, Shield, Smartphone } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { motion } from 'motion/react';

type ServicesProps = {
  navigate: (page: string, slug?: string) => void;
};

const services = [
  {
    title: 'Ecommerce Solutions',
    description: 'Build and scale your online empire with our AI-powered ecommerce platform. Complete with smart inventory management, seamless payment processing, advanced analytics, and omnichannel selling capabilities.',
    icon: ShoppingCart,
    image: 'https://images.unsplash.com/photo-1533779541233-cad641399dd3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvbmxpbmUlMjBzaG9wcGluZyUyMGNhcnR8ZW58MXx8fHwxNzY1ODA1MzMxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    gradient: 'from-blue-500 to-cyan-500',
    features: [
      { icon: TrendingUp, text: 'Smart Analytics' },
      { icon: Smartphone, text: 'Mobile First' },
      { icon: Shield, text: 'Secure Payments' },
      { icon: BarChart, text: 'Sales Tracking' }
    ]
  },
  {
    title: 'School Management System',
    description: 'Revolutionary educational platform that streamlines every aspect of school operations. Manage students, faculty, attendance, grades, and parent communication with powerful automation and insights.',
    icon: GraduationCap,
    image: 'https://images.unsplash.com/photo-1758270704534-fd9715bffc0e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHVkZW50cyUyMGRpZ2l0YWwlMjBsZWFybmluZ3xlbnwxfHx8fDE3NjU4MDUzMzJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    gradient: 'from-emerald-500 to-teal-500',
    features: [
      { icon: Users, text: 'Student Portal' },
      { icon: Clock, text: 'Attendance AI' },
      { icon: BarChart, text: 'Grade Analytics' },
      { icon: Shield, text: 'Data Security' }
    ]
  },
  {
    title: 'Hospital Management System',
    description: 'Transform healthcare delivery with our comprehensive hospital management solution. From intelligent patient records to automated scheduling, billing integration, and complete pharmacy management.',
    icon: Hospital,
    image: 'https://images.unsplash.com/photo-1764885517847-79d62138cc58?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBob3NwaXRhbCUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNzY1ODA1MzMyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    gradient: 'from-purple-500 to-pink-500',
    features: [
      { icon: Users, text: 'Patient Records' },
      { icon: Clock, text: 'Auto Scheduling' },
      { icon: TrendingUp, text: 'Billing System' },
      { icon: Shield, text: 'HIPAA Compliant' }
    ]
  }
];

export function Services({ navigate }: ServicesProps) {
  return (
    <section id="services" className="py-24 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-indigo-100 to-purple-100 rounded-full border border-indigo-200 mb-4">
            <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Our Solutions
            </span>
          </div>
          <h2 className="text-4xl lg:text-5xl bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent mb-4">
            Powerful Solutions for Every Industry
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg">
            Enterprise-grade software solutions tailored to your industry's unique needs with cutting-edge technology
          </p>
        </motion.div>

        <div className="space-y-24">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className={`grid lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? 'lg:grid-flow-dense' : ''
              }`}
            >
              {/* Image */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className={index % 2 === 1 ? 'lg:col-start-2' : ''}
              >
                <div className="relative group">
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} rounded-3xl blur-2xl opacity-20 group-hover:opacity-30 transition-opacity`}></div>
                  <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
                    <ImageWithFallback
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  </div>
                </div>
              </motion.div>

              {/* Content */}
              <div className="space-y-6">
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${service.gradient} shadow-lg shadow-${service.gradient.split(' ')[1]}/30`}
                >
                  <service.icon className="text-white" size={32} />
                </motion.div>

                <h3 className="text-3xl bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">
                  {service.title}
                </h3>

                <p className="text-slate-600 text-lg leading-relaxed">
                  {service.description}
                </p>

                <div className="grid sm:grid-cols-2 gap-4 pt-2">
                  {service.features.map((feature, idx) => (
                    <motion.div
                      key={feature.text}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: idx * 0.1 }}
                      whileHover={{ x: 5 }}
                      className="flex items-center gap-3 bg-white p-3 rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow"
                    >
                      <div className={`w-10 h-10 bg-gradient-to-br ${service.gradient} rounded-lg flex items-center justify-center`}>
                        <feature.icon className="text-white" size={18} />
                      </div>
                      <span className="text-slate-700">{feature.text}</span>
                    </motion.div>
                  ))}
                </div>

                <motion.button
                  whileHover={{ x: 5 }}
                  onClick={() => navigate('service-detail', service.title.toLowerCase().replace(/ /g, '-').replace('system', 'management'))}
                  className={`flex items-center gap-2 text-transparent bg-gradient-to-r ${service.gradient} bg-clip-text group mt-4`}
                >
                  Learn More
                  <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}