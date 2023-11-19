import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h1>Hi</h1>
      <Link href="/shop">Cheese</Link>
      {/* <Link href="/shop/cheddar">Cheddar</Link> */}
    </main>
  );
}
