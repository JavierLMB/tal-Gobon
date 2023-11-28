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
  top: 20rem;
  z-index: 2;
  ${({ $direction }) => css`
    left: ${$direction === "left" ? "7rem" : ""};
    right: ${$direction === "right" ? "7rem" : ""};
  `};
`;

const commonIconStyles = css`
  font-size: 5rem;
  display: block;
  width: 3rem;
  height: 3rem;
  color: ${({ theme }) => theme.colors.primaryLight};
`;

const StyledLeftIcon = styled(IoIosArrowDropleftCircle)`
  ${commonIconStyles}
`;

const StyledRightIcon = styled(IoIosArrowDroprightCircle)`
  ${commonIconStyles}
`;
