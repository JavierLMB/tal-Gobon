"use client";
import { useState } from "react";
import { cheesesData } from "./cheeseData";
import PreviewCard from "../preview-card/previewCard";
import styled from "styled-components";

export default function PreviewCardContainer() {
  const [activeProducts, setActiveProducts] = useState(cheesesData);

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
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
  width: 100%;
`;
