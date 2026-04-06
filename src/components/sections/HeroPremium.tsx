"use client";
import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const heroSlides = [
  {
    video: "/videos/real.webm",
    fallbackImage: "/images/BA6144DC-C240-45E5-A6AA-CAF38619C90F_1_102_o.jpeg",
    subtitle: "Design Studio",
    title: ["Lakshmi", "Interiors"],
    description:
      "25 years of transforming visions into living masterpieces — where precision meets artistry.",
  },
  {
    video: "/videos/video1.webm",
    fallbackImage: "/images/00DD2A56-22A9-40C8-BB8D-B60FBF64A53B_1_102_o.jpeg",
    subtitle: "Luxury Residential",
    title: ["Curated", "Interiors"],
    description:
      "Bespoke living spaces designed with an unwavering commitment to elegance and timeless aesthetics.",
  },
  {
    video: "/videos/videos2.webm",
    fallbackImage: "/images/1768AA66-6912-454E-9AFC-7B95D7BE624A.jpeg",
    subtitle: "Commercial Spaces",
    title: ["Refined", "Workspaces"],
    description:
      "Sophisticated commercial environments that inspire productivity and embody brand excellence.",
  },
  {
    video: "/videos/video3.webm",
    fallbackImage: "/images/197FEE18-93D0-449B-8EF0-25EFE8EDDC75.jpeg",
    subtitle: "Hospitality Design",
    title: ["Immersive", "Experiences"],
    description:
      "Creating unforgettable hospitality spaces where luxury meets purposeful design.",
  },
  {
    video: "/videos/video4.webm",
    fallbackImage: "/images/9D8B4B54-4A07-4927-B368-FF4FE7F0D4C5.jpeg",
    subtitle: "Premium Materials",
    title: ["Crafted", "Excellence"],
    description:
      "Factory-direct UPVC, architectural glass, and premium plywood — quality you can see and feel.",
  },
  {
    video: "/videos/video5.webm",
    fallbackImage: "/images/33CF4C14-159D-4EBC-A0AD-7BAE5CF45105.jpeg",
    subtitle: "Turnkey Solutions",
    title: ["Complete", "Transformation"],
    description:
      "From concept to completion, every detail meticulously planned and flawlessly executed.",
  },
];

export default function HeroPremium() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
  const sectionRef = useRef<HTMLElement>(null);
  const bgWrapperRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<gsap.core.Timeline | null>(null);
  const ctaRef1 = useRef<HTMLAnchorElement>(null);
  const ctaRef2 = useRef<HTMLAnchorElement>(null);

  // ── Initial load timer ─────────────────────────────────────────────────────
  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 300);
    return () => clearTimeout(timer);
  }, []);

  // ── Auto-advance slides ────────────────────────────────────────────────────
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  // ── React scroll parallax (existing) ──────────────────────────────────────
  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const progress = Math.max(0, Math.min(1, -rect.top / rect.height));
      setScrollProgress(progress);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // ── GSAP entrance timeline (fires once isLoaded flips to true) ─────────────
  useEffect(() => {
    if (!isLoaded) return;

    // Kill any previous instance to be safe
    if (timelineRef.current) {
      timelineRef.current.kill();
    }

    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
    timelineRef.current = tl;

    tl.from(".hero-subtitle", {
      opacity: 0,
      y: 24,
      duration: 0.9,
    })
      .from(
        ".hero-rule",
        {
          scaleX: 0,
          transformOrigin: "left center",
          duration: 1,
          ease: "power2.inOut",
        },
        "-=0.5",
      )
      .from(
        ".hero-cta-btn",
        {
          opacity: 0,
          y: 30,
          duration: 0.8,
          stagger: 0.14,
        },
        "-=0.4",
      );

    return () => {
      tl.kill();
    };
  }, [isLoaded]);

  // ── GSAP ScrollTrigger parallax on background video wrapper ───────────────
  useEffect(() => {
    if (!bgWrapperRef.current || !sectionRef.current) return;

    const st = gsap.to(bgWrapperRef.current, {
      yPercent: 20,
      ease: "none",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top top",
        end: "bottom top",
        scrub: 1,
      },
    });

    return () => {
      // st is actually the tween; kill its ScrollTrigger
      if (st.scrollTrigger) {
        st.scrollTrigger.kill();
      }
      st.kill();
    };
  }, []);

  // ── Magnetic hover — CTA button 1 ─────────────────────────────────────────
  const handleMagneticMove1 = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const el = ctaRef1.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    gsap.to(el, {
      x: (e.clientX - rect.left - rect.width / 2) * 0.15,
      y: (e.clientY - rect.top - rect.height / 2) * 0.15,
      duration: 0.3,
      ease: "power2.out",
    });
  };

  const handleMagneticLeave1 = () => {
    if (!ctaRef1.current) return;
    gsap.to(ctaRef1.current, {
      x: 0,
      y: 0,
      duration: 0.8,
      ease: "elastic.out(1, 0.3)",
    });
  };

  // ── Magnetic hover — CTA button 2 ─────────────────────────────────────────
  const handleMagneticMove2 = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const el = ctaRef2.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    gsap.to(el, {
      x: (e.clientX - rect.left - rect.width / 2) * 0.15,
      y: (e.clientY - rect.top - rect.height / 2) * 0.15,
      duration: 0.3,
      ease: "power2.out",
    });
  };

  const handleMagneticLeave2 = () => {
    if (!ctaRef2.current) return;
    gsap.to(ctaRef2.current, {
      x: 0,
      y: 0,
      duration: 0.8,
      ease: "elastic.out(1, 0.3)",
    });
  };

  const handleScrollDown = () => {
    const nextSection = document.getElementById("philosophy");
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      ref={sectionRef}
      className="relative h-screen w-full overflow-hidden bg-brand-black"
      id="hero"
    >
      {/* ── Video/Image Backgrounds ──────────────────────────────────────── */}
      {/* bgWrapperRef wraps ALL slides so GSAP parallax applies globally */}
      <div
        ref={bgWrapperRef}
        className="absolute inset-0 will-change-transform"
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.8, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="absolute inset-0"
            style={{
              transform: `translateY(${scrollProgress * 80}px) scale(${1 + scrollProgress * 0.1})`,
            }}
          >
            <video
              ref={(el) => {
                videoRefs.current[currentSlide] = el;
              }}
              autoPlay
              loop
              muted
              playsInline
              poster={heroSlides[currentSlide].fallbackImage}
              className="absolute inset-0 w-full h-full object-cover"
            >
              <source src={heroSlides[currentSlide].video} type="video/webm" />
            </video>

            {/* Cinematic Overlays */}
            <div className="absolute inset-0 bg-black/50" />
            <div className="absolute inset-0 bg-gradient-to-b from-brand-black/40 via-transparent to-brand-black/80" />
            <div className="absolute inset-0 bg-gradient-to-r from-brand-black/30 via-transparent to-brand-black/30" />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Film Grain Overlay */}
      <div className="absolute inset-0 grain-overlay pointer-events-none z-[2]" />

      {/* Top Letterbox Bar */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-brand-gold/20 to-transparent z-10" />

      {/* Brand Watermark - Side */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isLoaded ? 0.08 : 0 }}
        transition={{ delay: 2, duration: 2 }}
        className="absolute right-6 md:right-10 top-1/2 -translate-y-1/2 z-[3] hidden md:block"
      >
        <span
          className="font-serif text-[10rem] lg:text-[14rem] font-bold text-white leading-none"
          style={{ writingMode: "vertical-rl", textOrientation: "mixed" }}
        >
          LG
        </span>
      </motion.div>

      {/* ── Main Content ─────────────────────────────────────────────────── */}
      <div
        className="relative z-10 h-full flex flex-col items-center justify-center px-5 md:px-12"
        style={{ opacity: 1 - scrollProgress * 1.5 }}
      >
        {/* Subtitle Badge — GSAP target: .hero-subtitle */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 20 }}
          transition={{
            delay: 0.5,
            duration: 1,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
          className="mb-6 md:mb-8 hero-subtitle"
        >
          <AnimatePresence mode="wait">
            <motion.span
              key={currentSlide}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.6 }}
              className="inline-block text-brand-goldLight/70 text-xs md:text-sm font-light tracking-[0.4em] uppercase"
            >
              {heroSlides[currentSlide].subtitle}
            </motion.span>
          </AnimatePresence>
        </motion.div>

        {/* Decorative Gold Rule — GSAP target: .hero-rule */}
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: isLoaded ? "4rem" : 0 }}
          transition={{ delay: 0.8, duration: 1.2 }}
          className="h-[1px] bg-brand-gold/50 mb-8 md:mb-10 hero-rule"
        />

        {/* Main Title */}
        <div className="text-center overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div key={currentSlide} className="overflow-hidden">
              {heroSlides[currentSlide].title.map((line, i) => (
                <motion.div
                  key={`${currentSlide}-${i}`}
                  initial={{ y: 120, opacity: 0, skewY: 3 }}
                  animate={{ y: 0, opacity: 1, skewY: 0 }}
                  exit={{ y: -80, opacity: 0 }}
                  transition={{
                    delay: 0.3 + i * 0.15,
                    duration: 1,
                    ease: [0.25, 0.46, 0.45, 0.94],
                  }}
                  className="overflow-hidden"
                >
                  <h1 className="font-serif text-6xl sm:text-7xl md:text-8xl lg:text-9xl xl:text-[10rem] font-light text-white leading-[0.9] tracking-tight">
                    {line}
                  </h1>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Brand Name */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isLoaded ? 1 : 0 }}
          transition={{ delay: 1.2, duration: 1 }}
          className="mt-6 md:mt-8 mb-4"
        >
          <span className="text-brand-gold/60 text-[10px] md:text-xs font-light tracking-[0.5em] uppercase">
            Lakshmi Glass &amp; Interiors
          </span>
        </motion.div>

        {/* Description */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 20 }}
          transition={{ delay: 1.4, duration: 1 }}
          className="max-w-xl text-center mb-10 md:mb-14"
        >
          <AnimatePresence mode="wait">
            <motion.p
              key={currentSlide}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6 }}
              className="text-gray-400 text-sm md:text-base font-light leading-relaxed tracking-wide"
            >
              {heroSlides[currentSlide].description}
            </motion.p>
          </AnimatePresence>
        </motion.div>

        {/* ── CTA Buttons — GSAP targets: .hero-cta-btn + magnetic hover ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 30 }}
          transition={{ delay: 1.8, duration: 1 }}
          className="flex flex-col sm:flex-row gap-4 sm:gap-6"
        >
          <Link
            ref={ctaRef1}
            href="/projects"
            onMouseMove={handleMagneticMove1}
            onMouseLeave={handleMagneticLeave1}
            className="hero-cta-btn group relative px-10 md:px-14 py-4 border border-brand-gold/40 text-brand-gold font-light uppercase tracking-[0.25em] text-xs hover:bg-brand-gold hover:text-black transition-all duration-700 text-center overflow-hidden"
          >
            <span className="relative z-10">View Collections</span>
            <div className="absolute inset-0 bg-brand-gold transform -translate-x-full group-hover:translate-x-0 transition-transform duration-700 ease-cinematic" />
            <span className="absolute inset-0 flex items-center justify-center text-black font-light uppercase tracking-[0.25em] text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-20">
              View Collections
            </span>
          </Link>

          <Link
            ref={ctaRef2}
            href="#contact"
            onMouseMove={handleMagneticMove2}
            onMouseLeave={handleMagneticLeave2}
            className="hero-cta-btn px-10 md:px-14 py-4 bg-brand-gold/90 text-black font-light uppercase tracking-[0.25em] text-xs hover:bg-white transition-all duration-500 text-center"
          >
            Book Consultation
          </Link>
        </motion.div>
      </div>

      {/* ── Slide Indicators ─────────────────────────────────────────────── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isLoaded ? 1 : 0 }}
        transition={{ delay: 2.2, duration: 1 }}
        className="absolute left-5 md:left-10 top-1/2 -translate-y-1/2 z-20 flex flex-col gap-4"
      >
        {heroSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className="group relative flex items-center gap-3"
            aria-label={`Go to slide ${index + 1}`}
          >
            <div
              className={`w-[2px] transition-all duration-700 ${
                index === currentSlide
                  ? "h-10 bg-brand-gold"
                  : "h-5 bg-white/20 group-hover:bg-white/40"
              }`}
            />
            <span
              className={`text-[10px] tracking-[0.2em] uppercase font-light transition-all duration-500 hidden md:block ${
                index === currentSlide
                  ? "text-brand-gold opacity-100"
                  : "text-white/30 opacity-0 group-hover:opacity-100"
              }`}
            >
              {String(index + 1).padStart(2, "0")}
            </span>
          </button>
        ))}
      </motion.div>

      {/* Year Badge */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isLoaded ? 1 : 0 }}
        transition={{ delay: 2.5, duration: 1 }}
        className="absolute right-5 md:right-10 top-1/2 -translate-y-1/2 z-20 hidden md:flex flex-col items-center gap-3"
      >
        <span
          className="text-white/20 text-[10px] tracking-[0.25em] uppercase font-light"
          style={{ writingMode: "vertical-rl" }}
        >
          Est. 1998
        </span>
        <div className="w-[1px] h-8 bg-white/10" />
        <span
          className="text-white/20 text-[10px] tracking-[0.25em] uppercase font-light"
          style={{ writingMode: "vertical-rl" }}
        >
          Coimbatore
        </span>
      </motion.div>

      {/* Scroll Down Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isLoaded ? 1 : 0 }}
        transition={{ delay: 2.8, duration: 1 }}
        className="absolute bottom-8 md:bottom-12 left-1/2 z-20 animate-float cursor-pointer"
        onClick={handleScrollDown}
      >
        <div className="flex flex-col items-center gap-3">
          <span className="text-brand-goldLight/50 text-[10px] tracking-[0.35em] uppercase font-light">
            Scroll Down
          </span>
          <div className="w-[1px] h-8 bg-gradient-to-b from-brand-gold/50 to-transparent" />
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <svg
              className="w-4 h-4 text-brand-gold/50"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1}
                d="M19 14l-7 7m0 0l-7-7"
              />
            </svg>
          </motion.div>
        </div>
      </motion.div>

      {/* Bottom Progress Bar */}
      <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-white/5 z-20">
        <motion.div
          key={currentSlide}
          initial={{ width: "0%" }}
          animate={{ width: "100%" }}
          transition={{ duration: 8, ease: "linear" }}
          className="h-full bg-gradient-to-r from-brand-gold/60 to-brand-goldLight/40"
        />
      </div>
    </section>
  );
}
