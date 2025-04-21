import { getEnvVar } from "./lib/env.js"

export function main(): void {
  const { nijivoiceApiKey } = getEnvVar()
  console.log(nijivoiceApiKey)
}

main()
