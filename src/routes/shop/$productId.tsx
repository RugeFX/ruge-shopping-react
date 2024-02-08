import { createFileRoute } from "@tanstack/react-router";
import axios from "axios";
import { Product } from "types/product";

export const Route = createFileRoute("/shop/$productId")({
  loader: async ({ params }) => {
    const { data } = await axios.get<Product>(
      `https://fakestoreapi.com/products/${params.productId}`
    );
    return data;
  },
});
