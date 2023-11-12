"use client";
import { useState, useEffect } from "react";
import { useData, Product } from "./useData";
import PreviewCard from "../preview-card/previewCard";
import styled from "styled-components";

export default function PreviewCardContainer() {
  const { storeProducts, isLoading, error } = useData();
  const [activeProducts, setActiveProducts] = useState<Product[]>([]);

  console.log(activeProducts);

  useEffect(() => {
    if (storeProducts) setActiveProducts(storeProducts);
  }, [storeProducts]);

  return (
    <div>
      <StyledProductCardContainer>
        {activeProducts.map(({ id, category, image, price, title }) => (
          <PreviewCard
            key={id}
            category={category}
            image={image}
            price={price}
            title={title}
          />
        ))}
      </StyledProductCardContainer>
    </div>
  );
}

const StyledProductCardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  width: 100%;
`;
