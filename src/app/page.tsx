"use client";
import Header from "@/components/header/template/header/header";
import Footer from "@/components/footer/template/footer/footer";
import Hero from "./components/atom/hero/hero";
import FeatureContainer from "./components/molecule/feature-container/featureContainer";
import Carousel from "./components/atom/carousel/carousel";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <FeatureContainer />
      <Carousel />
      <Footer />
    </main>
  );
}
