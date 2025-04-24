import { Message } from "ai";
import { ChatOllama } from "@langchain/community/chat_models/ollama";
import {
  AIMessage,
  HumanMessage,
  SystemMessage,
} from "@langchain/core/messages";
import { Config } from "@/configs";

export const runtime = "edge";

export async function OPTIONS() {
  return new Response(null, {
    status: 204,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
    },
  });
}

export async function POST(req: Request) {
  const { messages, regenerate = false } = await req.json();

  const llm = new ChatOllama({
    baseUrl: Config.OLLAMA_BASE_URL,
    model: Config.OLLAMA_MODEL,
    temperature: regenerate ? 0.9 : 0.7,
  });

  const mappedMessages = messages.map((m: Message) =>
    m.role === "user"
      ? new HumanMessage(m.content)
      : m.role === "system"
      ? new SystemMessage(m.content)
      : new AIMessage(m.content)
  );

  if (regenerate) {
    mappedMessages.unshift(
      "Please provide an alternative response to the user query. Be creative and offer a different perspective or approach."
    );
  }

  const stream = await llm.stream(mappedMessages);

  const encoder = new TextEncoder();

  const textStream = new ReadableStream({
    async start(controller) {
      for await (const chunk of stream) {
        controller.enqueue(encoder.encode(`${chunk.content}`));
      }
      controller.close();
    },
  });

  return new Response(textStream, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "X-Regenerate": regenerate ? "true" : "false",
    },
  });
}
