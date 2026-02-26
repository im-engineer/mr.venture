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
    <footer className="bg-transparent text-slate-400 relative overflow-hidden">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main Footer Content */}
        <div className="py-16 grid md:grid-cols-2 lg:grid-cols-6 gap-8 lg:gap-12">
          {/* Company Info */}
          <div className="lg:col-span-2 space-y-6">
            <motion.div
              whileHover={{ scale: 1.05 }}
              onClick={() => navigate('home')}
              className="flex items-center gap-3 cursor-pointer group"
            >
              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full blur opacity-20 group-hover:opacity-40 transition duration-500"></div>
                <img src={logo} alt="MrVenture Logo" className="h-20 w-auto relative grayscale group-hover:grayscale-0 transition-all duration-500" />
              </div>
            </motion.div>

            <p className="text-slate-400 leading-relaxed font-medium">
              Empowering businesses worldwide with innovative software solutions. Transform your operations with cutting-edge technology.
            </p>

            <div className="flex gap-4 pt-2">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 glass-panel rounded-lg flex items-center justify-center text-slate-400 hover:text-white hover:border-blue-500/30 hover:bg-blue-500/10 transition-all shadow-sm"
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
              <h4 className="text-white font-bold tracking-wide mb-6">{category}</h4>
              <ul className="space-y-4">
                {links.map((link) => (
                  <li key={link.label}>
                    <motion.button
                      onClick={() => navigate(link.page)}
                      whileHover={{ x: 3, color: '#60a5fa' }}
                      className="text-slate-400 hover:text-blue-400 transition-colors text-left font-medium"
                    >
                      {link.label}
                    </motion.button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-slate-500 font-medium">© 2025 mrventure. All rights reserved.</p>

            <div className="flex flex-wrap gap-8 justify-center">
              <button onClick={() => navigate('home')} className="text-slate-500 hover:text-blue-400 font-medium transition-colors">
                Privacy Policy
              </button>
              <button onClick={() => navigate('home')} className="text-slate-500 hover:text-blue-400 font-medium transition-colors">
                Terms of Service
              </button>
              <button onClick={() => navigate('home')} className="text-slate-500 hover:text-blue-400 font-medium transition-colors">
                Cookie Settings
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
