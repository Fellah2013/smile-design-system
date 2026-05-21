import React from "react";
import { motion } from "framer-motion";
import { AlertCircle, Phone } from "lucide-react";

const EmergencySection = () => {
  return (
    <div className="bg-red-50 py-4 overflow-hidden relative border-b border-red-100">
      <motion.div
        animate={{ x: ["100%", "-100%"] }}
        transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
        className="whitespace-nowrap flex items-center gap-12"
      >
        {[...Array(5)].map((_, i) => (
          <div key={i} className="flex items-center gap-3">
            <AlertCircle size={18} className="text-red-500" />
            <span className="text-red-700 font-bold uppercase tracking-tight text-sm">
              Emergency Dental Care: Need help now? Call us immediately at 
              <a href="tel:+254708830627" className="ml-2 underline">+254 708 830 627</a>
            </span>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default EmergencySection;