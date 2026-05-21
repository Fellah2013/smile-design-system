import React from "react";
import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const testimonials = [
  {
    name: "Sarah Wanjiku",
    role: "Regular Patient",
    content: "The best dental experience I've had in Nairobi! Dr. Renee and her team are so professional and gentle. I finally have the confidence to smile again.",
    rating: 5,
    avatar: "https://i.pravatar.cc/150?u=sarah"
  },
  {
    name: "James Maina",
    role: "Orthodontics Patient",
    content: "Got my braces here and the results are amazing. Affordable payment plans made it possible for me to get the treatment I needed without stress.",
    rating: 5,
    avatar: "https://i.pravatar.cc/150?u=james"
  },
  {
    name: "Faith Mutua",
    role: "Mother of Two",
    content: "Excellent pediatric care! My kids actually enjoy going to the dentist now. The clinic is clean, modern, and the staff is very welcoming.",
    rating: 5,
    avatar: "https://i.pravatar.cc/150?u=faith"
  },
  {
    name: "Brian Otieno",
    role: "Dental Fillings",
    content: "Professional service and very short waiting times. They explained every step of the procedure to me, which really helped calm my nerves.",
    rating: 4,
    avatar: "https://i.pravatar.cc/150?u=brian"
  }
];

const Testimonials = () => {
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
            Patient Stories
          </motion.h4>
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-6"
          >
            What Our Patients Say
          </motion.h2>
        </div>

        <div className="max-w-5xl mx-auto px-12">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent>
              {testimonials.map((t, idx) => (
                <CarouselItem key={idx} className="md:basis-1/2 lg:basis-1/2 pl-6">
                  <div className="bg-slate-50 p-8 rounded-[32px] h-full flex flex-col border border-slate-100 relative group hover:bg-white hover:shadow-xl transition-all">
                    <div className="absolute top-6 right-8 text-primary/10 group-hover:text-primary/20 transition-colors">
                      <Quote size={60} />
                    </div>
                    
                    <div className="flex gap-1 mb-6">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i} 
                          size={16} 
                          className={i < t.rating ? "fill-yellow-400 text-yellow-400" : "text-slate-300"} 
                        />
                      ))}
                    </div>

                    <p className="text-slate-600 mb-8 flex-grow italic leading-relaxed">
                      "{t.content}"
                    </p>

                    <div className="flex items-center gap-4">
                      <Avatar className="w-12 h-12 border-2 border-white shadow-sm">
                        <AvatarImage src={t.avatar} />
                        <AvatarFallback>{t.name[0]}</AvatarFallback>
                      </Avatar>
                      <div>
                        <div className="font-bold text-slate-900">{t.name}</div>
                        <div className="text-xs text-primary font-semibold uppercase">{t.role}</div>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="-left-4 md:-left-12 h-12 w-12" />
            <CarouselNext className="-right-4 md:-right-12 h-12 w-12" />
          </Carousel>
        </div>
        
        <div className="mt-16 text-center">
           <div className="flex flex-col items-center gap-2">
             <div className="flex items-center gap-1">
               <img src="https://www.gstatic.com/images/branding/product/2x/googleg_48dp.png" alt="Google" className="w-5 h-5" />
               <span className="font-bold text-slate-700">Excellent 4.9/5</span>
             </div>
             <p className="text-sm text-slate-500">Based on 150+ reviews from our happy patients</p>
           </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;