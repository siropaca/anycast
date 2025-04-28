import { joinMp3FromUrls } from "./lib/mp3/joinMp3FromUrls.js";
import { mixMp3WithBgm } from "./lib/mp3/mixMp3WithBgm.js";
import { findActor } from "./lib/nijiVoice/findActor.js";
import { generateVoice } from "./lib/nijiVoice/generateVoice.js";
import { getVoiceActors } from "./lib/nijiVoice/getVoiceActors.js";
import { generateScript } from "./lib/openai/generateScript.js";

async function main(): Promise<void> {
  console.log("🔄 声優情報取得中...");
  const voiceActors = await getVoiceActors();

  console.log("🔄 台本生成中...");
  const scripts = await generateScript("JavaScriptの歴史について");

  const urls: string[] = [];

  for (const script of scripts) {
    console.log("🔄 音声生成中：", `${script.actorName}「${script.line}」`);

    const actor = findActor(voiceActors.voiceActors, script.actorName);

    const response = await generateVoice({
      actorId: actor.id,
      script: script.line,
      speed: actor.recommendedVoiceSpeed,
    });

    console.log("🎉 音声生成完了", `(${response.generatedVoice.remainingCredits})`);

    urls.push(response.generatedVoice.audioFileUrl);
  }

  console.log("🔄 音声結合中...");

  const outputFilePath = await joinMp3FromUrls(urls, 0.7);

  await mixMp3WithBgm(outputFilePath, "bgm/bgm2.mp3", 0.3);
}

main();
