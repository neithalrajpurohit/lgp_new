"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function Philosophy() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section
      ref={sectionRef}
      id="philosophy"
      className="relative py-32 md:py-44 lg:py-56 px-5 md:px-12 bg-brand-black overflow-hidden"
    >
      {/* Subtle background texture */}
      <div className="absolute inset-0 grain-overlay pointer-events-none opacity-50" />

      {/* Decorative vertical lines */}
      <div className="absolute top-0 left-1/4 w-[1px] h-full bg-gradient-to-b from-transparent via-white/[0.03] to-transparent" />
      <div className="absolute top-0 left-1/2 w-[1px] h-full bg-gradient-to-b from-transparent via-white/[0.03] to-transparent" />
      <div className="absolute top-0 left-3/4 w-[1px] h-full bg-gradient-to-b from-transparent via-white/[0.03] to-transparent" />

      {/* Corner Decorations */}
      <div className="absolute top-12 left-8 md:left-16">
        <div className="w-12 h-[1px] bg-brand-gold/20" />
        <div className="w-[1px] h-12 bg-brand-gold/20" />
      </div>
      <div className="absolute bottom-12 right-8 md:right-16">
        <div className="w-12 h-[1px] bg-brand-gold/20 ml-auto" />
        <div className="w-[1px] h-12 bg-brand-gold/20 ml-auto" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Small label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="text-center mb-8 md:mb-12"
        >
          <span className="text-brand-gold/50 text-[10px] md:text-xs font-light tracking-[0.5em] uppercase">
            Our Philosophy
          </span>
        </motion.div>

        {/* Decorative line */}
        <motion.div
          initial={{ width: 0 }}
          animate={isInView ? { width: "5rem" } : {}}
          transition={{ duration: 1.2, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="h-[1px] bg-gradient-to-r from-transparent via-brand-gold to-transparent mx-auto mb-12 md:mb-16"
        />

        {/* Main Quote */}
        <div className="text-center overflow-hidden">
          <motion.h2
            initial={{ opacity: 0, y: 60 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{
              duration: 1.2,
              delay: 0.4,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
            className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-light text-white leading-[1.2] md:leading-[1.15] tracking-tight italic max-w-5xl mx-auto"
          >
            <span className="text-brand-gold/80">&ldquo;</span>
            Good design yearns for{" "}
            <span className="text-brand-gold not-italic">boundless style</span>{" "}
            that is underlined by{" "}
            <span className="text-brand-goldLight/90 not-italic">simplicity</span>
            <span className="text-brand-gold/80">&rdquo;</span>
          </motion.h2>
        </div>

        {/* Attribution Line */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 1, delay: 0.9 }}
          className="text-center mt-10 md:mt-14"
        >
          <div className="inline-flex items-center gap-4">
            <div className="w-8 h-[1px] bg-brand-gold/30" />
            <span className="text-brand-goldLight/40 text-[10px] md:text-xs font-light tracking-[0.4em] uppercase">
              Lakshmi Glass & Interiors
            </span>
            <div className="w-8 h-[1px] bg-brand-gold/30" />
          </div>
        </motion.div>

        {/* Supporting Description */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="text-center mt-16 md:mt-20 max-w-3xl mx-auto"
        >
          <p className="text-gray-500 text-sm md:text-base font-light leading-[1.9] tracking-wide">
            With over 25 years of unwavering dedication, we transform visions into
            living masterpieces. Every space we design is a testament to our belief
            that true luxury lies in the harmony of form, function, and feeling —
            creating environments that resonate with the soul.
          </p>
        </motion.div>

        {/* Stats Row */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 1.5, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="mt-20 md:mt-28"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
            {[
              { number: "25+", label: "Years of Excellence" },
              { number: "500+", label: "Projects Delivered" },
              { number: "50+", label: "Design Awards" },
              { number: "100%", label: "Client Satisfaction" },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.8,
                  delay: 1.7 + index * 0.1,
                  ease: [0.25, 0.46, 0.45, 0.94],
                }}
                className="text-center group"
              >
                <div className="relative">
                  <span className="block font-serif text-4xl md:text-5xl lg:text-6xl font-light text-brand-gold/80 mb-2 transition-colors duration-500 group-hover:text-brand-gold">
                    {stat.number}
                  </span>
                  <div className="w-6 h-[1px] bg-brand-gold/20 mx-auto mb-3 transition-all duration-500 group-hover:w-10 group-hover:bg-brand-gold/40" />
                  <span className="text-white/30 text-[10px] md:text-xs font-light tracking-[0.25em] uppercase transition-colors duration-500 group-hover:text-white/50">
                    {stat.label}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Bottom gradient fade to next section */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-brand-dark to-transparent pointer-events-none" />
    </section>
  );
}
