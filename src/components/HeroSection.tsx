import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { 
  Calendar, 
  ArrowUpRight, 
  Award, 
  Star,
  ShieldCheck,
  Building2,
  MapPin,
  ChevronLeft,
  ChevronRight,
  Sparkles,
  Clock
} from "lucide-react";

// Real clinical / specialist portrait assets
import doctorHero from "@/assets/img 5.webp"; // Dr. Akarsh Niranjan Profile Portrait
import clinicInterior from "@/assets/img 2.webp"; // Scandinavian Medical Lounge / Operatory Suite

// Slide deck data highlighting the clinic first
const CAROUSEL_SLIDES = [
  {
    id: "clinic",
    title: "Niranjans Dental Care & Orthodontic Center",
    subtitle: "100 Feet Rd, Vinoba Nagara, Shivamogga",
    badge: "Premier Multi-Specialty Center",
    image: clinicInterior,
    tag: "Laser Dentistry & Modern Operatory",
  },
  {
    id: "doctor",
    title: "Led By Best Orthodontics Specialist",
    subtitle: "Orthodontics & Dentofacial Orthopaedics",
    badge: "Lead Specialist Practitioner",
    image: doctorHero,
    tag: "Verified KSDC License #45334 A",
  },
];

const PremiumOrthodonticHero = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  // Auto-slide exactly every 3 seconds (3000ms) with smooth transitions
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % CAROUSEL_SLIDES.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const handleNext = () => {
    setActiveSlide((prev) => (prev + 1) % CAROUSEL_SLIDES.length);
  };

  const handlePrev = () => {
    setActiveSlide((prev) => (prev - 1 + CAROUSEL_SLIDES.length) % CAROUSEL_SLIDES.length);
  };

  // Ultra-smooth animation variants using custom cubic-bezier
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.1 }
    }
  };

  const fadeUpVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const }
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-[#F8FAFC] overflow-hidden pt-28 pb-16 lg:py-0 antialiased selection:bg-[#3B82F6]/10">
      
      {/* Dynamic Background Glows */}
      <div className="absolute top-[-10%] right-[-5%] w-[650px] h-[650px] bg-[#10B981]/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-[-10%] left-[-5%] w-[550px] h-[550px] bg-[#3B82F6]/08 rounded-full blur-[130px] pointer-events-none" />

      <div className="w-full max-w-[1280px] mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          
          {/* LEFT COLUMN: Clinic-First Editorial Typography */}
          <div className="lg:col-span-6 flex flex-col justify-center space-y-8 text-center lg:text-left">
            
            {/* Top Badge: Clinic Highlight */}
            <motion.div 
              variants={fadeUpVariants}
              className="self-center lg:self-start inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#ECFDF5] border border-[#10B981]/25 text-[#0F172A] text-xs font-semibold tracking-wider uppercase"
            >
              <Building2 size={14} className="text-[#10B981]" />
              <span className="font-semibold text-[#0F172A] tracking-wider">Shivamogga's Advanced Dental Center</span>
            </motion.div>

            <div className="space-y-4">
              {/* Primary Headline: Clinic Focused */}
              <motion.h1 
                variants={fadeUpVariants}
                className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0F172A] tracking-tight leading-[1.15]"
              >
                Niranjans Dental Care <br />
                <span className="bg-gradient-to-r from-[#2563EB] to-[#1D4ED8] bg-clip-text text-transparent">
                  & Orthodontic Center
                </span>
              </motion.h1>

              {/* Sub-headline: Specialist Lead */}
              <motion.div 
                variants={fadeUpVariants}
                className="py-1.5 border-l-2 border-[#D97706] pl-4 text-left inline-block max-w-xl mx-auto lg:mx-0"
              >
                <p className="text-[#0F172A] font-bold text-sm sm:text-base tracking-wide uppercase">
                  Led By Expert Dentist's
                </p>
                <p className="text-slate-500 text-xs sm:text-sm font-medium">
                  Orthodontics & Dentofacial Orthopaedics Specialist
                </p>
              </motion.div>

              <motion.p 
                variants={fadeUpVariants}
                className="text-slate-600 text-base sm:text-lg font-normal max-w-xl mx-auto lg:mx-0 leading-relaxed pt-1"
              >
                A modern dental healthcare facility providing advanced braces, laser treatments, ceramic crowns, root canals, and cosmetic smile designs with state-of-the-art medical technology.
              </motion.p>
            </div>

            {/* Action Buttons */}
            <motion.div 
              variants={fadeUpVariants}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 w-full sm:max-w-md lg:max-w-none mx-auto lg:mx-0"
            >
              <Button
                size="lg"
                onClick={() => window.open("https://www.practo.com/shimoga/doctor/akarsh-niranjan-dentist", "_blank", "noopener,noreferrer")}
                className="w-full sm:w-auto rounded-full px-8 h-14 bg-[#2563EB] hover:bg-[#1D4ED8] text-white font-medium text-sm tracking-wide flex items-center justify-center gap-2 shadow-lg shadow-[#2563EB]/20 active:scale-[0.99] transition-all duration-200 border-0 group"
              >
                <Calendar className="h-4 w-4 text-white" />
                <span>Book Appointment</span>
                <ArrowUpRight size={15} className="text-white/80 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Button>

              <Button
                variant="outline"
                size="lg"
                onClick={() => window.location.href = "tel:+918618955829"}
                className="w-full sm:w-auto rounded-full px-8 h-14 border-slate-200 bg-white text-[#0F172A] hover:bg-slate-50 font-medium text-sm shadow-sm active:scale-[0.99] transition-all duration-200"
              >
                <span>Call +91 86189 55829</span>
              </Button>
            </motion.div>

            {/* Location & Practice Metrics */}
            <motion.div 
              variants={fadeUpVariants}
              className="grid grid-cols-3 gap-6 pt-6 border-t border-slate-200/80 max-w-xl mx-auto lg:mx-0 text-left"
            >
              <div>
                <div className="flex items-center gap-1 text-[#0F172A]">
                  <MapPin className="h-4 w-4 text-[#2563EB]" />
                  <span className="block text-base font-bold tracking-tight">Vinoba Nagara</span>
                </div>
                <span className="block text-[11px] font-semibold text-slate-400 uppercase tracking-wider mt-0.5">Shivamogga</span>
              </div>
              <div>
                <div className="flex items-center gap-1 text-[#0F172A]">
                  <Clock className="h-4 w-4 text-[#10B981]" />
                  <span className="block text-base font-bold tracking-tight">Mon – Sat</span>
                </div>
                <span className="block text-[11px] font-semibold text-slate-400 uppercase tracking-wider mt-0.5">10AM–2PM | 4:30–8PM</span>
              </div>
              <div>
                <div className="flex items-center gap-1 text-[#0F172A]">
                  <ShieldCheck className="h-4 w-4 text-[#D97706]" />
                  <span className="block text-base font-bold tracking-tight">Verified</span>
                </div>
                <span className="block text-[11px] font-semibold text-slate-400 uppercase tracking-wider mt-0.5">KSDC Reg #45334 A</span>
              </div>
            </motion.div>
          </div>

          {/* RIGHT COLUMN: Smooth Auto-Sliding 3-Second Deck */}
          <div className="lg:col-span-6 relative w-full flex flex-col items-center justify-center lg:items-end mt-4 lg:mt-0 select-none">
            
            {/* Outer Glass Frame */}
            <div className="relative w-full max-w-[460px] aspect-[4/5] rounded-[32px] p-3 bg-white/80 backdrop-blur-xl border border-white/90 shadow-2xl shadow-slate-200/80">
              
              <div className="relative w-full h-full rounded-[24px] overflow-hidden bg-slate-950 group">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeSlide}
                    initial={{ opacity: 0, scale: 1.04 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.96 }}
                    transition={{ 
                      duration: 0.9, 
                      ease: [0.16, 1, 0.3, 1] 
                    }}
                    className="relative w-full h-full"
                  >
                    <img 
                      src={CAROUSEL_SLIDES[activeSlide].image} 
                      alt={CAROUSEL_SLIDES[activeSlide].title} 
                      className="w-full h-full object-cover"
                    />
                    
                    {/* Soft Vignette Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/25 to-transparent" />

                    {/* Content Overlay */}
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white space-y-2">
                      <span className="inline-block px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-[10px] font-bold tracking-widest uppercase text-white/90 border border-white/20">
                        {CAROUSEL_SLIDES[activeSlide].badge}
                      </span>
                      <h3 className="text-xl font-bold text-white tracking-tight leading-snug">
                        {CAROUSEL_SLIDES[activeSlide].title}
                      </h3>
                      <p className="text-xs text-slate-300 font-medium">
                        {CAROUSEL_SLIDES[activeSlide].subtitle}
                      </p>
                    </div>
                  </motion.div>
                </AnimatePresence>

                {/* Manual Navigation Arrows */}
                <div className="absolute top-4 right-4 z-30 flex items-center gap-2">
                  <button
                    onClick={handlePrev}
                    aria-label="Previous Slide"
                    className="w-9 h-9 rounded-full bg-slate-900/40 hover:bg-slate-900/80 backdrop-blur-md text-white flex items-center justify-center border border-white/20 transition-all active:scale-95"
                  >
                    <ChevronLeft size={18} />
                  </button>
                  <button
                    onClick={handleNext}
                    aria-label="Next Slide"
                    className="w-9 h-9 rounded-full bg-slate-900/40 hover:bg-slate-900/80 backdrop-blur-md text-white flex items-center justify-center border border-white/20 transition-all active:scale-95"
                  >
                    <ChevronRight size={18} />
                  </button>
                </div>

                {/* 3-Second Active Progress Bar / Dots */}
                <div className="absolute top-4 left-4 z-30 flex items-center gap-1.5">
                  {CAROUSEL_SLIDES.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveSlide(index)}
                      className={`h-1.5 rounded-full transition-all duration-500 ${
                        activeSlide === index ? "w-7 bg-white" : "w-1.5 bg-white/40"
                      }`}
                      aria-label={`Go to slide ${index + 1}`}
                    />
                  ))}
                </div>
              </div>

             

            </div>

          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PremiumOrthodonticHero;