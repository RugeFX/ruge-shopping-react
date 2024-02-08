import { Outlet, createFileRoute } from "@tanstack/react-router";
import { Separator } from "react-aria-components";

export const Route = createFileRoute("/shop")({
  component: ShopLayout,
});

function ShopLayout() {
  return (
    <>
      <div className="bg-gradient-to-br from-purple-600 to-blue-600 p-8 rounded-t-lg flex items-center justify-start">
        <h1 className="text-white text-3xl font-bold">SHOP</h1>
      </div>
      <Separator className="border-2 border-purple-600 rounded-lg" />
      <Outlet />
    </>
  );
}
