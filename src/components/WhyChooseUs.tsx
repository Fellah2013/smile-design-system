import React from "react";
import { motion } from "framer-motion";
import { 
  Users, 
  Wallet, 
  CreditCard, 
  Microscope, 
  Clock, 
  UserPlus,
  Check
} from "lucide-react";

const reasons = [
  {
    icon: <Users className="w-8 h-8" />,
    title: "Professional Dentists",
    description: "Our team consists of highly qualified and experienced dental specialists."
  },
  {
    icon: <Wallet className="w-8 h-8" />,
    title: "Affordable Treatment",
    description: "Quality dental care shouldn't break the bank. We offer competitive rates."
  },
  {
    icon: <CreditCard className="w-8 h-8" />,
    title: "Flexible Payment Plans",
    description: "We provide various payment options and plans to suit your budget."
  },
  {
    icon: <Microscope className="w-8 h-8" />,
    title: "Modern Equipment",
    description: "We utilize state-of-the-art dental technology for precise diagnosis and treatment."
  },
  {
    icon: <Clock className="w-8 h-8" />,
    title: "Extended Hours",
    description: "Open from 8:00 AM to 9:00 PM, Monday to Saturday for your convenience."
  },
  {
    icon: <UserPlus className="w-8 h-8" />,
    title: "Patient-Centered Care",
    description: "Your comfort and needs are our top priority throughout your journey."
  }
];

const WhyChooseUs = () => {
  return (
    <div className="py-24 bg-primary text-primary-foreground relative overflow-hidden">
      {/* Decorative shapes */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-32 -mt-32 blur-3xl" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full -ml-32 -mb-32 blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <motion.h4 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-white/80 font-bold uppercase tracking-widest text-sm mb-4"
            >
              Why Choose Us
            </motion.h4>
            <motion.h2 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl md:text-5xl font-extrabold mb-8 leading-tight"
            >
              Excellence in Every Smile, <br />
              Trust in Every Service.
            </motion.h2>
            
            <div className="space-y-4 mb-10">
              {[
                "10+ Years of combined clinical experience",
                "Certified sterilization and hygiene protocols",
                "Multilingual staff for clear communication",
                "Central location along Kangundo Road"
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center shrink-0">
                    <Check size={14} className="text-white" />
                  </div>
                  <span className="text-lg text-white/90">{item}</span>
                </div>
              ))}
            </div>

            <div className="p-8 bg-white/10 backdrop-blur-md rounded-3xl border border-white/20">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center">
                   <Clock className="text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-xl">Emergency Contact</h3>
                  <p className="text-white/70 text-sm">Available for urgent dental issues</p>
                </div>
              </div>
              <a 
                href="tel:+254708830627" 
                className="text-2xl font-bold text-white hover:text-white/80 transition-colors"
              >
                +254 708 830 627
              </a>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {reasons.map((reason, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white p-8 rounded-3xl shadow-lg group hover:bg-slate-50 transition-colors"
              >
                <div className="text-primary mb-6 transition-transform group-hover:scale-110">
                  {reason.icon}
                </div>
                <h3 className="text-slate-900 font-bold text-xl mb-3">
                  {reason.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {reason.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;