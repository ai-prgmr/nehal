import React from "react";
import { Mail, MapPin } from "lucide-react";
import ConsultationForm from "@/components/ConsultationForm";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-ivory text-text-primary font-sans selection:bg-champagne selection:text-text-primary">
      {/* 1. Page Header (Editorial Invitation) */}
      <section className="relative bg-linear-to-b from-silk via-ivory to-warm-white py-16 lg:py-24 px-6 lg:px-12 border-b border-border-main text-center">
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-champagne-light/30 rounded-full blur-3xl pointer-events-none" />
        
        <div className="relative z-10 max-w-4xl mx-auto space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-pearl border border-border-main text-text-gold text-xs uppercase tracking-[0.18em] font-medium shadow-xs">
            <span>Private Consultations & Appointments</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-text-primary leading-tight font-normal">
            Begin Your Bespoke Journey.
          </h1>

          <div className="gold-rule mx-auto" />

          <p className="text-text-secondary text-base sm:text-lg font-light leading-relaxed max-w-2xl mx-auto">
            Whether you are curating looks for your bridal ceremonies, orchestrating the family trousseau, or embarking on a personal image styling journey, we look forward to connecting with you.
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
                <div className="w-12 h-12 bg-silk shadow-xs border border-border-main rounded-full flex items-center justify-center shrink-0 group-hover:border-text-gold transition-colors duration-300">
                  <Mail className="w-5 h-5 text-text-gold stroke-[1.5]" />
                </div>
                <div className="pt-0.5">
                  <p className="text-xs font-semibold text-text-muted uppercase tracking-[0.18em] mb-1">Email Styling Team</p>
                  <p className="text-lg text-text-primary font-normal">style@nehaljhavveri.com</p>
                </div>
              </div>

              <div className="group flex items-start space-x-5">
                <div className="w-12 h-12 bg-silk shadow-xs border border-border-main rounded-full flex items-center justify-center shrink-0 group-hover:border-text-gold transition-colors duration-300">
                  <MapPin className="w-5 h-5 text-text-gold stroke-[1.5]" />
                </div>
                <div className="pt-0.5">
                  <p className="text-xs font-semibold text-text-muted uppercase tracking-[0.18em] mb-1">Private Atelier</p>
                  <p className="text-lg text-text-primary font-normal leading-relaxed">
                    By Private Appointment Only<br />
                    Indore, Madhya Pradesh, India
                  </p>
                </div>
              </div>
            </div>

            {/* VIP Booking Note */}
            <div className="card-editorial p-8 space-y-4 bg-silk relative overflow-hidden">
              <span className="text-xs uppercase tracking-[0.18em] text-text-gold font-medium block">
                Appointment Protocol
              </span>
              <h3 className="text-2xl font-serif text-text-primary">
                Fitting & Styling Sessions
              </h3>
              <p className="text-text-secondary leading-relaxed text-sm font-light">
                To provide undivided attention, we accept a limited number of bridal and image styling clients each season. Consultations are conducted in our private studio in Indore, India, as well as virtually for clients worldwide.
              </p>
            </div>
          </div>

          {/* Right Column: The Inquiry Form */}
          <div className="lg:col-span-7">
            <div className="card-editorial p-6 sm:p-10 bg-silk shadow-[0_15px_45px_rgba(63,58,50,0.08)]">
              <div className="space-y-1.5 pb-5 mb-5 border-b border-border-soft">
                <div className="inline-flex items-center gap-1.5 text-[11px] uppercase tracking-[0.16em] text-text-gold font-medium">
                  <span>Atelier Consultation Booking</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-serif text-text-primary">Schedule a Consultation</h2>
                <p className="text-text-secondary text-xs font-light">
                  Select your styling focus, choose services or ceremonies, and share your timeline with Nehal.
                </p>
              </div>

              <ConsultationForm />
            </div>
          </div>
          
        </div>
      </section>
    </main>
  );
}
