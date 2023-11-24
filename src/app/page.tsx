"use client";
import Link from "next/link";
import Header from "@/components/header/template/header/header";
import Footer from "@/components/footer/template/footer/footer";
import Hero from "./components/hero/hero";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Footer />
    </main>
  );
}
