import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Projects | Lakshmi Glass & Plywoods Portfolio",
  description:
    "View our portfolio of UPVC windows, glass installations, and interior design projects across Coimbatore and Tamil Nadu.",
  keywords: [
    "UPVC projects Coimbatore",
    "glass installation portfolio",
    "interior design projects Tamil Nadu",
    "Lakshmi Glass projects",
  ],
};

const projects = [
  {
    id: 1,
    title: "Luxury Villa - Gandhipuram",
    category: "Residential",
    image: "/images/00DD2A56-22A9-40C8-BB8D-B60FBF64A53B_1_102_o.jpeg",
    before: "/images/040A3456-14EC-4B6F-BD2C-3FC46A1C332E.jpeg",
    after: "/images/00DD2A56-22A9-40C8-BB8D-B60FBF64A53B_1_102_o.jpeg",
    description: "Complete UPVC window installation with automated features",
    location: "Coimbatore",
  },
  {
    id: 2,
    title: "Corporate Office - RS Puram",
    category: "Commercial",
    image: "/images/06056E81-A14A-4983-931D-0BC651973615.jpeg",
    before: "/images/0649B081-AB34-4DE5-958E-C0243E5F4633.jpeg",
    after: "/images/06056E81-A14A-4983-931D-0BC651973615.jpeg",
    description: "Floor-to-ceiling glass partitions and architectural glazing",
    location: "Coimbatore",
  },
  {
    id: 3,
    title: "Modern Kitchen - Saravanampatti",
    category: "Interior",
    image: "/images/0B48182F-6308-458F-88D7-0183F7A5B418.jpeg",
    before: "/images/0F123A3D-CFBB-4A8E-A6A1-5193CBC3BD01_1_102_o.jpeg",
    after: "/images/0B48182F-6308-458F-88D7-0183F7A5B418.jpeg",
    description: "Custom plywood cabinetry with premium hardware",
    location: "Coimbatore",
  },
  {
    id: 4,
    title: "Hotel Facade - Race Course",
    category: "Commercial",
    image: "/images/12128744-C109-46CF-8CD5-B470F787F6A0.jpeg",
    before: "/images/127E51BD-C43A-4F36-A8FC-517FE7FCA8E6.jpeg",
    after: "/images/12128744-C109-46CF-8CD5-B470F787F6A0.jpeg",
    description: "Large format glass installation with thermal coating",
    location: "Coimbatore",
  },
  {
    id: 5,
    title: "Apartment Complex - Peelamedu",
    category: "Residential",
    image: "/images/1D9658AA-203F-419C-9D85-FAEC42314E4C.jpeg",
    before: "/images/22AEFDAA-D030-4C5B-9BB1-305F8E22383D.jpeg",
    after: "/images/1D9658AA-203F-419C-9D85-FAEC42314E4C.jpeg",
    description: "50+ units with UPVC windows and glass balustrades",
    location: "Coimbatore",
  },
  {
    id: 6,
    title: "Restaurant Interior - Avinashi Road",
    category: "Interior",
    image: "/images/33CF4C14-159D-4EBC-A0AD-7BAE5CF45105.jpeg",
    before: "/images/4448B8B5-9C2A-40BA-971C-57ED36054B6E.jpeg",
    after: "/images/33CF4C14-159D-4EBC-A0AD-7BAE5CF45105.jpeg",
    description: "Complete interior design with plywood and glass elements",
    location: "Coimbatore",
  },
];

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-brand-black">
      <section className="py-24 px-4 bg-brand-dark">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-serif text-5xl md:text-6xl mb-6">Our Projects</h1>
          <p className="text-xl text-gray-400 mb-8">
            Transforming spaces across Coimbatore & Sathyamangalam
          </p>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div key={project.id} className="group">
                <div className="relative overflow-hidden rounded-lg mb-4">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute top-4 left-4 bg-brand-gold text-black text-xs font-bold px-3 py-1 rounded">
                    {project.category}
                  </div>
                </div>
                <h3 className="font-serif text-xl mb-2">{project.title}</h3>
                <p className="text-gray-400 text-sm mb-2">
                  {project.description}
                </p>
                <p className="text-gray-500 text-xs">📍 {project.location}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-brand-dark">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-serif text-3xl mb-6">Have a Project in Mind?</h2>
          <p className="text-gray-400 mb-8">
            Let us help you bring your vision to life with our premium materials
            and expert installation.
          </p>
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
