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

const url1 =
  "https://storage.googleapis.com/ai-voice-prod-storage/platform/f92f90d1-4bbd-4899-8c86-5ef3acd72406/voices/2025/04/21/56456854-3fd2-49fe-bf0a-dc1ad6a16f9e/uploaded-audio.mp3?GoogleAccessId=ai-voice-api-prod-sa%40algomatic-global-ai-voice.iam.gserviceaccount.com&Expires=1745334253&Signature=kEvPoAA7BgxzQ6pPotm8%2BAOMkMXxOwH%2FbsjUnrAm891%2F0QGJ0VY2NsfXxgCUA6LDU3zJN8v0wyZDgl%2F7XTF0GA54f4ltQZAL6nB3cAq6y83lL%2FljYoXDXgA0wE4M4xiZGZjs89qhv7NGdjRojZ1mWEVy5eM8ZaQaUYi2NaEZ9Xk3WtmAr0vKcg8OwsvAgX82gg2Izmzy9Wjtg3%2BEBVbcZfemT2qFIwNKaBUPWXmGQn74cAde9kfAaX%2BJW4Zwq%2F9o7gW0tyi5xyw5p8IKlBBS5MRooP26ChjSR%2FfW9OrdmCharjBIrPfhsaSp0GkFvtir5ZTbUFeW%2B6Hr%2F1eWg4UZrw%3D%3D"
const url2 =
  "https://storage.googleapis.com/ai-voice-prod-storage/platform/f92f90d1-4bbd-4899-8c86-5ef3acd72406/voices/2025/04/21/9f959194-2a87-4d89-8cb2-df30342de8b6/uploaded-audio.mp3?GoogleAccessId=ai-voice-api-prod-sa%40algomatic-global-ai-voice.iam.gserviceaccount.com&Expires=1745285004&Signature=CcT4971bcNsNYjAjcahK%2FHG2Oc22YcOY8b8klIQk1z7DX853TPZ3EpmFiftVCscJ3uUPSnVGp452xUOzGOy%2BEnInk6NtWMqo2sMsEUsrtvzfbVYqYIYHqriXYmUVYwG5UCcM5vGpwtHzfGruV%2F3bknxV%2FLyvKuTUpnNrFOrnEmBx0cMZA3mgQTurYEUaihPD3DkzlbXCmZdD6tvgZ73yty3RoKCHNL1cRgfw0c1OWTmXLQbm5z3QoSQla2F9twcAL3smg0aUJkYP52%2BtYUF%2B%2BTh8qzsUqvplx1BMwfWcN30%2FqB0dOiLO4HwkgT3AyfjT8NbLaDNlWt8lWjWV8W0LuA%3D%3D"
const url3 =
  "https://storage.googleapis.com/ai-voice-prod-storage/platform/f92f90d1-4bbd-4899-8c86-5ef3acd72406/voices/2025/04/21/c2e37747-d0d8-48ce-8bf5-d688e83e676f/uploaded-audio.mp3?GoogleAccessId=ai-voice-api-prod-sa%40algomatic-global-ai-voice.iam.gserviceaccount.com&Expires=1745285141&Signature=LG67blpieMYTAvDyg468YAkMhogKXLUkVSMypVKChCvDJM5W3P0RnuP9Se1aHLkVR4QK0PRjJz5tj6%2BAAqngK46pCO2dD425%2FfQ9oCXo3lEdEQHzMTxFxFisbOMo1NBYGPJpjLfoK8yngNchpY2HaYjP8ncANcbDCPbfVSs6h6vqOO8tsmqPswpgki3zfaVwt7y7VdlxuyzLfA7pRdiJEa0K6jU9jgle6yN5H5k71fPqikEMd0KGMdsmnF6F%2FwEk%2Ba7O82n4b%2FCmGaMRfrRDrKag2%2Fiz%2Fzvv0OBpACTAFvlmEMRUzPTqAanI3XuzY8nldWgCyCEZ%2B2mNPoB4f863ww%3D%3D"
const url4 =
  "https://storage.googleapis.com/ai-voice-prod-storage/platform/f92f90d1-4bbd-4899-8c86-5ef3acd72406/voices/2025/04/21/656c373e-0039-49df-bd7f-4ec4cb2670e6/uploaded-audio.mp3?GoogleAccessId=ai-voice-api-prod-sa%40algomatic-global-ai-voice.iam.gserviceaccount.com&Expires=1745285266&Signature=HU85p8FhXUHomdptNczhqOTyfBwxx7kfzciUCMQgVyDDUMH1hah6Lx8Ih%2Ff3YIPbGSUq7%2FraiL3wuOPNWcH0ZSmCXdnZYavR3PdpW2GhuObVDxQ87I7ZVH5DeYvmOzAjklJlPv5N1e9eV%2FVs7V17Wt2IIh%2BIS%2FOeNLrvP%2FxshjfZS%2Bfb16DNKOiuokeDu3bq4xLs8cdiemAA1O7PZJdyRY9EXydXmOiyi%2B%2BZzH%2F27EB3ssYjURWD3cKNJVp91iHa7loryXzwmkjHVf%2F991x0%2FHumMESOwvTPbtw11eoHd7kLVJlmzZ5QdskbNvK2PASSfJ3%2FPwinmY7wJRsxhfK%2B2Q%3D%3D"
const outputPath = "./output/output.mp3"

joinMp3FromUrls([url1], outputPath).catch(console.error)
