import React from "react";
import { motion } from "framer-motion";
import { Camera, ExternalLink } from "lucide-react";

const galleryImages = [
  {
    url: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/e0c672c7-8c83-4f3c-8cb9-9dee9687347d/clinic-interior-c2f3e8ae-1779342407374.webp",
    title: "Modern Waiting Area",
    category: "Clinic"
  },
  {
    url: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/e0c672c7-8c83-4f3c-8cb9-9dee9687347d/professional-dentist-1-862d8be8-1779342405639.webp",
    title: "Our Expert Team",
    category: "Team"
  },
  {
    url: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/e0c672c7-8c83-4f3c-8cb9-9dee9687347d/dental-procedure-1-253380ec-1779342405835.webp",
    title: "Advanced Equipment",
    category: "Technology"
  },
  {
    url: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/e0c672c7-8c83-4f3c-8cb9-9dee9687347d/happy-patients-1-fcac6f59-1779342403729.webp",
    title: "Bright Smiles",
    category: "Patients"
  },
  {
    url: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=2070&auto=format&fit=crop",
    title: "Dental Suite",
    category: "Clinic"
  },
  {
    url: "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?q=80&w=2070&auto=format&fit=crop",
    title: "Sterilization Lab",
    category: "Technology"
  }
];

const Gallery = () => {
  return (
    <div className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h4 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-primary font-bold uppercase tracking-widest text-sm mb-4"
          >
            Clinic Tour
          </motion.h4>
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-6"
          >
            Our Professional Environment
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((img, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group relative overflow-hidden rounded-[32px] cursor-pointer aspect-square"
            >
              <img
                src={img.url}
                alt={img.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
                <span className="text-primary font-bold text-xs uppercase tracking-widest mb-1">{img.category}</span>
                <h3 className="text-white font-bold text-xl">{img.title}</h3>
                <div className="mt-4 w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white">
                   <Camera size={18} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <p className="text-slate-500 mb-6 flex items-center justify-center gap-2">
            Follow our Instagram for more updates 
            <ExternalLink size={16} />
          </p>
        </div>
      </div>
    </div>
  );
};

export default Gallery;