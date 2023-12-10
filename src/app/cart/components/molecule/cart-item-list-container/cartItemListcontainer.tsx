import Link from "next/link";
import styled from "styled-components";
import CartItemList from "../../atom/cart-item-list/cartItemList";
import { useEffect, useState } from "react";
import { useCart } from "react-use-cart";
import dynamic from "next/dynamic";

type CartItemListContainerProps = {
  onClick: () => void;
};

function CartItemListContainer({ onClick }: CartItemListContainerProps) {
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
      {items.length > 0 ? (
        <StyledCartItemListContainer>
          <StyledCartItem>
            <StyledLink href="/shop">
              <StyledContinueBrowsingCointainer>
                <StyledContinueBrowsingArrrow>
                  &larr;
                </StyledContinueBrowsingArrrow>
                <div>Continue Browsing</div>
              </StyledContinueBrowsingCointainer>
            </StyledLink>
            <div />
            <StyledCartTitleSection>Total</StyledCartTitleSection>
            <StyledClearButton onClick={emptyCart}>Clear</StyledClearButton>
          </StyledCartItem>
          <CartItemList />
          <StyledSubtotalContainer>
            <div>SUBTOTAL</div>
            <StyledSubtotalPrice>{totalCartPrice}</StyledSubtotalPrice>
          </StyledSubtotalContainer>
          <StyledCheckOutButtonContainer>
            <StyledCheckOutButton onClick={onClick}>
              Check Out
            </StyledCheckOutButton>
          </StyledCheckOutButtonContainer>
        </StyledCartItemListContainer>
      ) : (
        <StyledEmptyCart>Your cart is empty...</StyledEmptyCart>
      )}
    </div>
  );
}

export default dynamic(() => Promise.resolve(CartItemListContainer), {
  ssr: false,
});

const StyledCartItemListContainer = styled.div`
  max-width: 170rem;
  margin: 0 auto;
  margin-bottom: 1rem;
  @media (min-width: ${({ theme }) => theme.breakpoints.bpNormals}) {
    padding: 2rem 0rem;
  }
`;

const StyledCartItem = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
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
  font-size: ${({ theme }) => theme.fonts.defaultFont};
  color: ${({ theme }) => theme.colors.primaryLight};
  margin: 3rem 3rem 0rem 1rem;
  @media (min-width: ${({ theme }) => theme.breakpoints.bpNormals}) {
    font-size: ${({ theme }) => theme.fonts.header3Font};
  }
`;

const StyledSubtotalPrice = styled.h2`
  font-size: ${({ theme }) => theme.fonts.header1Font};
  color: ${({ theme }) => theme.colors.primaryLight};
  @media (min-width: ${({ theme }) => theme.breakpoints.bpNormals}) {
    font-size: 5rem;
  }
`;

const StyledCheckOutButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin-top: 2rem;
  margin-bottom: 3rem;
  @media (min-width: ${({ theme }) => theme.breakpoints.bpNormals}) {
    justify-content: flex-end;
  }
`;

const StyledCheckOutButton = styled.button`
  padding: 0.5rem;
  text-align: center;
  border-radius: 0.5rem;
  width: 70%;
  border: 1px solid ${({ theme }) => theme.colors.primaryLight};
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25);
  font-size: ${({ theme }) => theme.fonts.defaultFont};
  color: ${({ theme }) => theme.colors.primaryLight};
  background-color: ${({ theme }) => theme.colors.accentGoldLighter};
  @media (min-width: ${({ theme }) => theme.breakpoints.bpNormals}) {
    font-size: ${({ theme }) => theme.fonts.header3Font};
    width: 20%;
  }
`;

const StyledContinueBrowsingCointainer = styled.div`
  display: flex;
  align-items: center;
  padding: 0rem 0.5rem;
  color: ${({ theme }) => theme.colors.primaryLight};
  font-size: ${({ theme }) => theme.fonts.smallFont};
  line-height: 1.2;
  @media (min-width: ${({ theme }) => theme.breakpoints.bpNormals}) {
    font-size: ${({ theme }) => theme.fonts.defaultFont};
    gap: 0.5rem;
  }
`;

const StyledContinueBrowsingArrrow = styled.div`
  font-size: ${({ theme }) => theme.fonts.header3Font};
  @media (min-width: ${({ theme }) => theme.breakpoints.bpNormals}) {
    font-size: ${({ theme }) => theme.fonts.header2Font};
  }
`;

const StyledCartTitleSection = styled.h3`
  font-size: ${({ theme }) => theme.fonts.header3Font};
  @media (min-width: ${({ theme }) => theme.breakpoints.bpNormals}) {
    font-size: ${({ theme }) => theme.fonts.header2Font};
  }
`;

const StyledClearButton = styled.button`
  padding: 0.5rem 1rem;
  border-radius: 0.3rem;
  font-size: ${({ theme }) => theme.fonts.smallFont};
  color: ${({ theme }) => theme.colors.defaultFont};
  background: linear-gradient(
    45deg,
    ${({ theme }) => theme.colors.primaryDark},
    ${({ theme }) => theme.colors.primaryLight}
  );
  @media (min-width: ${({ theme }) => theme.breakpoints.bpNormals}) {
    font-size: ${({ theme }) => theme.fonts.defaultFont};
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;

const StyledEmptyCart = styled.div`
  display: inline-block;
  padding: 3rem 5rem;
  border-radius: 0.5rem;
  font-size: ${({ theme }) => theme.fonts.header2Font};
  color: ${({ theme }) => theme.colors.accentGoldLighter};
  background: linear-gradient(
    45deg,
    ${({ theme }) => theme.colors.primaryDark},
    ${({ theme }) => theme.colors.primaryLight}
  );
  @media (min-width: ${({ theme }) => theme.breakpoints.bpNormals}) {
    font-size: ${({ theme }) => theme.fonts.header1Font};
    border-radius: 1rem;
  }
`;
