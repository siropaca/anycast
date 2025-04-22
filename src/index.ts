import { fetchNijiVoice } from "./lib/nijiVoice/fetchNijiVoice.js";
import { ActorName, getActorInfo } from "./lib/nijiVoice/actors.js";
import { joinMp3FromUrls } from "./lib/mp3/join.js";

const scripts: ReadonlyArray<{ actorName: ActorName; script: string }> = [
  {
    actorName: "新堂 慶介",
    script:
      "こんばんは、フロントエンドカフェへようこそ。今夜も最新のフロントエンド技術をゆるっと語っていきます。うみちゃん、今日もよろしく",
  },
  {
    actorName: "金城 夏海",
    script:
      "よろしくお願いします、けいすけさん！最近、社内の勉強会で「ピーダブリュエー」って言葉を聞いたんですけど、正直よく分からなくて…。今日はそのお話、聞いてもいいですか？",
  },
];

async function main(): Promise<void> {
  const urls: string[] = [];

  for (const script of scripts) {
    console.log("🔄 音声生成中：", `${script.actorName}「${script.script}」`);

    const actorInfo = getActorInfo(script.actorName);
    const response = await fetchNijiVoice({
      actorId: actorInfo.id,
      script: script.script,
      speed: actorInfo.speed,
    });

    console.log("🎉 音声生成完了");
    console.log("remainingCredits:", response.generatedVoice.remainingCredits);

    urls.push(response.generatedVoice.audioFileUrl);
  }

  console.log("🔄 音声結合中...");

  await joinMp3FromUrls(urls, "output/output.mp3");
}

main();
