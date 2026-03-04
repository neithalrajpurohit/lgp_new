"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";

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

export default function Footer() {
  const footerRef = useRef<HTMLElement>(null);
  const isInView = useInView(footerRef, { once: true, margin: "-60px" });

  return (
    <footer
      ref={footerRef}
      className="relative bg-brand-darker overflow-hidden"
    >
      {/* Top decorative border */}
      <div className="h-[1px] bg-gradient-to-r from-transparent via-brand-gold/20 to-transparent" />

      {/* Grain texture */}
      <div className="absolute inset-0 grain-overlay pointer-events-none opacity-20" />

      {/* Large Background Text */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 pointer-events-none select-none overflow-hidden">
        <span className="font-serif text-[12rem] md:text-[20rem] lg:text-[28rem] font-bold text-white/[0.015] leading-none whitespace-nowrap tracking-tighter">
          LAKSHMI
        </span>
      </div>

      {/* Main Footer Content */}
      <div className="relative z-10 max-w-8xl mx-auto px-5 md:px-8 lg:px-12">
        {/* Top Section - Brand + Newsletter */}
        <div className="py-16 md:py-20 lg:py-24 border-b border-white/[0.04]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            {/* Brand Column */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 1,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
              className="lg:col-span-5"
            >
              {/* Logo */}
              <Link href="/" className="inline-block group">
                <div className="flex flex-col mb-6">
                  <span className="font-serif text-2xl md:text-3xl tracking-[0.15em] uppercase text-brand-gold transition-colors duration-500 group-hover:text-brand-goldLight">
                    Lakshmi
                  </span>
                  <span className="text-[10px] md:text-[11px] font-light tracking-[0.4em] uppercase text-white/30 transition-colors duration-500 group-hover:text-white/50">
                    Glass & Interiors
                  </span>
                </div>
              </Link>

              <p className="text-gray-600 text-sm font-light leading-[1.9] tracking-wide max-w-md mb-8">
                A premier luxury interior design studio with over 25 years of
                excellence. We transform spaces into living masterpieces through
                bespoke design, premium materials, and meticulous craftsmanship.
              </p>

              {/* Awards / Credentials */}
              <div className="flex items-center gap-6 mb-8">
                {[
                  { number: "25+", label: "Years" },
                  { number: "500+", label: "Projects" },
                  { number: "100%", label: "Satisfaction" },
                ].map((stat) => (
                  <div key={stat.label} className="text-center">
                    <span className="block font-serif text-xl md:text-2xl text-brand-gold/70 font-light">
                      {stat.number}
                    </span>
                    <span className="text-white/20 text-[9px] tracking-[0.2em] uppercase font-light">
                      {stat.label}
                    </span>
                  </div>
                ))}
              </div>

              {/* Newsletter */}
              <div>
                <p className="text-white/25 text-[10px] tracking-[0.3em] uppercase font-light mb-4">
                  Subscribe to our newsletter
                </p>
                <form className="flex gap-0">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 bg-transparent border-b border-white/10 px-0 py-3 text-white text-sm font-light tracking-wide placeholder:text-white/15 focus:border-brand-gold/40 focus:outline-none transition-colors duration-500"
                  />
                  <button
                    type="submit"
                    className="px-6 border-b border-white/10 text-brand-gold/60 hover:text-brand-gold hover:border-brand-gold/40 transition-all duration-500"
                    aria-label="Subscribe"
                  >
                    <svg
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
                    </svg>
                  </button>
                </form>
              </div>
            </motion.div>

            {/* Links Columns */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-10 lg:gap-8">
              {/* Services */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.15 }}
              >
                <h4 className="text-white/40 text-[10px] tracking-[0.35em] uppercase font-light mb-6 md:mb-8">
                  Services
                </h4>
                <ul className="space-y-3">
                  {footerLinks.services.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="text-gray-600 text-xs md:text-sm font-light tracking-wide hover:text-brand-gold transition-colors duration-300 inline-block"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* Explore */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.25 }}
              >
                <h4 className="text-white/40 text-[10px] tracking-[0.35em] uppercase font-light mb-6 md:mb-8">
                  Explore
                </h4>
                <ul className="space-y-3">
                  {footerLinks.explore.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="text-gray-600 text-xs md:text-sm font-light tracking-wide hover:text-brand-gold transition-colors duration-300 inline-block"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* Service Areas */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.35 }}
              >
                <h4 className="text-white/40 text-[10px] tracking-[0.35em] uppercase font-light mb-6 md:mb-8">
                  Service Areas
                </h4>
                <ul className="space-y-3">
                  {footerLinks.serviceAreas.map((area) => (
                    <li
                      key={area}
                      className="text-gray-600 text-xs md:text-sm font-light tracking-wide"
                    >
                      {area}
                    </li>
                  ))}
                </ul>

                {/* Contact shortcut */}
                <div className="mt-8 pt-6 border-t border-white/[0.04]">
                  <a
                    href="tel:+919876543210"
                    className="block text-brand-gold/50 text-xs font-light tracking-wider hover:text-brand-gold transition-colors duration-300 mb-2"
                  >
                    +91 99408 63196
                  </a>
                  <a
                    href="mailto:info@lakshmiglass.com"
                    className="block text-gray-600 text-xs font-light tracking-wider hover:text-brand-gold transition-colors duration-300"
                  >
                    info@lakshmiglass.com
                  </a>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 1, delay: 0.5 }}
          className="py-8 md:py-10"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Copyright */}
            <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4">
              <p className="text-gray-700 text-[10px] md:text-xs font-light tracking-wider">
                &copy; {new Date().getFullYear()} Lakshmi Glass & Interiors.
              </p>
              <span className="hidden sm:block text-white/10">|</span>
              <p className="text-gray-700 text-[10px] md:text-xs font-light tracking-wider">
                All rights reserved.
              </p>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              {[
                {
                  name: "Instagram",
                  href: "#",
                  icon: (
                    <svg
                      className="w-3.5 h-3.5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                  ),
                },
                {
                  name: "Facebook",
                  href: "#",
                  icon: (
                    <svg
                      className="w-3.5 h-3.5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                    </svg>
                  ),
                },
                {
                  name: "YouTube",
                  href: "#",
                  icon: (
                    <svg
                      className="w-3.5 h-3.5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                    </svg>
                  ),
                },
                {
                  name: "Pinterest",
                  href: "#",
                  icon: (
                    <svg
                      className="w-3.5 h-3.5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 0C5.373 0 0 5.372 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 01.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z" />
                    </svg>
                  ),
                },
              ].map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  aria-label={social.name}
                  className="text-white/15 hover:text-brand-gold/70 transition-colors duration-500"
                >
                  {social.icon}
                </a>
              ))}
            </div>

            {/* Legal Links */}
            <div className="flex items-center gap-4 md:gap-6">
              {["Privacy Policy", "Terms of Service", "Sitemap"].map(
                (link, index) => (
                  <span key={link} className="flex items-center gap-4 md:gap-6">
                    <Link
                      href="#"
                      className="text-gray-700 text-[10px] md:text-xs font-light tracking-wider hover:text-brand-gold/60 transition-colors duration-300"
                    >
                      {link}
                    </Link>
                    {index < 2 && (
                      <span className="text-white/5 hidden md:inline">·</span>
                    )}
                  </span>
                ),
              )}
            </div>
          </div>

          {/* Scroll to top */}
          <div className="flex justify-center mt-8 md:mt-10">
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="group flex flex-col items-center gap-2"
              aria-label="Back to top"
            >
              <svg
                className="w-4 h-4 text-white/15 group-hover:text-brand-gold/50 transition-colors duration-500 rotate-180"
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
              <span className="text-white/10 text-[9px] tracking-[0.3em] uppercase font-light group-hover:text-brand-gold/40 transition-colors duration-500">
                Top
              </span>
            </button>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
