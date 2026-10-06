import React from 'react';
import { Logo } from './Logo';
import { Mail, Phone, Instagram, MapPin, ChevronRight, Shield, Zap } from 'lucide-react';

interface FooterProps {
  onNavigate: (id: string) => void;
  onSelectProduct: (productName: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onSelectProduct }) => {
  const handleScrollTo = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    onNavigate(id);
  };

  const handleProductClick = (e: React.MouseEvent, product: string) => {
    e.preventDefault();
    onSelectProduct(product);
  };

  return (
    <footer className="bg-[#07090C] text-slate-400 pt-16 pb-24 sm:pb-16 border-t border-white/10 relative overflow-hidden">
      {/* Ambient Floor Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-32 bg-[#6B911B]/10 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-white/10">
          {/* Brand Info (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <a
              href="#hero"
              onClick={(e) => handleScrollTo(e, 'hero')}
              className="inline-block focus:outline-none focus-visible:ring-2 focus-visible:ring-[#6B911B] rounded-lg"
            >
              <Logo size="md" />
            </a>

            <p className="text-sm font-semibold text-slate-300">
              Reliable Batteries &bull; Solar Solutions &bull; Farm Safety
            </p>

            <p className="text-xs text-slate-400 leading-relaxed font-normal">
              Empowering farmers, field owners, and rural enterprises across Gujarat, Maharashtra, and all of India with all types of batteries, Zatka electric fencing, jatka machine ropes, and high-performance solar systems.
            </p>

            <div className="flex items-center gap-2 pt-2 text-xs font-semibold text-[#FDBA12]">
              <Shield className="w-4 h-4 text-[#6B911B]" />
              <span>Two Decades of Field Reliability</span>
            </div>
          </div>

          {/* Quick Navigation Links (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white font-['Outfit']">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a
                  href="#hero"
                  onClick={(e) => handleScrollTo(e, 'hero')}
                  className="hover:text-white transition-colors flex items-center gap-1.5"
                >
                  <ChevronRight className="w-3 h-3 text-[#6B911B]" />
                  <span>Home</span>
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  onClick={(e) => handleScrollTo(e, 'about')}
                  className="hover:text-white transition-colors flex items-center gap-1.5"
                >
                  <ChevronRight className="w-3 h-3 text-[#6B911B]" />
                  <span>About Mahee</span>
                </a>
              </li>
              <li>
                <a
                  href="#products"
                  onClick={(e) => handleScrollTo(e, 'products')}
                  className="hover:text-white transition-colors flex items-center gap-1.5"
                >
                  <ChevronRight className="w-3 h-3 text-[#6B911B]" />
                  <span>Products</span>
                </a>
              </li>
              <li>
                <a
                  href="#why-us"
                  onClick={(e) => handleScrollTo(e, 'why-us')}
                  className="hover:text-white transition-colors flex items-center gap-1.5"
                >
                  <ChevronRight className="w-3 h-3 text-[#6B911B]" />
                  <span>Why Choose Us</span>
                </a>
              </li>
              <li>
                <a
                  href="#owner"
                  onClick={(e) => handleScrollTo(e, 'owner')}
                  className="hover:text-white transition-colors flex items-center gap-1.5"
                >
                  <ChevronRight className="w-3 h-3 text-[#6B911B]" />
                  <span>About the Owner</span>
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  onClick={(e) => handleScrollTo(e, 'contact')}
                  className="hover:text-white transition-colors flex items-center gap-1.5"
                >
                  <ChevronRight className="w-3 h-3 text-[#6B911B]" />
                  <span>Contact &amp; Enquiry</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Product Offerings (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white font-['Outfit']">
              Product Offerings
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a
                  href="#contact"
                  onClick={(e) => handleProductClick(e, 'Zatka Machine')}
                  className="hover:text-[#6B911B] transition-colors flex items-center gap-1.5 group"
                >
                  <Zap className="w-3 h-3 text-[#6B911B]" />
                  <span>Zatka Machines (Electric Fencing)</span>
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  onClick={(e) => handleProductClick(e, 'Solar Panel')}
                  className="hover:text-[#FDBA12] transition-colors flex items-center gap-1.5 group"
                >
                  <Zap className="w-3 h-3 text-[#FDBA12]" />
                  <span>Solar Panels &amp; Arrays</span>
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  onClick={(e) => handleProductClick(e, 'Battery')}
                  className="hover:text-[#6B911B] transition-colors flex items-center gap-1.5 group"
                >
                  <Zap className="w-3 h-3 text-[#6B911B]" />
                  <span>Heavy-Duty Farm &amp; Solar Batteries</span>
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  onClick={(e) => handleProductClick(e, 'Other')}
                  className="hover:text-slate-200 transition-colors flex items-center gap-1.5 group"
                >
                  <Zap className="w-3 h-3 text-slate-500" />
                  <span>Complete Energy Kits &amp; Accessories</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Direct Contact & Details (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white font-['Outfit']">
              Contact &amp; Leadership
            </h4>
            <div className="space-y-2.5 text-xs">
              <p className="text-white font-semibold">
                Mr. Pinak Vyas &bull; <span className="text-[#FDBA12] font-normal">Founder</span>
              </p>

              <div className="flex items-start gap-2">
                <Mail className="w-4 h-4 text-[#6B911B] shrink-0 mt-0.5" />
                <a
                  href="mailto:pinak212002@yahoo.co.in"
                  className="font-mono text-slate-300 hover:text-[#FDBA12] transition-colors break-all select-all"
                >
                  pinak212002@yahoo.co.in
                </a>
              </div>

              <div className="flex items-start gap-2">
                <Phone className="w-4 h-4 text-[#FDBA12] shrink-0 mt-0.5" />
                <a
                  href="tel:+919825714164"
                  className="font-mono text-slate-300 hover:text-[#6B911B] transition-colors select-all"
                >
                  +91 98257 14164
                </a>
              </div>

              <div className="flex items-start gap-2">
                <Instagram className="w-4 h-4 text-pink-400 shrink-0 mt-0.5" />
                <a
                  href="https://www.instagram.com/mahee.enterprise"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-slate-300 hover:text-pink-400 transition-colors select-all"
                >
                  @mahee.enterprise
                </a>
              </div>

              <div className="flex items-start gap-2 pt-1">
                <MapPin className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span className="text-slate-300">
                  Gujarat, India &bull; Serving Across India
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Copyright Row */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            &copy; 2026 Mahee Jatka Machine Battery. All Rights Reserved.
          </div>
          <div className="flex items-center gap-4 text-slate-400">
            <span>Batteries</span>
            <span aria-hidden="true">&bull;</span>
            <span>Solar Panels</span>
            <span aria-hidden="true">&bull;</span>
            <span>Zatka Machines</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
