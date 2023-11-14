import { useState, useEffect } from "react";
import { RadioButtonValue } from "../cheeseSortFilter/cheeseSortFilter";
import { cheesesData } from "./cheeseData";

type useSortEffectProps = {
  selectedOption: RadioButtonValue;
};

export default function useSortEffect({ selectedOption }: useSortEffectProps) {
  const [updatedProducts, setUpdatedProducts] = useState([...cheesesData]);

  useEffect(() => {
    const sortedProducts = [...cheesesData];

    if (selectedOption === "priceUp") {
      sortedProducts.sort((a, b) => a.pricePerKg - b.pricePerKg);
    } else if (selectedOption === "priceDown") {
      sortedProducts.sort((a, b) => b.pricePerKg - a.pricePerKg);
    } else if (selectedOption === "alphabetical") {
      sortedProducts.sort((a, b) => a.name.localeCompare(b.name));
    }

    setUpdatedProducts(sortedProducts);
  }, [selectedOption]);

  return { updatedProducts };
}
