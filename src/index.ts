import { fetchNijiVoice } from "./lib/nijiVoice/fetchNijiVoice.js"
import { ActorName, getActorId } from "./lib/nijiVoice/actors.js"
import { joinMp3FromUrls } from "./lib/mp3/join.js"

const scripts: Array<{ actor: ActorName; word: string }> = [
  {
    actor: "深海 結涼",
    word: "こんにちは",
  },
  {
    actor: "春野 奏汰",
    word: "こんばんは",
  },
  {
    actor: "深海 結涼",
    word: "そして、おやすみなさい",
  },
  {
    actor: "春野 奏汰",
    word: "なんでやねん！",
  },
]

async function main(): Promise<void> {
  const urls: string[] = []

  for (const script of scripts) {
    console.log("🔄 音声生成中：", `${script.actor}「${script.word}」`)
    const response = await fetchNijiVoice({
      actorId: getActorId(script.actor),
      word: script.word,
      speed: 0.8,
    })

    console.log("🎉 音声生成完了")
    console.log("remainingCredits:", response.generatedVoice.remainingCredits)

    urls.push(response.generatedVoice.audioFileUrl)
  }

  console.log("🔄 音声結合中...")

  await joinMp3FromUrls(urls, "output/output.mp3")
}

main()
