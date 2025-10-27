import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Philosopher Oracle",
  description: "A Farcaster Oracle that offers timeless wisdom.",
  other: {
    "fc:frame": "vNext",
    "fc:frame:image": `${process.env.NEXT_PUBLIC_APP_URL}/oracle-frame.png`,
    "fc:frame:post_url": `${process.env.NEXT_PUBLIC_APP_URL}/api/frame`,
    "fc:frame:input:text": "Ask the Oracle your question...",
    "fc:frame:button:1": "Seek Wisdom",
  },
};

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-black text-white">
      <h1 className="text-4xl font-bold mb-4">Philosopher Oracle</h1>
      <p className="text-lg text-center mb-4">
        This is a Farcaster Frame. Open it in Warpcast to ask your questions.
      </p>
    </main>
  );
}
