import styled, { css } from "styled-components";
import {
  IoIosArrowDropleftCircle,
  IoIosArrowDroprightCircle,
} from "react-icons/io";

type SampleArrowProps = {
  onClick?: () => void;
};

export function SamplePrevArrow({ onClick }: SampleArrowProps) {
  return (
    <StyledArrowContainer onClick={onClick} $direction={"left"}>
      <StyledLeftIcon />
    </StyledArrowContainer>
  );
}

export function SampleNextArrow({ onClick }: SampleArrowProps) {
  return (
    <StyledArrowContainer onClick={onClick} $direction={"right"}>
      <StyledRightIcon />
    </StyledArrowContainer>
  );
}

const StyledArrowContainer = styled.div<{ $direction: string }>`
  display: block;
  position: absolute;
  top: clamp(20.5rem, 40vw, 50rem);
  z-index: 2;
  ${({ $direction }) => css`
    left: ${$direction === "left" ? "clamp(10rem, 29vw, 50rem)" : ""};
    right: ${$direction === "right" ? "clamp(10rem, 29vw, 50rem)" : ""};
  `};
  @media (min-width: ${({ theme }) => theme.breakpoints.bpSmaller}) {
    display: none;
  }
`;

const commonIconStyles = css`
  display: block;
  font-size: 5rem;
  width: clamp(2rem, 5vw, 5rem);
  height: clamp(2rem, 5vw, 5rem);
  color: ${({ theme }) => theme.colors.primaryLight};
`;

const StyledLeftIcon = styled(IoIosArrowDropleftCircle)`
  ${commonIconStyles}
`;

const StyledRightIcon = styled(IoIosArrowDroprightCircle)`
  ${commonIconStyles}
`;
