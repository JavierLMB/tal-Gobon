"use client";
import Link from "next/link";
import Header from "@/components/header/template/header/header";
import Footer from "@/components/footer/template/footer/footer";

export default function Home() {
  return (
    <main>
      <Header />
      <h1>Hi</h1>
      <Link href="/shop">Cheese</Link>
      <Footer />
    </main>
  );
}
