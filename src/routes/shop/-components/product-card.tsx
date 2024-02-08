import { Link } from "@tanstack/react-router";
import { StarIcon } from "lucide-react";
import type { Product } from "types/product";

export default function ProductCard({ product }: { product: Product }) {
  return (
    <Link
      to={`/shop/$productId`}
      params={{ productId: `${product.id}` }}
      key={product.id}
      className="group flex flex-col gap-2 p-2 items-center justify-between rounded-lg ring-1 ring-purple-300 shadow-sm hover:bg-purple-50 focus:outline-none focus:ring-2 focus:ring-purple-600 hover:shadow-md transition-all"
    >
      <div className="w-full flex flex-col gap-2 px-4">
        <div className="w-full h-44 rounded-lg bg-white flex justify-center">
          <img src={product.image} alt={product.title} className="w-44 h-full object-contain" />
        </div>
        <p className="font-semibold text-left">{product.title}</p>
        <i className="not-italic text-purple-500 font-semibold text-lg">${product.price}</i>
      </div>
      <div className="w-full flex items-center justify-start px-4 gap-2">
        <div className="flex gap-1">
          {Array(5)
            .fill(null)
            .map((_, i) => (
              <StarIcon
                key={i}
                className={`w-4 h-4 ${i < Math.round(product.rating.rate) ? `text-yellow-400 fill-yellow-400` : `text-zinc-400 fill-zinc-400`}`}
              />
            ))}
        </div>
        <span className="text-sm">{product.rating.rate}</span>
        <p className="text-sm text-opacity-80">({product.rating.count} Sold)</p>
      </div>
    </Link>
  );
}
