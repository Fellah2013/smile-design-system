import React, { useState, useEffect } from "react";
import { Menu, X, Phone, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Gallery", href: "#gallery" },
    { name: "FAQ", href: "#faq" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b",
        isScrolled
          ? "bg-background/95 backdrop-blur-md py-2 border-border"
          : "bg-transparent py-4 border-transparent"
      )}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <a href="#home" className="flex items-center gap-2 group">
          <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center text-primary-foreground font-bold text-xl group-hover:scale-110 transition-transform">
            R
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-lg leading-none text-primary">RENEE DENTAL</span>
            <span className="text-[10px] tracking-widest text-muted-foreground uppercase">Services Limited</span>
          </div>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              {link.name}
            </a>
          ))}
          <div className="flex items-center gap-4">
            <a href="tel:+254708830627" className="hidden lg:flex items-center gap-2 text-sm font-semibold text-primary">
              <Phone size={16} />
              +254 708 830 627
            </a>
            <Button asChild size="sm" className="rounded-full shadow-md">
              <a href="#appointment">
                <Calendar className="mr-2" size={16} />
                Book Now
              </a>
            </Button>
          </div>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden p-2 text-foreground"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-background border-b animate-in slide-in-from-top duration-300">
          <div className="flex flex-col p-4 gap-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-lg font-medium p-2 hover:bg-secondary rounded-md"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <div className="pt-4 border-t flex flex-col gap-4">
              <a href="tel:+254708830627" className="flex items-center gap-2 text-primary font-bold px-2">
                <Phone size={20} />
                +254 708 830 627
              </a>
              <Button asChild className="w-full rounded-full" onClick={() => setIsMobileMenuOpen(false)}>
                <a href="#appointment">Book Appointment</a>
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;