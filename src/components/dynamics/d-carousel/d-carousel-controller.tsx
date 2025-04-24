"use client";
import { Button } from "@/components/ui/button";
import { useCarousel } from "@/components/ui/carousel";
import { cn } from "@/lib/utils";
import clsx from "clsx";
import Autoplay from "embla-carousel-autoplay";
import { ArrowLeft, ArrowRight } from "lucide-react";
import React from "react";

const DynamicCarouselPrevious = React.forwardRef<
  HTMLButtonElement,
  React.ComponentProps<typeof Button> & { innerController?: boolean }
>(
  (
    {
      className,
      variant = "outline",
      size = "icon",
      innerController = false,
      ...props
    },
    ref
  ) => {
    const { orientation, scrollPrev, canScrollPrev } = useCarousel();

    return (
      <Button
        ref={ref}
        variant={variant}
        size={size}
        className={cn(
          "absolute  h-8 w-8 md:h-12 md:w-12 rounded-full",
          orientation === "horizontal"
            ? clsx(" top-1/2 -translate-y-1/2", {
                "left-2": innerController,
                "-left-12": !innerController,
              })
            : clsx("-top-12 left-1/2 -translate-x-1/2 rotate-90", {
                "top-2": innerController,
                "-top-12": !innerController,
              }),
          className
        )}
        disabled={!canScrollPrev}
        onClick={scrollPrev}
        {...props}
      >
        <ArrowLeft className="h-4 w-4 md:h-6 md:w-6" />
        <span className="sr-only">Previous slide</span>
      </Button>
    );
  }
);
DynamicCarouselPrevious.displayName = "DynamicCarouselPrevious";

const DynamicCarouselNext = React.forwardRef<
  HTMLButtonElement,
  React.ComponentProps<typeof Button> & { innerController?: boolean }
>(
  (
    {
      className,
      variant = "outline",
      size = "icon",
      innerController = false,
      ...props
    },
    ref
  ) => {
    const { orientation, scrollNext, canScrollNext } = useCarousel();

    return (
      <Button
        ref={ref}
        variant={variant}
        size={size}
        className={cn(
          "absolute h-8 w-8 md:h-12 md:w-12 rounded-full",
          orientation === "horizontal"
            ? clsx("top-1/2 -translate-y-1/2", {
                "right-2": innerController,
                "-right-12": !innerController,
              })
            : clsx(" left-1/2 -translate-x-1/2 rotate-90", {
                "bottom-2": innerController,
                "-bottom-12": !innerController,
              }),
          className
        )}
        disabled={!canScrollNext}
        onClick={scrollNext}
        {...props}
      >
        <ArrowRight className="h-4 w-4 md:h-6 md:w-6" />
        <span className="sr-only">Next slide</span>
      </Button>
    );
  }
);
DynamicCarouselNext.displayName = "DynamicCarouselNext";

export { Autoplay, DynamicCarouselNext, DynamicCarouselPrevious };
