import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import GraveCare from "@/components/GraveCare";
import Gallery from "@/components/Gallery";
import Trust from "@/components/Trust";
import About from "@/components/About";
import CTABanner from "@/components/CTABanner";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import StickyCTA from "@/components/StickyCTA";
import FloatingFlowers from "@/components/FloatingFlowers";
import PetalRain from "@/components/PetalRain";

export default function Home() {
  return (
    <>
      <FloatingFlowers />
      <PetalRain />
      <div className="relative z-10">
        <Header />
        <main>
          <Hero />
          <Services />
          <GraveCare />
          <Gallery />
          <Trust />
          <About />
          <CTABanner />
          <Contact />
        </main>
        <Footer />
      </div>
      <StickyCTA />
    </>
  );
}

{/*
=====================================
BILD ASSET LISTE
=====================================

URL | Sektion | Zweck | Quelle
----|---------|-------|--------
TODO: Original-Bilder von blumen-flein.de nicht extrahierbar (Cloudflare-Schutz)

PLACEHOLDER IMAGES (Unsplash – zum Ersetzen):
https://images.unsplash.com/photo-1487530811176-3780de880c2d?w=1920&q=80 | Hero | Hintergrundbild
https://images.unsplash.com/photo-1563241527-3004b7be0ffd?w=600&q=80 | Services | Schnittblumen
https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=600&q=80 | Services | Hochzeit
https://images.unsplash.com/photo-1490750967868-88aa4f44baee?w=600&q=80 | Services | Trauer
https://images.unsplash.com/photo-1459411552884-841db9b3cc2a?w=600&q=80 | Services | Topfpflanzen
https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&q=80 | Services | Geschenke
https://images.unsplash.com/photo-1561181286-d3fee7d55364?w=600&q=80 | Services | Fleurop
https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=800&q=80 | GraveCare | Grabpflege
https://images.unsplash.com/photo-1455659817273-f96807779a8a?w=800&q=80 | Gallery | Galerie 1
https://images.unsplash.com/photo-1487530811176-3780de880c2d?w=600&q=80 | Gallery | Galerie 2
https://images.unsplash.com/photo-1508610048659-a06b669e3321?w=600&q=80 | Gallery | Galerie 3
https://images.unsplash.com/photo-1495231916356-a86217efff12?w=600&q=80 | Gallery | Galerie 4
https://images.unsplash.com/photo-1471696035578-3d8c78d99571?w=600&q=80 | Gallery | Galerie 5
https://images.unsplash.com/photo-1561181286-d3fee7d55364?w=800&q=80 | Gallery | Galerie 6
https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800&q=80 | About | Geschäft/Team
=====================================
*/}
