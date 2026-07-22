import React, { useEffect, useRef } from "react";
import { motion, animate, useInView } from "framer-motion";
import { Star, Quote, ShieldCheck, ExternalLink, Sparkles } from "lucide-react";

// Local asset imports for the auto-sliding image carousel
import img1 from "@/assets/img 1.webp";
import img2 from "@/assets/img 2.webp";
import img3 from "@/assets/img 3.webp";
import img4 from "@/assets/img 4.webp";
import img5 from "@/assets/img 5.webp";

const CAROUSEL_IMAGES = [img1, img2, img3, img4, img5];

const RECENT_TESTIMONIALS = [
  {
    name: "Shifana Fathima",
    role: "Patient (General Dentistry)",
    review: "BEST EXPERIENCE !!! These doctors handle the patient with more patience and in a peaceful way..... Best Dental Clinic.👍",
    initials: "SF",
  },
  {
    name: "Parimala Rajagopal",
    role: "Patient (Orthodontic Braces & Aligners)",
    review: "Very happy with my orthodontic treatment… Doctor is very kind and explains everything nicely. Staff is also polite and supportive…. My smile has completely changed… and I feel more confident now…. Clean clinic and good follow-up during the treatment…. Highly recommend to anyone thinking of braces or aligners.",
    initials: "PR",
  },
  {
    name: "Vishnu Prudhvi",
    role: "Patient (Orthodontic Alignment)",
    review: "Had the best treatment experience, I had started dental braces treatment over here and my teeth were getting aligned, the equipment and infrastructure is also very well maintained. Doctors and staff are genuinely very caring and courteous. You will meet a doctor whom you'll feel like you know him for a long time. Overall positive experience and will certainly recommend to others. Thank you Dr Akarsh 😊",
    initials: "VP",
  },
  {
    name: "Pooja K",
    role: "Patient (Teeth Cleaning & Diagnostics)",
    review: "I had a great experience. The dental hygienist made me feel comfortable during the cleaning, and the dentist took the time to explain everything clearly, making sure I understood all the treatment options available. I appreciated how gentle and thorough they were throughout the entire process. The office was clean, modern, and well-equipped!",
    initials: "PK",
  },
  {
    name: "Keerthana DRK",
    role: "Patient (Dental Procedures)",
    review: "Very good experienced and comfortable staff. Liked the way they approach every patient. Treatment done on time. Would prefer this clinic anytime and also recommend everyone for any dental procedures.",
    initials: "KD",
  },
  {
    name: "Mahima Nayak",
    role: "Patient (Specialist Care)",
    review: "Niranjans Dental Care is your final stop if you are looking for problem specific treatment from highly qualified dentists. The doctors here provide cost effective personalised care without compromising on quality! Dr Akarsh and Dr Suprabha are dedicated to perfecting your smile with best in class quality, attention to detail and high dental expertise!",
    initials: "MN",
  },
  {
    name: "Sourabh M",
    role: "Patient (Orthodontic Transformation)",
    review: "I am absolutely thrilled with the service I received at Niranjans Dental Care and Orthodontic Center! From the initial consultation to the final result, the entire process was seamless, professional and welcoming. The clinic is modern, clean and well-organized, with state-of-the-art equipment. Dr. Akarsh is exceptional - knowledgeable, skilled and genuinely passionate about delivering outstanding patient care.",
    initials: "SM",
  },
];

const AnimatedCounter = ({ value, suffix = "+" }: { value: number; suffix?: string }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (!inView) return;
    const node = ref.current;
    if (!node) return;

    const controls = animate(0, value, {
      duration: 2,
      ease: "easeOut",
      onUpdate: (latest) => {
        node.textContent = Math.floor(latest).toLocaleString();
      },
    });

    return () => controls.stop();
  }, [value, inView]);

  return (
    <span className="font-extrabold text-3xl sm:text-4xl text-[#0F172A] tracking-tight">
      <span ref={ref}>0</span>
      {suffix}
    </span>
  );
};

const TestimonialsSection = () => {
  const duplicatedImages = [...CAROUSEL_IMAGES, ...CAROUSEL_IMAGES, ...CAROUSEL_IMAGES];

  return (
    <section className="relative py-16 sm:py-24 lg:py-28 bg-[#F8FAFC] overflow-hidden antialiased selection:bg-[#3B82F6]/10 border-t border-slate-200/60">
      
      {/* Background Ambient Glows */}
      <div className="absolute top-1/3 left-[-5%] w-[350px] sm:w-[500px] h-[350px] sm:h-[500px] bg-[#2563EB]/05 rounded-full blur-[100px] sm:blur-[130px] pointer-events-none" />
      <div className="absolute bottom-10 right-[-5%] w-[350px] sm:w-[500px] h-[350px] sm:h-[500px] bg-[#10B981]/08 rounded-full blur-[110px] sm:blur-[140px] pointer-events-none" />

      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        
        {/* Module Header */}
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#ECFDF5] border border-[#10B981]/25 text-[#0F172A] text-[11px] sm:text-xs font-semibold tracking-wider uppercase mb-4"
          >
            <ShieldCheck size={13} className="text-[#10B981]" />
            <span>Verified Patient Reviews</span>
          </motion.div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0F172A] tracking-tight leading-tight">
            Patient Stories. <br className="hidden sm:inline" />
            <span className="bg-gradient-to-r from-[#2563EB] to-[#1D4ED8] bg-clip-text text-transparent">
              Real Clinical Transformations.
            </span>
          </h2>

          <p className="mt-3 sm:mt-4 text-slate-600 text-sm sm:text-base lg:text-lg font-normal max-w-xl mx-auto leading-relaxed">
            Discover why families trust Dr. Akarsh and Dr. Suprabha at Niranjans Dental Care & Orthodontic Center for braces, aligners, and specialized dental therapies.
          </p>
        </div>

        {/* Auto-Sliding Smile Transformation Showcase */}
        <div className="mb-14 sm:mb-20 relative w-full overflow-hidden py-2">
          <div className="absolute top-0 bottom-0 left-0 w-12 sm:w-28 bg-gradient-to-r from-[#F8FAFC] to-transparent z-20 pointer-events-none" />
          <div className="absolute top-0 bottom-0 right-0 w-12 sm:w-28 bg-gradient-to-l from-[#F8FAFC] to-transparent z-20 pointer-events-none" />
          
          <motion.div 
            className="flex gap-4 sm:gap-6 w-max"
            animate={{ x: [0, -1200] }}
            transition={{
              repeat: Infinity,
              repeatType: "loop",
              duration: 25,
              ease: "linear"
            }}
          >
            {duplicatedImages.map((img, idx) => (
              <div 
                key={idx} 
                className="w-[220px] sm:w-[300px] aspect-[4/3] rounded-[20px] sm:rounded-[24px] border border-slate-200/80 bg-white p-2 shadow-sm flex-shrink-0 relative overflow-hidden group hover:border-[#2563EB]/40 transition-all duration-300"
              >
                <img 
                  src={img} 
                  alt={`Niranjans Dental Case ${idx + 1}`} 
                  className="w-full h-full object-cover rounded-[16px] sm:rounded-[20px] pointer-events-none transition-transform duration-500 group-hover:scale-[1.03]"
                />
                <div className="absolute bottom-3.5 right-3.5 bg-white/95 backdrop-blur-md px-2.5 py-1 rounded-lg border border-slate-200/80 text-[9px] font-bold text-[#0F172A] uppercase tracking-wider flex items-center gap-1 shadow-sm">
                  <Sparkles size={10} className="text-[#10B981]" /> 
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Dynamic Reviews Flex-Grid Stack */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 mb-16 sm:mb-20 items-stretch">
          {RECENT_TESTIMONIALS.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="group relative rounded-[20px] sm:rounded-[24px] border border-slate-200/80 bg-white/90 backdrop-blur-md p-5 sm:p-6 flex flex-col justify-between transition-all duration-300 hover:border-[#2563EB]/40 hover:-translate-y-1 shadow-sm hover:shadow-md h-full"
            >
              <div>
                <div className="flex items-center justify-between mb-4 sm:mb-5">
                  <Quote className="w-8 h-8 sm:w-9 sm:h-9 text-[#2563EB]/20 transition-colors" />
                  <div className="flex gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                </div>

                <p className="text-slate-600 text-xs sm:text-sm font-normal leading-relaxed">
                  "{testimonial.review}"
                </p>
              </div>

              {/* Patient Identity Footer */}
              <div className="flex items-center gap-3 mt-6 pt-4 border-t border-slate-100/80 w-full">
                <div className="w-9 h-9 rounded-full bg-[#ECFDF5] border border-[#10B981]/25 text-[#10B981] font-bold text-xs flex items-center justify-center shrink-0">
                  {testimonial.initials}
                </div>
                <div className="min-w-0 flex-1">
                  <h4 className="font-bold text-[#0F172A] text-sm tracking-tight truncate">
                    {testimonial.name}
                  </h4>
                  <span className="text-[10px] text-[#2563EB] font-semibold bg-[#2563EB]/05 border border-[#2563EB]/15 rounded-md px-2 py-0.5 inline-block mt-0.5 truncate max-w-full">
                    {testimonial.role}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default TestimonialsSection;