import styled, { css } from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { SampleNextArrow, SamplePrevArrow } from "./useCarouselArrows";
import { carouselImages } from "./useCarouselImages";

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
    pauseOnHover: true,
  };

  return (
    <StyledCarouselContainer>
      <Slider {...sliderSettings}>
        {carouselImages.map(({ id, image, content }) => (
          <StyledHeroBackground key={id} $background={image}>
            <StyledPromotionContainer>{content}</StyledPromotionContainer>
          </StyledHeroBackground>
        ))}
      </Slider>
    </StyledCarouselContainer>
  );
}

const StyledCarouselContainer = styled.div`
  margin: 2rem 1rem 4rem 1rem;
  color: ${({ theme }) => theme.colors.primaryDark};
  background-color: ${({ theme }) => theme.colors.primaryDark};
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25);
`;

const StyledHeroBackground = styled.div<{ $background: string }>`
  height: 20rem;
  background-size: cover;
  background-position: center;
  text-align: center;
  font-size: ${({ theme }) => theme.sizes.defaultFont};
  color: ${({ theme }) => theme.colors.primaryLight};
  ${({ $background }) => css`
    background-image: url(${$background});
  `};
`;

const StyledPromotionContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  transform: translateY(2.5rem);
  height: 15rem;
  width: 30rem;
  padding: 0rem 2rem;
  background-color: rgba(250, 250, 255, 0.85);
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25);
`;
