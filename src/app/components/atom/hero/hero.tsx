import styled from "styled-components";
import Link from "next/link";
import { useInView } from "react-hook-inview";
import AnimatedTitle from "./useAnimatedTitle";

export default function Hero() {
  const [ref, inView] = useInView({
    threshold: 0,
    unobserveOnEnter: true,
  });

  return (
    <StyledHeroBackground ref={ref}>
      <StyledTitle>
        <AnimatedTitle title="Artisanal" inView={inView} />
        &nbsp;
        <AnimatedTitle title="Delights" inView={inView} />
        &nbsp;
        <AnimatedTitle title="Await" inView={inView} />
      </StyledTitle>
      <StyledLink href="/shop">
        <StyledHeroButton>Shop Now</StyledHeroButton>
      </StyledLink>
    </StyledHeroBackground>
  );
}

const StyledHeroBackground = styled.div`
  height: 92vh;
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
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25);
`;

const StyledTitle = styled.h1`
  line-height: 1.2;
  font-size: 8rem;
  padding: 0rem 1rem;
  color: ${({ theme }) => theme.colors.accentGoldLighter};
`;

const StyledHeroButton = styled.button``;

const StyledLink = styled(Link)`
  margin-top: 1rem;
  padding: 0.5rem;
  text-align: center;
  border-radius: 0.5rem;
  width: 80%;
  border: 2px solid #000;
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25);
  font-size: ${({ theme }) => theme.sizes.header3Font};
  color: ${({ theme }) => theme.colors.primaryLight};
  background-color: ${({ theme }) => theme.colors.accentGoldLighter};
`;
// import styled from "styled-components";
// import Link from "next/link";
// import AnimatedTitle from "./useAnimatedTitle";

// export default function Hero() {
//   return (
//     <StyledHeroBackground>
//       <StyledTitle>
//         <AnimatedTitle title="Artisanal" />
//         &nbsp;
//         <AnimatedTitle title="Delights " />
//         &nbsp;
//         <AnimatedTitle title="Await" />
//       </StyledTitle>
//       <StyledLink href="/shop">
//         <StyledHeroButton>Shop Now</StyledHeroButton>
//       </StyledLink>
//     </StyledHeroBackground>
//   );
// }

// const StyledHeroBackground = styled.div`
//   height: 92vh;
//   margin: 0rem 1rem;
//   background-image: url("cheeseBackgrounds/hero-background1.jpg");
//   background-size: cover;
//   background-position: center;
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
//   text-align: center;
//   text-shadow: -4px -4px 0 #000, 4px -4px 0 #000, -4px 4px 0 #000,
//     4px 4px 0 #000;
//   padding: 2rem;
//   color: ${({ theme }) => theme.colors.accentGoldLighter};
//   box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25);
// `;

// const StyledTitle = styled.h1`
//   line-height: 1.2;
//   font-size: 8rem;
//   padding: 0rem 1rem;
//   color: ${({ theme }) => theme.colors.accentGoldLighter};
// `;

// const StyledHeroButton = styled.button``;

// const StyledLink = styled(Link)`
//   margin-top: 1rem;
//   padding: 0.5rem;
//   text-align: center;
//   border-radius: 0.5rem;
//   width: 80%;
//   border: 2px solid #000;
//   box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25);
//   font-size: ${({ theme }) => theme.sizes.header3Font};
//   color: ${({ theme }) => theme.colors.primaryLight};
//   background-color: ${({ theme }) => theme.colors.accentGoldLighter};
// `;
