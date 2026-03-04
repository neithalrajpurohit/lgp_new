"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import ImageLightbox from "../interactive/ImageLightbox";

const testimonials = [
  {
    name: "Rajesh Kumar",
    role: "Homeowner, Gandhipuram",
    text: "The UPVC windows transformed our home completely. Soundproof, elegant, and the installation team was professional. Highly recommend Lakshmi Glass.",
    rating: 5,
  },
  {
    name: "Priya Menon",
    role: "Interior Designer",
    text: "I've been working with Lakshmi Glass for 5 years. Their quality consistency and factory-direct pricing make them my go-to partner for clients.",
    rating: 5,
  },
  {
    name: "Arvind S.",
    role: "Hotel Owner, Coimbatore",
    text: "The glass partition work for our hotel was exceptional. Professional execution and on-time delivery. Worth every rupee.",
    rating: 5,
  },
];

export default function Testimonials() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxImages, setLightboxImages] = useState<string[]>([]);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const handleImageClick = (image: string, index: number) => {
    setLightboxImages([image]);
    setLightboxIndex(index);
    setLightboxOpen(true);
  };
  return (
    <section className="py-24 px-4 bg-brand-dark">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl mb-4">
            Client Testimonials
          </h2>
          <p className="text-gray-400">
            Trusted by homeowners and businesses across Tamil Nadu
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-brand-gray p-8 rounded-lg border border-white/10 hover:border-brand-gold/50 transition-colors"
            >
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="text-brand-gold">
                    ★
                  </span>
                ))}
              </div>
              <p className="text-gray-300 mb-6 italic">"{testimonial.text}"</p>
              <div>
                <h4 className="font-bold text-white">{testimonial.name}</h4>
                <p className="text-sm text-gray-500">{testimonial.role}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <ImageLightbox
          images={lightboxImages}
          initialIndex={lightboxIndex}
          isOpen={lightboxOpen}
          onClose={() => setLightboxOpen(false)}
        />
      </div>
    </section>
  );
}
