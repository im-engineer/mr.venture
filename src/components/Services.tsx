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
    <section id="services" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 glass-panel rounded-full border-blue-500/30 shadow-[0_0_15px_rgba(59,130,246,0.15)] mb-6">
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent font-medium tracking-wide">
              Our Solutions
            </span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
            Powerful Solutions for{' '}
            <span className="text-gradient drop-shadow-sm">Every Industry</span>
          </h2>
          <p className="text-slate-300 max-w-2xl mx-auto text-lg leading-relaxed">
            Enterprise-grade software solutions tailored to your industry's unique needs with cutting-edge technology and intelligent automation.
          </p>
        </motion.div>

        <div className="space-y-32">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className={`grid lg:grid-cols-2 gap-16 items-center group ${index % 2 === 1 ? 'lg:grid-flow-dense' : ''
 }`}
            >
              {/* Image Container with Glow */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.4 }}
                className={`relative ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}
              >
                {/* Intense glowing background blur on hover */}
                <div className={`absolute -inset-4 bg-gradient-to-br ${service.gradient} rounded-[2.5rem] blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-500 animate-pulse-glow`}></div>

                <div className="relative aspect-[4/3] rounded-3xl overflow-hidden glass-panel shadow-[0_0_40px_rgba(0,0,0,0.5)]">
                  <ImageWithFallback
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover opacity-80 mix-blend-lighten group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-900 via-dark-900/40 to-transparent"></div>
                </div>
              </motion.div>

              {/* Content */}
              <div className="space-y-8">
                <motion.div
                  whileHover={{ rotate: 180 }}
                  transition={{ duration: 0.6 }}
                  className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${service.gradient} shadow-[0_0_20px_rgba(255,255,255,0.2)]`}
                >
                  <service.icon className="text-white" size={32} />
                </motion.div>

                <div>
                  <h3 className="text-3xl lg:text-4xl font-bold text-white mb-4 drop-shadow-sm">
                    {service.title}
                  </h3>
                  <p className="text-slate-300 text-lg leading-relaxed">
                    {service.description}
                  </p>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  {service.features.map((feature, idx) => (
                    <motion.div
                      key={feature.text}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: idx * 0.1 }}
                      whileHover={{ x: 5 }}
                      className="flex items-center gap-3 glass-panel p-3 rounded-xl hover-glow transition-all duration-300 cursor-default"
                    >
                      <div className={`w-10 h-10 bg-gradient-to-br ${service.gradient} rounded-lg flex items-center justify-center shadow-lg`}>
                        <feature.icon className="text-white" size={18} />
                      </div>
                      <span className="text-slate-200 font-medium">{feature.text}</span>
                    </motion.div>
                  ))}
                </div>

                <motion.button
                  whileHover={{ x: 5 }}
                  onClick={() => navigate('service-detail', service.title.toLowerCase().replace(/ /g, '-').replace('system', 'management'))}
                  className={`inline-flex items-center gap-2 px-6 py-3 rounded-xl glass-panel border-${service.gradient.split('-')[1]}-500/30 text-${service.gradient.split('-')[1]}-400 font-medium hover:bg-white/5 transition-colors group mt-4 hover-glow`}
                >
                  Explore Features
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