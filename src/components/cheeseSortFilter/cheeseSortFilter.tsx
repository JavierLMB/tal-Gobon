import styled from "styled-components";
import { useState } from "react";
import SortFilterButton from "../sortFilterButton/sortFilterButton";
import { FaAngleDown } from "react-icons/fa";

const radioOptions = [
  { value: "priceUp", label: "Price (Low to High)" },
  { value: "priceDown", label: "Price (High to Low)" },
  { value: "alphabetical", label: "Alphabetical Order" },
];

export type RadioButtonValue = "priceUp" | "priceDown" | "alphabetical" | "";

type SortFilterComponentProps = {
  selectedOption: RadioButtonValue;
  onSelectedOption: (option: RadioButtonValue) => void;
};

export default function SortFilterComponent({
  selectedOption,
  onSelectedOption,
}: SortFilterComponentProps) {
  const [buttonState, setButtonState] = useState(false);

  const handleRadioChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value as RadioButtonValue;
    onSelectedOption(value);
  };

  return (
    <StyledSortFilterMainContainer>
      {/* <StyledSortFilterContainer>
        <StyledSortFilterButton>
          <FaAngleDown />
          Sort by
        </StyledSortFilterButton>
        {radioOptions.map((option) => (
          <StyledLabel key={option.value}>
            <input
              type="radio"
              value={option.value}
              checked={selectedOption === option.value}
              onChange={handleRadioChange}
            />
            {option.label}
          </StyledLabel>
        ))}
      </StyledSortFilterContainer> */}
      <SortFilterButton title={"Sort by"}>
        {radioOptions.map((option) => (
          <StyledLabel key={option.value}>
            <input
              type="radio"
              value={option.value}
              checked={selectedOption === option.value}
              onChange={handleRadioChange}
            />
            {option.label}
          </StyledLabel>
        ))}
      </SortFilterButton>
      <SortFilterButton title={"Filter"}> </SortFilterButton>
      {/* <StyledSortFilterContainer>
        <StyledSortFilterButton>
          <FaAngleDown />
          Filter
        </StyledSortFilterButton>
      </StyledSortFilterContainer> */}
    </StyledSortFilterMainContainer>
  );
}

const StyledSortFilterMainContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  padding: 1rem;
  background-color: ${({ theme }) => theme.colors.primaryLight};
`;

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

const StyledLabel = styled.label`
  display: flex;
  display: none;
  width: 12rem;
  background-color: ${({ theme }) => theme.colors.accentGoldDark};
`;
