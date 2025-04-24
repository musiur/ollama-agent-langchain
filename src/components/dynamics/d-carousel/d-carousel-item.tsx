"use client";

import { CarouselItem } from "@/components/ui/carousel";
import { cn } from "@/lib/utils";

const DynamicCarouselItem = (props: React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <CarouselItem className={cn(props.className, "")}>
      {props.children}
    </CarouselItem>
  );
};

export default DynamicCarouselItem;
