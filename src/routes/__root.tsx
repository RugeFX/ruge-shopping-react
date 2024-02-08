import { Link, Outlet, createRootRoute } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import { MinusCircleIcon, PlusCircleIcon, Trash2Icon } from "lucide-react";
import { useState } from "react";
import { Button, Dialog, DialogTrigger, Input, Popover, Switch } from "react-aria-components";
import { useAppDispatch, useAppSelector } from "store";
import { addProduct, clearCart, decreaseQuantity, selectCart } from "store/cart-slice";

export const Route = createRootRoute({
  component: Root,
  notFoundComponent: NotFound,
});

function Root() {
  const [search, setSearch] = useState("");

  const { products } = useAppSelector(selectCart);
  const dispatch = useAppDispatch();

  return (
    <>
      <nav className="bg-white p-4 fixed top-0 w-full shadow-md">
        <div className="container mx-auto flex gap-4 items-center">
          <Link
            to="/"
            className="font-bold text-2xl text-purple-500 [&.active]:pointer-events-none"
          >
            Ruge<span className="text-black">pedia</span>
          </Link>
          <Input
            className="border border-zinc-500 outline-none p-2 rounded-lg"
            placeholder="Search for items..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <Button
            onPress={() =>
              dispatch(
                addProduct({
                  id: 1,
                  title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
                  price: 109.95,
                  category: "Fashion",
                  image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
                })
              )
            }
          >
            <PlusCircleIcon className="w-5 h-5" />
          </Button>
          <Button onPress={() => dispatch(decreaseQuantity(1))}>
            <MinusCircleIcon className="w-5 h-5" />
          </Button>
          <Button onPress={() => dispatch(clearCart())}>
            <Trash2Icon className="w-5 h-5 text-red-600" />
          </Button>
          <DialogTrigger>
            <Button>Settings</Button>
            <Popover
              className={({
                isEntering,
                isExiting,
              }) => `w-[280px] placement-bottom:mt-2 placement-top:mb-2 group rounded-lg drop-shadow-lg ring-1 ring-black/10 bg-white ${isEntering ? "animate-in fade-in placement-bottom:slide-in-from-top-1 placement-top:slide-in-from-bottom-1 ease-out duration-200" : ""}
                    ${isExiting ? "animate-out fade-out placement-bottom:slide-out-to-top-1 placement-top:slide-out-to-bottom-1 ease-in duration-150" : ""}`}
            >
              <Dialog>
                <div className="flex-col bg-white p-2 rounded-lg shadow-md">
                  <Switch defaultSelected>
                    <div className="indicator" /> Wi-Fi
                  </Switch>
                  <Switch defaultSelected>
                    <div className="indicator" /> Bluetooth
                  </Switch>
                  <Switch>
                    <div className="indicator" /> Mute
                  </Switch>
                </div>
              </Dialog>
            </Popover>
          </DialogTrigger>
        </div>
      </nav>
      <main className="h-full mx-auto my-20 container space-y-4">
        <Outlet />
      </main>
      <aside>{JSON.stringify(products)}</aside>
      <TanStackRouterDevtools />
    </>
  );
}

function NotFound({ data }: { data: unknown }) {
  console.log(data);
  return (
    <main>
      <h1>Route Not Found</h1>
    </main>
  );
}
