import React from "react";
import { motion } from "framer-motion";
import { 
  Stethoscope, 
  Trash2, 
  ShieldCheck, 
  Activity, 
  Sparkles, 
  Grid3X3, 
  Smile, 
  Crown, 
  PlusCircle,
  ArrowRight
} from "lucide-react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: <Stethoscope size={32} />,
    title: "Dental Consultation",
    description: "Professional oral assessment and expert advice for your long-term dental health.",
    color: "bg-blue-500"
  },
  {
    icon: <Trash2 size={32} />,
    title: "Tooth Extraction",
    description: "Safe and painless removal of damaged or problematic teeth using modern techniques.",
    color: "bg-teal-500"
  },
  {
    icon: <ShieldCheck size={32} />,
    title: "Dental Fillings",
    description: "Restoring damaged teeth to their normal function and shape with premium materials.",
    color: "bg-indigo-500"
  },
  {
    icon: <Activity size={32} />,
    title: "Root Canal Treatment",
    description: "Specialized treatment to save severely infected teeth and relieve persistent pain.",
    color: "bg-cyan-500"
  },
  {
    icon: <Sparkles size={32} />,
    title: "Scaling & Cleaning",
    description: "Professional cleaning to remove plaque and tartar for a brighter, healthier smile.",
    color: "bg-emerald-500"
  },
  {
    icon: <Grid3X3 size={32} />,
    title: "Braces & Orthodontics",
    description: "Aligning your teeth and correcting bites for improved aesthetics and function.",
    color: "bg-sky-500"
  },
  {
    icon: <Smile size={32} />,
    title: "Tooth Masking",
    description: "Cosmetic procedures to cover discolorations and imperfections for a perfect look.",
    color: "bg-blue-600"
  },
  {
    icon: <Crown size={32} />,
    title: "Crown & Bridge",
    description: "Restoring dental integrity and appearance with custom-made prosthetic solutions.",
    color: "bg-teal-600"
  },
  {
    icon: <PlusCircle size={32} />,
    title: "Tooth Replacement",
    description: "Comprehensive options to replace missing teeth and restore your full smile.",
    color: "bg-indigo-600"
  }
];

const Services = () => {
  return (
    <div className="py-24 bg-slate-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-white to-transparent" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h4 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-primary font-bold uppercase tracking-widest text-sm mb-4"
          >
            What We Offer
          </motion.h4>
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-6"
          >
            Comprehensive Oral Care <br className="hidden md:block" /> for the Whole Family
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-slate-600"
          >
            From routine checkups to specialized orthodontic procedures, we provide a full range of dental services tailored to your needs.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <Card className="h-full border-none shadow-md hover:shadow-xl transition-all group overflow-hidden bg-white">
                <CardHeader className="pb-4">
                  <div className={`w-16 h-16 rounded-2xl flex items-center justify-center text-white mb-4 transition-transform group-hover:scale-110 ${service.color}`}>
                    {service.icon}
                  </div>
                  <CardTitle className="text-xl font-bold text-slate-900 group-hover:text-primary transition-colors">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-slate-600 leading-relaxed text-base">
                    {service.description}
                  </CardDescription>
                </CardContent>
                <CardFooter className="pt-2">
                  <Button variant="ghost" className="p-0 text-primary font-bold hover:bg-transparent hover:text-primary/80 group/btn">
                    Learn More
                    <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <Button asChild size="lg" className="rounded-full px-10 h-14 text-lg">
            <a href="#appointment">View All Services</a>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Services;