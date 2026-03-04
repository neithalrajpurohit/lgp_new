"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/#services" },
  { label: "Projects", href: "/projects" },
  { label: "Gallery", href: "/#gallery" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
    };

    const handleSectionObserver = () => {
      const sections = document.querySelectorAll("section[id]");
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActiveSection(entry.target.id);
            }
          });
        },
        { threshold: 0.3, rootMargin: "-80px 0px 0px 0px" },
      );

      sections.forEach((section) => observer.observe(section));
      return () => sections.forEach((section) => observer.unobserve(section));
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    const cleanup = handleSectionObserver();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (cleanup) cleanup();
    };
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const handleNavClick = () => {
    setMobileOpen(false);
  };

  return (
    <>
      {/* Desktop & Mobile Top Nav */}
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
        className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-700 ${
          scrolled
            ? "bg-brand-black/90 backdrop-blur-xl border-b border-white/5 py-3"
            : "bg-transparent py-5 md:py-6"
        }`}
      >
        <div className="max-w-8xl mx-auto px-5 md:px-8 lg:px-12 flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="relative z-10 group"
            onClick={handleNavClick}
          >
            <div className="flex flex-col">
              <span
                className={`font-serif tracking-[0.15em] uppercase transition-all duration-500 ${
                  scrolled
                    ? "text-lg md:text-xl text-brand-gold"
                    : "text-xl md:text-2xl text-white"
                }`}
              >
                Lakshmi
              </span>
              <span
                className={`font-light tracking-[0.35em] uppercase transition-all duration-500 ${
                  scrolled
                    ? "text-[9px] md:text-[10px] text-white/50"
                    : "text-[10px] md:text-[11px] text-brand-goldLight/60"
                }`}
              >
                Glass & Interiors
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8 xl:gap-10">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className={`nav-link ${
                  activeSection === link.href.replace("/#", "") ? "active" : ""
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-6">
            <a
              href="tel:+919876543210"
              className="text-white/50 text-sm font-light tracking-wider hover:text-brand-gold transition-colors duration-300"
            >
              +91 9940863196
            </a>
            <Link
              href="/contact"
              className={`px-6 py-2.5 text-xs font-light uppercase tracking-[0.2em] transition-all duration-500 ${
                scrolled
                  ? "bg-brand-gold text-black hover:bg-brand-goldLight"
                  : "border border-brand-gold/40 text-brand-gold hover:bg-brand-gold hover:text-black"
              }`}
            >
              Enquire
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden relative z-[110] w-10 h-10 flex flex-col items-center justify-center gap-1.5"
            aria-label="Toggle menu"
          >
            <span
              className={`block w-6 h-[1.5px] bg-white transition-all duration-500 origin-center ${
                mobileOpen ? "rotate-45 translate-y-[4.5px]" : ""
              }`}
            />
            <span
              className={`block w-6 h-[1.5px] bg-white transition-all duration-500 ${
                mobileOpen ? "opacity-0 scale-0" : "opacity-100"
              }`}
            />
            <span
              className={`block w-6 h-[1.5px] bg-white transition-all duration-500 origin-center ${
                mobileOpen ? "-rotate-45 -translate-y-[4.5px]" : ""
              }`}
            />
          </button>
        </div>
      </motion.header>

      {/* Mobile Full-Screen Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed inset-0 z-[90] bg-brand-black/98 backdrop-blur-2xl lg:hidden"
          >
            <div className="flex flex-col items-center justify-center h-full px-6">
              <nav className="flex flex-col items-center gap-1">
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{
                      delay: index * 0.07,
                      duration: 0.5,
                      ease: [0.25, 0.46, 0.45, 0.94],
                    }}
                  >
                    <Link
                      href={link.href}
                      onClick={handleNavClick}
                      className="block py-3 font-serif text-3xl md:text-4xl font-light text-white/70 hover:text-brand-gold transition-colors duration-300 tracking-wide"
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
              </nav>

              {/* Mobile Contact Info */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.5 }}
                className="mt-12 text-center"
              >
                <div className="luxury-divider-wide mx-auto mb-8" />
                <a
                  href="tel:+919876543210"
                  className="block text-brand-goldLight/60 text-sm tracking-[0.2em] mb-3 hover:text-brand-gold transition-colors"
                >
                  +91 99408 63196
                </a>
                <a
                  href="mailto:info@lakshmiglass.com"
                  className="block text-brand-goldLight/40 text-xs tracking-[0.15em] hover:text-brand-gold transition-colors"
                >
                  info@lakshmiglass.com
                </a>

                <Link
                  href="/contact"
                  onClick={handleNavClick}
                  className="inline-block mt-8 px-10 py-3 border border-brand-gold/40 text-brand-gold text-xs uppercase tracking-[0.25em] font-light hover:bg-brand-gold hover:text-black transition-all duration-500"
                >
                  Book Consultation
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
