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
  font-size: ${({ theme }) => theme.sizes.smallFont};
  border-radius: 0.2rem;
  color: ${({ theme }) => theme.colors.primaryLight};
  width: 2rem;
  height: 2rem;
  transform: translateX(0.6rem);
`;
