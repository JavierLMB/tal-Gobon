import styled, { css } from "styled-components";
import Link from "next/link";
import Image from "next/image";
import { useInView } from "react-hook-inview";
import AnimatedTitle from "./useAnimatedTitle";

export default function Hero() {
  const [ref, inView] = useInView({
    threshold: 0,
    unobserveOnEnter: true,
  });

  return (
    <StyledHeroBackground ref={ref}>
      <StyledLogoImage
        src={"/GobonLogo/big/GobonLogoHero.png"}
        alt={"tal Gobon Logo"}
        width={750}
        height={750}
        priority
      />
      <StyledTitle>
        <AnimatedTitle title="Artisanal" inView={inView} />
        &nbsp;
        <AnimatedTitle title="Delights" inView={inView} />
        &nbsp;
        <AnimatedTitle title="Await" inView={inView} />
      </StyledTitle>
      <StyledLink $inView={inView} href="/shop">
        <button>Shop Now</button>
      </StyledLink>
    </StyledHeroBackground>
  );
}

const StyledHeroBackground = styled.div`
  height: 100%;
  margin: 0rem 1rem;
  border-radius: 0.5rem;
  background-image: url("cheeseBackgrounds/small/hero-background.jpg");
  background-size: cover;
  background-position: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  gap: 2rem;
  overflow-x: hidden;
  padding: 2rem;
  color: ${({ theme }) => theme.colors.accentGoldLighter};
  box-shadow: ${({ theme }) => theme.shadows.v3Shadow};
  @media (min-width: ${({ theme }) => theme.breakpoints.bpNormals}) {
    border-radius: 1rem;
  }
  @media (min-width: ${({ theme }) => theme.breakpoints.bpSmaller}) {
    background-image: url("cheeseBackgrounds/big/hero-background.jpg");
  }
`;

const StyledLogoImage = styled(Image)`
  display: block;
  width: 30rem;
  height: 30rem;
  object-fit: cover;
  border-radius: 50%;
  box-shadow: ${({ theme }) => theme.shadows.v2Shadow};
  margin-bottom: 5rem;
  @media (min-width: ${({ theme }) => theme.breakpoints.bpNormals}) {
    width: 45rem;
    height: 45rem;
  }
`;

const StyledTitle = styled.h1`
  line-height: 1;
  font-size: clamp(7rem, 2rem + 6vw, 9rem);
  padding: 0rem 1rem;
  font-family: Georgia, serif;
  text-shadow: 5px 0px 0px rgba(0, 0, 0, 1);
  color: ${({ theme }) => theme.colors.accentGoldLighter};
`;

const StyledLink = styled(Link)<{ $inView: boolean }>`
  padding: 0.5rem;
  text-align: center;
  border-radius: 0.5rem;
  width: 80%;
  border: 2px solid ${({ theme }) => theme.colors.primaryDark};
  box-shadow: ${({ theme }) => theme.shadows.v3Shadow};
  transition: all 0.5s cubic-bezier(0.01, -0.02, 0.51, 1.6);
  font-size: ${({ theme }) => theme.fonts.header3Font};
  color: ${({ theme }) => theme.colors.primaryLight};
  background-color: ${({ theme }) => theme.colors.accentGoldLighter};
  ${({ $inView }) => css`
    opacity: ${$inView ? "1" : 0};
    transform: translateX(${$inView ? "0rem" : "20rem"});
  `};

  @media (min-width: ${({ theme }) => theme.breakpoints.bpNormals}) {
    width: 20%;
    border-radius: 1rem;
    margin-bottom: 10rem;
  }

  &:hover {
    background-color: ${({ theme }) => theme.colors.accentGoldLight};
    box-shadow: ${({ theme }) => theme.shadows.v2Shadow};
  }

  &:active {
    transform: translateY(3px);
    box-shadow: none;
  }
`;
