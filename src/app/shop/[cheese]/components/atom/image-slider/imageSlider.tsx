import styled from "styled-components";

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
          ></StyledImage>
        ))}
    </StyledImagesContainer>
  );
}

const StyledImagesContainer = styled.div`
  display: flex;
  padding: 0rem 1rem 1rem 1rem;
  gap: 0.5rem;
  overflow-x: auto;
`;

const StyledImage = styled.img`
  display: block;
  width: 100%;
  height: 22rem;
  object-fit: cover;
  border-radius: 0.5rem;
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25);
`;
