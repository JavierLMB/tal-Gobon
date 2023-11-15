import styled from "styled-components";
import { cheesesData } from "./cheeseData";
import PreviewCardContainer from "@/components/preview-card-container/previewCardContainer";
import SortFilterComponent, {
  RadioButtonValue,
} from "@/components/cheeseSortFilter/cheeseSortFilter";
import useFilterAndSortEffect from "./useFilterAndSortEffect";
import { useState, useEffect } from "react";

export default function CheeseViewContainer() {
  const [activeProducts, setActiveProducts] = useState(cheesesData);
  const [selectedOption, setSelectedOption] = useState<RadioButtonValue>("");
  const [selectedFilterOptions, setSelectedFilterOptions] = useState([]);
  const [selectedFilterAnimalOptions, setSelectedFilterAnimalOptions] =
    useState([]);

  const { filteredAndSortedProducts } = useFilterAndSortEffect({
    selectedFilterOptions,
    selectedFilterAnimalOptions,
    selectedOption,
  });

  useEffect(() => {
    setActiveProducts(filteredAndSortedProducts);
  }, [filteredAndSortedProducts]);

  return (
    <div>
      <SortFilterComponent
        selectedOption={selectedOption}
        onSelectedOption={setSelectedOption}
        selectedFilterOptions={selectedFilterOptions}
        onSelectedFilterOptions={setSelectedFilterOptions}
        selectedFilterAnimalOptions={selectedFilterAnimalOptions}
        onSelectedFilterAnimalOptions={setSelectedFilterAnimalOptions}
      />
      <PreviewCardContainer activeProducts={activeProducts} />
    </div>
  );
}
// import styled from "styled-components";
// import { cheesesData } from "./cheeseData";
// import PreviewCardContainer from "@/components/preview-card-container/previewCardContainer";
// import SortFilterComponent, {
//   RadioButtonValue,
// } from "@/components/cheeseSortFilter/cheeseSortFilter";
// import useSortEffect from "./useSortEffect";
// import useFilterEffect from "./useFilterEffect";
// import useFilterAnimalEffect from "./useFilterAnimalEffect";
// import { useState, useEffect } from "react";

// export default function CheeseViewContainer() {
//   const [activeProducts, setActiveProducts] = useState(cheesesData);
//   const [selectedOption, setSelectedOption] = useState<RadioButtonValue>("");
//   const [selectedFilterOptions, setSelectedFilterOptions] = useState([]);
//   const [selectedFilterAnimalOptions, setSelectedFilterAnimalOptions] =
//     useState([]);
//   console.log(selectedFilterOptions, "hi");
//   console.log(selectedFilterAnimalOptions, "yo");

//   const { updatedProducts } = useSortEffect({
//     selectedOption,
//   });

//   const { filteredProducts } = useFilterEffect({
//     selectedFilterOptions,
//   });

//   const { filteredAnimalProducts } = useFilterAnimalEffect({
//     selectedFilterAnimalOptions,
//   });

//   useEffect(() => {
//     setActiveProducts(updatedProducts);
//   }, [updatedProducts]);

//   useEffect(() => {
//     setActiveProducts(filteredProducts);
//   }, [filteredProducts]);

//   useEffect(() => {
//     setActiveProducts(filteredAnimalProducts);
//   }, [filteredAnimalProducts]);

//   return (
//     <div>
//       <SortFilterComponent
//         selectedOption={selectedOption}
//         onSelectedOption={setSelectedOption}
//         selectedFilterOptions={selectedFilterOptions}
//         onSelectedFilterOptions={setSelectedFilterOptions}
//         selectedFilterAnimalOptions={selectedFilterAnimalOptions}
//         onSelectedFilterAnimalOptions={setSelectedFilterAnimalOptions}
//       />
//       <PreviewCardContainer activeProducts={activeProducts} />
//     </div>
//   );
// }
