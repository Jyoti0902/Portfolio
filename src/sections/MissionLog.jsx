import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Code2, Layout, Globe, ShieldCheck, Server, Rocket, Compass, Sparkles } from 'lucide-react';
import ExperienceCard from '../components/ExperienceCard';
import ExperienceHighlight from '../components/ExperienceHighlight';

export default function MissionLog() {
  const shouldReduceMotion = useReducedMotion();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1,
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

  // 5 Action vector highlights based on actual responsibilities
  const highlights = [
    {
      action: "BUILD",
      title: "Production Web Apps",
      description: "Full-stack web applications using React, Next.js, Node.js, and MongoDB.",
      icon: Code2,
      accentColor: "#38BDF8",
    },
    {
      action: "ARCHITECT",
      title: "Reusable React UI",
      description: "Modular React component architecture, custom hooks, and state management.",
      icon: Layout,
      accentColor: "#818CF8",
    },
    {
      action: "CONNECT",
      title: "REST APIs & Data",
      description: "Robust REST API integration using TanStack Query and SWR data handling.",
      icon: Globe,
      accentColor: "#34D399",
    },
    {
      action: "SECURE",
      title: "JWT & RBAC Security",
      description: "Implementing secure authentication, token verification, and role permissions.",
      icon: ShieldCheck,
      accentColor: "#F472B6",
    },
    {
      action: "DEPLOY",
      title: "AWS & Docker CI/CD",
      description: "Deploying cloud infrastructure with AWS EC2/S3, Docker, and CI/CD pipelines.",
      icon: Server,
      accentColor: "#FBBF24",
    },
  ];

  return (
    <section
      id="mission-log"
      className="relative py-20 lg:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto z-10 overflow-hidden"
    >
      {/* Visual Section Transition Divider */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-60px" }}
        className="space-y-12"
      >
        {/* SECTION INTRO HEADER */}
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left space-y-3 max-w-3xl">
          <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10">
            <span className="w-1.5 h-1.5 rounded-full bg-[#38BDF8]" />
            <span className="font-mono-code text-xs font-semibold text-[#38BDF8] tracking-wider uppercase">
              MISSION LOG
            </span>
          </motion.div>

          <motion.h2 variants={itemVariants} className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-outfit text-white tracking-tight leading-tight">
            Experience Beyond <span className="gradient-text">the Launchpad</span>
          </motion.h2>

          <motion.p variants={itemVariants} className="text-base sm:text-lg text-gray-300 font-normal">
            A look at my professional journey building real-world digital products.
          </motion.p>
        </div>


        {/* MAIN LAYOUT: TRAJECTORY ROUTE + EXPERIENCE CARD */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          
          {/* LEFT: SPACECRAFT TRAJECTORY ROUTE CARD (Desktop) */}
          <motion.div variants={itemVariants} className="lg:col-span-4 space-y-6">
            <div className="p-6 rounded-3xl glass-card border border-white/10 space-y-6 relative overflow-hidden">
              <div className="flex items-center gap-2 text-xs font-mono-code text-[#38BDF8] font-bold uppercase tracking-wider">
                <Compass className="w-4 h-4" />
                MISSION TRAJECTORY
              </div>

              {/* Orbital Path Visual */}
              <div className="relative pl-6 border-l-2 border-dashed border-[#38BDF8]/30 space-y-8 my-4">
                {/* Node 1: Start */}
                <div className="relative">
                  <span className="absolute -left-[31px] top-0.5 w-4 h-4 rounded-full bg-[#070F26] border-2 border-gray-500" />
                  <div className="font-mono-code text-xs text-gray-400">FOUNDATION</div>
                  <div className="font-outfit font-semibold text-sm text-gray-200">Full-Stack Development</div>
                </div>

                {/* Node 2: Current Mission Active */}
                <div className="relative">
                  <span className="absolute -left-[31px] top-0.5 w-4 h-4 rounded-full bg-[#38BDF8] border-2 border-white animate-pulse" />
                  <div className="font-mono-code text-xs text-emerald-400 font-bold flex items-center gap-1">
                    <Rocket className="w-3 h-3" />
                    CURRENT MISSION
                  </div>
                  <div className="font-outfit font-extrabold text-base text-white">Software Engineer</div>
                  <div className="font-mono-code text-xs text-gray-300">Sensation Software Solutions</div>
                  <div className="font-mono-code text-[11px] text-amber-400 mt-0.5">Jan 2024 – Present</div>
                </div>
              </div>

              <div className="pt-3 border-t border-white/10 flex items-center gap-2 text-xs font-mono-code text-gray-400">
                <Sparkles className="w-3.5 h-3.5 text-[#38BDF8]" />
                <span>Continuous Product Delivery</span>
              </div>
            </div>
          </motion.div>

          {/* RIGHT: MAIN EXPERIENCE CARD */}
          <motion.div variants={itemVariants} className="lg:col-span-8">
            <ExperienceCard />
          </motion.div>

        </div>


        {/* EXPERIENCE HIGHLIGHTS GRID */}
        <motion.div variants={itemVariants} className="space-y-4 pt-2">
          <div className="flex items-center gap-2 text-xs font-mono-code text-gray-400 uppercase tracking-wider">
            <span className="w-1.5 h-1.5 rounded-full bg-[#38BDF8]" />
            <span>CORE ACTION VECTORS</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {highlights.map((item) => (
              <ExperienceHighlight
                key={item.action}
                action={item.action}
                title={item.title}
                description={item.description}
                icon={item.icon}
                accentColor={item.accentColor}
              />
            ))}
          </div>
        </motion.div>

      </motion.div>
    </section>
  );
}
