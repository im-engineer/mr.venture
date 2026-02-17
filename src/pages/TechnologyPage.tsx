import { motion } from 'motion/react';
import { Code, Database, Cloud, Shield, Zap, Cpu, Server, Globe } from 'lucide-react';

const techStack = [
  {
    category: 'Frontend Technologies',
    description: 'Modern frameworks for exceptional user experiences',
    icon: Code,
    gradient: 'from-blue-500 to-cyan-500',
    technologies: [
      { name: 'React', description: 'Component-based UI library', level: 95 },
      { name: 'TypeScript', description: 'Type-safe JavaScript', level: 90 },
      { name: 'Tailwind CSS', description: 'Utility-first CSS framework', level: 95 },
      { name: 'Next.js', description: 'React framework for production', level: 88 }
    ]
  },
  {
    category: 'Backend Technologies',
    description: 'Robust server-side solutions',
    icon: Server,
    gradient: 'from-emerald-500 to-teal-500',
    technologies: [
      { name: 'Node.js', description: 'JavaScript runtime', level: 92 },
      { name: 'Python', description: 'Versatile programming language', level: 90 },
      { name: 'Java Spring', description: 'Enterprise Java framework', level: 85 },
      { name: 'GraphQL', description: 'API query language', level: 87 }
    ]
  },
  {
    category: 'Database Solutions',
    description: 'Scalable data management systems',
    icon: Database,
    gradient: 'from-purple-500 to-pink-500',
    technologies: [
      { name: 'PostgreSQL', description: 'Advanced SQL database', level: 93 },
      { name: 'MongoDB', description: 'NoSQL document database', level: 90 },
      { name: 'Redis', description: 'In-memory data store', level: 88 },
      { name: 'Elasticsearch', description: 'Search and analytics engine', level: 85 }
    ]
  },
  {
    category: 'Cloud & Infrastructure',
    description: 'Scalable cloud platforms',
    icon: Cloud,
    gradient: 'from-indigo-500 to-blue-500',
    technologies: [
      { name: 'AWS', description: 'Amazon Web Services', level: 94 },
      { name: 'Google Cloud', description: 'GCP platform', level: 88 },
      { name: 'Azure', description: 'Microsoft cloud platform', level: 86 },
      { name: 'Docker', description: 'Containerization platform', level: 92 }
    ]
  },
  {
    category: 'AI & Machine Learning',
    description: 'Intelligent automation and analytics',
    icon: Cpu,
    gradient: 'from-violet-500 to-purple-500',
    technologies: [
      { name: 'TensorFlow', description: 'ML framework', level: 85 },
      { name: 'PyTorch', description: 'Deep learning library', level: 83 },
      { name: 'OpenAI', description: 'GPT integration', level: 88 },
      { name: 'Scikit-learn', description: 'ML library for Python', level: 87 }
    ]
  },
  {
    category: 'Security & DevOps',
    description: 'Enterprise-grade security and automation',
    icon: Shield,
    gradient: 'from-red-500 to-pink-500',
    technologies: [
      { name: 'Kubernetes', description: 'Container orchestration', level: 89 },
      { name: 'Jenkins', description: 'CI/CD automation', level: 86 },
      { name: 'OAuth 2.0', description: 'Authorization framework', level: 92 },
      { name: 'Terraform', description: 'Infrastructure as code', level: 84 }
    ]
  }
];

const certifications = [
  'AWS Certified Solutions Architect',
  'Google Cloud Professional',
  'Microsoft Azure Expert',
  'ISO 27001 Certified',
  'SOC 2 Type II Compliant',
  'HIPAA Compliant',
  'GDPR Compliant',
  'PCI DSS Certified'
];

export function TechnologyPage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center text-white space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full border border-white/30 mb-4">
              <Zap size={20} />
              <span>Technology Stack</span>
            </div>
            <h1 className="text-5xl lg:text-6xl">Cutting-Edge Technology</h1>
            <p className="text-xl text-indigo-100 max-w-3xl mx-auto">
              We leverage the latest and most powerful technologies to build scalable, secure, and innovative solutions
            </p>
          </motion.div>
        </div>
      </section>

      {/* Tech Stack Categories */}
      {techStack.map((stack, stackIndex) => (
        <section
          key={stack.category}
          className={stackIndex % 2 === 0 ? 'py-24 bg-white' : 'py-24 bg-gradient-to-br from-slate-50 to-indigo-50'}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-16"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${stack.gradient} shadow-lg`}>
                  <stack.icon className="text-white" size={32} />
                </div>
                <div>
                  <h2 className="text-3xl bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">
                    {stack.category}
                  </h2>
                  <p className="text-slate-600">{stack.description}</p>
                </div>
              </div>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              {stack.technologies.map((tech, index) => (
                <motion.div
                  key={tech.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-xl transition-shadow"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-xl text-slate-900 mb-1">{tech.name}</h3>
                      <p className="text-slate-600">{tech.description}</p>
                    </div>
                    <span className={`px-3 py-1 bg-gradient-to-r ${stack.gradient} text-white rounded-lg`}>
                      {tech.level}%
                    </span>
                  </div>

                  {/* Progress Bar */}
                  <div className="relative h-2 bg-slate-100 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${tech.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: index * 0.1 + 0.3 }}
                      className={`absolute inset-y-0 left-0 bg-gradient-to-r ${stack.gradient} rounded-full`}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* Certifications */}
      <section className="py-24 bg-gradient-to-br from-slate-900 to-indigo-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl mb-4">Certifications & Compliance</h2>
            <p className="text-indigo-200 text-lg">
              Certified and compliant with industry-leading standards
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20 text-center"
              >
                <Shield className="text-indigo-300 mx-auto mb-3" size={32} />
                <p className="text-white">{cert}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {[
              { icon: Globe, value: '50+', label: 'Technologies Mastered' },
              { icon: Cpu, value: '1000+', label: 'AI Models Trained' },
              { icon: Server, value: '99.99%', label: 'Infrastructure Uptime' },
              { icon: Shield, value: '100%', label: 'Security Compliance' }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="space-y-4"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-2xl">
                  <stat.icon className="text-white" size={32} />
                </div>
                <div className="text-4xl bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                  {stat.value}
                </div>
                <div className="text-slate-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-slate-50 to-indigo-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-4xl bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">
              Want to Learn More?
            </h2>
            <p className="text-slate-600 text-lg">
              Discover how our technology stack can power your next project
            </p>
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: '0 20px 40px -12px rgba(79, 70, 229, 0.4)' }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl shadow-lg"
            >
              Schedule a Tech Consultation
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
