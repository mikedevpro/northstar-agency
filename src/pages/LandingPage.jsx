import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import LogoStrip from "../components/LogoStrip";
import Services from "../components/Services";
import CaseStudy from "../components/CaseStudy";
import Testimonials from "../components/Testimonials";
import CTASection from "../components/CTASection";
import FigmaShowcase from "../components/FigmaShowcase";
import Footer from "../components/Footer";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-[#f7f7f4] text-slate-900">
      <Navbar />
      <Hero />
      <LogoStrip />
      <Services />
      <FigmaShowcase />
      <CaseStudy />
      <Testimonials />
      <CTASection />
      <Footer />
    </div>
  );
}
