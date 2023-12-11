import styled from "styled-components";
import Image from "next/image";
import useWindowSize from "@/components/useWindowSize/useWindowSize";

type CheeseObjectProps = {
  cheeseObject?: {
    name: string;
    imagesBig: { [key: string]: string };
    imagesSmall: { [key: string]: string };
  };
};

export default function ImageSlider({ cheeseObject }: CheeseObjectProps) {
  const [isBigScreen, isSmallScreen] = useWindowSize();

  const cheeseImages: { [key: string]: string } | undefined =
    (isBigScreen && cheeseObject?.imagesBig) ||
    (isSmallScreen && cheeseObject?.imagesSmall) ||
    {};

  return (
    <StyledImagesContainer>
      {cheeseObject &&
        Object.entries(cheeseImages).map(([key, image]) => (
          <StyledImage
            key={key}
            src={image}
            alt={cheeseObject?.name}
            width={570}
            height={660}
            priority
          />
        ))}
    </StyledImagesContainer>
  );
}

const StyledImagesContainer = styled.div`
  display: flex;
  gap: 0.5rem;
  padding: 0rem 1rem 1rem 1rem;
  overflow-x: auto;
`;

const StyledImage = styled(Image)`
  display: block;
  width: 100%;
  height: clamp(22rem, 30vw, 45rem);
  object-fit: cover;
  object-position: center;
  border-radius: 0.5rem;
  box-shadow: ${({ theme }) => theme.shadows.v3Shadow};
  @media (min-width: ${({ theme }) => theme.breakpoints.bpNormals}) {
    border-radius: 1rem;
    overflow: hidden;
  }
`;
