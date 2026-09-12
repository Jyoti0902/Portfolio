import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Mail, Sparkles, Compass, ShieldCheck, ChevronDown } from 'lucide-react';
import Button from '../components/Button';
import astronautImg from '../assets/astronaut.png';

export default function Hero() {
  const shouldReduceMotion = useReducedMotion();

  // Animation variants for smooth initial staggered load
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
    },
  };

  const visualVariants = {
    hidden: { opacity: 0, scale: shouldReduceMotion ? 1 : 0.8, x: shouldReduceMotion ? 0 : 40 },
    visible: {
      opacity: 1,
      scale: 1,
      x: 0,
      transition: { duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.6 },
    },
  };

  return (
    <section 
      id="home"
      className="relative min-h-[92vh] lg:min-h-screen pt-28 lg:pt-32 pb-20 flex items-center justify-center overflow-hidden z-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto"
    >
      {/* BACKGROUND PLANETS matching reference image */}
      
      {/* Top-Left Blue Cratered Planet */}
      <div className="absolute top-[8%] -left-[4%] sm:left-[2%] opacity-90 pointer-events-none z-0">
        <div className="relative w-28 h-28 sm:w-40 sm:h-40 rounded-full bg-gradient-to-br from-[#43C6FF] via-[#1D63B8] to-[#071A3D] shadow-[0_0_40px_rgba(67,198,255,0.4)] overflow-hidden">
          {/* Craters */}
          <div className="absolute top-4 left-6 w-7 h-7 rounded-full bg-[#154687]/60 border border-[#43C6FF]/20" />
          <div className="absolute top-16 left-12 w-10 h-10 rounded-full bg-[#154687]/60 border border-[#43C6FF]/20" />
          <div className="absolute bottom-6 left-5 w-6 h-6 rounded-full bg-[#154687]/60 border border-[#43C6FF]/20" />
        </div>
      </div>

      {/* Top-Right Glowing Purple Saturn Planet */}
      <div className="absolute top-[5%] -right-[6%] sm:right-[1%] opacity-90 pointer-events-none z-0 hidden sm:block">
        <div className="relative w-36 h-36 sm:w-52 sm:h-52 flex items-center justify-center">
          {/* Saturn Body */}
          <div className="w-24 h-24 sm:w-36 sm:h-36 rounded-full bg-gradient-to-tr from-[#6C3BFF] via-[#9D4EDD] to-[#FF6FAE] shadow-[0_0_50px_rgba(108,59,255,0.6)]" />
          {/* Saturn Rings */}
          <div className="absolute w-[160%] h-[40%] rounded-full border-[6px] sm:border-[10px] border-[#C77DFF]/70 rotate-[-25deg] shadow-[0_0_20px_rgba(199,125,255,0.8)]" />
          <div className="absolute w-[175%] h-[45%] rounded-full border-[2px] border-[#E0AAFF]/40 rotate-[-25deg]" />
        </div>
      </div>

      {/* Bottom-Right Purple Moon Surface & Flag Accent */}
      <div className="absolute -bottom-10 right-0 w-72 sm:w-96 h-40 rounded-t-full bg-gradient-to-t from-[#15104A] via-[#3C227A] to-[#6C3BFF]/40 border-t border-purple-400/30 opacity-70 pointer-events-none z-0 hidden lg:block">
        {/* Small Mission Flag */}
        <div className="absolute top-4 left-16 flex flex-col items-center">
          <div className="w-7 h-5 bg-gradient-to-r from-[#6C3BFF] to-[#FF6FAE] rounded-sm flex items-center justify-center text-[10px] shadow-lg">
            <span>🚀</span>
          </div>
          <div className="w-0.5 h-10 bg-white/60" />
        </div>
      </div>


      {/* MAIN HERO CONTENT GRID */}
      <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-6 items-center z-10">
        
        {/* LEFT COLUMN: TEXT CONTENT */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left space-y-6"
        >
          {/* Status Eyebrow Capsule */}
          <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-pill border border-[#43C6FF]/30 shadow-[0_0_15px_rgba(67,198,255,0.15)]">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-400"></span>
            </span>
            <span className="font-mono-code text-xs text-[#43C6FF] font-semibold tracking-wider uppercase">
              MISSION CONTROL
            </span>
            <span className="text-gray-500">•</span>
            <span className="font-mono-code text-xs text-gray-300 tracking-wide hidden sm:inline">
              AVAILABLE FOR NEW MISSIONS
            </span>
          </motion.div>

          {/* Main Greeting & Name */}
          <div className="space-y-1">
            <motion.p variants={itemVariants} className="text-xl sm:text-2xl lg:text-3xl text-gray-200 font-medium tracking-wide flex items-center justify-center lg:justify-start gap-2">
              <span>👋</span>
              <span>Hello, I'm</span>
            </motion.p>
            
            <motion.h1 variants={itemVariants} className="text-5xl sm:text-7xl lg:text-8xl font-extrabold font-outfit text-white tracking-tight leading-[1.05] drop-shadow-md">
              Jyoti
              <span className="inline-block text-[#FFD166] text-3xl sm:text-5xl ml-2 animate-bounce">✦</span>
            </motion.h1>
          </div>

          {/* Primary Role with Gradient */}
          <motion.div variants={itemVariants}>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold font-outfit tracking-tight">
              <span className="gradient-text drop-shadow-[0_0_20px_rgba(108,59,255,0.3)]">
                Software Engineer
              </span>
            </h2>
          </motion.div>

          {/* Short Description */}
          <motion.p variants={itemVariants} className="max-w-xl text-base sm:text-lg lg:text-xl text-gray-300 leading-relaxed font-normal">
            I build scalable web applications with <span className="text-white font-medium">React</span>, <span className="text-white font-medium">Next.js</span> and <span className="text-white font-medium">Node.js</span> — turning ideas into real-world digital experiences.
          </motion.p>

          {/* CTA Buttons Row */}
          <motion.div variants={itemVariants} className="pt-2 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
            <Button variant="mission" href="#missions" className="w-full sm:w-auto">
              🚀 Explore My Missions
            </Button>

            <Button variant="secondary" href="#contact" className="w-full sm:w-auto">
              View Resume
            </Button>
          </motion.div>

          {/* Technical Status & Social Links Bar */}
          <motion.div variants={itemVariants} className="pt-6 flex flex-wrap items-center justify-center lg:justify-start gap-6 text-sm text-gray-400 border-t border-white/10 w-full">
            <div className="flex items-center gap-3">
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noreferrer"
                aria-label="LinkedIn"
                className="p-2.5 rounded-full glass-pill text-gray-300 hover:text-[#43C6FF] hover:border-[#43C6FF]/40 transition-colors"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
                </svg>
              </a>
              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noreferrer"
                aria-label="GitHub"
                className="p-2.5 rounded-full glass-pill text-gray-300 hover:text-[#FF6FAE] hover:border-[#FF6FAE]/40 transition-colors"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.1-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z"/>
                </svg>
              </a>
              <a 
                href="mailto:contact@jyoti.dev" 
                aria-label="Email"
                className="p-2.5 rounded-full glass-pill text-gray-300 hover:text-[#FFD166] hover:border-[#FFD166]/40 transition-colors"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>

            <div className="hidden sm:flex items-center gap-2 font-mono-code text-xs text-gray-400 bg-white/5 px-3 py-1.5 rounded-lg border border-white/5">
              <Compass className="w-3.5 h-3.5 text-[#43C6FF]" />
              <span>ORBIT: EARTH-01</span>
              <span className="text-gray-600">|</span>
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              <span>SYS: NOMINAL</span>
            </div>
          </motion.div>

        </motion.div>


        {/* RIGHT COLUMN: GIRL ASTRONAUT ROCKET ILLUSTRATION */}
        <motion.div
          variants={visualVariants}
          initial="hidden"
          animate="visible"
          className="lg:col-span-5 relative flex items-center justify-center z-20 w-full"
        >
          <div className="relative w-full max-w-[420px] sm:max-w-[480px] lg:max-w-[540px] aspect-square flex items-center justify-center">
            
            {/* Soft Glow Background */}
            <div className="absolute inset-4 rounded-full bg-gradient-to-tr from-[#6C3BFF]/35 via-[#43C6FF]/25 to-[#FF6FAE]/25 blur-3xl animate-pulse-glow" />

            {/* Orbit Lines */}
            <div className="absolute w-[90%] h-[90%] rounded-full border border-white/10 rotate-[-15deg] pointer-events-none" />

            {/* Main Girl Astronaut Sticker Image */}
            <motion.div
              animate={shouldReduceMotion ? {} : {
                y: [-12, 12, -12],
                rotate: [-1.5, 1.5, -1.5],
              }}
              transition={{
                duration: 5.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="relative z-10 w-full h-full flex items-center justify-center"
            >
              <img
                src={astronautImg}
                alt="Jyoti Astronaut Rocket Character Illustration"
                className="w-full h-full object-contain filter drop-shadow-[0_25px_40px_rgba(7,26,61,0.85)]"
              />
            </motion.div>

            {/* Decorative Floating Planet Badges */}
            <motion.div
              animate={shouldReduceMotion ? {} : { y: [8, -8, 8] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              className="absolute -top-1 left-2 glass-pill px-3 py-1.5 rounded-full text-xs font-mono-code text-[#43C6FF] border border-[#43C6FF]/30 shadow-lg flex items-center gap-1.5 z-20"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#FFD166]" />
              <span>React & Next.js</span>
            </motion.div>

            <motion.div
              animate={shouldReduceMotion ? {} : { y: [-10, 10, -10] }}
              transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute -bottom-1 right-2 glass-pill px-3 py-1.5 rounded-full text-xs font-mono-code text-[#FF6FAE] border border-[#FF6FAE]/30 shadow-lg flex items-center gap-1.5 z-20"
            >
              <span className="w-2 h-2 rounded-full bg-[#FF6FAE]"></span>
              <span>2+ Yrs Exp</span>
            </motion.div>

          </div>
        </motion.div>

      </div>

      {/* Scroll Down Indicator */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-3 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 text-gray-400 hover:text-white transition-colors cursor-pointer group z-20"
      >
        <span className="font-mono-code text-[11px] tracking-widest uppercase group-hover:text-[#43C6FF] transition-colors">
          SCROLL DOWN
        </span>
        <motion.div
          animate={shouldReduceMotion ? {} : { y: [0, 6, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="w-4 h-4 text-[#43C6FF]" />
        </motion.div>
      </motion.div>

    </section>
  );
}
