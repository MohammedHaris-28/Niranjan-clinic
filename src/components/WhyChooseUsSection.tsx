import React from "react";
import { motion } from "framer-motion";
import {
  ShieldCheck,
  Award,
  Clock3,
  HeartHandshake,
  Microscope,
  Sparkles,
  CheckCircle2,
  Star,
  Quote
} from "lucide-react";

const features = [
  {
    icon: ShieldCheck,
    title: "Safe & Hygienic Environment",
    description:
      "Strict multi-stage clinical sterilization protocols and modern infection-control standards ensure absolute safety during every visit.",
  },
  {
    icon: Microscope,
    title: "Advanced Dental Technology",
    description:
      "Cutting-edge diagnostic equipment and laser dentistry tools deliver high-precision, efficient, and virtually painless oral care.",
  },
  {
    icon: HeartHandshake,
    title: "Personalized Treatment Plans",
    description:
      "Every patient receives undivided specialist attention, transparent diagnostics, and tailored long-term oral health roadmaps.",
  },
  {
    icon: Award,
    title: "Elite Clinical Expertise",
    description:
      "MDS-qualified specialists combining structural science with aesthetic dentistry for predictable, lasting transformations.",
  },
  {
    icon: Clock3,
    title: "Convenient Scheduling",
    description:
      "Streamlined booking and minimal waiting times designed to respect and accommodate your busy daily lifestyle.",
  },
  {
    icon: Sparkles,
    title: "Comfort-Focused Experience",
    description:
      "Gentle treatment techniques intentionally engineered to relieve dental anxiety and foster a calm, relaxing environment.",
  },
];

const WhyChooseUsSection = () => {
  return (
    <section 
      id="why-choose-us" 
      className="relative py-16 sm:py-24 lg:py-28 bg-[#F8FAFC] overflow-hidden antialiased selection:bg-[#3B82F6]/10 border-t border-slate-200/60"
    >
      {/* Background Ambient Glows */}
      <div className="absolute top-0 right-0 w-[350px] sm:w-[500px] h-[350px] sm:h-[500px] bg-[#10B981]/10 rounded-full blur-[100px] sm:blur-[130px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[350px] sm:w-[450px] h-[350px] sm:h-[450px] bg-[#3B82F6]/05 rounded-full blur-[110px] sm:blur-[130px] pointer-events-none" />

      <div className="w-full max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="max-w-3xl mx-auto text-center mb-12 sm:mb-16 lg:mb-20"
        >
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#ECFDF5] border border-[#10B981]/25 text-[#0F172A] text-[11px] sm:text-xs font-semibold tracking-wider uppercase mb-4">
            <Sparkles size={12} className="text-[#D97706]" />
            <span>Why Patients Trust Us</span>
          </span>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0F172A] tracking-tight leading-tight">
            Exceptional Dental Care <br className="hidden sm:inline" />
            <span className="bg-gradient-to-r from-[#2563EB] to-[#1D4ED8] bg-clip-text text-transparent">
              With A Premium Touch.
            </span>
          </h2>

          <p className="mt-3 sm:mt-4 text-slate-600 text-sm sm:text-base lg:text-lg font-normal leading-relaxed max-w-2xl mx-auto">
            Combining advanced dental science, strict hygiene protocols, and MDS specialist care at Niranjans Dental Care & Orthodontic Center.
          </p>
        </motion.div>

        {/* Main Grid Interface Layout */}
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left Block: Interactive Feature Cards (Span 7) */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
            {features.map((feature, index) => {
              const Icon = feature.icon;

              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.05,
                    ease: "easeOut"
                  }}
                  className="group rounded-[20px] sm:rounded-[24px] border border-slate-200/80 bg-white/90 backdrop-blur-md p-5 sm:p-6 hover:border-[#2563EB]/40 transition-all duration-300 hover:-translate-y-1 shadow-sm hover:shadow-md"
                >
                  {/* Icon Container */}
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-[#F1F5F9] border border-slate-100 flex items-center justify-center mb-4 sm:mb-5 group-hover:bg-[#2563EB]/10 transition-all duration-300 group-hover:scale-105 shrink-0">
                    <Icon className="w-4 h-4 sm:w-5 sm:h-5 text-[#2563EB] transition-colors" />
                  </div>

                  <h3 className="font-bold text-[#0F172A] text-base sm:text-lg mb-1.5 group-hover:text-[#2563EB] transition-colors tracking-tight">
                    {feature.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 font-normal leading-relaxed">
                    {feature.description}
                  </p>
                </motion.div>
              );
            })}
          </div>

          {/* Right Block: Premium Brand Trust Panel (Span 5) */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
            className="lg:col-span-5 lg:sticky lg:top-28"
          >
            <div className="rounded-[20px] sm:rounded-[24px] border border-slate-200/80 bg-white p-6 sm:p-8 relative overflow-hidden shadow-sm">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#10B981]/05 rounded-bl-full pointer-events-none" />

              <div className="inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider text-[#10B981] mb-2">
                <CheckCircle2 size={13} />
                <span>Patient Trust Standard</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0F172A] leading-tight tracking-tight">
                Dedicated To Your <br />
                <span className="text-[#2563EB]">Long-Term Oral Health</span>
              </h3>

              <p className="mt-3 text-slate-600 text-xs sm:text-sm font-normal leading-relaxed">
                Our clinical mandate is to provide transparent diagnostic clarity, comfortable treatments, and world-class care parameters to keep your smile healthy for life.
              </p>

              {/* Data Metric Matrices */}
              <div className="grid grid-cols-2 gap-3 sm:gap-4 mt-6 sm:mt-8">
                <div className="rounded-2xl bg-[#F8FAFC] border border-slate-200/80 p-3.5 sm:p-4">
                  <h4 className="text-xl sm:text-2xl font-bold text-[#0F172A] tracking-tight">
                    12K+
                  </h4>
                  <p className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider mt-0.5">
                    Patients Cared For
                  </p>
                </div>

                <div className="rounded-2xl bg-[#F8FAFC] border border-slate-200/80 p-3.5 sm:p-4">
                  <h4 className="text-xl sm:text-2xl font-bold text-[#2563EB] tracking-tight">
                    MDS
                  </h4>
                  <p className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider mt-0.5">
                    Specialist Doctors
                  </p>
                </div>

                <div className="rounded-2xl bg-[#F8FAFC] border border-slate-200/80 p-3.5 sm:p-4">
                  <h4 className="text-xl sm:text-2xl font-bold text-[#0F172A] tracking-tight flex items-center gap-1">
                    4.9 <Star className="w-4 h-4 text-amber-500 fill-amber-500" />
                  </h4>
                  <p className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider mt-0.5">
                    Patient Satisfaction
                  </p>
                </div>

                <div className="rounded-2xl bg-[#F8FAFC] border border-slate-200/80 p-3.5 sm:p-4">
                  <h4 className="text-xl sm:text-2xl font-bold text-[#0F172A] tracking-tight">
                    100%
                  </h4>
                  <p className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider mt-0.5">
                    Sterilization Focused
                  </p>
                </div>
              </div>

              {/* Clinical Philosophy Quote */}
              <div className="mt-6 p-4 rounded-xl border border-slate-200/80 bg-[#F8FAFC] relative">
                <div className="flex items-center gap-2 mb-1">
                  <Quote size={14} className="text-[#2563EB]" />
                  <span className="text-[10px] font-bold uppercase text-[#0F172A] tracking-wider">
                    Clinical Philosophy
                  </span>
                </div>
                <p className="italic text-xs text-slate-600 font-normal leading-relaxed">
                  "Every patient deserves clear diagnostic answers, gentle specialist care, and advanced dental solutions for a healthy, confident smile."
                </p>
              </div>

            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default WhyChooseUsSection;