import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Lakshmi Glass & Plywoods - 25+ Years of Excellence",
  description:
    "Learn about Lakshmi Glass & Plywoods. 25+ years of experience in Coimbatore & Sathyamangalam. In-house UPVC factory and premium interior solutions.",
  keywords: [
    "about Lakshmi Glass",
    "glass company Coimbatore",
    "UPVC manufacturer Tamil Nadu",
    "interior design company Coimbatore",
  ],
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-brand-black">
      <section className="py-24 px-4 bg-brand-dark">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-serif text-5xl md:text-6xl mb-6">
            About Lakshmi Glass & Plywoods
          </h1>
          <p className="text-xl text-gray-400 mb-8">
            25+ Years of Trusted Excellence in Architectural Materials &
            Interior Solutions
          </p>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-serif text-3xl mb-4">Our Story</h2>
              <p className="text-gray-400 mb-4">
                Founded in 1998, Lakshmi Glass & Plywoods has grown from a small
                glass shop to one of Coimbatore's most trusted architectural
                materials companies.
              </p>
              <p className="text-gray-400 mb-4">
                With an in-house UPVC manufacturing facility and 25+ years of
                experience, we've served over 5,000+ satisfied customers across
                Tamil Nadu.
              </p>
              <p className="text-gray-400">
                Our commitment to quality, innovation, and customer service has
                made us the preferred choice for homeowners, architects, and
                builders.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img
                src="/images/A6ADAA65-C575-4A75-9141-EC3F330132F4_1_102_o.jpeg"
                alt="Our Team"
                className="rounded-lg"
              />
              <img
                src="/images/4E1B137A-C6D7-40BD-90D0-C960FA898F7B_1_102_o.jpeg"
                alt="Our Factory"
                className="rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-brand-dark">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-brand-gold mb-2">25+</div>
              <div className="text-gray-400">Years Experience</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-brand-gold mb-2">
                5000+
              </div>
              <div className="text-gray-400">Happy Customers</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-brand-gold mb-2">50+</div>
              <div className="text-gray-400">Projects Completed</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-brand-gold mb-2">
                100%
              </div>
              <div className="text-gray-400">Customer Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-serif text-3xl mb-6">Our Mission</h2>
          <p className="text-gray-400 mb-8">
            To provide premium architectural materials and interior solutions
            that enhance spaces and exceed expectations.
          </p>
          <a
            href="/contact"
            className="inline-block bg-brand-gold text-black px-8 py-4 font-bold uppercase tracking-wider hover:bg-white transition-colors"
          >
            Get In Touch
          </a>
        </div>
      </section>
    </div>
  );
}
