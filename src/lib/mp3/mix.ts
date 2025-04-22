import ffmpeg from "fluent-ffmpeg";
import { promises as fs } from "fs";
import path from "path";

/**
 * メイン音声と BGM をミックスする
 *
 * @param mainAudioPath メイン音声のパス
 * @param bgmPath BGM のパス
 * @param outputPath 出力パス
 * @param bgmVolume BGM の音量 (0.0-1.0)
 */
export async function mixAudioWithBgm(
  mainAudioPath: string,
  bgmPath: string,
  outputPath: string,
  bgmVolume: number = 0.2
): Promise<void> {
  await fs.mkdir(path.dirname(outputPath), { recursive: true });

  await new Promise<void>((resolve, reject) => {
    ffmpeg()
      .input(mainAudioPath)
      .input(bgmPath)
      .inputOptions("-stream_loop", "-1") // BGM をループ
      .complexFilter([
        // BGM の音量を調整
        `[1:a]volume=${bgmVolume}[bgm]`,
        // メイン音声と BGM をミックス
        `[0:a][bgm]amix=inputs=2:duration=first:dropout_transition=2[out]`,
      ])
      .outputOptions("-map", "[out]")
      .on("end", () => resolve())
      .on("error", (err) => reject(err))
      .save(outputPath);
  });

  console.log("🎉 ミックス完了:", outputPath);
}
