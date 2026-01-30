import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { Slot } from "radix-ui"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-full border border-transparent bg-clip-padding text-[0.95rem] font-semibold tracking-[-0.01em] transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/60 focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-50 [&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none shrink-0 select-none",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground shadow-sm shadow-black/10 hover:-translate-y-0.5 hover:bg-primary/90",
        outline:
          "border-border bg-background text-foreground shadow-sm shadow-black/10 hover:-translate-y-0.5 hover:border-ring/40 hover:bg-muted",
        secondary:
          "bg-secondary text-secondary-foreground hover:-translate-y-0.5 hover:bg-secondary/85",
        ghost:
          "text-foreground hover:-translate-y-0.5 hover:bg-muted/70 aria-expanded:bg-muted/70",
        destructive:
          "bg-destructive text-destructive-foreground shadow-sm shadow-black/10 hover:-translate-y-0.5 hover:bg-destructive/90 focus-visible:ring-destructive/30",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default:
          "h-10 gap-2 px-4 in-data-[slot=button-group]:rounded-full has-data-[icon=inline-end]:pr-3 has-data-[icon=inline-start]:pl-3",
        xs: "h-7 gap-1.5 px-2 text-xs in-data-[slot=button-group]:rounded-full [&_svg:not([class*='size-'])]:size-3",
        sm: "h-9 gap-2 px-3 in-data-[slot=button-group]:rounded-full",
        lg: "h-12 gap-2.5 px-6 text-base has-data-[icon=inline-end]:pr-7 has-data-[icon=inline-start]:pl-7",
        icon: "size-10",
        "icon-xs": "size-7 in-data-[slot=button-group]:rounded-full [&_svg:not([class*='size-'])]:size-3",
        "icon-sm": "size-9 in-data-[slot=button-group]:rounded-full",
        "icon-lg": "size-12",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

function Button({
  className,
  variant = "default",
  size = "default",
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }) {
  const Comp = asChild ? Slot.Root : "button"

  return (
    <Comp
      data-slot="button"
      data-variant={variant}
      data-size={size}
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }
