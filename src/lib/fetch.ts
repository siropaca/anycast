interface FetchOptions {
  method: string
  apiKey: string
  url: string
  body: any
}

/**
 * 共通の fetch 処理
 */
export async function fetchWithApiKey<T>(options: FetchOptions): Promise<T> {
  try {
    const response = await fetch(options.url, {
      method: options.method,
      headers: {
        accept: "application/json",
        "content-type": "application/json",
        "x-api-key": options.apiKey,
      },
      body: JSON.stringify(options.body),
    })

    if (!response.ok) {
      throw new Error(`API request failed: ${response.status}`)
    }

    return response.json()
  } catch (error) {
    console.error("Error fetching:", error)
    throw error
  }
}
