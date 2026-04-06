"use client";
import { useRef, useState, useEffect } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

/* ─────────────────────────────────────────────
   Contact Details Data
───────────────────────────────────────────── */
const contactDetails = [
  {
    icon: (
      <svg
        className="w-5 h-5"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.2}
          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.2}
          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
        />
      </svg>
    ),
    label: "Visit Our Studio",
    lines: [
      "123, Industrial Estate, Gandhipuram",
      "Coimbatore, Tamil Nadu 641012",
    ],
    href: "https://maps.google.com/?q=Coimbatore+Tamil+Nadu",
  },
  {
    icon: (
      <svg
        className="w-5 h-5"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.2}
          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
        />
      </svg>
    ),
    label: "Call Us",
    lines: ["+91 99408 63196", "+91 9894863196"],
    href: "tel:+919894863196",
  },
  {
    icon: (
      <svg
        className="w-5 h-5"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.2}
          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
        />
      </svg>
    ),
    label: "Email Us",
    lines: ["info@lakshmiglass.com", "design@lakshmiglass.com"],
    href: "mailto:info@lakshmiglass.com",
  },
  {
    icon: (
      <svg
        className="w-5 h-5"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.2}
          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
    label: "Working Hours",
    lines: ["Mon — Sat: 9:00 AM — 7:00 PM", "Sunday: By Appointment"],
    href: undefined,
  },
];

/* ─────────────────────────────────────────────
   FloatingInput
───────────────────────────────────────────── */
interface FloatingFieldProps {
  label: string;
  required?: boolean;
  type?: string;
  id: string;
  className?: string;
}

function FloatingInput({
  label,
  required,
  type = "text",
  id,
}: FloatingFieldProps) {
  const [focused, setFocused] = useState(false);
  const [value, setValue] = useState("");
  const active = focused || value.length > 0;

  return (
    <div className="relative group">
      <label
        htmlFor={id}
        className={`absolute left-0 font-light tracking-wider transition-all duration-300 pointer-events-none select-none ${
          active
            ? "top-0 text-[9px] md:text-[10px] text-brand-gold tracking-[0.25em] uppercase"
            : "top-3.5 text-xs md:text-sm text-white/25 tracking-wide"
        }`}
      >
        {label}
        {required && <span className="text-brand-gold ml-0.5">*</span>}
      </label>
      <input
        id={id}
        type={type}
        required={required}
        value={value}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        onChange={(e) => setValue(e.target.value)}
        className="w-full bg-transparent pt-5 pb-3 px-0 text-white text-sm font-light tracking-wide focus:outline-none"
      />
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-white/8" />
      <div
        className="absolute bottom-0 left-0 h-[1px] bg-gradient-to-r from-brand-gold to-brand-goldLight transition-all duration-500 ease-out"
        style={{ width: active ? "100%" : "0%" }}
      />
    </div>
  );
}

/* ─────────────────────────────────────────────
   FloatingTextarea
───────────────────────────────────────────── */
function FloatingTextarea({ label, id }: { label: string; id: string }) {
  const [focused, setFocused] = useState(false);
  const [value, setValue] = useState("");
  const active = focused || value.length > 0;

  return (
    <div className="relative group">
      <label
        htmlFor={id}
        className={`absolute left-0 font-light tracking-wider transition-all duration-300 pointer-events-none select-none ${
          active
            ? "top-0 text-[9px] md:text-[10px] text-brand-gold tracking-[0.25em] uppercase"
            : "top-3.5 text-xs md:text-sm text-white/25 tracking-wide"
        }`}
      >
        {label}
      </label>
      <textarea
        id={id}
        rows={4}
        value={value}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        onChange={(e) => setValue(e.target.value)}
        className="w-full bg-transparent pt-5 pb-3 px-0 text-white text-sm font-light tracking-wide focus:outline-none resize-none leading-relaxed"
      />
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-white/8" />
      <div
        className="absolute bottom-0 left-0 h-[1px] bg-gradient-to-r from-brand-gold to-brand-goldLight transition-all duration-500 ease-out"
        style={{ width: active ? "100%" : "0%" }}
      />
    </div>
  );
}

/* ─────────────────────────────────────────────
   FloatingSelect
───────────────────────────────────────────── */
function FloatingSelect({
  id,
  label,
  required,
  children,
}: {
  id: string;
  label: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  const [active, setActive] = useState(false);

  return (
    <div className="relative group">
      <label
        htmlFor={id}
        className="block text-[9px] md:text-[10px] text-brand-gold font-light tracking-[0.25em] uppercase mb-1"
      >
        {label}
        {required && <span className="text-brand-gold ml-0.5">*</span>}
      </label>
      <select
        id={id}
        required={required}
        onFocus={() => setActive(true)}
        onBlur={() => setActive(false)}
        onChange={() => setActive(true)}
        className="w-full bg-transparent pt-1 pb-3 px-0 text-white/60 text-sm font-light tracking-wide focus:outline-none appearance-none cursor-pointer"
      >
        {children}
      </select>
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-white/8" />
      <div
        className="absolute bottom-0 left-0 h-[1px] bg-gradient-to-r from-brand-gold to-brand-goldLight transition-all duration-500"
        style={{ width: active ? "100%" : "0%" }}
      />
      {/* Custom arrow */}
      <div className="absolute right-0 bottom-3.5 pointer-events-none">
        <svg
          className="w-3 h-3 text-brand-gold/30"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   ContactCard — minimal left-border style
───────────────────────────────────────────── */
function ContactCard({
  detail,
  index,
  inView,
}: {
  detail: (typeof contactDetails)[0];
  index: number;
  inView: boolean;
}) {
  const [hovered, setHovered] = useState(false);

  const cardContent = (
    <motion.div
      className="relative flex items-start gap-4 pl-4 py-3 cursor-default"
      style={{
        borderLeft: `1px solid rgba(201,169,97,${hovered ? 0.55 : 0.18})`,
        transition: "border-color 0.4s ease",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Glow line on hover */}
      <div
        className="absolute left-0 top-0 bottom-0 w-[1px] transition-all duration-500 pointer-events-none"
        style={{
          background: hovered
            ? "linear-gradient(180deg, transparent, #C9A961, transparent)"
            : "transparent",
          boxShadow: hovered ? "0 0 8px rgba(201,169,97,0.4)" : "none",
        }}
      />

      {/* Icon */}
      <div
        className="flex-shrink-0 mt-0.5 transition-all duration-300"
        style={{ color: hovered ? "#C9A961" : "rgba(201,169,97,0.35)" }}
      >
        {detail.icon}
      </div>

      {/* Text */}
      <div>
        <p
          className="text-[10px] font-light tracking-[0.22em] uppercase mb-1.5 transition-colors duration-300"
          style={{
            color: hovered ? "rgba(201,169,97,0.9)" : "rgba(201,169,97,0.45)",
          }}
        >
          {detail.label}
        </p>
        {detail.lines.map((line) => (
          <p
            key={line}
            className="text-sm font-light leading-relaxed tracking-wide transition-colors duration-300"
            style={{
              color: hovered
                ? "rgba(255,255,255,0.75)"
                : "rgba(255,255,255,0.35)",
            }}
          >
            {line}
          </p>
        ))}
      </div>
    </motion.div>
  );

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{
        duration: 0.8,
        delay: 0.5 + index * 0.12,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="contact-card-item"
    >
      {detail.href ? (
        <a
          href={detail.href}
          target={detail.href.startsWith("http") ? "_blank" : undefined}
          rel={
            detail.href.startsWith("http") ? "noopener noreferrer" : undefined
          }
          className="block"
        >
          {cardContent}
        </a>
      ) : (
        cardContent
      )}
    </motion.div>
  );
}

/* ─────────────────────────────────────────────
   Social Icons Data
───────────────────────────────────────────── */
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

const WhatsAppIcon = () => (
  <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

/* ─────────────────────────────────────────────
   Heading words for clip reveal
───────────────────────────────────────────── */
const headingWords = ["LET'S", "BUILD", "TOGETHER"];

/* ─────────────────────────────────────────────
   Main Contact Component
───────────────────────────────────────────── */
export default function Contact() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const leftRef = useRef<HTMLDivElement>(null);
  const rightRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const headingWordsRef = useRef<HTMLDivElement>(null);
  const contactCardsRef = useRef<HTMLDivElement>(null);
  const submitBtnRef = useRef<HTMLButtonElement>(null);

  const sectionInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const leftInView = useInView(leftRef, { once: true, margin: "-80px" });
  const rightInView = useInView(rightRef, { once: true, margin: "-80px" });
  const headingInView = useInView(headingRef, { once: true, margin: "-60px" });

  /* GSAP — staggered heading words entrance */
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    if (!headingWordsRef.current) return;
    const words = headingWordsRef.current.querySelectorAll(".heading-word");
    gsap.fromTo(
      words,
      { y: 80, opacity: 0, rotateX: -40 },
      {
        y: 0,
        opacity: 1,
        rotateX: 0,
        duration: 1,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: headingWordsRef.current,
          start: "top 80%",
          once: true,
        },
      },
    );
  }, []);

  /* GSAP — contact cards staggered entrance */
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    if (!contactCardsRef.current) return;
    const cards =
      contactCardsRef.current.querySelectorAll(".contact-card-item");
    gsap.fromTo(
      cards,
      { opacity: 0, y: 30, scale: 0.96 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.8,
        stagger: 0.12,
        ease: "power3.out",
        scrollTrigger: {
          trigger: contactCardsRef.current,
          start: "top 80%",
          once: true,
        },
      },
    );
  }, []);

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="relative bg-[#080808] overflow-hidden min-h-screen"
    >
      {/* ── Grain Texture Overlay ── */}
      <div
        className="absolute inset-0 pointer-events-none z-[1]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E")`,
          opacity: 0.028,
          mixBlendMode: "overlay",
        }}
      />

      {/* ── Gold Radial Glow — Top Right ── */}
      <div
        className="absolute top-0 right-0 w-[700px] h-[700px] pointer-events-none z-[1]"
        style={{
          background:
            "radial-gradient(ellipse at top right, rgba(201,169,97,0.07) 0%, rgba(201,169,97,0.02) 40%, transparent 70%)",
        }}
      />

      {/* ── CONTACT Watermark ── */}
      <div
        className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden z-[1]"
        aria-hidden="true"
      >
        <span
          className="font-serif font-bold whitespace-nowrap text-white"
          style={{
            fontSize: "clamp(7rem, 22vw, 20rem)",
            opacity: 0.022,
            letterSpacing: "-0.03em",
            lineHeight: 1,
          }}
        >
          CONTACT
        </span>
      </div>

      {/* ── Main Grid ── */}
      <div className="relative z-[2] flex flex-col lg:flex-row min-h-screen">
        {/* ════════════════════════════════
            LEFT COLUMN — 5/12
        ════════════════════════════════ */}
        <motion.div
          ref={leftRef}
          initial={{ opacity: 0, x: -60 }}
          animate={leftInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 1.1, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="relative lg:w-5/12 flex-shrink-0"
        >
          {/* Tall dark panel with gold left border */}
          <div
            className="relative h-full min-h-screen flex flex-col bg-[#0d0d0d] border-l-2 px-8 md:px-12 pt-24 pb-16"
            style={{ borderLeftColor: "rgba(201,169,97,0.25)" }}
          >
            {/* Vertical COIMBATORE text — far left edge */}
            <div
              className="absolute left-0 top-1/2 pointer-events-none select-none hidden lg:flex items-center justify-center"
              style={{
                writingMode: "vertical-rl",
                transform: "translateY(-50%) rotate(180deg)",
                paddingLeft: "2px",
              }}
            >
              <span
                className="font-mono text-[9px] uppercase"
                style={{
                  color: "rgba(201,169,97,0.13)",
                  letterSpacing: "0.45em",
                }}
              >
                COIMBATORE
              </span>
            </div>

            {/* ── Editorial Heading ── */}
            <div ref={headingRef} className="mb-10 mt-4">
              <div ref={headingWordsRef} style={{ perspective: "800px" }}>
                {headingWords.map((word, i) => (
                  <div
                    key={word}
                    className="overflow-hidden"
                    style={{ lineHeight: 0.95 }}
                  >
                    <motion.span
                      initial={{ y: 80, opacity: 0 }}
                      animate={headingInView ? { y: 0, opacity: 1 } : {}}
                      transition={{
                        duration: 0.9,
                        delay: 0.15 + i * 0.13,
                        ease: [0.77, 0, 0.175, 1],
                      }}
                      className="heading-word inline-block font-serif text-6xl md:text-8xl lg:text-[7rem] font-light text-white"
                      style={{ lineHeight: 0.95 }}
                    >
                      {word}
                    </motion.span>
                  </div>
                ))}
              </div>
            </div>

            {/* ── Gold Rule ── */}
            <motion.div
              initial={{ scaleX: 0, opacity: 0 }}
              animate={leftInView ? { scaleX: 1, opacity: 1 } : {}}
              transition={{
                duration: 1.2,
                delay: 0.7,
                ease: [0.77, 0, 0.175, 1],
              }}
              className="origin-left h-[1px] mb-6"
              style={{
                background:
                  "linear-gradient(90deg, rgba(201,169,97,0.6) 0%, rgba(201,169,97,0.1) 60%, transparent 100%)",
              }}
            />

            {/* ── Subtext ── */}
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={leftInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.85 }}
              className="text-[10px] font-light tracking-[0.32em] uppercase mb-12"
              style={{ color: "rgba(201,169,97,0.45)" }}
            >
              Bespoke Glass &amp; Interior Design · Coimbatore
            </motion.p>

            {/* ── Contact Cards ── */}
            <div ref={contactCardsRef} className="space-y-5 mb-10 flex-1">
              {contactDetails.map((detail, index) => (
                <ContactCard
                  key={detail.label}
                  detail={detail}
                  index={index}
                  inView={leftInView}
                />
              ))}
            </div>

            {/* ── Coordinates ── */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={leftInView ? { opacity: 1 } : {}}
              transition={{ duration: 1, delay: 1.1 }}
              className="flex items-center gap-3 mb-8"
            >
              <svg
                className="w-3 h-3 flex-shrink-0"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                style={{ color: "rgba(201,169,97,0.3)" }}
              >
                <circle cx="12" cy="12" r="3" strokeWidth="1.5" />
                <path
                  d="M12 2v4M12 18v4M2 12h4M18 12h4"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                />
              </svg>
              <span
                className="font-mono text-[10px] tracking-[0.18em]"
                style={{ color: "rgba(201,169,97,0.28)" }}
              >
                11.0168° N · 76.9558° E
              </span>
            </motion.div>

            {/* ── Thin separator ── */}
            <div
              className="h-[1px] mb-8"
              style={{
                background:
                  "linear-gradient(90deg, transparent, rgba(201,169,97,0.15) 50%, transparent)",
              }}
            />

            {/* ── WhatsApp + Socials ── */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={leftInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 1.3 }}
              className="flex flex-wrap items-center gap-5"
            >
              {/* WhatsApp */}
              <a
                href="https://wa.me/919940863196"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2.5"
              >
                <div
                  className="w-8 h-8 flex items-center justify-center border transition-all duration-300 group-hover:bg-[#25D366]/10"
                  style={{ borderColor: "rgba(37,211,102,0.25)" }}
                >
                  <WhatsAppIcon />
                </div>
                <span
                  className="text-[10px] font-light tracking-[0.22em] uppercase group-hover:text-[#25D366]/80 transition-colors duration-300"
                  style={{ color: "rgba(37,211,102,0.42)" }}
                >
                  WhatsApp
                </span>
              </a>

              {/* Divider */}
              <div
                className="w-[1px] h-4"
                style={{ background: "rgba(201,169,97,0.12)" }}
              />

              {/* Social icons */}
              <div className="flex items-center gap-2">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    aria-label={social.name}
                    className="w-8 h-8 border flex items-center justify-center transition-all duration-300 hover:border-brand-gold/30 hover:text-brand-gold hover:bg-brand-gold/5"
                    style={{
                      borderColor: "rgba(255,255,255,0.07)",
                      color: "rgba(255,255,255,0.22)",
                    }}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* ════════════════════════════════
            RIGHT COLUMN — 7/12
        ════════════════════════════════ */}
        <motion.div
          ref={rightRef}
          initial={{ opacity: 0, x: 60 }}
          animate={rightInView ? { opacity: 1, x: 0 } : {}}
          transition={{
            duration: 1.1,
            delay: 0.1,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
          className="lg:w-7/12 flex-shrink-0 flex flex-col"
        >
          <div className="flex-1 p-10 md:p-16 flex flex-col">
            {/* ── Form Header ── */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={rightInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.9, delay: 0.3 }}
              className="mb-12 md:mb-14"
            >
              <p
                className="text-[10px] font-light tracking-[0.38em] uppercase mb-5"
                style={{ color: "rgba(201,169,97,0.5)" }}
              >
                New Enquiry
              </p>
              <h3 className="font-serif text-3xl md:text-4xl font-light text-white mb-3 leading-tight">
                Begin Your Project
              </h3>
              <p
                className="text-sm font-light tracking-wide"
                style={{ color: "rgba(255,255,255,0.28)" }}
              >
                Share your vision. We&apos;ll craft the rest.
              </p>
            </motion.div>

            {/* ── Form ── */}
            <motion.form
              initial={{ opacity: 0, y: 30 }}
              animate={rightInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.9, delay: 0.45 }}
              className="flex-1 flex flex-col"
            >
              {/* Row 1: Name + Phone */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 mb-8">
                <FloatingInput id="contact-name" label="Full Name" required />
                <FloatingInput
                  id="contact-phone"
                  label="Phone Number"
                  required
                  type="tel"
                />
              </div>

              {/* Row 2: Email + Service */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 mb-8">
                <FloatingInput
                  id="contact-email"
                  label="Email Address"
                  type="email"
                />
                <FloatingSelect
                  id="contact-service"
                  label="Service Interested In"
                  required
                >
                  <option value="" className="bg-[#080808] text-white/40">
                    Select a service
                  </option>
                  <option
                    value="residential"
                    className="bg-[#080808] text-white"
                  >
                    Residential Interior
                  </option>
                  <option
                    value="commercial"
                    className="bg-[#080808] text-white"
                  >
                    Commercial / Office Interior
                  </option>
                  <option
                    value="hospitality"
                    className="bg-[#080808] text-white"
                  >
                    Hospitality Design
                  </option>
                  <option value="upvc" className="bg-[#080808] text-white">
                    UPVC Windows &amp; Doors
                  </option>
                  <option value="glass" className="bg-[#080808] text-white">
                    Architectural Glass
                  </option>
                  <option
                    value="consultation"
                    className="bg-[#080808] text-white"
                  >
                    Design Consultation
                  </option>
                  <option value="other" className="bg-[#080808] text-white">
                    Other
                  </option>
                </FloatingSelect>
              </div>

              {/* Budget Range */}
              <div className="mb-8">
                <FloatingSelect id="contact-budget" label="Estimated Budget">
                  <option value="" className="bg-[#080808] text-white/40">
                    Select budget range
                  </option>
                  <option value="under-5l" className="bg-[#080808] text-white">
                    Under ₹5 Lakh
                  </option>
                  <option value="5-15l" className="bg-[#080808] text-white">
                    ₹5 – 15 Lakh
                  </option>
                  <option value="15-50l" className="bg-[#080808] text-white">
                    ₹15 – 50 Lakh
                  </option>
                  <option value="above-50l" className="bg-[#080808] text-white">
                    Above ₹50 Lakh
                  </option>
                </FloatingSelect>
              </div>

              {/* Message */}
              <div className="mb-12 md:mb-14">
                <FloatingTextarea
                  id="contact-message"
                  label="Your Message — project details, timeline, requirements..."
                />
              </div>

              {/* ── Gold Separator ── */}
              <div
                className="h-[1px] mb-10"
                style={{
                  background:
                    "linear-gradient(90deg, rgba(201,169,97,0.3) 0%, rgba(201,169,97,0.08) 60%, transparent 100%)",
                }}
              />

              {/* ── Submit + Badge ── */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 mb-10">
                <motion.button
                  ref={submitBtnRef}
                  type="submit"
                  whileHover={{ backgroundColor: "#E8D5B7" }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ duration: 0.35 }}
                  className="group relative w-full sm:w-auto flex items-center justify-center gap-4 px-12 py-4 bg-brand-gold text-black uppercase tracking-[0.3em] text-xs font-light overflow-hidden"
                  onMouseMove={(e) => {
                    if (!submitBtnRef.current) return;
                    gsap.to(submitBtnRef.current, {
                      x:
                        (e.nativeEvent.offsetX -
                          e.currentTarget.offsetWidth / 2) *
                        0.2,
                      y:
                        (e.nativeEvent.offsetY -
                          e.currentTarget.offsetHeight / 2) *
                        0.2,
                      duration: 0.3,
                      ease: "power2.out",
                    });
                  }}
                  onMouseLeave={() => {
                    if (!submitBtnRef.current) return;
                    gsap.to(submitBtnRef.current, {
                      x: 0,
                      y: 0,
                      duration: 0.6,
                      ease: "elastic.out(1, 0.4)",
                    });
                  }}
                >
                  <span className="relative z-10 font-light tracking-[0.3em]">
                    Send Enquiry
                  </span>
                  <svg
                    className="w-4 h-4 relative z-10 transition-transform duration-300 group-hover:translate-x-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </motion.button>

                {/* Response badge */}
                <div
                  className="inline-flex items-center gap-3 px-4 py-2.5 border"
                  style={{
                    borderColor: "rgba(255,255,255,0.05)",
                    background: "rgba(255,255,255,0.02)",
                  }}
                >
                  <span className="relative flex h-2 w-2 flex-shrink-0">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-60" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                  </span>
                  <span
                    className="text-[10px] font-light tracking-[0.2em] uppercase whitespace-nowrap"
                    style={{ color: "rgba(201,169,97,0.55)" }}
                  >
                    We respond within 24 hours
                  </span>
                </div>
              </div>

              {/* ── Bottom Strip ── */}
              <div
                className="mt-auto pt-8 border-t flex flex-col sm:flex-row sm:items-center sm:justify-between gap-5"
                style={{ borderTopColor: "rgba(255,255,255,0.05)" }}
              >
                {/* WhatsApp CTA */}
                <a
                  href="https://wa.me/919940863196"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-3"
                >
                  <div
                    className="w-8 h-8 flex items-center justify-center border transition-all duration-300 group-hover:bg-[#25D366]/8"
                    style={{ borderColor: "rgba(37,211,102,0.22)" }}
                  >
                    <svg
                      className="w-3.5 h-3.5 transition-colors duration-300 group-hover:text-[#25D366]"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      style={{ color: "rgba(37,211,102,0.6)" }}
                    >
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                  </div>
                  <span
                    className="text-[10px] font-light tracking-[0.22em] uppercase group-hover:text-[#25D366]/80 transition-colors duration-300"
                    style={{ color: "rgba(37,211,102,0.42)" }}
                  >
                    Chat on WhatsApp
                  </span>
                </a>

                {/* Social Icons */}
                <div className="flex items-center gap-2">
                  {socialLinks.map((social) => (
                    <a
                      key={social.name}
                      href={social.href}
                      aria-label={social.name}
                      className="w-8 h-8 border flex items-center justify-center transition-all duration-300 hover:border-brand-gold/30 hover:text-brand-gold hover:bg-brand-gold/5"
                      style={{
                        borderColor: "rgba(255,255,255,0.07)",
                        color: "rgba(255,255,255,0.22)",
                      }}
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>
            </motion.form>
          </div>
        </motion.div>
      </div>

      {/* Suppress unused import warning — AnimatePresence available for future use */}
      <AnimatePresence />
    </section>
  );
}
