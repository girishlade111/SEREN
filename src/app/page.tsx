import { Header } from "@/components/frais/header";
import { Hero } from "@/components/frais/hero";
import { ShopFavorites } from "@/components/frais/shop-favorites";
import { ProbioticBars } from "@/components/frais/probiotic-bars";
import { MostPopular } from "@/components/frais/most-popular";
import { NaturallySimple } from "@/components/frais/naturally-simple";
import { VisualOverlay } from "@/components/frais/visual-overlay";
import { Footer } from "@/components/frais/footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-frais-cream">
      <Header />
      <main className="flex-1">
        <Hero />
        <ShopFavorites />
        <ProbioticBars />
        <MostPopular />
        <NaturallySimple />
        <VisualOverlay />
      </main>
      <Footer />
    </div>
  );
}
