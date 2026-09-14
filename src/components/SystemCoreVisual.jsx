import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Cpu, Layers } from 'lucide-react';

export default function SystemCoreVisual() {
  const shouldReduceMotion = useReducedMotion();

  // Key technologies represented around the core
  const coreNodes = [
    { name: 'React.js', pos: 'top-2 left-1/2 -translate-x-1/2', color: '#38BDF8' },
    { name: 'Node.js', pos: 'top-1/4 right-2', color: '#818CF8' },
    { name: 'MongoDB', pos: 'bottom-1/4 right-2', color: '#34D399' },
    { name: 'AWS', pos: 'bottom-2 left-1/2 -translate-x-1/2', color: '#FBBF24' },
    { name: 'Docker', pos: 'top-1/2 left-2 -translate-y-1/2', color: '#60A5FA' },
  ];

  return (
    <div className="relative p-6 sm:p-8 rounded-3xl glass-card border border-[#38BDF8]/30 bg-gradient-to-br from-[#070F26] via-[#0F172A]/90 to-[#070F26] shadow-[0_20px_50px_rgba(7,15,38,0.9)] overflow-hidden flex flex-col items-center justify-center text-center space-y-6 group min-h-[340px]">
      {/* Background Soft Glow */}
      <div className="absolute inset-8 rounded-full bg-gradient-to-tr from-[#6366F1]/20 via-[#38BDF8]/20 to-transparent blur-3xl animate-pulse-glow pointer-events-none" />

      {/* Orbiting Orbital Ring Graphic */}
      <div className="absolute w-64 h-64 sm:w-72 sm:h-72 rounded-full border border-dashed border-[#38BDF8]/20 pointer-events-none animate-spin-slow" style={{ animationDuration: '45s' }} />

      {/* Central Core Icon Header */}
      <div className="relative z-10 space-y-3">
        <div className="inline-flex items-center justify-center p-3 rounded-2xl bg-[#6366F1]/15 border border-[#6366F1]/30 text-[#38BDF8] shadow-lg group-hover:scale-110 transition-transform duration-300">
          <Cpu className="w-8 h-8 text-[#38BDF8] animate-pulse" />
        </div>

        <div className="space-y-1">
          <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-[#38BDF8]/10 border border-[#38BDF8]/20 text-[#38BDF8] font-mono-code text-xs font-bold uppercase tracking-widest">
            <Layers className="w-3 h-3" />
            FULL-STACK ARCHITECTURE
          </div>
          
          <h3 className="font-outfit font-extrabold text-2xl sm:text-3xl text-white tracking-tight pt-1">
            SYSTEM CORE
          </h3>
        </div>

        <p className="text-xs sm:text-sm text-gray-300 max-w-xs font-normal leading-relaxed">
          Building across the frontend, backend, database, and deployment layers.
        </p>
      </div>

      {/* Floating Key Nodes */}
      {!shouldReduceMotion && (
        <div className="absolute inset-0 pointer-events-none">
          {coreNodes.map((node, index) => (
            <motion.div
              key={node.name}
              animate={{
                y: index % 2 === 0 ? [-4, 4, -4] : [4, -4, 4],
              }}
              transition={{
                duration: 4 + index,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className={`absolute ${node.pos} px-2.5 py-1 rounded-full bg-[#070F26]/90 border border-white/10 text-[10px] font-mono-code text-gray-300 shadow-md flex items-center gap-1 hidden sm:flex`}
            >
              <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: node.color }} />
              <span>{node.name}</span>
            </motion.div>
          ))}
        </div>
      )}
    </div>
  );
}
