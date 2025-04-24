import { Button } from "@/components/ui/button";
import { Share2 } from "lucide-react";

export const ChatShareResponse = () => {
  return (
    <Button size="icon" variant="ghost">
      <Share2 className="h-5 w-5" />
    </Button>
  );
};
