import React from "react";
import { motion } from "framer-motion";
import { Phone, MapPin, Clock, Mail, MessageSquare, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const Contact = () => {
  return (
    <div className="py-24 bg-white relative">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h4 className="text-primary font-bold uppercase tracking-widest text-sm mb-4">Contact Information</h4>
            <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-8 leading-tight">
              Get in Touch with Our Dental Experts
            </h2>
            
            <div className="space-y-8 mb-10">
              <div className="flex gap-6 group">
                <div className="w-14 h-14 rounded-2xl bg-slate-50 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all shrink-0">
                  <MapPin size={28} />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-slate-900 mb-1">Our Location</h3>
                  <p className="text-slate-600">Kangundo Road, Nairobi, Kenya</p>
                  <p className="text-slate-400 text-sm">Near Shell Petrol Station</p>
                </div>
              </div>

              <div className="flex gap-6 group">
                <div className="w-14 h-14 rounded-2xl bg-slate-50 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all shrink-0">
                  <Phone size={28} />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-slate-900 mb-1">Phone Number</h3>
                  <p className="text-slate-600">+254 708 830 627</p>
                  <p className="text-slate-400 text-sm">Mon - Sat, 8am - 9pm</p>
                </div>
              </div>

              <div className="flex gap-6 group">
                <div className="w-14 h-14 rounded-2xl bg-slate-50 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all shrink-0">
                  <Clock size={28} />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-slate-900 mb-1">Working Hours</h3>
                  <div className="text-slate-600 flex flex-col">
                    <span className="flex justify-between w-48"><span>Mon – Sat:</span> <span>8:00 AM – 9:00 PM</span></span>
                    <span className="flex justify-between w-48 text-red-500 font-medium"><span>Sunday:</span> <span>Closed</span></span>
                  </div>
                </div>
              </div>

              <div className="flex gap-6 group">
                <div className="w-14 h-14 rounded-2xl bg-slate-50 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all shrink-0">
                  <Mail size={28} />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-slate-900 mb-1">Email Support</h3>
                  <p className="text-slate-600">info@reneedental.co.ke</p>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="rounded-full h-14 px-8 shadow-lg">
                <a href="tel:+254708830627">
                  <Phone className="mr-2" size={20} />
                  Click to Call
                </a>
              </Button>
              <Button asChild variant="outline" size="lg" className="rounded-full h-14 px-8 border-2">
                <a href="https://wa.me/254708830627" target="_blank" rel="noopener noreferrer">
                  <MessageSquare className="mr-2" size={20} />
                  WhatsApp Us
                </a>
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="w-full aspect-square md:aspect-video lg:aspect-square bg-slate-100 rounded-[40px] overflow-hidden shadow-2xl border-8 border-white">
              {/* Replace with real Google Maps iframe if needed, using placeholder for now */}
              <iframe
                title="Renee Dental Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.852102061034!2d36.9157488!3d-1.2610212!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f170830627%3A0x0!2sKangundo%20Rd%2C%20Nairobi!5e0!3m2!1sen!2ske!4v1715690000000!5m2!1sen!2ske"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
              <div className="absolute top-6 left-6 right-6 p-4 bg-white/95 backdrop-blur rounded-2xl shadow-xl flex items-center justify-between">
                <div>
                  <div className="font-bold text-slate-900">Visit Our Clinic</div>
                  <div className="text-xs text-slate-500">Kangundo Road, Nairobi</div>
                </div>
                <Button size="icon" variant="ghost" className="rounded-full bg-primary/10 text-primary">
                  <ExternalLink size={18} />
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;