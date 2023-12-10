import { useState, useEffect } from "react";
import styled from "styled-components";
import CartItemListContainer from "../../molecule/cart-item-list-container/cartItemListcontainer";
import CheckOutModal from "../../atom/check-out-modal/checkOutModal";
import CartLoader from "./cartLoader";

export default function Cart() {
  const [checkOutModalOpen, setCheckOutModalOpen] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);

        await new Promise((resolve) => setTimeout(resolve, 1000));

        setLoading(false);
      } catch (error) {}
    };

    fetchData();
  }, []);

  return (
    <StyledCartContainer>
      {loading ? (
        <CartLoader />
      ) : (
        <CartItemListContainer
          onClick={() => setCheckOutModalOpen(!checkOutModalOpen)}
        />
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
// import { useState, useEffect } from "react";
// import styled from "styled-components";
// import CartItemListContainer from "../../molecule/cart-item-list-container/cartItemListcontainer";
// import CheckOutModal from "../../atom/check-out-modal/checkOutModal";

// export default function Cart() {
//   const [checkOutModalOpen, setCheckOutModalOpen] = useState(false);

//   return (
//     <StyledCartContainer>
//       <CartItemListContainer
//         onClick={() => setCheckOutModalOpen(!checkOutModalOpen)}
//       />
//       <CheckOutModal
//         onClick={() => setCheckOutModalOpen(!checkOutModalOpen)}
//         checkOutModalOpen={checkOutModalOpen}
//       />
//     </StyledCartContainer>
//   );
// }

// const StyledCartContainer = styled.div`
//   display: grid;
//   place-content: center;
//   min-height: 40rem;
//   @media (min-width: ${({ theme }) => theme.breakpoints.bpNormals}) {
//     min-height: 60rem;
//   }
// `;
