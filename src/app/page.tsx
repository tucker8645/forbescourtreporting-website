import { CareersPreview, ContactBand, CoveragePreview, Hero, LegacySection, ProofStrip, ServicesPreview } from "@/components/content-blocks";
import { PageShell } from "@/components/layout";

export default function Home() {
  return (
    <PageShell>
      <Hero />
      <ProofStrip />
      <ServicesPreview />
      <CoveragePreview />
      <LegacySection />
      <CareersPreview />
      <ContactBand />
    </PageShell>
  );
}
