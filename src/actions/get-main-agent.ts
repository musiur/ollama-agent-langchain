import { NextResponse } from "next/server";

export async function getMainAgent() {
  const endpoint =
    "http://main-agent-lb-1202447385.us-east-1.elb.amazonaws.com/mainAgent/invoke";
  try {
    const response = await fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        input: {
          messages: "hello",
          ActionBoard_ID: "1",
          conversation_id: "1",
          collection_name: "1",
        },
      }),
    });

    return new Response(response.body, {
      headers: {
        "Content-Type": "text/plain; charset=utf-8",
      },
    });
  } catch (error) {
    console.log(error);

    NextResponse.json({
      success: false,
      message: "Something went wrong!",
    });
  }
}
