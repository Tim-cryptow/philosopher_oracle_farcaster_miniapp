import { createFrames } from "frames.js/next";

const frames = createFrames({
  basePath: "/api/frame",
});

export const GET = frames(async () => {
  // Default screen when user first opens the frame
  return {
    image: `${process.env.NEXT_PUBLIC_APP_URL}/oracle-frame.png`,
    imageOptions: {
      aspectRatio: "1.91:1",
    },
    buttons: [{ label: "Ask the Oracle", action: "post" }],
    inputText: "What troubles your mind?",
  };
});

export const POST = frames(async (ctx: any) => {
  const question = ctx.message?.inputText?.trim() || "The silence of thought...";

  // Call our Oracle API (which uses OpenAI)
  const response = await fetch(`${process.env.NEXT_PUBLIC_APP_URL}/api/oracle`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ text: question }),
  });

  // Handle if something goes wrong
  if (!response.ok) {
    return {
      image: `${process.env.NEXT_PUBLIC_APP_URL}/api/frame/image?text=${encodeURIComponent(
        "Hmm... the oracle is silent right now."
      )}`,
      imageOptions: { aspectRatio: "1.91:1" },
      buttons: [{ label: "Try Again", action: "post" }],
      inputText: "Ask your question again...",
    };
  }

  const { answer } = await response.json();

  return {
    image: `${process.env.NEXT_PUBLIC_APP_URL}/api/frame/image?text=${encodeURIComponent(answer)}`,
    imageOptions: {
      aspectRatio: "1.91:1",
    },
    buttons: [{ label: "Ask Again", action: "post" }],
    inputText: "Ask another question...",
  };
});
