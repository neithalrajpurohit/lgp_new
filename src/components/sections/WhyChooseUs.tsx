"use client";
import { motion } from "framer-motion";

const reasons = [
  {
    icon: "🏆",
    title: "25+ Years Experience",
    desc: "Decades of expertise in architectural materials and interior solutions.",
  },
  {
    icon: "🏭",
    title: "Factory Direct Pricing",
    desc: "No middlemen. Direct from our Coimbatore manufacturing facility.",
  },
  {
    icon: "👨‍🔧",
    title: "Professional Installation",
    desc: "Certified technicians with 10+ years of installation experience.",
  },
  {
    icon: "🛡️",
    title: "Premium Quality Materials",
    desc: "Only certified German & Indian brands for long-lasting durability.",
  },
  {
    icon: "📐",
    title: "Free Site Measurement",
    desc: "Our experts visit your site for accurate measurements and quotes.",
  },
  {
    icon: "🤝",
    title: "After-Sales Support",
    desc: "Dedicated support team for maintenance and warranty claims.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-24 px-4 bg-brand-black">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl mb-4">
            Why Choose Lakshmi Glass & Plywoods
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            We combine craftsmanship with technology to deliver exceptional
            results.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="flex items-start gap-4 p-6 rounded-lg bg-brand-gray border border-white/5 hover:border-brand-gold/30 transition-colors"
            >
              <span className="text-4xl">{reason.icon}</span>
              <div>
                <h3 className="font-bold text-lg mb-2">{reason.title}</h3>
                <p className="text-gray-400 text-sm">{reason.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
