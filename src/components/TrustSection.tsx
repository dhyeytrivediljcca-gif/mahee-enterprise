import React from 'react';
import { ArrowDown, ShieldAlert, Sparkles, CheckCircle2 } from 'lucide-react';

interface TrustSectionProps {
  onScrollToContact: () => void;
}

export const TrustSection: React.FC<TrustSectionProps> = ({ onScrollToContact }) => {
  return (
    <section className="relative py-28 bg-gradient-to-b from-[#0F131B] via-[#090C10] to-[#0D1017] text-white overflow-hidden text-center">
      {/* Dynamic Background Energy Wave */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[350px] bg-gradient-to-r from-[#6B911B]/15 via-[#8DC624]/15 to-[#6B911B]/15 rounded-full blur-[140px] animate-energy-pulse" />
        
        {/* Subtle Horizontal Lightning Guide Lines */}
        <div className="absolute top-1/3 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        <div className="absolute bottom-1/3 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#A3D634] bg-[#6B911B]/10 border border-[#6B911B]/20 px-4 py-1.5 rounded-full mb-6">
          <Sparkles className="w-3.5 h-3.5" />
          <span>The Mahee Guarantee</span>
        </div>

        {/* Large Typography Statement */}
        <h2 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight font-['Outfit'] text-white leading-tight mb-6">
          20+ Years.{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6B911B] via-[#8DC624] to-[#A3D634]">
            One Commitment.
          </span>
        </h2>

        {/* Subheading */}
        <p className="text-xl sm:text-2xl lg:text-3xl font-semibold text-slate-300 max-w-3xl mx-auto leading-snug mb-10">
          Reliable power. Genuine guidance. Long-term trust.
        </p>

        {/* 3 Core Trust Pillars */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto mb-12 text-left">
          <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-6 backdrop-blur-sm">
            <CheckCircle2 className="w-6 h-6 text-[#6B911B] mb-3" />
            <h3 className="text-base font-bold text-white font-['Outfit'] mb-1">
              Field-Tested Reliability
            </h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Every unit is tested under real farm power variances before dispatch.
            </p>
          </div>

          <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-6 backdrop-blur-sm">
            <CheckCircle2 className="w-6 h-6 text-[#FDBA12] mb-3" />
            <h3 className="text-base font-bold text-white font-['Outfit'] mb-1">
              Honest Sizing &amp; Capacity
            </h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              No exaggerated wattage or misleading amp-hour figures. Transparent advice only.
            </p>
          </div>

          <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-6 backdrop-blur-sm">
            <CheckCircle2 className="w-6 h-6 text-[#6B911B] mb-3" />
            <h3 className="text-base font-bold text-white font-['Outfit'] mb-1">
              Direct Owner Accountability
            </h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Backed by Mr. Pinak Vyas's two decades of continuous industry service.
            </p>
          </div>
        </div>

        {/* Transition Action to Contact */}
        <button
          type="button"
          onClick={onScrollToContact}
          className="inline-flex items-center gap-2 text-sm font-semibold text-slate-300 hover:text-white transition-colors group cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#6B911B] rounded-lg p-2"
        >
          <span>Connect with Mr. Pinak Vyas for Your Requirements</span>
          <ArrowDown className="w-4 h-4 text-[#6B911B] group-hover:translate-y-1 transition-transform" />
        </button>
      </div>
    </section>
  );
};
