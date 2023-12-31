import React, { useState } from "react";
import styled, { css } from "styled-components";
import { weightOptions } from "./useCheeseWeightOptions";
import { useCart } from "react-use-cart";
import AddedToCartModal from "../../atom/added-to-cart-modal/addedToCartModal";
import { Alkatra } from "next/font/google";

const alkatra = Alkatra({ subsets: ["latin"] });

type CheeseWeightPortionPriceProps = {
  cheeseObject?: {
    id?: number;
    name?: string;
    pricePerKg?: number;
    imagesSmall?: {
      image1Small: string;
    };
  };
};

export default function CheeseWeightPortionPrice({
  cheeseObject,
}: CheeseWeightPortionPriceProps) {
  const [selectedWeight, setSelectedWeight] = useState("");
  const [portionQuantity, setPortionQuantity] = useState(1);
  const [weightError, setWeightError] = useState("");
  const [addedModalVisible, setAddedModalVisible] = useState(false);
  const { addItem } = useCart();

  const updateTotalPrice = (
    weight: string,
    portion: number,
    cart?: boolean
  ) => {
    const weightInGrams = weight ? parseFloat(weight) / 1000 : 0;
    const priceInKg = cheeseObject?.pricePerKg ?? 0;

    if (cart) return Math.floor(priceInKg * weightInGrams * 100) / 100;
    return Math.floor(priceInKg * weightInGrams * portion * 100) / 100;
  };

  function handleCartButton() {
    if (!selectedWeight) return setWeightError("Please select weight");
    if (selectedWeight) setWeightError("");
    setAddedModalVisible(true);
    setTimeout(() => {
      setAddedModalVisible(false);
    }, 3000);

    const newProduct: any = {
      id: crypto.randomUUID(),
      name: cheeseObject?.name,
      price: updateTotalPrice(selectedWeight, portionQuantity, true),
      weight: selectedWeight,
      quantity: portionQuantity,
      image: cheeseObject?.imagesSmall?.image1Small,
    };

    addItem(newProduct, portionQuantity);
  }

  return (
    <StyledWeightMainContainer>
      <StyledWeightContainer>
        {weightError && <StyledWeightError>{weightError}</StyledWeightError>}
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
              {index + 1 > 1 ? `${index + 1} pcs` : `${index + 1} pc`}
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
      <StyledAddToCartButton onClick={handleCartButton}>
        Add To Cart
      </StyledAddToCartButton>
      <AddedToCartModal addedModalVisible={addedModalVisible} />
    </StyledWeightMainContainer>
  );
}

const StyledWeightMainContainer = styled.div`
  padding: 0rem 2rem;
  margin: 0rem 2rem;

  border-bottom: 1px solid ${({ theme }) => theme.colors.primaryLight};
  @media (min-width: ${({ theme }) => theme.breakpoints.bpNormals}) {
    border: none;
    box-shadow: ${({ theme }) => theme.shadows.v3Shadow};
    height: 22rem;
    width: 45rem;
  }
`;

const StyledWeightContainer = styled.div`
  display: flex;
  padding: 2rem 0rem;
  justify-content: space-between;
  position: relative;
`;

const StyledWeightError = styled.div`
  font-size: inherit;
  position: absolute;
  top: 0.5rem;
  @media (min-width: ${({ theme }) => theme.breakpoints.bpNormals}) {
    font-size: ${({ theme }) => theme.fonts.defaultFont};
    top: 0rem;
  }
`;

const StyledSelect = styled.select`
  font-weight: 400;
  padding: 0.5rem;
  border-radius: 4px;
  font-family: ${alkatra.style.fontFamily};
  box-shadow: ${({ theme }) => theme.shadows.v3Shadow};
  font-size: ${({ theme }) => theme.fonts.defaultFont};
  color: ${({ theme }) => theme.colors.primaryLight};
  border: 1px solid ${({ theme }) => theme.colors.primaryLight};
  background-color: ${({ theme }) => theme.colors.accentGoldLighter};
  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.primaryDark};
  }
  @media (min-width: ${({ theme }) => theme.breakpoints.bpNormals}) {
    font-size: ${({ theme }) => theme.fonts.header2Font};
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
  font-size: ${({ theme }) => theme.fonts.header3Font};

  ${({ $selectedWeight }) => css`
    padding: ${$selectedWeight ? "1rem 0rem 2rem 0rem" : "0rem"};
    max-height: ${$selectedWeight ? "10rem" : "0"};
    overflow: ${$selectedWeight ? "visible" : "hidden"};
  `};

  @media (min-width: ${({ theme }) => theme.breakpoints.bpNormals}) {
    font-size: ${({ theme }) => theme.fonts.header2Font};
  }
`;

const StyledTotalPrice = styled.h2`
  color: ${({ theme }) => theme.colors.primaryLight};
`;

const StyledPriceAmount = styled.h2`
  color: ${({ theme }) => theme.colors.primaryLight};
`;

const StyledAddToCartButton = styled.button`
  margin-bottom: 2rem;
  padding: 0.2rem;
  text-align: center;
  border-radius: 0.5rem;
  width: 100%;
  transition: all 0.5s cubic-bezier(0.01, -0.02, 0.51, 1.6);
  border: 1px solid ${({ theme }) => theme.colors.primaryLight};
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25);
  font-size: ${({ theme }) => theme.fonts.defaultFont};
  color: ${({ theme }) => theme.colors.primaryLight};
  background-color: ${({ theme }) => theme.colors.accentGoldLighter};
  @media (min-width: ${({ theme }) => theme.breakpoints.bpNormals}) {
    font-size: ${({ theme }) => theme.fonts.header3Font};
  }

  &:hover {
    background-color: ${({ theme }) => theme.colors.accentGoldLight};
    box-shadow: ${({ theme }) => theme.shadows.v2Shadow};
  }

  &:active {
    transform: translateY(3px);
    box-shadow: none;
  }
`;
