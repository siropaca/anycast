import { getEnvVar } from "../env.js";
import { fetcher } from "../fetcher.js";
import type {
  GenerateVoiceParams,
  GenerateVoiceRequestBody,
  GenerateVoiceResponse,
} from "./types.js";

/**
 * 音声の生成
 */
export async function generateVoice(params: GenerateVoiceParams): Promise<GenerateVoiceResponse> {
  const { nijiVoiceApiKey } = getEnvVar();

  return fetcher<GenerateVoiceResponse>({
    method: "POST",
    headers: {
      "x-api-key": nijiVoiceApiKey,
    },
    url: createRequestUrl(params.actorId),
    body: createRequestBody(params),
  });
}

/**
 * リクエストURLを作成する
 */
function createRequestUrl(actorId: string): string {
  return `https://api.nijivoice.com/api/platform/v1/voice-actors/${actorId}/generate-voice`;
}

/**
 * リクエストボディを作成する
 */
function createRequestBody(params: GenerateVoiceParams): GenerateVoiceRequestBody {
  const body: GenerateVoiceRequestBody = {
    format: "mp3",
    script: params.script,
    speed: String(params.speed),
  };

  if (params.emotionalLevel) {
    body.emotionalLevel = String(params.emotionalLevel);
  }

  if (params.soundDuration) {
    body.soundDuration = String(params.soundDuration);
  }

  return body;
}
