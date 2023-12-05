"use client";
import dynamic from "next/dynamic";
import styled from "styled-components";
import { useCart } from "react-use-cart";

const CartCounter = () => {
  const { totalUniqueItems } = useCart();

  return (
    <StyledCartAnimationCointainer>
      <div>{totalUniqueItems ? totalUniqueItems : ""}</div>
    </StyledCartAnimationCointainer>
  );
};

const StyledCartAnimationCointainer = styled.div`
  display: grid;
  place-content: center;
  position: absolute;
  border-radius: 0.2rem;
  width: 2rem;
  height: 2rem;
  pointer-events: none;
  transform: translateY(0.1rem) translateX(0.6rem);
  font-size: ${({ theme }) => theme.sizes.smallFont};
  color: ${({ theme }) => theme.colors.primaryLight};
`;

export default dynamic(() => Promise.resolve(CartCounter), { ssr: false });
