import { FetchNijiVoiceParams, RequestBody, VoiceResponse } from "./types.js";
import { fetcher } from "../fetch.js";
import { getEnvVar } from "../env.js";

/**
 * にじボイスの API を叩く
 */
export async function fetchNijiVoice(
  params: FetchNijiVoiceParams
): Promise<VoiceResponse> {
  const { nijiVoiceApiKey } = getEnvVar();

  return fetcher<VoiceResponse>({
    method: "POST",
    apiKey: nijiVoiceApiKey,
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
function createRequestBody(params: FetchNijiVoiceParams): RequestBody {
  const body: RequestBody = {
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
