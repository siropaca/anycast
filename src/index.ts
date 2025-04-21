import { getEnvVar } from "./lib/env.js"

const { nijivoiceApiKey } = getEnvVar()

export function hello(): void {
  console.log(nijivoiceApiKey)
}

hello()
