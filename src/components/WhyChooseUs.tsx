import React from 'react';
import { Clock, Shield, MapPin, HeartHandshake } from 'lucide-react';

export const WhyChooseUs: React.FC = () => {
  const reasons = [
    {
      index: '01',
      title: '20+ Years of Experience',
      description: 'Decades of leadership in batteries and farm energy systems.',
      detail: 'Deep technical mastery of all types of batteries, solar setups, inverter integration, and field reliability across varied Indian climates.',
      icon: <Clock className="w-5 h-5 text-[#6B911B]" />,
      accentColor: 'border-l-[#6B911B]',
    },
    {
      index: '02',
      title: 'Best Seller in 6 Major States',
      description: 'Top-ranked choice across Gujarat, Maharashtra, Rajasthan, MP, Assam & Odisha.',
      detail: 'A strong grassroots reputation built on long-lasting farmer relationships, authentic advice, and prompt interstate dispatch.',
      icon: <Shield className="w-5 h-5 text-[#8DC624]" />,
      accentColor: 'border-l-[#8DC624]',
    },
    {
      index: '03',
      title: 'Govt Projects & Subsidies',
      description: 'Active partner in agricultural schemes & Zatka machine subsidies.',
      detail: 'We guide farmers and contractors through available state/central subsidies for Zatka electric fencing and renewable solar solutions.',
      icon: <MapPin className="w-5 h-5 text-[#6B911B]" />,
      accentColor: 'border-l-[#6B911B]',
    },
    {
      index: '04',
      title: 'All Types of Batteries & Solar',
      description: 'Comprehensive inventory tailored to exact agricultural demands.',
      detail: 'No oversized promises or mismatched capacities. We supply all types of batteries and solar panels matching your load, acreage, and budget.',
      icon: <HeartHandshake className="w-5 h-5 text-[#8DC624]" />,
      accentColor: 'border-l-[#8DC624]',
    },
  ];

  return (
    <section id="why-us" className="py-24 bg-[#F8FAFC] text-slate-900 border-t border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#6B911B] bg-[#6B911B]/15 px-3 py-1 rounded-md mb-3">
            <span>Our Foundation</span>
            <span aria-hidden="true">&bull;</span>
            <span>Proven Value</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight font-['Outfit'] text-slate-900 leading-tight">
            Why Choose Mahee?
          </h2>
          <p className="text-base sm:text-lg text-slate-600 font-normal mt-3">
            Built on genuine guidance, industry experience, and dependable equipment that protects your investment.
          </p>
        </div>

        {/* 4 Feature Blocks in a Balanced 2x2 or 4-col Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((item) => (
            <div
              key={item.index}
              className={`bg-white rounded-2xl p-7 border border-slate-200/90 border-l-4 ${item.accentColor} shadow-sm hover:shadow-md transition-all duration-200 flex flex-col justify-between`}
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-400 font-mono">
                    {item.index}
                  </span>
                  <div className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center">
                    {item.icon}
                  </div>
                </div>

                <h3 className="text-lg font-bold text-slate-900 font-['Outfit'] mb-2">
                  {item.title}
                </h3>

                <p className="text-sm font-semibold text-[#6B911B] mb-3">
                  {item.description}
                </p>

                <p className="text-xs text-slate-600 leading-relaxed font-normal">
                  {item.detail}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-2 text-xs font-medium text-slate-500">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                <span>Verified Business Standard</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
