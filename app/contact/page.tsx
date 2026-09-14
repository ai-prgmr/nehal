"use client";

import React, { useState } from "react";
import { Phone, Mail, MapPin, Calendar, Loader2, CheckCircle2 } from "lucide-react";

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate a brief API delay for the luxury experience
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 2000);
  };

  const inputClasses = 
    "w-full border border-neutral-200 rounded-xl px-4 py-3.5 bg-neutral-50 hover:bg-neutral-100 focus:bg-white focus:outline-none focus:ring-1 focus:ring-neutral-800 focus:border-neutral-800 transition-all duration-300 text-neutral-900 placeholder:text-neutral-400";
  const labelClasses = "block text-sm font-medium text-neutral-700 tracking-wide";

  return (
    <main className="min-h-screen bg-neutral-50 font-sans selection:bg-neutral-900 selection:text-white">
      {/* Page Header (The Invitation) */}
      <section className="relative min-h-[40vh] bg-neutral-900 flex items-center justify-center overflow-hidden px-6 py-24 object-cover">
        {/* Subtle patterned overlay to add a premium touch */}
        <div className="absolute inset-0 opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/noise-lines.png')] pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/40 pointer-events-none" />
        
        <div className="relative z-10 max-w-4xl mx-auto text-center space-y-6">
          <h1 className="text-4xl md:text-5xl lg:text-7xl text-white font-serif tracking-tight font-light drop-shadow-sm">
            Begin Your Bespoke Journey.
          </h1>
          <p className="text-neutral-300 text-lg md:text-xl font-light leading-relaxed max-w-2xl mx-auto">
            Whether you are a bride, a groom, or curating looks for the entire family, we are honored to bring your vision to life. Reach out or book a private fitting below.
          </p>
        </div>
      </section>

      {/* Main Content Layout */}
      <section className="max-w-7xl mx-auto px-6 py-20 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          
          {/* Left Column: Direct Contact & VIP Booking */}
          <div className="flex flex-col space-y-16 lg:pr-8">
            
            {/* Direct Details */}
            <div className="space-y-12">
              <div className="space-y-10">
                
                <div className="group flex items-start space-x-6">
                  <div className="w-12 h-12 bg-white shadow-sm border border-neutral-100 rounded-full flex items-center justify-center shrink-0 group-hover:bg-neutral-900 group-hover:text-white transition-colors duration-300">
                    <Phone className="w-5 h-5 text-neutral-500 group-hover:text-white transition-colors duration-300 stroke-[1.5]" />
                  </div>
                  <div className="pt-1">
                    <p className="text-xs font-semibold text-neutral-400 uppercase tracking-[0.2em] mb-1.5">Phone</p>
                    <p className="text-xl text-neutral-900 font-light">+91 98765 43210</p>
                  </div>
                </div>
                
                <div className="group flex items-start space-x-6">
                  <div className="w-12 h-12 bg-white shadow-sm border border-neutral-100 rounded-full flex items-center justify-center shrink-0 group-hover:bg-neutral-900 group-hover:text-white transition-colors duration-300">
                    <Mail className="w-5 h-5 text-neutral-500 group-hover:text-white transition-colors duration-300 stroke-[1.5]" />
                  </div>
                  <div className="pt-1">
                    <p className="text-xs font-semibold text-neutral-400 uppercase tracking-[0.2em] mb-1.5">Email</p>
                    <p className="text-xl text-neutral-900 font-light">concierge@designername.com</p>
                  </div>
                </div>

                <div className="group flex items-start space-x-6">
                  <div className="w-12 h-12 bg-white shadow-sm border border-neutral-100 rounded-full flex items-center justify-center shrink-0 group-hover:bg-neutral-900 group-hover:text-white transition-colors duration-300">
                    <MapPin className="w-5 h-5 text-neutral-500 group-hover:text-white transition-colors duration-300 stroke-[1.5]" />
                  </div>
                  <div className="pt-1">
                    <p className="text-xs font-semibold text-neutral-400 uppercase tracking-[0.2em] mb-1.5">Location</p>
                    <p className="text-xl text-neutral-900 font-light leading-relaxed">
                      Flagship Studio<br />
                      Indore, Madhya Pradesh
                    </p>
                  </div>
                </div>

              </div>
            </div>

            {/* The VIP Booking CTA */}
            <div className="bg-white p-10 md:p-14 rounded-[2rem] space-y-8 shadow-xl shadow-neutral-200/40 border border-neutral-100/50 flex flex-col items-start relative overflow-hidden">
              <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none">
                <Calendar className="w-32 h-32" />
              </div>
              <div className="space-y-4 relative z-10 w-full">
                <h3 className="text-3xl font-serif text-neutral-900 leading-tight">Schedule a Private Fitting</h3>
                <p className="text-neutral-500 leading-relaxed text-lg max-w-sm">
                  Reserve an uninterrupted session at our studio to discuss fabrics, silhouettes, and your wedding vision.
                </p>
              </div>
              
              <button className="w-full inline-flex items-center justify-center space-x-3 bg-neutral-900 text-white px-8 py-5 rounded-xl hover:bg-neutral-800 transition-all duration-300 text-lg font-medium tracking-wide group relative z-10 shadow-lg shadow-neutral-900/20">
                <Calendar className="w-5 h-5 group-hover:scale-110 group-hover:-rotate-3 transition-transform duration-300 opacity-90" />
                <span>Book Consultation Time</span>
              </button>
            </div>
          </div>

          {/* Right Column: The Inquiry Form */}
          <div className="relative">
            <div className="bg-white shadow-2xl shadow-neutral-200/50 p-8 sm:p-12 rounded-[2.5rem] border border-neutral-100 h-full">
              {isSuccess ? (
                <div className="h-full min-h-[500px] flex flex-col items-center justify-center text-center space-y-6 animate-in fade-in zoom-in duration-700">
                  <div className="w-24 h-24 bg-green-50 rounded-full flex items-center justify-center mb-4">
                    <CheckCircle2 className="w-12 h-12 text-green-600" />
                  </div>
                  <h3 className="text-3xl font-serif text-neutral-900">Thank You</h3>
                  <p className="text-neutral-500 text-lg max-w-sm leading-relaxed">
                    Our styling concierge will be in touch shortly to orchestrate your bespoke experience.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-8 animate-in fade-in duration-500">
                  <div className="space-y-3 pb-4 border-b border-neutral-100">
                    <h2 className="text-3xl md:text-4xl font-serif text-neutral-900">Send an Inquiry</h2>
                    <p className="text-neutral-500 text-base">We will reach out to you within 24 hours.</p>
                  </div>

                  <div className="space-y-6">
                    {/* Full Name */}
                    <div className="space-y-2 text-left">
                      <label htmlFor="name" className={labelClasses}>Full Name</label>
                      <input 
                        required 
                        type="text" 
                        id="name" 
                        className={inputClasses}
                        placeholder="e.g. Ananya Sharma"
                      />
                    </div>

                    {/* Email and Phone Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2 text-left">
                        <label htmlFor="email" className={labelClasses}>Email Address</label>
                        <input 
                          required 
                          type="email" 
                          id="email" 
                          className={inputClasses}
                          placeholder="ananya@example.com"
                        />
                      </div>
                      <div className="space-y-2 text-left">
                        <label htmlFor="phone" className={labelClasses}>Phone Number</label>
                        <input 
                          required 
                          type="tel" 
                          id="phone" 
                          className={inputClasses}
                          placeholder="+91 98765 43210"
                        />
                      </div>
                    </div>

                    {/* Event Date and Type */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2 text-left">
                        <label htmlFor="date" className={labelClasses}>Wedding / Event Date</label>
                        <input 
                          type="date" 
                          id="date" 
                          className={`${inputClasses} appearance-none min-h-[52px]`}
                        />
                      </div>
                      <div className="space-y-2 text-left relative">
                        <label htmlFor="type" className={labelClasses}>Inquiry Type</label>
                        <select 
                          id="type" 
                          className={`${inputClasses} appearance-none pr-10`}
                        >
                          <option value="bride">The Bride</option>
                          <option value="groom">The Groom</option>
                          <option value="party">Bridal Party</option>
                          <option value="family">Family Package</option>
                          <option value="other">Other</option>
                        </select>
                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 pt-6 text-neutral-500">
                          <svg className="h-4 w-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"/></svg>
                        </div>
                      </div>
                    </div>

                    {/* Vision */}
                    <div className="space-y-2 text-left">
                      <label htmlFor="vision" className={labelClasses}>Your Vision</label>
                      <textarea 
                        id="vision" 
                        rows={4}
                        className={`${inputClasses} resize-none`}
                        placeholder="Tell us about your dream outfit, your venue, or any specific inspirations..."
                      />
                    </div>
                  </div>

                  <button 
                    disabled={isSubmitting}
                    className="w-full bg-neutral-900 text-white py-4.5 rounded-xl hover:bg-neutral-800 transition-all duration-300 text-base font-medium tracking-wide flex items-center justify-center space-x-3 disabled:opacity-70 disabled:cursor-not-allowed mt-4 shadow-lg shadow-neutral-900/20"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin opacity-90" />
                        <span>Sending...</span>
                      </>
                    ) : (
                      <span>Send Inquiry</span>
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
