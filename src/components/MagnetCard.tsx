import { useRef, useState } from 'react';
import { motion } from 'motion/react';

type MagnetCardProps = {
    children: React.ReactNode;
    className?: string;
    gradientColors?: string;
};

export function MagnetCard({
    children,
    className = "",
    gradientColors = "from-blue-500/20 via-purple-500/20 to-cyan-500/20"
}: MagnetCardProps) {
    const boundingRef = useRef<HTMLDivElement>(null);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!boundingRef.current) return;
        const rect = boundingRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        setMousePosition({ x, y });
    };

    const handleMouseEnter = () => setIsHovered(true);
    const handleMouseLeave = () => {
        setIsHovered(false);
        // Optional: Reset position on leave if you want it to snap back to center tilt
        setMousePosition({ x: 0, y: 0 }); // Might want to adjust if 3d tilt requires center coordinates
    };

    return (
        <motion.div
            ref={boundingRef}
            onMouseMove={handleMouseMove}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className={`relative overflow-hidden glass-panel border border-white/10 rounded-2xl group transition-colors duration-500 hover:border-white/20 ${className}`}
            style={{
                transformStyle: "preserve-3d",
            }}
            animate={{
                rotateX: isHovered && boundingRef.current ? ((mousePosition.y - boundingRef.current.offsetHeight / 2) / 20) * -1 : 0,
                rotateY: isHovered && boundingRef.current ? (mousePosition.x - boundingRef.current.offsetWidth / 2) / 20 : 0,
            }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
            {/* Dynamic Cursor Gradient Glow */}
            <motion.div
                className={`absolute inset-0 z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-2xl bg-gradient-to-br ${gradientColors} mix-blend-screen`}
                style={{
                    background: isHovered
                        ? `radial-gradient(400px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(139, 92, 246, 0.15), transparent 40%)`
                        : 'transparent',
                }}
            />

            {/* Content wrapper to ensure it stays above the gradient */}
            <div className="relative z-10 w-full h-full" style={{ transform: "translateZ(20px)" }}>
                {children}
            </div>
        </motion.div>
    );
}
