"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import BeforeAfterSlider from "../interactive/BeforeAfterSlider";
import ImageLightbox from "../interactive/ImageLightbox";

const projects = [
  {
    id: 1,
    title: "Luxury Villa - Gandhipuram",
    category: "Residential",
    image: "/images/00DD2A56-22A9-40C8-BB8D-B60FBF64A53B_1_102_o.jpeg",
    before: "/images/040A3456-14EC-4B6F-BD2C-3FC46A1C332E.jpeg",
    after: "/images/00DD2A56-22A9-40C8-BB8D-B60FBF64A53B_1_102_o.jpeg",
    description:
      "Complete UPVC window installation with automated features and thermal insulation",
  },
  {
    id: 2,
    title: "Corporate Office - RS Puram",
    category: "Commercial",
    image: "/images/06056E81-A14A-4983-931D-0BC651973615.jpeg",
    before: "/images/0649B081-AB34-4DE5-958E-C0243E5F4633.jpeg",
    after: "/images/06056E81-A14A-4983-931D-0BC651973615.jpeg",
    description:
      "Floor-to-ceiling glass partitions and architectural glazing for modern workspace",
  },
  {
    id: 3,
    title: "Modern Kitchen - Saravanampatti",
    category: "Interior",
    image: "/images/0B48182F-6308-458F-88D7-0183F7A5B418.jpeg",
    before: "/images/0F123A3D-CFBB-4A8E-A6A1-5193CBC3BD01_1_102_o.jpeg",
    after: "/images/0B48182F-6308-458F-88D7-0183F7A5B418.jpeg",
    description:
      "Custom plywood cabinetry with premium hardware and contemporary design",
  },
  {
    id: 4,
    title: "Hotel Facade - Race Course",
    category: "Commercial",
    image: "/images/12128744-C109-46CF-8CD5-B470F787F6A0.jpeg",
    before: "/images/127E51BD-C43A-4F36-A8FC-517FE7FCA8E6.jpeg",
    after: "/images/12128744-C109-46CF-8CD5-B470F787F6A0.jpeg",
    description:
      "Large format glass installation with thermal coating and structural resilience",
  },
];

export default function Projects() {
  const [filter, setFilter] = useState("All");
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxImages, setLightboxImages] = useState<string[]>([]);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const categories = ["All", "Residential", "Commercial", "Interior"];

  const filteredProjects =
    filter === "All" ? projects : projects.filter((p) => p.category === filter);

  const handleImageClick = (images: string[], startIndex: number) => {
    setLightboxImages(images);
    setLightboxIndex(startIndex);
    setLightboxOpen(true);
  };

  return (
    <section className="py-24 px-4 bg-brand-black">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl mb-4">
            Featured Projects
          </h2>
          <p className="text-gray-400">
            Transforming spaces across Coimbatore & Sathyamangalam
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-6 py-3 rounded-full text-sm font-bold uppercase tracking-wider transition-all ${
                filter === cat
                  ? "bg-brand-gold text-black"
                  : "bg-brand-gray text-gray-400 hover:bg-white/10"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <div
                className="relative overflow-hidden rounded-lg cursor-pointer mb-4"
                onClick={() =>
                  handleImageClick([project.before, project.image], 0)
                }
              >
                <BeforeAfterSlider
                  before={project.before}
                  after={project.image}
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors flex items-center justify-center">
                  <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity text-lg font-bold">
                    Click to view
                  </span>
                </div>
                <div className="absolute top-4 right-4 bg-brand-gold text-black text-xs font-bold px-3 py-1 rounded">
                  {project.category}
                </div>
              </div>
              <div>
                <h3 className="font-serif text-2xl mb-2">{project.title}</h3>
                <p className="text-gray-400">{project.description}</p>
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

        <div className="text-center mt-12">
          <a
            href="/projects"
            className="inline-block border border-brand-gold text-brand-gold px-8 py-4 font-bold uppercase tracking-wider hover:bg-brand-gold hover:text-black transition-colors"
          >
            View All Projects
          </a>
        </div>
      </div>
    </section>
  );
}
