import { createFileRoute } from "@tanstack/react-router";
import * as v from "valibot";
import { getProducts } from "api/products";

const categorySearchSchema = v.object({
  category: v.optional(v.string()),
});

export const Route = createFileRoute("/shop/")({
  validateSearch: (search) => v.parse(categorySearchSchema, search),
  loaderDeps: ({ search: { category } }) => ({ category }),
  loader: ({ deps }) => getProducts(deps.category),
  notFoundComponent: NotFound,
});

function NotFound() {
  return (
    <section>
      <h1 className="text-center font-bold text-xl">Can't find any products in this segment!</h1>
    </section>
  );
}
