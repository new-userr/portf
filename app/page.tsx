import Navbar from "@/components/navbar";
import HeroSection from "@/components/hero-section";
import PortfolioSection from "@/components/portfolio-section";
import AboutSection from "@/components/about-section";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />
      <HeroSection />
      <PortfolioSection />
      <AboutSection />
      <Footer />
    </main>
  );
}
