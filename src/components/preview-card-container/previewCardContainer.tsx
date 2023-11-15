"use client";
import PreviewCard from "../preview-card/previewCard";
import styled from "styled-components";
import { CheeseDataType } from "../cheeseViewContainer/cheeseData";

type PreviewCardContainerProps = {
  activeProducts: CheeseDataType[];
};

export default function PreviewCardContainer({
  activeProducts,
}: PreviewCardContainerProps) {
  console.log(activeProducts);

  return (
    <div>
      <StyledProductCardContainer>
        {activeProducts.map(({ id, images, name, animal, pricePerKg }) => (
          <PreviewCard
            key={id}
            image1={images.image1}
            name={name}
            animal={animal}
            pricePerKg={pricePerKg}
          />
        ))}
      </StyledProductCardContainer>
    </div>
  );
}

const StyledProductCardContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1rem;
  width: 100%;
  padding: 0rem 1rem;
`;
