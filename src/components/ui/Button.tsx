import { cn } from "@/lib/utils";
import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
}

export function Button({
  className,
  variant = "primary",
  size = "md",
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(
        "inline-flex items-center justify-center rounded-full font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-brand-primary focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none",
        {
          "bg-brand-primary text-white hover:bg-brand-secondary": variant === "primary",
          "bg-brand-green text-white hover:bg-brand-dark": variant === "secondary",
          "border-2 border-brand-primary text-brand-primary hover:bg-brand-primary hover:text-white": variant === "outline",
          "h-9 px-4 text-sm": size === "sm",
          "h-11 px-8 text-base": size === "md",
          "h-14 px-10 text-lg": size === "lg",
        },
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
