"use client";

import { Button } from "@/components/ui/button";
import clsx from "clsx";
import { CheckCheck, Copy } from "lucide-react";
import { useState } from "react";

const CopyAnything = ({ text }: { text: string }) => {
  const [isCopied, setIsCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    setIsCopied(true);
    setTimeout(() => {
      setIsCopied(false);
    }, 2000);
  };
  
  return (
    <Button
      variant="ghost"
      size="icon"
      className={clsx("bg-transparent", {
        "border-gray-400": isCopied,
      })}
      onClick={handleCopy}
      disabled={isCopied}
    >
      {isCopied ? (
        <CheckCheck className="w-4 h-4 stroke-[2px] stroke-black dark:stroke-slate-300" />
      ) : (
        <Copy className="w-4 h-4" />
      )}
    </Button>
  );
};

export default CopyAnything;
