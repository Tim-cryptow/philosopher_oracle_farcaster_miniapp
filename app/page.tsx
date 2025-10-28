"use client"

import { useEffect } from "react"
import { sdk } from "@farcaster/miniapp-sdk"

export default function Page() {
  useEffect(() => {
    const initializeMiniApp = async () => {
      try {
        console.log("[v0] Calling sdk.actions.ready()...")
        await sdk.actions.ready()
        console.log("[v0] sdk.actions.ready() completed successfully")
      } catch (error) {
        console.error("[v0] Error calling sdk.actions.ready():", error)
      }
    }

    console.log("[v0] useEffect running, initializing mini app...")
    initializeMiniApp()
  }, [])

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-black text-white">
      <h1 className="text-4xl font-bold mb-4">Philosopher Oracle</h1>
      <p className="text-lg text-center mb-4">This is a Farcaster Frame. Open it in Warpcast to ask your questions.</p>
    </main>
  )
}
