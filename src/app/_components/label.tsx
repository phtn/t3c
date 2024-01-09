"use client";

import * as React from "react";
import * as LabelPrimitive from "@radix-ui/react-label";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@lib/utils";

const labelVariants = cva(
  "text-sm text-muted-foreground leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
);

const Label = React.forwardRef<
  React.ElementRef<typeof LabelPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof LabelPrimitive.Root> &
    VariantProps<typeof labelVariants>
>(({ className, ...props }, ref) => (
  <LabelPrimitive.Root
    ref={ref}
    className={cn(labelVariants(), className)}
    {...props}
  />
));
Label.displayName = LabelPrimitive.Root.displayName;

type SectionLabelProps = {
  children: React.ReactNode;
  extra?: string;
  label: string;
};

export const SectionLabel = ({ children, extra, label }: SectionLabelProps) => {
  const props = { className: "mr-1 text-indigo-500 h-4 w-4" };
  const childrenWithProps = React.Children.map(
    children,
    (child: React.ReactNode) => {
      if (React.isValidElement(child)) {
        return React.cloneElement(child, props);
      }
      return child;
    },
  );
  return (
    <div className=" flex items-center pb-2 text-[12px] text-neutral-600 dark:text-neutral-400">
      {childrenWithProps}
      {label}
      <code className="mx-2 font-mono text-[11px] font-medium text-neutral-400">
        {extra}
      </code>
    </div>
  );
};

export { Label };
