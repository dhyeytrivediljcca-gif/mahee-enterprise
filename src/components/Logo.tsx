import React from 'react';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  showText?: boolean;
}

export const Logo: React.FC<LogoProps> = ({
  className = '',
  size = 'md',
  showText = true,
}) => {
  const heights = {
    sm: 'h-9',
    md: 'h-11',
    lg: 'h-16',
  };

  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      {/* Official Mahee Battery Logo Asset with Fallback Vector Graphic */}
      <div className={`relative ${heights[size]} aspect-square rounded-lg overflow-hidden flex items-center justify-center p-0.5 bg-white shadow-sm ring-1 ring-white/10 shrink-0 group`}>
        <img
          src="/src/assets/images/mahee_battery_logo_1791208689249.jpg"
          alt="Mahee Battery Logo"
          referrerPolicy="no-referrer"
          className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-105"
          onError={(e) => {
            // Elegant SVG fallback if asset fails
            const target = e.currentTarget;
            target.style.display = 'none';
            const fallback = target.nextElementSibling;
            if (fallback) (fallback as HTMLElement).style.display = 'flex';
          }}
        />
        {/* SVG Fallback */}
        <div className="hidden w-full h-full items-center justify-center bg-[#0F1318]">
          <svg viewBox="0 0 100 100" className="w-4/5 h-4/5">
            <path d="M15 85 L15 15 L45 55 L50 48 L28 15 L85 15 L85 85 L65 85 L65 42 L50 62 L35 42 L35 85 Z" fill="#6B911B" />
            <polygon points="52,20 38,55 50,55 46,80 64,45 52,45" fill="#FDBA12" />
          </svg>
        </div>
      </div>

      {showText && (
        <div className="flex flex-col text-left">
          <span className="font-extrabold tracking-tight text-white font-['Outfit'] text-base md:text-lg leading-tight flex items-center gap-1.5">
            MAHEE
            <span className="text-[#6B911B] text-xs font-semibold px-1.5 py-0.5 rounded bg-[#6B911B]/15 border border-[#6B911B]/30 tracking-wider">
              ENTERPRISE
            </span>
          </span>
          <span className="text-[10px] tracking-wider text-slate-400 font-medium uppercase">
            Jatka Machine &bull; Solar &bull; Power
          </span>
        </div>
      )}
    </div>
  );
};
