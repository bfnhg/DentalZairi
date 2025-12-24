import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface GlowButtonProps {
  children: ReactNode;
  variant?: 'primary' | 'emergency';
  className?: string;
  onClick?: () => void;
}

export function GlowButton({ children, variant = 'primary', className = '', onClick }: GlowButtonProps) {
  const colors = {
    primary: {
      bg: 'bg-[#0F4C5C]',
      hover: 'hover:bg-[#0B3C49]',
      shadow: 'shadow-[0_0_20px_rgba(15,76,92,0.5)]',
      hoverShadow: 'hover:shadow-[0_0_30px_rgba(15,76,92,0.8)]',
    },
    emergency: {
      bg: 'bg-red-600',
      hover: 'hover:bg-red-700',
      shadow: 'shadow-[0_0_20px_rgba(220,38,38,0.5)]',
      hoverShadow: 'hover:shadow-[0_0_30px_rgba(220,38,38,0.8)]',
    },
  };

  const style = colors[variant];

  return (
    <motion.button
      onClick={onClick}
      className={`${style.bg} ${style.hover} ${style.shadow} ${style.hoverShadow} text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 ${className}`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {children}
    </motion.button>
  );
}
