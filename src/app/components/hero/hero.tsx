import styled from "styled-components";

export default function Hero() {
  return (
    <StyledHeroBackground>
      <StyledTitle>Artisanal Delights Await</StyledTitle>
      <StyledSubtitle>
        Unveiling a Symphony of Flavors in Every Bite
      </StyledSubtitle>
    </StyledHeroBackground>
  );
}

const StyledHeroBackground = styled.div`
  height: 90vh;
  background-image: url("cheeseBackgrounds/hero-background.jpg");
  background-size: cover;
  background-position: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000,
    1px 1px 0 #000;
  padding: 2rem;
  color: ${({ theme }) => theme.colors.accentGoldLighter};
`;

const StyledTitle = styled.h1`
  margin-top: 10rem;
  margin-bottom: 1rem;
  font-size: 3rem;
  color: ${({ theme }) => theme.colors.accentGoldLighter};
`;

const StyledSubtitle = styled.p`
  max-width: 600px;
  font-size: ${({ theme }) => theme.sizes.header3Font};
  color: ${({ theme }) => theme.colors.defaultFont};
`;
