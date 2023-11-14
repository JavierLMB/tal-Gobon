import { FaAngleDown } from "react-icons/fa";
import styled from "styled-components";
import { useState } from "react";

export default function SortFilterButton({ title, children }) {
  return (
    <StyledSortFilterContainer>
      <StyledSortFilterButton>
        <FaAngleDown />
        {title}
      </StyledSortFilterButton>
      {children}
    </StyledSortFilterContainer>
  );
}

const StyledSortFilterContainer = styled.div`
  width: 100%;
`;

const StyledSortFilterButton = styled.button`
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
