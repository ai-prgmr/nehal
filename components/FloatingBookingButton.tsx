"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { X, Calendar, CheckCircle2, Loader2, Sparkles } from "lucide-react";

export default function FloatingBookingButton() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // Form State
  const [serviceType, setServiceType] = useState<"image-stylist" | "wedding" | "nri">("image-stylist");
  const [duration, setDuration] = useState<"3" | "5" | "7" | "9">("5");
  const [needType, setNeedType] = useState<"regular" | "professional">("professional");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [targetDate, setTargetDate] = useState("");
  const [notes, setNotes] = useState("");

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1200);
  };

  const resetForm = () => {
    setIsSuccess(false);
    setIsSubmitting(false);
    setIsOpen(false);
  };

  const inputClasses =
    "w-full border border-border-main rounded-md px-3.5 py-2.5 bg-silk hover:bg-white focus:bg-white focus:outline-none focus:ring-1 focus:ring-text-gold focus:border-text-gold transition-all duration-200 text-text-primary placeholder:text-text-muted text-xs sm:text-sm";
  const labelClasses = "block text-[11px] font-medium uppercase tracking-[0.14em] text-text-secondary mb-1";

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
              alt="Nehal Jhavveri Booking Concierge"
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
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-text-primary/60 backdrop-blur-xs animate-in fade-in duration-300">
          {/* Backdrop Click */}
          <div className="fixed inset-0" onClick={() => setIsOpen(false)} />

          {/* MODAL CONTAINER */}
          <div className="relative z-10 w-full max-w-xl bg-silk border border-border-main rounded-2xl shadow-[0_25px_70px_rgba(63,58,50,0.25)] overflow-hidden my-auto max-h-[90vh] flex flex-col animate-in zoom-in-95 duration-300">
            {/* Modal Header */}
            <div className="relative px-6 pt-6 pb-4 border-b border-border-main bg-linear-to-r from-pearl via-silk to-warm-white flex items-center justify-between shrink-0">
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
                className="w-8 h-8 rounded-full bg-warm-white border border-border-soft flex items-center justify-center text-text-secondary hover:text-text-primary hover:bg-pearl transition-colors"
                aria-label="Close modal"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Modal Content / Form */}
            <div className="p-6 overflow-y-auto flex-1 space-y-6">
              {isSuccess ? (
                <div className="py-12 flex flex-col items-center justify-center text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-champagne-light/50 border border-border-gold flex items-center justify-center">
                    <CheckCircle2 className="w-8 h-8 text-text-gold" />
                  </div>
                  <h4 className="font-serif text-3xl text-text-primary">Appointment Requested</h4>
                  <p className="text-xs sm:text-sm text-text-secondary font-light max-w-md leading-relaxed">
                    Thank you, <strong className="text-text-primary">{name || "Client"}</strong>. Nehal&apos;s team will review your requirements and respond via email/WhatsApp within 24 hours to confirm your schedule.
                  </p>
                  <button
                    onClick={resetForm}
                    className="button-primary text-xs py-2.5 px-6 mt-4"
                  >
                    Done
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Service Category Selection */}
                  <div>
                    <label className={labelClasses}>Select Consultation Category</label>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                      <button
                        type="button"
                        onClick={() => setServiceType("image-stylist")}
                        className={`p-3 rounded-lg border text-left transition-all ${
                          serviceType === "image-stylist"
                            ? "border-text-gold bg-pearl ring-1 ring-text-gold text-text-primary font-medium"
                            : "border-border-soft bg-silk text-text-secondary hover:border-border-main"
                        }`}
                      >
                        <div className="text-xs uppercase tracking-wider font-semibold">1. Image Stylist</div>
                        <div className="text-[10px] text-text-muted mt-0.5">3, 5, 7, 9 Days • Head-to-Toe</div>
                      </button>

                      <button
                        type="button"
                        onClick={() => setServiceType("wedding")}
                        className={`p-3 rounded-lg border text-left transition-all ${
                          serviceType === "wedding"
                            ? "border-text-gold bg-pearl ring-1 ring-text-gold text-text-primary font-medium"
                            : "border-border-soft bg-silk text-text-secondary hover:border-border-main"
                        }`}
                      >
                        <div className="text-xs uppercase tracking-wider font-semibold">2. Wedding Styling</div>
                        <div className="text-[10px] text-text-muted mt-0.5">Starts 3 Months Prior</div>
                      </button>

                      <button
                        type="button"
                        onClick={() => setServiceType("nri")}
                        className={`p-3 rounded-lg border text-left transition-all ${
                          serviceType === "nri"
                            ? "border-text-gold bg-pearl ring-1 ring-text-gold text-text-primary font-medium"
                            : "border-border-soft bg-silk text-text-secondary hover:border-border-main"
                        }`}
                      >
                        <div className="text-xs uppercase tracking-wider font-semibold">3. NRI Concierge</div>
                        <div className="text-[10px] text-text-muted mt-0.5">Time-Zone & Global Friends</div>
                      </button>
                    </div>
                  </div>

                  {/* Dynamic Options for Image Stylist */}
                  {serviceType === "image-stylist" && (
                    <div className="p-4 rounded-xl bg-pearl border border-border-main space-y-3">
                      <div>
                        <label className={labelClasses}>Program Duration</label>
                        <div className="grid grid-cols-4 gap-2">
                          {(["3", "5", "7", "9"] as const).map((d) => (
                            <button
                              key={d}
                              type="button"
                              onClick={() => setDuration(d)}
                              className={`py-2 px-1 rounded border text-center text-xs font-medium transition-all ${
                                duration === d
                                  ? "bg-text-primary text-silk border-text-primary"
                                  : "bg-silk text-text-secondary border-border-soft hover:border-border-main"
                              }`}
                            >
                              {d} Days
                            </button>
                          ))}
                        </div>
                      </div>

                      <div>
                        <label className={labelClasses}>Styling Need Type</label>
                        <div className="grid grid-cols-2 gap-2">
                          <button
                            type="button"
                            onClick={() => setNeedType("regular")}
                            className={`py-2 px-3 rounded border text-center text-xs transition-all ${
                              needType === "regular"
                                ? "bg-text-gold text-silk border-text-gold font-medium"
                                : "bg-silk text-text-secondary border-border-soft hover:border-border-main"
                            }`}
                          >
                            Regular Daily Need
                          </button>
                          <button
                            type="button"
                            onClick={() => setNeedType("professional")}
                            className={`py-2 px-3 rounded border text-center text-xs transition-all ${
                              needType === "professional"
                                ? "bg-text-gold text-silk border-text-gold font-medium"
                                : "bg-silk text-text-secondary border-border-soft hover:border-border-main"
                            }`}
                          >
                            Professional / Executive
                          </button>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Info Notice for Wedding */}
                  {serviceType === "wedding" && (
                    <div className="p-3.5 rounded-xl bg-pearl border border-border-gold/60 text-xs text-text-secondary font-light space-y-1">
                      <div className="flex items-center gap-1.5 font-medium text-text-primary text-xs uppercase tracking-wider">
                        <Sparkles className="w-3.5 h-3.5 text-text-gold" />
                        <span>3-Month Advance Protocol</span>
                      </div>
                      <p>
                        Our wedding styling commences 3 months before your event to thoroughly evaluate your needs, resolve fit/body concerns, and curate multi-day looks.
                      </p>
                    </div>
                  )}

                  {/* Info Notice for NRI */}
                  {serviceType === "nri" && (
                    <div className="p-3.5 rounded-xl bg-pearl border border-border-gold/60 text-xs text-text-secondary font-light space-y-1">
                      <div className="flex items-center gap-1.5 font-medium text-text-primary text-xs uppercase tracking-wider">
                        <Sparkles className="w-3.5 h-3.5 text-text-gold" />
                        <span>NRI & Global Friends Protocol</span>
                      </div>
                      <p>
                        Remote time-zone friendly video consultations, pre-fitting for non-Indian entourage friends, and express landing fittings in India.
                      </p>
                    </div>
                  )}

                  {/* Personal Contact Inputs */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label htmlFor="modal-name" className={labelClasses}>Full Name *</label>
                      <input
                        id="modal-name"
                        required
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="e.g. Radhika Mehta"
                        className={inputClasses}
                      />
                    </div>
                    <div>
                      <label htmlFor="modal-email" className={labelClasses}>Email Address *</label>
                      <input
                        id="modal-email"
                        required
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="radhika@example.com"
                        className={inputClasses}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label htmlFor="modal-phone" className={labelClasses}>Phone / WhatsApp</label>
                      <input
                        id="modal-phone"
                        type="tel"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="+91 98765 43210"
                        className={inputClasses}
                      />
                    </div>
                    <div>
                      <label htmlFor="modal-date" className={labelClasses}>Target Date / Month</label>
                      <input
                        id="modal-date"
                        type="text"
                        value={targetDate}
                        onChange={(e) => setTargetDate(e.target.value)}
                        placeholder="e.g. Nov 2026"
                        className={inputClasses}
                      />
                    </div>
                  </div>

                  {/* Vision & Requirements */}
                  <div>
                    <label htmlFor="modal-notes" className={labelClasses}>Specific Needs & Issues to Resolve</label>
                    <textarea
                      id="modal-notes"
                      rows={3}
                      value={notes}
                      onChange={(e) => setNotes(e.target.value)}
                      placeholder={
                        serviceType === "image-stylist"
                          ? "What aspect of your public confidence, posture, or daily/professional wardrobe would you like to transform?"
                          : "What are your wedding event details, silhouette requirements, or styling concerns?"
                      }
                      className={`${inputClasses} resize-none`}
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    disabled={isSubmitting}
                    type="submit"
                    className="button-primary w-full py-3.5! text-xs tracking-[0.18em] font-medium flex items-center justify-center space-x-2 disabled:opacity-60 cursor-pointer mt-2"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin text-silk" />
                        <span>Submitting Request...</span>
                      </>
                    ) : (
                      <span>Request Private Appointment</span>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
