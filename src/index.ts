import { fetchNijiVoice } from "./lib/fetch/fetch.js"

async function main(): Promise<void> {
  const response = await fetchNijiVoice({
    actorId: "90031163-c497-44f3-a8a6-e45e4d0cb8f6",
    word: "こんにちは！",
    speed: 0.8,
  })

  console.log(response)
}

main()
