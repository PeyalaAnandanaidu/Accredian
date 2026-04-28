"use client";

import { useState, useEffect } from "react";
import { X, CheckCircle, Loader2 } from "lucide-react";

interface FormData {
  name: string;
  email: string;
  company: string;
  phone: string;
  teamSize: string;
  message: string;
}

type SubmitStatus = "idle" | "loading" | "success" | "error";

interface LeadFormProps {
  onClose: () => void;
}

// Reusable input class string — avoids repetition
const inputClass = `
  w-full px-4 py-3 border rounded-xl text-sm
  transition-colors duration-200
  outline-none
`;

export default function LeadForm({ onClose }: LeadFormProps) {
  const [formData, setFormData] = useState<FormData>({
    name: "", email: "", company: "", phone: "", teamSize: "", message: "",
  });
  const [submitStatus, setSubmitStatus] = useState<SubmitStatus>("idle");
  const [errors, setErrors] = useState<Partial<FormData>>({});

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = "unset"; };
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormData]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validate = (): boolean => {
    const newErrors: Partial<FormData> = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }
    if (!formData.company.trim()) newErrors.company = "Company name is required";
    if (!formData.phone.trim()) newErrors.phone = "Phone number is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setSubmitStatus("loading");
    try {
      const response = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (!response.ok) throw new Error("Submission failed");
      setSubmitStatus("success");
      setTimeout(() => onClose(), 2000);
    } catch {
      setSubmitStatus("error");
      setTimeout(() => setSubmitStatus("idle"), 3000);
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
    >
      {/* BACKDROP */}
      <div
        className="absolute inset-0"
        style={{ backgroundColor: "rgba(0,0,0,0.6)", backdropFilter: "blur(4px)" }}
      />

      {/* MODAL */}
      <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-lg max-h-[90vh] overflow-y-auto">

        {/* HEADER */}
        <div className="flex items-center justify-between p-6 border-b border-gray-100">
          <div>
            <h2 className="text-xl font-bold text-gray-900">Enquire Now</h2>
            <p className="text-sm text-gray-500 mt-1">Transform your enterprise with expert learning</p>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors"
          >
            <X size={18} className="text-gray-500" />
          </button>
        </div>

        {/* SUCCESS */}
        {submitStatus === "success" ? (
          <div className="p-12 flex flex-col items-center text-center">
            <CheckCircle size={64} className="text-green-500 mb-4" />
            <h3 className="text-xl font-bold text-gray-900 mb-2">Thank You!</h3>
            <p className="text-gray-500">We&apos;ll get back to you within 24 hours.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6 space-y-5">

            {/* NAME */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Full Name *</label>
              <input
                type="text" name="name" value={formData.name}
                onChange={handleChange} placeholder="John Smith"
                className={inputClass}
                style={{
                  borderColor: errors.name ? "#f87171" : "#e5e7eb",
                  backgroundColor: errors.name ? "#fef2f2" : "white",
                }}
              />
              {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
            </div>

            {/* EMAIL */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Work Email *</label>
              <input
                type="email" name="email" value={formData.email}
                onChange={handleChange} placeholder="john@company.com"
                className={inputClass}
                style={{
                  borderColor: errors.email ? "#f87171" : "#e5e7eb",
                  backgroundColor: errors.email ? "#fef2f2" : "white",
                }}
              />
              {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
            </div>

            {/* COMPANY + PHONE */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Company Name *</label>
                <input
                  type="text" name="company" value={formData.company}
                  onChange={handleChange} placeholder="Acme Corp"
                  className={inputClass}
                  style={{
                    borderColor: errors.company ? "#f87171" : "#e5e7eb",
                    backgroundColor: errors.company ? "#fef2f2" : "white",
                  }}
                />
                {errors.company && <p className="text-red-500 text-xs mt-1">{errors.company}</p>}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number *</label>
                <input
                  type="tel" name="phone" value={formData.phone}
                  onChange={handleChange} placeholder="+91 98765 43210"
                  className={inputClass}
                  style={{
                    borderColor: errors.phone ? "#f87171" : "#e5e7eb",
                    backgroundColor: errors.phone ? "#fef2f2" : "white",
                  }}
                />
                {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
              </div>
            </div>

            {/* TEAM SIZE */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Team Size</label>
              <select
                name="teamSize" value={formData.teamSize} onChange={handleChange}
                className={inputClass}
                style={{ borderColor: "#e5e7eb" }}
              >
                <option value="">Select team size</option>
                <option value="1-10">1-10 employees</option>
                <option value="11-50">11-50 employees</option>
                <option value="51-200">51-200 employees</option>
                <option value="201-1000">201-1000 employees</option>
                <option value="1000+">1000+ employees</option>
              </select>
            </div>

            {/* MESSAGE */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Message (Optional)</label>
              <textarea
                name="message" value={formData.message} onChange={handleChange}
                rows={3} placeholder="Tell us about your training needs..."
                className={inputClass + " resize-none"}
                style={{ borderColor: "#e5e7eb" }}
              />
            </div>

            {/* ERROR */}
            {submitStatus === "error" && (
              <div className="p-3 rounded-lg text-sm" style={{ backgroundColor: "#fef2f2", color: "#dc2626", border: "1px solid #fecaca" }}>
                Something went wrong. Please try again.
              </div>
            )}

            {/* SUBMIT */}
            <button
              type="submit"
              disabled={submitStatus === "loading"}
              className="w-full text-white py-4 rounded-xl font-semibold transition-colors duration-200 flex items-center justify-center gap-2"
              style={{ backgroundColor: submitStatus === "loading" ? "#93c5fd" : "#1a6fe4" }}
            >
              {submitStatus === "loading" ? (
                <><Loader2 size={18} className="animate-spin" />Submitting...</>
              ) : "Submit Enquiry"}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}