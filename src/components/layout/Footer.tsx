"use client";
import { useRef, useState, useEffect } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

/* ══════════════════════════════════════════
   Data
   ══════════════════════════════════════════ */
const footerLinks = {
  services: [
    { label: "Residential Interiors", href: "/services/interior" },
    { label: "Commercial Design", href: "/services/glass" },
    { label: "Hospitality Design", href: "/services/plywood" },
    { label: "UPVC Windows & Doors", href: "/services/upvc" },
    { label: "Architectural Glass", href: "/services/glass" },
    { label: "Design Consultation", href: "/contact" },
  ],
  explore: [
    { label: "About Us", href: "/about" },
    { label: "Our Projects", href: "/projects" },
    { label: "Gallery", href: "/#gallery" },
    { label: "Blog & Insights", href: "/blog" },
    { label: "Careers", href: "/contact" },
    { label: "Contact", href: "/contact" },
  ],
  serviceAreas: [
    "Coimbatore",
    "Sathyamangalam",
    "Chennai",
    "Madurai",
    "Tiruppur",
    "Bangalore",
  ],
};

const socialLinks = [
  {
    name: "Instagram",
    href: "#",
    icon: (
      <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
      </svg>
    ),
  },
  {
    name: "Facebook",
    href: "#",
    icon: (
      <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
  },
  {
    name: "YouTube",
    href: "#",
    icon: (
      <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
      </svg>
    ),
  },
  {
    name: "Pinterest",
    href: "#",
    icon: (
      <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 0C5.373 0 0 5.372 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 01.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z" />
      </svg>
    ),
  },
];

/* ══════════════════════════════════════════
   SocialIcon — gold circle hover
   ══════════════════════════════════════════ */
function SocialIcon({ social }: { social: (typeof socialLinks)[0] }) {
  const [hovered, setHovered] = useState(false);
  return (
    <a
      href={social.href}
      aria-label={social.name}
      className="relative w-8 h-8 flex items-center justify-center"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <motion.span
        className="absolute inset-0 rounded-full bg-brand-gold/15"
        initial={{ scale: 0, opacity: 0 }}
        animate={hovered ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
        transition={{ duration: 0.25, ease: [0.34, 1.56, 0.64, 1] }}
      />
      <span
        className="relative z-10 transition-colors duration-300"
        style={{ color: hovered ? "#C9A961" : "rgba(255,255,255,0.2)" }}
      >
        {social.icon}
      </span>
    </a>
  );
}

/* ══════════════════════════════════════════
   NewsletterForm — success state
   ══════════════════════════════════════════ */
function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const [loading, setLoading] = useState(false);
  const [focused, setFocused] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubscribed(true);
    }, 900);
  };

  return (
    <div>
      <p className="text-white/25 text-[9px] tracking-[0.35em] uppercase font-light mb-4">
        Subscribe to our newsletter
      </p>
      <AnimatePresence mode="wait">
        {subscribed ? (
          <motion.div
            key="success"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-3 py-3"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.4, ease: [0.34, 1.56, 0.64, 1] }}
              className="w-6 h-6 rounded-full bg-brand-gold/20 flex items-center justify-center flex-shrink-0"
            >
              <svg
                className="w-3.5 h-3.5 text-brand-gold"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <motion.path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2.5}
                  d="M5 13l4 4L19 7"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                />
              </svg>
            </motion.div>
            <span className="text-brand-gold/80 text-sm font-light tracking-wider">
              Subscribed! Thank you.
            </span>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            onSubmit={handleSubmit}
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.3 }}
            className="flex gap-0"
          >
            <div className="relative flex-1">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onFocus={() => setFocused(true)}
                onBlur={() => setFocused(false)}
                placeholder="Enter your email"
                className="w-full bg-transparent border-b border-white/10 px-0 py-3 text-white text-sm font-light tracking-wide placeholder:text-white/15 focus:outline-none transition-colors duration-500"
              />
              <div
                className="absolute bottom-0 left-0 h-[1px] bg-gradient-to-r from-brand-gold to-brand-goldLight transition-all duration-500 ease-out"
                style={{ width: focused || email ? "100%" : "0%" }}
              />
            </div>
            <button
              type="submit"
              disabled={loading}
              className="px-5 border-b border-white/10 text-brand-gold/60 hover:text-brand-gold hover:border-brand-gold/40 transition-all duration-500 flex items-center"
              aria-label="Subscribe"
            >
              <AnimatePresence mode="wait">
                {loading ? (
                  <motion.span
                    key="spinner"
                    initial={{ opacity: 0, rotate: 0 }}
                    animate={{ opacity: 1, rotate: 360 }}
                    exit={{ opacity: 0 }}
                    transition={{
                      duration: 0.6,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    className="block w-4 h-4 border border-brand-gold/40 border-t-brand-gold rounded-full"
                  />
                ) : (
                  <motion.svg
                    key="arrow"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </motion.svg>
                )}
              </AnimatePresence>
            </button>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}

/* ══════════════════════════════════════════
   Vertical Divider
   ══════════════════════════════════════════ */
function GoldDivider() {
  return (
    <div className="hidden lg:block absolute left-0 top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-brand-gold/10 to-transparent pointer-events-none" />
  );
}

/* ══════════════════════════════════════════
   Main Footer
   ══════════════════════════════════════════ */
export default function Footer() {
  const footerRef = useRef<HTMLElement>(null);
  const isInView = useInView(footerRef, { once: true, margin: "-60px" });

  const bottomRef = useRef<HTMLDivElement>(null);
  const bottomInView = useInView(bottomRef, { once: true, margin: "-20px" });

  const mastheadRef = useRef<HTMLDivElement>(null);
  const mastheadInView = useInView(mastheadRef, {
    once: true,
    margin: "-40px",
  });

  const marqueeRef = useRef<HTMLDivElement>(null);
  const marqueeTrackRef = useRef<HTMLDivElement>(null);

  // Register ScrollTrigger
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
  }, []);

  // Infinite GSAP marquee
  useEffect(() => {
    const track = marqueeTrackRef.current;
    if (!track) return;
    const totalWidth = track.scrollWidth / 2;
    const tween = gsap.to(track, {
      x: -totalWidth,
      duration: 30,
      ease: "none",
      repeat: -1,
      modifiers: {
        x: gsap.utils.unitize(
          (x: number) => parseFloat(String(x)) % totalWidth,
        ),
      },
    });
    return () => {
      tween.kill();
    };
  }, []);

  // Badge stagger animation on scroll
  useEffect(() => {
    if (!footerRef.current) return;
    gsap.fromTo(
      ".footer-badge",
      { opacity: 0, y: 10 },
      {
        opacity: 1,
        y: 0,
        stagger: 0.1,
        duration: 0.6,
        ease: "power2.out",
        scrollTrigger: {
          trigger: footerRef.current,
          start: "top 80%",
        },
      },
    );
  }, []);

  /* Column stagger variants */
  const colVariants = {
    hidden: { opacity: 0, y: 32 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        delay: i * 0.11,
        ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number],
      },
    }),
  };

  /* Link hover underline variants */
  const linkVariants = {
    hidden: { opacity: 0, x: -6 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        delay: i * 0.07,
        ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number],
      },
    }),
  };

  return (
    <footer ref={footerRef} className="relative bg-[#080808] overflow-hidden">
      {/* ── Shimmer keyframe ── */}
      <style jsx>{`
        @keyframes shimmerText {
          0% {
            background-position: 200% center;
          }
          100% {
            background-position: -200% center;
          }
        }
        @keyframes grainMove {
          0%,
          100% {
            transform: translate(0, 0);
          }
          10% {
            transform: translate(-2%, -3%);
          }
          30% {
            transform: translate(3%, 2%);
          }
          50% {
            transform: translate(-1%, 4%);
          }
          70% {
            transform: translate(2%, -2%);
          }
          90% {
            transform: translate(-3%, 1%);
          }
        }
      `}</style>

      {/* ── Ambient gold glow — top center ── */}
      <div
        className="absolute top-0 left-0 right-0 h-[600px] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 50% 0%, rgba(201,169,97,0.04) 0%, transparent 60%)",
        }}
      />

      {/* ── Grain overlay ── */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.18]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E")`,
          backgroundRepeat: "repeat",
          backgroundSize: "128px 128px",
          animation: "grainMove 8s steps(10) infinite",
          mixBlendMode: "overlay",
        }}
      />

      {/* ── Large "LG" watermark — bottom right ── */}
      <div className="absolute bottom-0 right-0 pointer-events-none select-none overflow-hidden leading-none">
        <span
          className="font-serif font-bold text-[20vw] text-white/[0.02] leading-none"
          style={{ lineHeight: 0.85 }}
        >
          LG
        </span>
      </div>

      {/* ════════════════════════════════════
          MASTHEAD STRIP
          ════════════════════════════════════ */}
      <div ref={mastheadRef} className="relative border-t border-[#C9A961]/20">
        <div className="py-8 flex flex-col items-center gap-3">
          <motion.p
            initial={{ opacity: 0, letterSpacing: "0.3em" }}
            animate={
              mastheadInView
                ? { opacity: 1, letterSpacing: "0.6em" }
                : { opacity: 0, letterSpacing: "0.3em" }
            }
            transition={{ duration: 1.4, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="text-sm md:text-base uppercase text-white/20 font-light"
            style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
          >
            Lakshmi Glass &amp; Interiors
          </motion.p>
          {/* thin gold gradient rule */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={mastheadInView ? { scaleX: 1 } : { scaleX: 0 }}
            transition={{
              duration: 1.2,
              delay: 0.3,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
            className="w-48 h-[1px] bg-gradient-to-r from-transparent via-[#C9A961]/40 to-transparent"
            style={{ transformOrigin: "center" }}
          />
        </div>
      </div>

      {/* ── GSAP Marquee Strip ── */}
      <div
        className="relative overflow-hidden border-y border-white/[0.04] py-4 bg-[#060606]"
        ref={marqueeRef}
      >
        <div
          ref={marqueeTrackRef}
          className="flex gap-12 whitespace-nowrap"
          style={{ willChange: "transform" }}
        >
          {[...Array(2)].map((_, setIdx) => (
            <div key={setIdx} className="flex gap-12 flex-shrink-0">
              {[
                "Luxury Interiors",
                "·",
                "UPVC Windows",
                "·",
                "Architectural Glass",
                "·",
                "Premium Plywood",
                "·",
                "Bespoke Design",
                "·",
                "Est. 1998",
                "·",
                "Coimbatore",
                "·",
              ].map((item, i) => (
                <span
                  key={i}
                  className="text-[10px] tracking-[0.4em] uppercase text-white/10 font-light flex-shrink-0"
                >
                  {item}
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* ════════════════════════════════════
          MAIN CONTENT GRID
          ════════════════════════════════════ */}
      <div className="relative z-10 max-w-[1600px] mx-auto px-5 md:px-8 lg:px-14 xl:px-20">
        <div className="py-16 md:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-0">
            {/* ── Col 1: Brand block (col-span-4) ── */}
            <motion.div
              custom={0}
              variants={colVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="lg:col-span-4 lg:pr-12"
            >
              {/* Logo mark */}
              <Link href="/" className="inline-block group mb-5">
                <div className="flex flex-col">
                  <span className="font-serif text-2xl tracking-[0.2em] uppercase text-[#C9A961] transition-colors duration-500 group-hover:text-[#E8D5B7]">
                    Lakshmi
                  </span>
                  <span className="text-[9px] tracking-[0.55em] uppercase text-white/25 font-light transition-colors duration-500 group-hover:text-white/40">
                    Glass &amp; Interiors
                  </span>
                </div>
              </Link>

              {/* Thin gold rule */}
              <div className="w-12 h-[1px] bg-gradient-to-r from-[#C9A961]/60 to-transparent mb-6" />

              {/* Brand description */}
              <p className="text-gray-600 text-sm leading-relaxed font-light max-w-xs mb-7">
                A premier luxury interior design studio with over 25 years of
                excellence, transforming spaces into living masterpieces.
              </p>

              {/* Trust badge pills */}
              <div className="flex flex-wrap items-center gap-2 mb-8">
                {["ISO Certified", "25+ Years", "500+ Projects"].map(
                  (badge) => (
                    <span
                      key={badge}
                      className="footer-badge border border-white/10 px-3 py-1 text-[9px] text-white/30 tracking-widest uppercase font-light"
                    >
                      {badge}
                    </span>
                  ),
                )}
              </div>

              {/* Newsletter */}
              <NewsletterForm />
            </motion.div>

            {/* ── Col 2: Services (col-span-2) ── */}
            <motion.div
              custom={1}
              variants={colVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="relative lg:col-span-2 lg:pl-10"
            >
              <GoldDivider />
              <h4 className="text-[9px] tracking-[0.4em] uppercase text-white/20 font-light mb-6">
                Services
              </h4>
              <ul className="space-y-3">
                {footerLinks.services.map((link, i) => (
                  <motion.li
                    key={link.label}
                    custom={i}
                    variants={linkVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                  >
                    <Link
                      href={link.href}
                      className="group relative text-sm font-light text-white/40 hover:text-[#C9A961] transition-colors duration-300 inline-block"
                    >
                      {link.label}
                      <span className="absolute -bottom-0.5 left-0 w-0 h-[1px] bg-[#C9A961]/40 transition-all duration-300 group-hover:w-full" />
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* ── Col 3: Explore (col-span-2) ── */}
            <motion.div
              custom={2}
              variants={colVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="relative lg:col-span-2 lg:pl-10"
            >
              <GoldDivider />
              <h4 className="text-[9px] tracking-[0.4em] uppercase text-white/20 font-light mb-6">
                Explore
              </h4>
              <ul className="space-y-3">
                {footerLinks.explore.map((link, i) => (
                  <motion.li
                    key={link.label}
                    custom={i}
                    variants={linkVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                  >
                    <Link
                      href={link.href}
                      className="group relative text-sm font-light text-white/40 hover:text-[#C9A961] transition-colors duration-300 inline-block"
                    >
                      {link.label}
                      <span className="absolute -bottom-0.5 left-0 w-0 h-[1px] bg-[#C9A961]/40 transition-all duration-300 group-hover:w-full" />
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* ── Col 4: Service Areas (col-span-2) ── */}
            <motion.div
              custom={3}
              variants={colVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="relative lg:col-span-2 lg:pl-10"
            >
              <GoldDivider />
              <h4 className="text-[9px] tracking-[0.4em] uppercase text-white/20 font-light mb-6">
                Service Areas
              </h4>
              <ul className="space-y-3">
                {footerLinks.serviceAreas.map((area, i) => (
                  <motion.li
                    key={area}
                    custom={i}
                    variants={linkVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    className="text-sm font-light text-white/40"
                  >
                    {area}
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* ── Col 5: Contact / Studio (col-span-2) ── */}
            <motion.div
              custom={4}
              variants={colVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="relative lg:col-span-2 lg:pl-10"
            >
              <GoldDivider />
              <h4 className="text-[9px] tracking-[0.4em] uppercase text-white/20 font-light mb-6">
                Studio
              </h4>
              <div className="space-y-4 text-xs text-white/35 leading-relaxed font-light">
                <div>
                  <p>No. 45, Avinashi Road</p>
                  <p>Coimbatore — 641 018</p>
                  <p>Tamil Nadu, India</p>
                </div>
                <div className="w-8 h-[1px] bg-[#C9A961]/15" />
                <div className="space-y-1.5">
                  <a
                    href="tel:+919940863196"
                    className="block hover:text-[#C9A961] transition-colors duration-300"
                  >
                    +91 99408 63196
                  </a>
                  <a
                    href="tel:+914224222222"
                    className="block hover:text-[#C9A961] transition-colors duration-300"
                  >
                    +91 422 422 2222
                  </a>
                </div>
                <div className="w-8 h-[1px] bg-[#C9A961]/15" />
                <a
                  href="mailto:info@lakshmiglass.com"
                  className="block hover:text-[#C9A961] transition-colors duration-300"
                >
                  info@lakshmiglass.com
                </a>
                <div className="w-8 h-[1px] bg-[#C9A961]/15" />
                <div>
                  <p className="text-[9px] tracking-[0.3em] uppercase text-white/15 mb-1">
                    Hours
                  </p>
                  <p>Mon – Sat: 9:30 – 19:00</p>
                  <p>Sunday: By appointment</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* ════════════════════════════════════
            BOTTOM BAR
            ════════════════════════════════════ */}
        <div ref={bottomRef}>
          {/* Sweep gold line */}
          <div className="relative h-[1px] overflow-hidden">
            <div className="absolute inset-0 bg-white/[0.04]" />
            <motion.div
              initial={{ scaleX: 0 }}
              animate={bottomInView ? { scaleX: 1 } : {}}
              transition={{
                duration: 1.6,
                ease: [0.25, 0.46, 0.45, 0.94],
                delay: 0.15,
              }}
              className="absolute inset-0 bg-gradient-to-r from-transparent via-[#C9A961]/50 to-transparent"
              style={{ transformOrigin: "left center" }}
            />
          </div>

          {/* Border thin */}
          <div className="border-t border-white/[0.04]" />

          <motion.div
            initial={{ opacity: 0 }}
            animate={bottomInView ? { opacity: 1 } : {}}
            transition={{ duration: 1, delay: 0.45 }}
            className="py-6"
          >
            <div className="flex flex-col md:flex-row items-center justify-between gap-5">
              {/* Left — Copyright */}
              <p className="text-[10px] text-white/20 font-light tracking-wider order-2 md:order-1">
                &copy; {new Date().getFullYear()} Lakshmi Glass &amp; Interiors.
                All rights reserved.
              </p>

              {/* Center — Social icons */}
              <div className="flex items-center gap-0.5 order-1 md:order-2">
                {socialLinks.map((social) => (
                  <SocialIcon key={social.name} social={social} />
                ))}
              </div>

              {/* Right — Tagline */}
              <p
                className="text-[10px] text-white/15 tracking-wider order-3 italic"
                style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
              >
                Designed with precision in Coimbatore
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </footer>
  );
}
