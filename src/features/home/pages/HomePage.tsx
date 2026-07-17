import { TopNavBar } from "../components/TopNavBar";
import { HeroSection } from "../components/HeroSection";
import { TrustBar } from "../components/TrustBar";
import { EducationChange } from "../components/EducationChange";
import { PlatformOverview } from "../components/PlatformOverview";
import { AISection } from "../components/AISection";
import { ExperienceSection } from "../components/ExperienceSection";
import { FeatureHighlights } from "../components/FeatureHighlights";
import { PlatformComparison } from "../components/PlatformComparison";
import { CTASection } from "../components/CTASection";
import { Footer } from "../components/Footer";

export default function HomePage() {
  return (
    <div style={{ minHeight: "100vh", overflowX: "hidden" }}>
      <TopNavBar />
      <main>
        <HeroSection />
        <TrustBar />
        <EducationChange />
        <PlatformOverview />
        <AISection />
        <ExperienceSection />
        <FeatureHighlights />
        <PlatformComparison />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
