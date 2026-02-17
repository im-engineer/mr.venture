import { Star, Quote } from 'lucide-react';
import { motion } from 'motion/react';

const testimonials = [
  {
    name: 'Aarav Patel',
    role: 'CEO, TechRetail Inc',
    content: 'The ecommerce platform transformed our business. Sales increased by 300% in just 6 months. The analytics and automation features are game-changing.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBidXNpbmVzc21hbnxlbnwxfHx8fDE3NjU4MDUzMzJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },
  {
    name: 'Priya Sharma',
    role: 'Director, City Hospital',
    content: 'Outstanding hospital management system! Patient care has improved dramatically with streamlined processes. The support team is incredibly responsive.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBidXNpbmVzc3dvbWFufGVufDF8fHx8MTc2NTgwNTMzMnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },
  {
    name: 'Rajesh Kumar',
    role: 'Principal, Sunrise Academy',
    content: 'This school management system exceeded our expectations. Parents love the transparency, teachers appreciate the simplicity, and our admin work is cut in half.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1566492031773-4f4e44671857?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBtYW58ZW58MXx8fHwxNzY1ODA1MzMyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },
  // {
  //   name: 'Vikram Malhotra',
  //   role: 'Founder, TechFlow Solutions',
  //   content: 'mrventure delivers exactly what they promise. Their cloud migration services were seamless, and we saw immediate performance improvements.',
  //   rating: 5,
  //   image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?fit=crop&w=800&q=80',
  // },
  // {
  //   name: 'Anita Desai',
  //   role: 'CTO, Future Systems',
  //   content: 'The AI integration they built for our customer service is brilliant. It handles 60% of queries automatically with high accuracy. Highly recommended!',
  //   rating: 5,
  //   image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?fit=crop&w=800&q=80',
  // },
  // {
  //   name: 'Arjun Reddy',
  //   role: 'MD, GreenLeaf Energy',
  //   content: 'Professional, punctual, and innovative. They understood our complex requirements in the energy sector and delivered a robust IoT dashboard.',
  //   rating: 5,
  //   image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?fit=crop&w=800&q=80',
  // },
  // {
  //   name: 'Sneha Gupta',
  //   role: 'VP Marketing, Creative Pulse',
  //   content: 'Our website redesign is stunning. We have seen a 40% increase in lead generation since the launch. The design team has impeccable taste.',
  //   rating: 5,
  //   image: 'https://images.unsplash.com/photo-1598550832205-d5a27cf6621c?fit=crop&w=800&q=80',
  // },
]

export function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgb(79 70 229) 1px, transparent 0)`,
          backgroundSize: '40px 40px',
        }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-indigo-100 to-purple-100 rounded-full border border-indigo-200 mb-4">
            <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Testimonials
            </span>
          </div>
          <h2 className="text-4xl lg:text-5xl bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent mb-4">
            Loved by Thousands of Companies
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg">
            See what our clients have to say about their experience with our solutions
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8, boxShadow: '0 20px 40px -12px rgba(79, 70, 229, 0.2)' }}
              className="bg-gradient-to-br from-white to-slate-50 p-8 rounded-2xl shadow-lg border border-slate-100 relative"
            >
              {/* Quote Icon */}
              <div className="absolute top-6 right-6 w-12 h-12 bg-gradient-to-br from-indigo-100 to-purple-100 rounded-full flex items-center justify-center opacity-50">
                <Quote className="text-indigo-600" size={20} />
              </div>

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="text-yellow-400 fill-yellow-400" size={18} />
                ))}
              </div>

              {/* Content */}
              <p className="text-slate-700 mb-6 leading-relaxed">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4 pt-4 border-t border-slate-200">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <div className="text-slate-900">{testimonial.name}</div>
                  <div className="text-slate-500">{testimonial.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
