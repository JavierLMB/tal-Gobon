import { useState, useEffect } from "react";
import { cheesesData } from "./useCheeseData";

type useFilterAndSortEffectProps = {
  selectedFilterCountryOptions: string[];
  selectedFilterAnimalOptions: string[];
  selectedSortOption: string;
  searchTerm: string;
};

export default function useFilterAndSortEffect({
  selectedFilterCountryOptions,
  selectedFilterAnimalOptions,
  selectedSortOption,
  searchTerm,
}: useFilterAndSortEffectProps) {
  const [filteredAndSortedProducts, setFilteredAndSortedProducts] = useState([
    ...cheesesData,
  ]);

  useEffect(() => {
    const filteredAndSortedProductsData = [...cheesesData]
      .filter(
        (product) =>
          (searchTerm === "" ||
            product.name.toLowerCase().includes(searchTerm.toLowerCase())) &&
          (selectedFilterCountryOptions.length === 0 ||
            selectedFilterCountryOptions.includes(product.country))
      )
      .filter(
        (product) =>
          selectedFilterAnimalOptions.length === 0 ||
          product.animal
            .split("/")
            .some((animal) =>
              selectedFilterAnimalOptions.includes(animal.trim())
            )
      )
      .sort((a, b) => {
        if (selectedSortOption === "priceUp")
          return a.pricePerKg - b.pricePerKg;
        if (selectedSortOption === "priceDown")
          return b.pricePerKg - a.pricePerKg;
        if (selectedSortOption === "alphabetical")
          return a.name.localeCompare(b.name);
        return 0;
      });

    setFilteredAndSortedProducts(filteredAndSortedProductsData);
  }, [
    selectedFilterCountryOptions,
    selectedFilterAnimalOptions,
    selectedSortOption,
    searchTerm,
  ]);

  return { filteredAndSortedProducts };
}
