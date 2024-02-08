import { Link, createFileRoute } from "@tanstack/react-router";
import { Separator } from "react-aria-components";
import { LucideIcon } from "lucide-react";
import { CATEGORIES } from "lib/categories";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <section className="w-full shadow-md p-5 rounded-lg space-y-2">
      <h2 className="text-zinc-600 text-lg font-bold">KATEGORI</h2>
      <Separator />
      <div className="w-full grid grid-flow-col gap-2">
        {CATEGORIES.map((category) => (
          <CategoryCard key={category.value} {...category} />
        ))}
      </div>
    </section>
  );
}

interface CategoryCardProps {
  label: string;
  value: string;
  logo: LucideIcon;
}

function CategoryCard(props: CategoryCardProps) {
  return (
    <Link
      to="/shop"
      search={{ category: props.value }}
      aria-label={props.label}
      className="flex flex-col items-center p-2 rounded-lg shadow-sm hover:bg-zinc-100 hover:shadow-md transition-all"
    >
      <props.logo className="w-7 h-7 text-purple-500" />
      <span className="block text-center">{props.label}</span>
    </Link>
  );
}
