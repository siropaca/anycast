import { fetchNijiVoice } from "./lib/nijiVoice/fetchNijiVoice.js"
import { getActorId } from "./lib/nijiVoice/actors.js"

const scripts = [
  {
    actor: "深海 結涼",
    word: "こんにちは！",
  },
  {
    actor: "春野 奏汰",
    word: "こんにちは！",
  },
  {
    actor: "深海 結涼",
    word: "最近あついですね",
  },
  {
    actor: "春野 奏汰",
    word: "ですね、熱くて溶けちゃいそうです",
  },
]

async function main(): Promise<void> {
  const urls: string[] = []

  const response = await fetchNijiVoice({
    actorId: getActorId("春野 奏汰"),
    word: "こんにちは！",
    speed: 0.8,
  })

  console.log(response)
}

main()
