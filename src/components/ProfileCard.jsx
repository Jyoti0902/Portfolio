import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';

export default function ProfileCard({ label, value, icon: Icon, accentColor = '#38BDF8' }) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      whileHover={shouldReduceMotion ? {} : { y: -3 }}
      transition={{ duration: 0.25, ease: 'easeOut' }}
      className="p-5 rounded-2xl glass-card hover:border-white/20 transition-all duration-300 shadow-md group"
    >
      <div className="flex items-center justify-between gap-2 mb-2">
        <span 
          className="font-mono-code text-[11px] font-semibold tracking-wider uppercase flex items-center gap-1.5"
          style={{ color: accentColor }}
        >
          <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: accentColor }} />
          {label}
        </span>
        {Icon && (
          <div 
            className="p-1.5 rounded-lg bg-white/5 border border-white/10"
            style={{ color: accentColor }}
          >
            <Icon className="w-3.5 h-3.5" />
          </div>
        )}
      </div>

      <div className="font-outfit font-semibold text-base sm:text-lg text-white tracking-wide">
        {value}
      </div>
    </motion.div>
  );
}
