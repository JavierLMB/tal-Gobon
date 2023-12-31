import styled, { css } from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { SampleNextArrow, SamplePrevArrow } from "./useCarouselArrows";
import { carouselImages } from "./useCarouselImages";
import useWindowSize from "@/components/useWindowSize/useWindowSize";

export default function Carousel() {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: false,
  };

  const [isBigScreen, isSmallScreen] = useWindowSize();

  return (
    <StyledCarouselContainer>
      <Slider {...sliderSettings}>
        {carouselImages.map(({ id, imageSmall, imageBig, content }) => (
          <StyledHeroBackground
            key={id}
            $background={
              (isSmallScreen && imageSmall) || (isBigScreen && imageBig)
            }
          >
            <StyledPromotionContainer>
              <h3>{content}</h3>
            </StyledPromotionContainer>
          </StyledHeroBackground>
        ))}
      </Slider>
    </StyledCarouselContainer>
  );
}

const StyledCarouselContainer = styled.div`
  margin: 2rem 1rem 4rem 1rem;
  border-radius: 0.5rem;
  color: ${({ theme }) => theme.colors.primaryDark};
  background-color: ${({ theme }) => theme.colors.primaryDark};
  box-shadow: ${({ theme }) => theme.shadows.v3Shadow};
  @media (min-width: ${({ theme }) => theme.breakpoints.bpSmaller}) {
    margin: 2rem 1rem 1rem 1rem;
    border-radius: 1rem;
    overflow: hidden;
  }
`;

const StyledHeroBackground = styled.div<{ $background: string | boolean }>`
  height: clamp(20rem, 40vw, 50rem);
  border-radius: 0.5rem;
  background-size: cover;
  background-position: center;
  text-align: center;
  font-size: ${({ theme }) => theme.fonts.defaultFont};
  color: ${({ theme }) => theme.colors.primaryLight};
  ${({ $background }) => css`
    background-image: ${$background ? `url(${$background})` : "none"};
  `}

  @media (min-width: ${({ theme }) => theme.breakpoints.bpNormals}) {
    border-radius: 1rem;
    font-size: ${({ theme }) => theme.fonts.header3Font};
  }
`;

const StyledPromotionContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
  transform: translateY(clamp(2.4rem, 6vw, 8rem));
  height: clamp(15rem, 5rem + 20vw, 30rem);
  width: clamp(30rem, 5rem + 25vw, 70rem);
  padding: 0rem 2rem;
  background-color: rgba(250, 250, 255, 0.85);
  box-shadow: ${({ theme }) => theme.shadows.v3Shadow};
`;
