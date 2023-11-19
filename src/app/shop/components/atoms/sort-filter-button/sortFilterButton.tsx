import { FaAngleDown } from "react-icons/fa";
import styled, { css } from "styled-components";
import { useState } from "react";

type SortFilterButton = {
  title: string;
  children: React.ReactNode;
  variant?: "main" | "inner";
};

export default function SortFilterButton({
  title,
  children,
  variant = "main",
}: SortFilterButton) {
  const [buttonState, setButtonState] = useState(false);

  return (
    <StyledSortFilterContainer>
      <StyledSortFilterButton
        onClick={() => setButtonState(!buttonState)}
        $variant={variant}
      >
        <FaAngleDown />
        <StyledTitle>{title}</StyledTitle>
      </StyledSortFilterButton>
      <StyledChildrenContainer $buttonState={buttonState} $variant={variant}>
        {children}
      </StyledChildrenContainer>
    </StyledSortFilterContainer>
  );
}

const StyledSortFilterContainer = styled.div`
  width: 100%;
  position: relative;
  z-index: 1;
`;

const StyledSortFilterButton = styled.button<{ $variant: string }>`
  border-radius: 0.5rem;
  display: flex;
  align-items: center;
  gap: 0.2rem;
  color: ${({ theme }) => theme.colors.accentGoldLighter};
  width: 100%;

  ${({ theme, $variant }) => css`
    font-size: ${$variant === "inner"
      ? theme.sizes.defaultFont
      : theme.sizes.header3Font};
    font-weight: ${$variant === "inner" ? 400 : 600};
    background: ${$variant === "inner"
      ? "none"
      : `linear-gradient(45deg, ${theme.colors.primaryDark}, ${theme.colors.primaryLight})`};
    box-shadow: ${$variant === "inner"
      ? "none"
      : "0px 2px 2px rgba(0, 0, 0, 0.25)"};
    padding: ${$variant === "inner" ? "0rem" : "0.5rem"};
  `};
`;

const StyledTitle = styled.div`
  font-size: ${({ theme }) => theme.sizes.header3Font};
  font-weight: 600;
  color: ${({ theme }) => theme.colors.accentGoldLighter};
`;

const StyledChildrenContainer = styled.div<{
  $buttonState: boolean;
  $variant: string;
}>`
  z-index: -1;
  left: 1rem;
  transition: transform 0.4s cubic-bezier(0.01, -0.02, 0.51, 1.6), opacity 0.3s;
  color: ${({ theme }) => theme.colors.accentGoldDark};
  ${({ $buttonState, $variant }) => css`
    box-shadow: ${$variant === "inner"
      ? "none"
      : "0px 2px 2px rgba(0, 0, 0, 0.25)"};
    position: ${$variant === "inner" && $buttonState ? "static" : "absolute"};
    transform: translateY(${$buttonState ? "0rem" : "-5rem"});
    opacity: ${$buttonState ? "1" : "0"};
    pointer-events: ${$buttonState ? "auto" : "none"};
  `};
`;
