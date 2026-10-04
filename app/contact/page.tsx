"use client";

import React, { useState } from "react";
import { Mail, MapPin, Loader2, CheckCircle2 } from "lucide-react";

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1500);
  };

  const inputClasses =
    "w-full border border-[#E7DFD1] rounded-sm px-4 py-3.5 bg-[#FFFDF8] hover:bg-white focus:bg-white focus:outline-none focus:ring-1 focus:ring-[#9B8150] focus:border-[#9B8150] transition-all duration-300 text-[#3F3A32] placeholder:text-[#968D80] text-sm";
  const labelClasses = "block text-xs font-medium uppercase tracking-[0.14em] text-[#71695D] mb-1.5";

  return (
    <main className="min-h-screen bg-[#F8F5EE] text-[#3F3A32] font-sans selection:bg-[#E8D7B5] selection:text-[#3F3A32]">
      {/* 1. Page Header (Editorial Invitation) */}
      <section className="relative bg-gradient-to-b from-[#FFFDF8] via-[#F8F5EE] to-[#F5F1E8] py-16 lg:py-24 px-6 lg:px-12 border-b border-[#E7DFD1] text-center">
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-[#F1E5CC]/30 rounded-full blur-3xl pointer-events-none" />
        
        <div className="relative z-10 max-w-4xl mx-auto space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FCFAF5] border border-[#E7DFD1] text-[#9B8150] text-xs uppercase tracking-[0.18em] font-medium shadow-xs">
            <span>Private Consultations & Appointments</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#3F3A32] leading-tight font-normal">
            Begin Your Bespoke Journey.
          </h1>

          <div className="gold-rule mx-auto" />

          <p className="text-[#71695D] text-base sm:text-lg font-light leading-relaxed max-w-2xl mx-auto">
            Whether you are curating looks for your bridal ceremonies, orchestrating the family trousseau, or embarking on a personal image coaching journey, we look forward to connecting with you.
          </p>
        </div>
      </section>

      {/* 2. Main Content Layout */}
      <section className="max-w-7xl mx-auto px-6 py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          
          {/* Left Column: Direct Contact & VIP Studio Info */}
          <div className="lg:col-span-5 flex flex-col space-y-10">
            
            <div className="space-y-6">
              <div className="group flex items-start space-x-5">
                <div className="w-12 h-12 bg-[#FFFDF8] shadow-xs border border-[#E7DFD1] rounded-full flex items-center justify-center shrink-0 group-hover:border-[#9B8150] transition-colors duration-300">
                  <Mail className="w-5 h-5 text-[#9B8150] stroke-[1.5]" />
                </div>
                <div className="pt-0.5">
                  <p className="text-xs font-semibold text-[#968D80] uppercase tracking-[0.18em] mb-1">Email Concierge</p>
                  <p className="text-lg text-[#3F3A32] font-normal">style@nehaljhavveri.com</p>
                </div>
              </div>

              <div className="group flex items-start space-x-5">
                <div className="w-12 h-12 bg-[#FFFDF8] shadow-xs border border-[#E7DFD1] rounded-full flex items-center justify-center shrink-0 group-hover:border-[#9B8150] transition-colors duration-300">
                  <MapPin className="w-5 h-5 text-[#9B8150] stroke-[1.5]" />
                </div>
                <div className="pt-0.5">
                  <p className="text-xs font-semibold text-[#968D80] uppercase tracking-[0.18em] mb-1">Private Atelier</p>
                  <p className="text-lg text-[#3F3A32] font-normal leading-relaxed">
                    By Private Appointment Only<br />
                    Indore, Madhya Pradesh, India
                  </p>
                </div>
              </div>
            </div>

            {/* VIP Booking Note */}
            <div className="card-editorial p-8 space-y-4 bg-[#FFFDF8] relative overflow-hidden">
              <span className="text-xs uppercase tracking-[0.18em] text-[#9B8150] font-medium block">
                Appointment Protocol
              </span>
              <h3 className="text-2xl font-serif text-[#3F3A32]">
                Fitting & Coaching Sessions
              </h3>
              <p className="text-[#71695D] leading-relaxed text-sm font-light">
                To provide undivided attention, we accept a limited number of bridal and image coaching clients each season. Consultations are conducted in our private studio in Indore, India, as well as virtually for clients worldwide.
              </p>
            </div>
          </div>

          {/* Right Column: The Inquiry Form */}
          <div className="lg:col-span-7">
            <div className="card-editorial p-8 sm:p-12 bg-[#FFFDF8] shadow-[0_15px_45px_rgba(63,58,50,0.08)]">
              {isSuccess ? (
                <div className="h-full min-h-[450px] flex flex-col items-center justify-center text-center space-y-6 animate-in fade-in zoom-in duration-700">
                  <div className="w-20 h-20 bg-[#F1E5CC]/50 rounded-full flex items-center justify-center mb-2 border border-[#D6BE8F]">
                    <CheckCircle2 className="w-10 h-10 text-[#9B8150]" />
                  </div>
                  <h3 className="text-3xl font-serif text-[#3F3A32]">Thank You</h3>
                  <p className="text-[#71695D] text-base max-w-md leading-relaxed font-light">
                    Your inquiry has been received. Our styling concierge will connect with you via email within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6 animate-in fade-in duration-500">
                  <div className="space-y-2 pb-4 border-b border-[#EEE8DE]">
                    <h2 className="text-2xl sm:text-3xl font-serif text-[#3F3A32]">Schedule a Consultation</h2>
                    <p className="text-[#71695D] text-xs font-light">Please share your details below for our atelier team.</p>
                  </div>

                  <div className="space-y-5">
                    {/* Full Name */}
                    <div>
                      <label htmlFor="name" className={labelClasses}>Full Name</label>
                      <input
                        required
                        type="text"
                        id="name"
                        className={inputClasses}
                        placeholder="e.g. Ananya Sharma"
                      />
                    </div>

                    {/* Email Address */}
                    <div>
                      <label htmlFor="email" className={labelClasses}>Email Address</label>
                      <input
                        required
                        type="email"
                        id="email"
                        className={inputClasses}
                        placeholder="ananya@example.com"
                      />
                    </div>

                    {/* Event Date and Program Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label htmlFor="date" className={labelClasses}>Target Date (Optional)</label>
                        <input
                          type="date"
                          id="date"
                          className={`${inputClasses} appearance-none min-h-[46px]`}
                        />
                      </div>
                      <div className="relative">
                        <label htmlFor="type" className={labelClasses}>Styling Program</label>
                        <select
                          id="type"
                          className={`${inputClasses} appearance-none pr-10`}
                        >
                          <option value="bride">The Bride (Couture & Trousseau)</option>
                          <option value="groom">The Groom (Sherwani & Tailoring)</option>
                          <option value="family">Family Package</option>
                          <option value="transformation">Style Transformation</option>
                          <option value="wardrobe">Wardrobe Redesign</option>
                          <option value="coaching">Luxury Style Coaching</option>
                          <option value="shopping">Shopping Consulting</option>
                          <option value="festivals">Festivals & Destination Occasions</option>
                        </select>
                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 pt-6 text-[#968D80]">
                          <svg className="h-4 w-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                            <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"/>
                          </svg>
                        </div>
                      </div>
                    </div>

                    {/* Vision / Notes */}
                    <div>
                      <label htmlFor="vision" className={labelClasses}>Your Vision or Requirements</label>
                      <textarea
                        id="vision"
                        rows={4}
                        className={`${inputClasses} resize-none`}
                        placeholder="Tell us about your wedding events, wardrobe goals, or specific styling requirements..."
                      />
                    </div>
                  </div>

                  <button
                    disabled={isSubmitting}
                    type="submit"
                    className="button-primary w-full !py-4 text-xs tracking-[0.2em] font-medium flex items-center justify-center space-x-2 disabled:opacity-70 disabled:cursor-not-allowed mt-4"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        <span>Submitting Details...</span>
                      </>
                    ) : (
                      <span>Request Private Consultation</span>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
          
        </div>
      </section>
    </main>
  );
}
