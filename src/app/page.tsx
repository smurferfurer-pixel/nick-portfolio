import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TechMarquee from "@/components/TechMarquee";
import WorkflowsSection from "@/components/WorkflowsSection";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import ContactSection from "@/components/ContactSection";
import SectionDivider from "@/components/SectionDivider";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <SectionDivider />
        <TechMarquee />
        <SectionDivider />
        <WorkflowsSection />
        <SectionDivider />
        <AboutSection />
        <SectionDivider />
        <SkillsSection />
        <SectionDivider />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
