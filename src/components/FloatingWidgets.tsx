import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronUp, ChevronDown } from 'lucide-react';

export function FloatingWidgets() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', toggleVisibility);
        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    const scrollToBottom = () => {
        window.scrollTo({
            top: document.documentElement.scrollHeight,
            behavior: 'smooth',
        });
    };

    return (
        <>
            {/* WhatsApp Button - Bottom Left */}
            <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                style={{ position: 'fixed', bottom: '24px', left: '24px', zIndex: 999999 }}
                className="flex flex-col gap-4 pointer-events-auto"
            >
                <a
                    href="https://wa.me/919369395446"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ backgroundColor: '#25D366' }}
                    className="relative group flex items-center justify-center w-14 h-14 rounded-full text-white shadow-[0_0_30px_rgba(37,211,102,0.4)] hover:shadow-[0_0_40px_rgba(37,211,102,0.8)] transition-all hover:-translate-y-1"
                    aria-label="Chat on WhatsApp"
                >
                    {/* Custom Vibrant WhatsApp SVG */}
                    <svg className="w-8 h-8 relative z-10" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.878-.788-1.46-1.761-1.633-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
                    </svg>
                    <div className="absolute inset-0 rounded-full opacity-40 group-hover:animate-ping pointer-events-none" style={{ backgroundColor: '#25D366' }}></div>
                    <div className="absolute -inset-2 rounded-full border-2 opacity-0 group-hover:animate-ping pointer-events-none" style={{ borderColor: '#25D366', animationDelay: '200ms' }}></div>
                </a>
            </motion.div>

            {/* Scroll Down & Up Buttons - Bottom Right */}
            <div style={{ position: 'fixed', bottom: '24px', right: '24px', zIndex: 999999 }} className="flex flex-col gap-4 pointer-events-auto">
                <AnimatePresence>
                    {isVisible && (
                        <motion.button
                            initial={{ opacity: 0, scale: 0.5, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.5, y: 20 }}
                            onClick={scrollToTop}
                            className="w-12 h-12 glass-panel bg-white/5 border border-white/10 rounded-full flex items-center justify-center text-slate-300 hover:text-white hover:bg-indigo-500/30 hover:border-indigo-500/50 shadow-[0_0_15px_rgba(0,0,0,0.5)] transition-all"
                            aria-label="Scroll to top"
                        >
                            <ChevronUp size={24} />
                        </motion.button>
                    )}
                </AnimatePresence>

                <motion.button
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    onClick={scrollToBottom}
                    className="w-12 h-12 glass-panel bg-white/5 border border-white/10 rounded-full flex items-center justify-center text-slate-300 hover:text-white hover:bg-indigo-500/30 hover:border-indigo-500/50 shadow-[0_0_15px_rgba(0,0,0,0.5)] transition-all"
                    aria-label="Scroll to bottom"
                >
                    <ChevronDown size={24} />
                </motion.button>
            </div>
        </>
    );
}
