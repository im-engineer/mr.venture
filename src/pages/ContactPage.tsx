import { motion } from 'motion/react';
import AES from 'crypto-js/aes';
import { Mail, Phone, MapPin, Send, Clock, Globe, MessageCircle, Linkedin, Github, Instagram, ChevronDown } from 'lucide-react';
import { useRef, useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import { toast } from 'sonner';

const socialLinks = [
  { icon: Linkedin, href: 'https://linkedin.com/company/mrventure', label: 'LinkedIn' },
  { icon: Github, href: 'https://github.com/mrventure', label: 'GitHub' },
  { icon: Instagram, href: 'https://www.instagram.com/mrventure127?igsh=MTh5MTRlZGRkMjFiZA==', label: 'Instagram' }
];

export function ContactPage() {
  const form = useRef<HTMLFormElement>(null);
  const [isSending, setIsSending] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    service: '',
    customService: '',
    message: ''
  });

  // Handle clicking outside custom dropdown
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSending(true);

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
    const encryptionKey = import.meta.env.VITE_ENCRYPTION_KEY;

    if (!encryptionKey) {
      console.error('Encryption key is missing');
      toast.error('System error: Encryption key missing');
      setIsSending(false);
      return;
    }

    const serviceText = formData.service === 'custom' ? `Custom: ${formData.customService}` : formData.service;

    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      company: formData.company,
      phone: AES.encrypt(formData.phone, encryptionKey).toString(),
      service: serviceText,
      message: AES.encrypt(formData.message, encryptionKey).toString(),
      to_name: 'Admin',
    };

    try {
      await emailjs.send(serviceId, templateId, templateParams, publicKey)
      toast.success('Message sent successfully!', {
        description: "An MR Venture representative will contact you within 24 hours.",
      });

      setFormData({
        name: '',
        email: '',
        company: '',
        phone: '',
        service: '',
        customService: '',
        message: ''
      });
    } catch (error) {
      console.error('Failed to send email:', error);
      toast.error('Failed to send message. Please try again later.');
    } finally {
      setIsSending(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const serviceOptions = [
    { value: 'custom_web', label: 'Custom Web Development' },
    { value: 'saas_crm', label: 'SaaS & CRM Development' },
    { value: 'ecommerce', label: 'E-commerce Solutions' },
    { value: 'enterprise', label: 'Enterprise Software Integration' },
    { value: 'ui_ux', label: 'UI/UX Engineering' },
    { value: 'custom', label: 'Other / Complex Build' },
  ];

  return (
    <div className="pt-20 min-h-screen bg-[#080b18]">
      {/* Hero Section */}
      <section className="py-24 relative overflow-hidden">
        {/* Centered Organic Gradient */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
          <motion.div
            animate={{
              scale: [1, 1.1, 1],
              rotate: [0, 45, 0],
            }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="w-[80vw] h-[60vh] max-w-[800px] max-h-[600px] bg-gradient-to-tr from-blue-600/30 via-indigo-600/30 to-purple-600/30 blur-[130px] rounded-[60%_40%_30%_70%]"
          />
        </div>

        {/* Subtle Grid Overlay */}
        <div className="absolute inset-0 z-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 glass-panel rounded-full border-blue-500/30 shadow-[0_0_15px_rgba(59,130,246,0.15)] mb-4 bg-blue-900/10">
              <MessageCircle size={20} className="text-blue-400" />
              <span className="text-blue-200 font-medium tracking-wide uppercase text-sm">Start a Conversation</span>
            </div>
            <h1 className="text-5xl lg:text-7xl font-bold text-white tracking-tight">
              Talk to Our <span style={{ backgroundImage: 'linear-gradient(to right, #60a5fa, #818cf8)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', color: 'transparent' }}>Engineers</span>
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed mt-4">
              Whether you need a custom SaaS platform, a scalable e-commerce backend, or complex enterprise architecture, our team based in India is ready to build it.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="relative z-20 -mt-16 sm:-mt-24 mb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Mail,
                title: 'Email Us',
                info: 'mrventure127@gmail.com',
                subInfo: 'Response within 12 hours',
                gradient: 'from-blue-500 to-cyan-500',
                glow: 'group-hover:shadow-[0_0_30px_rgba(59,130,246,0.3)]'
              },
              {
                icon: Phone,
                title: 'Call Us',
                info: '+91 (936) 939-5446',
                subInfo: 'Mon-Fri 10am-7pm IST',
                gradient: 'from-purple-500 to-indigo-500',
                glow: 'group-hover:shadow-[0_0_30px_rgba(168,85,247,0.3)]'
              },
              {
                icon: MapPin,
                title: 'Headquarters',
                info: 'Noida, UP, India',
                subInfo: 'Sector 62, Tech Park',
                gradient: 'from-pink-500 to-rose-500',
                glow: 'group-hover:shadow-[0_0_30px_rgba(236,72,153,0.3)]'
              },
              {
                icon: Globe,
                title: 'Global Clients',
                info: 'Serving Worldwide',
                subInfo: 'Remote-first processes',
                gradient: 'from-emerald-500 to-teal-500',
                glow: 'group-hover:shadow-[0_0_30px_rgba(16,185,129,0.3)]'
              }
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`glass-panel p-6 rounded-3xl group transition-all duration-300 backdrop-blur-xl border border-white/5 bg-[#0a0f1c]/80 ${item.glow}`}
              >
                <div className={`inline-flex items-center justify-center w-14 h-14 bg-dark-800 border border-white/10 rounded-2xl mb-6 group-hover:-translate-y-2 transition-transform duration-300`}>
                  <item.icon className="text-white" size={24} />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                <p className={`bg-gradient-to-r ${item.gradient} bg-clip-text text-transparent font-medium mb-1 drop-shadow-sm`}>
                  {item.info}
                </p>
                <p className="text-slate-400 text-sm">{item.subInfo}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Contact Form Section */}
      <section className="py-16 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col md:flex-row gap-12 md:gap-16 items-start">

            {/* Left Side - Context */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="w-full md:w-5/12 space-y-10 md:sticky md:top-32"
            >
              <div>
                <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6 tracking-tight">
                  Detail Your <span style={{ backgroundImage: 'linear-gradient(to right, #60a5fa, #818cf8)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', color: 'transparent' }}>Requirements</span>
                </h2>
                <p className="text-slate-300 text-lg leading-relaxed mb-8">
                  The more specific you are about your software needs, the faster our engineering team can provide an accurate roadmap and architecture proposal.
                </p>
              </div>

              <div className="space-y-6">
                <div className="glass-panel p-6 rounded-2xl border border-white/5 bg-[#0a0f1c]/40 hover-glow">
                  <h4 className="text-xl font-bold text-white mb-2">NDA Protected</h4>
                  <p className="text-slate-400 text-sm">We automatically sign a strict Non-Disclosure Agreement before discussing any proprietary business logic or intellectual property.</p>
                </div>

                <div className="glass-panel p-6 rounded-2xl border border-white/5 bg-[#0a0f1c]/40 hover-glow">
                  <h4 className="text-xl font-bold text-white mb-2">Technical Feasibility</h4>
                  <p className="text-slate-400 text-sm">Every inquiry is reviewed directly by our senior developers to ensure technical viability before we ever quote a project.</p>
                </div>
              </div>

              {/* Social Links */}
              <div className="pt-6">
                <p className="text-slate-300 font-medium mb-4 uppercase tracking-wider text-sm">Follow MR Venture</p>
                <div className="flex gap-4">
                  {socialLinks.map((social) => (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-12 h-12 glass-panel border border-white/10 bg-[#0a0f1c]/60 rounded-xl flex items-center justify-center hover:bg-white/10 hover:border-blue-500/50 transition-all text-slate-300 hover:text-white"
                      aria-label={social.label}
                    >
                      <social.icon size={20} />
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Right Side - Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="w-full md:w-7/12 glass-panel p-8 sm:p-10 rounded-3xl border border-white/10 bg-[#0a0f1c]/80 backdrop-blur-xl relative overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.5)]"
            >
              <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="block text-sm font-medium text-slate-300">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-5 py-4 bg-dark-900/50 border border-white/10 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 transition-all font-medium"
                      placeholder="Jane Doe"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="email" className="block text-sm font-medium text-slate-300">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-5 py-4 bg-dark-900/50 border border-white/10 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 transition-all font-medium"
                      placeholder="jane@company.com"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="company" className="block text-sm font-medium text-slate-300">
                      Company Name
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-5 py-4 bg-dark-900/50 border border-white/10 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 transition-all font-medium"
                      placeholder="Tech Innovators Inc."
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="phone" className="block text-sm font-medium text-slate-300">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-5 py-4 bg-dark-900/50 border border-white/10 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 transition-all font-medium"
                      placeholder="+91 (936) 939-5446"
                    />
                  </div>
                </div>

                <div className="space-y-2 relative" ref={dropdownRef}>
                  <label htmlFor="service" className="block text-sm font-medium text-slate-300">
                    Required Service *
                  </label>
                  <div
                    className="w-full px-5 py-4 bg-dark-900/50 border border-white/10 rounded-xl text-white focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 transition-all font-medium cursor-pointer flex justify-between items-center"
                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  >
                    <span className={formData.service ? "text-white" : "text-slate-500"}>
                      {formData.service ? serviceOptions.find(opt => opt.value === formData.service)?.label : "Select the primary service required"}
                    </span>
                    <ChevronDown size={20} className={`text-slate-400 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} />
                  </div>

                  {isDropdownOpen && (
                    <div className="absolute top-full left-0 right-0 mt-2 bg-slate-900 border border-white/20 rounded-xl shadow-[0_10px_40px_rgba(0,0,0,0.8)] overflow-hidden z-[100] animate-in fade-in zoom-in-95 duration-200">
                      {serviceOptions.map((option) => (
                        <div
                          key={option.value}
                          className="px-5 py-3 hover:bg-blue-600/30 cursor-pointer text-slate-200 hover:text-white transition-colors bg-slate-900"
                          onClick={() => {
                            setFormData({ ...formData, service: option.value });
                            setIsDropdownOpen(false);
                          }}
                        >
                          {option.label}
                        </div>
                      ))}
                    </div>
                  )}
                  {/* Hidden input to ensure required validation still works */}
                  <input type="hidden" name="service" value={formData.service} required />
                </div>

                {formData.service === 'custom' && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="space-y-2 overflow-hidden"
                  >
                    <label htmlFor="customService" className="block text-sm font-medium text-slate-300">
                      Briefly Specify Needs *
                    </label>
                    <input
                      type="text"
                      id="customService"
                      name="customService"
                      value={formData.customService || ''}
                      onChange={handleChange}
                      required
                      className="w-full px-5 py-4 bg-dark-900/50 border border-white/10 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 transition-all font-medium"
                      placeholder="e.g., Cross-platform mobile app with hardware IoT integration"
                    />
                  </motion.div>
                )}

                <div className="space-y-2">
                  <label htmlFor="message" className="block text-sm font-medium text-slate-300">
                    Project Details & Scope *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-5 py-4 bg-dark-900/50 border border-white/10 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 transition-all resize-none font-medium"
                    placeholder="Describe your current tech stack, main challenges, and what you aim to achieve..."
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={isSending}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`w-full px-8 py-5 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white font-bold text-lg rounded-xl shadow-[0_0_20px_rgba(79,70,229,0.3)] hover:shadow-[0_0_40px_rgba(79,70,229,0.6)] flex items-center justify-center gap-3 transition-all ${isSending ? 'opacity-70 cursor-not-allowed' : 'hover-glow'}`}
                >
                  <Send size={22} className={isSending ? 'animate-pulse' : ''} />
                  {isSending ? 'Transmitting Securely...' : 'Submit Requirements'}
                </motion.button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-24 relative overflow-hidden bg-[#050812]/50 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">India Headquarters</h2>
            <p className="text-slate-400">Located in the heart of India's tech hub.</p>
          </div>
          <div className="glass-panel p-2 rounded-[2.5rem] shadow-[0_0_50px_rgba(0,0,0,0.5)] border border-white/5 overflow-hidden">
            <div className="rounded-[2rem] overflow-hidden bg-dark-800 relative h-[450px]">
              <iframe
                src="https://maps.google.com/maps?q=Noida%20Sector%2062&t=&z=14&ie=UTF8&iwloc=&output=embed"
                className="w-full h-full border-0 absolute inset-0 mix-blend-luminosity opacity-80"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="MR Venture Office Location"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
