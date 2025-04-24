"use client";

import { useChat } from "ai/react";
import { ChatInput } from "./chat-input";
import { ChatBubble } from "./chat-bubble";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useQueryParams } from "@/hooks/use-query-params";
import { ChatBubbleSkeleton } from "./chat-bubble-skeleton";
import { ChatActionCommands } from "./chat-action-commands";

export const ChatRoot = () => {
  const { currentQueries } = useQueryParams({
    promptMood: "default",
  });

  const streamEndpoint =
    currentQueries.get("promptMood") === "action" ? "/api/agent" : "/api/chat";

  const { messages, input, handleInputChange, handleSubmit, isLoading } =
    useChat({
      api: streamEndpoint,
      streamMode: "text",
      onResponse(response) {
        const sourcesHeader = response.headers.get("x-sources");
        if (sourcesHeader) {
          const sources = JSON.parse(
            Buffer.from(sourcesHeader, "base64").toString("utf8")
          );
          console.log("Sources from server:", sources);
        }
      },
      onError(error) {
        console.error("Chat Error:", error.message);
      },
    });

  return (
    <div className="p-4 space-y-8">
      <ScrollArea>
        <div className="space-y-4">
          {messages.map((message) => (
            <ChatBubble
              key={message.id}
              content={message.content}
              role={message.role}
            />
          ))}
          <ChatBubbleSkeleton isLoading={isLoading} />
        </div>
      </ScrollArea>

      <ChatInput
        input={input}
        handleInputChange={handleInputChange}
        handleSubmit={handleSubmit}
        isLoading={isLoading}
      />
      <ChatActionCommands isLoading={isLoading} handleInputChange={handleInputChange}/>
    </div>
  );
};
