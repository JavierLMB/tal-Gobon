import { useState, useEffect } from "react";

export type Product = {
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
};

export function useData() {
  const [storeProducts, setStoreProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(function () {
    const controller = new AbortController();

    async function fetchData() {
      try {
        setIsLoading(true);
        setError("");
        const res = await fetch(`https://fakestoreapi.com/products`, {
          signal: controller.signal,
        });

        if (!res.ok)
          throw new Error("Something went wrong with fetching the data");

        const data = await res.json();

        if (data.Response === "False") throw new Error("Data not found");

        setStoreProducts(data);
        setError("");
      } catch (err: any) {
        if (err.name !== "AbortError") {
          setError(err.message);
        }
      } finally {
        setIsLoading(false);
      }
    }

    fetchData();

    return function () {
      controller.abort();
    };
  }, []);

  return { storeProducts, isLoading, error };
}
