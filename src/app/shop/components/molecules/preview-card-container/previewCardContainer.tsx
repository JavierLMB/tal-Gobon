// "use client";
import styled from "styled-components";
import PreviewCard from "../../atoms/preview-card/previewCard";
import { CheeseDataType } from "../../organism/shop-view-container/useCheeseData";
import { useRouter } from "next/navigation";

type PreviewCardContainerProps = {
  activeProducts: CheeseDataType[];
};

export default function PreviewCardContainer({
  activeProducts,
}: PreviewCardContainerProps) {
  const router = useRouter();

  const handleCardClick = (name: string) => {
    const url = name
      .split(" ")
      .map((word) => word[0].toUpperCase() + word.slice(1))
      .join("");
    router.push(`/shop/${url}`);
  };

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
            onClick={() => handleCardClick(name)}
            onClick={() => handleCardClick(name)}
          />
        ))}
      </StyledProductCardContainer>
    </div>
  );
}

const StyledProductCardContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  gap: 1rem;
  width: 100%;
  min-height: 30rem;
  padding: 0rem 1rem;
`;
