import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Interior Designing Services in Coimbatore | Full-Service Design",
  description:
    "Complete interior design services in Coimbatore. Residential, commercial, and custom interior solutions with 25+ years experience.",
  keywords: [
    "interior design Coimbatore",
    "home interior designers",
    "commercial interior Coimbatore",
    "interior design services Tamil Nadu",
  ],
};

export default function InteriorPage() {
  return (
    <div className="min-h-screen bg-brand-black">
      <section className="py-24 px-4 bg-brand-dark">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-serif text-5xl md:text-6xl mb-6">
            Interior Designing Services
          </h1>
          <p className="text-xl text-gray-400 mb-8">
            Complete interior solutions from concept to execution.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="/contact"
              className="bg-brand-gold text-black px-8 py-4 font-bold uppercase tracking-wider hover:bg-white transition-colors"
            >
              Get Free Consultation
            </a>
            <a
              href="/projects"
              className="border border-white/30 text-white px-8 py-4 font-bold uppercase tracking-wider hover:bg-white/10 transition-colors"
            >
              View Portfolio
            </a>
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-serif text-3xl mb-4">
                Our Interior Services
              </h2>
              <ul className="space-y-4 text-gray-400">
                <li>✓ Residential Interior Design</li>
                <li>✓ Commercial Office Interiors</li>
                <li>✓ Kitchen & Wardrobe Design</li>
                <li>✓ False Ceiling & Lighting</li>
                <li>✓ Complete Turnkey Solutions</li>
              </ul>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img
                src="/images/9E9C3303-EDE6-4185-954A-3346688D469E.jpeg"
                alt="Living Room"
                className="rounded-lg"
              />
              <img
                src="/images/9F7D6D97-1DC6-4A81-9058-367726573477.jpeg"
                alt="Kitchen"
                className="rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-brand-dark">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-serif text-3xl mb-8 text-center">
            Project Types We Handle
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              "Villa Interiors",
              "Apartment Design",
              "Office Spaces",
              "Retail Outlets",
              "Restaurant Interiors",
              "Hotel Projects",
            ].map((type) => (
              <div
                key={type}
                className="bg-brand-gray p-6 rounded-lg text-center"
              >
                <h3 className="font-bold text-white mb-2">{type}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-serif text-3xl mb-6">Transform Your Space</h2>
          <p className="text-gray-400 mb-8">
            Free design consultation with our expert interior designers.
          </p>
          <a
            href="/contact"
            className="inline-block bg-brand-gold text-black px-8 py-4 font-bold uppercase tracking-wider hover:bg-white transition-colors"
          >
            Book Free Consultation
          </a>
        </div>
      </section>
    </div>
  );
}
