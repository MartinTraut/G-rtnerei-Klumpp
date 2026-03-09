import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import About from "@/components/About";
import HistoryTimeline from "@/components/HistoryTimeline";
import Trust from "@/components/Trust";

export const metadata: Metadata = {
  title: "Über uns",
  description: "Familientradition seit 1968 – Gärtnerei Klumpp in Flein. Gegründet von Eberhard Klumpp, geführt von Roger Klumpp.",
};

export default function UeberUnsPage() {
  return (
    <>
      <PageHeader
        title="Familientradition"
        titleAccent="seit 1968"
        description="Was als kleine Gärtnerei begann, ist heute ein vielseitiges Blumengeschäft mit umfassendem Service rund um Floristik und Grabpflege."
        breadcrumb="Über uns"
      />
      <About />
      <HistoryTimeline />
      <Trust />
    </>
  );
}
