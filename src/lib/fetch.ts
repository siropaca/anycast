//--------------------------------------------------------------
import { FetchNijiVoiceParams } from "./nijiVoice/types";
// Types
//--------------------------------------------------------------

interface FetcherParams {
  method: string;
  apiKey: string;
  url: string;
  body: any;
}

//--------------------------------------------------------------
// Functions
//--------------------------------------------------------------

/**
 * 共通の fetch 処理
 */
export async function fetcher<T>(params: FetcherParams): Promise<T> {
  try {
    const response = await fetch(params.url, {
      method: params.method,
      headers: {
        accept: "application/json",
        "content-type": "application/json",
        "x-api-key": params.apiKey,
      },
      body: JSON.stringify(params.body),
    });

    if (!response.ok) {
      throw new Error(`API request failed: ${response.status}`);
    }

    return response.json();
  } catch (error) {
    console.error("Error fetching:", error);
    throw error;
  }
}
