"use client";
import styled from "styled-components";
import ShopViewContainer from "./components/organism/shop-view-container/shopViewContainer";
import Header from "@/components/header/template/header/header";
import Footer from "@/components/footer/template/footer/footer";

export default function ShopPage() {
  return (
    <StyledShopPageContainer>
      <Header />
      <ShopViewContainer />
      <Footer />
    </StyledShopPageContainer>
  );
}

const StyledShopPageContainer = styled.div``;
