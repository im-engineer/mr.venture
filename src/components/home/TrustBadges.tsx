import { motion } from 'motion/react';
import { Shield, Award, Users, TrendingUp } from 'lucide-react';

const badges = [
  {
    icon: Users,
    value: '10,000+',
    label: 'Happy Clients',
    color: 'text-blue-600'
  },
  {
    icon: Shield,
    value: 'ISO 27001',
    label: 'Certified',
    color: 'text-green-600'
  },
  {
    icon: Award,
    value: '4.9/5',
    label: 'Client Rating',
    color: 'text-yellow-600'
  },
  {
    icon: TrendingUp,
    value: '99.9%',
    label: 'Uptime SLA',
    color: 'text-purple-600'
  }
];

export function TrustBadges() {
  return (
    <section className="py-16 bg-transparent border-y border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <p className="text-amber-100">Trusted by industry leaders worldwide</p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {badges.map((badge, index) => (
            <motion.div
              key={badge.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <badge.icon className={`${badge.color} mx-auto mb-3`} size={32} />
              <div className="text-3xl text-white font-bold mb-1">
                {badge.value}
              </div>
              <div className="text-amber-100">{badge.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
