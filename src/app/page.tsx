import { CareersPreview, ContactBand, CoveragePreview, Hero, LegacySection, ProofStrip, ServicesPreview } from "@/components/content-blocks";
import { PageShell } from "@/components/layout";
import { ScrollIndicator } from "@/components/scroll-indicator";

export default function Home() {
  return (
    <PageShell>
      <Hero />
      <ProofStrip />
      <div className="hidden sm:block">
        <ScrollIndicator />
      </div>
      <ServicesPreview />
      <CoveragePreview />
      <LegacySection />
      <CareersPreview />
      <ContactBand />
    </PageShell>
  );
}
