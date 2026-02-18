import { MessageCircle, X, Send } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';

export function WhatsAppButton() {
    const [isOpen, setIsOpen] = useState(false);
    const phoneNumber = import.meta.env.VITE_WHATSAPP_NUMBER;
    const message = "Hello! I'm interested in your services.";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;


    return (
        <>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 20 }}
                        transition={{ duration: 0.2 }}
                        style={{
                            position: 'fixed',
                            bottom: '7rem',
                            right: '2rem',
                            zIndex: 9999,
                            backgroundColor: 'white',
                            borderRadius: '1rem',
                            boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)',
                            padding: '1.5rem',
                            width: '320px',
                            color: '#1e293b',
                            border: '1px solid #e2e8f0'
                        }}
                    >
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                                <div style={{
                                    width: '12px',
                                    height: '12px',
                                    backgroundColor: '#25D366',
                                    borderRadius: '50%',
                                    boxShadow: '0 0 0 4px rgba(37, 211, 102, 0.2)'
                                }}></div>
                                <h3 style={{ fontWeight: 600, fontSize: '1.125rem', color: '#0f172a' }}>Chat Support</h3>
                            </div>
                            <button
                                onClick={() => setIsOpen(false)}
                                style={{
                                    color: '#94a3b8',
                                    cursor: 'pointer',
                                    background: 'none',
                                    border: 'none',
                                    padding: '4px',
                                    borderRadius: '50%',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center'
                                }}
                                className="hover:bg-slate-100 transition-colors"
                            >
                                <X size={20} />
                            </button>
                        </div>

                        <p style={{ color: '#475569', marginBottom: '1.5rem', fontSize: '0.95rem', lineHeight: '1.5' }}>
                            Hi there! 👋<br />
                            How can we help you today? Click below to start a conversation on WhatsApp.
                        </p>

                        <a
                            href={whatsappUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                gap: '0.75rem',
                                backgroundColor: '#25D366',
                                color: 'white',
                                padding: '0.875rem 1rem',
                                borderRadius: '0.75rem',
                                textDecoration: 'none',
                                fontWeight: 500,
                                width: '100%',
                                transition: 'background-color 0.2s'
                            }}
                            className="hover:bg-[#20bd5a]"
                        >
                            <MessageCircle size={20} />
                            Start Chat
                        </a>
                    </motion.div>
                )}
            </AnimatePresence>

            <motion.button
                onClick={() => setIsOpen(!isOpen)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                style={{
                    position: 'fixed',
                    bottom: '2rem',
                    right: '2rem',
                    zIndex: 9999,
                    backgroundColor: isOpen ? '#475569' : '#25D366',
                    color: 'white',
                    border: 'none',
                    cursor: 'pointer',
                    borderRadius: '50%',
                    width: '3.5rem',
                    height: '3.5rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)'
                }}
                className="hover:shadow-xl transition-all duration-200"
                aria-label="Toggle chat"
            >
                <AnimatePresence mode="wait">
                    {isOpen ? (
                        <motion.div
                            key="close"
                            initial={{ rotate: -90, opacity: 0 }}
                            animate={{ rotate: 0, opacity: 1 }}
                            exit={{ rotate: 90, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                        >
                            <X size={24} />
                        </motion.div>
                    ) : (
                        <motion.div
                            key="chat"
                            initial={{ scale: 0.5, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.5, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                        >
                            <MessageCircle size={24} fill="white" className="text-white" />
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.button>
        </>
    );
}
