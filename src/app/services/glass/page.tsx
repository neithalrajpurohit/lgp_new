import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Glass Supplier in Coimbatore | Toughened & Architectural Glass",
  description:
    "Premium glass supplier in Coimbatore. Toughened glass, laminated glass, architectural glass, and custom glass partitions.",
  keywords: [
    "glass supplier Coimbatore",
    "toughened glass Tamil Nadu",
    "architectural glass",
    "glass partitions Coimbatore",
  ],
};

export default function GlassPage() {
  return (
    <div className="min-h-screen bg-brand-black">
      <section className="py-24 px-4 bg-brand-dark">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-serif text-5xl md:text-6xl mb-6">
            Architectural Glass Solutions
          </h1>
          <p className="text-xl text-gray-400 mb-8">
            Premium glass products for residential and commercial spaces.
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
              <h2 className="font-serif text-3xl mb-4">Our Glass Products</h2>
              <ul className="space-y-4 text-gray-400">
                <li>✓ Toughened Safety Glass (6mm - 19mm)</li>
                <li>✓ Laminated Glass for Security</li>
                <li>✓ Architectural Glass for Facades</li>
                <li>✓ Glass Partitions & Screens</li>
                <li>✓ Custom Cut & Polished Glass</li>
              </ul>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img
                src="/images/76C86D17-671C-4D86-9606-2E03A6D8D983.jpeg"
                alt="Toughened Glass"
                className="rounded-lg"
              />
              <img
                src="/images/7A3A9828-DCD6-47D4-A790-EFAFDB99C3ED.jpeg"
                alt="Glass Partition"
                className="rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-brand-dark">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-serif text-3xl mb-8 text-center">
            Glass Applications
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              "Windows & Doors",
              "Office Partitions",
              "Bathroom Screens",
              "Storefronts",
              "Balcony Railings",
              "Table Tops",
            ].map((app) => (
              <div
                key={app}
                className="bg-brand-gray p-6 rounded-lg text-center"
              >
                <h3 className="font-bold text-white mb-2">{app}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-serif text-3xl mb-6">Need Glass Solutions?</h2>
          <p className="text-gray-400 mb-8">
            Free measurement and consultation available across Coimbatore.
          </p>
          <a
            href="/contact"
            className="inline-block bg-brand-gold text-black px-8 py-4 font-bold uppercase tracking-wider hover:bg-white transition-colors"
          >
            Book Free Site Visit
          </a>
        </div>
      </section>
    </div>
  );
}
