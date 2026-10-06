import React, { useEffect, useState, useRef } from 'react';
import { Award, Globe2, ShieldCheck, CheckCircle2 } from 'lucide-react';

export const AboutMahee: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [experienceCount, setExperienceCount] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.25 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let start = 0;
    const end = 20;
    const duration = 1500;
    const stepTime = Math.abs(Math.floor(duration / end));

    const timer = setInterval(() => {
      start += 1;
      setExperienceCount(start);
      if (start >= end) {
        clearInterval(timer);
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [isVisible]);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative py-24 bg-[#F8FAFC] text-slate-900 border-t border-b border-slate-200"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Heading and Story */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#6B911B] bg-[#6B911B]/15 px-3 py-1 rounded-md">
              <ShieldCheck className="w-4 h-4" />
              <span>Established Reliability &bull; Govt Approved &bull; Best Seller</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 font-['Outfit'] leading-tight">
              Power You Can Trust
            </h2>

            <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-normal">
              <strong>Mahee Enterprise</strong> provides all types of batteries, zatka machines, jatka machine ropes, and solar panels for farmers, businesses, and customers across India. As a proven <strong>Best Seller in Gujarat, Maharashtra, Rajasthan, Madhya Pradesh, Assam, and Odisha</strong>, we actively support <strong>Government-related projects &amp; subsidy schemes</strong>, with <strong>Zatka Machine subsidies available</strong>.
            </p>

            <div className="p-4 rounded-xl bg-lime-50/90 border border-[#6B911B]/30 text-slate-800 text-sm font-semibold italic flex items-center gap-2">
              <span className="text-[#6B911B] text-lg">🌾</span>
              <span>&ldquo;Choice of every farmer, genuine partner of long life journey, proudly said Made in India.&rdquo;</span>
            </div>

            {/* Core Values Bullet Proof Points */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#6B911B] shrink-0 mt-0.5" />
                <span className="text-sm font-semibold text-slate-800">
                  Government-related projects &amp; Zatka machine subsidies available
                </span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#6B911B] shrink-0 mt-0.5" />
                <span className="text-sm font-semibold text-slate-800">
                  Best Seller in Gujarat, Maharashtra, Rajasthan, MP, Assam &amp; Odisha
                </span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#6B911B] shrink-0 mt-0.5" />
                <span className="text-sm font-semibold text-slate-800">
                  All types of batteries, solar panels &amp; jatka machine ropes
                </span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#6B911B] shrink-0 mt-0.5" />
                <span className="text-sm font-semibold text-slate-800">
                  100% Made in India agricultural energy security
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: 3 Statistical Impact Cards */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-4">
            {/* Stat Card 1 */}
            <div className="bg-white rounded-2xl p-6 border border-slate-200/90 shadow-sm hover:shadow-md transition-shadow duration-300 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-[#6B911B]/15 to-transparent rounded-bl-full pointer-events-none" />
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#6B911B]/15 flex items-center justify-center text-[#6B911B] shrink-0">
                  <Award className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-['Outfit'] tabular-nums tracking-tight">
                    {experienceCount}+
                  </div>
                  <div className="text-xs uppercase tracking-wider font-semibold text-slate-500 mt-0.5">
                    Years Experience
                  </div>
                </div>
              </div>
              <p className="text-xs text-slate-600 mt-3 pt-3 border-t border-slate-100">
                Over two decades of hands-on battery engineering and energy storage expertise.
              </p>
            </div>

            {/* Stat Card 2 */}
            <div className="bg-white rounded-2xl p-6 border border-slate-200/90 shadow-sm hover:shadow-md transition-shadow duration-300 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-[#FDBA12]/15 to-transparent rounded-bl-full pointer-events-none" />
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#FDBA12]/15 flex items-center justify-center text-amber-600 shrink-0">
                  <Globe2 className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-['Outfit'] tracking-tight">
                    Pan India
                  </div>
                  <div className="text-xs uppercase tracking-wider font-semibold text-slate-500 mt-0.5">
                    Service
                  </div>
                </div>
              </div>
              <p className="text-xs text-slate-600 mt-3 pt-3 border-t border-slate-100">
                Logistics network delivering energy and safety equipment nationwide.
              </p>
            </div>

            {/* Stat Card 3 */}
            <div className="bg-white rounded-2xl p-6 border border-slate-200/90 shadow-sm hover:shadow-md transition-shadow duration-300 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-[#172033]/10 to-transparent rounded-bl-full pointer-events-none" />
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-slate-900/10 flex items-center justify-center text-slate-900 shrink-0">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-['Outfit'] tracking-tight">
                    Trusted
                  </div>
                  <div className="text-xs uppercase tracking-wider font-semibold text-slate-500 mt-0.5">
                    Quality
                  </div>
                </div>
              </div>
              <p className="text-xs text-slate-600 mt-3 pt-3 border-t border-slate-100">
                Tested components delivering consistent performance in extreme field environments.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
