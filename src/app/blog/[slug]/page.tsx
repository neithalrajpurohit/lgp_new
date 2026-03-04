import { Metadata } from "next";
import { notFound } from "next/navigation";

const blogPosts = [
  {
    slug: "upvc-vs-aluminium-windows-coimbatore",
    title: "UPVC vs Aluminium Windows: Which is Better for Coimbatore?",
    excerpt:
      "A comprehensive comparison of window materials for Tamil Nadu's climate.",
    image: "/images/4C875759-9BB1-43B3-A5BB-B835DAB1AC4E.jpeg",
    date: "Dec 15, 2024",
    category: "Buying Guide",
    content: `
      <p>When choosing windows for your home in Coimbatore, the decision between UPVC and Aluminium is crucial. Both materials have their advantages, but UPVC is increasingly becoming the preferred choice.</p>
      <h3>UPVC Advantages</h3>
      <ul>
        <li>Superior thermal insulation</li>
        <li>Soundproofing capabilities</li>
        <li>Low maintenance requirements</li>
        <li>Longer lifespan (40+ years)</li>
      </ul>
      <h3>Aluminium Advantages</h3>
      <ul>
        <li>Lighter weight</li>
        <li>More color options</li>
        <li>Lower initial cost</li>
        <li>Recyclable material</li>
      </ul>
      <h3>Our Recommendation</h3>
      <p>For Coimbatore's climate, we recommend UPVC for its superior insulation and durability.</p>
    `,
  },
  {
    slug: "best-glass-types-homes-coimbatore",
    title: "Best Glass Types for Homes in 2024",
    excerpt:
      "Learn about toughened, laminated, and architectural glass options.",
    image: "/images/4E1B137A-C6D7-40BD-90D0-C960FA898F7B_1_102_o.jpeg",
    date: "Dec 10, 2024",
    category: "Glass Solutions",
    content: `
      <p>Selecting the right glass for your home can impact safety, energy efficiency, and aesthetics.</p>
      <h3>Toughened Glass</h3>
      <p>4-5 times stronger than regular glass. Ideal for windows and doors.</p>
      <h3>Laminated Glass</h3>
      <p>Two glass layers with PVB interlayer. Provides security and sound insulation.</p>
      <h3>Architectural Glass</h3>
      <p>Large format glass for modern facades and partitions.</p>
    `,
  },
  {
    slug: "plywood-buying-guide-coimbatore",
    title: "Plywood Buying Guide: What to Look For",
    excerpt:
      "Expert tips on selecting the right plywood for your interior projects.",
    image: "/images/530E1A2A-986A-4C16-BB11-16AB77630BCD.jpeg",
    date: "Dec 5, 2024",
    category: "Plywood",
    content: `
      <p>Choosing the right plywood is essential for durable furniture and interiors.</p>
      <h3>Grade Types</h3>
      <ul>
        <li>BWP (Boiling Water Proof) - For kitchens and bathrooms</li>
        <li>BWR (Boiling Water Resistant) - For general interiors</li>
        <li>MR (Moisture Resistant) - For dry areas</li>
      </ul>
      <h3>Thickness Guide</h3>
      <p>19mm for cabinets, 12mm for wardrobes, 6mm for backs.</p>
    `,
  },
  {
    slug: "interior-design-trends-coimbatore-2024",
    title: "Interior Design Trends in Coimbatore 2024",
    excerpt:
      "Discover the latest trends in modern interior design for Tamil Nadu homes.",
    image: "/images/535F1347-D64A-4018-8935-A95340770D1C.jpeg",
    date: "Nov 28, 2024",
    category: "Interior Design",
    content: `
      <p>Interior design trends in Coimbatore are evolving with modern aesthetics.</p>
      <h3>Popular Trends</h3>
      <ul>
        <li>Minimalist designs with clean lines</li>
        <li>Open floor plans</li>
        <li>Natural materials and textures</li>
        <li>Smart home integration</li>
      </ul>
    `,
  },
  {
    slug: "maintain-upvc-windows-coimbatore",
    title: "How to Maintain Your UPVC Windows",
    excerpt: "Simple tips to keep your UPVC windows looking new for years.",
    image: "/images/A717C94D-724A-4CAD-B255-2297ACF4281C_1_102_o.jpeg",
    date: "Nov 20, 2024",
    category: "Maintenance",
    content: `
      <p>Proper maintenance ensures your UPVC windows last for decades.</p>
      <h3>Maintenance Tips</h3>
      <ul>
        <li>Clean with mild soap and water</li>
        <li>Lubricate hinges annually</li>
        <li>Check seals for wear</li>
        <li>Remove dirt from tracks regularly</li>
      </ul>
    `,
  },
  {
    slug: "soundproof-windows-coimbatore",
    title: "Soundproof Windows: Do They Really Work?",
    excerpt: "Understanding the science behind soundproof UPVC windows.",
    image: "/images/AA2FA054-575E-4264-B9F0-DA7B36A8715E.jpeg",
    date: "Nov 15, 2024",
    category: "UPVC",
    content: `
      <p>Soundproof windows can significantly reduce noise pollution in urban areas.</p>
      <h3>How They Work</h3>
      <p>Multi-chamber profiles and triple-seal technology block sound transmission.</p>
      <h3>Effectiveness</h3>
      <p>Can reduce noise by up to 40 decibels.</p>
    `,
  },
];

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const post = blogPosts.find((p) => p.slug === params.slug);
  if (!post) return { title: "Blog Post Not Found" };

  return {
    title: `${post.title} | Lakshmi Glass & Plywoods Blog`,
    description: post.excerpt,
  };
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = blogPosts.find((p) => p.slug === params.slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-brand-black">
      <section className="py-24 px-4 bg-brand-dark">
        <div className="max-w-4xl mx-auto">
          <span className="text-brand-gold text-sm font-bold uppercase tracking-wider">
            {post.category}
          </span>
          <h1 className="font-serif text-4xl md:text-5xl mt-4 mb-6">
            {post.title}
          </h1>
          <p className="text-gray-500 text-sm mb-4">{post.date}</p>
          <p className="text-gray-400 text-lg">{post.excerpt}</p>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <img
            src={post.image}
            alt={post.title}
            className="w-full rounded-lg mb-8"
          />
          <div
            className="prose prose-invert max-w-none"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </div>
      </section>

      <section className="py-16 px-4 bg-brand-dark">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-serif text-3xl mb-6">
            Need Professional Installation?
          </h2>
          <a
            href="/contact"
            className="inline-block bg-brand-gold text-black px-8 py-4 font-bold uppercase tracking-wider hover:bg-white transition-colors"
          >
            Get Free Consultation
          </a>
        </div>
      </section>
    </div>
  );
}
