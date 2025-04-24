import { cn } from "@/lib/utils";

export const ChatBubbleSkeleton = ({
  isLoading = false,
}: {
  isLoading?: boolean;
}) => {
  const skeletonStyle =
    "h-4 w-4 rounded-md animate-pulse bg-gray-400 dark:bg-gray-600";

  return isLoading ? (
    <div className="p-4 rounded-r-lg rounded-bl-lg bg-background flex items-center gap-2">
      <div className={cn(skeletonStyle)} />
      <div className={cn(skeletonStyle, "delay-300")} />
      <div className={cn(skeletonStyle, "delay-500")} />
    </div>
  ) : null;
};
