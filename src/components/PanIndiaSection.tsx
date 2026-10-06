import React from 'react';
import { Truck, ShieldCheck, Clock, Headphones } from 'lucide-react';

export const PanIndiaSection: React.FC = () => {
  return (
    <section className="py-24 bg-[#0F131B] text-white relative overflow-hidden border-t border-white/5">
      {/* Background Energy Field */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-[#6B911B]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Heading and Narrative */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#6B911B] bg-[#6B911B]/10 px-3 py-1 rounded-md">
              <Truck className="w-4 h-4" />
              <span>Nationwide Reach &bull; Government Approved</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight font-['Outfit'] text-white leading-tight">
              Best Seller Across India
            </h2>

            <p className="text-base sm:text-lg text-slate-300 font-medium">
              Leading supplier in <span className="text-[#FDBA12] font-bold">Gujarat, Maharashtra, Rajasthan, Madhya Pradesh, Assam, and Odisha</span>.
            </p>

            <p className="text-sm sm:text-base text-slate-400 leading-relaxed font-normal">
              From our headquarters in <strong>Ahmedabad, Gujarat</strong>, Mahee Enterprise actively participates in <strong>Government-related projects</strong>, provides <strong>Zatka Machine subsidies</strong>, and supplies all types of heavy-duty batteries, zatka machines, jatka machine ropes, and solar panels with guaranteed safe transit nationwide.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-white/10">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#6B911B]/15 flex items-center justify-center text-[#6B911B] shrink-0 mt-0.5">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">Govt Projects &amp; Subsidies</h4>
                  <p className="text-xs text-slate-400 mt-0.5">Zatka machine subsidy assistance &amp; agro project supply.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#FDBA12]/15 flex items-center justify-center text-[#FDBA12] shrink-0 mt-0.5">
                  <Headphones className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">Direct Guidance</h4>
                  <p className="text-xs text-slate-400 mt-0.5">Technical installation advisory &amp; quick dispatch across India.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Premium Interactive Styled Map & Hub Visual */}
          <div className="lg:col-span-7">
            <div className="relative bg-[#141924] border border-white/10 rounded-3xl p-6 sm:p-8 shadow-2xl overflow-hidden group">
              {/* Grid Lines Overlay */}
              <div className="absolute inset-0 bg-[radial-gradient(#ffffff0a_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />

              {/* India Map Geometric Representation */}
              <div className="relative w-full aspect-[4/3] max-w-lg mx-auto flex items-center justify-center">
                <svg
                  viewBox="0 0 500 500"
                  className="w-full h-full max-h-[380px] drop-shadow-[0_10px_25px_rgba(0,0,0,0.5)]"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <defs>
                    <linearGradient id="mapGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#1E293B" stopOpacity="0.8" />
                      <stop offset="100%" stopColor="#0F172A" stopOpacity="0.9" />
                    </linearGradient>

                    <linearGradient id="beamGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#6B911B" stopOpacity="0.9" />
                      <stop offset="100%" stopColor="#FDBA12" stopOpacity="0.5" />
                    </linearGradient>

                    <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
                      <feGaussianBlur stdDeviation="4" result="blur" />
                      <feComposite in="SourceGraphic" in2="blur" operator="over" />
                    </filter>
                  </defs>

                  {/* Stylized Abstract India Landmass Contour */}
                  <path
                    d="M230 40 
                       C250 35, 270 50, 275 80 
                       C285 100, 310 110, 320 125 
                       C340 145, 360 160, 390 170 
                       C430 180, 460 190, 470 215 
                       C460 230, 420 235, 380 230 
                       C370 240, 360 260, 340 280 
                       C330 320, 300 370, 260 440 
                       C250 460, 240 460, 235 440 
                       C200 380, 180 320, 170 270 
                       C150 260, 120 250, 95 240 
                       C80 220, 90 200, 120 195 
                       C140 185, 170 175, 185 140 
                       C195 100, 205 60, 230 40 Z"
                    fill="url(#mapGradient)"
                    stroke="rgba(255, 255, 255, 0.15)"
                    strokeWidth="2"
                    strokeLinejoin="round"
                  />

                  {/* Connection Energy Arcs from Gujarat Hub (125, 215) to Key States */}
                  {/* To Rajasthan (175, 140) */}
                  <path
                    d="M 125 215 Q 140 165 175 140"
                    stroke="url(#beamGradient)"
                    strokeWidth="2.5"
                    strokeDasharray="4 4"
                    className="animate-pulse"
                  />
                  {/* To Madhya Pradesh (235, 215) */}
                  <path
                    d="M 125 215 Q 180 205 235 215"
                    stroke="url(#beamGradient)"
                    strokeWidth="2.5"
                    strokeDasharray="4 4"
                    className="animate-pulse"
                  />
                  {/* To Maharashtra (175, 285) */}
                  <path
                    d="M 125 215 Q 145 260 175 285"
                    stroke="url(#beamGradient)"
                    strokeWidth="2.5"
                    strokeDasharray="4 4"
                    className="animate-pulse"
                  />
                  {/* To Odisha (330, 260) */}
                  <path
                    d="M 125 215 Q 225 250 330 260"
                    stroke="url(#beamGradient)"
                    strokeWidth="2"
                    strokeDasharray="4 4"
                  />
                  {/* To Assam (415, 175) */}
                  <path
                    d="M 125 215 Q 270 150 415 175"
                    stroke="url(#beamGradient)"
                    strokeWidth="2"
                    strokeDasharray="4 4"
                  />
                  {/* To South India Network (245, 410) */}
                  <path
                    d="M 125 215 Q 180 320 245 410"
                    stroke="url(#beamGradient)"
                    strokeWidth="1.5"
                    strokeDasharray="4 4"
                  />

                  {/* --- Key State 1: RAJASTHAN (Best Seller) --- */}
                  <g>
                    <circle cx="175" cy="140" r="5" fill="#FDBA12" />
                    <circle cx="175" cy="140" r="12" stroke="#FDBA12" strokeWidth="1" opacity="0.6" className="animate-ping" />
                    <rect x="132" y="112" width="86" height="20" rx="4" fill="#0A0E17" stroke="#FDBA12" strokeWidth="1" opacity="0.9" />
                    <text x="175" y="126" fill="#FDBA12" fontSize="9.5" fontWeight="bold" textAnchor="middle" fontFamily="Outfit, sans-serif">
                      RAJASTHAN
                    </text>
                  </g>

                  {/* --- Key State 2: MADHYA PRADESH (Best Seller) --- */}
                  <g>
                    <circle cx="235" cy="215" r="5" fill="#FDBA12" />
                    <circle cx="235" cy="215" r="12" stroke="#FDBA12" strokeWidth="1" opacity="0.6" className="animate-ping" />
                    <rect x="180" y="187" width="110" height="20" rx="4" fill="#0A0E17" stroke="#FDBA12" strokeWidth="1" opacity="0.9" />
                    <text x="235" y="201" fill="#FDBA12" fontSize="9.5" fontWeight="bold" textAnchor="middle" fontFamily="Outfit, sans-serif">
                      MADHYA PRADESH
                    </text>
                  </g>

                  {/* --- Key State 3: MAHARASHTRA (Best Seller) --- */}
                  <g>
                    <circle cx="175" cy="285" r="5" fill="#FDBA12" />
                    <circle cx="175" cy="285" r="12" stroke="#FDBA12" strokeWidth="1" opacity="0.6" className="animate-ping" />
                    <rect x="125" y="298" width="102" height="20" rx="4" fill="#0A0E17" stroke="#FDBA12" strokeWidth="1" opacity="0.9" />
                    <text x="176" y="312" fill="#FDBA12" fontSize="9.5" fontWeight="bold" textAnchor="middle" fontFamily="Outfit, sans-serif">
                      MAHARASHTRA
                    </text>
                  </g>

                  {/* --- Key State 4: ODISHA (Best Seller) --- */}
                  <g>
                    <circle cx="330" cy="260" r="5" fill="#FDBA12" />
                    <circle cx="330" cy="260" r="11" stroke="#FDBA12" strokeWidth="1" opacity="0.6" className="animate-ping" />
                    <rect x="296" y="274" width="68" height="20" rx="4" fill="#0A0E17" stroke="#FDBA12" strokeWidth="1" opacity="0.9" />
                    <text x="330" y="288" fill="#FDBA12" fontSize="9.5" fontWeight="bold" textAnchor="middle" fontFamily="Outfit, sans-serif">
                      ODISHA
                    </text>
                  </g>

                  {/* --- Key State 5: ASSAM (Best Seller) --- */}
                  <g>
                    <circle cx="415" cy="175" r="5" fill="#FDBA12" />
                    <circle cx="415" cy="175" r="12" stroke="#FDBA12" strokeWidth="1" opacity="0.6" className="animate-ping" />
                    <rect x="382" y="147" width="66" height="20" rx="4" fill="#0A0E17" stroke="#FDBA12" strokeWidth="1" opacity="0.9" />
                    <text x="415" y="161" fill="#FDBA12" fontSize="9.5" fontWeight="bold" textAnchor="middle" fontFamily="Outfit, sans-serif">
                      ASSAM
                    </text>
                  </g>

                  {/* South Complementary Point */}
                  <circle cx="245" cy="410" r="4" fill="#64748B" opacity="0.7" />

                  {/* --- Central Hub: GUJARAT (HQ & Best Seller) --- */}
                  <g filter="url(#glow)">
                    <circle cx="125" cy="215" r="9" fill="#6B911B" />
                    <circle cx="125" cy="215" r="20" stroke="#6B911B" strokeWidth="2" opacity="0.8" className="animate-ping" />
                    <circle cx="125" cy="215" r="4" fill="#FFFFFF" />
                  </g>

                  {/* Gujarat Label Tag */}
                  <rect x="42" y="244" width="166" height="26" rx="6" fill="#0D1117" stroke="#6B911B" strokeWidth="1.5" />
                  <text x="125" y="261" fill="#FFFFFF" fontSize="10.5" fontWeight="bold" textAnchor="middle" fontFamily="Outfit, sans-serif">
                    AHMEDABAD, GUJARAT (HQ)
                  </text>
                </svg>
              </div>

              {/* Best Seller State Chips */}
              <div className="mt-4 pt-4 border-t border-white/10">
                <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-2">
                  Best Seller States:
                </div>
                <div className="flex flex-wrap gap-2">
                  {['Ahmedabad, Gujarat (HQ)', 'Maharashtra', 'Rajasthan', 'Madhya Pradesh', 'Assam', 'Odisha'].map((st) => (
                    <span
                      key={st}
                      className="px-2.5 py-1 rounded-md text-xs font-bold bg-[#6B911B]/15 border border-[#6B911B]/30 text-[#A3D634]"
                    >
                      ⭐ {st}
                    </span>
                  ))}
                </div>
              </div>

              {/* Status Bar Indicator */}
              <div className="mt-4 pt-3 border-t border-white/10 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-300">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#6B911B] animate-pulse" />
                  <span className="font-semibold text-white">Pan-India Subsidies &amp; Project Support</span>
                </div>
                <div className="flex items-center gap-2 text-slate-400">
                  <Clock className="w-3.5 h-3.5 text-[#FDBA12]" />
                  <span>Fast Dispatch to All States</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
