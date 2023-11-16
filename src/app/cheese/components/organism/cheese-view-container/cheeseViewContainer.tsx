import { useState, useEffect } from "react";
import { cheesesData } from "./useCheeseData";
import SortFilterComponent from "../../molecules/cheese-sort-filter/cheeseSortFilter";
import PreviewCardContainer from "../../molecules/preview-card-container/previewCardContainer";
import useFilterAndSortEffect from "./useFilterAndSortEffect";
import SearchBar from "../../atoms/search-bar/searchBar";

export default function CheeseViewContainer() {
  const [activeProducts, setActiveProducts] = useState(cheesesData);
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
    <div>
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
    </div>
  );
}
