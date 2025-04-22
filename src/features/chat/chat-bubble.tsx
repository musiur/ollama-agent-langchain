import clsx from "clsx";
import ReactMarkdown from "react-markdown";

interface ChatMessageProps {
  content: string;
  role?: "function" | "system" | "user" | "assistant" | "data" | "tool";
}

export const ChatBubble = ({ content, role = "user" }: ChatMessageProps) => {
  return (
    <div className="flex w-full">
      <div
        className={clsx("px-4 py-2 break-words", {
          "bg-primary text-white ml-auto rounded-l-lg rounded-br-lg":
            role === "user",
          "bg-gray-200 text-primary mr-auto rounded-r-lg rounded-bl-lg":
            role === "assistant",
        })}
      >
        <div className="prose break-words">
          <ReactMarkdown>{content}</ReactMarkdown>
        </div>
      </div>
    </div>
  );
};
