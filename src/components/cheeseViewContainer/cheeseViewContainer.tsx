import styled from "styled-components";
import { cheesesData } from "./cheeseData";
import PreviewCardContainer from "@/components/preview-card-container/previewCardContainer";
import SortFilterComponent, {
  RadioButtonValue,
} from "@/components/cheeseSortFilter/cheeseSortFilter";

import useSortEffect from "./useSortEffect";
import { useState, useEffect } from "react";

export default function CheeseViewContainer() {
  const [activeProducts, setActiveProducts] = useState(cheesesData);
  const [selectedOption, setSelectedOption] = useState<RadioButtonValue>("");
  const { updatedProducts } = useSortEffect({ selectedOption });

  useEffect(() => {
    setActiveProducts(updatedProducts);
  }, [updatedProducts]);

  return (
    <div>
      <SortFilterComponent
        selectedOption={selectedOption}
        onSelectedOption={setSelectedOption}
      />
      <PreviewCardContainer activeProducts={activeProducts} />
    </div>
  );
}
