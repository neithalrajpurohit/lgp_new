"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import ImageLightbox from "../interactive/ImageLightbox";

const blogPosts = [
  {
    id: 1,
    title: "UPVC vs Aluminium Windows: Which is Better for Coimbatore?",
    excerpt:
      "A comprehensive comparison of window materials for Tamil Nadu's climate and weather conditions.",
    image: "/images/4C875759-9BB1-43B3-A5BB-B835DAB1AC4E.jpeg",
    date: "Dec 15, 2024",
    category: "Buying Guide",
    slug: "upvc-vs-aluminium-windows-coimbatore",
  },
  {
    id: 2,
    title: "Best Glass Types for Homes in 2024",
    excerpt:
      "Learn about toughened, laminated, and architectural glass options for maximum durability.",
    image: "/images/4E1B137A-C6D7-40BD-90D0-C960FA898F7B_1_102_o.jpeg",
    date: "Dec 10, 2024",
    category: "Glass Solutions",
    slug: "best-glass-types-homes-coimbatore",
  },
  {
    id: 3,
    title: "Plywood Buying Guide: What to Look For",
    excerpt:
      "Expert tips on selecting the right plywood grade and quality for your interior projects.",
    image: "/images/530E1A2A-986A-4C16-BB11-16AB77630BCD.jpeg",
    date: "Dec 5, 2024",
    category: "Plywood",
    slug: "plywood-buying-guide-coimbatore",
  },
  {
    id: 4,
    title: "Interior Design Trends in Coimbatore 2024",
    excerpt:
      "Discover the latest trends in modern interior design for Tamil Nadu homes and businesses.",
    image: "/images/535F1347-D64A-4018-8935-A95340770D1C.jpeg",
    date: "Nov 28, 2024",
    category: "Interior Design",
    slug: "interior-design-trends-coimbatore-2024",
  },
];

export default function Blog() {
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
        <div className="flex justify-between items-end mb-16">
          <div>
            <h2 className="font-serif text-4xl md:text-5xl mb-4">
              Latest Insights
            </h2>
            <p className="text-gray-400">
              Expert advice on materials, design, and installation
            </p>
          </div>
          <Link
            href="/blog"
            className="hidden md:block text-brand-gold font-bold uppercase tracking-wider hover:text-white transition-colors"
          >
            View All Articles →
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {blogPosts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <div
                className="relative overflow-hidden rounded-lg mb-4 cursor-pointer"
                onClick={() => handleImageClick(post.image, 0)}
              >
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors flex items-center justify-center">
                  <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity text-xs font-bold">
                    Click to view
                  </span>
                </div>
                <div className="absolute top-4 left-4 bg-brand-gold text-black text-xs font-bold px-3 py-1 rounded">
                  {post.category}
                </div>
              </div>
              <div className="text-sm text-gray-500 mb-2">{post.date}</div>
              <h3 className="font-serif text-lg mb-2 group-hover:text-brand-gold transition-colors">
                {post.title}
              </h3>
              <p className="text-gray-400 text-sm line-clamp-2">
                {post.excerpt}
              </p>
              <Link
                href={`/blog/${post.slug}`}
                className="block mt-4 text-brand-gold text-sm font-bold uppercase tracking-wider"
              >
                Read More →
              </Link>
            </motion.div>
          ))}
        </div>

        <ImageLightbox
          images={lightboxImages}
          initialIndex={lightboxIndex}
          isOpen={lightboxOpen}
          onClose={() => setLightboxOpen(false)}
        />

        <div className="text-center mt-12 md:hidden">
          <Link
            href="/blog"
            className="inline-block text-brand-gold font-bold uppercase tracking-wider hover:text-white transition-colors"
          >
            View All Articles →
          </Link>
        </div>
      </div>
    </section>
  );
}
