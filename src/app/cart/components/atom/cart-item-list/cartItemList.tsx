import styled, { css } from "styled-components";
import { IoTrashBin } from "react-icons/io5";
import { useCart } from "react-use-cart";
import Image from "next/image";
import { useState } from "react";

export default function CartitemList() {
  const { items, updateItemQuantity, removeItem } = useCart();
  const [clickedItemId, setClickedItemId] = useState("");

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

  function handleRemoveItem(id: string) {
    setClickedItemId(id);
    setTimeout(() => {
      removeItem(id);
    }, 1000);
  }

  return (
    <>
      {items.map((item) => (
        <StyledCartItem
          key={item.id}
          $itemId={item.id}
          $clickedItemId={clickedItemId}
        >
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
                <StyledQuantityManagers
                  onClick={() =>
                    updateItemQuantity(
                      item.id,
                      handleQuantity(item.quantity, "subtract")
                    )
                  }
                >
                  -
                </StyledQuantityManagers>
                {item.quantity}
                <StyledQuantityManagers
                  onClick={() =>
                    updateItemQuantity(
                      item.id,
                      handleQuantity(item.quantity, "add")
                    )
                  }
                >
                  +
                </StyledQuantityManagers>
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
            <StyledBinIcon onClick={() => handleRemoveItem(item.id)} />
          </div>
        </StyledCartItem>
      ))}
    </>
  );
}

const StyledCartItem = styled.div<{ $itemId: string; $clickedItemId: string }>`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  align-items: center;
  text-align: center;
  justify-items: center;
  margin: 1rem 1rem 0rem 1rem;
  padding-bottom: 1rem;
  transition: all 0.5s cubic-bezier(0.01, -0.02, 0.51, 1.6);
  border-bottom: 1px solid ${({ theme }) => theme.colors.primaryLight};

  @media (min-width: ${({ theme }) => theme.breakpoints.bpNormals}) {
    padding: 1rem 0rem 2rem 0rem;
    gap: 15rem;
  }

  ${({ $itemId, $clickedItemId }) => css`
    transform: translateX(${$itemId === $clickedItemId ? "-10rem" : "0rem"});
    opacity: ${$itemId === $clickedItemId ? "0" : "1"};
  `};
`;

const StyledImage = styled(Image)`
  display: block;
  width: 8rem;
  height: 8rem;
  object-fit: cover;
  border-radius: 0.5rem;
  box-shadow: ${({ theme }) => theme.shadows.v3Shadow};
  @media (min-width: ${({ theme }) => theme.breakpoints.bpNormals}) {
    width: 15rem;
    height: 15rem;
    border-radius: 1rem;
  }
`;

const StyledPricePc = styled.div`
  line-height: 1;
  margin-top: 0.5rem;
  @media (min-width: ${({ theme }) => theme.breakpoints.bpNormals}) {
    font-size: ${({ theme }) => theme.fonts.defaultFont};
  }
`;

const StyledQuantityContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 0.3rem;
  margin: 0 auto;
  gap: 1rem;
  width: 7rem;
  font-size: ${({ theme }) => theme.fonts.header3Font};
  border: 1px solid ${({ theme }) => theme.colors.primaryLight};
  @media (min-width: ${({ theme }) => theme.breakpoints.bpNormals}) {
    font-size: ${({ theme }) => theme.fonts.header2Font};
    border-radius: 0.5rem;
  }
`;

const StyledQuantityManagers = styled.div`
  cursor: pointer;
  &:active {
    transform: translateY(1px);
  }
`;

const StyledBinIcon = styled(IoTrashBin)`
  display: block;
  padding: 0.8rem;
  font-size: 4.5rem;
  border-radius: 50%;
  cursor: pointer;
  box-shadow: ${({ theme }) => theme.shadows.v1Shadow};
  color: ${({ theme }) => theme.colors.defaultFont};
  background: linear-gradient(
    45deg,
    ${({ theme }) => theme.colors.primaryDark},
    ${({ theme }) => theme.colors.primaryLight}
  );
  @media (min-width: ${({ theme }) => theme.breakpoints.bpNormals}) {
    font-size: 7rem;
    padding: 1rem;
  }

  &:hover {
    background: ${({ theme }) => theme.colors.primaryDark};
    box-shadow: ${({ theme }) => theme.shadows.v2Shadow};
  }

  &:active {
    transform: translateY(3px);
    background: ${({ theme }) => theme.colors.primaryLight};
    box-shadow: none;
  }
`;

const StyledProductCartInfo = styled.div`
  display: grid;
  place-content: center;
  border-radius: 0.3rem;
  line-height: 1.2;
  padding: 0.5rem 1rem;
  margin-bottom: 0.5rem;
  box-shadow: ${({ theme }) => theme.shadows.v1Shadow};
  font-size: ${({ theme }) => theme.fonts.smallFont};
  color: ${({ theme }) => theme.colors.defaultFont};
  background: linear-gradient(
    45deg,
    ${({ theme }) => theme.colors.primaryDark},
    ${({ theme }) => theme.colors.primaryLight}
  );
  @media (min-width: ${({ theme }) => theme.breakpoints.bpNormals}) {
    font-size: ${({ theme }) => theme.fonts.defaultFont};
    border-radius: 0.5rem;
  }
`;

const StyledProductTotal = styled.div`
  display: grid;
  place-content: center;
  border-radius: 0.3rem;
  line-height: 1;
  font-size: ${({ theme }) => theme.fonts.header3Font};
  color: ${({ theme }) => theme.colors.primaryLight};
  @media (min-width: ${({ theme }) => theme.breakpoints.bpNormals}) {
    font-size: ${({ theme }) => theme.fonts.header1Font};
    border-radius: 0.5rem;
  }
`;
// import styled from "styled-components";
// import { IoTrashBin } from "react-icons/io5";
// import { useCart } from "react-use-cart";
// import Image from "next/image";

// export default function CartitemList() {
//   const { items, updateItemQuantity, removeItem } = useCart();

//   function handleQuantity(quantity: any, calc: any) {
//     if (calc === "subtract") {
//       if (quantity === 1) return quantity;
//       return --quantity;
//     }
//     if (calc === "add") {
//       if (quantity === 20) return quantity;
//       return ++quantity;
//     }
//   }

//   return (
//     <>
//       {items.map((item) => (
//         <StyledCartItem key={item.id}>
//           <div>
//             <StyledImage
//               src={item.image}
//               alt={item.name}
//               width={570}
//               height={660}
//               priority
//             />
//           </div>
//           <div>
//             <StyledProductCartInfo>
//               <div>{item.name}</div>
//               <div>{item.weight}g</div>
//             </StyledProductCartInfo>
//             <div>
//               <StyledQuantityContainer>
//                 <StyledQuantityManagers
//                   onClick={() =>
//                     updateItemQuantity(
//                       item.id,
//                       handleQuantity(item.quantity, "subtract")
//                     )
//                   }
//                 >
//                   -
//                 </StyledQuantityManagers>
//                 {item.quantity}
//                 <StyledQuantityManagers
//                   onClick={() =>
//                     updateItemQuantity(
//                       item.id,
//                       handleQuantity(item.quantity, "add")
//                     )
//                   }
//                 >
//                   +
//                 </StyledQuantityManagers>
//               </StyledQuantityContainer>
//             </div>
//           </div>
//           <div>
//             <StyledProductTotal>
//               € {parseFloat((item.itemTotal || 1).toFixed(2))}
//             </StyledProductTotal>
//             <StyledPricePc>(€ {item.price} / pc)</StyledPricePc>
//           </div>

//           <div>
//             <StyledBinIcon onClick={() => removeItem(item.id)} />
//           </div>
//         </StyledCartItem>
//       ))}
//     </>
//   );
// }

// const StyledCartItem = styled.div`
//   display: grid;
//   grid-template-columns: repeat(4, 1fr);
//   align-items: center;
//   text-align: center;
//   justify-items: center;
//   margin: 1rem 1rem 0rem 1rem;
//   padding-bottom: 1rem;
//   border-bottom: 1px solid ${({ theme }) => theme.colors.primaryLight};

//   @media (min-width: ${({ theme }) => theme.breakpoints.bpNormals}) {
//     padding: 1rem 0rem 2rem 0rem;
//   }
// `;

// const StyledImage = styled(Image)`
//   display: block;
//   width: 8rem;
//   height: 8rem;
//   object-fit: cover;
//   border-radius: 0.5rem;
//   box-shadow: ${({ theme }) => theme.shadows.v3Shadow};
//   @media (min-width: ${({ theme }) => theme.breakpoints.bpNormals}) {
//     width: 15rem;
//     height: 15rem;
//     border-radius: 1rem;
//   }
// `;

// const StyledPricePc = styled.div`
//   line-height: 1;
//   margin-top: 0.5rem;
//   @media (min-width: ${({ theme }) => theme.breakpoints.bpNormals}) {
//     font-size: ${({ theme }) => theme.fonts.defaultFont};
//   }
// `;

// const StyledQuantityContainer = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   border-radius: 0.3rem;
//   margin: 0 auto;
//   gap: 1rem;
//   width: 7rem;
//   font-size: ${({ theme }) => theme.fonts.header3Font};
//   border: 1px solid ${({ theme }) => theme.colors.primaryLight};
//   @media (min-width: ${({ theme }) => theme.breakpoints.bpNormals}) {
//     font-size: ${({ theme }) => theme.fonts.header2Font};
//     border-radius: 0.5rem;
//   }
// `;

// const StyledQuantityManagers = styled.div`
//   cursor: pointer;
//   &:active {
//     transform: translateY(1px);
//   }
// `;

// const StyledBinIcon = styled(IoTrashBin)`
//   display: block;
//   padding: 0.8rem;
//   font-size: 4.5rem;
//   border-radius: 50%;
//   cursor: pointer;
//   box-shadow: ${({ theme }) => theme.shadows.v1Shadow};
//   color: ${({ theme }) => theme.colors.defaultFont};
//   background: linear-gradient(
//     45deg,
//     ${({ theme }) => theme.colors.primaryDark},
//     ${({ theme }) => theme.colors.primaryLight}
//   );
//   @media (min-width: ${({ theme }) => theme.breakpoints.bpNormals}) {
//     font-size: 7rem;
//     padding: 1rem;
//   }

//   &:hover {
//     background: ${({ theme }) => theme.colors.primaryDark};
//     box-shadow: ${({ theme }) => theme.shadows.v2Shadow};
//   }

//   &:active {
//     transform: translateY(3px);
//     background: ${({ theme }) => theme.colors.primaryLight};
//     box-shadow: none;
//   }
// `;

// const StyledProductCartInfo = styled.div`
//   display: grid;
//   place-content: center;
//   border-radius: 0.3rem;
//   line-height: 1.2;
//   padding: 0.5rem 1rem;
//   margin-bottom: 0.5rem;
//   box-shadow: ${({ theme }) => theme.shadows.v1Shadow};
//   font-size: ${({ theme }) => theme.fonts.smallFont};
//   color: ${({ theme }) => theme.colors.defaultFont};
//   background: linear-gradient(
//     45deg,
//     ${({ theme }) => theme.colors.primaryDark},
//     ${({ theme }) => theme.colors.primaryLight}
//   );
//   @media (min-width: ${({ theme }) => theme.breakpoints.bpNormals}) {
//     font-size: ${({ theme }) => theme.fonts.defaultFont};
//     border-radius: 0.5rem;
//   }
// `;

// const StyledProductTotal = styled.div`
//   display: grid;
//   place-content: center;
//   border-radius: 0.3rem;
//   line-height: 1;
//   font-size: ${({ theme }) => theme.fonts.header3Font};
//   color: ${({ theme }) => theme.colors.primaryLight};
//   @media (min-width: ${({ theme }) => theme.breakpoints.bpNormals}) {
//     font-size: ${({ theme }) => theme.fonts.header1Font};
//     border-radius: 0.5rem;
//   }
// `;
