"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

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

export default function Contact() {
  const headerRef = useRef<HTMLDivElement>(null);
  const headerInView = useInView(headerRef, { once: true, margin: "-80px" });
  const formRef = useRef<HTMLDivElement>(null);
  const formInView = useInView(formRef, { once: true, margin: "-60px" });
  const detailsRef = useRef<HTMLDivElement>(null);
  const detailsInView = useInView(detailsRef, { once: true, margin: "-60px" });

  return (
    <section
      id="contact"
      className="relative py-24 md:py-32 lg:py-40 bg-brand-black overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 grain-overlay pointer-events-none opacity-30" />
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/[0.04] to-transparent" />

      {/* Decorative vertical line */}
      <div className="absolute top-0 left-1/2 w-[1px] h-full bg-gradient-to-b from-transparent via-white/[0.02] to-transparent hidden lg:block" />

      {/* Section Header */}
      <div
        ref={headerRef}
        className="max-w-8xl mx-auto px-5 md:px-8 lg:px-12 mb-16 md:mb-24"
      >
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="flex items-center justify-center gap-4 mb-5"
          >
            <div className="w-10 h-[1px] bg-brand-gold/40" />
            <span className="text-brand-gold/60 text-[10px] md:text-xs font-light tracking-[0.5em] uppercase">
              Get In Touch
            </span>
            <div className="w-10 h-[1px] bg-brand-gold/40" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{
              duration: 1.2,
              delay: 0.2,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
            className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light text-white leading-[1.05] tracking-tight mb-6"
          >
            Let&apos;s Create
            <br />
            <span className="text-brand-gold/80">Something Beautiful</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-gray-500 text-sm md:text-base font-light leading-[1.8] tracking-wide max-w-2xl mx-auto"
          >
            Ready to transform your space into something extraordinary? Share
            your vision with us, and let our design team craft a bespoke
            solution tailored just for you.
          </motion.p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-8xl mx-auto px-5 md:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 xl:gap-20">
          {/* Contact Details Column */}
          <div ref={detailsRef} className="lg:col-span-5 xl:col-span-4">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={detailsInView ? { opacity: 1, x: 0 } : {}}
              transition={{
                duration: 1,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
            >
              {/* Contact Items */}
              <div className="space-y-8 md:space-y-10 mb-12">
                {contactDetails.map((detail, index) => (
                  <motion.div
                    key={detail.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={detailsInView ? { opacity: 1, y: 0 } : {}}
                    transition={{
                      duration: 0.7,
                      delay: 0.2 + index * 0.1,
                      ease: [0.25, 0.46, 0.45, 0.94],
                    }}
                  >
                    {detail.href ? (
                      <a
                        href={detail.href}
                        target={
                          detail.href.startsWith("http") ? "_blank" : undefined
                        }
                        rel={
                          detail.href.startsWith("http")
                            ? "noopener noreferrer"
                            : undefined
                        }
                        className="group flex items-start gap-5"
                      >
                        <div className="w-11 h-11 flex-shrink-0 border border-brand-gold/20 flex items-center justify-center text-brand-gold/60 group-hover:border-brand-gold/50 group-hover:text-brand-gold group-hover:bg-brand-gold/5 transition-all duration-500">
                          {detail.icon}
                        </div>
                        <div>
                          <h4 className="text-white/90 text-sm font-light tracking-wide mb-1.5 group-hover:text-brand-gold transition-colors duration-300">
                            {detail.label}
                          </h4>
                          {detail.lines.map((line) => (
                            <p
                              key={line}
                              className="text-gray-500 text-xs md:text-sm font-light leading-relaxed tracking-wide group-hover:text-gray-400 transition-colors duration-300"
                            >
                              {line}
                            </p>
                          ))}
                        </div>
                      </a>
                    ) : (
                      <div className="flex items-start gap-5">
                        <div className="w-11 h-11 flex-shrink-0 border border-brand-gold/20 flex items-center justify-center text-brand-gold/60">
                          {detail.icon}
                        </div>
                        <div>
                          <h4 className="text-white/90 text-sm font-light tracking-wide mb-1.5">
                            {detail.label}
                          </h4>
                          {detail.lines.map((line) => (
                            <p
                              key={line}
                              className="text-gray-500 text-xs md:text-sm font-light leading-relaxed tracking-wide"
                            >
                              {line}
                            </p>
                          ))}
                        </div>
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>

              {/* Separator */}
              <motion.div
                initial={{ scaleX: 0 }}
                animate={detailsInView ? { scaleX: 1 } : {}}
                transition={{ duration: 1, delay: 0.6 }}
                className="h-[1px] bg-gradient-to-r from-brand-gold/20 to-transparent mb-10 origin-left"
              />

              {/* WhatsApp CTA */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={detailsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.7 }}
              >
                <a
                  href="https://wa.me/919940863196"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-4 px-8 py-4 border border-[#25D366]/30 hover:border-[#25D366]/60 hover:bg-[#25D366]/5 transition-all duration-500"
                >
                  <svg
                    className="w-5 h-5 text-[#25D366] group-hover:scale-110 transition-transform duration-300"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  <span className="text-[#25D366]/80 text-xs font-light uppercase tracking-[0.2em] group-hover:text-[#25D366] transition-colors duration-300">
                    Chat on WhatsApp
                  </span>
                </a>
              </motion.div>

              {/* Social Links */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={detailsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.85 }}
                className="mt-10"
              >
                <p className="text-white/20 text-[10px] tracking-[0.3em] uppercase font-light mb-4">
                  Follow Us
                </p>
                <div className="flex items-center gap-3">
                  {[
                    {
                      name: "Instagram",
                      href: "#",
                      icon: (
                        <svg
                          className="w-4 h-4"
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
                          className="w-4 h-4"
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
                          className="w-4 h-4"
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
                          className="w-4 h-4"
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
                      className="w-10 h-10 border border-white/10 flex items-center justify-center text-white/30 hover:text-brand-gold hover:border-brand-gold/30 hover:bg-brand-gold/5 transition-all duration-500"
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </div>

          {/* Form Column */}
          <div ref={formRef} className="lg:col-span-7 xl:col-span-8">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={formInView ? { opacity: 1, x: 0 } : {}}
              transition={{
                duration: 1,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
            >
              <form className="relative">
                {/* Form header */}
                <div className="mb-10 md:mb-12">
                  <h3 className="font-serif text-2xl md:text-3xl font-light text-white/90 mb-3">
                    Send Us a Message
                  </h3>
                  <p className="text-gray-600 text-xs md:text-sm font-light tracking-wide">
                    All fields marked with{" "}
                    <span className="text-brand-gold">*</span> are required
                  </p>
                </div>

                {/* Form grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-8">
                  {/* Full Name */}
                  <div className="group">
                    <label className="block text-white/30 text-[10px] md:text-xs font-light tracking-[0.2em] uppercase mb-3">
                      Full Name <span className="text-brand-gold">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Enter your name"
                      className="w-full bg-transparent border-b border-white/10 px-0 py-3 text-white text-sm font-light tracking-wide placeholder:text-white/15 focus:border-brand-gold/50 focus:outline-none transition-colors duration-500"
                    />
                  </div>

                  {/* Phone */}
                  <div className="group">
                    <label className="block text-white/30 text-[10px] md:text-xs font-light tracking-[0.2em] uppercase mb-3">
                      Phone Number <span className="text-brand-gold">*</span>
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 XXXXX XXXXX"
                      className="w-full bg-transparent border-b border-white/10 px-0 py-3 text-white text-sm font-light tracking-wide placeholder:text-white/15 focus:border-brand-gold/50 focus:outline-none transition-colors duration-500"
                    />
                  </div>

                  {/* Email */}
                  <div className="group">
                    <label className="block text-white/30 text-[10px] md:text-xs font-light tracking-[0.2em] uppercase mb-3">
                      Email Address
                    </label>
                    <input
                      type="email"
                      placeholder="your@email.com"
                      className="w-full bg-transparent border-b border-white/10 px-0 py-3 text-white text-sm font-light tracking-wide placeholder:text-white/15 focus:border-brand-gold/50 focus:outline-none transition-colors duration-500"
                    />
                  </div>

                  {/* Service */}
                  <div className="group">
                    <label className="block text-white/30 text-[10px] md:text-xs font-light tracking-[0.2em] uppercase mb-3">
                      Service Interested In{" "}
                      <span className="text-brand-gold">*</span>
                    </label>
                    <select className="w-full bg-transparent border-b border-white/10 px-0 py-3 text-white/50 text-sm font-light tracking-wide focus:border-brand-gold/50 focus:outline-none transition-colors duration-500 appearance-none cursor-pointer">
                      <option value="" className="bg-brand-black text-white/50">
                        Select a service
                      </option>
                      <option
                        value="residential"
                        className="bg-brand-black text-white"
                      >
                        Residential Interior
                      </option>
                      <option
                        value="commercial"
                        className="bg-brand-black text-white"
                      >
                        Commercial / Office Interior
                      </option>
                      <option
                        value="hospitality"
                        className="bg-brand-black text-white"
                      >
                        Hospitality Design
                      </option>
                      <option
                        value="upvc"
                        className="bg-brand-black text-white"
                      >
                        UPVC Windows & Doors
                      </option>
                      <option
                        value="glass"
                        className="bg-brand-black text-white"
                      >
                        Architectural Glass
                      </option>
                      <option
                        value="consultation"
                        className="bg-brand-black text-white"
                      >
                        Design Consultation
                      </option>
                      <option
                        value="other"
                        className="bg-brand-black text-white"
                      >
                        Other
                      </option>
                    </select>
                  </div>
                </div>

                {/* Budget Range */}
                <div className="mb-8">
                  <label className="block text-white/30 text-[10px] md:text-xs font-light tracking-[0.2em] uppercase mb-4">
                    Estimated Budget
                  </label>
                  <div className="flex flex-wrap gap-2 md:gap-3">
                    {[
                      "Under ₹10L",
                      "₹10L — ₹25L",
                      "₹25L — ₹50L",
                      "₹50L — ₹1Cr",
                      "Above ₹1Cr",
                    ].map((range) => (
                      <label key={range} className="cursor-pointer">
                        <input
                          type="radio"
                          name="budget"
                          value={range}
                          className="sr-only peer"
                        />
                        <span className="block px-4 md:px-5 py-2 md:py-2.5 border border-white/10 text-white/30 text-[10px] md:text-xs font-light tracking-wider peer-checked:border-brand-gold/40 peer-checked:text-brand-gold peer-checked:bg-brand-gold/5 hover:border-white/20 hover:text-white/50 transition-all duration-500">
                          {range}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Message */}
                <div className="mb-10 md:mb-12">
                  <label className="block text-white/30 text-[10px] md:text-xs font-light tracking-[0.2em] uppercase mb-3">
                    Your Message
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Tell us about your project, timeline, and any specific requirements..."
                    className="w-full bg-transparent border-b border-white/10 px-0 py-3 text-white text-sm font-light tracking-wide placeholder:text-white/15 focus:border-brand-gold/50 focus:outline-none transition-colors duration-500 resize-none leading-relaxed"
                  />
                </div>

                {/* Submit */}
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
                  <button
                    type="submit"
                    className="group relative px-14 py-5 bg-brand-gold/90 text-black font-light uppercase tracking-[0.3em] text-xs hover:bg-brand-gold transition-all duration-500 overflow-hidden"
                  >
                    <span className="relative z-10">Submit Inquiry</span>
                    <div className="absolute inset-0 bg-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-[cubic-bezier(0.77,0,0.175,1)]" />
                    <span className="absolute inset-0 flex items-center justify-center text-black font-light uppercase tracking-[0.3em] text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-20">
                      Submit Inquiry
                    </span>
                  </button>

                  <p className="text-gray-600 text-[10px] md:text-xs font-light tracking-wide max-w-xs">
                    We typically respond within 24 hours. Your information is
                    kept strictly confidential.
                  </p>
                </div>
              </form>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Map Section */}
      <div className="max-w-8xl mx-auto px-5 md:px-8 lg:px-12 mt-24 md:mt-32">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="relative"
        >
          {/* Map header */}
          <div className="flex items-center gap-4 mb-8">
            <div className="w-8 h-[1px] bg-brand-gold/30" />
            <span className="text-white/20 text-[10px] md:text-xs font-light tracking-[0.3em] uppercase">
              Our Location
            </span>
          </div>

          {/* Map container with luxury border */}
          <div className="relative overflow-hidden border border-white/5 hover:border-brand-gold/10 transition-colors duration-700">
            {/* Gold corner decorations */}
            <div className="absolute top-3 left-3 w-8 h-8 border-t border-l border-brand-gold/20 z-10 pointer-events-none" />
            <div className="absolute top-3 right-3 w-8 h-8 border-t border-r border-brand-gold/20 z-10 pointer-events-none" />
            <div className="absolute bottom-3 left-3 w-8 h-8 border-b border-l border-brand-gold/20 z-10 pointer-events-none" />
            <div className="absolute bottom-3 right-3 w-8 h-8 border-b border-r border-brand-gold/20 z-10 pointer-events-none" />

            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62466.5!2d76.9558!3d11.0168!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae400000000001%3A0x0!2sCoimbatore%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1234567890"
              width="100%"
              height="450"
              style={{
                border: 0,
                filter: "grayscale(1) contrast(1.1) brightness(0.5)",
              }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Lakshmi Glass & Interiors Location"
              className="w-full"
            />

            {/* Address overlay card */}
            <div className="absolute bottom-6 left-6 md:bottom-8 md:left-8 z-10 glass px-6 py-5 max-w-xs">
              <h4 className="font-serif text-lg text-white font-light mb-2">
                Lakshmi Glass & Interiors
              </h4>
              <p className="text-gray-400 text-xs font-light leading-relaxed tracking-wide">
                123, Industrial Estate, Gandhipuram
                <br />
                Coimbatore, Tamil Nadu 641012
              </p>
              <a
                href="https://maps.google.com/?q=Coimbatore+Tamil+Nadu"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 mt-3 text-brand-gold/70 text-[10px] font-light uppercase tracking-[0.2em] hover:text-brand-gold transition-colors duration-300"
              >
                Get Directions
                <svg
                  className="w-3 h-3"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
              </a>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Bottom section divider */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-brand-dark to-transparent pointer-events-none" />
    </section>
  );
}
