import { config } from "dotenv";

config();

export interface EnvVar {
  nijiVoiceApiKey: string;
  openaiApiKey: string;
  anthropicApiKey: string;
}

export function getEnvVar(): EnvVar {
  const vars: Partial<EnvVar> = {
    nijiVoiceApiKey: process.env.NIJI_VOICE_API_KEY,
    openaiApiKey: process.env.OPENAI_API_KEY,
    anthropicApiKey: process.env.ANTHROPIC_API_KEY,
  };

  for (const [key, value] of Object.entries(vars)) {
    if (!value) {
      throw new Error(`Missing environment variable: ${key}`);
    }
  }

  return vars as EnvVar;
}
