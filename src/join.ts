import ffmpeg from "fluent-ffmpeg";
import ffmpegPath from "ffmpeg-static";
import { promises as fs } from "fs";
import path from "path";
import { randomUUID } from "crypto";

ffmpeg.setFfmpegPath(ffmpegPath!);

/**
 * 指定された MP3 の URL 配列を結合して 1 つの MP3 にする
 */
export async function joinMp3FromUrls(
  urls: string[],
  outputPath: string
): Promise<void> {
  const tempDir = path.join(process.cwd(), "temp", randomUUID());
  await fs.mkdir(tempDir, { recursive: true });

  const mp3Paths: string[] = [];

  try {
    // URL からローカルに MP3 を保存
    for (let i = 0; i < urls.length; i++) {
      const res = await fetch(urls[i]);
      if (!res.ok) throw new Error(`Failed to fetch MP3 from: ${urls[i]}`);

      const buffer = await res.arrayBuffer();
      const mp3Path = path.join(tempDir, `file${i}.mp3`);
      await fs.writeFile(mp3Path, Buffer.from(buffer));
      mp3Paths.push(mp3Path);
    }

    // concat list を作成
    const concatListPath = path.join(tempDir, "concat.txt");
    const concatText = mp3Paths.map((p) => `file '${p}'`).join("\n");
    await fs.writeFile(concatListPath, concatText);

    // ffmpeg で結合
    await new Promise<void>((resolve, reject) => {
      ffmpeg()
        .input(concatListPath)
        .inputOptions("-f", "concat", "-safe", "0")
        .outputOptions("-c", "copy")
        .on("end", resolve)
        .on("error", reject)
        .save(outputPath);
    });

    console.log("🎉 結合完了:", outputPath);
  } finally {
    // 後片付け
    // await fs.rm(tempDir, { recursive: true, force: true });
  }
}

const url1 =
  "https://storage.googleapis.com/ai-voice-prod-storage/platform/f92f90d1-4bbd-4899-8c86-5ef3acd72406/voices/2025/04/20/bcf0e85a-89f4-4a52-969a-1d11bba06ff6/uploaded-audio.mp3?GoogleAccessId=ai-voice-api-prod-sa%40algomatic-global-ai-voice.iam.gserviceaccount.com&Expires=1745246964&Signature=ydfHGHrJVYPg5kw4fyo3sAXX8MJtn8QTaLhLChkY0dVDaEpQPiYTUgVxXvED7YcUeALRMDv8Js7BN9TIYZiVDpdwqGR950Ws9CxAhhLTenFNgZhLEUMp7qQziY2QAuwglECDTbpE%2Be4L%2BQbN623TUwOt3q59LMOxlJua0ZzAp9xd0U1c3AX8ZR7hhOQGewQAiFFt61ZG5gKGMDbPRBxN3uT5MVZC1silcI73pZlWEzz4%2FbALX0xaPawYUEhC1ww8JdwWPdm07sV7cKDZsqJOwS6GFpj81ktg%2FpUPGUep5b%2BKG96hhnnpQnlQBda%2Byz3vQI7Q39yrmtY2xYiBqtEfwg%3D%3D";
const url2 =
  "https://storage.googleapis.com/ai-voice-prod-storage/platform/f92f90d1-4bbd-4899-8c86-5ef3acd72406/voices/2025/04/20/a875b831-6fb9-4333-be6d-eed4fc19b42c/uploaded-audio.mp3?GoogleAccessId=ai-voice-api-prod-sa%40algomatic-global-ai-voice.iam.gserviceaccount.com&Expires=1745247047&Signature=zjEE4Fc%2FGheCJvgObw6GLgOX9ITuU84mAax332WADKIjV6tuuAbhNHcKgWQTmcA%2FIAEYVfk28YAJoT4gOEsqrP%2FrUnhXNlo9PnVA3B6379QqdVp6PElMdfItkytDt8B2RU9kHVy6FOyc2DRXBaIw57VPrnxmu0eEe8BfGh5NWPTTSfLdkSg99Zs9TV4oISVmfj%2BU4VAxAvYuzDNjJisr47JzVeigIjhucBB1AeP5H%2FuweAEE%2BQ2U9BTg%2B1NaQi86Ds1iuMOuWwzZeLmVXsjGO49Rei4BZLWB6mP%2BD66pvpI63G3thw%2B9W9ALgQxG1CbFBSiuYLnmkI5LVMgugPEJcQ%3D%3D";
const outputPath = "./joined.mp3";

joinMp3FromUrls([url1, url2], outputPath).catch(console.error);
