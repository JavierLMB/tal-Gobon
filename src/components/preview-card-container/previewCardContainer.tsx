"use client";
import { useState, useEffect } from "react";
import { useData, Product } from "./useData";
import PreviewCard from "../preview-card/previewCard";

export default function PreviewCardContainer() {
  const { storeProducts, isLoading, error } = useData();
  const [activeProducts, setActiveProducts] = useState<Product[]>([]);

  console.log(activeProducts);

  useEffect(() => {
    if (storeProducts) setActiveProducts(storeProducts);
  }, [storeProducts]);

  return (
    <div>
      {activeProducts.map(({ id, category, image, price, title }) => (
        <PreviewCard
          key={id}
          category={category}
          image={image}
          price={price}
          title={title}
        />
      ))}
    </div>
  );
}
