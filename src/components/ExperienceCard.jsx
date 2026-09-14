import React, { useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Building2, MapPin, Calendar, CheckCircle2, ChevronRight, Radio } from 'lucide-react';
import TechBadge from './TechBadge';

export default function ExperienceCard() {
  const shouldReduceMotion = useReducedMotion();
  const [activeModule, setActiveModule] = useState(0);

  const responsibilities = [
    {
      id: "01",
      title: "Production Web Applications",
      detail: "Building production web applications using React, Next.js, Node.js, Express.js, and MongoDB."
    },
    {
      id: "02",
      title: "Reusable React Architecture",
      detail: "Developing reusable React components, custom hooks, and managing complex application state."
    },
    {
      id: "03",
      title: "REST API Development",
      detail: "Building robust REST APIs and handling client data fetching using TanStack Query and SWR."
    },
    {
      id: "04",
      title: "Authentication & RBAC",
      detail: "Implementing secure JWT authentication, role-based access control (RBAC), and session security."
    },
    {
      id: "05",
      title: "Cloud & Deployment",
      detail: "Working with AWS EC2, S3 storage, Docker containerization, and automated CI/CD workflows."
    },
    {
      id: "06",
      title: "Agile Collaboration",
      detail: "Collaborating closely within cross-functional Agile development teams for continuous delivery."
    }
  ];

  const techStack = [
    "React.js", "Next.js", "Node.js", "Express.js", "MongoDB",
    "REST APIs", "JWT", "RBAC", "AWS", "Docker", "CI/CD"
  ];

  return (
    <motion.div
      whileHover={shouldReduceMotion ? {} : { y: -3 }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
      className="p-6 sm:p-8 rounded-3xl glass-card border border-white/10 hover:border-white/20 transition-all duration-300 shadow-xl relative overflow-hidden group space-y-6"
    >
      {/* Background Soft Glow */}
      <div className="absolute -right-16 -top-16 w-64 h-64 rounded-full bg-[#6366F1]/10 blur-3xl opacity-50 group-hover:opacity-80 transition-opacity duration-500 pointer-events-none" />

      {/* Header Bar */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/10 pb-4">
        <div className="flex items-center gap-2">
          <span className="font-mono-code text-xs font-bold text-[#38BDF8] tracking-widest uppercase px-3 py-1 rounded-full bg-[#38BDF8]/10 border border-[#38BDF8]/20">
            MISSION LOG 01
          </span>
        </div>

        {/* Live Active Mission Badge */}
        <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono-code font-semibold">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <Radio className="w-3.5 h-3.5 animate-pulse" />
          <span>MISSION ACTIVE</span>
        </div>
      </div>

      {/* Main Role & Company Info */}
      <div className="space-y-2">
        <h3 className="text-2xl sm:text-3xl font-extrabold font-outfit text-white tracking-tight">
          Software Engineer
        </h3>

        <div className="flex flex-wrap items-center gap-4 text-sm font-mono-code text-gray-300">
          <span className="flex items-center gap-1.5 text-[#38BDF8] font-semibold">
            <Building2 className="w-4 h-4" />
            Sensation Software Solutions Pvt. Ltd.
          </span>
          <span className="hidden sm:inline text-gray-600">•</span>
          <span className="flex items-center gap-1.5 text-gray-400">
            <MapPin className="w-3.5 h-3.5 text-rose-400" />
            Mohali, Punjab
          </span>
          <span className="hidden sm:inline text-gray-600">•</span>
          <span className="flex items-center gap-1.5 text-amber-400 font-medium">
            <Calendar className="w-3.5 h-3.5" />
            Jan 2024 – Present
          </span>
        </div>
      </div>

      {/* Summary Description */}
      <p className="text-gray-300 text-sm sm:text-base leading-relaxed font-normal">
        Developing production web applications using <span className="text-white font-semibold">React</span>, <span className="text-white font-semibold">Next.js</span>, <span className="text-white font-semibold">Node.js</span>, <span className="text-white font-semibold">Express.js</span>, and <span className="text-white font-semibold">MongoDB</span>. Responsible for building reusable React architectures, REST API integrations, JWT authentication, RBAC, AWS cloud services, Docker containers, and Agile team collaboration.
      </p>

      {/* Mission Responsibilities Modules Grid */}
      <div className="space-y-3 pt-2">
        <div className="text-xs font-mono-code text-gray-400 uppercase tracking-wider">
          MISSION RESPONSIBILITIES
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5">
          {responsibilities.map((mod, idx) => (
            <button
              key={mod.id}
              onClick={() => setActiveModule(idx)}
              className={`p-3 rounded-xl border text-left transition-all duration-200 cursor-pointer ${
                activeModule === idx
                  ? 'bg-white/10 border-[#38BDF8]/50 text-white shadow-md'
                  : 'bg-white/5 border-white/10 text-gray-300 hover:bg-white/10 hover:text-white'
              }`}
            >
              <div className="flex items-center justify-between mb-1">
                <span className="font-mono-code text-[10px] font-bold text-[#38BDF8]">
                  {mod.id}
                </span>
                <ChevronRight className={`w-3.5 h-3.5 transition-transform ${activeModule === idx ? 'rotate-90 text-[#38BDF8]' : 'text-gray-500'}`} />
              </div>
              <div className="font-outfit font-semibold text-xs sm:text-sm">
                {mod.title}
              </div>
            </button>
          ))}
        </div>

        {/* Selected Responsibility Detail Highlight Box */}
        <div className="p-4 rounded-xl bg-white/5 border border-white/10 text-xs sm:text-sm text-gray-200 flex items-start gap-2.5">
          <CheckCircle2 className="w-4 h-4 text-[#38BDF8] shrink-0 mt-0.5" />
          <span>{responsibilities[activeModule].detail}</span>
        </div>
      </div>

      {/* Technology Stack Badges */}
      <div className="pt-2">
        <div className="text-xs font-mono-code text-gray-400 uppercase tracking-wider mb-2.5">
          Technologies Applied
        </div>
        <div className="flex flex-wrap gap-2">
          {techStack.map((tech) => (
            <TechBadge key={tech} label={tech} />
          ))}
        </div>
      </div>
    </motion.div>
  );
}
