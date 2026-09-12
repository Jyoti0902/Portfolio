import React, { useState } from 'react';
import { motion } from 'framer-motion';

export default function Button({
  children,
  variant = 'primary', // 'primary' | 'secondary' | 'mission'
  href,
  onClick,
  className = '',
  icon,
  ...props
}) {
  const [isHovered, setIsHovered] = useState(false);

  const baseStyles =
    'relative inline-flex items-center justify-center font-medium rounded-full transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#43C6FF] focus-visible:ring-offset-2 focus-visible:ring-offset-[#071A3D] cursor-pointer select-none';

  if (variant === 'mission') {
    return (
      <a
        href={href || '#missions'}
        onClick={onClick}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className={`${baseStyles} px-7 py-3.5 text-base text-white font-semibold shadow-lg bg-gradient-to-r from-[#6C3BFF] via-[#43C6FF] to-[#6C3BFF] bg-[length:200%_auto] hover:bg-right transition-all duration-500 hover:shadow-[0_0_30px_rgba(67,198,255,0.5)] border border-white/20 active:scale-95 ${className}`}
        {...props}
      >
        <span className="relative z-10 flex items-center gap-2">
          <span className="transition-transform duration-300 transform hover:rotate-12">
            🚀
          </span>
          <span className="transition-all duration-300">
            {isHovered ? 'Launch Mission' : 'Explore My Missions'}
          </span>
          <motion.span
            animate={{ x: isHovered ? 4 : 0 }}
            transition={{ duration: 0.2 }}
            className="inline-block"
          >
            →
          </motion.span>
        </span>
      </a>
    );
  }

  if (variant === 'secondary') {
    return (
      <a
        href={href || '#about'}
        onClick={onClick}
        className={`${baseStyles} px-7 py-3.5 text-base text-[#F8FAFF] font-medium glass-pill hover:bg-white/10 hover:border-white/30 hover:shadow-[0_0_20px_rgba(255,255,255,0.15)] active:scale-95 transition-all duration-300 ${className}`}
        {...props}
      >
        <span className="flex items-center gap-2">
          {children}
        </span>
      </a>
    );
  }

  return (
    <button
      onClick={onClick}
      className={`${baseStyles} px-6 py-3 text-sm text-white font-medium glass-pill hover:bg-white/10 ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
