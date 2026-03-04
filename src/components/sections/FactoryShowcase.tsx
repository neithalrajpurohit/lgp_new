"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import ImageLightbox from "../interactive/ImageLightbox";

const features = [
  {
    icon: "🏭",
    title: "In-House Factory",
    desc: "Complete manufacturing facility in Coimbatore",
  },
  {
    icon: "⚙️",
    title: "German Technology",
    desc: "Latest machinery for precision cutting",
  },
  {
    icon: "✅",
    title: "Quality Testing",
    desc: "Rigorous testing before installation",
  },
  {
    icon: "🚚",
    title: "Pan-India Delivery",
    desc: "Safe delivery to Sathyamangalam & beyond",
  },
];

export default function FactoryShowcase() {
  const factoryImages = [
    "/images/1D9658AA-203F-419C-9D85-FAEC42314E4C.jpeg",
    "/images/22AEFDAA-D030-4C5B-9BB1-305F8E22383D.jpeg",
    "/images/33CF4C14-159D-4EBC-A0AD-7BAE5CF45105.jpeg",
    "/images/4448B8B5-9C2A-40BA-971C-57ED36054B6E.jpeg",
  ];

  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const handleImageClick = (index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };
  return (
    <section className="py-24 px-4 bg-brand-dark">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-serif text-4xl md:text-5xl mb-6">
              Factory Direct <br />
              <span className="text-brand-gold">Quality Assurance</span>
            </h2>
            <p className="text-gray-400 mb-8 text-lg">
              Our state-of-the-art manufacturing facility ensures every product
              meets international standards. From raw material sourcing to final
              installation, we maintain complete control over quality.
            </p>

            <div className="grid grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-4">
                  <span className="text-3xl">{feature.icon}</span>
                  <div>
                    <h4 className="font-bold text-white mb-1">
                      {feature.title}
                    </h4>
                    <p className="text-sm text-gray-500">{feature.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10">
              <a
                href="#contact"
                className="inline-block bg-brand-gold text-black px-8 py-3 font-bold uppercase tracking-wider hover:bg-white transition-colors"
              >
                Request Custom Quote
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-4"
          >
            {factoryImages.map((img, idx) => (
              <div
                key={idx}
                className="cursor-pointer overflow-hidden rounded-lg group relative"
                onClick={() => handleImageClick(idx)}
              >
                <img
                  src={img}
                  alt={`Factory Image ${idx + 1}`}
                  className={`rounded-lg w-full h-48 object-cover transition-transform group-hover:scale-110 ${
                    idx % 2 === 1 ? "mt-4" : ""
                  }`}
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors flex items-center justify-center rounded-lg">
                  <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity text-xs font-bold">
                    Click to view
                  </span>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      <ImageLightbox
        images={factoryImages}
        initialIndex={lightboxIndex}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
      />
    </section>
  );
}
