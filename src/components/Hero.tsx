import React from 'react';
import { ArrowRight, ShieldCheck, Zap, Sun, BatteryCharging, MapPin } from 'lucide-react';

interface HeroProps {
  onExploreProducts: () => void;
  onContactUs: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreProducts, onContactUs }) => {
  return (
    <section
      id="hero"
      className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 overflow-hidden bg-gradient-to-b from-[#090B0E] via-[#0D1016] to-[#121620]"
    >
      {/* Dynamic Background Energy Lines & Glows */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
        {/* Ambient Radial Energy Glows */}
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-gradient-to-b from-[#6B911B]/20 via-[#FDBA12]/8 to-transparent rounded-full blur-3xl animate-energy-pulse" />
        <div className="absolute top-1/3 -left-32 w-96 h-96 bg-[#6B911B]/12 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-0 w-[480px] h-[360px] bg-[#8DC624]/10 rounded-full blur-3xl" />

        {/* Subtle Geometric Energy Grid & Agricultural Field Contour Lines */}
        <svg
          className="absolute inset-0 w-full h-full opacity-20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="grid-grad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#6B911B" stopOpacity="0.5" />
              <stop offset="50%" stopColor="#8DC624" stopOpacity="0.2" />
              <stop offset="100%" stopColor="#1E293B" stopOpacity="0.1" />
            </linearGradient>
            <pattern id="solar-grid" width="60" height="60" patternUnits="userSpaceOnUse">
              <path
                d="M 60 0 L 0 0 0 60"
                fill="none"
                stroke="rgba(255, 255, 255, 0.05)"
                strokeWidth="1"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#solar-grid)" />
          
          {/* Subtle Agricultural Field Contour Curve Lines */}
          <path
            d="M -100 450 C 300 350, 700 550, 1600 400"
            fill="none"
            stroke="url(#grid-grad)"
            strokeWidth="1.5"
            strokeDasharray="6 8"
          />
          <path
            d="M -100 520 C 350 420, 800 620, 1600 480"
            fill="none"
            stroke="url(#grid-grad)"
            strokeWidth="1"
            strokeDasharray="4 6"
          />
          <path
            d="M -100 600 C 400 500, 900 700, 1600 580"
            fill="none"
            stroke="url(#grid-grad)"
            strokeWidth="0.75"
          />
        </svg>

        {/* Signature Electric Circuit Pulse Line */}
        <div className="absolute top-[48%] left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#6B911B]/40 to-transparent overflow-hidden">
          <div className="w-48 h-full bg-gradient-to-r from-transparent via-[#A3D634] to-transparent shadow-[0_0_12px_#A3D634] animate-lightning-scan" />
        </div>
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
        {/* Subtle Trust Indicators (Unboxed Text with Separators) */}
        <div className="inline-flex flex-wrap items-center justify-center gap-2 sm:gap-3 text-xs sm:text-sm font-medium text-slate-300 mb-6 border border-white/10 bg-white/[0.04] backdrop-blur-md px-4 py-1.5 rounded-full shadow-inner">
          <span className="flex items-center gap-1.5 text-[#A3D634]">
            <Zap className="w-3.5 h-3.5 fill-[#A3D634]" />
            <span>20+ Years Experience</span>
          </span>
          <span className="text-slate-600 hidden sm:inline" aria-hidden="true">&bull;</span>
          <span className="flex items-center gap-1.5 text-[#8DC624]">
            <ShieldCheck className="w-3.5 h-3.5 text-[#8DC624]" />
            <span>Govt Projects &amp; Zatka Subsidies Available</span>
          </span>
          <span className="text-slate-600 hidden sm:inline" aria-hidden="true">&bull;</span>
          <span className="flex items-center gap-1.5 text-slate-300">
            <MapPin className="w-3.5 h-3.5 text-[#FDBA12]" />
            <span>Best Seller in Gujarat, Maharashtra, Rajasthan, MP, Assam &amp; Odisha</span>
          </span>
        </div>

        {/* Main Headline */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white font-['Outfit'] leading-[1.08] mb-6 max-w-4xl mx-auto">
          POWERING FARMS.{' '}
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#8DC624] via-[#6B911B] to-[#FDBA12] drop-shadow-[0_4px_24px_rgba(107,145,27,0.45)]">
            POWERING INDIA.
          </span>
        </h1>

        {/* Supporting Headline */}
        <p className="text-lg sm:text-xl md:text-2xl font-semibold text-slate-200 mb-4 max-w-3xl mx-auto leading-snug">
          Reliable Batteries, Zatka Machines &amp; Solar Solutions You Can Trust.
        </p>

        {/* Description */}
        <p className="text-sm sm:text-base md:text-lg text-slate-300 max-w-3xl mx-auto mb-10 leading-relaxed font-normal">
          Mahee Enterprise provides all types of batteries, jatka machines, jatka machine ropes, and solar panels for farmers, businesses, and customers across India.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto mb-14">
          <button
            type="button"
            onClick={onExploreProducts}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 text-base font-bold text-white bg-gradient-to-r from-[#6B911B] to-[#557315] hover:from-[#557315] hover:to-[#455D10] rounded-xl shadow-lg shadow-[#6B911B]/30 hover:shadow-xl hover:shadow-[#6B911B]/40 transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#8DC624]"
          >
            <span>Explore Products</span>
            <ArrowRight className="w-5 h-5 text-white/90" />
          </button>

          <button
            type="button"
            onClick={onContactUs}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 text-base font-semibold text-slate-200 hover:text-white bg-white/[0.06] hover:bg-white/[0.12] border border-white/15 rounded-xl backdrop-blur-sm transition-all duration-200 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#6B911B]"
          >
            <span>Contact Us</span>
          </button>
        </div>

        {/* Visual Pillars Indicator Strip */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 max-w-3xl mx-auto pt-6 border-t border-white/10 text-left">
          <div className="flex items-center gap-3 p-3 rounded-xl bg-white/[0.02] border border-white/5">
            <div className="w-10 h-10 rounded-lg bg-[#6B911B]/15 flex items-center justify-center text-[#6B911B] shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-xs uppercase tracking-wider text-slate-400 font-semibold">Agricultural Safety</h3>
              <p className="text-sm font-bold text-white">Zatka Machine Protection</p>
            </div>
          </div>

          <div className="flex items-center gap-3 p-3 rounded-xl bg-white/[0.02] border border-white/5">
            <div className="w-10 h-10 rounded-lg bg-[#FDBA12]/15 flex items-center justify-center text-[#FDBA12] shrink-0">
              <Sun className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-xs uppercase tracking-wider text-slate-400 font-semibold">Clean Energy</h3>
              <p className="text-sm font-bold text-white">High-Yield Solar Panels</p>
            </div>
          </div>

          <div className="flex items-center gap-3 p-3 rounded-xl bg-white/[0.02] border border-white/5">
            <div className="w-10 h-10 rounded-lg bg-[#6B911B]/15 flex items-center justify-center text-[#6B911B] shrink-0">
              <BatteryCharging className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-xs uppercase tracking-wider text-slate-400 font-semibold">Reliable Storage</h3>
              <p className="text-sm font-bold text-white">Heavy-Duty Batteries</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
