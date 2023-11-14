import { FaAngleDown } from "react-icons/fa";
import styled, { css } from "styled-components";
import { useState } from "react";

type SortFilterButton = {
  title: string;
  children: React.ReactNode;
};

export default function SortFilterButton({
  title,
  children,
}: SortFilterButton) {
  const [buttonState, setButtonState] = useState(false);

  return (
    <StyledSortFilterContainer>
      <StyledSortFilterButton onClick={() => setButtonState(!buttonState)}>
        <FaAngleDown />
        {title}
      </StyledSortFilterButton>
      <StyledChildrenContainer $buttonState={buttonState}>
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

const StyledSortFilterButton = styled.button`
  border-radius: 0.5rem;
  display: flex;
  align-items: center;
  gap: 0.2rem;
  font-size: ${({ theme }) => theme.sizes.header3Font};
  font-weight: 600;
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25);
  color: ${({ theme }) => theme.colors.accentGoldDark};
  width: 100%;
  padding: 1.5rem;
  background: linear-gradient(
    45deg,
    ${({ theme }) => theme.colors.primaryDark},
    ${({ theme }) => theme.colors.primaryLight}
  );
`;

const StyledChildrenContainer = styled.div<{ $buttonState: boolean }>`
  position: absolute;
  z-index: -1;
  left: 1rem;
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25);
  transition: transform 0.4s cubic-bezier(0.01, -0.02, 0.51, 1.6), opacity 0.3s;
  ${({ theme, $buttonState }) => css`
    transform: translateY(${$buttonState ? "0rem" : "-5rem"});
    opacity: ${$buttonState ? "1" : "0"};
    pointer-events: ${$buttonState ? "auto" : "none"};
  `};
`;

// ${({ theme, $mode }) => css`
// font-size: ${$mode === "active" ? "35px" : "25px"};
//     background-color: ${theme.colors.lightGrey};
//   `};
