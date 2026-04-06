"use client";
import { useRef, useState, useEffect, useCallback } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

/* ─── Data ────────────────────────────────────────────────────────────────── */
const services = [
  {
    id: "residential",
    subtitle: "Residential",
    category: "Residential",
    title: "Bespoke Living Spaces",
    tagline: "Where Luxury Meets Lifestyle, Room by Room.",
    description:
      "Our client's needs and sensibilities are pivotal to our dream home creations. We combine a uniqueness in style with the nitty-gritties of the practical and functional to make our creations hugely distinctive. They are truly signatures of timeless appeal, with a stamp of minimalism and beautiful functionalism.",
    image: "/images/00DD2A56-22A9-40C8-BB8D-B60FBF64A53B_1_102_o.jpeg",
    secondaryImage: "/images/197FEE18-93D0-449B-8EF0-25EFE8EDDC75.jpeg",
    accentImage: "/images/0B48182F-6308-458F-88D7-0183F7A5B418.jpeg",
    features: [
      "Complete Interior Design",
      "UPVC Windows & Doors",
      "Custom Furniture",
      "Modular Kitchens",
    ],
    link: "/services/interior",
    align: "left" as const,
  },
  {
    id: "commercial",
    subtitle: "Office Interiors",
    category: "Commercial",
    title: "Refined Workspaces",
    tagline: "Workspaces That Think, Create, and Inspire.",
    description:
      "High-end office spaces that strike the perfect balance between sophistication and functionality. Each project is thoughtfully tailored to reflect the client's brand identity while creating an environment that inspires productivity and comfort. With a refined aesthetic and meticulous attention to detail, we deliver smart, sustainable corporate environments.",
    image: "/images/06056E81-A14A-4983-931D-0BC651973615.jpeg",
    secondaryImage: "/images/12128744-C109-46CF-8CD5-B470F787F6A0.jpeg",
    accentImage: "/images/1768AA66-6912-454E-9AFC-7B95D7BE624A.jpeg",
    features: [
      "Corporate Interiors",
      "Glass Partitions",
      "Architectural Glazing",
      "Smart Space Planning",
    ],
    link: "/services/glass",
    align: "right" as const,
  },
  {
    id: "hospitality",
    subtitle: "Hospitality",
    category: "Glass Work",
    title: "Immersive Experiences",
    tagline: "Spaces That Welcome, Experiences That Stay.",
    description:
      "Our hospitality projects are a fusion of luxury, experience, and storytelling. From boutique hotels to upscale resorts, we design immersive spaces that leave a lasting impression. Every element is thoughtfully curated — from mood lighting to custom furniture — to enhance guest comfort and brand identity.",
    image: "/images/1D9658AA-203F-419C-9D85-FAEC42314E4C.jpeg",
    secondaryImage: "/images/33CF4C14-159D-4EBC-A0AD-7BAE5CF45105.jpeg",
    accentImage: "/images/4448B8B5-9C2A-40BA-971C-57ED36054B6E.jpeg",
    features: [
      "Hotel & Resort Design",
      "Restaurant Interiors",
      "Plywood & Premium Materials",
      "Turnkey Solutions",
    ],
    link: "/services/plywood",
    align: "left" as const,
  },
];

/* ─── Animated Checkmark SVG ─────────────────────────────────────────────── */
function AnimatedCheckmark({
  inView,
  delay,
}: {
  inView: boolean;
  delay: number;
}) {
  return (
    <motion.svg
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      className="flex-shrink-0 mt-0.5"
      aria-hidden="true"
    >
      <motion.path
        d="M2 7.2L5.5 11L12 3"
        stroke="#C9A961"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={
          inView ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }
        }
        transition={{ duration: 0.55, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
      />
    </motion.svg>
  );
}

/* ─── Category Pill ───────────────────────────────────────────────────────── */
function CategoryPill({ label, inView }: { label: string; inView: boolean }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, delay: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="absolute top-4 left-4 z-30 flex items-center gap-1.5 px-3 py-1.5 border border-brand-gold/40 backdrop-blur-sm bg-brand-black/60"
    >
      <div className="w-1 h-1 bg-brand-gold/70 rotate-45 flex-shrink-0" />
      <span className="text-brand-gold/80 text-[9px] font-light tracking-[0.35em] uppercase">
        {label}
      </span>
    </motion.div>
  );
}

/* ─── Explore Service Link ────────────────────────────────────────────────── */
function ExploreServiceLink({ href }: { href: string }) {
  const [hovered, setHovered] = useState(false);

  return (
    <Link
      href={href}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="inline-flex items-center gap-3 group"
    >
      <span className="relative text-white/60 text-xs md:text-sm font-light tracking-[0.2em] uppercase transition-colors duration-500 group-hover:text-brand-goldLight">
        Explore Service
        {/* underline that grows from left on hover */}
        <span
          className="absolute left-0 -bottom-0.5 h-[1px] bg-brand-gold/60 block transition-all duration-500 ease-out"
          style={{ width: hovered ? "100%" : "0%" }}
        />
      </span>
      <motion.span
        animate={{ x: hovered ? 4 : 0 }}
        transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="flex items-center text-brand-gold/60 group-hover:text-brand-gold transition-colors duration-500"
      >
        <svg
          width="14"
          height="14"
          viewBox="0 0 14 14"
          fill="none"
          aria-hidden="true"
        >
          <path
            d="M2.5 7h9M8 3.5L11.5 7 8 10.5"
            stroke="currentColor"
            strokeWidth="1.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </motion.span>
    </Link>
  );
}

/* ─── Step Indicator ──────────────────────────────────────────────────────── */
function StepIndicator({ activeIndex }: { activeIndex: number }) {
  const numRef = useRef<HTMLSpanElement>(null);

  /* GSAP number ticker — counts from 0 up to activeIndex + 1 on each change */
  useEffect(() => {
    if (!numRef.current) return;
    const target = activeIndex + 1;
    const obj = { val: 0 };
    gsap.to(obj, {
      val: target,
      duration: 1,
      delay: 0.3,
      ease: "power2.out",
      onUpdate: () => {
        if (numRef.current) {
          numRef.current.textContent = String(Math.round(obj.val)).padStart(
            2,
            "0",
          );
        }
      },
    });
  }, [activeIndex]);

  return (
    <div className="hidden lg:flex fixed left-6 xl:left-10 top-1/2 -translate-y-1/2 z-40 flex-col items-center gap-3 pointer-events-none">
      {services.map((_, i) => (
        <div key={i} className="flex flex-col items-center gap-1">
          <motion.div
            animate={{
              height: i === activeIndex ? 32 : 12,
              backgroundColor:
                i === activeIndex
                  ? "rgba(201,169,97,0.8)"
                  : i < activeIndex
                    ? "rgba(201,169,97,0.3)"
                    : "rgba(255,255,255,0.1)",
            }}
            transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="w-[1px]"
          />
          <motion.div
            animate={{
              scale: i === activeIndex ? 1 : 0.6,
              backgroundColor:
                i === activeIndex
                  ? "rgba(201,169,97,0.9)"
                  : i < activeIndex
                    ? "rgba(201,169,97,0.4)"
                    : "rgba(255,255,255,0.15)",
              boxShadow:
                i === activeIndex ? "0 0 8px rgba(201,169,97,0.5)" : "none",
            }}
            transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="w-1.5 h-1.5 rounded-full"
          />
        </div>
      ))}

      <div className="mt-2 flex flex-col items-center gap-0.5">
        <span
          ref={numRef}
          className="text-brand-gold/60 text-[9px] font-light tracking-[0.2em]"
        >
          {String(activeIndex + 1).padStart(2, "0")}
        </span>
        <div className="w-[1px] h-3 bg-brand-gold/20" />
        <span className="text-white/20 text-[9px] font-light tracking-[0.2em]">
          {String(services.length).padStart(2, "0")}
        </span>
      </div>
    </div>
  );
}

/* ─── Service Card ────────────────────────────────────────────────────────── */
function ServiceCard({
  service,
  index,
  onActiveChange,
}: {
  service: (typeof services)[0];
  index: number;
  onActiveChange: (index: number) => void;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(cardRef, { once: true, margin: "-80px" });
  const [imageHovered, setImageHovered] = useState(false);
  const imageRevealRef = useRef<HTMLDivElement>(null);
  const spotlightRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], [40, -40]);
  const secondaryY = useTransform(scrollYProgress, [0, 1], [60, -60]);

  const isLeft = service.align === "left";

  /* GSAP clip-path image reveal */
  useEffect(() => {
    if (!isInView || !imageRevealRef.current) return;
    gsap.registerPlugin(ScrollTrigger);
    gsap.fromTo(
      imageRevealRef.current,
      { clipPath: "inset(100% 0% 0% 0%)" },
      {
        clipPath: "inset(0% 0% 0% 0%)",
        duration: 1.4,
        ease: "power4.out",
        delay: 0.2,
      },
    );
  }, [isInView]);

  /* IntersectionObserver drives the step indicator */
  useEffect(() => {
    const el = cardRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          onActiveChange(index);
        }
      },
      { threshold: 0.4 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [index, onActiveChange]);

  return (
    <div ref={cardRef} className="relative py-20 md:py-32 lg:py-40">
      {/* Background number */}
      <motion.span
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 0.02 } : {}}
        transition={{ duration: 1.5, delay: 0.3 }}
        className={`absolute top-1/2 -translate-y-1/2 font-serif text-[20rem] md:text-[30rem] lg:text-[40rem] font-bold text-white leading-none pointer-events-none select-none ${
          isLeft ? "right-0 md:right-10" : "left-0 md:left-10"
        }`}
      >
        {String(index + 1).padStart(2, "0")}
      </motion.span>

      <div className="max-w-8xl mx-auto px-5 md:px-8 lg:px-12 relative z-10">
        <div
          className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 xl:gap-16 items-center ${
            isLeft ? "" : "direction-rtl"
          }`}
        >
          {/* ── Image Column ─────────────────────────────────────────────── */}
          <div
            className={`lg:col-span-7 relative ${
              isLeft ? "lg:order-1" : "lg:order-2"
            }`}
          >
            <div className="relative">
              {/* Main Image */}
              <motion.div
                initial={{ opacity: 0, y: 40, scale: 0.98 }}
                animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
                transition={{
                  duration: 1.2,
                  delay: 0.2,
                  ease: [0.25, 0.46, 0.45, 0.94],
                }}
                className="relative overflow-hidden group"
                onMouseEnter={() => setImageHovered(true)}
                onMouseLeave={() => {
                  setImageHovered(false);
                  if (spotlightRef.current) {
                    gsap.to(spotlightRef.current, {
                      opacity: 0,
                      duration: 0.4,
                      ease: "power2.out",
                    });
                  }
                }}
                onMouseMove={(e) => {
                  if (!spotlightRef.current) return;
                  const rect = e.currentTarget.getBoundingClientRect();
                  const x = e.clientX - rect.left;
                  const y = e.clientY - rect.top;
                  const xPct = (x / rect.width) * 100;
                  const yPct = (y / rect.height) * 100;
                  gsap.to(spotlightRef.current, {
                    opacity: 0.15,
                    background: `radial-gradient(circle 180px at ${xPct}% ${yPct}%, rgba(255,255,255,0.18) 0%, rgba(201,169,97,0.08) 50%, transparent 100%)`,
                    duration: 0.3,
                    ease: "power2.out",
                  });
                }}
              >
                {/* Floating category label pill */}
                <CategoryPill label={service.category} inView={isInView} />

                <motion.div style={{ y: imageY }}>
                  <div
                    ref={imageRevealRef}
                    className="aspect-[4/3] lg:aspect-[16/10] overflow-hidden"
                  >
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-black/40 via-transparent to-transparent" />
                  </div>
                </motion.div>

                {/* GSAP spotlight shine overlay */}
                <div
                  ref={spotlightRef}
                  className="absolute inset-0 pointer-events-none z-10 opacity-0"
                />

                {/* Base hover tint */}
                <div className="absolute inset-0 bg-brand-gold/0 group-hover:bg-brand-gold/5 transition-colors duration-700" />

                {/* Gold vignette overlay — radial, edges only */}
                <div
                  className="absolute inset-0 pointer-events-none transition-opacity duration-700"
                  style={{
                    opacity: imageHovered ? 1 : 0,
                    background:
                      "radial-gradient(ellipse at center, transparent 35%, rgba(201,169,97,0.07) 70%, rgba(201,169,97,0.14) 100%)",
                  }}
                />
              </motion.div>

              {/* Secondary floating image */}
              <motion.div
                initial={{ opacity: 0, x: isLeft ? 40 : -40 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{
                  duration: 1,
                  delay: 0.6,
                  ease: [0.25, 0.46, 0.45, 0.94],
                }}
                className={`absolute -bottom-8 md:-bottom-12 ${
                  isLeft
                    ? "right-0 md:-right-6 lg:-right-8"
                    : "left-0 md:-left-6 lg:-left-8"
                } w-[45%] md:w-[40%] hidden md:block z-20`}
              >
                <motion.div style={{ y: secondaryY }}>
                  <div className="relative overflow-hidden border-4 border-brand-black shadow-premium-lg group">
                    <div className="aspect-[3/4] overflow-hidden">
                      <img
                        src={service.secondaryImage}
                        alt={`${service.title} detail`}
                        className="w-full h-full object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-110"
                      />
                    </div>
                    {/* Gold corner accents */}
                    <div className="absolute top-3 left-3 w-6 h-6 border-t border-l border-brand-gold/40" />
                    <div className="absolute bottom-3 right-3 w-6 h-6 border-b border-r border-brand-gold/40" />
                  </div>
                </motion.div>
              </motion.div>

              {/* Accent image — small */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.9 }}
                className={`absolute -top-6 ${
                  isLeft ? "left-4 md:left-8" : "right-4 md:right-8"
                } w-20 h-20 md:w-28 md:h-28 hidden lg:block z-20`}
              >
                <div className="relative overflow-hidden border-2 border-brand-black shadow-lg">
                  <img
                    src={service.accentImage}
                    alt=""
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-brand-gold/10" />
                </div>
              </motion.div>

              {/* Decorative vertical line */}
              <motion.div
                initial={{ height: 0 }}
                animate={isInView ? { height: "5rem" } : {}}
                transition={{ duration: 1, delay: 0.5 }}
                className={`absolute top-1/2 -translate-y-1/2 w-[1px] bg-brand-gold/20 hidden lg:block ${
                  isLeft ? "-left-8" : "-right-8"
                }`}
              />
            </div>
          </div>

          {/* ── Content Column ───────────────────────────────────────────── */}
          <div
            className={`lg:col-span-5 ${isLeft ? "lg:order-2" : "lg:order-1"}`}
            style={{ direction: "ltr" }}
          >
            <div className={`${isLeft ? "lg:pl-4" : "lg:pr-4"}`}>
              {/* Subtitle */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="mb-4 md:mb-6"
              >
                <div className="flex items-center gap-4">
                  <div className="w-8 h-[1px] bg-brand-gold/50" />
                  <span className="text-brand-gold/70 text-[10px] md:text-xs font-light tracking-[0.4em] uppercase">
                    {service.subtitle}
                  </span>
                </div>
              </motion.div>

              {/* Title */}
              <motion.h3
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 1,
                  delay: 0.4,
                  ease: [0.25, 0.46, 0.45, 0.94],
                }}
                className="font-serif text-4xl md:text-5xl lg:text-6xl font-light text-white leading-[1.1] tracking-tight mb-4 md:mb-6"
              >
                {service.title}
              </motion.h3>

              {/* Tagline */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.55 }}
                className="font-serif text-lg md:text-xl text-brand-goldLight/60 italic mb-6 md:mb-8"
              >
                {service.tagline}
              </motion.p>

              {/* Divider */}
              <motion.div
                initial={{ width: 0 }}
                animate={isInView ? { width: "3rem" } : {}}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="h-[1px] bg-brand-gold/30 mb-6 md:mb-8"
              />

              {/* Description */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.7 }}
                className="text-gray-500 text-sm md:text-base font-light leading-[1.9] tracking-wide mb-8 md:mb-10"
              >
                {service.description}
              </motion.p>

              {/* Features — animated gold checkmarks */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.85 }}
                className="mb-8 md:mb-10"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {service.features.map((feature, i) => (
                    <motion.div
                      key={feature}
                      initial={{ opacity: 0, x: -10 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.5, delay: 0.9 + i * 0.1 }}
                      className="flex items-start gap-2.5 group/feature"
                    >
                      <AnimatedCheckmark
                        inView={isInView}
                        delay={1.0 + i * 0.12}
                      />
                      <span className="text-white/40 text-xs md:text-sm font-light tracking-wider transition-colors duration-300 group-hover/feature:text-white/70">
                        {feature}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* "Explore Service" CTA — underline grows from left, arrow slides right */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 1.05 }}
                className="mb-6 md:mb-8"
              >
                <ExploreServiceLink href={service.link} />
              </motion.div>

              {/* Original "Explore More" animated-line CTA */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 1.1 }}
              >
                <Link
                  href={service.link}
                  className="group inline-flex items-center gap-4"
                >
                  <span className="text-brand-gold text-xs md:text-sm font-light uppercase tracking-[0.25em] transition-colors duration-500 group-hover:text-white">
                    Explore More
                  </span>
                  <div className="relative w-10 h-[1px] bg-brand-gold/40 transition-all duration-500 group-hover:w-16 group-hover:bg-white overflow-hidden">
                    <motion.div
                      className="absolute right-0 top-1/2 -translate-y-1/2"
                      animate={{ x: [0, 4, 0] }}
                      transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    >
                      <svg
                        className="w-3 h-3 text-brand-gold transition-colors duration-500 group-hover:text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.5}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </motion.div>
                  </div>
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* Section bottom separator */}
      {index < services.length - 1 && (
        <div className="max-w-4xl mx-auto mt-20 md:mt-28">
          <div className="h-[1px] bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />
        </div>
      )}
    </div>
  );
}

/* ─── Services Section ────────────────────────────────────────────────────── */
export default function Services() {
  const headerRef = useRef<HTMLDivElement>(null);
  const headerInView = useInView(headerRef, { once: true, margin: "-80px" });
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionTitleRef = useRef<HTMLHeadingElement>(null);

  const handleActiveChange = useCallback((index: number) => {
    setActiveIndex(index);
  }, []);

  /* GSAP horizontal scroll entrance on section heading */
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    if (!sectionTitleRef.current) return;
    gsap.fromTo(
      sectionTitleRef.current,
      { x: -60, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionTitleRef.current,
          start: "top 85%",
          once: true,
        },
      },
    );
  }, []);

  return (
    <section
      id="services"
      className="relative bg-gradient-to-b from-brand-dark via-brand-black to-brand-black overflow-hidden"
    >
      {/* Scrolling step indicator — fixed to viewport left edge */}
      <StepIndicator activeIndex={activeIndex} />

      {/* ── Section Header ─────────────────────────────────────────────── */}
      <div ref={headerRef} className="pt-24 md:pt-32 lg:pt-40 pb-8 md:pb-16">
        <div className="max-w-8xl mx-auto px-5 md:px-8 lg:px-12">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8">
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={headerInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8 }}
                className="flex items-center gap-4 mb-5"
              >
                <div className="w-10 h-[1px] bg-brand-gold/40" />
                <span className="text-brand-gold/60 text-[10px] md:text-xs font-light tracking-[0.5em] uppercase">
                  What We Do
                </span>
              </motion.div>

              <motion.h2
                ref={sectionTitleRef}
                initial={{ opacity: 0, y: 40 }}
                animate={headerInView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 1.2,
                  delay: 0.2,
                  ease: [0.25, 0.46, 0.45, 0.94],
                }}
                className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light text-white leading-[1.05] tracking-tight"
              >
                Our Premium
                <br />
                <span className="text-brand-gold/80">Services</span>
              </motion.h2>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={headerInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="max-w-md"
            >
              <p className="text-gray-500 text-sm md:text-base font-light leading-[1.8] tracking-wide">
                Comprehensive architectural solutions delivered with precision,
                passion, and an unwavering commitment to excellence. Each
                project is a canvas for our artistry.
              </p>
            </motion.div>
          </div>

          {/* Divider */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={headerInView ? { scaleX: 1 } : {}}
            transition={{
              duration: 1.5,
              delay: 0.5,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
            className="h-[1px] bg-gradient-to-r from-brand-gold/20 via-white/[0.06] to-transparent mt-12 md:mt-16 origin-left"
          />
        </div>
      </div>

      {/* ── Service Cards ──────────────────────────────────────────────── */}
      {services.map((service, index) => (
        <ServiceCard
          key={service.id}
          service={service}
          index={index}
          onActiveChange={handleActiveChange}
        />
      ))}

      {/* ── Bottom CTA ─────────────────────────────────────────────────── */}
      <div className="py-20 md:py-28 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 1 }}
        >
          <p className="text-gray-600 text-xs md:text-sm font-light tracking-[0.3em] uppercase mb-8">
            Have a project in mind?
          </p>
          <Link
            href="/contact"
            className="inline-block px-14 py-5 border border-brand-gold/40 text-brand-gold font-light uppercase tracking-[0.3em] text-xs hover:bg-brand-gold hover:text-black transition-all duration-700"
          >
            Start Your Journey
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
