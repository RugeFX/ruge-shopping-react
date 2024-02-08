import axios from "axios";
import { notFound } from "@tanstack/react-router";
import type { Product } from "types/product";

export async function getProducts(category?: string) {
  await new Promise((res) => setTimeout(res, 3000));
  const { data } = await axios.get<Product[]>(
    category !== undefined
      ? `https://fakestoreapi.com/products/category/${category}`
      : "https://fakestoreapi.com/products"
  );

  if (data.length === 0) throw notFound();

  return data;
}
