import ffmpeg from "fluent-ffmpeg";
import { promises as fs } from "fs";
import path from "path";
import { randomUUID } from "crypto";

/**
 * 指定された MP3 の URL 配列を結合して 1 つの MP3 にする
 *
 * @param urls - MP3 の URL 配列
 * @param outputPath - 出力する MP3 のパス
 * @param silenceDuration - 音声間の空白時間（秒）
 */
export async function joinMp3FromUrls(
  urls: string[],
  outputPath: string,
  silenceDuration: number = 0
): Promise<void> {
  const tempDir = path.join(process.cwd(), "temp", randomUUID());
  await fs.mkdir(tempDir, { recursive: true });
  await fs.mkdir(path.dirname(outputPath), { recursive: true });

  const mp3Paths: string[] = [];

  try {
    for (let i = 0; i < urls.length; i++) {
      const res = await fetch(urls[i]);

      if (!res.ok) {
        throw new Error(`Failed to fetch MP3 from: ${urls[i]}`);
      }

      const buffer = await res.arrayBuffer();
      const mp3Path = path.join(tempDir, `file${i}.mp3`);
      await fs.writeFile(mp3Path, Buffer.from(buffer));
      mp3Paths.push(mp3Path);
    }

    const concatListPath = path.join(tempDir, "concat.txt");
    const concatLines = await Promise.all(
      mp3Paths.map(async (p, i) => {
        const lines = [`file '${p}'`];
        if (i < mp3Paths.length - 1 && silenceDuration > 0) {
          const silencePath = path.join(tempDir, `silence${i}.mp3`);
          lines.push(`file '${silencePath}'`);

          // 空白音声ファイルを生成
          await new Promise<void>((resolve, reject) => {
            ffmpeg()
              .input(mp3Paths[0]) // 既存のMP3ファイルを使用
              .inputOptions("-t", silenceDuration.toString())
              .outputOptions("-af", "volume=0")
              .on("end", () => resolve())
              .on("error", (err) => reject(err))
              .save(silencePath);
          });
        }
        return lines.join("\n");
      })
    );

    const concatText = concatLines.join("\n");
    await fs.writeFile(concatListPath, concatText);

    await new Promise<void>((resolve, reject) => {
      ffmpeg()
        .input(concatListPath)
        .inputOptions("-f", "concat", "-safe", "0")
        .outputOptions("-c", "copy")
        .on("end", () => resolve())
        .on("error", (err) => reject(err))
        .save(outputPath);
    });

    console.log("🎉 結合完了:", outputPath);
  } catch (error) {
    console.error("🚨 結合エラー:", error);
    throw error;
  } finally {
    await fs.rm(tempDir, { recursive: true, force: true });
  }
}
