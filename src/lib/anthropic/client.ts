import { Anthropic } from "@anthropic-ai/sdk";
import { getEnvVar } from "../env.js";

const { anthropicApiKey } = getEnvVar();

export const client = new Anthropic({
  apiKey: anthropicApiKey,
});
