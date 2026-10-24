"use client";

import React, { useState } from "react";
import { Check, CheckCircle2, Loader2, Sparkles } from "lucide-react";

export interface ConsultationFormProps {
  isModal?: boolean;
  onClose?: () => void;
  defaultCategory?: "image-stylist" | "wedding" | "nri";
}

export default function ConsultationForm({
  isModal = false,
  onClose,
  defaultCategory = "image-stylist",
}: ConsultationFormProps) {
  const [serviceType, setServiceType] = useState<"image-stylist" | "wedding" | "nri">(defaultCategory);
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [targetDate, setTargetDate] = useState("");
  const [notes, setNotes] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // Service pills for Image Stylist (Program duration removed, need type & services in pills)
  const imageStylistServices = [
    "Regular Daily Need",
    "Professional / Executive",
    "Style & Confidence Transformation",
    "Wardrobe Architecture & Audit",
    "Executive & Public Presence",
    "Personal Shopping Consulting",
    "Color & Silhouette Profiling",
  ];

  // Service pills for Wedding tab
  const weddingServices = [
    "The Bride",
    "The Groom",
    "The Family",
    "Engagement / Roka",
    "Pre-Wedding Shoots",
    "Post-Wedding Shoots",
    "GodBharai / Baby Shower",
    "Maternity Styling & Shoot",
    "Festivals & Occasions",
  ];

  // Service pills for NRI Occasion Stylist
  const nriServices = [
    "NRI Bride / Groom",
    "NRI Family Wardrobe",
    "Remote Video Consultations",
    "Express Landing Fittings (India)",
    "Non-Indian Entourage Styling",
    "Destination Wedding Wardrobe",
  ];

  const handleToggleService = (service: string) => {
    setSelectedServices((prev) =>
      prev.includes(service) ? prev.filter((s) => s !== service) : [...prev, service]
    );
  };

  const handleCategoryChange = (category: "image-stylist" | "wedding" | "nri") => {
    setServiceType(category);
    setSelectedServices([]); // reset pills on tab switch
  };

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
    setName("");
    setEmail("");
    setPhone("");
    setTargetDate("");
    setNotes("");
    setSelectedServices([]);
    if (onClose) onClose();
  };

  const inputClasses =
    "w-full border border-border-main rounded-md px-3.5 py-2.5 sm:py-3 bg-silk hover:bg-white focus:bg-white focus:outline-none focus:ring-1 focus:ring-text-gold focus:border-text-gold transition-all duration-200 text-text-primary placeholder:text-text-muted text-xs sm:text-sm";
  const labelClasses = "block text-[11px] sm:text-xs font-medium uppercase tracking-[0.14em] text-text-secondary mb-1.5";

  if (isSuccess) {
    return (
      <div className="py-12 sm:py-16 flex flex-col items-center justify-center text-center space-y-4 animate-in fade-in zoom-in-95 duration-500">
        <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-champagne-light/50 border border-border-gold flex items-center justify-center">
          <CheckCircle2 className="w-8 h-8 sm:w-10 sm:h-10 text-text-gold" />
        </div>
        <h4 className="font-serif text-2xl sm:text-3xl text-text-primary">Consultation Requested</h4>
        <p className="text-xs sm:text-sm text-text-secondary font-light max-w-md leading-relaxed px-4">
          Thank you, <strong className="text-text-primary font-medium">{name || "Client"}</strong>. Nehal&apos;s atelier team will review your requirements
          {selectedServices.length > 0 && (
            <span> for {selectedServices.slice(0, 2).join(", ")}{selectedServices.length > 2 ? ` (+${selectedServices.length - 2} more)` : ""}</span>
          )} and connect via WhatsApp/email within 24 hours.
        </p>
        <button
          type="button"
          onClick={resetForm}
          className="button-primary text-xs py-2.5 px-7 mt-4"
        >
          {isModal ? "Close" : "Submit Another Request"}
        </button>
      </div>
    );
  }

  const currentPills =
    serviceType === "image-stylist"
      ? imageStylistServices
      : serviceType === "wedding"
        ? weddingServices
        : nriServices;

  return (
    <form onSubmit={handleSubmit} className="space-y-5 animate-in fade-in duration-300">
      {/* Category Tabs */}
      <div>
        <label className={labelClasses}>Select Consultation Category</label>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
          <button
            type="button"
            onClick={() => handleCategoryChange("image-stylist")}
            className={`p-3 rounded-lg border text-left transition-all cursor-pointer ${serviceType === "image-stylist"
                ? "border-text-gold bg-pearl ring-1 ring-text-gold text-text-primary font-medium shadow-xs"
                : "border-border-soft bg-silk text-text-secondary hover:border-border-main hover:bg-white"
              }`}
          >
            <div className="text-xs uppercase tracking-wider font-semibold">1. Image Stylist</div>
            <div className="text-[10px] text-text-muted mt-0.5 leading-snug">Personal Presence & Wardrobe</div>
          </button>

          <button
            type="button"
            onClick={() => handleCategoryChange("wedding")}
            className={`p-3 rounded-lg border text-left transition-all cursor-pointer ${serviceType === "wedding"
                ? "border-text-gold bg-pearl ring-1 ring-text-gold text-text-primary font-medium shadow-xs"
                : "border-border-soft bg-silk text-text-secondary hover:border-border-main hover:bg-white"
              }`}
          >
            <div className="text-xs uppercase tracking-wider font-semibold">2. Wedding Styling</div>
            <div className="text-[10px] text-text-muted mt-0.5 leading-snug">Bride, Groom & Family • 3 Mo Advance</div>
          </button>

          <button
            type="button"
            onClick={() => handleCategoryChange("nri")}
            className={`p-3 rounded-lg border text-left transition-all cursor-pointer ${serviceType === "nri"
                ? "border-text-gold bg-pearl ring-1 ring-text-gold text-text-primary font-medium shadow-xs"
                : "border-border-soft bg-silk text-text-secondary hover:border-border-main hover:bg-white"
              }`}
          >
            <div className="text-xs uppercase tracking-wider font-semibold">3. NRI Stylist</div>
            <div className="text-[10px] text-text-muted mt-0.5 leading-snug">Time-Zone & Global Friends</div>
          </button>
        </div>
      </div>

      {/* Services Multi-Select Pills */}
      <div className="p-4 rounded-xl bg-pearl border border-border-main space-y-3">
        <div className="flex items-center justify-between">
          <label className="text-[11px] sm:text-xs font-medium uppercase tracking-[0.14em] text-text-primary">
            {serviceType === "image-stylist"
              ? "Select Services & Need Types (Select Multiple)"
              : serviceType === "wedding"
                ? "Select Wedding Services & Ceremonies (Select Multiple)"
                : "Select NRI Styling Services (Select Multiple)"}
          </label>
          {selectedServices.length > 0 && (
            <span className="text-[10px] uppercase tracking-wider text-text-gold font-medium bg-champagne-light/50 px-2 py-0.5 rounded-full">
              {selectedServices.length} selected
            </span>
          )}
        </div>

        <div className="flex flex-wrap gap-2 pt-1">
          {currentPills.map((pill) => {
            const isSelected = selectedServices.includes(pill);
            return (
              <button
                key={pill}
                type="button"
                onClick={() => handleToggleService(pill)}
                className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs transition-all duration-200 cursor-pointer ${isSelected
                    ? "bg-text-primary text-silk font-medium shadow-xs ring-1 ring-text-primary"
                    : "bg-silk text-text-secondary border border-border-main hover:border-text-gold hover:text-text-primary hover:bg-white"
                  }`}
              >
                {isSelected ? (
                  <Check className="w-3 h-3 text-champagne" />
                ) : (
                  <span className="w-1.5 h-1.5 rounded-full bg-border-main" />
                )}
                <span>{pill}</span>
              </button>
            );
          })}
        </div>

        {/* Informational Guidance based on tab */}
        {serviceType === "wedding" && (
          <div className="pt-2 border-t border-border-soft flex items-start gap-2 text-[11px] text-text-muted leading-relaxed">
            <Sparkles className="w-3.5 h-3.5 text-text-gold shrink-0 mt-0.5" />
            <span>
              Wedding styling commences 3 months prior to ensure tailored silhouette engineering, custom handlooms, and family harmony.
            </span>
          </div>
        )}

        {serviceType === "nri" && (
          <div className="pt-2 border-t border-border-soft flex items-start gap-2 text-[11px] text-text-muted leading-relaxed">
            <Sparkles className="w-3.5 h-3.5 text-text-gold shrink-0 mt-0.5" />
            <span>
              Flexible international video fittings, coordinate fabrics for non-Indian guests, and express landing fittings in India.
            </span>
          </div>
        )}
      </div>

      {/* Personal Contact Inputs */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
        <div>
          <label htmlFor={`form-name-${isModal ? "modal" : "page"}`} className={labelClasses}>
            Full Name *
          </label>
          <input
            id={`form-name-${isModal ? "modal" : "page"}`}
            required
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="e.g. Radhika Mehta"
            className={inputClasses}
          />
        </div>
        <div>
          <label htmlFor={`form-email-${isModal ? "modal" : "page"}`} className={labelClasses}>
            Email Address *
          </label>
          <input
            id={`form-email-${isModal ? "modal" : "page"}`}
            required
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="radhika@example.com"
            className={inputClasses}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
        <div>
          <label htmlFor={`form-phone-${isModal ? "modal" : "page"}`} className={labelClasses}>
            Phone / WhatsApp *
          </label>
          <input
            id={`form-phone-${isModal ? "modal" : "page"}`}
            required
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="+91 98765 43210"
            className={inputClasses}
          />
        </div>
        <div>
          <label htmlFor={`form-date-${isModal ? "modal" : "page"}`} className={labelClasses}>
            Target Date / Month
          </label>
          <input
            id={`form-date-${isModal ? "modal" : "page"}`}
            type="text"
            value={targetDate}
            onChange={(e) => setTargetDate(e.target.value)}
            placeholder="e.g. Nov 2026 or Next Month"
            className={inputClasses}
          />
        </div>
      </div>

      {/* Vision & Requirements */}
      <div>
        <label htmlFor={`form-notes-${isModal ? "modal" : "page"}`} className={labelClasses}>
          Specific Needs & Details
        </label>
        <textarea
          id={`form-notes-${isModal ? "modal" : "page"}`}
          rows={3}
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
          placeholder={
            serviceType === "image-stylist"
              ? "Share your daily or executive wardrobe goals, posture/confidence focus, or specific questions..."
              : serviceType === "wedding"
                ? "Share your wedding dates, ceremony locations, bridal/groom color palette, or trousseau details..."
                : "Share your destination wedding dates, time zone, or international entourage requirements..."
          }
          className={`${inputClasses} resize-none`}
        />
      </div>

      {/* Submit Button */}
      <button
        disabled={isSubmitting}
        type="submit"
        className="button-primary w-full py-3.5! sm:py-4! text-xs tracking-[0.18em] font-medium flex items-center justify-center space-x-2 disabled:opacity-60 cursor-pointer mt-3 shadow-sm hover:shadow-md transition-all"
      >
        {isSubmitting ? (
          <>
            <Loader2 className="w-4 h-4 animate-spin text-silk" />
            <span>Submitting Request...</span>
          </>
        ) : (
          <span>Request Private Consultation</span>
        )}
      </button>
    </form>
  );
}
