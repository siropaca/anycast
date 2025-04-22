import { fetcher } from "../fetcher.js";
import { getEnvVar } from "../env.js";

/**
 * 声優一覧の取得
 */
export async function getVoiceActors() {
  const { nijiVoiceApiKey } = getEnvVar();

  return fetcher({
    method: "GET",
    headers: {
      "x-api-key": nijiVoiceApiKey,
    },
    url: "https://api.nijivoice.com/api/platform/v1/voice-actors",
  });
}
