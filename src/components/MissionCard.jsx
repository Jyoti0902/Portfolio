import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Rocket } from 'lucide-react';

export default function MissionCard({
  label = "CURRENT MISSION",
  title = "Building scalable and user-focused web experiences.",
  subtitle = "Working across modern frontend and backend technologies to turn ideas into reliable digital products.",
  status = "ACTIVE"
}) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      whileHover={shouldReduceMotion ? {} : { y: -3 }}
      transition={{ duration: 0.25, ease: "easeOut" }}
      className="p-6 sm:p-7 rounded-2xl glass-card border border-white/10 hover:border-white/20 transition-all duration-300 shadow-lg relative overflow-hidden group"
    >
      {/* Soft Ambient Accent Lighting */}
      <div className="absolute -right-10 -bottom-10 w-40 h-40 rounded-full bg-[#6366F1]/10 blur-2xl group-hover:scale-125 transition-transform duration-500 pointer-events-none" />

      {/* Card Header */}
      <div className="flex items-center justify-between gap-3 mb-4 pb-3 border-b border-white/10">
        <div className="flex items-center gap-2">
          <div className="p-1.5 rounded-lg bg-[#6366F1]/15 text-[#38BDF8]">
            <Rocket className="w-4 h-4 text-[#38BDF8]" />
          </div>
          <span className="font-mono-code text-xs font-semibold text-[#38BDF8] tracking-wider uppercase">
            {label}
          </span>
        </div>

        <div className="flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono-code font-medium">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          <span>{status}</span>
        </div>
      </div>

      {/* Main Title Content */}
      <h3 className="font-outfit font-bold text-lg sm:text-xl text-white tracking-tight leading-snug mb-2">
        {title}
      </h3>

      {/* Supporting Text */}
      <p className="text-gray-300 text-sm sm:text-base leading-relaxed font-normal">
        {subtitle}
      </p>
    </motion.div>
  );
}
