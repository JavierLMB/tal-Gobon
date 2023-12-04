import { useState } from "react";
import CartItemListContainer from "../../molecule/cart-item-list-container/cartItemListcontainer";
import CheckOutModal from "../../atom/check-out-modal/checkOutModal";

export default function Cart() {
  const [checkOutModalOpen, setCheckOutModalOpen] = useState(false);
  return (
    <div>
      <CartItemListContainer
        onClick={() => setCheckOutModalOpen(!checkOutModalOpen)}
      />
      <CheckOutModal
        onClick={() => setCheckOutModalOpen(!checkOutModalOpen)}
        checkOutModalOpen={checkOutModalOpen}
      />
    </div>
  );
}
