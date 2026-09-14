import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import ProjectMissionCard from '../components/ProjectMissionCard';

export default function SelectedMissions() {
  const shouldReduceMotion = useReducedMotion();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
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

  // Resume & prompt supported project data
  const missionsData = [
    {
      number: "01",
      title: "DialysisOnGo",
      category: "Healthcare Booking Platform",
      description: "A healthcare platform designed to help patients search and book dialysis sessions while traveling.",
      capabilities: [
        "Patient search and booking",
        "Multilingual patient workflows",
        "CMS modules",
        "Patient / clinic / admin integration"
      ],
      technologies: ["Next.js", "TypeScript", "PostgreSQL"],
      url: "https://dialysisongo.com/",
      isFeatured: true,
      visualType: "healthcare",
      reverseLayout: false,
    },
    {
      number: "02",
      title: "TraceVenue",
      category: "Event Planning Platform",
      description: "A multi-role event management platform supporting bookings, quotations, vendors, contracts, and real-time workflows.",
      capabilities: [
        "Booking workflows & quotations",
        "User/vendor workflows",
        "Dynamic multi-step forms",
        "Contract workflows & notifications"
      ],
      technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "AWS"],
      url: "https://tracevenue.com/",
      isFeatured: false,
      visualType: "event",
      reverseLayout: false,
    },
    {
      number: "03",
      title: "Sunny Homes Builders CRM",
      category: "Real Estate CRM",
      badgeText: "Australia Client Project",
      description: "An Australia-based real-estate CRM supporting lead, property, and sales workflows.",
      capabilities: [
        "Lead & property management",
        "Sales workflows & dashboards",
        "REST API integration",
        "Dynamic form validation"
      ],
      technologies: ["React.js", ".NET", "SQL", "SWR", "Tailwind CSS"],
      url: "https://crm.sunnyhomes.com.au/",
      isFeatured: false,
      visualType: "realestate",
      reverseLayout: true,
    },
  ];

  return (
    <section
      id="missions"
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
              SELECTED MISSIONS
            </span>
          </motion.div>

          <motion.h2 variants={itemVariants} className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-outfit text-white tracking-tight leading-tight">
            Projects That <span className="gradient-text">Left the Orbit</span>
          </motion.h2>

          <motion.p variants={itemVariants} className="text-base sm:text-lg text-gray-300 font-normal">
            A selection of real-world products and platforms I’ve helped build.
          </motion.p>
        </div>


        {/* MISSION SHOWCASE EDITORIAL LIST */}
        <div className="space-y-10">
          {missionsData.map((mission) => (
            <motion.div key={mission.number} variants={itemVariants}>
              <ProjectMissionCard
                number={mission.number}
                title={mission.title}
                category={mission.category}
                description={mission.description}
                capabilities={mission.capabilities}
                technologies={mission.technologies}
                url={mission.url}
                isFeatured={mission.isFeatured}
                badgeText={mission.badgeText}
                visualType={mission.visualType}
                reverseLayout={mission.reverseLayout}
              />
            </motion.div>
          ))}
        </div>

      </motion.div>
    </section>
  );
}
