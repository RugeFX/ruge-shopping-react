import { createLazyFileRoute, useRouterState } from "@tanstack/react-router";
import ProductCard from "./-components/product-card";
import { CATEGORIES } from "lib/categories";
import { CircleDashedIcon } from "lucide-react";

export const Route = createLazyFileRoute("/shop/")({
  component: Shop,
});

function Shop() {
  const category = Route.useSearch({ select: (search) => search.category });
  const products = Route.useLoaderData();
  const categoryLabel = CATEGORIES.find((c) => c.value === category)?.label ?? category;

  return (
    <section className="w-full shadow-md p-5 rounded-lg space-y-2">
      <LoadingSpinner />
      {categoryLabel !== undefined && <h2>Category: {categoryLabel}</h2>}
      {products.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <h2 className="text-center font-bold">No items available.</h2>
      )}
    </section>
  );
}

function LoadingSpinner() {
  const isLoading = useRouterState({ select: (s) => s.status === "pending" });

  if (isLoading) {
    return (
      <div>
        <CircleDashedIcon className="w-10 h-10 text-zinc-600 animate-spin" />
      </div>
    );
  }
}
