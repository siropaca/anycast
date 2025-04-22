import { promises as fs } from "node:fs";
import path from "node:path";
import ffmpeg from "fluent-ffmpeg";

const MIXED_OUTPUT_FILE_PATH = "output/mixed.mp3";

/**
 * メイン音声と BGM をミックスする
 *
 * @param mainAudioPath メイン音声のパス
 * @param bgmPath BGM のパス
 * @param bgmVolume BGM の音量 (0.0-1.0)
 */
export async function mixAudioWithBgm(
  mainAudioPath: string,
  bgmPath: string,
  bgmVolume = 0.2,
): Promise<void> {
  await fs.mkdir(path.dirname(MIXED_OUTPUT_FILE_PATH), { recursive: true });

  await new Promise<void>((resolve, reject) => {
    ffmpeg()
      .input(mainAudioPath)
      .input(bgmPath)
      .inputOptions("-stream_loop", "-1") // BGM をループ
      .complexFilter([
        // BGM の音量を調整
        `[1:a]volume=${bgmVolume}[bgm]`,
        // メイン音声と BGM をミックス
        "[0:a][bgm]amix=inputs=2:duration=first:dropout_transition=2[out]",
      ])
      .outputOptions("-map", "[out]")
      .on("end", () => resolve())
      .on("error", (err) => reject(err))
      .save(MIXED_OUTPUT_FILE_PATH);
  });

  console.log("🎉 ミックス完了:", MIXED_OUTPUT_FILE_PATH);
}
