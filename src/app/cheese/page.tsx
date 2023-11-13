"use client";
import PreviewCardContainer from "@/components/preview-card-container/previewCardContainer";
import SortComponent from "@/components/cheeseSortFilter/cheeseSortFilter";
import styled from "styled-components";

export default function CheesePage() {
  return (
    <div>
      <StyledCheesePageContainer>
        <SortComponent />
        <PreviewCardContainer />
      </StyledCheesePageContainer>
    </div>
  );
}

const StyledCheesePageContainer = styled.div``;
