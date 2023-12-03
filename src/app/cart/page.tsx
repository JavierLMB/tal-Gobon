"use client";
import styled from "styled-components";
import Header from "@/components/header/template/header/header";
import Footer from "@/components/footer/template/footer/footer";
import CartItemListContainer from "./components/molecule/cart-item-list-container/cartItemListcontainer";

export default function CartPage() {
  return (
    <div>
      <Header />
      <StyledCartViewContainer>
        <CartItemListContainer />
      </StyledCartViewContainer>
      <Footer />
    </div>
  );
}

const StyledCartViewContainer = styled.div``;
