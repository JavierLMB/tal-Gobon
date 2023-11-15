import styled from "styled-components";
import SortFilterButton from "../sortFilterButton/sortFilterButton";

const sortOptions = [
  { value: "priceUp", label: "Price (Low to High)" },
  { value: "priceDown", label: "Price (High to Low)" },
  { value: "alphabetical", label: "Alphabetical Order" },
];

const filterOptions = [
  { label: "France" },
  { label: "United Kingdom" },
  { label: "Netherlands" },
  { label: "Greece" },
  { label: "Spain" },
  { label: "Switzerland" },
  { label: "Italy" },
  { label: "Denmark" },
  { label: "Belgium" },
  { label: "United States" },
];

const filterAnimalOptions = [
  { label: "Cow" },
  { label: "Sheep" },
  { label: "Buffalo" },
  { label: "Goat" },
];

export type RadioButtonValue = "priceUp" | "priceDown" | "alphabetical" | "";

type SortFilterComponentProps = {
  selectedOption: RadioButtonValue;
  onSelectedOption: (option: RadioButtonValue) => void;
};

export default function SortFilterComponent({
  selectedOption,
  onSelectedOption,
  selectedFilterOptions,
  onSelectedFilterOptions,
  selectedFilterAnimalOptions,
  onSelectedFilterAnimalOptions,
}: SortFilterComponentProps) {
  const handleRadioChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value as RadioButtonValue;
    onSelectedOption(value);
  };

  const handleCheckboxChange = (e) => {
    const value = e.target.value;
    onSelectedFilterOptions(
      selectedFilterOptions.includes(value)
        ? selectedFilterOptions.filter((option) => option !== value)
        : [...selectedFilterOptions, value]
    );
  };
  const handleCheckboxAnimalChange = (e) => {
    const value = e.target.value;
    onSelectedFilterAnimalOptions(
      selectedFilterAnimalOptions.includes(value)
        ? selectedFilterAnimalOptions.filter((option) => option !== value)
        : [...selectedFilterAnimalOptions, value]
    );
  };

  return (
    <StyledSortFilterMainContainer>
      <SortFilterButton title={"Sort by"}>
        <StyledSortFilterContainer>
          {sortOptions.map((option) => (
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
        </StyledSortFilterContainer>
      </SortFilterButton>
      <SortFilterButton title={"Filter"}>
        <StyledSortFilterContainer>
          <SortFilterButton title={"Country"} variant={"inner"}>
            {filterOptions.map((option) => (
              <StyledLabel key={option.label}>
                <input
                  type="checkbox"
                  value={option.label}
                  checked={selectedFilterOptions.includes(option.label)}
                  onChange={handleCheckboxChange}
                />
                {option.label}
              </StyledLabel>
            ))}
          </SortFilterButton>
          <SortFilterButton title={"Animal"} variant={"inner"}>
            {filterAnimalOptions.map((option) => (
              <StyledLabel key={option.label}>
                <input
                  type="checkbox"
                  value={option.label}
                  checked={selectedFilterAnimalOptions.includes(option.label)}
                  onChange={handleCheckboxAnimalChange}
                />
                {option.label}
              </StyledLabel>
            ))}
          </SortFilterButton>
        </StyledSortFilterContainer>
      </SortFilterButton>
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

const StyledSortFilterContainer = styled.label`
  display: flex;
  gap: 0.5rem;
  flex-direction: column;
  padding: 1rem;
  border-radius: 0rem 0rem 0.5rem 0.5rem;
  background: linear-gradient(
    45deg,
    ${({ theme }) => theme.colors.primaryDark},
    ${({ theme }) => theme.colors.primaryLight}
  );
`;

const StyledLabel = styled.label`
  font-size: ${({ theme }) => theme.sizes.defaultFont};
  color: ${({ theme }) => theme.colors.accentGoldDark};
  font-weight: 400;
  display: flex;
  gap: 0.2rem;
`;
