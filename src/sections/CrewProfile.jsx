import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Terminal, Cpu, Layout, Server } from 'lucide-react';
import ProfileCard from '../components/ProfileCard';
import MissionCard from '../components/MissionCard';

import astronautImg from '../assets/astronaut.png';

export default function CrewProfile({ astronautAsset = astronautImg }) {
  const shouldReduceMotion = useReducedMotion();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.12,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
    },
  };

  const profileCards = [
    {
      label: "ROLE",
      value: "Software Engineer",
      icon: Terminal,
      accentColor: "#38BDF8",
    },
    {
      label: "CORE FOCUS",
      value: "Full-Stack Web Dev",
      icon: Cpu,
      accentColor: "#818CF8",
    },
    {
      label: "FRONTEND",
      value: "React.js / Next.js",
      icon: Layout,
      accentColor: "#F472B6",
    },
    {
      label: "BACKEND",
      value: "Node.js / Express.js",
      icon: Server,
      accentColor: "#FBBF24",
    },
  ];

  const techPills = [
    "React.js",
    "Next.js",
    "JavaScript",
    "TypeScript",
    "Node.js",
    "Express.js",
    "MongoDB",
    "REST APIs",
    "AWS",
    "Docker",
    "Responsive UI",
    "Role-Based Auth",
  ];

  return (
    <section
      id="about"
      className="relative py-20 lg:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto z-10 overflow-hidden"
    >
      {/* Section Transition Line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-60px" }}
        className="space-y-12"
      >
        {/* SECTION HEADER */}
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left space-y-3 max-w-3xl">
          <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10">
            <span className="w-1.5 h-1.5 rounded-full bg-[#38BDF8]" />
            <span className="font-mono-code text-xs font-semibold text-[#38BDF8] tracking-wider uppercase">
              CREW PROFILE
            </span>
          </motion.div>

          <motion.h2 variants={itemVariants} className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-outfit text-white tracking-tight leading-tight">
            Meet the Developer <span className="gradient-text">Behind the Missions</span>
          </motion.h2>

          <motion.p variants={itemVariants} className="text-base sm:text-lg text-gray-300 font-normal">
            Building thoughtful digital experiences, one mission at a time.
          </motion.p>
        </div>


        {/* MAIN COMPOSITION: ABOUT TEXT & ASTRONAUT */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* LEFT: ABOUT / PROFILE CONTENT */}
          <motion.div variants={itemVariants} className="lg:col-span-7 space-y-6 text-center lg:text-left">
            <div className="p-6 sm:p-8 rounded-2xl glass-card space-y-4 text-left">
              <p className="text-lg sm:text-xl font-outfit text-white font-semibold leading-relaxed">
                “I’m <span className="text-[#38BDF8]">Jyoti</span>, a Software Engineer focused on building modern, scalable web applications and intuitive user experiences.”
              </p>
              
              <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                I specialize in developing high-performance full-stack web solutions. From crafting responsive frontend interfaces to architecting robust REST APIs, authentication flows, and database structures, I write clean, maintainable code designed for scale.
              </p>

              <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                Whether deploying cloud services with AWS, containerizing applications with Docker, or refining UI components for seamless user interaction, every project is built with precision and real-world utility in mind.
              </p>

              {/* Technical Capabilities Pills */}
              <div className="pt-4 border-t border-white/10">
                <div className="text-xs font-mono-code text-gray-400 uppercase tracking-wider mb-3">
                  Core Technologies
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {techPills.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 rounded-full text-xs font-mono-code font-medium bg-white/5 border border-white/10 text-gray-300 hover:text-white hover:border-[#38BDF8]/40 transition-all duration-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* RIGHT: 3D ASTRONAUT VISUAL */}
          <motion.div
            variants={itemVariants}
            className="lg:col-span-5 relative flex items-center justify-center w-full"
          >
            <div className="relative w-full max-w-[340px] sm:max-w-[400px] aspect-square flex items-center justify-center">
              {/* Soft Ambient Light Halo */}
              <div className="absolute inset-4 rounded-full bg-gradient-to-tr from-[#6366F1]/20 via-[#38BDF8]/15 to-transparent blur-3xl animate-pulse-glow" />

              {/* Floating Astronaut */}
              <motion.div
                animate={shouldReduceMotion ? {} : {
                  y: [-8, 8, -8],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="relative z-10 w-full h-full flex items-center justify-center p-4"
              >
                <img
                  src={astronautAsset}
                  alt="Jyoti 3D Astronaut Developer"
                  className="w-full h-full object-contain filter drop-shadow-[0_15px_30px_rgba(0,0,0,0.5)]"
                />
              </motion.div>
            </div>
          </motion.div>

        </div>


        {/* PROFILE CARDS GRID */}
        <motion.div variants={itemVariants} className="space-y-4 pt-2">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {profileCards.map((card) => (
              <ProfileCard
                key={card.label}
                label={card.label}
                value={card.value}
                icon={card.icon}
                accentColor={card.accentColor}
              />
            ))}
          </div>
        </motion.div>


        {/* CURRENT MISSION CARD */}
        <motion.div variants={itemVariants}>
          <MissionCard />
        </motion.div>

      </motion.div>
    </section>
  );
}
