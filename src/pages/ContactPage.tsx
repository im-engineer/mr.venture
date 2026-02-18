import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send, Clock, Globe, MessageCircle, Facebook, Twitter, Linkedin, Github, Instagram, Youtube } from 'lucide-react';
import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { toast } from 'sonner';

const socialLinks = [
  { icon: Facebook, href: '#', label: 'Facebook' },
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
  { icon: Github, href: '#', label: 'GitHub' },
  { icon: Instagram, href: 'https://www.instagram.com/mrventure127?igsh=MTh5MTRlZGRkMjFiZA==', label: 'Instagram' },
  { icon: Youtube, href: '#', label: 'YouTube' }
];

export function ContactPage() {
  const form = useRef<HTMLFormElement>(null);
  const [isSending, setIsSending] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    service: '',
    customService: '',
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSending(true);

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
    const email = import.meta.env.VITE_EMAIL;
    const whatsapp = import.meta.env.VITE_WHATSAPP_NUMBER;


    const serviceText = formData.service === 'custom' ? `Custom: ${formData.customService}` : formData.service;

    // Prepare template params matching typical EmailJS structure
    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      company: formData.company,
      phone: formData.phone,
      service: serviceText,
      message: formData.message,
      to_name: 'Admin',
    };

    try {
      await emailjs.send(serviceId, templateId, templateParams, publicKey)
      toast.success('Message sent successfully!', {
        description: "I'll get back to you within 24 hours.",
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
      alert('Failed to send message. Please try again later.');
    }
    finally {
      setIsSending(false);
    };
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl animate-blob"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl animate-blob animation-delay-2000"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center text-white space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full border border-white/30 mb-4">
              <MessageCircle size={20} />
              <span>Get in Touch</span>
            </div>
            <h1 className="text-5xl lg:text-6xl">Let's Build Something Amazing</h1>
            <p className="text-xl text-indigo-100 max-w-3xl mx-auto">
              Have a project in mind? We'd love to hear from you. Send us a message and we'll respond within 24 hours.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 -mt-32 relative z-10">
            {[
              {
                icon: Mail,
                title: 'Email Us',
                info: import.meta.env.VITE_EMAIL || 'contact@mrventure.io',
                subInfo: 'We reply within 24 hours',
                gradient: 'from-blue-500 to-cyan-500'
              },
              {
                icon: Phone,
                title: 'Call Us',
                info: import.meta.env.VITE_WHATSAPP_NUMBER ? `+${import.meta.env.VITE_WHATSAPP_NUMBER}` : '+1 (555) 123-4567',
                subInfo: 'Mon-Fri 9am-6pm EST',
                gradient: 'from-emerald-500 to-teal-500'
              },
              {
                icon: MapPin,
                title: 'Visit Us',
                info: 'N/A',
                subInfo: 'N/A',
                gradient: 'from-purple-500 to-pink-500'
              },
              {
                icon: Clock,
                title: 'Working Hours',
                info: 'Mon - Fri',
                subInfo: '9:00 AM - 6:00 PM EST',
                gradient: 'from-orange-500 to-red-500'
              }
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8, boxShadow: '0 20px 40px -12px rgba(0,0,0,0.2)' }}
                className="bg-white p-6 rounded-2xl shadow-xl border border-slate-100"
              >
                <div className={`inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br ${item.gradient} rounded-xl mb-4`}>
                  <item.icon className="text-white" size={24} />
                </div>
                <h3 className="text-slate-900 mb-2">{item.title}</h3>
                <p className={`bg-gradient-to-r ${item.gradient} bg-clip-text text-transparent mb-1`}>
                  {item.info}
                </p>
                <p className="text-slate-500 text-sm">{item.subInfo}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-24 bg-gradient-to-br from-slate-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left Side - Info */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-4xl bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent mb-4">
                  Send Us a Message
                </h2>
                <p className="text-slate-600 text-lg">
                  Fill out the form and our team will get back to you within 24 hours.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Globe className="text-white" size={24} />
                  </div>
                  <div>
                    <h4 className="text-slate-900 mb-1">Global Presence</h4>
                    <p className="text-slate-600">
                      Offices in San Francisco, New York, London, and Tokyo
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-emerald-600 to-teal-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Clock className="text-white" size={24} />
                  </div>
                  <div>
                    <h4 className="text-slate-900 mb-1">Quick Response</h4>
                    <p className="text-slate-600">
                      Average response time of less than 2 hours during business hours
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-pink-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MessageCircle className="text-white" size={24} />
                  </div>
                  <div>
                    <h4 className="text-slate-900 mb-1">Expert Consultation</h4>
                    <p className="text-slate-600">
                      Free 30-minute consultation with our solution architects
                    </p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="pt-8 border-t border-slate-200">
                <p className="text-slate-600 mb-4">Follow us on social media</p>
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
            </motion.div>

            {/* Right Side - Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-white p-8 rounded-3xl shadow-2xl"
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-slate-900 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                      placeholder="John Doe"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-slate-900 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="company" className="block text-slate-900 mb-2">
                      Company Name
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                      placeholder="Your Company"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-slate-900 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                      placeholder="+1 (555) 123-4567"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="service" className="block text-slate-900 mb-2">
                    Interested Service *
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                  >
                    <option value="">Select a service</option>
                    <option value="ecommerce">Ecommerce Solutions</option>
                    <option value="school">School Management System</option>
                    <option value="hospital">Hospital Management System</option>
                    <option value="consultation">Consultation</option>
                    <option value="custom">Other / Custom Service</option>
                  </select>
                </div>

                {formData.service === 'custom' && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                  >
                    <label htmlFor="customService" className="block text-slate-900 mb-2">
                      Specify Service *
                    </label>
                    <input
                      type="text"
                      id="customService"
                      name="customService"
                      // @ts-ignore
                      value={formData.customService || ''}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                      placeholder="e.g., Mobile App Development"
                    />
                  </motion.div>
                )}

                <div>
                  <label htmlFor="message" className="block text-slate-900 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all resize-none"
                    placeholder="Tell us about your project..."
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={isSending}
                  whileHover={{ scale: 1.02, boxShadow: '0 20px 40px -12px rgba(79, 70, 229, 0.4)' }}
                  whileTap={{ scale: 0.98 }}
                  className={`w-full px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl shadow-lg flex items-center justify-center gap-2 ${isSending ? 'opacity-70 cursor-not-allowed' : ''}`}
                >
                  <Send size={20} className={isSending ? 'animate-pulse' : ''} />
                  {isSending ? 'Sending...' : 'Send Message'}
                </motion.button>

                <p className="text-slate-500 text-sm text-center">
                  By submitting this form, you agree to our Terms of Service and Privacy Policy
                </p>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section - Placeholder */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mt-12 rounded-3xl overflow-hidden shadow-xl">
            <iframe
              src="https://maps.google.com/maps?q=Noida%20Sector%2066&t=&z=15&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="400"
              style={{ border: 0 }}
              //                 allowFullScreen =""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
}
