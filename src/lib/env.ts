import { config } from "dotenv"

config()

interface EnvVar {
  nijivoiceApiKey: string
}

export const getEnvVar = (): EnvVar => {
  const vars: Partial<EnvVar> = {
    nijivoiceApiKey: process.env.NIJIVOICE_API_KEY,
  }

  for (const [key, value] of Object.entries(vars)) {
    if (!value) {
      throw new Error(`Missing environment variable: ${key}`)
    }
  }

  return vars as EnvVar
}
