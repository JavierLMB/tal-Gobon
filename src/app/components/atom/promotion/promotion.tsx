import styled, { css } from "styled-components";
import { promotionImages } from "./usePromotionImages";
import { useInView } from "react-hook-inview";

export default function Promotion() {
  const [ref, inView] = useInView({
    threshold: 0.3,
    unobserveOnEnter: true,
  });
  console.log(inView, "promo");
  return (
    <StyledPromotionMainContainer ref={ref}>
      {promotionImages.map(({ id, image, content }) => (
        <StyledPromotionBackground
          key={id}
          $background={image}
          $inView={inView}
        >
          <StyledPromotionContainer>{content}</StyledPromotionContainer>
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
`;

const StyledPromotionBackground = styled.div<{
  $background: string;
  $inView: boolean;
}>`
  height: 40rem;
  border-radius: 0.5rem;
  overflow: hidden;
  background-size: cover;
  background-position: center;
  text-align: center;
  font-size: ${({ theme }) => theme.sizes.defaultFont};
  color: ${({ theme }) => theme.colors.accentGoldLighter};
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25);
  transition: all 0.5s cubic-bezier(0.01, -0.02, 0.51, 1.6);
  ${({ $background, $inView }) => css`
    transform: translateY(${$inView ? "0rem" : "10rem"})
      rotate(${$inView ? "0deg" : "-15deg"});
    background-image: url(${$background});
  `}
`;

const StyledPromotionContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  transform: translateY(15rem) translateX(-2rem) rotate(10deg);
  height: 10rem;
  width: 45rem;
  padding: 0rem 6rem 0rem 5rem;
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25);
  background: linear-gradient(
    45deg,
    ${({ theme }) => theme.colors.primaryDark},
    ${({ theme }) => theme.colors.primaryLight}
  );
`;
