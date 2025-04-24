import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";
import { ReactNode } from "react";

/**
 * DynamicAvatar component
 * @param {Object} props - The component props
 * @param {string} props.className - Additional CSS classes to be applied to the avatar
 * @returns {JSX.Element} The rendered DynamicAvatar component
 */
const DynamicAvatar = (
  props: { className?: string }
): ReactNode => {
  return (
    <Avatar className={cn(props.className, "rounded-lg")} role="button">
      <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>
  );
};

export default DynamicAvatar;
