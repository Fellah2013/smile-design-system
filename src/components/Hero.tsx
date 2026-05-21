import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Phone, CheckCircle2 } from "lucide-react";

const Hero = () => {
  return (
    <div className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden bg-slate-50">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/5 rounded-l-full -mr-20 hidden lg:block" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-1.5 rounded-full text-sm font-semibold mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              Trusted Dental Clinic in Nairobi
            </div>
            
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6 text-slate-900 leading-tight">
              Professional Dental Care <br />
              <span className="text-primary">You Can Trust</span>
            </h1>
            
            <p className="text-lg text-slate-600 mb-8 max-w-xl leading-relaxed">
              Comprehensive and affordable dental services along Kangundo Road, Nairobi. 
              We combine modern technology with a compassionate touch to give you a smile you'll love.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <Button asChild size="lg" className="rounded-full px-8 text-lg h-14 shadow-lg shadow-primary/20">
                <a href="#appointment">
                  Book Appointment
                  <ArrowRight className="ml-2" size={20} />
                </a>
              </Button>
              <Button asChild variant="outline" size="lg" className="rounded-full px-8 text-lg h-14 border-2">
                <a href="tel:+254708830627">
                  <Phone className="mr-2" size={20} />
                  Call Now
                </a>
              </Button>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {[
                "Qualified Doctors",
                "Affordable Pricing",
                "Emergency Care"
              ].map((item) => (
                <div key={item} className="flex items-center gap-2 text-sm font-medium text-slate-700">
                  <CheckCircle2 className="text-primary" size={18} />
                  {item}
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-8 border-white">
              <img
                src="https://storage.googleapis.com/dala-prod-public-storage/generated-images/e0c672c7-8c83-4f3c-8cb9-9dee9687347d/happy-patients-1-fcac6f59-1779342403729.webp"
                alt="Smiling patients at Renee Dental"
                className="w-full h-auto object-cover aspect-[4/3]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 p-4 bg-white/90 backdrop-blur rounded-2xl flex items-center gap-4">
                <div className="flex -space-x-2">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-slate-200 overflow-hidden">
                      <img src={`https://i.pravatar.cc/150?u=${i + 10}`} alt="Patient" />
                    </div>
                  ))}
                </div>
                <div>
                  <div className="text-sm font-bold text-slate-900">1,500+ Happy Patients</div>
                  <div className="text-xs text-slate-500">Joined us this year</div>
                </div>
              </div>
            </div>
            
            {/* Floating Element */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 3 }}
              className="absolute -top-10 -right-10 hidden xl:flex flex-col items-center justify-center p-6 bg-white shadow-xl rounded-2xl border border-slate-100"
            >
              <div className="text-3xl font-bold text-primary">4.9/5</div>
              <div className="flex text-yellow-400 gap-1 my-1">
                {[1, 2, 3, 4, 5].map((s) => <span key={s}>★</span>)}
              </div>
              <div className="text-xs font-semibold text-slate-500 uppercase tracking-tighter">Google Rating</div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;