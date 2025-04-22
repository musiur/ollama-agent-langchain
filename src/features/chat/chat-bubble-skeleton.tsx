import { cn } from "@/lib/utils";

export const ChatBubbleSkeleton = ({isLoading = false}: {isLoading?: boolean}) => {
    const skeletonStyle = "h-4 rounded-md animate-pulse bg-gray-400";
    
    return isLoading ? (
      <div className="space-y-2 p-4 rounded-r-lg rounded-bl-lg bg-gray-200">
        <div className={cn(skeletonStyle)} />
        <div className={cn(skeletonStyle, "delay-300")} />
        <div className={cn(skeletonStyle, "delay-500")} />
      </div>
    ) : null;
  };