import { motion } from 'motion/react';
import { Activity, Stars } from 'lucide-react';

export function SatelliteBackground() {
    return (
        <div className="fixed inset-0 overflow-hidden pointer-events-none z-[-1] bg-[#030614]">
            {/* Space Grid / Particle Illusion */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px] opacity-20 [mask-image:radial-gradient(ellipse_100%_100%_at_50%_50%,#000_60%,transparent_100%)]"></div>

            {/* Floating Stars Layer 1 */}
            <motion.div
                className="absolute inset-0 opacity-40"
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
            >
                {Array.from({ length: 20 }).map((_, i) => (
                    <div
                        key={`star-1-${i}`}
                        className="absolute w-1 h-1 bg-white rounded-full"
                        style={{
                            top: `${Math.random() * 100}%`,
                            left: `${Math.random() * 100}%`,
                            opacity: Math.random() * 0.8 + 0.2,
                            boxShadow: '0 0 10px rgba(255,255,255,0.8)'
                        }}
                    />
                ))}
            </motion.div>

            {/* Floating Stars Layer 2 (Different speed/direction for parallax) */}
            <motion.div
                className="absolute inset-0 opacity-30"
                animate={{ y: [0, 20, 0], x: [0, 10, 0] }}
                transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
            >
                {Array.from({ length: 30 }).map((_, i) => (
                    <div
                        key={`star-2-${i}`}
                        className="absolute w-[2px] h-[2px] bg-cyan-200 rounded-full"
                        style={{
                            top: `${Math.random() * 100}%`,
                            left: `${Math.random() * 100}%`,
                            opacity: Math.random() * 0.6 + 0.1,
                            boxShadow: '0 0 5px rgba(34,211,238,0.5)'
                        }}
                    />
                ))}
            </motion.div>

            {/* Central Rotating Satellite Icon */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 mix-blend-screen opacity-15 overflow-hidden w-full h-full pointer-events-none flex items-center justify-center">
                <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
                    className="relative text-cyan-500/20 w-[400px] h-[400px] md:w-[800px] md:h-[800px]"
                >
                    <Activity className="w-full h-full" strokeWidth={0.5} />
                </motion.div>
                <div className="absolute inset-0 bg-blue-500/20 blur-[100px] md:blur-[150px] rounded-full mix-blend-screen"></div>
            </div>

            {/* Deep Space Glowing Gradients (Subtle backdrop) */}
            <motion.div
                animate={{
                    scale: [1, 1.1, 1],
                    opacity: [0.3, 0.5, 0.3],
                }}
                transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-[10%] -left-[10%] w-[50vw] h-[50vw] bg-indigo-900/30 blur-[150px] rounded-full mix-blend-screen"
            />
            <motion.div
                animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.2, 0.4, 0.2],
                }}
                transition={{ duration: 24, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                className="absolute bottom-[20%] -right-[10%] w-[60vw] h-[60vw] bg-fuchsia-900/20 blur-[180px] rounded-full mix-blend-screen"
            />
        </div>
    );
}
