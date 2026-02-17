import { Facebook, Twitter, Linkedin, Github, Instagram, Youtube, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';
import logo from '@/data/logo.png';

type FooterProps = {
  navigate: (page: string) => void;
};

const footerLinks = {
  Products: [
    { label: 'Ecommerce Platform', page: 'products' },
    { label: 'School Management', page: 'products' },
    { label: 'Hospital Management', page: 'products' },
    { label: 'All Products', page: 'products' }
  ],
  Company: [
    { label: 'About Us', page: 'home' },
    { label: 'Technology', page: 'technology' },
    { label: 'Blog', page: 'blog' },
    { label: 'Contact', page: 'contact' }
  ],
  Services: [
    { label: 'Our Services', page: 'services' },
    { label: 'Features', page: 'features' },
    { label: 'Technology Stack', page: 'technology' },
    { label: 'Consultation', page: 'contact' }
  ],
  Support: [
    { label: 'Contact Us', page: 'contact' },
    { label: 'FAQ', page: 'home' },
    { label: 'Documentation', page: 'home' },
    { label: 'Help Center', page: 'contact' }
  ]
};

const socialLinks = [
  { icon: Facebook, href: '#', label: 'Facebook' },
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
  { icon: Github, href: '#', label: 'GitHub' },
  { icon: Instagram, href: '#', label: 'Instagram' },
  { icon: Youtube, href: '#', label: 'YouTube' }
];

export function Footer({ navigate }: FooterProps) {
  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16 grid md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2 space-y-6">
            <motion.div
              whileHover={{ scale: 1.05 }}
              onClick={() => navigate('home')}
              className="flex items-center gap-3 cursor-pointer"
            >
              <img src={logo} alt="MrVenture Logo" className="h-20 w-auto" />
            </motion.div>

            <p className="text-slate-400 leading-relaxed">
              Empowering businesses worldwide with innovative software solutions. Transform your operations with cutting-edge technology.
            </p>

            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  whileHover={{ scale: 1.2, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-gradient-to-br hover:from-indigo-600 hover:to-purple-600 transition-all"
                  aria-label={social.label}
                >
                  <social.icon size={18} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Links Sections */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-white mb-4">{category}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <motion.button
                      onClick={() => navigate(link.page)}
                      whileHover={{ x: 5, color: '#818cf8' }}
                      className="text-slate-400 hover:text-indigo-400 transition-colors text-left"
                    >
                      {link.label}
                    </motion.button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter */}
        {/* <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="py-8 border-t border-slate-800"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-center md:text-left">
              <h4 className="text-white mb-2">Subscribe to our newsletter</h4>
              <p className="text-slate-400">Get the latest updates and insights delivered to your inbox</p>
            </div>
            <div className="flex gap-2 w-full md:w-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 md:w-64 px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500 transition-colors"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg hover:shadow-lg hover:shadow-indigo-500/50 transition-all"
              >
                Subscribe
              </motion.button>
            </div>
          </div>
        </motion.div> */}

        {/* Bottom Bar */}
        <div className="py-8 border-t border-slate-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-slate-400">© 2025 mrventure. All rights reserved.</p>

            <div className="flex flex-wrap gap-6 justify-center">
              <button onClick={() => navigate('home')} className="text-slate-400 hover:text-indigo-400 transition-colors">
                Privacy
              </button>
              <button onClick={() => navigate('home')} className="text-slate-400 hover:text-indigo-400 transition-colors">
                Terms
              </button>
              <button onClick={() => navigate('home')} className="text-slate-400 hover:text-indigo-400 transition-colors">
                Cookies
              </button>
              <button onClick={() => navigate('home')} className="text-slate-400 hover:text-indigo-400 transition-colors">
                Sitemap
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
