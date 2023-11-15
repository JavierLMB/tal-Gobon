"use client";
import styled from "styled-components";
import CheeseViewContainer from "@/components/organism/cheese-view-container/cheeseViewContainer";

export default function CheesePage() {
  return (
    <div>
      <StyledCheesePageContainer>
        <CheeseViewContainer />
      </StyledCheesePageContainer>
    </div>
  );
}

const StyledCheesePageContainer = styled.div``;
