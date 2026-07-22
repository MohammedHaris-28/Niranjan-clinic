import React, { useState } from "react";
import FooterSection from "@/components/FooterSection";
import Navbar from "@/components/Navbar";
import { motion } from "framer-motion";
import {
  Phone,
  MapPin,
  Clock3,
  MessageCircle,
  Instagram,
  CalendarCheck2,
  ArrowRight,
  ArrowUpRight,
  Calendar,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const ContactSection = () => {
  // Niranjans Dental Care Clinic Details
  const mobileContact = "+91 86189 55829";
  const whatsappNumber = "918618955829";

  // Form State for Appointment Route
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    date: "",
    treatment: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleWhatsAppSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const message =
      `Hello Niranjans Dental Care & Orthodontic Center, I would like to book an appointment.%0A%0A` +
      `*Patient Name:* ${formData.name}%0A` +
      `*Contact Phone:* ${formData.phone}%0A` +
      `*Preferred Date:* ${formData.date}%0A` +
      `*Preferred Treatment:* ${formData.treatment}`;

    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, "_blank");
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 antialiased font-sans selection:bg-[#2563EB]/10">
      <Navbar />

      {/* Main Section */}
      <section className="relative pt-32 pb-16 sm:py-24 lg:py-28 overflow-hidden">
        {/* Ambient Gradients */}
        <div className="absolute top-[-10%] right-[-10%] w-[300px] sm:w-[600px] h-[300px] sm:h-[600px] bg-[#2563EB]/05 rounded-full blur-[80px] sm:blur-[120px] pointer-events-none" />
        <div className="absolute bottom-[5%] left-[-10%] w-[250px] sm:w-[500px] h-[250px] sm:h-[500px] bg-[#10B981]/05 rounded-full blur-[70px] sm:blur-[100px] pointer-events-none" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Header Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-14 sm:mb-20"
          >
            <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-[#2563EB]/10 border border-[#2563EB]/20 text-[#2563EB] text-xs font-semibold tracking-wide uppercase mb-5 sm:mb-6 shadow-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-[#2563EB] animate-pulse" />
              Connect With Us
            </span>

            <h2 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-[#0F172A] leading-tight">
              Transform Your Smile With
              <span className="block mt-2 bg-gradient-to-r from-[#2563EB] via-blue-600 to-[#10B981] bg-clip-text text-transparent drop-shadow-sm">
                Expert Dental Care
              </span>
            </h2>

            <p className="mt-5 sm:mt-6 text-sm sm:text-base md:text-lg text-slate-600 max-w-2xl mx-auto font-medium leading-relaxed">
              Experience specialized orthodontic and complete dental care led by Dr. Akarsh Niranjan (BDS, MDS). Schedule your appointment or reach out to us directly.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-start">
            {/* Left Column: Contact Details & Quick Links */}
            <div className="lg:col-span-5 space-y-4 sm:space-y-6">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="rounded-2xl sm:rounded-3xl border border-slate-200 bg-white p-5 sm:p-8 shadow-xl shadow-slate-100"
              >
                <h3 className="text-lg sm:text-xl font-bold text-[#0F172A] mb-5 sm:mb-6 tracking-wide flex items-center gap-2">
                  <span className="w-1.5 h-5 bg-[#2563EB] rounded-full" />
                  Clinic Details
                </h3>

                <div className="space-y-3.5 sm:space-y-4">
                  {/* Primary Hotline */}
                  <a
                    href={`tel:${mobileContact.replace(/\s+/g, "")}`}
                    className="group flex items-center gap-3.5 p-3.5 sm:p-4 rounded-xl sm:rounded-2xl bg-slate-50 border border-slate-100 hover:bg-[#2563EB]/[0.04] hover:border-[#2563EB]/20 transition-all duration-300"
                  >
                    <div className="w-10 h-10 rounded-xl bg-[#2563EB]/10 flex items-center justify-center text-[#2563EB] group-hover:scale-110 transition-transform shrink-0">
                      <Phone size={18} />
                    </div>
                    <div>
                      <span className="block text-[10px] font-semibold text-slate-400 uppercase tracking-wider">
                        Clinic Helpline
                      </span>
                      <span className="text-sm sm:text-base font-bold text-slate-800 group-hover:text-[#2563EB] transition-colors">
                        {mobileContact}
                      </span>
                    </div>
                  </a>

                  {/* Address */}
                  <div className="flex items-start gap-3.5 p-3.5 sm:p-4 rounded-xl sm:rounded-2xl bg-slate-50 border border-slate-100">
                    <div className="w-10 h-10 shrink-0 rounded-xl bg-[#2563EB]/10 flex items-center justify-center text-[#2563EB]">
                      <MapPin size={18} />
                    </div>
                    <div>
                      <span className="block text-[10px] font-semibold text-slate-400 uppercase tracking-wider">
                        Location Address
                      </span>
                      <p className="text-xs sm:text-sm font-medium text-slate-600 mt-1 leading-relaxed">
                        Old KEB office, 100 Feet Rd, beside Bhagyaram Orthopedic Center, Vinoba Nagara, Shivamogga, Karnataka 577204
                      </p>
                    </div>
                  </div>

                  {/* Operational Hours */}
                  <div className="flex items-start gap-3.5 p-3.5 sm:p-4 rounded-xl sm:rounded-2xl bg-slate-50 border border-slate-100">
                    <div className="w-10 h-10 rounded-xl bg-[#10B981]/10 flex items-center justify-center text-[#10B981] shrink-0">
                      <Clock3 size={18} />
                    </div>
                    <div>
                      <span className="block text-[10px] font-semibold text-[#10B981] uppercase tracking-wider">
                        Clinical Hours
                      </span>
                      <p className="text-xs sm:text-sm font-bold text-slate-800 mt-1">
                        Mon – Sat: <span className="font-medium text-slate-600">10:00 AM – 2:00 PM | 4:30 PM – 8:00 PM</span>
                      </p>
                      <p className="text-xs sm:text-sm font-bold text-slate-800 mt-1">
                        Sunday: <span className="font-medium text-[#10B981]">10:30 AM – 1:30 PM</span>
                      </p>
                    </div>
                  </div>
                </div>

                {/* Social Connects */}
                <div className="mt-6 pt-5 border-t border-slate-100">
                  <h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-3">
                    Connect With Us
                  </h4>
                  <div className="flex items-center gap-3">
                    <a
                      href={`https://wa.me/${whatsappNumber}`}
                      target="_blank"
                      rel="noreferrer"
                      className="w-11 h-11 rounded-xl bg-slate-50 border border-slate-200 text-slate-600 flex items-center justify-center hover:bg-[#10B981] hover:text-white hover:border-[#10B981] transition-all duration-300 flex-1"
                      title="WhatsApp"
                    >
                      <MessageCircle size={18} />
                    </a>
                    <a
                      href="https://www.instagram.com/niranjans_dental_care?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                      target="_blank"
                      rel="noreferrer"
                      className="w-11 h-11 rounded-xl bg-slate-50 border border-slate-200 text-slate-600 flex items-center justify-center hover:bg-pink-600 hover:text-white hover:border-pink-600 transition-all duration-300 flex-1"
                      title="Instagram"
                    >
                      <Instagram size={18} />
                    </a>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.3 }}
                className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 w-full sm:max-w-md lg:max-w-none mx-auto lg:mx-0"
              >
                <Button
                  size="lg"
                  onClick={() =>
                    window.open(
                      "https://www.practo.com/shimoga/doctor/akarsh-niranjan-dentist",
                      "_blank",
                      "noopener,noreferrer"
                    )
                  }
                  className="w-full sm:w-auto rounded-full px-8 h-16 bg-[#0F172A] hover:bg-slate-900 text-white font-bold text-sm tracking-wide flex items-center justify-center gap-3 shadow-xl active:scale-[0.98] transition-all duration-200 border-0 group"
                >
                  <Calendar className="h-4 w-4 text-[#2563EB] group-hover:rotate-12 transition-transform" />
                  <span>Book Through Practo</span>
                  <ArrowUpRight
                    size={16}
                    className="text-slate-400 group-hover:text-white transition-all"
                  />
                </Button>
              </motion.div>
            </div>

            {/* Right Column: WhatsApp Form & Map */}
            <div className="lg:col-span-7 space-y-4 sm:space-y-6">
              {/* WhatsApp Quick Form Card */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="rounded-2xl sm:rounded-3xl border border-slate-200 bg-white p-5 sm:p-8 shadow-xl shadow-slate-100 relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#2563EB]/05 rounded-full blur-2xl pointer-events-none" />

                <h3 className="text-lg sm:text-xl font-bold text-[#0F172A] mb-1.5 tracking-wide flex items-center gap-2">
                  <CalendarCheck2 className="text-[#2563EB]" size={22} />
                  Quick Appointment Request
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 mb-5 sm:mb-6 font-medium">
                  Fill in your preferred date and details to directly send your appointment request via WhatsApp.
                </p>

                <form onSubmit={handleWhatsAppSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[11px] font-bold uppercase text-slate-400 mb-1.5 tracking-wider">
                        Full Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Patient Name"
                        className="w-full h-11 px-4 rounded-xl bg-slate-50 border border-slate-200 focus:border-[#2563EB]/50 focus:bg-white text-slate-800 text-sm outline-none transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-bold uppercase text-slate-400 mb-1.5 tracking-wider">
                        Contact Number
                      </label>
                      <input
                        type="text"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="Phone Number"
                        className="w-full h-11 px-4 rounded-xl bg-slate-50 border border-slate-200 focus:border-[#2563EB]/50 focus:bg-white text-slate-800 text-sm outline-none transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[11px] font-bold uppercase text-slate-400 mb-1.5 tracking-wider">
                        Preferred Date
                      </label>
                      <input
                        type="date"
                        name="date"
                        required
                        value={formData.date}
                        onChange={handleInputChange}
                        className="w-full h-11 px-4 rounded-xl bg-slate-50 border border-slate-200 focus:border-[#2563EB]/50 focus:bg-white text-slate-800 text-sm outline-none transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-bold uppercase text-slate-400 mb-1.5 tracking-wider">
                        Treatment Needed
                      </label>
                      <div className="relative">
                        <select
                          name="treatment"
                          required
                          value={formData.treatment}
                          onChange={handleInputChange}
                          className="w-full h-11 px-4 rounded-xl bg-slate-50 border border-slate-200 focus:border-[#2563EB]/50 focus:bg-white text-slate-800 text-sm outline-none transition-all appearance-none cursor-pointer"
                        >
                          <option value="" disabled hidden>
                            Select Treatment Option
                          </option>
                          <option value="Dental Braces Fixing">Dental Braces Fixing</option>
                          <option value="Lingual Orthodontics">Lingual Orthodontics</option>
                          <option value="Laser Dentistry">Laser Dentistry</option>
                          <option value="Ceramic Crowns & Bridges">Ceramic Crowns & Bridges</option>
                          <option value="Root Canal (RCT)">Root Canal (RCT)</option>
                          <option value="Fixed Partial Denture (FPD)">Fixed Partial Denture (FPD)</option>
                          <option value="Dental Trauma Care">Dental Trauma Care</option>
                          <option value="Maxillofacial Prosthetics">Maxillofacial Prosthetics</option>
                          <option value="Scaling and Polishing">Scaling and Polishing</option>
                          <option value="Childrens Dentistry">Children's Dentistry</option>
                          <option value="Cosmetic Aesthetic Dentistry">Cosmetic Aesthetic Dentistry</option>
                          <option value="General Consultation">General Consultation</option>
                        </select>
                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-slate-400">
                          <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full mt-2 h-12 rounded-xl bg-[#2563EB] hover:bg-blue-700 text-white font-bold text-sm tracking-wide flex items-center justify-center gap-2 shadow-lg shadow-[#2563EB]/20 active:scale-[0.99] transition-all"
                  >
                    Confirm & Send to WhatsApp
                    <ArrowRight size={16} />
                  </button>
                </form>
              </motion.div>

              {/* Map Container */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="overflow-hidden rounded-2xl sm:rounded-3xl border border-slate-200 bg-white shadow-xl shadow-slate-100 group"
              >
                <iframe
                  title="Niranjans Dental Care & Orthodontic Center Map Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4593.192336329662!2d75.5636547!3d13.946856599999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbbaf4af87f13e9%3A0x3e3bcc336ece8ce0!2sNiranjans%20Dental%20Care%20%26%20Orthodontic%20Center!5e1!3m2!1sen!2sin!4v1784524359869!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  loading="lazy"
                  referrerPolicy="strict-origin-when-cross-origin"
                  className="min-h-[300px] sm:min-h-[360px] w-full border-0 opacity-95 group-hover:opacity-100 transition-all duration-500"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <FooterSection />
    </div>
  );
};

export default ContactSection;