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
        src={"/../public/GobonLogo.png"}
        alt={"tal Gobon Logo"}
        width={270}
        height={260}
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
        <StyledHeroButton>Shop Now</StyledHeroButton>
      </StyledLink>
    </StyledHeroBackground>
  );
}

const StyledHeroBackground = styled.div`
  height: 92vh;
  margin: 0rem 1rem;
  border-radius: 0.5rem;
  background-image: url("cheeseBackgrounds/hero-background1.jpg");
  background-size: cover;
  background-position: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  gap: 2rem;
  overflow-x: hidden;
  text-shadow: -4px -4px 0 #000, 4px -4px 0 #000, -4px 4px 0 #000,
    4px 4px 0 #000;
  padding: 2rem;
  color: ${({ theme }) => theme.colors.accentGoldLighter};
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25);
`;

const StyledLogoImage = styled(Image)`
  display: block;
  width: 30rem;
  height: 30rem;
  object-fit: cover;
  border-radius: 50%;
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.5);
  margin-bottom: 5rem;
`;

const StyledTitle = styled.h1`
  line-height: 1;
  font-size: 8rem;
  padding: 0rem 1rem;
  color: ${({ theme }) => theme.colors.accentGoldLighter};
`;

const StyledHeroButton = styled.button``;

const StyledLink = styled(Link)<{ $inView: boolean }>`
  padding: 0.5rem;
  text-align: center;
  border-radius: 0.5rem;
  width: 80%;
  border: 2px solid #000;
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25);
  transition: all 0.5s cubic-bezier(0.01, -0.02, 0.51, 1.6);
  font-size: ${({ theme }) => theme.sizes.header3Font};
  color: ${({ theme }) => theme.colors.primaryLight};
  background-color: ${({ theme }) => theme.colors.accentGoldLighter};
  ${({ $inView }) => css`
    opacity: ${$inView ? "1" : 0};
    transform: translateX(${$inView ? "0rem" : "20rem"});
  `};
`;
// import styled, { css } from "styled-components";
// import Link from "next/link";
// import { useInView } from "react-hook-inview";
// import AnimatedTitle from "./useAnimatedTitle";

// export default function Hero() {
//   const [ref, inView] = useInView({
//     threshold: 0,
//     unobserveOnEnter: true,
//   });

//   return (
//     <StyledHeroBackground ref={ref}>
//       <StyledTitle>
//         <AnimatedTitle title="Artisanal" inView={inView} />
//         &nbsp;
//         <AnimatedTitle title="Delights" inView={inView} />
//         &nbsp;
//         <AnimatedTitle title="Await" inView={inView} />
//       </StyledTitle>
//       <StyledLink $inView={inView} href="/shop">
//         <StyledHeroButton>Shop Now</StyledHeroButton>
//       </StyledLink>
//     </StyledHeroBackground>
//   );
// }

// const StyledHeroBackground = styled.div`
//   height: 92vh;
//   margin: 0rem 1rem;
//   border-radius: 0.5rem;
//   background-image: url("cheeseBackgrounds/hero-background1.jpg");
//   background-size: cover;
//   background-position: center;
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
//   text-align: center;
//   overflow-x: hidden;

//   text-shadow: -4px -4px 0 #000, 4px -4px 0 #000, -4px 4px 0 #000,
//     4px 4px 0 #000;
//   padding: 2rem;
//   color: ${({ theme }) => theme.colors.accentGoldLighter};
//   box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25);
// `;

// const StyledTitle = styled.h1`
//   line-height: 1;
//   font-size: 8rem;
//   padding: 0rem 1rem;
//   color: ${({ theme }) => theme.colors.accentGoldLighter};
// `;

// const StyledHeroButton = styled.button``;

// const StyledLink = styled(Link)<{ $inView: boolean }>`
//   margin-top: 1rem;
//   padding: 0.5rem;
//   text-align: center;
//   border-radius: 0.5rem;
//   width: 80%;
//   border: 2px solid #000;
//   box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25);
//   transition: all 0.5s cubic-bezier(0.01, -0.02, 0.51, 1.6);
//   font-size: ${({ theme }) => theme.sizes.header3Font};
//   color: ${({ theme }) => theme.colors.primaryLight};
//   background-color: ${({ theme }) => theme.colors.accentGoldLighter};
//   ${({ $inView }) => css`
//     opacity: ${$inView ? "1" : 0};
//     transform: translateX(${$inView ? "0rem" : "20rem"});
//   `};
// `;
