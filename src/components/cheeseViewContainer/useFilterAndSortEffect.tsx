import { useState, useEffect } from "react";
import { cheesesData } from "./cheeseData";
import { RadioButtonValue } from "../cheeseSortFilter/cheeseSortFilter";

type useFilterAndSortEffectProps = {
  selectedFilterOptions: string[];
  selectedFilterAnimalOptions: string[];
  selectedOption: RadioButtonValue;
};

export default function useFilterAndSortEffect({
  selectedFilterOptions,
  selectedFilterAnimalOptions,
  selectedOption,
}: useFilterAndSortEffectProps) {
  const [filteredAndSortedProducts, setFilteredAndSortedProducts] = useState([
    ...cheesesData,
  ]);

  useEffect(() => {
    let filteredAndSortedProductsData = [...cheesesData];

    // Apply country filter
    if (selectedFilterOptions.length > 0) {
      filteredAndSortedProductsData = filteredAndSortedProductsData.filter(
        (product) => selectedFilterOptions.includes(product.country)
      );
    }

    // Apply animal filter
    if (selectedFilterAnimalOptions.length > 0) {
      filteredAndSortedProductsData = filteredAndSortedProductsData.filter(
        (product) =>
          product.animal
            .split("/")
            .some((animal) =>
              selectedFilterAnimalOptions.includes(animal.trim())
            )
      );
    }

    // Apply sorting
    if (selectedOption === "priceUp") {
      filteredAndSortedProductsData.sort((a, b) => a.pricePerKg - b.pricePerKg);
    } else if (selectedOption === "priceDown") {
      filteredAndSortedProductsData.sort((a, b) => b.pricePerKg - a.pricePerKg);
    } else if (selectedOption === "alphabetical") {
      filteredAndSortedProductsData.sort((a, b) =>
        a.name.localeCompare(b.name)
      );
    }

    setFilteredAndSortedProducts(filteredAndSortedProductsData);
  }, [selectedFilterOptions, selectedFilterAnimalOptions, selectedOption]);

  return { filteredAndSortedProducts };
}
