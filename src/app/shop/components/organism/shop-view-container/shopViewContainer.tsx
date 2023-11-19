import styled from "styled-components";
import { useState, useEffect } from "react";
import { cheesesData } from "./useCheeseData";
import SortFilterComponent from "../../molecules/shop-sort-filter/shopSortFilter";
import PreviewCardContainer from "../../molecules/preview-card-container/previewCardContainer";
import useFilterAndSortEffect from "./useFilterAndSortEffect";
import SearchBar from "../../atoms/search-bar/searchBar";

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
      <SearchBar searchTerm={searchTerm} onSearchTerm={setSearchTerm} />
      <SortFilterComponent
        selectedSortOption={selectedSortOption}
        onSelectedSortOption={setSelectedSortOption}
        selectedFilterCountryOptions={selectedFilterCountryOptions}
        onSelectedFilterCountryOptions={setSelectedFilterCountryOptions}
        selectedFilterAnimalOptions={selectedFilterAnimalOptions}
        onSelectedFilterAnimalOptions={setSelectedFilterAnimalOptions}
      />
      <PreviewCardContainer activeProducts={activeProducts} />
    </StyledCheeseViewContainer>
  );
}

const StyledCheeseViewContainer = styled.div``;
