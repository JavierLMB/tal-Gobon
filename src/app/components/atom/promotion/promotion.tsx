import styled, { css } from "styled-components";
import { promotionImages } from "./usePromotionImages";
import { useInView } from "react-hook-inview";

export default function Promotion() {
  const [ref1, inView1] = useInView({
    threshold: 0.8,
    unobserveOnEnter: true,
  });
  const [ref2, inView2] = useInView({
    threshold: 0.8,
    unobserveOnEnter: true,
  });

  return (
    <StyledPromotionMainContainer>
      {promotionImages.map(({ id, image, content }) => (
        <StyledPromotionBackground
          key={id}
          $background={image}
          ref={id === 1 ? ref1 : ref2}
        >
          <StyledPromotionContainer $inView={id === 1 ? inView1 : inView2}>
            {content}
          </StyledPromotionContainer>
        </StyledPromotionBackground>
      ))}
    </StyledPromotionMainContainer>
  );
}

const StyledPromotionMainContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem 1rem;
  color: ${({ theme }) => theme.colors.primaryDark};
  overflow: hidden;
  @media (min-width: ${({ theme }) => theme.breakpoints.bpNormals}) {
    flex-direction: row;
  }
`;

const StyledPromotionBackground = styled.div<{
  $background: string;
}>`
  height: clamp(40rem, 40vw, 75rem);
  border-radius: 0.5rem;
  overflow: hidden;
  background-size: cover;
  background-position: center;
  text-align: center;
  font-size: ${({ theme }) => theme.fonts.defaultFont};
  color: ${({ theme }) => theme.colors.accentGoldLighter};
  box-shadow: ${({ theme }) => theme.shadows.v3Shadow};
  transition: all 0.5s cubic-bezier(0.01, -0.02, 0.51, 1.6);
  ${({ $background }) => css`
    background-image: url(${$background});
  `}

  @media (min-width: ${({ theme }) => theme.breakpoints.bpNormals}) {
    border-radius: 1rem;
  }
`;

const StyledPromotionContainer = styled.div<{ $inView: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  transform: translateY(15rem) translateX(-3rem) rotate(10deg);
  height: clamp(10rem, 5rem + 20vw, 20rem);
  padding: 0rem clamp(6rem, 20vw, 12rem);
  box-shadow: ${({ theme }) => theme.shadows.v3Shadow};
  background: linear-gradient(
    45deg,
    ${({ theme }) => theme.colors.primaryDark},
    ${({ theme }) => theme.colors.primaryLight}
  );
  transition: all 0.5s ease-out;
  overflow: hidden;

  ${({ $inView }) => css`
    width: ${$inView ? "110%" : "1%"};
    opacity: ${$inView ? "1" : "0"};
  `}

  @media (min-width: ${({ theme }) => theme.breakpoints.bpLarge}) {
    transform: translateY(25rem) translateX(-5rem) rotate(10deg);
  }
`;
