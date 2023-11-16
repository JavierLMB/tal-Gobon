import styled from "styled-components";
import { animalImages } from "./usePreviewCardAnimalIcons";

type PreviewCardProps = {
  image1: string;
  name: string;
  animal:
    | "Cow"
    | "Sheep"
    | "Sheep/Goat"
    | "Cow/Goat"
    | "Cow/Goat/Buffalo"
    | "Cow/Sheep/Goat"
    | "Sheep/Cow/Goat/Buffalo";
  pricePerKg: number;
};

export default function PreviewCard({
  image1,
  name,
  animal,
  pricePerKg,
}: PreviewCardProps) {
  const animalIcons = animalImages[animal];

  return (
    <StyledProductCard>
      <a>
        <StyledImage src={image1} alt="cheese"></StyledImage>
      </a>
      <StyledContent>
        <div>
          <StyledName>
            {name.length > 11 ? `${name.slice(0, 11)}...` : name}
          </StyledName>
          <StyledPrice>€ {pricePerKg}</StyledPrice>
        </div>
        <StyledAnimalIconsContainer>
          {animalIcons.map((Icon, index) => (
            <StyledAnimalIcons key={index} as={Icon} />
          ))}
        </StyledAnimalIconsContainer>
      </StyledContent>
    </StyledProductCard>
  );
}

const StyledProductCard = styled.div`
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25);
  width: 19rem;
  border-radius: 0.5rem;
  background: linear-gradient(
    45deg,
    ${({ theme }) => theme.colors.primaryDark},
    ${({ theme }) => theme.colors.primaryLight}
  );
`;

const StyledImage = styled.img`
  display: block;
  width: 100%;
  height: 22rem;
  object-fit: cover;
  border-radius: 0.5rem 0.5rem 0rem 0rem;
`;

const StyledContent = styled.div`
  display: flex;
  align-items: center;
  align-items: stretch;
  justify-content: space-between;
  padding: 1rem;
`;

const StyledName = styled.h3`
  color: ${({ theme }) => theme.colors.headerFont};
  font-size: ${({ theme }) => theme.sizes.header3Font};
`;

const StyledPrice = styled.div`
  color: ${({ theme }) => theme.colors.defaultFont};
  font-size: ${({ theme }) => theme.sizes.defaultFont};
`;

const StyledAnimalIconsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.2rem;
  width: 4rem;
`;
const StyledAnimalIcons = styled.div`
  font-size: 1.9rem;
  border-radius: 50%;
  padding: 0.1rem;
  background-color: ${({ theme }) => theme.colors.accentGoldLight};
  color: ${({ theme }) => theme.colors.primaryDark};
`;
