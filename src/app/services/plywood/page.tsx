import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Plywood & Hardware Store in Coimbatore | Premium Quality",
  description:
    "Leading plywood and hardware supplier in Coimbatore. Marine grade, BWP, BWR plywood from trusted brands.",
  keywords: [
    "plywood Coimbatore",
    "marine grade plywood",
    "hardware store Coimbatore",
    "interior plywood Tamil Nadu",
  ],
};

export default function PlywoodPage() {
  return (
    <div className="min-h-screen bg-brand-black">
      <section className="py-24 px-4 bg-brand-dark">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-serif text-5xl md:text-6xl mb-6">
            Plywood & Hardware
          </h1>
          <p className="text-xl text-gray-400 mb-8">
            Premium grade plywood and high-end hardware fittings.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="/contact"
              className="bg-brand-gold text-black px-8 py-4 font-bold uppercase tracking-wider hover:bg-white transition-colors"
            >
              Get Free Quote
            </a>
            <a
              href="/projects"
              className="border border-white/30 text-white px-8 py-4 font-bold uppercase tracking-wider hover:bg-white/10 transition-colors"
            >
              View Projects
            </a>
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-serif text-3xl mb-4">Our Plywood Range</h2>
              <ul className="space-y-4 text-gray-400">
                <li>✓ Marine Grade Plywood (BWP)</li>
                <li>✓ BWR Plywood for Interiors</li>
                <li>✓ BWP Plywood for Wet Areas</li>
                <li>✓ Fire Retardant Plywood</li>
                <li>✓ Premium Veneer Finishes</li>
              </ul>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img
                src="/images/8C297B51-7707-4AEF-8CBE-684532FA3F31.jpeg"
                alt="Marine Plywood"
                className="rounded-lg"
              />
              <img
                src="/images/9D8B4B54-4A07-4927-B368-FF4FE7F0D4C5.jpeg"
                alt="Hardware Fittings"
                className="rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-brand-dark">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-serif text-3xl mb-8 text-center">
            Hardware Brands We Stock
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {["Hettich", "Blum", "Hafele", "Godrej", "Crompton", "Anchor"].map(
              (brand) => (
                <div
                  key={brand}
                  className="bg-brand-gray p-6 rounded-lg text-center"
                >
                  <h3 className="font-bold text-white mb-2">{brand}</h3>
                </div>
              ),
            )}
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-serif text-3xl mb-6">
            Quality Plywood for Your Projects
          </h2>
          <p className="text-gray-400 mb-8">
            Authorized dealer for leading plywood brands in Tamil Nadu.
          </p>
          <a
            href="/contact"
            className="inline-block bg-brand-gold text-black px-8 py-4 font-bold uppercase tracking-wider hover:bg-white transition-colors"
          >
            Contact Us
          </a>
        </div>
      </section>
    </div>
  );
}
