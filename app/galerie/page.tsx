import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import Gallery from "@/components/Gallery";

export const metadata: Metadata = {
  title: "Galerie",
  description: "Ein Einblick in unsere floristische Arbeit – Sträuße, Gestecke, Hochzeitsfloristik und mehr von Gärtnerei Klumpp in Flein.",
};

export default function GaleriePage() {
  return (
    <>
      <PageHeader
        title="Unsere"
        titleAccent="Arbeiten"
        description="Ein Einblick in unsere floristische Arbeit – mit Kreativität, Hingabe und dem Gespür für das Besondere."
        breadcrumb="Galerie"
      />
      <Gallery />
    </>
  );
}
