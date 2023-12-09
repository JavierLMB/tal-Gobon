import styled from "styled-components";
import { useCart } from "react-use-cart";

export default function CartCounter() {
  const { totalUniqueItems } = useCart();

  return (
    <StyledCartAnimationCointainer>
      <div>{totalUniqueItems ? totalUniqueItems : ""}</div>
    </StyledCartAnimationCointainer>
  );
}

const StyledCartAnimationCointainer = styled.div`
  display: grid;
  place-content: center;
  position: absolute;
  border-radius: 0.2rem;
  width: 2rem;
  height: 2rem;
  pointer-events: none;
  transform: translateY(0.1rem) translateX(0.6rem);
  font-size: ${({ theme }) => theme.fonts.smallFont};
  color: ${({ theme }) => theme.colors.primaryLight};
`;
