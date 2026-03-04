import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "UPVC Windows Manufacturer in Coimbatore | Lakshmi Glass & Plywoods",
  description:
    "Leading UPVC windows manufacturer in Coimbatore. Factory-direct pricing, German technology, 25+ years experience. Free site measurement.",
  keywords: [
    "UPVC windows Coimbatore",
    "UPVC windows manufacturer",
    "UPVC doors Coimbatore",
    "soundproof windows Tamil Nadu",
  ],
};

export default function UPVCPage() {
  return (
    <div className="min-h-screen bg-brand-black">
      <section className="py-24 px-4 bg-brand-dark">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-serif text-5xl md:text-6xl mb-6">
            UPVC Windows & Doors
          </h1>
          <p className="text-xl text-gray-400 mb-8">
            Premium UPVC windows manufactured in-house with German technology.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="bg-brand-gold text-black px-8 py-4 font-bold uppercase tracking-wider hover:bg-white transition-colors"
            >
              Get Free Quote
            </Link>
            <Link
              href="/projects"
              className="border border-white/30 text-white px-8 py-4 font-bold uppercase tracking-wider hover:bg-white/10 transition-colors"
            >
              View Projects
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-serif text-3xl mb-4">
                Why Choose UPVC Windows?
              </h2>
              <ul className="space-y-4 text-gray-400">
                <li>✓ 100% Weather & Corrosion Resistant</li>
                <li>✓ Superior Sound Insulation</li>
                <li>✓ Energy Efficient & Thermal Insulation</li>
                <li>✓ Low Maintenance & Long Lasting</li>
                <li>✓ Modern Aesthetic Design</li>
              </ul>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img
                src="/images/861F4E00-475C-4509-8370-8A28CF83214A.jpeg"
                alt="UPVC Window"
                className="rounded-lg"
              />
              <img
                src="/images/8765AF3E-E081-4369-8391-7ADF2BC43A6A.jpeg"
                alt="UPVC Door"
                className="rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-brand-dark">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-serif text-3xl mb-8 text-center">
            Our UPVC Products
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              "Sliding Windows",
              "Casement Windows",
              "French Doors",
              "Patio Doors",
              "Fixed Windows",
              "Awning Windows",
            ].map((product) => (
              <div
                key={product}
                className="bg-brand-gray p-6 rounded-lg text-center"
              >
                <h3 className="font-bold text-white mb-2">{product}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-serif text-3xl mb-6">
            Ready to Upgrade Your Windows?
          </h2>
          <p className="text-gray-400 mb-8">
            Get a free site visit and quote from our Coimbatore team.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-brand-gold text-black px-8 py-4 font-bold uppercase tracking-wider hover:bg-white transition-colors"
          >
            Book Free Site Visit
          </Link>
        </div>
      </section>
    </div>
  );
}
