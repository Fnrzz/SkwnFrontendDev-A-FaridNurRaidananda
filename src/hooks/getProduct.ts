import { useState, useEffect } from "react";

export interface Product {
  id: string;
  type: string;
  name: string;
  description: string;
  img_link: string;
  currency: string;
  price: number;
}

export const useGetProducts = () => {
  const [data, setData] = useState<Product[] | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://furniture-dummy-data-api.vercel.app/data",
        );
        const result = await response.json();
        setData(result.payload);
      } catch (error) {
        console.error("Fetch error:", error);
      }
    };

    fetchData();
  }, []);

  return [data];
};

export const useGetProductById = (id: string) => {
  const [data, setData] = useState<Product | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://furniture-dummy-data-api.vercel.app/data${id ? `/product/${id}` : ""}`,
        );
        const result = await response.json();
        setData(result.payload[0]);
      } catch (error) {
        console.error("Fetch error:", error);
      }
    };

    fetchData();
  }, [id]);

  return [data];
};

export const useGetProductsByType = (type: string | undefined) => {
  const [data, setData] = useState<Product[] | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://furniture-dummy-data-api.vercel.app/data${type ? `/type/${type}` : ""}`,
        );
        const result = await response.json();
        setData(result.payload);
      } catch (error) {
        console.error("Fetch error:", error);
      }
    };

    fetchData();
  }, [type]);

  return [data];
};
