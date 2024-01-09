import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-bold ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:pointer-events-none",
  {
    variants: {
      variant: {
        default:
          "bg-gradient-to-tr from-indigo-700 via-indigo-500 to-indigo-400 text-indigo-100 hover:scale-95 hover:text-cyan-50 transition-all duration-500 bg-size-200 bg-pos-0 hover:bg-pos-100",
        destructive:
          "bg-destructive dark:text-orange-400/80 text-orange-500/80 hover:text-orange-500",
        outline:
          "border border-indigo-400 dark:text-indigo-200 text-indigo-500 disabled:text-neutral-300 dark:hover:bg-indigo-500/20 hover:bg-indigo-300/30 dark:hover:text-orange-100 hover:text-indigo-500 transition-all duration-500 disabled:border-neutral-200",
        secondary: "bg-indigo-200 text-indigo-600",
        ghost:
          "dark:hover:text-orange-100 hover:text-indigo-500 text-slate-400 text-center",
        casper:
          "dark:hover:bg-black/10 dark:text-orange-200 hover:text-red-500 hover:bg-indigo-200/30 hover:scale-[105%] transition-all duration-500 text-neutral-700 text-center",
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
