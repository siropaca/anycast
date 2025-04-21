import { getEnvVar } from "./lib/env.js"

const { apiKey } = getEnvVar()

export function hello(): void {
  console.log(apiKey)
}

hello()
