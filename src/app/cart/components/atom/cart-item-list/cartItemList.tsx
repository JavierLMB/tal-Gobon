"use client";
import styled from "styled-components";
import { IoTrashBin } from "react-icons/io5";
import { useCart } from "react-use-cart";
import dynamic from "next/dynamic";
import Image from "next/image";

const CartitemList = () => {
  const { items, updateItemQuantity, removeItem } = useCart();

  console.log(items);

  function handleQuantity(quantity: any, calc: any) {
    if (calc === "subtract") {
      if (quantity === 1) return quantity;
      return --quantity;
    }
    if (calc === "add") {
      if (quantity === 20) return quantity;
      return ++quantity;
    }
  }

  return (
    <>
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
            <StyledProductCartInfo>
              <div>{item.name}</div>
              <div>{item.weight}g</div>
            </StyledProductCartInfo>
            <div>
              <StyledQuantityContainer>
                <div
                  onClick={() =>
                    updateItemQuantity(
                      item.id,
                      handleQuantity(item.quantity, "subtract")
                    )
                  }
                >
                  -
                </div>
                {item.quantity}
                <div
                  onClick={() =>
                    updateItemQuantity(
                      item.id,
                      handleQuantity(item.quantity, "add")
                    )
                  }
                >
                  +
                </div>
              </StyledQuantityContainer>
            </div>
          </div>
          <div>
            <StyledProductTotal>
              € {parseFloat((item.itemTotal || 1).toFixed(2))}
            </StyledProductTotal>
            <StyledPricePc>(€ {item.price} / pc)</StyledPricePc>
          </div>

          <div>
            <StyledBinIcon onClick={() => removeItem(item.id)} />
          </div>
        </StyledCartItem>
      ))}
    </>
  );
};

export default dynamic(() => Promise.resolve(CartitemList), { ssr: false });

const StyledCartItem = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  align-items: center;
  text-align: center;
  justify-items: center;
  margin: 1rem 1rem 0rem 1rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid ${({ theme }) => theme.colors.primaryLight};
`;

const StyledImage = styled(Image)`
  display: block;
  width: 8rem;
  height: 8rem;
  object-fit: cover;
  border-radius: 0.5rem;
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25);
`;

const StyledPricePc = styled.div`
  line-height: 1;
  margin-top: 0.5rem;
`;

const StyledQuantityContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 0.3rem;
  margin: 0 auto;
  gap: 1rem;
  width: 7rem;
  font-size: ${({ theme }) => theme.sizes.header3Font};
  border: 1px solid ${({ theme }) => theme.colors.primaryLight};
`;

const StyledBinIcon = styled(IoTrashBin)`
  display: block;
  padding: 0.8rem;
  font-size: 4.5rem;
  border-radius: 50%;
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25);
  color: ${({ theme }) => theme.colors.defaultFont};
  background: linear-gradient(
    45deg,
    ${({ theme }) => theme.colors.primaryDark},
    ${({ theme }) => theme.colors.primaryLight}
  );
`;

const StyledProductCartInfo = styled.div`
  display: grid;
  place-content: center;
  border-radius: 0.3rem;
  line-height: 1.2;
  padding: 0.5rem 1rem;
  margin-bottom: 0.5rem;
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25);
  font-size: ${({ theme }) => theme.sizes.smallFont};
  color: ${({ theme }) => theme.colors.defaultFont};
  background: linear-gradient(
    45deg,
    ${({ theme }) => theme.colors.primaryDark},
    ${({ theme }) => theme.colors.primaryLight}
  );
`;

const StyledProductTotal = styled.div`
  display: grid;
  place-content: center;
  border-radius: 0.3rem;
  line-height: 1;
  font-size: ${({ theme }) => theme.sizes.header3Font};
  color: ${({ theme }) => theme.colors.primaryLight};
`;
