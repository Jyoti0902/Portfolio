import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';

export default function SkillSystemCard({
  number,
  title,
  icon: Icon,
  skills = [],
  accentColor = '#38BDF8'
}) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      whileHover={shouldReduceMotion ? {} : { y: -4 }}
      transition={{ duration: 0.25, ease: 'easeOut' }}
      className="p-5 sm:p-6 rounded-2xl glass-card border border-white/10 hover:border-white/20 transition-all duration-300 shadow-md group relative overflow-hidden flex flex-col justify-between"
    >
      {/* Top Accent Gradient Line */}
      <div 
        className="absolute top-0 left-0 right-0 h-1 opacity-60 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          background: `linear-gradient(90deg, ${accentColor} 0%, transparent 100%)`
        }}
      />

      <div>
        {/* System Header */}
        <div className="flex items-center justify-between gap-2 mb-3">
          <span 
            className="font-mono-code text-[11px] font-bold tracking-widest uppercase flex items-center gap-1.5"
            style={{ color: accentColor }}
          >
            <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: accentColor }} />
            SYSTEM {number}
          </span>

          {Icon && (
            <div 
              className="p-1.5 rounded-lg bg-white/5 border border-white/10 group-hover:scale-105 transition-transform duration-300"
              style={{ color: accentColor }}
            >
              <Icon className="w-4 h-4" />
            </div>
          )}
        </div>

        {/* Category Title */}
        <h3 className="font-outfit font-bold text-lg text-white tracking-wide mb-4">
          {title}
        </h3>

        {/* Skill Chips List */}
        <div className="flex flex-wrap gap-2">
          {skills.map((skill) => (
            <span
              key={skill}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-mono-code font-medium bg-white/5 border border-white/10 text-gray-200 hover:text-white hover:border-white/20 hover:bg-white/10 transition-all duration-200"
            >
              <span className="w-1 h-1 rounded-full" style={{ backgroundColor: accentColor }} />
              {skill}
            </span>
          ))}
        </div>
      </div>

      {/* Subtle Status Footer Tag */}
      <div className="mt-5 pt-3 border-t border-white/5 flex items-center justify-between text-[10px] font-mono-code text-gray-400">
        <span>MODULE {number}</span>
        <span className="text-emerald-400 flex items-center gap-1">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          ONLINE
        </span>
      </div>
    </motion.div>
  );
}
