import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';

export default function ExperienceHighlight({
  action,
  title,
  description,
  icon: Icon,
  accentColor = '#38BDF8'
}) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      whileHover={shouldReduceMotion ? {} : { y: -3 }}
      transition={{ duration: 0.2, ease: 'easeOut' }}
      className="p-5 rounded-2xl glass-card border border-white/10 hover:border-white/20 transition-all duration-300 shadow-md group"
    >
      <div className="flex items-center justify-between gap-2 mb-2">
        <span 
          className="font-mono-code text-[11px] font-bold tracking-widest uppercase flex items-center gap-1.5"
          style={{ color: accentColor }}
        >
          <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: accentColor }} />
          {action}
        </span>

        {Icon && (
          <div 
            className="p-1.5 rounded-lg bg-white/5 border border-white/10 group-hover:scale-105 transition-transform duration-200"
            style={{ color: accentColor }}
          >
            <Icon className="w-3.5 h-3.5" />
          </div>
        )}
      </div>

      <div className="font-outfit font-semibold text-base text-white tracking-wide mb-1">
        {title}
      </div>

      <p className="text-xs text-gray-300 font-normal leading-relaxed">
        {description}
      </p>
    </motion.div>
  );
}
