import ffmpeg from "fluent-ffmpeg"
import { promises as fs } from "fs"
import path from "path"
import { randomUUID } from "crypto"

/**
 * 指定された MP3 の URL 配列を結合して 1 つの MP3 にする
 */
export async function joinMp3FromUrls(urls: string[], outputPath: string): Promise<void> {
  const tempDir = path.join(process.cwd(), "temp", randomUUID())
  await fs.mkdir(tempDir, { recursive: true })
  await fs.mkdir(path.dirname(outputPath), { recursive: true })

  const mp3Paths: string[] = []

  try {
    // URL からローカルに MP3 を保存
    for (let i = 0; i < urls.length; i++) {
      const res = await fetch(urls[i])
      if (!res.ok) {
        throw new Error(`Failed to fetch MP3 from: ${urls[i]}`)
      }

      const buffer = await res.arrayBuffer()
      const mp3Path = path.join(tempDir, `file${i}.mp3`)
      await fs.writeFile(mp3Path, Buffer.from(buffer))
      mp3Paths.push(mp3Path)
    }

    // concat list を作成
    const concatListPath = path.join(tempDir, "concat.txt")
    const concatText = mp3Paths.map((p) => `file '${p}'`).join("\n")
    await fs.writeFile(concatListPath, concatText)

    // ffmpeg で結合
    await new Promise<void>((resolve, reject) => {
      ffmpeg()
        .input(concatListPath)
        .inputOptions("-f", "concat", "-safe", "0")
        .outputOptions("-c", "copy")
        .on("end", resolve)
        .on("error", reject)
        .save(outputPath)
    })

    console.log("🎉 結合完了:", outputPath)
  } finally {
    // 後片付け
    await fs.rm(tempDir, { recursive: true, force: true })
  }
}
