import { joinMp3FromUrls } from "./lib/mp3/join.js";
import { mixAudioWithBgm } from "./lib/mp3/mix.js";
import { findActor } from "./lib/nijiVoice/actors.js";
import { generateVoice } from "./lib/nijiVoice/generateVoice.js";
import { getVoiceActors } from "./lib/nijiVoice/getVoiceActors.js";

const SCRIPTS: ReadonlyArray<{ actorName: string; script: string }> = [
  {
    actorName: "李 昊天",
    script:
      "こんばんは、フロントエンドカフェへようこそ。今夜も最新のフロントエンド界隈の技術をゆるっと語っていきます。まりもちゃん、今日もよろしく",
  },
  // {
  //   actorName: "苔村 まりも",
  //   script:
  //     "よろしくお願いします、はやとさん。最近、社内の勉強会でぴーだぶりゅーえーって言葉を聞いたんですけど、正直よくわからなくて…。今日はそのお話を聞いてもいいですか？",
  // },
  // {
  //   actorName: "李 昊天",
  //   script:
  //     "もちろん。ぴーだぶりゅーえー、つまり「プログレッシブウェブアプリケーション」は、簡単にいうと、ウェブアプリをネイティブアプリのようにつかえるようにする技術なんだ。最近では、スターバックスやウーバーなどの大手企業もぴーだぶりゅーえーを採用しているんだよ。",
  // },
  // {
  //   actorName: "苔村 まりも",
  //   script:
  //     "ウェブアプリがネイティブアプリみたいになるって、どういうことですか？アプリストアからダウンロードしなくてもつかえるんですか？",
  // },
  // {
  //   actorName: "李 昊天",
  //   script:
  //     "そのとおり。ぴーだぶりゅーえーは、ブラウザからアクセスするだけで、ホーム画面に追加できたり、オフラインでも動作したり、プッシュ通知を送れたりするんだ。つまり、ウェブとネイティブアプリのいいとこどりをした技術なんだよ。",
  // },
  // {
  //   actorName: "苔村 まりも",
  //   script:
  //     "すごいですね。でも、どうやってそんなことができるんですか？なにか特別な技術が必要なんですか？",
  // },
  // {
  //   actorName: "李 昊天",
  //   script:
  //     "いい質問だね。ぴーだぶりゅーえーを実現するためにはいくつかの要素が必要なんだ。たとえば、さーびすわーかーという仕組みをつかって、オフラインでも動作するようにしたり、うぇぶあっぷまにふぇすとという設定ファイルで、アプリの名前や、アイコン、起動方法などを定義したりするんだ。",
  // },
  // {
  //   actorName: "苔村 まりも",
  //   script: "なるほど…。でも、実際に開発するのはむずかしそうですね。わたしにもできるかな…。",
  // },
  // {
  //   actorName: "李 昊天",
  //   script:
  //     "最初は戸惑うかもしれないけど最近ではぴーだぶりゅーえーをかんたんに開発できるフレームワークやツールもふえてきているよ。たとえば、リアクトやびゅー、あんぎゅらーなどのフレームワークには、ぴーだぶりゅーえー対応のプラグインやテンプレートが用意されているし、ねくすとじぇーえすや、なくすとなどのフレームワークもぴーだぶりゅーえーに対応しているんだ。",
  // },
  // {
  //   actorName: "苔村 まりも",
  //   script:
  //     "そうなんですね。それなら、わたしにもできそうな気がしてきました。じっさいにぴーだぶりゅーえーを作ってみたいです。",
  // },
  // {
  //   actorName: "李 昊天",
  //   script:
  //     "その意気だね、まずは小さなアプリから始めてみるといいよ。たとえば、とぅーどぅーリストや、天気予報アプリなど、シンプルなものから始めて、徐々に機能を追加していくと、ぴーだぶりゅーえーの仕組みがよく理解できると思うよ。",
  // },
  // {
  //   actorName: "苔村 まりも",
  //   script: "ありがとうございます、はやとさん。さっそくチャレンジしてみます。",
  // },
  // {
  //   actorName: "李 昊天",
  //   script:
  //     "がんばってね！というわけで、こんやのフロントエンドカフェはここまで。次回もお楽しみに。",
  // },
];

async function main(): Promise<void> {
  console.log("🔄 声優情報取得中...");
  const voiceActors = await getVoiceActors();

  const urls: string[] = [];

  for (const script of SCRIPTS) {
    console.log("🔄 音声生成中：", `${script.actorName}「${script.script}」`);

    const actor = findActor(voiceActors.voiceActors, script.actorName);

    const response = await generateVoice({
      actorId: actor.id,
      script: script.script,
      speed: 0.8,
    });

    console.log("🎉 音声生成完了");
    console.log("remainingCredits:", response.generatedVoice.remainingCredits);

    urls.push(response.generatedVoice.audioFileUrl);
  }

  console.log("🔄 音声結合中...");

  const outputFilePath = await joinMp3FromUrls(urls, 0.7);

  await mixAudioWithBgm(outputFilePath, "bgm/bgm2.mp3", 0.3);
}

main();
