import HeroPremium from "../components/sections/HeroPremium";
import Philosophy from "../components/sections/Philosophy";
import Services from "../components/sections/Services";
import Gallery from "../components/sections/Gallery";
import Contact from "../components/sections/Contact";
import Footer from "../components/layout/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-brand-black">
      <HeroPremium />
      <Philosophy />
      <Services />
      <Gallery />
      <Contact />
      <Footer />
    </main>
  );
}
