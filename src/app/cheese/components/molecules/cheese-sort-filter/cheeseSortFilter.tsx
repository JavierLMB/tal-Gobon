import styled from "styled-components";
import SortFilterButton from "../../atoms/sort-filter-button/sortFilterButton";
import { options } from "./useSortFlterOptions";

type SortFilterComponentProps = {
  selectedSortOption: string;
  onSelectedSortOption: (value: string) => void;
  selectedFilterCountryOptions: string[];
  onSelectedFilterCountryOptions: any;
  selectedFilterAnimalOptions: string[];
  onSelectedFilterAnimalOptions: any;
};

export default function SortFilterComponent({
  selectedSortOption,
  onSelectedSortOption,
  selectedFilterCountryOptions,
  onSelectedFilterCountryOptions,
  selectedFilterAnimalOptions,
  onSelectedFilterAnimalOptions,
}: SortFilterComponentProps) {
  const handleRadioChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    onSelectedSortOption(value);
  };

  const handleCheckboxChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    selectedFilterOptions: string[],
    setSelectedFilterOptions: (value: string[]) => void
  ) => {
    const value = e.target.value;
    setSelectedFilterOptions(
      selectedFilterOptions.includes(value)
        ? selectedFilterOptions.filter((option) => option !== value)
        : [...selectedFilterOptions, value]
    );
  };

  return (
    <StyledSortFilterMainContainer>
      <SortFilterButton title={"Sort by"}>
        <StyledSortFilterContainer>
          {options.sortOptions.map((option) => (
            <StyledLabel key={option.value}>
              <StyledInput
                type="radio"
                value={option.value}
                checked={
                  (option.value === "priceUp" && selectedSortOption === "") ||
                  selectedSortOption === option.value
                }
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
            {options.filterOptions.map((option) => (
              <StyledLabel key={option.valueLabel}>
                <StyledInput
                  type="checkbox"
                  value={option.valueLabel}
                  checked={selectedFilterCountryOptions.includes(
                    option.valueLabel
                  )}
                  onChange={(e) =>
                    handleCheckboxChange(
                      e,
                      selectedFilterCountryOptions,
                      onSelectedFilterCountryOptions
                    )
                  }
                />
                {option.valueLabel}
              </StyledLabel>
            ))}
          </SortFilterButton>
          <SortFilterButton title={"Animal"} variant={"inner"}>
            {options.filterAnimalOptions.map((option) => (
              <StyledLabel key={option.valueLabel}>
                <StyledInput
                  type="checkbox"
                  value={option.valueLabel}
                  checked={selectedFilterAnimalOptions.includes(
                    option.valueLabel
                  )}
                  onChange={(e) =>
                    handleCheckboxChange(
                      e,
                      selectedFilterAnimalOptions,
                      onSelectedFilterAnimalOptions
                    )
                  }
                />
                {option.valueLabel}
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
  padding: 0rem 1rem 1rem 1rem;
`;

const StyledSortFilterContainer = styled.div`
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
  display: flex;
  font-size: ${({ theme }) => theme.sizes.defaultFont};
  color: ${({ theme }) => theme.colors.accentGoldLighter};
  font-weight: 400;
  position: relative;
  padding-left: 2.5rem;
`;

const StyledInput = styled.input`
  position: absolute;
  left: 0;
  top: 0.3rem;
  display: grid;
  place-content: center;
  appearance: none;
  background-color: #fff;
  width: 2rem;
  height: 2rem;
  cursor: pointer;
  border: 2px solid ${({ theme }) => theme.colors.primaryLight};

  &[type="radio"] {
    border-radius: 50%;
  }

  &[type="radio"]::before {
    border-radius: 50%;
  }

  &::before {
    content: "";
    width: 1rem;
    height: 1rem;
    transform: scale(0);
    transition: 0.3s transform ease-in-out;
    box-shadow: inset 1em 1em ${({ theme }) => theme.colors.primaryLight};
  }

  &:checked::before {
    transform: scale(1);
  }
`;
