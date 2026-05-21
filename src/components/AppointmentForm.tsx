import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { toast } from "sonner";
import { motion } from "framer-motion";
import { Calendar, Clock, MessageSquare, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";

const formSchema = z.object({
  fullName: z.string().min(2, "Full name is required"),
  phone: z.string().min(10, "Valid phone number is required"),
  email: z.string().email("Invalid email address"),
  date: z.string().min(1, "Preferred date is required"),
  time: z.string().min(1, "Preferred time is required"),
  service: z.string().min(1, "Please select a service"),
  notes: z.string(),
  reminder: z.boolean(),
});

type FormValues = z.infer<typeof formSchema>;

const AppointmentForm = () => {
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      phone: "",
      email: "",
      date: "",
      time: "",
      service: "",
      notes: "",
      reminder: true,
    },
  });

  const onSubmit = (values: FormValues) => {
    try {
      const existing = localStorage.getItem("renee_appointments");
      const appointments = existing ? JSON.parse(existing) : [];
      const newAppointment = {
        ...values,
        id: Date.now().toString(),
        status: "pending",
        submittedAt: new Date().toISOString(),
      };
      localStorage.setItem("renee_appointments", JSON.stringify([newAppointment, ...appointments]));

      toast.success("Appointment Request Sent!", {
        description: `Thank you ${values.fullName}, we will contact you shortly to confirm your visit.`,
      });
      
      form.reset();
    } catch (error) {
      console.error("Error saving appointment:", error);
      toast.error("Failed to submit appointment. Please try again.");
    }
  };

  return (
    <div className="py-24">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h4 className="text-primary font-bold uppercase tracking-widest text-sm mb-4">Book Your Visit</h4>
            <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-8 leading-tight">
              Ready for a Healthier, <br /> Brighter Smile?
            </h2>
            <p className="text-lg text-slate-600 mb-10 leading-relaxed">
              Fill out the form below or contact us directly via WhatsApp. Our team will get back to you within 30 minutes during working hours.
            </p>

            <div className="space-y-6 mb-12">
              {[
                { title: "Choose Your Service", desc: "Select from our wide range of dental solutions." },
                { title: "Pick Date & Time", desc: "Select a slot that works best for your schedule." },
                { title: "Confirmation", desc: "We'll call or text you to finalize the appointment." }
              ].map((step, idx) => (
                <div key={idx} className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold shrink-0">
                    {idx + 1}
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900">{step.title}</h3>
                    <p className="text-slate-500 text-sm">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="p-8 bg-primary rounded-3xl text-primary-foreground relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:scale-110 transition-transform">
                <MessageSquare size={120} />
              </div>
              <h3 className="text-2xl font-bold mb-4">Prefer WhatsApp?</h3>
              <p className="mb-8 opacity-90">Quick and easy booking via chat. Click the button below to start a conversation.</p>
              <Button asChild variant="secondary" className="rounded-full px-8 h-12 font-bold shadow-lg">
                <a href="https://wa.me/254708830627" target="_blank" rel="noopener noreferrer">
                  Chat on WhatsApp
                </a>
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-white p-8 md:p-12 rounded-[40px] shadow-2xl border border-slate-100"
          >
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="fullName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Full Name</FormLabel>
                        <FormControl>
                          <Input placeholder="John Doe" className="h-12" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Phone Number</FormLabel>
                        <FormControl>
                          <Input placeholder="+254 7xx xxx xxx" className="h-12" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email Address</FormLabel>
                      <FormControl>
                        <Input placeholder="john@example.com" className="h-12" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className="grid sm:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="date"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Preferred Date</FormLabel>
                        <FormControl>
                          <div className="relative">
                            <Input type="date" className="h-12 pr-10" {...field} />
                            <Calendar className="absolute right-3 top-3 text-slate-400 pointer-events-none" size={18} />
                          </div>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="time"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Preferred Time</FormLabel>
                        <FormControl>
                          <div className="relative">
                             <Input type="time" className="h-12 pr-10" {...field} />
                             <Clock className="absolute right-3 top-3 text-slate-400 pointer-events-none" size={18} />
                          </div>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="service"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Service Needed</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger className="h-12">
                            <SelectValue placeholder="Select a service" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="consultation">Dental Consultation</SelectItem>
                          <SelectItem value="extraction">Tooth Extraction</SelectItem>
                          <SelectItem value="fillings">Dental Fillings</SelectItem>
                          <SelectItem value="root-canal">Root Canal Treatment</SelectItem>
                          <SelectItem value="cleaning">Scaling & Cleaning</SelectItem>
                          <SelectItem value="braces">Braces & Orthodontics</SelectItem>
                          <SelectItem value="masking">Tooth Masking</SelectItem>
                          <SelectItem value="crown">Crown & Bridge</SelectItem>
                          <SelectItem value="replacement">Tooth Replacement</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="notes"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Notes (Optional)</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="Tell us about your dental concern..." 
                          className="min-h-[100px] resize-none" 
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="reminder"
                  render={({ field }) => (
                    <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4">
                      <FormControl>
                        <Checkbox
                          checked={field.value}
                          onCheckedChange={field.onChange}
                        />
                      </FormControl>
                      <div className="space-y-1 leading-none">
                        <FormLabel className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                          Send me an online appointment reminder
                        </FormLabel>
                        <p className="text-xs text-muted-foreground">
                          We'll send you an SMS or email 24 hours before your visit.
                        </p>
                      </div>
                    </FormItem>
                  )}
                />

                <Button type="submit" className="w-full h-14 rounded-full text-lg font-bold shadow-xl shadow-primary/20">
                  <Send className="mr-2" size={20} />
                  Book My Appointment
                </Button>
                
                <p className="text-center text-xs text-slate-400 mt-4">
                  By submitting, you agree to our privacy policy and terms of service.
                </p>
              </form>
            </Form>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default AppointmentForm;