/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutMahee } from './components/AboutMahee';
import { Products } from './components/Products';
import { WhyChooseUs } from './components/WhyChooseUs';
import { OwnerSection } from './components/OwnerSection';
import { PanIndiaSection } from './components/PanIndiaSection';
import { TrustSection } from './components/TrustSection';
import { Contact } from './components/Contact';
import { QuickActions } from './components/QuickActions';
import { Footer } from './components/Footer';

export default function App() {
  const [selectedProduct, setSelectedProduct] = useState<string>('Zatka Machine');

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleEnquireProduct = (productName: string) => {
    setSelectedProduct(productName);
    scrollToSection('contact');
  };

  return (
    <div className="min-h-screen bg-[#0C0E12] text-slate-100 flex flex-col font-['Plus_Jakarta_Sans',sans-serif]">
      {/* Sticky Navigation Bar */}
      <Navbar onNavigate={scrollToSection} />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero
          onExploreProducts={() => scrollToSection('products')}
          onContactUs={() => scrollToSection('contact')}
        />

        {/* About Mahee Section (Light/Airy Canvas with Counter Stats) */}
        <AboutMahee />

        {/* Products Section (Dark Canvas with 3 Interactive Product Cards) */}
        <Products onEnquireProduct={handleEnquireProduct} />

        {/* Why Choose Us Section (Crisp Structured Canvas with 4 Pillars) */}
        <WhyChooseUs />

        {/* Owner / About the Owner Section (Editorial Portrait & Story of Mr. Pinak Vyas) */}
        <OwnerSection />

        {/* Pan-India Service Section (Animated Hub & Reach Visualization) */}
        <PanIndiaSection />

        {/* Trust / Experience Transition Section */}
        <TrustSection onScrollToContact={() => scrollToSection('contact')} />

        {/* Contact Section & Form */}
        <Contact
          selectedProduct={selectedProduct}
          onClearSelectedProduct={() => setSelectedProduct('')}
        />
      </main>

      {/* Floating Quick Contact Actions (Mobile Bar & Desktop Floating) */}
      <QuickActions />

      {/* Footer */}
      <Footer
        onNavigate={scrollToSection}
        onSelectProduct={handleEnquireProduct}
      />
    </div>
  );
}
