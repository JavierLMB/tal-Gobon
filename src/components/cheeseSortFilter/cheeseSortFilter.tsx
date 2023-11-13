import styled from "styled-components";
import { useState } from "react";

const radioOptions = [
  { value: "priceUp", label: "Price (Low to High)" },
  { value: "priceDown", label: "Price (High to Low)" },
  { value: "alphabetical", label: "Alphabetical Order" },
];

export type RadioButtonValue = "priceUp" | "priceDown" | "alphabetical" | "";

type SortComponentProps = {
  selectedOption: RadioButtonValue;
  onSelectedOption: (option: RadioButtonValue) => void;
};

export default function SortComponent({
  selectedOption,
  onSelectedOption,
}: SortComponentProps) {
  const handleRadioChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value as RadioButtonValue;
    onSelectedOption(value);
  };

  return (
    <div>
      {radioOptions.map((option) => (
        <label key={option.value}>
          <input
            type="radio"
            value={option.value}
            checked={selectedOption === option.value}
            onChange={handleRadioChange}
          />
          {option.label}
        </label>
      ))}
    </div>
  );
}
