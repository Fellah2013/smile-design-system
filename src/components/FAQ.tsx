import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { motion } from "framer-motion";

const faqs = [
  {
    question: "What should I bring to my first appointment?",
    answer: "Please bring a form of identification, your dental insurance details (if applicable), and any medical history or current medications you are taking."
  },
  {
    question: "How often should I have a dental checkup?",
    answer: "We generally recommend a routine checkup and cleaning every six months to maintain optimal oral health and catch potential issues early."
  },
  {
    question: "Do you offer emergency dental services?",
    answer: "Yes, we provide emergency care for urgent issues like severe toothaches, broken teeth, or dental trauma. Please call us immediately at +254 708 830 627."
  },
  {
    question: "Are your payment plans interest-free?",
    answer: "Our flexible payment plans are designed to be affordable. Specific terms depend on the treatment cost and duration. Speak with our finance team for details."
  },
  {
    question: "Is teeth whitening safe?",
    answer: "Yes, professional teeth whitening performed at our clinic is safe and effective. We use high-quality materials that protect your enamel while brightening your smile."
  }
];

const FAQ = () => {
  return (
    <div className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h4 className="text-primary font-bold uppercase tracking-widest text-sm mb-4">Common Questions</h4>
            <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-6 leading-tight">
              Frequently Asked <br /> Questions
            </h2>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              Find answers to the most common questions about our services, appointments, and dental health.
            </p>
            <div className="p-8 bg-slate-50 rounded-3xl border border-slate-100">
               <h3 className="font-bold text-xl mb-2">Still have questions?</h3>
               <p className="text-slate-500 mb-6">Our team is here to help you with any inquiries.</p>
               <a href="#contact" className="text-primary font-bold flex items-center gap-2 hover:underline">
                 Contact Us Today →
               </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full"
          >
            <Accordion type="single" collapsible className="w-full space-y-4">
              {faqs.map((faq, idx) => (
                <AccordionItem 
                  key={idx} 
                  value={`item-${idx}`}
                  className="border rounded-2xl px-6 bg-slate-50/50 hover:bg-white transition-colors border-slate-100 data-[state=open]:shadow-md"
                >
                  <AccordionTrigger className="text-left font-bold text-slate-900 hover:no-underline py-6">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-slate-600 leading-relaxed pb-6">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;