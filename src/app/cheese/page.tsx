"use client";
import styled from "styled-components";
import CheeseViewContainer from "@/components/cheeseViewContainer/cheeseViewContainer";

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
