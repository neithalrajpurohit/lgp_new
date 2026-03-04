import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog | UPVC, Glass & Interior Design Tips - Lakshmi Glass & Plywoods",
  description:
    "Expert articles on UPVC windows, glass solutions, plywood buying guides, and interior design trends in Coimbatore.",
  keywords: [
    "UPVC blog Coimbatore",
    "glass installation tips",
    "interior design blog Tamil Nadu",
    "plywood guide Coimbatore",
  ],
};

const blogPosts = [
  {
    id: 1,
    title: "UPVC vs Aluminium Windows: Which is Better for Coimbatore?",
    excerpt:
      "A comprehensive comparison of window materials for Tamil Nadu's climate.",
    image: "/images/4C875759-9BB1-43B3-A5BB-B835DAB1AC4E.jpeg",
    date: "Dec 15, 2024",
    category: "Buying Guide",
    slug: "upvc-vs-aluminium-windows-coimbatore",
  },
  {
    id: 2,
    title: "Best Glass Types for Homes in 2024",
    excerpt:
      "Learn about toughened, laminated, and architectural glass options.",
    image: "/images/4E1B137A-C6D7-40BD-90D0-C960FA898F7B_1_102_o.jpeg",
    date: "Dec 10, 2024",
    category: "Glass Solutions",
    slug: "best-glass-types-homes-coimbatore",
  },
  {
    id: 3,
    title: "Plywood Buying Guide: What to Look For",
    excerpt:
      "Expert tips on selecting the right plywood for your interior projects.",
    image: "/images/530E1A2A-986A-4C16-BB11-16AB77630BCD.jpeg",
    date: "Dec 5, 2024",
    category: "Plywood",
    slug: "plywood-buying-guide-coimbatore",
  },
  {
    id: 4,
    title: "Interior Design Trends in Coimbatore 2024",
    excerpt:
      "Discover the latest trends in modern interior design for Tamil Nadu homes.",
    image: "/images/535F1347-D64A-4018-8935-A95340770D1C.jpeg",
    date: "Nov 28, 2024",
    category: "Interior Design",
    slug: "interior-design-trends-coimbatore-2024",
  },
  {
    id: 5,
    title: "How to Maintain Your UPVC Windows",
    excerpt: "Simple tips to keep your UPVC windows looking new for years.",
    image: "/images/A717C94D-724A-4CAD-B255-2297ACF4281C_1_102_o.jpeg",
    date: "Nov 20, 2024",
    category: "Maintenance",
    slug: "maintain-upvc-windows-coimbatore",
  },
  {
    id: 6,
    title: "Soundproof Windows: Do They Really Work?",
    excerpt: "Understanding the science behind soundproof UPVC windows.",
    image: "/images/AA2FA054-575E-4264-B9F0-DA7B36A8715E.jpeg",
    date: "Nov 15, 2024",
    category: "UPVC",
    slug: "soundproof-windows-coimbatore",
  },
];

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-brand-black">
      <section className="py-24 px-4 bg-brand-dark">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-serif text-5xl md:text-6xl mb-6">Our Blog</h1>
          <p className="text-xl text-gray-400 mb-8">
            Expert advice on materials, design, and installation
          </p>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <div key={post.id} className="group">
                <div className="relative overflow-hidden rounded-lg mb-4">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute top-4 left-4 bg-brand-gold text-black text-xs font-bold px-3 py-1 rounded">
                    {post.category}
                  </div>
                </div>
                <div className="text-sm text-gray-500 mb-2">{post.date}</div>
                <h3 className="font-serif text-xl mb-2 group-hover:text-brand-gold transition-colors">
                  {post.title}
                </h3>
                <p className="text-gray-400 text-sm line-clamp-2">
                  {post.excerpt}
                </p>
                <a
                  href={`/blog/${post.slug}`}
                  className="block mt-4 text-brand-gold text-sm font-bold uppercase tracking-wider"
                >
                  Read More →
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
