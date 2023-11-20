"use client";
import styled from "styled-components";
import ShopViewContainer from "./components/organism/shop-view-container/shopViewContainer";
import Header from "@/components/molecule/header/header";

export default function ShopPage() {
  return (
    <StyledShopPageContainer>
      <Header />
      <ShopViewContainer />
    </StyledShopPageContainer>
  );
}

const StyledShopPageContainer = styled.div``;
