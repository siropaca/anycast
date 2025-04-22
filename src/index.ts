import { fetchNijiVoice } from "./lib/nijiVoice/fetchNijiVoice.js"
import { ActorName, getActorInfo } from "./lib/nijiVoice/actors.js"
import { joinMp3FromUrls } from "./lib/mp3/join.js"
import { mixAudioWithBgm } from "./lib/mp3/mix.js"

const scripts: ReadonlyArray<{ actorName: ActorName; script: string }> = [
  {
    actorName: "新堂 慶介",
    script:
      "こんばんは、フロントエンドカフェへようこそ。今夜も最新のフロントエンド界隈の技術をゆるっと語っていきます。まりもちゃん、今日もよろしく",
  },
  {
    actorName: "苔村 まりも",
    script:
      "よろしくお願いします、けいすけさん！最近、社内の勉強会でぴーだぶりゅーえーって言葉を聞いたんですけど、正直よくわからなくて…。今日はそのお話を聞いてもいいですか？",
  },
  // {
  //   actorName: "新堂 慶介",
  //   script:
  //     "もちろん、ぴーだぶりゅーえー、つまりぷろぐれっしぶうぇぶあぷりけーしょんは、簡単にいうと、ウェブアプリをネイティブアプリのようにつかえるようにする技術なんだ。最近では、スターバックスやウーバーなどの大手企業もぴーだぶりゅーえーを採用しているんだよ。",
  // },
  // {
  //   actorName: "苔村 まりも",
  //   script:
  //     "ウェブアプリがネイティブアプリみたいになるって、どういうことですか？アプリストアからダウンロードしなくてもつかえるんですか？",
  // },
  // {
  //   actorName: "新堂 慶介",
  //   script:
  //     "そのとおり、ぴーだぶりゅーえーは、ブラウザからアクセスするだけで、ホーム画面に追加できたり、オフラインでも動作したり、プッシュ通知を送れたりするんだ。つまり、ウェブとネイティブアプリのいいとこどりをした技術なんだよ。",
  // },
  // {
  //   actorName: "苔村 まりも",
  //   script:
  //     "すごいですね！でも、どうやってそんなことができるんですか？なにか特別な技術が必要なんですか？",
  // },
  // {
  //   actorName: "新堂 慶介",
  //   script:
  //     "いい質問だね。ぴーだぶりゅーえーを実現するためにはいくつかの要素が必要なんだ。たとえば、さーびすわーかーという仕組みをつかって、オフラインでも動作するようにしたり、うぇぶあっぷまにふぇすとという設定ファイルで、アプリの名前や、アイコン、起動方法などを定義したりするんだ。",
  // },
  // {
  //   actorName: "苔村 まりも",
  //   script:
  //     "なるほど…。でも、実際に開発するのはむずかしそうですね。わたしにもできるかな…。",
  // },
  // {
  //   actorName: "新堂 慶介",
  //   script:
  //     "最初は戸惑うかもしれないけど最近ではぴーだぶりゅーえーをかんたんに開発できるフレームワークやツールもふえてきているよ。たとえば、リアクトやびゅー、あんぎゅらーなどのフレームワークには、ぴーだぶりゅーえー対応のプラグインやテンプレートが用意されているし、ねくすとじぇーえすや、なくすとなどのフレームワークもぴーだぶりゅーえーに対応しているんだ。",
  // },
  // {
  //   actorName: "苔村 まりも",
  //   script:
  //     "そうなんですね！それなら、わたしにもできそうな気がしてきました。じっさいにぴーだぶりゅーえーを作ってみたいです！",
  // },
  // {
  //   actorName: "新堂 慶介",
  //   script:
  //     "その意気だね、まずは小さなアプリから始めてみるといいよ。たとえば、とぅーどぅーリストや天気予報アプリなど、シンプルなものから始めて、徐々に機能を追加していくと、ぴーだぶりゅーえーの仕組みがよく理解できると思うよ。",
  // },
  // {
  //   actorName: "苔村 まりも",
  //   script:
  //     "ありがとうございます、けいすけさん！さっそくチャレンジしてみます！",
  // },
  // {
  //   actorName: "新堂 慶介",
  //   script:
  //     "がんばってね！というわけで、こんやのフロントエンドカフェはここまで。次回もお楽しみに",
  // },
]

async function main(): Promise<void> {
  const urls: string[] = []

  for (const script of scripts) {
    console.log("🔄 音声生成中：", `${script.actorName}「${script.script}」`)

    const actorInfo = getActorInfo(script.actorName)
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

  await joinMp3FromUrls(urls, "output/output.mp3", 0.5)

  await mixAudioWithBgm("output/output.mp3", "bgm/bgm1.mp3", "output/mixed.mp3", 0.1)
}

main()
