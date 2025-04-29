import { randomUUID } from "node:crypto";
import { promises as fs } from "node:fs";
import path from "node:path";
import ffmpeg from "fluent-ffmpeg";

/**
 * 指定された MP3 の URL 配列を結合して 1 つの MP3 にする
 *
 * @param urls - MP3 の URL 配列
 * @param initialSilenceDuration - 最初の空白時間（秒）
 * @param silenceDuration - 音声間の空白時間（秒）
 * @param finalSilenceDuration - 最後の空白時間（秒）
 * @returns 出力した MP3 のパス
 */
export async function joinMp3FromUrls(
  urls: string[],
  initialSilenceDuration = 0,
  silenceDuration = 0,
  finalSilenceDuration = 0
): Promise<string> {
  const JOINED_OUTPUT_FILE_PATH = "output/output.mp3";

  const tempDir = path.join(process.cwd(), "temp", randomUUID());
  await fs.mkdir(tempDir, { recursive: true });
  await fs.mkdir(path.dirname(JOINED_OUTPUT_FILE_PATH), { recursive: true });

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
        const lines: string[] = [];

        // 最初の空白
        if (i === 0 && initialSilenceDuration > 0) {
          const initialSilencePath = path.join(tempDir, "initial_silence.mp3");
          lines.push(`file '${initialSilencePath}'`);
          await createSilenceFile(
            initialSilencePath,
            initialSilenceDuration,
            mp3Paths[0]
          );
        }

        lines.push(`file '${p}'`);

        // 音声間の空白
        if (i < mp3Paths.length - 1 && silenceDuration > 0) {
          const silencePath = path.join(tempDir, `silence${i}.mp3`);
          lines.push(`file '${silencePath}'`);
          await createSilenceFile(silencePath, silenceDuration, mp3Paths[0]);
        }

        // 最後の空白
        if (i === mp3Paths.length - 1 && finalSilenceDuration > 0) {
          const finalSilencePath = path.join(tempDir, "final_silence.mp3");
          lines.push(`file '${finalSilencePath}'`);
          await createSilenceFile(
            finalSilencePath,
            finalSilenceDuration,
            mp3Paths[0]
          );
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
        .save(JOINED_OUTPUT_FILE_PATH);
    });

    return JOINED_OUTPUT_FILE_PATH;
  } catch (error) {
    console.error("Error:", error);
    throw error;
  } finally {
    await fs.rm(tempDir, { recursive: true, force: true });
  }
}

// 空白音声ファイルを生成する関数
async function createSilenceFile(
  outputPath: string,
  duration: number,
  referenceFile: string
): Promise<void> {
  return new Promise<void>((resolve, reject) => {
    ffmpeg()
      .input(referenceFile)
      .inputOptions("-t", duration.toString())
      .outputOptions("-af", "volume=0")
      .on("end", () => resolve())
      .on("error", (err) => reject(err))
      .save(outputPath);
  });
}
