import styled from "styled-components";
import PreviewCard from "../../atom/preview-card/previewCard";
import { CheeseDataType } from "../../organism/shop-view-container/useCheeseData";
import { useRouter } from "next/navigation";
import useWindowSize from "@/components/useWindowSize/useWindowSize";

type PreviewCardContainerProps = {
  activeProducts: CheeseDataType[];
};

export default function PreviewCardContainer({
  activeProducts,
}: PreviewCardContainerProps) {
  const router = useRouter();

  const [isBigScreen, isSmallScreen] = useWindowSize();

  const handleCardClick = (name: string) => {
    const url = name
      .split(" ")
      .map((word) => word[0].toUpperCase() + word.slice(1))
      .join("");
    router.push(`/shop/${url}`);
  };

  console.log(activeProducts);

  return (
    <div>
      <StyledProductCardContainer>
        {activeProducts.map(
          ({ id, imagesSmall, imagesBig, name, animal, pricePerKg }) => (
            <PreviewCard
              key={id}
              id={id}
              image1={imagesBig.image1Big}
              // image1={
              //   (isBigScreen && imagesBig.image1Big) ||
              //   (isSmallScreen && imagesSmall.image1Small) ||
              //   imagesSmall.image1Small
              // }
              name={name}
              animal={animal}
              pricePerKg={pricePerKg}
              onClick={() => handleCardClick(name)}
            />
          )
        )}
      </StyledProductCardContainer>
    </div>
  );
}

const StyledProductCardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
  gap: 1rem;
  width: 100%;
  min-height: 30rem;
  padding: 0rem 1rem;
  @media (min-width: ${({ theme }) => theme.breakpoints.bpNormals}) {
    grid-template-columns: repeat(4, 1fr);
  }
`;
