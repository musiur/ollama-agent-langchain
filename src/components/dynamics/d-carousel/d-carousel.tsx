"use client";
import * as React from "react";

import { Carousel, CarouselContent } from "@/components/ui/carousel";
import {
  Autoplay,
  DynamicCarouselNext,
  DynamicCarouselPrevious,
} from "./d-carousel-controller";

const DynamicCarousel = ({
  innerController = false,
  hasItems = false,
  children,
}: {
  innerController?: boolean;
  hasItems: boolean;
  children: React.ReactNode;
}) => {
  // handle no slides data
  if (!hasItems) return null;

  // Check if children is an array and has more than one element
  const hasMultipleChildren = Array.isArray(children) && children.length > 1;

  return (
    <Carousel
      className="w-full"
      opts={{
        align: "start",
        loop: true,
      }}
      plugins={[
        Autoplay({
          delay: 2000,
          stopOnMouseEnter: true,
        }),
      ]}
    >
      <CarouselContent>{children}</CarouselContent>
      {hasMultipleChildren ? (
        <React.Fragment>
          <DynamicCarouselPrevious innerController={innerController} />
          <DynamicCarouselNext innerController={innerController} />
        </React.Fragment>
      ) : null}
    </Carousel>
  );
};

export default DynamicCarousel;
