import { fetchNijiVoice } from "./lib/nijiVoice/fetchNijiVoice.js"
import { ActorName, getActorInfo } from "./lib/nijiVoice/actors.js"
import { joinMp3FromUrls } from "./lib/mp3/join.js"

const scripts: Array<{ actor: ActorName; script: string }> = [
  {
    actor: "金城 夏海",
    script: "ねぇねぇ！リアクト19って、なんかヤバい新機能あるって聞いたんだけど〜！？",
  },
  {
    actor: "新堂 慶介",
    script:
      "おお、よく聞いてくれたね。リアクト19では「アクションズ」っていう新機能が追加されたんだよ。これを使うと、フォームの送信や非同期処理がめっちゃ簡単になるんだ。例えば、ユーズアクションステートっていうフックを使えば、ペンディング状態やエラー処理を自動で管理できるんだよ",
  },
  {
    actor: "金城 夏海",
    script: "マジで！？それって、今まで手動でやってたやつが自動でできちゃうってこと？超アガる〜！",
  },
  {
    actor: "新堂 慶介",
    script:
      "その通り。さらに、ゆーずおスティミックっていうフックを使えば、ユーザーの操作に対して即座にユーアイを更新して、後からサーバーのレスポンスに応じて調整することもできるんだ。これでユーザー体験が格段に良くなるよ",
  },
  {
    actor: "金城 夏海",
    script: "ヤバい、リアクト19、マジで神アプデじゃん！早速使ってみよ〜っと♪",
  },
]

async function main(): Promise<void> {
  const urls: string[] = []

  for (const script of scripts) {
    console.log("🔄 音声生成中：", `${script.actor}「${script.script}」`)

    const actorInfo = getActorInfo(script.actor)
    const response = await fetchNijiVoice({
      actorId: actorInfo.id,
      script: script.script,
      speed: actorInfo.speed,
    })

    console.log("🎉 音声生成完了")
    console.log("remainingCredits:", response.generatedVoice.remainingCredits)

    urls.push(response.generatedVoice.audioFileUrl)
  }

  console.log("🔄 音声結合中...")

  await joinMp3FromUrls(urls, "output/output.mp3")
}

main()
