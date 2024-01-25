import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md md:text-sm text-[12px] font-bold ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:pointer-events-none",
  {
    variants: {
      variant: {
        default:
          "bg-gradient-to-tr from-indigo-700 to-indigo-500 text-sky-50 hover:scale-[95%] hover:text-cyan-50 transition-all duration-200",
        destructive:
          "bg-red-500/10 dark:bg-red-500/30 dark:text-red-400 text-red-500 hover:scale-[95%] hover:text-red-400 dark:hover:text-red-400 dark:hover:border-red-400 transition-all duration-200",
        outline:
          "border border-indigo-300 dark:text-indigo-300 dark:disabled:text-neutral-600 text-indigo-500 disabled:text-neutral-300 dark:hover:bg-indigo-500/20 hover:bg-indigo-300/30 dark:hover:text-orange-100 hover:text-indigo-500 transition-all duration-500 disabled:border-neutral-200 dark:disabled:border-neutral-600",
        secondary: "bg-indigo-200 text-indigo-600",
        ghost:
          "dark:hover:text-orange-100 hover:text-indigo-500 text-indigo-900 dark:text-neutral-400 text-center",
        casper:
          "dark:hover:bg-black/10 dark:text-indigo-900 dark:hover:text-red-200 hover:text-red-500 hover:bg-indigo-200/30 transition-all duration-500 text-neutral-700 text-center",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-10 px-8 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
        xs: "p-[2px] rounded-[3px]",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Variant = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  },
);
Variant.displayName = "Variant";

export { Variant };
