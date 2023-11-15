import { useState, useEffect } from "react";
import { cheesesData } from "./cheeseData";
import SortFilterComponent from "../../molecules/cheese-sort-filter/cheeseSortFilter";
import PreviewCardContainer from "../../molecules/preview-card-container/previewCardContainer";
import useFilterAndSortEffect from "./useFilterAndSortEffect";

export default function CheeseViewContainer() {
  const [activeProducts, setActiveProducts] = useState(cheesesData);
  const [selectedSortOption, setSelectedSortOption] = useState("");
  const [selectedFilterCountryOptions, setSelectedFilterCountryOptions] =
    useState([]);
  const [selectedFilterAnimalOptions, setSelectedFilterAnimalOptions] =
    useState([]);

  console.log();
  const { filteredAndSortedProducts } = useFilterAndSortEffect({
    selectedFilterCountryOptions,
    selectedFilterAnimalOptions,
    selectedSortOption,
  });

  useEffect(() => {
    setActiveProducts(filteredAndSortedProducts);
  }, [filteredAndSortedProducts]);

  return (
    <div>
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
