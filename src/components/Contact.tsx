import React, { useState, useEffect } from 'react';
import { Mail, Phone, Instagram, Send, MapPin, User, CheckCircle2, AlertCircle } from 'lucide-react';

interface ContactProps {
  selectedProduct?: string;
  onClearSelectedProduct?: () => void;
}

interface FormState {
  name: string;
  phone: string;
  email: string;
  product: string;
  message: string;
}

interface FormErrors {
  name?: string;
  phone?: string;
  email?: string;
  message?: string;
}

export const Contact: React.FC<ContactProps> = ({
  selectedProduct,
  onClearSelectedProduct,
}) => {
  const [formData, setFormData] = useState<FormState>({
    name: '',
    phone: '',
    email: '',
    product: 'Zatka Machine',
    message: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    if (selectedProduct) {
      if (selectedProduct.toLowerCase().includes('zatka')) {
        setFormData((prev) => ({ ...prev, product: 'Zatka Machine' }));
      } else if (selectedProduct.toLowerCase().includes('solar')) {
        setFormData((prev) => ({ ...prev, product: 'Solar Panel' }));
      } else if (selectedProduct.toLowerCase().includes('battery')) {
        setFormData((prev) => ({ ...prev, product: 'Battery' }));
      } else {
        setFormData((prev) => ({ ...prev, product: 'Other' }));
      }
    }
  }, [selectedProduct]);

  const validate = (): boolean => {
    const errs: FormErrors = {};

    if (!formData.name.trim()) {
      errs.name = 'Please provide your full name';
    } else if (formData.name.trim().length < 2) {
      errs.name = 'Name must be at least 2 characters';
    }

    if (!formData.phone.trim()) {
      errs.phone = 'Please enter your phone number';
    } else if (!/^[0-9+ -]{8,15}$/.test(formData.phone.trim())) {
      errs.phone = 'Please provide a valid phone number (e.g. 9876543210)';
    }

    if (formData.email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      errs.email = 'Please provide a valid email address';
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    // Simulate brief network submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 600);
  };

  const handleReset = () => {
    setFormData({
      name: '',
      phone: '',
      email: '',
      product: 'Zatka Machine',
      message: '',
    });
    setErrors({});
    setIsSubmitted(false);
    if (onClearSelectedProduct) onClearSelectedProduct();
  };

  return (
    <section id="contact" className="py-24 bg-[#0A0D12] text-white relative overflow-hidden">
      {/* Background Accent Glow */}
      <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-[#6B911B]/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-[400px] h-[400px] bg-[#8DC624]/8 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#6B911B] mb-3">
            <span>Direct Inquiries</span>
            <span aria-hidden="true">&bull;</span>
            <span>Fast Response</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight font-['Outfit'] text-white">
            Let's Power Your Requirement
          </h2>
          <p className="text-base sm:text-lg text-slate-400 mt-3 font-normal">
            Have a requirement for batteries, solar panels or Zatka machines? Get in touch with Mahee.
          </p>
        </div>

        {/* Two-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left Column: Direct Owner & Company Details */}
          <div className="lg:col-span-5 space-y-8">
            <div className="bg-[#121620] border border-white/10 rounded-3xl p-6 sm:p-8 space-y-6">
              <h3 className="text-xl font-bold font-['Outfit'] text-white flex items-center gap-2 pb-4 border-b border-white/10">
                <User className="w-5 h-5 text-[#6B911B]" />
                <span>Contact Details</span>
              </h3>

              {/* Owner Profile Snippet */}
              <div className="space-y-4">
                <div>
                  <span className="text-xs uppercase tracking-wider text-slate-400 font-semibold block">
                    Owner &amp; Managing Director
                  </span>
                  <div className="text-lg font-bold text-white mt-0.5">
                    Mr. Pinak Vyas
                  </div>
                  <p className="text-xs text-[#FDBA12] mt-0.5 font-medium">
                    20+ Years Battery Industry Veteran &bull; Best Seller in Gujarat, Maharashtra, Rajasthan, MP, Assam &amp; Odisha
                  </p>
                </div>

                {/* Email */}
                <div className="flex items-start gap-3.5 pt-2">
                  <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#6B911B] shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-medium text-slate-400">Email Address</span>
                    <a
                      href="mailto:pinak212002@yahoo.co.in"
                      className="text-sm font-semibold text-slate-200 hover:text-[#FDBA12] transition-colors break-all select-all font-mono block"
                    >
                      pinak212002@yahoo.co.in
                    </a>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-3.5 pt-2">
                  <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#FDBA12] shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-medium text-slate-400">Direct Phone / Call</span>
                    <a
                      href="tel:+919825714164"
                      className="text-sm font-semibold text-slate-200 hover:text-[#6B911B] transition-colors select-all font-mono block"
                    >
                      +91 98257 14164
                    </a>
                  </div>
                </div>

                {/* Instagram */}
                <div className="flex items-start gap-3.5 pt-2">
                  <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-pink-500 shrink-0">
                    <Instagram className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-medium text-slate-400">Instagram Handle</span>
                    <a
                      href="https://www.instagram.com/mahee.enterprise"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-semibold text-slate-200 hover:text-pink-400 transition-colors select-all font-mono block"
                    >
                      @mahee.enterprise
                    </a>
                  </div>
                </div>

                {/* Base Location */}
                <div className="flex items-start gap-3.5 pt-2">
                  <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-emerald-400 shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-medium text-slate-400">Base of Operations</span>
                    <div className="text-sm font-semibold text-slate-200">
                      Gujarat, India &bull; Serving Across All States
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Professional Enquiry Form */}
          <div className="lg:col-span-7">
            <div className="bg-[#121620] border border-white/10 rounded-3xl p-6 sm:p-10 shadow-xl">
              {isSubmitted ? (
                <div className="text-center py-10 space-y-5 animate-fade-in">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto border border-emerald-500/30">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold font-['Outfit'] text-white">
                    Enquiry Received Successfully!
                  </h3>
                  <p className="text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
                    Thank you, <span className="font-semibold text-white">{formData.name}</span>. Your requirement for{' '}
                    <span className="text-[#6B911B] font-semibold">{formData.product}</span> has been noted. Mr. Pinak Vyas or our senior team member will reach out to you shortly at{' '}
                    <span className="font-semibold text-white">{formData.phone}</span>.
                  </p>
                  <div className="pt-4">
                    <button
                      type="button"
                      onClick={handleReset}
                      className="px-6 py-2.5 rounded-xl text-sm font-semibold text-white bg-white/10 hover:bg-white/15 border border-white/20 transition-colors cursor-pointer"
                    >
                      Submit Another Requirement
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-5">
                  <div className="flex items-center justify-between pb-3 border-b border-white/10">
                    <h3 className="text-xl font-bold font-['Outfit'] text-white">
                      Product &amp; Solution Enquiry
                    </h3>
                    <span className="text-xs text-slate-400">* Required fields</span>
                  </div>

                  {/* Name Input */}
                  <div>
                    <label htmlFor="name" className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5">
                      Your Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      value={formData.name}
                      onChange={(e) => {
                        setFormData({ ...formData, name: e.target.value });
                        if (errors.name) setErrors({ ...errors, name: undefined });
                      }}
                      placeholder="e.g. Ramesh Patel"
                      className={`w-full bg-[#0D1017] border ${
                        errors.name ? 'border-red-500 ring-1 ring-red-500' : 'border-white/15 focus:border-[#6B911B]'
                      } rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none transition-colors`}
                    />
                    {errors.name && (
                      <p className="flex items-center gap-1 text-xs text-red-400 mt-1">
                        <AlertCircle className="w-3.5 h-3.5" />
                        <span>{errors.name}</span>
                      </p>
                    )}
                  </div>

                  {/* Phone & Email Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="phone" className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        value={formData.phone}
                        onChange={(e) => {
                          setFormData({ ...formData, phone: e.target.value });
                          if (errors.phone) setErrors({ ...errors, phone: undefined });
                        }}
                        placeholder="e.g. 98765 43210"
                        className={`w-full bg-[#0D1017] border ${
                          errors.phone ? 'border-red-500 ring-1 ring-red-500' : 'border-white/15 focus:border-[#6B911B]'
                        } rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none transition-colors`}
                      />
                      {errors.phone && (
                        <p className="flex items-center gap-1 text-xs text-red-400 mt-1">
                          <AlertCircle className="w-3.5 h-3.5" />
                          <span>{errors.phone}</span>
                        </p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5">
                        Email Address (Optional)
                      </label>
                      <input
                        type="email"
                        id="email"
                        value={formData.email}
                        onChange={(e) => {
                          setFormData({ ...formData, email: e.target.value });
                          if (errors.email) setErrors({ ...errors, email: undefined });
                        }}
                        placeholder="e.g. contact@example.com"
                        className={`w-full bg-[#0D1017] border ${
                          errors.email ? 'border-red-500 ring-1 ring-red-500' : 'border-white/15 focus:border-[#6B911B]'
                        } rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none transition-colors`}
                      />
                      {errors.email && (
                        <p className="flex items-center gap-1 text-xs text-red-400 mt-1">
                          <AlertCircle className="w-3.5 h-3.5" />
                          <span>{errors.email}</span>
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Product Interested In Dropdown */}
                  <div>
                    <label htmlFor="product" className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5">
                      Product Interested In *
                    </label>
                    <select
                      id="product"
                      value={formData.product}
                      onChange={(e) => setFormData({ ...formData, product: e.target.value })}
                      className="w-full bg-[#0D1017] border border-white/15 focus:border-[#6B911B] rounded-xl px-4 py-3 text-sm text-white focus:outline-none transition-colors cursor-pointer"
                    >
                      <option value="Zatka Machine">Zatka Machine (Farm Electric Fencing)</option>
                      <option value="Solar Panel">Solar Panel (Energy Solutions)</option>
                      <option value="Battery">Battery (Inverter &amp; Equipment Storage)</option>
                      <option value="Other">Other / General Consultation</option>
                    </select>
                  </div>

                  {/* Message Input */}
                  <div>
                    <label htmlFor="message" className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5">
                      Requirement Details / Farm Size (Optional)
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Mention your farm acreage, perimeter length, required backup duration, or any specific setup questions..."
                      className="w-full bg-[#0D1017] border border-white/15 focus:border-[#6B911B] rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none transition-colors resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full inline-flex items-center justify-center gap-2.5 py-3.5 px-6 rounded-xl font-bold text-white bg-gradient-to-r from-[#6B911B] to-[#557315] hover:from-[#557315] hover:to-[#455D10] shadow-lg shadow-[#6B911B]/25 transition-all duration-200 cursor-pointer disabled:opacity-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#8DC624]"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center gap-2">
                        <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        <span>Processing Enquiry...</span>
                      </span>
                    ) : (
                      <>
                        <span>Send Enquiry</span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>

                  <p className="text-center text-[11px] text-slate-500">
                    Your information is treated with strict confidentiality. Direct assistance from Mr. Pinak Vyas's office.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
