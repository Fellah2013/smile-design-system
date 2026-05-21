import React from "react";
import { MessageSquare, Phone, MapPin, Mail, Facebook, Instagram, Twitter, Linkedin, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-slate-300 pt-20 pb-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Column */}
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center text-primary-foreground font-bold text-xl">
                R
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-lg leading-none text-white">RENEE DENTAL</span>
                <span className="text-[10px] tracking-widest text-slate-500 uppercase">Services Limited</span>
              </div>
            </div>
            <p className="text-sm leading-relaxed text-slate-400">
              Dedicated to providing quality oral healthcare services with compassion, professionalism, and modern solutions along Kangundo Road, Nairobi.
            </p>
            <div className="flex gap-4">
              {[Facebook, Instagram, Twitter, Linkedin].map((Icon, i) => (
                <a 
                  key={i} 
                  href="#" 
                  className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary hover:text-white transition-colors border border-slate-700"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="text-white font-bold text-lg uppercase tracking-wider">Quick Links</h3>
            <ul className="space-y-3">
              {["Home", "About Us", "Our Services", "Clinic Gallery", "FAQs", "Book Appointment"].map((link) => (
                <li key={link}>
                  <a href={`#${link.toLowerCase().replace(" ", "-")}`} className="text-sm hover:text-primary flex items-center gap-1 group">
                    <ChevronRight size={14} className="text-primary opacity-0 group-hover:opacity-100 -ml-4 group-hover:ml-0 transition-all" />
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-6">
            <h3 className="text-white font-bold text-lg uppercase tracking-wider">Services</h3>
            <ul className="space-y-3">
              {[
                "Dental Consultation",
                "Tooth Extraction",
                "Root Canal Treatment",
                "Braces & Orthodontics",
                "Teeth Whitening",
                "Tooth Replacement"
              ].map((service) => (
                <li key={service}>
                  <a href="#services" className="text-sm hover:text-primary flex items-center gap-1 group">
                    <ChevronRight size={14} className="text-primary opacity-0 group-hover:opacity-100 -ml-4 group-hover:ml-0 transition-all" />
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h3 className="text-white font-bold text-lg uppercase tracking-wider">Get In Touch</h3>
            <div className="space-y-4">
              <div className="flex gap-3">
                <MapPin className="text-primary shrink-0" size={18} />
                <span className="text-sm text-slate-400">Kangundo Road, Nairobi, Kenya</span>
              </div>
              <div className="flex gap-3">
                <Phone className="text-primary shrink-0" size={18} />
                <span className="text-sm text-slate-400">+254 708 830 627</span>
              </div>
              <div className="flex gap-3">
                <Mail className="text-primary shrink-0" size={18} />
                <span className="text-sm text-slate-400">info@reneedental.co.ke</span>
              </div>
            </div>
            <div className="pt-4">
              <Button asChild className="w-full rounded-full h-12">
                <a href="#appointment">Book Now</a>
              </Button>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-xs text-slate-500">
            © {currentYear} Renee Dental Services Limited. All rights reserved.
          </p>
          <div className="flex gap-8 text-xs text-slate-500">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;