import {
  FetchNijiVoiceParams,
  FetchNijiVoiceRequestBody,
  FetchNijiVoiceResponse,
} from "./types.js";
import { fetcher } from "../fetcher.js";
import { getEnvVar } from "../env.js";

/**
 * にじボイスの API を叩く
 */
export async function fetchNijiVoice(
  params: FetchNijiVoiceParams
): Promise<FetchNijiVoiceResponse> {
  const { nijiVoiceApiKey } = getEnvVar();

  return fetcher<FetchNijiVoiceResponse>({
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
function createRequestBody(
  params: FetchNijiVoiceParams
): FetchNijiVoiceRequestBody {
  const body: FetchNijiVoiceRequestBody = {
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
