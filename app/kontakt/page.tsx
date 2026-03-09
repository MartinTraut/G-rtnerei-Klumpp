import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import Contact from "@/components/Contact";

export const metadata: Metadata = {
  title: "Kontakt",
  description: "Gärtnerei Klumpp in Flein – Buchernstraße 21, 74223 Flein. Telefon: 07131 / 252449. Öffnungszeiten und Anfahrt.",
};

export default function KontaktPage() {
  return (
    <>
      <PageHeader
        title="Besuchen Sie"
        titleAccent="uns"
        description="Wir freuen uns auf Ihren Besuch oder Ihre Nachricht. Hier finden Sie alle Informationen zur Anfahrt und unsere Öffnungszeiten."
        breadcrumb="Kontakt"
      />
      <Contact />
    </>
  );
}
