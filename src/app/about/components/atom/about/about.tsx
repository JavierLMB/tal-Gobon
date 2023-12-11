import styled from "styled-components";
import { useInView } from "react-hook-inview";
import AnimatedTitle from "@/app/components/atom/hero/useAnimatedTitle";
import CheeseRocket from "../cheeseRocket/cheeseRocket";

export default function About() {
  const [ref, inView] = useInView({
    threshold: 0,
    unobserveOnEnter: true,
  });
  return (
    <StyledAboutContainer>
      <StyledHeroBackground ref={ref}>
        <StyledTitle>
          <AnimatedTitle title="About Us" inView={inView} />
        </StyledTitle>
      </StyledHeroBackground>
      <CheeseRocket />
      <StyledContent>
        <StyledSubContent>
          Welcome to Tal-Ġobon, your premier destination for exquisite cheese
          experiences since 2015. We&apos;re on a mission to bring the
          world&apos;s finest artisanal cheeses directly to your table.
        </StyledSubContent>
        <StyledSubContent>
          At Tal-Ġobon, we&apos;ve curated a collection of premium cheeses that
          redefine your culinary experience. From velvety Camembert to bold Blue
          Cheese, each piece is a testament to our commitment to quality.
        </StyledSubContent>
        <StyledSubContent>
          Indulge in a seamless online shopping experience, and have our
          carefully selected cheeses delivered fresh to your doorstep. We
          prioritize sustainability and ethical sourcing, ensuring every bite is
          not only delicious but also responsible.
        </StyledSubContent>
        <StyledSubContent>
          Thank you for choosing Tal-Ġobon for your cheese cravings since 2015.
          Explore our selection and savor the extraordinary. Your satisfaction
          is our passion.
        </StyledSubContent>
      </StyledContent>
    </StyledAboutContainer>
  );
}

const StyledAboutContainer = styled.div`
  margin: 0rem 1rem 1rem 1rem;
`;

const StyledHeroBackground = styled.div`
  position: relative;
  height: clamp(30rem, 40vw, 50rem);
  border-radius: 0.5rem;
  background-image: url("cheeseAbout/small/aboutImage.jpg");
  background-size: cover;
  background-position: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  overflow-x: hidden;
  margin-bottom: 1rem;
  padding: 2rem;
  color: ${({ theme }) => theme.colors.accentGoldLighter};
  box-shadow: ${({ theme }) => theme.shadows.v3Shadow};
  @media (min-width: ${({ theme }) => theme.breakpoints.bpNormals}) {
    border-radius: 1rem;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.bpSmaller}) {
    background-image: url("cheeseAbout/big/aboutImage.jpg");
    background-position: top;
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

const StyledContent = styled.div`
  border-radius: 0.5rem;
  padding: 1rem 2rem;
  text-align: center;
  font-size: ${({ theme }) => theme.fonts.defaultFont};
  color: ${({ theme }) => theme.colors.defaultFont};
  background: linear-gradient(
    45deg,
    ${({ theme }) => theme.colors.primaryDark},
    ${({ theme }) => theme.colors.primaryLight}
  );
  @media (min-width: ${({ theme }) => theme.breakpoints.bpNormals}) {
    border-radius: 1rem;
    padding: 5rem 6rem 2rem 6rem;
  }
`;

const StyledSubContent = styled.span`
  display: block;
  margin-bottom: 2rem;
  @media (min-width: ${({ theme }) => theme.breakpoints.bpNormals}) {
    margin-bottom: 4rem;
  }
`;
