import OpenAI from "openai";
import { getEnvVar } from "../env.js";

const { openaiApiKey } = getEnvVar();

export const client = new OpenAI({
  apiKey: openaiApiKey,
  maxRetries: 2,
  timeout: 300 * 1000,
});
