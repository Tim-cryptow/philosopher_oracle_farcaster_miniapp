import { createFrames } from "frames.js/next";

const frames = createFrames({
  basePath: "/api/frame",
});

export const GET = frames(async () => {
  return {
    image: `${process.env.NEXT_PUBLIC_APP_URL}/oracle-frame.png`,
    imageOptions: {
      aspectRatio: "1.91:1",
    },
    buttons: [
      {
        label: "Ask the Oracle",
        action: "post",
      },
    ],
    inputText: "What troubles your mind?",
    textInput: "true",
  };
});

export const POST = frames(async (ctx) => {
  const question = ctx.message?.inputText?.trim() || "The silence of thought...";

  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_APP_URL}/api/oracle`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ text: question }),
    });

    const { answer } = await response.json();

    return {
      image: `${process.env.NEXT_PUBLIC_APP_URL}/api/frame/image?text=${encodeURIComponent(answer)}`,
      imageOptions: { aspectRatio: "1.91:1" },
      buttons: [{ label: "Ask Again", action: "post" }],
      inputText: "Ask another question...",
      textInput: "true",
    };
  } catch (err) {
    console.error("Oracle API error:", err);

    return {
      image: `${process.env.NEXT_PUBLIC_APP_URL}/api/frame/image?text=${encodeURIComponent(
        "The Oracle whispers... but cannot speak now."
      )}`,
      imageOptions: { aspectRatio: "1.91:1" },
      buttons: [{ label: "Try Again", action: "post" }],
      inputText: "Ask again...",
      textInput: "true",
    };
  }
});
