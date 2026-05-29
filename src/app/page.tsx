import { CareersPreview, ContactBand, CoveragePreview, Hero, LegacySection, ProofStrip, ServicesPreview } from "@/components/content-blocks";
import { PageShell } from "@/components/layout";
import { ScrollIndicator } from "@/components/scroll-indicator";

export default function Home() {
  return (
    <PageShell>
      <Hero />
      <ProofStrip />
      <ScrollIndicator />
      <ServicesPreview />
      <CoveragePreview />
      <LegacySection />
      <CareersPreview />
      <ContactBand />
    </PageShell>
  );
}
