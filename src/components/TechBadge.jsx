import React from 'react';

export default function TechBadge({ label }) {
  return (
    <span className="px-3 py-1 rounded-full text-xs font-mono-code font-medium bg-white/5 border border-white/10 text-gray-300 hover:border-[#38BDF8]/40 hover:text-white hover:bg-[#6366F1]/10 transition-all duration-200">
      {label}
    </span>
  );
}
