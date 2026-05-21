import React from "react";
import { MessageSquare } from "lucide-react";

const FloatingWhatsApp = () => {
  return (
    <a
      href="https://wa.me/254708830627"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-2xl hover:scale-110 active:scale-95 transition-all animate-bounce"
      aria-label="Chat on WhatsApp"
    >
      <MessageSquare size={30} fill="white" />
      <span className="absolute -top-1 -right-1 flex h-4 w-4">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
        <span className="relative inline-flex rounded-full h-4 w-4 bg-red-500 text-[8px] flex items-center justify-center font-bold">1</span>
      </span>
    </a>
  );
};

export default FloatingWhatsApp;