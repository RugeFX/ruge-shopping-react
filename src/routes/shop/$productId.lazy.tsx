import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/shop/$productId")({
  component: Product,
});

function Product() {
  const { productId } = Route.useParams();
  const product = Route.useLoaderData();

  return (
    <section>
      <h1>Product ID : {productId}</h1>
      {JSON.stringify(product)}
    </section>
  );
}
