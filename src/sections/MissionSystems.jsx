import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Code2, Layout, Server, Database, Cloud, Wrench, Layers, ArrowRight } from 'lucide-react';
import SkillSystemCard from '../components/SkillSystemCard';
import SystemCoreVisual from '../components/SystemCoreVisual';

export default function MissionSystems() {
  const shouldReduceMotion = useReducedMotion();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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

  // Resume-grounded skill categories data
  const skillSystems = [
    {
      number: "01",
      title: "LANGUAGES",
      icon: Code2,
      skills: ["JavaScript (ES6+)", "TypeScript", "HTML5", "CSS3"],
      accentColor: "#38BDF8",
    },
    {
      number: "02",
      title: "FRONTEND",
      icon: Layout,
      skills: ["React.js", "Redux Toolkit", "SWR", "Tailwind CSS", "React Bootstrap"],
      accentColor: "#818CF8",
    },
    {
      number: "03",
      title: "BACKEND",
      icon: Server,
      skills: ["Node.js", "Express.js", "REST APIs", "JWT Authentication", "RBAC", "WebSockets"],
      accentColor: "#F472B6",
    },
    {
      number: "04",
      title: "DATABASE",
      icon: Database,
      skills: ["MongoDB"],
      accentColor: "#34D399",
    },
    {
      number: "05",
      title: "CLOUD & DEVOPS",
      icon: Cloud,
      skills: ["AWS", "EC2", "S3", "Docker", "CI/CD", "Vercel"],
      accentColor: "#FBBF24",
    },
    {
      number: "06",
      title: "DEVELOPER TOOLS",
      icon: Wrench,
      skills: ["GitHub", "Postman", "VS Code", "MongoDB Compass"],
      accentColor: "#A78BFA",
    },
    {
      number: "07",
      title: "ENGINEERING CONCEPTS",
      icon: Layers,
      skills: ["MVC Architecture", "API Integration", "Performance Optimization", "Responsive Design"],
      accentColor: "#38BDF8",
    },
  ];

  // Flow sequence for Stack In Use footer
  const stackFlow = ["React.js", "Node.js", "MongoDB", "AWS"];

  return (
    <section
      id="systems"
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
              MISSION SYSTEMS
            </span>
          </motion.div>

          <motion.h2 variants={itemVariants} className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-outfit text-white tracking-tight leading-tight">
            Technologies Powering <span className="gradient-text">My Missions</span>
          </motion.h2>

          <motion.p variants={itemVariants} className="text-base sm:text-lg text-gray-300 font-normal">
            The tools and technologies I use to design, build, connect, and deploy modern web applications.
          </motion.p>
        </div>


        {/* MOBILE STACKED VIEW & DESKTOP MULTI-COLUMN GRID */}
        {/* Desktop Grid Layout */}
        <div className="hidden lg:grid lg:grid-cols-3 gap-6 items-stretch">
          {/* Col 1 */}
          <div className="space-y-6">
            <SkillSystemCard {...skillSystems[0]} />
            <SkillSystemCard {...skillSystems[1]} />
          </div>

          {/* Col 2 (Center: System Core + Database) */}
          <div className="space-y-6 flex flex-col justify-between">
            <SystemCoreVisual />
            <SkillSystemCard {...skillSystems[3]} />
          </div>

          {/* Col 3 */}
          <div className="space-y-6">
            <SkillSystemCard {...skillSystems[2]} />
            <SkillSystemCard {...skillSystems[4]} />
          </div>

          {/* Row 2: Remaining Systems 06 & 07 Spanning Bottom */}
          <div className="lg:col-span-3 grid grid-cols-2 gap-6 pt-2">
            <SkillSystemCard {...skillSystems[5]} />
            <SkillSystemCard {...skillSystems[6]} />
          </div>
        </div>

        {/* Mobile / Tablet Vertically Stacked Layout */}
        <div className="lg:hidden flex flex-col gap-6">
          <SystemCoreVisual />
          {skillSystems.map((system) => (
            <SkillSystemCard key={system.number} {...system} />
          ))}
        </div>


        {/* STACK IN USE FOOTER SEQUENCE */}
        <motion.div variants={itemVariants} className="pt-4 border-t border-white/10">
          <div className="p-5 sm:p-6 rounded-2xl glass-card flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#38BDF8]" />
              <span className="font-mono-code text-xs font-bold text-gray-300 uppercase tracking-widest">
                PRIMARY STACK IN USE
              </span>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-2">
              {stackFlow.map((tech, idx) => (
                <React.Fragment key={tech}>
                  <span className="px-3.5 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono-code font-semibold text-white">
                    {tech}
                  </span>
                  {idx < stackFlow.length - 1 && (
                    <ArrowRight className="w-3.5 h-3.5 text-gray-500 shrink-0" />
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
        </motion.div>

      </motion.div>
    </section>
  );
}
