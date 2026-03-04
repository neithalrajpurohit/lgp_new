"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center justify-center bg-brand-black">
      {/* Premium Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-40"
      >
        <source
          src="/videos/BA6144DC-C240-45E5-A6AA-CAF38619C90F_1_102_o.webm"
          type="video/webm"
        />
      </video>

      {/* Sophisticated Gradient Overlay */}
      <div className="absolute inset-0 z-0 bg-gradient-to-t from-brand-black via-brand-black/60 to-brand-black/30" />

      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-gold/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-gold/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

      <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-brand-goldLight font-sans tracking-[0.3em] text-xs md:text-sm uppercase mb-6 font-light"
          >
            Est. 1998 — Coimbatore & Sathyamangalam
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="font-serif text-6xl md:text-7xl lg:text-8xl font-light leading-tight mb-8 text-white"
          >
            Curated Spaces,
            <br />
            <span className="text-brand-gold font-normal">Timeless Luxury</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="font-sans text-gray-300 text-base md:text-lg max-w-3xl mx-auto mb-12 leading-relaxed font-light tracking-wide"
          >
            Bespoke interior design and premium architectural materials for
            those who understand the art of refined living.
            <br />
            Curated by artisans, perfected through decades.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          >
            <Link
              href="/contact"
              className="group relative px-10 py-4 bg-brand-gold text-brand-black font-serif text-sm font-semibold tracking-widest uppercase overflow-hidden shadow-luxury hover:shadow-premium transition-all duration-500"
            >
              <span className="relative z-10">Schedule Consultation</span>
              <div className="absolute inset-0 bg-brand-goldLight transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500"></div>
            </Link>

            <Link
              href="/projects"
              className="group relative px-10 py-4 border border-brand-goldLight text-brand-goldLight font-serif text-sm font-semibold tracking-widest uppercase hover:bg-brand-gold hover:text-brand-black transition-all duration-500"
            >
              Explore Portfolio
            </Link>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="absolute bottom-8 left-1/2 -translate-x-1/2 text-brand-goldLight"
          >
            <div className="flex flex-col items-center gap-2">
              <p className="text-xs tracking-[0.2em] uppercase font-light">
                Scroll
              </p>
              <svg
                className="w-4 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M19 14l-7 7m0 0l-7-7m7 7V3"
                />
              </svg>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
