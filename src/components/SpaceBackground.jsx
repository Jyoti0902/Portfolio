import React, { useMemo } from 'react';
import marsImg from '../assets/mars.png';
import metalPlanetImg from '../assets/metal-planet.png';

export default function SpaceBackground() {
  // Generate subtle twinkling stars
  const stars = useMemo(() => {
    const starList = [];
    const count = 50;
    for (let i = 0; i < count; i++) {
      starList.push({
        id: i,
        top: `${(i * 19.3) % 100}%`,
        left: `${(i * 27.7) % 100}%`,
        size: (i % 5 === 0) ? 2.5 : (i % 9 === 0) ? 3 : 1.5,
        duration: 3 + (i % 4),
        delay: (i % 5) * 0.8,
        color: (i % 4 === 0) ? '#38BDF8' : (i % 7 === 0) ? '#818CF8' : '#FFFFFF',
        opacity: 0.2 + ((i % 4) * 0.12)
      });
    }
    return starList;
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden select-none bg-[#070F26]">
      {/* Deep Space Atmosphere Radial Gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(99,102,241,0.18),rgba(7,15,38,1))]" />

      {/* Subtle Ambient Nebulas */}
      <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] max-w-[600px] max-h-[600px] rounded-full bg-[#6366F1]/12 blur-[140px] animate-pulse-glow" />
      <div className="absolute top-[40%] right-[-10%] w-[45vw] h-[45vw] max-w-[550px] max-h-[550px] rounded-full bg-[#38BDF8]/10 blur-[150px] animate-pulse-glow" style={{ animationDelay: '3.5s' }} />

      {/* Floating Planet Accent Assets */}
      <div className="absolute top-[12%] left-[4%] w-24 h-24 sm:w-32 sm:h-32 opacity-20 pointer-events-none animate-float-gentle hidden md:block">
        <img src={metalPlanetImg} alt="" className="w-full h-full object-contain filter drop-shadow-[0_0_20px_rgba(56,189,248,0.2)]" />
      </div>

      <div className="absolute bottom-[10%] right-[3%] w-28 h-28 sm:w-40 sm:h-40 opacity-20 pointer-events-none animate-float-gentle hidden lg:block" style={{ animationDelay: '2.5s' }}>
        <img src={marsImg} alt="" className="w-full h-full object-contain filter drop-shadow-[0_0_25px_rgba(244,114,182,0.2)]" />
      </div>

      {/* Twinkling Stars Layer */}
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
              opacity: star.opacity,
              '--twinkle-duration': `${star.duration}s`,
              '--twinkle-delay': `${star.delay}s`,
            }}
          />
        ))}
      </div>
    </div>
  );
}
