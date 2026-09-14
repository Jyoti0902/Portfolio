import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function Button({
  children,
  variant = 'primary', // 'primary' | 'secondary' | 'mission'
  href,
  onClick,
  className = '',
  icon: Icon,
  ...props
}) {
  const baseStyles =
    'relative inline-flex items-center justify-center font-medium rounded-full transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#38BDF8] cursor-pointer select-none';

  if (variant === 'mission' || variant === 'primary') {
    const Component = href ? 'a' : 'button';
    return (
      <Component
        href={href}
        onClick={onClick}
        className={`${baseStyles} group px-6 py-3.5 text-sm sm:text-base text-white font-semibold shadow-lg bg-gradient-to-r from-[#6366F1] to-[#38BDF8] hover:shadow-[0_0_25px_rgba(56,189,248,0.4)] border border-white/20 active:scale-98 ${className}`}
        {...props}
      >
        <span className="relative z-10 flex items-center gap-2">
          <span>{children}</span>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
        </span>
      </Component>
    );
  }

  const Component = href ? 'a' : 'button';
  return (
    <Component
      href={href}
      onClick={onClick}
      className={`${baseStyles} px-6 py-3.5 text-sm sm:text-base text-gray-200 font-medium bg-white/5 border border-white/10 hover:bg-white/10 hover:text-white hover:border-white/20 active:scale-98 transition-all duration-200 ${className}`}
      {...props}
    >
      <span className="flex items-center gap-2">
        {children}
      </span>
    </Component>
  );
}
