"use client";
import React from "react";
import { useData } from "./useData";

type StoreData = {
  storeProducts: {
    category: string;
    description: string;
    id: number;
    image: string;
    price: number;
    rating: {
      rate: number;
      count: number;
    };
    title: string;
  }[];
  isLoading: boolean;
  error: string | null;
};

type PreviewCardProps = {
  category: string;
  description: string;
  image: string;
  price: number;
  rating: {
    rate: number;
    count: number;
  };
  title: string;
};

export default function PreviewCard({
  category,
  description,
  image,
  price,
  rating,
  title,
}: PreviewCardProps) {
  const { storeProducts, isLoading, error }: StoreData = useData();
  console.log(storeProducts);

  return <div>previewCard</div>;
}
