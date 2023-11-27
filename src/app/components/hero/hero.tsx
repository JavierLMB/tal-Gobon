import styled from "styled-components";

export default function Hero() {
  return (
    <StyledHeroBackground>
      <StyledTitle>Artisanal Delights Await</StyledTitle>
    </StyledHeroBackground>
  );
}

const StyledHeroBackground = styled.div`
  height: 90vh;
  margin: 0rem 1rem;
  background-image: url("cheeseBackgrounds/hero-background1.jpg");
  background-size: cover;
  background-position: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  text-shadow: -4px -4px 0 #000, 4px -4px 0 #000, -4px 4px 0 #000,
    4px 4px 0 #000;
  padding: 2rem;
  color: ${({ theme }) => theme.colors.accentGoldLighter};
`;

const StyledTitle = styled.h1`
  line-height: 1.7;
  font-size: 8rem;
  padding: 0rem 1rem;
  color: ${({ theme }) => theme.colors.accentGoldLighter};
`;
