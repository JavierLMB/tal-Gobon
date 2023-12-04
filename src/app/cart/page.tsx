"use client";
import styled from "styled-components";
import Header from "@/components/header/template/header/header";
import Footer from "@/components/footer/template/footer/footer";
import Cart from "./components/organism/cart/cart";

export default function CartPage() {
  return (
    <div>
      <Header />
      <Cart />
      <Footer />
    </div>
  );
}
