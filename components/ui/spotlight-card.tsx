'use client';

import { useRef, useState, ReactNode } from 'react';
import { motion } from 'framer-motion';

interface SpotlightCardProps {
  children: ReactNode;
  className?: string;
  size?: number;
}

export function SpotlightCard({ children, className = '', size = 300 }: SpotlightCardProps) {
  const divRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!divRef.current) return;
    const rect = divRef.current.getBoundingClientRect();
    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const handleMouseEnter = () => setOpacity(1);
  const handleMouseLeave = () => setOpacity(0);

  return (
    <motion.div
      ref={divRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`relative overflow-hidden ${className}`}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3 }}
    >
      <div
        className="pointer-events-none absolute -inset-px transition duration-300 z-10"
        style={{
          opacity,
          background: `radial-gradient(${size}px circle at ${position.x}px ${position.y}px, rgba(255,255,255,0.1), transparent 40%)`,
        }}
      />
      {children}
    </motion.div>
  );
}

export function FadeIn({ children, delay = 0, className = '' }: { children: ReactNode; delay?: number; className?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function StaggerContainer({ children, className = '', staggerDelay = 0.1 }: { children: ReactNode; className?: string; staggerDelay?: number }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: staggerDelay } }
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({ children, className = '' }: { children: ReactNode; className?: string }) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] } }
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function MagneticButton({ children, className = '' }: { children: ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const { clientX, clientY } = e;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    const x = (clientX - left - width / 2) / 4;
    const y = (clientY - top - height / 2) / 4;
    setPosition({ x, y });
  };

  const handleMouseLeave = () => setPosition({ x: 0, y: 0 });

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 350, damping: 15, mass: 0.5 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function TiltCard({ children, className = '' }: { children: ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [transform, setTransform] = useState('perspective(1000px) rotateX(0deg) rotateY(0deg)');

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -10;
    const rotateY = ((x - centerX) / centerX) * 10;
    setTransform(`perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`);
  };

  const handleMouseLeave = () => setTransform('perspective(1000px) rotateX(0deg) rotateY(0deg)');

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ transform, transition: 'transform 0.1s ease-out' }}
      className={className}
    >
      {children}
    </div>
  );
}

export function AnimatedText({ text, className = '' }: { text: string; className?: string }) {
  return (
    <motion.span initial="hidden" whileInView="visible" viewport={{ once: true }} className={`inline-block ${className}`}>
      {text.split(' ').map((word, i) => (
        <motion.span
          key={i}
          className="inline-block mr-2"
          variants={{
            hidden: { opacity: 0, y: 20, rotateX: -90 },
            visible: { opacity: 1, y: 0, rotateX: 0, transition: { duration: 0.5, delay: i * 0.1 } }
          }}
        >
          {word}
        </motion.span>
      ))}
    </motion.span>
  );
}

export function TextGradient({ children, className = '' }: { children: ReactNode; className?: string }) {
  return (
    <span className={`bg-gradient-to-r from-blue-400 via-violet-400 to-cyan-400 bg-clip-text text-transparent ${className}`}>
      {children}
    </span>
  );
}

export function GlowOnHover({ children, className = '' }: { children: ReactNode; className?: string }) {
  return (
    <motion.div whileHover={{ boxShadow: '0 0 30px rgba(59, 130, 246, 0.3)' }} transition={{ duration: 0.3 }} className={className}>
      {children}
    </motion.div>
  );
}

export function AnimatedBackground() {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
      <div className="absolute inset-0 bg-grid opacity-30" />
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-blue-500/20 rounded-full blur-[128px] animate-pulse" />
      <div className="absolute top-1/3 right-1/4 w-[400px] h-[400px] bg-purple-500/20 rounded-full blur-[100px] animate-pulse delay-1000" />
      <div className="absolute bottom-1/4 left-1/3 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[120px] animate-pulse delay-2000" />
    </div>
  );
}

export function BentoCard({ children, className = '', size = 'normal' }: { children: ReactNode; className?: string; size?: 'small' | 'normal' | 'large' | 'wide' }) {
  const sizeClasses = { small: 'md:col-span-1 md:row-span-1', normal: 'md:col-span-1 md:row-span-2', large: 'md:col-span-2 md:row-span-2', wide: 'md:col-span-2 md:row-span-1' };

  return (
    <SpotlightCard className={`${sizeClasses[size]} ${className}`}>
      <div className="h-full p-6 bg-white/[0.02] backdrop-blur-sm border border-white/[0.08] rounded-3xl hover:bg-white/[0.04] hover:border-white/[0.12] transition-all duration-300">
        {children}
      </div>
    </SpotlightCard>
  );
}

export function FloatingBadge({ children, className = '' }: { children: ReactNode; className?: string }) {
  return (
    <motion.div
      animate={{ y: [0, -5, 0] }}
      transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 ${className}`}
    >
      {children}
    </motion.div>
  );
}

export function SlideIn({ children, direction = 'left', delay = 0, className = '' }: { children: ReactNode; direction?: 'left' | 'right' | 'up' | 'down'; delay?: number; className?: string }) {
  const directions = { left: { x: -100, y: 0 }, right: { x: 100, y: 0 }, up: { x: 0, y: 100 }, down: { x: 0, y: -100 } };

  return (
    <motion.div
      initial={{ opacity: 0, ...directions[direction] }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function ScaleIn({ children, delay = 0, className = '' }: { children: ReactNode; delay?: number; className?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function BlurIn({ children, delay = 0, className = '' }: { children: ReactNode; delay?: number; className?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, filter: 'blur(10px)' }}
      whileInView={{ opacity: 1, filter: 'blur(0px)' }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function PulseGlow({ children, className = '' }: { children: ReactNode; className?: string }) {
  return (
    <motion.div
      animate={{ boxShadow: ['0 0 20px rgba(59, 130, 246, 0.3)', '0 0 40px rgba(59, 130, 246, 0.5)', '0 0 20px rgba(59, 130, 246, 0.3)'] }}
      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function HoverScale({ children, className = '' }: { children: ReactNode; className?: string }) {
  return (
    <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} transition={{ duration: 0.2 }} className={className}>
      {children}
    </motion.div>
  );
}

export function GradientBorder({ children, className = '' }: { children: ReactNode; className?: string }) {
  return (
    <div className={`relative p-[1px] rounded-2xl bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 ${className}`}>
      <div className="bg-[#0a0a0a] rounded-2xl h-full">{children}</div>
    </div>
  );
}

export function MorphingBlob({ className = '' }: { className?: string }) {
  return (
    <motion.div
      animate={{
        borderRadius: ['60% 40% 30% 70% / 60% 30% 70% 40%', '30% 60% 70% 40% / 50% 60% 30% 60%', '50% 60% 30% 60% / 30% 60% 70% 40%', '60% 40% 60% 30% / 70% 30% 50% 60%', '60% 40% 30% 70% / 60% 30% 70% 40%'],
      }}
      transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      className={`bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-cyan-500/20 blur-3xl ${className}`}
    />
  );
}

export function TextReveal({ text, className = '' }: { text: string; className?: string }) {
  return (
    <motion.span initial="hidden" whileInView="visible" viewport={{ once: true }} className={`inline-flex flex-wrap ${className}`}>
      {text.split('').map((char, i) => (
        <motion.span
          key={i}
          variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
          transition={{ duration: 0.5, delay: i * 0.03, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="inline-block"
        >
          {char === ' ' ? '\u00A0' : char}
        </motion.span>
      ))}
    </motion.span>
  );
}

export function WaveText({ text, className = '' }: { text: string; className?: string }) {
  return (
    <motion.span className={`inline-flex ${className}`}>
      {text.split('').map((char, i) => (
        <motion.span
          key={i}
          animate={{ y: [0, -5, 0] }}
          transition={{ duration: 0.5, repeat: Infinity, repeatDelay: 0.5, delay: i * 0.05 }}
          className="inline-block"
        >
          {char === ' ' ? '\u00A0' : char}
        </motion.span>
      ))}
    </motion.span>
  );
}

export function Counter({ value, suffix = '', className = '' }: { value: number; suffix?: string; className?: string }) {
  return (
    <motion.span
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className={className}
    >
      {value}{suffix}
    </motion.span>
  );
}
