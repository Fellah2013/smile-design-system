import React from "react";
import { motion } from "framer-motion";
import { Award, ShieldCheck, Heart, UserCheck } from "lucide-react";

const About = () => {
  const stats = [
    { icon: <UserCheck className="w-6 h-6" />, label: "Expert Doctors", value: "5+" },
    { icon: <Heart className="w-6 h-6" />, label: "Happy Patients", value: "2k+" },
    { icon: <Award className="w-6 h-6" />, label: "Years Experience", value: "10+" },
    { icon: <ShieldCheck className="w-6 h-6" />, label: "Dental Awards", value: "3" },
  ];

  return (
    <div className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-4"
          >
            <div className="space-y-4 pt-12">
              <img
                src="https://storage.googleapis.com/dala-prod-public-storage/generated-images/e0c672c7-8c83-4f3c-8cb9-9dee9687347d/clinic-interior-c2f3e8ae-1779342407374.webp"
                alt="Clinic Interior"
                className="rounded-2xl shadow-lg w-full aspect-square object-cover"
              />
              <img
                src="https://storage.googleapis.com/dala-prod-public-storage/generated-images/e0c672c7-8c83-4f3c-8cb9-9dee9687347d/dental-procedure-1-253380ec-1779342405835.webp"
                alt="Dental Procedure"
                className="rounded-2xl shadow-lg w-full aspect-video object-cover"
              />
            </div>
            <div className="space-y-4">
              <img
                src="https://storage.googleapis.com/dala-prod-public-storage/generated-images/e0c672c7-8c83-4f3c-8cb9-9dee9687347d/professional-dentist-1-862d8be8-1779342405639.webp"
                alt="Our Dentist"
                className="rounded-2xl shadow-lg w-full aspect-[3/4] object-cover"
              />
              <div className="bg-primary p-6 rounded-2xl text-primary-foreground">
                <div className="text-3xl font-bold">100%</div>
                <div className="text-sm opacity-90 font-medium">Satisfaction Guaranteed</div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h4 className="text-primary font-bold uppercase tracking-widest text-sm mb-2">About Our Clinic</h4>
              <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 leading-tight">
                Compassionate Care and Modern Dental Solutions
              </h2>
            </div>

            <p className="text-lg text-slate-600 leading-relaxed">
              Renee Dental Services Limited is a professional dental clinic dedicated to providing quality oral healthcare services with compassion, professionalism, and modern dental solutions. 
            </p>
            
            <p className="text-slate-600 leading-relaxed">
              Our goal is to ensure every patient receives personalized and affordable dental care in a comfortable environment. Located along Kangundo Road, we serve the Nairobi community with pride, utilizing the latest dental technology to deliver exceptional results.
            </p>

            <div className="grid grid-cols-2 gap-6 pt-4">
              {stats.map((stat, idx) => (
                <div key={idx} className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
                    {stat.icon}
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-slate-900">{stat.value}</div>
                    <div className="text-xs text-slate-500 font-semibold uppercase">{stat.label}</div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="pt-6">
              <div className="flex items-center gap-4 p-4 border rounded-2xl border-slate-100 bg-slate-50/50">
                <div className="w-12 h-12 rounded-full bg-slate-200 overflow-hidden shrink-0">
                   <img src="https://storage.googleapis.com/dala-prod-public-storage/generated-images/e0c672c7-8c83-4f3c-8cb9-9dee9687347d/professional-dentist-1-862d8be8-1779342405639.webp" alt="Lead Dentist" className="w-full h-full object-cover" />
                </div>
                <div>
                  <div className="font-bold text-slate-900">Dr. Renee</div>
                  <div className="text-xs text-primary font-semibold uppercase">Lead Dental Surgeon</div>
                </div>
                <div className="ml-auto italic text-slate-400 text-sm hidden sm:block">
                  "Your smile is our greatest reward."
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;