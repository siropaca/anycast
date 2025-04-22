//--------------------------------------------------------------
// Types
//--------------------------------------------------------------

interface FetcherParams {
  method: string;
  url: string;
  body?: unknown;
  headers?: Record<string, string>;
}

//--------------------------------------------------------------
// Functions
//--------------------------------------------------------------

export async function fetcher<T>(params: FetcherParams): Promise<T> {
  try {
    const response = await fetch(params.url, {
      method: params.method,
      headers: {
        accept: "application/json",
        "content-type": "application/json",
        ...params.headers,
      },
      body: params.body ? JSON.stringify(params.body) : undefined,
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
