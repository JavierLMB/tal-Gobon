"use client";
import styled from "styled-components";
import { useCart } from "react-use-cart";
import dynamic from "next/dynamic";

const CartitemList = () => {
  const { items } = useCart();

  console.log(items);

  return (
    <StyledCartItemListContainer>
      {items.map((item) => (
        <StyledCartItem key={item.id}>
          <div>
            <div>{item.name}</div>
            <div>{item.weight}</div>
          </div>
          <div>€ {item.price}</div>
          <div>{item.quantity}</div>
          <div>€ {item.itemTotal}</div>
        </StyledCartItem>
      ))}
    </StyledCartItemListContainer>
  );
};

export default dynamic(() => Promise.resolve(CartitemList), { ssr: false });

const StyledCartItemListContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
`;
const StyledCartItem = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 1rem 1rem 0rem 1rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid ${({ theme }) => theme.colors.primaryLight};
`;
