"use client";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { ReactNode } from "react";

/**
 * DynamicPopover component
 * @param {Object} props - The component props
 * @param {ReactNode} props.trigger - The trigger element
 * @param {ReactNode} props.content - The content element
 * @param {string} props.contentClassName - Additional CSS classes to be applied to the content
 * @returns {React.ReactNode} The rendered DynamicPopover component
 */

type DynamicPopoverProps = {
  trigger: ReactNode;
  content: ReactNode;
  contentClassName?: string;
};

const DynamicPopover: React.FC<DynamicPopoverProps> = (props): React.ReactNode => {
  const { trigger, content, contentClassName } = props;

  return (
    <Popover>
      <PopoverTrigger asChild>{trigger}</PopoverTrigger>
      <PopoverContent
        className={cn(contentClassName, "!p-1 rounded-xl !z-10")}
        align="end"
        side="bottom"
      >
        {content}
      </PopoverContent>
    </Popover>
  );
};

export default DynamicPopover;
