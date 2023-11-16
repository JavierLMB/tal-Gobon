"use client";
import styled from "styled-components";
import CheeseViewContainer from "./components/organism/cheese-view-container/cheeseViewContainer";
import Header from "@/components/atom/header/header";
export default function CheesePage() {
  return (
    <div>
      <StyledCheesePageContainer>
        <Header />
        <CheeseViewContainer />
      </StyledCheesePageContainer>
    </div>
  );
}

const StyledCheesePageContainer = styled.div``;
