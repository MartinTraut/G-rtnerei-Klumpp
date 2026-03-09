import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import Services from "@/components/Services";
import CTABanner from "@/components/CTABanner";

export const metadata: Metadata = {
  title: "Leistungen",
  description: "Schnittblumen, Sträuße, Hochzeitsfloristik, Trauerfloristik, Topfpflanzen und Fleurop-Service bei Gärtnerei Klumpp in Flein.",
};

export default function LeistungenPage() {
  return (
    <>
      <PageHeader
        title="Unsere Leistungen"
        titleAccent="für jeden Anlass"
        description="Von der kleinen Aufmerksamkeit bis zur großen Feier – wir gestalten mit Blumen Ihre besonderen Momente. Entdecken Sie unser vielfältiges Angebot."
        breadcrumb="Leistungen"
      />
      <Services />
      <CTABanner />
    </>
  );
}
