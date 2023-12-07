import styled from "styled-components";
import { useState, useEffect } from "react";
import { cheesesData } from "./useCheeseData";
import SortFilterComponent from "../../molecule/shop-sort-filter/shopSortFilter";
import PreviewCardContainer from "../../molecule/preview-card-container/previewCardContainer";
import useFilterAndSortEffect from "./useFilterAndSortEffect";
import SearchBar from "../../atom/search-bar/searchBar";

const defaultActiveProducts = cheesesData.sort(
  (a, b) => a.pricePerKg - b.pricePerKg
);

export default function ShopViewContainer() {
  const [activeProducts, setActiveProducts] = useState(defaultActiveProducts);
  const [selectedSortOption, setSelectedSortOption] = useState("");
  const [selectedFilterCountryOptions, setSelectedFilterCountryOptions] =
    useState([]);
  const [selectedFilterAnimalOptions, setSelectedFilterAnimalOptions] =
    useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const { filteredAndSortedProducts } = useFilterAndSortEffect({
    selectedFilterCountryOptions,
    selectedFilterAnimalOptions,
    selectedSortOption,
    searchTerm,
  });

  useEffect(() => {
    setActiveProducts(filteredAndSortedProducts);
  }, [filteredAndSortedProducts]);

  return (
    <StyledCheeseViewContainer>
      <StyledSearchFilterContainer>
        <SearchBar searchTerm={searchTerm} onSearchTerm={setSearchTerm} />
        <SortFilterComponent
          selectedSortOption={selectedSortOption}
          onSelectedSortOption={setSelectedSortOption}
          selectedFilterCountryOptions={selectedFilterCountryOptions}
          onSelectedFilterCountryOptions={setSelectedFilterCountryOptions}
          selectedFilterAnimalOptions={selectedFilterAnimalOptions}
          onSelectedFilterAnimalOptions={setSelectedFilterAnimalOptions}
        />
      </StyledSearchFilterContainer>
      <PreviewCardContainer activeProducts={activeProducts} />
    </StyledCheeseViewContainer>
  );
}

const StyledCheeseViewContainer = styled.div`
  margin-bottom: 1rem;
`;

const StyledSearchFilterContainer = styled.div`
  @media (min-width: ${({ theme }) => theme.breakpoints.bpNormals}) {
    display: flex;
    justify-content: space-between;
  }
`;
