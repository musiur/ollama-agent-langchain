import { Config } from "@/configs";

export const runtime = "edge";

export async function POST(req: Request) {
  const { messages } = await req.json();
  console.log(messages);

  const res = await fetch(Config.MAIN_AGENT_ENDPOINT, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      input: {
        messages: messages[messages.length - 1].content,
        ActionBoard_ID: "1",
        conversation_id: "1",
        collection_name: "1",
      },
    }),
  });

  const stream = res.body;

  return new Response(stream, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
    },
  });
}
