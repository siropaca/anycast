import { fetchNijiVoice } from "./lib/nijiVoice/fetchNijiVoice.js"
import { getActorId } from "./lib/nijiVoice/nijiVoice.js"

async function main(): Promise<void> {
  const response = await fetchNijiVoice({
    actorId: getActorId("春野 奏汰"),
    word: "こんにちは！",
    speed: 0.8,
  })

  console.log(response)
}

main()
