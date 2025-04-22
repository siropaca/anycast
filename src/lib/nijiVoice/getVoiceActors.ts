import { fetcher } from "../fetcher.js";
import { getEnvVar } from "../env.js";
import { GetVoiceActorsResponse, VoiceActor } from "./types.js";

/**
 * 声優一覧の取得
 */
export async function getVoiceActors(): Promise<GetVoiceActorsResponse> {
  const { nijiVoiceApiKey } = getEnvVar();

  return fetcher<GetVoiceActorsResponse>({
    method: "GET",
    headers: {
      "x-api-key": nijiVoiceApiKey,
    },
    url: "https://api.nijivoice.com/api/platform/v1/voice-actors",
  });
}
