"use client";

import clsx from "clsx";
import Link from "next/link";
import { useQueryParams } from "@/hooks/use-query-params";

export const ChatPromptMoodToggle = () => {
  return (
    <div className="flex items-center gap-0">
      <ChatPromptMood promptMood="default" />
      <ChatPromptMood promptMood="action" />
    </div>
  );
};

const ChatPromptMood = ({
  promptMood = "default",
}: {
  promptMood: "default" | "action";
}) => {
  const { url, currentQueries } = useQueryParams({
    promptMood,
  });

  const currentMood = currentQueries.get("promptMood") || "default";
  const isActive = currentMood === promptMood;

  return (
    <Link
      href={url}
      className={clsx(
        "px-2 h-6 text-sm flex items-center justify-center border capitalize transition ease-in-out duration-500",
        {
          "rounded-r-lg": promptMood === "action",
          "rounded-l-lg": promptMood === "default",
          "border-primary text-primary": isActive,
          "border-black/30 text-black/30": !isActive,
          "border-l-0": promptMood === "action" && !isActive,
          "border-r-0": promptMood === "default" && !isActive,
        }
      )}
    >
      {promptMood}
    </Link>
  );
};
