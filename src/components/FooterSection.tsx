import React from "react";
import {
  Phone,
  Mail,
  MapPin,
  Instagram,
  Clock,
  ChevronRight,
  MessageCircle,
  Sparkles
} from "lucide-react";

import logo from "@/assets/logo-dental.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden bg-white border-t border-slate-200/80 antialiased selection:bg-[#2563EB]/10">
      
      {/* Background Ambient Glows */}
      <div className="absolute top-0 left-[-5%] w-[350px] h-[350px] bg-[#2563EB]/03 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 right-[-5%] w-[350px] h-[350px] bg-[#10B981]/05 rounded-full blur-[100px] pointer-events-none" />

      <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Operational Footer Matrix */}
        <div className="py-16 lg:py-20">
          <div className="grid gap-12 lg:grid-cols-12">
            
            {/* Column 1: Core Clinic Brand Identity (Span 4) */}
            <div className="lg:col-span-4 space-y-6">
              <div className="flex items-center gap-3.5">
                <div className="w-12 h-12 rounded-2xl overflow-hidden border border-slate-200/80 bg-white p-2 flex items-center justify-center shadow-sm">
                  <img
                    src={logo}
                    alt="Niranjans Dental Care Logo"
                    className="w-full h-full object-contain"
                  />
                </div>

                <div>
                  <h3 className="font-extrabold text-lg sm:text-xl text-[#0F172A] tracking-tight">
                    Niranjans Dental Care
                  </h3>
                  <p className="text-[11px] font-semibold text-[#2563EB] uppercase tracking-wider mt-0.5">
                    & Orthodontic Center
                  </p>
                </div>
              </div>

              {/* Lead Doctor Identity Profile */}
              <div className="p-4 rounded-2xl bg-[#F8FAFC] border border-slate-200/60 space-y-1.5">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-extrabold text-[#0F172A]">Dr. Akarsh Niranjan</p>
                  <span className="text-[10px] font-bold text-[#10B981] bg-[#ECFDF5] border border-[#10B981]/25 rounded-md px-2 py-0.5">
                    Verified
                  </span>
                </div>
                <p className="text-xs font-semibold text-slate-500">
                  BDS, MDS (Orthodontics & Dentofacial Orthopaedics)
                </p>
                <p className="text-[11px] font-bold text-[#2563EB] tracking-wide">
                  Orthodontist & Specialist Dentist
                </p>
              </div>

              <p className="text-slate-600 text-sm font-normal leading-relaxed max-w-sm">
                Providing specialized orthodontic transformations, clear aligners, laser dentistry, and advanced dental care under expert clinical supervision in Shivamogga.
              </p>

              {/* Verified Direct Social Links */}
              <div className="flex gap-2.5 pt-2">
                <a
                  href="https://www.instagram.com/niranjans_dental_care?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl bg-[#F8FAFC] border border-slate-200/80 text-slate-600 hover:text-[#2563EB] hover:border-[#2563EB]/40 hover:bg-[#2563EB]/05 transition-all flex items-center justify-center group shadow-sm"
                  aria-label="Instagram Profile Link"
                >
                  <Instagram size={18} className="group-hover:scale-105 transition-transform" />
                </a>

                <a
                  href="https://wa.me/918618955829"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl bg-[#F8FAFC] border border-slate-200/80 text-slate-600 hover:text-[#10B981] hover:border-[#10B981]/40 hover:bg-[#ECFDF5] transition-all flex items-center justify-center group shadow-sm"
                  aria-label="WhatsApp Route Connection Link"
                >
                  <MessageCircle size={18} className="group-hover:scale-105 transition-transform" />
                </a>
              </div>
            </div>

            {/* Column 2: Treatments Matrix Dashboard (Span 4) */}
            <div className="lg:col-span-4 grid grid-cols-2 gap-6 sm:gap-4">
              <div>
                <h4 className="font-extrabold text-[#0F172A] text-xs uppercase tracking-wider mb-5">
                  Treatments
                </h4>
                <ul className="space-y-3">
                  {[
                    "Dental Braces Fixing",
                    "Lingual Orthodontics",
                    "Root Canal (RCT)",
                    "Dental Trauma Care",
                    "Fixed Partial Denture",
                    "Maxillofacial Prosthetics"
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-1.5 text-xs sm:text-sm font-medium text-slate-600 group select-none">
                      <ChevronRight size={14} className="text-slate-300 group-hover:text-[#2563EB] transition-colors shrink-0" />
                      <span className="truncate">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="font-extrabold text-[#0F172A] text-xs uppercase tracking-wider mb-5">
                  Specialties
                </h4>
                <ul className="space-y-3">
                  {[
                    "Laser Dentistry",
                    "Ceramic Crowns",
                    "Bridges Fixing",
                    "Scaling & Polishing",
                    "Cosmetic Dentistry",
                    "Children's Dentistry"
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-1.5 text-xs sm:text-sm font-medium text-slate-600 group select-none">
                      <ChevronRight size={14} className="text-slate-300 group-hover:text-[#2563EB] transition-colors shrink-0" />
                      <span className="truncate">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Column 3: Contact & Location Info + Live Map (Span 4) */}
            <div className="lg:col-span-4 space-y-6">
              <h4 className="font-extrabold text-[#0F172A] text-xs uppercase tracking-wider mb-2">
                Contact & Location
              </h4>

              <div className="space-y-4">
                {/* Phone Integration */}
                <div className="flex gap-3.5 items-start">
                  <div className="w-9 h-9 rounded-xl bg-[#2563EB]/10 border border-[#2563EB]/20 flex items-center justify-center text-[#2563EB] mt-0.5 shrink-0">
                    <Phone size={15} />
                  </div>
                  <div>
                    <a href="tel:+918618955829" className="font-extrabold text-[#0F172A] text-sm tracking-tight hover:text-[#2563EB] transition-colors">
                      +91 86189 55829
                    </a>
                    <p className="text-xs font-normal text-slate-500 mt-0.5">
                      Clinic Desk Assistance
                    </p>
                  </div>
                </div>

                {/* Operating Hours Mapping */}
                <div className="flex gap-3.5 items-start">
                  <div className="w-9 h-9 rounded-xl bg-[#10B981]/10 border border-[#10B981]/20 flex items-center justify-center text-[#10B981] mt-0.5 shrink-0">
                    <Clock size={15} />
                  </div>
                  <div className="text-xs text-slate-600 space-y-0.5">
                    <p className="font-bold text-[#0F172A] text-xs">
                      Mon – Sat: <span className="font-medium text-slate-600">10:00 AM – 2:00 PM | 4:30 PM – 8:00 PM</span>
                    </p>
                    <p className="font-bold text-[#0F172A] text-xs">
                      Sunday: <span className="font-medium text-[#10B981]">10:30 AM – 1:30 PM</span>
                    </p>
                  </div>
                </div>

                {/* Address Mapping & Embedded Map Wrapper */}
                <div className="flex gap-3.5 items-start pt-3 border-t border-slate-100">
                  <div className="w-9 h-9 rounded-xl bg-[#2563EB]/10 border border-[#2563EB]/20 flex items-center justify-center text-[#2563EB] mt-0.5 shrink-0">
                    <MapPin size={15} />
                  </div>
                  <div className="w-full space-y-3">
                    <p className="font-normal text-slate-600 text-xs sm:text-sm leading-relaxed">
                      Old KEB Office, 100 Feet Rd, beside Bhagyaram Orthopedic Center, Vinoba Nagara, Shivamogga, Karnataka 577204
                    </p>
                    
                    {/* Embedded Map Interface */}
                    <div className="w-full h-32 rounded-xl overflow-hidden border border-slate-200 shadow-inner group relative bg-slate-50">
                      <iframe 
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4593.192336329662!2d75.5636547!3d13.946856599999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbbaf4af87f13e9%3A0x3e3bcc336ece8ce0!2sNiranjans%20Dental%20Care%20%26%20Orthodontic%20Center!5e1!3m2!1sen!2sin!4v1784524359869!5m2!1sen!2sin"
                        className="w-full h-full border-0 grayscale-[20%] group-hover:grayscale-0 transition-all duration-500"
                        allowFullScreen={true}
                        loading="lazy" 
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Niranjans Dental Care Google Maps Location"
                      />
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* Bottom Legal / Editorial Stripe */}
        <div className="border-t border-slate-200/80 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-xs font-normal text-slate-500 text-center md:text-left">
              © {currentYear} Niranjans Dental Care & Orthodontic Center. All rights reserved. Designed and developed by{" "}
              <a 
                href="https://hash2codeteam.vercel.app" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-[#2563EB] hover:underline font-semibold transition-colors"
              >
                #2Code
              </a>.
            </p>

            <div className="flex items-center gap-6 text-xs font-semibold text-slate-500">
              <a href="#" className="hover:text-[#0F172A] transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-[#0F172A] transition-colors">Terms & Conditions</a>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;