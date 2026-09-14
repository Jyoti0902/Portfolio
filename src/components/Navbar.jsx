import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Rocket } from 'lucide-react';

const NAV_LINKS = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Missions', href: '#missions' },
  { name: 'Systems', href: '#systems' },
  { name: 'Mission Log', href: '#mission-log' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
      className="fixed top-4 left-0 right-0 z-50 flex justify-center px-4 pointer-events-auto"
    >
      <nav className={`w-full max-w-5xl transition-all duration-300 rounded-full px-5 py-3 flex items-center justify-between glass-nav ${
        scrolled ? 'border-white/15 shadow-[0_12px_40px_rgba(0,0,0,0.5)]' : 'border-white/10'
      }`}>
        {/* Left: Brand Title */}
        <a href="#home" className="flex items-center gap-3 group rounded-full p-1 focus:outline-none">
          <div className="flex items-center justify-center w-9 h-9 rounded-full bg-[#6366F1]/20 border border-[#6366F1]/30 group-hover:scale-105 transition-transform duration-300">
            <Rocket className="w-4 h-4 text-[#38BDF8] group-hover:rotate-12 transition-transform duration-300" />
          </div>

          <div className="flex items-center gap-2">
            <span className="font-outfit font-bold text-lg text-white tracking-wide">
              JYOTI
            </span>
            <span className="hidden sm:inline-block w-1 h-1 rounded-full bg-[#38BDF8]" />
            <span className="hidden sm:inline-block font-mono-code text-[11px] tracking-wider text-gray-400 uppercase font-medium">
              SOFTWARE ENGINEER
            </span>
          </div>
        </a>

        {/* Right Navigation: Desktop */}
        <div className="hidden lg:flex items-center gap-1">
          {NAV_LINKS.map((link, index) => (
            <a
              key={link.name}
              href={link.href}
              className={`px-4 py-2 rounded-full text-xs font-mono-code tracking-wider uppercase transition-all duration-200 ${
                index === 0
                  ? 'text-white bg-white/10 font-semibold border border-white/10'
                  : 'text-gray-300 hover:text-white hover:bg-white/5'
              }`}
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 rounded-full text-gray-300 hover:text-white hover:bg-white/10 focus:outline-none"
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
        >
          {mobileMenuOpen ? <X className="w-5 h-5 text-white" /> : <Menu className="w-5 h-5 text-[#38BDF8]" />}
        </button>
      </nav>

      {/* Mobile Animated Dropdown Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.96 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="absolute top-18 left-4 right-4 z-40 glass-nav rounded-2xl p-4 border border-white/15 shadow-2xl flex flex-col gap-2 lg:hidden max-w-md mx-auto"
          >
            <div className="flex flex-col gap-1">
              {NAV_LINKS.map((link, idx) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-4 py-2.5 rounded-xl text-sm font-medium transition-colors flex items-center justify-between ${
                    idx === 0
                      ? 'bg-white/10 text-white font-semibold border border-white/10'
                      : 'text-gray-300 hover:bg-white/5 hover:text-white'
                  }`}
                >
                  <span>{link.name}</span>
                  <span className="text-xs text-gray-500 font-mono-code">0{idx + 1}</span>
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
