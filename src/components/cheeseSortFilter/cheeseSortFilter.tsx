import styled from "styled-components";
import { useState } from "react";

export default function SortComponent() {
  const [selectedOption, setSelectedOption] = useState("priceUp");

  const handleRadioChange = (event) => {
    const value = event.target.value;
    setSelectedOption(value);
  };

  return (
    <div>
      <label>
        <input
          type="radio"
          value="priceUp"
          checked={selectedOption === "priceUp"}
          onChange={handleRadioChange}
        />
        Price (Low to High)
      </label>

      <label>
        <input
          type="radio"
          value="priceDown"
          checked={selectedOption === "priceDown"}
          onChange={handleRadioChange}
        />
        Price (High to Low)
      </label>

      <label>
        <input
          type="radio"
          value="alphabetical"
          checked={selectedOption === "alphabetical"}
          onChange={handleRadioChange}
        />
        Alphabetical Order
      </label>
    </div>
  );
}
