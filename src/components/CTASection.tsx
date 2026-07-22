import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Phone,
  MessageCircle,
  Clock3,
  ShieldCheck,
  Sparkles,
  ArrowUpRight,
  ChevronDown,
  MapPin
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const AppointmentCTA = () => {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    treatment: "",
    message: "",
  });

  const clinicPhone = "86189 55829"; // Clinic dynamic phone display
  const whatsappNumber = "86189 55829"; // International format for wa.me routing

  // Specialized orthodontic & dental treatments offered at Niranjans Dental Care
  const treatmentsList = [
    "Orthodontic Braces & Aligners",
    "Invisalign (Clear Aligners)",
    "Dental Implants & Restoration",
    "Root Canal Treatment (RCT)",
    "Wisdom Tooth Surgical Extraction",
    "Ceramic Crowns & Bridges",
    "Laser & Cosmetic Dentistry",
    "Smile Redesign & Tooth Reshaping",
    "Periodontal Flap & Gum Care",
    "Pediatric & General Consultation"
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const text = `
🦷 Niranjans Dental Care - Appointment Request

👤 Patient Name: ${form.name}
📞 Contact Number: ${form.phone}
🩺 Selected Treatment: ${form.treatment}

💬 Patient Message / Concern:
${form.message || "No additional notes provided."}
`;

    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text.trim())}`;
    window.open(url, "_blank");
  };

  return (
    <section className="relative py-12 md:py-20 lg:py-28 bg-[#F8FAFC] overflow-hidden antialiased selection:bg-[#2563EB]/10 border-t border-slate-200/60">
      
      {/* Background Glows */}
      <div className="absolute top-1/2 left-[-5%] w-[400px] h-[400px] bg-[#2563EB]/05 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-[-5%] w-[400px] h-[400px] bg-[#10B981]/08 rounded-full blur-[120px] pointer-events-none" />

      <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Core Content Shell */}
        <div className="rounded-[24px] sm:rounded-[32px] lg:rounded-[40px] border border-slate-200/80 bg-white shadow-sm overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
            
            {/* LEFT SIDE: Brand Value & Specialist Statements */}
            <div className="lg:col-span-6 p-6 sm:p-10 md:p-14 lg:p-16 flex flex-col justify-between bg-white">
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="space-y-4 sm:space-y-6"
              >
                {/* Badge */}
                <div className="self-start inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#ECFDF5] border border-[#10B981]/25 text-[#0F172A] text-[11px] sm:text-xs font-semibold tracking-wider uppercase">
                  <Sparkles size={13} className="text-[#10B981]" />
                  <span>Direct Booking Concierge</span>
                </div>

                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-extrabold text-[#0F172A] tracking-tight leading-tight">
                  Ready For Your <br />
                  <span className="bg-gradient-to-r from-[#2563EB] to-[#1D4ED8] bg-clip-text text-transparent">
                    Perfect Smile Journey?
                  </span>
                </h2>

                <p className="text-slate-600 text-xs sm:text-sm md:text-base font-normal max-w-xl leading-relaxed">
                  Schedule your priority consultation directly with our specialists. Experience personalized orthodontic and comprehensive dental care with Dr. Akarsh and Dr. Suprabha.
                </p>

                {/* Bullet Points */}
                <div className="space-y-4 sm:space-y-6 pt-5 sm:pt-6 border-t border-slate-100">
                  <div className="flex items-start gap-3 sm:gap-4">
                    <div className="w-10 h-10 sm:w-11 sm:h-11 shrink-0 rounded-xl bg-[#2563EB]/10 flex items-center justify-center text-[#2563EB]">
                      <Clock3 size={18} />
                    </div>
                    <div>
                      <h4 className="font-bold text-[#0F172A] text-sm sm:text-base">Consultation Hours</h4>
                      <p className="text-xs text-slate-500 font-normal mt-0.5">
                        Monday to Saturday (10:00 AM – 8:00 PM) for flexible appointments.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 sm:gap-4">
                    <div className="w-10 h-10 sm:w-11 sm:h-11 shrink-0 rounded-xl bg-[#10B981]/10 flex items-center justify-center text-[#10B981]">
                      <ShieldCheck size={18} />
                    </div>
                    <div>
                      <h4 className="font-bold text-[#0F172A] text-sm sm:text-base">Specialist-Led Orthodontics</h4>
                      <p className="text-xs text-slate-500 font-normal mt-0.5">
                        Expert guidance by Dr. Akarsh & Dr. Suprabha using state-of-the-art aligners & dental care.
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Emergency Quick Access Panel */}
              <motion.div 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="mt-8 sm:mt-12 p-4 sm:p-5 rounded-[20px] sm:rounded-[24px] border border-slate-200/80 bg-[#F8FAFC] flex flex-col sm:flex-row sm:items-center justify-between gap-4"
              >
                <div>
                  <p className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-slate-400">Need Urgent Assistance?</p>
                  <h3 className="font-extrabold text-lg sm:text-xl text-[#0F172A] mt-0.5 tracking-tight">{clinicPhone}</h3>
                </div>
                <Button 
                  variant="outline" 
                  className="w-full sm:w-auto rounded-full bg-white h-10 sm:h-11 px-5 text-xs font-bold border-slate-200 text-[#0F172A] hover:bg-slate-50 shadow-sm active:scale-95 transition-transform"
                  onClick={() => window.open(`tel:${clinicPhone.replace(/\s+/g, '')}`)}
                >
                  <Phone size={13} className="mr-2 text-[#2563EB]" />
                  Call Reception
                </Button>
              </motion.div>
            </div>

            {/* RIGHT SIDE: Dedicated Form Panel */}
            <div className="lg:col-span-6 p-6 sm:p-10 md:p-14 lg:p-16 flex flex-col justify-center bg-[#F8FAFC]/60 border-t lg:border-t-0 lg:border-l border-slate-200/80">
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="w-full max-w-md mx-auto lg:mx-0"
              >
                <div className="mb-6 sm:mb-8 text-center lg:text-left">
                  <h3 className="text-xl sm:text-2xl font-extrabold text-[#0F172A] tracking-tight">
                    Request an Appointment
                  </h3>
                  <p className="text-slate-500 text-xs font-normal mt-1">
                    Fill out your details to connect directly with our front desk on WhatsApp.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-3.5 sm:space-y-4">
                  {/* Name Input */}
                  <div>
                    <Input
                      type="text"
                      required
                      placeholder="Full Name"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="w-full h-12 sm:h-13 px-4 rounded-xl border-slate-200 bg-white placeholder:text-slate-400 font-medium text-[#0F172A] shadow-sm focus-visible:ring-[#2563EB] focus-visible:border-[#2563EB] transition-all text-sm"
                    />
                  </div>

                  {/* Phone Input */}
                  <div>
                    <Input
                      type="tel"
                      required
                      placeholder="Phone Number"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      className="w-full h-12 sm:h-13 px-4 rounded-xl border-slate-200 bg-white placeholder:text-slate-400 font-medium text-[#0F172A] shadow-sm focus-visible:ring-[#2563EB] focus-visible:border-[#2563EB] transition-all text-sm"
                    />
                  </div>

                  {/* Treatment Dropdown Field */}
                  <div className="relative">
                    <select
                      required
                      value={form.treatment}
                      onChange={(e) => setForm({ ...form, treatment: e.target.value })}
                      className="w-full h-12 sm:h-13 pl-4 pr-10 rounded-xl border border-slate-200 bg-white font-medium text-[#0F172A] shadow-sm focus:outline-none focus:ring-2 focus:ring-[#2563EB] focus:border-[#2563EB] transition-all appearance-none text-sm cursor-pointer invalid:text-slate-400"
                    >
                      <option value="" disabled hidden>
                        Select Service / Treatment
                      </option>
                      {treatmentsList.map((treatment, idx) => (
                        <option key={idx} value={treatment} className="text-[#0F172A] font-medium">
                          {treatment}
                        </option>
                      ))}
                    </select>
                    <div className="absolute inset-y-0 right-0 pr-4 flex items-center pointer-events-none text-slate-400">
                      <ChevronDown size={16} />
                    </div>
                  </div>

                  {/* Custom Message Field */}
                  <div>
                    <Textarea
                      placeholder="Tell us about your concern or preferred appointment date..."
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      className="w-full p-4 rounded-xl border-slate-200 bg-white placeholder:text-slate-400 font-medium text-[#0F172A] shadow-sm min-h-[110px] sm:min-h-[130px] focus-visible:ring-[#2563EB] focus-visible:border-[#2563EB] transition-all resize-none text-sm"
                    />
                  </div>

                  {/* Submit Button */}
                  <Button
                    type="submit"
                    className="w-full h-12 sm:h-14 rounded-xl bg-[#2563EB] hover:bg-[#1D4ED8] text-white font-bold text-sm tracking-wide flex items-center justify-center gap-2.5 shadow-md active:scale-[0.99] transition-all border-0 group mt-2"
                  >
                    <MessageCircle size={16} className="text-emerald-300 group-hover:rotate-12 transition-transform" />
                    <span>Send via WhatsApp</span>
                    <ArrowUpRight size={15} className="text-white/80 group-hover:text-white transition-colors" />
                  </Button>

                  <p className="text-[10px] sm:text-[11px] text-center text-slate-400 font-normal leading-relaxed pt-2">
                    By submitting, you will be redirected to WhatsApp to confirm your booking details with Niranjans Dental Care & Orthodontic Center.
                  </p>
                </form>
              </motion.div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default AppointmentCTA;