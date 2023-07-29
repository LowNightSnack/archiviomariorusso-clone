import { Biography } from "../components/Biography";
import { Carousel } from "../components/Carousel";
import { Contatti } from "../components/Contatti";
import { Cosmocorpi } from "../components/Cosmocorpi";
import { Crittica } from "../components/Crittica";
import { Hero } from "../components/Hero";
import { Introduction } from "../components/Introduction";
import { Navbar } from "../components/Navbar";

export default function Home() {
  return (
    <div className="bg-black text-white">
      <Navbar />
      <Hero />
      <div className="h-56" />
      <Introduction />
      <div className="h-56" />
      <Carousel />
      <div className="uppercase text-center">Esplora l&apos;archivio</div>
      <Biography />
      <Cosmocorpi />
      <div className="h-56" />
      <Crittica />
      <div className="uppercase text-center">Leggi la critica</div>
      <Contatti />
    </div>
  );
}
