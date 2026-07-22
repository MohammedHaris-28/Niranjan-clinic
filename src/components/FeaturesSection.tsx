import React, { useState, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Sparkles,
  Smile,
  Baby,
  Sparkle,
  ArrowRight,
  Bookmark,
  Zap,
  CheckCircle2,
  Activity,
  Crown,
  Sliders,
  ChevronsLeftRight
} from "lucide-react";

// Treatments mapped directly from Niranjans Dental Care clinical offerings
const services = [
  {
    id: "ortho",
    icon: Smile,
    title: "Orthodontics & Dental Braces",
    description: "Precision teeth alignment, metal/ceramic braces fixing, and structural bite corrections led by Specialist Dr. Akarsh Niranjan, MDS.",
    tag: "Specialist Specialty",
    category: "Orthodontics",
    featured: true,
    image: "https://i.pinimg.com/736x/3c/50/db/3c50db2e1dc1ebf633f8f275a810b017.jpg"
  },
  {
    id: "laser",
    icon: Zap,
    title: "Laser Dentistry",
    description: "Advanced, painless soft-tissue procedures and minimally invasive laser therapies ensuring ultra-fast healing times.",
    tag: "Advanced Tech",
    category: "Specialized Care",
    featured: false,
    image: "https://i.pinimg.com/736x/04/d6/26/04d6269e6ba669ef875c8ed7840e86e5.jpg"
  },
  {
    id: "aligners",
    icon: Sparkle,
    title: "Lingual & Clear Orthodontics",
    description: "Discreet orthodontic solutions placed behind the teeth or clear removable trays for complete aesthetic freedom.",
    tag: "Cosmetic Aligners",
    category: "Orthodontics",
    featured: false,
    image: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: "rct",
    icon: Activity,
    title: "Root Canal Treatment (RCT)",
    description: "Single-visit and micro-endodontic RCT targeting deep dental pulp infections with maximum natural tooth preservation.",
    tag: "Pain-Free Care",
    category: "Restorative",
    featured: false,
    image: "https://i.pinimg.com/736x/ef/16/19/ef161928e6608173ef9503dd33fb4d27.jpg"
  },
  {
    id: "crowns",
    icon: Crown,
    title: "Ceramic Crowns & Bridges",
    description: "Biocompatible, metal-free ceramic crowns and Fixed Partial Dentures (FPD) engineered for high durability.",
    tag: "Restorative",
    category: "Restorative",
    featured: false,
    image: "https://i.pinimg.com/736x/70/b5/a1/70b5a14d75eb5f4f6e9080b96e28b22e.jpg"
  },
  {
    id: "pediatric",
    icon: Baby,
    title: "Children's Dentistry",
    description: "Gentle, non-invasive pediatric dental procedures designed specifically to comfort young patients and guard primary smiles.",
    tag: "Pediatric Care",
    category: "Pediatric Care",
    featured: true,
    image : "src/assets/img 5.webp" // Replace with actual image path
  },
];

const CATEGORIES = ["All", "Orthodontics", "Restorative", "Specialized Care"];

/** Interactive Before/After Split Image Comparison Slider **/
const BeforeAfterSlider = () => {
  const [sliderPos, setSliderPos] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    let percentage = (x / rect.width) * 100;
    if (percentage < 0) percentage = 0;
    if (percentage > 100) percentage = 100;
    setSliderPos(percentage);
  }, []);

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return;
    handleMove(e.touches[0].clientX);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  };

  return (
    <div className="w-full max-w-3xl mx-auto my-10 sm:my-14">
      <div className="text-center mb-4 sm:mb-6">
        <h3 className="text-xl sm:text-2xl font-extrabold text-[#0F172A] tracking-tight">
          Real Smiles, Proven Transformations
        </h3>
        <p className="text-xs sm:text-sm text-slate-500 mt-1">
          Drag the handle to view before & after results from our clinical treatments
        </p>
      </div>

      <div
        ref={containerRef}
        onMouseDown={() => setIsDragging(true)}
        onMouseUp={() => setIsDragging(false)}
        onMouseLeave={() => setIsDragging(false)}
        onMouseMove={handleMouseMove}
        onTouchStart={() => setIsDragging(true)}
        onTouchEnd={() => setIsDragging(false)}
        onTouchMove={handleTouchMove}
        className="relative h-[260px] sm:h-[380px] w-full rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl border border-slate-200 select-none cursor-ew-resize touch-none"
      >
        {/* AFTER Image (Background) */}
        <img
          src="src/assets/white.png" // Replace with actual image path
          alt="After Dental Treatment"
          className="absolute inset-0 w-full h-full object-cover pointer-events-none"
        />

        {/* BEFORE Image (Clipped Foreground) */}
        <div
          className="absolute inset-0 overflow-hidden pointer-events-none"
          style={{ width: `${sliderPos}%` }}
        >
          <img
            src="src/assets/yellow.png" // Replace with actual image path
            alt="Before Dental Treatment"
            className="absolute inset-0 w-full h-full object-cover max-w-none"
            style={{ width: containerRef.current ? containerRef.current.offsetWidth : "100%" }}
          />
        </div>

        {/* Split Divider Line */}
        <div
          className="absolute top-0 bottom-0 w-1 bg-white shadow-md z-10 pointer-events-none"
          style={{ left: `${sliderPos}%` }}
        >
          {/* Centered Handle Knob */}
          <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-white shadow-lg border border-slate-200 flex items-center justify-center text-[#2563EB]">
            <ChevronsLeftRight className="w-5 h-5 sm:w-6 sm:h-6" />
          </div>
        </div>

        {/* Corner Labels */}
        <span className="absolute bottom-3 left-3 bg-slate-900/70 backdrop-blur-md text-white text-[10px] sm:text-xs px-2.5 py-1 rounded-full font-semibold uppercase tracking-wider z-20">
          Before
        </span>
        <span className="absolute bottom-3 right-3 bg-[#2563EB]/80 backdrop-blur-md text-white text-[10px] sm:text-xs px-2.5 py-1 rounded-full font-semibold uppercase tracking-wider z-20">
          After
        </span>
      </div>
    </div>
  );
};

const ServicesSection = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredServices = services.filter(
    (service) =>
      activeCategory === "All" ||
      service.category === activeCategory ||
      (activeCategory === "Orthodontics" && service.id === "ortho")
  );

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08, delayChildren: 0.1 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] as const }
    }
  };

  return (
    <section className="relative py-16 sm:py-24 lg:py-28 bg-[#F8FAFC] overflow-hidden antialiased selection:bg-[#3B82F6]/10">
      
      {/* Background Glows */}
      <div className="absolute top-1/4 left-[-10%] w-[350px] sm:w-[500px] h-[350px] sm:h-[500px] bg-[#10B981]/10 rounded-full blur-[100px] sm:blur-[130px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-[-10%] w-[400px] sm:w-[600px] h-[400px] sm:h-[600px] bg-[#3B82F6]/05 rounded-full blur-[120px] sm:blur-[140px] pointer-events-none" />

      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-8 sm:mb-12">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#ECFDF5] border border-[#10B981]/25 text-[#0F172A] text-[11px] sm:text-xs font-semibold tracking-wider uppercase mb-4"
          >
            <Sparkles size={12} className="text-[#D97706]" />
            <span className="font-semibold text-[#0F172A] tracking-wider">Clinical Treatments Suite</span>
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0F172A] tracking-tight leading-tight"
          >
            Specialized Dental Care. <br className="hidden sm:inline" />
            <span className="bg-gradient-to-r from-[#2563EB] to-[#1D4ED8] bg-clip-text text-transparent">
              Designed Around Patient Comfort.
            </span>
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="mt-3 sm:mt-4 text-slate-600 text-sm sm:text-base lg:text-lg font-normal max-w-2xl mx-auto leading-relaxed"
          >
            Comprehensive treatments offered at Niranjans Dental Care & Orthodontic Center in Vinoba Nagara, Shivamogga.
          </motion.p>
        </div>

        {/* Interactive Before & After Transformation Slider Container */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <BeforeAfterSlider />
        </motion.div>

        {/* Category Filter Tabs */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="flex items-center justify-start sm:justify-center gap-2 mb-8 sm:mb-12 overflow-x-auto pb-2 scrollbar-none touch-pan-x"
        >
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-all duration-200 ${
                activeCategory === cat
                  ? "bg-[#0F172A] text-white shadow-md shadow-slate-900/10"
                  : "bg-white text-slate-600 hover:bg-slate-100 border border-slate-200/80"
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Adaptive Services Grid with Visual Media */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 auto-rows-fr"
        >
          <AnimatePresence mode="popLayout">
            {filteredServices.map((service) => {
              const Icon = service.icon;

              return (
                <motion.div
                  key={service.id}
                  layout
                  variants={cardVariants}
                  initial="hidden"
                  animate="visible"
                  exit={{ opacity: 0, scale: 0.95 }}
                  whileHover={{ 
                    y: -4, 
                    boxShadow: "0 16px 40px rgba(15, 23, 42, 0.06)",
                    transition: { duration: 0.2 }
                  }}
                  className={`group relative overflow-hidden rounded-[20px] sm:rounded-[24px] border border-slate-200/80 bg-white/90 backdrop-blur-md p-5 sm:p-7 flex flex-col justify-between transition-colors duration-300 hover:border-[#2563EB]/40 ${
                    service.featured ? "col-span-1 md:col-span-2 lg:col-span-2" : "col-span-1"
                  }`}
                >
                  <div>
                    {/* Media Image Header */}
                    <div className="relative w-full h-40 sm:h-48 rounded-xl overflow-hidden mb-5">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent" />
                      <span className="absolute top-3 right-3 text-[10px] font-semibold uppercase tracking-wider bg-white/90 backdrop-blur-md text-slate-700 border border-white/50 px-2.5 py-1 rounded-full shadow-sm">
                        {service.tag}
                      </span>
                    </div>

                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-[#F1F5F9] border border-slate-100 flex items-center justify-center text-[#2563EB] transition-colors group-hover:bg-[#2563EB]/10 shrink-0">
                        <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
                      </div>
                      <h3 className="text-lg sm:text-xl font-bold text-[#0F172A] tracking-tight">
                        {service.title}
                      </h3>
                    </div>

                    <p className={`text-slate-600 text-xs sm:text-sm leading-relaxed ${service.featured ? "max-w-2xl" : "max-w-none"}`}>
                      {service.description}
                    </p>
                  </div>

                  {/* Footer Action */}
                  <div className="mt-6 sm:mt-8 pt-3 sm:pt-4 border-t border-slate-100 flex items-center justify-between text-[#2563EB] text-[11px] sm:text-xs font-semibold uppercase tracking-wider">
                    <span>Consult Doctor</span>
                    <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#F8FAFC] border border-slate-200 text-slate-400 flex items-center justify-center transition-all duration-300 group-hover:bg-[#2563EB] group-hover:border-[#2563EB] group-hover:text-white group-hover:translate-x-0.5">
                      <ArrowRight size={13} />
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {/* Bottom Verification Hub */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-12 sm:mt-16 rounded-[20px] sm:rounded-[24px] border border-slate-200/80 bg-white p-6 sm:p-8 lg:p-10 flex flex-col lg:flex-row gap-6 lg:gap-10 items-center justify-between shadow-sm relative overflow-hidden"
        >
          <div className="flex items-start sm:items-center gap-4 text-left w-full lg:w-auto">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-[#ECFDF5] flex items-center justify-center text-[#10B981] shrink-0 border border-[#10B981]/20">
              <Bookmark className="w-5 h-5" />
            </div>
            <div>
              <div className="inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-widest text-[#D97706] mb-0.5">
                <CheckCircle2 className="w-3 h-3" />
                Verified Specialist Practice
              </div>
              <h4 className="font-bold text-[#0F172A] text-base sm:text-lg tracking-tight">Niranjans Dental Care & Orthodontic Center</h4>
              <p className="text-slate-500 text-xs mt-0.5 font-medium">Old KEB Office, 100 Feet Rd, Vinoba Nagara, Shivamogga, KA 577204</p>
            </div>
          </div>

          <div className="h-px w-full lg:h-12 lg:w-px bg-slate-200" />

          {/* Stats Bar */}
          <div className="grid grid-cols-3 gap-4 sm:gap-8 text-center lg:text-left w-full lg:w-auto justify-between">
            <div>
              <h5 className="text-xl sm:text-2xl font-bold text-[#0F172A] tracking-tight">4+ Yrs</h5>
              <p className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider mt-0.5">Specialist Exp.</p>
            </div>
            <div>
              <h5 className="text-xl sm:text-2xl font-bold text-[#0F172A] tracking-tight">MDS</h5>
              <p className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider mt-0.5">Orthodontics</p>
            </div>
            <div>
              <h5 className="text-xl sm:text-2xl font-bold text-[#0F172A] tracking-tight">Verified</h5>
              <p className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider mt-0.5">Reg #45334 A</p>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default ServicesSection;