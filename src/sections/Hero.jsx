import React, { useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Mail, Sparkles, ChevronDown } from 'lucide-react';
import Button from '../components/Button';

// User's custom assets
import blueRocketImg from '../assets/blue-rocket.png';
import astronautImg from '../assets/astronaut.png';
import astronautCatImg from '../assets/astronaut-cat.png';

export default function Hero() {
  const shouldReduceMotion = useReducedMotion();
  const [activeVisual, setActiveVisual] = useState('rocket'); // 'rocket' | 'astronaut' | 'cat'

  const visualMap = {
    rocket: blueRocketImg,
    astronaut: astronautImg,
    cat: astronautCatImg,
  };

  // Animation variants for initial load
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section
      id="home"
      className="relative min-h-[92vh] lg:min-h-screen pt-28 lg:pt-36 pb-16 flex items-center justify-center overflow-hidden z-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto"
    >
      <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-6 items-center z-10">

        {/* LEFT COLUMN: HERO TEXT CONTENT */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left space-y-6"
        >
          {/* Subtle Eyebrow Pill */}
          <motion.div variants={itemVariants} className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-[#43C6FF] animate-ping" />
            <span className="font-mono-code text-xs text-[#43C6FF] font-semibold tracking-widest uppercase">
              MISSION CONTROL
            </span>
            <span className="text-gray-600">•</span>
            <span className="font-mono-code text-xs text-emerald-400 font-medium">
              AVAILABLE FOR WORK
            </span>
          </motion.div>

          {/* Greeting & Name */}
          <div className="space-y-1">
            <motion.p variants={itemVariants} className="text-base sm:text-xl text-gray-300 font-medium tracking-wide flex items-center justify-center lg:justify-start gap-2">
              <span>👋</span>
              <span>Hello, I'm</span>
            </motion.p>

            <motion.h1 variants={itemVariants} className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-outfit text-white tracking-tight leading-tight">
              Jyoti
              <span className="inline-block text-[#FFD166] text-2xl sm:text-3xl ml-2 animate-bounce">✦</span>
            </motion.h1>
          </div>

          {/* Role Title with Gradient */}
          <motion.div variants={itemVariants}>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold font-outfit tracking-tight">
              <span className="gradient-text">
                Software Engineer
              </span>
            </h2>
          </motion.div>

          {/* Short Bio */}
          <motion.p variants={itemVariants} className="max-w-xl text-base sm:text-lg text-gray-300 leading-relaxed font-normal">
            I build scalable web applications with <span className="text-white font-semibold">React</span>, <span className="text-white font-semibold">Next.js</span> and <span className="text-white font-semibold">Node.js</span> — turning ideas into real-world digital experiences.
          </motion.p>

          {/* Action CTAs */}
          <motion.div variants={itemVariants} className="pt-2 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
            <Button variant="mission" href="#missions" className="w-full sm:w-auto">
              🚀 Explore My Missions
            </Button>

            <Button variant="secondary" href="#contact" className="w-full sm:w-auto">
              View Resume
            </Button>
          </motion.div>

          {/* Social Links */}
          <motion.div variants={itemVariants} className="pt-6 flex items-center justify-center lg:justify-start gap-4 text-gray-400 border-t border-white/10 w-full max-w-lg">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="p-3 rounded-full bg-white/5 border border-white/10 hover:border-[#43C6FF]/50 hover:text-[#43C6FF] transition-all duration-300 hover:scale-110"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
              </svg>
            </a>

            <a
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="p-3 rounded-full bg-white/5 border border-white/10 hover:border-[#FF6FAE]/50 hover:text-[#FF6FAE] transition-all duration-300 hover:scale-110"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.1-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z" />
              </svg>
            </a>

            <a
              href="mailto:contact@jyoti.dev"
              aria-label="Email"
              className="p-3 rounded-full bg-white/5 border border-white/10 hover:border-[#FFD166]/50 hover:text-[#FFD166] transition-all duration-300 hover:scale-110"
            >
              <Mail className="w-5 h-5" />
            </a>

            <div className="ml-auto font-mono-code text-xs text-gray-400 bg-white/5 px-3 py-1.5 rounded-full border border-white/10 hidden sm:block">
              2+ Yrs Experience
            </div>
          </motion.div>

        </motion.div>


        {/* RIGHT COLUMN: BLUE ROCKET HERO SCENE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
          className="lg:col-span-5 relative flex flex-col items-center justify-center z-20 w-full"
        >
          {/* Main Visual Container - Floating Blue Rocket */}
          <div className="relative w-full max-w-[420px] sm:max-w-[480px] lg:max-w-[520px] aspect-square flex items-center justify-center">

            {/* Soft Ambient Radial Light Glow Behind Rocket */}
            <div className="absolute inset-8 rounded-full bg-gradient-to-tr from-[#43C6FF]/40 via-[#6C3BFF]/30 to-[#FF6FAE]/20 blur-3xl animate-pulse-glow" />

            {/* Seamless Floating Rocket Illustration */}
            <motion.div
              animate={shouldReduceMotion ? {} : {
                y: [-14, 14, -14],
                rotate: [-1.5, 1.5, -1.5],
              }}
              transition={{
                duration: 5.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="relative z-10 w-full h-full flex items-center justify-center p-2"
            >
              <img
                src={visualMap[activeVisual]}
                alt="Jyoti Mission Control Blue Rocket Illustration"
                className="w-full h-full object-contain filter drop-shadow-[0_25px_45px_rgba(0,0,0,0.65)]"
              />
            </motion.div>

            {/* Floating Tech Capsules */}
            <motion.div
              animate={shouldReduceMotion ? {} : { y: [6, -6, 6] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-2 left-2 px-3.5 py-1.5 rounded-full bg-[#071A3D]/80 backdrop-blur-md border border-[#43C6FF]/30 text-xs font-mono-code text-[#43C6FF] shadow-xl flex items-center gap-1.5"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#FFD166]" />
              <span>React & Next.js</span>
            </motion.div>

            <motion.div
              animate={shouldReduceMotion ? {} : { y: [-8, 8, -8] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute bottom-4 right-2 px-3.5 py-1.5 rounded-full bg-[#071A3D]/80 backdrop-blur-md border border-[#FF6FAE]/30 text-xs font-mono-code text-[#FF6FAE] shadow-xl flex items-center gap-1.5"
            >
              <span className="w-2 h-2 rounded-full bg-[#FF6FAE] animate-ping"></span>
              <span>Full-Stack Web</span>
            </motion.div>

          </div>

          {/* Interactive Character Switcher Pills */}
          <div className="mt-4 flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md">
            <span className="text-[11px] font-mono-code text-gray-400 mr-1 uppercase">Visual:</span>
            <button
              onClick={() => setActiveVisual('rocket')}
              className={`px-3 py-1 rounded-full text-xs font-medium transition-all ${activeVisual === 'rocket'
                  ? 'bg-[#43C6FF] text-[#071A3D] font-bold shadow-md'
                  : 'text-gray-400 hover:text-white'
                }`}
            >
              Blue Rocket
            </button>
            <button
              onClick={() => setActiveVisual('astronaut')}
              className={`px-3 py-1 rounded-full text-xs font-medium transition-all ${activeVisual === 'astronaut'
                  ? 'bg-[#6C3BFF] text-white font-semibold shadow-md'
                  : 'text-gray-400 hover:text-white'
                }`}
            >
              Astronaut
            </button>
            <button
              onClick={() => setActiveVisual('cat')}
              className={`px-3 py-1 rounded-full text-xs font-medium transition-all ${activeVisual === 'cat'
                  ? 'bg-[#FF6FAE] text-white font-semibold shadow-md'
                  : 'text-gray-400 hover:text-white'
                }`}
            >
              Space Cat
            </button>
          </div>

        </motion.div>

      </div>

      {/* Scroll Down Indicator */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="absolute bottom-4 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 text-gray-400 hover:text-white transition-colors cursor-pointer group z-20"
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
