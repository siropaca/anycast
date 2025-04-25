import OpenAI from "openai";
import { getEnvVar } from "../env.js";

const { openAiApiKey } = getEnvVar();

const client = new OpenAI({
  apiKey: openAiApiKey,
  maxRetries: 2,
  timeout: 300 * 1000,
});

/**
 * ChatGPT API を呼び出す
 */
export async function callChatGpt(): Promise<void> {
  try {
    const response = await client.responses.create({
      model: "gpt-4o",
      instructions: "You are a coding assistant that talks like a pirate",
      input: "Are semicolons optional in JavaScript?",
    });

    console.log(response.output_text);
  } catch (error) {
    console.error("エラー:", error);
  }
}

callChatGpt();
