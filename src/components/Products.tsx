import React from 'react';
import { ArrowUpRight, Zap, Sun, BatteryMedium, Check } from 'lucide-react';
import zatkaMachineImg from '../assets/images/jumbo_power_zatka_machine.jpg';
import batteryImg from '../assets/images/mahee_battery_product.jpg';
import solarPanelImg from '../assets/images/solar_panels_1791208462850.jpg';

interface ProductsProps {
  onEnquireProduct: (productName: string) => void;
}

interface ProductItem {
  id: string;
  categoryName: string;
  title: string;
  description: string;
  imageSrc: string;
  icon: React.ReactNode;
  features: string[];
}

export const Products: React.FC<ProductsProps> = ({ onEnquireProduct }) => {
  const products: ProductItem[] = [
    {
      id: 'zatka-machine',
      categoryName: 'Farm Safety & Subsidies',
      title: 'ZATKA MACHINES',
      description:
        'Certified high-impact electric fencing energizers. Government subsidies available for agricultural crop protection.',
      imageSrc: zatkaMachineImg,
      icon: <Zap className="w-5 h-5 text-[#6B911B]" />,
      features: [
        'Government Subsidies & Schemes Available',
        'High-tensile Zatka machine ropes & accessories included',
        'Long-range perimeter defense against wild animals',
        'Direct compatibility with solar panels & batteries',
      ],
    },
    {
      id: 'solar-panel',
      categoryName: 'Solar Solutions',
      title: 'SOLAR PANELS',
      description:
        'All types of high-efficiency solar panels designed for farms, rooftop setups, and government projects.',
      imageSrc: solarPanelImg,
      icon: <Sun className="w-5 h-5 text-[#FDBA12]" />,
      features: [
        'All types of panels & customized capacities',
        'Eligible for government renewable subsidies',
        'High-efficiency monocrystalline solar cells',
        'Tough tempered glass with corrosion-proof frame',
      ],
    },
    {
      id: 'battery',
      categoryName: 'Energy Storage',
      title: 'ALL TYPES OF BATTERIES',
      description:
        'Complete range of heavy-duty batteries for Zatka machines, solar arrays, inverters, and commercial setups.',
      imageSrc: batteryImg,
      icon: <BatteryMedium className="w-5 h-5 text-[#6B911B]" />,
      features: [
        'All types of batteries (Solar, Zatka, Tubular, Inverter)',
        'Extended backup life under continuous heavy load',
        'Low maintenance & rugged field longevity',
        'Best Seller in Gujarat, Maharashtra, Rajasthan, MP, Assam & Odisha',
      ],
    },
  ];

  return (
    <section id="products" className="py-24 bg-[#0D0F14] text-white relative overflow-hidden">
      {/* Subtle Ambient Background Light */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-[#6B911B]/8 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#6B911B] bg-[#6B911B]/15 px-3 py-1 rounded-md mb-3">
            <span>Core Solutions</span>
            <span aria-hidden="true">&bull;</span>
            <span>Farm &amp; Energy</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight font-['Outfit'] mb-4 text-white">
            Our Products
          </h2>
          <p className="text-base sm:text-lg text-slate-400 font-normal">
            Reliable energy and farm-safety solutions for every requirement.
          </p>
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="group relative flex flex-col bg-[#141822] rounded-2xl border border-white/10 hover:border-[#6B911B]/60 transition-all duration-300 transform hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-[#6B911B]/20 overflow-hidden"
            >
              {/* Product Visual Container with Aspect Ratio */}
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#0A0D14] flex items-center justify-center">
                <img
                  src={product.imageSrc}
                  alt={product.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-contain p-2.5 transition-transform duration-500 group-hover:scale-105"
                  onError={(e) => {
                    const target = e.currentTarget;
                    target.style.display = 'none';
                    const fallback = target.nextElementSibling;
                    if (fallback) (fallback as HTMLElement).style.display = 'flex';
                  }}
                />
                {/* Fallback container if image fails */}
                <div className="hidden w-full h-full items-center justify-center bg-gradient-to-br from-[#172033] to-[#0A0D14]">
                  <div className="text-center p-6">
                    <div className="w-14 h-14 mx-auto rounded-xl bg-[#6B911B]/15 flex items-center justify-center text-[#6B911B] mb-3">
                      {product.icon}
                    </div>
                    <span className="text-sm font-semibold text-slate-300">{product.title}</span>
                  </div>
                </div>

                {/* Subtle Image Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#141822]/60 via-transparent to-transparent pointer-events-none" />

                {/* Category Unboxed Label */}
                <div className="absolute top-4 left-4">
                  <span className="text-xs font-semibold uppercase tracking-wider text-white bg-black/60 backdrop-blur-md px-3 py-1 rounded-md border border-white/15">
                    {product.categoryName}
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="flex-1 p-6 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-bold tracking-tight text-white font-['Outfit'] group-hover:text-[#6B911B] transition-colors">
                      {product.title}
                    </h3>
                  </div>

                  <p className="text-sm text-slate-300 leading-relaxed mb-5 font-normal">
                    {product.description}
                  </p>

                  {/* Product Key Points */}
                  <ul className="space-y-2 mb-6 pt-3 border-t border-white/10 text-xs text-slate-400">
                    {product.features.map((feat, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-[#8DC624] shrink-0" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Card CTA Button */}
                <button
                  type="button"
                  onClick={() => onEnquireProduct(product.title)}
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-sm font-semibold text-white bg-white/[0.08] hover:bg-[#6B911B] border border-white/15 hover:border-[#6B911B] shadow-sm transition-all duration-200 cursor-pointer group-hover:shadow-md group-hover:shadow-[#6B911B]/25 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#6B911B]"
                >
                  <span>Enquire Now</span>
                  <ArrowUpRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
