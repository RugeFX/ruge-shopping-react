import { GemIcon, LightbulbIcon, ShirtIcon } from "lucide-react";

export const CATEGORIES = [
  { label: "Men's Clothing", value: "men's clothing", logo: ShirtIcon },
  { label: "Women's Clothing", value: "women's clothing", logo: ShirtIcon },
  { label: "Electronics", value: "electronics", logo: LightbulbIcon },
  { label: "Jewelery", value: "jewelery", logo: GemIcon },
] as const;
