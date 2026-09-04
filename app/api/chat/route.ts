// app/api/chat/route.ts
import { createAgentUIStreamResponse, type UIMessage } from "ai";
import { auth } from "@clerk/nextjs/server";
import { createShoppingAgent } from "@/lib/ai/shopping-agent";

export async function POST(request: Request) {
  // 1. Force cast the request body strictly to Vercel's UIMessage[] array structure
  const body = await request.json() as { messages: UIMessage[] };
  const incomingMessages = body.messages;

  // 2. Validate that the payload exists to prevent unexpected 500 runtime crashes
  if (!incomingMessages || !Array.isArray(incomingMessages)) {
    return new Response("Missing or invalid messages parameter", { status: 400 });
  }

  // 3. Get the user's session from Clerk
  const { userId } = await auth();

  // 4. Instantiate your custom agent instance 
  const agent = createShoppingAgent({ userId });

  // 5. Build the stream response passing your cast array directly into 'uiMessages'
  return createAgentUIStreamResponse({
    agent,
    uiMessages: incomingMessages, // 👈 Required key name for Vercel AI SDK 6+
  });
}
