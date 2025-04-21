import { getEnvVar } from "../env.js"
import { VoiceParams, RequestBody, VoiceResponse } from "./types.js"

/**
 * にじボイスの API を叩く
 */
export async function fetchNijiVoice(params: VoiceParams): Promise<VoiceResponse> {
  const { nijiVoiceApiKey } = getEnvVar()

  const url = createRequestUrl(params.actorId)

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        accept: "application/json",
        "content-type": "application/json",
        "x-api-key": nijiVoiceApiKey,
      },
      body: JSON.stringify(createRequestBody(params)),
    })

    if (!response.ok) {
      throw new Error(`API request failed: ${response.status}`)
    }

    return response.json()
  } catch (error) {
    console.error("Error fetching voice:", error)
    throw error
  }
}

/**
 * リクエストURLを作成する
 */
function createRequestUrl(actorId: string): string {
  return `https://api.nijivoice.com/api/platform/v1/voice-actors/${actorId}/generate-voice`
}

/**
 * リクエストボディを作成する
 */
function createRequestBody(params: VoiceParams): RequestBody {
  const body: RequestBody = {
    format: "mp3",
    script: params.word,
    speed: String(params.speed),
  }

  if (params.emotionalLevel) {
    body.emotionalLevel = String(params.emotionalLevel)
  }

  if (params.soundDuration) {
    body.soundDuration = String(params.soundDuration)
  }

  return body
}
