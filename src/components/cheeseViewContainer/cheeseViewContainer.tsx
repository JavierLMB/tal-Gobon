import styled from "styled-components";
import { cheesesData } from "./cheeseData";
import PreviewCardContainer from "@/components/preview-card-container/previewCardContainer";
import SortComponent from "@/components/cheeseSortFilter/cheeseSortFilter";
import { RadioButtonValue } from "@/components/cheeseSortFilter/cheeseSortFilter";
import { useState } from "react";

export default function CheeseViewContainer() {
  const [activeProducts, setActiveProducts] = useState(cheesesData);
  const [selectedOption, setSelectedOption] = useState<RadioButtonValue>("");
  console.log(selectedOption);
  return (
    <div>
      <SortComponent
        selectedOption={selectedOption}
        onSelectedOption={setSelectedOption}
      />
      <PreviewCardContainer activeProducts={activeProducts} />
    </div>
  );
}
