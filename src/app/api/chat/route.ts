import { Message } from 'ai';
import { ChatOllama } from '@langchain/community/chat_models/ollama';
import { AIMessage, HumanMessage } from '@langchain/core/messages';
import { Config } from '@/configs';

export const runtime = 'edge';

export async function POST(req: Request) {
  const { messages } = await req.json();

  const llm = new ChatOllama({
    baseUrl: Config.OLLAMA_BASE_URL,
    model: Config.OLLAMA_MODEL,
    temperature: 0.7,
  });

  const stream = await llm.stream(
    messages.map((m: Message) =>
      m.role === 'user'
        ? new HumanMessage(m.content)
        : new AIMessage(m.content)
    )
  );

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
      'Content-Type': 'text/plain; charset=utf-8',
    },
  });
}
