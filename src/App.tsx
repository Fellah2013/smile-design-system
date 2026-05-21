import React, { useState, useEffect } from "react";
import { Toaster } from "@/components/ui/sonner";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import WhyChooseUs from "./components/WhyChooseUs";
import AppointmentForm from "./components/AppointmentForm";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import PaymentOptions from "./components/PaymentOptions";
import FAQ from "./components/FAQ";
import Gallery from "./components/Gallery";
import Blog from "./components/Blog";
import Footer from "./components/Footer";
import FloatingWhatsApp from "./components/FloatingWhatsApp";
import EmergencySection from "./components/EmergencySection";
import AdminDashboard from "./components/AdminDashboard";

function App() {
  const [isAdmin, setIsAdmin] = useState(false);

  // Toggle admin view for demonstration purposes: Ctrl + Shift + A
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.ctrlKey && e.shiftKey && e.key === "A") {
        setIsAdmin((prev) => !prev);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  if (isAdmin) {
    return (
      <div className="min-h-screen bg-background">
        <div className="p-4 bg-primary text-primary-foreground flex justify-between items-center sticky top-0 z-50">
          <h1 className="font-bold">Admin Panel - Renee Dental</h1>
          <button 
            onClick={() => setIsAdmin(false)}
            className="text-sm underline hover:text-white/80 transition-colors"
          >
            Back to Website
          </button>
        </div>
        <AdminDashboard />
        <Toaster position="top-right" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/20">
      <Navbar />
      <main>
        <section id="home">
          <Hero />
        </section>
        <EmergencySection />
        <section id="about">
          <About />
        </section>
        <section id="services">
          <Services />
        </section>
        <section id="why-us">
          <WhyChooseUs />
        </section>
        <section id="gallery">
          <Gallery />
        </section>
        <section id="appointment" className="bg-secondary/30">
          <AppointmentForm />
        </section>
        <section id="testimonials">
          <Testimonials />
        </section>
        <section id="faq">
          <FAQ />
        </section>
        <section id="blog">
          <Blog />
        </section>
        <PaymentOptions />
        <section id="contact">
          <Contact />
        </section>
      </main>
      <Footer />
      <FloatingWhatsApp />
      <Toaster position="top-right" />
    </div>
  );
}

export default App;