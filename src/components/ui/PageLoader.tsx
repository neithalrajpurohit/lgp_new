"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function PageLoader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 1800);
    return () => clearTimeout(t);
  }, []);

  return (
    <>
      <style>{`
        @keyframes pulse {
          0%, 100% { transform: scale(1); opacity: 0.5; }
          50%       { transform: scale(1.3); opacity: 1; }
        }
      `}</style>

      <AnimatePresence>
        {loading && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="fixed inset-0 z-[9999] bg-brand-black flex flex-col items-center justify-center"
          >
            {/* Corner accents */}
            <div className="absolute top-8 left-8 w-10 h-10 border-t border-l border-brand-gold/20" />
            <div className="absolute top-8 right-8 w-10 h-10 border-t border-r border-brand-gold/20" />
            <div className="absolute bottom-8 left-8 w-10 h-10 border-b border-l border-brand-gold/20" />
            <div className="absolute bottom-8 right-8 w-10 h-10 border-b border-r border-brand-gold/20" />

            {/* Central monogram block */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.1 }}
              transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="flex flex-col items-center gap-4"
            >
              {/* Top micro-label */}
              <motion.span
                initial={{ opacity: 0, letterSpacing: "0.3em" }}
                animate={{ opacity: 1, letterSpacing: "0.5em" }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-brand-gold/40 text-[9px] uppercase font-light tracking-[0.5em]"
              >
                Est. 1998
              </motion.span>

              {/* LG Monogram — with pulsing ambient glow behind it */}
              <div className="relative flex items-center justify-center">
                {/* Pulsing glow orb */}
                <div
                  style={{
                    position: "absolute",
                    width: "200px",
                    height: "200px",
                    borderRadius: "50%",
                    background:
                      "radial-gradient(circle, rgba(201,169,97,0.08) 0%, transparent 70%)",
                    animation: "pulse 2s ease-in-out infinite",
                    pointerEvents: "none",
                  }}
                />

                <motion.span
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.15 }}
                  className="font-serif text-7xl md:text-9xl font-light text-brand-gold tracking-[0.2em] select-none relative z-10"
                  style={{ textShadow: "0 0 60px rgba(201,169,97,0.18)" }}
                >
                  LG
                </motion.span>
              </div>

              {/* Gold divider */}
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{
                  duration: 0.8,
                  delay: 0.35,
                  ease: [0.77, 0, 0.175, 1],
                }}
                className="w-16 h-[1px] bg-gradient-to-r from-transparent via-brand-gold to-transparent origin-center"
              />

              {/* Studio name */}
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="text-white/30 text-[10px] tracking-[0.5em] uppercase font-light"
              >
                Lakshmi Glass &amp; Interiors
              </motion.span>
            </motion.div>

            {/* Bottom progress bar */}
            <div className="absolute bottom-12 flex flex-col items-center gap-3">
              {/* Track */}
              <div className="w-[120px] h-[1px] bg-white/[0.06] relative overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{
                    duration: 1.4,
                    ease: "easeInOut",
                    delay: 0.3,
                  }}
                  className="absolute inset-y-0 left-0 bg-gradient-to-r from-transparent via-brand-gold/60 to-brand-gold/40"
                />
              </div>
              {/* Loading label */}
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="text-white/20 text-[8px] tracking-[0.4em] uppercase font-light"
              >
                Loading
              </motion.span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
