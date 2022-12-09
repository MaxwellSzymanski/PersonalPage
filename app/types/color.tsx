export type ColorType = "orange" | "blue" | "green" | "purple" | "yellow";

export const TagColor: Record<ColorType, string> = {
  blue: "bg-primary-100 text-primary-400 dark:text-primary-100 dark:bg-primary-800",
  orange:
    "bg-orange-100 text-orange-400 dark:text-orange-100 dark:bg-orange-500",
  green: "bg-green-100 text-green-500 dark:text-green-100 dark:bg-green-700",
  purple:
    "bg-purple-100 text-purple-400 dark:text-purple-100 dark:bg-purple-600",
  yellow: "bg-yellow-100 text-yellow-600 dark:text-pink-100 dark:bg-pink-500",
};
