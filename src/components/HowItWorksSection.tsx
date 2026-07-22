import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Sparkles,
  GraduationCap,
  Award,
  Stethoscope,
  CheckCircle2,
  ShieldCheck,
  Zap,
  Smile
} from "lucide-react";
import doctorAkarshImg from "../assets/doctor-hero.jpg"; // Replace with your image paths
import doctorSuprabhaImg from "../assets/doctor-hero.jpg"; // Replace with your image paths

const DOCTORS = [
  {
    id: "akarsh",
    name: "Dr. Akarsh Niranjan",
    title: "Chief Orthodontist & Dentofacial Orthopedist",
    credentials: "BDS, MDS (Orthodontics & Dentofacial Orthopedics)",
    regNo: "Reg. No: 45334 A",
    institution: "Specialist in Braces, Lingual Aligners & Structural Bite Correction",
    bio: "Dr. Akarsh Niranjan leads the orthodontic and dentofacial division at Niranjans Dental Care. Combining biomechanical precision with modern aesthetic alignment systems, he specializes in custom metal/ceramic braces, invisible aligner frameworks, and adult or pediatric jaw alignment.",
    specialties: [
      "Orthodontic Biomechanics",
      "Dentofacial Orthopedics",
      "Lingual & Clear Aligners",
      "Surgical Orthodontics"
    ],
    metric: "MDS Orthodontics",
    experience: "4+ Yrs Practice",
    image: doctorAkarshImg,
    badgeIcon: Smile,
    highlights: [
      {
        icon: GraduationCap,
        title: "Master of Dental Surgery (MDS)",
        desc: "Advanced post-graduate specialization in maxillofacial growth and orthodontic force systems."
      },
      {
        icon: Award,
        title: "Precision Smile Architecture",
        desc: "Specialized focus on low-profile brackets, aligner mechanics, and long-term joint stability."
      }
    ]
  },
  {
    id: "suprabha",
    name: "Dr. Suprabha K",
    title: "Chief Periodontist & Implantologist",
    credentials: "BDS, MDS (Periodontology & Oral Implantology)",
    regNo: "Verified Specialist Practitioner",
    institution: "Specialist in Gum Therapies, Laser Periodontics & Dental Implants",
    bio: "Dr. Suprabha K brings advanced mastery in periodontics and dental implantology to the practice. She focuses on preserving natural tissue architecture, treating complex gum disease with laser-assisted therapy, and placing permanent, bio-integrated dental implants.",
    specialties: [
      "Dental Implantology",
      "Laser Periodontal Therapy",
      "Regenerative Bone Grafts",
      "Cosmetic Gum Contouring"
    ],
    metric: "MDS Periodontics",
    experience: "Specialist Expert",
    image: doctorSuprabhaImg,
    badgeIcon: Zap,
    highlights: [
      {
        icon: GraduationCap,
        title: "Master of Dental Surgery (MDS)",
        desc: "Post-graduate expertise in periodontium restoration and advanced surgical implant placement."
      },
      {
        icon: ShieldCheck,
        title: "Minimally Invasive Gum Care",
        desc: "Expert in soft-tissue preservation, flap surgeries, and painless laser-assisted gum rehabilitation."
      }
    ]
  }
];

const DoctorProfileSection = () => {
  const [activeDoctorId, setActiveDoctorId] = useState("akarsh");
  const activeDoctor = DOCTORS.find((d) => d.id === activeDoctorId) || DOCTORS[0];

  return (
    <section className="relative py-16 sm:py-24 lg:py-28 bg-[#F8FAFC] overflow-hidden antialiased selection:bg-[#3B82F6]/10">
      
      {/* Background Glows matching ServicesSection */}
      <div className="absolute top-1/4 left-[-10%] w-[350px] sm:w-[500px] h-[350px] sm:h-[500px] bg-[#10B981]/10 rounded-full blur-[100px] sm:blur-[130px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-[-10%] w-[400px] sm:w-[600px] h-[400px] sm:h-[600px] bg-[#3B82F6]/05 rounded-full blur-[120px] sm:blur-[140px] pointer-events-none" />

      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#ECFDF5] border border-[#10B981]/25 text-[#0F172A] text-[11px] sm:text-xs font-semibold tracking-wider uppercase mb-4"
          >
            <Sparkles size={12} className="text-[#D97706]" />
            <span className="font-semibold text-[#0F172A] tracking-wider">Clinical Leadership</span>
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0F172A] tracking-tight leading-tight"
          >
            Specialist Expertise Behind <br className="hidden sm:inline" />
            <span className="bg-gradient-to-r from-[#2563EB] to-[#1D4ED8] bg-clip-text text-transparent">
              Your Complete Dental Health.
            </span>
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="mt-3 sm:mt-4 text-slate-600 text-sm sm:text-base lg:text-lg font-normal max-w-xl mx-auto leading-relaxed"
          >
            Meet the MDS specialist doctors leading orthodontic alignment, laser gum therapy, and implantology at Niranjans Dental Care.
          </motion.p>

          {/* Interactive Dual Doctor Selector Tabs */}
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-6 sm:mt-8 flex justify-center"
          >
            <div className="inline-flex p-1.5 bg-white rounded-full border border-slate-200/80 shadow-sm w-full max-w-md sm:w-auto">
              {DOCTORS.map((doc) => {
                const isActive = doc.id === activeDoctorId;
                return (
                  <button
                    key={doc.id}
                    onClick={() => setActiveDoctorId(doc.id)}
                    className={`relative flex-1 sm:flex-initial px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 flex items-center justify-center gap-2 ${
                      isActive
                        ? "text-white shadow-md shadow-slate-900/10"
                        : "text-slate-600 hover:text-[#0F172A]"
                    }`}
                  >
                    {isActive && (
                      <motion.div
                        layoutId="activeDoctorTab"
                        className="absolute inset-0 bg-[#0F172A] rounded-full"
                        transition={{ type: "spring", stiffness: 400, damping: 30 }}
                      />
                    )}
                    <span className="relative z-10 flex items-center gap-2 truncate">
                      <Stethoscope className={`w-3.5 h-3.5 ${isActive ? "text-[#10B981]" : "text-slate-400"}`} />
                      {doc.name}
                    </span>
                  </button>
                );
              })}
            </div>
          </motion.div>
        </div>

        {/* Doctor Animated Profile Frame */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeDoctor.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-10 items-stretch max-w-5xl mx-auto"
          >
            {/* Left Side: Portrait Card */}
            <div className="lg:col-span-5 flex items-center justify-center">
              <div className="relative w-full aspect-[4/5] max-w-[320px] sm:max-w-[360px] rounded-[20px] sm:rounded-[24px] bg-white border border-slate-200/80 p-3 sm:p-4 shadow-sm overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-b from-[#2563EB]/[0.02] to-transparent pointer-events-none" />
                
                <img
                  src={activeDoctor.image}
                  alt={activeDoctor.name}
                  className="w-full h-full object-cover rounded-[16px] sm:rounded-[20px] relative z-10 pointer-events-none transition-transform duration-500 group-hover:scale-[1.02]"
                />

                {/* Floating Badge on Portrait */}
                <div className="absolute bottom-5 left-5 right-5 z-20 bg-white/95 backdrop-blur-md border border-slate-200/80 rounded-2xl p-3 shadow-lg flex items-center justify-between">
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-wider text-[#2563EB]">{activeDoctor.metric}</p>
                    <p className="text-xs font-bold text-[#0F172A] mt-0.5">{activeDoctor.experience}</p>
                  </div>
                  <div className="w-8 h-8 rounded-xl bg-[#ECFDF5] border border-[#10B981]/20 text-[#10B981] flex items-center justify-center">
                    <CheckCircle2 size={16} />
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side: Detailed Glassmorphism Card */}
            <div className="lg:col-span-7 flex flex-col justify-between rounded-[20px] sm:rounded-[24px] border border-slate-200/80 bg-white/90 backdrop-blur-md p-5 sm:p-8 lg:p-9 relative shadow-sm overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-[3.5px] bg-gradient-to-r from-[#2563EB] via-[#1D4ED8] to-[#10B981]" />

              <div className="space-y-4 sm:space-y-5">
                <div>
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    <span className="text-[#0F172A] text-[10px] font-semibold uppercase tracking-wider bg-[#ECFDF5] border border-[#10B981]/25 px-3 py-1 rounded-full">
                      {activeDoctor.title}
                    </span>
                    <span className="text-slate-500 text-[10px] font-medium bg-[#F8FAFC] border border-slate-200/80 px-2.5 py-1 rounded-full">
                      {activeDoctor.regNo}
                    </span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0F172A] tracking-tight">
                    {activeDoctor.name}
                  </h3>

                  <div className="mt-2 text-slate-600 text-xs font-medium space-y-1">
                    <p className="inline-block text-[#2563EB] font-bold bg-[#2563EB]/05 border border-[#2563EB]/20 px-2.5 py-1 rounded-md text-xs">
                      {activeDoctor.credentials}
                    </p>
                    <p className="text-slate-500 leading-relaxed font-normal mt-1">{activeDoctor.institution}</p>
                  </div>
                </div>

                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-normal">
                  "{activeDoctor.bio}"
                </p>

                {/* Specialties */}
                <div>
                  <h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2">
                    Core Clinical Specialties
                  </h4>
                  <div className="flex flex-wrap gap-1.5 sm:gap-2">
                    {activeDoctor.specialties.map((spec, i) => (
                      <span
                        key={i}
                        className="text-xs font-semibold text-slate-700 bg-[#F8FAFC] border border-slate-200/80 px-3 py-1.5 rounded-xl"
                      >
                        {spec}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Card Footer */}
              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold">
                <span className="text-slate-400 uppercase tracking-wider text-[10px]">Medical Degree</span>
                <span className="text-[#2563EB] bg-[#F8FAFC] border border-slate-200/80 px-3 py-1 rounded-full text-[11px]">
                  {activeDoctor.metric}
                </span>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Doctor Highlights Footer */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeDoctor.id + "-highlights"}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mt-8 sm:mt-12 max-w-5xl mx-auto"
          >
            {activeDoctor.highlights.map((item, idx) => {
              const IconComp = item.icon;
              return (
                <div
                  key={idx}
                  className="flex items-start gap-4 p-4 sm:p-5 rounded-[20px] bg-white border border-slate-200/80 shadow-sm relative overflow-hidden"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#F1F5F9] border border-slate-100 flex items-center justify-center text-[#2563EB] shrink-0 mt-0.5">
                    <IconComp size={18} />
                  </div>
                  <div>
                    <h5 className="font-bold text-xs sm:text-sm text-[#0F172A] tracking-tight">{item.title}</h5>
                    <p className="text-slate-600 text-xs mt-0.5 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              );
            })}
          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
};

export default DoctorProfileSection;