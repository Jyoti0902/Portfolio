import React from 'react';
import SpaceBackground from './components/SpaceBackground';
import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import CrewProfile from './sections/CrewProfile';

function App() {
  return (
    <div className="relative min-h-screen bg-[#071A3D] text-[#F8FAFF] selection:bg-[#6C3BFF]/40 selection:text-white font-sans overflow-x-hidden">
      {/* Reusable Space Background Foundation */}
      <SpaceBackground />

      {/* Floating Glassmorphism Navbar */}
      <Navbar />

      {/* Main Sections */}
      <main className="relative z-10">
        <Hero />
        <CrewProfile />
      </main>
    </div>
  );
}

export default App;
