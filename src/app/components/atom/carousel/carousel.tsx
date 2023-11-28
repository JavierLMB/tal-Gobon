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
  };

  return (
    <StyledCarouselContainer>
      <Slider {...sliderSettings}>
        {carouselImages.map(({ id, image }) => (
          <StyledHeroBackground key={id} $background={image}>
            <h3>Hello</h3>
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
`;

const StyledHeroBackground = styled.div<{ $background: string }>`
  height: 20rem;
  background-size: cover;
  background-position: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25);
  color: ${({ theme }) => theme.colors.accentGoldLighter};
  ${({ $background }) => css`
    background-image: url(${$background});
  `};
`;
