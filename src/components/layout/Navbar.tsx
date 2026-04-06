"use client";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import gsap from "gsap";

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
  const [announcementVisible, setAnnouncementVisible] = useState(true);

  const logoRef = useRef<HTMLAnchorElement>(null);
  const logoLineRef = useRef<HTMLDivElement>(null);

  // ── GSAP: stagger-in nav links on mount ──────────────────────────────────
  useEffect(() => {
    gsap.from(".nav-link-item", {
      opacity: 0,
      y: -12,
      duration: 0.6,
      stagger: 0.07,
      delay: 1.2,
      ease: "power3.out",
    });
  }, []);

  // ── GSAP: logo underline hover handlers ──────────────────────────────────
  const handleLogoEnter = () => {
    if (!logoLineRef.current) return;
    gsap.to(logoLineRef.current, {
      width: "100%",
      duration: 0.4,
      ease: "power2.inOut",
    });
  };

  const handleLogoLeave = () => {
    if (!logoLineRef.current) return;
    gsap.to(logoLineRef.current, {
      width: "0%",
      duration: 0.4,
      ease: "power2.inOut",
    });
  };

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

  const isLinkActive = (href: string) => {
    const sectionId = href.replace("/#", "").replace("/", "");
    return activeSection === sectionId;
  };

  // announcement bar height offset
  const announcementH = 30;

  return (
    <>
      {/* ── Announcement Bar ──────────────────────────────────────────────── */}
      <AnimatePresence>
        {announcementVisible && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: announcementH, opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="fixed top-0 left-0 right-0 z-[110] overflow-hidden"
            style={{
              background: "#050505",
              borderBottom: "1px solid rgba(201,169,97,0.10)",
            }}
          >
            <div className="h-full flex items-center justify-center px-10 relative">
              <span className="text-[9px] tracking-[0.45em] uppercase text-white/25 select-none font-light">
                Est. 1998 · Coimbatore&rsquo;s Premier Design Studio ·
                Factory-Direct Materials
              </span>
              <button
                onClick={() => setAnnouncementVisible(false)}
                className="absolute right-5 top-1/2 -translate-y-1/2 text-white/20 hover:text-white/60 transition-colors duration-300 text-sm leading-none"
                aria-label="Close announcement"
              >
                &times;
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── Main Header ───────────────────────────────────────────────────── */}
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{
          y: announcementVisible ? announcementH : 0,
          opacity: 1,
        }}
        transition={{ duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94] }}
        className={`fixed left-0 right-0 z-[100] transition-all duration-700 ${
          scrolled ? "py-3" : "py-5 md:py-6"
        }`}
        style={
          scrolled
            ? {
                top: 0,
                backgroundColor: "rgba(5,5,5,0.96)",
                backdropFilter: "blur(24px)",
                WebkitBackdropFilter: "blur(24px)",
                borderBottom: "1px solid rgba(201,169,97,0.08)",
                boxShadow: "0 4px 30px rgba(0,0,0,0.5)",
              }
            : {
                top: 0,
                background: "transparent",
              }
        }
      >
        {/* Inner top-glow accent when scrolled */}
        {scrolled && (
          <div
            className="absolute top-0 left-0 right-0 h-[1px] pointer-events-none"
            style={{
              background:
                "linear-gradient(90deg, transparent 0%, rgba(201,169,97,0.18) 30%, rgba(232,213,183,0.22) 50%, rgba(201,169,97,0.18) 70%, transparent 100%)",
            }}
          />
        )}

        <div className="max-w-screen-2xl mx-auto px-5 md:px-8 lg:px-12 flex items-center justify-between">
          {/* ── Logo ──────────────────────────────────────────────────────── */}
          <Link
            ref={logoRef}
            href="/"
            className="relative z-10 group flex-shrink-0"
            onClick={handleNavClick}
            onMouseEnter={handleLogoEnter}
            onMouseLeave={handleLogoLeave}
          >
            <div className="relative flex flex-col leading-none">
              <span
                className={`font-serif tracking-[0.18em] uppercase transition-all duration-500 text-xl ${
                  scrolled ? "text-[#C9A961]" : "text-white"
                }`}
              >
                LAKSHMI
              </span>
              <span
                className={`text-[9px] tracking-[0.5em] uppercase font-light mt-[3px] transition-all duration-500 ${
                  scrolled ? "text-white/40" : "text-white/35"
                }`}
              >
                GLASS &amp; INTERIORS
              </span>
              {/* GSAP-animated gold underline */}
              <div
                ref={logoLineRef}
                className="absolute -bottom-[3px] left-0 h-[1px] bg-[#C9A961]"
                style={{ width: "0%" }}
              />
            </div>
          </Link>

          {/* ── Desktop Nav Links ─────────────────────────────────────────── */}
          <nav className="hidden lg:flex items-center gap-9 xl:gap-12">
            {navLinks.map((link) => {
              const active = isLinkActive(link.href);
              return (
                <Link
                  key={link.label}
                  href={link.href}
                  className={`nav-link-item relative flex flex-col items-center gap-[5px] text-[10px] tracking-[0.25em] uppercase font-light transition-all duration-300 ${
                    active ? "text-white" : "text-white/55 hover:text-white"
                  }`}
                >
                  {link.label}

                  {/* Gold dot — active indicator */}
                  <span
                    className={`w-1 h-1 rounded-full bg-[#C9A961] transition-all duration-400 ${
                      active ? "opacity-100 scale-100" : "opacity-0 scale-0"
                    }`}
                  />
                </Link>
              );
            })}
          </nav>

          {/* ── Desktop Right ─────────────────────────────────────────────── */}
          <div className="hidden lg:flex items-center gap-6 flex-shrink-0">
            <a
              href="tel:+919940863196"
              className="text-[10px] text-white/30 font-light tracking-wider hover:text-[#C9A961] transition-colors duration-300"
            >
              +91 99408 63196
            </a>

            {scrolled ? (
              <Link
                href="/contact"
                className="px-5 py-2 text-[10px] tracking-[0.25em] uppercase font-light bg-[#C9A961] text-black transition-all duration-500 hover:bg-[#E8D5B7]"
              >
                ENQUIRE
              </Link>
            ) : (
              <Link
                href="/contact"
                className="px-5 py-2 text-[10px] tracking-[0.25em] uppercase font-light border border-white/20 text-white/70 hover:border-[#C9A961]/60 hover:text-white transition-all duration-500"
              >
                ENQUIRE
              </Link>
            )}
          </div>

          {/* ── Mobile Hamburger ──────────────────────────────────────────── */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden relative z-[120] w-10 h-10 flex flex-col items-center justify-center gap-[6px]"
            aria-label="Toggle menu"
          >
            <span
              className={`block h-[1px] bg-white transition-all duration-500 origin-center ${
                mobileOpen ? "w-5 rotate-45 translate-y-[7px]" : "w-6"
              }`}
            />
            <span
              className={`block h-[1px] bg-white transition-all duration-500 ${
                mobileOpen ? "w-0 opacity-0" : "w-6 opacity-100"
              }`}
            />
            <span
              className={`block h-[1px] bg-white transition-all duration-500 origin-center ${
                mobileOpen ? "w-5 -rotate-45 -translate-y-[7px]" : "w-6"
              }`}
            />
          </button>
        </div>
      </motion.header>

      {/* ── Mobile Full-Screen Menu ────────────────────────────────────────── */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.45, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="fixed inset-0 z-[110] bg-[#0a0a0a] overflow-hidden lg:hidden"
          >
            {/* Giant "LG" watermark */}
            <div
              className="absolute inset-0 flex items-center justify-end pr-[5%] pointer-events-none select-none"
              aria-hidden="true"
            >
              <span
                className="font-serif font-bold text-white leading-none"
                style={{
                  fontSize: "55vw",
                  opacity: 0.03,
                  letterSpacing: "-0.05em",
                }}
              >
                LG
              </span>
            </div>

            {/* Thin left gold accent line */}
            <div
              className="absolute left-0 top-0 bottom-0 w-[1px]"
              style={{
                background:
                  "linear-gradient(to bottom, transparent, rgba(201,169,97,0.15) 30%, rgba(201,169,97,0.15) 70%, transparent)",
              }}
            />

            <div className="relative z-10 flex flex-col justify-between h-full px-8 pt-28 pb-12">
              {/* Nav links */}
              <nav className="flex flex-col">
                {navLinks.map((link, index) => {
                  const active = isLinkActive(link.href);
                  return (
                    <motion.div
                      key={link.label}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -10 }}
                      transition={{
                        delay: 0.05 + index * 0.065,
                        duration: 0.55,
                        ease: [0.25, 0.46, 0.45, 0.94],
                      }}
                    >
                      <Link
                        href={link.href}
                        onClick={handleNavClick}
                        className={`relative inline-flex items-center gap-4 py-3 font-serif text-4xl font-light tracking-wide transition-colors duration-300 ${
                          active
                            ? "text-[#C9A961]"
                            : "text-white/70 hover:text-[#C9A961]"
                        }`}
                      >
                        {/* Index number */}
                        <span className="text-[10px] tracking-[0.3em] text-white/20 font-sans font-light mt-1 w-6">
                          {String(index + 1).padStart(2, "0")}
                        </span>
                        {link.label}
                      </Link>
                    </motion.div>
                  );
                })}
              </nav>

              {/* Bottom contact block */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ delay: 0.55, duration: 0.5 }}
                className="flex flex-col gap-5"
              >
                {/* Thin gold rule */}
                <div
                  className="w-12 h-[1px]"
                  style={{ background: "rgba(201,169,97,0.30)" }}
                />

                <a
                  href="tel:+919940863196"
                  className="text-white/50 text-sm tracking-[0.25em] font-light hover:text-[#C9A961] transition-colors duration-300"
                >
                  +91 99408 63196
                </a>
                <a
                  href="mailto:info@lakshmiglass.com"
                  className="text-white/30 text-xs tracking-[0.2em] font-light hover:text-[#C9A961] transition-colors duration-300"
                >
                  info@lakshmiglass.com
                </a>

                <Link
                  href="/contact"
                  onClick={handleNavClick}
                  className="inline-block mt-2 px-8 py-3 border border-[#C9A961]/40 text-[#C9A961] text-[10px] uppercase tracking-[0.35em] font-light hover:bg-[#C9A961] hover:text-black transition-all duration-500 self-start"
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
