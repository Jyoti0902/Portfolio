import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { ExternalLink, CheckCircle2, HeartPulse, Calendar, Building2, MapPin, Sparkles } from 'lucide-react';
import TechBadge from './TechBadge';

export default function ProjectMissionCard({
  number,
  title,
  category,
  description,
  capabilities = [],
  technologies = [],
  url,
  isFeatured = false,
  badgeText = null,
  visualType = 'default', // 'healthcare' | 'event' | 'realestate'
  reverseLayout = false
}) {
  const shouldReduceMotion = useReducedMotion();

  // Color mapping per project type
  const accentColorMap = {
    healthcare: '#38BDF8',
    event: '#818CF8',
    realestate: '#F472B6',
    default: '#38BDF8',
  };

  const accentColor = accentColorMap[visualType] || '#38BDF8';

  return (
    <motion.div
      whileHover={shouldReduceMotion ? {} : { y: -4 }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
      className={`relative rounded-3xl glass-card border border-white/10 hover:border-white/20 transition-all duration-300 shadow-xl overflow-hidden group ${
        isFeatured ? 'bg-gradient-to-br from-[#070F26] via-[#0F172A]/80 to-[#070F26] border-[#38BDF8]/30 hover:border-[#38BDF8]/60 shadow-[0_20px_50px_rgba(7,15,38,0.8)]' : ''
      }`}
    >
      {/* Background Soft Glow */}
      <div 
        className="absolute -right-16 -top-16 w-64 h-64 rounded-full blur-3xl opacity-20 group-hover:opacity-35 transition-opacity duration-500 pointer-events-none"
        style={{ backgroundColor: accentColor }}
      />

      <div className={`p-6 sm:p-8 lg:p-10 grid grid-cols-1 ${isFeatured ? 'lg:grid-cols-12' : 'lg:grid-cols-12'} gap-8 lg:gap-10 items-center`}>
        
        {/* TEXT CONTENT COLUMN */}
        <div className={`space-y-6 ${reverseLayout ? 'lg:col-span-6 lg:order-2' : 'lg:col-span-6 lg:order-1'}`}>
          
          {/* Header Badges */}
          <div className="flex flex-wrap items-center gap-2">
            <span className="font-mono-code text-xs font-bold tracking-widest uppercase text-[#38BDF8] px-3 py-1 rounded-full bg-[#38BDF8]/10 border border-[#38BDF8]/20">
              MISSION {number}
            </span>

            {isFeatured && (
              <span className="font-mono-code text-xs font-semibold tracking-wider uppercase text-amber-400 px-3 py-1 rounded-full bg-amber-400/10 border border-amber-400/20 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5" />
                FEATURED MISSION
              </span>
            )}

            {badgeText && (
              <span className="font-mono-code text-xs font-semibold tracking-wider uppercase text-rose-400 px-3 py-1 rounded-full bg-rose-400/10 border border-rose-400/20 flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5" />
                {badgeText}
              </span>
            )}
          </div>

          {/* Title & Category */}
          <div>
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold font-outfit text-white tracking-tight leading-tight group-hover:text-white">
              {title}
            </h3>
            <p className="text-sm sm:text-base font-mono-code font-medium text-[#38BDF8] mt-1">
              {category}
            </p>
          </div>

          {/* Short Description */}
          <p className="text-gray-300 text-sm sm:text-base leading-relaxed font-normal">
            {description}
          </p>

          {/* Key Capabilities Bullet Highlights */}
          {capabilities.length > 0 && (
            <div className="space-y-2 pt-1">
              <span className="text-xs font-mono-code text-gray-400 uppercase tracking-wider block mb-2">
                Key Capabilities
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {capabilities.map((cap, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-gray-300">
                    <CheckCircle2 className="w-4 h-4 text-[#38BDF8] shrink-0 mt-0.5" />
                    <span>{cap}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Technology Tags */}
          <div className="pt-2">
            <span className="text-xs font-mono-code text-gray-400 uppercase tracking-wider block mb-2.5">
              Technology Stack
            </span>
            <div className="flex flex-wrap gap-2">
              {technologies.map((tech) => (
                <TechBadge key={tech} label={tech} />
              ))}
            </div>
          </div>

          {/* External CTA Link */}
          <div className="pt-3">
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-mono-code tracking-wider uppercase font-semibold text-white bg-white/10 border border-white/15 hover:bg-[#38BDF8] hover:text-[#070F26] hover:border-[#38BDF8] transition-all duration-200 shadow-md group/btn"
            >
              <span>Visit Mission</span>
              <ExternalLink className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform duration-200" />
            </a>
          </div>

        </div>

        {/* VISUAL ARTWORK COLUMN */}
        <div className={`relative ${reverseLayout ? 'lg:col-span-6 lg:order-1' : 'lg:col-span-6 lg:order-2'}`}>
          <div className="relative w-full aspect-[4/3] rounded-2xl bg-[#070F26]/90 border border-white/10 p-6 flex flex-col justify-between overflow-hidden group-hover:border-white/20 transition-all duration-300">
            
            {/* Background Ambient Radial Glow inside Card Canvas */}
            <div className="absolute inset-0 bg-gradient-to-tr from-[#6366F1]/10 via-transparent to-[#38BDF8]/10 pointer-events-none" />

            {/* Top Bar UI Mockup Header */}
            <div className="flex items-center justify-between z-10 border-b border-white/10 pb-3">
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
              </div>
              <span className="font-mono-code text-[10px] text-gray-400 uppercase tracking-widest">
                MISSION TELEMETRY • {number}
              </span>
            </div>

            {/* Center Interactive Artwork Concept */}
            <div className="relative z-10 my-auto flex flex-col items-center justify-center text-center space-y-4 py-4">
              {visualType === 'healthcare' && (
                <>
                  <div className="p-4 rounded-2xl bg-[#38BDF8]/10 border border-[#38BDF8]/30 text-[#38BDF8] group-hover:scale-110 transition-transform duration-300">
                    <HeartPulse className="w-10 h-10 animate-pulse" />
                  </div>
                  <div className="space-y-1">
                    <div className="font-outfit font-bold text-lg text-white">Healthcare Booking Node</div>
                    <div className="font-mono-code text-xs text-gray-400">Patient & Clinic Workflows • Multilingual</div>
                  </div>
                </>
              )}

              {visualType === 'event' && (
                <>
                  <div className="p-4 rounded-2xl bg-[#818CF8]/10 border border-[#818CF8]/30 text-[#818CF8] group-hover:scale-110 transition-transform duration-300">
                    <Calendar className="w-10 h-10" />
                  </div>
                  <div className="space-y-1">
                    <div className="font-outfit font-bold text-lg text-white">Event & Venue Management</div>
                    <div className="font-mono-code text-xs text-gray-400">Quotations • Real-Time Notifications</div>
                  </div>
                </>
              )}

              {visualType === 'realestate' && (
                <>
                  <div className="p-4 rounded-2xl bg-[#F472B6]/10 border border-[#F472B6]/30 text-[#F472B6] group-hover:scale-110 transition-transform duration-300">
                    <Building2 className="w-10 h-10" />
                  </div>
                  <div className="space-y-1">
                    <div className="font-outfit font-bold text-lg text-white">Real Estate Lead & Property CRM</div>
                    <div className="font-mono-code text-xs text-gray-400">Australia Client Workflows • Dashboard Analytics</div>
                  </div>
                </>
              )}
            </div>

            {/* Bottom Status Footer Tag */}
            <div className="flex items-center justify-between z-10 pt-3 border-t border-white/10 text-[11px] font-mono-code text-gray-400">
              <span className="truncate max-w-[200px] text-gray-300">{url.replace('https://', '')}</span>
              <span className="text-[#38BDF8] font-medium">DEPLOYED</span>
            </div>

          </div>
        </div>

      </div>
    </motion.div>
  );
}
