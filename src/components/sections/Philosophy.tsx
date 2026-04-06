"use client";
import { useRef, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import gsap from "gsap";

interface StatItem {
  number: string;
  label: string;
  numericValue: number;
  suffix: string;
}

const stats: StatItem[] = [
  {
    number: "25+",
    label: "Years of Excellence",
    numericValue: 25,
    suffix: "+",
  },
  {
    number: "500+",
    label: "Projects Delivered",
    numericValue: 500,
    suffix: "+",
  },
  { number: "50+", label: "Design Awards", numericValue: 50, suffix: "+" },
  {
    number: "100%",
    label: "Client Satisfaction",
    numericValue: 100,
    suffix: "%",
  },
];

function StatCard({
  stat,
  isInView,
  delay = 0,
}: {
  stat: StatItem;
  isInView: boolean;
  delay?: number;
}) {
  const numRef = useRef<HTMLSpanElement>(null);
  const [hovered, setHovered] = useState(false);
  const hasAnimated = useRef(false);
  const tweenRef = useRef<gsap.core.Tween | null>(null);

  useEffect(() => {
    if (isInView && !hasAnimated.current && numRef.current) {
      hasAnimated.current = true;
      const obj = { val: 0 };
      tweenRef.current = gsap.to(obj, {
        val: stat.numericValue,
        duration: 2,
        delay,
        ease: "power3.out",
        onUpdate: () => {
          if (numRef.current) {
            numRef.current.textContent = Math.round(obj.val) + stat.suffix;
          }
        },
        onComplete: () => {
          if (numRef.current) {
            numRef.current.textContent = stat.number;
          }
        },
      });
    }
    return () => {
      tweenRef.current?.kill();
    };
  }, [isInView, delay, stat.numericValue, stat.suffix, stat.number]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="text-center group relative cursor-default select-none"
      style={{
        boxShadow: hovered ? "0 0 30px rgba(201,169,97,0.1)" : "none",
        transition: "box-shadow 0.5s ease",
      }}
    >
      {/* Top border grows from center on hover */}
      <div className="absolute top-0 left-0 right-0 flex justify-center overflow-hidden h-[1px] pointer-events-none">
        <div
          className="h-full bg-brand-gold/60 transition-all duration-500 ease-out"
          style={{ width: hovered ? "100%" : "0%" }}
        />
      </div>

      <div className="relative pt-4 pb-4 px-2">
        <span
          ref={numRef}
          className="block font-serif text-4xl md:text-5xl lg:text-6xl font-light text-brand-gold mb-2 tabular-nums"
          style={{
            fontVariantNumeric: "tabular-nums",
            textShadow: hovered
              ? "0 0 40px rgba(201,169,97,0.3)"
              : "0 0 0px transparent",
            transition: "text-shadow 0.5s ease",
          }}
        >
          {stat.number}
        </span>
        <div className="w-6 h-[1px] bg-brand-gold/20 mx-auto mb-3 transition-all duration-500 group-hover:w-10 group-hover:bg-brand-gold/40" />
        <span className="text-white/30 text-[10px] md:text-xs font-light tracking-[0.25em] uppercase transition-colors duration-500 group-hover:text-white/50">
          {stat.label}
        </span>
      </div>

      {/* Bottom border grows from center on hover */}
      <div className="absolute bottom-0 left-0 right-0 flex justify-center overflow-hidden h-[1px] pointer-events-none">
        <div
          className="h-full bg-brand-gold/20 transition-all duration-500 ease-out"
          style={{ width: hovered ? "100%" : "0%" }}
        />
      </div>
    </motion.div>
  );
}

function DiamondDivider({ isInView }: { isInView: boolean }) {
  return (
    <div className="relative flex items-center justify-center my-14 md:my-18">
      {/* Left line */}
      <motion.div
        initial={{ width: 0 }}
        animate={isInView ? { width: "calc(50% - 10px)" } : {}}
        transition={{ duration: 1.2, delay: 1.0 }}
        className="h-[1px] bg-gradient-to-r from-transparent to-brand-gold/30 absolute right-1/2 mr-[10px]"
      />
      {/* Diamond */}
      <motion.div
        initial={{ opacity: 0, rotate: 45, scale: 0 }}
        animate={isInView ? { opacity: 1, rotate: 45, scale: 1 } : {}}
        transition={{ duration: 0.6, delay: 1.2 }}
        className="relative z-10 w-3 h-3 border border-brand-gold/60 bg-brand-black flex-shrink-0"
        style={{ transform: "rotate(45deg)" }}
      />
      {/* Right line */}
      <motion.div
        initial={{ width: 0 }}
        animate={isInView ? { width: "calc(50% - 10px)" } : {}}
        transition={{ duration: 1.2, delay: 1.0 }}
        className="h-[1px] bg-gradient-to-l from-transparent to-brand-gold/30 absolute left-1/2 ml-[10px]"
      />
    </div>
  );
}

function QuoteCornerBrackets({ isInView }: { isInView: boolean }) {
  const bracketLen = 28;

  const corners = [
    {
      top: "top-0 left-0",
      border: "border-t border-l",
      origin: "origin-top-left",
    },
    {
      top: "top-0 right-0",
      border: "border-t border-r",
      origin: "origin-top-right",
    },
    {
      top: "bottom-0 left-0",
      border: "border-b border-l",
      origin: "origin-bottom-left",
    },
    {
      top: "bottom-0 right-0",
      border: "border-b border-r",
      origin: "origin-bottom-right",
    },
  ];

  return (
    <>
      {corners.map((c, i) => (
        <motion.div
          key={i}
          className={`absolute ${c.top} ${c.border} border-brand-gold/40 pointer-events-none`}
          initial={{ opacity: 0, scale: 0 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{
            duration: 0.6,
            delay: 0.6 + i * 0.1,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
          style={{
            width: bracketLen,
            height: bracketLen,
            transformOrigin: c.origin.replace("origin-", ""),
          }}
        />
      ))}
    </>
  );
}

export default function Philosophy() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section
      ref={sectionRef}
      id="philosophy"
      className="relative py-32 md:py-44 lg:py-56 px-5 md:px-12 bg-brand-black overflow-hidden"
    >
      {/* ── Top section separator ─────────────────────────────────────────── */}
      <div className="section-separator absolute top-0 left-0 right-0" />

      {/* ── Grain ────────────────────────────────────────────────────────── */}
      <div className="absolute inset-0 grain-overlay pointer-events-none opacity-50" />

      {/* ── Centered radial gold glow ─────────────────────────────────────── */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 50% 30%, rgba(201,169,97,0.03) 0%, transparent 65%)",
        }}
      />

      {/* ── Vertical guide lines ─────────────────────────────────────────── */}
      <div className="absolute top-0 left-1/4 w-[1px] h-full bg-gradient-to-b from-transparent via-white/[0.03] to-transparent" />
      <div className="absolute top-0 left-1/2 w-[1px] h-full bg-gradient-to-b from-transparent via-white/[0.03] to-transparent" />
      <div className="absolute top-0 left-3/4 w-[1px] h-full bg-gradient-to-b from-transparent via-white/[0.03] to-transparent" />

      {/* ── Corner accents ───────────────────────────────────────────────── */}
      <div className="absolute top-12 left-8 md:left-16">
        <div className="w-12 h-[1px] bg-brand-gold/20" />
        <div className="w-[1px] h-12 bg-brand-gold/20" />
      </div>
      <div className="absolute bottom-12 right-8 md:right-16">
        <div className="w-12 h-[1px] bg-brand-gold/20 ml-auto" />
        <div className="w-[1px] h-12 bg-brand-gold/20 ml-auto" />
      </div>

      {/* ── Large decorative background number "25" ───────────────────────── */}
      <motion.span
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 0.03 } : {}}
        transition={{ duration: 2, delay: 0.5 }}
        aria-hidden="true"
        className="absolute bottom-0 right-0 md:-right-8 font-serif font-bold text-white leading-none pointer-events-none select-none"
        style={{ fontSize: "clamp(12rem, 25vw, 22rem)", lineHeight: 0.85 }}
      >
        25
      </motion.span>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* ── Eyebrow — uses new .eyebrow CSS class ────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-8 md:mb-12"
        >
          <span className="eyebrow">Our Philosophy</span>
        </motion.div>

        {/* ── Small top rule ────────────────────────────────────────────────── */}
        <motion.div
          initial={{ width: 0 }}
          animate={isInView ? { width: "5rem" } : {}}
          transition={{ duration: 1.2, delay: 0.2 }}
          className="h-[1px] bg-gradient-to-r from-transparent via-brand-gold to-transparent mx-auto mb-12 md:mb-16"
        />

        {/* ── Quote block with corner brackets ─────────────────────────────── */}
        <div className="relative text-center overflow-hidden px-8 md:px-12 py-6">
          <QuoteCornerBrackets isInView={isInView} />

          <motion.h2
            initial={{ opacity: 0, y: 60 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1.2, delay: 0.4 }}
            className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-[5rem] font-light text-white leading-[1.2] tracking-tight italic max-w-5xl mx-auto"
            style={{ textShadow: "0 0 80px rgba(201,169,97,0.08)" }}
          >
            <span className="text-brand-gold/80">&ldquo;</span>
            Good design yearns for{" "}
            <span className="text-brand-gold not-italic">
              boundless style
            </span>{" "}
            that is underlined by{" "}
            <span className="text-brand-goldLight/90 not-italic">
              simplicity
            </span>
            <span className="text-brand-gold/80">&rdquo;</span>
          </motion.h2>
        </div>

        {/* ── Attribution ──────────────────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 1, delay: 0.9 }}
          className="text-center mt-10 md:mt-14"
        >
          <div className="inline-flex items-center gap-4">
            <div className="w-8 h-[1px] bg-brand-gold/30" />
            <span className="text-brand-goldLight/40 text-[10px] md:text-xs font-light tracking-[0.4em] uppercase">
              Lakshmi Glass &amp; Interiors
            </span>
            <div className="w-8 h-[1px] bg-brand-gold/30" />
          </div>
        </motion.div>

        {/* ── Diamond Divider ───────────────────────────────────────────────── */}
        <DiamondDivider isInView={isInView} />

        {/* ── Description — lighter text, taller line-height ───────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 1.2 }}
          className="text-center max-w-3xl mx-auto"
        >
          <p className="text-gray-400 text-sm md:text-base font-light leading-[2] tracking-wide">
            With over 25 years of unwavering dedication, we transform visions
            into living masterpieces. Every space we design is a testament to
            our belief that true luxury lies in the harmony of form, function,
            and feeling — creating environments that resonate with the soul.
          </p>
        </motion.div>

        {/* ── Stats — full gold opacity ─────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 1.5 }}
          className="mt-20 md:mt-28 relative"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
            {stats.map((stat, index) => (
              <StatCard
                key={stat.label}
                stat={stat}
                isInView={isInView}
                delay={1.7 + index * 0.15}
              />
            ))}
          </div>
        </motion.div>
      </div>

      {/* ── Bottom fade ──────────────────────────────────────────────────── */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-brand-dark to-transparent pointer-events-none" />

      {/* ── Bottom section separator ──────────────────────────────────────── */}
      <div className="section-separator absolute bottom-0 left-0 right-0" />
    </section>
  );
}
