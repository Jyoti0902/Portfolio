import React, { useMemo } from 'react';
import { motion } from 'framer-motion';

export default function SpaceBackground() {
  // Generate deterministic stars for consistency across renders
  const stars = useMemo(() => {
    const starList = [];
    const count = 75; // Optimal star count for crisp visual without noise
    for (let i = 0; i < count; i++) {
      starList.push({
        id: i,
        top: `${(i * 13.7) % 100}%`,
        left: `${(i * 23.3) % 100}%`,
        size: (i % 3 === 0) ? 3 : (i % 5 === 0) ? 4 : 2,
        duration: 2 + (i % 4),
        delay: (i % 5) * 0.7,
        color: (i % 4 === 0) ? '#43C6FF' : (i % 7 === 0) ? '#FF6FAE' : (i % 11 === 0) ? '#FFD166' : '#F8FAFF',
        opacity: 0.3 + ((i % 5) * 0.14)
      });
    }
    return starList;
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden select-none bg-gradient-to-b from-[#071A3D] via-[#0E1543] to-[#15104A]">
      {/* Soft Nebula Glows */}
      <div 
        className="absolute -top-[10%] -left-[10%] w-[50vw] h-[50vw] max-w-[600px] max-h-[600px] rounded-full bg-[#6C3BFF]/20 blur-[130px] animate-pulse-glow" 
      />
      <div 
        className="absolute top-[30%] -right-[10%] w-[55vw] h-[55vw] max-w-[650px] max-h-[650px] rounded-full bg-[#43C6FF]/15 blur-[140px] animate-pulse-glow" 
        style={{ animationDelay: '2.5s' }}
      />
      <div 
        className="absolute -bottom-[10%] left-[20%] w-[45vw] h-[45vw] max-w-[550px] max-h-[550px] rounded-full bg-[#FF6FAE]/15 blur-[130px] animate-pulse-glow" 
        style={{ animationDelay: '4s' }}
      />

      {/* Subtle Space Dust / Particles Grid */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-[#071A3D]/40 to-[#071A3D]" />

      {/* Twinkling Stars */}
      <div className="absolute inset-0">
        {stars.map((star) => (
          <div
            key={star.id}
            className="absolute rounded-full animate-twinkle"
            style={{
              top: star.top,
              left: star.left,
              width: `${star.size}px`,
              height: `${star.size}px`,
              backgroundColor: star.color,
              boxShadow: star.size > 2 ? `0 0 ${star.size * 2}px ${star.color}` : 'none',
              '--twinkle-duration': `${star.duration}s`,
              '--twinkle-delay': `${star.delay}s`,
            }}
          />
        ))}
      </div>

      {/* Distant Vector Planets (Subtle background details) */}
      {/* Top Left Soft Planet */}
      <div className="absolute top-[12%] left-[4%] opacity-20 hidden md:block">
        <svg width="90" height="90" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="50" cy="50" r="35" fill="url(#planet-grad-1)" />
          <ellipse cx="50" cy="50" rx="48" ry="12" stroke="#43C6FF" strokeWidth="2" transform="rotate(-20 50 50)" strokeDasharray="60 30" opacity="0.6" />
          <defs>
            <radialGradient id="planet-grad-1" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(35 35) scale(50)">
              <stop stopColor="#43C6FF" />
              <stop offset="1" stopColor="#15104A" />
            </radialGradient>
          </defs>
        </svg>
      </div>

      {/* Bottom Right Soft Pinkish Planet */}
      <div className="absolute bottom-[10%] right-[3%] opacity-25 hidden md:block">
        <svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="60" cy="60" r="40" fill="url(#planet-grad-2)" />
          <defs>
            <radialGradient id="planet-grad-2" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(45 45) scale(55)">
              <stop stopColor="#FF6FAE" />
              <stop offset="0.7" stopColor="#6C3BFF" />
              <stop offset="1" stopColor="#071A3D" />
            </radialGradient>
          </defs>
        </svg>
      </div>

      {/* Subtle Shooting Star */}
      <div className="absolute top-[15%] right-[25%] pointer-events-none hidden lg:block opacity-60">
        <div className="w-[120px] h-[1.5px] bg-gradient-to-r from-transparent via-[#43C6FF] to-white -rotate-[35deg] animate-shooting-star" />
      </div>
    </div>
  );
}
