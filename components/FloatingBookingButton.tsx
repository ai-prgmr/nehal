"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { X, Calendar } from "lucide-react";
import ConsultationForm from "@/components/ConsultationForm";

export default function FloatingBookingButton() {
  const [isOpen, setIsOpen] = useState(false);

  // Lock background scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  // Handle Close Escape Key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <>
      {/* FLOATING TRIGGER BUTTON */}
      <div className="fixed bottom-6 right-6 z-40 flex items-center gap-3">
        {/* Helper Badge */}
        <div className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-silk/90 backdrop-blur-md border border-border-main shadow-lg text-text-primary text-[11px] font-medium uppercase tracking-wider animate-in fade-in slide-in-from-right-4 duration-500">
          <span className="w-2 h-2 rounded-full bg-text-gold animate-pulse" />
          <span>Book Appointment</span>
        </div>

        {/* Floating Avatar Button */}
        <button
          onClick={() => setIsOpen(true)}
          aria-label="Open Appointment Booking Form"
          className="group relative w-14 h-14 sm:w-16 sm:h-16 rounded-full border-2 border-border-gold bg-warm-white p-0.5 shadow-[0_10px_30px_rgba(63,58,50,0.22)] hover:shadow-[0_15px_40px_rgba(155,129,80,0.35)] transition-all duration-300 hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-text-gold cursor-pointer"
        >
          {/* Subtle Outer Glow Ring */}
          <div className="absolute -inset-1 rounded-full bg-linear-to-r from-champagne via-gold-soft to-champagne-deep opacity-40 blur-xs group-hover:opacity-80 transition-opacity duration-300 pointer-events-none" />

          {/* Avatar Image */}
          <div className="relative w-full h-full rounded-full overflow-hidden bg-pearl">
            <Image
              src="/nehal/avatar.png"
              alt="Nehal Jhavveri Bridal & Occasion Stylist"
              fill
              className="object-cover group-hover:scale-110 transition-transform duration-500"
              sizes="64px"
              priority
            />
          </div>

          {/* Calendar Icon Badge */}
          <div className="absolute -bottom-1 -right-1 w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-text-primary text-silk flex items-center justify-center border border-border-gold shadow-xs">
            <Calendar className="w-3 h-3 text-champagne" />
          </div>
        </button>
      </div>

      {/* MODAL OVERLAY */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto bg-text-primary/60 backdrop-blur-xs animate-in fade-in duration-300">
          {/* Backdrop Click */}
          <div className="fixed inset-0" onClick={() => setIsOpen(false)} />

          {/* MODAL CONTAINER */}
          <div className="relative z-10 w-full max-w-xl bg-silk border border-border-main rounded-2xl shadow-[0_25px_70px_rgba(63,58,50,0.25)] overflow-hidden my-auto max-h-[92vh] flex flex-col animate-in zoom-in-95 duration-300">
            {/* Modal Header */}
            <div className="relative px-6 pt-5 pb-4 border-b border-border-main bg-linear-to-r from-pearl via-silk to-warm-white flex items-center justify-between shrink-0">
              <div className="flex items-center gap-3">
                <div className="relative w-10 h-10 rounded-full border border-border-gold overflow-hidden shrink-0">
                  <Image
                    src="/nehal/avatar.png"
                    alt="Nehal Jhavveri"
                    fill
                    className="object-cover"
                    sizes="40px"
                  />
                </div>
                <div>
                  <h3 className="font-serif text-xl sm:text-2xl text-text-primary leading-tight">
                    Book Private Consultation
                  </h3>
                  <p className="text-[11px] uppercase tracking-wider text-text-gold font-medium">
                    With Nehal Jhavveri Atelier
                  </p>
                </div>
              </div>

              <button
                onClick={() => setIsOpen(false)}
                className="w-8 h-8 rounded-full bg-warm-white border border-border-soft flex items-center justify-center text-text-secondary hover:text-text-primary hover:bg-pearl transition-colors cursor-pointer"
                aria-label="Close modal"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Modal Content / Form */}
            <div className="p-5 sm:p-6 overflow-y-auto flex-1">
              <ConsultationForm isModal={true} onClose={() => setIsOpen(false)} />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
