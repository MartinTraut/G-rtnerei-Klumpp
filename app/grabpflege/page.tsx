import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import GraveCare from "@/components/GraveCare";
import CTABanner from "@/components/CTABanner";

export const metadata: Metadata = {
  title: "Grabpflege",
  description: "Professionelle Grabpflege und Dauergrabpflege auf 15 Friedhöfen im Raum Heilbronn. Über 700 betreute Gräber seit 1968.",
};

export default function GrabpflegePage() {
  return (
    <>
      <PageHeader
        title="Grabpflege"
        titleAccent="mit Verantwortung"
        description="Seit über 50 Jahren pflegen wir Grabstätten im Raum Heilbronn mit Sorgfalt und Hingabe. Vertrauen Sie auf unsere Erfahrung mit über 700 betreuten Gräbern auf 15 Friedhöfen."
        breadcrumb="Grabpflege"
      />
      <GraveCare />
      <CTABanner />
    </>
  );
}
