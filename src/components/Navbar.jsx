import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Rocket, Sparkles } from 'lucide-react';

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
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
      className="fixed top-4 left-0 right-0 z-50 flex justify-center px-4 pointer-events-auto"
    >
      <nav className={`w-full max-w-6xl transition-all duration-300 rounded-full px-5 py-3.5 flex items-center justify-between glass-nav ${
        scrolled ? 'shadow-[0_10px_30px_rgba(7,26,61,0.7)] border-white/20' : 'border-white/10'
      }`}>
        {/* Left: Brand Logo & Mission Tag */}
        <a href="#home" className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#43C6FF] rounded-full p-1">
          <div className="relative flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-tr from-[#6C3BFF] to-[#43C6FF] p-0.5 shadow-[0_0_15px_rgba(108,59,255,0.4)] group-hover:scale-105 transition-transform duration-300">
            <div className="w-full h-full bg-[#071A3D] rounded-full flex items-center justify-center">
              <Rocket className="w-5 h-5 text-[#43C6FF] group-hover:rotate-12 transition-transform duration-300" />
            </div>
            <span className="absolute -top-1 -right-1 flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FF6FAE] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-[#FF6FAE]"></span>
            </span>
          </div>

          <div className="flex flex-col text-left">
            <div className="flex items-center gap-2">
              <span className="font-outfit font-bold text-lg text-white tracking-wider">
                JYOTI.OS
              </span>
              <span className="hidden sm:inline-block w-1.5 h-1.5 rounded-full bg-[#43C6FF]"></span>
              <span className="hidden sm:inline-block font-mono-code text-[10px] tracking-widest text-[#43C6FF] uppercase font-semibold bg-[#43C6FF]/10 px-2 py-0.5 rounded-full border border-[#43C6FF]/20">
                MISSION CONTROL
              </span>
            </div>
            <span className="sm:hidden font-mono-code text-[9px] tracking-widest text-[#43C6FF] uppercase font-medium">
              MISSION CONTROL
            </span>
          </div>
        </a>

        {/* Right Navigation: Desktop */}
        <div className="hidden lg:flex items-center gap-1">
          {NAV_LINKS.map((link, index) => (
            <a
              key={link.name}
              href={link.href}
              className={`relative px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                index === 0
                  ? 'text-white bg-white/10 font-semibold border border-white/10 shadow-[0_0_12px_rgba(67,198,255,0.2)]'
                  : 'text-gray-300 hover:text-white hover:bg-white/5'
              }`}
            >
              {link.name}
              {index === 0 && (
                <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-4 h-0.5 bg-[#43C6FF] rounded-full shadow-[0_0_8px_#43C6FF]"></span>
              )}
            </a>
          ))}
        </div>

        {/* Mobile Hamburger Toggle Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 rounded-full text-gray-200 hover:text-white hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-[#43C6FF]"
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
        >
          {mobileMenuOpen ? <X className="w-6 h-6 text-[#FF6FAE]" /> : <Menu className="w-6 h-6 text-[#43C6FF]" />}
        </button>
      </nav>

      {/* Mobile Animated Dropdown Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="absolute top-20 left-4 right-4 z-40 glass-nav rounded-2xl p-5 border border-white/15 shadow-2xl flex flex-col gap-3 lg:hidden max-w-lg mx-auto"
          >
            <div className="flex items-center justify-between pb-3 border-b border-white/10">
              <span className="font-mono-code text-xs text-[#43C6FF] tracking-wider uppercase font-semibold flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-[#FFD166]" />
                System Navigation
              </span>
              <span className="text-[10px] font-mono-code text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/20">
                ONLINE
              </span>
            </div>

            <div className="flex flex-col gap-1.5">
              {NAV_LINKS.map((link, idx) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-4 py-3 rounded-xl text-base font-medium transition-colors flex items-center justify-between ${
                    idx === 0
                      ? 'bg-gradient-to-r from-[#6C3BFF]/30 to-[#43C6FF]/20 text-white border border-[#43C6FF]/30 font-semibold'
                      : 'text-gray-200 hover:bg-white/10 hover:text-white'
                  }`}
                >
                  <span>{link.name}</span>
                  <span className="text-xs text-gray-400 font-mono-code">0{idx + 1}</span>
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
