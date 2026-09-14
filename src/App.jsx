import React from 'react';
import SpaceBackground from './components/SpaceBackground';
import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import CrewProfile from './sections/CrewProfile';
import SelectedMissions from './sections/SelectedMissions';
import MissionSystems from './sections/MissionSystems';
import MissionLog from './sections/MissionLog';

function App() {
  return (
    <div className="relative min-h-screen bg-[#070F26] text-[#F8FAFC] selection:bg-[#6366F1]/40 selection:text-white font-sans overflow-x-hidden">
      {/* Reusable Space Background Foundation */}
      <SpaceBackground />

      {/* Floating Glassmorphism Navbar */}
      <Navbar />

      {/* Main Sections */}
      <main className="relative z-10">
        <Hero />
        <CrewProfile />
        <SelectedMissions />
        <MissionSystems />
        <MissionLog />
      </main>
    </div>
  );
}

export default App;
