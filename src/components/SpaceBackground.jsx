import React, { useMemo } from 'react';
import starChartImg from '../assets/star-chart.png';
import marsImg from '../assets/mars.png';
import metalPlanetImg from '../assets/metal-planet.png';

export default function SpaceBackground() {
  // Generate subtle stars with varied positions, sizes, and delays
  const stars = useMemo(() => {
    const starList = [];
    const count = 65;
    for (let i = 0; i < count; i++) {
      starList.push({
        id: i,
        top: `${(i * 17.3) % 100}%`,
        left: `${(i * 29.1) % 100}%`,
        size: (i % 4 === 0) ? 3 : (i % 7 === 0) ? 4 : 2,
        duration: 2.5 + (i % 4),
        delay: (i % 5) * 0.6,
        color: (i % 3 === 0) ? '#43C6FF' : (i % 5 === 0) ? '#FF6FAE' : (i % 9 === 0) ? '#FFD166' : '#FFFFFF',
        opacity: 0.25 + ((i % 5) * 0.15)
      });
    }
    return starList;
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden select-none bg-[#071A3D]">
      {/* Deep Space Radial Gradients */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(108,59,255,0.25),rgba(7,26,61,1))]" />
      
      {/* Star Chart Background Grid Texture */}
      <div 
        className="absolute inset-0 opacity-15 mix-blend-screen bg-center bg-cover pointer-events-none"
        style={{ backgroundImage: `url(${starChartImg})` }}
      />

      {/* Soft Nebula Ambient Glows */}
      <div className="absolute top-[-10%] left-[-10%] w-[55vw] h-[55vw] max-w-[700px] max-h-[700px] rounded-full bg-[#6C3BFF]/20 blur-[140px] animate-pulse-glow" />
      <div className="absolute top-[35%] right-[-10%] w-[50vw] h-[50vw] max-w-[650px] max-h-[650px] rounded-full bg-[#43C6FF]/15 blur-[150px] animate-pulse-glow" style={{ animationDelay: '3s' }} />
      <div className="absolute bottom-[-10%] left-[25%] w-[45vw] h-[45vw] max-w-[600px] max-h-[600px] rounded-full bg-[#FF6FAE]/15 blur-[140px] animate-pulse-glow" style={{ animationDelay: '5s' }} />

      {/* Floating Real Planet Assets in Space */}
      {/* Top Left Floating Metal Planet */}
      <div className="absolute top-[10%] left-[3%] w-24 h-24 sm:w-36 sm:h-36 opacity-30 pointer-events-none animate-float-gentle hidden md:block">
        <img src={metalPlanetImg} alt="" className="w-full h-full object-contain filter drop-shadow-[0_0_20px_rgba(67,198,255,0.3)]" />
      </div>

      {/* Bottom Right Floating Mars Planet */}
      <div className="absolute bottom-[8%] right-[2%] w-32 h-32 sm:w-48 sm:h-48 opacity-35 pointer-events-none animate-float-gentle hidden lg:block" style={{ animationDelay: '2s' }}>
        <img src={marsImg} alt="" className="w-full h-full object-contain filter drop-shadow-[0_0_30px_rgba(255,111,174,0.3)]" />
      </div>

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
    </div>
  );
}
