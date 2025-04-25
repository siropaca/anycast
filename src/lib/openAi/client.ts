import OpenAI from "openai";
import { getEnvVar } from "../env.js";

const { openAiApiKey } = getEnvVar();

export const client = new OpenAI({
  apiKey: openAiApiKey,
  maxRetries: 2,
  timeout: 300 * 1000,
});
