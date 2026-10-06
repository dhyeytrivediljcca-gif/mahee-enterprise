import React from 'react';
import { Star, CheckCircle, Quote, Sparkles } from 'lucide-react';
import ownerPhoto from '../assets/images/file_0000000045148211869a758e479a2280.png';

export const OwnerSection: React.FC = () => {
  return (
    <section id="owner" className="py-24 bg-[#0A0D12] text-white relative overflow-hidden">
      {/* Background Energy Glows */}
      <div className="absolute top-1/4 -left-48 w-96 h-96 bg-[#6B911B]/12 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-[#8DC624]/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Pre-title */}
        <div className="text-center md:text-left mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#6B911B] bg-[#6B911B]/15 px-3 py-1 rounded-md mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Leadership &amp; Heritage</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight font-['Outfit'] text-white">
            Meet the Experience Behind Mahee
          </h2>
          <p className="text-base sm:text-lg text-slate-400 mt-2 font-normal">
            Two decades of experience, based in Ahmedabad and trusted by customers across Gujarat and India.
          </p>
        </div>

        {/* Asymmetric Editorial Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Owner Portrait Showcase (5 cols on lg) */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Outer Glow Halo */}
              <div className="absolute -inset-1.5 bg-gradient-to-r from-[#6B911B]/40 via-[#8DC624]/30 to-[#6B911B]/20 rounded-3xl blur-lg opacity-70 group-hover:opacity-100 transition duration-500" />

              {/* Portrait Container */}
              <div className="relative rounded-2xl overflow-hidden border-2 border-white/15 bg-[#131720] shadow-2xl transition-all duration-300 transform hover:scale-[1.015]">
                {/* Photo Element */}
                <div className="relative aspect-[3/4] w-full overflow-hidden bg-slate-800">
                  <img
                    src={ownerPhoto}
                    alt="Mr. Pinak Vyas - Owner of Mahee Jatka Machine Battery"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-top transition-transform duration-700 hover:scale-105"
                  />
                  {/* Subtle Gradient Vignette at Bottom of Photo */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0F131A] via-transparent to-transparent opacity-75" />
                </div>

                {/* Name Card Overlay inside Border */}
                <div className="p-6 bg-gradient-to-t from-[#0F131A] to-[#141924] border-t border-white/10">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-2xl font-bold font-['Outfit'] text-white">
                        Mr. Pinak Vyas
                      </h3>
                      <p className="text-xs uppercase tracking-wider font-semibold text-[#8DC624] mt-0.5">
                        Founder &amp; Managing Director &bull; Ahmedabad, Gujarat
                      </p>
                    </div>
                    <div className="flex items-center gap-1 bg-[#6B911B]/15 border border-[#6B911B]/30 px-3 py-1.5 rounded-lg text-xs font-bold text-[#8DC624]">
                      <Star className="w-3.5 h-3.5 fill-[#8DC624]" />
                      <span>Best Seller</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Biography, Pillars, and Trust Statement (7 cols on lg) */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-4">
              <div className="inline-block text-xs uppercase tracking-widest font-bold text-[#8DC624] bg-[#6B911B]/15 border border-[#6B911B]/30 px-3 py-1 rounded-md">
                20+ Years in the Battery Industry &bull; Ahmedabad
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-['Outfit'] leading-snug">
                Building India's Agricultural Power Security One Farm at a Time
              </h3>

              <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
                Based in Ahmedabad, Gujarat, with over two decades of dedicated experience in the battery field, Mr. Pinak Vyas has built Mahee Enterprise around product knowledge, customer trust, and dependable service.
              </p>

              <p className="text-sm sm:text-base text-slate-400 leading-relaxed font-normal">
                Having witnessed firsthand the evolving energy challenges faced by farmers, farm owners, and enterprise facilities in Gujarat, Maharashtra, and across India, his mission is clear: delivering heavy-duty equipment that withstands power outages, harsh weather, and rigorous daily demands without failure.
              </p>
            </div>

            {/* Key Credibility Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="bg-[#141924] border border-white/10 rounded-xl p-4">
                <div className="text-[#6B911B] font-extrabold text-xl font-['Outfit'] mb-1">
                  Best Seller
                </div>
                <div className="text-xs font-semibold text-slate-300">
                  in 6 Key States
                </div>
                <p className="text-[11px] text-slate-400 mt-1.5">
                  Gujarat, Maharashtra, Rajasthan, Madhya Pradesh, Assam &amp; Odisha.
                </p>
              </div>

              <div className="bg-[#141924] border border-white/10 rounded-xl p-4">
                <div className="text-[#8DC624] font-extrabold text-xl font-['Outfit'] mb-1">
                  Trusted
                </div>
                <div className="text-xs font-semibold text-slate-300">
                  by Customers
                </div>
                <p className="text-[11px] text-slate-400 mt-1.5">
                  Over thousands of satisfied farm owners, dealers, and rural enterprises.
                </p>
              </div>

              <div className="bg-[#141924] border border-white/10 rounded-xl p-4">
                <div className="text-white font-extrabold text-xl font-['Outfit'] mb-1">
                  20+ Years
                </div>
                <div className="text-xs font-semibold text-slate-300">
                  of Experience
                </div>
                <p className="text-[11px] text-slate-400 mt-1.5">
                  Unmatched deep-domain technical insight in energy storage &amp; safety.
                </p>
              </div>
            </div>

            {/* Direct Personal Quote Card with Official Slogan */}
            <div className="relative bg-gradient-to-r from-[#6B911B]/15 via-white/[0.03] to-transparent border-l-4 border-[#6B911B] rounded-r-2xl p-6 sm:p-7 backdrop-blur-sm shadow-xl">
              <Quote className="w-10 h-10 text-[#6B911B]/25 absolute top-4 right-4" />
              <div className="text-xs uppercase tracking-widest font-bold text-[#8DC624] mb-2">
                Our Core Slogan &amp; Promise
              </div>
              <p className="text-base sm:text-lg font-bold italic text-white font-['Outfit'] leading-relaxed">
                &ldquo;Choice of every farmer, genuine partner of long life journey, proudly said Made in India.&rdquo;
              </p>
              <p className="text-xs sm:text-sm text-slate-300 mt-3 leading-relaxed">
                At Mahee Enterprise, we stand firmly behind every battery, Zatka machine, and solar installation with 20+ years of trust and nationwide service.
              </p>
              <div className="mt-4 flex items-center gap-2 text-xs font-bold text-[#8DC624] pt-3 border-t border-white/10">
                <CheckCircle className="w-4 h-4 text-[#8DC624]" />
                <span>Mr. Pinak Vyas &bull; Founder, Mahee Enterprise</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
