import { useState } from "react";
import styled from "styled-components";
import CartItemListContainer from "../../molecule/cart-item-list-container/cartItemListcontainer";
import CheckOutModal from "../../atom/check-out-modal/checkOutModal";
import { useCart } from "react-use-cart";

export default function Cart() {
  const [checkOutModalOpen, setCheckOutModalOpen] = useState(false);
  const { items } = useCart();
  return (
    <StyledCartContainer>
      {items.length > 0 ? (
        <CartItemListContainer
          onClick={() => setCheckOutModalOpen(!checkOutModalOpen)}
        />
      ) : (
        <StyledEmptyCart>Your cart is empty...</StyledEmptyCart>
      )}

      <CheckOutModal
        onClick={() => setCheckOutModalOpen(!checkOutModalOpen)}
        checkOutModalOpen={checkOutModalOpen}
      />
    </StyledCartContainer>
  );
}

const StyledCartContainer = styled.div`
  display: grid;
  place-content: center;
  min-height: 40rem;
  @media (min-width: ${({ theme }) => theme.breakpoints.bpNormals}) {
    min-height: 60rem;
  }
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
