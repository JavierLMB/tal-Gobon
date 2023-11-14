import styled from "styled-components";
import SortFilterButton from "../sortFilterButton/sortFilterButton";

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
  const handleRadioChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value as RadioButtonValue;
    onSelectedOption(value);
  };

  return (
    <StyledSortFilterMainContainer>
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

const StyledLabel = styled.label`
  display: flex;
  display: none;
  width: 12rem;
  background-color: ${({ theme }) => theme.colors.accentGoldDark};
`;
