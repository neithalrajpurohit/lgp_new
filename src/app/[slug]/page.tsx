import { Metadata } from "next";
import { notFound } from "next/navigation";

const caseStudies = [
  {
    slug: "luxury-villa-gandhipuram",
    title: "Luxury Villa Transformation - Gandhipuram",
    category: "Residential",
    image: "/images/case-studies/villa1.jpg",
    before: "/images/case-studies/villa1-before.jpg",
    after: "/images/case-studies/villa1-after.jpg",
    description: "Complete UPVC window installation with automated features",
    content: `
      <p>Our client wanted to upgrade their luxury villa in Gandhipuram with modern, energy-efficient windows. We installed 25+ units of premium UPVC windows with German hardware.</p>
      <h3>Challenges</h3>
      <p>The villa had irregular window sizes and required soundproofing for a peaceful living environment.</p>
      <h3>Solution</h3>
      <p>We customized each UPVC window to fit perfectly, using triple-seal technology for maximum sound insulation.</p>
      <h3>Results</h3>
      <p>Client reported 70% reduction in noise pollution and 40% energy savings on AC costs.</p>
    `,
  },
  {
    slug: "corporate-office-rs-puram",
    title: "Corporate Office - RS Puram",
    category: "Commercial",
    image: "/images/case-studies/office1.jpg",
    before: "/images/case-studies/office1-before.jpg",
    after: "/images/case-studies/office1-after.jpg",
    description: "Floor-to-ceiling glass partitions and architectural glazing",
    content: `
      <p>A 15,000 sq ft corporate office required modern glass partitions and architectural glazing for a professional look.</p>
      <h3>Challenges</h3>
      <p>Large open space needed division while maintaining an airy, modern feel.</p>
      <h3>Solution</h3>
      <p>Installed 12mm toughened glass partitions with aluminum frames and automated glass doors.</p>
      <h3>Results</h3>
      <p>Created 8 private cabins and 3 meeting rooms while maintaining an open office aesthetic.</p>
    `,
  },
];

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const caseStudy = caseStudies.find((cs) => cs.slug === params.slug);
  if (!caseStudy) return { title: "Case Study Not Found" };

  return {
    title: `${caseStudy.title} | Lakshmi Glass & Plywoods`,
    description: caseStudy.description,
  };
}

export default function CaseStudyPage({
  params,
}: {
  params: { slug: string };
}) {
  const caseStudy = caseStudies.find((cs) => cs.slug === params.slug);

  if (!caseStudy) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-brand-black">
      <section className="py-24 px-4 bg-brand-dark">
        <div className="max-w-4xl mx-auto">
          <span className="text-brand-gold text-sm font-bold uppercase tracking-wider">
            {caseStudy.category}
          </span>
          <h1 className="font-serif text-4xl md:text-5xl mt-4 mb-6">
            {caseStudy.title}
          </h1>
          <p className="text-gray-400 text-lg">{caseStudy.description}</p>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <img src={caseStudy.before} alt="Before" className="rounded-lg" />
            <img src={caseStudy.after} alt="After" className="rounded-lg" />
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-brand-dark">
        <div
          className="max-w-4xl mx-auto"
          dangerouslySetInnerHTML={{ __html: caseStudy.content }}
        />
      </section>

      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-serif text-3xl mb-6">Ready for Your Project?</h2>
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
