"use client";
import Link from "next/link";
import Header from "@/components/header/template/header/header";

export default function Home() {
  return (
    <main>
      <Header />
      <h1>Hi</h1>
      <Link href="/shop">Cheese</Link>
    </main>
  );
}
