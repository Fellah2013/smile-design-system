import React from "react";
import { motion } from "framer-motion";
import { Calendar, User, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const posts = [
  {
    title: "5 Tips for Brighter and Healthier Teeth",
    excerpt: "Maintaining a perfect smile doesn't have to be complicated. Here are our top professional tips...",
    date: "May 10, 2024",
    author: "Dr. Renee",
    image: "https://images.unsplash.com/photo-1559757175-5700dde675bc?q=80&w=2071&auto=format&fit=crop"
  },
  {
    title: "Understanding Root Canal Treatment",
    excerpt: "Demystifying one of the most common dental procedures. Why it's necessary and what to expect...",
    date: "April 25, 2024",
    author: "Clinical Team",
    image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=2070&auto=format&fit=crop"
  },
  {
    title: "The Importance of Regular Scaling",
    excerpt: "Why professional cleaning is essential even if you brush and floss perfectly at home...",
    date: "April 12, 2024",
    author: "Dr. Renee",
    image: "https://images.unsplash.com/photo-1460672314991-c19ca076299c?q=80&w=2070&auto=format&fit=crop"
  }
];

const Blog = () => {
  return (
    <div className="py-24 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <motion.h4 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-primary font-bold uppercase tracking-widest text-sm mb-4"
            >
              Dental Tips & News
            </motion.h4>
            <motion.h2 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl md:text-5xl font-extrabold text-slate-900 leading-tight"
            >
              Learn How to Protect <br /> Your Oral Health
            </motion.h2>
          </div>
          <Button variant="outline" className="rounded-full px-8 h-12 hidden md:flex border-2">
            View All Posts
          </Button>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {posts.map((post, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group bg-white rounded-[32px] overflow-hidden shadow-md hover:shadow-xl transition-all border border-slate-100"
            >
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-primary text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest shadow-lg">
                    Education
                  </span>
                </div>
              </div>
              
              <div className="p-8">
                <div className="flex items-center gap-4 text-xs text-slate-400 mb-4">
                  <div className="flex items-center gap-1">
                    <Calendar size={14} />
                    {post.date}
                  </div>
                  <div className="flex items-center gap-1">
                    <User size={14} />
                    {post.author}
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-primary transition-colors line-clamp-2">
                  {post.title}
                </h3>
                
                <p className="text-slate-600 text-sm mb-6 line-clamp-3 leading-relaxed">
                  {post.excerpt}
                </p>
                
                <Button variant="ghost" className="p-0 text-primary font-bold hover:bg-transparent hover:text-primary/80 group/btn">
                  Read More
                  <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-10 md:hidden text-center">
           <Button variant="outline" className="rounded-full w-full h-12 border-2">
            View All Posts
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Blog;