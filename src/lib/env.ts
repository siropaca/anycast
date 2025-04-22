import { config } from "dotenv"

config()

//--------------------------------------------------------------
// Types
//--------------------------------------------------------------

interface EnvVar {
  nijiVoiceApiKey: string
}

//--------------------------------------------------------------
// Functions
//--------------------------------------------------------------

export function getEnvVar(): EnvVar {
  const vars: Partial<EnvVar> = {
    nijiVoiceApiKey: process.env.NIJI_VOICE_API_KEY,
  }

  for (const [key, value] of Object.entries(vars)) {
    if (!value) {
      throw new Error(`Missing environment variable: ${key}`)
    }
  }

  return vars as EnvVar
}
