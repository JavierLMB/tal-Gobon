import styled from "styled-components";
import Image from "next/image";

type CheeseObjectProps = {
  cheeseObject?: {
    name: string;
    images: { [key: string]: string };
  };
};

export default function ImageSlider({ cheeseObject }: CheeseObjectProps) {
  return (
    <StyledImagesContainer>
      {cheeseObject &&
        Object.entries(cheeseObject.images).map(([key, image]) => (
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
