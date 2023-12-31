import styled from "styled-components";
import { animalImages } from "./usePreviewCardAnimalIcons";
import Image from "next/image";
import { useState, useEffect } from "react";
import useWindowSize from "@/components/useWindowSize/useWindowSize";

type PreviewCardProps = {
  image1: any;
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
  onClick: () => void;
  id: number;
};

export default function PreviewCard({
  image1,
  name,
  animal,
  pricePerKg,
  onClick,
  id,
}: PreviewCardProps) {
  const [isBigScreen] = useWindowSize();
  const animalIcons = animalImages[animal];
  const [cheeseName, setCheeseName] = useState(name);

  useEffect(() => {
    setCheeseName(
      !isBigScreen && name.length > 11 ? `${name.slice(0, 11)}...` : name
    );
  }, [isBigScreen, name]);

  return (
    <StyledProductCard onClick={onClick}>
      <StyledImage
        src={image1}
        alt="cheese"
        width={570}
        height={660}
        loading="lazy"
        style={{ objectFit: "cover", objectPosition: "center" }}
      />
      <StyledContent>
        <StyledProductContainer>
          <StyledName>{cheeseName}</StyledName>
          <StyledPrice>
            € {pricePerKg} <StyledPriceKg>/ Kg</StyledPriceKg>
          </StyledPrice>
        </StyledProductContainer>
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
  box-shadow: ${({ theme }) => theme.shadows.v3Shadow};
  width: 100%;
  border-radius: 0.5rem;
  cursor: pointer;
  background: linear-gradient(
    45deg,
    ${({ theme }) => theme.colors.primaryDark},
    ${({ theme }) => theme.colors.primaryLight}
  );
  @media (min-width: ${({ theme }) => theme.breakpoints.bpNormals}) {
    border-radius: 1rem;
  }
`;

const StyledImage = styled(Image)`
  width: 100%;
  height: 22rem;
  height: clamp(22rem, 30vw, 45rem);
  border-radius: 0.5rem 0.5rem 0rem 0rem;
  /* object-fit: center; */
  /* object-position: center; */
  @media (min-width: ${({ theme }) => theme.breakpoints.bpNormals}) {
    border-radius: 1rem 1rem 0rem 0rem;
  }
`;

const StyledContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
`;

const StyledProductContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledName = styled.h3`
  color: ${({ theme }) => theme.colors.accentGoldLighter};
  font-size: ${({ theme }) => theme.fonts.header3Font};
  margin-bottom: -1rem;
`;

const StyledPrice = styled.div`
  color: ${({ theme }) => theme.colors.defaultFont};
  font-size: ${({ theme }) => theme.fonts.defaultFont};
`;

const StyledPriceKg = styled.span`
  font-size: ${({ theme }) => theme.fonts.smallFont};
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
  background-color: ${({ theme }) => theme.colors.accentGoldLighter};
  color: ${({ theme }) => theme.colors.primaryDark};
`;
