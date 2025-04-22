"use client";

import clsx from "clsx";
import { ArrowUp, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { ChatPromptMoodToggle } from "./chat-prompt-mood-toggle";

interface ChatInputProps {
  input: string;
  handleInputChange: (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => void;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  isLoading: boolean;
}

export const ChatInput = ({
  input,
  handleInputChange,
  handleSubmit,
  isLoading,
}: ChatInputProps) => {
  return (
    <form
      onSubmit={handleSubmit}
      className="p-1 space-y-2 border rounded-md shadow-md sticky bottom-6 bg-white"
    >
      <Textarea
        value={input}
        onChange={handleInputChange}
        placeholder="Type a message..."
        className="flex-grow"
        disabled={isLoading}
      />
      <div className="flex justify-between items-center gap-10">
        <ChatPromptMoodToggle />
        <Button
          type="submit"
          size="sm"
          variant="outline"
          disabled={isLoading || !input.trim()}
          className="rounded-full border h-9 border-black/30"
        >
          <ArrowUp
            className={clsx({
              "h-4 w-4 block": !isLoading,
              "animate-spin h-0 w-0 hidden": isLoading,
            })}
          />
          <Sun
            className={clsx({
              "h-0 w-0 hidden": !isLoading,
              "animate-spin h-4 w-4 block": isLoading,
            })}
          />
        </Button>
      </div>
    </form>
  );
};
