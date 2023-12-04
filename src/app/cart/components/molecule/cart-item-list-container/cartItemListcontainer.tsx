"use client";
import Link from "next/link";
import styled from "styled-components";
import CartItemList from "../../atom/cart-item-list/cartItemList";
import { useEffect, useState } from "react";
import { useCart } from "react-use-cart";

export default function CartItemListContainer() {
  const [totalCartPrice, setTotalCartPrice] = useState(0);
  const { items, emptyCart } = useCart();

  useEffect(() => {
    const totalPrice = items
      .reduce((acc, item) => acc + (item.itemTotal || 0), 0)
      .toFixed(2);

    setTotalCartPrice(Number(totalPrice));
  }, [items]);

  return (
    <div>
      <StyledCartItemListContainer>
        <StyledCartItem>
          <StyledLink href="/shop">
            <StyledContinueBrowsingCointainer>
              <div>&larr;</div>
              <div>Continue Browsing</div>
            </StyledContinueBrowsingCointainer>
          </StyledLink>

          <div />
          <StyledCartTitleSection>Price</StyledCartTitleSection>
          <StyledCartTitleSection>Total</StyledCartTitleSection>
          <StyledClearButton onClick={emptyCart}>Clear</StyledClearButton>
        </StyledCartItem>
        <CartItemList />
        <StyledSubtotalContainer>
          <div>SUBTOTAL</div>
          <StyledSubtotalPrice>{totalCartPrice}</StyledSubtotalPrice>
        </StyledSubtotalContainer>
        <StyledCheckOutButtonContainer>
          <StyledCheckOutButton>Check Out</StyledCheckOutButton>
        </StyledCheckOutButtonContainer>
      </StyledCartItemListContainer>
    </div>
  );
}

const StyledCartItemListContainer = styled.div`
  margin-bottom: 1rem;
`;

const StyledCartItem = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  align-items: center;
  text-align: center;
  justify-items: center;
  gap: 0.5rem;
  margin: 1rem 1rem 0rem 1rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid ${({ theme }) => theme.colors.primaryLight};
`;

const StyledSubtotalContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 1rem;
  font-size: ${({ theme }) => theme.sizes.defaultFont};
  color: ${({ theme }) => theme.colors.primaryLight};
  margin: 3rem 3rem 0rem 1rem;
`;

const StyledSubtotalPrice = styled.h2`
  font-size: ${({ theme }) => theme.sizes.header1Font};
  color: ${({ theme }) => theme.colors.primaryLight};
`;

const StyledCheckOutButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin-top: 2rem;
  margin-bottom: 3rem;
`;

const StyledCheckOutButton = styled.button`
  padding: 0.5rem;
  text-align: center;
  border-radius: 0.5rem;
  width: 70%;
  border: 1px solid ${({ theme }) => theme.colors.primaryLight};
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25);
  font-size: ${({ theme }) => theme.sizes.defaultFont};
  color: ${({ theme }) => theme.colors.primaryLight};
  background-color: ${({ theme }) => theme.colors.accentGoldLighter};
`;

const StyledContinueBrowsingCointainer = styled.div`
  display: flex;
  align-items: center;
  padding: 0rem 0.5rem;
  color: ${({ theme }) => theme.colors.primaryLight};
`;

const StyledCartTitleSection = styled.h3`
  font-size: ${({ theme }) => theme.sizes.header3Font};
`;

const StyledClearButton = styled.button`
  padding: 0.5rem 1rem;
  border-radius: 0.3rem;
  font-size: ${({ theme }) => theme.sizes.smallFont};
  color: ${({ theme }) => theme.colors.defaultFont};
  background: linear-gradient(
    45deg,
    ${({ theme }) => theme.colors.primaryDark},
    ${({ theme }) => theme.colors.primaryLight}
  );
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;
