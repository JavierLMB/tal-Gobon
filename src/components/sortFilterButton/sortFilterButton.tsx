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
        {buttonState && children}
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
  font-size: ${({ theme }) => theme.sizes.defaultFont};
  font-weight: 600;
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25);
  color: ${({ theme }) => theme.colors.accentGoldDark};
  width: 100%;
  padding: 1rem;
  background: linear-gradient(
    45deg,
    ${({ theme }) => theme.colors.primaryDark},
    ${({ theme }) => theme.colors.primaryLight}
  );
`;

const StyledChildrenContainer = styled.div<{ $buttonState: boolean }>`
  position: absolute;
  z-index: -1;
  left: 0.5rem;
  transform: translateY(-5rem);
  ${({ theme, $buttonState }) => css``};
`;

// ${({ theme, $mode }) => css`
//     font-size: ${$mode === "active" ? "35px" : "25px"};
//     background-color: ${theme.colors.lightGrey};
//   `};
