import React, { useState } from "react";
import styled, { css } from "styled-components";
import { weightOptions } from "./useCheeseWeightOptions";

type CheeseWeightPortionPriceProps = {
  cheeseObject?: {
    pricePerKg: number;
  };
};

export default function CheeseWeightPortionPrice({
  cheeseObject,
}: CheeseWeightPortionPriceProps) {
  const [selectedWeight, setSelectedWeight] = useState("");
  const [portionQuantity, setPortionQuantity] = useState(1);

  const updateTotalPrice = (weight: string, portion: number) => {
    const weightInGrams = weight ? parseFloat(weight) / 1000 : 0;
    const priceInKg = cheeseObject?.pricePerKg ?? 0;
    return Math.floor(priceInKg * weightInGrams * portion * 100) / 100;
  };

  return (
    <StyledWeightMainContainer>
      <StyledWeightContainer>
        <StyledSelect
          value={selectedWeight}
          onChange={(e) => setSelectedWeight(e.target.value)}
        >
          <StyledOption value="">Select Weight</StyledOption>
          {weightOptions.weightOptions.map((option) => (
            <StyledOption key={option.valueLabel} value={option.valueLabel}>
              {option.valueLabel} grams
            </StyledOption>
          ))}
        </StyledSelect>

        <StyledSelect
          id="portionQuantity"
          value={portionQuantity}
          onChange={(e) => setPortionQuantity(parseInt(e.target.value))}
        >
          {Array.from({ length: 5 }, (_, index) => (
            <StyledOption key={index + 1} value={index + 1}>
              {index + 1}
            </StyledOption>
          ))}
        </StyledSelect>
      </StyledWeightContainer>

      <StyledPriceContainer $selectedWeight={selectedWeight}>
        <StyledTotalPrice>Total Price: </StyledTotalPrice>
        <StyledPriceAmount>
          € {updateTotalPrice(selectedWeight, portionQuantity)}
        </StyledPriceAmount>
      </StyledPriceContainer>
    </StyledWeightMainContainer>
  );
}

const StyledWeightMainContainer = styled.div`
  padding: 0rem 2rem;
  margin: 0rem 2rem;
  border-bottom: 1px solid ${({ theme }) => theme.colors.primaryLight};
`;

const StyledWeightContainer = styled.div`
  display: flex;
  padding: 2rem 0rem;
  justify-content: space-between;
`;

const StyledSelect = styled.select`
  font-weight: 400;
  padding: 0.5rem;
  border-radius: 4px;
  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.25);
  font-size: ${({ theme }) => theme.sizes.defaultFont};
  color: ${({ theme }) => theme.colors.primaryLight};
  border: 1px solid ${({ theme }) => theme.colors.primaryLight};
  background-color: ${({ theme }) => theme.colors.accentGoldLighter};
  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.primaryDark};
  }
`;

const StyledOption = styled.option`
  color: ${({ theme }) => theme.colors.primaryLight};
`;

const StyledPriceContainer = styled.div<{ $selectedWeight: string }>`
  display: flex;
  justify-content: space-between;
  line-height: 1;
  transition: all 0.5s ease;
  color: ${({ theme }) => theme.colors.primaryLight};
  font-size: ${({ theme }) => theme.sizes.header3Font};
  ${({ $selectedWeight }) => css`
    padding: ${$selectedWeight ? "1rem 0rem 2rem 0rem" : "0rem"};
    max-height: ${$selectedWeight ? "10rem" : "0"};
    overflow: ${$selectedWeight ? "visible" : "hidden"};
  `};
`;

const StyledTotalPrice = styled.h2`
  color: ${({ theme }) => theme.colors.primaryLight};
`;

const StyledPriceAmount = styled.h2`
  color: ${({ theme }) => theme.colors.primaryLight};
`;
