"use client";
import styled from "styled-components";
import { useCart } from "react-use-cart";
import dynamic from "next/dynamic";
import Image from "next/image";

const CartitemList = () => {
  const { items } = useCart();

  console.log(items);

  return (
    <StyledCartItemListContainer>
      <StyledCartItem>
        <div>Continue Browsing</div>
        <div>Name?</div>
        <div>Price</div>
        <div>Total</div>
        <div>Bin?</div>
      </StyledCartItem>
      {items.map((item) => (
        <StyledCartItem key={item.id}>
          <div>
            <StyledImage
              src={item.image}
              alt={item.name}
              width={570}
              height={660}
              priority
            />
          </div>
          <div>
            <div>{item.name}</div>
            <div>{item.weight}g</div>
          </div>
          <div>
            <div>€ {item.price}</div>
            <div>{item.quantity}</div>
          </div>
          <div>€ {item.itemTotal}</div>
          <div>Bin</div>
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
  align-items: center;
  margin: 1rem 1rem 0rem 1rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid ${({ theme }) => theme.colors.primaryLight};
`;

const StyledImage = styled(Image)`
  display: block;
  width: 5rem;
  height: 5rem;
  object-fit: cover;
  border-radius: 0.5rem;
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25);
`;
