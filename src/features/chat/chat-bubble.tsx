import CopyAnything from "@/components/common/copy-anything";
import clsx from "clsx";
import ReactMarkdown from "react-markdown";
import { ChatTryAgain } from "./chat-try-again";
import { ChatShareResponse } from "./chat-share-response";

interface ChatMessageProps {
  content: string;
  role?: "function" | "system" | "user" | "assistant" | "data" | "tool";
}

export const ChatBubble = ({ content, role = "user" }: ChatMessageProps) => {
  return (
    <div className="flex flex-col w-full">
      <div
        className={clsx("px-4 py-2 break-words border", {
          "bg-primary dark:bg-white text-white dark:text-black ml-auto rounded-l-lg rounded-br-lg":
            role === "user",
          "bg-background text-primary mr-auto rounded-r-lg rounded-bl-lg":
            role === "assistant",
        })}
      >
        <div className="prose break-words">
          <ReactMarkdown>{content}</ReactMarkdown>
        </div>
      </div>
      <div
        className={clsx("pt-2 pb-4", {
          hidden: role !== "assistant",
        })}
      >
        <CopyAnything text={content} />
        <ChatTryAgain />
        <ChatShareResponse />
      </div>
    </div>
  );
};
