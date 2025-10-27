import { NextRequest, NextResponse } from "next/server";
import OpenAI from "openai";

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

const prompt = `
You are the Philosopher Oracle — a timeless being who gives wise, compassionate, and philosophical answers.
Draw from Stoicism, Existentialism, Taoism, and Rationalism.
Be concise but profound. End each answer with a short quote.
`;

export async function POST(req: NextRequest) {
  const { text } = await req.json();

  const completion = await openai.chat.completions.create({
    model: "gpt-4o-mini",
    messages: [
      { role: "system", content: prompt },
      { role: "user", content: text },
    ],
    temperature: 0.8,
  });

  const answer = completion.choices[0].message?.content || "The oracle is silent.";
  return NextResponse.json({ answer });
}
